import{f as u,C as M,a as O,g as C,c as E,r as g,i as F,o as P,h as l,w as x,T as A}from"./index.5e98b46d.js";import{v as f,a as U,c as W}from"./QBtn.3dbd03c4.js";const G={ratio:[String,Number]};function J(e,n){return u(()=>{const i=Number(e.ratio||(n!==void 0?n.value:void 0));return isNaN(i)!==!0&&i>0?{paddingBottom:`${100/i}%`}:null})}function q(){let e=null;const n=C();function i(){e!==null&&(clearTimeout(e),e=null)}return M(i),O(i),{removeTimeout:i,registerTimeout(s,c){i(),f(n)===!1&&(e=setTimeout(()=>{e=null,s()},c))}}}const K=1.7778;var Y=E({name:"QImg",props:{...G,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:K},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:n,emit:i}){const s=g(e.initialRatio),c=J(e,s),S=C(),{registerTimeout:L,removeTimeout:h}=q(),{registerTimeout:k,removeTimeout:T}=q(),y=u(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),z=u(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),a=[g(null),g(y.value)],r=g(0),d=g(!1),m=g(!1),N=u(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),I=u(()=>({width:e.width,height:e.height})),R=u(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),B=u(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function D(){if(T(),e.loadingShowDelay===0){d.value=!0;return}k(()=>{d.value=!0},e.loadingShowDelay)}function _(){T(),d.value=!1}function j({target:t}){f(S)===!1&&(h(),s.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,b(t,1))}function b(t,o){o===1e3||f(S)===!0||(t.complete===!0?Q(t):L(()=>{b(t,o+1)},50))}function Q(t){f(S)!==!0&&(r.value=r.value^1,a[r.value].value=null,_(),t.getAttribute("__qerror")!=="true"&&(m.value=!1),i("load",t.currentSrc||t.src))}function $(t){h(),_(),m.value=!0,a[r.value].value=z.value,a[r.value^1].value=y.value,i("error",t)}function w(t){const o=a[t].value,v={key:"img_"+t,class:R.value,style:B.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...o};return r.value===t?Object.assign(v,{class:v.class+"current",onLoad:j,onError:$}):v.class+="loaded",l("div",{class:"q-img__container absolute-full",key:"img"+t},l("img",v))}function H(){return d.value===!1?l("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},U(n[m.value===!0?"error":"default"])):l("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},n.loading!==void 0?n.loading():e.noSpinner===!0?void 0:[l(W,{color:e.spinnerColor,size:e.spinnerSize})])}{let t=function(){x(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,o=>{h(),m.value=!1,o===null?(_(),a[r.value^1].value=y.value):D(),a[r.value].value=o},{immediate:!0})};F.value===!0?P(t):t()}return()=>{const t=[];return c.value!==null&&t.push(l("div",{key:"filler",style:c.value})),a[0].value!==null&&t.push(w(0)),a[1].value!==null&&t.push(w(1)),t.push(l(A,{name:"q-transition--fade"},H)),l("div",{key:"main",class:N.value,style:I.value,role:"img","aria-label":e.alt},t)}}}),Z="/assets/alsosLogo.57114d82.png",p=(e,n)=>{const i=e.__vccOpts||e;for(const[s,c]of n)i[s]=c;return i};export{Y as Q,p as _,Z as a};
