export default [
    {
        title: '基础设施',
        icon: 'el-icon-fa-bank',
        children: [
            {
                title: '日志浏览',
                to: '/logbrowser',
                icon: 'el-icon-fa-file-text',
            },
            {
                title: 'Kafka监控',
                icon: 'el-icon-fa-bar-chart',
                children: [
                    {
                        title: '集群',
                        to: '/kafka-cluster',
                        icon: 'el-icon-fa-sitemap',
                    },
                    {
                        title: 'Topic列表',
                        to: '/kafka-topics',
                        icon: 'el-icon-fa-life-ring',
                    },
                    {
                        title: 'ES监控',
                        to: '/es-monitor',
                        icon: 'el-icon-fa-search',
                    },
                    {
                        title: 'ZK监控',
                        to: '/zk-monitor',
                        icon: 'el-icon-fa-tty',
                    },
                ],
            },
            {
                title: '配置管理',
                to: '/configlist',
                icon: 'el-icon-fa-pencil-square-o',
            },
        ],
    },
    {
        title: '容器',
        icon: 'el-icon-fa-shopping-basket',
        children: [
            {
                title: '应用列表',
                to: '/all-apps',
                icon: 'el-icon-fa-window-maximize',
            },
            {
                title: '网络',
                to: '/networks',
                icon: 'el-icon-fa-wifi',
            },
            {
                title: '数据卷',
                to: '/volumes',
                icon: 'el-icon-fa-folder',
            },
            {
                title: 'swarm节点',
                to: '/swarm-nodes',
                icon: 'el-icon-fa-link',
            },
        ],
    },
    {
        title: 'Swifty集群',
        to: '/swifty-colony',
        icon: 'el-icon-fa-sitemap',
    },
    {
        title: '虚拟机',
        icon: 'el-icon-fa-television',
        children: [
            {
                title: '网络',
                to: '/vm-networks',
                icon: 'el-icon-fa-wifi',
            },
            {
                title: '卷',
                to: '/vm-volumes',
                icon: 'el-icon-fa-folder',
            },
            {
                title: '虚拟机',
                to: '/vm',
                icon: 'el-icon-fa-television',
            },
            {
                title: '配额管理',
                to: '/quota',
                icon: 'el-icon-fa-pie-chart ',
            },
        ],
    },
    {
        title: '账号管理',
        icon: 'el-icon-fa-user-plus',
        children: [
            {
                title: '用户',
                to: '/user-manage',
                icon: 'el-icon-fa-user',
            },
            {
                title: '组',
                to: '/groups',
                icon: 'el-icon-fa-users',
            },
        ],
    },
];
