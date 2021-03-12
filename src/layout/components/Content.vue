<template>
    <Loading v-show="loaddingStatus"></Loading>
    <a-layout-content class="layout_content" v-show="!loaddingStatus">
        <!-- <a-card> -->
        <router-view v-slot="{ Component }">
            <!-- <transition name="zoom-fade" mode="out-in" appear> -->
            <keep-alive>
                <component :is="Component"></component>
            </keep-alive>
            <!-- </transition> -->
        </router-view>
        <!-- </a-card> -->
    </a-layout-content>
</template>

<script>
import Loading from "@/components/Loading/index.vue";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
    components: {
        Loading,
    },
    setup() {
        const store = useStore();
        const loaddingStatus = computed(() => store.state.filter.loadding);

        return {
            loaddingStatus,
        };
    },
};
</script>

<style lang="scss" scoped>
.layout_content {
    margin: 24px 16px;
    padding: 24px;
    background: #fff;
    min-height: 280px;
}
/* router view transition */
.zoom-fade-enter-active,
.zoom-fade-leave-active {
    transition: transform 0.35s, opacity 0.28s ease-in-out;
}

.zoom-fade-enter-from {
    opacity: 0;
    transform: scale(0.97);
}

.zoom-fade-leave-to {
    opacity: 0;
    transform: scale(1.03);
}
</style>