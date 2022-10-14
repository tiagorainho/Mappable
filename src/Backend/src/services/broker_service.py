
import requests

url = "http://localhost:1026/v2/entities"


def get_objects(arguments):
    return requests.get(url, params=arguments).json()