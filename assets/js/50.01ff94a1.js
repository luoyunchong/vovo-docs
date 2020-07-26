(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{394:function(s,n,a){"use strict";a.r(n);var e=a(4),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"前端准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端准备"}},[s._v("#")]),s._v(" 前端准备")]),s._v(" "),a("h2",{attrs:{id:"开源地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开源地址"}},[s._v("#")]),s._v(" 开源地址")]),s._v(" "),a("ul",[a("li",[s._v("管理端UI "),a("a",{attrs:{href:"https://github.com/luoyunchong/lin-cms-vue",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/luoyunchong/lin-cms-vue"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("用户端UI "),a("a",{attrs:{href:"https://github.com/luoyunchong/lin-cms-vvlog",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/luoyunchong/lin-cms-vvlog"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"博客模块线上地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#博客模块线上地址"}},[s._v("#")]),s._v(" 博客模块线上地址")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("后端swagger地址 "),a("a",{attrs:{href:"https://baimocore.cn/swagger/index.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://baimocore.cn/swagger/index.html"),a("OutboundLink")],1)])]),s._v(" "),a("li",[a("p",[s._v("用户端 lin-cms-vvlog "),a("a",{attrs:{href:"http://47.106.80.39:8080/#/index",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://47.106.80.39:8080/#/index"),a("OutboundLink")],1)]),s._v(" "),a("ul",[a("li",[s._v("普通用户：710277267@qq.com")]),s._v(" "),a("li",[s._v("密码：123qwe")])])]),s._v(" "),a("li",[a("p",[s._v("管理员 lin-cms-vue "),a("a",{attrs:{href:"http://47.106.80.39:8081/#/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://47.106.80.39:8081/#/"),a("OutboundLink")],1)]),s._v(" "),a("ul",[a("li",[s._v("管理员： admin")]),s._v(" "),a("li",[s._v("密码：123qwe")])])])]),s._v(" "),a("h2",{attrs:{id:"快速上手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[s._v("#")]),s._v(" 快速上手")]),s._v(" "),a("p",[s._v("开发必备")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Node.js 10+"),a("OutboundLink")],1),s._v(" 版本即可，我须安装12.7")]),s._v(" "),a("li",[a("a",{attrs:{href:"https://yarnpkg.com/zh-Hant/docs/install#windows-stable",target:"_blank",rel:"noopener noreferrer"}},[s._v("yarn"),a("OutboundLink")],1)])]),s._v(" "),a("p",[s._v("如果以下命令有问题，请删除yarn.lock，node_modules文件夹后，重新执行yarn，yarn serve")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# clone the project\ngit clone https://github.com/luoyunchong/lin-cms-vue.git\n\n# install dependency\nyarn\n\n# develop\nyarn serve\n\n# deploy\nyarn deploy\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"deploy-发布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-发布"}},[s._v("#")]),s._v(" deploy 发布")]),s._v(" "),a("p",[s._v("scp2方便快速发布，一行命令就能快速发布成功。")]),s._v(" "),a("p",[s._v("必备条件：（参数）")]),s._v(" "),a("ul",[a("li",[s._v("一台linux的服务器，ip")]),s._v(" "),a("li",[s._v("用户名")]),s._v(" "),a("li",[s._v("密码")]),s._v(" "),a("li",[s._v("端口：默认是22")]),s._v(" "),a("li",[s._v("发布的地址。这里放到/var/www/lin-cms-vue目录中。")])]),s._v(" "),a("h2",{attrs:{id:"步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[s._v("#")]),s._v(" 步骤")]),s._v(" "),a("p",[s._v("根目录新建deploy目录，创建index.js文件。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('\'use strict\'\n// 引入scp2模块\nvar client = require(\'scp2\');\nconst ora = require(\'ora\')\nconst chalk = require(\'chalk\')\nconst spinner = ora(\'正在发布到生产服务器...\')\nspinner.start()\nclient.scp(\'dist/\', {\n    "host": "",\n    "username": "",\n    "password": "",\n    "port": "22",\n    "path": "/var/www/lin-cms-vue"\n}, function (err) {\n    spinner.stop()\n    if (!err) {\n        console.log("npm run build-scp2: scp2工具上传完毕,远端服务路径：/var/www/lin-cms-vue")\n    } else {\n        console.log("err", err)\n    }\n})\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("p",[s._v("快速发布，需要安装 scp2")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cnpm install scp2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("package.json中增加")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('  "scripts": {\n    "deploy": "yarn build:production && node ./deploy",\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("yarn deploy\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"nginx-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置"}},[s._v("#")]),s._v(" nginx 配置")]),s._v(" "),a("ul",[a("li",[s._v("vue 使用history的配置")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("server {\n    listen 8080;\n    root /var/www/lin-cms-vue;\n\n   charset utf-8;\n   location / {\n       try_files $uri $uri/ /index.html; \n\n     }\n        \n    error_page   500 502 503 504  /50x.html;\n    location = /50x.html {\n        root   html;\n    }\n\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h2",{attrs:{id:"配置项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置项"}},[s._v("#")]),s._v(" 配置项")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("配置 api 地址： 打开配置文件 src/config/index.js 配置 baseUrl ，本地开发阶段配置本地虚拟域名(https://localhost:5001/)，线上部署生产域名。")])]),s._v(" "),a("li",[a("p",[s._v("用户名："),a("strong",[s._v("admin")]),s._v("  密码 "),a("strong",[s._v("123qwe")])])])])])}),[],!1,null,null,null);n.default=t.exports}}]);