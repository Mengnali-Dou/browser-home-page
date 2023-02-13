<template>
  <div class="header">header</div>
  <div class="center">center</div>
  <div class="footer">footer</div>
</template>

<script>
export default {
  name: "Test-test"
}
</script>

<style scoped>
.header {
  position: absolute;
  top: 0;
  width: 100%;
  height: 80px;
}

.center {
  position: absolute;
  top: 80px;
  bottom: 80px;
  width: 100%;
  height: auto;
}

.footer {
  position: absolute;
  height: 80px;
  width: 100%;
  bottom: 0;
}
</style>