<template>
  <div class="contant_wrapper">
    <div class="right_nav">
      <a-anchor :affix="false" :items="anchorItems" @click="handleAnchorClick"></a-anchor>
    </div>
    <div id="shorttext">
      <div id="bravepeople">
        <v-md-preview :text="braveMDT"></v-md-preview>
      </div>
      <div id="myparents">
        <v-md-preview :text="parentsMDT"></v-md-preview>
      </div>
      <div id="carefordie">
        <v-md-preview :text="carefordieMDT"></v-md-preview>
      </div>
    </div>
    <div id="girls">
      <v-md-preview :text="girlsMDT"></v-md-preview>
    </div>
    <div id="endlesscanon">
      <v-md-preview :text="endlessCanonMDT"></v-md-preview>
    </div>
    <div id="bfishinsky">
      <v-md-preview :text="fishMDT"></v-md-preview>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import endlessCanonMDT from "./endlessCanon.md?raw";
import braveMDT from "./brave.md?raw";
import parentsMDT from "./parents.md?raw";
import carefordieMDT from "./carefordie.md?raw";
import girlsMDT from "./girls.md?raw";
import fishMDT from "./bfishinsky.md?raw";
const anchorItems = ref([
  {
    key: "1",
    href: "#shorttext",
    title: "短篇",
    children: [
      {
        key: "1_1",
        href: "#bravepeople",
        title: "勇敢的人用刀剑"
      },
      {
        key: "1_2",
        href: "#myparents",
        title: "我的父亲母亲"
      },
      {
        key: "1_2",
        href: "#carefordie",
        title: "临终关怀"
      }
    ]
  },
  {
    key: "2",
    href: "#girls",
    title: "33号女子宿舍"
  },
  {
    key: "3",
    href: "#endlesscanon",
    title: "无终卡农"
  },
  {
    key: "4",
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
