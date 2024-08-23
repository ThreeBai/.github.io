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

import owlogo from "@/assets/gamelogo/ow.png";
import mhwlogo from "@/assets/gamelogo/mhw.png";
import cslogo from "@/assets/gamelogo/csgo.png";
import apexlogo from "@/assets/gamelogo/apex.png";
import remlogo from "@/assets/gamelogo/rem.png";

use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent, LegendComponent]);

const echartData = [
  { value: 100, name: "overwatch" },
  { value: 100, name: "MHW" },
  { value: 100, name: "CSGO" },
  { value: 100, name: "Apex Legends" },
  { value: 100, name: "REMNANT" }
];

const data = [];
var colorList = ["#ffd230", "#53852f", "#262e70", "#df3e36", "#85afe1"];
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

const option = ref({
  title: {
    text: "Online",
    top: "48%",
    textAlign: "center",
    left: "48%",
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
      clockwise: false,
      radius: ["20%", "24%"],
      label: {
        show: true,
        position: "outside",
        color: "#ddd",
        formatter: function (params) {
          if (params.name !== "") {
            switch (params.name) {
              case "overwatch":
                return "{ow|}";
              case "MHW":
                return "{mhw|}";
              case "CSGO":
                return "{csgo|}";
              case "Apex Legends":
                return "{apex|}";
              case "REMNANT":
                return "{remnant|}";
              default:
                return "";
            }
          } else {
            return "";
          }
        },
        rich: {
          ow: {
            backgroundColor: { image: owlogo },
            align: "center",
            height: 40,
            width: 60
          },
          mhw: {
            backgroundColor: { image: mhwlogo },
            align: "center",
            height: 60,
            width: 80
          },
          csgo: {
            backgroundColor: { image: cslogo },
            align: "center",
            height: 30,
            width: 70
          },
          apex: {
            backgroundColor: { image: apexlogo },
            align: "center",
            height: 30,
            width: 40
          },
          remnant: {
            backgroundColor: { image: remlogo },
            align: "center",
            height: 30,
            width: 40
          }
        }
      },
      labelLine: {
        length: 20,
        length2: 20,
        show: true
      },
      data: data
    }
  ]
});
</script>

<style lang="less" scoped>
.chart {
  width: 100%;
  height: 100%;
}
</style>
