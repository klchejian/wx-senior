// pages/commant/commant.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    logged: app.globalData.userInfo ? true:false,
    takeSession: false,
    requestResult: ''
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    app.globalData.logged = true;
    // this.data.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      logged: true
    })
  },
  //获取用户输入的留言
  commantInput: function (e) {
    this.setData({
      commant: e.detail.value
    })
  },
  commitBtnClick() {
    var usercommant = this.data.commant;
    util.showBusy('posting...')
    var that = this
    qcloud.request({
      url: `${config.service.host}/weapp/postcommant`,
      login: false,
      // method:'POST',
      // data: { username: 'cc2jj', age: 323 },
      data: { nickname: this.data.userInfo.nickName, commant: usercommant, userurl: this.data.userInfo.avatarUrl },
      success(result) {
        util.showSuccess('提交成功cj')
      },
      fail(error) {
        util.showModel('请求失败', error);
        console.log('request failaaa', error);
      }
    })

    wx.switchTab({
      url: '/pages/wall/wall',
      success: function (e) {
        var page = getCurrentPages().pop();
        if (page == undefined || page == null) return;
        var commant = {
          commant: usercommant
        }
        page.onShow2(commant);
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  

    qcloud.request({
      url: `${config.service.host}/weapp/getcount`,
      login: false,
      success(result) {
        util.showSuccess('您是第 ' + result.data.data[0].page_count+' 位访问者')
      },
      fail(error) {
        util.showModel('请求失败', error);
        console.log('request failaaa', error);
      }
    })

    if (app.globalData.userInfo){
      this.setData({
        userInfo: app.globalData.userInfo,
        logged: true
      })
      

    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        logged: true
      })


    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        logged: true
      })


    }
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