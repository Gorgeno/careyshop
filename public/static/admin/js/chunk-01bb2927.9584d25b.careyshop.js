(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01bb2927"],{"0ee9":function(t,e,a){},"1a19":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"e",(function(){return s})),a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return d})),a.d(e,"d",(function(){return u})),a.d(e,"g",(function(){return l})),a.d(e,"f",(function(){return h}));var r=a("5530"),i=a("bc07"),c="/v1/article";function n(t){return Object(i["a"])({url:c,method:"post",data:Object(r["a"])({method:"add.article.item"},t)})}function s(t){return Object(i["a"])({url:c,method:"post",data:Object(r["a"])({method:"set.article.item"},t)})}function o(t){return Object(i["a"])({url:c,method:"post",data:{method:"del.article.list",article_id:t}})}function d(t){return Object(i["a"])({url:c,method:"post",data:{method:"get.article.item",article_id:t}})}function u(t){return Object(i["a"])({url:c,method:"post",data:Object(r["a"])({method:"get.article.list"},t)})}function l(t,e){return Object(i["a"])({url:c,method:"post",data:{method:"set.article.top",article_id:t,is_top:e}})}function h(t,e){return Object(i["a"])({url:c,method:"post",data:{method:"set.article.status",article_id:t,status:e}})}},"462d":function(t,e,a){"use strict";a("0ee9")},f9cd:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("cs-container",[a("div",{staticClass:"cs-p"},[a("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("h2",[t._v(t._s(t.article.title))]),a("span",[t._v("最后编辑："+t._s(t.article.update_time))]),a("span",[t._v("来源："),a("a",{attrs:{href:t.article.source_url,target:"_blank"}},[t._v(t._s(t.article.source))])]),a("span",[t._v("游览量："+t._s(t.article.page_views))])]),a("div",{staticClass:"mce-content-body",domProps:{innerHTML:t._s(t.article.content)}})])],1)])},i=[],c=(a("a9e3"),a("1a19")),n={props:{article_id:{type:[String,Number],required:!0}},data:function(){return{article:{}}},watch:{article_id:{handler:function(){this.getArticleData()},immediate:!0}},methods:{resetArticleData:function(){this.article={}},getArticleData:function(){var t=this;this.resetArticleData(),Object(c["c"])(this.article_id).then((function(e){t.article=e.data||{}}))}}},s=n,o=(a("462d"),a("2877")),d=Object(o["a"])(s,r,i,!1,null,"750a17d1",null);e["default"]=d.exports}}]);