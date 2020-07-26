(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{399:function(s,t,n){"use strict";n.r(t);var a=n(4),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"qq第三方授权登录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#qq第三方授权登录"}},[s._v("#")]),s._v(" QQ第三方授权登录")]),s._v(" "),n("h2",{attrs:{id:"安装包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装包"}},[s._v("#")]),s._v(" 安装包")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("dotnet add package AspNet.Security.OAuth.QQ\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[n("a",{attrs:{href:"https://luoyunchong.github.io/vovo-docs/dotnetcore/lin-cms/spa-github-login.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("接上文GitHub第三方授权登录"),n("OutboundLink")],1)])]),s._v(" "),n("p",[s._v("申请过程不介绍了，"),n("a",{attrs:{href:"https://wiki.connect.qq.com/%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C_oauth2-0",target:"_blank",rel:"noopener noreferrer"}},[s._v("申请者资料"),n("OutboundLink")],1),s._v(",个人也是可以申请成功的。")]),s._v(" "),n("p",[s._v("这时候有二个参数就是clientid clientsecret")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("APP ID：xxxx\nAPP Key：xxxxxx\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("其中"),n("strong",[s._v("平台信息")]),s._v("，这个申请审核通过后，"),n("strong",[s._v("不要修改，千万不要随便修改")]),s._v("，一修改就要重新审核。")]),s._v(" "),n("p",[s._v("网站回调域:可以随便修改，并且可以写多个，中间用英文逗号分隔即可。\n比如，网站地址填的：https://api.igeekfan.cn，下面如果是localhost，是可以的，但如果是域名,便只能是https://api.igeekfan.cn这个域名下的路径。")]),s._v(" "),n("p",[s._v("网站回调域配置,后台是运行在https://localhost:5001端口上。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("https://api.igeekfan.cn/signin-qq;https://localhost:5001/signin-qq\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"接口介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#接口介绍"}},[s._v("#")]),s._v(" 接口介绍")]),s._v(" "),n("p",[s._v("server-side模式，是OAuth2.0认证的一种模式，又称Web Server Flow；")]),s._v(" "),n("p",[n("img",{attrs:{src:"http://qzonestyle.gtimg.cn/qzone/vas/opensns/res/img/OAuth_guide_V2_1.png",alt:"image"}})]),s._v(" "),n("p",[s._v("获取Authorization Code\nhttps://graph.qq.com/oauth2.0/authorize")]),s._v(" "),n("p",[s._v("通过Authorization Code获取Access Token\nhttps://graph.qq.com/oauth2.0/token")]),s._v(" "),n("p",[s._v("获取用户OpenID_OAuth2.0\nhttps://graph.qq.com/oauth2.0/me")]),s._v(" "),n("p",[s._v("获取用户个人信息\nhttps://graph.qq.com/user/get_user_info")]),s._v(" "),n("h2",{attrs:{id:"使用authorization-code获取access-token"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用authorization-code获取access-token"}},[s._v("#")]),s._v(" "),n("a",{attrs:{href:"https://wiki.connect.qq.com/%E4%BD%BF%E7%94%A8authorization_code%E8%8E%B7%E5%8F%96access_token",target:"_blank",rel:"noopener noreferrer"}},[s._v("使用Authorization_Code获取Access_Token"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("接入流程如下：")]),s._v(" "),n("ol",[n("li",[s._v("先获取Authorization Code；")]),s._v(" "),n("li",[s._v("通过Authorization Code获取Access Token")])]),s._v(" "),n("p",[s._v("1.Step1：获取Authorization Code")]),s._v(" "),n("p",[s._v("GET")]),s._v(" "),n("p",[s._v("https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=client_id&redirect_uri=https://localhost:5001/signin-qq&state=123abc")]),s._v(" "),n("p",[s._v("具体参数可查看官网。")]),s._v(" "),n("p",[s._v("state由用户自己创建一个随机数，以防止CSRF攻击。")]),s._v(" "),n("p",[s._v("如果用户成功登录并授权，则会跳转到指定的回调地址，并在redirect_uri地址后带上Authorization Code和原始的state值。如：")]),s._v(" "),n("p",[s._v("https://localhost:5001/signin-qq?code=B6D497755EACE4635115FC82BE24F280&state=123abc")]),s._v(" "),n("p",[s._v("后台先根据state验证是自己发出的请求，判断是否相同，不相同，则代表非本项目发出的授权登录请求。")]),s._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[s._v("根据code获取access_token")])]),s._v(" "),n("p",[s._v("GET")]),s._v(" "),n("p",[s._v("https://graph.qq.com/oauth2.0/token?grant_type=authorization_code&client_id=client_id&client_secret=client_secret&code=B6D497755EACE4635115FC82BE24F280&redirect_uri=https://localhost:5001/signin-qq")]),s._v(" "),n("p",[s._v("这时候你会得到")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("access_token=1B6E45FA99BA3D6B347713440C9BCEFE&expires_in=7776000&refresh_token=8DB1D48D95C85D3EF593936B8ACE5EE0\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"获取用户openid-oauth2-0"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#获取用户openid-oauth2-0"}},[s._v("#")]),s._v(" 获取用户OpenID_OAuth2.0")]),s._v(" "),n("p",[s._v("GET")]),s._v(" "),n("p",[s._v("https://graph.qq.com/oauth2.0/me?access_token=1B6E45FA99BA3D6B347713440C9BCEFE")]),s._v(" "),n("p",[s._v("openid是此网站上唯一对应用户身份的标识")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('callback( {"client_id":"101867513","openid":"951560F5C7A5AA9E5E599CF9B4ECFFB2"} );\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"获取用户的其他信息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#获取用户的其他信息"}},[s._v("#")]),s._v(" 获取用户的其他信息")]),s._v(" "),n("p",[s._v("用户信息")]),s._v(" "),n("p",[s._v("https://graph.qq.com/user/get_user_info?access_token=1B6E45FA99BA3D6B347713440C9BCEFE&oauth_consumer_key=YOUR_APP_ID&openid=951560F5C7A5AA9E5E599CF9B4ECFFB2")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ret"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"msg"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"is_lost"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"nickname"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"、天上有木月OvO"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"gender"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxx"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"gender_type"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"province"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxx"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"city"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxx"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"year"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2019"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"constellation"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"figureurl"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http:\\/\\/qzapp.qlogo.cn\\/qzapp\\/101867513\\/951560F5C7A5AA9E5E599CF9B4ECFFB2\\/30"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"figureurl_1"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http:\\/\\/qzapp.qlogo.cn\\/qzapp\\/101867513\\/951560F5C7A5AA9E5E599CF9B4ECFFB2\\/50"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"figureurl_2"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http:\\/\\/qzapp.qlogo.cn\\/qzapp\\/101867513\\/951560F5C7A5AA9E5E599CF9B4ECFFB2\\/100"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"figureurl_qq_1"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://thirdqq.qlogo.cn/g?b=oidb&k=bjXoWmdlu8fk1m80MCkibMg&s=40&t=1559108425"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"figureurl_qq_2"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://thirdqq.qlogo.cn/g?b=oidb&k=bjXoWmdlu8fk1m80MCkibMg&s=100&t=1559108425"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"figureurl_qq"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://thirdqq.qlogo.cn/g?b=oidb&k=bjXoWmdlu8fk1m80MCkibMg&s=640&t=1559108425"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("h2",{attrs:{id:"代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[s._v("#")]),s._v(" 代码")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('services.AddAuthentication(xxx)\n.AddGitHub(xxx)\n加上AddQQ的配置项\n.AddQQ(options =>\n{\n   options.ClientId = Configuration["Authentication:QQ:ClientId"];\n   options.ClientSecret = Configuration["Authentication:QQ:ClientSecret"];\n})\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("appsettings.json中配置项")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('  "Authentication": {\n   //下面为新增项\n   "QQ": {\n     "ClientId": "xx",\n     "ClientSecret": "xxx"\n   }\n }\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("对，没错，QQ登录，已经结束了。接下来就是把这些用户的信息保存到数据库，生成token的过程。")]),s._v(" "),n("p",[s._v("这里")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('[HttpGet("signin-callback")]\npublic async Task<IActionResult> Home(string provider, string redirectUrl = "")\n{\n\n   AuthenticateResult authenticateResult = await _contextAccessor.HttpContext.AuthenticateAsync(provider);\n   if (!authenticateResult.Succeeded) return Redirect(redirectUrl);\n   var openIdClaim = authenticateResult.Principal.FindFirst(ClaimTypes.NameIdentifier);\n   if (openIdClaim == null || string.IsNullOrWhiteSpace(openIdClaim.Value))\n       return Redirect(redirectUrl);\n       \n       \n   ClaimsPrincipal principal=authenticateResult.Principal;\n   //根据provider，处理用户的基础信息，\n   \n   long id =SaveQQAsync(principal, openIdClaim.Value)\n   \n   //xxx\n   \n}       \n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("p",[s._v("openIdClaimopenIdClaim是唯一值")]),s._v(" "),n("h3",{attrs:{id:"lin-user表"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#lin-user表"}},[s._v("#")]),s._v(" lin_user表")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("字段")]),s._v(" "),n("th",[s._v("类型")]),s._v(" "),n("th",[s._v("备注")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("Id")]),s._v(" "),n("td",[s._v("long")]),s._v(" "),n("td",[s._v("主键")])]),s._v(" "),n("tr",[n("td",[s._v("Username")]),s._v(" "),n("td",[s._v("varchar(50)")]),s._v(" "),n("td",[s._v("用户名")])]),s._v(" "),n("tr",[n("td",[s._v("Avatar")]),s._v(" "),n("td",[s._v("varchar(50)")]),s._v(" "),n("td",[s._v("头像")])])])]),s._v(" "),n("h3",{attrs:{id:"lin-user-identity表"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#lin-user-identity表"}},[s._v("#")]),s._v(" lin_user_identity表")]),s._v(" "),n("p",[s._v("用户授权信息表，用于存储不同登录类型的用户信息，如手机号、邮件、用户名、第三方应用（微信、QQ、GitHub）的登录")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("字段")]),s._v(" "),n("th",[s._v("类型")]),s._v(" "),n("th",[s._v("备注")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("Id")]),s._v(" "),n("td",[s._v("long")]),s._v(" "),n("td",[s._v("主键")])]),s._v(" "),n("tr",[n("td",[s._v("IdentityType")]),s._v(" "),n("td",[s._v("varchar(50)")]),s._v(" "),n("td",[s._v("认证类型，如 Password，GitHub、QQ、WeiXin等")])]),s._v(" "),n("tr",[n("td",[s._v("Identifier")]),s._v(" "),n("td",[s._v("varchar(24)")]),s._v(" "),n("td",[s._v("认证者，例如 用户名（PassWord认证类型）,授权得到的昵称(QQ),授权得到的用户名（唯一，GitHub)")])]),s._v(" "),n("tr",[n("td",[s._v("Credential")]),s._v(" "),n("td",[s._v("varchar(50)")]),s._v(" "),n("td",[s._v("凭证，例如 密码,存OpenId、Id，同一IdentityType的OpenId的值是唯一的")])]),s._v(" "),n("tr",[n("td",[s._v("CreateUserId")]),s._v(" "),n("td",[s._v("long")]),s._v(" "),n("td",[s._v("绑定的用户Id")])])])]),s._v(" "),n("p",[s._v("根据openId,判断lin_user_identity表中是否存在这一第三方授权信息，如果存在，则返回当前用户lin_user表中的id，如果不存在，则创建一个新的用户信息，插入lin_user、lin_user_identity表中。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('\npublic async Task<long> SaveQQAsync(ClaimsPrincipal principal, string openId)\n{\n   string nickname = principal.FindFirst(ClaimTypes.Name)?.Value;\n   string gender = principal.FindFirst(ClaimTypes.Gender)?.Value;\n   string picture = principal.FindFirst(QQAuthenticationConstants.Claims.PictureUrl)?.Value;\n   string picture_medium = principal.FindFirst(QQAuthenticationConstants.Claims.PictureMediumUrl)?.Value;\n   string picture_full = principal.FindFirst(QQAuthenticationConstants.Claims.PictureFullUrl)?.Value;\n   string avatar = principal.FindFirst(QQAuthenticationConstants.Claims.AvatarUrl)?.Value;\n   string avatar_full = principal.FindFirst(QQAuthenticationConstants.Claims.AvatarFullUrl)?.Value;\n   \n    Expression<Func<LinUserIdentity, bool>> expression = r => \n               r.IdentityType == LinUserIdentity.QQ&& r.Credential == openId;\n\n   LinUserIdentity linUserIdentity =await _userIdentityRepository.Where(expression).FirstAsync();\n\n   long userId = 0;\n   if (linUserIdentity == null)\n   {\n       LinUser user = new LinUser\n       {\n           Avatar = avatar_full,\n           Nickname = nickname,\n           Username = "",\n           LinUserIdentitys = new List<LinUserIdentity>()\n           {\n               new LinUserIdentity\n               {\n                   CreateTime = DateTime.Now,\n                   Credential = openId,\n                   IdentityType = LinUserIdentity.GitHub,\n                   Identifier = nickname,\n               }\n           }\n       };\n       await _userRepository.InsertAsync(user);\n       userId = user.Id;\n   }\n   else\n   {\n       userId = linUserIdentity.CreateUserId;\n   }\n   return userId;\n}\n\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br")])]),n("p",[s._v("上文中的CreateToken，直接将 authenticateResult.Principal.Claims.ToList()，生成token值，会缺少一些系统需要的值，比如键为ClaimTypes.NameIdentifier，应为用户的id，用户的其他信息，如角色/分组，昵称。不同平台的授权登录，键有所不同，所以这里需要二次处理。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('[HttpGet("signin-callback")]\npublic async Task<IActionResult> Home(string provider, string redirectUrl = "")\n{\n \n    //xxx\n        \n        \n    ClaimsPrincipal principal=authenticateResult.Principal;\n    \n    List<Claim> authClaims = principal.Claims.ToList();\n    \n    long id =SaveQQAsync(principal, openIdClaim.Value)\n    \n    LinUser user =await _userRepository.Select.IncludeMany(r => r.LinGroups)\n        .WhereCascade(r => r.IsDeleted == false).Where(r => r.Id == id).FirstAsync();\n\n    List<Claim> claims = new List<Claim>()\n    {\n        new Claim(ClaimTypes.NameIdentifier,user.Id.ToString()),\n        new Claim(ClaimTypes.GivenName,user.Nickname??""),\n        new Claim(ClaimTypes.Name,user.Username??""),\n    };\n        \n    user.LinGroups?.ForEach(r =>\n    {\n        claims.Add(new Claim(LinCmsClaimTypes.Groups, r.Id.ToString()));\n    });\n\n    claims.AddRange(authClaims);\n    string token = this.CreateToken(claims);\n    return Redirect($"{redirectUrl}?token={token}#login-result");\n }       \n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br")])]),n("p",[s._v("前台login-result路由，解析到token值，并保存起来，与用户密码登录后的流程相同。")]),s._v(" "),n("h2",{attrs:{id:"项目源码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#项目源码"}},[s._v("#")]),s._v(" "),n("a",{attrs:{href:"https://github.com/luoyunchong/lin-cms-dotnetcore/blob/master/src/LinCms.Web/Controllers/Cms/Oauth2Controller.cs",target:"_blank",rel:"noopener noreferrer"}},[s._v("项目源码"),n("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);