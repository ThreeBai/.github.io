<template>
  <div>“我总是声称，命运就是我的游戏。”</div>
  <div class="total_wrapper">
    <NetTotal class="net_total"></NetTotal>
    <IndieTotal class="indie_total"></IndieTotal>
  </div>
</template>

<script setup>
import NetTotal from "./NetTotal.vue";
import IndieTotal from "./IndieTotal.vue";
</script>

<style lang="less" scoped>
.total_wrapper {
  height: 420px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.net_total {
  height: 100%;
  width: 50%;
  min-width: 280px;
  flex-grow: 1;
}
.indie_total {
  height: 100%;
  min-width: 280px;
  width: 50%;
  flex-grow: 1;
}
</style>
