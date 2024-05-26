import{_ as P,Q as j}from"./plugin-vue_export-helper.71e0251d.js";import{c as m,f as u,h as c,g as x,r as C,G as A,L as z,t as q,u as y,v as r,y as g,Z as h,x as s,W as V,_ as W,$ as O,Y as S,s as L}from"./index.0059beea.js";import{a as b,n as G,p as U,h as Y}from"./QBtn.a25cc2ad.js";import{u as p,a as B,F as Z,Q as H}from"./FooterPage.4b36ba21.js";var E=m({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:a}){const n=u(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>c(e.tag,{class:n.value},b(a.default))}}),F=m({name:"QCard",props:{...p,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:a}){const{proxy:{$q:n}}=x(),l=B(e,n),i=u(()=>"q-card"+(l.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>c(e.tag,{class:i.value},b(a.default))}}),Q=m({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:a}){const n=u(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>c("div",{class:n.value},b(a.default))}}),J=m({name:"QItem",props:{...p,...G,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:a,emit:n}){const{proxy:{$q:l}}=x(),i=B(e,l),{hasLink:v,linkAttrs:o,linkClass:k,linkTag:M,navigateOnClick:D}=U(),f=C(null),_=C(null),$=u(()=>e.clickable===!0||v.value===!0||e.tag==="label"),d=u(()=>e.disable!==!0&&$.value===!0),I=u(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(i.value===!0?" q-item--dark":"")+(v.value===!0&&e.active===null?k.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(d.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),K=u(()=>{if(e.insetLevel===void 0)return null;const t=l.lang.rtl===!0?"Right":"Left";return{["padding"+t]:16+e.insetLevel*56+"px"}});function N(t){d.value===!0&&(_.value!==null&&(t.qKeyEvent!==!0&&document.activeElement===f.value?_.value.focus():document.activeElement===_.value&&f.value.focus()),D(t))}function R(t){if(d.value===!0&&A(t,[13,32])===!0){z(t),t.qKeyEvent=!0;const w=new MouseEvent("click",t);w.qKeyEvent=!0,f.value.dispatchEvent(w)}n("keyup",t)}function T(){const t=Y(a.default,[]);return d.value===!0&&t.unshift(c("div",{class:"q-focus-helper",tabindex:-1,ref:_})),t}return()=>{const t={ref:f,class:I.value,style:K.value,role:"listitem",onClick:N,onKeyup:R};return d.value===!0?(t.tabindex=e.tabindex||"0",Object.assign(t,o.value)):$.value===!0&&(t["aria-disabled"]="true"),c(M.value,t,T())}}}),X=m({name:"QList",props:{...p,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:a}){const n=x(),l=B(e,n.proxy.$q),i=u(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(l.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>c(e.tag,{class:i.value},b(a.default))}});const ee={name:"MenuList",props:{name:String,items:Array}},te={class:"textTitle q-mt-lg q-mb-lg"};function ae(e,a,n,l,i,v){return q(),y(F,{style:{"background-color":"#f0e5d6"},class:"textSubtitle row flex-center q-ma-lg"},{default:r(()=>[g("div",te,h(this.name),1),s(E,{class:"row col-12 q-ml-xl q-mr-xl"},{default:r(()=>[(q(!0),V(O,null,W(this.items,o=>(q(),y(X,{key:o.name,class:"row col-12"},{default:r(()=>[s(J,{class:"row justify-between col-12"},{default:r(()=>[s(Q,null,{default:r(()=>[S(h(o.name),1)]),_:2},1024),s(Q,{avatar:""},{default:r(()=>[S(h(o.price),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}var ne=P(ee,[["render",ae]]),se="/assets/coffee-log.c0b77507.png";const re={name:"MenuPage",components:{MenuList:ne,FooterPage:Z},data(){return{coffees:[{name:"\u03A6\u03C1\u03AD\u03BD\u03C4\u03BF \u03BA\u03B1\u03C0\u03BF\u03C5\u03C4\u03C3\u03AF\u03BD\u03BF",price:"3.5"},{name:"K\u03B1\u03C0\u03BF\u03C5\u03C4\u03C3\u03AF\u03BD\u03BF",price:"3"},{name:"Flat white",price:"3.5"},{name:"\u039B\u03AC\u03C4\u03B5",price:"3.5"}],snacks:[{name:"\u039C\u03C0\u03AD\u03C1\u03B3\u03BA\u03B5\u03C1 \u03BA\u03BF\u03C4\u03CC\u03C0\u03BF\u03C5\u03BB\u03BF",price:"13.5"},{name:"\u039C\u03C0\u03AD\u03C1\u03B3\u03BA\u03B5\u03C1 \u03BC\u03C0\u03B9\u03C6\u03C4\u03AD\u03BA\u03B9",price:"10"},{name:"\u03A0\u03B1\u03C4\u03AC\u03C4\u03B5\u03C2 \u03C4\u03B7\u03B3\u03B1\u03BD\u03B9\u03C4\u03AD\u03C2",price:"3.5"},{name:"\u039A\u03BB\u03AC\u03BC\u03C0 \u03C3\u03AC\u03BD\u03C4\u03BF\u03C5\u03B9\u03C4\u03C2 \u03B3\u03CD\u03C1\u03BF\u03C2 \u03C7\u03BF\u03B9\u03C1\u03B9\u03BD\u03CC\u03C2",price:"9"},{name:"\u039A\u03BB\u03AC\u03BC\u03C0 \u03C3\u03AC\u03BD\u03C4\u03BF\u03C5\u03B9\u03C4\u03C2 \u03B3\u03CD\u03C1\u03BF\u03C2 \u03BA\u03BF\u03C4\u03CC\u03C0\u03BF\u03C5\u03BB\u03BF",price:"9"}]}}},le=g("div",{class:"row textSubtitle flex-center"},[g("div",{class:"textTitle q-mt-xl q-mb-mx"},"\u039C\u03B5\u03BD\u03BF\u03CD")],-1),oe=g("h5",null,"\u0386\u03BB\u03C3\u03BF\u03C2 \u03BA\u03B1\u03C6\u03AD",-1);function ue(e,a,n,l,i,v){const o=L("MenuList"),k=L("FooterPage");return q(),y(H,{style:{"background-color":"#f0e5d6"}},{default:r(()=>[le,s(F,{style:{"background-color":"#f0e5d6"},class:"row flex-center q-ma-lg"},{default:r(()=>[s(E,null,{default:r(()=>[s(j,{ratio:"1",src:se}),oe]),_:1})]),_:1}),s(o,{name:"\u039A\u03B1\u03C6\u03AD\u03B4\u03B5\u03C2",items:this.coffees},null,8,["items"]),s(o,{name:"Snack",items:this.snacks},null,8,["items"]),s(k,{class:"q-mt-xl"})]),_:1})}var ve=P(re,[["render",ue]]);export{ve as default};
