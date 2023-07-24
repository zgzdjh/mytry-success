export default class painterImage {
  palette(paletteData) {

    return ({
      width: paletteData.screenData.screenWidth,
      height: paletteData.screenData.screenHeight,
      background: '#fff',
      // background: 'http://127.0.0.1:5500/1.png',
      views: [
        {
          type: "text",
          text: "玉兰微服务",
          css: {
            color: '#fff',
            fontSize: '80rpx',
            top: '45rpx',
            left: '180rpx'
          }
        },
        {
          type: "text",
          text: "主楼",
          css: {
            color: '#283dac',
            fontSize: '70rpx',
            top: '250rpx',
            left: '300rpx'
          }
        },
        {
          type: "qrcode",
          content: paletteData.QRCodeText,
          css: {
            width: '500rpx',
            height: '500rpx',
            top: '400rpx',
            left: '125rpx'
          }
        },
        {
          type: "image",
          url: "https://yunzhu-1256190158.cos.ap-beijing.myqcloud.com/logo/yulanweifuwu.png",
          css: {
            width: "100rpx",
            height: "100rpx",
            top: '985rpx',
            left: '70rpx'
          }
        },
        {
          type: "text",
          text: "请用《玉兰微服务》小程序扫码",
          css: {
            color: '#a0a0a0',
            fontSize: '35rpx',
            top: '1015rpx',
            left: '180rpx'
          }
        }
      ]
    })
  }
}
