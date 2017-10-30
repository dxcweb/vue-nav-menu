/**
 * Created by aresn on 16/6/20.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import iView from '../src/index';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import './fa.less';
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(iView);


// 开启debug模式
Vue.config.debug = true;

// 路由配置
const router = new VueRouter({
    routes: [
        {
            path: '*',
            component: require('./routers/simple.vue')
        }
    ]
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});

