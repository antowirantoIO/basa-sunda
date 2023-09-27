# Jaksel Script

Jaksel Script is a new programming language, very modern, easy to learn, using Indonesia-slang language. No programming experience required.

Thank you for all your contributions, share, star, and everything.

## Instalation & Run

Install from npm
```bash
npm install -g jaksel-language
```
Or Clone this repository

```bash
git clone https://github.com/RioChndr/jaksel-language.git
```

### Run

If you install from npm, run jaksel script using `jaksel` command

```bash
jaksel example/example1.jaksel
```

Or run from this repository
```
node jaksel-interpreter.js example/example1.jaksel
```

## Table Of Content

* [Jaksel Script](#jaksel-script)
   * [Instalation &amp; Run](#instalation--run)
   * [Table Of Content](#table-of-content)
   * [Example](#example)
   * [Command](#command)
  * [Disclaimer](#disclaimer)
   * [Showcase](#showcase)
      * [Highlight Text Editor](#highlight-text-editor)

[github-markdown-toc](https://github.com/ekalinin/github-markdown-toc)

## Example 

Example : 

```
ieuteh umur saruajeung 21
nyetak "Umur lu " + umur
lamun umur leuwih gede 20
  nyetak "Elu tua"
  ieuteh umurgua saruajeung umur + 10
  nyetak "lamun gua umurnya " + umurgua
  lamun umurgua leuwih gede 30
    nyetak "gua lebih tua"
  cekap
munhenteu
  nyetak "dasar bocil"
cekap
nyetak "cekap ah"
```

```
ieuteh jumlah saruajeung 10
nyetak "Jumlah: " + jumlah

mangrupa jumlah saruajeung 11
nyetak "Jumlah: " + jumlah

ieuteh isHidup saruajeung leres
nyetak "is hidup :" + isHidup

diulang i neupika 10
  lamun i leuwih gede 3
    nyetak "loop ke " + i
  cekap
cekap
```

### Command

Some command just like javascript, the only different is keyword and this language will translate to javascript and run as javascript. I know, this is just for fun.

- [List Command](Command.md)

### Disclaimer

This project just for fun, I don't want to hurt anyone. Just from idea "what if jaksel language is a programming language" and make it true. This project only for education purpose, not for production ready.

## Showcase

Some cool project from you, submit your project like highlight text, jaksel-to-js, etc. Make PR link to your repo !. Don't limit your creativity

### Highlight Text Editor
- [vim-jaksel](https://github.com/cocatrip/vim-jaksel) jaksel programming language plugin for (n)vim
- [vscode-jaksel-language-support](https://github.com/ngupuk/vscode-jaksel-language-support) visual studio code extension for syntax highlighting, code snippet, and auto formatting
