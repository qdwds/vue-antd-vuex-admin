<template>
  <div>home</div>
</template>

<script>
import { defineComponent, onMounted } from "@vue/runtime-core";
import { message, notification } from "ant-design-vue";
export default defineComponent({
  setup() {
    onMounted(() => {
      notification.open({
        message: "欢迎回来，大表哥！",
        duration: 2,
      });
    });
    
    return {};
  },
})
</script>

<style lang="scss" scoped>
</style>