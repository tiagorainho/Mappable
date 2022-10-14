import json, requests, time
from threading import Thread
from random import randrange
import copy

DATA_FOLDER = '../data'
url = 'http://localhost:1026/v2/entities'

def worker(coords, url_patch, bus):
    current = randrange(0, len(lines))
    while True:
        #change location
        location = bus["location"]
        location["value"]["coordinates"] = coords[current]
        toSend = {"location" : location}
        response = requests.patch(url_patch, json=toSend, headers={'content-type':'application/json'})
        if current + 1 < len(coords):
            current += 1
        else:
            current = 0
        time.sleep(0.5)

if __name__=="__main__":
    
    bus = json.load(open(f'{DATA_FOLDER}/vehicle.json'))

    f = open(f"{DATA_FOLDER}/aveiroRoads.csv", "r")
    f.readline()
    lines = f.readlines()
    
    coords = []
    threads = []
    for line in lines:
        lat, lg = line.split(",")
        coords.append([float(lg), float(lat)])
    
    for i in range(30):
        bus['id'] += str(i)
        url_patch = f"http://localhost:1026/v2/entities/{bus['id']}/attrs"
        response = requests.post(url, json=bus, headers={'content-type':'application/json'})
        print(response.status_code)
        threads.append(Thread(target=worker,args=(coords,url_patch, copy.deepcopy(bus))))
        threads[i].start()
        bus['id'] = bus['id'][:-1]
        
    for i in range(30):
        threads[i].join()
    



    
    

    
