//app.js
App({
  //  小程序启动（全局只调用一次）
  onLaunch: function () {
    console.log("onLaunch - 小程序加载")
    // 展示本地存储能力 以同步的方式获取本地的缓存数据  云api
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        // 判断是否授权，授权后才能去拿用户头像
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              console.log(res)
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },

  // 初始化完成，从后台切换到前台
  onShow: function() {
    console.log("onShow - 小程序显示")
  },

  // 从前台切换到后台
  onHide: function() {
    console.log("onHide - 小程序隐藏")
  },
  globalData: {
    userInfo: null
  }
})