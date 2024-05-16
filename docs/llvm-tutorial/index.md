# LLVM 教程：我的第一个语言前端

> 参考及翻译自 [https://llvm.org/docs/tutorial/MyFirstLanguageFrontend/index.html](https://llvm.org/docs/tutorial/MyFirstLanguageFrontend/index.html)

::: info 必要的基础知识
本教程假设您了解 Rust 编程语言。如果您不熟悉这种语言，建议您先学习它们。但是不需要具备编译器经验。
:::

::: warning 警告
* 本教程行文和主题基于 [LLVM Tutorial](https://llvm.org/docs/tutorial/)，但是代码和示例是基于Rust语言的。主要关注于 LLVM 以及编译器相关的技术，关于软件工程的最佳实践和 Rust 语言的特性不会详细介绍，因此代码可能不是最优的 Rust 代码。
* 考虑到官方 LLVM Tutorial 是以 C++ 为主，所以本教程不会完全翻译官方教程，而是以 Rust 语言为主，所以有些内容会有所删减或者调整。但是会提供对应的链接，并提供官方教程 C++ 代码。
:::

## 简介

通过 Kaleidoscope 语言，我们将学习如何使用 LLVM 构建一个简单的编译器。Kaleidoscope 是一个简单的语言，它支持基本的数学运算、变量赋值、函数定义等功能。我们将从词法分析器开始，逐步实现解析器、抽象语法树（AST）、LLVM IR 代码生成、JIT 编译器等功能。

## 章节说明

* [第一章：Kaleidoscope 语言与词法分析器](./chapter1/)
* [第二章：实现解析器和 AST](./chapter2/)
* [第三章：LLVM IR 的代码生成](./chapter3/)
* [第四章：添加 JIT 和优化器支持](./chapter4/)
* [第五章：扩展：控制流](./chapter5/)
* [第六章：扩展：用户定义的运算符](./chapter6/)
* [第七章：扩展：可变变量](./chapter7/)
* [第八章：编译为目标文件](./chapter8/)
* [第九章：调试信息](./chapter9/)
* [第十章：总结](./chapter10/)

## JIT

## 高级话题

* [LLVM 优化](./advanced/optimization)
