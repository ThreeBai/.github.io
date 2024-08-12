<template>
  <div>
    <div class="right_nav">
      <a-anchor :affix="false" :items="anchorItems" @click="handleAnchorClick"></a-anchor>
    </div>
    <div id="canon" style="height: 1000px">11111</div>
    <div id="testtwo">2222</div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const anchorItems = ref([
  {
    key: "1",
    href: "canon",
    title: "无终卡农"
  },
  {
    key: "2",
    href: "testtwo",
    title: "天空上的香蕉鱼"
  },
  {
    key: "3",
    href: "#api",
    title: "短篇",
    children: [
      {
        key: "3_1",
        href: "#anchor-props",
        title: "我的父亲和母亲"
      },
      {
        key: "3_2",
        href: "#link-props",
        title: "勇敢的人用刀剑"
      }
    ]
  }
]);

function handleAnchorClick(e, link) {
  // 阻止点击的默认事件修改路由
  e.preventDefault();
  var srcolls = document.getElementById(link.href);
  srcolls.scrollIntoView({ block: "start", behavior: "smooth" });
}
</script>

<style lang="less" scoped>
.right_nav {
  padding: 10px;
  position: fixed;
  top: 50px;
  right: 50px;
}
</style>
