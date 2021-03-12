<template>
  <a-layout-header class="layout_header">
    <div class="header">
      <component
        @click="$emit('update:collapsed', !collapsed)"
        :is="collapsed ? 'menu-unfold-outlined' : 'menu-fold-outlined'"
      ></component>
      <div>
        <HeaderNav></HeaderNav>
      </div>
    </div>
  </a-layout-header>
</template>

<script>
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons-vue";
import HeaderNav from "./HeaderNav.vue";
export default {
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    HeaderNav,
  },
  props: {
    collapsed: {
      type: Boolean,
    },
  },
  emits:['update:collapsed'],
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.layout_header {
  background: #fff;
  padding: 0 20px;
  display: flex;
  align-items: center;
}
</style>