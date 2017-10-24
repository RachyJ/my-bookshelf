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

## 1023

```
<view wx:for="{{pageData}}" wx:key="*this">
{{item}}
</view>
```

## 1024

issues to solve:

* duplicate record issue
* add book commit msg; different event?
* show search and booklist entrances at the bottom

## 1025

```
<view class="text-box" scroll-y="true" scroll-top="{{scrollTop}}">
  <text>{{text}}</text>
</view>
```

```
var texts = [
  '2011年1月，微信1.0发布',
  '同年5月，微信2.0语音对讲发布',
  '10月，微信3.0新增摇一摇功能',
  '2012年3月，微信用户突破1亿',
  '4月份，微信4.0朋友圈发布',
  '同年7月，微信4.2发布公众平台',
  '2013年8月，微信5.0发布微信支付',
  '2014年9月，企业号发布',
  '同月，发布微信卡包',
  '2015年1月，微信第一条朋友圈广告',
  '2016年1月，企业微信发布',
  '2017年1月，小程序发布',
  '......'
];

Page({
  data: {
    text: '',
    canAdd: true,
    canRemove: false
  },
  extraLine: [],
  add: function(e) {
    var that = this;
    this.extraLine.push(texts[this.extraLine.length % 12])
    this.setData({
      text: this.extraLine.join('\n'),
      canAdd: this.extraLine.length < 12,
      canRemove: this.extraLine.length > 0
    })
    setTimeout(function(){
      that.setData({
        scrollTop: 99999
      });
    }, 0)
  },
```

navigator

```
<view class="container">
  <template is="head" data="{{title: '新建的页面'}}"/>
</view>

```

```
Page({
  onLoad: function(options) {
    console.log(options)
    this.setData({
      title: options.title
    })
  }
})
```

## 目录结构：
    ├─.wing             # EgretWing编辑器小程序配置相关
    ├─pages             # 存放小程序页面相关文件
    │  ├─create  
    │  ├─detail  
    │  ├─edit  
    │  ├─fav  
    │  ├─note  
    │  ├─search  
    │  ├─template  
    │  └─user  
    ├─src               # 项目静态资源，例如：img、style
    │  ├─img            # 项目图片及小程序icon图标
    │  └─styles         # 小程序公用css样式表
    ├─typings           # 小程序api方法提示封装
    └─utils             # 存放配置文件，例如：api.js、config.js、hotapp.js

```
success: function () {
                   // 返回首页
                   setTimeout(function () {
                       wx.hideToast();
                       wx.navigateBack();
                   }, 1000)
               }
```
