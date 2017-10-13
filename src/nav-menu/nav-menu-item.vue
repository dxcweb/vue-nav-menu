<template>
    <el-submenu :index="item.title" v-if="item.children">
        <template slot="title">
            <i :class="item.icon"></i>
             <span slot="title">{{item.title}}</span>
        </template>
        <nav-menu-item :item="children_item" v-for="(children_item,children_index) in item.children" :key="children_index" ></nav-menu-item>
    </el-submenu>
    <el-menu-item  :index="item.to" v-else>
        <i :class="item.icon"></i>
        <span slot="title">{{item.title}}</span>
    </el-menu-item>
</template>
<script>
export default {
    name: 'NavMenuItem',
    props: ['item'],
};
</script>

