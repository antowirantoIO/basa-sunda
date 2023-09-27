# Sunda Script

Sunda Script is a new programming language, very modern, easy to learn, using Indonesia-slang language. No programming experience required.

Thank you for all your contributions, share, star, and everything.

## Instalation & Run

Clone this repository

```bash
git clone https://github.com/antowirantoIO/basa-sunda.git
```

### Run

If you install from npm, run Sunda script using `sunda` command

```bash
sunda example/example1.sunda
```

Or run from this repository
```
node basasunda.js example/example1.sunda
```

## Table Of Content

* [Sunda Script](#Sunda-script)
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
ieuteh yuswa saruajeung 21
nyetak "yuswa maneh " + yuswa
lamun yuswa leuwih gede 20
  nyetak "Maneh Kolot"
  ieuteh yuswaurang saruajeung yuswa + 10
  nyetak "lamun urang yuswa " + yuswaurang
  lamun yuswaurang leuwih gede 30
    nyetak "urang leuwih kolot"
  cekap
munhenteu
  nyetak "dasar bocil"
cekap
nyetak "cekap ah"
```

```
diulang nomor neupika 100
  lamun nomor henteu 0
    ieuteh hasil saruajeung ""
    nyaeta fizz saruajeung nomor % 3
    nyaeta buzz saruajeung nomor % 5
    lamun fizz saruajeung 0
      mangrupa hasil saruajeung hasil + "fizz"
    cekap
    lamun buzz saruajeung 0
      mangrupa hasil saruajeung hasil + "buzz"
    cekap
    lamun hasil saruajeung ""
      mangrupa hasil saruajeung nomor
    cekap
    nyetak hasil
  cekap
cekap
```

### Command

Some command just like javascript, the only different is keyword and this language will translate to javascript and run as javascript. I know, this is just for fun.

- [List Command](Command.md)

### Disclaimer

This project just for fun, I don't want to hurt anyone. Just from idea "what if Sunda language is a programming language" and make it true. This project only for education purpose, not for production ready.

## Showcase

Some cool project from you, submit your project like highlight text, Sunda-to-js, etc. Make PR link to your repo !. Don't limit your creativity
