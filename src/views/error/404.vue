<template>
  <div class="errPage-container">
    <div class="wscn-http404-container">
      <div class="wscn-http404">
        <div class="pic-404">
          <img class="pic-404__parent" :src="img_404" alt="404">
        </div>
        <div class="bullshit">
          <div class="bullshit__oops">OOPS!</div>
          <div class="bullshit__headline">您访问的页面不存在......</div>
          <div class="bullshit__info">请检查您输入的网址是否正确，请点击以下按钮返回或者发送错误报告！</div>
          <a href="#/login/2" class="bullshit__return-home" @click="backToLogin">返回</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import img_404 from "@/assets/images/error/404.png";
import img_404_cloud from "@/assets/images/error/cloud.png";

export default defineComponent({
    name: "404",
    setup() {
      const router = useRouter();
      const backToLogin = ()=>{
        router.go(-1)
      }
        return {
            img_404,
            img_404_cloud,
            backToLogin
        };
    },
});
</script>

<style lang="scss" scoped>
.errPage-container {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
}
.wscn-http404-container {
    transform: translate(-60%, -30%);
    position: absolute;
    top: 40%;
    left: 50%;
}
.wscn-http404 {
    position: relative;
    width: 800px;
    overflow: hidden;
    .pic-404 {
        position: relative;
        float: left;
        width: 600px;
        overflow: hidden;
        &__parent {
            width: 100%;
        }
    }
    .bullshit {
        position: relative;
        float: left;
        width: 200px;
        padding: 30px 0;
        overflow: hidden;
        &__oops {
            font-size: 32px;
            font-weight: bold;
            line-height: 40px;
            color: #1482f0;
            opacity: 1;
            margin-bottom: 20px;
            animation-name: slideUp;
            animation-duration: 0.5s;
            animation-fill-mode: forwards;
        }
        &__headline {
            font-size: 20px;
            line-height: 24px;
            color: #222;
            font-weight: bold;
            opacity: 1;
            margin-bottom: 10px;
            animation-name: slideUp;
            animation-duration: 0.5s;
            animation-delay: 0.1s;
            animation-fill-mode: forwards;
        }
        &__info {
            font-size: 13px;
            line-height: 21px;
            color: grey;
            opacity: 1;
            margin-bottom: 30px;
            animation-name: slideUp;
            animation-duration: 0.5s;
            animation-delay: 0.2s;
            animation-fill-mode: forwards;
        }
        &__return-home {
            display: block;
            float: left;
            width: 110px;
            height: 36px;
            background: #1482f0;
            border-radius: 100px;
            text-align: center;
            color: #ffffff;
            opacity: 1;
            font-size: 14px;
            line-height: 36px;
            cursor: pointer;
            animation-name: slideUp;
            animation-duration: 0.5s;
            animation-delay: 0.3s;
            animation-fill-mode: forwards;
        }
        @keyframes slideUp {
            0% {
                transform: translateY(60px);
                opacity: 0;
            }
            100% {
                transform: translateY(0);
                opacity: 1;
            }
        }
    }
}
</style>