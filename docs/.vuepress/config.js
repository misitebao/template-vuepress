module.exports = {
    base: '/',//基础路径
    head: [
        ['meta', { name: 'keywords', content: 'vuepress 模板' }]
    ],
    host: '0.0.0.0',
    dest: './dist',//打包输出目录
    markdown: {
        lineNumbers: true
    },
    plugins: ['@vuepress/back-to-top'],
    theme: undefined,
    themeConfig: {
        logo: '/images/misitebao.png',
        repo: 'https://github.com/misitebao/template-vuepress', // 顶部显示的github地址
        docsRepo: 'https://github.com/misitebao/template-vuepress', //文档内改进页面的仓库地址
        docsDir: 'docs', //文档目录
        docsBranch: 'master', //分支
        editLinks: true,
        locales: {
            '/': {
                selectText: 'Languages',
                label: 'English',
                repoLabel: 'Source',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                algolia: {},
                sidebarDepth: 2,
                // sidebar: 'auto',
                nav: [
                    {
                        text: 'Home', link: '/'
                    },
                    {
                        text: 'AAA',
                        items: [
                            { text: 'aaa', link: '/AAA/aaa' },
                            { text: 'bbb', link: '/AAA/bbb' }
                        ]
                    },
                    {
                        text: 'BBB',
                        items: [{
                            text: 'Group1',
                            items: [
                                {
                                    text: 'readme',
                                    link: '/BBB/'
                                },
                                {
                                    text: '2',
                                    link: '#'
                                }
                            ]
                        },
                        {
                            text: 'Group2',
                            items: [
                                {
                                    text: '1',
                                    link: '#'
                                },
                            ]
                        }]
                    }
                ],
                sidebar: {
                    '/AAA/': [
                        {
                            title: 'AAAAAAAAAA',
                            path: '/AAA/aaa',
                            collapsable: false,
                            children: [
                                // {
                                //     title:"hahhahahaa",
                                //     path:"https://baidu.com"
                                // }
                            ]
                        }
                    ],
                    '/BBB/': [
                        {
                            title: 'BBBBBBBBBB',
                            path: '/BBB/',
                            collapsable: false,
                            children: []
                        }
                    ],
                }
            },
            '/zh/': {
                // 多语言下拉菜单的标题
                selectText: '选择语言',
                // 该语言在下拉菜单中的标签
                label: '简体中文',

                repoLabel: '查看源码',
                // 以下为可选的编辑链接选项
                // 默认为 "Edit this page"
                editLinkText: '帮助我们改善此页面！',
                // 最后更新时间
                lastUpdated: '最后更新时间',
                // Service Worker 的配置
                serviceWorker: {
                    updatePopup: {
                        message: "发现新内容可用.",
                        buttonText: "刷新"
                    }
                },
                // 当前 locale 的 algolia docsearch 选项
                algolia: {},
                sidebarDepth: 2,
                // sidebar: 'auto',
                nav: [
                    {
                        text: '主页', link: '/zh/AAA/'
                    },
                    {
                        text: 'AAA',
                        items: [
                            { text: 'aaa', link: '/zh/AAA/aaa' },
                            { text: 'bbb', link: '/zh/AAA/bbb' }
                        ]
                    },
                    {
                        text: 'BBB',
                        items: [{
                            text: 'Group1',
                            items: [
                                {
                                    text: 'readme',
                                    link: '/BBB/'
                                },
                                {
                                    text: '2',
                                    link: '#'
                                }
                            ]
                        },
                        {
                            text: 'Group2',
                            items: [
                                {
                                    text: '1',
                                    link: '#'
                                },
                            ]
                        }]
                    }
                ],
                sidebar: {
                    '/zh/AAA/': [
                        {
                            title: 'AAAAAAAAAA',
                            path: '/zh/AAA/aaa',
                            collapsable: false,
                            children: []
                        }
                    ],
                    '/zh/BBB/': [
                        {
                            title: 'BBBBBBBBBB',
                            path: '/zh/BBB/',
                            collapsable: false,
                            children: []
                        }
                    ],
                }
            }
        }
    },
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
            title: 'Template Vuepress',
            description: `This is a vuexpress initial template`
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'Vuepress模板',
            description: '这是一个Vuepress初始模板'
        }
    }
}