import { computed } from "@vue/runtime-core";
import { useStore } from "../store/index";

const store = useStore();
import { DRAWER_TYPES } from "../store/modules/drawer/typings";

// logo
export const logoStatus = computed(() => store.state.drawer.logo);

export const logoConfig = (status: boolean): void => {
    store.commit(DRAWER_TYPES.SET_LOGO, status)
}