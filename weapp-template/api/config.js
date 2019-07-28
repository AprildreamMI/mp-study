const wechat = require('../utils/wechat')

export const baseURL = 'https://cadre-training-service.yoyohr.com'
// export const baseURL = 'http://192.168.1.124:8070'

function fetchData (method, url, data) {
  const header = {}
  const token = wx.getStorageSync('token')
  token && (header.Authorization = token)
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + url,
      method,
      data,
      header,
      success (res) {
        // 获取新的token
        let newToken = res.header.authorization
        // 同步设置token到缓存中
        newToken && wx.setStorageSync('token', newToken)
        // 当前时间
        const curTime = new Date()
        // 获取登录的事件
        const loginTime = wx.getStorageSync('loginTime')
        // 如果超过时间
        if (curTime - loginTime > 6000000) {
          // 重新调用 wx.login 获取 code 重新 获取 token
          wechat.login().then(res => {
            // 因为 在 wechat.login 中 resolve 就是写在res.data.code === 0 中 所以 这里不需要再进行判断是否等于0
            // 设置登录时间
            wechat.setStorage('loginTime', new Date())
            resolve(res)
          }).catch(err => {
            wx.showToast({
              title: '登录失败，请关闭重试',
              icon: 'none',
              duration: 2000
            })
          })
        } else {
          resolve(res)
        }
        if (res.data.code === 10102 || res.data.code === 10127 || res.data.code === 10126) {
          console.log('token 过期', 10102)
        }
      },
      // 全局的封装请求出错
      fail (err) {
        wx.showToast({
          title: '网络错误，请关闭重试',
          icon: 'none',
          duration: 2000
        })
        // 10102
        reject(err)
      }
    })
  })
}

export function get (url, params) {
  return fetchData('GET', url, params)
}

export function post (url, data) {
  return fetchData('POST', url, data)
}

export function put (url, data) {
  return fetchData('PUT', url, data)
}

export function remove (url, params) {
  return fetchData('DELETE', url, params)
}
