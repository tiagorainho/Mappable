import json, requests

url = "http://localhost:1026/v2/entities"

def get_bytype(type):
    resp = requests.get(url, params={"type":type})
    json = resp.json()
    return json

def get_by_location(location):
    parameters = {
        "georel":"near;maxDistance:1000",
        "geometry":"point",
        "coords": location

    }
    resp = requests.get(url, params=parameters)
    print(resp.url)
    json = resp.json()
    return json

if __name__=="__main__":

    # GET BY TYPE
    # get museums
    json = get_bytype('Museum')
    print(json)

    print("\n\n")
    # get points of interest
    json = get_bytype('PointOfInterest')
    print(json)

    # GET BY LOCATION
    print("\n\n")
    json = get_by_location("40.641481,-8.653501")
    print(json)

