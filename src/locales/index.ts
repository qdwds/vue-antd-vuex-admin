import { createI18n } from "vue-i18n";
import cn from "./cn/index";
import en from "./en/index";
import { useStore } from "../store/index";
import type { App } from "vue";
const messages = {
    en: {
        ...en
    },
    cn: {

        ...cn
    }
}

const store = useStore();
let language = store.state.user.language;

// 通过选项创建 VueI18n 实例
export const i18n = createI18n({
    locale: language, // 设置地区
    messages, // 设置地区信息x
})

export function setupVueI18n(app: App) {
    app.use(i18n)
}