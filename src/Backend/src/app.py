
from types import MethodType
from flask import Flask, Response, request
import json, requests
from flask_cors import CORS

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
CORS(app)

url = "http://localhost:1026/v2/entities"

@app.route('/objects', methods=['GET'])
def get_objects():
    response = requests.get(url, params=request.args)
    objects = response.json()
    return Response(
        json.dumps(objects),
        status=200,
        mimetype="application/json"
    )

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=5001)