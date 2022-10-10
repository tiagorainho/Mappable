beach - https://github.com/smart-data-models/dataModel.PointOfInterest/blob/master/Beach/doc/spec.md

example: 

```javascript
{ 
  "id": "Beach-Barra-1",  
  "type": "Beach",  
  "name": {  
    "value": "Praia da barra"  
  }, 
  "description": {  
    "value": "a praia...."  
  },   
  "address": {  
    "type": "PostalAddress",  
    "value": {  
      "addressCountry": "PT",  
      "addressLocality": "Aveiro"  
    }  
  },  
  "beachType": {  
    "value": ["whiteSand", "urban"]  
  },  
  "occupationRate": {  
    "value": "high"  
  },  
  "facilities": {  
    "value": ["promenade", "showers", "cleaningServices", "lifeGuard"]  
  },  
  "accessType": {"value":["privateVehicle", "onFoot", "publicTransport"]},  
  "location": {  
    "type": "geo:json",  
    "value": {  
      "type": "Point",  
      "coordinates": [-8.7697987, 40.6262383]  
    }  
  },
  "width": {  
    "value": 51  
  },   
  "length": {  
    "value": 450  
  },  
  "source": {  
    "value": ""  
  }
}  
```



store - https://github.com/smart-data-models/dataModel.PointOfInterest/blob/master/Store/doc/spec.md
macdonnalds deve ser um restaurante :) 
```javascript
{
  "id": "urn:ngsi-ld:Store:MacDonnalds:1",
  "type": "Store",
  "source": {
    "type": "Text",
    "value": ""
  },
  "dataProvider": {
    "type": "Text",
    "value": ""
  },
  "location": {
    "type": "GeoProperty",
    "value": {
      "type": "Point",
      "coordinates": [
        -8.8271891,
        40.4260462
      ]
    }
  },
  "name": {
    "type": "Text",
    "value": "MACDONNALDS"
  },
  "description": {
    "type": "Text",
    "value": "Fast food restaurant"
  },
  "image": {
    "type": "Text",
    "value": "https://www.mcdonalds.pt/media/3650/logotipo-mcdonalds-portugal.png?mode=pad"
  },
  "currenciesAccepted": {
    "type": "StructuredValue",
    "value": [
      "EUR"
    ]
  },
  "paymentAccepted:": {
    "type": "StructuredValue",
    "value": [
      "cash",
      "card",
      "mbway"
    ]
  },
  "openingHoursSpecification": {
    "type": "StructuredValue",
    "value": [
      {
        "opens": "00:09:00",
        "closes": "23:59:00",
        "dayOfWeek": "Monday"
      },
      {
        "opens": "00:01:00",
        "closes": "23:59:00",
        "dayOfWeek": "Tuesday"
      },
      {
        "opens": "00:01:00",
        "closes": "23:59:00",
        "dayOfWeek": "Wednesday"
      },
      {
        "opens": "00:01:00",
        "closes": "23:59:00",
        "dayOfWeek": "Thursday"
      },
      {
        "opens": "00:01:00",
        "closes": "23:59:00",
        "dayOfWeek": "Friday"
      }
    ]
  },
  "logo": {
    "type": "Text",
    "value": "https://www.mcdonalds.pt/media/3650/logotipo-mcdonalds-portugal.png?mode=pad"
  },
  "telephone": {
    "type": "Text",
    "value": "(+351) 942 123 123"
  },
  "email": {
    "type": "Text",
    "value": "email@example.com"
  },
  "url": {
    "type": "Text",
    "value": "https://exampleStoreUrl.com"
  },
  "category": {
    "type": "Text",
    "value": "GroceryStore"
  }
}
```