var requests = require( '../../requests/request.js' );
var utils = require( '../../utils/util.js' );

Page({
  data: {
      id: null,
      loadidngHidden: false,
      bookData: null,
      texts:['书本存储成功！']
  },

  onLoad: function( option ) {
    this.setData({
      id: option.id
    });

    var id = this.data.id;
    var _this = this;

     requests.requestBookDokDetail(
       id,
       { fields: 'image,summary,publisher,title,rating,pubdate,author,author_intro,catalog' },
       ( data ) => {
         _this.setData({
           bookData: data
         });
         }, () => {
           wx.navigateBack();
         }, () => {
           _this.setData( {
             loadidngHidden: true
         });
        //console.log(_this.data);
       });
  },

  insertBook: function (res) {
    //console.log("insert book");
    let that = this;
    console.log(that.data)
    let id = that.data.id;
    let title = that.data.bookData.title;
    let image = that.data.bookData.image;
    let author = that.data.bookData.author[0];
    let rating = that.data.bookData.rating.average;
    let url = 'http://127.0.0.1:5000/addBook';
    let bookInfo = {'id':id, 'title': title, 'image':image, 'author':author,'rating':rating};
    wx.request({
      url: url,
      data: bookInfo,
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: { 'content-type': 'application/json' }, // 设置请求的 header
      success: function (res) {
        console.log(res);
        that.setData({
          text: res.data
        });

        setTimeout(function () {
          wx.switchTab({
            url: "../../pages/index/index"
          });
        }, 1000)
      }
    })
  },

  onReady: function () {

  //     // get all the booklists
  //     let url = 'http://127.0.0.1:5000/queryBookList';

  //     wx.request({
  //       url: url,
  //       data: {},
  //       method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  //       // header: {}, // 设置请求的 header
  //       success: function (booklist) {
  //         // receive the booklist and show on the page
  //         console.log(booklist)
  //         //items.push(booklist)
  //       }
  //     })

  //     // get the booklists where the book is in
  //     let url2 = 'http://127.0.0.1:5000/queryBookInList';

  //     //console.log(this.data.bookData)
  //     let bookName = this.data.bookData;
  //     //let bookName = {'bookName':'Python'};

  //     wx.request({
  //       url: url2,
  //       // post the current book name
  //       data: bookName,
  //       method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  //       header: {'content-type': 'application/json'},
  //       success: function (booklist) {
  //         // receive the booklist and show on the page
  //         console.log(booklist)
  //       }
  //     })

  // },

  // checkboxChange: function (e) {
  //   console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
