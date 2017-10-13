<template>
    <div class="vue-nav-menu" :class="{'vue-nav-menu-collapse':collapse}">
        <div class="vue-nav-compatible">
            <div class="sidebar-fold" @click="clickFold">
                <i class="fa-bars"></i>
            </div>
            <div id="vue-nav-menu-scrollbar">
                <el-menu :default-active="active" :unique-opened="true" :router="true" :collapse="collapse">
                    <nav-menu-item :item="item" v-for="(item,index) in option" :key="index"></nav-menu-item>
                </el-menu>
            </div>
        </div>
    </div>
</template>
<script>
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import NavMenuItem from './nav-menu-item';

export default {
    name: 'NavMenu',
    props: ['option', 'active'],
    data() {
        return { collapse: false };
    },
    components: { NavMenuItem },
    methods: {
        clickFold() {
            this.collapse = !this.collapse;
        },
    },
    mounted() {
        setTimeout(() => {
            new PerfectScrollbar('#vue-nav-menu-scrollbar', {
                suppressScrollX: true
            })
        });
    },
}
</script>
<style>
#vue-nav-menu-scrollbar {
    position: relative;
    height: calc(100% - 35px);
}

.vue-nav-menu {
    height: 100%;
    background-color: #2d3348;
    position: relative;
}

.vue-nav-compatible {
    /* overflow: hidden; */
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}

.vue-nav-menu,
.vue-nav-menu .el-menu,
.sidebar-fold {
    border-radius: 0;
    transition: all 0.3s;
    width: 200px!important;
}

.fa-bars {
    transition: transform 0.3s;
}

.vue-nav-menu-collapse,
.vue-nav-menu-collapse .el-menu,
.vue-nav-menu-collapse .sidebar-fold {
    width: 64px!important;
}

.vue-nav-menu-collapse .ps {
    overflow: initial!important;
}

.vue-nav-menu-collapse .fa-bars {
    transform: rotateZ(90deg);
}

.vue-nav-menu .el-submenu .el-menu {
    width: auto!important;
}

.vue-nav-menu .el-menu {
    background-color: #2a3042;
}

.vue-nav-menu .el-submenu .el-menu,
.vue-nav-menu .el-submenu.is-opened {
    background-color: #212637;
}

.vue-nav-menu .is-opened .el-submenu__title:hover {
    background-color: #212637;
}

.vue-nav-menu .el-submenu .el-menu-item:hover,
.vue-nav-menu .el-submenu__title:hover {
    background-color: #00b792;
    color: #ffffff;
}

.vue-nav-menu .el-menu-item,
.vue-nav-menu .el-submenu__title {
    color: #a8b7c5;
    font-size: 12px;
}

.vue-nav-menu .el-menu-item.is-active {
    color: #fff;
    background: #00b792;
}

.vue-nav-menu .el-submenu {
    transition: border-left 0.3s;
    border-left: 0 solid #00b792;
}

.vue-nav-menu .el-submenu.is-opened {
    border-left: 4px solid #00b792;
    background: #212637;
}

.vue-nav-menu .el-submenu .el-submenu.is-opened {
    border-left: 0 solid #00b792;
    background: #212637;
}

.vue-nav-menu .el-submenu .el-menu-item {
    min-width: 0;
}

.sidebar-fold {
    height: 35px;
    line-height: 35px;
    text-align: center;
    color: #aeb9c2;
    background: #333744
}

.sidebar-fold:hover {
    color: #fff;
}

.vue-nav-menu .el-submenu__icon-arrow {
    margin-top: -5px;
}
</style>
