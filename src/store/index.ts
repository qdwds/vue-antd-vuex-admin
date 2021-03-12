import { createStore } from 'vuex';
import type { App } from 'vue';
import user from './modules/user/index'
import drawer from "./modules/drawer/index";
import filter from "./modules/filter/index";
import createPersistedState from "vuex-persistedstate";
const store = createStore({
    plugins: [
        createPersistedState({
            reducer(val: any) {
                return {
                    drawer: val.drawer,
                    user: val.user
                }
            }
        }),
    ],
    modules: {
        user,
        drawer,
        filter
    },

})

export function setupStore(app: App) {
    app.use(store)
}

export function useStore() {
    return store
}