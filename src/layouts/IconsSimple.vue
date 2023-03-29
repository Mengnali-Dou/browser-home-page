<template>
  <div class="gutter-example" style="text-align: center">
    <a-row :gutter="[60,50]">
      <a-col class="gutter-row" :span="4">
        <div class="gutter-box">
          <a href="https://www.runoob.com/" target="_blank">
            <img src="../assets/icon-runoob.svg" class="icon-img">
          </a>
          <p class="icon-font">菜鸟教程</p>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="4">
        <div class="gutter-box">
          <a href="http://www.csdn.net/" target="_blank">
            <img src="../assets/icon-csdn.svg" class="icon-img">
          </a>
          <p class="icon-font">CSDN</p>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="4">
        <div class="gutter-box">
          <a href="https://translate.google.cn/" target="_blank">
            <img src="../assets/icon-google-translate.svg" class="icon-img">
          </a>
          <p class="icon-font">Google翻译</p>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="4">
        <div class="gutter-box">
          <a href="https://mp.weixin.qq.com/" target="_blank">
            <img src="../assets/icon-developer-wechat.svg" class="icon-img">
          </a>
          <p class="icon-font">微信公众平台</p>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="4">
        <div class="gutter-box">
          <a href="https://cn.vuejs.org/" target="_blank">
            <img src="../assets/icon-vue.svg" class="icon-img">
          </a>
          <p class="icon-font">Vue3</p>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="4">
        <div class="gutter-box">
          <a href="https://github.com/" target="_blank">
            <img src="../assets/icon-github.svg" class="icon-img">
          </a>
          <p class="icon-font">Github</p>
        </div>
      </a-col>
    </a-row>
    <a-row :gutter="[60,50]" class="row">
      <a-col class="gutter-row" :span="4">
        <div class="gutter-box">
          <a href="http://www.bilibili.com/" target="_blank">
            <img src="../assets/icon-bilibili.svg" class="icon-img">
          </a>
          <p class="icon-font">哔哩哔哩</p>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="4">
        <div class="gutter-box">
          <a href="https://www.zhihu.com/" target="_blank">
            <img src="../assets/icon-zhihu.svg" class="icon-img">
          </a>
          <p class="icon-font">知乎</p>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="4">
        <div class="gutter-box">
          <a href="https://www.iconfont.cn/" target="_blank">
            <img src="../assets/icon-iconfont.svg" class="icon-img">
          </a>
          <p class="icon-font">Iconfont</p>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="4">
        <div class="gutter-box">
          <a href="https://www.jd.com/" target="_blank">
            <img src="../assets/icon-jd.svg" class="icon-img">
          </a>
          <p class="icon-font">京东</p>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="4">
        <div class="gutter-box">
          <a href="https://www.taobao.com/" target="_blank">
            <img src="../assets/icon-taobao.svg" class="icon-img" style="background-color: #ffffff">
          </a>
          <p class="icon-font">淘宝</p>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="4">
        <div class="gutter-box">
          <a href="https://www.tmall.com/" target="_blank">
            <img src="../assets/icon-tmall.svg" class="icon-img">
          </a>
          <p class="icon-font">天猫</p>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<style scoped>
.gutter-example :deep(.ant-row > div) {
  background: transparent;
  border: 0;
}
.gutter-box {
  /*background: #00a0e9;*/
  padding: 5px 0;
}
.gutter-row {

}
.row {
  margin-top: 30px;
}
.icon-img {
  height: 60px;
  border-radius: 10px;
}
.icon-font {
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 10px;
  color: #ffffff;
}
</style>