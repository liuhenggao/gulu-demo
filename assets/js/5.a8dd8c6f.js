(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{407:function(t,e,s){},408:function(t,e,s){},409:function(t,e,s){},410:function(t,e,s){},411:function(t,e,s){},412:function(t,e,s){},455:function(t,e,s){"use strict";var n=s(407);s.n(n).a},456:function(t,e,s){"use strict";var n=s(408);s.n(n).a},457:function(t,e,s){"use strict";var n=s(409);s.n(n).a},458:function(t,e,s){"use strict";var n=s(410);s.n(n).a},459:function(t,e,s){"use strict";var n=s(411);s.n(n).a},460:function(t,e,s){"use strict";var n=s(412);s.n(n).a},466:function(t,e,s){"use strict";s.r(e);s(113),s(82),s(114);var n={name:"g-layout",data:function(){return{hasSider:!1}},mounted:function(){var t=this;this.$children.forEach((function(e){"g-sider"===e.$options.name&&(t.hasSider=!0)}))}},o=(s(455),s(54)),i=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:{hasSider:this.hasSider}},[this._t("default")],2)}),[],!1,null,"78e3ad66",null).exports,a={name:"g-sider",props:{width:{type:String}},mounted:function(){this.$refs.sider.style.width=this.width}},r=(s(456),Object(o.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"sider",staticClass:"sider"},[this._t("default")],2)}),[],!1,null,"29b7e68f",null).exports),h={name:"g-header",props:{height:{type:String}},mounted:function(){this.$refs.header.style.height=this.height}},c=(s(457),Object(o.a)(h,(function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"header",staticClass:"header"},[this._t("default")],2)}),[],!1,null,"01bfdc8c",null).exports),d={name:"g-content",props:{height:String},mounted:function(){this.$refs.content.style.height=this.height}},l=(s(458),Object(o.a)(d,(function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"content",staticClass:"content"},[this._t("default")],2)}),[],!1,null,"dd1930d8",null).exports),g={name:"g-footer",props:{height:{type:String}},mounted:function(){this.$refs.footer.style.height=this.height}},u=(s(459),{components:{"g-layout":i,"g-header":c,"g-content":l,"g-footer":Object(o.a)(g,(function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"footer",staticClass:"footer"},[this._t("default")],2)}),[],!1,null,"21d8e7cc",null).exports,"g-sider":r},data:function(){return{code1:'\n      <g-layout style=" height: 250px">\n        <g-header height="50px" class="demo2">header</g-header>\n        <g-content height="300px" class="demo3">content</g-content>\n        <g-footer height="50px" class="demo4">footer</g-footer>\n      </g-layout>',code2:'\n      <g-layout style=" height: 250px">\n        <g-header height="50px" class="demo2">header</g-header>\n        <g-layout>\n          <g-sider width="100px" class="demo1">sider</g-sider>\n          <g-content class="demo3">content</g-content>\n        </g-layout>\n        <g-footer height="50px" class="demo4">footer</g-footer>\n      </g-layout>',code3:'\n      <g-layout style=" height: 300px">\n        <g-sider width="100px" class="demo1">sider</g-sider>\n        <g-layout>\n          <g-header height="50px" class="demo2">header</g-header>\n          <g-content height="300px" class="demo3">content</g-content>\n          <g-footer height="50px" class="demo4">footer</g-footer>\n        </g-layout>\n      </g-layout>'}}}),f=(s(460),Object(o.a)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"layout"},[s("h4",[t._v("预览：")]),t._v(" "),s("div",[s("g-layout",{staticStyle:{height:"250px"}},[s("g-header",{staticClass:"demo2",attrs:{height:"50px"}},[t._v("header")]),t._v(" "),s("g-content",{staticClass:"demo3",attrs:{height:"300px"}},[t._v("content")]),t._v(" "),s("g-footer",{staticClass:"demo4",attrs:{height:"50px"}},[t._v("footer")])],1)],1),t._v(" "),s("h4",[t._v("代码：")]),t._v(" "),s("pre",[t._v("        "),s("code",[t._v(t._s(t.code1))]),t._v("\n  ")]),t._v(" "),s("h4",[t._v("预览：")]),t._v(" "),s("div",[s("g-layout",{staticStyle:{height:"250px"}},[s("g-header",{staticClass:"demo2",attrs:{height:"50px"}},[t._v("header")]),t._v(" "),s("g-layout",[s("g-sider",{staticClass:"demo1",attrs:{width:"100px"}},[t._v("sider")]),t._v(" "),s("g-content",{staticClass:"demo3"},[t._v("content")])],1),t._v(" "),s("g-footer",{staticClass:"demo4",attrs:{height:"50px"}},[t._v("footer")])],1)],1),t._v(" "),s("h4",[t._v("代码：")]),t._v(" "),s("pre",[t._v("        "),s("code",[t._v(t._s(t.code2))]),t._v("\n  ")]),t._v(" "),s("h4",[t._v("预览：")]),t._v(" "),s("div",[s("g-layout",{staticStyle:{height:"300px"}},[s("g-sider",{staticClass:"demo1",attrs:{width:"100px"}},[t._v("sider")]),t._v(" "),s("g-layout",[s("g-header",{staticClass:"demo2",attrs:{height:"50px"}},[t._v("header")]),t._v(" "),s("g-content",{staticClass:"demo3",attrs:{height:"300px"}},[t._v("content")]),t._v(" "),s("g-footer",{staticClass:"demo4",attrs:{height:"50px"}},[t._v("footer")])],1)],1)],1),t._v(" "),s("h4",[t._v("代码：")]),t._v(" "),s("pre",[t._v("        "),s("code",[t._v(t._s(t.code3))]),t._v("\n  ")])])}),[],!1,null,"90092738",null));e.default=f.exports}}]);