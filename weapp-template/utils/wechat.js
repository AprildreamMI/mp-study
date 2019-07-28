const api = require('../api/index')

/**
 * 获取用户信息
 */
function getUserInfo () {
  return new Promise((resolve, reject) => {
    wx.getUserInfo({ success: resolve, fail: reject })
  })
}

/**
 * 异步的设置缓存
 * @param {*} key 
 * @param {*} value 
 */
function setStorage (key, value) {
  return new Promise((resolve, reject) => {
    wx.setStorage({ key: key, data: value, success: resolve, fail: reject })
  })
}

/**
 * 异步的获取缓存
 * @param {*} key 
 */
function getStorage (key) {
  return new Promise((resolve, reject) => {
    wx.getStorage({ key: key, success: resolve, fail: reject })
  })
}

function getLocation (type) {
  return new Promise((resolve, reject) => {
    wx.getLocation({ type: type, success: resolve, fail: reject })
  })
}

/**
 * 登录
 */
function login () {
  return new Promise((resolve, reject) => {
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        // 缓存设置code 码
        setStorage('code', res.code)
        // 设置登录时间
        setStorage('loginTime', new Date())
        // 传入code 码 获取token
        api.getAuthenticate({
          code: res.code
        }).then(data => {
          if (data.data.code === 0) {
            // 设置开放id
            setStorage('openId', data.data.open_id)
            // 设置uid
            setStorage('unionId', data.data.data.union_id)
            // 缓存token
            setStorage('token', data.data.data.token).then(res => {
              // 调用成功回调
              resolve(data)
            })
          } else {
            console.log('登录失败')
            // 调用失败回调
            reject(data)
          }
        }).catch(err => {
          // 封装的方法错误了
          reject()
          console.error('登录失败', err)
        })
      }
    })
  })
}

module.exports = {
  login,
  getUserInfo,
  setStorage,
  getStorage,
  getLocation,
  original: wx
}
