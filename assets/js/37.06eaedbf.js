(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{591:function(s,t,n){"use strict";n.r(t);var a=n(4),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"后端快速上手"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#后端快速上手"}},[s._v("#")]),s._v(" 后端快速上手")]),s._v(" "),n("p",[s._v("本小节我们将在lin-cms的基础上开发一个简单的图书管理demo,帮助大家来熟悉和入门lin-cms。")]),s._v(" "),n("p",[s._v("lin-cms是一个lin团队经数打磨的模板项目，本人是c#的开发者，为lin-cms完善在.net 下的生态，是基于asp.netcore的基础上，沉淀下来的一套实践， 帮助开发者节约时间。")]),s._v(" "),n("blockquote",[n("p",[s._v("注意：本小节建立在你有一定的asp.net mvc，freesql，.net core的基础上。")])]),s._v(" "),n("h2",{attrs:{id:"数据层"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数据层"}},[s._v("#")]),s._v(" 数据层")]),s._v(" "),n("p",[s._v("由于我们用的.net core中优秀的开源项目FreeSql,codefirst模式，他能根据类生成表结构。所以，不需要我们手动创建表结构。")]),s._v(" "),n("h3",{attrs:{id:"book-书"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#book-书"}},[s._v("#")]),s._v(" book 书")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("字段")]),s._v(" "),n("th",[s._v("类型")]),s._v(" "),n("th",[s._v("备注")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("id")]),s._v(" "),n("td",[s._v("bigint")]),s._v(" "),n("td",[s._v("主键Id")])]),s._v(" "),n("tr",[n("td",[s._v("author")]),s._v(" "),n("td",[s._v("varchar")]),s._v(" "),n("td",[s._v("作者")])]),s._v(" "),n("tr",[n("td",[s._v("image")]),s._v(" "),n("td",[s._v("varchar")]),s._v(" "),n("td",[s._v("图片")])]),s._v(" "),n("tr",[n("td",[s._v("summary")]),s._v(" "),n("td",[s._v("varchar")]),s._v(" "),n("td",[s._v("简介")])]),s._v(" "),n("tr",[n("td",[s._v("title")]),s._v(" "),n("td",[s._v("varchar")]),s._v(" "),n("td",[s._v("标题")])])])]),s._v(" "),n("p",[s._v("可增加一些审计字段，如")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("字段")]),s._v(" "),n("th",[s._v("类型")]),s._v(" "),n("th",[s._v("备注")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("create_time")]),s._v(" "),n("td",[s._v("datetime")]),s._v(" "),n("td",[s._v("创建时间")])]),s._v(" "),n("tr",[n("td",[s._v("create_user_id")]),s._v(" "),n("td",[s._v("datetime")]),s._v(" "),n("td",[s._v("创建者ID")])]),s._v(" "),n("tr",[n("td",[s._v("update_time")]),s._v(" "),n("td",[s._v("datetime")]),s._v(" "),n("td",[s._v("修改时间")])]),s._v(" "),n("tr",[n("td",[s._v("update_user_id")]),s._v(" "),n("td",[s._v("datetime")]),s._v(" "),n("td",[s._v("最后修改人Id")])]),s._v(" "),n("tr",[n("td",[s._v("delete_time")]),s._v(" "),n("td",[s._v("datetime")]),s._v(" "),n("td",[s._v("删除时间")])]),s._v(" "),n("tr",[n("td",[s._v("delete_user_id")]),s._v(" "),n("td",[s._v("datetime")]),s._v(" "),n("td",[s._v("删除人id")])]),s._v(" "),n("tr",[n("td",[s._v("is_deleted")]),s._v(" "),n("td",[s._v("datetime")]),s._v(" "),n("td",[s._v("是否删除")])])])]),s._v(" "),n("p",[s._v("审计字段可通过继承父类"),n("strong",[s._v("FullAduitEntity")]),s._v("即可,当然，也可只有创建时间，创建人二个字段，继承"),n("strong",[s._v("ICreateAduitEntity")]),s._v("接口，实现二个字段即可。如果不想要这些记录，只需要继承"),n("strong",[s._v("Entity")]),s._v("类，仅有一个ID字段，支持泛型。")]),s._v(" "),n("p",[n("strong",[s._v("is_deleted")]),s._v("字段本身没有什么稀奇的，但我们可以配合FreeSql实现逻辑删除（软删除），在LinCms.Web/Configs/DependencyInjectionExtensions.cs文件中。配置 了如下内容，如果我们筛选数据时，会全局启用 "),n("a",{attrs:{href:"https://github.com/dotnetcore/FreeSql/wiki/%E8%BF%87%E6%BB%A4%E5%99%A8",target:"_blank",rel:"noopener noreferrer"}},[s._v("过滤器"),n("OutboundLink")],1),s._v("。像创建时间，创建人。这些字段都不需要我们赋值，如果我们全部使用仓储"),n("strong",[s._v("IAuditBaseRepository")]),s._v("访问数据库，这些字段会自动赋值。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('fsql.GlobalFilter.Apply<IDeleteAduitEntity>("IsDeleted", a => a.IsDeleted == false);\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"模型层"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#模型层"}},[s._v("#")]),s._v(" 模型层")]),s._v(" "),n("p",[s._v("我们建立单纯的实体类（Entities)，在路径"),n("strong",[s._v("lin-cms-dotnetcore\\src\\LinCms.Core\\Entities")]),s._v(",名为Book.cs的实体类")]),s._v(" "),n("div",{staticClass:"language-csharp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("FreeSql"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("DataAnnotations")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("LinCms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Core"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Entities")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token attribute"}},[n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Table")]),n("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Name "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"book"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Book")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token type-list"}},[n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FullAduitEntity")])]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token attribute"}},[n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Column")]),n("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("DbType "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"varchar(30)"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token return-type class-name"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" Author "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Empty"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token attribute"}},[n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Column")]),n("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("DbType "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"varchar(50)"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token return-type class-name"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" Image "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Empty"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token attribute"}},[n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Column")]),n("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("DbType "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"varchar(1000)"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token return-type class-name"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" Summary "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Empty"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token attribute"}},[n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Column")]),n("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("DbType "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"varchar(50)"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token return-type class-name"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" Title "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Empty"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("p",[s._v("更多特性标签支持情况，请查看"),n("a",{attrs:{href:"https://github.com/dotnetcore/FreeSql/wiki/%E5%AE%9E%E4%BD%93%E7%89%B9%E6%80%A7",target:"_blank",rel:"noopener noreferrer"}},[s._v("FreeSql官方文档实体特性"),n("OutboundLink")],1),s._v("。")]),s._v(" "),n("p",[s._v("由于默认FreeSql,只有访问到这个类时才会生成表，但我们可以手动扫描所有带有Table特性标签的类，同步表结构。仅建议开发时启动表结构全部同步。")]),s._v(" "),n("p",[s._v("LinCms.Web/Configs/DependencyInjectionExtensions.cs\n中的AddContext配置项中.")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("//在运行时直接生成表结构\nfsql.CodeFirst.SyncStructure(ReflexHelper.GetEntityTypes(typeof(IEntity))); \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"业务层"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#业务层"}},[s._v("#")]),s._v(" 业务层")]),s._v(" "),n("p",[s._v("有了实体类，我们创建IBookRepository"),n("code",[s._v("<Book,long>")]),s._v("，也可以不创建，直接使用IAuditBaseRepository"),n("code",[s._v("<Book>")]),s._v("在Service层写相应的业务。这里我们就不创建仓储服务了，框架中携带的仓储已经满足我们的要求。")]),s._v(" "),n("p",[s._v("仓储是什么呢。在这里我们可以理解DAL,也理解为仓库，他提供了对单个表的CURD操作方法，有了一个统一的规范。")]),s._v(" "),n("p",[s._v("作用即数据的持久化，应用服务通过仓储对数据进行操作，让开发者不用关注仓储内部的实现。")]),s._v(" "),n("p",[s._v("业务层Services，我们直接使用仓储访问数据库。")]),s._v(" "),n("p",[s._v("在LinCms.Application.Contracts项目中，在v1文件夹新建一个Books的文件夹,用于存放书的相关接口，创建IBookService的接口")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("using System.Threading.Tasks;\nusing LinCms.Application.Contracts.v1.Books.Dtos;\nusing LinCms.Core.Data;\n\nnamespace LinCms.Application.Contracts.v1.Books\n{\n    public interface IBookService\n    {\n        Task<BookDto> GetAsync(long id);\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("新建一个Dtos文件夹，用于存放业务传输的数据对象，再创建一个BookDto，仅包含必要的字段，而非全部。该类以Dto结尾，代表数据传输对象。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("using System;\nusing LinCms.Core.Entities;\n\nnamespace LinCms.Application.Contracts.v1.Books.Dtos\n{\n    public class BookDto:EntityDto\n    {\n        public string Author { get; set; }\n        public string Image { get; set; }\n        public string Summary { get; set; }\n        public string Title { get; set; }\n        public DateTime CreateTime { get; set; }\n        public DateTime UpdateTime { get; set; }\n    }\n}\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("p",[s._v("在BookService实现如下，在这里我们注入IAuditBaseRepository，通过 调用 "),n("strong",[s._v("_bookRepository.Select.Where(a => a.Id == id).ToOneAsync();")]),s._v(" ,根据id得到书的实体对象。然后使用AutoMappeer,将Book类转换成BookDto类，然后返回。\n至于为什么 这里我们可以注入IAuditBaseRepository，IMapper类，后面我们会讲到。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("using System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\nusing AutoMapper;\nusing LinCms.Application.Contracts.v1.Books;\nusing LinCms.Application.Contracts.v1.Books.Dtos;\nusing LinCms.Core.Data;\nusing LinCms.Core.Entities;\nusing LinCms.Core.Exceptions;\nusing LinCms.Core.Extensions;\nusing LinCms.Core.IRepositories;\n\nnamespace LinCms.Application.v1.Books\n{\n    public class BookService : IBookService\n    {\n        private readonly IAuditBaseRepository<Book> _bookRepository;\n        private readonly IMapper _mapper;\n        public BookService(IAuditBaseRepository<Book> bookRepository, IMapper mapper)\n        {\n            _bookRepository = bookRepository;\n            _mapper = mapper;\n        }\n\n\n        public async Task<BookDto> GetAsync(long id)\n        {\n            Book book = await _bookRepository.Select.Where(a => a.Id == id).ToOneAsync();\n            return _mapper.Map<BookDto>(book);\n        }\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br")])]),n("p",[s._v("因为使用AutoMapper简化二个对象的映射，我们在同一目录下，创建一个继承Profile类的配置项。在构造函数中，我们配置了调用CreateMap方法，代表，从Book->BookDto的映射关系。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("using AutoMapper;\nusing LinCms.Application.Contracts.v1.Books.Dtos;\nusing LinCms.Core.Entities;\n\nnamespace LinCms.Application.v1.Books\n{\n    public class BookProfile:Profile\n    {\n        public BookProfile()\n        {\n            CreateMap<Book, BookDto>();\n        }\n    }\n}\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("在ASP.NET Core中，我们会扫描该程序集（LinCms.Applicaiton）中所有继承了Profile类的子类，在LinCms.Web中ConfiguartionService配置如下，")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("services.AddAutoMapper(typeof(BookProfile).Assembly);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("一个项目即一个程序集(生成一个dll)，仅配置一次。")]),s._v(" "),n("p",[s._v("我们完善一下控制器的代码。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('using System.Threading.Tasks;\nusing AutoMapper;\nusing LinCms.Application.Contracts.v1.Books;\nusing LinCms.Application.Contracts.v1.Books.Dtos;\nusing LinCms.Core.Aop;\nusing LinCms.Core.Aop.Filter;\nusing LinCms.Core.Data;\nusing LinCms.Core.Entities;\nusing LinCms.Core.Exceptions;\nusing LinCms.Core.Extensions;\nusing LinCms.Core.IRepositories;\nusing LinCms.Web.Data.Authorization;\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace LinCms.Web.Controllers.v1\n{\n    [Route("v1/book")]\n    [ApiController]\n    [Authorize]\n    public class BookController : ControllerBase\n    {\n        private readonly IBookService _bookService;\n        public BookController(IBookService bookService)\n        {\n            _bookService = bookService;\n        }\n\n        [HttpGet("{id}")]\n        public async Task<BookDto> GetAsync(int id)\n        {\n            return await _bookService.GetAsync(id);\n        }\n    }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br")])]),n("p",[s._v("在LinCms.Web/Controllers/v1文件夹，创建我们的Book控制器。\n我们依旧通过构造函数注入服务"),n("strong",[s._v("IBookService")]),s._v(",这里用到的是async await方法，与同步方法执行顺序一致，仅多二个关键字，并使用Task<返回值>来返回数据，通常我们使用Async标识异步方法。")]),s._v(" "),n("p",[s._v("启动项目，可通过Visual Studio点击上方的运行即可。")]),s._v(" "),n("p",[s._v("还可通过终端运行项目")]),s._v(" "),n("p",[s._v("先 cd 到目录 lin-cms-dotnetcore/src/LinCms.Web")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("dotnet run\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("打开浏览器，https://localhost:5001/swagger/index.html， ctrl+f搜索，book，找到GET /v1/book/{id}，点击try it out,输入id，点击Execute。")]),s._v(" "),n("p",[s._v("因为我们没登录登录，在BookController上写了特性标签 "),n("strong",[s._v("[Authorize]")]),s._v(" ，所以会返回")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('{\n  "code": 10000,\n  "message": "请先登录",\n  "request": "GET /v1/book/131"\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("我们可以先去掉这个特性标签，也可以走登录浏览，把Token放到Header中的Authoriaztion中。。")]),s._v(" "),n("p",[s._v("这里我们先去掉这行特性标签。去掉后，需要ctrl+c，即出运行状态，如果感觉麻烦，可以使用 "),n("strong",[s._v("dotnet run watch")]),s._v(" 命令，修改后，自动重启，不需要手动重启。。")]),s._v(" "),n("p",[s._v("这里我们重新测试，手动给数据库加一些数据，记得is_deleted要是false，然后输入对应的id，会得到对应的值")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('{\n  "author": "891dc185-2",\n  "image": "f6d0c1e9-fcb2-446a-9093-d773e6515579",\n  "summary": "8aea38f8-a6e0-4053-bd7a-ae4476432bdd",\n  "title": "2d0c2e44-ee02-4d40-b4b7-eed03bb48aa4",\n  "create_time": 1588485910430,\n  "update_time": 1588485910430,\n  "id": 139\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);