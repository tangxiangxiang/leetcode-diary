import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: "/leetcode-diary/",
    title: "LeetCode Diary",
    description: "...",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '首页', link: '/'},
        ],
        search: {
            provider: 'local'
        },
        sidebar: [
            {
                text: '全部题目',
                items: [
                    {text: '1. 两数之和', link: '/0001'},
                    {text: '2. 两数相加', link: '/api-examples'}
                ]
            }
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/tangxiangxiang/leetcode-diary'}
        ]
    }
})
