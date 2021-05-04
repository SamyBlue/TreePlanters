from app import app
from flask import render_template, redirect


@app.route('/')
def hello():
    return "Plant trees pls"

@app.route('/index')

@app.route('/home')
def index():
    return render_template('index.html')


@app.route('/articles')
def articles():
    return render_template('articles.html')

    