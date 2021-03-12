import { USER_TYPES } from "./user-types";
import { IState, Router, ILanguage } from "./typings";

export default {
    /**
     * 动态路由列表
     * @param state 
     * @param router 
     */
    [USER_TYPES.SET_USER_ROUTES](state: IState, router: Router[]): void {
        state.useRoutes = router;
    },
    /**
     * 设置语言
     * @param state 
     * @param langList 
     */
    [USER_TYPES.SET_LANGUAGE](state: IState, langList: ILanguage): void {
        state.language = langList.language;  //  语言
        state.antdLanguage = langList.antdLanguage  //  antd language
    },
    /**
     * 设置弹出框
     * @param state 
     * @param show 
     */
    [USER_TYPES.SET_DRAWER_SHOW](state: IState, show: boolean): void {
        state.drawer = show;
    }
}