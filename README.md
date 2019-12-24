# 目录
- [目录](#%e7%9b%ae%e5%bd%95)
- [仓库介绍](#%e4%bb%93%e5%ba%93%e4%bb%8b%e7%bb%8d)
- [分支项目介绍](#%e5%88%86%e6%94%af%e9%a1%b9%e7%9b%ae%e4%bb%8b%e7%bb%8d)
  - [APP下载](#app%e4%b8%8b%e8%bd%bd)
  - [场站查询](#%e5%9c%ba%e7%ab%99%e6%9f%a5%e8%af%a2)
  - [缴费开闸](#%e7%bc%b4%e8%b4%b9%e5%bc%80%e9%97%b8)
  - [提前缴费](#%e6%8f%90%e5%89%8d%e7%bc%b4%e8%b4%b9)
  - [酒店商圈](#%e9%85%92%e5%ba%97%e5%95%86%e5%9c%88)
  - [沃尔玛优惠](#%e6%b2%83%e5%b0%94%e7%8e%9b%e4%bc%98%e6%83%a0)
  
# 仓库介绍
本仓库是管理 __贵阳智投停车__ 项目的各种零散小项目，每一个 `d-*` 格式的分支为一个小项目，而且他们部署在不同的地方，非常凌乱，具体介绍查看下方：

|分支名|用途|描述|状态
|---|---|---|---|
|`c-common`| 公共分支| 这个分支的内容可能会被其它d-*分支使用| 受保护|
|`d-app-download`| APP下载| APP下载页| 开发|
|`d-parking-search`| 场站查询| 场站查询页面| 开发|
|`d-pay`| 缴费开闸| 在闸机处识别到车牌，扫码支付，开闸出场 | 开发|
|`d-pay-in-advance`| 提前缴费| 在停车场内扫码提前缴费，缴费后15分钟内离场| 开发|
|`d-walmart`| 沃尔玛 | 酒店商圈-沃尔玛 | 开发|
|`d-novotel`| 诺富特酒店 | 酒店商圈-诺富特酒店 | 开发|
|`z-backup-gulp`| gulp备份分支 | 最开始用gulp构建项目，后来改为webpack，所以备份此分支 | 受保护|
|`z-backup-webpack`| webpack备份分支 | webpack打包构建多页应用，一番衡量后，选择用分支单独管理各自的单页应用，所以备份此分支 | 受保护|

# 分支项目介绍

## APP下载
- [测试地址](http://gy.parking.vpclub.cn/store-mobile/app-download.html)  
`http://gy.parking.vpclub.cn/store-mobile/app-download.html`

- 测试服务器   
  `root@172.16.18.1:/mnt/ztev-store-mobile/app-download.html`

- [生产地址](http://gyparking.zxnenergy.com/hotel/app-download.html)  
`http://gyparking.zxnenergy.com/hotel/app-download.html`

- 生产服务器  
  `root@120.24.64.215:/mnt/evcs/hotel/app-download.html`

## 场站查询
- [测试地址](http://gy.parking.vpclub.cn/store-mobile/parking-search.html)  
`http://gy.parking.vpclub.cn/store-mobile/parking-search.html`

- 测试服务器   
  `root@172.16.18.1:/mnt/ztev-store-mobile/parking-search.html`

- [生产地址](http://gyparking.zxnenergy.com/app/myWechat/parking-search.html)  
`http://gyparking.zxnenergy.com/app/myWechat/parking-search.html`

- 生产服务器  
  `由后端同时构建到他们到项目中发布`

## 缴费开闸
停车场不同，地址不同。
- 生产地址  
  [管理后台](http://gyparking.zxnenergy.com/admin/index.html#ztev-park-station-manage) -> 设备管理 -> 停车场管理 -> 详情 -> 二维码管理 -> 离场原链接
  
- 测试地址  
  先获取【生产地址】，然后将地址中的 `applyLeave.do` 替换成 `hotelApplyLeave.do`。  

- 测试服务器   
  `root@120.24.64.215:/mnt/evcs/hotel/noLicenseExit.html`

- 生产服务器  
  `由后端同时构建到他们到项目中发布`

下面列出部分停车场：

| 场站 | 地址 |
| --- | --- |
|富水路停车场|[测试](https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc1f1af9c55958086&redirect_uri=http%3A%2F%2Fgyparking.zxnenergy.com%2Fapp%2FparkingChargeWechat%2Fpay%2FhotelApplyLeave.do%3FstationOid%3Dztev.plstation%3D0x020211011100000005%26barrierOid%3D20191015113411d49faa83d4794513a42542f55ff153c5&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect) ---- [生产](https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc1f1af9c55958086&redirect_uri=http%3A%2F%2Fgyparking.zxnenergy.com%2Fapp%2FparkingChargeWechat%2Fpay%2FapplyLeave.do%3FstationOid%3Dztev.plstation%3D0x020211011100000005%26barrierOid%3D20191015113411d49faa83d4794513a42542f55ff153c5&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect)|
|大十字广场停车场|[测试](https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc1f1af9c55958086&redirect_uri=http%3A%2F%2Fgyparking.zxnenergy.com%2Fapp%2FparkingChargeWechat%2Fpay%2FhotelApplyLeave.do%3FstationOid%3Dztev.plstation%3D0x040411081800000001%26barrierOid%3D2019102314354193e3f128b7774069b156304e579d2453&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect) ---- [生产](https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc1f1af9c55958086&redirect_uri=http%3A%2F%2Fgyparking.zxnenergy.com%2Fapp%2FparkingChargeWechat%2Fpay%2FapplyLeave.do%3FstationOid%3Dztev.plstation%3D0x040411081800000001%26barrierOid%3D2019102314354193e3f128b7774069b156304e579d2453&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect)|


## 提前缴费

- [测试地址](https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc1f1af9c55958086&redirect_uri=http%3A%2F%2Fgyparking.zxnenergy.com%2Fhotel%2FparkingPay.html&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect) （用微信访问）  
`https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc1f1af9c55958086&redirect_uri=http%3A%2F%2Fgyparking.zxnenergy.com%2Fhotel%2FparkingPay.html&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`

- 测试服务器   
  `root@120.24.64.215:/mnt/evcs/hotel/noLicenseExit.html`

- [生产地址](http://gyparking.zxnenergy.com/app/pay/queryCarNo.html) （用微信访问）  
`http://gyparking.zxnenergy.com/app/pay/queryCarNo.html`
  
- 生产服务器  
  `由后端同时构建到他们到项目中发布`

## 酒店商圈
- [测试地址](http://gy.parking.vpclub.cn/store-mobile/)  
`http://gy.parking.vpclub.cn/store-mobile/`

- 测试服务器  
  `root@172.16.18.1:/mnt/ztev-store-mobile/index.html`

- [生产地址](http://gyparking.zxnenergy.com/hotel/)  
`http://gyparking.zxnenergy.com/hotel/`
  
- 生产服务器  
  `root@120.24.64.215:/mnt/evcs/hotel/index.html`


## 沃尔玛优惠

- [生产地址](http://gyparking.zxnenergy.com/app/QRcode/index.html?checkCode=84aded4ef4ad4f41bcda408a28a9f2c0&businessId=4)  
`http://gyparking.zxnenergy.com/app/QRcode/index.html?checkCode=84aded4ef4ad4f41bcda408a28a9f2c0&businessId=4`
  
- 生产服务器  
  `由后端同时构建到他们到项目中发布`


