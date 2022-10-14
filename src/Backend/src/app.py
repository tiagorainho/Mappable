from flask import Flask, Response, request
import json
from flask_cors import CORS
from services.user_service import ROLES
from services.zoom_scaller_service import get_entities
from services.broker_service import get_objects as get_objects_from_api

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
CORS(app)

@app.route('/clusters', methods=['GET'])
def get_clusters():
    arguments = request.args
    zoom = int(arguments.get("zoom", 5))
    role = arguments.get("role", "normal")
    entities = get_entities(arguments = arguments, zoomRules=ROLES[role], zoom=zoom)

    return Response(
        json.dumps(entities),
        status=200,
        mimetype="application/json"
    )

@app.route('/objects', methods=['GET'])
def get_objects():
    arguments = request.args
    types = arguments.get('type', None)
    return Response(
            json.dumps(get_objects_from_api(arguments)),
            status=200,
            mimetype="application/json"
        )

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=5001)