(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33612140"],{"0310":function(t,e,o){},"1fe9":function(t,e,o){"use strict";o("0310")},8703:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"cs-p"},[o("el-table",{attrs:{data:t.currentTableData}},[o("el-table-column",{attrs:{label:"商品信息","min-width":"380"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-image",{staticClass:"goods-image cs-cp cs-ml-10",attrs:{src:t._f("getPreviewUrl")(e.row.get_order_goods.goods_image,"goods_image_x80"),fit:"contain",lazy:""},on:{click:function(o){return t.handleView(e.row.get_order_goods.goods_id)}}}),o("div",{staticClass:"goods-info cs-ml"},[o("p",[o("span",{staticClass:"link",attrs:{title:e.row.get_order_goods.goods_name},on:{click:function(o){return t.handleView(e.row.get_order_goods.goods_id)}}},[t._v(t._s(e.row.get_order_goods.goods_name))])]),o("p",[o("span",{staticClass:"comment-son",attrs:{title:e.row.get_order_goods.key_value}},[t._v(t._s(e.row.get_order_goods.key_value))])]),o("p",[o("el-tag",{attrs:{type:t.statusMap[e.row.status].type,effect:"plain",size:"mini"}},[t._v(" "+t._s(t.statusMap[e.row.status].text)+" ")]),o("el-tag",{staticStyle:{margin:"0 10px"},style:t.auth.top||t.auth.remove_top?"cursor: pointer;":"",attrs:{size:"mini",type:t.topMap[e.row.is_top].type,effect:t.auth.top||t.auth.remove_top?"light":"plain"},nativeOn:{click:function(o){return t.handleTop(e.$index)}}},[t._v(" "+t._s(t.topMap[e.row.is_top].text)+" ")]),o("el-tag",{style:t.auth.show||t.auth.hide?"cursor: pointer;":"",attrs:{size:"mini",type:t.showMap[e.row.is_show].type,effect:t.auth.show||t.auth.hide?"light":"plain"},nativeOn:{click:function(o){return t.handleShow(e.$index)}}},[t._v(" "+t._s(t.showMap[e.row.is_show].text)+" ")])],1)])]}}])}),o("el-table-column",{attrs:{label:"商品评价","min-width":"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("div",{staticClass:"goods-comment"},[o("p",[t._v("[主评] "),o("span",{staticClass:"comment-son"},[t._v(t._s(e.row.create_time))])]),o("p",[o("span",{class:{link:t.auth.detail,"no-content":!e.row.content},on:{click:function(o){return t.openCommentDetail(e.row.goods_comment_id)}}},[t._v(t._s(e.row.content||"无评价内容"))])]),o("div",{staticStyle:{"line-height":"0"}},t._l(e.row.image,(function(n,s){return o("el-image",{key:s,staticClass:"comment_thumb",attrs:{src:t._f("getPreviewUrl")(n,"comment_thumb_x40"),lazy:!0,fit:"cover"},on:{click:function(o){return o.stopPropagation(),t.$preview(e.row.image,s)}}})})),1)]),e.row.get_addition?o("div",{staticClass:"goods-comment"},[o("p",[t._v("[追评] "),o("span",{staticClass:"comment-son"},[t._v(t._s(e.row.get_addition.create_time))])]),o("p",[o("span",{class:{link:t.auth.detail},on:{click:function(o){return t.openCommentDetail(e.row.goods_comment_id)}}},[t._v(t._s(e.row.get_addition.content))])]),o("div",{staticStyle:{"line-height":"0"}},t._l(e.row.get_addition.image,(function(n,s){return o("el-image",{key:s,staticClass:"comment_thumb",attrs:{src:t._f("getPreviewUrl")(n,"comment_thumb_x40"),lazy:!0,fit:"cover"},on:{click:function(o){return o.stopPropagation(),t.$preview(e.row.get_addition.image,s)}}})})),1)]):t._e()]}}])}),o("el-table-column",{attrs:{width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("div",{staticClass:"goods_user"},[o("p",[o("el-popover",{attrs:{trigger:"hover",placement:"top"}},[o("span",[t._v(t._s(e.row.ip_address_region))]),o("span",{attrs:{slot:"reference"},slot:"reference"},[t._v(t._s(e.row.get_user.username))])]),e.row.get_user.level_icon?o("el-image",{staticClass:"level-icon",attrs:{src:e.row.get_user.level_icon,fit:"fill"}},[o("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[o("i",{staticClass:"el-icon-picture-outline"})])]):t._e()],1),o("p",[o("span",{staticClass:"comment-son link",on:{click:function(o){return t.handleOrder(e.row.order_no)}}},[t._v(t._s(e.row.order_no))])]),o("el-rate",{attrs:{disabled:!0,colors:["#99A9BF","#F7BA2A","#FF9900"]},model:{value:e.row.score,callback:function(o){t.$set(e.row,"score",o)},expression:"scope.row.score"}})],1)]}}])}),o("el-table-column",{attrs:{label:"操作",align:"center","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[!e.row.status&&t.auth.ignore?o("el-button",{attrs:{size:"small",type:"text"},on:{click:function(o){return t.handleIgnore(e.$index)}}},[t._v("忽略")]):t._e(),t.auth.del?o("el-button",{attrs:{size:"small",type:"text"},on:{click:function(o){return t.handleDelete(e.$index)}}},[t._v("删除")]):t._e()]}}])})],1)],1)},s=[],i=(o("a434"),o("5530")),a=o("ca00"),r=o("5880"),c=o("f663"),l={props:{tableData:{default:function(){return[]}}},data:function(){return{srcList:[null],currentTableData:[],auth:{ignore:!1,show:!1,hide:!1,top:!1,remove_top:!1,del:!1,detail:!1},statusMap:{0:{text:"待处理",type:"warning"},1:{text:"已处理",type:"success"}},topMap:{0:{text:"普通",type:"info"},1:{text:"置顶",type:"warning"},2:{text:"...",type:"info"}},showMap:{0:{text:"隐藏",type:"danger"},1:{text:"显示",type:"success"},2:{text:"...",type:"info"}}}},filters:{getPreviewUrl:function(t,e){return t&&(t.source||t)?a["a"].getImageCodeUrl(t.source||t,e):""}},watch:{tableData:{handler:function(t){this.currentTableData=t},immediate:!0}},activated:function(){this.updateChange({name:"goods-opinion-comment",source:this.currentTableData,key:"goods_comment_id"})},mounted:function(){this._validationAuth()},methods:Object(i["a"])(Object(i["a"])({},Object(r["mapActions"])("careyshop/update",["updateChange"])),{},{_validationAuth:function(){this.auth.ignore=this.$permission("/goods/opinion/comment/ignore"),this.auth.show=this.$permission("/goods/opinion/comment/show"),this.auth.hide=this.$permission("/goods/opinion/comment/hide"),this.auth.top=this.$permission("/goods/opinion/comment/top"),this.auth.remove_top=this.$permission("/goods/opinion/comment/remove_top"),this.auth.del=this.$permission("/goods/opinion/comment/del"),this.auth.detail=this.$permission("/goods/opinion/comment/detail")},handleIgnore:function(t){var e=this;this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){Object(c["f"])([e.currentTableData[t].goods_comment_id],1).then((function(){e.currentTableData[t].status=1,e.$message.success("操作成功")}))})).catch((function(){}))},handleDelete:function(t){var e=this;this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){Object(c["a"])(e.currentTableData[t].goods_comment_id).then((function(){e.currentTableData.splice(t,1),e.currentTableData.length<=0&&e.$emit("refresh",!0),e.$message.success("操作成功")}))})).catch((function(){}))},openCommentDetail:function(t){this.auth.detail&&this.$router.push({name:"goods-opinion-comment-detail",params:{goods_comment_id:t}})},handleTop:function(t){var e=this,o=this.currentTableData[t],n=o.is_top,s=n?0:1;n>1||(0!==s||this.auth.remove_top)&&(1!==s||this.auth.top)&&(o.is_top=2,Object(c["g"])([o.goods_comment_id],s).then((function(){o.is_top=s,e.$message.success("操作成功")})).catch((function(){o.is_top=n})))},handleShow:function(t){var e=this,o=this.currentTableData[t],n=o.is_show,s=n?0:1;n>1||(0!==s||this.auth.hide)&&(1!==s||this.auth.show)&&(o.is_show=2,Object(c["e"])([o.goods_comment_id],s).then((function(){o.is_show=s,e.$message.success("操作成功")})).catch((function(){o.is_show=n})))},handleView:function(t){this.$router.push({name:"goods-admin-view",params:{goods_id:t}})},handleOrder:function(t){this.$router.push({name:"order-admin-info",params:{order_no:t}})}})},u=l,d=(o("1fe9"),o("2877")),h=Object(d["a"])(u,n,s,!1,null,"ab1371de",null);e["default"]=h.exports}}]);