module.exports = {
    base: '/',//基础路径
    head: [],
    host: '0.0.0.0',
    dest: './dist',//打包输出目录
    markdown: {
        lineNumbers: true
    },
    theme: undefined,
    themeConfig: {
        locales: {
            '/': {
                logo: '/misitebao.png',
                selectText: 'Languages',
                label: 'English',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                algolia: {},
                sidebarDepth: 2,
                sidebar: 'auto',
                nav: [
                    { text: 'Home', link: '/book/' },
                    {
                        text: '前端编程',
                        items: [
                            { text: 'HTML', link: '/book/前端编程/HTML/' },
                            { text: 'CSS', link: '/book/前端编程/CSS/' }
                        ]
                    },
                    { text: 'Github', link: 'https://github.com' }
                ],
                sidebar: {
                    collapsable: false,
                    '/book/前端编程/HTML/': [{
                        title: 'HTML',
                        collapsable: false,
                        children: ['/book/前端编程/HTML/Header']
                    }]
                },
            },
            '/zh/': {
                logo: '/misitebao.png',
                // 多语言下拉菜单的标题
                selectText: '选择语言',
                // 该语言在下拉菜单中的标签
                label: '简体中文',
                // 编辑链接文字
                editLinkText: '在 GitHub 上编辑此页',
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
                sidebar: 'auto',
                nav: [
                    { text: 'Home', link: '/zh/book/' },
                    {
                        text: '前端编程',
                        items: [
                            { text: 'HTML', link: '/zh/book/前端编程/HTML/' },
                            { text: 'CSS', link: '/zh/book/前端编程/CSS/' }
                        ]
                    },
                    { text: 'Github', link: 'https://github.com' }
                ],
                sidebar: {
                    collapsable: false,
                    '/zh/book/前端编程/HTML/': [{
                        title: 'HTML',
                        collapsable: false,
                        children: ['/zh/book/前端编程/HTML/Header']
                    }]
                },
            }
        }
    },
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
            title: 'VuePress',
            description: 'Vue-powered Static Site Generator'
        },
        '/zh/': {
            lang: 'zh-CN',
            title: '米司书库',
            description: '米司的全栈手册'
        }
    }
}