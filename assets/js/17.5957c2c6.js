(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{367:function(t,e,s){"use strict";s.r(e);var r=s(4),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"net-core-学习示例文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#net-core-学习示例文档"}},[t._v("#")]),t._v(" .NET Core  学习示例文档")]),t._v(" "),s("p",[t._v("浏览左侧导航菜单以深入了解文档.")]),t._v(" "),s("p",[t._v(".NET Core 学习示例文档主要是结合 ASP .NET Core，集成第三方类库的示例，运用基础组件，写好Demo。")]),t._v(" "),s("h2",{attrs:{id:"源码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#源码"}},[t._v("#")]),t._v(" 源码")]),t._v(" "),s("p",[t._v("代码托管在GitHub上  "),s("a",{attrs:{href:"https://github.com/luoyunchong/dotnetcore-examples",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/luoyunchong/dotnetcore-examples"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"推荐阅读"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#推荐阅读"}},[t._v("#")]),t._v(" 推荐阅读")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Microsoft Docs "),s("a",{attrs:{href:"https://docs.microsoft.com/zh-cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.microsoft.com/zh-cn"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("其中包含如下")]),t._v(" "),s("ul",[s("li",[t._v(".NET Core 指南 https://docs.microsoft.com/zh-cn/dotnet/core/")]),t._v(" "),s("li",[t._v("ASP .NET 文档 https://docs.microsoft.com/zh-cn/aspnet/")]),t._v(" "),s("li",[t._v(".NET Core CLI 文档 https://docs.microsoft.com/zh-cn/dotnet/core/tools/?tabs=netcore2x")])])])]),t._v(" "),s("h2",{attrs:{id:"本地环境说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地环境说明"}},[t._v("#")]),t._v(" 本地环境说明")]),t._v(" "),s("ul",[s("li",[t._v("Windows 10 (18922.rs_prerelease.190614-1427)")]),t._v(" "),s("li",[t._v(".NET Core 3.0.100-preview6-012264")]),t._v(" "),s("li",[t._v("Visual Studio Code 1.35.1、Microsoft Visual Studio 2019 16.1.3")]),t._v(" "),s("li",[t._v("PowerSheel")]),t._v(" "),s("li",[t._v("MySQL 5.7.25")]),t._v(" "),s("li",[t._v("Navicat Premium 12 "),s("a",{attrs:{href:"http://blog.igeekfan.cn/2018/06/02/%E5%A4%A7%E5%90%8E%E7%AB%AF/Navicat%20Premium%2012%20%20%E7%A0%B4%E8%A7%A3%E7%89%88%E5%85%8D%E8%B4%B9%E4%B8%8B%E8%BD%BD/",target:"_blank",rel:"noopener noreferrer"}},[t._v("欢迎下载"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),s("p",[t._v("本地开发选择SDK安装即可，还是安装 2.2的吧，3.0（19.6.29）目前还没有发布稳定版本。")]),t._v(" "),s("ul",[s("li",[t._v("安装这个 "),s("strong",[t._v("https://dotnet.microsoft.com/download/dotnet-core/2.2")])]),t._v(" "),s("li",[t._v("https://dotnet.microsoft.com/download/dotnet-core/3.0")])]),t._v(" "),s("p",[t._v("安装后，在 PowerShell 中任一目录查看安装后的版本")]),t._v(" "),s("div",{staticClass:"language-PowerShell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v(" C:\\WINDOWS\\system32> dotnet "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("version\n3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("100"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("preview6"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("012264\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 本地安装了好几个.net core sdk版本")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v(" C:\\WINDOWS\\system32> dotnet "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("list"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("sdks\n2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("700 "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[C:\\Program Files\\dotnet\\sdk]")]),t._v("\n2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("300 "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[C:\\Program Files\\dotnet\\sdk]")]),t._v("\n3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("100"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("preview6"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("012264 "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[C:\\Program Files\\dotnet\\sdk]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("h2",{attrs:{id:"cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cli"}},[t._v("#")]),t._v(" CLI")]),t._v(" "),s("p",[t._v("全称：command-line interface，命令行界面，主要是cmd、bash(sh等等)、powershell等。")]),t._v(" "),s("blockquote",[s("p",[t._v("说明 "),s("strong",[t._v("所有命令行都在windows10自带的powershell中执行。")])])]),t._v(" "),s("h3",{attrs:{id:"指定sdk版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指定sdk版本"}},[t._v("#")]),t._v(" 指定SDK版本")]),t._v(" "),s("p",[t._v(".NET Core 项目默认使用最新版本的 .NET Core，在根目录使用PowerShell中执行如下命令，")]),t._v(" "),s("p",[t._v("语法 ：dotnet new global.json --sdk-version <SDK版本号>")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("dotnet new globaljson --sdk-version 2.2.300\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("参考")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/dotnet/core/tools/dotnet-new?tabs=netcore22",target:"_blank",rel:"noopener noreferrer"}},[t._v("dotnet new 命令行"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/dotnet/core/versions/selection?view=dotnet-plat-ext-2.1",target:"_blank",rel:"noopener noreferrer"}},[t._v("选择要使用的 .NET Core 版本"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"net-core"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#net-core"}},[t._v("#")]),t._v(" .NET Core")]),t._v(" "),s("p",[t._v(".NET Core是什么？ 官网说的太高大上了 https://docs.microsoft.com/zh-cn/dotnet/core/about")]),t._v(" "),s("p",[t._v("总结，.NET Core包含如下")]),t._v(" "),s("ul",[s("li",[t._v("二个RunTime\n"),s("ul",[s("li",[t._v(".NET Core RunTime：基础类型系统 、垃圾回收、基元类型等，")]),t._v(" "),s("li",[t._v("ASP .NET RunTime ：提供WEB、LOT等应用程序的框架支持。")])])]),t._v(" "),s("li",[t._v(".NET Core CLI工具：各种命令行工具，创建项目、编译项目，发布项目等；")]),t._v(" "),s("li",[t._v("语言编译器：（支持C#、F#、VB等语言）")]),t._v(" "),s("li",[t._v("dotnet 工具：.NET Core运行时和库的安装程序包")])]),t._v(" "),s("p",[t._v("三个发布包：")]),t._v(" "),s("ul",[s("li",[t._v(".NET Core 运行时")]),t._v(" "),s("li",[t._v("ASP .NET Core 运行时")]),t._v(" "),s("li",[t._v(".NET Core SDK：包括上面二个内容，再加上 .NET CLI工具等")])]),t._v(" "),s("p",[t._v("所以本地调试时，可直接安装最全的SDK即可。")]),t._v(" "),s("h2",{attrs:{id:"项目文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目文档"}},[t._v("#")]),t._v(" 项目文档")]),t._v(" "),s("p",[t._v("目前 关于此项目的文档放到docs文件夹中，zh-Hans为中文，这样可支持多语言，欢迎翻译PR，之后会发布至")]),t._v(" "),s("ul",[s("li",[t._v("文档官网 "),s("a",{attrs:{href:"https://luoyunchong.github.io/vuepress-docs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://luoyunchong.github.io/vuepress-docs/"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("将使用abp vnext 下的modules的"),s("a",{attrs:{href:"https://github.com/abpframework/abp/blob/dev/modules/docs/README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("docs模块"),s("OutboundLink")],1),t._v("。不过abp vnext 现在也不稳定，0.18.1，还是有各种问题，我还是写基础模块的使用文档吧，后期完善后，发布文档网站。")]),t._v(" "),s("h2",{attrs:{id:"说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),s("p",[t._v("本项目也是我的学习记录，，用于测试不同类库集成的解决方案，所以用最基础的方案，"),s("strong",[t._v("命令行")]),t._v("来创建项目，引用包，运行，测试等。让自己对 .net core 的原理结构了解地更加深入一些。")]),t._v(" "),s("ul",[s("li",[t._v("采用的都是 Visual Studio Code/VS2019 +PowerShell运行，关于如何采用Visual Studio 2019创建项目，引用包是非常简单的，不再说明。")])])])}),[],!1,null,null,null);e.default=a.exports}}]);