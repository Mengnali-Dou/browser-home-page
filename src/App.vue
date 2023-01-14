<template>
<CommonLayout class="layout"></CommonLayout>
</template>

<script>

import {defineComponent} from "vue";
import CommonLayout from "@/layouts/CommonLayout.vue";

export default defineComponent({
  components: {CommonLayout}
})
</script>

<style>
.layout {
  min-height: 100%;
}
</style>
