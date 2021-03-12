<template>
  <div class="header_icon">
    <Language></Language>
    <a-tooltip placement="bottom" v-for="icon in iconList" :key="icon.title">
      <template #title>
        <span>{{ $t(icon.title) }}</span>
      </template>
      <component :is="icon.component" @click="handleIconClick(icon.id)">
      </component>
    </a-tooltip>
    <a-tooltip placement="bottom">
      <template #title>
        <span>{{
          fullScreen ? $t("header.get_into") : $t("header.sign_out")
        }}</span>
      </template>
      <component
        :is="fullScreen ? 'FullscreenOutlined' : 'FullscreenExitOutlined'"
        @click="toggleFullScreen"
      ></component>
    </a-tooltip>
    <My></My>
  </div>
</template>
<script lang="ts">
import {
  FullscreenOutlined,
  FullscreenExitOutlined,
  GithubOutlined,
  QuestionCircleOutlined,
  ReloadOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";

import { defineComponent, reactive, toRefs } from "vue";
import Language from "../../../components/Language/index.vue";
import { useStore } from "vuex";
import { USER_TYPES } from "../../../store/modules/user/user-types";
import My from "../../../components/My/index.vue";
export default defineComponent({
  components: {
    FullscreenOutlined,
    FullscreenExitOutlined,
    GithubOutlined,
    QuestionCircleOutlined,
    Language,
    ReloadOutlined,
    SettingOutlined,
    My
  },

  setup() {
    const store = useStore();
    const state = reactive({
      fullScreen: true,
      iconList: [
        { id: 1, component: "GithubOutlined", title: "header.github" },
        { id: 2, component: "ReloadOutlined", title: "header.refresh" },
        { id: 3, component: "SettingOutlined", title: "header.setup" },
      ],
    });

    // 全屏切换
    const toggleFullScreen = () => {
      console.log("click");

      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        state.fullScreen = false;
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
          state.fullScreen = true;
        }
      }
    };

    //  跳转页面
    const handleIconClick = (id: Number): void => {
      switch (id) {
        case 1:
          globalThis.open("https://github.com/qdwds/vue3-vuex4-antd-express");
          break;
        case 2:
          window.location.reload();
          break;
        case 3:
          store.commit(USER_TYPES.SET_DRAWER_SHOW, true);
          break;
      }
    };

    return {
      ...toRefs(state),
      toggleFullScreen,
      handleIconClick,
    };
  },
});
</script>

<style lang="scss" scoped>
.header_icon {
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
</style>