//Page Object
Page({
  data: {
    
  },
  //options(Object)
  onLoad: function(options){
    console.log('-----页面加载时触发。一个页面只会调用一次 index onLoad---------')
  },
  onReady: function(){
    console.log('-----页面初次渲染完成时触发。一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。 index onReady---------')
    
  },
  onShow: function(){
    console.log('-----页面显示/切入前台时触发。 index onShow---------')
    
  },
  onHide: function(){
    console.log('-----页面隐藏/切入后台时触发。 如 wx.navigateTo 或底部 tab 切换到其他页面，小程序切入后台等 index onHide---------')

  },
  onUnload: function(){
    console.log('-----页面卸载时触发。如wx.redirectTo或wx.navigateBack到其他页面时。 index onUnload---------')

  },
  onPullDownRefresh: function(){

  },
  onReachBottom: function(){

  },
  onShareAppMessage: function(){

  },
  onPageScroll: function(){

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item){

  },
  // 跳转到详情页面
  navToInfo (e) {
    let no = e.currentTarget.dataset.id
    // console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: `../list-info/index?id=${no}`
      // url: `../logs/logs?id=${no}`
    })
  }
});