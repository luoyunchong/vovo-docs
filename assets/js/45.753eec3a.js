(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{400:function(e,t,r){"use strict";r.r(t);var n=r(4),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"scriban-本模板语言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#scriban-本模板语言"}},[e._v("#")]),e._v(" scriban 本模板语言")]),e._v(" "),r("h3",{attrs:{id:"目录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[e._v("#")]),e._v(" 目录")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.cnblogs.com/igeekfan/p/13343331.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("【翻译】Scriban是一种快速、强大、安全和轻量级的文本模板语言和.NET引擎，具有解析liquid模板的兼容模式"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:""}},[e._v("【翻译】 Scriban  language（ 待完成）")])]),e._v(" "),r("li",[r("a",{attrs:{href:""}},[e._v("【翻译】Scriban runtime（ 待完成）")])])]),e._v(" "),r("h3",{attrs:{id:"原文github：https-github-com-lunet-io-scriban-readme"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#原文github：https-github-com-lunet-io-scriban-readme"}},[e._v("#")]),e._v(" 原文Github：https://github.com/lunet-io/scriban#readme")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/lunet-io/scriban/actions",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://github.com/lunet-io/scriban/workflows/ci/badge.svg?branch=master",alt:"Build Status"}}),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://coveralls.io/github/lunet-io/scriban?branch=master",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://coveralls.io/repos/github/lunet-io/scriban/badge.svg?branch=master",alt:"Coverage Status"}}),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://www.nuget.org/packages/Scriban/",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/nuget/v/Scriban.svg",alt:"NuGet"}}),r("OutboundLink")],1)]),e._v(" "),r("img",{attrs:{align:"right",width:"160px",height:"160px",src:"img/scriban.png"}}),e._v(" "),r("p",[e._v("Scriban是一种快速、强大、安全和轻量级的文本模板语言和.NET引擎，具有解析"),r("code",[e._v("liquid")]),e._v("模板的兼容模式")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('// Parse a scriban template\nvar template = Template.Parse("Hello {{name}}!");\nvar result = template.Render(new { Name = "World" }); // => "Hello World!" \n')])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br")])]),r("p",[e._v("使用Liquid语言解析Liquid模板：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('// Parse a liquid template\nvar template = Template.ParseLiquid("Hello {{name}}!");\nvar result = template.Render(new { Name = "World" }); // => "Hello World!" \n')])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br")])]),r("p",[e._v("语言非常通用，易于阅读和使用，类似于"),r("a",{attrs:{href:"https://shopify.github.io/liquid/",target:"_blank",rel:"noopener noreferrer"}},[e._v("liquid"),r("OutboundLink")],1),e._v(" 模板:")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("var template = Template.Parse(@\"\n<ul id='products'>\n  {{ for product in products }}\n    <li>\n      <h2>{{ product.name }}</h2>\n           Price: {{ product.price }}\n           {{ product.description | string.truncate 15 }}\n    </li>\n  {{ end }}\n</ul>\n\");\nvar result = template.Render(new { Products = this.ProductList });\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br"),r("span",{staticClass:"line-number"},[e._v("9")]),r("br"),r("span",{staticClass:"line-number"},[e._v("10")]),r("br"),r("span",{staticClass:"line-number"},[e._v("11")]),r("br"),r("span",{staticClass:"line-number"},[e._v("12")]),r("br")])]),r("blockquote",[r("p",[r("strong",[e._v("注意")])]),e._v(" "),r("p",[e._v("默认情况下, .NET对象的属性和方法会自动以小写和"),r("code",[e._v("_")]),e._v("命名，这意味着像"),r("code",[e._v("MyMethodIsNice")]),e._v("这样的属性将被公开为"),r("code",[e._v("my_method_is_nice")]),e._v(".这是默认约定，最初是为了匹配"),r("code",[e._v("liquid")]),e._v("模板的行为。\n如果要改变此行为，则需要使用 "),r("RouterLink",{attrs:{to:"/dotnetcore/lin-cms/doc/runtime.html#member-renamer"}},[r("code",[e._v("MemberRenamer")])]),e._v(" 委托")],1)]),e._v(" "),r("h2",{attrs:{id:"特性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[e._v("#")]),e._v(" 特性")]),e._v(" "),r("ul",[r("li",[e._v("非常"),r("strong",[e._v("高效")]),e._v(","),r("strong",[e._v("快速")]),e._v(" 解析器和"),r("strong",[e._v("轻量级")]),e._v("的运行时. 对CPU和垃圾收集器友好. 查看")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/lunet-io/scriban/blob/devel-3.0/doc/benchmarks.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("benchmarks"),r("OutboundLink")],1),e._v("获取更多细节.")]),e._v(" "),r("li",[e._v("由Lexer / Parser提供一个"),r("strong",[e._v("完整的抽象语法树，fast, versatile and robust(快速，通用且强大)")]),e._v(", 比基于regex的解析器更高效\n"),r("ul",[r("li",[e._v("错误报告:能提供精确的源代码位置 ，包括(path, column and line)")]),e._v(" "),r("li",[r("strong",[e._v("将AST写入脚本文本的形式")]),e._v(",  使用 "),r("a",{attrs:{href:"https://github.com/lunet-io/scriban/blob/devel-3.0/doc/runtime.md#ast-to-text",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("Template.ToText")]),r("OutboundLink")],1),e._v(", 可以操作内存中的脚本并将其重新保存到磁盘, 对于 "),r("strong",[e._v("roundtrip（往返）的脚本更新方案")]),e._v("是有用的")])])]),e._v(" "),r("li",[r("strong",[e._v("兼容"),r("code",[e._v("liquid")])]),e._v(" 模板 可使用"),r("code",[e._v("Template.ParseLiquid")]),e._v("  方法\n"),r("ul",[r("li",[e._v("虽然 "),r("code",[e._v("liquid")]),e._v(" 语言不如"),r("code",[e._v("scriban")]),e._v("强大, 但该模式从 "),r("code",[e._v("liquid")]),e._v(" 则更容易地迁移至 "),r("code",[e._v("scriban")])]),e._v(" "),r("li",[e._v("在 "),r("a",{attrs:{href:"https://github.com/lunet-io/scriban/blob/devel-3.0/doc/runtime.md#ast-to-text",target:"_blank",rel:"noopener noreferrer"}},[e._v("AST to text"),r("OutboundLink")],1),e._v(" 模式下,将对模板"),r("code",[e._v("Template.ParseLiquid")]),e._v("进行解析，替换成"),r("code",[e._v("Template.ToText")]),e._v(",即可将"),r("code",[e._v("liquid")]),e._v(" 脚本 转换成 "),r("code",[e._v("scriban")]),e._v(" 脚本")]),e._v(" "),r("li",[e._v("由于  liquid 语言没有严格定义 并且它有着不同版本的liquid语法，在使用scriban的liquid模板时会有一些限制, 查看此文档了解详情 "),r("a",{attrs:{href:"https://github.com/lunet-io/scriban/blob/devel-3.0/doc/liquid-support.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("liquid support in scriban"),r("OutboundLink")],1)])])]),e._v(" "),r("li",[r("strong",[e._v("可扩展的运行时")]),e._v(" 提供许多扩展点")]),e._v(" "),r("li",[e._v("支持 "),r("code",[e._v("async")]),e._v("/"),r("code",[e._v("await")]),e._v(" 的脚本支持 (e.g "),r("code",[e._v("Template.RenderAsync")]),e._v(")")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/lunet-io/scriban/blob/devel-3.0/doc/language.md#14-whitespace-control",target:"_blank",rel:"noopener noreferrer"}},[e._v("精确控制空白文本输出"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/lunet-io/scriban/blob/devel-3.0/doc/language.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("完整的语言特性"),r("OutboundLink")],1),e._v(" 包括 "),r("code",[e._v("if")]),e._v("/"),r("code",[e._v("else")]),e._v("/"),r("code",[e._v("for")]),e._v("/"),r("code",[e._v("while")]),e._v(", "),r("RouterLink",{attrs:{to:"/dotnetcore/lin-cms/doc/language.html#8-expressions"}},[e._v("expressions")]),e._v(" ("),r("code",[e._v("x = 1 + 2")]),e._v("), conditions... etc.")],1),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/lunet-io/scriban/blob/devel-3.0/doc/language.md#89-function-call-expression",target:"_blank",rel:"noopener noreferrer"}},[e._v("函数调用和管道"),r("OutboundLink")],1),e._v(" ("),r("code",[e._v("myvar | string.capitalize")]),e._v(")\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/lunet-io/scriban/blob/devel-3.0/doc/language.md#7-functions",target:"_blank",rel:"noopener noreferrer"}},[e._v("自定义函数"),r("OutboundLink")],1),e._v(" 通过"),r("code",[e._v("func")]),e._v("语句直接将函数自定义到语言中 通过"),r("code",[e._v("alias @ directive")]),e._v("可使用"),r("strong",[e._v("function pointers/delegates")])]),e._v(" "),r("li",[e._v("从runtime API绑定 "),r("a",{attrs:{href:"https://github.com/lunet-io/scriban/blob/devel-3.0/doc/runtime.md#imports-functions-from-a-net-class",target:"_blank",rel:"noopener noreferrer"}},[e._v(".NET自定义函数"),r("OutboundLink")],1),e._v("，并提供许多与.NET对象接口的"),r("a",{attrs:{href:"https://github.com/lunet-io/scriban/blob/devel-3.0/doc/runtime.md#the-scriptobject",target:"_blank",rel:"noopener noreferrer"}},[e._v("选项"),r("OutboundLink")],1),e._v(" 。")])])]),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/dotnetcore/lin-cms/doc/language.html#5-objects"}},[e._v("Complex objects (复杂对象)")]),e._v(" (javascript/json like objects "),r("code",[e._v("x = {mymember: 1}")]),e._v(") and "),r("a",{attrs:{href:"https://github.com/lunet-io/scriban/blob/devel-3.0/doc/language.md#6-arrays",target:"_blank",rel:"noopener noreferrer"}},[e._v("arrays"),r("OutboundLink")],1),e._v(" (e.g "),r("code",[e._v("x = [1,2,3,4]")]),e._v(")")],1),e._v(" "),r("li",[e._v("通常由"),r("code",[e._v("wrap")]),e._v("语句使用可以将 "),r("a",{attrs:{href:"https://github.com/lunet-io/scriban/blob/devel-3.0/doc/language.md#98-wrap-function-arg1argn--end",target:"_blank",rel:"noopener noreferrer"}},[e._v("a block of statements （语句块）"),r("OutboundLink")],1),e._v(" 传递给函数,")]),e._v(" "),r("li",[e._v("一些"),r("a",{attrs:{href:"https://github.com/lunet-io/scriban/blob/devel-3.0/doc/builtins.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("内置函数"),r("OutboundLink")],1),e._v(":\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/lunet-io/scriban/blob/devel-3.0/doc/builtins.md#array-functions",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("arrays functions")]),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/lunet-io/scriban/blob/devel-3.0/doc/builtins.md#date-functions",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("date")]),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/lunet-io/scriban/blob/devel-3.0/doc/builtins.md#html-functions",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("html")]),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/lunet-io/scriban/blob/devel-3.0/doc/builtins.md#math-functions",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("maths functions")]),r("OutboundLink")],1)]),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/dotnetcore/lin-cms/doc/builtins.html#object-functions"}},[r("code",[e._v("object")])])],1),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/lunet-io/scriban/blob/devel-3.0/doc/builtins.md#regex-functions",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("regex functions")]),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/lunet-io/scriban/blob/devel-3.0/doc/builtins.md#string-functions",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("string functions")]),r("OutboundLink")],1)]),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/dotnetcore/lin-cms/doc/builtins.html#timespan-functions"}},[r("code",[e._v("timespan")])])],1)])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/lunet-io/scriban/blob/devel-3.0/doc/language.md#11-code-block",target:"_blank",rel:"noopener noreferrer"}},[e._v("Multi-line statements 多行语句"),r("OutboundLink")],1),e._v(" 不必在每行都使用")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("{{...}}\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/lunet-io/scriban/blob/devel-3.0/doc/runtime.md#the-lexer-and-parser",target:"_blank",rel:"noopener noreferrer"}},[e._v("Safe parser"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://github.com/lunet-io/scriban/blob/devel-3.0/doc/runtime.md#safe-runtime",target:"_blank",rel:"noopener noreferrer"}},[e._v("safe runtime"),r("OutboundLink")],1),e._v(", 使您可以控制公开哪些对象和功能")])]),e._v(" "),r("h2",{attrs:{id:"syntax-coloring-语法着色"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#syntax-coloring-语法着色"}},[e._v("#")]),e._v(" Syntax  Coloring(语法着色)")]),e._v(" "),r("p",[e._v("您可以安装 "),r("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=xoofx.scriban",target:"_blank",rel:"noopener noreferrer"}},[e._v("Scriban Extension for Visual Studio Code"),r("OutboundLink")],1),e._v(" 获取 scriban 脚本 (without HTML) 和 scriban html文件的语法颜色提示")]),e._v(" "),r("h2",{attrs:{id:"文档"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#文档"}},[e._v("#")]),e._v(" 文档")]),e._v(" "),r("ul",[r("li",[e._v("有关"),r("a",{attrs:{href:"https://github.com/lunet-io/scriban/blob/devel-3.0/doc/language.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("语言语法"),r("OutboundLink")],1),e._v("的说明，请参阅语言文档。")]),e._v(" "),r("li",[e._v("内置函数见文档"),r("a",{attrs:{href:"https://github.com/lunet-io/scriban/blob/devel-3.0/doc/builtins.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("内置函数"),r("OutboundLink")],1),e._v("列表。")]),e._v(" "),r("li",[e._v("有关编译和运行模板的.NET运行时API的说明，请参阅"),r("a",{attrs:{href:"https://github.com/lunet-io/scriban/blob/devel-3.0/doc/runtime.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("运行时"),r("OutboundLink")],1),e._v("文档。")]),e._v(" "),r("li",[e._v("有关支持liquid模板的更多详细信息，请参阅[Liquid support]文档。")]),e._v(" "),r("li",[e._v('请参阅我的博客文章"'),r("a",{attrs:{href:"http://xoofx.com/blog/2017/11/13/implementing-a-text-templating-language-and-engine-for-dotnet/",target:"_blank",rel:"noopener noreferrer"}},[e._v("实现.NET的文本模板引擎"),r("OutboundLink")],1),e._v('"，了解一些幕后细节。')])]),e._v(" "),r("h2",{attrs:{id:"二进制包"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二进制包"}},[e._v("#")]),e._v(" 二进制包")]),e._v(" "),r("p",[e._v("Scriban提供一个可获取的 NuGet 包: "),r("a",{attrs:{href:"https://www.nuget.org/packages/Scriban/",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/nuget/v/Scriban.svg",alt:"NuGet"}}),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("兼容以下 .NET framework 版本:")]),e._v(" "),r("ul",[r("li",[e._v(".NET Framework 3.5")]),e._v(" "),r("li",[e._v(".NET Framework 4.0")]),e._v(" "),r("li",[e._v(".NET Framework 4.5+ (supports asynchronous code and timeouts for regular expressions)")]),e._v(" "),r("li",[e._v(".NET Standard1.1+ (some features are not available)")]),e._v(" "),r("li",[e._v(".NET Standard1.3+ (which means .NET Core, Xamarin, UWP, Unity etc.)")])]),e._v(" "),r("p",[e._v("还有提供签名的NuGet包 "),r("a",{attrs:{href:"https://www.nuget.org/packages/Scriban.Signed/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Scriban.Signed"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"benchmarks（基准测试）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#benchmarks（基准测试）"}},[e._v("#")]),e._v(" Benchmarks（基准测试）")]),e._v(" "),r("p",[r("strong",[e._v("Scriban 速度极快")]),e._v("! 更多细节, 你可以查看此文档 "),r("a",{attrs:{href:"https://github.com/lunet-io/scriban/blob/devel-3.0/doc/benchmarks.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("benchmarks（基准测试） 文档"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"license"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[e._v("#")]),e._v(" License")]),e._v(" "),r("p",[e._v("该软件是在"),r("a",{attrs:{href:"https://opensource.org/licenses/BSD-2-Clause",target:"_blank",rel:"noopener noreferrer"}},[e._v("BSD-Clause 2 license"),r("OutboundLink")],1),e._v("协议下发布的")]),e._v(" "),r("h2",{attrs:{id:"相关项目"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#相关项目"}},[e._v("#")]),e._v(" 相关项目")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/dotliquid/dotliquid",target:"_blank",rel:"noopener noreferrer"}},[e._v("dotliquid"),r("OutboundLink")],1),e._v(": Liquid模板语言的.NET端口。")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/sebastienros/fluid/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fluid"),r("OutboundLink")],1),e._v(" .NET liquid 模板引擎")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/jdiamond/Nustache",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nustache"),r("OutboundLink")],1),e._v(":  .NET 无逻辑模板（Logic-less templates for .NET）")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/rexm/Handlebars.Net",target:"_blank",rel:"noopener noreferrer"}},[e._v("Handlebars.Net"),r("OutboundLink")],1),e._v(": .NET port of handlebars.js")])]),e._v(" "),r("h2",{attrs:{id:"在线示例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#在线示例"}},[e._v("#")]),e._v(" 在线示例")]),e._v(" "),r("ul",[r("li",[e._v("(https://scribanonline.azurewebsites.net/): ASP.NET Core Sample.")])]),e._v(" "),r("h2",{attrs:{id:"credits"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#credits"}},[e._v("#")]),e._v(" Credits")]),e._v(" "),r("p",[e._v("Adapted logo "),r("code",[e._v("Puzzle")]),e._v(" by "),r("a",{attrs:{href:"https://thenounproject.com/andydoane/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Andrew Doane"),r("OutboundLink")],1),e._v(" from the Noun Project")]),e._v(" "),r("h2",{attrs:{id:"作者"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#作者"}},[e._v("#")]),e._v(" 作者")]),e._v(" "),r("p",[e._v("Alexandre Mutel aka "),r("a",{attrs:{href:"http://xoofx.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("xoofx"),r("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=a.exports}}]);