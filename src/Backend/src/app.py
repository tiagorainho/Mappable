from flask import Flask, Response, request
import json
from flask_cors import CORS
from services.user_service import ROLES
from services.rules import ZoomRules
from services.zoom_scaller_service import DEFAULT_ZOOM, get_entities

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
CORS(app)

@app.route('/objects', methods=['GET'])
def get_objects():
    arguments = request.args
    zoom = int(arguments.get("zoom", 5))
    role = arguments.get("type", "normal")
    print(zoom, role)
    entities = get_entities(arguments = arguments, zoomRules=ROLES[role], zoom=zoom)

    return Response(
        json.dumps(entities),
        status=200,
        mimetype="application/json"
    )

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=5001)