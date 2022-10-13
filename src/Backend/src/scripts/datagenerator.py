import json, requests

DATA_FOLDER = '../data'
url = 'http://localhost:1026/v2/entities'

if __name__=="__main__":

    # Opening JSON files
    museum = json.load(open(f'{DATA_FOLDER}/museum.json'))
    praca = json.load(open(f'{DATA_FOLDER}/pointOfInterest.json'))
    
    # parkingGroup = json.load(open(f'{DATA_FOLDER}/parkingGroup.json'))
    parkingSpots = json.load(open(f'{DATA_FOLDER}/parkingSpots.json'))

    busStops = json.load(open(f'{DATA_FOLDER}/bus_stations.json')) 

    url = 'http://localhost:1026/v2/entities'
       

    response = requests.post(url, json=museum, headers={'content-type':'application/json'})
    print(response.status_code)

    response = requests.post(url, json=praca, headers={'content-type':'application/json'})
    print(response.status_code)

    # response = requests.post(url, json=parkingGroup, headers={'content-type':'application/json'})
    # print(response.status_code)

    for ps in parkingSpots:
        response = requests.post(url, json=ps, headers={'content-type':'application/json'})
        print(response.status_code)

    for ps in busStops:
        response = requests.post(url, json=ps, headers={'content-type':'application/json'})
        print(response.status_code)
    
