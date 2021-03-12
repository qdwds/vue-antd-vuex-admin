<template>
    <Drawer></Drawer>
    <a-layout class="layout">
        <a-layout-sider
            v-model:collapsed="collapsed"
            :trigger="null"
            collapsible
        >
            <Logo v-if="logoStatus"></Logo>
            <Menu></Menu>
        </a-layout-sider>
        <a-layout>
            <Header v-model:collapsed="collapsed"></Header>
            <Content></Content>
        </a-layout>
    </a-layout>
</template>
<script lang="ts">
import Logo from "./components/Logo.vue";
import Menu from "./components/Menu/Menu.vue";
import Content from "./components/Content.vue";
import Header from "./components/header/index.vue";
import Drawer from "../components/Drawer/index.vue";
import { defineComponent, ref, computed } from "vue";
import { logoStatus } from "../utils/drawer";


export default defineComponent({
    components: {
        Logo,
        Menu,
        Content,
        Header,
        Drawer,
    },
    setup() {
        const collapsed = ref<boolean>(false);
        const drawerShow = ref<Boolean>(false);
        return {
            collapsed,
            drawerShow,
            logoStatus,
        };
    },
});
</script>
<style scoped>
.layout {
    height: 100vh;
}
</style>