from app import app, bcrypt
from flask import redirect, jsonify, request
from flask_serialize import FlaskSerializeMixin
from flask_login import login_user, current_user, logout_user, login_required
from app.models import db, User, Trees, Donations
import json
import sqlite3

def get_user_trees(user_id, json_str=True):
    conn = sqlite3.connect(db)
    conn.row_factory = sqlite3.Row
    cur = conn.cursor()

    rows = cur.execute('''
    SELECT id, tree_type, year_planted, lat, lng, user_id from trees WHERE user_id == ?
    ''', (user_id)).fetchall()

    conn.commit()
    conn.close()

    if json_str:
        return json.dumps([dict(ix) for ix in rows])

    return rows
    
    
@app.route('/')
def hello():
    return "Plant trees pls"

#* Route works
@app.route("/users", methods=['POST'])
def register():
    if request.method == "POST" and request.is_json:  # register new user
        content = request.get_json()
        hashed_password = bcrypt.generate_password_hash(
            content['password']).decode('utf-8')
        user = User(username=content['username'],
                    email=content['email'],
                    password=hashed_password,
                    )
        db.session.add(user)
        db.session.commit()
        return content
    # elif request.method == 'GET':
    #     # content = User.query.order_by(User.id).all()
    #     return User.get_delete_put()

#* Route works
@app.route('/get_user_all', methods=['GET'])
def get_user_all():
    return User.get_delete_put_post()

#* Route works
@app.route("/login", methods=['GET', 'POST'])
def login():
    content = request.get_json()
    user = User.query.filter_by(username=content['username']).first()
    if not user or not bcrypt.check_password_hash(user.password, content['password']):
        return abort(403)
    login_user(user)
    return redirect('/')
    
#* Route works
@app.route("/logout", methods=['POST'])
def logout():
    logout_user()
    return redirect('/')

#* Route works
@app.route("/trees", methods=['GET', 'POST'])
def trees():
    if request.method == 'GET':
        # return all trees
        return Trees.get_delete_put_post()

    elif request.method == 'POST' and request.is_json:
        # add an anonymous tree
        content = request.get_json()
        # if content['tree_type'] in ['ash','beech',birch']:
        #   add to database 
        # else:
        #   return 'Cannot plant this type of tree', 406
        newTree = Trees(
            tree_type = content['tree_type'],
            year_planted = content['year_planted'],
            lat = content['lat'],
            lng = content['lng'],
            user_id = None)
        db.session.add(newTree)
        db.session.commit()
        return 'Anonymous tree has been added'

#! Broken, post works but get does not return trees for user
@app.route("/trees/<user_id>", methods=['GET', 'POST'])
@login_required
def userTrees(user_id):
    if request.method == 'GET':
        # return all trees belonging to user
        content = get_user_trees(user_id, json_str=True)
        return content

        # content = Trees.query.filter_by(user_id=current_user.id).all()
        # json_content = json.dumps([dict(ix) for ix in content])
        # return json_content
        
        # return Trees.as_json(content)
        # content = Trees.get_delete_put_post()
        # inputDict = json.loads(content)
        # print(inputDict)
        # outputDict = [x for x in inputDict if x['user_id']==user_id]
        # print(outputDict)
        # outputJSON = json.dumps(outputDict) 
        # print(outputJSON)
        # return outputJSON
        
    elif request.method == 'POST' and request.is_json:
        # add tree for this user
        # this_user = User.query.filter_by(username == username).first()
        content = request.get_json()
        newTree = Trees(
            tree_type = content['tree_type'],
            year_planted = content['year_planted'],
            lat = content['lat'],
            lng = content['lng'],
            user_id = user_id)
        db.session.add(newTree)
        db.session.commit()
        return "tree added by user"

#TODO Testing needed
@app.route('/donations', methods=['GET','POST'])
def donations():
    if request.method == 'GET':
        # return all donations 
        # donationList = Donations.query.order_by(Donations.id).all()
        # return jsonify(donationList)
        return Donations.get_delete_put_post()

    elif request.method == 'POST' and request.is_json:
        # add anonymous donation to database
        content = request.get_json()
        donation = Donation(
                        user_id = None, 
                        donation_amount = content['donation_amount']
                    )
        db.session.add(donation)
        db.session.commit()
        return 'Anonymous donation has been added'
        
#TODO Testing needed
@app.route('/donations/<username>', methods=['GET','POST'])
def userDonations():
    if request.method == 'GET':
        # return all donations by the user
        content = Donations.query.filter_by(Donations.user.username == username)
        return jsonify(content)
        
    elif request.method == 'POST':
        # add user donation to database
        this_user = User.query.filter_by(username == username).first()
        content = request.get_json()
        newDonation = Donations(
            donation_amount = content['donation_amount'],
            user_id = this_user.id)
        db.session.add(newDonation)
        db.session.commit()
        # return f'{this_user.username} has donated {content['donation_amount']}'