# 第一章：Kaleidoscope 语言与词法分析器

## 1.1 Kaleidoscope 语言简介

本教程使用一种名为 ”Kaleidoscope" 的简单语言作为示例。Kaleidoscope 是一种类似于 C 语言的过程语言，允许您定义函数，使用条件语句和循环，以及数学函数等。在本教程中，我们还将扩展 Kaleidscope 以支持 if/then/else 结构、for 循环、用户定义的运算符和优先级、JIT、调试信息等。

我们希望保持简单，因此 Kaleidoscope 中的唯一数据类型是 64 为浮点类型（在 C 语言中也称为”double"）。因此，所有制都是隐式为双精度的，并且语言不需要类型声明。这种设计降维该语言提供非常漂亮和简单的语法。例如，下面是一个计算[斐波那契数列](https://en.wikipedia.org/wiki/Fibonacci_number)的函数：

```python
# Compute the x'th fibonacci number.
def fib(x)
  if x < 3 then
    1
  else
    fib(x-1)+fib(x-2)

# This expression will compute the 40th number.
fib(40)
```

Kaleidscope 还可以调用标准函数库中的函数，例如 sin, cos, log 等，LLVM JIT 使得实现这类非常的简单。这意味着您可以在使用的函数之前使用 “extern" 关键字来定义该函数（这对于递归函数也很有用）。例如：

```C
extern sin(arg);
extern cos(arg);
extern atan2(arg1 arg2);

atan2(sin(.4), cos(42))
```

[第六章](../chapter6/index.md)将展示一个更为有趣的例子，是一个用 Kaleidoscope 编写的一个应用程序！

接下来，让我们一起了解这种语言的实现吧！

## 1.2 词法分析器

当谈到实现一种语言时，首先需要的是处理文本文件并进行内容识别。传统的方法是使用“[词法分析器（译者注：Lexer，又称 scanner）](http://en.wikipedia.org/wiki/Lexical_analysis)”将输入的文本内容按照一定的规则分解为“标记（Tokens）”。词法分析器输出的每个标记都包含标记代码和一些元数据（例如：数学的数值）。首先，我们需要定义一些标记类型：

```Rust

```

词法分析器的实际实现，位于 ``/sources/llvm-tutorial/chapter1/rust/src/lexer.rs`` 文件中。下面是该文件的内容：

```Rust
```