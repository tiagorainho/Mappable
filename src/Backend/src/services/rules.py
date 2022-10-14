
from typing import DefaultDict, Set

DEFAULT_OBJECT_ZOOM = 15

class ZoomRules:
    preference: DefaultDict[int, Set[str]] # to be maintained as an object instead of cluster
    restrict: DefaultDict[int, Set[str]]

    def __init__(self, preference = dict(), restrict = dict()):
        self.preference = {zoom: set(types) for zoom, types in preference.items()}
        self.restrict = {zoom: set(types) for zoom, types in restrict.items()}
    
    def get_restricted_types(self, types: Set[str], zoom: int) -> Set[str]:
        types_to_remove: Set[str] = set()
        for type_of_object in types:
            for rule_zoom_threshold, rule_type_of_object in self.restrict.items():
                if type_of_object not in rule_type_of_object: continue
                print(type_of_object)
                # remove types of objects that are equal or greater in the zoomRule
                if zoom <= rule_zoom_threshold:
                    types_to_remove.add(type_of_object)
                    break
        return types_to_remove
    
    def get_clustered_types(self, types: Set[str], zoom: int) -> Set[str]:
        types_to_cluster: Set[str] = set(types)
        for type_of_object in types:
            is_in_preferences = False
            for rule_zoom_threshold, rule_type_of_object in self.preference.items():
                if type_of_object not in rule_type_of_object: continue
                is_in_preferences = True

                # add types of objects that are equal or lower in the zoomRule to the objects to cluster
                if zoom >= rule_zoom_threshold:
                    types_to_cluster.remove(type_of_object)
                    break
            # verify default value with
            if type_of_object in types_to_cluster and not is_in_preferences and zoom >= DEFAULT_OBJECT_ZOOM:
                types_to_cluster.remove(type_of_object)
        return types_to_cluster