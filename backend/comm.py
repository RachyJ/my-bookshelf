from flask import Flask, json, request, abort
import requests
import sqlite3

app = Flask(__name__)

# @app.route('/')
# def hello_world():
#     return 'Hello, World!'

@app.route('/queryBookList', methods=['GET'])
def queryBookList():
        return 'received book list'

# @app.route('/', methods=['GET', 'POST'])
# def login():
#     if request.method == 'POST':
#         return 'received post'
#     else:
#         return 'received GET'
