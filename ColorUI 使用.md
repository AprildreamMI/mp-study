# ColorUI 使用



## 分享转发

```javascript
onShareAppMessage() {
    return {
      title: 'ColorUI-高颜值的小程序UI组件库',
      imageUrl: '/images/share.jpg',
      path: '/pages/index/index'
    }
  }
```

## 留一个cu-tabbar-height 的高度

```javascript
<view class='cu-tabbar-height'></view>
```

## 自定义导航栏

`cu-custom.wxml`

```javascript
<view class="cu-custom" style="height:{{CustomBar}}px">
  <view class="cu-bar fixed {{bgImage!=''?'none-bg text-white bg-img':''}} {{bgColor}}" style="height:{{CustomBar}}px;padding-top:{{StatusBar}}px;{{bgImage?'background-image:url(' + bgImage+')':''}}">
    <view class="action" bindtap="BackPage" wx:if="{{isBack}}">
      <text class="cuIcon-back"></text>
      <slot name="backText"></slot>
    </view>
    <view class="action border-custom" wx:if="{{isCustom}}" style="width:{{Custom.width}}px;height:{{Custom.height}}px;margin-left:calc(750rpx - {{Custom.right}}px)">
      <text class="cuIcon-back" bindtap="BackPage"></text>
      <text class="cuIcon-homefill" bindtap="toHome"></text>
    </view>
    <view class="content" style="top:{{StatusBar}}px">
      <slot name="content"></slot>
    </view>
    <slot name="right"></slot>
  </view>
</view>
```

`cu-custom.js`

```javascript
const app = getApp();
Component({
  /**
   * 组件的一些选项
   */
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  /**
   * 组件的对外属性
   */
  properties: {
    bgColor: {
      type: String,
      default: ''
    }, 
    isCustom: {
      type: [Boolean, String],
      default: false
    },
    isBack: {
      type: [Boolean, String],
      default: false
    },
    bgImage: {
      type: String,
      default: ''
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom
  },
  /**
   * 组件的方法列表
   */
  methods: {
    BackPage() {
      wx.navigateBack({
        delta: 1
      });
    },
    toHome(){
      wx.reLaunch({
        url: '/pages/index/index',
      })
    }
  }
})
```

