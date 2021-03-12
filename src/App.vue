<template>
    <div>
        <a-config-provider :locale="antdLanguage">
            <router-view></router-view>
        </a-config-provider>
    </div>
</template>
<script lang="ts">
import { useStore } from "vuex";
import { USER_TYPES } from "./store/modules/user/user-types";
import { computed, defineComponent } from "vue";
export default defineComponent({
    setup() {
        const store = useStore();
        // store.dispatch(USER_TYPES.SET_USER_ROUTES); //  获取路由
        const language = computed(() => store.state.user.language); //  获取语言类型
        const antdLanguage = computed(() => store.state.user.antdLanguage); //  展示语言

        store.dispatch(USER_TYPES.SET_LANGUAGE, language.value); //  设置语言
        // 测试代码
        return {
            antdLanguage,
        };
    },
});
</script>
