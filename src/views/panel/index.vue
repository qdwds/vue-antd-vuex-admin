<template>
    <div>123</div>
</template>

<script lang="ts">
import { computed } from "vue";
import { useStore } from "@/store";
import { USER_TYPES } from "../../store/modules/user/user-types";

export default {
    setup() {
        const store = useStore();
        return {};
    },
};
</script>

<style lang="scss" scoped>
</style>