<template>
  <div>
    <div class="right_nav">
      <a-anchor :affix="false" :items="anchorItems" @click="handleAnchorClick"></a-anchor>
    </div>
    <div id="shorttext">
      <div id="bravepeople">勇敢</div>
      <div id="myparents">我的</div>
    </div>
    <div id="endlesscanon">
      <v-md-preview :text="endlessCanonMDT"></v-md-preview>
    </div>
    <div id="bfishinsky">2222</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import endlessCanonMDT from "./endlessCanon.md?raw";

const anchorItems = ref([
  {
    key: "1",
    href: "#shorttext",
    title: "短篇",
    children: [
      {
        key: "3_1",
        href: "#bravepeople",
        title: "勇敢的人用刀剑"
      },
      {
        key: "3_2",
        href: "#myparents",
        title: "我的父亲和母亲"
      }
    ]
  },
  {
    key: "3",
    href: "#endlesscanon",
    title: "无终卡农"
  },
  {
    key: "2",
    href: "#bfishinsky",
    title: "天空上的香蕉鱼"
  }
]);

function handleAnchorClick(e, link) {
  // 阻止点击的默认事件修改路由
  e.preventDefault();
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
