!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var t=r();for(var a in t)("object"==typeof exports?exports:e)[a]=t[a]}}(window,function(){var e=Math.max,r=Math.min,t=Math.floor;return function(e){function r(r){for(var a,n,s=r[0],c=r[1],i=r[2],p=0,d=[];p<s.length;p++)n=s[p],l[n]&&d.push(l[n][0]),l[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(u&&u(r);d.length;)d.shift()();return o.push.apply(o,i||[]),t()}function t(){for(var e,r=0;r<o.length;r++){for(var t,n=o[r],s=!0,c=1;c<n.length;c++)t=n[c],0!==l[t]&&(s=!1);s&&(o.splice(r--,1),e=a(a.s=n[0]))}return e}function a(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,a),t.l=!0,t.exports}var n={},l={0:0},o=[];a.m=e,a.c=n,a.d=function(e,r,t){a.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,r){if(1&r&&(e=a(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)a.d(t,n,function(r){return e[r]}.bind(null,n));return t},a.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(r,"a",r),r},a.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},a.p="./";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=r,s=s.slice();for(var i=0;i<s.length;i++)r(s[i]);var u=c;return o.push([33,1]),t()}([,function(e,r,t){"use strict";t.d(r,"l",function(){return n}),t.d(r,"i",function(){return l}),t.d(r,"n",function(){return o}),t.d(r,"j",function(){return s}),t.d(r,"c",function(){return c}),t.d(r,"d",function(){return i}),t.d(r,"h",function(){return u}),t.d(r,"k",function(){return p}),t.d(r,"f",function(){return d}),t.d(r,"e",function(){return m}),t.d(r,"g",function(){return h}),t.d(r,"a",function(){return g}),t.d(r,"m",function(){return f}),t.d(r,"b",function(){return b});var a=t(2);const n=a.d.main``,l=a.d.header`
	padding: 1rem;
	text-align: center;
	position: relative;
`,o=a.d.h1`
	font-size: 3rem;
	margin: 1rem 0;
	font-weight: lighter;
`,s=a.d.h2`
	font-size: 1.5rem;
	margin: 0.5rem auto;
	font-weight: lighter;
`,c=a.d.article`
	margin: 1rem auto;
	padding: 1rem;
	max-width: 60rem;
	background: white;
	color: black;
`,i=a.d.p`
	margin: 1.5rem 0;
`,u=a.d.footer`
	padding: 3rem 1rem;
`,p=a.d.a`
	color: currentColor;
	text-decoration: none;
	font-weight: bolder;

	&:hover {
		text-decoration: underline;
	}
`,d=a.d.dl`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	margin: 0 auto;
	overflow: hidden;
`,m=a.d.dd`
	font-weight: normal;
	flex: 0 0 calc(80% - 1rem);
	margin: 0 0 0 1rem;
	overflow: hidden;
`,h=a.d.dt`
	font-weight: bolder;
	flex: 0 0 20%;
	overflow: hidden;
`,g=a.d.code`
	padding: 0.125em 0.25rem;
	margin: -0.125em 0;
	background: hsla(0, 0%, 90%, 1);
	color: black;
	border-radius: 2px;
`,f=a.d.div`
	display: flex;
	flex-wrap: wrap;
`,b=a.d.div`
	flex: 1 1 30rem;
`},,function(e,r,t){"use strict";t.d(r,"a",function(){return n}),t.d(r,"b",function(){return l});var a=t(2);const n=a.d.section`
	${e=>a.c`
		--pager-size: ${e.theme.pagerSize};
		--pager-gap: ${e.theme.pagerGap};
		--marker-size: ${e.theme.markerSize};
		--background-h: ${e.theme.hue};
		--background-s: ${e.theme.saturation};
		--background-l: ${e.theme.lightness};
		--background-color: hsla(var(--background-h), var(--background-s), var(--background-l), 1);
		--stroke-color: ${e.theme.color};
		--stroke-width: ${e.theme.strokeWidth};
		--font-default: ${e.theme.color};
		padding: 1rem 1rem 1rem ${e.withPagers?"calc(var(--pager-size) + 2rem)":"1rem"};
		color: ${e.theme.color};
	`};

	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	overflow: hidden;
	background: var(--background-color);
`;n.defaultProps={theme:{color:"white",hue:0,lightness:"30%",markerSize:"2px",pagerGap:"2rem",pagerSize:"1.5rem",saturation:"0%",strokeWidth:"2px"}};const l={color:{blue:{color:"white",hue:231,lightness:"48%",saturation:"48%"},green:{color:"white",hue:122,lightness:"49%",saturation:"39%"},orange:{color:"white",hue:14,lightness:"57%",saturation:"100%"},purple:{color:"white",hue:291,lightness:"42%",saturation:"64%"},red:{color:"white",hue:4,lightness:"58%",saturation:"90%"},yellow:{color:"black",hue:54,lightness:"62%",saturation:"100%"}},default:{color:"white",hue:0,lightness:"30%",markerSize:"2px",pagerGap:"5vh",pagerSize:"1.5rem",saturation:"0%",strokeWidth:"2px"},pagers:{big:{markerSize:"3rem",pagerGap:"0.5rem",pagerSize:"3rem"},medium:{markerSize:"1.5rem",pagerGap:"0.5rem",pagerSize:"1.5rem"},minimal:{markerSize:"2px",pagerGap:"5vh",pagerSize:"1.5rem"},small:{markerSize:"1rem",pagerGap:"0.5rem",pagerSize:"1rem"}},stroke:{bold:{strokeWidth:"2px"},light:{strokeWidth:"1px"},none:{strokeWidth:"0"}}}},,function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={Listener:!0};Object.defineProperty(r,"Listener",{enumerable:!0,get:function(){return n.ScrollConsumer}}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return l.default}});var n=t(16);Object.keys(n).forEach(function(e){"default"===e||"__esModule"===e||Object.prototype.hasOwnProperty.call(a,e)||Object.defineProperty(r,e,{enumerable:!0,get:function(){return n[e]}})});var l=function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};a.get||a.set?Object.defineProperty(r,t,a):r[t]=e[t]}return r.default=e,r}(t(48));Object.keys(l).forEach(function(e){"default"===e||"__esModule"===e||Object.prototype.hasOwnProperty.call(a,e)||Object.defineProperty(r,e,{enumerable:!0,get:function(){return l[e]}})});var o=t(50);Object.keys(o).forEach(function(e){"default"===e||"__esModule"===e||Object.prototype.hasOwnProperty.call(a,e)||Object.defineProperty(r,e,{enumerable:!0,get:function(){return o[e]}})})},,function(e,r,t){"use strict";t.d(r,"a",function(){return n}),t.d(r,"b",function(){return l});var a=t(0);t.n(a);const{Consumer:n,Provider:l}=Object(a.createContext)({page:0,progress:0,pages:0})},,,,,,function(e,r,t){"use strict";t.d(r,"a",function(){return g});var a=t(0),n=t.n(a),l=t(2),o=t(7);const s=(e,r)=>{const t=typeof e;if(t!==r)throw new TypeError(`Expected "${r}" but "${t}" was received`)},c=l.d.a`
	position: relative;
	z-index: 2;
	height: var(--pager-size);
	width: var(--pager-size);
	margin: var(--pager-gap) 0.5rem;
	visibility: visible;
	border-radius: 50%;
	display: flex;
	align-content: center;
	align-items: center;
	justify-content: center;
	text-align: center;
	color: currentColor;
	text-decoration: none;
	background-clip: content-box;

	${e=>l.c`
		color: var(--color);
		background-color: ${e.selected?"var(--pager-color-active)":"var(--pager-color)"};
		border: var(--stroke-width) solid ${e.active?"var(--marker-color)":"transparent"};

		&:hover {
			background-color: var(--pager-color-active);
		}
	`};
`,i=l.d.nav`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	align-content: center;
	justify-content: center;
	margin: calc(var(--pager-gap) * -1) -0.5rem;
`,u=l.d.div`
	${e=>l.c`
		--marker-width: var(--marker-size);
		--marker-color: hsla(
			var(--background-h),
			var(--background-s),
			calc(var(--background-l) ${e.dark?"-":"+"} 30%),
			1
		);
		--pager-color: hsla(
			var(--background-h),
			var(--background-s),
			calc(var(--background-l) ${e.dark?"-":"+"} 20%),
			1
		);
		--pager-background-color: hsla(
			var(--background-h),
			var(--background-s),
			calc(var(--background-l) ${e.dark?"+":"-"} 5%),
			1
		);
		--pager-color-active: hsla(
			var(--background-h),
			var(--background-s),
			calc(var(--background-l) ${e.dark?"-":"+"} 10%),
			1
		);
	`};

	position: absolute;
	z-index: 2;
	top: 50%;
	margin: 0 0.5rem;
	left: 0;
	transform: translateY(-50%);
	background-color: var(--pager-background-color);
	border-radius: calc(var(--pager-size) / 2);
`,p=l.d.div`
	position: absolute;
	z-index: 1;
	top: calc((var(--pager-size) / 2) + var(--pager-gap));
	left: calc(0.5rem + (var(--pager-size) - var(--marker-width)) / 2);
	width: var(--marker-width);
	background: var(--marker-color);
	visibility: visible;

	&::before,
	&::after {
		position: absolute;
		content: "";
		display: block;
		height: calc(var(--marker-width) / 2);
		width: var(--marker-width);
		left: 0;
		background: inherit;
	}

	&::before {
		bottom: 100%;
		border-radius: calc(var(--marker-width) / 2) calc(var(--marker-width) / 2) 0 0;
	}

	&::after {
		top: 100%;
		border-radius: 0 0 calc(var(--marker-width) / 2) calc(var(--marker-width) / 2);
	}
`,d=e=>n.a.createElement(p,{style:{height:`calc(${e.progress} * (var(--pager-gap) * 2 + var(--pager-size)) + ${e.page} * (var(--pager-gap) * 2 + var(--pager-size)))`}}),m=l.d.svg.attrs({viewBox:"0 0 24 24"})`
	width: 1.5rem;
	height: 1.5rem;
	fill: currentColor;
`,h=e=>{const r=(e,r)=>{window.location.hash=e;const t=document.getElementById(e);r.focus(),t.scrollIntoView(!0)};return n.a.createElement(u,{dark:e.dark},n.a.createElement(i,null,n.a.createElement(d,{progress:e.progress,page:e.page}),Array(e.pages).fill(Boolean).map((t,a)=>{const l=`${e.prefix}/${a+1}`;return n.a.createElement(c,{key:l,active:a<=e.page,selected:a===e.page&&1>e.progress,href:`#${l}`,onClick:e=>{e.preventDefault(),r(l,e.target)}},e.showLabels&&a+1)}),n.a.createElement(c,{href:`#${e.prefix}/${e.pages+1}`,selected:e.page===e.pages-1&&1===e.progress,active:e.page===e.pages-1&&1===e.progress,onClick:t=>{t.preventDefault(),r(`${e.prefix}/${e.pages+1}`,t.target)}},e.showLabels&&n.a.createElement(m,null,n.a.createElement("path",{d:"M4,5V19L11,12M18,5V19H20V5M11,5V19L18,12"})))))},g=e=>e.useContext?n.a.createElement(o.a,null,r=>n.a.createElement(h,{dark:e.dark,page:r.page,pages:r.pages,prefix:r.anchors,progress:r.progress,showLabels:e.showLabels})):(s(e.page,"number"),s(e.pages,"number"),s(e.progress,"number"),s(e.prefix,"string"),n.a.createElement(h,{dark:e.dark,page:e.page,pages:e.pages,prefix:e.prefix,progress:e.progress,showLabels:e.showLabels}))},,,function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.ScrollProvider=r.ScrollConsumer=r.DEFAULT_CONTEXT=void 0;var a=t(0);const n={page:0,progress:0,pages:0};r.DEFAULT_CONTEXT=n;const l=(0,a.createContext)(n),o=l.Consumer,s=l.Provider;r.ScrollProvider=s,r.ScrollConsumer=o},function(e,r,t){"use strict";(function(e){var a=t(6),n=(t.n(a),t(0)),l=t.n(n),o=t(30),s=t(22),c=t(1),i=t(23),u=t(21),p=t(18);r.a=Object(a.hot)(e)(class extends l.a.Component{render(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,null),l.a.createElement(c.i,null,l.a.createElement(c.n,null,"React Overscroll"),l.a.createElement(u.a,null)),l.a.createElement(c.l,null,l.a.createElement(s.a,null),l.a.createElement(o.a,null),l.a.createElement(i.a,null)),l.a.createElement(c.h,null,"Crafted with 💖 by ",l.a.createElement(c.k,{href:"https://github.com/pixelass"},"Gregor Adams")))}})}).call(this,t(41)(e))},function(e,r,t){"use strict";t.d(r,"a",function(){return a});const a=t(2).b`
	body {
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
		background: hsl(0, 0%, 10%);
		color: white;
	}
	* {
		box-sizing: border-box;
	}
`},,,function(e,r,t){"use strict";t.d(r,"a",function(){return o});var a=t(0),n=t.n(a);const l=t(2).d.svg.attrs({"aria-hidden":"true",viewBox:"0 0 250 250"})`
	position: absolute;
	right: 0;
	top: 0;
	height: 5rem;
	color: #fff;

	a {
		color: currentColor;
		text-decoration: none;
	}
`,o=()=>n.a.createElement(l,null,n.a.createElement("a",{href:"https://github.com/pixelass/react-over-scroll","aria-label":"View source on GitHub"},n.a.createElement("path",{fill:"#3F51B5",d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),n.a.createElement("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}),n.a.createElement("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"})))},function(e,r,t){"use strict";t.d(r,"a",function(){return o});var a=t(0),n=t.n(a),l=t(1);const o=()=>n.a.createElement(n.a.Fragment,null,n.a.createElement(l.c,null,n.a.createElement(l.d,null,"OverScroll is a slide-show or content-slider, call it what you want. It is a full-screen/viewport element that snaps into fixed mode when it reaches the viewports top edge. Scrolling is now translated to paging, switching the content each time a predefined scroll amount has been reached."),n.a.createElement(l.d,null,"During an active slide two dynamic values are available"," ",n.a.createElement(l.a,null,"progress: number")," and ",n.a.createElement(l.a,null,"page: number"),"."),n.a.createElement(l.j,null,"Accessibility"),n.a.createElement(l.d,null,"OverScroll relies on default browser behavior and page scroll. It is therefore easy to navigate the page with any input device e.g. trackpad, mouse or keyboard. Any device that or even software that scrolls the page is able to control OverScroll."),n.a.createElement(l.j,null,"Configuration"),n.a.createElement(l.d,null,"You can configure OverScroll with some very basic settings."),n.a.createElement(l.f,null,n.a.createElement(l.g,null,n.a.createElement(l.a,null,"anchors: ?string")),n.a.createElement(l.e,null,"Anchors allow browser history and deep-links through hashes.",n.a.createElement("br",null),"You can use anchors like",n.a.createElement("br",null),n.a.createElement(l.a,null,'"works"')," to create the link format",n.a.createElement("br",null),n.a.createElement(l.a,null,'"example.com#works/1"'),n.a.createElement("br",null),"or",n.a.createElement("br",null),n.a.createElement(l.a,null,'"!/works"')," to create the link format",n.a.createElement("br",null),n.a.createElement(l.a,null,'"example.com#!/works/1"')),n.a.createElement(l.g,null,n.a.createElement(l.a,null,"factor: ?number")),n.a.createElement(l.e,null,"The factor is used to translate scrolling to progress.",n.a.createElement("br",null),"The default value ",n.a.createElement(l.a,null,"1")," will translate ",n.a.createElement(l.a,null,"100vh")," to a range from ",n.a.createElement(l.a,null,"0")," to ",n.a.createElement(l.a,null,"1")),n.a.createElement(l.g,null,n.a.createElement(l.a,null,"slides: number")),n.a.createElement(l.e,null,n.a.createElement("strong",null,"required"),n.a.createElement("br",null),"The number of pages to scroll through. Each page has its own progress scope."))))},function(e,r,t){"use strict";function a(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],0<=r.indexOf(t)||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],!(0<=r.indexOf(t))&&Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function n(){return(n=Object.assign||function(e){for(var r,t=1;t<arguments.length;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e}).apply(this,arguments)}function l(e){for(var r=1;r<arguments.length;r++){var t=null==arguments[r]?{}:arguments[r],a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.forEach(function(r){o(e,r,t[r])})}return e}function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}t.d(r,"a",function(){return R});var s=t(4),c=t(0),i=t.n(c),u=t(2),p=t(5),d=t.n(p),m=t(3),h=t(13),g=t(1),f=t(24),b=t.n(f),v=t(25),E=t.n(v),y=t(26),k=t.n(y),w=t(27),O=t.n(w),x=t(28),j=t.n(x),S=t(29),P=t.n(S);const z=u.d.p`
	height: 1rem;
	width: calc(100% * var(--progress));
	margin: 0.5rem 0;
	background: white;
	box-shadow: inset 0 0 0 2px black;
`,C=e=>i.a.createElement(i.a.Fragment,null,i.a.createElement(g.f,null,i.a.createElement(g.g,null,"Anchors:")," ",i.a.createElement(g.e,null,e.anchors||"none"),i.a.createElement(g.g,null,"Throttle:")," ",i.a.createElement(g.e,null,e.throttle||"none"),i.a.createElement(g.g,null,"Factor:")," ",i.a.createElement(g.e,null,e.factor||1),i.a.createElement(g.g,null,"Page:")," ",i.a.createElement(g.e,null,e.page+1," of ",e.pages),i.a.createElement(g.g,null,"Progress:")," ",i.a.createElement(g.e,null,e.progress.toFixed(6)),i.a.createElement(g.g,null,"Timeline:")," ",i.a.createElement(g.e,null,(e.page+e.progress).toFixed(6))),i.a.createElement("div",null,Array(e.pages).fill(Boolean).map((r,t)=>Object(p.progressable)(i.a.createElement(z,{key:t}),t>e.page?0:t<e.page?1:e.progress)))),D=e=>i.a.createElement(u.a,{theme:l({},m.b.color.green)},i.a.createElement(m.a,null,i.a.createElement(g.j,null,"Example with default settings"),i.a.createElement(C,e))),H=e=>i.a.createElement(u.a,{theme:l({},m.b.color.yellow)},i.a.createElement(m.a,null,i.a.createElement(g.j,null,"Example with easing"),i.a.createElement(C,n({},e,{progress:Object(s.a)(e.progress)})),i.a.createElement(g.d,null,"Each element can use an easing function to change the dynamics.",i.a.createElement("br",null),"To keep Overscroll simple easing is not part of the options but should instead be used where needed."))),$=e=>i.a.createElement(u.a,{theme:l({},m.b.color.orange)},i.a.createElement(m.a,null,i.a.createElement(g.j,null,"Example with throttle"),i.a.createElement(C,n({},e,{throttle:250})))),M=e=>i.a.createElement(u.a,{theme:l({},m.b.color.red)},i.a.createElement(m.a,null,i.a.createElement(g.j,null,"Example with anchors"),i.a.createElement(C,e),i.a.createElement("ul",null,Array(e.pages).fill(Boolean).map((r,t)=>i.a.createElement("li",{key:t},i.a.createElement(g.k,{href:`#${e.anchors}/${t+1}`},"Page ",t+1))),i.a.createElement("li",null,i.a.createElement(g.k,{href:`#${e.anchors}/${e.pages+1}`},"End / Skip"))))),L=e=>i.a.createElement(u.a,{theme:l({},m.b.color.purple,m.b.pagers.big)},i.a.createElement(m.a,{withPagers:!0},i.a.createElement(h.a,n({},e,{prefix:e.anchors,showLabels:!0})),i.a.createElement(g.j,null,"Example with pagers"),i.a.createElement(C,e))),_=e=>i.a.createElement(u.a,{theme:l({},m.b.color.blue,m.b.pagers.small,m.b.stroke.bold)},i.a.createElement(m.a,{withPagers:!0},i.a.createElement(h.a,n({},e,{prefix:e.anchors})),i.a.createElement(g.j,null,"Example with factor"),i.a.createElement(C,n({},e,{factor:.5})))),F=[b.a,E.a,k.a,O.a,j.a,P.a],T=u.d.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	align-items: center;
	align-content: center;
	justify-content: center;
	background-color: white;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
`,B=e=>{let{backgroundImage:r,opacity:t}=e,l=a(e,["backgroundImage","opacity"]);return i.a.createElement(T,n({},l,{style:{backgroundImage:`url(${r})`,opacity:t}}))},W={color:"#000",hue:0,lightness:"100%",markerSize:"2px",pagerGap:"2vh",pagerSize:"1.5rem",saturation:"0%",strokeWidth:"2px"},A=e=>i.a.createElement(u.a,{theme:W},i.a.createElement(m.a,{withPagers:!0},i.a.createElement(h.a,n({},e,{prefix:e.anchors,dark:!0})),i.a.createElement(B,{backgroundImage:F[e.page],opacity:1-e.progress}),i.a.createElement(B,{backgroundImage:F[e.page+1],opacity:e.progress},e.page===e.pages-1?i.a.createElement(g.j,null,"Fin!"):""))),R=()=>i.a.createElement(i.a.Fragment,null,i.a.createElement(g.c,null,i.a.createElement(g.j,null,"Examples"),i.a.createElement(g.d,null,"Scroll through the different examples to see how different settings change the behavior of the OverScroll instance."),i.a.createElement(g.d,null,"Some examples have pagers or links to allow skipping or jumping to specific pages.")),i.a.createElement(g.m,null,i.a.createElement(g.b,null,i.a.createElement(d.a,{slides:2,render:D})),i.a.createElement(g.b,null,i.a.createElement(d.a,{slides:2,render:H}))),i.a.createElement(g.m,null,i.a.createElement(g.b,null,i.a.createElement(d.a,{slides:2,render:$,throttle:250})),i.a.createElement(g.b,null,i.a.createElement(d.a,{slides:2,render:M,anchors:"!/examples/anchors"}))),i.a.createElement(g.m,null,i.a.createElement(g.b,null,i.a.createElement(d.a,{slides:2,render:L,anchors:"!/examples/pagers"})),i.a.createElement(g.b,null,i.a.createElement(d.a,{slides:4,factor:.5,render:_,anchors:"examples/factor"}))),i.a.createElement(g.m,null,i.a.createElement(g.b,null,i.a.createElement(d.a,{slides:F.length,render:A,anchors:"!/examples/slideshow"}))))},function(e,r,t){e.exports=t.p+"images/1RsSmdf.jpg"},function(e,r,t){e.exports=t.p+"images/1RI5C7h.jpg"},function(e,r,t){e.exports=t.p+"images/3WqS1Nf.jpg"},function(e,r,t){e.exports=t.p+"images/OvvqRf3.jpg"},function(e,r,t){e.exports=t.p+"images/2BsbElD.jpg"},function(e,r,t){e.exports=t.p+"images/1bmGLEm.jpg"},function(a,n,l){"use strict";function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e){for(var r=1;r<arguments.length;r++){var t=null==arguments[r]?{}:arguments[r],a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.forEach(function(r){c(e,r,t[r])})}return e}function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e){for(var r=1;r<arguments.length;r++){var t=null==arguments[r]?{}:arguments[r],a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.forEach(function(r){u(e,r,t[r])})}return e}function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var p=l(4),d=l(0),m=l.n(d),h=l(2);const g=(e,r)=>m.a.cloneElement(e,{style:function(e){for(var r=1;r<arguments.length;r++){var t=null==arguments[r]?{}:arguments[r],a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.forEach(function(r){o(e,r,t[r])})}return e}({},e.props.style||{},{"--progress":r})});var f=l(7),b=l(8),v=l.n(b);class E extends m.a.PureComponent{constructor(...e){super(...e),this.resizeHandler=void 0,this.orientationHandler=void 0,this.scrollHandler=void 0,this.trackScroll=(()=>{this.props.onScroll(window.scrollY)})}componentDidMount(){this.addHandlers()}componentDidUpdate(e){e.throttle!==this.props.throttle&&this.updateHandlers()}componentWillUnmount(){this.removeHandlers()}render(){return null}addHandlers(){const e=this.props.throttle?v()(this.trackScroll,this.props.throttle):this.trackScroll,r=v()(this.trackScroll,250);this.scrollHandler=document.addEventListener("scroll",e,{passive:!0}),this.resizeHandler=window.addEventListener("resize",r,{passive:!0}),this.orientationHandler=window.addEventListener("orientationchange",r,{passive:!0})}removeHandlers(){document.removeEventListener("scroll",this.scrollHandler),window.removeEventListener("resize",this.resizeHandler),window.removeEventListener("resize",this.orientationHandler)}updateHandlers(){this.removeHandlers(),this.addHandlers()}}const y={left:0,right:0,top:0},k=s({},y,{height:"100vh",position:"sticky"}),w=s({},y,{bottom:0,position:"absolute"});class O extends m.a.Component{constructor(...a){super(...a),this.state={counter:0,scrollOffset:0,scrollY:0},this.tracker=m.a.createRef(),this.Frame=(e=>m.a.createElement(m.a.Fragment,null,m.a.createElement(E,{onScroll:this.handleScroll,throttle:this.props.throttle}),m.a.createElement("div",{style:this.frameStyle,ref:this.tracker},this.anchors,m.a.createElement("div",{style:k},e.children)))),this.handleScroll=(a=>{if(!this.tracker||!this.tracker.current)return;let n=0,l=0;const{top:o,bottom:s}=this.tracker.current.getBoundingClientRect(),{factor:c,slides:i}=this.props,{innerHeight:u=0}=window,p=s<=u;0>=o&&!p?(n=e(0,r(i-1,t(o*(-1/c)/u))),l=e(0,r(100,-1*o%(u*c)/u/c*100))):p&&(n=i-1,l=100),this.setState({counter:n,scrollOffset:l,scrollY:a})})}static get defaultProps(){return{factor:1}}componentDidMount(){this.setState({scrollY:window.scrollY})}render(){const{render:e,children:r,anchors:t,slides:a}=this.props;if(!e&&!r)throw new TypeError("Either children need to be defined or render needs to be defined as a function");const{counter:n}=this.state,l=this.state.scrollOffset/100;switch(typeof e){case"function":return m.a.createElement(this.Frame,null,e({anchors:t,page:n,pages:a,progress:l}));default:return m.a.createElement(f.b,{value:{anchors:t,page:n,pages:a,progress:l}},m.a.createElement(this.Frame,null,m.a.createElement(f.a,null,r)))}}get frameStyle(){const{slides:e,factor:r}=this.props;return{height:`${100*e*r+100}vh`,margin:0,position:"relative"}}get anchors(){const{anchors:e,factor:r,slides:t}=this.props;if(!e)return null;const a=Array(t+1).fill(Boolean).map((t,a)=>m.a.createElement("span",{id:`${e}/${a+1}`,key:`${e}:${a+1}`,style:{display:"block",height:`${100*r}vh`}}));return m.a.createElement("div",{style:w},a)}}var x=l(3),j=l(13);l.d(n,"a",function(){return W});const S=h.d.h3`
	font-size: 2em;
	margin: 0;
	padding: 0 0 0.5em;
	font-weight: bolder;
	opacity: var(--progress);
	transform: translate3d(calc(100% - 100% * var(--progress)), 0, 0);
`,P=h.d.p`
	font-size: 1em;
	opacity: var(--progress);
	transform: translate3d(0, calc(100% - 100% * var(--progress)), 0);
`,z=h.d.svg`
	display: block;
	margin: 0 auto;
	width: 100%;
`,C=h.d.figcaption`
	font-size: 3vmin;
`,D=Object(h.d)(x.a)`
	display: flex;
	flex-direction: column;
	font-size: 3vmin;
`,H=h.d.figure`
	flex: 1;
	margin: 0;
	padding: 0;
	display: grid;
	align-items: center;
	justify-items: center;

	@media (orientation: landscape) {
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr;
		grid-gap: 3rem;
	}
	@media (orientation: portrait) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr;
		grid-gap: 1rem;
	}
`,$=(e,r,t)=>r<e?0:r>e?1:t,M=(e,r,t,a)=>({[e]:$(r,t,a)}),L=e=>m.a.createElement("g",e),_=e=>m.a.createElement(z,{viewBox:"0 0 897 452"},m.a.createElement("g",{fill:"none",fillRule:"evenodd",stroke:"#444"},m.a.createElement(L,{transform:"translate(681 55)",style:i({},M("--progress",2,e.page,Object(p.b)(e.progress)),M("--progress-2",3,e.page,Object(p.d)(e.progress)))},m.a.createElement("path",{fill:"hsla(0, 0%, 10%, calc(var(--progress-2) * 1))",strokeWidth:"2",d:"M202.986 317H12.097C5.462 317 .083 311.623.083 304.99V12.093C.083 5.46 5.461.083 12.097.083h190.889C209.622.083 215 5.46 215 12.093V304.99c0 6.633-5.378 12.01-12.014 12.01z",strokeDasharray:"1043.0570068359375 1043.0570068359375",strokeDashoffset:"calc(1043.0570068359375 + var(--progress) * 1043.0570068359375)"}),m.a.createElement("path",{fill:"hsla(200, 10%, 15%, calc(var(--progress-2) * 1))",d:"M17 32h181.999v252.917H17z",strokeDasharray:"869.8319702148438 869.8319702148438",strokeDashoffset:"calc(869.8319702148438 + var(--progress) * 869.8319702148438)"}),m.a.createElement("circle",{cx:"108.021",cy:"300.021",r:"8.021",fill:"hsla(0, 0%, 10%, calc(var(--progress-2) * 1))",strokeDasharray:"50.072696685791016 50.072696685791016",strokeDashoffset:"calc(50.072696685791016 + var(--progress) * 50.072696685791016)"}),m.a.createElement("circle",{cx:"106.99",cy:"16.99",r:"2.99",fill:"hsla(0, 0%, 15%, calc(var(--progress-2) * 1))",strokeDasharray:"18.307579040527344 18.307579040527344",strokeDashoffset:"calc(18.307579040527344 + var(--progress) * 18.307579040527344)"})),m.a.createElement(L,{transform:"translate(1 1)",style:i({},M("--progress",3,e.page,Object(p.b)(e.progress)),M("--progress-2",4,e.page,Object(p.d)(e.progress)))},m.a.createElement("path",{fill:"hsla(0, 0%, 10%, calc(var(--progress-2) * 1))",strokeWidth:"2",d:"M594 0H98C84.504 0 73 11.074 73 24.79v326.238h546V24.79C619 11.073 607.537 0 594 0z",strokeDasharray:"1772.58349609375 1772.58349609375",strokeDashoffset:"calc(1772.58349609375 + var(--progress) * 1772.58349609375)"}),m.a.createElement("circle",{cx:"347",cy:"19",r:"4",fill:"hsla(0, 0%, 15%, calc(var(--progress-2) * 1))",strokeWidth:"2",strokeDasharray:"24.491750717163086 24.491750717163086",strokeDashoffset:"calc(24.491750717163086 + var(--progress) * 24.491750717163086)"}),m.a.createElement("path",{fill:"hsla(0, 0%, 80%, calc(var(--progress-2) * 1))",strokeWidth:"2",d:"M640.812 382.01H51.288C20.641 382.01 0 371.494 0 367.022v-13.594C0 352.084 1.335 351 2.995 351h686.109c1.662 0 2.999 1.084 2.999 2.428v14.129c-.007 3.535-15.991 14.453-51.291 14.453z",strokeDasharray:"1422.086181640625 1422.086181640625",strokeDashoffset:"calc(1422.086181640625 + var(--progress) * 1422.086181640625)"}),m.a.createElement("path",{strokeLinecap:"square",d:"M.5 365.5h689.743",strokeDasharray:"689.7429809570312 689.7429809570312",strokeDashoffset:"calc(689.7429809570312 + var(--progress) * 689.7429809570312)"}),m.a.createElement("path",{fill:"hsla(200, 10%, 15%, calc(var(--progress-2) * 1))",d:"M95 39h501.074v292.009H95z",strokeDasharray:"1586.166015625 1586.166015625",strokeDashoffset:"calc(1586.166015625 + var(--progress) * 1586.166015625)"}),m.a.createElement("path",{fill:"hsla(0, 0%, 60%, calc(var(--progress-2) * 1))",d:"M421 352v3.087c0 2.201-4.333 2.866-7.613 2.866H278.815c-3.45 0-7.815-.664-7.815-2.866V352",strokeDasharray:"158.46690368652344 158.46690368652344",strokeDashoffset:"calc(158.46690368652344 + var(--progress) * 158.46690368652344)"})),m.a.createElement(L,{transform:"translate(576 177)",style:i({},M("--progress",0,e.page,Object(p.b)(e.progress)),M("--progress-2",1,e.page,Object(p.d)(e.progress)))},m.a.createElement("path",{fill:"hsla(0, 0%, 10%, calc(var(--progress-2) * 1))",strokeWidth:"2",d:"M130 257.964c0 8.833-7.191 15.992-16.062 15.992H16.063c-8.871 0-16.062-7.159-16.062-15.992V16.073C.001 7.24 7.192.081 16.063.081h97.875C122.809.081 130 7.24 130 16.073v241.891z",strokeDasharray:"780.2479248046875 780.2479248046875",strokeDashoffset:"calc(780.2479248046875 + var(--progress) * 780.2479248046875)"}),m.a.createElement("path",{fill:"hsla(200, 10%, 15%, calc(var(--progress-2) * 1))",d:"M9 36h111.93v199.084H9z",strokeDasharray:"622.0280151367188 622.0280151367188",strokeDashoffset:"calc(622.0280151367188 + var(--progress) * 622.0280151367188)"}),m.a.createElement("path",{fill:"hsla(0, 0%, 0%, calc(var(--progress-2) * 1))",d:"M77 25.746c0 .635-.439 1.147-.98 1.147H55.918c-.542 0-.98-.513-.98-1.147v-2.58c0-.635.439-1.147.98-1.147H76.02c.541 0 .98.513.98 1.147v2.58z",strokeDasharray:"52.05827331542969 52.05827331542969",strokeDashoffset:"calc(52.05827331542969 + var(--progress) * 52.05827331542969)"}),m.a.createElement("circle",{cx:"66",cy:"12",r:"3",fill:"hsla(0, 0%, 15%, calc(var(--progress-2) * 1))",strokeDasharray:"18.36880111694336 18.36880111694336",strokeDashoffset:"calc(18.36880111694336 + var(--progress) * 18.36880111694336)"}),m.a.createElement("ellipse",{cx:"65.04",cy:"254.001",fill:"hsla(0, 0%, 10%, calc(var(--progress-2) * 1))",rx:"10.04",ry:"10.001",strokeDasharray:"62.5550422668457 62.5550422668457",strokeDashoffset:"calc(62.5550422668457 + var(--progress) * 62.5550422668457)"})))),F=e=>m.a.createElement(H,null,m.a.createElement(_,{progress:e.progress,page:e.page}),m.a.createElement(C,null,g(m.a.createElement(S,null,"Built for all screen sizes"),$(4,e.page,Object(p.d)(e.progress))),g(m.a.createElement(P,null,"React Overscroll relies on the viewport and therefore ensures responsive behavior.",m.a.createElement("br",null),"Add your own logic to define how to display the content on different screen sizes"),$(3,e.page,Object(p.c)(e.progress))))),T={color:"white",hue:0,lightness:"10%",markerSize:"2px",pagerGap:"2vh",pagerSize:"1.5rem",saturation:"0%",strokeWidth:"2px"},B=["React Overscroll","Mobile devices","Tablets","Desktops","Built for all devices"],W=()=>m.a.createElement(O,{slides:5,anchors:"!/device-support"},e=>m.a.createElement(h.a,{theme:T},m.a.createElement(D,{withPagers:!0},m.a.createElement(j.a,{useContext:!0}),g(m.a.createElement(S,null,B[e.page]),1-e.progress),m.a.createElement(F,{progress:e.progress,page:e.page}))))},,,function(e,r,t){e.exports=t(34)},function(e,r,t){"use strict";t.r(r);var a=t(6),n=(t.n(a),t(0)),l=t.n(n),o=t(17);Object(a.render)(l.a.createElement(o.a,null),a.renderRoot)},,,,,,,,,,,,,,function(a,n,l){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function s(e){for(var r=1;r<arguments.length;r++){var t=null==arguments[r]?{}:arguments[r],a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.forEach(function(r){c(e,r,t[r])})}return e}function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(l(0)),u=l(16),p=o(l(49));const d={left:0,right:0,top:0},m=s({},d,{height:"100vh",position:"sticky"}),h=s({},d,{bottom:0,position:"absolute"});n.default=class extends i.default.Component{constructor(){super(...arguments),this.state={counter:0,scrollOffset:0,scrollY:0},this.tracker=i.default.createRef(),this.Frame=(e=>i.default.createElement(i.default.Fragment,null,i.default.createElement(p.default,{onScroll:this.handleScroll,throttle:this.props.throttle}),i.default.createElement("div",{style:this.frameStyle,ref:this.tracker},this.anchors,i.default.createElement("div",{style:m},e.children)))),this.handleScroll=(a=>{if(!this.tracker||!this.tracker.current)return;let n=0,l=0;const o=this.tracker.current.getBoundingClientRect(),s=o.top,c=o.bottom,i=this.props,u=i.factor,p=i.slides,d=window.innerHeight,m=void 0===d?0:d,h=c<=m;0>=s&&!h?(n=e(0,r(p-1,t(s*(-1/u)/m))),l=e(0,r(100,-1*s%(m*u)/m/u*100))):h&&(n=p-1,l=100),this.setState({counter:n,scrollOffset:l,scrollY:a})})}static get defaultProps(){return{factor:1}}componentDidMount(){this.setState({scrollY:window.scrollY})}render(){const e=this.props,r=e.render,t=e.children,a=e.anchors,n=e.slides;if(!r&&!t)throw new TypeError("Either children need to be defined or render needs to be defined as a function");const l=this.state.counter,o=this.state.scrollOffset/100;switch(typeof r){case"function":return i.default.createElement(this.Frame,null,r({anchors:a,page:l,pages:n,progress:o}));default:return i.default.createElement(u.ScrollProvider,{value:{anchors:a,page:l,pages:n,progress:o}},i.default.createElement(this.Frame,null,i.default.createElement(u.ScrollConsumer,null,t)))}}get frameStyle(){const e=this.props;return{height:`${100*e.slides*e.factor+100}vh`,margin:0,position:"relative"}}get anchors(){const e=this.props,r=e.anchors,t=e.factor,a=e.slides;if(!r)return null;const n=Array(a+1).fill(Boolean).map((e,a)=>i.default.createElement("span",{id:`${r}/${a+1}`,key:`${r}:${a+1}`,style:{display:"block",height:`${100*t}vh`}}));return i.default.createElement("div",{style:h},n)}}},function(e,r,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=a(t(8)),l=a(t(0));r.default=class extends l.default.PureComponent{constructor(){super(...arguments),this.resizeHandler=void 0,this.orientationHandler=void 0,this.scrollHandler=void 0,this.trackScroll=(()=>{this.props.onScroll(window.scrollY)})}componentDidMount(){this.addHandlers()}componentDidUpdate(e){e.throttle!==this.props.throttle&&this.updateHandlers()}componentWillUnmount(){this.removeHandlers()}render(){return null}addHandlers(){const e=this.props.throttle?(0,n.default)(this.trackScroll,this.props.throttle):this.trackScroll,r=(0,n.default)(this.trackScroll,250);this.scrollHandler=document.addEventListener("scroll",e,{passive:!0}),this.resizeHandler=window.addEventListener("resize",r,{passive:!0}),this.orientationHandler=window.addEventListener("orientationchange",r,{passive:!0})}removeHandlers(){document.removeEventListener("scroll",this.scrollHandler),window.removeEventListener("resize",this.resizeHandler),window.removeEventListener("resize",this.orientationHandler)}updateHandlers(){this.removeHandlers(),this.addHandlers()}}},function(e,r,t){"use strict";function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}Object.defineProperty(r,"__esModule",{value:!0}),r.progressable=void 0;var n=function(e){return e&&e.__esModule?e:{default:e}}(t(0));r.progressable=((e,r)=>n.default.cloneElement(e,{style:function(e){for(var r=1;r<arguments.length;r++){var t=null==arguments[r]?{}:arguments[r],n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(r){a(e,r,t[r])})}return e}({},e.props.style||{},{"--progress":r})}))}])});