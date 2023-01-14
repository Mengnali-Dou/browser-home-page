<template>
  <a-layout>
    <a-layout-sider
        breakpoint="lg"
        collapsed-width="0"
        theme="light"
        width="150"
        @collapse="onCollapse"
        @breakpoint="onBreakpoint"
    >
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="light" mode="inline">
        <a-menu-item key="1" name="theme">
          <layout-outlined />
          <span class="nav-text">主题</span>
        </a-menu-item>
        <a-menu-item key="2" name="wallpaper">
          <picture-outlined />
          <span class="nav-text">壁纸</span>
        </a-menu-item>
        <a-menu-item key="3" name="icon">
          <info-circle-outlined />
          <span class="nav-text">图标</span>
        </a-menu-item>
        <a-menu-item key="4" name="time">
          <calendar-outlined />
          <span class="nav-text">时间&nbsp;/&nbsp;日期</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <template v-if="active === 'theme'">
        <SettingTheme></SettingTheme>
      </template>
      <template v-if="active === 'wallpaper'">
        <SettingWallpaper></SettingWallpaper>
      </template>
      <template v-if="active === 'icon'">
        <SettingIcon></SettingIcon>
      </template>
      <template v-if="active === 'time'">
        <SettingTime></SettingTime>
      </template>
    </a-layout>
  </a-layout>
</template>
<script>
import SettingIcon from "@/pages/SettingIcon.vue";
import SettingTheme from "@/pages/SettingTheme.vue";
import SettingWallpaper from "@/pages/SettingWallpaper.vue";
import { LayoutOutlined, PictureOutlined, InfoCircleOutlined, CalendarOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    SettingIcon,
    SettingWallpaper,
    SettingTheme,
    LayoutOutlined,
    PictureOutlined,
    InfoCircleOutlined,
    CalendarOutlined,
  },
  setup() {
    const onCollapse = (collapsed, type) => {
      console.log(collapsed, type);
    };
    const onBreakpoint = broken => {
      console.log(broken);
    };
    const active = ref("theme");
    return {
      selectedKeys: ref(['1']),
      onCollapse,
      onBreakpoint,
      active,
    };
  },
});
</script>
<style>
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.site-layout-sub-header-background {
  background: #fff;
}

.site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout-sub-header-background {
  background: #141414;
}
</style>