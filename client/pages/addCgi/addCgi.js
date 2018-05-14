//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({
    data: {
        requestResult: '',
        canIUseClipboard: wx.canIUse('setClipboardData')
    },
    //获取用户输入的留言
    commantInput: function (e) {
      this.setData({
        commant: e.detail.value
      })
    },
    //获取用户名称
    usernameInput: function (e) {
      this.setData({
        username: e.detail.value
      })
    },
    postCommant:function(){
      util.showBusy('posting...')
      var that = this
      qcloud.request({
        url: `${config.service.host}/weapp/postcommant`,
        login:false,
        // method:'POST',
        // data: { username: 'cc2jj', age: 323 },
        data: { username: that.data.username, commant: that.data.commant},
        success(result){
          util.showSuccess('提交成功cj')
        },
        fail(error){
          util.showModel('请求失败', error);
          console.log('request failaaa', error);
        }
      })
    },
    testCgi: function () {
        util.showBusy('请求中...')
        var that = this
        qcloud.request({
            url: `${config.service.host}/weapp/demo?username=2213`,
            login: false,
            params: { username: 'ccjj', age: 33 },
            data: { username: 'cc2jj', age: 323 },
            success (result) {
                util.showSuccess('请求成功完成')
                that.setData({
                    requestResult: JSON.stringify(result.data)
                })
            },
            fail (error) {
                util.showModel('请求失败', error);
                console.log('request failaaa', error);
            }
        })
    },

    copyCode: function (e) {
        var codeId = e.target.dataset.codeId
        wx.setClipboardData({
            data: code[codeId - 1],
            success: function () {
                util.showSuccess('复制成功')
            }
        })
    }
})

var code = [
`router.get('/demo', controllers.demo)`,
`module.exports = ctx => {
    ctx.state.data = {
        msg: 'Hello World'
    }
}`
]
