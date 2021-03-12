
import type { Commit } from "vuex";
export class Router {
    id: number;
    uuid: number;
    path: string;
    name: string;
    link: string;
    title: string;
    children?: Array<any>;

}
export interface ILanguage {
    language: string,
    antdLanguage: Array<any>
}
export interface IState {
    useRoutes: Array<Router>,
    uuid: number,
    language: string,
    antdLanguage: any,
    drawer: boolean
}

export interface ICtx {
    commit: Commit;
    state: IState
}