<template>
  <div style="text-align: center; background: #ffffff">
    <a-row :gutter="[16, 24]">
      <a-col :span="4" class="bord">col-4</a-col>
      <a-col :span="4" class="bord">col-4</a-col>
      <a-col :span="4" class="bord">col-4</a-col>
      <a-col :span="4" class="bord">col-4</a-col>
      <a-col :span="4" class="bord">col-4</a-col>
      <a-col :span="4" class="bord">col-4</a-col>
    </a-row>
    <a-row :gutter="[16, 24]">
      <a-col :span="4" class="bord">col-4</a-col>
      <a-col :span="4" class="bord">col-4</a-col>
      <a-col :span="4" class="bord">col-4</a-col>
      <a-col :span="4" class="bord">col-4</a-col>
      <a-col :span="4" class="bord">col-4</a-col>
      <a-col :span="4" class="bord">col-4</a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "IconsSimple"
}
</script>

<style scoped>
.bord {
  border: medium #000000;
}
.a-row {

}
</style>