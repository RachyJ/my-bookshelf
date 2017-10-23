var requests = require('../../requests/request.js');
var utils = require('../../utils/util.js');

//刷新动态球颜色
var iconColor = [
  '#42BD56', '#31A040'
];


Page({

  data: {
    scrollHeight: 0, //scroll-view高度
    pageIndex: 0, //页码
    totalRecord: 0, //图书总数
    isInit: true, //是否第一次进入应用
    loadingMore: false, //是否正在加载更多
    footerIconColor: iconColor[0], //下拉刷新球初始颜色
    pageData: [], //图书数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // get all the booklists
    var that = this;
    that.setData({ loadingMore: true, isInit: false });
    var start = that.data.pageIndex;

    let url = 'http://127.0.0.1:5000/queryBooks';

    wx.request({
      url: url,
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (booklist) {
        // receive the booklist and show on the page
        console.log(booklist.data)
        that.data.pageData = booklist.data
        that.setData({
          pageData: that.data.pageData,
          pageIndex: start + 1,
          totalRecord: that.data.total
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      wx.getSystemInfo({
        success: (res) => {
          this.setData({
            scrollHeight: res.windowHeight - (100 * res.windowWidth / 750) //80为顶部搜索框区域高度 rpx转px 屏幕宽度/750
          });
        }
      })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  //下拉请求数据
  scrollLowerEvent: function (e) {
    if (this.data.loadingMore)
      return;
    requestData.call(this);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
