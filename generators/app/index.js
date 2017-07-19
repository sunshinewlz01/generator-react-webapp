/**
 * Created by weileizhe on 17/7/19.
 */


// 创建 yeoman generator 的核心功能模块.
const Generator = require('yeoman-generator');

// 文件读写模块.
const fs = require('fs');
// 路径模块
const path = require('path');

/**
 * Base generator.
 */
module.exports = class extends Generator {

    /** 构造函数 */
    constructor(args, opts) {
        super(args, opts);
        this.projectName = args[0];
        console.log(this.projectName);
    }

    /**
     * 初始化方法.
     */
    initializing() {
        this.log("开始构建项目...");
    }

    prompting() {
        const done = this.async();
        if(!this.projectName) {
            const prompts = [{
                type    : 'input',
                name    : 'projectName',
                message : 'Your project name',
                default : this.appname // Default to current folder name
            }];
            return this.prompt(prompts).then((props) => {
                this.props = props;
                done();
            });
        } else {
            done();
        }

    }

    /**
     * 写入配置
     */
    configuring() {
        const projectName = this.projectName || this.props.projectName;
        const projectPath = process.cwd() + '/' + projectName;

        // 获取 package 配置模板.
        let defaultSettings = this.fs.readJSON( this.templatePath('package.json') );
        // 做新 package 配置文件.
        let packageSettings = {
            name: this.projectName || this.props.projectName,
            private: true,
            version: defaultSettings.version,
            description: this.projectName || this.props.projectName,
            scripts: defaultSettings.scripts,
            repository: defaultSettings.repository,
            author: defaultSettings.author,
            devDependencies: defaultSettings.devDependencies,
            dependencies: defaultSettings.dependencies,
            homepage:defaultSettings.homepage
        };

        // 写入 package.json.
        this.fs.writeJSON(this.destinationPath(projectPath+'/package.json'), packageSettings);
    }

    /**
     * 写入文件
     */
    writing() {
        const projectName = this.projectName || this.props.projectName;
        const projectPath = process.cwd() + '/' + projectName;

        if(projectName) {
            fs.mkdirSync(`${projectName}`);

            console.log(projectPath);
            process.chdir(projectPath);
        }
        console.log(this.destinationPath(projectPath,"/src"));

        /* 拷贝所需的文件. */

        this.fs.copy(
            this.templatePath("src"),
            this.destinationPath(projectPath,"/src")
        );
        this.fs.copy(
            this.templatePath("public"),
            this.destinationPath(projectPath,"/public")
        );
        this.fs.copy(
            this.templatePath(".eslintrc"),
            this.destinationPath(projectPath,"/.eslintrc")
        );
        this.fs.copy(
            this.templatePath(".npmignore"),
            this.destinationPath(projectPath,"/.gitignore")
        );
        this.fs.copy(
            this.templatePath(".stylelintrc"),
            this.destinationPath(projectPath,"/.stylelintrc")
        );
        this.fs.copy(
            this.templatePath("build.sh"),
            this.destinationPath(projectPath,"/build.sh")
        );
        this.fs.copy(
            this.templatePath("compile.sh"),
            this.destinationPath(projectPath,"/compile.sh")
        );
        this.fs.copy(
            this.templatePath("nginx.conf"),
            this.destinationPath(projectPath,"/nginx.conf")
        );
        this.fs.copy(
            this.templatePath("README.md"),
            this.destinationPath(projectPath,"/README.md")
        );

    }

    /**
     * 安装方法
     */
    install() {
        // 安装 package 安装.
        this.installDependencies({ npm: true,bower:false});
    }

    end() {

        this.log("构建项目成功！");

    }

};