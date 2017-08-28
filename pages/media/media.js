//media.js
//获取应用实例
function getRandomColor () {
  let rgb = []
  for (let i = 0 ; i < 3; ++i){
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

Page({
  data: {
      markers: [{
      iconPath: "/resources/others.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color:"#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/resources/location.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }],
      danmuList: [
        {
          text: '第 1s 出现的弹幕',
          color: '#ff0000',
          time: 1
        },
        {
          text: '第 3s 出现的弹幕',
          color: '#ff00ff',
          time: 3
      }],
      inputValue: '',
      array: [{
          mode: 'scaleToFill',
          text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
        }, { 
          mode: 'aspectFit',
          text: 'aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来'
        }, { 
          mode: 'aspectFill',
          text: 'aspectFill：保持纵横比缩放图片，只保证图片的短边能完全显示出来'
        }, { 
          mode: 'top',
          text: 'top：不缩放图片，只显示图片的顶部区域' 
        }, {      
          mode: 'bottom',
          text: 'bottom：不缩放图片，只显示图片的底部区域'
        }, { 
          mode: 'center',
          text: 'center：不缩放图片，只显示图片的中间区域'
        }, { 
          mode: 'left',
          text: 'left：不缩放图片，只显示图片的左边区域'
        }, { 
          mode: 'right',
          text: 'right：不缩放图片，只显示图片的右边边区域'
        }, { 
          mode: 'top left',
          text: 'top left：不缩放图片，只显示图片的左上边区域' 
        }, { 
          mode: 'top right',
          text: 'top right：不缩放图片，只显示图片的右上边区域'
        }, { 
          mode: 'bottom left',
          text: 'bottom left：不缩放图片，只显示图片的左下边区域'
        }, { 
          mode: 'bottom right',
          text: 'bottom right：不缩放图片，只显示图片的右下边区域'
    }],
    src: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    vsrc: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
  },
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  onReady: function (e) {
    this.videoContext = wx.createVideoContext('myVideo')
    this.audioCtx = wx.createAudioContext('myAudio')
    // 使用 wx.createContext 获取绘图上下文 context
    var context = wx.createCanvasContext('firstCanvas')

    context.setStrokeStyle("#00ff00")
    context.setLineWidth(5)
    context.rect(0, 0, 300, 200)
    context.stroke()
    context.setStrokeStyle("#ff0000")
    context.setLineWidth(2)
    context.moveTo(160, 100)
    context.arc(100, 100, 60, 0, 2 * Math.PI, true)
    context.moveTo(140, 100)
    context.arc(100, 100, 40, 0, Math.PI, false)
    context.moveTo(85, 80)
    context.arc(80, 80, 5, 0, 2 * Math.PI, true)
    context.moveTo(125, 80)
    context.arc(120, 80, 5, 0, 2 * Math.PI, true)
    context.stroke()
    context.draw()
  },
  regionchange: function(e) {
    console.log(e.type)
  },
  markertap: function(e){
    console.log(e.markerId)
  },
  controltap: function(e){
    console.log(e.controlId)
  },
  imageError: function(e) {
    console.log('image3发生error事件，携带值为', e.detail.errMsg)
  },
  bindInputBlur: function(e) {
    this.inputValue = e.detail.value
  },
  bindButtonTap: function() {
    var that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front','back'],
      success: function(res) {
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  },
  bindSendDanmu: function () {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  },
})

