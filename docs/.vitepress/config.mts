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
          { text: '第一章：Kaleidoscope 语言与词法分析器', link: '/chapter1/' },
        ]
      }
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Kaifuny'
    }
  }
})
