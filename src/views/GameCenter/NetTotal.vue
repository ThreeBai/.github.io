<template>
  <div>
    <v-chart class="chart" :option="option" autoresize />
  </div>
</template>

<script setup>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import { TitleComponent, TooltipComponent, LegendComponent } from "echarts/components";
import VChart from "vue-echarts";
import { ref } from "vue";

import { mdiGithub } from "@mdi/js";

use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent, LegendComponent]);

const echartData = [
  { value: 100, name: "overwatch" },
  { value: 100, name: "MHW" },
  { value: 100, name: "A" },
  { value: 100, name: "C" },
  { value: 100, name: "R" }
];

const data = [];
var colorList = ["#00ffff", "#ffe000", "#9663b2", "#006ced", "#ffa800"];
for (var i = 0; i < echartData.length; i++) {
  data.push(
    {
      value: echartData[i].value,
      name: echartData[i].name,
      itemStyle: {
        color: colorList[i],
        borderWidth: 1,
        shadowBlur: 20,
        borderColor: colorList[i],
        shadowColor: colorList[i]
      }
    },
    {
      value: 10,
      name: "",
      itemStyle: {
        label: { show: false },
        labelLine: { show: false },
        color: "rgba(0, 0, 0, 0)",
        borderColor: "rgba(0, 0, 0, 0)",
        borderWidth: 0
      }
    }
  );
}
echartData.forEach((item, index) => {});

const option = ref({
  title: {
    text: "Online Games",
    top: "48%",
    textAlign: "center",
    left: "49%",
    textStyle: {
      color: "#9663b2",
      fontSize: 18
    },
    x: "center",
    y: "center"
  },
  series: [
    {
      name: "",
      type: "pie",
      clockWise: false,
      radius: ["45%", "47%"],
      itemStyle: {
        normal: {
          label: {
            show: true,
            position: "outside",
            color: "#ddd",
            formatter: function (params) {
              if (params.name !== "") {
                return params.name + "\n" + "\n";
              } else {
                return "";
              }
            }
          },
          labelLine: {
            length: 20,
            length2: 20,
            show: true
          }
        }
      },
      data: data
    }
  ]
});
</script>

<style lang="less" scoped>
.chart {
  height: 300px;
  width: 300px;
}
</style>
