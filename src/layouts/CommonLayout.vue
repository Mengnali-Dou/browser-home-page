<template>
  <a-layout class="layout">
    <a-layout-header>

    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <SelectMinimalist />
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      <div style="float: left">
        <a-space>
<!--          <setting-outlined id="settingIcon" style="font-size: 25px" @mouseenter="settingEnter" @mouseleave="settingLeave"/>-->
          <a-button shape="circle" :size="size" @click="showDrawer('large')" type="primary">
            <template #icon><SettingOutlined /></template>
          </a-button>
        </a-space>
      </div>
      <div style="margin-top: 1%">
        <span class="task_name">{{slogans[4]}}</span>
      </div>
    </a-layout-footer>
  </a-layout>
  <a-drawer
      v-model:visible="visible"
      class="custom-class"
      style="color: red"
      title="设置"
      placement="right"
      :size="size"
      @after-visible-change="afterVisibleChange"
  >
    <SettingLayout></SettingLayout>
  </a-drawer>
</template>
<script>
import { defineComponent, ref } from 'vue';
import { SettingOutlined } from '@ant-design/icons-vue';
import SettingLayout from "@/layouts/SettingLayout.vue";
import SelectMinimalist from "@/pages/SelectMinimalist.vue";
export default defineComponent({
  setup() {
    const visible = ref(false);
    const size = ref('default')
    const afterVisibleChange = bool => {
      console.log('visible', bool);
    };
    const showDrawer = val => {
      size.value = val;
      visible.value = true;
    };
    const slogans = [
      "「 人生没有彩排，只有现场直播，所以做最好的自己。 」",
      "「 欲买桂花同载酒，荒泷天下第一斗。 」",
      "「 impossible 的完整形式是 i'm possible. 」",
      "「 Never be limited by other people’s limited imaginations. 」",
      "「 把你的全部奉献给你所热爱的一切。 」",
      "「 世间有蜉蝣，朝生暮死，盼情浓。今生无羁绊，缘深缘浅，皆成空。 」",
      "「 心若有所期，何惧道阻且长。 」",
      "「 旅人不识清明雨，深院碧桃香红袖。 」",
      "「 没有BUG的代码是不完美的！ 」"
    ];
    return {
      selectedKeys: ref(['2']),
      // size: ref('large'),
      visible,
      size,
      afterVisibleChange,
      showDrawer,
      slogans,
    };
  },
  components: {
    SettingLayout,
    SettingOutlined,
    SelectMinimalist,
  },
  data() {
    return {
      iconWidth: 25,
      coverIconWidth: 30,
      showAnimate: false
    }
  },
  methods: {
    settingEnter() {
      // console.log("setting")
      document.getElementById('settingIcon').style.fontSize = this.coverIconWidth + 'px';
    },
    settingLeave() {
      document.getElementById('settingIcon').style.fontSize = this.coverIconWidth + 'px';
    },
  }
});
</script>
<style>
.site-layout-content {
  min-height: 100%;
  padding: 24px;
  background: #fff;
}
#components-layout-demo-top .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}
.layout{
  height: 100vh;
}
.changeIcon {
  display: block;
  font-size: 30px
}

[data-theme='dark'] .site-layout-content {
  background: #141414;
}
</style>