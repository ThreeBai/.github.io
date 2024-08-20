import router from "@/router";
import Cookies from "js-cookie";
import { message } from "ant-design-vue";

router.beforeEach((to, from, next) => {
  if (to.name === "liquorfish" && !Cookies.get("cypher_one")) {
    message.warning("Permission denied");
    next({ path: "/" });
  } else {
    next();
  }
});
