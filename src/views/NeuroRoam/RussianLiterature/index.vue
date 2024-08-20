<template>
  <div class="contant_wrapper">
    <div class="right_nav">
      <a-anchor :affix="false" :items="anchorItems" @click="handleAnchorClick"></a-anchor>
    </div>
    <div id="rshorttext">
      <div id="phycho">
        我看完契诃夫的短篇小说合集后印象印象非常深刻的一篇，想要拯救妓女？得先救男人。百年前的契诃夫说。
      </div>
    </div>
    <div id="master"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const anchorItems = ref([
  {
    key: "1",
    href: "#rshorttext",
    title: "短篇",
    children: [
      {
        key: "1_1",
        href: "#phycho",
        title: "精神错乱"
      }
    ]
  },
  {
    key: "2",
    href: "#master",
    title: "大师与玛格丽特"
  }
]);

function handleAnchorClick(e, link) {
  // 阻止点击的默认事件修改路由
  e.preventDefault();
}
</script>

<style lang="less" scoped>
.contant_wrapper {
  padding: 10px 210px 0px 30px;
}
.right_nav {
  padding: 10px;
  position: fixed;
  top: 50px;
  right: 50px;
}
</style>
