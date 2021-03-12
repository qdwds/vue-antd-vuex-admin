import { FILTER_TYPES } from "./filter-types";
import { IState } from "./typings";
export default {
    /**
     * @description 请求路由信息
     * @param state 
     * @param hashAuth 
     */
    [FILTER_TYPES.SET_HASHAUTH](state: IState, hashAuth: boolean): void {
        state.hashAuth = hashAuth;
    },
    /**
     * @description 组件内路由loading
     * @param state 
     * @param loadding 
     */
    [FILTER_TYPES.SET_LOADDING](state: IState, loadding: boolean): void {
        state.loadding = loadding
    }
}