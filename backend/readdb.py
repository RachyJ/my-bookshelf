import sqlite3

db = sqlite3.connect('books.db')
db.row_factory = sqlite3.Row
cursor = db.cursor()
cursor.execute('''SELECT * FROM tblbook''')
for row in cursor:
    # row['name'] returns the name column in the query, row['email'] returns email column.
    print('{0} : {1}, {2}, {3}'.format(row['title'], row['author'], row['rating'], row['booklist']))

db.close()
