var requests = require( '../../requests/request.js' );
var utils = require( '../../utils/util.js' );

Page( {
  data: {
    id: null,
    loadidngHidden: false,
    bookData: null
  },
  onLoad: function( option ) {
    this.setData({
      id: option.id
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
    let bookInfo = { 'id': id, 'title': title, 'image': image, 'author': author, 'rating': rating };
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
            url: "../../pages/booklist/booklist"
          });
        }, 1000)
      }
    })
  },
  onReady: function() {
    var id = this.data.id;
    var _this = this;
    requests.requestBookDokDetail(
      id,
      {fields: 'image,summary,publisher,title,rating,pubdate,author,author_intro,catalog'},
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
    });
  }
});
