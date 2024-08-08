import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useStyleSettingStore = defineStore("styleSetting", () => {
  const sysTheme = ref("sysTheme", "dark");

  watch([sysTheme], ([newSysTheme], [oldSysTheme]) => {
    if (newSysTheme !== oldSysTheme) {
      if (newSysTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  });
  function changeSysTheme(val) {
    sysTheme.value = val;
  }
  return {
    sysTheme,
    changeSysTheme
  };
});
