<template>
  <TimeLayout></TimeLayout>
  <SelectLayout style="margin-top: 30px"></SelectLayout>
  <IconsSimple></IconsSimple>
</template>

<script>
import TimeLayout from "@/layouts/TimeLayout.vue";
import SelectLayout from "@/layouts/SelectLayout.vue";
import IconsSimple from "@/layouts/IconsSimple.vue";
export default {
  components: {
    IconsSimple,
    TimeLayout,
    SelectLayout,
  },
};
</script>

<style scoped>

</style>