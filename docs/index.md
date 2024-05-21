---
layout: home

hero:
  name: LLVM 教程
  text: 基于 Rust 语言
  actions:
    - theme: brand
      text: Get Started
      link: /llvm-tutorial/
    - theme: alt
      text: View on GitHub
      link: https://github.com/Kaifuny/llvm-tutorial-in-rust
features:
  - icon: 🛠️
    title: Another cool feature
    details: Something...
  - icon: 🛠️
    title: Another cool feature
    details: Something...
  - icon: 🛠️
    title: Another cool feature
    details: Something...
---

## 动机

* 学习 Rust 语言不知道做什么好，并且由于工作原因可能需要研究一下 LLVM IR 的相关知识。
* [官方 LLVM Tutorial 文档](https://llvm.org/docs/tutorial/index.html)，中文翻译比较少
* MLIR 是 LLVM 的一个子项目，是人工智能领域基础设施，也需要了解 LLVM IR 的基础知识

## 合理的预期

* 随着认知水平提升，对于 LLVM IR 的理解会逐步加深，**很难**保证本文档的完整性和正确性。
* 本文档基于 [官方 LLVM Tutorial 文档](https://llvm.org/docs/tutorial/index.html) 仍然会按照此教程的大纲进行编写，**会根据自己的理解和实践经验进行补充和修改**。
* MLIR 并不是本文档的重点，可能会在一些章节进行简单介绍。
* 虽然性能和工程问题是一个重要指标，这里主要以原理复现为主，尽量不引入无关抽象概念以避免过度复杂化