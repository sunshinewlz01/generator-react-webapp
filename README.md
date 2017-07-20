# 手把手教你写创建React webapp项目的脚手架
本文主要针对脚手架初学者，老鸟可略过~

## 一、安装环境
首先保证已经安装以下软件：
1. Node.js（6.0以上版本）
2. npm (3.0以上版本)
3. 安装yeoman

```bash
npm install -g yo
```

## 二、关于脚手架
在开始开发任何一个项目时，总需要初始化项目工程，最开始的时候往往是手动创建工程目录和文件，并逐渐形成一套架构规范或者最佳实践和风格指南。<br />
当需要把这套最佳实践应用到其他项目中时，为了快速创建标准化项目，往往就需要一个脚手架来自动创建标准化的工程项目了。<br />
鉴于Yeoman的强大功能，基于Yeoman写一个脚手架是一个比较好的选择：<br />
1. Yeoman是一个通用的脚手架系统允许创建任何的app。它可以迅速的搭建一个新项目，并且能够简化现有项目的维护。
2. Yeoman构建的项目与语言无关。它可以构建任何语言的项目 (Javascript, Java, Python, C#,等。)
3. Yeoman它自己不能做任何操作。每个操作都是由generators基本插件在Yeoman环境所完成的。Yeoman总是可以为你需要的脚手架工具作出正确的选择。
4. Generators是Yeoman生态系统的基础.它是一个重要组件，运行yo为终端用户生成项目文件。
本文即主要是介绍如何基于Yeoman写一个创建React webapp项目的脚手架，下面将具体逐步介绍。

## 三、组织generator
通过如下命令创建package.json文件：
```bash
npm init
```
最后生成的package.json文件如下：
```json
{
     "name": "generator-react-webapp",
     "version": "0.0.1",
     "description": "Generator react webapp scaffold.",
     "main": "generators/app/index.js",
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     "repository": {
       "type": "git",
       "url": "https://github.com/sunshinewlz01/generator-react-webapp.git"
     },
     "keywords": [
       "yeoman-generator",
       "react",
       "webapp"
     ],
     "author": "weileizhe",
     "license": "MIT",
     "bugs": {
       "url": "https://github.com/sunshinewlz01/generator-react-webapp/issues"
     },
     "homepage": "https://github.com/sunshinewlz01/generator-react-webapp#readme",
     "files": [
       "generators"
     ],
     "dependencies": {
       "yeoman-generator": "^1.1.1"
     }
   }
```
注意：<br />
1. 这个generator的name属性必须以“generator-”为前缀;
2. keywords属性必须包含"yeoman-generator";
3. “file” 属性必须是由你的generator使用的文件排列和目录。
   
另外，为了保证yeoman-generator已经安装到最新版本，你还需要运行一下如下命令：
```bash
npm install yeoman-generator --save
```

## 四、generator文件树结构

Yeoman会深度链接到文件系统和你如何组织你的目录树。<br />
如上面的generator,将暴露“yo name”命令。
如果想暴露“yo name:subgenerator”命令，需要在package.json里面做如下配置：
```json
{
  "files": [
    "generators/app",
    "generators/subgenerator"
  ]
}
```
一般情况下，一个generator工程项目的树形结构如下：
```
── LICENSE
├── README.md
├── generators
│   └── app
│       ├── index.js
│       └── templates
│           ├── README.md
│           ├── compile.sh
│           ├── package.json
│           ├── public
│           │   ├── favicon.ico
│           │   ├── iconfont
│           │   │   ├── demo.css
│           │   │   ├── demo_fontclass.html
│           │   │   ├── demo_symbol.html
│           │   │   ├── demo_unicode.html
│           │   │   ├── iconfont.css
│           │   │   ├── iconfont.eot
│           │   │   ├── iconfont.js
│           │   │   ├── iconfont.svg
│           │   │   ├── iconfont.ttf
│           │   │   └── iconfont.woff
│           │   ├── index.html
│           │   └── manifest.json
│           └── src
│               ├── index.js
│               ├── index.less
│               └── static
│                   ├── common
│                   ├── components
│                   ├── core
│                   ├── images
│                   └── mock
└── package.json
```




