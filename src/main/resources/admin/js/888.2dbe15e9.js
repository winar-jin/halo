"use strict";(self["webpackChunkhalo_admin"]=self["webpackChunkhalo_admin"]||[]).push([[888],{60888:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("page-view",{attrs:{"sub-title":e.theme.current.version||"-",title:e.theme.current.name||"-",affix:""}},[a("template",{slot:"extra"},[a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.handleRemoteUpdate}},[a("a-icon",{attrs:{type:"cloud"}}),e._v(" 在线更新 ")],1),a("a-menu-item",{key:"2",on:{click:function(t){e.localUpgradeModel.visible=!0}}},[a("a-icon",{attrs:{type:"file"}}),e._v(" 本地更新 ")],1)],1),a("a-button",{attrs:{icon:"upload"}},[e._v(" 更新 "),a("a-icon",{attrs:{type:"down"}})],1)],1),a("a-button",{attrs:{disabled:e.theme.current.activated,icon:"delete",type:"danger"},on:{click:function(t){e.themeDeleteModal.visible=!0}}},[e._v(" 删除 ")])],1),a("a-spin",{attrs:{spinning:e.theme.loading}},[e.theme.current.id?a("div",{staticClass:"card-container"},[a("a-tabs",{attrs:{defaultActiveKey:"0",type:"card"}},[a("a-tab-pane",{key:0,attrs:{tab:"关于"}},[e.theme.current.logo?a("div",[a("a-avatar",{attrs:{alt:e.theme.current.name,size:72,src:e.theme.current.logo,shape:"square"}}),a("a-divider")],1):e._e(),a("a-descriptions",{attrs:{column:1,layout:"horizontal"}},[a("a-descriptions-item",{attrs:{label:"作者"}},[a("a",{staticClass:"text-inherit",attrs:{href:e.theme.current.author.website||"#"}},[e._v(" "+e._s(e.theme.current.author.name)+" ")])]),a("a-descriptions-item",{attrs:{label:"介绍"}},[e._v(" "+e._s(e.theme.current.description||"-")+" ")]),a("a-descriptions-item",{attrs:{label:"官网"}},[a("a",{staticClass:"text-inherit",attrs:{href:e.theme.current.website||"#"}},[e._v(" "+e._s(e.theme.current.website||"-")+" ")])]),a("a-descriptions-item",{attrs:{label:"Git 仓库"}},[a("a",{staticClass:"text-inherit",attrs:{href:e.theme.current.repo||"#"}},[e._v(" "+e._s(e.theme.current.repo||"-")+" ")])]),a("a-descriptions-item",{attrs:{label:"主题标识"}},[e._v(" "+e._s(e.theme.current.id)+" ")]),a("a-descriptions-item",{attrs:{label:"当前版本"}},[e._v(" "+e._s(e.theme.current.version)+" ")]),a("a-descriptions-item",{attrs:{label:"存储位置"}},[e._v(" "+e._s(e.theme.current.themePath)+" ")])],1)],1),e._l(e.theme.configurations,(function(t,l){return a("a-tab-pane",{key:l+1,attrs:{tab:t.label}},[a("a-form",{attrs:{wrapperCol:{xl:{span:8},lg:{span:8},sm:{span:12},xs:{span:24}},layout:"vertical"}},[e._l(t.items,(function(t,l){return a("a-form-item",{key:l,attrs:{label:t.label+"："}},[t.description&&""!==t.description?a("p",{attrs:{slot:"help"},domProps:{innerHTML:e._s(t.description)},slot:"help"}):e._e(),"TEXT"===t.type?a("a-input",{attrs:{defaultValue:t.defaultValue,placeholder:t.placeholder},model:{value:e.theme.settings[t.name],callback:function(a){e.$set(e.theme.settings,t.name,a)},expression:"theme.settings[item.name]"}}):"TEXTAREA"===t.type?a("a-input",{attrs:{autoSize:{minRows:5},placeholder:t.placeholder,type:"textarea"},model:{value:e.theme.settings[t.name],callback:function(a){e.$set(e.theme.settings,t.name,a)},expression:"theme.settings[item.name]"}}):"RADIO"===t.type?a("a-radio-group",{attrs:{defaultValue:t.defaultValue},model:{value:e.theme.settings[t.name],callback:function(a){e.$set(e.theme.settings,t.name,a)},expression:"theme.settings[item.name]"}},e._l(t.options,(function(t,l){return a("a-radio",{key:l,attrs:{value:t.value}},[e._v(" "+e._s(t.label)+" ")])})),1):"SELECT"===t.type?a("a-select",{attrs:{defaultValue:t.defaultValue},model:{value:e.theme.settings[t.name],callback:function(a){e.$set(e.theme.settings,t.name,a)},expression:"theme.settings[item.name]"}},e._l(t.options,(function(t){return a("a-select-option",{key:t.value,attrs:{value:t.value}},[e._v(" "+e._s(t.label)+" ")])})),1):"COLOR"===t.type?a("verte",{staticStyle:{display:"inline-block",height:"24px"},attrs:{defaultValue:t.defaultValue,model:"hex",picker:"square"},model:{value:e.theme.settings[t.name],callback:function(a){e.$set(e.theme.settings,t.name,a)},expression:"theme.settings[item.name]"}}):"ATTACHMENT"===t.type?a("AttachmentInput",{attrs:{defaultValue:t.defaultValue,placeholder:t.placeholder},model:{value:e.theme.settings[t.name],callback:function(a){e.$set(e.theme.settings,t.name,a)},expression:"theme.settings[item.name]"}}):"NUMBER"===t.type?a("a-input-number",{staticStyle:{width:"100%"},attrs:{defaultValue:t.defaultValue},model:{value:e.theme.settings[t.name],callback:function(a){e.$set(e.theme.settings,t.name,a)},expression:"theme.settings[item.name]"}}):"SWITCH"===t.type?a("a-switch",{attrs:{defaultChecked:t.defaultValue},model:{value:e.theme.settings[t.name],callback:function(a){e.$set(e.theme.settings,t.name,a)},expression:"theme.settings[item.name]"}}):a("a-input",{attrs:{defaultValue:t.defaultValue,placeholder:t.placeholder},model:{value:e.theme.settings[t.name],callback:function(a){e.$set(e.theme.settings,t.name,a)},expression:"theme.settings[item.name]"}})],1)})),a("a-form-item",[a("ReactiveButton",{attrs:{errored:e.theme.saveErrored,loading:e.theme.saving,erroredText:"保存失败",loadedText:"保存成功",text:"保存",type:"primary"},on:{callback:function(t){e.theme.saveErrored=!1},click:e.handleSaveSettings}})],1)],2)],1)}))],2)],1):e._e()]),a("ThemeDeleteConfirmModal",{attrs:{theme:e.theme.current,visible:e.themeDeleteModal.visible},on:{"update:visible":function(t){return e.$set(e.themeDeleteModal,"visible",t)},success:e.onThemeDeleteSucceed}}),a("ThemeLocalUpgradeModal",{attrs:{theme:e.theme.current,visible:e.localUpgradeModel.visible},on:{"update:visible":function(t){return e.$set(e.localUpgradeModel,"visible",t)},success:e.handleGetTheme}})],2)},s=[],i=a(43154),n=a(50990),r=a(43348),o=a(59464),m=a(1540),c={name:"ThemeSetting",components:{PageView:n.B4,Verte:i.Z,ThemeDeleteConfirmModal:r.Z,ThemeLocalUpgradeModal:o.Z},data(){return{theme:{current:{},settings:[],configurations:[],loading:!1,saving:!1,saveErrored:!1},themeDeleteModal:{visible:!1},localUpgradeModel:{visible:!1}}},beforeRouteEnter(e,t,a){const l=e.query.themeId;a((async e=>{await e.handleGetTheme(l)}))},methods:{async handleGetTheme(e){try{if(this.theme.loading=!0,e){const{data:t}=await m.Z.theme.get(e);this.theme.current=t}else{const{data:e}=await m.Z.theme.getActivatedTheme();this.theme.current=e}await this.handleGetConfigurations(),await this.handleGetSettings()}finally{this.theme.loading=!1}},async handleGetConfigurations(){try{const{data:e}=await m.Z.theme.listConfigurations(this.theme.current.id);this.theme.configurations=e}catch(e){this.$log.error(e)}},async handleGetSettings(){try{const{data:e}=await m.Z.theme.listSettings(this.theme.current.id);this.theme.settings=e}catch(e){this.$log.error(e)}},async handleSaveSettings(){try{this.theme.saving=!0,await m.Z.theme.saveSettings(this.theme.current.id,this.theme.settings)}catch(e){this.$log.error(e),this.theme.saveErrored=!0}finally{setTimeout((()=>{this.theme.saving=!1}),400)}},onThemeDeleteSucceed(){this.$router.replace({name:"ThemeList"})},handleRemoteUpdate(){const e=this;e.$confirm({title:"提示",maskClosable:!0,content:"确定更新【"+e.theme.current.name+"】主题？",async onOk(){const t=e.$message.loading("更新中...",0);try{await m.Z.theme.updateThemeByFetching(e.theme.current.id),e.$message.success("更新成功！")}catch(a){e.$log.error("Failed to update theme: ",a)}finally{t(),await e.handleGetTheme(e.theme.current.id)}}})}}},d=c,h=a(18156),u=(0,h.Z)(d,l,s,!1,null,null,null),p=u.exports},43348:function(e,t,a){a.d(t,{Z:function(){return c}});var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{afterClose:e.onAfterClose,closable:!1,width:416,destroyOnClose:"",title:"提示"},model:{value:e.modalVisible,callback:function(t){e.modalVisible=t},expression:"modalVisible"}},[a("template",{slot:"footer"},[a("a-button",{on:{click:function(t){e.modalVisible=!1}}},[e._v(" 取消 ")]),a("ReactiveButton",{attrs:{errored:e.deleteErrored,loading:e.deleting,erroredText:"删除失败",loadedText:"删除成功",text:"确定"},on:{callback:e.handleDeleteCallback,click:function(t){return e.handleDelete()}}})],1),a("p",[e._v("确定删除【"+e._s(e.theme.name)+"】主题？")]),a("a-checkbox",{model:{value:e.deleteSettings,callback:function(t){e.deleteSettings=t},expression:"deleteSettings"}},[e._v(" 同时删除主题配置 ")])],2)},s=[],i=a(1540),n={name:"ThemeDeleteConfirmModal",props:{visible:{type:Boolean,default:!1},theme:{type:Object,default:()=>({})}},data(){return{deleteErrored:!1,deleting:!1,deleteSettings:!1}},computed:{modalVisible:{get(){return this.visible},set(e){this.$emit("update:visible",e)}}},methods:{async handleDelete(){try{this.deleting=!0,await i.Z.theme["delete"](this.theme.id,this.deleteSettings)}catch(e){this.deleteErrored=!1,this.$log.error("Delete theme failed",e)}finally{setTimeout((()=>{this.deleting=!1}),400)}},handleDeleteCallback(){this.deleteErrored?this.deleteErrored=!1:(this.modalVisible=!1,this.$emit("success"))},onAfterClose(){this.deleteErrored=!1,this.deleting=!1,this.deleteSettings=!1,this.$emit("onAfterClose")}}},r=n,o=a(18156),m=(0,o.Z)(r,l,s,!1,null,null,null),c=m.exports},59464:function(e,t,a){a.d(t,{Z:function(){return c}});var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{afterClose:e.onModalClose,footer:null,destroyOnClose:"",title:"更新主题"},model:{value:e.modalVisible,callback:function(t){e.modalVisible=t},expression:"modalVisible"}},[a("FilePondUpload",{ref:"updateByFile",attrs:{accepts:["application/x-zip","application/x-zip-compressed","application/zip"],field:e.theme.id,multiple:!1,uploadHandler:e.uploadHandler,label:"点击选择主题更新包或将主题更新包拖拽到此处<br>仅支持 ZIP 格式的文件",name:"file"},on:{success:e.onThemeUploadSuccess}})],1)},s=[],i=a(1540),n={name:"ThemeLocalUpgradeModal",props:{visible:{type:Boolean,default:!1},theme:{type:Object,default:()=>({})}},data(){return{uploadHandler:(e,t,a)=>i.Z.theme.updateByUpload(e,t,a)}},computed:{modalVisible:{get(){return this.visible},set(e){this.$emit("update:visible",e)}}},methods:{onModalClose(){this.$refs.updateByFile.handleClearFileList(),this.$emit("onAfterClose")},onThemeUploadSuccess(){this.modalVisible=!1,this.$emit("success")}}},r=n,o=a(18156),m=(0,o.Z)(r,l,s,!1,null,null,null),c=m.exports}}]);