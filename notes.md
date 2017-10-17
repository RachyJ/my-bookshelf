## 1012


Run flask server:

```
rachels-MacBook-Pro:backend rachelj$ export FLASK_APP=comm.py
rachels-MacBook-Pro:backend rachelj$ flask run
```

微信小程序API 发起请求: [wx.request(OBJECT)](https://www.w3cschool.cn/weixinapp/weixinapp-network-request.html)

## 1014

pass data from js to flask

http://flask.pocoo.org/docs/0.12/api/#flask.Request

https://stackoverflow.com/questions/10434599/how-to-get-data-received-in-flask-request


It is simply as follows

For URL Query parameter, use request.args

```
search = request.args.get("search")
page = request.args.get("page")
```

For Form input, use request.form

```
email = request.form.get('email')
password = request.form.get('password')
```

For data type application/json, use request.data

```
# data in string format and you have to parse into dictionary
data = request.data
dataDict = json.loads(data)
```

## 1016

Insert unique rows into SQLite:

```
INSERT OR IGNORE
```

## 1017

```

cursor.execute("DELETE FROM tblbooknlist WHERE title=? and list_name=?;",
                (bookName,listName))
```
