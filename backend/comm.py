from flask import Flask, json, request, abort
import requests
import sqlite3

app = Flask(__name__)

# @app.route('/')
# def hello_world():
#     return 'Hello, World!'

@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        #do_the_login()
        pass
    else:
        #show_the_login_form()
        #return requested data
        return 'received GET'
