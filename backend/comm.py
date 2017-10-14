from flask import Flask, json, request, abort
import requests
import sqlite3

app = Flask(__name__)

# @app.route('/')
# def hello_world():
#     return 'Hello, World!'

@app.route('/queryBookList', methods=['GET'])
def queryBookList():
        #return 'received book list'
        booklist = []

        import sqlite3

        conn = sqlite3.connect('data/books.db')
        cursor = conn.cursor()

        cursor.execute('''SELECT list_name FROM tblbooklist''')
        booklists = cursor.fetchall()

        for row in booklists:
            # row['name'] returns the name column in the query, row['email'] returns email column.
            #return('{0} : {1}, {2}'.format(row['list_id'], row['list_name'], row['list_crtdate']))
            booklist.append(row)
            # return booklist
        return json.dumps(booklist)
        conn.close()


# @app.route('/', methods=['GET', 'POST'])
# def login():
#     if request.method == 'POST':
#         return 'received post'
#     else:
#         return 'received GET'
