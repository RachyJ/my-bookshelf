# Py101-004大作业项目：我的小书架

## 项目说明

* 微信小程序：实现从豆瓣搜索书本信息，将书加入待读列表
* 使用技术：
  * 前端：wxml, wxss, javascript;
  * 后端：Python3, sqlite3, flask

## 目录结构

### 前端

```
├─pages             # 存放小程序页面相关文件
│  ├─index  
│  ├─detail
|  ├─addtolist  
│  └─booklist
|
├─requests             # 与豆瓣图书API交互
│  ├─api.js  
│  └─request.js   
|
├─src               # 项目静态资源
│  └─img            # 项目图片及小程序icon图标
|
└─utils             # 存放基础共用函数
```

### 后端

```
    ├─comm.py                  # 主代码
    ├─db_conn.py               # 创建数据库
    │
    ├─data               # 存放数据文件
      │--books.db
    
```



## Notes

* 与豆瓣交互的代码来自[oopsguy](https://gitee.com/oopsguy/WechatSmallApps/tree/master/DouBanBookApp)
* Issues中有问题讨论和相关资料
* Projects中列有每周任务计划
