
from collections import defaultdict
from statistics import median
from typing import DefaultDict, Dict, List, Set, Tuple

import pandas as pd
import numpy as np
from sklearn.cluster import DBSCAN
from .rules import ZoomRules

from .user_service import ROLES
from .broker_service import get_objects

KMS_PER_RADIAN = 6371.0088
EPSILON = 1.5 / KMS_PER_RADIAN
DEFAULT_ZOOM = 20

def get_clusters_from_coordinates(coordinates: List[Tuple[float]]) -> List[List[Tuple[float]]]:
    coords = np.array(coordinates)
    db = DBSCAN(eps=EPSILON, min_samples=1, algorithm='ball_tree', metric='haversine').fit(np.radians(coords))
    cluster_labels = db.labels_
    num_clusters = len(set(cluster_labels))
    clusters = pd.Series([coords[cluster_labels == n] for n in range(num_clusters)])
    return [coordinates.tolist() for coordinates in clusters]

def get_entities(arguments: Dict[str, str], zoomRules: ZoomRules = ZoomRules(), zoom: int = DEFAULT_ZOOM) -> Dict[str, any]:

    # get all requested objects
    objects: List[any] = get_objects(arguments)

    # divide objets with type as key
    type_to_objects: DefaultDict[str, List[any]] = defaultdict(list)
    for obj in objects: 
        type_to_objects[obj["type"]].append(obj)

    # get all types
    object_types: Set[str] = type_to_objects.keys()

    # remove restricted types
    types_to_remove: Set[str] = zoomRules.get_restricted_types(types=object_types, zoom=zoom)
    for type_to_remove in types_to_remove: del type_to_objects[type_to_remove]
    
    # select prefered types to cluster
    types_to_cluster: Set[str] = zoomRules.get_clustered_types(types=set(object_types), zoom=zoom)
    
    # cluster required types
    clusters_coordinates: List[List[Tuple[float]]] = list()
    for type_of_object in types_to_cluster:
        coordinates = [obj["location"]["value"]["coordinates"] for obj in type_to_objects[type_of_object]]
        cluster = get_clusters_from_coordinates(coordinates=coordinates)
        clusters_coordinates.append(cluster)

    coordinates_to_object: Dict[Tuple[float], any] = {tuple(obj["location"]["value"]["coordinates"]): obj for obj in objects}

    # convert from clusters with coordinates to cluster with objects
    clusters: List[any] = [{"objects": [coordinates_to_object[tuple(coordinate)] for coordinates in cluster for coordinate in coordinates]} for cluster in clusters_coordinates]

    for idx, cluster in enumerate(clusters_coordinates):
        for coordinates in cluster:

            # remove objects in cluster from the main objects
            for coordinate in coordinates:
                objects.remove(coordinates_to_object[tuple(coordinate)])
            
            # add center of the cluster
            cluster_center = median(coordinates)
            clusters[idx]["center"] = cluster_center
            

    return {
        'objects': objects,
        'clusters': clusters
    }

if __name__ == '__main__':
    entities = get_entities({}, ROLES["normal"], zoom=10)
    print(entities)
