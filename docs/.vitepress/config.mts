import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "LLVM",
  description: "LLVM",
  base: "/llvm-tutorial-in-rust",
  themeConfig: {
    nav: [
      { text: 'LLVM 教程', link: '/llvm-tutorial/' },
      { text: 'LLVM 官方地址链接', items: [
          { 
            text: 'Documentation', items: [
              { text: 'Getting Started/Tutorials', link: 'https://llvm.org/docs/GettingStartedTutorials.html' },
              { text: 'User Guides', link: 'https://llvm.org/docs/UserGuides.html' },
              { text: 'Reference', link: 'https://llvm.org/docs/Reference.html' },
            ] 
          },
          { 
            text: 'LLVM Getting Involved', items: [
              { text: 'Contributing to LLVM', link: 'https://llvm.org/docs/Contributing.html' },
              { text: 'Submitting Bug Reports', link: 'https://llvm.org/docs/HowToSubmitABug.html' },
              { text: 'Mailing Lists', link: 'https://llvm.org/docs/GettingInvolved.html#mailing-lists' },
              { text: 'IRC', link: 'https://llvm.org/docs/GettingInvolved.html#irc' },
              { text: 'Meetups and Social Events', link: 'https://llvm.org/docs/GettingInvolved.html#meetups-and-social-events' },
            ] 
          },
          { 
            text: 'Additional Links', items: [
              { text: 'FAQ', link: 'https://llvm.org/docs/FAQ.html' },
              { text: 'Glossary', link: 'https://llvm.org/docs/Lexicon.html' },
              { text: 'Publications', link: 'https://llvm.org/pubs' },
              { text: 'Github Repository', link: 'https://github.com/llvm/llvm-project/' },
            ] 
          }
        ] 
      },
    ],
    sidebar: {
      '/llvm-tutorial/' : {
        base: '/llvm-tutorial/',
        items: [
          {
            text: 'LLVM 入门教程',
            collapsed: false,
            items: [
              { text: '第一章：Kaleidoscope 语言与词法分析器', link: '/chapter1/' },
              { text: '第二章：实现解析器和 AST', link: '/chapter2/' },
              { text: '第三章：LLVM IR 的代码生成', link: '/chapter3/' },
              { text: '第四章：添加 JIT 和优化器支持', link: '/chapter4/' },
              { text: '第五章：扩展：控制流', link: '/chapter5/' },
              { text: '第六章：扩展：用户定义的运算符', link: '/chapter6/' },
              { text: '第七章：扩展：可变变量', link: '/chapter7/' },
              { text: '第八章：编译为目标文件', link: '/chapter8/' },
              { text: '第九章：调试信息', link: '/chapter9/' },
              { text: '第十章：总结', link: '/chapter10/' },
            ]
          },
          {
            text: 'JIT',
            collapsed: false,
            items: []
          },
          {
            text: '高级话题',
            collapsed: false,
            items: [
              { text: 'LLVM 优化', link: '/advanced/optimization'}
            ]
          }
        ]
      }
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Kaifuny'
    }
  }
})
