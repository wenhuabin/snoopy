//app.js
App({
  onLaunch: function(options) {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    console.log("onLaunch", JSON.stringify(options, null, 2))
  },

  onShow: function (options) {
    // Do something when show.
    console.log("onShow", JSON.stringify(options, null, 2))
  },
  onHide: function (options) {
    // Do something when hide.
    console.log("onHide", JSON.stringify(options, null, 2))
  },
  onError: function (msg) {
    alert("onError")
    console.log(msg)
  },

  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },

  globalData: {
    userInfo: null
  }
})
