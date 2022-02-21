"use strict";(self["webpackChunkhalo_admin"]=self["webpackChunkhalo_admin"]||[]).push([[889],{64479:function(t,e,s){s.r(e),s.d(e,{default:function(){return u}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("a-row",{attrs:{gutter:12}},[s("a-col",{staticClass:"mb-3",attrs:{lg:12,md:24,sm:24,xl:12,xs:24}},[s("a-card",{attrs:{bodyStyle:{padding:0},bordered:!1,hoverable:"",title:"服务器"}},[s("table",{staticClass:"w-full"},[s("tbody",{staticClass:"ant-table-tbody"},[s("tr",[s("td",[t._v("系统")]),s("td",[t._v(t._s(t.systemProperties["os.name"].value)+" "+t._s(t.systemProperties["os.version"].value))])]),s("tr",[s("td",[t._v("平台")]),s("td",[t._v(t._s(t.systemProperties["os.arch"].value))])]),s("tr",[s("td",[t._v("语言")]),s("td",[t._v(t._s(t.systemProperties["user.language"].value))])]),s("tr",[s("td",[t._v("时区")]),s("td",[t._v(t._s(t.systemProperties["user.timezone"].value))])]),s("tr",[s("td",[t._v("当前用户")]),s("td",[t._v(t._s(t.systemProperties["user.name"].value))])]),s("tr",[s("td",[t._v("用户目录")]),s("td",[t._v(t._s(t.systemProperties["user.home"].value))])])])])]),s("a-divider",{attrs:{dashed:""}})],1),s("a-col",{staticClass:"mb-3",attrs:{lg:12,md:24,sm:24,xl:12,xs:24}},[s("a-card",{attrs:{bodyStyle:{padding:0},bordered:!1,hoverable:"",title:"使用情况"}},[s("table",{staticClass:"w-full"},[s("tbody",{staticClass:"ant-table-tbody"},[s("tr",[s("td",[t._v("CPU 核心数")]),s("td",[t._v(t._s(t.system.cpu.count)+" 个")])]),s("tr",[s("td",[t._v("CPU 使用率")]),s("td",[t._v(t._s(t.system.cpu.usage)+" %")])]),s("tr",[s("td",[t._v("JVM 最大可用内存")]),s("td",[t._v(t._s(t._f("fileSizeFormat")(t.jvm.memory.max)))])]),s("tr",[s("td",[t._v("JVM 可用内存")]),s("td",[t._v(t._s(t._f("fileSizeFormat")(t.jvm.memory.committed)))])]),s("tr",[s("td",[t._v("JVM 已用内存")]),s("td",[t._v(t._s(t._f("fileSizeFormat")(t.jvm.memory.used)))])]),s("tr",[s("td",[t._v("GC 次数")]),s("td",[t._v(t._s(t.jvm.gc.pause.count)+" 次")])])])])]),s("a-divider",{attrs:{dashed:""}})],1),s("a-col",{staticClass:"mb-3",attrs:{lg:24,md:24,sm:24,xl:24,xs:24}},[s("a-card",{attrs:{bodyStyle:{padding:0},bordered:!1,hoverable:"",title:"环境"}},[s("table",{staticClass:"w-full"},[s("tbody",{staticClass:"ant-table-tbody"},[s("tr",[s("td",[t._v("Java 名称")]),s("td",[t._v(t._s(t.systemProperties["java.vm.name"].value))])]),s("tr",[s("td",[t._v("Java 版本")]),s("td",[t._v(t._s(t.systemProperties["java.version"].value))])]),s("tr",[s("td",[t._v("Java Home")]),s("td",[s("ellipsis",{attrs:{length:t.isMobile()?50:256,tooltip:""}},[t._v(" "+t._s(t.systemProperties["java.home"].value)+" ")])],1)])])])]),s("a-divider",{attrs:{dashed:""}})],1),s("a-col",{staticClass:"mb-3",attrs:{lg:24,md:24,sm:24,xl:24,xs:24}},[s("a-card",{attrs:{bodyStyle:{padding:0},bordered:!1,hoverable:"",title:"应用"}},[s("table",{staticClass:"w-full"},[s("tbody",{staticClass:"ant-table-tbody"},[s("tr",[s("td",[t._v("端口")]),s("td",[t._v(t._s(t.propertiesSourcesMap["server.ports"]["local.server.port"].value))])]),s("tr",[s("td",[t._v("PID")]),s("td",[t._v(t._s(t.systemProperties["PID"].value))])]),s("tr",[s("td",[t._v("启动时间")]),s("td",[t._v(t._s(t._f("moment")(t.system.process.startTime)))])]),s("tr",[s("td",[t._v("已启动时间")]),s("td",[t._v(t._s(t._f("dayTime")(t.system.process.uptime)))])]),s("tr",[s("td",[t._v("启动目录")]),s("td",[s("ellipsis",{attrs:{length:t.isMobile()?50:256,tooltip:""}},[t._v(" "+t._s(t.systemProperties["user.dir"].value)+" ")])],1)]),s("tr",[s("td",[t._v("日志目录")]),s("td",[s("ellipsis",{attrs:{length:t.isMobile()?50:256,tooltip:""}},[t._v(" "+t._s(t.systemProperties["LOG_FILE"].value)+" ")])],1)])])])])],1)],1),s("div",{staticStyle:{position:"fixed",bottom:"30px",right:"30px"}},[s("a-button",{attrs:{icon:"sync",shape:"circle",size:"large",type:"primary"},on:{click:t.handleRefresh}})],1)],1)},r=[],o=s(3832),m=s(1540),i={name:"Environment",mixins:[o.jB,o.KT],data(){return{propertiesSourcesMap:{},systemProperties:[],interval:null,system:{cpu:{count:0,usage:0},process:{cpuUsage:0,uptime:0,startTime:0}},jvm:{memory:{max:0,committed:0,used:0},gc:{pause:{count:0}}}}},created(){this.loadEnv(),this.loadSystemInfo(),this.loadJvmInfo()},methods:{loadEnv(){m.Z.actuator.getEnv().then((t=>{const e=t.propertySources;e.forEach((t=>{this.propertiesSourcesMap[t.name]=t.properties})),this.systemProperties=this.propertiesSourcesMap["systemProperties"]}))},loadSystemInfo(){m.Z.actuator.getSystemCpuCount().then((t=>{this.system.cpu.count=t.measurements[0].value})),m.Z.actuator.getSystemCpuUsage().then((t=>{this.system.cpu.usage=Number(100*t.measurements[0].value).toFixed(2)})),m.Z.actuator.getProcessUptime().then((t=>{this.system.process.uptime=t.measurements[0].value})),m.Z.actuator.getProcessStartTime().then((t=>{this.system.process.startTime=1e3*t.measurements[0].value})),m.Z.actuator.getProcessCpuUsage().then((t=>{this.system.process.cpuUsage=t.measurements[0].value}))},loadJvmInfo(){m.Z.actuator.getJvmMemoryMax().then((t=>{this.jvm.memory.max=t.measurements[0].value})),m.Z.actuator.getJvmMemoryCommitted().then((t=>{this.jvm.memory.committed=t.measurements[0].value})),m.Z.actuator.getJvmMemoryUsed().then((t=>{this.jvm.memory.used=t.measurements[0].value})),m.Z.actuator.getJvmGcPause().then((t=>{this.jvm.gc.pause.count=t.measurements[0].value}))},handleRefresh(){this.loadSystemInfo(),this.loadJvmInfo()}}},l=i,d=s(18156),v=(0,d.Z)(l,a,r,!1,null,null,null),u=v.exports}}]);