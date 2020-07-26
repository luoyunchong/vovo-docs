(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{368:function(s,t,e){"use strict";e.r(t);var a=e(4),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"net-core-简单测试项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#net-core-简单测试项目"}},[s._v("#")]),s._v(" .NET Core 简单测试项目")]),s._v(" "),e("p",[s._v("使用PowerShell的dotnet cli命令行创建控制台项目，测试项目，测试项目引用控制台项目。")]),s._v(" "),e("h2",{attrs:{id:"源码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#源码"}},[s._v("#")]),s._v(" 源码")]),s._v(" "),e("p",[s._v("代码托管在GitHub上 "),e("a",{attrs:{href:"https://github.com/luoyunchong/dotnetcore-examples/tree/master/console-news-types",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/luoyunchong/dotnetcore-examples/tree/master/console-news-types"),e("OutboundLink")],1)]),s._v(" "),e("h2",{attrs:{id:"相关参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相关参考"}},[s._v("#")]),s._v(" 相关参考")]),s._v(" "),e("p",[s._v("code :"),e("a",{attrs:{href:"https://github.com/dotnet/samples/blob/master/core/console-apps/NewTypesMsBuild/README.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/dotnet/samples/blob/master/core/console-apps/NewTypesMsBuild/README.md"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("docs: "),e("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/dotnet/core/tutorials/testing-with-cli",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://docs.microsoft.com/zh-cn/dotnet/core/tutorials/testing-with-cli"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("dotnet-add-reference 使用文档 "),e("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/dotnet/core/tools/dotnet-add-reference",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://docs.microsoft.com/zh-cn/dotnet/core/tools/dotnet-add-reference"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("总结如下命令行")]),s._v(" "),e("div",{staticClass:"language-PowerShell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("PS")]),s._v(" dotnetcore"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("examples> mkdir console"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("news"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("types\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("PS")]),s._v(" dotnetcore"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("examples> cd "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\\console"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("news"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("types\\ \n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("PS")]),s._v(" dotnetcore"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("examples\\console"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("news"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("types> mkdir src\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("PS")]),s._v(" dotnetcore"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("examples\\console"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("news"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("types> mkdir test\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("PS")]),s._v(" dotnetcore"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("examples\\console"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("news"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("types> "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\nMode                 LastWriteTime         Length Name\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("-"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("                 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("-"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("-"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("-"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("-"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("         "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("-"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("-"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("\nd-"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("           2019"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("6"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("27    20:51                src\nd-"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("           2019"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("6"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("27    20:51                test\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("PS")]),s._v(" dotnetcore"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("examples\\console"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("news"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("types> cd "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\\src\\\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("PS")]),s._v(" dotnetcore"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("examples\\console"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("news"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("types\\src> dotnet new console "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("n NewTypes\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("PS")]),s._v(" dotnetcore"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("examples\\console"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("news"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("types\\src> cd "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\\test\\  \n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("PS")]),s._v(" dotnetcore"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("examples\\console"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("news"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("types\\test> dotnet new xunit "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("n NewTypesTests \n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("PS")]),s._v(" dotnetcore"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("examples\\console"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("news"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("types\\test> cd "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\\NewTypesTests\\\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("PS")]),s._v(" dotnetcore"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("examples\\console"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("news"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("types\\test\\NewTypesTests> dotnet add reference "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("src"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("NewTypes"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("NewTypes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("csproj\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Reference `..\\..\\src\\NewTypes\\NewTypes.csproj` added to the project.")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br")])]),e("p",[s._v("其他的代码就看上面的二个链接，把代码复制进去，代码很简单，一个接口，二个实现，main函数调用，测试项目引用控制台项目，")]),s._v(" "),e("p",[s._v("先cd 到src\\NewTypes目录中，执行 "),e("strong",[s._v("dotnet run")])]),s._v(" "),e("div",{staticClass:"language-PowerShell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("PS")]),s._v(" dotnetcore"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("examples\\console"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("news"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("types\\src\\NewTypes> dotnet run\nWoof"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\nMeow"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("先cd 到test\\NewTypesTests目录中，执行 "),e("strong",[s._v("dotnet test")]),s._v("，看好代码，测试类 Assert.Equal() 是成功的，如果是Assert.NotEqual() 则Failure")]),s._v(" "),e("div",{staticClass:"language-PowerShell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("PS")]),s._v(" dotnetcore"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("examples\\console"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("news"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("types\\test\\NewTypesTests> dotnet test\ndotnetcore"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("examples\\console"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("news"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("types\\test\\NewTypesTests\\bin\\Debug\\netcoreapp3"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("0\\NewTypesTests"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dll 的测试运行"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("NETCoreApp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("Version=v3"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nMicrosoft "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("R"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 测试执行命令行工具版本 16"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("1\n版权所有 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("C"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Microsoft Corporation。保留所有权利。\n\n正在启动测试执行，请稍候"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\n总测试: 2。已通过: 2。失败: 0。已跳过: 0。\n测试运行成功。\n测试执行时间: 1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("5134 秒\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);