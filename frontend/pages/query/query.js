// pages/index/index.js
Page({
  data:{
      bookName: '',
  },
  // ipValue: function (res) {
  //   this.setData({
  //     ip: res.detail.value
  //   })
  // },
  //
  // bookName: function (res) {
  //   this.setData({
  //     bookName: res.detail.value
  //   })
  // },

  queryBookList: function(res){

    // url要设置成你的api地址
    let url = 'http://127.0.0.1:5000/queryBookList';

      wx.request({
        url: url,
        data: {},
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function(res){
          console.log(res)
      }
    })
  },

  saveBook: function(res){
    let that = this;
    // url要设置成你的api地址
    let url = 'http://127.0.0.1:5000/';
      wx.request({
        url: url,
        data: that.data.bookName,
        method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
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
