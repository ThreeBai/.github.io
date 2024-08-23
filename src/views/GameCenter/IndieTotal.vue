<template>
  <div>
    <v-chart class="chart01" :option="option" autoresize />
  </div>
</template>

<script setup>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { GraphChart } from "echarts/charts";
import { TitleComponent, TooltipComponent, LegendComponent } from "echarts/components";
import VChart from "vue-echarts";
import { ref } from "vue";

use([CanvasRenderer, GraphChart, TitleComponent, TooltipComponent, LegendComponent]);

const echartData = [
  { name: "IT TAKES TWO", size: 50 },
  { name: "HADES & HADES II", size: 60 },
  { name: "Hi-fi Rush", size: 70 },
  { name: "For the King", size: 80 },
  { name: "Trine4", size: 90 },
  { name: "Disco Elysium", size: 90 },
  { name: "Life is Strange", size: 90 },
  { name: "Slay the spire", size: 90 }
];
var color = [
  "#9663b2",
  "#56C7F6",
  "#F9F08A",
  "#6DFFA1",
  "#fed8b1",
  "#fc3d49",
  "#006d77",
  "#f1faee"
];

const data = [];
echartData.map((item, index) => {
  data.push({
    name: item.name,
    // value: 111,
    symbolSize: item.size,
    draggable: true,
    itemStyle: {
      color: {
        type: "radial",
        x: 0.5,
        y: 0.5,
        r: 1.6,
        colorStops: [
          { offset: 0.2, color: "transparent" },
          { offset: 0.8, color: color[index] }
        ]
      },
      opacity: 1,
      borderWidth: 1,
      borderColor: color[index],
      shadowBlur: 7,
      symbolOffset: 0.6,
      shadowColor: color[index]
    }
  });
});
const option = ref({
  animationDurationUpdate: function (idx) {
    return idx * 100;
  },
  animationEasingUpdate: "bounceIn",
  series: [
    {
      type: "graph",
      layout: "force",
      cursor: "pointer",
      force: {
        repulsion: 200,
        edgeLength: 100
      },
      roam: true,
      label: { show: true },
      data
    }
  ]
});
</script>

<style lang="less" scoped>
.chart01 {
  width: 100%;
  height: 100%;
}
</style>
