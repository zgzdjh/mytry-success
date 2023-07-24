// pages/makeQRCode/makeQRCode.js
import Card from '../../utils/painter/palette/index'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    image: '',
    paintPallette: '',
    // 调色板数据
    paletteData: {
      QRCodeText: "2d44d6c26134f8a109df65897107089a2d44d6c26134f8a109df65897107089a",
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    // 获取屏幕数据
    this.setScrollData()
  },

  /**
   * 获取屏幕数据
   */
  setScrollData() {
    var that = this

    let { paletteData } = that.data
    
    wx.getSystemInfo({
      success: function (res) {
        var rate = 750 / res.windowWidth
        var screenHeight = res.windowHeight * rate


        paletteData.screenData = {
          screenHeight : screenHeight + 'rpx',
          screenWidth : '750rpx'
        }

        that.setData({
          paletteData : paletteData
        })
      }
    })
  },

  /**
   * 返回图片路径
   * @param {*} e 
   */
  onImgOK(e) {
    let { image } = this.data

    image = e.detail.path

    this.setData({
      image: image,
    })
  },

  /**
   * 保存图片
   */
  saveImage() {
    let { image } = this.data
    if (image || image.length > 0) {
      wx.saveImageToPhotosAlbum({
        filePath: image,
        success(data) {
          wx.showModal({
            title: '提示',
            content: '保存成功',
            showCancel: false,
          })
        },
        fail(data) {
          if (err.errMsg === "saveImageToPhotosAlbum:fail:auth denied" || err.errMsg === "saveImageToPhotosAlbum:fail auth deny" || err.errMsg === "saveImageToPhotosAlbum:fail authorize no response") {
            wx.showModal({
              title: '提示',
              content: '需要您授权保存相册',
              showCancel: false,
              success: modalSuccess => {
                wx.openSetting({
                  success(settingdata) {
                    if (settingdata.authSetting['scope.writePhotosAlbum']) {
                      console.log('获取权限成功，请再次长按图片保存到相册。')
                    } else {
                      console.log('获取权限失败，没有权限无法正常使用')
                    }
                  }
                })
              }
            })
          }
  
        }
      });
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let { paletteData } = this.data

    this.setData({
      paintPallette: new Card().palette(paletteData)
    })
  },
})