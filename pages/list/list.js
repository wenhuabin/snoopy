//index.js
//获取应用实例
var order = ['red', 'yellow', 'blue', 'green', 'red']
var worder = ['wred', 'wyellow', 'wblue', 'wgreen', 'wred']

Page({
  data: {
    list: [{key: "bj", message: "北京"},{key: "sh", message: "上海"},{key: "hz", message: "杭州"},{key: "gz", message: "广州"}],
    toView: 'red',
    toWView: 'wred',
    scrollTop: 100,
    scrollLeft: 100,
  },
  onLoad: function () {
    
  },
  upper: function(e) {
    console.log(e)
  },
  lower: function(e) {
    console.log(e)
  },
  scroll: function(e) {
    console.log(e)
  },
  tap: function(e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
  wtap: function(e) {
    console.log('wtap');
    for (var i = 0; i < worder.length; ++i) {
      if (worder[i] === this.data.toWView) {
        this.setData({
          toWView: worder[i + 1]
        })
        break
      }
    }
  },
  wtapMove: function(e) {
    console.log('wmove');
    this.setData({
      scrollLeft: this.data.scrollLeft + 10
    })
  }
    
})
