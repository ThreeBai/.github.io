import router from "@/router";

router.beforeEach((to, from, next) => {
  console.log("beforeEach route", to, from);
  if (to.name === "liquorfish") {
  }
  next();
});
