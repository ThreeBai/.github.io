<template>
  <div class="wrapper">
    <a-form ref="formRef" :model="formState" name="dynamic_rule" layout="inline">
      <a-form-item
        label="Enter ur password"
        name="cardCypher"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.cardCypher" style="width: 240px" />
      </a-form-item>
      <a-form-item>
        <StarButton @click="onCheck"></StarButton>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import MD5 from "crypto-js/md5";
import { useRouter } from "vue-router";
import Cookies from "js-cookie";
import { message } from "ant-design-vue";
import StarButton from "./components/StarButton.vue";

const Router = useRouter();
const formRef = ref();
const formState = reactive({
  cardCypher: ""
});

const onCheck = async () => {
  try {
    const values = await formRef.value.validateFields();
    const afterMd5 = MD5(values.cardCypher).toString();
    if (afterMd5 === "b9e37404fcae803cb548d7b42c1fb513") {
      Cookies.set("cypher_one", afterMd5);
      Router.push({ name: "liquorfish" });
    } else {
      message.error("Password error");
    }
  } catch (errorInfo) {
    console.log("Failed:", errorInfo);
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
}
</style>
