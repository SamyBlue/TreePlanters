from flask import Flask, jsonify
from app import login_manager
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_login import UserMixin, LoginManager
from flask_serialize import FlaskSerializeMixin

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///treeplanters.db'
db = SQLAlchemy(app)
# login_manager = LoginManager()
# login_manager.init_app(app)
# login_manager.login_view = 'login'

FlaskSerializeMixin.db = db

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

class User(FlaskSerializeMixin, db.Model, UserMixin):
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

class Trees(FlaskSerializeMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), unique=False, nullable=True) # Can be anonymous
    tree_type = db.Column(db.String(30), nullable=False)
    year_planted = db.Column(db.Integer, nullable=False)
    lat = db.Column(db.Float, nullable=False)
    lng = db.Column(db.Float, nullable=False)
    
    #serializer fields
    create_fields = update_fields = ['user_id', 'tree_type', 'year_planted', 'lat', 'lng']
    
    def __repr__(self):
        return f"Tree('{self.username}', '{self.tree_type}', '{self.year_planted}')"

class Donations(FlaskSerializeMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), unique=False, nullable=True)
    donation_amount = db.Column(db.Float, unique=True, nullable=False)

    create_fields = update_fields = ['user_id', 'donation_amount']

    def __repr__(self):
        return f"Donations('{self.username}', '{self.donation_amount}')"

db.create_all()