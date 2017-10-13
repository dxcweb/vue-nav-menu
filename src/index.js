import NavMenu from './nav-menu';
import './fa.less';

const components = {
    NavMenu,
};

const install = function (Vue) {
    Object.keys(components).forEach((key) => {
        Vue.component(key, components[key]);
    });
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

module.exports = Object.assign(components, { install });   // eslint-disable-line no-undef
