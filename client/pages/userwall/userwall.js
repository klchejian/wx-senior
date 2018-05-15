// pages/userwall/userwall.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },
  getCommant(options) {
    util.showBusy('请求中...')
    var that = this
    qcloud.request({
      url: `${config.service.host}/weapp/demo?username=2213`,
      login: false,
      // params: { username: 'ccjj', age: 33 },
      // data: { username: 'cc2jj', age: 323 },
      success(result) {
        util.showSuccess('请求成功完成')
        that.setData({
          requestResult: JSON.stringify(result.data)
        })
      },
      fail(error) {
        util.showModel('请求失败', error);
        console.log('request failaaa', error);
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    util.showBusy('请求中...')
    var that = this
    qcloud.request({
      url: `${config.service.host}/weapp/demo?username=2213`,
      login: false,
      // params: { username: 'ccjj', age: 33 },
      // data: { username: 'cc2jj', age: 323 },
      success(result) {
        util.showSuccess('请求成功完成')
        for (var i = 0; i < result.data.data.length; i++) {
          var tmplist = {
            name: result.data.data[i].nickname,
            passtime: result.data.data[i].create_time,
            text: result.data.data[i].commant,
            profile_image: result.data.data[i].userurl
          }
          that.data.list = that.data.list.concat(tmplist)
        }
        that.setData({
          // 拼接数组
          list: that.data.list,
          loadingHidden: false,
          maxtime: 5000
        })
        // that.setData({
        //   requestResult: JSON.stringify(result.data)
        // })
      },
      fail(error) {
        util.showModel('请求失败', error);
        console.log('request failaaa', error);
      }
    })

    // var tmplist = {
    //   name: '车小车',
    //   passtime: '后觉后知',
    //   text: '毕业季2018',
    //   profile_image: 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoR5JNTgibLANXRnNCjwZhuReQouGmCZtGAW380PTDl5J3icGa1N0VjoG02PMAW6YPuAeSAC1El0Mdg/132'
    // }
    // var tmplist2 = {
    //   name: '车小车2',
    //   passtime: '后觉后知2',
    //   text: '毕业季20182',
    //   profile_image: 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoR5JNTgibLANXRnNCjwZhuReQouGmCZtGAW380PTDl5J3icGa1N0VjoG02PMAW6YPuAeSAC1El0Mdg/132'
    // }


    // that.data.list = that.data.list.concat(tmplist)
    // that.data.list = that.data.list.concat(tmplist2)


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