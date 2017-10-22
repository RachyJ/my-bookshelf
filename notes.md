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

## 1018

[Event handling](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/event.html)

touchmove event

## 1019

tab move event and goes to a new Page

navigator:
https://www.w3cschool.cn/weixinapp/weixinapp-navigator.html

# 1022

```
changeItemInArray: function() {
  // you can use this way to modify a danamic data path
  this.setData({
    'array[0].text':'changed data'
  })
},
```

[列表渲染](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/list.html)

```
{id: "20233610", loadidngHidden: true, bookData: {…}, __webviewId__: 1340}
bookData
:
author
:
["Russell, Jesse; Cohn, Ronald;"]
author_intro
:
""
catalog
:
""
image
:
"https://img1.doubanio.com/mpic/s22977968.jpg"
pubdate
:
""
publisher
:
"Book on Demand Ltd."
rating
:
{max: 10, numRaters: 0, average: "0.0", min: 0}
summary
:
""
title
:
"IOS"
```
