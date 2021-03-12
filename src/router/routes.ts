import children from "./modules/index";
import { RouteRecordRaw } from "vue-router";
import { login } from "./modules/login";
import { error } from './modules/error';


const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Layout",
        redirect: "/login",
        component: () => import('@/layout/index.vue'),
        children: [
            ...children,
            // 下面代码测试，如果找到/d 控制太会有警告
            {
                path: "/d",
                name: "D",
                component: () => import('@/views/d/index.vue')
            }
        ],
    },
    ...login,
    ...error
]

export default routes;
