import { theme } from "ant-design-vue";

const { defaultAlgorithm } = theme;

/** 主题色 */
export const themeConfigs = {
  dark: {
    algorithm: defaultAlgorithm,
    token: {
      colorBgSpotlight: "#252525",
      colorPrimary: "#9970e6",
      colorInfo: "#9970e6",
      colorTextBase: "#dfdfdf",
      colorBgBase: "#252525",
      colorPrimaryBg: "#343434"
    }
  },
  light: {
    algorithm: defaultAlgorithm,
    token: {
      colorBgSpotlight: "#252525",
      colorPrimary: "#3d3592",
      colorInfo: "#3d3592",
      colorTextBase: "#2c2c2c",
      colorBgBase: "#f1f1f1",
      colorPrimaryBg: "#e6e6e6"
    }
  }
};
