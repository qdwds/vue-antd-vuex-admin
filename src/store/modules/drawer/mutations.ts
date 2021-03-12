import { IState } from "./drawer-types";
import { DRAWER_TYPES } from "./typings";

export default {
    [DRAWER_TYPES.SET_LOGO](state: IState, status: boolean): void {
        state.logo = status;
    }
}