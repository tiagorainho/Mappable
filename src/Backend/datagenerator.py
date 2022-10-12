import json, requests

if __name__=="__main__":

    # Opening JSON files
    museum = json.load(open('museum.json'))
    praca = json.load(open('pointOfInterest.json'))
    bus = json.load(open('vehicle.json'))
    # parkingGroup = json.load(open('parkingGroup.json'))
    parkingSpots = json.load(open('parkingSpots.json'))

    busStops = json.load(open('bus_stations.json'))

    url = 'http://localhost:1026/v2/entities'

    response = requests.post(url, json=museum, headers={'content-type':'application/json'})
    print(response.status_code)

    response = requests.post(url, json=praca, headers={'content-type':'application/json'})
    print(response.status_code)

    response = requests.post(url, json=bus, headers={'content-type':'application/json'})
    print(response.status_code)

    # response = requests.post(url, json=parkingGroup, headers={'content-type':'application/json'})
    # print(response.status_code)

    for ps in parkingSpots:
        response = requests.post(url, json=ps, headers={'content-type':'application/json'})
        print(response.status_code)

    for ps in busStops:
        response = requests.post(url, json=ps, headers={'content-type':'application/json'})
        print(response.status_code)
    
