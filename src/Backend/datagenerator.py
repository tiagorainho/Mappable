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
                40.639299,
                -8.650949
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
                    40.6419924,
                    -8.6557991
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

    url = 'http://localhost:1026/v2/entities'

    response = requests.post(url, json=museum, headers={'content-type':'application/json'})
    print(response.status_code)

    response = requests.post(url, json=praca, headers={'content-type':'application/json'})
    print(response.status_code)
    
