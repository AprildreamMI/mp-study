Page({
  data: {
    // 快递单号
    no: '1234567',
    // 快递详情
    expressInfo: {}
  },
  onLoad: function(options) {
    //Do some initialize when page load.
    
  },
  onReady: function() {
    //Do some when page ready.
    
  },
  onShow: function() {
    //Do some when page show.
    
  },
  onHide: function() {
    //Do some when page hide.
    
  },
  onUnload: function() {
    //Do some when page unload.
    
  },
  onPullDownRefresh: function() {
    //Do some when page pull down.
    
  },
  // 输入框的Input事件
  searchInput (e) {
    this.setData({
      no: e.detail.value
    })
  },
  // 监听点击事件 
  searchButtonClick () {
    this.getExpressInfo()
  },
  // 获取快递详情
  getExpressInfo () {
    var reqTask = wx.request({
      url: 'https://wuliu.market.alicloudapi.com/kdi',
      data: {
        no: this.data.no
      },
      header: {
        'Authorization':'APPCODE 99da55a5bc3c4b358257cd2040467aea'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        if (result.data.status === '0') {
          this.setData({
            expressInfo: result.data.result
          })
        }
        console.log(this.data.expressInfo)
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  }
})