<template>
<CommonLayout class="layout" onselect="document.selection.empty()"></CommonLayout>
<!--  <Test></Test>-->
  <img src="./assets/back_high_sierra.jpg" class="background">
</template>

<script>

import {defineComponent} from "vue";
import CommonLayout from "@/layouts/CommonLayout.vue";
// import Test from "@/layouts/Test.vue";

export default defineComponent({
  components: {CommonLayout}
})
</script>

<style>
.layout {
  min-height: 100%;
}
.background {
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: hidden;
  z-index: -100;
}
</style>
