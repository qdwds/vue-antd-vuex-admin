import {
    Button,
    Menu,
    Layout,
    Tooltip,
    Breadcrumb,
    ConfigProvider,
    Table,
    Card,
    Input,
    Form,
    message,
    Drawer,
    Switch,
    Image,
    Dropdown,
    Divider,
    Spin
} from 'ant-design-vue';
import type { App } from 'vue';
import 'ant-design-vue/dist/antd.css';

export function setupAntd(app: App) {
    app.use(Button)
        .use(Menu)
        .use(Layout)
        .use(Tooltip)
        .use(Breadcrumb)
        .use(ConfigProvider)
        .use(Table)
        .use(Card)
        .use(Input)
        .use(Form)
        .use(Drawer)
        .use(Switch)
        .use(Image)
        .use(Dropdown)
        .use(Divider)
        .use(Spin)
    app.config.globalProperties.$message = message;
}