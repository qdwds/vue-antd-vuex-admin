import { Commit, Store } from "vuex";
import { USER_TYPES } from "./user-types";
import { FILTER_TYPES } from "../filter/filter-types";
import { ICtx } from "./typings";
import { getRoutes } from "@/api/router/index";
import { formRouterTree } from "@/router/addRoute";


export default {
    // 获取路由
    async [USER_TYPES.SET_USER_ROUTES]({ commit, state }: ICtx) {
        const { data } = await getRoutes(state.uuid);
        //  转为树结构
        const payload = formRouterTree(data)
        commit(USER_TYPES.SET_USER_ROUTES, payload)
        commit(FILTER_TYPES.SET_HASHAUTH, true)
    },
    //  切换语言
    [USER_TYPES.SET_LANGUAGE]({ commit, state }: ICtx, lang: string = 'cn') {
        switch (lang) {
            case 'cn':
                import('ant-design-vue/es/locale/zh_CN')
                    .then((lan): void => {
                        commit(USER_TYPES.SET_LANGUAGE, {
                            language: 'cn',
                            lang: lan.default
                        });
                    }
                    )
                break;
            case 'en':
                import('ant-design-vue/es/locale/en_US')
                    .then((lan): void => {
                        commit(USER_TYPES.SET_LANGUAGE, {
                            language: 'en',
                            lang: lan.default
                        });
                    })
        }
    }
}