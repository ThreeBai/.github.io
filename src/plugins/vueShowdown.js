// import { VueShowdownPlugin } from "vue-showdown";

import VMdPreview from "@kangc/v-md-editor/lib/preview";
import "@kangc/v-md-editor/lib/style/preview.css";
// emoji
import createEmojiPlugin from "@kangc/v-md-editor/lib/plugins/emoji/index";
import "@kangc/v-md-editor/lib/plugins/emoji/emoji.css";

// import createHljsTheme from "@kangc/v-md-editor/lib/theme/hljs";

// // highlightjs
// import hljs from "highlight.js";

// const hljsTheme = createHljsTheme({
//   Hljs: hljs
// });

// VMdPreview.vMdParser.theme(hljsTheme);

// 引入你所使用的主题 此处以 github 主题为例
import githubTheme from "@kangc/v-md-editor/lib/theme/github";
import "@kangc/v-md-editor/lib/theme/style/github.css";

// highlightjs
import hljs from "highlight.js";

VMdPreview.use(githubTheme, {
  Hljs: hljs
});
VMdPreview.use(createEmojiPlugin());

export function setVsd(app) {
  app.use(VMdPreview);
}
