import { defineStore } from "pinia";
import { reactive, ref, watch } from "vue";
import { themeConfigs } from "@/styles/themeConfig";

export const useStyleSettingStore = defineStore("styleSetting", () => {
  const sysTheme = ref("dark");
  const themeConfig = reactive({
    algorithm: themeConfigs.dark.darkAlgorithm,
    token: themeConfigs.dark.token
  });

  watch([sysTheme], ([newSysTheme], [oldSysTheme]) => {
    if (newSysTheme !== oldSysTheme) {
      if (newSysTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      themeConfig.algorithm = themeConfigs[newSysTheme].algorithm;
      themeConfig.token = themeConfigs[newSysTheme].token;
    }
  });
  function changeSysTheme(val) {
    sysTheme.value = val;
  }
  return {
    sysTheme,
    themeConfig,
    changeSysTheme
  };
});
