//Page Object
Page({
  data: {
    no: null
  },
  //options(Object)
  onLoad: function(options){
    console.log('-----logos onLoad---------')
    console.log(options)
    this.setData({
      no: options.id
    })
  },
  onReady: function(){
    console.log('-----logos onReady---------')
    
  },
  onShow: function(){
    console.log('-----logos onShow---------')
    
  },
  onHide: function(){
    console.log('-----logos onHide---------')

  },
  onUnload: function(){
    console.log('-----logos onUnload---------')

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

  }
});