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
        logo: '/misitebao.png',
        repo: 'https://github.com/misitebao/template-vuepress',
        editLinks: true,
        locales: {
            '/': {
                selectText: 'Languages',
                label: 'English',
                repoLabel: '查看源码',
                docsRepo: 'https://github.com/misitebao/template-vuepress',
                docsDir: 'docs',
                docsBranch: 'master',
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
                sidebar: 'auto',
                nav: [{
                    text: 'Home', link: '/book/'
                },
                {
                    text: 'type1',
                    items: [
                        { text: 'dira', link: '/book/dir-a/' },
                        { text: 'dirb', link: '/book/dir-b/' }
                    ]
                }],
                sidebar: [{
                    title: 'dira',
                    path: '/book/dir-a/',
                    collapsable: false,
                    children: [
                        '/book/dir-a/file-1',
                        '/book/dir-a/file-2',
                        '/book/dir-a/file-3'
                    ]
                }, {
                    title: 'dirb',
                    path: '/book/dir-b/',
                    collapsable: false,
                    children: [
                        '/book/dir-b/file-1',
                        '/book/dir-b/file-2',
                        '/book/dir-b/file-3']
                }],
            },
            '/zh/': {
                // 多语言下拉菜单的标题
                selectText: '选择语言',
                // 该语言在下拉菜单中的标签
                label: '简体中文',
                // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
                // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
                repoLabel: '查看源码',

                // 以下为可选的编辑链接选项
                // 假如你的文档仓库和项目本身不在一个仓库：
                docsRepo: 'https://github.com/misitebao/template-vuepress',
                // 假如文档不是放在仓库的根目录下：
                docsDir: 'docs',
                // 假如文档放在一个特定的分支下：
                docsBranch: 'master',
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
                sidebar: 'auto',
                nav: [{
                    text: '主页', link: '/zh/book/'
                },
                {
                    text: '分类一',
                    items: [
                        { text: '目录A', link: '/zh/book/dir-a/' },
                        { text: '目录b', link: '/zh/book/dir-b/' }
                    ]
                }],
                sidebar: [{
                    title: '目录A',
                    path: '/zh/book/dir-a/',
                    collapsable: false,
                    children: [
                        '/zh/book/dir-a/file-1',
                        '/zh/book/dir-a/file-2',
                        '/zh/book/dir-a/file-3'
                    ]
                }, {
                    title: '目录B',
                    path: '/zh/book/dir-b/',
                    collapsable: false,
                    children: [
                        '/zh/book/dir-b/file-1',
                        '/zh/book/dir-b/file-2',
                        '/zh/book/dir-b/file-3']
                }],
            }
        }
    },
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
            title: 'Full Stack Manual',
            description: `Misi's full stack manual`
        },
        '/zh/': {
            lang: 'zh-CN',
            title: '米司书库',
            description: '米司的全栈手册'
        }
    }
}