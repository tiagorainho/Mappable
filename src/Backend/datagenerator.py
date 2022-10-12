import json, requests

if __name__=="__main__":

    museum = {
        "id": "Museum-Santa-Joana",
        "type": "Museum",
        "address": {
            "type": "PostalAddress",
            "value": {
            "addressCountry": "PT",
            "addressLocality": "Aveiro",
            "streetAddress": "Av. Santa Joana, 3810-164 Aveiro"
            }
        },
        "alternateName": {
            "value": "MSJ"
        },
        "artPeriod": {
            "value": [
            "contemporary"
            ]
        },
        "description": {
            "value": "Museu de arte sacra num convento do séc. XV com uma igreja barroca e o túmulo da Princesa Santa Joana."
        },
        "facilities": {
            "value": [
            "shop",
            "cloakRoom",
            "guidedTour"
            ]
        },
        "location": {
            "type": "geo:json",
            "value": {
            "type": "Point",
            "coordinates": [
                -8.65110844373703,
                40.63950059991235
            ]
            }
        },
        "museumType": {
            "value": [
            "fineArts"
            ]
        },
        "name": {
            "value": "Museu de Santa Joana"
        },
        "openingHoursSpecification": {
            "value": [
            {
                "dayOfWeek": "Monday",
                "closes": "19:30:00",
                "opens": "11:00:00"
            },
            {
                "dayOfWeek": "Tuesday",
                "closes": "19:30:00",
                "opens": "11:00:00"
            },
            {
                "dayOfWeek": "Wednesday",
                "closes": "19:30:00",
                "opens": "11:00:00"
            },
            {
                "dayOfWeek": "Thurday",
                "closes": "19:30:00",
                "opens": "11:00:00"
            },
            {
                "dayOfWeek": "Friday",
                "closes": "19:30:00",
                "opens": "11:00:00"
            },
            {
                "dayOfWeek": "Saturday",
                "closes": "21:00:00",
                "opens": "10:00:00"
            },
            {
                "dayOfWeek": "Sunday",
                "closes": "15:00:00",
                "opens": "10:00:00"
            }
            ]
        },
        "source": {
            "value": "http://www.patrimoniocultural.pt/pt/museus-e-monumentos/rede-portuguesa/m/museu-de-aveiro/"
        },
        "touristArea": {
            "value": "Aveiro"
        }
    }

    praca = {
        "id": "PracaPeixe",
        "type": "PointOfInterest",
        "category": {
            "type": "array",
            "value": [
                "113"
            ]
        },
        "description": {
            "type": "Text",
            "value": "La Playa de A Concha se presenta como una continuaciin de la Playa de Compostela, una de las mis frecuentadas de Vilagarcia."
        },
        "refSeeAlso": {
            "type": "array",
            "value": [
                "Museum-Santa-Joana"
            ]
        },
        "source": {
            "type": "Text",
            "value": "https://www.google.pt/maps/"
        },
        "location": {
            "type": "geo:json",
            "value": {
                "type": "Point",
                "coordinates": [
                    -8.655306100845337,
                    40.64247871616763
                ]
            }
        },
        "address": {
            "type": "PostalAddress",
            "value": {
                "addressCountry": "PT",
                "addressLocality": "Aveiro"
            }
        },
        "name": {
            "type": "Text",
            "value": "Praça do Peixe"
        },
        "wardId": {
            "type": "Text",
            "value": ""
        },
        "zoneId": {
            "type": "Text",
            "value": ""
        },
        "zoneName": {
            "type": "Text",
            "value": ""
        }
    }

    bus = {
        "id": "vehicle:AveiroBus:1",
        "type": "Vehicle",
        "category": {
            "type": "array",
            "value": [
            "municipalServices"
            ]
        },
        "vehicleType": {
            "type": "Text",
            "value": "bus"
        },
        "name": {
            "type": "Text",
            "value": "AveiroBus linha 1"
        },
        "vehiclePlateIdentifier": {
            "type": "Text",
            "value": "3456ABC"
        },
        "refVehicleModel": {
            "type": "Relationship",
            "value": "vehiclemodel:econic"
        },
        "location": {
            "type": "geo:json",
            "value": {
            "type": "Point",
            "coordinates": [
                -8.650799989700317,
                40.638788233944155
            ]
            },
            "metadata": {
            "timestamp": {
                "type": "DateTime",
                "value": "2022-10-12T15:44:00"
            }
            }
        },
        "areaServed": {
            "type": "Text",
            "value": "Centro"
        },
        "serviceStatus": {
            "type": "Text",
            "value": "onRoute"
        },
        "cargoWeight": {
            "type": "Number",
            "value": 314
        },
        "speed": {
            "type": "Number",
            "value": 50,
            "metadata": {
            "timestamp": {
                "type": "DateTime",
                "value": "2022-10-12T15:44:00"
            }
            }
        },
        "serviceProvided": {
            "type": "array",
            "value": [
            "publicTransportation"
            ]
        },
        "bearing": {
            "type": "Number",
            "value": 43
        },
        "fuelEfficiency": {
            "type": "Number",
            "value": 13
        },
        "fuelType": {
            "type": "Text",
            "value": "Petrol"
        },
        "fuelFilled": {
            "type": "Number",
            "value": 6
        },
        "tripNetWeightCollected": {
            "type": "Number",
            "value": 12
        },
        "vehicleTrackerDevice": {
            "type": "Text",
            "value": "Installed"
        },
        "wardId": {
            "type": "Text",
            "value": "4"
        },
        "license_plate": {
            "type": "Text",
            "value": "KA052134"
        },
        "currentTripCount": {
            "type": "Number",
            "value": 1
        },
        "reportId": {
            "type": "Text",
            "value": "21645"
        },
        "zoneName": {
            "type": "Text",
            "value": "Center"
        },
        "vehicleAltitude": {
            "type": "Number",
            "value": 60
        },
        "deviceSimNumber": {
            "type": "Text",
            "value": "9942142573"
        },
        "wardName": {
            "type": "Text",
            "value": "Kempegowda Ward"
        },
        "deviceBatteryStatus": {
            "type": "Text",
            "value": "Connected"
        },
        "ignitionStatus": {
            "type": "Boolean",
            "value": True
        },
        "vehicleRunningStatus": {
            "type": "Text",
            "value": "running"
        },
        "observationDateTime": {
            "type": "DateTime",
            "value": "2022-10-22T15:47:02+05:30"
        },
        "serviceOnDuty": {
            "type": "Boolean",
            "value": True
        },
        "municipalityInfo": {
            "type": "StructuredValue",
            "value": {
            "district": "Aveiro",
            "ulbName": "Av",
            "cityId": "23",
            "wardId": "23",
            "stateName": "Aveiro",
            "cityName": "Aveiro",
            "zoneName": "Centro",
            "wardName": "Aveiro Centro",
            "zoneId": "2",
            "wardNum": 4
            }
        }
    }

    url = 'http://localhost:1026/v2/entities'

    response = requests.post(url, json=museum, headers={'content-type':'application/json'})
    print(response.status_code)

    response = requests.post(url, json=praca, headers={'content-type':'application/json'})
    print(response.status_code)

    response = requests.post(url, json=bus, headers={'content-type':'application/json'})
    print(response.status_code)
    
