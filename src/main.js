import { createApp } from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import {
    AutoComplete,
    Breadcrumb,
    Button,
    Cascader,
    Drawer,
    Input,
    Layout,
    Menu,
    Select,
    SelectOption
} from "ant-design-vue";

const app = createApp(App);

app.use(Button)
app.use(Layout)
app.use(Menu)
app.use(Breadcrumb)
app.use(Drawer)
app.use(Input)
app.use(Select)
app.use(Cascader)
app.use(AutoComplete)
app.use(SelectOption)

app.mount('#app')

