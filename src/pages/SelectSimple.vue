<template>
  <TimeLayout></TimeLayout>
  <SelectLayout style="margin-top: 30px"></SelectLayout>
  <IconsSimple style="text-align: center; margin: 50px auto auto; width: 50%"></IconsSimple>
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