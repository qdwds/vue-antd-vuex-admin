<template>
    <a-drawer
        :title="$t('header.globaleConfig')"
        placement="right"
        closable
        :visible="drawerShow"
        @close="handleClose"
    >
        <div class="drawer_content">
            <span>侧边Logo</span>
            <a-switch
                checked-children="开"
                un-checked-children="关"
                v-model:checked="logoStatus"
                @change="handleLogo"
            />
        </div>
        <a-divider />
    </a-drawer>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "../../store";
import { USER_TYPES } from "../../store/modules/user/user-types";
import { logoStatus, logoConfig } from "../../utils/drawer";

export default defineComponent({
    props: {
        drawerShow: {
            type: Boolean,
            required: true,
        },
    },
    setup() {
        const store = useStore();
        const drawerShow = computed(() => store.state.user.drawer);
        //  关闭 drawer
        const handleClose = (): void => {
            store.commit(USER_TYPES.SET_DRAWER_SHOW, false);
        };

        //  修改展示状态
        const handleLogo = (checked: boolean): void => {
            logoConfig(checked);
        };
        return {
            handleClose,
            drawerShow,
            handleLogo,
            logoStatus,
        };
    },
});
</script>
<style lang="scss" scoped>
.drawer_content {
    display: flex;
    justify-content: space-between;
}
</style>