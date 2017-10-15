import sqlite3

db = sqlite3.connect('data/books.db')
cursor = db.cursor()
cursor.execute("DELETE FROM tblbooklist WHERE list_id=?", (5,))
db.commit()
db.close()
