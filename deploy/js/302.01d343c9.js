"use strict";(self["webpackChunkpersonal"]=self["webpackChunkpersonal"]||[]).push([[302],{2302:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var s=n(9199);const r={class:"p-8 w-full md:w-160 lg:w-200 mx-auto article-view"},i={class:"article-title my-6 mb-8 max-w-3xl font-crimson text-center"},o={class:"my-5 flex flex-col sm:flex-row flex-wrap items-center justify-center self-center font-poppins font-medium text-sm space-x-2"},a={class:""},c=(0,s._)("div",{class:"scale-150"},"·",-1),l=(0,s._)("div",{class:""},"Updated — November 27, 2021",-1),d=["innerHTML"];function u(t,e,n,u,p,h){return(0,s.wg)(),(0,s.iD)("div",r,[(0,s._)("div",null,[(0,s._)("h1",i,(0,s.zw)(p.article.title),1)]),(0,s._)("div",o,[(0,s._)("div",a,(0,s.zw)(h.formatDate(p.article.createdAt)),1),c,l]),(0,s._)("div",{innerHTML:h.parseContent()},null,8,d)])}var p=n(7139);n(7658);class h{constructor(){this.contents=null,this.renderedOutput=[],this.blockMaps={paragraph:{name:"paragraph",contentLocation:"text",render:t=>`<div class="mb-4 font-crimson text-gray-700 text-xl leading-8 font-normal">${t.text}</div>`},code:{name:"code",contentLocation:"code",render:t=>`<div class="relative bg-gray-100 min-h-200 font-inconsolata text-#41314e leading-6 text-sm border border-#f1f1f4 overflow-x-auto resize-y whitespace-pre p-4">${t.code}</div>`},header:{name:"header",contentLocation:"text",extraAttributes:["level"],render:t=>`<div class="py-3 px-0 mt-0 leading-5 outline-none">${t.text}</div>`},nested:{name:"list",contentLocation:"items",extraAttributes:[],render:t=>{function e(t){const n=[];return n.push(`<li class="p-2">${t.content}`),t.items.length>0&&(n.push("<ul class='list-disc ml-4'>"),t.items.forEach((t=>{n.push(e(t))})),n.push("</ul>")),n.push("</li>"),n.join("")}return'<ul class="list-disc">'+e(t.items[0])+"</ul>"}}}}parse(t){try{this.contents=t;for(const t of this.contents.blocks)"undefined"!==typeof this.blockMaps[t.type]&&this.renderedOutput.push(this.blockMaps[t.type].render(t.data));return this.renderedOutput.join("")}catch(e){return console.log("Failed to parse contents: ",e),""}}}var m={name:"ArticleView",props:{id:String},computed:{...(0,p.Se)(["getDB"])},data(){return{articleId:this.id,article:{},articleContentJson:{}}},beforeMount(){this.findArticle()},methods:{findArticle(){const t="SELECT * FROM articles WHERE id=?",e=this.getDB.prepare(t);e.bind([this.id]),e.step(),this.article=e.getAsObject(),this.getArticleJson(),e.free()},getArticleJson(){try{const t=this.article;this.articleContentJson=JSON.parse(t.json_content),this.parseContent()}catch(t){console.log(t)}},parseContent(){const t=new h;return t.parse(this.articleContentJson)},formatDate(t){const e={year:"numeric",month:"long",day:"numeric"},n=new Date(t);return n.toLocaleDateString("en-US",e)}}},f=n(89);const x=(0,f.Z)(m,[["render",u]]);var v=x}}]);