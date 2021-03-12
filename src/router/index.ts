import type { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import routes from "./routes";
import { useStore } from "@/store/index";
import { USER_TYPES } from "@/store/modules/user/user-types";
import { FILTER_TYPES } from "@/store/modules/filter/filter-types";
import { generateRouters } from "./addRoute";
import children from "./modules/index";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const route = createRouter({
    history: createWebHashHistory(''),
    routes
})

route.beforeEach(async (to, from, next) => {
    NProgress.start();

    const store = useStore();
    store.commit(FILTER_TYPES.SET_LOADDING, true);

    //  刚上来来 如果没有权限就去获取请求
    if (!store.state.filter.hashAuth) {
        await store.dispatch(USER_TYPES.SET_USER_ROUTES);
        const newRoutes = generateRouters(store.state.user.useRoutes);
        const layout: any = routes.find(item => item.name == 'Layout')!

        layout.children = [
            ...children,
            ...newRoutes
        ]
        route.addRoute(layout)

        next({ path: to.path });

    } else {
        next();
    }

    NProgress.done();
})

route.afterEach(() => {
    const store = useStore();
    //  每次切换路由都需要修改loading
    store.commit(FILTER_TYPES.SET_LOADDING, false);
})


export default route

export function setupRouter(app: App) {
    app.use(route)
}