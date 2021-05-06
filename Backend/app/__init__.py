"""
Flask app initialiser
"""

import os
from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask import Flask
from flask_bcrypt import Bcrypt
from flask_login import LoginManager

# Set a project base directory variable
baseDir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['SECRET_KEY'] = 'Fl4sk3R'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///treeplanters.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
bcrypt = Bcrypt()
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'

# This is needed for Flask to navigate webpages
from app import routes  # noqai