
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports=webpackJsonp([3],{120:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(9),r=a(l),o=n(5),i=a(o),u=n(6),s=a(u),d=n(10),c=a(d),f=n(11),p=a(f),m=n(29),h=a(m),g=n(4),w=a(g),v=(n(19),n(25)),b=a(v),E=n(62),x=(a(E),n(35),[{str:"主页",url:"/index"},{str:"艺术家",url:"/artista"},{str:"展览",url:"/mostre"},{str:"新闻",url:"/eventi"},{str:"关于",url:"/about"}]),y=b.default.div({position:"relative",cursor:"pointer"},function(e){return{}}),_=b.default.div({cursor:"pointer"},function(e){return{}}),k=b.default.div({fontSize:"0.3rem",position:"fixed",zIndex:1,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around",backgroundColor:"white"},function(e){return{left:e.isLandscape?0:"50%",top:e.isLandscape?0:"100%",transform:e.isLandscape?"translate(0, 0)":"translate(-50%, -100%)",width:e.isLandscape?"auto":"100%",padding:e.isLandscape?"2em":"1em",boxShadow:e.isLandscape?"0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.2)":"0 -16px 24px 2px rgba(0,0,0,.14),0 -6px 30px 5px rgba(0,0,0,.12),0 -8px 10px -5px rgba(0,0,0,.2)"}}),S=x.map(function(e,t){return w.default.createElement(y,{key:"Container"+t},w.default.createElement(h.default,{href:e.url,key:"A"+t},w.default.createElement(_,null,e.str)))}),z=function(e){function t(e){(0,i.default)(this,t);var n=(0,c.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return n.onClick=function(e){console.log(e,"来自 child 的 value 变化")},n.state={},n}return(0,p.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){return w.default.createElement("div",{onClick:this.onClick},w.default.createElement(k,{isLandscape:this.props.isLandscape},S))}}]),t}(g.Component);t.default=z},122:function(e,t,n){"use strict";(function(t){function n(e){return/ipad|Nexus (7|9)|xoom|sch-i800|playbook|tablet|kindle/i.test(e||window.navigator.userAgent)}function a(){return/iPad|iPhone|iPod/.test(window.navigator.platform)}function l(){return/SamsungBrowser.+Mobile VR/i.test(window.navigator.userAgent)}var r=function(){var e=!1,t=window.navigator.userAgent||window.navigator.vendor||window.opera;return(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0),e};e.exports.isMobile=r,e.exports.isTablet=n,e.exports.isIOS=a,e.exports.isGearVR=l,e.exports.isLandscape=function(){return 90===window.orientation||90===window.screen.orientation.angle||-90===window.orientation||-90===window.screen.orientation.angle||window.innerHeight/window.innerWidth<1},e.exports.isIOSOlderThan10=function(e){return/(iphone|ipod|ipad).*os.(7|8|9)/i.test(e)},e.exports.getLanguer=function(){var e=(navigator.language||navigator.userLanguage||navigator.browserLanguage||navigator.browserLanguage||navigator.systemLanguage).toLowerCase();return/zh/i.test(e)?"zh":/it/i.test(e)?"it":"en"},e.exports.setREM=function(){var e=document.documentElement,t=window.devicePixelRatio,n=e.getBoundingClientRect().width,l=1*e.dataset.basewidth||640,r=n/l*100,o=r<100?r<50?50:r:100;window;i=1==a()?t>=3&&(!i||i>=3)?3:t>=2&&(!i||i>=2)?2:1:1;var i=0;e.style.fontSize=o+"px",console.log("bpr:",t),console.log("fontSize:",o+"px")},e.exports.isBrowserEnvironment=!(t&&!t.browser),e.exports.isNodeEnvironment=!e.exports.isBrowserEnvironment}).call(t,n(58))},35:function(e,t,n){"use strict";e.exports.ui={color:{primary:"rgba(255, 255, 255 ,1)",secondary:"rgb(33, 33, 33)",notice_secondary:"rgb(50, 50, 50)",backdrop:"rgba(0, 0, 0, .50)",disabled_on_light:"rgba(0,0,0,.38)",secondary_on_light:"rgba(0,0,0,.54)",primary_on_light:"rgba(0,0,0,.87)",disabled_on_dark:"rgba(255,255,255,.38)",secondary_on_dark:"rgba(255,255,255,.54)",primary_on_dark:"rgba(255,255,255,.87)"},breakpoints:{xsmall:"20em",small:"30em",medium:"40em",large:"55em",xlarge:"70em"}}},401:function(e,t,n){e.exports=n(402)},402:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(9),r=a(l),o=n(5),i=a(o),u=n(6),s=a(u),d=n(10),c=a(d),f=n(11),p=a(f),m=n(4),h=a(m),g=n(82),w=a(g),v=n(119),b=(a(v),n(19)),E=n(25),x=a(E),y=n(403),_=a(y),k=n(405),S=(a(k),n(120)),z=a(S),L=n(406),M=a(L),R=n(62),C=a(R),I=n(122),F=n(408),j=n(35);b.css.global("html, body",{fontSize:"100%",color:j.ui.color.secondary_on_light}),b.css.global("h1,h2,h3",{color:j.ui.color.primary_on_light});var P=function(e){function t(e){(0,i.default)(this,t);var n=(0,c.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return n.handleScroll=function(){var e=window.scrollY;e-n.prevScrollY<=0?console.log("↑"):console.log("↓"),n.prevScrollY=e},n.handleReSize=function(){n.setState({h:window.innerHeight}),n.setState({w:window.innerWidth}),console.log("resize!")},n.state={device:"",isLandscape:"",language:"",h:"",w:""},n.onScorll=(0,F.debounce)(n.handleScroll,500),n.onReSize=(0,F.debounce)(n.handleReSize,500),n}return(0,p.default)(t,e),(0,s.default)(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&((0,I.setREM)(),window.removeEventListener("scroll",this.onScorll,!1),window.removeEventListener("resize",this.onReSize))}},{key:"componentDidMount",value:function(){if(window.addEventListener("scroll",this.onScorll,!1),window.addEventListener("resize",this.onReSize),this.prevScrollY=window.scrollY,"undefined"==typeof navigator)return void console.log(this.state);1==(0,I.isMobile)()?this.setState({device:"isMobile"}):1==(0,I.isTablet)()?this.setState({device:"isTablet"}):this.setState({device:"isDesktop"}),this.setState({isLandscape:!!(0,I.isLandscape)()}),this.setState({language:(0,I.getLanguer)()}),this.setState({h:window.innerHeight}),this.setState({w:window.innerWidth});var e=window.orientation||window.screen.orientation.angle;console.log("方向:   ",e.orientation,"\n高度: ",window.innerHeight,"\n宽度: ",window.innerWidth)}},{key:"render",value:function(){return h.default.createElement("main",null,h.default.createElement(w.default,null,h.default.createElement("title",null,"中艺国际")),h.default.createElement(_.default,null,h.default.createElement(C.default,{device:this.state.device,isLandscape:this.state.isLandscape,color:j.ui.color.primary_on_dark,bg_color:j.ui.color.secondary})),h.default.createElement(_.default,{onSSR:h.default.createElement("h2",null,"中艺国际")},h.default.createElement(z.default,{device:this.state.device,isLandscape:this.state.isLandscape,language:this.state.language})),h.default.createElement(_.default,null,h.default.createElement(M.default,{w:this.state.w,h:this.state.h,org:"v1502792912/00_Tempio_Malatestiano_gwfwy4.jpg",active:"true"})),h.default.createElement("content",{onScroll:this.handleScroll},h.default.createElement(x.default.Div,{fontSize:"0.25rem",margin:"10em 0.8em 0 0.8em"},h.default.createElement(x.default.Div,{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"38em"},"We are comming..."),h.default.createElement("h2",null,"设计特色"),h.default.createElement(x.default.Span,{color:"#717171"},"更新于2017-8-16"),h.default.createElement("h3",null,"Z + AI"),h.default.createElement("p",null,'\n              ZAI is alive, 每个网页元素 (例如"按钮,图片卡,导航栏,Logo"), 分别视为有生命的独立元素. 它们不只是存在, 更是活着的.\n\n              Z + AI 的实现思路是为元素注入AI特性,强化每个元素各自的个性,改进与用户交互的反应.\n              \r\n该特性是我们的长期目标,将在网站第二期工程由ZAI团队共同设计.'),h.default.createElement("h3",null,"NULL DESIGN"),h.default.createElement("p",null,"纸张的空能召唤创造者的灵感,当它载满灵感的时候也是他最有价值的, 因此我们网站设计将特别关注空白的地方"),h.default.createElement("h3",null,"感应式布局"),h.default.createElement("p",null,"我们关心你会在什么场合,使用什么新设备访问我们, 不论你们在使用电脑 / 手机 / 平板 / 网络TV,\n              或者你的设备90度/180度,我们都会考虑到,我们会分别为你定义不一样的网页布局\n              "),h.default.createElement("h3",null,"流量节约"),h.default.createElement("p",null,"我们知道你们的访问是有代价, 所以我们在设计一套流量节制系统,\n              例如当你的访问涉及图片内容时,我们会先根据你的设备先定制合适的像素,再发送到你的设备上.\n              你屏幕以外的图片,我们是不会让它占用你们的流量,尽管它就在一个页面内,\n              它们只有在你需要的时候我们才会传送给你."),h.default.createElement("h3",null,"硬件检测"),h.default.createElement("span",null,"为感应式布局,根据用户访问设备,电脑 / 手机 / 平板 ,及这些设备的横屏和竖屏定义合适的网页布局,"),h.default.createElement("span",null,"识别你的设备是 ",h.default.createElement(x.default.Span,{color:"#d14"})),h.default.createElement("h3",null,"ZAI further away(渐行渐远)"),h.default.createElement("p",null,"我们非常在乎你未来的浏览方式,对已经成为主流的技术/方式, 我们会不惜进行改造,就如我们不会为求选用已经发展成熟的\n              wordpress框架制作我们的网站,尽管它更简单和更有效率. 我们分析未来趋向,不惜花费大量的学习/排错成本,\n              探索2017+最新的框架和开发语言, 所以我们可以不断为你提供最新的服务和更多的可能性"),h.default.createElement("h2",null,"Change Log 网站进度"),h.default.createElement("h3",null,"2017-8-16"),h.default.createElement("p",null,"把项目托管至git"),h.default.createElement("p",null,"尝试修复git log中文现实问题"),h.default.createElement("h3",null,"2017-8-11"),h.default.createElement("p",null,"开始dpr检测脚本, 为iphone,mac等苹果的 retina屏幕匹配, "),h.default.createElement("p",null,"脚本尝试加入根据dpr,自动定义fontsize的逻辑,为实现以rem和em字体单位定义排版"),h.default.createElement("p",null),h.default.createElement("h3",null,"2017-8-15"),h.default.createElement("p",null,"试用构建图片自动裁剪系统,于服务器中"),h.default.createElement("h3",null,"2017-8-14"),h.default.createElement("p",null,"规范化网站颜色,分为Primary,Secondary,字体分别在深/浅颜色背景各定义三级透明度89%,55%30%"),h.default.createElement("h3",null,"2017-8-13"),h.default.createElement("p",null,"尝试调试微信端不支持Object.assign(未解决)"),h.default.createElement("h3",null,"2017-8-12"),h.default.createElement("p",null,"修复Link不能跳转到指定网页的问题"),h.default.createElement("p",null,"dpr检测脚本完成"),h.default.createElement("h3",null,"2017-8-10"),h.default.createElement("p",null,"参考Aframe框架,device.js 将原来的函数式方程重新改写成组建管理模式"),h.default.createElement("p",null,"忽略原来对TV的识别(暂时不需要) "),h.default.createElement("p",null),h.default.createElement("h3",null,"2017-8-9"),h.default.createElement("p",null,"修复Nav 组件, 用glamorous对Nav做初步样式 "),h.default.createElement("p",null),h.default.createElement("p",null),h.default.createElement("h3",null,"2017-8-8"),h.default.createElement("p",null,"引入device.js 硬件检测脚本"),h.default.createElement("p",null,"/艺术家 carta组件样式改动"),h.default.createElement("h3",null,"Sat Jul 29 00:21:57 2017 +0200"),h.default.createElement("p",null,"添加.nojekyll,尝试修复js请求失败"),h.default.createElement("h3",null,"Tue Jul 25 12:42:45 2017 +0200"),h.default.createElement("p",null,"第一次递交"),h.default.createElement("p",null))))}}]),t}(m.Component);t.default=P},403:function(e,t,n){e.exports=n(404)},404:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(9),r=a(l),o=n(5),i=a(o),u=n(6),s=a(u),d=n(10),c=a(d),f=n(11),p=a(f),m=n(4),h=a(m),g=function(){return h.default.createElement("span",null)},w=function(e){function t(){var e;(0,i.default)(this,t);for(var n=arguments.length,a=Array(n),l=0;l<n;l++)a[l]=arguments[l];var o=(0,c.default)(this,(e=(0,r.default)(t)).call.apply(e,[this].concat(a)));return o.state={canRender:!1},o}return(0,p.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){this.setState({canRender:!0})}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.onSSR,a=void 0===n?h.default.createElement(g,null):n;return this.state.canRender?t:a}}]),t}(h.default.Component);t.default=w},405:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(4),r=a(l),o=n(29),i=a(o);t.default=function(e){return r.default.createElement("article",null,r.default.createElement("h2",null,e.title),r.default.createElement("p",null,e.body),r.default.createElement(i.default,{href:{pathname:"/post",query:{id:e.id}},as:"/post/"+e.id},r.default.createElement("a",null,"Read more...")))}},406:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(36),r=a(l),o=n(39),i=a(o),u=n(9),s=a(u),d=n(5),c=a(d),f=n(6),p=a(f),m=n(10),h=a(m),g=n(11),w=a(g),v=n(29),b=(a(v),n(4)),E=a(b),x=(n(19),n(25)),y=a(x),_=n(407),k=a(_),S=n(62),z=(a(S),n(35)),L=y.default.div({zIndex:1,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around",backgroundColor:"#3b444f",backgroundRepeat:"no-repeat",backgroundSize:"cover",overflow:"hidden",position:"absolute",left:0,top:0},function(e){return{width:e.w?""+e.w:"100%",height:e.h?""+e.h:"100%",backgroundImage:e.src?"url("+e.src+")":"linear-gradient(to right, #d7d2cc 0%, #304352 100%)"}}),M=y.default.div({padding:"0.3em 3em",fontWeight:100,flexDirection:"row",alignItems:"center",justifyContent:"center",display:"flex"},function(e){return{fontSize:e.size?e.size:"0.4em",color:e.color?e.color:z.ui.color.secondary_on_light,backgroundColor:e.bg_color?e.bg_color:z.ui.color.primary}}),R=function(e){function t(e){(0,c.default)(this,t);var n=(0,h.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e));return n.onProgress=function(e){if(e.lengthComputable){var t=Math.round(e.loaded/e.total*100);console.log(t,"%"),n.setState({per:t+"%"})}else console.log("@onProgress 该资源无法计算byte长度")},n.state={active:n.props.active,onload:n.props.onload,per:"0%"},n}return(0,w.default)(t,e),(0,p.default)(t,[{key:"componentWillMount",value:function(){this.fethImg()}},{key:"fethImg",value:function(){function e(){return t.apply(this,arguments)}var t=(0,i.default)(r.default.mark(function e(){var t,n,a,l,o;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.innerHeight,n=window.innerWidth,a="http://res.cloudinary.com/responsivebreakpoints/image/upload/c_crop,h_"+t+",w_"+n+"/"+this.props.org,l=new k.default,l.onProgress=this.onProgress,e.next=7,l.send(a);case 7:o=e.sent,1==o&&this.setState({onload:!0}),this.setState({src:a}),this.setState({w:n}),this.setState({h:t});case 12:case"end":return e.stop()}},e,this)}));return e}()},{key:"render",value:function(){return E.default.createElement("div",null,E.default.createElement(L,{w:this.state.w,h:this.state.h,src:this.state.src},E.default.createElement(M,null,this.state.onload?"WE 'RECOMMING..":this.state.per)))}}]),t}(b.Component);t.default=R},407:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var l=n(40),r=a(l),o=n(5),i=a(o),u=0,s=function(e){return function(){e(!0)}},d=function(e){return function(){console.log("XHRProgress @onErr: 失败"),e(Error("There was a network error."))}},c=function(e){e.lengthComputable?(u=Math.round(e.loaded/e.total*100),console.log(u,"%")):console.log("@onProgress 该资源无法计算byte长度")},f=function e(t){var n=this;(0,i.default)(this,e),this.send=function(e){return new r.default(function(t,a){var l=new XMLHttpRequest;l.onprogress=n.onProgress,l.onload=n.onLoad(t),l.onerror=n.onError(a),l.open("GET",e),l.responseType="blob",l.send()})},this.onProgress=c,this.onLoad=s,this.onError=d,this.percentCount=0};e.exports=f},408:function(e,t,n){"use strict";e.exports.throttle=function(e,t,n){var a,l=new Date;return function(){var r=this,o=arguments,i=new Date;clearTimeout(a),i-l>=n?(e.apply(r,o),l=i):a=setTimeout(function(){e.apply(r,o)},t)}},e.exports.debounce=function(e,t){var n=null;return function(){var a=this,l=arguments;clearTimeout(n),n=setTimeout(function(){e.apply(a,l)},t)}},e.exports.simpleThrottle=function(e,t){var n=null;return function(){var a=+new Date;a-n>t&&(e(),n=a)}},e.exports.simpleDebouce=function(e,t){var n=null;return function(){clearTimeout(n),n=setTimeout(function(){e()},t)}}},62:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(9),r=a(l),o=n(5),i=a(o),u=n(6),s=a(u),d=n(10),c=a(d),f=n(11),p=a(f),m=n(46),h=a(m),g=n(29),w=(a(g),n(4)),v=a(w),b=n(19),E=n(25),x=a(E),y=(n(35),b.css.fontFace({fontFamily:"ZAI",fontStyle:"normal",fontWeight:400,src:"url('../static/font/SFElectrotome-Bold.woff2') format('woff2'),url('../static/font/SFElectrotome-Bold.woff') format('woff'),url('../static/font/SFElectrotome-Bold.svg') format('svg')",unicodeRange:"U+0000-00FF, U+0131, ... U+E0FF, U+EFFD, U+F000"})),_=b.css.fontFace({fontFamily:"Zho",fontStyle:"normal",fontWeight:400,src:"url('../static/font/SquadaOne-Regular.woff2') format('woff2'),url('../static/font/SquadaOne-Regular.woff') format('woff'),url('../static/font/SquadaOne-Regular.svg') format('svg')",unicodeRange:"U+0000-00FF, U+0131, ... U+E0FF, U+EFFD, U+F000"}),k=x.default.div({fontFamily:y,lineHeight:"0.8em",display:"flex",alignItems:"flex-end",padding:"0 0.1em 0 0"}),S=x.default.div({fontFamily:_,fontSize:"0.3em"}),z=x.default.div({display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"flex-end",position:"fixed",zIndex:2,textAlign:"left",boxShadow:"0 9px 46px 8px rgba(0,0,0,.14),0 11px 15px -7px rgba(0,0,0,.12),0 24px 38px 3px rgba(0,0,0,.2)",padding:"0.5em 0.5em 0.5em 0.5em"},function(e){var t={fontSize:e.size?e.size+"rem":"0.8rem",color:e.color,backgroundColor:e.bg_color},n=e.isLandscape,a={fontSize:e.size?e.size+"rem":"0.8rem"},l={fontSize:n?"0.8rem":"1rem",width:n?"auto":"100%",left:n?"50%":0,top:n?"0%":0,transform:n?"translate(-50%, 0)":0},r={fontSize:"1rem"};switch(e.device){case"isDesktop":return(0,h.default)(t,a);case"isMobile":return(0,h.default)(t,l);case"isTablet":return(0,h.default)(t,r)}}),L=function(e){function t(e){(0,i.default)(this,t);var n=(0,c.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return n.state={},n}return(0,p.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){return v.default.createElement("div",null,v.default.createElement(z,this.props,v.default.createElement(k,null,"ZAI"),v.default.createElement(S,null,v.default.createElement("div",null,"Zhong Art"),v.default.createElement("div",null,"Internazionale"))))}}]),t}(w.Component);t.default=L}},[401]);
            return { page: comp.default }
          })
        