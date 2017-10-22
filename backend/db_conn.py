import sqlite3
conn = sqlite3.connect('data/books.db')
c = conn.cursor()

c.execute('''CREATE TABLE IF NOT EXISTS tblbook
            (book_id INTEGER PRIMARY KEY, douban_id REAL, title TEXT, image TEXT, rating REAL)''')

c.execute('''CREATE TABLE IF NOT EXISTS tblbooklist
            (list_name TEXT PRIMARY KEY, list_crtdate DATE)''')

c.execute('''CREATE TABLE IF NOT EXISTS tblbooknlist
            (title TEXT, list_name TEXT)''')

# Insert a row of data
c.execute('''INSERT INTO tblbook(douban_id, title, alt, image, author,publisher,pubdate,rating,booklist)
            VALUES (?,?,?,?,?,?,?,?,?)''',
        (1003078,
        '小王子',
        'https://book.douban.com/subject/1003078/',
        'https://img3.doubanio.com/mpic/s1001902.jpg',
        '(法)圣埃克苏佩里',
        '中国友谊出版公司',
        '2006-01-05',
        8.7,
        'To-read'))

# c.execute('''INSERT INTO tblbooklist(list_name,list_crtdate)
#             VALUES (?,?)''',('To-read','2017-10-10'))
# c.execute('''INSERT INTO tblbooklist(list_name,list_crtdate)
#             VALUES (?,?)''',('Already-read','2017-10-15'))
c.execute('''INSERT INTO tblbooknlist(title, list_name)
            VALUES (?,?)''',('book1','list1'))

# Save (commit) the changes
conn.commit()

# We can also close the connection if we are done with it.
# Just be sure any changes have been committed or they will be lost.
conn.close()
