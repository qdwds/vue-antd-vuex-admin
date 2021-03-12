<template>
    <div class="language">
        <span
            :class="['font', { select: langage === 'cn' }]"
            @click="handleLanguage('cn')"
            >简体</span
        >
        <span>/</span>
        <span
            :class="['font', { select: langage === 'en' }]"
            @click="handleLanguage('en')"
        >
            en</span
        >
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "@vue/runtime-core";
import { useStore } from "vuex";
import { USER_TYPES } from "../../store/modules/user/user-types";
import { useI18n } from "vue-i18n";
import { message } from "ant-design-vue";
export default defineComponent({
    setup() {
        const store = useStore();
        const { locale, t } = useI18n();
        const langage = computed(() => store.state.user.language);

        const handleLanguage = (lang: string): void => {
            locale.value = lang;
            store.dispatch(USER_TYPES.SET_LANGUAGE, lang);
            message.success(t("login.change_language"));
        };

        return {
            langage,
            handleLanguage,
        };
    },
});
</script>

<style lang="scss" scoped>
.language {
    width: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
        opacity: 0.7;
    }
    .font {
        cursor: pointer;
    }
    .select {
        opacity: 1 !important;
        font-weight: bold;
    }
}
</style>