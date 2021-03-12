<template>
    <a-dropdown>
      <a-button/>
      <template #overlay>
        <a-menu>
          <a-menu-item @click="toMyRouter">
           个人中心
          </a-menu-item>
          <a-menu-item @click="toLogin">
            退出登陆
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import { useRouter } from "vue-router";

export default defineComponent({
    setup(){
        const router = useRouter();
        const toLogin = ()=>{
            router.replace({
                name:"Login",
            })
        }
        const toMyRouter = ()=>{
            router.push({
                name:"My"
            })
        }
        return{
            toLogin,
            toMyRouter
        }
    }
});
</script>

<style lang="scss" scoped>
.ant-btn {
  background-image: url("../../assets/images/my.jpg");
  background-size: 100% 100%;
}
</style>