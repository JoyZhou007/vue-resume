webpackJsonp([0],{"2nxr":function(t,s){},NHnr:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("7+uW"),e={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var n=i("VU/8")({name:"App"},e,!1,function(t){i("hPQi")},null,null).exports,c=i("/ocq"),v={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"})},staticRenderFns:[]};var o={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"wrap"},[i("div",{staticClass:"timeline-item"},t._l(t.skeletonList,function(s){return i("div",{staticClass:"animated-background"},[i("div",{staticClass:"background-masker header-top"}),t._v(" "),i("div",{staticClass:"background-masker header-left"}),t._v(" "),i("div",{staticClass:"background-masker header-right"}),t._v(" "),i("div",{staticClass:"background-masker header-bottom"}),t._v(" "),i("div",{staticClass:"background-masker subheader-left"}),t._v(" "),i("div",{staticClass:"background-masker subheader-right"}),t._v(" "),i("div",{staticClass:"background-masker subheader-bottom"})])}))])},staticRenderFns:[]};var l={name:"home",components:{FooterComponent:i("VU/8")({name:"foot-component"},v,!1,function(t){i("yzpM")},"data-v-a7c46964",null).exports,SkeletonComponent:i("VU/8")({name:"skeleton",data:function(){return{skeletonList:[1,2,3,4,5,6,7,8,9]}}},o,!1,function(t){i("wH8Y")},"data-v-0971630c",null).exports},data:function(){return{showLoading:!0}},created:function(){var t=this;console.log("create"),setTimeout(function(){t.showLoading=!1},1500)}},_={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"home"},[t.showLoading?t._e():i("div",[i("p",{staticClass:"last-modified"},[t._v("最后更新时间：2018年5月")]),t._v(" "),t._m(0),t._v(" "),t._m(1)]),t._v(" "),t.showLoading?i("SkeletonComponent"):t._e()],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("div",{staticClass:"content-bd"},[a("div",{staticClass:"content-left"},[a("section",{staticClass:"skill"},[a("header",{staticClass:"section-hd"},[a("span",{staticClass:"section-title-l"}),t._v(" "),a("h2",{staticClass:"section-title"},[t._v("专业技能")]),t._v(" "),a("span",{staticClass:"section-title-r"})]),t._v(" "),a("div",{staticClass:"section-bd"},[a("ul",{staticClass:"section-list"},[a("li",[a("p",{staticClass:"section-content"},[a("i",{staticClass:"iconfont icon-dot"}),t._v("使用的框架 :\n                    "),a("em",[t._v("精通angular2+")]),t._v("、"),a("em",[t._v("熟悉vue全家桶")]),t._v("、"),a("em",[t._v("ionic3")]),a("br"),t._v(" "),a("i",{staticClass:"iconfont icon-dot"}),t._v(" "),a("em",[t._v("d3.js")]),t._v("、"),a("em",[t._v("jquery")]),t._v("、"),a("em",[t._v("jquery.easyui")]),t._v("、"),a("em",[t._v("bootstrap")]),t._v(" 、"),a("em",[t._v("ant-design")]),t._v("\n                    、"),a("em",[t._v("ElementUI")])])]),t._v(" "),a("li",[a("p",{staticClass:"section-content"},[a("i",{staticClass:"iconfont icon-dot"}),t._v("\n                    熟悉"),a("strong",[t._v("java")]),t._v("，有点"),a("strong",[t._v("审美")]),t._v("能力，重视"),a("strong",[t._v("用户体验")]),t._v("，\n                    熟悉 "),a("em",[t._v("nginx")])])]),t._v(" "),a("li",[a("p",{staticClass:"section-content"},[a("i",{staticClass:"iconfont icon-dot"}),t._v("\n                    使用的操作系统："),a("em",[t._v("MacOS")]),t._v(" 、windows、linux"),a("br")])]),t._v(" "),a("li",[a("p",{staticClass:"section-content"},[a("i",{staticClass:"iconfont icon-dot"}),t._v("\n                    ide: "),a("em",[t._v("webStorm")]),t._v(" 。切图工具： "),a("em",[t._v("sketch")]),t._v("、photoShop "),a("br")])]),t._v(" "),a("li",[a("p",{staticClass:"section-content"},[a("i",{staticClass:"iconfont icon-dot"}),t._v("熟练使用"),a("em",[t._v("Typescript")]),t._v("\n                    、"),a("em",[t._v("Es6")]),t._v("、"),a("em",[t._v("HTML5")]),t._v("、"),a("em",[t._v("CSS3")]),t._v("、"),a("em",[t._v("Scss")]),t._v("、"),a("em",[t._v("d3画svg")]),t._v(" "),a("em",[t._v("npm")])])]),t._v(" "),a("li",[a("p",{staticClass:"section-content"},[a("i",{staticClass:"iconfont icon-dot"}),t._v("会使用的构建工具:"),a("em",[t._v("gulp")]),t._v("、"),a("em",[t._v("webpack")])])]),t._v(" "),a("li",[a("p",{staticClass:"section-content"},[a("i",{staticClass:"iconfont icon-dot"}),t._v(" debug能力："),a("em",[t._v("google一下")]),t._v(" "),a("em",[t._v("stackOverflow")]),t._v(" "),a("em",[t._v("mdn")])])]),t._v(" "),a("li",[a("p",{staticClass:"section-content"},[a("i",{staticClass:"iconfont icon-dot"}),t._v(" 熟练使用"),a("strong",[t._v("Git")]),t._v("进行版本控制和代码托管，\n                    并以"),a("strong",[t._v("MacOS\n                  ")]),t._v("、"),a("strong",[t._v("WebStorm")]),t._v("作为日常开发环境进行工作，熟悉项目开发流程及开发调试工具的使用。")])]),t._v(" "),a("li",[a("p",{staticClass:"section-content"},[a("i",{staticClass:"iconfont icon-dot"}),t._v(" 熟悉node.js进行网页爬虫")])])])])]),t._v(" "),a("section",{staticClass:"practice"},[a("header",{staticClass:"section-hd"},[a("span",{staticClass:"section-title-l"}),t._v(" "),a("h2",{staticClass:"section-title"},[t._v("工作经历")]),t._v(" "),a("span",{staticClass:"section-title-r"})]),t._v(" "),a("div",{staticClass:"section-bd"},[a("div",{staticClass:"item"},[a("header",{staticClass:"item-hd"},[a("span",{staticClass:"item-time"},[t._v("2017.12 — 至今")]),t._v(" "),a("h3",{staticClass:"item-name"},[t._v("ZTE中兴通讯")])]),t._v(" "),a("div",{staticClass:"item-bd"},[a("p",{staticClass:"section-content"},[t._v("\n                    1.使用angualr5进行前端项目搭建\n                    2.敏捷开发完成人脸识别项目\n                    3.负责公司现有项目的性能优化和重构\n                    4.手机端混合app开发，登录的等功能的实现。\n                    5.web端已上线\n                  ")])])]),t._v(" "),a("div",{staticClass:"item"},[a("header",{staticClass:"item-hd"},[a("span",{staticClass:"item-time"},[t._v("2017.02 — 2017.12")]),t._v(" "),a("h3",{staticClass:"item-name"},[t._v("智块信息科技")])]),t._v(" "),a("div",{staticClass:"item-bd"},[a("p",{staticClass:"section-content"},[t._v("\n                    1.帮助改善用户体验。\n                    2.使用gulp搭建静态页面架构，完成web端的scss编译。\n                    3.web端的chat里的邮件功能以及图片的轮播，打tag功能的实现。\n                    4.mission,注册，登录的等功能的实现。\n                    5.web端已上线\n                  ")])])]),t._v(" "),a("div",{staticClass:"item"},[a("header",{staticClass:"item-hd"},[a("span",{staticClass:"item-time"},[t._v("2016.07 — 2017.02")]),t._v(" "),a("h3",{staticClass:"item-name"},[t._v("江苏振邦智慧城市信息系统有限公司")])]),t._v(" "),a("div",{staticClass:"item-bd"},[a("p",{staticClass:"section-content"},[t._v("\n                    1.配合完成静态页面的开发与维护。\n                    2.使用jquery.easyui构建页面，协助后端人员开发。\n                    3.项目上线，拿下常州地区的千万元医疗项目。\n                    4.舟山的分诊诊疗项目拿下。\n                  ")])])]),t._v(" "),a("div",{staticClass:"item"},[a("header",{staticClass:"item-hd"},[a("span",{staticClass:"item-time"},[t._v("2015.09 — 2016.06")]),t._v(" "),a("h3",{staticClass:"item-name"},[t._v("焦点科技股份有限公司(实习)")])]),t._v(" "),a("div",{staticClass:"item-bd"},[a("p",{staticClass:"section-content"},[t._v("\n                    1、学到了大公司的开发流程与规范。\n                    2、完善了自己的切图能力，完成团队的分配任务，帮助早日上线。\n                    3、学会了用户体验，用客户的想法去思考。\n                  ")])])])])]),t._v(" "),a("section",{staticClass:"project"},[a("header",{staticClass:"section-hd"},[a("span",{staticClass:"section-title-l"}),t._v(" "),a("h2",{staticClass:"section-title"},[t._v("项目经验")]),t._v(" "),a("span",{staticClass:"section-title-r"})]),t._v(" "),a("div",{staticClass:"section-bd"},[a("div",{staticClass:"item"},[a("header",{staticClass:"item-hd"},[a("span",{staticClass:"item-time"},[t._v("2018.02-至今")]),t._v(" "),a("h3",{staticClass:"item-name"},[t._v("\n                    智慧园区app\n                  ")])]),t._v(" "),a("div",{staticClass:"item-bd"},[a("div",{staticClass:"section-content"},[a("section",[t._v("\n                      1. 使用angular5搭建项目\n                      2. 适配手机\n                      3. 手机端的照片上传以及拍照上传\n                      4. 用户登录注册，个人信息权限等功能的实现\n                    ")])])])]),t._v(" "),a("div",{staticClass:"item"},[a("header",{staticClass:"item-hd"},[a("span",{staticClass:"item-time"},[t._v("2017.12-2至今")]),t._v(" "),a("h3",{staticClass:"item-name"},[t._v("\n                    MFCU\n                  ")])]),t._v(" "),a("div",{staticClass:"item-bd"},[a("div",{staticClass:"section-content"},[a("section",[t._v("\n                      1.使用angular5搭建项目\n                      2.使用了router懒加载，路由守卫，以及动态组件是实现了可配置的dialog\n                      3.使用echarts展现终端的上行，下行速率\n                      4.使用了ant-g2实现了设备故障的时序图\n                    ")])])])]),t._v(" "),a("div",{staticClass:"item"},[a("header",{staticClass:"item-hd"},[a("span",{staticClass:"item-time"},[t._v("2018.2-至今")]),t._v(" "),a("h3",{staticClass:"item-name"},[a("mark",[t._v("paltx组件开发")])])]),t._v(" "),a("div",{staticClass:"item-bd"},[a("div",{staticClass:"section-content"},[a("section",[t._v("\n                      1.配合完成组件库中的表格自定义组件的修改\n                      2.配合完成组件库的bug修改\n                      3.全局组件的修改\n                    ")])])])]),t._v(" "),a("div",{staticClass:"item"},[a("header",{staticClass:"item-hd"},[a("span",{staticClass:"item-time"},[t._v("2017.02-2017.12")]),t._v(" "),a("a",{staticClass:"btn item-more",attrs:{href:"https://github.com/JoyZhou007/bi.git",target:"_blank"}},[t._v("github")]),t._v(" "),a("a",{staticClass:"btn item-more",attrs:{href:"http://www.blockbi.com",target:"_blank"}},[t._v("Link")]),t._v(" "),a("h3",{staticClass:"item-name"},[a("mark",[t._v("BI商务智能 web端")])])]),t._v(" "),a("div",{staticClass:"item-bd"},[a("div",{staticClass:"section-content"},[a("section",[t._v("\n                      账号：joy.zhou@blockbi.com\n                      密码: 12345678 "),a("br"),t._v("\n                      从项目搭建到上线整个流程都有参与。\n\n                    ")]),t._v(" "),a("h5",[t._v("负责的模块：")]),t._v(" "),a("div",[a("h6",[a("strong",[t._v("1.post邮件、聊天")])]),t._v(" "),a("section",[t._v("\n                        使用了quill-editor插件实现了富文本编辑，分别可以向私人聊天组和商业聊天组发送邮件，\n                        使用了webSocket技术，实现了聊天功能。邮件的上传附件图片的功能实现。负责聊天文件的下载，归档，分享，打ping功能。\n                        其中的图片预览点击切换轮播功能的实现，以及邮件、图片的评论的功能，充分利用了全局变量和局部变量减少了加载时间，又花了功能，减轻服务器压力。\n                        其中还运用了Observable,实现全局的notification.\n                      ")])]),t._v(" "),a("div",[a("h6",[a("strong",[t._v("2.mission list 、mission schedule，空间管理")])]),t._v(" "),a("section",[t._v("\n                        使用了d3.js画出mission对应的时间进度条，以及各种事件的绑定，以及画出svg.\n                      ")])]),t._v(" "),a("div",[a("h6",[a("strong",[t._v("3.注册，登录，about-us,about-us,contact-us")])]),t._v(" "),a("section",[t._v("\n                        使用了angular2的路由守卫，路由重定向。\n                        使用angular2的表单验证完成了表单，其中的样式运用了css3动画以及过渡，\n                        运用localStorage 和sessionStorage,存储session_id,\n                        使用npm的插件实现了截取头像的功能。\n                      ")])]),t._v(" "),a("div",[a("h6",[a("strong",[t._v("3.home页,account setting")])]),t._v(" "),a("section",[t._v("\n                        tips 编写，使用了全局的自定义dialog，还用到了自定义的表单验证指令，自定义的组件，下拉菜单等。\n                        其中做了优化，为了减少http请求，将所有的头像信息集合到一起批量请求，头像信息先从localStorage拿，如果没有,再去批量请求，从而优化速度，减少接口请求次数。\n                        引进了date.Service格式化时间字符串,以及实现滚轮加载分页的效果。\n                        通过插件监听页面是否活跃过，然后请求接口告诉后台session_id过期时间，从而实现自动退出功能\n                      ")])])])])]),t._v(" "),a("div",{staticClass:"item"},[a("header",{staticClass:"item-hd"},[a("span",{staticClass:"item-time"},[t._v("2017.02-2017.12")]),t._v(" "),a("a",{staticClass:"btn item-more",attrs:{href:"https://github.com/JoyZhou007/ionicProject",target:"_blank"}},[t._v("github")]),t._v(" "),a("h3",{staticClass:"item-name"},[t._v("\n                    BI商务智能 app端\n                  ")])]),t._v(" "),a("div",{staticClass:"item-bd"},[a("div",{staticClass:"section-content"},[a("section",[t._v("\n                      采用ionic3+angular4编写android 和ios平台的app\n                    ")]),t._v(" "),a("h5",[t._v("负责的模块：")]),t._v(" "),a("div",[a("h6",[a("strong",[t._v("1.注册，登录，invite-people,mission")])]),t._v(" "),a("section",[t._v("\n                        运用了ionic的pages,使用slides实现页面切换功能，使用navCtrl,modalCtrl实现路由跳转，\n                        熟练使用ionic,编写兼容各平台的页面。\n                        其中表单运用了angular4的自定义响应式表单，自己定义了验证器的directive,实现全局通用。\n                      ")])])])])]),t._v(" "),a("div",{staticClass:"item"},[a("header",{staticClass:"item-hd"},[a("span",{staticClass:"item-time"},[t._v("2016.07 - 2017.01")]),t._v(" "),a("h3",{staticClass:"item-name"},[t._v("舟山市分级诊疗")])]),t._v(" "),a("div",{staticClass:"item-bd"},[a("p",{staticClass:"section-content"},[t._v("\n                    1. 使用jquery.easyui搭建项目\n                    2. 实现门诊，挂号，预约等功能的实现\n                  ")])])]),t._v(" "),a("div",{staticClass:"item"},[a("header",{staticClass:"item-hd"},[a("span",{staticClass:"item-time"},[t._v("2016.07 - 2017.01")]),t._v(" "),a("h3",{staticClass:"item-name"},[t._v("武进区区域平台系统")])]),t._v(" "),a("div",{staticClass:"item-bd"},[a("p",{staticClass:"section-content"},[t._v("\n                    1. 平台门户的开发\n                    2. 双向转诊的实现\n                  ")])])]),t._v(" "),a("div",{staticClass:"item"},[a("header",{staticClass:"item-hd"},[a("span",{staticClass:"item-time"},[t._v("2015.10 - 2016.06")]),t._v(" "),a("a",{staticClass:"btn item-more",attrs:{href:"http://www.abiz.com/caigoutj/?source=45",target:"_blank"}},[t._v("Link")]),t._v(" "),a("h3",{staticClass:"item-name"},[t._v("百卓采购企业版")])]),t._v(" "),a("div",{staticClass:"item-bd"},[a("p",{staticClass:"section-content"},[t._v("\n                    前端静态页面制作 项目： 连接中的 客户案例、解决方案、招商合作首页制作。\n                  ")])])])])]),t._v(" "),a("section",{staticClass:"prize"},[a("header",{staticClass:"section-hd"},[a("span",{staticClass:"section-title-l"}),t._v(" "),a("h2",{staticClass:"section-title"},[t._v("期望工作")]),t._v(" "),a("span",{staticClass:"section-title-r"})]),t._v(" "),a("div",{staticClass:"section-bd"},[a("div",{staticClass:"item"},[a("header",{staticClass:"item-hd"},[a("span",{staticClass:"item-time"},[t._v("上海")]),t._v(" "),a("span",{staticClass:"item-more"},[t._v("期待与你共事")]),t._v(" "),a("h3",{staticClass:"item-name"},[t._v("web前端")])])])])])]),t._v(" "),a("header",{staticClass:"content-right content-hd"},[a("section",{staticClass:"title"},[a("img",{staticClass:"avator",attrs:{src:i("f7+n")}}),t._v(" "),a("div",{staticClass:"name"},[a("h1",[t._v("周欢")])]),t._v(" "),a("h2",{staticClass:"job"},[t._v("Web前端开发工程师")])]),t._v(" "),a("section",{staticClass:"info"},[a("h2",[t._v("男 / 1994.01")]),t._v(" "),a("h3",[t._v("南京林业大学 · 电子信息工程")]),t._v(" "),a("h3",[t._v("本科 / 2016年毕业")])]),t._v(" "),a("section",{staticClass:"skill-level"},[a("h3",[t._v("angular2/angular4")]),t._v(" "),a("div",{staticClass:"item i-js"},[a("i",{staticClass:"in"}),a("i",{staticClass:"out"})]),t._v(" "),a("h3",[t._v("ionic3")]),t._v(" "),a("div",{staticClass:"item i-js"},[a("i",{staticClass:"in"}),a("i",{staticClass:"out"})]),t._v(" "),a("h3",[t._v("Typescript")]),t._v(" "),a("div",{staticClass:"item i-js"},[a("i",{staticClass:"in"}),a("i",{staticClass:"out"})]),t._v(" "),a("h3",[t._v("ES6")]),t._v(" "),a("div",{staticClass:"item i-js"},[a("i",{staticClass:"in"}),a("i",{staticClass:"out"})]),t._v(" "),a("h3",[t._v("HTML")]),t._v(" "),a("div",{staticClass:"item i-html"},[a("i",{staticClass:"in"}),a("i",{staticClass:"out"})]),t._v(" "),a("h3",[t._v("CSS")]),t._v(" "),a("div",{staticClass:"item i-css"},[a("i",{staticClass:"in"}),a("i",{staticClass:"out"})]),t._v(" "),a("h3",[t._v("JavaScript")]),t._v(" "),a("div",{staticClass:"item i-js"},[a("i",{staticClass:"in"}),a("i",{staticClass:"out"})]),t._v(" "),a("h3",[t._v("jQuery")]),t._v(" "),a("div",{staticClass:"item i-js"},[a("i",{staticClass:"in"}),a("i",{staticClass:"out"})]),t._v(" "),a("h3",[t._v("jQuery.easyui")]),t._v(" "),a("div",{staticClass:"item i-js"},[a("i",{staticClass:"in"}),a("i",{staticClass:"out"})]),t._v(" "),a("h3",[t._v("Sass")]),t._v(" "),a("div",{staticClass:"item i-sass"},[a("i",{staticClass:"in"}),a("i",{staticClass:"out"})]),t._v(" "),a("h3",[t._v("Gulp")]),t._v(" "),a("div",{staticClass:"item i-sass"},[a("i",{staticClass:"in"}),a("i",{staticClass:"out"})]),t._v(" "),a("h3",[t._v("bootstrap")]),t._v(" "),a("div",{staticClass:"item i-sass"},[a("i",{staticClass:"in"}),a("i",{staticClass:"out"})]),t._v(" "),a("h3",[t._v("PhotoShop")]),t._v(" "),a("div",{staticClass:"item i-ps"},[a("i",{staticClass:"in"}),a("i",{staticClass:"out"})]),t._v(" "),a("h3",[t._v("Sketch")]),t._v(" "),a("div",{staticClass:"item i-ps"},[a("i",{staticClass:"in"}),a("i",{staticClass:"out"})])]),t._v(" "),a("section",{staticClass:"contact"},[a("ul",[a("li",[a("a",{attrs:{href:"http://zhouhuan0830.applinzi.com/",target:"_blank"}},[a("i",{staticClass:"iconfont icon-homepage"}),t._v(" "),a("span",{staticClass:"contact-link"},[t._v("zhouhuan0830.applinzi.com")])])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/JoyZhou007",target:"_blank"}},[a("i",{staticClass:"iconfont icon-github"}),t._v(" "),a("span",{staticClass:"contact-link"},[t._v("github.com/JoyZhou007")])])]),t._v(" "),a("li",[a("a",{attrs:{href:"mailto:15005189520@163.com",target:"_blank"}},[a("i",{staticClass:"iconfont icon-email"}),t._v(" "),a("span",{staticClass:"contact-link"},[t._v("15005189520@163.com")])])]),t._v(" "),a("li",[a("a",{attrs:{href:"tel:15026961813",target:"_blank"}},[a("i",{staticClass:"iconfont icon-phone"}),t._v(" "),a("span",{staticClass:"contact-link"},[t._v("150****1813")])])])])])])]),t._v(" "),a("footer",{staticClass:"print-footer"},[a("a",{staticClass:"footer-link",attrs:{href:"",target:"_blank"}},[a("i",{staticClass:"iconfont icon-link"}),t._v("\n          网页版简历：")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("footer",{staticClass:"github-footer"},[s("a",{staticClass:"footer-link",attrs:{href:"https://github.com/JoyZhou007/resume",target:"_blank"}},[s("i",{staticClass:"iconfont icon-link"}),this._v(" github.com/JoyZhou007/resume")])])}]};var r=i("VU/8")(l,_,!1,function(t){i("2nxr")},"data-v-388598de",null).exports;a.a.use(c.a);var m=new c.a({routes:[{path:"/",name:"home",component:r}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:m,components:{App:n},template:"<App/>"})},"f7+n":function(t,s,i){t.exports=i.p+"static/img/joy.529a732.jpg"},hPQi:function(t,s){},wH8Y:function(t,s){},yzpM:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.2115eec1d18a2a826a83.js.map