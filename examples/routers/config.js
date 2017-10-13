export default [
    {
        title: '基础设施',
        icon: 'el-icon-edit',
        children: [
            {
                title: '日志浏览',
                to: '/logbrowser',
                icon: 'el-icon-edit',
            },
            {
                title: 'Kafka监控',
                icon: 'el-icon-edit',
                children: [
                    {
                        title: '集群',
                        to: '/kafka-cluster',
                        icon: 'el-icon-edit',
                    },
                    {
                        title: 'Topic列表',
                        to: '/kafka-topics',
                        icon: 'el-icon-edit',
                    },
                    {
                        title: 'ES监控',
                        to: '/es-monitor',
                        icon: 'el-icon-edit',
                    },
                    {
                        title: 'ZK监控',
                        to: '/zk-monitor',
                        icon: 'el-icon-edit',
                    },
                ],
            },
            {
                title: '配置管理',
                to: '/configlist',
                icon: 'el-icon-edit',
            },
            {
                title: '应用列表',
                to: '/all-apps',
                icon: 'el-icon-edit',
            }
        ],
    },
    {
        title: '容器',
        icon: 'el-icon-edit',
        children: [{
            title: '应用列表',
            to: '/all-apps',
            icon: 'el-icon-edit',
        },
        {
            title: '网络',
            to: '/networks',
            icon: 'el-icon-edit',
        },
        {
            title: '数据卷',
            to: '/volumes',
            icon: 'el-icon-edit',
        },
        {
            title: 'swarm节点',
            to: '/swarm-nodes',
            icon: 'el-icon-edit',
        },
        ],
    },
    {
        title: 'Swifty集群',
        to: '/swift-service-list',
        icon: 'el-icon-edit',
    },
    {
        title: '虚拟机',
        icon: 'el-icon-edit',
        children: [
            {
                title: '网络',
                to: '/vm-networks',
                icon: 'el-icon-edit',
            },
            {
                title: '卷',
                to: '/vm-volumes',
                icon: 'el-icon-edit',
            },
            {
                title: '虚拟机',
                to: '/vm',
                icon: 'el-icon-edit',
            },
            {
                title: '配额管理',
                to: '/quota',
                icon: 'el-icon-edit',
            },
        ],
    },
    {
        title: '账号管理',
        icon: 'el-icon-edit',
        children: [
            {
                title: '用户',
                to: '/user-manage',
                icon: 'el-icon-edit',
            },
            {
                title: '组',
                to: '/groups',
                icon: 'el-icon-edit',
            }
        ],
    },
];
