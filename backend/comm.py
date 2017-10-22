#!/usr/bin/env python
# -*- coding: utf-8 -*-

from flask import Flask, json, request, abort
import requests, sqlite3, time
from datetime import date

app = Flask(__name__)

@app.route('/addBook', methods=['POST'])
def addBook():
        douban_id = json.loads(request.data)['id']
        title = json.loads(request.data)['title']
        image = json.loads(request.data)['image']
        rating = json.loads(request.data)['rating']
        author = json.loads(request.data)['author']

        conn = sqlite3.connect('data/books.db')
        cursor = conn.cursor()

        try:
            cursor.execute('''INSERT OR IGNORE INTO tblbook(douban_id,title,image,author,rating)
                        VALUES (?,?,?,?,?)''',(douban_id,title,image,author,rating))
            conn.commit()
            return "书本存储成功"
        except Exception as e:
             # Roll back any change is something goes wrong
             conn.rollback()
             return "exception occured"
        finally:
            conn.close()


@app.route('/queryBookList', methods=['GET'])
def queryBookList():
        # query all book lists
        booklist = []

        conn = sqlite3.connect('data/books.db')
        cursor = conn.cursor()

        try:
            cursor.execute('''SELECT list_name FROM tblbooklist''')
            booklists = cursor.fetchall()

            for row in booklists:
                #return('{0} : {1}, {2}'.format(row['list_id'], row['list_name'], row['list_crtdate']))
                booklist.append(row)
                # return booklist
            return json.dumps(booklist)
        except Exception as e:
             # Roll back any change is something goes wrong
             conn.rollback()
             return e
        finally:
            conn.close()


@app.route('/insertBookList', methods=['POST'])
def insertBookList():
        # insert a book list'
        new_list =json.loads(request.data)['booklistName']
        today = date.today()

        conn = sqlite3.connect('data/books.db')
        cursor = conn.cursor()

        try:
            cursor.execute('''INSERT OR IGNORE INTO tblbooklist(list_name,list_crtdate)
                        VALUES (?,?)''',(new_list,today))
            conn.commit()
            return "书单存储成功"
        except Exception as e:
             # Roll back any change is something goes wrong
             conn.rollback()
             return e
        finally:
            conn.close()


@app.route('/deleteBookList', methods=['POST'])
def deleteBookList():
        # delete a book list'
        seleted_list =json.loads(request.data)['booklistName']

        conn = sqlite3.connect('data/books.db')
        cursor = conn.cursor()
        try:
            cursor.execute("DELETE FROM tblbooklist WHERE list_name=?", (seleted_list,))
            conn.commit()
            return "书单已删除"
        except Exception as e:
            # Roll back any change is something goes wrong
            conn.rollback()
            return e
        finally:
            conn.close()


@app.route('/queryBook', methods=['GET'])
def queryBook():
        # query all books
        book = []

        conn = sqlite3.connect('data/books.db')
        cursor = conn.cursor()

        try:
            cursor.execute('''SELECT douban_id FROM tblbook''')
            books = cursor.fetchall()

            for row in books:
                book.append(row)
            return json.dumps(book)
        except Exception as e:
             # Roll back any change is something goes wrong
             conn.rollback()
             return "exception occured"
        finally:
            conn.close()


@app.route('/queryBookInList', methods=['POST'])
def queryBookInList():
        # query the lists with the book stored
        # return 'query lists with the book'
        bookData = json.loads(request.data)['title']
        storedlist = []

        conn = sqlite3.connect('data/books.db')
        cursor = conn.cursor()

        try:
            cursor.execute('SELECT list_name FROM tblbooknlist WHERE title=?', (bookData,))
            lists = cursor.fetchall()

            for row in lists:
                storedlist.append(row)
            return json.dumps(storedlist)
        except Exception as e:
             # Roll back any change is something goes wrong
             conn.rollback()
             return "exception occured"
        finally:
            conn.close()


@app.route('/addToList', methods=['POST'])
def addToList():
        # add a book to a list
        listName = json.loads(request.data)['booklistName']
        bookName = json.loads(request.data)['bookName']

        conn = sqlite3.connect('data/books.db')
        cursor = conn.cursor()

        try:
            cursor.execute('''INSERT INTO tblbooknlist(title,list_name)
                        VALUES (?,?)''',(bookName,listName))
            conn.commit()
            return "成功加入书单"
        except Exception as e:
             # Roll back any change is something goes wrong
             conn.rollback()
             return "exception occured"
        finally:
            conn.close()

@app.route('/removeFromList', methods=['POST'])
def removeFromList():
        # remove a book from a list
        listName = json.loads(request.data)['booklistName']
        bookName = json.loads(request.data)['bookName']

        conn = sqlite3.connect('data/books.db')
        cursor = conn.cursor()

        try:
            cursor.execute("DELETE FROM tblbooknlist WHERE title=? and list_name=?;",
                            (bookName,listName))
            conn.commit()
            return "成功移出书单"
        except Exception as e:
             # Roll back any change is something goes wrong
             conn.rollback()
             return "exception occured"
        finally:
            conn.close()
