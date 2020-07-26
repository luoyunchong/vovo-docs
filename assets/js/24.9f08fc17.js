(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{376:function(n,s,e){"use strict";e.r(s);var a=e(4),t=Object(a.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"七牛云对象存储"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#七牛云对象存储"}},[n._v("#")]),n._v(" 七牛云对象存储")]),n._v(" "),e("p",[n._v(".NET Core下集成 七牛云下的对象存储")]),n._v(" "),e("h2",{attrs:{id:"开源地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开源地址"}},[n._v("#")]),n._v(" 开源地址")]),n._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/luoyunchong/dotnetcore-examples/tree/master/aspnetcore-qiniu",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://github.com/luoyunchong/dotnetcore-examples/tree/master/aspnetcore-qiniu"),e("OutboundLink")],1)]),n._v(" "),e("h2",{attrs:{id:"集成类库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#集成类库"}},[n._v("#")]),n._v(" 集成类库")]),n._v(" "),e("table",[e("thead",[e("tr",[e("th",[n._v("基础类库集成方案")]),n._v(" "),e("th",[n._v("开源地址")]),n._v(" "),e("th",[n._v("文档")]),n._v(" "),e("th",[n._v("说明")])])]),n._v(" "),e("tbody",[e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/luoyunchong/dotnetcore-examples/tree/master/dotnet-core-efcore",target:"_blank",rel:"noopener noreferrer"}},[n._v("Qiniu云对象存储"),e("OutboundLink")],1)]),n._v(" "),e("td",[e("a",{attrs:{href:"https://github.com/qiniu/csharp-sdk",target:"_blank",rel:"noopener noreferrer"}},[n._v(".net"),e("OutboundLink")],1),n._v("/"),e("a",{attrs:{href:"https://github.com/Hello-Mango/MQiniu.Core",target:"_blank",rel:"noopener noreferrer"}},[n._v(".net core"),e("OutboundLink")],1)]),n._v(" "),e("td",[e("a",{attrs:{href:"https://developer.qiniu.com/kodo/sdk/1237/csharp",target:"_blank",rel:"noopener noreferrer"}},[n._v("c# sdk"),e("OutboundLink")],1)]),n._v(" "),e("td",[n._v("由于官网未支持. net core，所以 大家看"),e("a",{attrs:{href:"https://github.com/Hello-Mango/MQiniu.Core",target:"_blank",rel:"noopener noreferrer"}},[n._v("社区版解决方案"),e("OutboundLink")],1)])])])]),n._v(" "),e("h2",{attrs:{id:"前提"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前提"}},[n._v("#")]),n._v(" 前提")]),n._v(" "),e("ul",[e("li",[n._v("本地windows 10,安装 .net core 2.2+")]),n._v(" "),e("li",[n._v("Linux 服务器 Ubuntu Server 16+")]),n._v(" "),e("li",[n._v("服务器安装了Docker")]),n._v(" "),e("li",[n._v("本地xftp、xshell（这二个分别是windows传文件至linux，执行命令行。）")])]),n._v(" "),e("h2",{attrs:{id:"准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[n._v("#")]),n._v(" 准备")]),n._v(" "),e("p",[n._v("在七牛云中自行注册后，在个人中心，密钥管理，生成自己的密钥（https://portal.qiniu.com/user/key）\nv* AK，SK分别代表：AccessKey/SecretKey")]),n._v(" "),e("ul",[e("li",[n._v("Bucket中的vant-ui，是创建对象存储时起的名字")]),n._v(" "),e("li",[n._v("PrefixPath中的值，随意字符串，前缀地址。")]),n._v(" "),e("li",[n._v("Host为：融合 CDN 测试域名,可自行绑定自己的域名，否则只有三十天免费使用时长。")])]),n._v(" "),e("h2",{attrs:{id:"appsettings-json配置项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#appsettings-json配置项"}},[n._v("#")]),n._v(" appsettings.json配置项")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('  "Qiniu": {\n    "AK": "eUH1O-ft66S4XM2GIK7FGmj7czuYkcAyNGDAc-wq",\n    "SK": "4dOi1daSr2-YgofhAfWb8JaLrbgozCmgD6AUmmM9",\n    "Bucket": "vant-ui",\n    "PrefixPath": "ui",\n    "Host": "http://pu5vnz60k.bkt.clouddn.com/"\n  }\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br")])]),e("h2",{attrs:{id:"安装包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装包"}},[n._v("#")]),n._v(" 安装包")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("Install-Package MQiniu.Core \n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br")])]),e("h2",{attrs:{id:"代码解读"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码解读"}},[n._v("#")]),n._v(" 代码解读")]),n._v(" "),e("p",[n._v("配置swagger的过程就不说了，创建QiniuController")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('  /// <summary>\n    /// 七牛云上传服务\n    /// </summary>\n    [Route("api/[controller]")]\n    [ApiController]\n    public class QiniuController : ControllerBase\n    {\n        private readonly IConfiguration _configuration;\n\n        public QiniuController(IConfiguration configuration)\n        {\n            _configuration = configuration;\n        }\n\n        /// <summary>\n        /// 根据后台配置项，得到请求七牛云的token值，前台也可根据此token值上传至七牛云服务\n        /// </summary>\n        /// <returns></returns>\n        [HttpGet("access_token")]\n        public string GetAccessToken()\n        {\n            Mac mac = new Mac(_configuration["Qiniu:AK"], _configuration["Qiniu:SK"]);\n            PutPolicy putPolicy = new PutPolicy { Scope = _configuration["Qiniu:Bucket"] };\n            return Auth.CreateUploadToken(mac, putPolicy.ToJsonString());\n        }\n\n        /// <summary>\n        /// 上传文件至七牛云,code为200，代表上传成功,其他代表不成功\n        /// </summary>\n        /// <param name="file">单个文件</param>\n        /// <returns>new { code = 200, data ="七牛云文件地址，包括http://....mm.png", msg = "上传成功" };</returns>\n        [HttpPost("upload")]\n        public dynamic Upload(IFormFile file)\n        {\n            if (file.Length == 0)\n            {\n                return new { code = 1, msg = "文件为空" };\n            }\n\n            FormUploader upload = new FormUploader(new Config()\n            {\n                Zone = Zone.ZONE_CN_South,//华南 \n                UseHttps = true\n            });\n\n            var fileName = ContentDispositionHeaderValue\n                .Parse(file.ContentDisposition)\n                .FileName.Trim();\n\n            string qiniuName = _configuration["Qiniu:PrefixPath"] + "/" + DateTime.Now.ToString("yyyyMMddHHmmssffffff") + fileName;\n            Stream stream = file.OpenReadStream();\n            HttpResult result = upload.UploadStream(stream, qiniuName, GetAccessToken(), null);\n\n            if (result.Code == 200)\n            {\n                return new { code = 200, data = _configuration["Qiniu:Host"] + qiniuName, msg = "上传成功" };\n            }\n\n            return new { code = 1, msg = "上传失败" };\n        }\n    }\n\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br"),e("span",{staticClass:"line-number"},[n._v("32")]),e("br"),e("span",{staticClass:"line-number"},[n._v("33")]),e("br"),e("span",{staticClass:"line-number"},[n._v("34")]),e("br"),e("span",{staticClass:"line-number"},[n._v("35")]),e("br"),e("span",{staticClass:"line-number"},[n._v("36")]),e("br"),e("span",{staticClass:"line-number"},[n._v("37")]),e("br"),e("span",{staticClass:"line-number"},[n._v("38")]),e("br"),e("span",{staticClass:"line-number"},[n._v("39")]),e("br"),e("span",{staticClass:"line-number"},[n._v("40")]),e("br"),e("span",{staticClass:"line-number"},[n._v("41")]),e("br"),e("span",{staticClass:"line-number"},[n._v("42")]),e("br"),e("span",{staticClass:"line-number"},[n._v("43")]),e("br"),e("span",{staticClass:"line-number"},[n._v("44")]),e("br"),e("span",{staticClass:"line-number"},[n._v("45")]),e("br"),e("span",{staticClass:"line-number"},[n._v("46")]),e("br"),e("span",{staticClass:"line-number"},[n._v("47")]),e("br"),e("span",{staticClass:"line-number"},[n._v("48")]),e("br"),e("span",{staticClass:"line-number"},[n._v("49")]),e("br"),e("span",{staticClass:"line-number"},[n._v("50")]),e("br"),e("span",{staticClass:"line-number"},[n._v("51")]),e("br"),e("span",{staticClass:"line-number"},[n._v("52")]),e("br"),e("span",{staticClass:"line-number"},[n._v("53")]),e("br"),e("span",{staticClass:"line-number"},[n._v("54")]),e("br"),e("span",{staticClass:"line-number"},[n._v("55")]),e("br"),e("span",{staticClass:"line-number"},[n._v("56")]),e("br"),e("span",{staticClass:"line-number"},[n._v("57")]),e("br"),e("span",{staticClass:"line-number"},[n._v("58")]),e("br"),e("span",{staticClass:"line-number"},[n._v("59")]),e("br"),e("span",{staticClass:"line-number"},[n._v("60")]),e("br"),e("span",{staticClass:"line-number"},[n._v("61")]),e("br"),e("span",{staticClass:"line-number"},[n._v("62")]),e("br")])]),e("p",[n._v("Upload方法中，Zone.ZONE_CN_South，代表华南，所以创建对象存储时要注意，请选择与此相同的位置（华南），或根据实际情况修改Zone所在地区的枚举值即可。")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("FormUploader upload = new FormUploader(new Config()\n{\n    Zone = Zone.ZONE_CN_South,//华南 \n    UseHttps = true\n});\n\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br")])]),e("h2",{attrs:{id:"发布至linux下的docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发布至linux下的docker"}},[n._v("#")]),n._v(" 发布至Linux下的Docker")]),n._v(" "),e("p",[n._v("双击 publish.bat，生成的文件夹为如下：")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/2001974-bcd72707e4fcc7f8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image"}})]),n._v(" "),e("p",[n._v("修改项目名为qiniu-web，复制 至linux服务器中，（xftp工具）\n"),e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/2001974-48771e9fce281262.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image"}})]),n._v(" "),e("p",[n._v("使用xshell远程登录后，进入root权限。")]),n._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[n._v("root@VM-37-104-ubuntu:/home/ubuntu/"),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# sudo su")]),n._v("\nroot@VM-37-104-ubuntu:/home/ubuntu/"),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# cd qiniu-web")]),n._v("\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br")])]),e("p",[n._v("前置条件，在ubuntu上安装好了docker。并且正常运行。")]),n._v(" "),e("p",[n._v("-d 代表后台运行，此时将对外显露5000端口运行，5000是运行后，docker对外的端口，80是这个服务对外的端口，其中Dockerfile 存在语句EXPOSE 80")]),n._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[n._v("docker build -t igeekfan/qiniu "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[n._v(".")]),n._v("     "),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#生成images")]),n._v("\ndocker run -d -p "),e("span",{pre:!0,attrs:{class:"token number"}},[n._v("5000")]),n._v(":80 igeekfan/qiniu  "),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 生成 container 并运行在5000端口")]),n._v("\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br")])]),e("p",[n._v("此时打开 浏览器， ip+端口5000即可访问服务，请加/swagger。")]),n._v(" "),e("p",[n._v("本项目已部署至服务器 "),e("a",{attrs:{href:"http://122.152.192.161:5000/swagger/index.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("http://122.152.192.161:5000/swagger/index.html"),e("OutboundLink")],1)]),n._v(" "),e("h2",{attrs:{id:"运行结果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行结果"}},[n._v("#")]),n._v(" 运行结果")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/2001974-2b72cc6338db1434.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})]),n._v(" "),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[n._v("#")]),n._v(" 参考")]),n._v(" "),e("ul",[e("li",[n._v(".NET Core版本七牛云SDK使用"),e("a",{attrs:{href:"https://www.cnblogs.com/OMango/p/8447480.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://www.cnblogs.com/OMango/p/8447480.html"),e("OutboundLink")],1)]),n._v(" "),e("li",[n._v(".NET Core部署至Linux 下的Docker "),e("a",{attrs:{href:"http://blog.igeekfan.cn/2019/06/09/dotnetcore/aspnetcore-Deploy-To-Docker-Ubuntu/",target:"_blank",rel:"noopener noreferrer"}},[n._v("http://blog.igeekfan.cn/2019/06/09/dotnetcore/aspnetcore-Deploy-To-Docker-Ubuntu/"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=t.exports}}]);