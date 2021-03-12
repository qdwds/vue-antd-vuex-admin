import { createApp } from 'vue'
import App from './App.vue'
import "./registerServiceWorker";
import './styles/index.scss'
import { setupAntd } from "./plugins/index";
import route, { setupRouter } from "./router/index";
import { setupStore } from './store/index'
import { setupVueI18n } from "./locales/index";


const app = createApp(App)
//  挂载 ant-design-vue
setupAntd(app);

//  挂载 vue-router4.x
setupRouter(app);

//  挂载 vuex4.x
setupStore(app)

//  挂载 vue-i18n
setupVueI18n(app)

// 路线准备好后挂载 => 等文件加载完成后挂载
route.isReady().then(() => {
    app.mount('#app', true);
});