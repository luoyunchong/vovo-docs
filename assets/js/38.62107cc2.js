(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{592:function(s,e,n){"use strict";n.r(e);var a=n(4),t=Object(a.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"依赖注入scrutor"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#依赖注入scrutor"}},[s._v("#")]),s._v(" 依赖注入scrutor")]),s._v(" "),n("p",[s._v("官网介绍")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-2.2",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://docs.microsoft.com/zh-cn/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-2.2"),n("OutboundLink")],1)]),s._v(" "),n("ul",[n("li",[s._v("开源地址"),n("a",{attrs:{href:"https://github.com/khellang/Scrutor",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/khellang/Scrutor"),n("OutboundLink")],1)]),s._v(" "),n("li",[s._v("参考文档 "),n("a",{attrs:{href:"https://www.cnblogs.com/catcher1994/p/10316928.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.cnblogs.com/catcher1994/p/10316928.html"),n("OutboundLink")],1),s._v("\n手动管理依赖注入过于麻烦,当有多个仓储，服务，无法统一注入，Scrutor能帮助我们简化ASP.NET Core的DI注册。")])]),s._v(" "),n("p",[s._v("在ConfigServices中，我们原本需要这样子依次注入仓储，服务和其他接口及实现，当有多个仓储时，这样就过于繁琐。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("services.AddTransient<IUserRepository, UserRepository>();\nservices.AddTransient<IUserService, UserService>();\nservices.AddTransient<ICurrentUser, CurrentUser>();\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"serivce后缀服务注入di"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#serivce后缀服务注入di"}},[s._v("#")]),s._v(" Serivce后缀服务注入DI")]),s._v(" "),n("p",[s._v("当我们有多个Service后缀的服务时，使用以下方法，可将服务扫描只留下以Serivce结尾的类，将其类型注册为提供所有公共接口生成服务，其生命周期为Transient，")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('services.Scan(scan => scan\n        //加载Startup这个类所在的程序集\n        .FromAssemblyOf<Startup>()\n        // 表示要注册那些类，上面的代码还做了过滤，只留下了以 Service 结尾的类\n        .AddClasses(classes => classes.Where(t => t.Name.EndsWith("Service", StringComparison.OrdinalIgnoreCase)))\n        //表示将类型注册为提供其所有公共接口作为服务\n        .AsImplementedInterfaces()\n        //表示注册的生命周期为 Transient\n        .WithTransientLifetime()\n         );\n\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h2",{attrs:{id:"itransientdependency"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#itransientdependency"}},[s._v("#")]),s._v(" ITransientDependency")]),s._v(" "),n("p",[s._v("新建一个空接口，当其他类继承此接口后，统一注入到DI中，以Transient的生命周期。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("namespace LinCms.Zero.Dependency\n{\n    public interface ITransientDependency\n    {\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#接口"}},[s._v("#")]),s._v(" 接口")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("public interface ICurrentUser\n{\n    int? Id { get; }\n\n    int? GroupId { get; }\n\n    bool? IsAdmin { get; }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h2",{attrs:{id:"模拟实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#模拟实现"}},[s._v("#")]),s._v(" 模拟实现")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    public class CurrentUser : ICurrentUser, ITransientDependency\n    {\n     \n        public int? Id => 1;\n        public int? GroupId => 2;\n        public bool? IsAdmin => true;\n    }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("扫描所有继承ITransientDependency的实现。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("   services.Scan(scan => scan\n       // We start out with all types in the assembly of ITransientService\n        .FromAssemblyOf<ITransientDependency>()\n        // AddClasses starts out with all public, non-abstract types in this assembly.\n        // These types are then filtered by the delegate passed to the method.\n        // In this case, we filter out only the classes that are assignable to ITransientService.\n        .AddClasses(classes => classes.AssignableTo<ITransientDependency>())\n        // We then specify what type we want to register these classes as.\n        // In this case, we want to register the types as all of its implemented interfaces.\n        // So if a type implements 3 interfaces; A, B, C, we'd end up with three separate registrations.\n        .AsImplementedInterfaces()\n        // And lastly, we specify the lifetime of these registrations.\n        .WithTransientLifetime()\n         );\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("h2",{attrs:{id:"如何使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何使用"}},[s._v("#")]),s._v(" 如何使用")]),s._v(" "),n("p",[s._v("在其他类中使用此接口")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('[ApiController]\n[Route("cms/user")]\npublic class UserController : ControllerBase\n{\n    private readonly ICurrentUser _currentUser;\n\n    public UserController(ICurrentUser currentUser)\n    {\n        _currentUser = currentUser;\n    }\n\n    [HttpGet]\n    public int GetUser()\n    {\n        return _currentUser.Id;\n    }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("h2",{attrs:{id:"统一注入"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#统一注入"}},[s._v("#")]),s._v(" 统一注入")]),s._v(" "),n("p",[s._v("当然，我们可以统一注入，而非写二次servics.Scan")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('services.Scan(scan => scan\n            .FromAssemblyOf<Startup>()\n            .AddClasses(classes => classes.Where(t => t.Name.EndsWith("Service",StringComparison.OrdinalIgnoreCase)))\n            .AsImplementedInterfaces()\n            .WithTransientLifetime()\n            .FromAssemblyOf<ITransientDependency>()\n            .AddClasses(classes => classes.AssignableTo<ITransientDependency>())\n            .AsImplementedInterfaces()\n            .WithTransientLifetime()\n      );\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);