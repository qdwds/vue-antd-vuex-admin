<template>
  <a-menu
    theme="dark"
    mode="inline"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
  >
    <template v-for="item of routes" :key="item.name">
      <MenuItem :item="item"></MenuItem>
    </template>
  </a-menu>
</template>

<script lang="ts">
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons-vue";
import { computed, reactive, watch, toRefs } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "../../../store";
import MenuItem from "./MenuItem.vue";
export default {
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuItem,
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const routes = computed(() => store.state.user.useRoutes);

    // 获取当前打开的子菜单
    const getOpenKeys = () => [route.matched[1]?.name];
    const state = reactive({
      openKeys: getOpenKeys(),
      selectedKeys: [route.name],
    });

    // 跟随页面路由变化，切换菜单选中状态
    watch(
      () => route.fullPath,
      () => {
        state.openKeys = getOpenKeys();
        state.selectedKeys = [route.name];
      }
    );
    const titleClick = () => {};
    return {
      routes,
      titleClick,
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>