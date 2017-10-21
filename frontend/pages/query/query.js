// pages/index/index.js
Page({
  data:{
      booklistInput: {}
  },

  onLoad: function (options) {
    this.setData({
      title: options.title
    })
  },

  bookInput: function (res) {
    this.setData({
      bookName: res.detail.value
    })
  },

  booklistInput: function (res) {
    this.setData({
      booklistName: res.detail.value
    })
  },

  queryBookList: function(res){

    // url要设置成你的api地址
    let url = 'http://127.0.0.1:5000/queryBookList';

      wx.request({
        url: url,
        data: {},
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function(booklist){
            // receive the booklist
            console.log(booklist)
      }
    })
  },


  queryBookInList: function(res){
    let that = this;
    let bookName = that.data.bookName;
    let url = 'http://127.0.0.1:5000/queryBookInList';

      wx.request({
        url: url,
        data: {},
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function(booklists){
            // receive the booklists the book is in
            console.log(booklists)
      }
    })
  },


  insertBookList: function(res){
    let that = this;
    let booklistName = that.data.booklistName;
    let url = 'http://127.0.0.1:5000/insertBookList';
    let booklist = {'booklistName':booklistName};
      wx.request({
        url: url,
        data: booklist,
        method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {'content-type': 'application/json'}, // 设置请求的 header
        success: function(res){
          console.log(res)
      }
    })
  },


  deleteBookList: function(res){
    let that = this;
    let booklistName = that.data.booklistName;
    let url = 'http://127.0.0.1:5000/deleteBookList';
    let booklist = {'booklistName':booklistName};
      wx.request({
        url: url,
        data: booklist,
        method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {'content-type': 'application/json'}, // 设置请求的 header
        success: function(res){
          console.log(res)
      }
    })
  },


  queryBook: function(res){

    // url要设置成你的api地址
    let url = 'http://127.0.0.1:5000/queryBook';

      wx.request({
        url: url,
        data: {},
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function(book){
            // receive the booklist
            console.log(book)
      }
    })
  },

  addToList: function(res){
    let that = this;
    let booklistName = that.data.booklistName;
    let bookName = that.data.bookName;
    let url = 'http://127.0.0.1:5000/addToList';
    let booklist = {'booklistName':booklistName, 'bookName':bookName};
      wx.request({
        url: url,
        data: booklist,
        method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {'content-type': 'application/json'}, // 设置请求的 header
        success: function(res){
          console.log(res)
      }
    })
  },


  removeFromList: function(res){
    let that = this;
    let booklistName = that.data.booklistName;
    let bookName = that.data.bookName;
    let url = 'http://127.0.0.1:5000/removeFromList';
    let booklist = {'booklistName':booklistName, 'bookName':bookName};
      wx.request({
        url: url,
        data: booklist,
        method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {'content-type': 'application/json'}, // 设置请求的 header
        success: function(res){
          console.log(res)
      }
    })
  },

  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          height: res.screenHeight
        })
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})
