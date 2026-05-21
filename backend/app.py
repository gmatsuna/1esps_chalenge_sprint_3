from flask import Flask
from flask_cors import CORS

from routes.missions import missions_bp
from routes.trail import trail_bp
from routes.summary import summary_bp
from routes.detail import detail_bp
from routes.progress import progress_bp

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False
CORS(app)

app.register_blueprint(missions_bp)
app.register_blueprint(trail_bp)
app.register_blueprint(summary_bp)
app.register_blueprint(detail_bp)
app.register_blueprint(progress_bp)
if __name__ == '__main__':
    app.run(debug=True)