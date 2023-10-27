"use strict";(self["webpackChunkpersonal"]=self["webpackChunkpersonal"]||[]).push([[350],{4350:function(t,e,r){r.r(e),r.d(e,{default:function(){return et}});var s=r(9199);function l(t,e,r,l,o,a){const n=(0,s.up)("ArticleLists");return(0,s.wg)(),(0,s.j4)(n)}const o={class:"flex flex-col sm:flex-row"},a={class:"w-full md:w-4/6 min-h-screen p-4 md:p-12 border-r dark:border-r-gray-900"},n={class:"max-w-2xl py-4 mx-auto bg-white mb-5 border-b dark:border-b-gray-900 dark:bg-midnight",style:{cursor:"auto"}},i={class:"flex items-center justify-between"},c={class:"text-sm font-light text-gray-600 dark:text-gray-300"},d={class:"mt-2"},u=["innerHTML"],p={class:"flex items-center justify-between mt-4"},g=(0,s._)("div",{class:"flex items-center"},[(0,s._)("img",{alt:"Author Photo",class:"object-cover w-10 h-10 mx-4 rounded-full sm:block",src:"https://avatars.githubusercontent.com/u/44632846?v=4"}),(0,s._)("a",{class:"font-bold text-gray-700 cursor-pointer dark:text-gray-400"},"Himanshu")],-1),m={class:"w-full md:w-2/6 p-4 md:p-8"};function h(t,e,r,l,h,b){const f=(0,s.up)("top-articles"),w=(0,s.up)("router-link"),x=(0,s.up)("people-suggestions");return(0,s.wg)(),(0,s.iD)("div",o,[(0,s._)("div",a,[(0,s.Wm)(f,{"top-articles":h.topArticles},null,8,["top-articles"]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(h.articles,((t,e)=>((0,s.wg)(),(0,s.iD)("div",{key:e},[(0,s._)("div",n,[(0,s._)("div",i,[(0,s._)("span",c,(0,s.zw)(b.formatDate(t.createdAt)),1)]),(0,s._)("div",d,[(0,s.Wm)(w,{to:{path:b.publicPath+b.articleLink(t.id)},class:"text-2xl font-bold text-gray-700 hover:text-gray-600 dark:text-gray-300 hover:underline"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,s.zw)(t.title),1)])),_:2},1032,["to"]),(0,s._)("p",{class:"mt-2 text-gray-400",innerHTML:JSON.parse(t.json_content).blocks[0].data.text},null,8,u)]),(0,s._)("div",p,[(0,s.Wm)(w,{to:{path:b.articleLink(t.id)},class:"border rounded p-2 px-4 font-bold md:border-none md:text-blue-300 md:rounded-none md:p-0 dark:text-slate-500 hover:bg-gray-100 md:hover:bg-inherit md:hover:underline"},{default:(0,s.w5)((()=>[(0,s.Uk)("Read more ⟶ ")])),_:2},1032,["to"]),g])])])))),128))]),(0,s._)("div",m,[(0,s.Wm)(x,{"page-size":h.userPageSize,select:b.select,"total-count":h.totalCount,users:h.users},null,8,["page-size","select","total-count","users"])])])}r(7658);const b=(0,s._)("div",{class:"my-0"},[(0,s._)("h2",{class:"font-bold text-sm"},[(0,s._)("i",{class:"bi bi-people"}),(0,s.Uk)(" People who to follow ")])],-1),f={class:"flex flex-row place-items-center gap-1 h-12 w-full p-2 my-1"},w=(0,s._)("div",{class:"w-1/6"},[(0,s._)("img",{alt:"Rounded avatar",class:"w-8 h-8 rounded-full",src:"https://flowbite.com/docs/images/people/profile-picture-5.jpg"})],-1),x={class:"flex flex-col w-5/6"},v={class:"text-xs font-bold"},_=(0,s._)("div",null,[(0,s._)("button",{class:"p-2 px-8 border rounded-full text-xs font-bold hover:bg-black hover:text-white w-20 h-8"},[(0,s._)("span",null,"Follow")])],-1);function k(t,e,r,l,o,a){const n=(0,s.up)("pagination-button");return(0,s.wg)(),(0,s.iD)("div",null,[b,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.users,((t,e)=>((0,s.wg)(),(0,s.iD)("div",{key:e},[(0,s._)("div",f,[w,(0,s._)("div",x,[(0,s._)("div",v,(0,s.zw)(t.name),1)]),_])])))),128)),(0,s.Wm)(n,{"page-size":r.pageSize,select:r.select,"total-count":r.totalCount},null,8,["page-size","select","total-count"])])}const y={class:"my-3"},D={class:"flex flex-row place-items-center justify-center"},A=["onClick"];function S(t,e,r,l,o,a){return(0,s.wg)(),(0,s.iD)("div",y,[(0,s._)("div",D,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.totalButtons(),(t=>((0,s.wg)(),(0,s.iD)("div",{key:t},[(0,s._)("button",{class:(0,s.C_)([o.currentPage+1===t?"bg-black text-white":"text-black","border w-6 p-2 text-xs px-4 dark:text-gray-300 dark:border-slate-900"]),onClick:e=>a.handlePagination(t)},(0,s.zw)(t),11,A)])))),128))])])}var L={name:"PaginationButton",props:{pageSize:Number,totalCount:Number,select:Function,buttonLength:Number},data(){return{currentPage:0,totalButtons:()=>Math.ceil(this.totalCount/this.pageSize)}},methods:{handlePagination(t){this.currentPage=t-1,this.select(this.pageSize,this.currentPage*this.pageSize)}}},C=r(89);const T=(0,C.Z)(L,[["render",S]]);var z=T,E={name:"PeopleSuggestions",components:{PaginationButton:z},props:{users:Array,totalCount:Number,pageSize:Number,select:Function},data(){return{}}};const P=(0,C.Z)(E,[["render",k]]);var O=P,R=r(7139);const j={class:"font-bold text-xl mb-4 dark:text-gray-300"},M={class:"columns-1 md:columns-2 pb-4 mb-4 border-b dark:border-b-gray-900"},B={class:"flex flex-col md:flex-row mb-3 gap-3 dark:hover:bg-slate-900 md:border dark:border-slate-900 p-2 md:hover:shadow-md md:hover:cursor-pointer md:rounded"},F=(0,s._)("div",{class:"w-full lg:w-28 h-40 md:h-24 overflow-hidden object-contain bg-cover rounded",style:{"background-image":"url('https://tecdn.b-cdn.net/img/new/slides/041.webp')"}},null,-1),H={class:"flex flex-col w-56"},N={class:"article-title mb-1"},I={class:"text-xs line-clamp-2 font-bold leading-tight dark:text-gray-300"},Y={class:"article-description line-clamp-3 mb-1"},W=["innerHTML"],U={class:"article-created-at"},Z={class:"text-[9px] font-bold text-gray-400"};function K(t,e,r,l,o,a){const n=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",j,[(0,s._)("h2",null,"Top "+(0,s.zw)(r.topArticles.length)+" articles",1)]),(0,s._)("div",M,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.topArticles,((t,e)=>((0,s.wg)(),(0,s.iD)("div",{key:e},[(0,s.Wm)(n,{to:{path:a.publicPath+a.articleLink(t.id)}},{default:(0,s.w5)((()=>[(0,s._)("div",B,[F,(0,s._)("div",H,[(0,s._)("div",N,[(0,s._)("h2",I,(0,s.zw)(t.title),1)]),(0,s._)("div",Y,[(0,s._)("h4",{class:"text-[10px] font-bold text-gray-400",innerHTML:JSON.parse(t.json_content).blocks[0].data.text},null,8,W)]),(0,s._)("div",U,[(0,s._)("h4",Z,(0,s.zw)(a.formatDate(t.createdAt)),1)])])])])),_:2},1032,["to"])])))),128))])],64)}var J={name:"TopArticles",props:{topArticles:Array},methods:{articleLink(t){return`/article/${t}`},formatDate(t){const e={year:"numeric",month:"long",day:"numeric"},r=new Date(t);return r.toLocaleDateString("en-US",e)}},data(){return{}},inject:["publicPath"]};const $=(0,C.Z)(J,[["render",K]]);var q=$,G={name:"ArticleLists",components:{TopArticles:q,PeopleSuggestions:O},computed:{...(0,R.Se)(["getDB"])},data(){return{topArticles:[],topNArticles:4,userPageSize:10,totalCount:0,db:null,users:[],articles:[]}},created(){const t=this.userPageSize,e=0;this.totalRowCount(),this.select(t,e),this.findAllArticles(),this.findTopArticles(this.topNArticles)},methods:{articleLink(t){return`/article/${t}`},totalRowCount(){try{let t="SELECT COUNT(*) as total FROM core_users;";const e=this.getDB.prepare(t);e.step(),this.totalCount=e.getAsObject().total}catch(t){}},select(t=10,e=0){this.users=[];let r="SELECT * FROM core_users LIMIT ? OFFSET ?";const s=this.getDB.prepare(r);s.bind([t,e]);while(s.step())this.users.push(s.getAsObject());s.free()},findAllArticles(t=10,e=0){const r="SELECT * FROM articles WHERE id NOT IN (SELECT id FROM articles ORDER BY id DESC LIMIT 4) ORDER BY id DESC LIMIT ? OFFSET ?",s=this.getDB.prepare(r);s.bind([t,e]);while(s.step())this.articles.push(s.getAsObject());s.free()},findTopArticles(t=4){const e="SELECT * FROM articles ORDER BY id DESC LIMIT ?",r=this.getDB.prepare(e);r.bind([t]);while(r.step())this.topArticles.push(r.getAsObject());r.free()},formatDate(t){const e={year:"numeric",month:"long",day:"numeric"},r=new Date(t);return r.toLocaleDateString("en-US",e)}},inject:["publicPath"]};const Q=(0,C.Z)(G,[["render",h]]);var V=Q,X={name:"HomePage",components:{ArticleLists:V}};const tt=(0,C.Z)(X,[["render",l]]);var et=tt}}]);