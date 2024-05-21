# LLVM Turorial (Based on Rust Language)

[Chinese](README.zh.md) [English](README.md)

## Motivation

* Recently learning Rust language, but don't know what to do, and may need to study LLVM IR related knowledge due to work reasons.
* [Official LLVM Tutorial Document](https://llvm.org/docs/tutorial/index.html), there are few Chinese translations
* MLIR is a sub-project of LLVM, is the infrastructure of the artificial intelligence field, and also needs to understand the basic knowledge of LLVM IR

## Reasonable Expectations

* As the cognitive level increases, the understanding of LLVM IR will gradually deepen, and it is **difficult** to guarantee the completeness and correctness of this document.
* This document is still written based on the [official LLVM Tutorial document](https://llvm.org/docs/tutorial/index.html), and will be written according to the outline of this tutorial, **supplemented and modified based on my own understanding and practical experience**.
* MLIR is not the focus of this document, and may be briefly introduced in some chapters.
* Although performance issues are an important indicator, the main focus here is on principle reproduction, and irrelevant abstract concepts are avoided as much as possible to avoid over-complication

## Development Environment

* MacOS 14.4.1 (Apple Silicon)
* Rust 1.78.0
* LLVM 18.1.5

## References

See the reference section at the end of the document and the annotated links