import json, requests, time

DATA_FOLDER = '../data'

if __name__=="__main__":
    
    bus = json.load(open(f'{DATA_FOLDER}/vehicle.json'))
    url_patch  = f"http://localhost:1026/v2/entities/{bus['id']}/attrs"

    f = open(f"{DATA_FOLDER}/roads.csv", "r")
    f.readline()
    lines = f.readlines()
    print("simulating movement")
    while True:
        for line in lines:
            lat, lg = line.split(",")
            #change location
            location = bus["location"]
            location["value"]["coordinates"] = [float(lg), float(lat)]
            toSend = {"location" : location}
            response = requests.patch(url_patch, json=toSend, headers={'content-type':'application/json'})
            time.sleep(0.5)


    
    

    
