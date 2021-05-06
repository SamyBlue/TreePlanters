from flask import Flask, jsonify
from app import login_manager #* comment this when making database 
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_login import UserMixin, LoginManager
# from flask_serialize import FlaskSerializeMixin
from dataclasses import dataclass

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///treeplanters.db'
db = SQLAlchemy(app)
#* uncomment this when making database
# login_manager = LoginManager()
# login_manager.init_app(app)
# login_manager.login_view = 'login'


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

@dataclass
class User(db.Model, UserMixin):
    id: int
    username: str
    email: str
    password: str
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)

    trees = db.relationship('Trees', backref='user', lazy=True)
    donations = db.relationship('Donations', backref='user', lazy=True)

    #serializer fields
    create_fields = update_fields = ['username', 'email', 'password']
    
    # checks if Flask-Serialize can delete
    def can_delete(self):
        if self.value == '1234':
            raise Exception('Deletion not allowed.  Magic value!')

    # checks if Flask-Serialize can create/update
    def verify(self, create=False):
        if not self.key or len(self.key) < 1:
            raise Exception('Missing key')

        if not self.setting_type or len(self.setting_type) < 1:
            raise Exception('Missing setting type')
            
    def __repr__(self):
        return "<User '{}'>".format(self.username)

@dataclass
class Trees(db.Model):
    id: int
    user_id: int
    tree_type: str
    year_planted: int
    lat: float
    lng: float
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), unique=False, nullable=True) # Can be anonymous
    tree_type = db.Column(db.String(30), nullable=False)
    year_planted = db.Column(db.Integer, nullable=False)
    lat = db.Column(db.Float, nullable=False)
    lng = db.Column(db.Float, nullable=False)
        
    def __repr__(self):
        return f"Tree('{self.tree_type}', '{self.year_planted}')"

@dataclass
class Donations(db.Model):
    id: int
    user_id: int
    donation_amount: float
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), unique=False, nullable=True)
    donation_amount = db.Column(db.Float, unique=False, nullable=False)

    create_fields = update_fields = ['user_id', 'donation_amount']

    def __repr__(self):
        return f"Donations('{self.username}', '{self.donation_amount}')"

db.create_all()