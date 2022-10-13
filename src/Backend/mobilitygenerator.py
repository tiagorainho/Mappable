import json, requests

if __name__=="__main__":
    
    bus = json.load(open('vehicle.json'))
    url_patch  = f"http://localhost:1026/v2/entities/{bus['id']}/attrs"

    f = open("roads.csv", "r")
    f.readline()
    lines = f.readlines()
    print("simulating movement")
    while True:
        for line in lines:
            lat, lg = line.split(",")
            #change location
            location = bus["location"]
            location["value"]["coordinates"] = [float(lat), float(lg)]
            toSend = {"location" : location}
            response = requests.patch(url_patch, json=toSend, headers={'content-type':'application/json'})


    
    

    
