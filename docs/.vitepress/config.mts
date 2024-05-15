import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "LLVM 指南 (基于 Rust 语言)",
  description: "LLVM 指南 (基于 Rust 语言)",
  base: "/llvm-tutorial-in-rust",
  themeConfig: {
    nav: [
      { text: 'LLVM Tutorial', link: 'https://llvm.org/docs/tutorial/' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Kaifuny'
    }
  }
})
