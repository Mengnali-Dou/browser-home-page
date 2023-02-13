import { createApp } from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import axios from "axios";
import VueAxios from "vue-axios";
// import {VueJsonp} from "vue-jsonp";
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
    SelectOption,
    Row,
    Col,
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
app.use(Row)
app.use(Col)
app.use(VueAxios, axios)
// app.use(VueJsonp)

app.mount('#app')
