from flask import Flask, json, request, abort
import requests, sqlite3, time
from datetime import date

app = Flask(__name__)


@app.route('/queryBookList', methods=['GET'])
def queryBookList():
        # query all book lists
        booklist = []

        conn = sqlite3.connect('data/books.db')
        cursor = conn.cursor()

        cursor.execute('''SELECT list_name FROM tblbooklist''')
        booklists = cursor.fetchall()

        for row in booklists:
            #return('{0} : {1}, {2}'.format(row['list_id'], row['list_name'], row['list_crtdate']))
            booklist.append(row)
            # return booklist
        return json.dumps(booklist)
        conn.close()


@app.route('/insertBookList', methods=['POST'])
def insertBookList():
        #insert a book list'
        new_list =json.loads(request.data)['booklistName']
        today = date.today()

        conn = sqlite3.connect('data/books.db')
        cursor = conn.cursor()

        cursor.execute('''INSERT INTO tblbooklist(list_name,list_crtdate)
                    VALUES (?,?)''',(new_list,today))
        conn.commit()
        #return json.loads(list_name)['booklistName']
        #return new_list
        conn.close()
