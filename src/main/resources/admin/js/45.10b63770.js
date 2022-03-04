"use strict";(self["webpackChunkhalo_admin"]=self["webpackChunkhalo_admin"]||[]).push([[45],{3045:function(e,t,a){a.d(t,{Z:function(){return S}});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{afterClose:e.onClosed,bodyStyle:{padding:0},maskClosable:!1,width:680,destroyOnClose:""},scopedSlots:e._u([{key:"title",fn:function(){return[e._v(" "+e._s(e.modalTitle)+" "),e.loading?a("a-icon",{attrs:{type:"loading"}}):e._e()]},proxy:!0},{key:"footer",fn:function(){return[e._t("extraFooter"),e.draftSaveVisible?a("ReactiveButton",{attrs:{errored:e.form.draftSaveErrored,loading:e.form.draftSaving,text:(e.hasId?"转为":"保存")+"草稿",erroredText:"保存失败",loadedText:"保存成功",type:"danger"},on:{callback:function(t){return e.handleSavedCallback()},click:function(t){return e.handleSaveDraft()}}}):e._e(),e.publishVisible?a("ReactiveButton",{attrs:{errored:e.form.publishErrored,loading:e.form.publishing,erroredText:"发布失败",loadedText:"发布成功",text:"转为发布"},on:{callback:function(t){return e.handleSavedCallback()},click:function(t){return e.handlePublish()}}}):e._e(),a("ReactiveButton",{attrs:{errored:e.form.saveErrored,erroredText:(e.hasId?"保存":"发布")+"失败",loadedText:(e.hasId?"保存":"发布")+"成功",loading:e.form.saving,text:e.hasId?"保存":"发布"},on:{callback:function(t){return e.handleSavedCallback()},click:function(t){return e.handleSave()}}}),a("a-button",{attrs:{disabled:e.loading},on:{click:function(t){e.modalVisible=!1}}},[e._v("关闭")])]},proxy:!0}],null,!0),model:{value:e.modalVisible,callback:function(t){e.modalVisible=t},expression:"modalVisible"}},[a("div",{staticClass:"card-container"},[a("a-tabs",{attrs:{type:"card"}},[a("a-tab-pane",{key:"normal",attrs:{tab:"常规"}},[a("a-form",{attrs:{"label-col":{span:4},"wrapper-col":{span:20},labelAlign:"left"}},[a("a-form-item",{attrs:{label:"页面标题"}},[a("a-input",{model:{value:e.form.model.title,callback:function(t){e.$set(e.form.model,"title",t)},expression:"form.model.title"}})],1),a("a-form-item",{attrs:{help:e.fullPath,label:"页面别名"}},[a("a-input",{scopedSlots:e._u([{key:"addonAfter",fn:function(){return[a("a-popconfirm",{attrs:{"cancel-text":"取消","ok-text":"确定",placement:"left",title:"是否确定根据标题重新生成别名？"},on:{confirm:e.handleGenerateSlug}},[a("a-icon",{staticClass:"cursor-pointer",attrs:{type:"sync"}})],1)]},proxy:!0}]),model:{value:e.form.model.slug,callback:function(t){e.$set(e.form.model,"slug",t)},expression:"form.model.slug"}})],1),a("a-form-item",{attrs:{label:"摘要"}},[a("a-input",{attrs:{autoSize:{minRows:5},placeholder:"如不填写，会从页面中自动截取",type:"textarea"},model:{value:e.form.model.summary,callback:function(t){e.$set(e.form.model,"summary",t)},expression:"form.model.summary"}})],1)],1)],1),a("a-tab-pane",{key:"advanced",attrs:{tab:"高级"}},[a("a-form",{attrs:{"label-col":{span:4},"wrapper-col":{span:20},labelAlign:"left"}},[a("a-form-item",{attrs:{label:"禁止评论"}},[a("a-switch",{model:{value:e.form.model.disallowComment,callback:function(t){e.$set(e.form.model,"disallowComment",t)},expression:"form.model.disallowComment"}})],1),a("a-form-item",{attrs:{label:"发表时间："}},[a("a-date-picker",{attrs:{defaultValue:e.createTimeDefaultValue,format:"YYYY-MM-DD HH:mm:ss",placeholder:"选择页面发表时间",showTime:""},on:{change:e.onCreateTimeSelect,ok:e.onCreateTimeSelect}})],1),a("a-form-item",{attrs:{label:"自定义模板："}},[a("a-select",{model:{value:e.form.model.template,callback:function(t){e.$set(e.form.model,"template",t)},expression:"form.model.template"}},[a("a-select-option",{key:"",attrs:{value:""}},[e._v("无")]),e._l(e.templates,(function(t){return a("a-select-option",{key:t,attrs:{value:t}},[e._v(" "+e._s(t)+" ")])}))],2)],1),a("a-form-item",{attrs:{label:"封面图："}},[a("a-space",{attrs:{direction:"vertical"}},[a("img",{staticClass:"w-1/2 cursor-pointer",staticStyle:{"border-radius":"4px"},attrs:{src:e.form.model.thumbnail||"/images/placeholder.jpg",alt:"Sheet cover thumbnail"},on:{click:function(t){e.attachmentSelectVisible=!0}}}),a("a-input",{attrs:{"allow-clear":"",placeholder:"点击封面图选择图片，或者输入外部链接"},model:{value:e.form.model.thumbnail,callback:function(t){e.$set(e.form.model,"thumbnail",t)},expression:"form.model.thumbnail"}})],1)],1)],1)],1),a("a-tab-pane",{key:"seo",attrs:{tab:"SEO"}},[a("a-form",{attrs:{"label-col":{span:4},"wrapper-col":{span:20},labelAlign:"left"}},[a("a-form-item",{attrs:{label:"自定义关键词"}},[a("a-input",{attrs:{autoSize:{minRows:5},placeholder:"多个关键词以英文逗号隔开",type:"textarea"},model:{value:e.form.model.metaKeywords,callback:function(t){e.$set(e.form.model,"metaKeywords",t)},expression:"form.model.metaKeywords"}})],1),a("a-form-item",{attrs:{label:"自定义描述"}},[a("a-input",{attrs:{autoSize:{minRows:5},placeholder:"如不填写，会从页面中自动截取",type:"textarea"},model:{value:e.form.model.metaDescription,callback:function(t){e.$set(e.form.model,"metaDescription",t)},expression:"form.model.metaDescription"}})],1)],1)],1),a("a-tab-pane",{key:"meta",attrs:{tab:"元数据"}},[a("MetaEditor",{attrs:{metas:e.form.model.metas,targetId:e.form.model.id,target:"sheet"},on:{"update:metas":function(t){return e.$set(e.form.model,"metas",t)}}})],1)],1)],1),a("AttachmentSelectModal",{attrs:{multiSelect:!1,visible:e.attachmentSelectVisible},on:{"update:visible":function(t){e.attachmentSelectVisible=t},confirm:e.handleSelectSheetThumbnail}})],1)},o=[],n=a(47458),l=a(86475),s=(a(70315),a(41479),a(87591),a(30535),a(85018),a(31875),a(18482),a(86381),a(99421)),i=a(91411),m=a(38487),c=a(73511),u=a.n(c),d=a(98906),f=a(94671),h=a(17132),p={name:"SheetSettingModal",mixins:[i.jB,i.KT],components:{MetaEditor:s.Z},props:{visible:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},sheet:{type:Object,default:function(){return{}}},savedCallback:{type:Function,default:null}},data:function(){return{sheetStatuses:f.Zi,form:{model:{},saving:!1,saveErrored:!1,draftSaving:!1,draftSaveErrored:!1,publishing:!1,publishErrored:!1},templates:[],attachmentSelectVisible:!1}},computed:(0,l.Z)((0,l.Z)({},(0,d.Se)(["options"])),{},{modalVisible:{get:function(){return this.visible},set:function(e){this.$emit("update:visible",e)}},modalTitle:function(){return this.form.model.id?"页面设置":"页面发布"},createTimeDefaultValue:function(){if(this.form.model.createTime){var e=new Date(this.form.model.createTime);return(0,m._)(e,"YYYY-MM-DD HH:mm:ss")}return(0,m._)(new Date,"YYYY-MM-DD HH:mm:ss")},fullPath:function(){var e=this.options,t=e.sheet_permalink_type,a=e.blog_url,r=e.sheet_prefix,o=e.path_suffix,n=void 0===o?"":o,l=this.form.model.slug,s=void 0===l?"{slug}":l;switch(t){case"SECONDARY":return"".concat(a,"/").concat(r,"/").concat(s).concat(n);case"ROOT":return"".concat(a,"/").concat(s).concat(n);default:return""}},hasId:function(){return!!this.form.model.id},draftSaveVisible:function(){var e=this.form,t=e.draftSaving,a=e.publishing;return(this.form.model.status!==f.Zi.DRAFT.value||!this.hasId||t)&&!a},publishVisible:function(){var e=this.form,t=e.draftSaving,a=e.publishing;return(this.form.model.status===f.Zi.DRAFT.value&&this.hasId||a)&&!t}}),watch:{modalVisible:function(e){e&&(this.form.model=Object.assign({},this.sheet),this.form.model.slug||this.form.model.id||this.handleGenerateSlug())},sheet:{deep:!0,handler:function(e){this.form.model=Object.assign({},e)}}},created:function(){this.handleListCustomTemplates()},methods:{handleCreateOrUpdate:function(){var e=this;return(0,n.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.form.model.title){t.next=3;break}throw e.$notification["error"]({message:"提示",description:"页面标题不能为空！"}),new Error("文章标题不能为空！");case 3:if(e.form.model.keepRaw=!0,t.prev=4,!e.hasId){t.next=10;break}return t.next=8,h.Z.sheet.update(e.form.model.id,e.form.model);case 8:t.next=12;break;case 10:return t.next=12,h.Z.sheet.create(e.form.model);case 12:t.next=18;break;case 14:throw t.prev=14,t.t0=t["catch"](4),e.$log.error(t.t0),new Error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[4,14]])})))()},handleSave:function(){var e=this;return(0,n.Z)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.form.saving=!0,a=e.form.model.status,a||(e.form.model.status=e.sheetStatuses.PUBLISHED.value),t.next=6,e.handleCreateOrUpdate();case 6:t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),e.form.saveErrored=!0,e.$log.error("Failed to save sheet",t.t0);case 12:return t.prev=12,setTimeout((function(){e.form.saving=!1}),400),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,8,12,15]])})))()},handlePublish:function(){var e=this;return(0,n.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.form.publishing=!0,e.form.model.status=e.sheetStatuses.PUBLISHED.value,t.next=5,e.handleCreateOrUpdate();case 5:t.next=11;break;case 7:t.prev=7,t.t0=t["catch"](0),e.form.publishErrored=!0,e.$log.error("Failed to publish sheet",t.t0);case 11:return t.prev=11,setTimeout((function(){e.form.publishing=!1}),400),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,7,11,14]])})))()},handleSaveDraft:function(){var e=this;return(0,n.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.form.draftSaving=!0,e.form.model.status=e.sheetStatuses.DRAFT.value,t.next=5,e.handleCreateOrUpdate();case 5:t.next=11;break;case 7:t.prev=7,t.t0=t["catch"](0),e.form.draftSaveErrored=!0,e.$log.error("Failed to save draft sheet",t.t0);case 11:return t.prev=11,setTimeout((function(){e.form.draftSaving=!1}),400),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,7,11,14]])})))()},handleSavedCallback:function(){this.form.saveErrored||this.form.draftSaveErrored||this.form.publishErrored?(this.form.saveErrored=!1,this.form.draftSaveErrored=!1,this.form.publishErrored=!1):this.savedCallback&&this.savedCallback()},handleListCustomTemplates:function(){var e=this;return(0,n.Z)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.Z.theme.listCustomSheetTemplates();case 3:a=t.sent,e.templates=a.data,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),e.$log.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},onCreateTimeSelect:function(e){this.form.model.createTime=e.valueOf()},handleGenerateSlug:function(){if(this.form.model.title&&u().isSupported()){var e,t="",a=u().parse(this.form.model.title.replace(/\s+/g,"").toLowerCase());a.forEach((function(a){if(2===a.type){var r=a.target?a.target.toLowerCase():"";t+=t&&!/\n|\s/.test(e.target)?"-"+r:r}else t+=(e&&2===e.type?"-":"")+a.target;e=a})),this.$set(this.form.model,"slug",t)}},handleSelectSheetThumbnail:function(e){var t=e.raw;t.length&&(this.form.model.thumbnail=encodeURI(t[0].path)),this.attachmentSelectVisible=!1},onClosed:function(){this.$emit("onClose"),this.$emit("onUpdate",this.form.model)}}},b=p,v=a(42177),g=(0,v.Z)(b,r,o,!1,null,null,null),S=g.exports}}]);