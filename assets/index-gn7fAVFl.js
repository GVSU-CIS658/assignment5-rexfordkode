(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Se={},qr=[],Kt=()=>{},fd=()=>!1,Xo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Yo=t=>t.startsWith("onUpdate:"),et=Object.assign,el=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},T_=Object.prototype.hasOwnProperty,Te=(t,e)=>T_.call(t,e),re=Array.isArray,Hr=t=>_i(t)==="[object Map]",dd=t=>_i(t)==="[object Set]",Zu=t=>_i(t)==="[object Date]",ce=t=>typeof t=="function",qe=t=>typeof t=="string",At=t=>typeof t=="symbol",Ae=t=>t!==null&&typeof t=="object",pd=t=>(Ae(t)||ce(t))&&ce(t.then)&&ce(t.catch),gd=Object.prototype.toString,_i=t=>gd.call(t),I_=t=>_i(t).slice(8,-1),md=t=>_i(t)==="[object Object]",Zo=t=>qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,js=Zc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ea=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},w_=/-\w/g,mt=ea(t=>t.replace(w_,e=>e.slice(1).toUpperCase())),A_=/\B([A-Z])/g,wr=ea(t=>t.replace(A_,"-$1").toLowerCase()),ta=ea(t=>t.charAt(0).toUpperCase()+t.slice(1)),Wa=ea(t=>t?`on${ta(t)}`:""),Wt=(t,e)=>!Object.is(t,e),ao=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},_d=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},tl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let eh;const na=()=>eh||(eh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function us(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=qe(r)?C_(r):us(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(qe(t)||Ae(t))return t}const b_=/;(?![^(]*\))/g,S_=/:([^]+)/,R_=/\/\*[^]*?\*\//g;function C_(t){const e={};return t.replace(R_,"").split(b_).forEach(n=>{if(n){const r=n.split(S_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function nl(t){let e="";if(qe(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const r=nl(t[n]);r&&(e+=r+" ")}else if(Ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const P_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",V_=Zc(P_);function yd(t){return!!t||t===""}function k_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ri(t[r],e[r]);return n}function ri(t,e){if(t===e)return!0;let n=Zu(t),r=Zu(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=At(t),r=At(e),n||r)return t===e;if(n=re(t),r=re(e),n||r)return n&&r?k_(t,e):!1;if(n=Ae(t),r=Ae(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in t){const c=t.hasOwnProperty(a),l=e.hasOwnProperty(a);if(c&&!l||!c&&l||!ri(t[a],e[a]))return!1}}return String(t)===String(e)}const vd=t=>!!(t&&t.__v_isRef===!0),$t=t=>qe(t)?t:t==null?"":re(t)||Ae(t)&&(t.toString===gd||!ce(t.toString))?vd(t)?$t(t.value):JSON.stringify(t,Ed,2):String(t),Ed=(t,e)=>vd(e)?Ed(t,e.value):Hr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ka(r,i)+" =>"]=s,n),{})}:dd(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ka(n))}:At(e)?Ka(e):Ae(e)&&!re(e)&&!md(e)?String(e):e,Ka=(t,e="")=>{var n;return At(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ot;class Td{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=ot,!e&&ot&&(this.index=(ot.scopes||(ot.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=ot;try{return ot=this,e()}finally{ot=n}}}on(){++this._on===1&&(this.prevScope=ot,ot=this)}off(){this._on>0&&--this._on===0&&(ot=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Id(t){return new Td(t)}function wd(){return ot}function D_(t,e=!1){ot&&ot.cleanups.push(t)}let Ce;const Ga=new WeakSet;class Ad{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ot&&ot.active&&ot.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ga.has(this)&&(Ga.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Sd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,th(this),Rd(this);const e=Ce,n=Ot;Ce=this,Ot=!0;try{return this.fn()}finally{Cd(this),Ce=e,Ot=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)il(e);this.deps=this.depsTail=void 0,th(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ga.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){mc(this)&&this.run()}get dirty(){return mc(this)}}let bd=0,qs,Hs;function Sd(t,e=!1){if(t.flags|=8,e){t.next=Hs,Hs=t;return}t.next=qs,qs=t}function rl(){bd++}function sl(){if(--bd>0)return;if(Hs){let e=Hs;for(Hs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;qs;){let e=qs;for(qs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Rd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Cd(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),il(r),N_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function mc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Pd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Pd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===si)||(t.globalVersion=si,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!mc(t))))return;t.flags|=2;const e=t.dep,n=Ce,r=Ot;Ce=t,Ot=!0;try{Rd(t);const s=t.fn(t._value);(e.version===0||Wt(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ce=n,Ot=r,Cd(t),t.flags&=-3}}function il(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)il(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function N_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ot=!0;const Vd=[];function _n(){Vd.push(Ot),Ot=!1}function yn(){const t=Vd.pop();Ot=t===void 0?!0:t}function th(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ce;Ce=void 0;try{e()}finally{Ce=n}}}let si=0;class O_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ol{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ce||!Ot||Ce===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ce)n=this.activeLink=new O_(Ce,this),Ce.deps?(n.prevDep=Ce.depsTail,Ce.depsTail.nextDep=n,Ce.depsTail=n):Ce.deps=Ce.depsTail=n,kd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ce.depsTail,n.nextDep=void 0,Ce.depsTail.nextDep=n,Ce.depsTail=n,Ce.deps===n&&(Ce.deps=r)}return n}trigger(e){this.version++,si++,this.notify(e)}notify(e){rl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{sl()}}}function kd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)kd(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const wo=new WeakMap,gr=Symbol(""),_c=Symbol(""),ii=Symbol("");function ct(t,e,n){if(Ot&&Ce){let r=wo.get(t);r||wo.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new ol),s.map=r,s.key=n),s.track()}}function hn(t,e,n,r,s,i){const a=wo.get(t);if(!a){si++;return}const c=l=>{l&&l.trigger()};if(rl(),e==="clear")a.forEach(c);else{const l=re(t),h=l&&Zo(n);if(l&&n==="length"){const d=Number(r);a.forEach((g,y)=>{(y==="length"||y===ii||!At(y)&&y>=d)&&c(g)})}else switch((n!==void 0||a.has(void 0))&&c(a.get(n)),h&&c(a.get(ii)),e){case"add":l?h&&c(a.get("length")):(c(a.get(gr)),Hr(t)&&c(a.get(_c)));break;case"delete":l||(c(a.get(gr)),Hr(t)&&c(a.get(_c)));break;case"set":Hr(t)&&c(a.get(gr));break}}sl()}function x_(t,e){const n=wo.get(t);return n&&n.get(e)}function Nr(t){const e=ye(t);return e===t?e:(ct(e,"iterate",ii),It(t)?e:e.map(Mt))}function ra(t){return ct(t=ye(t),"iterate",ii),t}function Ht(t,e){return vn(t)?es(mn(t)?Mt(e):e):Mt(e)}const M_={__proto__:null,[Symbol.iterator](){return Qa(this,Symbol.iterator,t=>Ht(this,t))},concat(...t){return Nr(this).concat(...t.map(e=>re(e)?Nr(e):e))},entries(){return Qa(this,"entries",t=>(t[1]=Ht(this,t[1]),t))},every(t,e){return cn(this,"every",t,e,void 0,arguments)},filter(t,e){return cn(this,"filter",t,e,n=>n.map(r=>Ht(this,r)),arguments)},find(t,e){return cn(this,"find",t,e,n=>Ht(this,n),arguments)},findIndex(t,e){return cn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return cn(this,"findLast",t,e,n=>Ht(this,n),arguments)},findLastIndex(t,e){return cn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return cn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ja(this,"includes",t)},indexOf(...t){return Ja(this,"indexOf",t)},join(t){return Nr(this).join(t)},lastIndexOf(...t){return Ja(this,"lastIndexOf",t)},map(t,e){return cn(this,"map",t,e,void 0,arguments)},pop(){return Os(this,"pop")},push(...t){return Os(this,"push",t)},reduce(t,...e){return nh(this,"reduce",t,e)},reduceRight(t,...e){return nh(this,"reduceRight",t,e)},shift(){return Os(this,"shift")},some(t,e){return cn(this,"some",t,e,void 0,arguments)},splice(...t){return Os(this,"splice",t)},toReversed(){return Nr(this).toReversed()},toSorted(t){return Nr(this).toSorted(t)},toSpliced(...t){return Nr(this).toSpliced(...t)},unshift(...t){return Os(this,"unshift",t)},values(){return Qa(this,"values",t=>Ht(this,t))}};function Qa(t,e,n){const r=ra(t),s=r[e]();return r!==t&&!It(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const L_=Array.prototype;function cn(t,e,n,r,s,i){const a=ra(t),c=a!==t&&!It(t),l=a[e];if(l!==L_[e]){const g=l.apply(t,i);return c?Mt(g):g}let h=n;a!==t&&(c?h=function(g,y){return n.call(this,Ht(t,g),y,t)}:n.length>2&&(h=function(g,y){return n.call(this,g,y,t)}));const d=l.call(a,h,r);return c&&s?s(d):d}function nh(t,e,n,r){const s=ra(t),i=s!==t&&!It(t);let a=n,c=!1;s!==t&&(i?(c=r.length===0,a=function(h,d,g){return c&&(c=!1,h=Ht(t,h)),n.call(this,h,Ht(t,d),g,t)}):n.length>3&&(a=function(h,d,g){return n.call(this,h,d,g,t)}));const l=s[e](a,...r);return c?Ht(t,l):l}function Ja(t,e,n){const r=ye(t);ct(r,"iterate",ii);const s=r[e](...n);return(s===-1||s===!1)&&ia(n[0])?(n[0]=ye(n[0]),r[e](...n)):s}function Os(t,e,n=[]){_n(),rl();const r=ye(t)[e].apply(t,n);return sl(),yn(),r}const F_=Zc("__proto__,__v_isRef,__isVue"),Dd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(At));function U_(t){At(t)||(t=String(t));const e=ye(this);return ct(e,"has",t),e.hasOwnProperty(t)}class Nd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Q_:Ld:i?Md:xd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=re(e);if(!s){let l;if(a&&(l=M_[n]))return l;if(n==="hasOwnProperty")return U_}const c=Reflect.get(e,n,Me(e)?e:r);if((At(n)?Dd.has(n):F_(n))||(s||ct(e,"get",n),i))return c;if(Me(c)){const l=a&&Zo(n)?c:c.value;return s&&Ae(l)?vc(l):l}return Ae(c)?s?vc(c):sa(c):c}}class Od extends Nd{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const a=re(e)&&Zo(n);if(!this._isShallow){const h=vn(i);if(!It(r)&&!vn(r)&&(i=ye(i),r=ye(r)),!a&&Me(i)&&!Me(r))return h||(i.value=r),!0}const c=a?Number(n)<e.length:Te(e,n),l=Reflect.set(e,n,r,Me(e)?e:s);return e===ye(s)&&(c?Wt(r,i)&&hn(e,"set",n,r):hn(e,"add",n,r)),l}deleteProperty(e,n){const r=Te(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&hn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!At(n)||!Dd.has(n))&&ct(e,"has",n),r}ownKeys(e){return ct(e,"iterate",re(e)?"length":gr),Reflect.ownKeys(e)}}class B_ extends Nd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const $_=new Od,j_=new B_,q_=new Od(!0);const yc=t=>t,Qi=t=>Reflect.getPrototypeOf(t);function H_(t,e,n){return function(...r){const s=this.__v_raw,i=ye(s),a=Hr(i),c=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,h=s[t](...r),d=n?yc:e?es:Mt;return!e&&ct(i,"iterate",l?_c:gr),et(Object.create(h),{next(){const{value:g,done:y}=h.next();return y?{value:g,done:y}:{value:c?[d(g[0]),d(g[1])]:d(g),done:y}}})}}function Ji(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function z_(t,e){const n={get(s){const i=this.__v_raw,a=ye(i),c=ye(s);t||(Wt(s,c)&&ct(a,"get",s),ct(a,"get",c));const{has:l}=Qi(a),h=e?yc:t?es:Mt;if(l.call(a,s))return h(i.get(s));if(l.call(a,c))return h(i.get(c));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ct(ye(s),"iterate",gr),s.size},has(s){const i=this.__v_raw,a=ye(i),c=ye(s);return t||(Wt(s,c)&&ct(a,"has",s),ct(a,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const a=this,c=a.__v_raw,l=ye(c),h=e?yc:t?es:Mt;return!t&&ct(l,"iterate",gr),c.forEach((d,g)=>s.call(i,h(d),h(g),a))}};return et(n,t?{add:Ji("add"),set:Ji("set"),delete:Ji("delete"),clear:Ji("clear")}:{add(s){const i=ye(this),a=Qi(i),c=ye(s),l=!e&&!It(s)&&!vn(s)?c:s;return a.has.call(i,l)||Wt(s,l)&&a.has.call(i,s)||Wt(c,l)&&a.has.call(i,c)||(i.add(l),hn(i,"add",l,l)),this},set(s,i){!e&&!It(i)&&!vn(i)&&(i=ye(i));const a=ye(this),{has:c,get:l}=Qi(a);let h=c.call(a,s);h||(s=ye(s),h=c.call(a,s));const d=l.call(a,s);return a.set(s,i),h?Wt(i,d)&&hn(a,"set",s,i):hn(a,"add",s,i),this},delete(s){const i=ye(this),{has:a,get:c}=Qi(i);let l=a.call(i,s);l||(s=ye(s),l=a.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&hn(i,"delete",s,void 0),h},clear(){const s=ye(this),i=s.size!==0,a=s.clear();return i&&hn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=H_(s,t,e)}),n}function al(t,e){const n=z_(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Te(n,s)&&s in r?n:r,s,i)}const W_={get:al(!1,!1)},K_={get:al(!1,!0)},G_={get:al(!0,!1)};const xd=new WeakMap,Md=new WeakMap,Ld=new WeakMap,Q_=new WeakMap;function J_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function X_(t){return t.__v_skip||!Object.isExtensible(t)?0:J_(I_(t))}function sa(t){return vn(t)?t:cl(t,!1,$_,W_,xd)}function Y_(t){return cl(t,!1,q_,K_,Md)}function vc(t){return cl(t,!0,j_,G_,Ld)}function cl(t,e,n,r,s){if(!Ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=X_(t);if(i===0)return t;const a=s.get(t);if(a)return a;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function mn(t){return vn(t)?mn(t.__v_raw):!!(t&&t.__v_isReactive)}function vn(t){return!!(t&&t.__v_isReadonly)}function It(t){return!!(t&&t.__v_isShallow)}function ia(t){return t?!!t.__v_raw:!1}function ye(t){const e=t&&t.__v_raw;return e?ye(e):t}function ll(t){return!Te(t,"__v_skip")&&Object.isExtensible(t)&&_d(t,"__v_skip",!0),t}const Mt=t=>Ae(t)?sa(t):t,es=t=>Ae(t)?vc(t):t;function Me(t){return t?t.__v_isRef===!0:!1}function Z_(t){return ey(t,!1)}function ey(t,e){return Me(t)?t:new ty(t,e)}class ty{constructor(e,n){this.dep=new ol,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ye(e),this._value=n?e:Mt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||It(e)||vn(e);e=r?e:ye(e),Wt(e,n)&&(this._rawValue=e,this._value=r?e:Mt(e),this.dep.trigger())}}function de(t){return Me(t)?t.value:t}const ny={get:(t,e,n)=>e==="__v_raw"?t:de(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Me(s)&&!Me(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Fd(t){return mn(t)?t:new Proxy(t,ny)}function ry(t){const e=re(t)?new Array(t.length):{};for(const n in t)e[n]=iy(t,n);return e}class sy{constructor(e,n,r){this._object=e,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._key=At(n)?n:String(n),this._raw=ye(e);let s=!0,i=e;if(!re(e)||At(this._key)||!Zo(this._key))do s=!ia(i)||It(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=de(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Me(this._raw[this._key])){const n=this._object[this._key];if(Me(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return x_(this._raw,this._key)}}function iy(t,e,n){return new sy(t,e,n)}class oy{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ol(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=si-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ce!==this)return Sd(this,!0),!0}get value(){const e=this.dep.track();return Pd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ay(t,e,n=!1){let r,s;return ce(t)?r=t:(r=t.get,s=t.set),new oy(r,s,n)}const Xi={},Ao=new WeakMap;let ur;function cy(t,e=!1,n=ur){if(n){let r=Ao.get(n);r||Ao.set(n,r=[]),r.push(t)}}function ly(t,e,n=Se){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:c,call:l}=n,h=z=>s?z:It(z)||s===!1||s===0?fn(z,1):fn(z);let d,g,y,b,V=!1,N=!1;if(Me(t)?(g=()=>t.value,V=It(t)):mn(t)?(g=()=>h(t),V=!0):re(t)?(N=!0,V=t.some(z=>mn(z)||It(z)),g=()=>t.map(z=>{if(Me(z))return z.value;if(mn(z))return h(z);if(ce(z))return l?l(z,2):z()})):ce(t)?e?g=l?()=>l(t,2):t:g=()=>{if(y){_n();try{y()}finally{yn()}}const z=ur;ur=d;try{return l?l(t,3,[b]):t(b)}finally{ur=z}}:g=Kt,e&&s){const z=g,oe=s===!0?1/0:s;g=()=>fn(z(),oe)}const F=wd(),Q=()=>{d.stop(),F&&F.active&&el(F.effects,d)};if(i&&e){const z=e;e=(...oe)=>{z(...oe),Q()}}let j=N?new Array(t.length).fill(Xi):Xi;const G=z=>{if(!(!(d.flags&1)||!d.dirty&&!z))if(e){const oe=d.run();if(s||V||(N?oe.some((ve,I)=>Wt(ve,j[I])):Wt(oe,j))){y&&y();const ve=ur;ur=d;try{const I=[oe,j===Xi?void 0:N&&j[0]===Xi?[]:j,b];j=oe,l?l(e,3,I):e(...I)}finally{ur=ve}}}else d.run()};return c&&c(G),d=new Ad(g),d.scheduler=a?()=>a(G,!1):G,b=z=>cy(z,!1,d),y=d.onStop=()=>{const z=Ao.get(d);if(z){if(l)l(z,4);else for(const oe of z)oe();Ao.delete(d)}},e?r?G(!0):j=d.run():a?a(G.bind(null,!0),!0):d.run(),Q.pause=d.pause.bind(d),Q.resume=d.resume.bind(d),Q.stop=Q,Q}function fn(t,e=1/0,n){if(e<=0||!Ae(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Me(t))fn(t.value,e,n);else if(re(t))for(let r=0;r<t.length;r++)fn(t[r],e,n);else if(dd(t)||Hr(t))t.forEach(r=>{fn(r,e,n)});else if(md(t)){for(const r in t)fn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&fn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function yi(t,e,n,r){try{return r?t(...r):t()}catch(s){oa(s,e,n)}}function en(t,e,n,r){if(ce(t)){const s=yi(t,e,n,r);return s&&pd(s)&&s.catch(i=>{oa(i,e,n)}),s}if(re(t)){const s=[];for(let i=0;i<t.length;i++)s.push(en(t[i],e,n,r));return s}}function oa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Se;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const d=c.ec;if(d){for(let g=0;g<d.length;g++)if(d[g](t,l,h)===!1)return}c=c.parent}if(i){_n(),yi(i,null,10,[t,l,h]),yn();return}}uy(t,n,s,r,a)}function uy(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const gt=[];let jt=-1;const zr=[];let Nn=null,Lr=0;const Ud=Promise.resolve();let bo=null;function Bd(t){const e=bo||Ud;return t?e.then(this?t.bind(this):t):e}function hy(t){let e=jt+1,n=gt.length;for(;e<n;){const r=e+n>>>1,s=gt[r],i=oi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function ul(t){if(!(t.flags&1)){const e=oi(t),n=gt[gt.length-1];!n||!(t.flags&2)&&e>=oi(n)?gt.push(t):gt.splice(hy(e),0,t),t.flags|=1,$d()}}function $d(){bo||(bo=Ud.then(qd))}function fy(t){re(t)?zr.push(...t):Nn&&t.id===-1?Nn.splice(Lr+1,0,t):t.flags&1||(zr.push(t),t.flags|=1),$d()}function rh(t,e,n=jt+1){for(;n<gt.length;n++){const r=gt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;gt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function jd(t){if(zr.length){const e=[...new Set(zr)].sort((n,r)=>oi(n)-oi(r));if(zr.length=0,Nn){Nn.push(...e);return}for(Nn=e,Lr=0;Lr<Nn.length;Lr++){const n=Nn[Lr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Nn=null,Lr=0}}const oi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function qd(t){try{for(jt=0;jt<gt.length;jt++){const e=gt[jt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),yi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;jt<gt.length;jt++){const e=gt[jt];e&&(e.flags&=-2)}jt=-1,gt.length=0,jd(),bo=null,(gt.length||zr.length)&&qd()}}let Ze=null,Hd=null;function So(t){const e=Ze;return Ze=t,Hd=t&&t.type.__scopeId||null,e}function Ls(t,e=Ze,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&gh(-1);const i=So(e);let a;try{a=t(...s)}finally{So(i),r._d&&gh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Or(t,e){if(Ze===null)return t;const n=ua(Ze),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,c,l=Se]=e[s];i&&(ce(i)&&(i={mounted:i,updated:i}),i.deep&&fn(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function ar(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let l=c.dir[r];l&&(_n(),en(l,n,8,[t.el,c,t,e]),yn())}}function dy(t,e){if(ut){let n=ut.provides;const r=ut.parent&&ut.parent.provides;r===n&&(n=ut.provides=Object.create(r)),n[t]=e}}function zs(t,e,n=!1){const r=_p();if(r||mr){let s=mr?mr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ce(e)?e.call(r&&r.proxy):e}}function py(){return!!(_p()||mr)}const gy=Symbol.for("v-scx"),my=()=>zs(gy);function co(t,e,n){return zd(t,e,n)}function zd(t,e,n=Se){const{immediate:r,deep:s,flush:i,once:a}=n,c=et({},n),l=e&&r||!e&&i!=="post";let h;if(ci){if(i==="sync"){const b=my();h=b.__watcherHandles||(b.__watcherHandles=[])}else if(!l){const b=()=>{};return b.stop=Kt,b.resume=Kt,b.pause=Kt,b}}const d=ut;c.call=(b,V,N)=>en(b,d,V,N);let g=!1;i==="post"?c.scheduler=b=>{_t(b,d&&d.suspense)}:i!=="sync"&&(g=!0,c.scheduler=(b,V)=>{V?b():ul(b)}),c.augmentJob=b=>{e&&(b.flags|=4),g&&(b.flags|=2,d&&(b.id=d.uid,b.i=d))};const y=ly(t,e,c);return ci&&(h?h.push(y):l&&y()),y}function _y(t,e,n){const r=this.proxy,s=qe(t)?t.includes(".")?Wd(r,t):()=>r[t]:t.bind(r,r);let i;ce(e)?i=e:(i=e.handler,n=e);const a=vi(this),c=zd(s,i.bind(r),n);return a(),c}function Wd(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const yy=Symbol("_vte"),vy=t=>t.__isTeleport,Ey=Symbol("_leaveCb");function hl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,hl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ty(t,e){return ce(t)?et({name:t.name},e,{setup:t}):t}function Kd(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function sh(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Ro=new WeakMap;function Ws(t,e,n,r,s=!1){if(re(t)){t.forEach((N,F)=>Ws(N,e&&(re(e)?e[F]:e),n,r,s));return}if(Wr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ws(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ua(r.component):r.el,a=s?null:i,{i:c,r:l}=t,h=e&&e.r,d=c.refs===Se?c.refs={}:c.refs,g=c.setupState,y=ye(g),b=g===Se?fd:N=>sh(d,N)?!1:Te(y,N),V=(N,F)=>!(F&&sh(d,F));if(h!=null&&h!==l){if(ih(e),qe(h))d[h]=null,b(h)&&(g[h]=null);else if(Me(h)){const N=e;V(h,N.k)&&(h.value=null),N.k&&(d[N.k]=null)}}if(ce(l))yi(l,c,12,[a,d]);else{const N=qe(l),F=Me(l);if(N||F){const Q=()=>{if(t.f){const j=N?b(l)?g[l]:d[l]:V()||!t.k?l.value:d[t.k];if(s)re(j)&&el(j,i);else if(re(j))j.includes(i)||j.push(i);else if(N)d[l]=[i],b(l)&&(g[l]=d[l]);else{const G=[i];V(l,t.k)&&(l.value=G),t.k&&(d[t.k]=G)}}else N?(d[l]=a,b(l)&&(g[l]=a)):F&&(V(l,t.k)&&(l.value=a),t.k&&(d[t.k]=a))};if(a){const j=()=>{Q(),Ro.delete(t)};j.id=-1,Ro.set(t,j),_t(j,n)}else ih(t),Q()}}}function ih(t){const e=Ro.get(t);e&&(e.flags|=8,Ro.delete(t))}na().requestIdleCallback;na().cancelIdleCallback;const Wr=t=>!!t.type.__asyncLoader,Gd=t=>t.type.__isKeepAlive;function Iy(t,e){Qd(t,"a",e)}function wy(t,e){Qd(t,"da",e)}function Qd(t,e,n=ut){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(aa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Gd(s.parent.vnode)&&Ay(r,e,n,s),s=s.parent}}function Ay(t,e,n,r){const s=aa(e,t,r,!0);Jd(()=>{el(r[e],s)},n)}function aa(t,e,n=ut,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{_n();const c=vi(n),l=en(e,n,t,a);return c(),yn(),l});return r?s.unshift(i):s.push(i),i}}const bn=t=>(e,n=ut)=>{(!ci||t==="sp")&&aa(t,(...r)=>e(...r),n)},by=bn("bm"),Sy=bn("m"),Ry=bn("bu"),Cy=bn("u"),Py=bn("bum"),Jd=bn("um"),Vy=bn("sp"),ky=bn("rtg"),Dy=bn("rtc");function Ny(t,e=ut){aa("ec",t,e)}const Oy="components";function cr(t,e){return My(Oy,t,!0,e)||t}const xy=Symbol.for("v-ndc");function My(t,e,n=!0,r=!1){const s=Ze||ut;if(s){const i=s.type;{const c=Ev(i,!1);if(c&&(c===e||c===mt(e)||c===ta(mt(e))))return i}const a=oh(s[t]||i[t],e)||oh(s.appContext[t],e);return!a&&r?i:a}}function oh(t,e){return t&&(t[e]||t[mt(e)]||t[ta(mt(e))])}function On(t,e,n,r){let s;const i=n,a=re(t);if(a||qe(t)){const c=a&&mn(t);let l=!1,h=!1;c&&(l=!It(t),h=vn(t),t=ra(t)),s=new Array(t.length);for(let d=0,g=t.length;d<g;d++)s[d]=e(l?h?es(Mt(t[d])):Mt(t[d]):t[d],d,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Ae(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const d=c[l];s[l]=e(t[d],d,l,i)}}else s=[];return s}function lo(t,e,n={},r,s){if(Ze.ce||Ze.parent&&Wr(Ze.parent)&&Ze.parent.ce){const h=Object.keys(n).length>0;return e!=="default"&&(n.name=e),ge(),xn(Fe,null,[wt("slot",n,r)],h?-2:64)}let i=t[e];i&&i._c&&(i._d=!1),ge();const a=i&&Xd(i(n)),c=n.key||a&&a.key,l=xn(Fe,{key:(c&&!At(c)?c:`_${e}`)+(!a&&r?"_fb":"")},a||[],a&&t._===1?64:-2);return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function Xd(t){return t.some(e=>pl(e)?!(e.type===En||e.type===Fe&&!Xd(e.children)):!0)?t:null}const Ec=t=>t?yp(t)?ua(t):Ec(t.parent):null,Ks=et(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ec(t.parent),$root:t=>Ec(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Zd(t),$forceUpdate:t=>t.f||(t.f=()=>{ul(t.update)}),$nextTick:t=>t.n||(t.n=Bd.bind(t.proxy)),$watch:t=>_y.bind(t)}),Xa=(t,e)=>t!==Se&&!t.__isScriptSetup&&Te(t,e),Ly={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:c,appContext:l}=t;if(e[0]!=="$"){const y=a[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Xa(r,e))return a[e]=1,r[e];if(s!==Se&&Te(s,e))return a[e]=2,s[e];if(Te(i,e))return a[e]=3,i[e];if(n!==Se&&Te(n,e))return a[e]=4,n[e];Tc&&(a[e]=0)}}const h=Ks[e];let d,g;if(h)return e==="$attrs"&&ct(t.attrs,"get",""),h(t);if((d=c.__cssModules)&&(d=d[e]))return d;if(n!==Se&&Te(n,e))return a[e]=4,n[e];if(g=l.config.globalProperties,Te(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Xa(s,e)?(s[e]=n,!0):r!==Se&&Te(r,e)?(r[e]=n,!0):Te(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:a}},c){let l;return!!(n[c]||t!==Se&&c[0]!=="$"&&Te(t,c)||Xa(e,c)||Te(i,c)||Te(r,c)||Te(Ks,c)||Te(s.config.globalProperties,c)||(l=a.__cssModules)&&l[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Te(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ah(t){return re(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Tc=!0;function Fy(t){const e=Zd(t),n=t.proxy,r=t.ctx;Tc=!1,e.beforeCreate&&ch(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:c,provide:l,inject:h,created:d,beforeMount:g,mounted:y,beforeUpdate:b,updated:V,activated:N,deactivated:F,beforeDestroy:Q,beforeUnmount:j,destroyed:G,unmounted:z,render:oe,renderTracked:ve,renderTriggered:I,errorCaptured:m,serverPrefetch:_,expose:T,inheritAttrs:A,components:S,directives:E,filters:ft}=e;if(h&&Uy(h,r,null),a)for(const le in a){const me=a[le];ce(me)&&(r[le]=me.bind(n))}if(s){const le=s.call(n,n);Ae(le)&&(t.data=sa(le))}if(Tc=!0,i)for(const le in i){const me=i[le],Pt=ce(me)?me.bind(n,n):ce(me.get)?me.get.bind(n,n):Kt,er=!ce(me)&&ce(me.set)?me.set.bind(n):Kt,rn=Ep({get:Pt,set:er});Object.defineProperty(r,le,{enumerable:!0,configurable:!0,get:()=>rn.value,set:He=>rn.value=He})}if(c)for(const le in c)Yd(c[le],r,n,le);if(l){const le=ce(l)?l.call(n):l;Reflect.ownKeys(le).forEach(me=>{dy(me,le[me])})}d&&ch(d,t,"c");function De(le,me){re(me)?me.forEach(Pt=>le(Pt.bind(n))):me&&le(me.bind(n))}if(De(by,g),De(Sy,y),De(Ry,b),De(Cy,V),De(Iy,N),De(wy,F),De(Ny,m),De(Dy,ve),De(ky,I),De(Py,j),De(Jd,z),De(Vy,_),re(T))if(T.length){const le=t.exposed||(t.exposed={});T.forEach(me=>{Object.defineProperty(le,me,{get:()=>n[me],set:Pt=>n[me]=Pt,enumerable:!0})})}else t.exposed||(t.exposed={});oe&&t.render===Kt&&(t.render=oe),A!=null&&(t.inheritAttrs=A),S&&(t.components=S),E&&(t.directives=E),_&&Kd(t)}function Uy(t,e,n=Kt){re(t)&&(t=Ic(t));for(const r in t){const s=t[r];let i;Ae(s)?"default"in s?i=zs(s.from||r,s.default,!0):i=zs(s.from||r):i=zs(s),Me(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function ch(t,e,n){en(re(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Yd(t,e,n,r){let s=r.includes(".")?Wd(n,r):()=>n[r];if(qe(t)){const i=e[t];ce(i)&&co(s,i)}else if(ce(t))co(s,t.bind(n));else if(Ae(t))if(re(t))t.forEach(i=>Yd(i,e,n,r));else{const i=ce(t.handler)?t.handler.bind(n):e[t.handler];ce(i)&&co(s,i,t)}}function Zd(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>Co(l,h,a,!0)),Co(l,e,a)),Ae(e)&&i.set(e,l),l}function Co(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Co(t,i,n,!0),s&&s.forEach(a=>Co(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const c=By[a]||n&&n[a];t[a]=c?c(t[a],e[a]):e[a]}return t}const By={data:lh,props:uh,emits:uh,methods:Fs,computed:Fs,beforeCreate:pt,created:pt,beforeMount:pt,mounted:pt,beforeUpdate:pt,updated:pt,beforeDestroy:pt,beforeUnmount:pt,destroyed:pt,unmounted:pt,activated:pt,deactivated:pt,errorCaptured:pt,serverPrefetch:pt,components:Fs,directives:Fs,watch:jy,provide:lh,inject:$y};function lh(t,e){return e?t?function(){return et(ce(t)?t.call(this,this):t,ce(e)?e.call(this,this):e)}:e:t}function $y(t,e){return Fs(Ic(t),Ic(e))}function Ic(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function pt(t,e){return t?[...new Set([].concat(t,e))]:e}function Fs(t,e){return t?et(Object.create(null),t,e):e}function uh(t,e){return t?re(t)&&re(e)?[...new Set([...t,...e])]:et(Object.create(null),ah(t),ah(e??{})):e}function jy(t,e){if(!t)return e;if(!e)return t;const n=et(Object.create(null),t);for(const r in e)n[r]=pt(t[r],e[r]);return n}function ep(){return{app:null,config:{isNativeTag:fd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qy=0;function Hy(t,e){return function(r,s=null){ce(r)||(r=et({},r)),s!=null&&!Ae(s)&&(s=null);const i=ep(),a=new WeakSet,c=[];let l=!1;const h=i.app={_uid:qy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Iv,get config(){return i.config},set config(d){},use(d,...g){return a.has(d)||(d&&ce(d.install)?(a.add(d),d.install(h,...g)):ce(d)&&(a.add(d),d(h,...g))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,g){return g?(i.components[d]=g,h):i.components[d]},directive(d,g){return g?(i.directives[d]=g,h):i.directives[d]},mount(d,g,y){if(!l){const b=h._ceVNode||wt(r,s);return b.appContext=i,y===!0?y="svg":y===!1&&(y=void 0),t(b,d,y),l=!0,h._container=d,d.__vue_app__=h,ua(b.component)}},onUnmount(d){c.push(d)},unmount(){l&&(en(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,g){return i.provides[d]=g,h},runWithContext(d){const g=mr;mr=h;try{return d()}finally{mr=g}}};return h}}let mr=null;const zy=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${mt(e)}Modifiers`]||t[`${wr(e)}Modifiers`];function Wy(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Se;let s=n;const i=e.startsWith("update:"),a=i&&zy(r,e.slice(7));a&&(a.trim&&(s=n.map(d=>qe(d)?d.trim():d)),a.number&&(s=n.map(tl)));let c,l=r[c=Wa(e)]||r[c=Wa(mt(e))];!l&&i&&(l=r[c=Wa(wr(e))]),l&&en(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,en(h,t,6,s)}}const Ky=new WeakMap;function tp(t,e,n=!1){const r=n?Ky:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},c=!1;if(!ce(t)){const l=h=>{const d=tp(h,e,!0);d&&(c=!0,et(a,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Ae(t)&&r.set(t,null),null):(re(i)?i.forEach(l=>a[l]=null):et(a,i),Ae(t)&&r.set(t,a),a)}function ca(t,e){return!t||!Xo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Te(t,e[0].toLowerCase()+e.slice(1))||Te(t,wr(e))||Te(t,e))}function hh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:c,emit:l,render:h,renderCache:d,props:g,data:y,setupState:b,ctx:V,inheritAttrs:N}=t,F=So(t);let Q,j;try{if(n.shapeFlag&4){const z=s||r,oe=z;Q=zt(h.call(oe,z,d,g,b,y,V)),j=c}else{const z=e;Q=zt(z.length>1?z(g,{attrs:c,slots:a,emit:l}):z(g,null)),j=e.props?c:Gy(c)}}catch(z){Gs.length=0,oa(z,t,1),Q=wt(En)}let G=Q;if(j&&N!==!1){const z=Object.keys(j),{shapeFlag:oe}=G;z.length&&oe&7&&(i&&z.some(Yo)&&(j=Qy(j,i)),G=ts(G,j,!1,!0))}return n.dirs&&(G=ts(G,null,!1,!0),G.dirs=G.dirs?G.dirs.concat(n.dirs):n.dirs),n.transition&&hl(G,n.transition),Q=G,So(F),Q}const Gy=t=>{let e;for(const n in t)(n==="class"||n==="style"||Xo(n))&&((e||(e={}))[n]=t[n]);return e},Qy=(t,e)=>{const n={};for(const r in t)(!Yo(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Jy(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?fh(r,a,h):!!a;if(l&8){const d=e.dynamicProps;for(let g=0;g<d.length;g++){const y=d[g];if(np(a,r,y)&&!ca(h,y))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?fh(r,a,h):!0:!!a;return!1}function fh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(np(e,t,i)&&!ca(n,i))return!0}return!1}function np(t,e,n){const r=t[n],s=e[n];return n==="style"&&Ae(r)&&Ae(s)?!ri(r,s):r!==s}function Xy({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const rp={},sp=()=>Object.create(rp),ip=t=>Object.getPrototypeOf(t)===rp;function Yy(t,e,n,r=!1){const s={},i=sp();t.propsDefaults=Object.create(null),op(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:Y_(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Zy(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,c=ye(s),[l]=t.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let g=0;g<d.length;g++){let y=d[g];if(ca(t.emitsOptions,y))continue;const b=e[y];if(l)if(Te(i,y))b!==i[y]&&(i[y]=b,h=!0);else{const V=mt(y);s[V]=wc(l,c,V,b,t,!1)}else b!==i[y]&&(i[y]=b,h=!0)}}}else{op(t,e,s,i)&&(h=!0);let d;for(const g in c)(!e||!Te(e,g)&&((d=wr(g))===g||!Te(e,d)))&&(l?n&&(n[g]!==void 0||n[d]!==void 0)&&(s[g]=wc(l,c,g,void 0,t,!0)):delete s[g]);if(i!==c)for(const g in i)(!e||!Te(e,g))&&(delete i[g],h=!0)}h&&hn(t.attrs,"set","")}function op(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,c;if(e)for(let l in e){if(js(l))continue;const h=e[l];let d;s&&Te(s,d=mt(l))?!i||!i.includes(d)?n[d]=h:(c||(c={}))[d]=h:ca(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,a=!0)}if(i){const l=ye(n),h=c||Se;for(let d=0;d<i.length;d++){const g=i[d];n[g]=wc(s,l,g,h[g],t,!Te(h,g))}}return a}function wc(t,e,n,r,s,i){const a=t[n];if(a!=null){const c=Te(a,"default");if(c&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ce(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=vi(s);r=h[n]=l.call(null,e),d()}}else r=l;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!c?r=!1:a[1]&&(r===""||r===wr(n))&&(r=!0))}return r}const ev=new WeakMap;function ap(t,e,n=!1){const r=n?ev:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},c=[];let l=!1;if(!ce(t)){const d=g=>{l=!0;const[y,b]=ap(g,e,!0);et(a,y),b&&c.push(...b)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return Ae(t)&&r.set(t,qr),qr;if(re(i))for(let d=0;d<i.length;d++){const g=mt(i[d]);dh(g)&&(a[g]=Se)}else if(i)for(const d in i){const g=mt(d);if(dh(g)){const y=i[d],b=a[g]=re(y)||ce(y)?{type:y}:et({},y),V=b.type;let N=!1,F=!0;if(re(V))for(let Q=0;Q<V.length;++Q){const j=V[Q],G=ce(j)&&j.name;if(G==="Boolean"){N=!0;break}else G==="String"&&(F=!1)}else N=ce(V)&&V.name==="Boolean";b[0]=N,b[1]=F,(N||Te(b,"default"))&&c.push(g)}}const h=[a,c];return Ae(t)&&r.set(t,h),h}function dh(t){return t[0]!=="$"&&!js(t)}const fl=t=>t==="_"||t==="_ctx"||t==="$stable",dl=t=>re(t)?t.map(zt):[zt(t)],tv=(t,e,n)=>{if(e._n)return e;const r=Ls((...s)=>dl(e(...s)),n);return r._c=!1,r},cp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(fl(s))continue;const i=t[s];if(ce(i))e[s]=tv(s,i,r);else if(i!=null){const a=dl(i);e[s]=()=>a}}},lp=(t,e)=>{const n=dl(e);t.slots.default=()=>n},up=(t,e,n)=>{for(const r in e)(n||!fl(r))&&(t[r]=e[r])},nv=(t,e,n)=>{const r=t.slots=sp();if(t.vnode.shapeFlag&32){const s=e._;s?(up(r,e,n),n&&_d(r,"_",s,!0)):cp(e,r)}else e&&lp(t,e)},rv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=Se;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:up(s,e,n):(i=!e.$stable,cp(e,s)),a=e}else e&&(lp(t,e),a={default:1});if(i)for(const c in s)!fl(c)&&a[c]==null&&delete s[c]},_t=cv;function sv(t){return iv(t)}function iv(t,e){const n=na();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:c,createComment:l,setText:h,setElementText:d,parentNode:g,nextSibling:y,setScopeId:b=Kt,insertStaticContent:V}=t,N=(v,w,P,L=null,O=null,M=null,q=void 0,$=null,U=!!w.dynamicChildren)=>{if(v===w)return;v&&!xs(v,w)&&(L=sn(v),He(v,O,M,!0),v=null),w.patchFlag===-2&&(U=!1,w.dynamicChildren=null);const{type:x,ref:Y,shapeFlag:H}=w;switch(x){case la:F(v,w,P,L);break;case En:Q(v,w,P,L);break;case Za:v==null&&j(w,P,L,q);break;case Fe:S(v,w,P,L,O,M,q,$,U);break;default:H&1?oe(v,w,P,L,O,M,q,$,U):H&6?E(v,w,P,L,O,M,q,$,U):(H&64||H&128)&&x.process(v,w,P,L,O,M,q,$,U,Ut)}Y!=null&&O?Ws(Y,v&&v.ref,M,w||v,!w):Y==null&&v&&v.ref!=null&&Ws(v.ref,null,M,v,!0)},F=(v,w,P,L)=>{if(v==null)r(w.el=c(w.children),P,L);else{const O=w.el=v.el;w.children!==v.children&&h(O,w.children)}},Q=(v,w,P,L)=>{v==null?r(w.el=l(w.children||""),P,L):w.el=v.el},j=(v,w,P,L)=>{[v.el,v.anchor]=V(v.children,w,P,L,v.el,v.anchor)},G=({el:v,anchor:w},P,L)=>{let O;for(;v&&v!==w;)O=y(v),r(v,P,L),v=O;r(w,P,L)},z=({el:v,anchor:w})=>{let P;for(;v&&v!==w;)P=y(v),s(v),v=P;s(w)},oe=(v,w,P,L,O,M,q,$,U)=>{if(w.type==="svg"?q="svg":w.type==="math"&&(q="mathml"),v==null)ve(w,P,L,O,M,q,$,U);else{const x=v.el&&v.el._isVueCE?v.el:null;try{x&&x._beginPatch(),_(v,w,O,M,q,$,U)}finally{x&&x._endPatch()}}},ve=(v,w,P,L,O,M,q,$)=>{let U,x;const{props:Y,shapeFlag:H,transition:J,dirs:Z}=v;if(U=v.el=a(v.type,M,Y&&Y.is,Y),H&8?d(U,v.children):H&16&&m(v.children,U,null,L,O,Ya(v,M),q,$),Z&&ar(v,null,L,"created"),I(U,v,v.scopeId,q,L),Y){for(const ae in Y)ae!=="value"&&!js(ae)&&i(U,ae,null,Y[ae],M,L);"value"in Y&&i(U,"value",null,Y.value,M),(x=Y.onVnodeBeforeMount)&&Bt(x,L,v)}Z&&ar(v,null,L,"beforeMount");const ee=ov(O,J);ee&&J.beforeEnter(U),r(U,w,P),((x=Y&&Y.onVnodeMounted)||ee||Z)&&_t(()=>{try{x&&Bt(x,L,v),ee&&J.enter(U),Z&&ar(v,null,L,"mounted")}finally{}},O)},I=(v,w,P,L,O)=>{if(P&&b(v,P),L)for(let M=0;M<L.length;M++)b(v,L[M]);if(O){let M=O.subTree;if(w===M||pp(M.type)&&(M.ssContent===w||M.ssFallback===w)){const q=O.vnode;I(v,q,q.scopeId,q.slotScopeIds,O.parent)}}},m=(v,w,P,L,O,M,q,$,U=0)=>{for(let x=U;x<v.length;x++){const Y=v[x]=$?un(v[x]):zt(v[x]);N(null,Y,w,P,L,O,M,q,$)}},_=(v,w,P,L,O,M,q)=>{const $=w.el=v.el;let{patchFlag:U,dynamicChildren:x,dirs:Y}=w;U|=v.patchFlag&16;const H=v.props||Se,J=w.props||Se;let Z;if(P&&lr(P,!1),(Z=J.onVnodeBeforeUpdate)&&Bt(Z,P,w,v),Y&&ar(w,v,P,"beforeUpdate"),P&&lr(P,!0),(H.innerHTML&&J.innerHTML==null||H.textContent&&J.textContent==null)&&d($,""),x?T(v.dynamicChildren,x,$,P,L,Ya(w,O),M):q||me(v,w,$,null,P,L,Ya(w,O),M,!1),U>0){if(U&16)A($,H,J,P,O);else if(U&2&&H.class!==J.class&&i($,"class",null,J.class,O),U&4&&i($,"style",H.style,J.style,O),U&8){const ee=w.dynamicProps;for(let ae=0;ae<ee.length;ae++){const Ee=ee[ae],Ne=H[Ee],Ue=J[Ee];(Ue!==Ne||Ee==="value")&&i($,Ee,Ne,Ue,O,P)}}U&1&&v.children!==w.children&&d($,w.children)}else!q&&x==null&&A($,H,J,P,O);((Z=J.onVnodeUpdated)||Y)&&_t(()=>{Z&&Bt(Z,P,w,v),Y&&ar(w,v,P,"updated")},L)},T=(v,w,P,L,O,M,q)=>{for(let $=0;$<w.length;$++){const U=v[$],x=w[$],Y=U.el&&(U.type===Fe||!xs(U,x)||U.shapeFlag&198)?g(U.el):P;N(U,x,Y,null,L,O,M,q,!0)}},A=(v,w,P,L,O)=>{if(w!==P){if(w!==Se)for(const M in w)!js(M)&&!(M in P)&&i(v,M,w[M],null,O,L);for(const M in P){if(js(M))continue;const q=P[M],$=w[M];q!==$&&M!=="value"&&i(v,M,$,q,O,L)}"value"in P&&i(v,"value",w.value,P.value,O)}},S=(v,w,P,L,O,M,q,$,U)=>{const x=w.el=v?v.el:c(""),Y=w.anchor=v?v.anchor:c("");let{patchFlag:H,dynamicChildren:J,slotScopeIds:Z}=w;Z&&($=$?$.concat(Z):Z),v==null?(r(x,P,L),r(Y,P,L),m(w.children||[],P,Y,O,M,q,$,U)):H>0&&H&64&&J&&v.dynamicChildren&&v.dynamicChildren.length===J.length?(T(v.dynamicChildren,J,P,O,M,q,$),(w.key!=null||O&&w===O.subTree)&&hp(v,w,!0)):me(v,w,P,Y,O,M,q,$,U)},E=(v,w,P,L,O,M,q,$,U)=>{w.slotScopeIds=$,v==null?w.shapeFlag&512?O.ctx.activate(w,P,L,q,U):ft(w,P,L,O,M,q,U):Ft(v,w,U)},ft=(v,w,P,L,O,M,q)=>{const $=v.component=gv(v,L,O);if(Gd(v)&&($.ctx.renderer=Ut),mv($,!1,q),$.asyncDep){if(O&&O.registerDep($,De,q),!v.el){const U=$.subTree=wt(En);Q(null,U,w,P),v.placeholder=U.el}}else De($,v,w,P,O,M,q)},Ft=(v,w,P)=>{const L=w.component=v.component;if(Jy(v,w,P))if(L.asyncDep&&!L.asyncResolved){le(L,w,P);return}else L.next=w,L.update();else w.el=v.el,L.vnode=w},De=(v,w,P,L,O,M,q)=>{const $=()=>{if(v.isMounted){let{next:H,bu:J,u:Z,parent:ee,vnode:ae}=v;{const nt=fp(v);if(nt){H&&(H.el=ae.el,le(v,H,q)),nt.asyncDep.then(()=>{_t(()=>{v.isUnmounted||x()},O)});return}}let Ee=H,Ne;lr(v,!1),H?(H.el=ae.el,le(v,H,q)):H=ae,J&&ao(J),(Ne=H.props&&H.props.onVnodeBeforeUpdate)&&Bt(Ne,ee,H,ae),lr(v,!0);const Ue=hh(v),bt=v.subTree;v.subTree=Ue,N(bt,Ue,g(bt.el),sn(bt),v,O,M),H.el=Ue.el,Ee===null&&Xy(v,Ue.el),Z&&_t(Z,O),(Ne=H.props&&H.props.onVnodeUpdated)&&_t(()=>Bt(Ne,ee,H,ae),O)}else{let H;const{el:J,props:Z}=w,{bm:ee,m:ae,parent:Ee,root:Ne,type:Ue}=v,bt=Wr(w);lr(v,!1),ee&&ao(ee),!bt&&(H=Z&&Z.onVnodeBeforeMount)&&Bt(H,Ee,w),lr(v,!0);{Ne.ce&&Ne.ce._hasShadowRoot()&&Ne.ce._injectChildStyle(Ue,v.parent?v.parent.type:void 0);const nt=v.subTree=hh(v);N(null,nt,P,L,v,O,M),w.el=nt.el}if(ae&&_t(ae,O),!bt&&(H=Z&&Z.onVnodeMounted)){const nt=w;_t(()=>Bt(H,Ee,nt),O)}(w.shapeFlag&256||Ee&&Wr(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&v.a&&_t(v.a,O),v.isMounted=!0,w=P=L=null}};v.scope.on();const U=v.effect=new Ad($);v.scope.off();const x=v.update=U.run.bind(U),Y=v.job=U.runIfDirty.bind(U);Y.i=v,Y.id=v.uid,U.scheduler=()=>ul(Y),lr(v,!0),x()},le=(v,w,P)=>{w.component=v;const L=v.vnode.props;v.vnode=w,v.next=null,Zy(v,w.props,L,P),rv(v,w.children,P),_n(),rh(v),yn()},me=(v,w,P,L,O,M,q,$,U=!1)=>{const x=v&&v.children,Y=v?v.shapeFlag:0,H=w.children,{patchFlag:J,shapeFlag:Z}=w;if(J>0){if(J&128){er(x,H,P,L,O,M,q,$,U);return}else if(J&256){Pt(x,H,P,L,O,M,q,$,U);return}}Z&8?(Y&16&&nr(x,O,M),H!==x&&d(P,H)):Y&16?Z&16?er(x,H,P,L,O,M,q,$,U):nr(x,O,M,!0):(Y&8&&d(P,""),Z&16&&m(H,P,L,O,M,q,$,U))},Pt=(v,w,P,L,O,M,q,$,U)=>{v=v||qr,w=w||qr;const x=v.length,Y=w.length,H=Math.min(x,Y);let J;for(J=0;J<H;J++){const Z=w[J]=U?un(w[J]):zt(w[J]);N(v[J],Z,P,null,O,M,q,$,U)}x>Y?nr(v,O,M,!0,!1,H):m(w,P,L,O,M,q,$,U,H)},er=(v,w,P,L,O,M,q,$,U)=>{let x=0;const Y=w.length;let H=v.length-1,J=Y-1;for(;x<=H&&x<=J;){const Z=v[x],ee=w[x]=U?un(w[x]):zt(w[x]);if(xs(Z,ee))N(Z,ee,P,null,O,M,q,$,U);else break;x++}for(;x<=H&&x<=J;){const Z=v[H],ee=w[J]=U?un(w[J]):zt(w[J]);if(xs(Z,ee))N(Z,ee,P,null,O,M,q,$,U);else break;H--,J--}if(x>H){if(x<=J){const Z=J+1,ee=Z<Y?w[Z].el:L;for(;x<=J;)N(null,w[x]=U?un(w[x]):zt(w[x]),P,ee,O,M,q,$,U),x++}}else if(x>J)for(;x<=H;)He(v[x],O,M,!0),x++;else{const Z=x,ee=x,ae=new Map;for(x=ee;x<=J;x++){const Qe=w[x]=U?un(w[x]):zt(w[x]);Qe.key!=null&&ae.set(Qe.key,x)}let Ee,Ne=0;const Ue=J-ee+1;let bt=!1,nt=0;const Rn=new Array(Ue);for(x=0;x<Ue;x++)Rn[x]=0;for(x=Z;x<=H;x++){const Qe=v[x];if(Ne>=Ue){He(Qe,O,M,!0);continue}let St;if(Qe.key!=null)St=ae.get(Qe.key);else for(Ee=ee;Ee<=J;Ee++)if(Rn[Ee-ee]===0&&xs(Qe,w[Ee])){St=Ee;break}St===void 0?He(Qe,O,M,!0):(Rn[St-ee]=x+1,St>=nt?nt=St:bt=!0,N(Qe,w[St],P,null,O,M,q,$,U),Ne++)}const Ts=bt?av(Rn):qr;for(Ee=Ts.length-1,x=Ue-1;x>=0;x--){const Qe=ee+x,St=w[Qe],Ni=w[Qe+1],Cr=Qe+1<Y?Ni.el||dp(Ni):L;Rn[x]===0?N(null,St,P,Cr,O,M,q,$,U):bt&&(Ee<0||x!==Ts[Ee]?rn(St,P,Cr,2):Ee--)}}},rn=(v,w,P,L,O=null)=>{const{el:M,type:q,transition:$,children:U,shapeFlag:x}=v;if(x&6){rn(v.component.subTree,w,P,L);return}if(x&128){v.suspense.move(w,P,L);return}if(x&64){q.move(v,w,P,Ut);return}if(q===Fe){r(M,w,P);for(let H=0;H<U.length;H++)rn(U[H],w,P,L);r(v.anchor,w,P);return}if(q===Za){G(v,w,P);return}if(L!==2&&x&1&&$)if(L===0)$.beforeEnter(M),r(M,w,P),_t(()=>$.enter(M),O);else{const{leave:H,delayLeave:J,afterLeave:Z}=$,ee=()=>{v.ctx.isUnmounted?s(M):r(M,w,P)},ae=()=>{M._isLeaving&&M[Ey](!0),H(M,()=>{ee(),Z&&Z()})};J?J(M,ee,ae):ae()}else r(M,w,P)},He=(v,w,P,L=!1,O=!1)=>{const{type:M,props:q,ref:$,children:U,dynamicChildren:x,shapeFlag:Y,patchFlag:H,dirs:J,cacheIndex:Z,memo:ee}=v;if(H===-2&&(O=!1),$!=null&&(_n(),Ws($,null,P,v,!0),yn()),Z!=null&&(w.renderCache[Z]=void 0),Y&256){w.ctx.deactivate(v);return}const ae=Y&1&&J,Ee=!Wr(v);let Ne;if(Ee&&(Ne=q&&q.onVnodeBeforeUnmount)&&Bt(Ne,w,v),Y&6)tr(v.component,P,L);else{if(Y&128){v.suspense.unmount(P,L);return}ae&&ar(v,null,w,"beforeUnmount"),Y&64?v.type.remove(v,w,P,Ut,L):x&&!x.hasOnce&&(M!==Fe||H>0&&H&64)?nr(x,w,P,!1,!0):(M===Fe&&H&384||!O&&Y&16)&&nr(U,w,P),L&&ze(v)}const Ue=ee!=null&&Z==null;(Ee&&(Ne=q&&q.onVnodeUnmounted)||ae||Ue)&&_t(()=>{Ne&&Bt(Ne,w,v),ae&&ar(v,null,w,"unmounted"),Ue&&(v.el=null)},P)},ze=v=>{const{type:w,el:P,anchor:L,transition:O}=v;if(w===Fe){ka(P,L);return}if(w===Za){z(v);return}const M=()=>{s(P),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(v.shapeFlag&1&&O&&!O.persisted){const{leave:q,delayLeave:$}=O,U=()=>q(P,M);$?$(v.el,M,U):U()}else M()},ka=(v,w)=>{let P;for(;v!==w;)P=y(v),s(v),v=P;s(w)},tr=(v,w,P)=>{const{bum:L,scope:O,job:M,subTree:q,um:$,m:U,a:x}=v;ph(U),ph(x),L&&ao(L),O.stop(),M&&(M.flags|=8,He(q,v,w,P)),$&&_t($,w),_t(()=>{v.isUnmounted=!0},w)},nr=(v,w,P,L=!1,O=!1,M=0)=>{for(let q=M;q<v.length;q++)He(v[q],w,P,L,O)},sn=v=>{if(v.shapeFlag&6)return sn(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const w=y(v.anchor||v.el),P=w&&w[yy];return P?y(P):w};let vs=!1;const Di=(v,w,P)=>{let L;v==null?w._vnode&&(He(w._vnode,null,null,!0),L=w._vnode.component):N(w._vnode||null,v,w,null,null,null,P),w._vnode=v,vs||(vs=!0,rh(L),jd(),vs=!1)},Ut={p:N,um:He,m:rn,r:ze,mt:ft,mc:m,pc:me,pbc:T,n:sn,o:t};return{render:Di,hydrate:void 0,createApp:Hy(Di)}}function Ya({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function lr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function ov(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function hp(t,e,n=!1){const r=t.children,s=e.children;if(re(r)&&re(s))for(let i=0;i<r.length;i++){const a=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=un(s[i]),c.el=a.el),!n&&c.patchFlag!==-2&&hp(a,c)),c.type===la&&(c.patchFlag===-1&&(c=s[i]=un(c)),c.el=a.el),c.type===En&&!c.el&&(c.el=a.el)}}function av(t){const e=t.slice(),n=[0];let r,s,i,a,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)c=i+a>>1,t[n[c]]<h?i=c+1:a=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function fp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:fp(e)}function ph(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function dp(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?dp(e.subTree):null}const pp=t=>t.__isSuspense;function cv(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):fy(t)}const Fe=Symbol.for("v-fgt"),la=Symbol.for("v-txt"),En=Symbol.for("v-cmt"),Za=Symbol.for("v-stc"),Gs=[];let Tt=null;function ge(t=!1){Gs.push(Tt=t?null:[])}function lv(){Gs.pop(),Tt=Gs[Gs.length-1]||null}let ai=1;function gh(t,e=!1){ai+=t,t<0&&Tt&&e&&(Tt.hasOnce=!0)}function gp(t){return t.dynamicChildren=ai>0?Tt||qr:null,lv(),ai>0&&Tt&&Tt.push(t),t}function Re(t,e,n,r,s,i){return gp(we(t,e,n,r,s,i,!0))}function xn(t,e,n,r,s){return gp(wt(t,e,n,r,s,!0))}function pl(t){return t?t.__v_isVNode===!0:!1}function xs(t,e){return t.type===e.type&&t.key===e.key}const mp=({key:t})=>t??null,uo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?qe(t)||Me(t)||ce(t)?{i:Ze,r:t,k:e,f:!!n}:t:null);function we(t,e=null,n=null,r=0,s=null,i=t===Fe?0:1,a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&mp(e),ref:e&&uo(e),scopeId:Hd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ze};return c?(gl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=qe(n)?8:16),ai>0&&!a&&Tt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Tt.push(l),l}const wt=uv;function uv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===xy)&&(t=En),pl(t)){const c=ts(t,e,!0);return n&&gl(c,n),ai>0&&!i&&Tt&&(c.shapeFlag&6?Tt[Tt.indexOf(t)]=c:Tt.push(c)),c.patchFlag=-2,c}if(Tv(t)&&(t=t.__vccOpts),e){e=hv(e);let{class:c,style:l}=e;c&&!qe(c)&&(e.class=nl(c)),Ae(l)&&(ia(l)&&!re(l)&&(l=et({},l)),e.style=us(l))}const a=qe(t)?1:pp(t)?128:vy(t)?64:Ae(t)?4:ce(t)?2:0;return we(t,e,n,r,s,a,i,!0)}function hv(t){return t?ia(t)||ip(t)?et({},t):t:null}function ts(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:c,transition:l}=t,h=e?fv(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&mp(h),ref:e&&e.ref?n&&i?re(i)?i.concat(uo(e)):[i,uo(e)]:uo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Fe?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ts(t.ssContent),ssFallback:t.ssFallback&&ts(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&hl(d,l.clone(d)),d}function Fr(t=" ",e=0){return wt(la,null,t,e)}function Qs(t="",e=!1){return e?(ge(),xn(En,null,t)):wt(En,null,t)}function zt(t){return t==null||typeof t=="boolean"?wt(En):re(t)?wt(Fe,null,t.slice()):pl(t)?un(t):wt(la,null,String(t))}function un(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ts(t)}function gl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),gl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!ip(e)?e._ctx=Ze:s===3&&Ze&&(Ze.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ce(e)?(e={default:e,_ctx:Ze},n=32):(e=String(e),r&64?(n=16,e=[Fr(e)]):n=8);t.children=e,t.shapeFlag|=n}function fv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=nl([e.class,r.class]));else if(s==="style")e.style=us([e.style,r.style]);else if(Xo(s)){const i=e[s],a=r[s];a&&i!==a&&!(re(i)&&i.includes(a))?e[s]=i?[].concat(i,a):a:a==null&&i==null&&!Yo(s)&&(e[s]=a)}else s!==""&&(e[s]=r[s])}return e}function Bt(t,e,n,r=null){en(t,e,7,[n,r])}const dv=ep();let pv=0;function gv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||dv,i={uid:pv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Td(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ap(r,s),emitsOptions:tp(r,s),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:r.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Wy.bind(null,i),t.ce&&t.ce(i),i}let ut=null;const _p=()=>ut||Ze;let Po,Ac;{const t=na(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Po=e("__VUE_INSTANCE_SETTERS__",n=>ut=n),Ac=e("__VUE_SSR_SETTERS__",n=>ci=n)}const vi=t=>{const e=ut;return Po(t),t.scope.on(),()=>{t.scope.off(),Po(e)}},mh=()=>{ut&&ut.scope.off(),Po(null)};function yp(t){return t.vnode.shapeFlag&4}let ci=!1;function mv(t,e=!1,n=!1){e&&Ac(e);const{props:r,children:s}=t.vnode,i=yp(t);Yy(t,r,i,e),nv(t,s,n||e);const a=i?_v(t,e):void 0;return e&&Ac(!1),a}function _v(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Ly);const{setup:r}=n;if(r){_n();const s=t.setupContext=r.length>1?vv(t):null,i=vi(t),a=yi(r,t,0,[t.props,s]),c=pd(a);if(yn(),i(),(c||t.sp)&&!Wr(t)&&Kd(t),c){if(a.then(mh,mh),e)return a.then(l=>{_h(t,l)}).catch(l=>{oa(l,t,0)});t.asyncDep=a}else _h(t,a)}else vp(t)}function _h(t,e,n){ce(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ae(e)&&(t.setupState=Fd(e)),vp(t)}function vp(t,e,n){const r=t.type;t.render||(t.render=r.render||Kt);{const s=vi(t);_n();try{Fy(t)}finally{yn(),s()}}}const yv={get(t,e){return ct(t,"get",""),t[e]}};function vv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,yv),slots:t.slots,emit:t.emit,expose:e}}function ua(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Fd(ll(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ks)return Ks[n](t)},has(e,n){return n in e||n in Ks}})):t.proxy}function Ev(t,e=!0){return ce(t)?t.displayName||t.name:t.name||e&&t.__name}function Tv(t){return ce(t)&&"__vccOpts"in t}const Ep=(t,e)=>ay(t,e,ci),Iv="3.5.32";/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let bc;const yh=typeof window<"u"&&window.trustedTypes;if(yh)try{bc=yh.createPolicy("vue",{createHTML:t=>t})}catch{}const Tp=bc?t=>bc.createHTML(t):t=>t,wv="http://www.w3.org/2000/svg",Av="http://www.w3.org/1998/Math/MathML",ln=typeof document<"u"?document:null,vh=ln&&ln.createElement("template"),bv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?ln.createElementNS(wv,t):e==="mathml"?ln.createElementNS(Av,t):n?ln.createElement(t,{is:n}):ln.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>ln.createTextNode(t),createComment:t=>ln.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ln.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{vh.innerHTML=Tp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=vh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Sv=Symbol("_vtc");function Rv(t,e,n){const r=t[Sv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Eh=Symbol("_vod"),Cv=Symbol("_vsh"),Pv=Symbol(""),Vv=/(?:^|;)\s*display\s*:/;function kv(t,e,n){const r=t.style,s=qe(n);let i=!1;if(n&&!s){if(e)if(qe(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();n[c]==null&&ho(r,c,"")}else for(const a in e)n[a]==null&&ho(r,a,"");for(const a in n)a==="display"&&(i=!0),ho(r,a,n[a])}else if(s){if(e!==n){const a=r[Pv];a&&(n+=";"+a),r.cssText=n,i=Vv.test(n)}}else e&&t.removeAttribute("style");Eh in t&&(t[Eh]=i?r.display:"",t[Cv]&&(r.display="none"))}const Th=/\s*!important$/;function ho(t,e,n){if(re(n))n.forEach(r=>ho(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Dv(t,e);Th.test(n)?t.setProperty(wr(r),n.replace(Th,""),"important"):t[r]=n}}const Ih=["Webkit","Moz","ms"],ec={};function Dv(t,e){const n=ec[e];if(n)return n;let r=mt(e);if(r!=="filter"&&r in t)return ec[e]=r;r=ta(r);for(let s=0;s<Ih.length;s++){const i=Ih[s]+r;if(i in t)return ec[e]=i}return e}const wh="http://www.w3.org/1999/xlink";function Ah(t,e,n,r,s,i=V_(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(wh,e.slice(6,e.length)):t.setAttributeNS(wh,e,n):n==null||i&&!yd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":At(n)?String(n):n)}function bh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Tp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=yd(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function fr(t,e,n,r){t.addEventListener(e,n,r)}function Nv(t,e,n,r){t.removeEventListener(e,n,r)}const Sh=Symbol("_vei");function Ov(t,e,n,r,s=null){const i=t[Sh]||(t[Sh]={}),a=i[e];if(r&&a)a.value=r;else{const[c,l]=xv(e);if(r){const h=i[e]=Fv(r,s);fr(t,c,h,l)}else a&&(Nv(t,c,a,l),i[e]=void 0)}}const Rh=/(?:Once|Passive|Capture)$/;function xv(t){let e;if(Rh.test(t)){e={};let r;for(;r=t.match(Rh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):wr(t.slice(2)),e]}let tc=0;const Mv=Promise.resolve(),Lv=()=>tc||(Mv.then(()=>tc=0),tc=Date.now());function Fv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;en(Uv(r,n.value),e,5,[r])};return n.value=t,n.attached=Lv(),n}function Uv(t,e){if(re(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ch=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Bv=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?Rv(t,r,a):e==="style"?kv(t,n,r):Xo(e)?Yo(e)||Ov(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$v(t,e,r,a))?(bh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ah(t,e,r,a,i,e!=="value")):t._isVueCE&&(jv(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!qe(r)))?bh(t,mt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ah(t,e,r,a))};function $v(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ch(e)&&ce(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ch(e)&&qe(n)?!1:e in t}function jv(t,e){const n=t._def.props;if(!n)return!1;const r=mt(e);return Array.isArray(n)?n.some(s=>mt(s)===r):Object.keys(n).some(s=>mt(s)===r)}const Vo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return re(e)?n=>ao(e,n):e};function qv(t){t.target.composing=!0}function Ph(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Kr=Symbol("_assign");function Vh(t,e,n){return e&&(t=t.trim()),n&&(t=tl(t)),t}const Hv={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Kr]=Vo(s);const i=r||s.props&&s.props.type==="number";fr(t,e?"change":"input",a=>{a.target.composing||t[Kr](Vh(t.value,n,i))}),(n||i)&&fr(t,"change",()=>{t.value=Vh(t.value,n,i)}),e||(fr(t,"compositionstart",qv),fr(t,"compositionend",Ph),fr(t,"change",Ph))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[Kr]=Vo(a),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?tl(t.value):t.value,l=e??"";if(c===l)return;const h=t.getRootNode();(h instanceof Document||h instanceof ShadowRoot)&&h.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l)}},Ms={created(t,{value:e},n){t.checked=ri(e,n.props.value),t[Kr]=Vo(n),fr(t,"change",()=>{t[Kr](zv(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[Kr]=Vo(r),e!==n&&(t.checked=ri(e,r.props.value))}};function zv(t){return"_value"in t?t._value:t.value}const Wv=et({patchProp:Bv},bv);let kh;function Kv(){return kh||(kh=sv(Wv))}const Gv=((...t)=>{const e=Kv().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Jv(r);if(!s)return;const i=e._component;!ce(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,Qv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e});function Qv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Jv(t){return qe(t)?document.querySelector(t):t}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Ip;const ha=t=>Ip=t,wp=Symbol();function Sc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Js;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Js||(Js={}));function Xv(){const t=Id(!0),e=t.run(()=>Z_({}));let n=[],r=[];const s=ll({install(i){ha(s),s._a=i,i.provide(wp,s),i.config.globalProperties.$pinia=s,r.forEach(a=>n.push(a)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Ap=()=>{};function Dh(t,e,n,r=Ap){t.add(e);const s=()=>{t.delete(e)&&r()};return!n&&wd()&&D_(s),s}function xr(t,...e){t.forEach(n=>{n(...e)})}const Yv=t=>t(),Nh=Symbol(),nc=Symbol();function Rc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Sc(s)&&Sc(r)&&t.hasOwnProperty(n)&&!Me(r)&&!mn(r)?t[n]=Rc(s,r):t[n]=r}return t}const Zv=Symbol();function eE(t){return!Sc(t)||!Object.prototype.hasOwnProperty.call(t,Zv)}const{assign:Dn}=Object;function tE(t){return!!(Me(t)&&t.effect)}function nE(t,e,n,r){const{state:s,actions:i,getters:a}=e,c=n.state.value[t];let l;function h(){c||(n.state.value[t]=s?s():{});const d=ry(n.state.value[t]);return Dn(d,i,Object.keys(a||{}).reduce((g,y)=>(g[y]=ll(Ep(()=>{ha(n);const b=n._s.get(t);return a[y].call(b,b)})),g),{}))}return l=bp(t,h,e,n,r,!0),l}function bp(t,e,n={},r,s,i){let a;const c=Dn({actions:{}},n),l={deep:!0};let h,d,g=new Set,y=new Set,b;const V=r.state.value[t];!i&&!V&&(r.state.value[t]={});let N;function F(m){let _;h=d=!1,typeof m=="function"?(m(r.state.value[t]),_={type:Js.patchFunction,storeId:t,events:b}):(Rc(r.state.value[t],m),_={type:Js.patchObject,payload:m,storeId:t,events:b});const T=N=Symbol();Bd().then(()=>{N===T&&(h=!0)}),d=!0,xr(g,_,r.state.value[t])}const Q=i?function(){const{state:_}=n,T=_?_():{};this.$patch(A=>{Dn(A,T)})}:Ap;function j(){a.stop(),g.clear(),y.clear(),r._s.delete(t)}const G=(m,_="")=>{if(Nh in m)return m[nc]=_,m;const T=function(){ha(r);const A=Array.from(arguments),S=new Set,E=new Set;function ft(le){S.add(le)}function Ft(le){E.add(le)}xr(y,{args:A,name:T[nc],store:oe,after:ft,onError:Ft});let De;try{De=m.apply(this&&this.$id===t?this:oe,A)}catch(le){throw xr(E,le),le}return De instanceof Promise?De.then(le=>(xr(S,le),le)).catch(le=>(xr(E,le),Promise.reject(le))):(xr(S,De),De)};return T[Nh]=!0,T[nc]=_,T},z={_p:r,$id:t,$onAction:Dh.bind(null,y),$patch:F,$reset:Q,$subscribe(m,_={}){const T=Dh(g,m,_.detached,()=>A()),A=a.run(()=>co(()=>r.state.value[t],S=>{(_.flush==="sync"?d:h)&&m({storeId:t,type:Js.direct,events:b},S)},Dn({},l,_)));return T},$dispose:j},oe=sa(z);r._s.set(t,oe);const I=(r._a&&r._a.runWithContext||Yv)(()=>r._e.run(()=>(a=Id()).run(()=>e({action:G}))));for(const m in I){const _=I[m];if(Me(_)&&!tE(_)||mn(_))i||(V&&eE(_)&&(Me(_)?_.value=V[m]:Rc(_,V[m])),r.state.value[t][m]=_);else if(typeof _=="function"){const T=G(_,m);I[m]=T,c.actions[m]=_}}return Dn(oe,I),Dn(ye(oe),I),Object.defineProperty(oe,"$state",{get:()=>r.state.value[t],set:m=>{F(_=>{Dn(_,m)})}}),r._p.forEach(m=>{Dn(oe,a.run(()=>m({store:oe,app:r._a,pinia:r,options:c})))}),V&&i&&n.hydrate&&n.hydrate(oe.$state,V),h=!0,d=!0,oe}/*! #__NO_SIDE_EFFECTS__ */function rE(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(a,c){const l=py();return a=a||(l?zs(wp,null):null),a&&ha(a),a=Ip,a._s.has(t)||(s?bp(t,e,r,a):nE(t,r,a)),a._s.get(t)}return i.$id=t,i}function sE(t,e){if(t==null)return;let n=t;for(let r=0;r<e.length;r++){if(n===void 0||n[e[r]]===void 0)return;if(n===null||n[e[r]]===null)return null;n=n[e[r]]}return n}function ml(t,e,n){if(n.length===0)return e;const r=n[0];return n.length>1&&(e=ml(typeof t!="object"||t===null||!Object.prototype.hasOwnProperty.call(t,r)?Number.isInteger(Number(n[1]))?[]:{}:t[r],e,Array.prototype.slice.call(n,1))),Number.isInteger(Number(r))&&Array.isArray(t)?t.slice()[r]:Object.assign({},t,{[r]:e})}function Sp(t,e){if(t==null||e.length===0)return t;if(e.length===1){if(t==null)return t;if(Number.isInteger(e[0])&&Array.isArray(t))return Array.prototype.slice.call(t,0).splice(e[0],1);const n={};for(const r in t)n[r]=t[r];return delete n[e[0]],n}if(t[e[0]]==null){if(Number.isInteger(e[0])&&Array.isArray(t))return Array.prototype.concat.call([],t);const n={};for(const r in t)n[r]=t[r];return n}return ml(t,Sp(t[e[0]],Array.prototype.slice.call(e,1)),[e[0]])}function Rp(t,e){return e.map(n=>n.split(".")).map(n=>[n,sE(t,n)]).filter(n=>n[1]!==void 0).reduce((n,r)=>ml(n,r[1],r[0]),{})}function Cp(t,e){return e.map(n=>n.split(".")).reduce((n,r)=>Sp(n,r),t)}function Oh(t,{storage:e,serializer:n,key:r,debug:s,pick:i,omit:a,beforeHydrate:c,afterHydrate:l},h,d=!0){try{d&&(c==null||c(h));const g=e.getItem(r);if(g){const y=n.deserialize(g),b=i?Rp(y,i):y,V=a?Cp(b,a):b;t.$patch(V)}d&&(l==null||l(h))}catch(g){s&&console.error("[pinia-plugin-persistedstate]",g)}}function xh(t,{storage:e,serializer:n,key:r,debug:s,pick:i,omit:a}){try{const c=i?Rp(t,i):t,l=a?Cp(c,a):c,h=n.serialize(l);e.setItem(r,h)}catch(c){s&&console.error("[pinia-plugin-persistedstate]",c)}}function iE(t,e){return typeof t=="function"?t(e):typeof t=="string"?t:e}function oE(t,e,n){const{pinia:r,store:s,options:{persist:i=n}}=t;if(!i)return;// v8 ignore if -- @preserve
if(!(s.$id in r.state.value)){const c=r._s.get(s.$id.replace("__hot:",""));c&&Promise.resolve().then(()=>c.$persist());return}const a=(Array.isArray(i)?i:i===!0?[{}]:[i]).map(e);s.$hydrate=({runHooks:c=!0}={})=>{a.forEach(l=>{Oh(s,l,t,c)})},s.$persist=()=>{a.forEach(c=>{xh(s.$state,c)})},a.forEach(c=>{Oh(s,c,t),s.$subscribe((l,h)=>xh(h,c),{detached:!0})})}function aE(t={}){return function(e){oE(e,n=>{const r=iE(n.key,e.store.$id);return{key:(t.key?t.key:s=>s)(r),debug:n.debug??t.debug??!1,serializer:n.serializer??t.serializer??{serialize:s=>JSON.stringify(s),deserialize:s=>JSON.parse(s)},storage:n.storage??t.storage??window.localStorage,beforeHydrate:n.beforeHydrate??t.beforeHydrate,afterHydrate:n.afterHydrate??t.afterHydrate,pick:n.pick,omit:n.omit}},t.auto??!1)}}var cE=aE();const Zn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},lE={},uE={class:"carafe"};function hE(t,e){return ge(),Re("div",uE,[lo(t.$slots,"top",{},void 0,!0),lo(t.$slots,"mid",{},void 0,!0),lo(t.$slots,"bottom",{},void 0,!0)])}const fE=Zn(lE,[["render",hE],["__scopeId","data-v-8709b092"]]),dE={},pE={class:"mug"};function gE(t,e){return ge(),Re("div",pE,[lo(t.$slots,"default")])}const mE=Zn(dE,[["render",gE]]),rc=["Hot","Cold"],_E=()=>{};var Mh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},yE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Vp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,c=a?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,d=i>>2,g=(i&3)<<4|c>>4;let y=(c&15)<<2|h>>6,b=h&63;l||(b=64,a||(y=64)),r.push(n[d],n[g],n[y],n[b])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Pp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const g=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||g==null)throw new vE;const y=i<<2|c>>4;if(r.push(y),h!==64){const b=c<<4&240|h>>2;if(r.push(b),g!==64){const V=h<<6&192|g;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class vE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const EE=function(t){const e=Pp(t);return Vp.encodeByteArray(e,!0)},ko=function(t){return EE(t).replace(/\./g,"")},kp=function(t){try{return Vp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE=()=>TE().__FIREBASE_DEFAULTS__,wE=()=>{if(typeof process>"u"||typeof Mh>"u")return;const t=Mh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},AE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&kp(t[1]);return e&&JSON.parse(e)},fa=()=>{try{return _E()||IE()||wE()||AE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Dp=t=>{var e,n;return(n=(e=fa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},bE=t=>{const e=Dp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Np=()=>{var t;return(t=fa())===null||t===void 0?void 0:t.config},Op=t=>{var e;return(e=fa())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function xp(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ko(JSON.stringify(n)),ko(JSON.stringify(a)),""].join(".")}const Xs={};function CE(){const t={prod:[],emulator:[]};for(const e of Object.keys(Xs))Xs[e]?t.emulator.push(e):t.prod.push(e);return t}function PE(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Lh=!1;function Mp(t,e){if(typeof window>"u"||typeof document>"u"||!hs(window.location.host)||Xs[t]===e||Xs[t]||Lh)return;Xs[t]=e;function n(y){return`__firebase__banner__${y}`}const r="__firebase__banner",i=CE().prod.length>0;function a(){const y=document.getElementById(r);y&&y.remove()}function c(y){y.style.display="flex",y.style.background="#7faaf0",y.style.position="fixed",y.style.bottom="5px",y.style.left="5px",y.style.padding=".5em",y.style.borderRadius="5px",y.style.alignItems="center"}function l(y,b){y.setAttribute("width","24"),y.setAttribute("id",b),y.setAttribute("height","24"),y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","none"),y.style.marginLeft="-6px"}function h(){const y=document.createElement("span");return y.style.cursor="pointer",y.style.marginLeft="16px",y.style.fontSize="24px",y.innerHTML=" &times;",y.onclick=()=>{Lh=!0,a()},y}function d(y,b){y.setAttribute("id",b),y.innerText="Learn more",y.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",y.setAttribute("target","__blank"),y.style.paddingLeft="5px",y.style.textDecoration="underline"}function g(){const y=PE(r),b=n("text"),V=document.getElementById(b)||document.createElement("span"),N=n("learnmore"),F=document.getElementById(N)||document.createElement("a"),Q=n("preprendIcon"),j=document.getElementById(Q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(y.created){const G=y.element;c(G),d(F,N);const z=h();l(j,Q),G.append(j,V,F,z),document.body.appendChild(G)}i?(V.innerText="Preview backend disconnected.",j.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(j.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function VE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function kE(){var t;const e=(t=fa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function DE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function NE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function OE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xE(){const t=ht();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ME(){return!kE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function LE(){try{return typeof indexedDB=="object"}catch{return!1}}function FE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE="FirebaseError";class Sn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=UE,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ei.prototype.create)}}class Ei{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?BE(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Sn(s,c,r)}}function BE(t,e){return t.replace($E,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const $E=/\{\$([^}]+)}/g;function jE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function yr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(Fh(i)&&Fh(a)){if(!yr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Fh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function qE(t,e){const n=new HE(t,e);return n.subscribe.bind(n)}class HE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");zE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=sc),s.error===void 0&&(s.error=sc),s.complete===void 0&&(s.complete=sc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function sc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t){return t&&t._delegate?t._delegate:t}class vr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new SE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(GE(e))try{this.getOrInitializeService({instanceIdentifier:hr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=hr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hr){return this.instances.has(e)}getOptions(e=hr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:KE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=hr){return this.component?this.component.multipleInstances?e:hr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KE(t){return t===hr?void 0:t}function GE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new WE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const JE={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},XE=he.INFO,YE={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},ZE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=YE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _l{constructor(e){this.name=e,this._logLevel=XE,this._logHandler=ZE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?JE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const eT=(t,e)=>e.some(n=>t instanceof n);let Uh,Bh;function tT(){return Uh||(Uh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nT(){return Bh||(Bh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lp=new WeakMap,Cc=new WeakMap,Fp=new WeakMap,ic=new WeakMap,yl=new WeakMap;function rT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(Bn(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Lp.set(n,t)}).catch(()=>{}),yl.set(e,t),e}function sT(t){if(Cc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});Cc.set(t,e)}let Pc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Cc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function iT(t){Pc=t(Pc)}function oT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(oc(this),e,...n);return Fp.set(r,e.sort?e.sort():[e]),Bn(r)}:nT().includes(t)?function(...e){return t.apply(oc(this),e),Bn(Lp.get(this))}:function(...e){return Bn(t.apply(oc(this),e))}}function aT(t){return typeof t=="function"?oT(t):(t instanceof IDBTransaction&&sT(t),eT(t,tT())?new Proxy(t,Pc):t)}function Bn(t){if(t instanceof IDBRequest)return rT(t);if(ic.has(t))return ic.get(t);const e=aT(t);return e!==t&&(ic.set(t,e),yl.set(e,t)),e}const oc=t=>yl.get(t);function cT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),c=Bn(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Bn(a.result),l.oldVersion,l.newVersion,Bn(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const lT=["get","getKey","getAll","getAllKeys","count"],uT=["put","add","delete","clear"],ac=new Map;function $h(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ac.get(e))return ac.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=uT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||lT.includes(n)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return ac.set(e,i),i}iT(t=>({...t,get:(e,n,r)=>$h(e,n)||t.get(e,n,r),has:(e,n)=>!!$h(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function fT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vc="@firebase/app",jh="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=new _l("@firebase/app"),dT="@firebase/app-compat",pT="@firebase/analytics-compat",gT="@firebase/analytics",mT="@firebase/app-check-compat",_T="@firebase/app-check",yT="@firebase/auth",vT="@firebase/auth-compat",ET="@firebase/database",TT="@firebase/data-connect",IT="@firebase/database-compat",wT="@firebase/functions",AT="@firebase/functions-compat",bT="@firebase/installations",ST="@firebase/installations-compat",RT="@firebase/messaging",CT="@firebase/messaging-compat",PT="@firebase/performance",VT="@firebase/performance-compat",kT="@firebase/remote-config",DT="@firebase/remote-config-compat",NT="@firebase/storage",OT="@firebase/storage-compat",xT="@firebase/firestore",MT="@firebase/ai",LT="@firebase/firestore-compat",FT="firebase",UT="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc="[DEFAULT]",BT={[Vc]:"fire-core",[dT]:"fire-core-compat",[gT]:"fire-analytics",[pT]:"fire-analytics-compat",[_T]:"fire-app-check",[mT]:"fire-app-check-compat",[yT]:"fire-auth",[vT]:"fire-auth-compat",[ET]:"fire-rtdb",[TT]:"fire-data-connect",[IT]:"fire-rtdb-compat",[wT]:"fire-fn",[AT]:"fire-fn-compat",[bT]:"fire-iid",[ST]:"fire-iid-compat",[RT]:"fire-fcm",[CT]:"fire-fcm-compat",[PT]:"fire-perf",[VT]:"fire-perf-compat",[kT]:"fire-rc",[DT]:"fire-rc-compat",[NT]:"fire-gcs",[OT]:"fire-gcs-compat",[xT]:"fire-fst",[LT]:"fire-fst-compat",[MT]:"fire-vertex","fire-js":"fire-js",[FT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=new Map,$T=new Map,Dc=new Map;function qh(t,e){try{t.container.addComponent(e)}catch(n){Tn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ns(t){const e=t.name;if(Dc.has(e))return Tn.debug(`There were multiple attempts to register component ${e}.`),!1;Dc.set(e,t);for(const n of Do.values())qh(n,t);for(const n of $T.values())qh(n,t);return!0}function vl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function kt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$n=new Ei("app","Firebase",jT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $n.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=UT;function Up(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:kc,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw $n.create("bad-app-name",{appName:String(s)});if(n||(n=Np()),!n)throw $n.create("no-options");const i=Do.get(s);if(i){if(yr(n,i.options)&&yr(r,i.config))return i;throw $n.create("duplicate-app",{appName:s})}const a=new QE(s);for(const l of Dc.values())a.addComponent(l);const c=new qT(n,r,a);return Do.set(s,c),c}function Bp(t=kc){const e=Do.get(t);if(!e&&t===kc&&Np())return Up();if(!e)throw $n.create("no-app",{appName:t});return e}function jn(t,e,n){var r;let s=(r=BT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tn.warn(c.join(" "));return}ns(new vr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT="firebase-heartbeat-database",zT=1,li="firebase-heartbeat-store";let cc=null;function $p(){return cc||(cc=cT(HT,zT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(li)}catch(n){console.warn(n)}}}}).catch(t=>{throw $n.create("idb-open",{originalErrorMessage:t.message})})),cc}async function WT(t){try{const n=(await $p()).transaction(li),r=await n.objectStore(li).get(jp(t));return await n.done,r}catch(e){if(e instanceof Sn)Tn.warn(e.message);else{const n=$n.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tn.warn(n.message)}}}async function Hh(t,e){try{const r=(await $p()).transaction(li,"readwrite");await r.objectStore(li).put(e,jp(t)),await r.done}catch(n){if(n instanceof Sn)Tn.warn(n.message);else{const r=$n.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Tn.warn(r.message)}}}function jp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT=1024,GT=30;class QT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new XT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=zh();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>GT){const a=YT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Tn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=zh(),{heartbeatsToSend:r,unsentEntries:s}=JT(this._heartbeatsCache.heartbeats),i=ko(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Tn.warn(n),""}}}function zh(){return new Date().toISOString().substring(0,10)}function JT(t,e=KT){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Wh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Wh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class XT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return LE()?FE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await WT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Wh(t){return ko(JSON.stringify({version:2,heartbeats:t})).length}function YT(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(t){ns(new vr("platform-logger",e=>new hT(e),"PRIVATE")),ns(new vr("heartbeat",e=>new QT(e),"PRIVATE")),jn(Vc,jh,t),jn(Vc,jh,"esm2017"),jn("fire-js","")}ZT("");var Kh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qn,qp;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,m){function _(){}_.prototype=m.prototype,I.D=m.prototype,I.prototype=new _,I.prototype.constructor=I,I.C=function(T,A,S){for(var E=Array(arguments.length-2),ft=2;ft<arguments.length;ft++)E[ft-2]=arguments[ft];return m.prototype[A].apply(T,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,m,_){_||(_=0);var T=Array(16);if(typeof m=="string")for(var A=0;16>A;++A)T[A]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(A=0;16>A;++A)T[A]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=I.g[0],_=I.g[1],A=I.g[2];var S=I.g[3],E=m+(S^_&(A^S))+T[0]+3614090360&4294967295;m=_+(E<<7&4294967295|E>>>25),E=S+(A^m&(_^A))+T[1]+3905402710&4294967295,S=m+(E<<12&4294967295|E>>>20),E=A+(_^S&(m^_))+T[2]+606105819&4294967295,A=S+(E<<17&4294967295|E>>>15),E=_+(m^A&(S^m))+T[3]+3250441966&4294967295,_=A+(E<<22&4294967295|E>>>10),E=m+(S^_&(A^S))+T[4]+4118548399&4294967295,m=_+(E<<7&4294967295|E>>>25),E=S+(A^m&(_^A))+T[5]+1200080426&4294967295,S=m+(E<<12&4294967295|E>>>20),E=A+(_^S&(m^_))+T[6]+2821735955&4294967295,A=S+(E<<17&4294967295|E>>>15),E=_+(m^A&(S^m))+T[7]+4249261313&4294967295,_=A+(E<<22&4294967295|E>>>10),E=m+(S^_&(A^S))+T[8]+1770035416&4294967295,m=_+(E<<7&4294967295|E>>>25),E=S+(A^m&(_^A))+T[9]+2336552879&4294967295,S=m+(E<<12&4294967295|E>>>20),E=A+(_^S&(m^_))+T[10]+4294925233&4294967295,A=S+(E<<17&4294967295|E>>>15),E=_+(m^A&(S^m))+T[11]+2304563134&4294967295,_=A+(E<<22&4294967295|E>>>10),E=m+(S^_&(A^S))+T[12]+1804603682&4294967295,m=_+(E<<7&4294967295|E>>>25),E=S+(A^m&(_^A))+T[13]+4254626195&4294967295,S=m+(E<<12&4294967295|E>>>20),E=A+(_^S&(m^_))+T[14]+2792965006&4294967295,A=S+(E<<17&4294967295|E>>>15),E=_+(m^A&(S^m))+T[15]+1236535329&4294967295,_=A+(E<<22&4294967295|E>>>10),E=m+(A^S&(_^A))+T[1]+4129170786&4294967295,m=_+(E<<5&4294967295|E>>>27),E=S+(_^A&(m^_))+T[6]+3225465664&4294967295,S=m+(E<<9&4294967295|E>>>23),E=A+(m^_&(S^m))+T[11]+643717713&4294967295,A=S+(E<<14&4294967295|E>>>18),E=_+(S^m&(A^S))+T[0]+3921069994&4294967295,_=A+(E<<20&4294967295|E>>>12),E=m+(A^S&(_^A))+T[5]+3593408605&4294967295,m=_+(E<<5&4294967295|E>>>27),E=S+(_^A&(m^_))+T[10]+38016083&4294967295,S=m+(E<<9&4294967295|E>>>23),E=A+(m^_&(S^m))+T[15]+3634488961&4294967295,A=S+(E<<14&4294967295|E>>>18),E=_+(S^m&(A^S))+T[4]+3889429448&4294967295,_=A+(E<<20&4294967295|E>>>12),E=m+(A^S&(_^A))+T[9]+568446438&4294967295,m=_+(E<<5&4294967295|E>>>27),E=S+(_^A&(m^_))+T[14]+3275163606&4294967295,S=m+(E<<9&4294967295|E>>>23),E=A+(m^_&(S^m))+T[3]+4107603335&4294967295,A=S+(E<<14&4294967295|E>>>18),E=_+(S^m&(A^S))+T[8]+1163531501&4294967295,_=A+(E<<20&4294967295|E>>>12),E=m+(A^S&(_^A))+T[13]+2850285829&4294967295,m=_+(E<<5&4294967295|E>>>27),E=S+(_^A&(m^_))+T[2]+4243563512&4294967295,S=m+(E<<9&4294967295|E>>>23),E=A+(m^_&(S^m))+T[7]+1735328473&4294967295,A=S+(E<<14&4294967295|E>>>18),E=_+(S^m&(A^S))+T[12]+2368359562&4294967295,_=A+(E<<20&4294967295|E>>>12),E=m+(_^A^S)+T[5]+4294588738&4294967295,m=_+(E<<4&4294967295|E>>>28),E=S+(m^_^A)+T[8]+2272392833&4294967295,S=m+(E<<11&4294967295|E>>>21),E=A+(S^m^_)+T[11]+1839030562&4294967295,A=S+(E<<16&4294967295|E>>>16),E=_+(A^S^m)+T[14]+4259657740&4294967295,_=A+(E<<23&4294967295|E>>>9),E=m+(_^A^S)+T[1]+2763975236&4294967295,m=_+(E<<4&4294967295|E>>>28),E=S+(m^_^A)+T[4]+1272893353&4294967295,S=m+(E<<11&4294967295|E>>>21),E=A+(S^m^_)+T[7]+4139469664&4294967295,A=S+(E<<16&4294967295|E>>>16),E=_+(A^S^m)+T[10]+3200236656&4294967295,_=A+(E<<23&4294967295|E>>>9),E=m+(_^A^S)+T[13]+681279174&4294967295,m=_+(E<<4&4294967295|E>>>28),E=S+(m^_^A)+T[0]+3936430074&4294967295,S=m+(E<<11&4294967295|E>>>21),E=A+(S^m^_)+T[3]+3572445317&4294967295,A=S+(E<<16&4294967295|E>>>16),E=_+(A^S^m)+T[6]+76029189&4294967295,_=A+(E<<23&4294967295|E>>>9),E=m+(_^A^S)+T[9]+3654602809&4294967295,m=_+(E<<4&4294967295|E>>>28),E=S+(m^_^A)+T[12]+3873151461&4294967295,S=m+(E<<11&4294967295|E>>>21),E=A+(S^m^_)+T[15]+530742520&4294967295,A=S+(E<<16&4294967295|E>>>16),E=_+(A^S^m)+T[2]+3299628645&4294967295,_=A+(E<<23&4294967295|E>>>9),E=m+(A^(_|~S))+T[0]+4096336452&4294967295,m=_+(E<<6&4294967295|E>>>26),E=S+(_^(m|~A))+T[7]+1126891415&4294967295,S=m+(E<<10&4294967295|E>>>22),E=A+(m^(S|~_))+T[14]+2878612391&4294967295,A=S+(E<<15&4294967295|E>>>17),E=_+(S^(A|~m))+T[5]+4237533241&4294967295,_=A+(E<<21&4294967295|E>>>11),E=m+(A^(_|~S))+T[12]+1700485571&4294967295,m=_+(E<<6&4294967295|E>>>26),E=S+(_^(m|~A))+T[3]+2399980690&4294967295,S=m+(E<<10&4294967295|E>>>22),E=A+(m^(S|~_))+T[10]+4293915773&4294967295,A=S+(E<<15&4294967295|E>>>17),E=_+(S^(A|~m))+T[1]+2240044497&4294967295,_=A+(E<<21&4294967295|E>>>11),E=m+(A^(_|~S))+T[8]+1873313359&4294967295,m=_+(E<<6&4294967295|E>>>26),E=S+(_^(m|~A))+T[15]+4264355552&4294967295,S=m+(E<<10&4294967295|E>>>22),E=A+(m^(S|~_))+T[6]+2734768916&4294967295,A=S+(E<<15&4294967295|E>>>17),E=_+(S^(A|~m))+T[13]+1309151649&4294967295,_=A+(E<<21&4294967295|E>>>11),E=m+(A^(_|~S))+T[4]+4149444226&4294967295,m=_+(E<<6&4294967295|E>>>26),E=S+(_^(m|~A))+T[11]+3174756917&4294967295,S=m+(E<<10&4294967295|E>>>22),E=A+(m^(S|~_))+T[2]+718787259&4294967295,A=S+(E<<15&4294967295|E>>>17),E=_+(S^(A|~m))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+m&4294967295,I.g[1]=I.g[1]+(A+(E<<21&4294967295|E>>>11))&4294967295,I.g[2]=I.g[2]+A&4294967295,I.g[3]=I.g[3]+S&4294967295}r.prototype.u=function(I,m){m===void 0&&(m=I.length);for(var _=m-this.blockSize,T=this.B,A=this.h,S=0;S<m;){if(A==0)for(;S<=_;)s(this,I,S),S+=this.blockSize;if(typeof I=="string"){for(;S<m;)if(T[A++]=I.charCodeAt(S++),A==this.blockSize){s(this,T),A=0;break}}else for(;S<m;)if(T[A++]=I[S++],A==this.blockSize){s(this,T),A=0;break}}this.h=A,this.o+=m},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var m=1;m<I.length-8;++m)I[m]=0;var _=8*this.o;for(m=I.length-8;m<I.length;++m)I[m]=_&255,_/=256;for(this.u(I),I=Array(16),m=_=0;4>m;++m)for(var T=0;32>T;T+=8)I[_++]=this.g[m]>>>T&255;return I};function i(I,m){var _=c;return Object.prototype.hasOwnProperty.call(_,I)?_[I]:_[I]=m(I)}function a(I,m){this.h=m;for(var _=[],T=!0,A=I.length-1;0<=A;A--){var S=I[A]|0;T&&S==m||(_[A]=S,T=!1)}this.g=_}var c={};function l(I){return-128<=I&&128>I?i(I,function(m){return new a([m|0],0>m?-1:0)}):new a([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return g;if(0>I)return F(h(-I));for(var m=[],_=1,T=0;I>=_;T++)m[T]=I/_|0,_*=4294967296;return new a(m,0)}function d(I,m){if(I.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(I.charAt(0)=="-")return F(d(I.substring(1),m));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(m,8)),T=g,A=0;A<I.length;A+=8){var S=Math.min(8,I.length-A),E=parseInt(I.substring(A,A+S),m);8>S?(S=h(Math.pow(m,S)),T=T.j(S).add(h(E))):(T=T.j(_),T=T.add(h(E)))}return T}var g=l(0),y=l(1),b=l(16777216);t=a.prototype,t.m=function(){if(N(this))return-F(this).m();for(var I=0,m=1,_=0;_<this.g.length;_++){var T=this.i(_);I+=(0<=T?T:4294967296+T)*m,m*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(V(this))return"0";if(N(this))return"-"+F(this).toString(I);for(var m=h(Math.pow(I,6)),_=this,T="";;){var A=z(_,m).g;_=Q(_,A.j(m));var S=((0<_.g.length?_.g[0]:_.h)>>>0).toString(I);if(_=A,V(_))return S+T;for(;6>S.length;)S="0"+S;T=S+T}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function V(I){if(I.h!=0)return!1;for(var m=0;m<I.g.length;m++)if(I.g[m]!=0)return!1;return!0}function N(I){return I.h==-1}t.l=function(I){return I=Q(this,I),N(I)?-1:V(I)?0:1};function F(I){for(var m=I.g.length,_=[],T=0;T<m;T++)_[T]=~I.g[T];return new a(_,~I.h).add(y)}t.abs=function(){return N(this)?F(this):this},t.add=function(I){for(var m=Math.max(this.g.length,I.g.length),_=[],T=0,A=0;A<=m;A++){var S=T+(this.i(A)&65535)+(I.i(A)&65535),E=(S>>>16)+(this.i(A)>>>16)+(I.i(A)>>>16);T=E>>>16,S&=65535,E&=65535,_[A]=E<<16|S}return new a(_,_[_.length-1]&-2147483648?-1:0)};function Q(I,m){return I.add(F(m))}t.j=function(I){if(V(this)||V(I))return g;if(N(this))return N(I)?F(this).j(F(I)):F(F(this).j(I));if(N(I))return F(this.j(F(I)));if(0>this.l(b)&&0>I.l(b))return h(this.m()*I.m());for(var m=this.g.length+I.g.length,_=[],T=0;T<2*m;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<I.g.length;A++){var S=this.i(T)>>>16,E=this.i(T)&65535,ft=I.i(A)>>>16,Ft=I.i(A)&65535;_[2*T+2*A]+=E*Ft,j(_,2*T+2*A),_[2*T+2*A+1]+=S*Ft,j(_,2*T+2*A+1),_[2*T+2*A+1]+=E*ft,j(_,2*T+2*A+1),_[2*T+2*A+2]+=S*ft,j(_,2*T+2*A+2)}for(T=0;T<m;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=m;T<2*m;T++)_[T]=0;return new a(_,0)};function j(I,m){for(;(I[m]&65535)!=I[m];)I[m+1]+=I[m]>>>16,I[m]&=65535,m++}function G(I,m){this.g=I,this.h=m}function z(I,m){if(V(m))throw Error("division by zero");if(V(I))return new G(g,g);if(N(I))return m=z(F(I),m),new G(F(m.g),F(m.h));if(N(m))return m=z(I,F(m)),new G(F(m.g),m.h);if(30<I.g.length){if(N(I)||N(m))throw Error("slowDivide_ only works with positive integers.");for(var _=y,T=m;0>=T.l(I);)_=oe(_),T=oe(T);var A=ve(_,1),S=ve(T,1);for(T=ve(T,2),_=ve(_,2);!V(T);){var E=S.add(T);0>=E.l(I)&&(A=A.add(_),S=E),T=ve(T,1),_=ve(_,1)}return m=Q(I,A.j(m)),new G(A,m)}for(A=g;0<=I.l(m);){for(_=Math.max(1,Math.floor(I.m()/m.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),S=h(_),E=S.j(m);N(E)||0<E.l(I);)_-=T,S=h(_),E=S.j(m);V(S)&&(S=y),A=A.add(S),I=Q(I,E)}return new G(A,I)}t.A=function(I){return z(this,I).h},t.and=function(I){for(var m=Math.max(this.g.length,I.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)&I.i(T);return new a(_,this.h&I.h)},t.or=function(I){for(var m=Math.max(this.g.length,I.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)|I.i(T);return new a(_,this.h|I.h)},t.xor=function(I){for(var m=Math.max(this.g.length,I.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)^I.i(T);return new a(_,this.h^I.h)};function oe(I){for(var m=I.g.length+1,_=[],T=0;T<m;T++)_[T]=I.i(T)<<1|I.i(T-1)>>>31;return new a(_,I.h)}function ve(I,m){var _=m>>5;m%=32;for(var T=I.g.length-_,A=[],S=0;S<T;S++)A[S]=0<m?I.i(S+_)>>>m|I.i(S+_+1)<<32-m:I.i(S+_);return new a(A,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,qp=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,qn=a}).apply(typeof Kh<"u"?Kh:typeof self<"u"?self:typeof window<"u"?window:{});var Yi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hp,Us,zp,fo,Nc,Wp,Kp,Gp;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Yi=="object"&&Yi];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var R=o[p];if(!(R in f))break e;f=f[R]}o=o[o.length-1],p=f[o],u=u(p),u!=p&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,p=!1,R={next:function(){if(!p&&f<o.length){var C=f++;return{value:u(C,o[C]),done:!1}}return p=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function g(o,u,f){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,p),o.apply(u,R)}}return function(){return o.apply(u,arguments)}}function y(o,u,f){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:g,y.apply(null,arguments)}function b(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var p=f.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function V(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(p,R,C){for(var B=Array(arguments.length-2),be=2;be<arguments.length;be++)B[be-2]=arguments[be];return u.prototype[R].apply(p,B)}}function N(o){const u=o.length;if(0<u){const f=Array(u);for(let p=0;p<u;p++)f[p]=o[p];return f}return[]}function F(o,u){for(let f=1;f<arguments.length;f++){const p=arguments[f];if(l(p)){const R=o.length||0,C=p.length||0;o.length=R+C;for(let B=0;B<C;B++)o[R+B]=p[B]}else o.push(p)}}class Q{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function j(o){return/^[\s\xa0]*$/.test(o)}function G(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function z(o){return z[" "](o),o}z[" "]=function(){};var oe=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function ve(o,u,f){for(const p in o)u.call(f,o[p],p,o)}function I(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function m(o){const u={};for(const f in o)u[f]=o[f];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,u){let f,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(f in p)o[f]=p[f];for(let C=0;C<_.length;C++)f=_[C],Object.prototype.hasOwnProperty.call(p,f)&&(o[f]=p[f])}}function A(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function S(o){c.setTimeout(()=>{throw o},0)}function E(){var o=Pt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ft{constructor(){this.h=this.g=null}add(u,f){const p=Ft.get();p.set(u,f),this.h?this.h.next=p:this.g=p,this.h=p}}var Ft=new Q(()=>new De,o=>o.reset());class De{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let le,me=!1,Pt=new ft,er=()=>{const o=c.Promise.resolve(void 0);le=()=>{o.then(rn)}};var rn=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(f){S(f)}var u=Ft;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}me=!1};function He(){this.s=this.s,this.C=this.C}He.prototype.s=!1,He.prototype.ma=function(){this.s||(this.s=!0,this.N())},He.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ze(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}ze.prototype.h=function(){this.defaultPrevented=!0};var ka=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};c.addEventListener("test",f,u),c.removeEventListener("test",f,u)}catch{}return o})();function tr(o,u){if(ze.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(oe){e:{try{z(u.nodeName);var R=!0;break e}catch{}R=!1}R||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:nr[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&tr.aa.h.call(this)}}V(tr,ze);var nr={2:"touch",3:"pen",4:"mouse"};tr.prototype.h=function(){tr.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var sn="closure_listenable_"+(1e6*Math.random()|0),vs=0;function Di(o,u,f,p,R){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!p,this.ha=R,this.key=++vs,this.da=this.fa=!1}function Ut(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Es(o){this.src=o,this.g={},this.h=0}Es.prototype.add=function(o,u,f,p,R){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var B=w(o,u,p,R);return-1<B?(u=o[B],f||(u.fa=!1)):(u=new Di(u,this.src,C,!!p,R),u.fa=f,o.push(u)),u};function v(o,u){var f=u.type;if(f in o.g){var p=o.g[f],R=Array.prototype.indexOf.call(p,u,void 0),C;(C=0<=R)&&Array.prototype.splice.call(p,R,1),C&&(Ut(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function w(o,u,f,p){for(var R=0;R<o.length;++R){var C=o[R];if(!C.da&&C.listener==u&&C.capture==!!f&&C.ha==p)return R}return-1}var P="closure_lm_"+(1e6*Math.random()|0),L={};function O(o,u,f,p,R){if(Array.isArray(u)){for(var C=0;C<u.length;C++)O(o,u[C],f,p,R);return null}return f=Z(f),o&&o[sn]?o.K(u,f,h(p)?!!p.capture:!1,R):M(o,u,f,!1,p,R)}function M(o,u,f,p,R,C){if(!u)throw Error("Invalid event type");var B=h(R)?!!R.capture:!!R,be=H(o);if(be||(o[P]=be=new Es(o)),f=be.add(u,f,p,B,C),f.proxy)return f;if(p=q(),f.proxy=p,p.src=o,p.listener=f,o.addEventListener)ka||(R=B),R===void 0&&(R=!1),o.addEventListener(u.toString(),p,R);else if(o.attachEvent)o.attachEvent(x(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return f}function q(){function o(f){return u.call(o.src,o.listener,f)}const u=Y;return o}function $(o,u,f,p,R){if(Array.isArray(u))for(var C=0;C<u.length;C++)$(o,u[C],f,p,R);else p=h(p)?!!p.capture:!!p,f=Z(f),o&&o[sn]?(o=o.i,u=String(u).toString(),u in o.g&&(C=o.g[u],f=w(C,f,p,R),-1<f&&(Ut(C[f]),Array.prototype.splice.call(C,f,1),C.length==0&&(delete o.g[u],o.h--)))):o&&(o=H(o))&&(u=o.g[u.toString()],o=-1,u&&(o=w(u,f,p,R)),(f=-1<o?u[o]:null)&&U(f))}function U(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[sn])v(u.i,o);else{var f=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(f,p,o.capture):u.detachEvent?u.detachEvent(x(f),p):u.addListener&&u.removeListener&&u.removeListener(p),(f=H(u))?(v(f,o),f.h==0&&(f.src=null,u[P]=null)):Ut(o)}}}function x(o){return o in L?L[o]:L[o]="on"+o}function Y(o,u){if(o.da)o=!0;else{u=new tr(u,this);var f=o.listener,p=o.ha||o.src;o.fa&&U(o),o=f.call(p,u)}return o}function H(o){return o=o[P],o instanceof Es?o:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z(o){return typeof o=="function"?o:(o[J]||(o[J]=function(u){return o.handleEvent(u)}),o[J])}function ee(){He.call(this),this.i=new Es(this),this.M=this,this.F=null}V(ee,He),ee.prototype[sn]=!0,ee.prototype.removeEventListener=function(o,u,f,p){$(this,o,u,f,p)};function ae(o,u){var f,p=o.F;if(p)for(f=[];p;p=p.F)f.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new ze(u,o);else if(u instanceof ze)u.target=u.target||o;else{var R=u;u=new ze(p,o),T(u,R)}if(R=!0,f)for(var C=f.length-1;0<=C;C--){var B=u.g=f[C];R=Ee(B,p,!0,u)&&R}if(B=u.g=o,R=Ee(B,p,!0,u)&&R,R=Ee(B,p,!1,u)&&R,f)for(C=0;C<f.length;C++)B=u.g=f[C],R=Ee(B,p,!1,u)&&R}ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],p=0;p<f.length;p++)Ut(f[p]);delete o.g[u],o.h--}}this.F=null},ee.prototype.K=function(o,u,f,p){return this.i.add(String(o),u,!1,f,p)},ee.prototype.L=function(o,u,f,p){return this.i.add(String(o),u,!0,f,p)};function Ee(o,u,f,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var R=!0,C=0;C<u.length;++C){var B=u[C];if(B&&!B.da&&B.capture==f){var be=B.listener,Je=B.ha||B.src;B.fa&&v(o.i,B),R=be.call(Je,p)!==!1&&R}}return R&&!p.defaultPrevented}function Ne(o,u,f){if(typeof o=="function")f&&(o=y(o,f));else if(o&&typeof o.handleEvent=="function")o=y(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function Ue(o){o.g=Ne(()=>{o.g=null,o.i&&(o.i=!1,Ue(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class bt extends He{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ue(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function nt(o){He.call(this),this.h=o,this.g={}}V(nt,He);var Rn=[];function Ts(o){ve(o.g,function(u,f){this.g.hasOwnProperty(f)&&U(u)},o),o.g={}}nt.prototype.N=function(){nt.aa.N.call(this),Ts(this)},nt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qe=c.JSON.stringify,St=c.JSON.parse,Ni=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Cr(){}Cr.prototype.h=null;function cu(o){return o.h||(o.h=o.i())}function lu(){}var Is={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Da(){ze.call(this,"d")}V(Da,ze);function Na(){ze.call(this,"c")}V(Na,ze);var rr={},uu=null;function Oi(){return uu=uu||new ee}rr.La="serverreachability";function hu(o){ze.call(this,rr.La,o)}V(hu,ze);function ws(o){const u=Oi();ae(u,new hu(u))}rr.STAT_EVENT="statevent";function fu(o,u){ze.call(this,rr.STAT_EVENT,o),this.stat=u}V(fu,ze);function dt(o){const u=Oi();ae(u,new fu(u,o))}rr.Ma="timingevent";function du(o,u){ze.call(this,rr.Ma,o),this.size=u}V(du,ze);function As(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function bs(){this.g=!0}bs.prototype.xa=function(){this.g=!1};function Ym(o,u,f,p,R,C){o.info(function(){if(o.g)if(C)for(var B="",be=C.split("&"),Je=0;Je<be.length;Je++){var _e=be[Je].split("=");if(1<_e.length){var rt=_e[0];_e=_e[1];var st=rt.split("_");B=2<=st.length&&st[1]=="type"?B+(rt+"="+_e+"&"):B+(rt+"=redacted&")}}else B=null;else B=C;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+u+`
`+f+`
`+B})}function Zm(o,u,f,p,R,C,B){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+u+`
`+f+`
`+C+" "+B})}function Pr(o,u,f,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+t_(o,f)+(p?" "+p:"")})}function e_(o,u){o.info(function(){return"TIMEOUT: "+u})}bs.prototype.info=function(){};function t_(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var p=f[o];if(!(2>p.length)){var R=p[1];if(Array.isArray(R)&&!(1>R.length)){var C=R[0];if(C!="noop"&&C!="stop"&&C!="close")for(var B=1;B<R.length;B++)R[B]=""}}}}return Qe(f)}catch{return u}}var xi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},pu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Oa;function Mi(){}V(Mi,Cr),Mi.prototype.g=function(){return new XMLHttpRequest},Mi.prototype.i=function(){return{}},Oa=new Mi;function Cn(o,u,f,p){this.j=o,this.i=u,this.l=f,this.R=p||1,this.U=new nt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new gu}function gu(){this.i=null,this.g="",this.h=!1}var mu={},xa={};function Ma(o,u,f){o.L=1,o.v=Bi(on(u)),o.m=f,o.P=!0,_u(o,null)}function _u(o,u){o.F=Date.now(),Li(o),o.A=on(o.v);var f=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),ku(f.i,"t",p),o.C=0,f=o.j.J,o.h=new gu,o.g=Qu(o.j,f?u:null,!o.m),0<o.O&&(o.M=new bt(y(o.Y,o,o.g),o.O)),u=o.U,f=o.g,p=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(Rn[0]=R.toString()),R=Rn);for(var C=0;C<R.length;C++){var B=O(f,R[C],p||u.handleEvent,!1,u.h||u);if(!B)break;u.g[B.key]=B}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),ws(),Ym(o.i,o.u,o.A,o.l,o.R,o.m)}Cn.prototype.ca=function(o){o=o.target;const u=this.M;u&&an(o)==3?u.j():this.Y(o)},Cn.prototype.Y=function(o){try{if(o==this.g)e:{const st=an(this.g);var u=this.g.Ba();const Dr=this.g.Z();if(!(3>st)&&(st!=3||this.g&&(this.h.h||this.g.oa()||Fu(this.g)))){this.J||st!=4||u==7||(u==8||0>=Dr?ws(3):ws(2)),La(this);var f=this.g.Z();this.X=f;t:if(yu(this)){var p=Fu(this.g);o="";var R=p.length,C=an(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){sr(this),Ss(this);var B="";break t}this.h.i=new c.TextDecoder}for(u=0;u<R;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(C&&u==R-1)});p.length=0,this.h.g+=o,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=f==200,Zm(this.i,this.u,this.A,this.l,this.R,st,f),this.o){if(this.T&&!this.K){t:{if(this.g){var be,Je=this.g;if((be=Je.g?Je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(be)){var _e=be;break t}}_e=null}if(f=_e)Pr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fa(this,f);else{this.o=!1,this.s=3,dt(12),sr(this),Ss(this);break e}}if(this.P){f=!0;let Vt;for(;!this.J&&this.C<B.length;)if(Vt=n_(this,B),Vt==xa){st==4&&(this.s=4,dt(14),f=!1),Pr(this.i,this.l,null,"[Incomplete Response]");break}else if(Vt==mu){this.s=4,dt(15),Pr(this.i,this.l,B,"[Invalid Chunk]"),f=!1;break}else Pr(this.i,this.l,Vt,null),Fa(this,Vt);if(yu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),st!=4||B.length!=0||this.h.h||(this.s=1,dt(16),f=!1),this.o=this.o&&f,!f)Pr(this.i,this.l,B,"[Invalid Chunked Response]"),sr(this),Ss(this);else if(0<B.length&&!this.W){this.W=!0;var rt=this.j;rt.g==this&&rt.ba&&!rt.M&&(rt.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),Ha(rt),rt.M=!0,dt(11))}}else Pr(this.i,this.l,B,null),Fa(this,B);st==4&&sr(this),this.o&&!this.J&&(st==4?zu(this.j,this):(this.o=!1,Li(this)))}else v_(this.g),f==400&&0<B.indexOf("Unknown SID")?(this.s=3,dt(12)):(this.s=0,dt(13)),sr(this),Ss(this)}}}catch{}finally{}};function yu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function n_(o,u){var f=o.C,p=u.indexOf(`
`,f);return p==-1?xa:(f=Number(u.substring(f,p)),isNaN(f)?mu:(p+=1,p+f>u.length?xa:(u=u.slice(p,p+f),o.C=p+f,u)))}Cn.prototype.cancel=function(){this.J=!0,sr(this)};function Li(o){o.S=Date.now()+o.I,vu(o,o.I)}function vu(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=As(y(o.ba,o),u)}function La(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Cn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(e_(this.i,this.A),this.L!=2&&(ws(),dt(17)),sr(this),this.s=2,Ss(this)):vu(this,this.S-o)};function Ss(o){o.j.G==0||o.J||zu(o.j,o)}function sr(o){La(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Ts(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Fa(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||Ua(f.h,o))){if(!o.K&&Ua(f.h,o)&&f.G==3){try{var p=f.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Wi(f),Hi(f);else break e;qa(f),dt(18)}}else f.za=R[1],0<f.za-f.T&&37500>R[2]&&f.F&&f.v==0&&!f.C&&(f.C=As(y(f.Za,f),6e3));if(1>=Iu(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else or(f,11)}else if((o.K||f.g==o)&&Wi(f),!j(u))for(R=f.Da.g.parse(u),u=0;u<R.length;u++){let _e=R[u];if(f.T=_e[0],_e=_e[1],f.G==2)if(_e[0]=="c"){f.K=_e[1],f.ia=_e[2];const rt=_e[3];rt!=null&&(f.la=rt,f.j.info("VER="+f.la));const st=_e[4];st!=null&&(f.Aa=st,f.j.info("SVER="+f.Aa));const Dr=_e[5];Dr!=null&&typeof Dr=="number"&&0<Dr&&(p=1.5*Dr,f.L=p,f.j.info("backChannelRequestTimeoutMs_="+p)),p=f;const Vt=o.g;if(Vt){const Gi=Vt.g?Vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gi){var C=p.h;C.g||Gi.indexOf("spdy")==-1&&Gi.indexOf("quic")==-1&&Gi.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Ba(C,C.h),C.h=null))}if(p.D){const za=Vt.g?Vt.g.getResponseHeader("X-HTTP-Session-Id"):null;za&&(p.ya=za,Ve(p.I,p.D,za))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),p=f;var B=o;if(p.qa=Gu(p,p.J?p.ia:null,p.W),B.K){wu(p.h,B);var be=B,Je=p.L;Je&&(be.I=Je),be.B&&(La(be),Li(be)),p.g=B}else qu(p);0<f.i.length&&zi(f)}else _e[0]!="stop"&&_e[0]!="close"||or(f,7);else f.G==3&&(_e[0]=="stop"||_e[0]=="close"?_e[0]=="stop"?or(f,7):ja(f):_e[0]!="noop"&&f.l&&f.l.ta(_e),f.v=0)}}ws(4)}catch{}}var r_=class{constructor(o,u){this.g=o,this.map=u}};function Eu(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Tu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Iu(o){return o.h?1:o.g?o.g.size:0}function Ua(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Ba(o,u){o.g?o.g.add(u):o.h=u}function wu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Eu.prototype.cancel=function(){if(this.i=Au(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Au(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return N(o.i)}function s_(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],f=o.length,p=0;p<f;p++)u.push(o[p]);return u}u=[],f=0;for(p in o)u[f++]=o[p];return u}function i_(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const p in o)u[f++]=p;return u}}}function bu(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=i_(o),p=s_(o),R=p.length,C=0;C<R;C++)u.call(void 0,p[C],f&&f[C],o)}var Su=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function o_(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var p=o[f].indexOf("="),R=null;if(0<=p){var C=o[f].substring(0,p);R=o[f].substring(p+1)}else C=o[f];u(C,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function ir(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof ir){this.h=o.h,Fi(this,o.j),this.o=o.o,this.g=o.g,Ui(this,o.s),this.l=o.l;var u=o.i,f=new Ps;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Ru(this,f),this.m=o.m}else o&&(u=String(o).match(Su))?(this.h=!1,Fi(this,u[1]||"",!0),this.o=Rs(u[2]||""),this.g=Rs(u[3]||"",!0),Ui(this,u[4]),this.l=Rs(u[5]||"",!0),Ru(this,u[6]||"",!0),this.m=Rs(u[7]||"")):(this.h=!1,this.i=new Ps(null,this.h))}ir.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Cs(u,Cu,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Cs(u,Cu,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Cs(f,f.charAt(0)=="/"?l_:c_,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Cs(f,h_)),o.join("")};function on(o){return new ir(o)}function Fi(o,u,f){o.j=f?Rs(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ui(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Ru(o,u,f){u instanceof Ps?(o.i=u,f_(o.i,o.h)):(f||(u=Cs(u,u_)),o.i=new Ps(u,o.h))}function Ve(o,u,f){o.i.set(u,f)}function Bi(o){return Ve(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Rs(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Cs(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,a_),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function a_(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Cu=/[#\/\?@]/g,c_=/[#\?:]/g,l_=/[#\?]/g,u_=/[#\?@]/g,h_=/#/g;function Ps(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Pn(o){o.g||(o.g=new Map,o.h=0,o.i&&o_(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=Ps.prototype,t.add=function(o,u){Pn(this),this.i=null,o=Vr(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function Pu(o,u){Pn(o),u=Vr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Vu(o,u){return Pn(o),u=Vr(o,u),o.g.has(u)}t.forEach=function(o,u){Pn(this),this.g.forEach(function(f,p){f.forEach(function(R){o.call(u,R,p,this)},this)},this)},t.na=function(){Pn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let p=0;p<u.length;p++){const R=o[p];for(let C=0;C<R.length;C++)f.push(u[p])}return f},t.V=function(o){Pn(this);let u=[];if(typeof o=="string")Vu(this,o)&&(u=u.concat(this.g.get(Vr(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},t.set=function(o,u){return Pn(this),this.i=null,o=Vr(this,o),Vu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function ku(o,u,f){Pu(o,u),0<f.length&&(o.i=null,o.g.set(Vr(o,u),N(f)),o.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var p=u[f];const C=encodeURIComponent(String(p)),B=this.V(p);for(p=0;p<B.length;p++){var R=C;B[p]!==""&&(R+="="+encodeURIComponent(String(B[p]))),o.push(R)}}return this.i=o.join("&")};function Vr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function f_(o,u){u&&!o.j&&(Pn(o),o.i=null,o.g.forEach(function(f,p){var R=p.toLowerCase();p!=R&&(Pu(this,p),ku(this,R,f))},o)),o.j=u}function d_(o,u){const f=new bs;if(c.Image){const p=new Image;p.onload=b(Vn,f,"TestLoadImage: loaded",!0,u,p),p.onerror=b(Vn,f,"TestLoadImage: error",!1,u,p),p.onabort=b(Vn,f,"TestLoadImage: abort",!1,u,p),p.ontimeout=b(Vn,f,"TestLoadImage: timeout",!1,u,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function p_(o,u){const f=new bs,p=new AbortController,R=setTimeout(()=>{p.abort(),Vn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(C=>{clearTimeout(R),C.ok?Vn(f,"TestPingServer: ok",!0,u):Vn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),Vn(f,"TestPingServer: error",!1,u)})}function Vn(o,u,f,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(f)}catch{}}function g_(){this.g=new Ni}function m_(o,u,f){const p=f||"";try{bu(o,function(R,C){let B=R;h(R)&&(B=Qe(R)),u.push(p+C+"="+encodeURIComponent(B))})}catch(R){throw u.push(p+"type="+encodeURIComponent("_badmap")),R}}function $i(o){this.l=o.Ub||null,this.j=o.eb||!1}V($i,Cr),$i.prototype.g=function(){return new ji(this.l,this.j)},$i.prototype.i=(function(o){return function(){return o}})({});function ji(o,u){ee.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(ji,ee),t=ji.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,ks(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vs(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ks(this)),this.g&&(this.readyState=3,ks(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Du(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Du(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Vs(this):ks(this),this.readyState==3&&Du(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,Vs(this))},t.Qa=function(o){this.g&&(this.response=o,Vs(this))},t.ga=function(){this.g&&Vs(this)};function Vs(o){o.readyState=4,o.l=null,o.j=null,o.v=null,ks(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function ks(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ji.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Nu(o){let u="";return ve(o,function(f,p){u+=p,u+=":",u+=f,u+=`\r
`}),u}function $a(o,u,f){e:{for(p in f){var p=!1;break e}p=!0}p||(f=Nu(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Ve(o,u,f))}function xe(o){ee.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(xe,ee);var __=/^https?$/i,y_=["POST","PUT"];t=xe.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,f,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Oa.g(),this.v=this.o?cu(this.o):cu(Oa),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){Ou(this,C);return}if(o=f||"",f=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)f.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())f.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(f.keys()).find(C=>C.toLowerCase()=="content-type"),R=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(y_,u,void 0))||p||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,B]of f)this.g.setRequestHeader(C,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Lu(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){Ou(this,C)}};function Ou(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,xu(o),qi(o)}function xu(o){o.A||(o.A=!0,ae(o,"complete"),ae(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ae(this,"complete"),ae(this,"abort"),qi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qi(this,!0)),xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Mu(this):this.bb())},t.bb=function(){Mu(this)};function Mu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||an(o)!=4||o.Z()!=2)){if(o.u&&an(o)==4)Ne(o.Ea,0,o);else if(ae(o,"readystatechange"),an(o)==4){o.h=!1;try{const B=o.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var p;if(p=B===0){var R=String(o.D).match(Su)[1]||null;!R&&c.self&&c.self.location&&(R=c.self.location.protocol.slice(0,-1)),p=!__.test(R?R.toLowerCase():"")}f=p}if(f)ae(o,"complete"),ae(o,"success");else{o.m=6;try{var C=2<an(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",xu(o)}}finally{qi(o)}}}}function qi(o,u){if(o.g){Lu(o);const f=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||ae(o,"ready");try{f.onreadystatechange=p}catch{}}}function Lu(o){o.I&&(c.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function an(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<an(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),St(u)}};function Fu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function v_(o){const u={};o=(o.g&&2<=an(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(j(o[p]))continue;var f=A(o[p]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const C=u[R]||[];u[R]=C,C.push(f)}I(u,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ds(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function Uu(o){this.Aa=0,this.i=[],this.j=new bs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ds("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ds("baseRetryDelayMs",5e3,o),this.cb=Ds("retryDelaySeedMs",1e4,o),this.Wa=Ds("forwardChannelMaxRetries",2,o),this.wa=Ds("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Eu(o&&o.concurrentRequestLimit),this.Da=new g_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Uu.prototype,t.la=8,t.G=1,t.connect=function(o,u,f,p){dt(0),this.W=o,this.H=u||{},f&&p!==void 0&&(this.H.OSID=f,this.H.OAID=p),this.F=this.X,this.I=Gu(this,null,this.W),zi(this)};function ja(o){if(Bu(o),o.G==3){var u=o.U++,f=on(o.I);if(Ve(f,"SID",o.K),Ve(f,"RID",u),Ve(f,"TYPE","terminate"),Ns(o,f),u=new Cn(o,o.j,u),u.L=2,u.v=Bi(on(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=u.v,f=!0),f||(u.g=Qu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Li(u)}Ku(o)}function Hi(o){o.g&&(Ha(o),o.g.cancel(),o.g=null)}function Bu(o){Hi(o),o.u&&(c.clearTimeout(o.u),o.u=null),Wi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function zi(o){if(!Tu(o.h)&&!o.s){o.s=!0;var u=o.Ga;le||er(),me||(le(),me=!0),Pt.add(u,o),o.B=0}}function E_(o,u){return Iu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=As(y(o.Ga,o,u),Wu(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new Cn(this,this.j,o);let C=this.o;if(this.S&&(C?(C=m(C),T(C,this.S)):C=this.S),this.m!==null||this.O||(R.H=C,C=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var p=this.i[f];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=ju(this,R,u),f=on(this.I),Ve(f,"RID",o),Ve(f,"CVER",22),this.D&&Ve(f,"X-HTTP-Session-Id",this.D),Ns(this,f),C&&(this.O?u="headers="+encodeURIComponent(String(Nu(C)))+"&"+u:this.m&&$a(f,this.m,C)),Ba(this.h,R),this.Ua&&Ve(f,"TYPE","init"),this.P?(Ve(f,"$req",u),Ve(f,"SID","null"),R.T=!0,Ma(R,f,null)):Ma(R,f,u),this.G=2}}else this.G==3&&(o?$u(this,o):this.i.length==0||Tu(this.h)||$u(this))};function $u(o,u){var f;u?f=u.l:f=o.U++;const p=on(o.I);Ve(p,"SID",o.K),Ve(p,"RID",f),Ve(p,"AID",o.T),Ns(o,p),o.m&&o.o&&$a(p,o.m,o.o),f=new Cn(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=ju(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ba(o.h,f),Ma(f,p,u)}function Ns(o,u){o.H&&ve(o.H,function(f,p){Ve(u,p,f)}),o.l&&bu({},function(f,p){Ve(u,p,f)})}function ju(o,u,f){f=Math.min(o.i.length,f);var p=o.l?y(o.l.Na,o.l,o):null;e:{var R=o.i;let C=-1;for(;;){const B=["count="+f];C==-1?0<f?(C=R[0].g,B.push("ofs="+C)):C=0:B.push("ofs="+C);let be=!0;for(let Je=0;Je<f;Je++){let _e=R[Je].g;const rt=R[Je].map;if(_e-=C,0>_e)C=Math.max(0,R[Je].g-100),be=!1;else try{m_(rt,B,"req"+_e+"_")}catch{p&&p(rt)}}if(be){p=B.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,p}function qu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;le||er(),me||(le(),me=!0),Pt.add(u,o),o.v=0}}function qa(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=As(y(o.Fa,o),Wu(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,Hu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=As(y(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,dt(10),Hi(this),Hu(this))};function Ha(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Hu(o){o.g=new Cn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=on(o.qa);Ve(u,"RID","rpc"),Ve(u,"SID",o.K),Ve(u,"AID",o.T),Ve(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Ve(u,"TO",o.ja),Ve(u,"TYPE","xmlhttp"),Ns(o,u),o.m&&o.o&&$a(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=Bi(on(u)),f.m=null,f.P=!0,_u(f,o)}t.Za=function(){this.C!=null&&(this.C=null,Hi(this),qa(this),dt(19))};function Wi(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function zu(o,u){var f=null;if(o.g==u){Wi(o),Ha(o),o.g=null;var p=2}else if(Ua(o.h,u))f=u.D,wu(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var R=o.B;p=Oi(),ae(p,new du(p,f)),zi(o)}else qu(o);else if(R=u.s,R==3||R==0&&0<u.X||!(p==1&&E_(o,u)||p==2&&qa(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),R){case 1:or(o,5);break;case 4:or(o,10);break;case 3:or(o,6);break;default:or(o,2)}}}function Wu(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function or(o,u){if(o.j.info("Error code "+u),u==2){var f=y(o.fb,o),p=o.Xa;const R=!p;p=new ir(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Fi(p,"https"),Bi(p),R?d_(p.toString(),f):p_(p.toString(),f)}else dt(2);o.G=0,o.l&&o.l.sa(u),Ku(o),Bu(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function Ku(o){if(o.G=0,o.ka=[],o.l){const u=Au(o.h);(u.length!=0||o.i.length!=0)&&(F(o.ka,u),F(o.ka,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.ra()}}function Gu(o,u,f){var p=f instanceof ir?on(f):new ir(f);if(p.g!="")u&&(p.g=u+"."+p.g),Ui(p,p.s);else{var R=c.location;p=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;var C=new ir(null);p&&Fi(C,p),u&&(C.g=u),R&&Ui(C,R),f&&(C.l=f),p=C}return f=o.D,u=o.ya,f&&u&&Ve(p,f,u),Ve(p,"VER",o.la),Ns(o,p),p}function Qu(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new xe(new $i({eb:f})):new xe(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ju(){}t=Ju.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ki(){}Ki.prototype.g=function(o,u){return new Et(o,u)};function Et(o,u){ee.call(this),this.g=new Uu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!j(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!j(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new kr(this)}V(Et,ee),Et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Et.prototype.close=function(){ja(this.g)},Et.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=Qe(o),o=f);u.i.push(new r_(u.Ya++,o)),u.G==3&&zi(u)},Et.prototype.N=function(){this.g.l=null,delete this.j,ja(this.g),delete this.g,Et.aa.N.call(this)};function Xu(o){Da.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}V(Xu,Da);function Yu(){Na.call(this),this.status=1}V(Yu,Na);function kr(o){this.g=o}V(kr,Ju),kr.prototype.ua=function(){ae(this.g,"a")},kr.prototype.ta=function(o){ae(this.g,new Xu(o))},kr.prototype.sa=function(o){ae(this.g,new Yu)},kr.prototype.ra=function(){ae(this.g,"b")},Ki.prototype.createWebChannel=Ki.prototype.g,Et.prototype.send=Et.prototype.o,Et.prototype.open=Et.prototype.m,Et.prototype.close=Et.prototype.close,Gp=function(){return new Ki},Kp=function(){return Oi()},Wp=rr,Nc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},xi.NO_ERROR=0,xi.TIMEOUT=8,xi.HTTP_ERROR=6,fo=xi,pu.COMPLETE="complete",zp=pu,lu.EventType=Is,Is.OPEN="a",Is.CLOSE="b",Is.ERROR="c",Is.MESSAGE="d",ee.prototype.listen=ee.prototype.K,Us=lu,xe.prototype.listenOnce=xe.prototype.L,xe.prototype.getLastError=xe.prototype.Ka,xe.prototype.getLastErrorCode=xe.prototype.Ba,xe.prototype.getStatus=xe.prototype.Z,xe.prototype.getResponseJson=xe.prototype.Oa,xe.prototype.getResponseText=xe.prototype.oa,xe.prototype.send=xe.prototype.ea,xe.prototype.setWithCredentials=xe.prototype.Ha,Hp=xe}).apply(typeof Yi<"u"?Yi:typeof self<"u"?self:typeof window<"u"?window:{});const Gh="@firebase/firestore",Qh="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ds="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=new _l("@firebase/firestore");function Ur(){return Er.logLevel}function W(t,...e){if(Er.logLevel<=he.DEBUG){const n=e.map(El);Er.debug(`Firestore (${ds}): ${t}`,...n)}}function In(t,...e){if(Er.logLevel<=he.ERROR){const n=e.map(El);Er.error(`Firestore (${ds}): ${t}`,...n)}}function Wn(t,...e){if(Er.logLevel<=he.WARN){const n=e.map(El);Er.warn(`Firestore (${ds}): ${t}`,...n)}}function El(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Qp(t,r,n)}function Qp(t,e,n){let r=`FIRESTORE (${ds}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw In(r),new Error(r)}function Ie(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Qp(e,s,r)}function ie(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Sn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class eI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(at.UNAUTHENTICATED)))}shutdown(){}}class tI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class nI{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ie(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Hn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Hn,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Hn)}}),0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ie(typeof r.accessToken=="string",31837,{l:r}),new Jp(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string",2055,{h:e}),new at(e)}}class rI{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=at.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class sI{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new rI(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(at.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Jh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iI{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,kt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ie(this.o===void 0,3512);const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,W("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Jh(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Ie(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Jh(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=oI(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function Oc(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return ue(r,s);{const i=Xp(),a=aI(i.encode(Xh(t,n)),i.encode(Xh(e,n)));return a!==0?a:ue(r,s)}}n+=r>65535?2:1}return ue(t.length,e.length)}function Xh(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function aI(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ue(t[n],e[n]);return ue(t.length,e.length)}function rs(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh="__name__";class qt{constructor(e,n,r){n===void 0?n=0:n>e.length&&te(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&te(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return qt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof qt?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=qt.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ue(e.length,n.length)}static compareSegments(e,n){const r=qt.isNumericId(e),s=qt.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?qt.extractNumericId(e).compare(qt.extractNumericId(n)):Oc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return qn.fromString(e.substring(4,e.length-2))}}class Pe extends qt{construct(e,n,r){return new Pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Pe(n)}static emptyPath(){return new Pe([])}}const cI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends qt{construct(e,n,r){return new Ye(e,n,r)}static isValidIdentifier(e){return cI.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Yh}static keyField(){return new Ye([Yh])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new K(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new K(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new K(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new K(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Pe.fromString(e))}static fromName(e){return new X(Pe.fromString(e).popFirst(5))}static empty(){return new X(Pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Pe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yp(t,e,n){if(!n)throw new K(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function lI(t,e,n,r){if(e===!0&&r===!0)throw new K(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Zh(t){if(!X.isDocumentKey(t))throw new K(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ef(t){if(X.isDocumentKey(t))throw new K(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Zp(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function da(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":te(12329,{type:typeof t})}function ss(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=da(t);throw new K(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ii(t,e){if(!Zp(t))throw new K(k.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const a=t[r];if(s&&typeof a!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new K(k.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf=-62135596800,nf=1e6;class ke{static now(){return ke.fromMillis(Date.now())}static fromDate(e){return ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*nf);return new ke(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<tf)throw new K(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/nf}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ke._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ii(e,ke._jsonSchema))return new ke(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-tf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ke._jsonSchemaVersion="firestore/timestamp/1.0",ke._jsonSchema={type:je("string",ke._jsonSchemaVersion),seconds:je("number"),nanoseconds:je("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{static fromTimestamp(e){return new se(e)}static min(){return new se(new ke(0,0))}static max(){return new se(new ke(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=-1;function uI(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=se.fromTimestamp(r===1e9?new ke(n+1,0):new ke(n,r));return new Kn(s,X.empty(),e)}function hI(t){return new Kn(t.readTime,t.key,ui)}class Kn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Kn(se.min(),X.empty(),ui)}static max(){return new Kn(se.max(),X.empty(),ui)}}function fI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ps(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==dI)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&te(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new D(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof D?n:D.resolve(n)}catch(n){return D.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):D.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):D.reject(n)}static resolve(e){return new D(((n,r)=>{n(e)}))}static reject(e){return new D(((n,r)=>{r(e)}))}static waitFor(e){return new D(((n,r)=>{let s=0,i=0,a=!1;e.forEach((c=>{++s,c.next((()=>{++i,a&&i===s&&n()}),(l=>r(l)))})),a=!0,i===s&&n()}))}static or(e){let n=D.resolve(!1);for(const r of e)n=n.next((s=>s?D.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new D(((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next((d=>{a[h]=d,++c,c===i&&r(a)}),(d=>s(d)))}}))}static doWhile(e,n){return new D(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function gI(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function gs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}pa.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il=-1;function ga(t){return t==null}function No(t){return t===0&&1/t==-1/0}function mI(t){return typeof t=="number"&&Number.isInteger(t)&&!No(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg="";function _I(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=rf(e)),e=yI(t.get(n),e);return rf(e)}function yI(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case eg:n+="";break;default:n+=i}}return n}function rf(t){return t+eg+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ar(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function tg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new Oe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new Oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zi(this.root,e,this.comparator,!0)}}class Zi{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Xe.RED,this.left=s??Xe.EMPTY,this.right=i??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Xe(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Xe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw te(43730,{key:this.key,value:this.value});if(this.right.isRed())throw te(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw te(27949);return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw te(57766)}get value(){throw te(16141)}get color(){throw te(16727)}get left(){throw te(29726)}get right(){throw te(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Xe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.comparator=e,this.data=new Oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new of(this.data.getIterator())}getIteratorFrom(e){return new of(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Ke(this.comparator);return n.data=e,n}}class of{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new Dt([])}unionWith(e){let n=new Ke(Ye.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Dt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return rs(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ng("Invalid base64 string: "+i):i}})(e);return new tt(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const vI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gn(t){if(Ie(!!t,39018),typeof t=="string"){let e=0;const n=vI.exec(t);if(Ie(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Qn(t){return typeof t=="string"?tt.fromBase64String(t):tt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg="server_timestamp",sg="__type__",ig="__previous_value__",og="__local_write_time__";function wl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[sg])===null||n===void 0?void 0:n.stringValue)===rg}function ma(t){const e=t.mapValue.fields[ig];return wl(e)?ma(e):e}function hi(t){const e=Gn(t.mapValue.fields[og].timestampValue);return new ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e,n,r,s,i,a,c,l,h,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=d}}const Oo="(default)";class fi{constructor(e,n){this.projectId=e,this.database=n||Oo}static empty(){return new fi("","")}get isDefaultDatabase(){return this.database===Oo}isEqual(e){return e instanceof fi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag="__type__",TI="__max__",eo={mapValue:{}},cg="__vector__",xo="value";function Jn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?wl(t)?4:wI(t)?9007199254740991:II(t)?10:11:te(28295,{value:t})}function tn(t,e){if(t===e)return!0;const n=Jn(t);if(n!==Jn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return hi(t).isEqual(hi(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Gn(s.timestampValue),c=Gn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return Qn(s.bytesValue).isEqual(Qn(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return Le(s.geoPointValue.latitude)===Le(i.geoPointValue.latitude)&&Le(s.geoPointValue.longitude)===Le(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Le(s.integerValue)===Le(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Le(s.doubleValue),c=Le(i.doubleValue);return a===c?No(a)===No(c):isNaN(a)&&isNaN(c)}return!1})(t,e);case 9:return rs(t.arrayValue.values||[],e.arrayValue.values||[],tn);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(sf(a)!==sf(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!tn(a[l],c[l])))return!1;return!0})(t,e);default:return te(52216,{left:t})}}function di(t,e){return(t.values||[]).find((n=>tn(n,e)))!==void 0}function is(t,e){if(t===e)return 0;const n=Jn(t),r=Jn(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return(function(i,a){const c=Le(i.integerValue||i.doubleValue),l=Le(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(t,e);case 3:return af(t.timestampValue,e.timestampValue);case 4:return af(hi(t),hi(e));case 5:return Oc(t.stringValue,e.stringValue);case 6:return(function(i,a){const c=Qn(i),l=Qn(a);return c.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const d=ue(c[h],l[h]);if(d!==0)return d}return ue(c.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,a){const c=ue(Le(i.latitude),Le(a.latitude));return c!==0?c:ue(Le(i.longitude),Le(a.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return cf(t.arrayValue,e.arrayValue);case 10:return(function(i,a){var c,l,h,d;const g=i.fields||{},y=a.fields||{},b=(c=g[xo])===null||c===void 0?void 0:c.arrayValue,V=(l=y[xo])===null||l===void 0?void 0:l.arrayValue,N=ue(((h=b==null?void 0:b.values)===null||h===void 0?void 0:h.length)||0,((d=V==null?void 0:V.values)===null||d===void 0?void 0:d.length)||0);return N!==0?N:cf(b,V)})(t.mapValue,e.mapValue);case 11:return(function(i,a){if(i===eo.mapValue&&a===eo.mapValue)return 0;if(i===eo.mapValue)return 1;if(a===eo.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let g=0;g<l.length&&g<d.length;++g){const y=Oc(l[g],d[g]);if(y!==0)return y;const b=is(c[l[g]],h[d[g]]);if(b!==0)return b}return ue(l.length,d.length)})(t.mapValue,e.mapValue);default:throw te(23264,{le:n})}}function af(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=Gn(t),r=Gn(e),s=ue(n.seconds,r.seconds);return s!==0?s:ue(n.nanos,r.nanos)}function cf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=is(n[s],r[s]);if(i)return i}return ue(n.length,r.length)}function os(t){return xc(t)}function xc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=Gn(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Qn(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return X.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=xc(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${xc(n.fields[a])}`;return s+"}"})(t.mapValue):te(61005,{value:t})}function po(t){switch(Jn(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ma(t);return e?16+po(e):16;case 5:return 2*t.stringValue.length;case 6:return Qn(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+po(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return Ar(r.fields,((i,a)=>{s+=i.length+po(a)})),s})(t.mapValue);default:throw te(13486,{value:t})}}function lf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Mc(t){return!!t&&"integerValue"in t}function Al(t){return!!t&&"arrayValue"in t}function uf(t){return!!t&&"nullValue"in t}function hf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function go(t){return!!t&&"mapValue"in t}function II(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[ag])===null||n===void 0?void 0:n.stringValue)===cg}function Ys(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ar(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=Ys(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ys(t.arrayValue.values[n]);return e}return Object.assign({},t)}function wI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===TI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!go(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ys(n)}setAll(e){let n=Ye.emptyPath(),r={},s=[];e.forEach(((a,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}a?r[c.lastSegment()]=Ys(a):s.push(c.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());go(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return tn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];go(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ar(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Rt(Ys(this.value))}}function lg(t){const e=[];return Ar(t.fields,((n,r)=>{const s=new Ye([n]);if(go(r)){const i=lg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new Dt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,n,r,s,i,a,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new lt(e,0,se.min(),se.min(),se.min(),Rt.empty(),0)}static newFoundDocument(e,n,r,s){return new lt(e,1,n,se.min(),r,s,0)}static newNoDocument(e,n){return new lt(e,2,n,se.min(),se.min(),Rt.empty(),0)}static newUnknownDocument(e,n){return new lt(e,3,n,se.min(),se.min(),Rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,n){this.position=e,this.inclusive=n}}function ff(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=X.comparator(X.fromName(a.referenceValue),n.key):r=is(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function df(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!tn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,n="asc"){this.field=e,this.dir=n}}function AI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{}class $e extends ug{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new SI(e,n,r):n==="array-contains"?new PI(e,r):n==="in"?new VI(e,r):n==="not-in"?new kI(e,r):n==="array-contains-any"?new DI(e,r):new $e(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new RI(e,r):new CI(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(is(n,this.value)):n!==null&&Jn(this.value)===Jn(n)&&this.matchesComparison(is(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Lt extends ug{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new Lt(e,n)}matches(e){return hg(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function hg(t){return t.op==="and"}function fg(t){return bI(t)&&hg(t)}function bI(t){for(const e of t.filters)if(e instanceof Lt)return!1;return!0}function Lc(t){if(t instanceof $e)return t.field.canonicalString()+t.op.toString()+os(t.value);if(fg(t))return t.filters.map((e=>Lc(e))).join(",");{const e=t.filters.map((n=>Lc(n))).join(",");return`${t.op}(${e})`}}function dg(t,e){return t instanceof $e?(function(r,s){return s instanceof $e&&r.op===s.op&&r.field.isEqual(s.field)&&tn(r.value,s.value)})(t,e):t instanceof Lt?(function(r,s){return s instanceof Lt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,c)=>i&&dg(a,s.filters[c])),!0):!1})(t,e):void te(19439)}function pg(t){return t instanceof $e?(function(n){return`${n.field.canonicalString()} ${n.op} ${os(n.value)}`})(t):t instanceof Lt?(function(n){return n.op.toString()+" {"+n.getFilters().map(pg).join(" ,")+"}"})(t):"Filter"}class SI extends $e{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class RI extends $e{constructor(e,n){super(e,"in",n),this.keys=gg("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class CI extends $e{constructor(e,n){super(e,"not-in",n),this.keys=gg("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function gg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map((r=>X.fromName(r.referenceValue)))}class PI extends $e{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Al(n)&&di(n.arrayValue,this.value)}}class VI extends $e{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&di(this.value.arrayValue,n)}}class kI extends $e{constructor(e,n){super(e,"not-in",n)}matches(e){if(di(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!di(this.value.arrayValue,n)}}class DI extends $e{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Al(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>di(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e,n=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Pe=null}}function pf(t,e=null,n=[],r=[],s=null,i=null,a=null){return new NI(t,e,n,r,s,i,a)}function bl(t){const e=ie(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>Lc(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),ga(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>os(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>os(r))).join(",")),e.Pe=n}return e.Pe}function Sl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!AI(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!dg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!df(t.startAt,e.startAt)&&df(t.endAt,e.endAt)}function Fc(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,n=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function OI(t,e,n,r,s,i,a,c){return new wi(t,e,n,r,s,i,a,c)}function mg(t){return new wi(t)}function gf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function _g(t){return t.collectionGroup!==null}function Zs(t){const e=ie(t);if(e.Te===null){e.Te=[];const n=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Ke(Ye.comparator);return a.filters.forEach((l=>{l.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Lo(i,r))})),n.has(Ye.keyField().canonicalString())||e.Te.push(new Lo(Ye.keyField(),r))}return e.Te}function Gt(t){const e=ie(t);return e.Ie||(e.Ie=xI(e,Zs(t))),e.Ie}function xI(t,e){if(t.limitType==="F")return pf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Lo(s.field,i)}));const n=t.endAt?new Mo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Mo(t.startAt.position,t.startAt.inclusive):null;return pf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Uc(t,e){const n=t.filters.concat([e]);return new wi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Bc(t,e,n){return new wi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function _a(t,e){return Sl(Gt(t),Gt(e))&&t.limitType===e.limitType}function yg(t){return`${bl(Gt(t))}|lt:${t.limitType}`}function Br(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>pg(s))).join(", ")}]`),ga(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>os(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>os(s))).join(",")),`Target(${r})`})(Gt(t))}; limitType=${t.limitType})`}function ya(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):X.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of Zs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(a,c,l){const h=ff(a,c,l);return a.inclusive?h<=0:h<0})(r.startAt,Zs(r),s)||r.endAt&&!(function(a,c,l){const h=ff(a,c,l);return a.inclusive?h>=0:h>0})(r.endAt,Zs(r),s))})(t,e)}function MI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function vg(t){return(e,n)=>{let r=!1;for(const s of Zs(t)){const i=LI(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function LI(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):(function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?is(l,h):te(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return te(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ar(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return tg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI=new Oe(X.comparator);function wn(){return FI}const Eg=new Oe(X.comparator);function Bs(...t){let e=Eg;for(const n of t)e=e.insert(n.key,n);return e}function Tg(t){let e=Eg;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function dr(){return ei()}function Ig(){return ei()}function ei(){return new br((t=>t.toString()),((t,e)=>t.isEqual(e)))}const UI=new Oe(X.comparator),BI=new Ke(X.comparator);function fe(...t){let e=BI;for(const n of t)e=e.add(n);return e}const $I=new Ke(ue);function jI(){return $I}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:No(e)?"-0":e}}function wg(t){return{integerValue:""+t}}function qI(t,e){return mI(e)?wg(e):Rl(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(){this._=void 0}}function HI(t,e,n){return t instanceof Fo?(function(s,i){const a={fields:{[sg]:{stringValue:rg},[og]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&wl(i)&&(i=ma(i)),i&&(a.fields[ig]=i),{mapValue:a}})(n,e):t instanceof pi?bg(t,e):t instanceof gi?Sg(t,e):(function(s,i){const a=Ag(s,i),c=mf(a)+mf(s.Ee);return Mc(a)&&Mc(s.Ee)?wg(c):Rl(s.serializer,c)})(t,e)}function zI(t,e,n){return t instanceof pi?bg(t,e):t instanceof gi?Sg(t,e):n}function Ag(t,e){return t instanceof Uo?(function(r){return Mc(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Fo extends va{}class pi extends va{constructor(e){super(),this.elements=e}}function bg(t,e){const n=Rg(e);for(const r of t.elements)n.some((s=>tn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class gi extends va{constructor(e){super(),this.elements=e}}function Sg(t,e){let n=Rg(e);for(const r of t.elements)n=n.filter((s=>!tn(s,r)));return{arrayValue:{values:n}}}class Uo extends va{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function mf(t){return Le(t.integerValue||t.doubleValue)}function Rg(t){return Al(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function WI(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof pi&&s instanceof pi||r instanceof gi&&s instanceof gi?rs(r.elements,s.elements,tn):r instanceof Uo&&s instanceof Uo?tn(r.Ee,s.Ee):r instanceof Fo&&s instanceof Fo})(t.transform,e.transform)}class KI{constructor(e,n){this.version=e,this.transformResults=n}}class Qt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Qt}static exists(e){return new Qt(void 0,e)}static updateTime(e){return new Qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ea{}function Cg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Cl(t.key,Qt.none()):new Ai(t.key,t.data,Qt.none());{const n=t.data,r=Rt.empty();let s=new Ke(Ye.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Sr(t.key,r,new Dt(s.toArray()),Qt.none())}}function GI(t,e,n){t instanceof Ai?(function(s,i,a){const c=s.value.clone(),l=yf(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(t,e,n):t instanceof Sr?(function(s,i,a){if(!mo(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=yf(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(Pg(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(t,e,n):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,n)}function ti(t,e,n,r){return t instanceof Ai?(function(i,a,c,l){if(!mo(i.precondition,a))return c;const h=i.value.clone(),d=vf(i.fieldTransforms,l,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(t,e,n,r):t instanceof Sr?(function(i,a,c,l){if(!mo(i.precondition,a))return c;const h=vf(i.fieldTransforms,l,a),d=a.data;return d.setAll(Pg(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((g=>g.field)))})(t,e,n,r):(function(i,a,c){return mo(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(t,e,n)}function QI(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Ag(r.transform,s||null);i!=null&&(n===null&&(n=Rt.empty()),n.set(r.field,i))}return n||null}function _f(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&rs(r,s,((i,a)=>WI(i,a)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ai extends Ea{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Sr extends Ea{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Pg(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function yf(t,e,n){const r=new Map;Ie(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,zI(a,c,n[s]))}return r}function vf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,HI(i,a,e))}return r}class Cl extends Ea{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class JI extends Ea{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&GI(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ti(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ti(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Ig();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=n.has(s.key)?null:c;const l=Cg(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(se.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),fe())}isEqual(e){return this.batchId===e.batchId&&rs(this.mutations,e.mutations,((n,r)=>_f(n,r)))&&rs(this.baseMutations,e.baseMutations,((n,r)=>_f(n,r)))}}class Pl{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ie(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return UI})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Pl(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be,pe;function ew(t){switch(t){case k.OK:return te(64938);case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0;default:return te(15467,{code:t})}}function Vg(t){if(t===void 0)return In("GRPC error has no .code"),k.UNKNOWN;switch(t){case Be.OK:return k.OK;case Be.CANCELLED:return k.CANCELLED;case Be.UNKNOWN:return k.UNKNOWN;case Be.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Be.INTERNAL:return k.INTERNAL;case Be.UNAVAILABLE:return k.UNAVAILABLE;case Be.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Be.NOT_FOUND:return k.NOT_FOUND;case Be.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Be.ABORTED:return k.ABORTED;case Be.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Be.DATA_LOSS:return k.DATA_LOSS;default:return te(39323,{code:t})}}(pe=Be||(Be={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw=new qn([4294967295,4294967295],0);function Ef(t){const e=Xp().encode(t),n=new qp;return n.update(e),new Uint8Array(n.digest())}function Tf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new qn([n,r],0),new qn([s,i],0)]}class Vl{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new $s(`Invalid padding: ${n}`);if(r<0)throw new $s(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new $s(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new $s(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=qn.fromNumber(this.fe)}pe(e,n,r){let s=e.add(n.multiply(qn.fromNumber(r)));return s.compare(tw)===1&&(s=new qn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=Ef(e),[r,s]=Tf(n);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);if(!this.ye(a))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Vl(i,s,n);return r.forEach((c=>a.insert(c))),a}insert(e){if(this.fe===0)return;const n=Ef(e),[r,s]=Tf(n);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);this.we(a)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class $s extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,bi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ta(se.min(),s,new Oe(ue),wn(),fe())}}class bi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new bi(r,n,fe(),fe(),fe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=s}}class kg{constructor(e,n){this.targetId=e,this.De=n}}class Dg{constructor(e,n,r=tt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class If{constructor(){this.ve=0,this.Ce=wf(),this.Fe=tt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=fe(),n=fe(),r=fe();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:te(38017,{changeType:i})}})),new bi(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=wf()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Ie(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class nw{constructor(e){this.We=e,this.Ge=new Map,this.ze=wn(),this.je=to(),this.Je=to(),this.He=new Oe(ue)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,(n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:te(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach(((r,s)=>{this.nt(s)&&n(s)}))}it(e){const n=e.targetId,r=e.De.count,s=this.st(n);if(s){const i=s.target;if(Fc(i))if(r===0){const a=new X(i.path);this.Xe(n,a,lt.newNoDocument(a,se.min()))}else Ie(r===1,20013,{expectedCount:r});else{const a=this.ot(n);if(a!==r){const c=this._t(e),l=c?this.ut(c,e,a):1;if(l!==0){this.rt(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,h)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,c;try{a=Qn(r).toUint8Array()}catch(l){if(l instanceof ng)return Wn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Vl(a,s,i)}catch(l){return Wn(l instanceof $s?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.fe===0?null:c}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const a=this.We.lt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Xe(n,i,null),s++)})),s}Pt(e){const n=new Map;this.Ge.forEach(((i,a)=>{const c=this.st(a);if(c){if(i.current&&Fc(c.target)){const l=new X(c.target.path);this.Tt(l).has(a)||this.It(a,l)||this.Xe(a,l,lt.newNoDocument(l,e))}i.Ne&&(n.set(a,i.Le()),i.ke())}}));let r=fe();this.Je.forEach(((i,a)=>{let c=!0;a.forEachWhile((l=>{const h=this.st(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.ze.forEach(((i,a)=>a.setReadTime(e)));const s=new Ta(e,n,this.He,this.ze,r);return this.ze=wn(),this.je=to(),this.Je=to(),this.He=new Oe(ue),s}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,n)?s.qe(n,1):s.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new If,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new Ke(ue),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new Ke(ue),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new If),this.We.getRemoteKeysForTarget(e).forEach((n=>{this.Xe(e,n,null)}))}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function to(){return new Oe(X.comparator)}function wf(){return new Oe(X.comparator)}const rw={asc:"ASCENDING",desc:"DESCENDING"},sw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},iw={and:"AND",or:"OR"};class ow{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function $c(t,e){return t.useProto3Json||ga(e)?e:{value:e}}function Bo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ng(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function aw(t,e){return Bo(t,e.toTimestamp())}function Jt(t){return Ie(!!t,49232),se.fromTimestamp((function(n){const r=Gn(n);return new ke(r.seconds,r.nanos)})(t))}function kl(t,e){return jc(t,e).canonicalString()}function jc(t,e){const n=(function(s){return new Pe(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function Og(t){const e=Pe.fromString(t);return Ie(Ug(e),10190,{key:e.toString()}),e}function qc(t,e){return kl(t.databaseId,e.path)}function lc(t,e){const n=Og(e);if(n.get(1)!==t.databaseId.projectId)throw new K(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(Mg(n))}function xg(t,e){return kl(t.databaseId,e)}function cw(t){const e=Og(t);return e.length===4?Pe.emptyPath():Mg(e)}function Hc(t){return new Pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Mg(t){return Ie(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Af(t,e,n){return{name:qc(t,e),fields:n.value.mapValue.fields}}function lw(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:te(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(h,d){return h.useProto3Json?(Ie(d===void 0||typeof d=="string",58123),tt.fromBase64String(d||"")):(Ie(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),tt.fromUint8Array(d||new Uint8Array))})(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(h){const d=h.code===void 0?k.UNKNOWN:Vg(h.code);return new K(d,h.message||"")})(a);n=new Dg(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=lc(t,r.document.name),i=Jt(r.document.updateTime),a=r.document.createTime?Jt(r.document.createTime):se.min(),c=new Rt({mapValue:{fields:r.document.fields}}),l=lt.newFoundDocument(s,i,a,c),h=r.targetIds||[],d=r.removedTargetIds||[];n=new _o(h,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=lc(t,r.document),i=r.readTime?Jt(r.readTime):se.min(),a=lt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new _o([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=lc(t,r.document),i=r.removedTargetIds||[];n=new _o([],i,s,null)}else{if(!("filter"in e))return te(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new ZI(s,i),c=r.targetId;n=new kg(c,a)}}return n}function uw(t,e){let n;if(e instanceof Ai)n={update:Af(t,e.key,e.value)};else if(e instanceof Cl)n={delete:qc(t,e.key)};else if(e instanceof Sr)n={update:Af(t,e.key,e.data),updateMask:vw(e.fieldMask)};else{if(!(e instanceof JI))return te(16599,{Rt:e.type});n={verify:qc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const c=a.transform;if(c instanceof Fo)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof pi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof gi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Uo)return{fieldPath:a.field.canonicalString(),increment:c.Ee};throw te(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:aw(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:te(27497)})(t,e.precondition)),n}function hw(t,e){return t&&t.length>0?(Ie(e!==void 0,14353),t.map((n=>(function(s,i){let a=s.updateTime?Jt(s.updateTime):Jt(i);return a.isEqual(se.min())&&(a=Jt(i)),new KI(a,s.transformResults||[])})(n,e)))):[]}function fw(t,e){return{documents:[xg(t,e.path)]}}function dw(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=xg(t,s);const i=(function(h){if(h.length!==0)return Fg(Lt.create(h,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const a=(function(h){if(h.length!==0)return h.map((d=>(function(y){return{field:$r(y.field),direction:mw(y.dir)}})(d)))})(e.orderBy);a&&(n.structuredQuery.orderBy=a);const c=$c(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{Vt:n,parent:s}}function pw(t){let e=cw(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ie(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=(function(g){const y=Lg(g);return y instanceof Lt&&fg(y)?y.getFilters():[y]})(n.where));let a=[];n.orderBy&&(a=(function(g){return g.map((y=>(function(V){return new Lo(jr(V.field),(function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(V.direction))})(y)))})(n.orderBy));let c=null;n.limit&&(c=(function(g){let y;return y=typeof g=="object"?g.value:g,ga(y)?null:y})(n.limit));let l=null;n.startAt&&(l=(function(g){const y=!!g.before,b=g.values||[];return new Mo(b,y)})(n.startAt));let h=null;return n.endAt&&(h=(function(g){const y=!g.before,b=g.values||[];return new Mo(b,y)})(n.endAt)),OI(e,s,a,i,c,"F",l,h)}function gw(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Lg(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=jr(n.unaryFilter.field);return $e.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=jr(n.unaryFilter.field);return $e.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=jr(n.unaryFilter.field);return $e.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=jr(n.unaryFilter.field);return $e.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return te(61313);default:return te(60726)}})(t):t.fieldFilter!==void 0?(function(n){return $e.create(jr(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return te(58110);default:return te(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return Lt.create(n.compositeFilter.filters.map((r=>Lg(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return te(1026)}})(n.compositeFilter.op))})(t):te(30097,{filter:t})}function mw(t){return rw[t]}function _w(t){return sw[t]}function yw(t){return iw[t]}function $r(t){return{fieldPath:t.canonicalString()}}function jr(t){return Ye.fromServerFormat(t.fieldPath)}function Fg(t){return t instanceof $e?(function(n){if(n.op==="=="){if(hf(n.value))return{unaryFilter:{field:$r(n.field),op:"IS_NAN"}};if(uf(n.value))return{unaryFilter:{field:$r(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(hf(n.value))return{unaryFilter:{field:$r(n.field),op:"IS_NOT_NAN"}};if(uf(n.value))return{unaryFilter:{field:$r(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$r(n.field),op:_w(n.op),value:n.value}}})(t):t instanceof Lt?(function(n){const r=n.getFilters().map((s=>Fg(s)));return r.length===1?r[0]:{compositeFilter:{op:yw(n.op),filters:r}}})(t):te(54877,{filter:t})}function vw(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function Ug(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,n,r,s,i=se.min(),a=se.min(),c=tt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Un(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e){this.gt=e}}function Tw(t){const e=pw({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Bc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(){this.Dn=new ww}addToCollectionParentIndex(e,n){return this.Dn.add(n),D.resolve()}getCollectionParents(e,n){return D.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return D.resolve()}deleteFieldIndex(e,n){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,n){return D.resolve()}getDocumentsMatchingTarget(e,n){return D.resolve(null)}getIndexType(e,n){return D.resolve(0)}getFieldIndexes(e,n){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,n){return D.resolve(Kn.min())}getMinOffsetFromCollectionGroup(e,n){return D.resolve(Kn.min())}updateCollectionGroup(e,n,r){return D.resolve()}updateIndexEntries(e,n){return D.resolve()}}class ww{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ke(Pe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ke(Pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Bg=41943040;class yt{static withCacheSize(e){return new yt(e,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yt.DEFAULT_COLLECTION_PERCENTILE=10,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yt.DEFAULT=new yt(Bg,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yt.DISABLED=new yt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new as(0)}static ur(){return new as(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf="LruGarbageCollector",Aw=1048576;function Rf([t,e],[n,r]){const s=ue(t,n);return s===0?ue(e,r):s}class bw{constructor(e){this.Tr=e,this.buffer=new Ke(Rf),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Rf(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Sw{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){W(Sf,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){gs(n)?W(Sf,"Ignoring IndexedDB error during garbage collection: ",n):await ps(n)}await this.Rr(3e5)}))}}class Rw{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return D.resolve(pa.ue);const r=new bw(n);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(bf)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),bf):this.pr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,s,i,a,c,l,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(e,s)))).next((g=>(r=g,c=Date.now(),this.removeTargets(e,r,n)))).next((g=>(i=g,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((g=>(h=Date.now(),Ur()<=he.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${g} documents in `+(h-l)+`ms
Total Duration: ${h-d}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g}))))}}function Cw(t,e){return new Rw(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(){this.changes=new br((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,lt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?D.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&ti(r.mutation,s,Dt.empty(),ke.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,fe()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=fe()){const s=dr();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let a=Bs();return i.forEach(((c,l)=>{a=a.insert(c,l.overlayedDocument)})),a}))))}getOverlayedDocuments(e,n){const r=dr();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,fe())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,c)=>{n.set(a,c)}))}))}computeViews(e,n,r,s){let i=wn();const a=ei(),c=(function(){return ei()})();return n.forEach(((l,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Sr)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),ti(d.mutation,h,d.mutation.getFieldMask(),ke.now())):a.set(h.key,Dt.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((h,d)=>a.set(h,d))),n.forEach(((h,d)=>{var g;return c.set(h,new Vw(d,(g=a.get(h))!==null&&g!==void 0?g:null))})),c)))}recalculateAndSaveOverlays(e,n){const r=ei();let s=new Oe(((a,c)=>a-c)),i=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((a=>{for(const c of a)c.keys().forEach((l=>{const h=n.get(l);if(h===null)return;let d=r.get(l)||Dt.empty();d=c.applyToLocalView(h,d),r.set(l,d);const g=(s.get(c.batchId)||fe()).add(l);s=s.insert(c.batchId,g)}))})).next((()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,d=l.value,g=Ig();d.forEach((y=>{if(!i.has(y)){const b=Cg(n.get(y),r.get(y));b!==null&&g.set(y,b),i=i.add(y)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,g))}return D.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(a){return X.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):_g(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):D.resolve(dr());let c=ui,l=i;return a.next((h=>D.forEach(h,((d,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),i.get(d)?D.resolve():this.remoteDocumentCache.getEntry(e,d).next((y=>{l=l.insert(d,y)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,l,h,fe()))).next((d=>({batchId:c,changes:Tg(d)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next((r=>{let s=Bs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=Bs();return this.indexManager.getCollectionParents(e,i).next((c=>D.forEach(c,(l=>{const h=(function(g,y){return new wi(y,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next((d=>{d.forEach(((g,y)=>{a=a.insert(g,y)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((a=>{i.forEach(((l,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,lt.newInvalidDocument(d)))}));let c=Bs();return a.forEach(((l,h)=>{const d=i.get(l);d!==void 0&&ti(d.mutation,h,Dt.empty(),ke.now()),ya(n,h)&&(c=c.insert(l,h))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return D.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:Jt(s.createTime)}})(n)),D.resolve()}getNamedQuery(e,n){return D.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,(function(s){return{name:s.name,query:Tw(s.bundledQuery),readTime:Jt(s.readTime)}})(n)),D.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(){this.overlays=new Oe(X.comparator),this.kr=new Map}getOverlay(e,n){return D.resolve(this.overlays.get(n))}getOverlays(e,n){const r=dr();return D.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.wt(e,n,i)})),D.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),D.resolve()}getOverlaysForCollection(e,n,r){const s=dr(),i=n.length+1,a=new X(n.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return D.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Oe(((h,d)=>h-d));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=dr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=dr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((h,d)=>c.set(h,d))),!(c.size()>=s)););return D.resolve(c)}wt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new YI(n,r));let i=this.kr.get(n);i===void 0&&(i=fe(),this.kr.set(n,i)),this.kr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(){this.sessionToken=tt.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,D.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(){this.qr=new Ke(Ge.Qr),this.$r=new Ke(Ge.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new Ge(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Wr(new Ge(e,n))}Gr(e,n){e.forEach((r=>this.removeReference(r,n)))}zr(e){const n=new X(new Pe([])),r=new Ge(n,e),s=new Ge(n,e+1),i=[];return this.$r.forEachInRange([r,s],(a=>{this.Wr(a),i.push(a.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new X(new Pe([])),r=new Ge(n,e),s=new Ge(n,e+1);let i=fe();return this.$r.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const n=new Ge(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ge{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return X.comparator(e.key,n.key)||ue(e.Hr,n.Hr)}static Ur(e,n){return ue(e.Hr,n.Hr)||X.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new Ke(Ge.Qr)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new XI(i,n,r,s);this.mutationQueue.push(a);for(const c of s)this.Yr=this.Yr.add(new Ge(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return D.resolve(a)}lookupMutationBatch(e,n){return D.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return D.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?Il:this.er-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ge(n,0),s=new Ge(n,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(a=>{const c=this.Zr(a.Hr);i.push(c)})),D.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ke(ue);return n.forEach((s=>{const i=new Ge(s,0),a=new Ge(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],(c=>{r=r.add(c.Hr)}))})),D.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;X.isDocumentKey(i)||(i=i.child(""));const a=new Ge(new X(i),0);let c=new Ke(ue);return this.Yr.forEachWhile((l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Hr)),!0)}),a),D.resolve(this.ei(c))}ei(e){const n=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){Ie(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return D.forEach(n.mutations,(s=>{const i=new Ge(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,n){const r=new Ge(n,0),s=this.Yr.firstAfterOrEqual(r);return D.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e){this.ni=e,this.docs=(function(){return new Oe(X.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return D.resolve(r?r.document.mutableCopy():lt.newInvalidDocument(n))}getEntries(e,n){let r=wn();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():lt.newInvalidDocument(s))})),D.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=wn();const a=n.path,c=new X(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||fI(hI(d),r)<=0||(s.has(d.key)||ya(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return D.resolve(i)}getAllFromCollectionGroup(e,n,r,s){te(9500)}ri(e,n){return D.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new Lw(this)}getSize(e){return D.resolve(this.size)}}class Lw extends Pw{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),D.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e){this.persistence=e,this.ii=new br((n=>bl(n)),Sl),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.si=0,this.oi=new Dl,this.targetCount=0,this._i=as.ar()}forEachTarget(e,n){return this.ii.forEach(((r,s)=>n(s))),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),D.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new as(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,D.resolve()}updateTargetData(e,n){return this.hr(n),D.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ii.forEach(((a,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),D.waitFor(i).next((()=>s))}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return D.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),D.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),D.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),D.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return D.resolve(r)}containsKey(e,n){return D.resolve(this.oi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,n){this.ai={},this.overlays={},this.ui=new pa(0),this.ci=!1,this.ci=!0,this.li=new Ow,this.referenceDelegate=e(this),this.hi=new Fw(this),this.indexManager=new Iw,this.remoteDocumentCache=(function(s){return new Mw(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new Ew(n),this.Ti=new Dw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Nw,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new xw(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const s=new Uw(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,n){return D.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,n))))}}class Uw extends pI{constructor(e){super(),this.currentSequenceNumber=e}}class Nl{constructor(e){this.persistence=e,this.Ai=new Dl,this.Ri=null}static Vi(e){return new Nl(e)}get mi(){if(this.Ri)return this.Ri;throw te(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),D.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),D.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.mi,(r=>{const s=X.fromPath(r);return this.fi(e,s).next((i=>{i||n.removeEntry(s,se.min())}))})).next((()=>(this.Ri=null,n.apply(e))))}updateLimboDocument(e,n){return this.fi(e,n).next((r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())}))}Pi(e){return 0}fi(e,n){return D.or([()=>D.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class $o{constructor(e,n){this.persistence=e,this.gi=new br((r=>_I(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Cw(this,n)}static Vi(e,n){return new $o(e,n)}Ii(){}di(e){return D.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}yr(e){let n=0;return this.gr(e,(r=>{n++})).next((()=>n))}gr(e,n){return D.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?D.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(a=>this.Sr(e,a,n).next((c=>{c||(r++,i.removeEntry(a,se.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),D.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),D.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),D.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),D.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=po(e.data.value)),n}Sr(e,n,r){return D.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.gi.get(n);return D.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=s}static Es(e,n){let r=fe(),s=fe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ol(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return ME()?8:gI(ht())>0?6:4})()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ps(e,n).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ys(e,n,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new Bw;return this.ws(e,n,a).next((c=>{if(i.result=c,this.Rs)return this.Ss(e,n,a,c.size)}))})).next((()=>i.result))}Ss(e,n,r,s){return r.documentReadCount<this.Vs?(Ur()<=he.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",Br(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),D.resolve()):(Ur()<=he.DEBUG&&W("QueryEngine","Query:",Br(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Ur()<=he.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",Br(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Gt(n))):D.resolve())}ps(e,n){if(gf(n))return D.resolve(null);let r=Gt(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=Bc(n,null,"F"),r=Gt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=fe(...i);return this.gs.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const h=this.bs(n,c);return this.Ds(n,h,a,l.readTime)?this.ps(e,Bc(n,null,"F")):this.vs(e,h,n,l)}))))})))))}ys(e,n,r,s){return gf(n)||s.isEqual(se.min())?D.resolve(null):this.gs.getDocuments(e,r).next((i=>{const a=this.bs(n,i);return this.Ds(n,a,r,s)?D.resolve(null):(Ur()<=he.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Br(n)),this.vs(e,a,n,uI(s,ui)).next((c=>c)))}))}bs(e,n){let r=new Ke(vg(e));return n.forEach(((s,i)=>{ya(e,i)&&(r=r.add(i))})),r}Ds(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,n,r){return Ur()<=he.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Br(n)),this.gs.getDocumentsMatchingQuery(e,n,Kn.min(),r)}vs(e,n,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl="LocalStore",jw=3e8;class qw{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.Fs=new Oe(ue),this.Ms=new br((i=>bl(i)),Sl),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kw(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Fs)))}}function Hw(t,e,n,r){return new qw(t,e,n,r)}async function jg(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Ns(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],c=[];let l=fe();for(const h of s){a.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of i){c.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next((h=>({Bs:h,removedBatchIds:a,addedBatchIds:c})))}))}))}function zw(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return(function(c,l,h,d){const g=h.batch,y=g.keys();let b=D.resolve();return y.forEach((V=>{b=b.next((()=>d.getEntry(l,V))).next((N=>{const F=h.docVersions.get(V);Ie(F!==null,48541),N.version.compareTo(F)<0&&(g.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),d.addEntry(N)))}))})),b.next((()=>c.mutationQueue.removeMutationBatch(l,g)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=fe();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function qg(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.hi.getLastRemoteSnapshotVersion(n)))}function Ww(t,e){const n=ie(t),r=e.snapshotVersion;let s=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=n.Os.newChangeBuffer({trackRemovals:!0});s=n.Fs;const c=[];e.targetChanges.forEach(((d,g)=>{const y=s.get(g);if(!y)return;c.push(n.hi.removeMatchingKeys(i,d.removedDocuments,g).next((()=>n.hi.addMatchingKeys(i,d.addedDocuments,g))));let b=y.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?b=b.withResumeToken(tt.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):d.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(d.resumeToken,r)),s=s.insert(g,b),(function(N,F,Q){return N.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=jw?!0:Q.addedDocuments.size+Q.modifiedDocuments.size+Q.removedDocuments.size>0})(y,b,d)&&c.push(n.hi.updateTargetData(i,b))}));let l=wn(),h=fe();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))})),c.push(Kw(i,a,e.documentUpdates).next((d=>{l=d.Ls,h=d.ks}))),!r.isEqual(se.min())){const d=n.hi.getLastRemoteSnapshotVersion(i).next((g=>n.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(d)}return D.waitFor(c).next((()=>a.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,l,h))).next((()=>l))})).then((i=>(n.Fs=s,i)))}function Kw(t,e,n){let r=fe(),s=fe();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let a=wn();return n.forEach(((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(se.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):W(xl,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)})),{Ls:a,ks:s}}))}function Gw(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Il),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function Qw(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.hi.getTargetData(r,e).next((i=>i?(s=i,D.resolve(s)):n.hi.allocateTargetId(r).next((a=>(s=new Un(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r}))}async function zc(t,e,n){const r=ie(t),s=r.Fs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!gs(a))throw a;W(xl,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function Cf(t,e,n){const r=ie(t);let s=se.min(),i=fe();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(l,h,d){const g=ie(l),y=g.Ms.get(d);return y!==void 0?D.resolve(g.Fs.get(y)):g.hi.getTargetData(h,d)})(r,a,Gt(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,c.targetId).next((l=>{i=l}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,e,n?s:se.min(),n?i:fe()))).next((c=>(Jw(r,MI(e),c),{documents:c,qs:i})))))}function Jw(t,e,n){let r=t.xs.get(e)||se.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.xs.set(e,r)}class Pf{constructor(){this.activeTargetIds=jI()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Xw{constructor(){this.Fo=new Pf,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Pf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf="ConnectivityMonitor";class kf{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){W(Vf,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){W(Vf,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let no=null;function Wc(){return no===null?no=(function(){return 268435456+Math.round(2147483648*Math.random())})():no++,"0x"+no.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc="RestConnection",Zw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class eA{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Oo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const a=Wc(),c=this.Go(e,n.toUriEncodedString());W(uc,`Sending RPC '${e}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,s,i);const{host:h}=new URL(c),d=hs(h);return this.jo(e,c,l,r,d).then((g=>(W(uc,`Received RPC '${e}' ${a}: `,g),g)),(g=>{throw Wn(uc,`RPC '${e}' ${a} failed with error: `,g,"url: ",c,"request:",r),g}))}Jo(e,n,r,s,i,a){return this.Wo(e,n,r,s,i)}zo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ds})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,n){const r=Zw[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it="WebChannelConnection";class nA extends eA{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,s,i){const a=Wc();return new Promise(((c,l)=>{const h=new Hp;h.setWithCredentials(!0),h.listenOnce(zp.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case fo.NO_ERROR:const g=h.getResponseJson();W(it,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),c(g);break;case fo.TIMEOUT:W(it,`RPC '${e}' ${a} timed out`),l(new K(k.DEADLINE_EXCEEDED,"Request time out"));break;case fo.HTTP_ERROR:const y=h.getStatus();if(W(it,`RPC '${e}' ${a} failed with status:`,y,"response text:",h.getResponseText()),y>0){let b=h.getResponseJson();Array.isArray(b)&&(b=b[0]);const V=b==null?void 0:b.error;if(V&&V.status&&V.message){const N=(function(Q){const j=Q.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(j)>=0?j:k.UNKNOWN})(V.status);l(new K(N,V.message))}else l(new K(k.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new K(k.UNAVAILABLE,"Connection failed."));break;default:te(9055,{c_:e,streamId:a,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{W(it,`RPC '${e}' ${a} completed.`)}}));const d=JSON.stringify(s);W(it,`RPC '${e}' ${a} sending request:`,s),h.send(n,"POST",d,r,15)}))}P_(e,n,r){const s=Wc(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Gp(),c=Kp(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=i.join("");W(it,`Creating RPC '${e}' stream ${s}: ${d}`,l);const g=a.createWebChannel(d,l);this.T_(g);let y=!1,b=!1;const V=new tA({Ho:F=>{b?W(it,`Not sending because RPC '${e}' stream ${s} is closed:`,F):(y||(W(it,`Opening RPC '${e}' stream ${s} transport.`),g.open(),y=!0),W(it,`RPC '${e}' stream ${s} sending:`,F),g.send(F))},Yo:()=>g.close()}),N=(F,Q,j)=>{F.listen(Q,(G=>{try{j(G)}catch(z){setTimeout((()=>{throw z}),0)}}))};return N(g,Us.EventType.OPEN,(()=>{b||(W(it,`RPC '${e}' stream ${s} transport opened.`),V.s_())})),N(g,Us.EventType.CLOSE,(()=>{b||(b=!0,W(it,`RPC '${e}' stream ${s} transport closed`),V.__(),this.I_(g))})),N(g,Us.EventType.ERROR,(F=>{b||(b=!0,Wn(it,`RPC '${e}' stream ${s} transport errored. Name:`,F.name,"Message:",F.message),V.__(new K(k.UNAVAILABLE,"The operation could not be completed")))})),N(g,Us.EventType.MESSAGE,(F=>{var Q;if(!b){const j=F.data[0];Ie(!!j,16349);const G=j,z=(G==null?void 0:G.error)||((Q=G[0])===null||Q===void 0?void 0:Q.error);if(z){W(it,`RPC '${e}' stream ${s} received error:`,z);const oe=z.status;let ve=(function(_){const T=Be[_];if(T!==void 0)return Vg(T)})(oe),I=z.message;ve===void 0&&(ve=k.INTERNAL,I="Unknown error status: "+oe+" with message "+z.message),b=!0,V.__(new K(ve,I)),g.close()}else W(it,`RPC '${e}' stream ${s} received:`,j),V.a_(j)}})),N(c,Wp.STAT_EVENT,(F=>{F.stat===Nc.PROXY?W(it,`RPC '${e}' stream ${s} detected buffering proxy`):F.stat===Nc.NOPROXY&&W(it,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{V.o_()}),0),V}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((n=>n===e))}}function hc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(t){return new ow(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df="PersistentStream";class zg{constructor(e,n,r,s,i,a,c,l){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Hg(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(In(n.toString()),In("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===n&&this.W_(r,s)}),(r=>{e((()=>{const s=new K(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return W(Df,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget((()=>this.b_===e?n():(W(Df,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class rA extends zg{constructor(e,n,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=lw(this.serializer,e),r=(function(i){if(!("targetChange"in i))return se.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?se.min():a.readTime?Jt(a.readTime):se.min()})(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=Hc(this.serializer),n.addTarget=(function(i,a){let c;const l=a.target;if(c=Fc(l)?{documents:fw(i,l)}:{query:dw(i,l).Vt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Ng(i,a.resumeToken);const h=$c(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(se.min())>0){c.readTime=Bo(i,a.snapshotVersion.toTimestamp());const h=$c(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const r=gw(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=Hc(this.serializer),n.removeTarget=e,this.k_(n)}}class sA extends zg{constructor(e,n,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return Ie(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ie(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Ie(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=hw(e.writeResults,e.commitTime),r=Jt(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=Hc(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>uw(this.serializer,r)))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{}class oA extends iA{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new K(k.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Wo(e,jc(n,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(k.UNKNOWN,i.toString())}))}Jo(e,n,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Jo(e,jc(n,r),s,a,c,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new K(k.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class aA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(In(n),this._a=!1):W("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr="RemoteStore";class cA{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((a=>{r.enqueueAndForget((async()=>{Rr(this)&&(W(Tr,"Restarting streams for network reachability change."),await(async function(l){const h=ie(l);h.Ia.add(4),await Si(h),h.Aa.set("Unknown"),h.Ia.delete(4),await wa(h)})(this))}))})),this.Aa=new aA(r,s)}}async function wa(t){if(Rr(t))for(const e of t.da)await e(!0)}async function Si(t){for(const e of t.da)await e(!1)}function Wg(t,e){const n=ie(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),Ul(n)?Fl(n):ms(n).x_()&&Ll(n,e))}function Ml(t,e){const n=ie(t),r=ms(n);n.Ta.delete(e),r.x_()&&Kg(n,e),n.Ta.size===0&&(r.x_()?r.B_():Rr(n)&&n.Aa.set("Unknown"))}function Ll(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ms(t).H_(e)}function Kg(t,e){t.Ra.$e(e),ms(t).Y_(e)}function Fl(t){t.Ra=new nw({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),ms(t).start(),t.Aa.aa()}function Ul(t){return Rr(t)&&!ms(t).M_()&&t.Ta.size>0}function Rr(t){return ie(t).Ia.size===0}function Gg(t){t.Ra=void 0}async function lA(t){t.Aa.set("Online")}async function uA(t){t.Ta.forEach(((e,n)=>{Ll(t,e)}))}async function hA(t,e){Gg(t),Ul(t)?(t.Aa.la(e),Fl(t)):t.Aa.set("Unknown")}async function fA(t,e,n){if(t.Aa.set("Online"),e instanceof Dg&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ta.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ta.delete(c),s.Ra.removeTarget(c))})(t,e)}catch(r){W(Tr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await jo(t,r)}else if(e instanceof _o?t.Ra.Ye(e):e instanceof kg?t.Ra.it(e):t.Ra.et(e),!n.isEqual(se.min()))try{const r=await qg(t.localStore);n.compareTo(r)>=0&&await(function(i,a){const c=i.Ra.Pt(a);return c.targetChanges.forEach(((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.Ta.get(h);d&&i.Ta.set(h,d.withResumeToken(l.resumeToken,a))}})),c.targetMismatches.forEach(((l,h)=>{const d=i.Ta.get(l);if(!d)return;i.Ta.set(l,d.withResumeToken(tt.EMPTY_BYTE_STRING,d.snapshotVersion)),Kg(i,l);const g=new Un(d.target,l,h,d.sequenceNumber);Ll(i,g)})),i.remoteSyncer.applyRemoteEvent(c)})(t,n)}catch(r){W(Tr,"Failed to raise snapshot:",r),await jo(t,r)}}async function jo(t,e,n){if(!gs(e))throw e;t.Ia.add(1),await Si(t),t.Aa.set("Offline"),n||(n=()=>qg(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{W(Tr,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await wa(t)}))}function Qg(t,e){return e().catch((n=>jo(t,n,e)))}async function Aa(t){const e=ie(t),n=Xn(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Il;for(;dA(e);)try{const s=await Gw(e.localStore,r);if(s===null){e.Pa.length===0&&n.B_();break}r=s.batchId,pA(e,s)}catch(s){await jo(e,s)}Jg(e)&&Xg(e)}function dA(t){return Rr(t)&&t.Pa.length<10}function pA(t,e){t.Pa.push(e);const n=Xn(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function Jg(t){return Rr(t)&&!Xn(t).M_()&&t.Pa.length>0}function Xg(t){Xn(t).start()}async function gA(t){Xn(t).na()}async function mA(t){const e=Xn(t);for(const n of t.Pa)e.X_(n.mutations)}async function _A(t,e,n){const r=t.Pa.shift(),s=Pl.from(r,e,n);await Qg(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Aa(t)}async function yA(t,e){e&&Xn(t).Z_&&await(async function(r,s){if((function(a){return ew(a)&&a!==k.ABORTED})(s.code)){const i=r.Pa.shift();Xn(r).N_(),await Qg(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Aa(r)}})(t,e),Jg(t)&&Xg(t)}async function Nf(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),W(Tr,"RemoteStore received new credentials");const r=Rr(n);n.Ia.add(3),await Si(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await wa(n)}async function vA(t,e){const n=ie(t);e?(n.Ia.delete(2),await wa(n)):e||(n.Ia.add(2),await Si(n),n.Aa.set("Unknown"))}function ms(t){return t.Va||(t.Va=(function(n,r,s){const i=ie(n);return i.ia(),new rA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:lA.bind(null,t),e_:uA.bind(null,t),n_:hA.bind(null,t),J_:fA.bind(null,t)}),t.da.push((async e=>{e?(t.Va.N_(),Ul(t)?Fl(t):t.Aa.set("Unknown")):(await t.Va.stop(),Gg(t))}))),t.Va}function Xn(t){return t.ma||(t.ma=(function(n,r,s){const i=ie(n);return i.ia(),new sA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:gA.bind(null,t),n_:yA.bind(null,t),ea:mA.bind(null,t),ta:_A.bind(null,t)}),t.da.push((async e=>{e?(t.ma.N_(),await Aa(t)):(await t.ma.stop(),t.Pa.length>0&&(W(Tr,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))}))),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Hn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,c=new Bl(e,n,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $l(t,e){if(In("AsyncQueue",`${e}: ${t}`),gs(t))return new K(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{static emptySet(e){return new Gr(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=Bs(),this.sortedSet=new Oe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Gr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Gr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(){this.fa=new Oe(X.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):te(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal(((n,r)=>{e.push(r)})),e}}class cs{constructor(e,n,r,s,i,a,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const a=[];return n.forEach((c=>{a.push({type:0,doc:c})})),new cs(e,n,Gr.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_a(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class TA{constructor(){this.queries=xf(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const s=ie(n),i=s.queries;s.queries=xf(),i.forEach(((a,c)=>{for(const l of c.wa)l.onError(r)}))})(this,new K(k.ABORTED,"Firestore shutting down"))}}function xf(){return new br((t=>yg(t)),_a)}async function IA(t,e){const n=ie(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new EA,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await n.onListen(s,!0);break;case 1:i.ya=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const c=$l(a,`Initialization of query '${Br(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.wa.push(e),e.va(n.onlineState),i.ya&&e.Ca(i.ya)&&jl(n)}async function wA(t,e){const n=ie(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const a=i.wa.indexOf(e);a>=0&&(i.wa.splice(a,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function AA(t,e){const n=ie(t);let r=!1;for(const s of e){const i=s.query,a=n.queries.get(i);if(a){for(const c of a.wa)c.Ca(s)&&(r=!0);a.ya=s}}r&&jl(n)}function bA(t,e,n){const r=ie(t),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(n);r.queries.delete(e)}function jl(t){t.Da.forEach((e=>{e.next()}))}var Kc,Mf;(Mf=Kc||(Kc={})).Fa="default",Mf.Cache="cache";class SA{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new cs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=cs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Kc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e){this.key=e}}class Zg{constructor(e){this.key=e}}class RA{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=fe(),this.mutatedKeys=fe(),this.Xa=vg(e),this.eu=new Gr(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new Of,s=n?n.eu:this.eu;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((d,g)=>{const y=s.get(d),b=ya(this.query,g)?g:null,V=!!y&&this.mutatedKeys.has(y.key),N=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let F=!1;y&&b?y.data.isEqual(b.data)?V!==N&&(r.track({type:3,doc:b}),F=!0):this.iu(y,b)||(r.track({type:2,doc:b}),F=!0,(l&&this.Xa(b,l)>0||h&&this.Xa(b,h)<0)&&(c=!0)):!y&&b?(r.track({type:0,doc:b}),F=!0):y&&!b&&(r.track({type:1,doc:y}),F=!0,(l||h)&&(c=!0)),F&&(b?(a=a.add(b),i=N?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{eu:a,ru:r,Ds:c,mutatedKeys:i}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort(((d,g)=>(function(b,V){const N=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te(20277,{At:F})}};return N(b)-N(V)})(d.type,g.type)||this.Xa(d.doc,g.doc))),this.su(r),s=s!=null&&s;const c=n&&!s?this.ou():[],l=this.Za.size===0&&this.current&&!s?1:0,h=l!==this.Ya;return this.Ya=l,a.length!==0||h?{snapshot:new cs(this.query,e.eu,i,a,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Of,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((n=>this.Ha=this.Ha.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ha=this.Ha.delete(n))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=fe(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const n=[];return e.forEach((r=>{this.Za.has(r)||n.push(new Zg(r))})),this.Za.forEach((r=>{e.has(r)||n.push(new Yg(r))})),n}uu(e){this.Ha=e.qs,this.Za=fe();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return cs.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const ql="SyncEngine";class CA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class PA{constructor(e){this.key=e,this.lu=!1}}class VA{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new br((c=>yg(c)),_a),this.Tu=new Map,this.Iu=new Set,this.du=new Oe(X.comparator),this.Eu=new Map,this.Au=new Dl,this.Ru={},this.Vu=new Map,this.mu=as.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function kA(t,e,n=!0){const r=im(t);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await em(r,e,n,!0),s}async function DA(t,e){const n=im(t);await em(n,e,!0,!1)}async function em(t,e,n,r){const s=await Qw(t.localStore,Gt(e)),i=s.targetId,a=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await NA(t,e,i,a==="current",s.resumeToken)),t.isPrimaryClient&&n&&Wg(t.remoteStore,s),c}async function NA(t,e,n,r,s){t.gu=(g,y,b)=>(async function(N,F,Q,j){let G=F.view.nu(Q);G.Ds&&(G=await Cf(N.localStore,F.query,!1).then((({documents:I})=>F.view.nu(I,G))));const z=j&&j.targetChanges.get(F.targetId),oe=j&&j.targetMismatches.get(F.targetId)!=null,ve=F.view.applyChanges(G,N.isPrimaryClient,z,oe);return Ff(N,F.targetId,ve._u),ve.snapshot})(t,g,y,b);const i=await Cf(t.localStore,e,!0),a=new RA(e,i.qs),c=a.nu(i.documents),l=bi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=a.applyChanges(c,t.isPrimaryClient,l);Ff(t,n,h._u);const d=new CA(e,n,a);return t.Pu.set(e,d),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),h.snapshot}async function OA(t,e,n){const r=ie(t),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((a=>!_a(a,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await zc(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ml(r.remoteStore,s.targetId),Gc(r,s.targetId)})).catch(ps)):(Gc(r,s.targetId),await zc(r.localStore,s.targetId,!0))}async function xA(t,e){const n=ie(t),r=n.Pu.get(e),s=n.Tu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ml(n.remoteStore,r.targetId))}async function MA(t,e,n){const r=qA(t);try{const s=await(function(a,c){const l=ie(a),h=ke.now(),d=c.reduce(((b,V)=>b.add(V.key)),fe());let g,y;return l.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let V=wn(),N=fe();return l.Os.getEntries(b,d).next((F=>{V=F,V.forEach(((Q,j)=>{j.isValidDocument()||(N=N.add(Q))}))})).next((()=>l.localDocuments.getOverlayedDocuments(b,V))).next((F=>{g=F;const Q=[];for(const j of c){const G=QI(j,g.get(j.key).overlayedDocument);G!=null&&Q.push(new Sr(j.key,G,lg(G.value.mapValue),Qt.exists(!0)))}return l.mutationQueue.addMutationBatch(b,h,Q,c)})).next((F=>{y=F;const Q=F.applyToLocalDocumentSet(g,N);return l.documentOverlayCache.saveOverlays(b,F.batchId,Q)}))})).then((()=>({batchId:y.batchId,changes:Tg(g)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,c,l){let h=a.Ru[a.currentUser.toKey()];h||(h=new Oe(ue)),h=h.insert(c,l),a.Ru[a.currentUser.toKey()]=h})(r,s.batchId,n),await Ri(r,s.changes),await Aa(r.remoteStore)}catch(s){const i=$l(s,"Failed to persist write");n.reject(i)}}async function tm(t,e){const n=ie(t);try{const r=await Ww(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=n.Eu.get(i);a&&(Ie(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?Ie(a.lu,14607):s.removedDocuments.size>0&&(Ie(a.lu,42227),a.lu=!1))})),await Ri(n,r,e)}catch(r){await ps(r)}}function Lf(t,e,n){const r=ie(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Pu.forEach(((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(a,c){const l=ie(a);l.onlineState=c;let h=!1;l.queries.forEach(((d,g)=>{for(const y of g.wa)y.va(c)&&(h=!0)})),h&&jl(l)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function LA(t,e,n){const r=ie(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let a=new Oe(X.comparator);a=a.insert(i,lt.newNoDocument(i,se.min()));const c=fe().add(i),l=new Ta(se.min(),new Map,new Oe(ue),a,c);await tm(r,l),r.du=r.du.remove(i),r.Eu.delete(e),Hl(r)}else await zc(r.localStore,e,!1).then((()=>Gc(r,e,n))).catch(ps)}async function FA(t,e){const n=ie(t),r=e.batch.batchId;try{const s=await zw(n.localStore,e);rm(n,r,null),nm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ri(n,s)}catch(s){await ps(s)}}async function UA(t,e,n){const r=ie(t);try{const s=await(function(a,c){const l=ie(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let d;return l.mutationQueue.lookupMutationBatch(h,c).next((g=>(Ie(g!==null,37113),d=g.keys(),l.mutationQueue.removeMutationBatch(h,g)))).next((()=>l.mutationQueue.performConsistencyCheck(h))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(h,d,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d))).next((()=>l.localDocuments.getDocuments(h,d)))}))})(r.localStore,e);rm(r,e,n),nm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ri(r,s)}catch(s){await ps(s)}}function nm(t,e){(t.Vu.get(e)||[]).forEach((n=>{n.resolve()})),t.Vu.delete(e)}function rm(t,e,n){const r=ie(t);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function Gc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach((r=>{t.Au.containsKey(r)||sm(t,r)}))}function sm(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Ml(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),Hl(t))}function Ff(t,e,n){for(const r of n)r instanceof Yg?(t.Au.addReference(r.key,e),BA(t,r)):r instanceof Zg?(W(ql,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||sm(t,r.key)):te(19791,{yu:r})}function BA(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(W(ql,"New document in limbo: "+n),t.Iu.add(r),Hl(t))}function Hl(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new X(Pe.fromString(e)),r=t.mu.next();t.Eu.set(r,new PA(n)),t.du=t.du.insert(n,r),Wg(t.remoteStore,new Un(Gt(mg(n.path)),r,"TargetPurposeLimboResolution",pa.ue))}}async function Ri(t,e,n){const r=ie(t),s=[],i=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach(((c,l)=>{a.push(r.gu(l,e,n).then((h=>{var d;if((h||n)&&r.isPrimaryClient){const g=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(h){s.push(h);const g=Ol.Es(l.targetId,h);i.push(g)}})))})),await Promise.all(a),r.hu.J_(s),await(async function(l,h){const d=ie(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>D.forEach(h,(y=>D.forEach(y.Is,(b=>d.persistence.referenceDelegate.addReference(g,y.targetId,b))).next((()=>D.forEach(y.ds,(b=>d.persistence.referenceDelegate.removeReference(g,y.targetId,b)))))))))}catch(g){if(!gs(g))throw g;W(xl,"Failed to update sequence numbers: "+g)}for(const g of h){const y=g.targetId;if(!g.fromCache){const b=d.Fs.get(y),V=b.snapshotVersion,N=b.withLastLimboFreeSnapshotVersion(V);d.Fs=d.Fs.insert(y,N)}}})(r.localStore,i))}async function $A(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){W(ql,"User change. New user:",e.toKey());const r=await jg(n.localStore,e);n.currentUser=e,(function(i,a){i.Vu.forEach((c=>{c.forEach((l=>{l.reject(new K(k.CANCELLED,a))}))})),i.Vu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ri(n,r.Bs)}}function jA(t,e){const n=ie(t),r=n.Eu.get(e);if(r&&r.lu)return fe().add(r.key);{let s=fe();const i=n.Tu.get(e);if(!i)return s;for(const a of i){const c=n.Pu.get(a);s=s.unionWith(c.view.tu)}return s}}function im(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=tm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=LA.bind(null,e),e.hu.J_=AA.bind(null,e.eventManager),e.hu.pu=bA.bind(null,e.eventManager),e}function qA(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=FA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=UA.bind(null,e),e}class qo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ia(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return Hw(this.persistence,new $w,e.initialUser,this.serializer)}Du(e){return new $g(Nl.Vi,this.serializer)}bu(e){return new Xw}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}qo.provider={build:()=>new qo};class HA extends qo{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){Ie(this.persistence.referenceDelegate instanceof $o,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Sw(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?yt.withCacheSize(this.cacheSizeBytes):yt.DEFAULT;return new $g((r=>$o.Vi(r,n)),this.serializer)}}class Qc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Lf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$A.bind(null,this.syncEngine),await vA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new TA})()}createDatastore(e){const n=Ia(e.databaseInfo.databaseId),r=(function(i){return new nA(i)})(e.databaseInfo);return(function(i,a,c,l){return new oA(i,a,c,l)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,a,c){return new cA(r,s,i,a,c)})(this.localStore,this.datastore,e.asyncQueue,(n=>Lf(this.syncEngine,n,0)),(function(){return kf.C()?new kf:new Yw})())}createSyncEngine(e,n){return(function(s,i,a,c,l,h,d){const g=new VA(s,i,a,c,l,h);return d&&(g.fu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(s){const i=ie(s);W(Tr,"RemoteStore shutting down."),i.Ia.add(5),await Si(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Qc.provider={build:()=>new Qc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):In("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn="FirestoreClient";class WA{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=at.UNAUTHENTICATED,this.clientId=Tl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{W(Yn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(W(Yn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Hn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=$l(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function fc(t,e){t.asyncQueue.verifyOperationInProgress(),W(Yn,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await jg(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{Wn("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then((()=>{W("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Wn("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),t._offlineComponents=e}async function Uf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await KA(t);W(Yn,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>Nf(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>Nf(e.remoteStore,s))),t._onlineComponents=e}async function KA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W(Yn,"Using user provided OfflineComponentProvider");try{await fc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===k.FAILED_PRECONDITION||s.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Wn("Error using user provided cache. Falling back to memory cache: "+n),await fc(t,new qo)}}else W(Yn,"Using default OfflineComponentProvider"),await fc(t,new HA(void 0));return t._offlineComponents}async function om(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W(Yn,"Using user provided OnlineComponentProvider"),await Uf(t,t._uninitializedComponentsProvider._online)):(W(Yn,"Using default OnlineComponentProvider"),await Uf(t,new Qc))),t._onlineComponents}function GA(t){return om(t).then((e=>e.syncEngine))}async function QA(t){const e=await om(t),n=e.eventManager;return n.onListen=kA.bind(null,e.syncEngine),n.onUnlisten=OA.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=DA.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=xA.bind(null,e.syncEngine),n}function JA(t,e,n={}){const r=new Hn;return t.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,l,h){const d=new zA({next:y=>{d.Ou(),a.enqueueAndForget((()=>wA(i,g))),y.fromCache&&l.source==="server"?h.reject(new K(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(y)},error:y=>h.reject(y)}),g=new SA(c,d,{includeMetadataChanges:!0,ka:!0});return IA(i,g)})(await QA(t),t.asyncQueue,e,n,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm="firestore.googleapis.com",$f=!0;class jf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=cm,this.ssl=$f}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:$f;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Bg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Aw)throw new K(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}lI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=am((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new K(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new K(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new K(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ba{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new eI;switch(r.type){case"firstParty":return new sI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=Bf.get(n);r&&(W("ComponentProvider","Removing Datastore"),Bf.delete(n),r.terminate())})(this),Promise.resolve()}}function XA(t,e,n,r={}){var s;t=ss(t,ba);const i=hs(e),a=t._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;i&&(xp(`https://${l}`),Mp("Firestore",!0)),a.host!==cm&&a.host!==l&&Wn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:l,ssl:i,emulatorOptions:r});if(!yr(h,c)&&(t._setSettings(h),r.mockUserToken)){let d,g;if(typeof r.mockUserToken=="string")d=r.mockUserToken,g=at.MOCK_USER;else{d=RE(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new K(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new at(y)}t._authCredentials=new tI(new Jp(d,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new _s(this.firestore,e,this._query)}}class We{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new We(this.firestore,e,this._key)}toJSON(){return{type:We._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Ii(n,We._jsonSchema))return new We(e,r||null,new X(Pe.fromString(n.referencePath)))}}We._jsonSchemaVersion="firestore/documentReference/1.0",We._jsonSchema={type:je("string",We._jsonSchemaVersion),referencePath:je("string")};class zn extends _s{constructor(e,n,r){super(e,n,mg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new We(this.firestore,null,new X(e))}withConverter(e){return new zn(this.firestore,e,this._path)}}function ro(t,e,...n){if(t=vt(t),Yp("collection","path",e),t instanceof ba){const r=Pe.fromString(e,...n);return ef(r),new zn(t,null,r)}{if(!(t instanceof We||t instanceof zn))throw new K(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return ef(r),new zn(t.firestore,null,r)}}function qf(t,e,...n){if(t=vt(t),arguments.length===1&&(e=Tl.newId()),Yp("doc","path",e),t instanceof ba){const r=Pe.fromString(e,...n);return Zh(r),new We(t,null,new X(r))}{if(!(t instanceof We||t instanceof zn))throw new K(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return Zh(r),new We(t.firestore,t instanceof zn?t.converter:null,new X(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf="AsyncQueue";class zf{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Hg(this,"async_queue_retry"),this.oc=()=>{const r=hc();r&&W(Hf,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=hc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=hc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const n=new Hn;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!gs(e))throw e;W(Hf,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const n=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,In("INTERNAL UNHANDLED ERROR: ",Wf(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=Bl.createAndSchedule(this,e,n,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&te(47125,{hc:Wf(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function Wf(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Sa extends ba{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new zf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new zf(e),this._firestoreClient=void 0,await e}}}function YA(t,e){const n=typeof t=="object"?t:Bp(),r=typeof t=="string"?t:Oo,s=vl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=bE("firestore");i&&XA(s,...i)}return s}function lm(t){if(t._terminated)throw new K(k.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||ZA(t),t._firestoreClient}function ZA(t){var e,n,r;const s=t._freezeSettings(),i=(function(c,l,h,d){return new EI(c,l,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,am(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new WA(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&(function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ct(tt.fromBase64String(e))}catch(n){throw new K(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ct(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ct._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ii(e,Ct._jsonSchema))return Ct.fromBase64String(e.bytes)}}Ct._jsonSchemaVersion="firestore/bytes/1.0",Ct._jsonSchema={type:je("string",Ct._jsonSchemaVersion),bytes:je("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Xt._jsonSchemaVersion}}static fromJSON(e){if(Ii(e,Xt._jsonSchema))return new Xt(e.latitude,e.longitude)}}Xt._jsonSchemaVersion="firestore/geoPoint/1.0",Xt._jsonSchema={type:je("string",Xt._jsonSchemaVersion),latitude:je("number"),longitude:je("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Yt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ii(e,Yt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Yt(e.vectorValues);throw new K(k.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Yt._jsonSchemaVersion="firestore/vectorValue/1.0",Yt._jsonSchema={type:je("string",Yt._jsonSchemaVersion),vectorValues:je("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb=/^__.*__$/;class tb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Sr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ai(e,this.data,n,this.fieldTransforms)}}function hm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te(40011,{Ec:t})}}class Wl{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Wl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Ho(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(hm(this.Ec)&&eb.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class nb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ia(e)}Dc(e,n,r,s=!1){return new Wl({Ec:e,methodName:n,bc:r,path:Ye.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fm(t){const e=t._freezeSettings(),n=Ia(t._databaseId);return new nb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function rb(t,e,n,r,s,i={}){const a=t.Dc(i.merge||i.mergeFields?2:0,e,n,s);gm("Data must be an object, but it was:",a,r);const c=dm(r,a);let l,h;if(i.merge)l=new Dt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const g of i.mergeFields){const y=ib(e,g,n);if(!a.contains(y))throw new K(k.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);ab(d,y)||d.push(y)}l=new Dt(d),h=a.fieldTransforms.filter((g=>l.covers(g.field)))}else l=null,h=a.fieldTransforms;return new tb(new Rt(c),l,h)}function sb(t,e,n,r=!1){return Kl(n,t.Dc(r?4:3,e))}function Kl(t,e){if(pm(t=vt(t)))return gm("Unsupported field value:",e,t),dm(t,e);if(t instanceof um)return(function(r,s){if(!hm(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const c of r){let l=Kl(c,s.yc(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=vt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return qI(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ke.fromDate(r);return{timestampValue:Bo(s.serializer,i)}}if(r instanceof ke){const i=new ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Bo(s.serializer,i)}}if(r instanceof Xt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ct)return{bytesValue:Ng(s.serializer,r._byteString)};if(r instanceof We){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:kl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Yt)return(function(a,c){return{mapValue:{fields:{[ag]:{stringValue:cg},[xo]:{arrayValue:{values:a.toArray().map((h=>{if(typeof h!="number")throw c.wc("VectorValues must only contain numeric values.");return Rl(c.serializer,h)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${da(r)}`)})(t,e)}function dm(t,e){const n={};return tg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ar(t,((r,s)=>{const i=Kl(s,e.Vc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function pm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ke||t instanceof Xt||t instanceof Ct||t instanceof We||t instanceof um||t instanceof Yt)}function gm(t,e,n){if(!pm(n)||!Zp(n)){const r=da(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function ib(t,e,n){if((e=vt(e))instanceof zl)return e._internalPath;if(typeof e=="string")return mm(t,e);throw Ho("Field path arguments must be of type string or ",t,!1,void 0,n)}const ob=new RegExp("[~\\*/\\[\\]]");function mm(t,e,n){if(e.search(ob)>=0)throw Ho(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new zl(...e.split("."))._internalPath}catch{throw Ho(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ho(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new K(k.INVALID_ARGUMENT,c+t+l)}function ab(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new We(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Gl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class cb extends _m{data(){return super.data()}}function Gl(t,e){return typeof e=="string"?mm(t,e):e instanceof zl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ql{}class ub extends Ql{}function hb(t,e,...n){let r=[];e instanceof Ql&&r.push(e),r=r.concat(n),(function(i){const a=i.filter((l=>l instanceof Jl)).length,c=i.filter((l=>l instanceof Ra)).length;if(a>1||a>0&&c>0)throw new K(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class Ra extends ub{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ra(e,n,r)}_apply(e){const n=this._parse(e);return ym(e._query,n),new _s(e.firestore,e.converter,Uc(e._query,n))}_parse(e){const n=fm(e.firestore);return(function(i,a,c,l,h,d,g){let y;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new K(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Gf(g,d);const V=[];for(const N of g)V.push(Kf(l,i,N));y={arrayValue:{values:V}}}else y=Kf(l,i,g)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Gf(g,d),y=sb(c,a,g,d==="in"||d==="not-in");return $e.create(h,d,y)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function fb(t,e,n){const r=e,s=Gl("where",t);return Ra._create(s,r,n)}class Jl extends Ql{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Jl(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:Lt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let a=s;const c=i.getFlattenedFilters();for(const l of c)ym(a,l),a=Uc(a,l)})(e._query,n),new _s(e.firestore,e.converter,Uc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Kf(t,e,n){if(typeof(n=vt(n))=="string"){if(n==="")throw new K(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!_g(e)&&n.indexOf("/")!==-1)throw new K(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Pe.fromString(n));if(!X.isDocumentKey(r))throw new K(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return lf(t,new X(r))}if(n instanceof We)return lf(t,n._key);throw new K(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${da(n)}.`)}function Gf(t,e){if(!Array.isArray(t)||t.length===0)throw new K(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ym(t,e){const n=(function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new K(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class db{convertValue(e,n="none"){switch(Jn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Qn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw te(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ar(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[xo].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((a=>Le(a.doubleValue)));return new Yt(i)}convertGeoPoint(e){return new Xt(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ma(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(hi(e));default:return null}}convertTimestamp(e){const n=Gn(e);return new ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Pe.fromString(e);Ie(Ug(r),9688,{name:e});const s=new fi(r.get(1),r.get(3)),i=new X(r.popFirst(5));return s.isEqual(n)||In(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pb(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class so{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Qr extends _m{constructor(e,n,r,s,i,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new yo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Gl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new K(k.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Qr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Qr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Qr._jsonSchema={type:je("string",Qr._jsonSchemaVersion),bundleSource:je("string","DocumentSnapshot"),bundleName:je("string"),bundle:je("string")};class yo extends Qr{data(e={}){return super.data(e)}}class Jr{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new so(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new yo(this._firestore,this._userDataWriter,r.key,r,new so(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((c=>{const l=new yo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new so(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new yo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new so(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),d=a.indexOf(c.doc.key)),{type:gb(c.type),doc:l,oldIndex:h,newIndex:d}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new K(k.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Jr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Tl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function gb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te(61501,{type:t})}}Jr._jsonSchemaVersion="firestore/querySnapshot/1.0",Jr._jsonSchema={type:je("string",Jr._jsonSchemaVersion),bundleSource:je("string","QuerySnapshot"),bundleName:je("string"),bundle:je("string")};class mb extends db{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ct(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new We(this.firestore,null,n)}}function io(t){t=ss(t,_s);const e=ss(t.firestore,Sa),n=lm(e),r=new mb(e);return lb(t._query),JA(n,t._query).then((s=>new Jr(e,r,t,s)))}function _b(t,e,n){t=ss(t,We);const r=ss(t.firestore,Sa),s=pb(t.converter,e);return vm(r,[rb(fm(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Qt.none())])}function yb(t){return vm(ss(t.firestore,Sa),[new Cl(t._key,Qt.none())])}function vm(t,e){return(function(r,s){const i=new Hn;return r.asyncQueue.enqueueAndForget((async()=>MA(await GA(r),s,i))),i.promise})(lm(t),e)}(function(e,n=!0){(function(s){ds=s})(fs),ns(new vr("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Sa(new nI(r.getProvider("auth-internal")),new iI(a,r.getProvider("app-check-internal")),(function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new K(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fi(h.options.projectId,d)})(a,s),a);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),jn(Gh,Qh,e),jn(Gh,Qh,"esm2017")})();var vb="firebase",Eb="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jn(vb,Eb,"app");function Xl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Em(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Tb=Em,Tm=new Ei("auth","Firebase",Em());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=new _l("@firebase/auth");function Ib(t,...e){zo.logLevel<=he.WARN&&zo.warn(`Auth (${fs}): ${t}`,...e)}function vo(t,...e){zo.logLevel<=he.ERROR&&zo.error(`Auth (${fs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(t,...e){throw Zl(t,...e)}function xt(t,...e){return Zl(t,...e)}function Yl(t,e,n){const r=Object.assign(Object.assign({},Tb()),{[e]:n});return new Ei("auth","Firebase",r).create(e,{appName:t.name})}function _r(t){return Yl(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wb(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&nn(t,"argument-error"),Yl(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Zl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Tm.create(t,...e)}function ne(t,e,...n){if(!t)throw Zl(e,...n)}function pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vo(e),new Error(e)}function An(t,e){t||pn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ab(){return Qf()==="http:"||Qf()==="https:"}function Qf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ab()||NE()||"connection"in navigator)?navigator.onLine:!0}function Sb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n){this.shortDelay=e,this.longDelay=n,An(n>e,"Short delay should be less than long delay!"),this.isMobile=VE()||OE()}get(){return bb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(t,e){An(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Pb=new Ci(3e4,6e4);function tu(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ys(t,e,n,r,s={}){return wm(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=Ti(Object.assign({key:t.config.apiKey},a)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:l},i);return DE()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&hs(t.emulatorConfig.host)&&(h.credentials="include"),Im.fetch()(await Am(t,t.config.apiHost,n,c),h)})}async function wm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Rb),e);try{const s=new kb(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw oo(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw oo(t,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw oo(t,"email-already-in-use",a);if(l==="USER_DISABLED")throw oo(t,"user-disabled",a);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Yl(t,d,h);nn(t,d)}}catch(s){if(s instanceof Sn)throw s;nn(t,"network-request-failed",{message:String(s)})}}async function Vb(t,e,n,r,s={}){const i=await ys(t,e,n,r,s);return"mfaPendingCredential"in i&&nn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Am(t,e,n,r){const s=`${e}${n}?${r}`,i=t,a=i.config.emulator?eu(t.config,s):`${t.config.apiScheme}://${s}`;return Cb.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class kb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(xt(this.auth,"network-request-failed")),Pb.get())})}}function oo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=xt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Db(t,e){return ys(t,"POST","/v1/accounts:delete",e)}async function Wo(t,e){return ys(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Nb(t,e=!1){const n=vt(t),r=await n.getIdToken(e),s=nu(r);ne(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ni(dc(s.auth_time)),issuedAtTime:ni(dc(s.iat)),expirationTime:ni(dc(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function dc(t){return Number(t)*1e3}function nu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return vo("JWT malformed, contained fewer than 3 sections"),null;try{const s=kp(n);return s?JSON.parse(s):(vo("Failed to decode base64 JWT payload"),null)}catch(s){return vo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Jf(t){const e=nu(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Sn&&Ob(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Ob({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ni(this.lastLoginAt),this.creationTime=ni(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ko(t){var e;const n=t.auth,r=await t.getIdToken(),s=await mi(t,Wo(n,{idToken:r}));ne(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?bm(i.providerUserInfo):[],c=Lb(t.providerData,a),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?h:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Xc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,g)}async function Mb(t){const e=vt(t);await Ko(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Lb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function bm(t){return t.map(e=>{var{providerId:n}=e,r=Xl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fb(t,e){const n=await wm(t,{},async()=>{const r=Ti({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=await Am(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&hs(t.emulatorConfig.host)&&(l.credentials="include"),Im.fetch()(a,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ub(t,e){return ys(t,"POST","/v2/accounts:revokeToken",tu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const n=Jf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Fb(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new Xr;return r&&(ne(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ne(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ne(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xr,this.toJSON())}_performRefresh(){return pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Nt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Xl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Xc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await mi(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Nb(this,e)}reload(){return Mb(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Nt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ko(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kt(this.auth.app))return Promise.reject(_r(this.auth));const e=await this.getIdToken();return await mi(this,Db(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,a,c,l,h,d;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(s=n.email)!==null&&s!==void 0?s:void 0,b=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,V=(a=n.photoURL)!==null&&a!==void 0?a:void 0,N=(c=n.tenantId)!==null&&c!==void 0?c:void 0,F=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,Q=(h=n.createdAt)!==null&&h!==void 0?h:void 0,j=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:G,emailVerified:z,isAnonymous:oe,providerData:ve,stsTokenManager:I}=n;ne(G&&I,e,"internal-error");const m=Xr.fromJSON(this.name,I);ne(typeof G=="string",e,"internal-error"),kn(g,e.name),kn(y,e.name),ne(typeof z=="boolean",e,"internal-error"),ne(typeof oe=="boolean",e,"internal-error"),kn(b,e.name),kn(V,e.name),kn(N,e.name),kn(F,e.name),kn(Q,e.name),kn(j,e.name);const _=new Nt({uid:G,auth:e,email:y,emailVerified:z,displayName:g,isAnonymous:oe,photoURL:V,phoneNumber:b,tenantId:N,stsTokenManager:m,createdAt:Q,lastLoginAt:j});return ve&&Array.isArray(ve)&&(_.providerData=ve.map(T=>Object.assign({},T))),F&&(_._redirectEventId=F),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new Xr;s.updateFromServerResponse(n);const i=new Nt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ko(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ne(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?bm(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Xr;c.updateFromIdToken(r);const l=new Nt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Xc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf=new Map;function gn(t){An(t instanceof Function,"Expected a class definition");let e=Xf.get(t);return e?(An(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Sm.type="NONE";const Yf=Sm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(t,e,n){return`firebase:${t}:${e}:${n}`}class Yr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Eo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Eo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Wo(this.auth,{idToken:e}).catch(()=>{});return n?Nt._fromGetAccountInfoResponse(this.auth,n,e):null}return Nt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Yr(gn(Yf),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||gn(Yf);const a=Eo(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const d=await h._get(a);if(d){let g;if(typeof d=="string"){const y=await Wo(e,{idToken:d}).catch(()=>{});if(!y)break;g=await Nt._fromGetAccountInfoResponse(e,y,d)}else g=Nt._fromJSON(e,d);h!==i&&(c=g),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Yr(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Yr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Vm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Dm(e))return"Blackberry";if(Nm(e))return"Webos";if(Cm(e))return"Safari";if((e.includes("chrome/")||Pm(e))&&!e.includes("edge/"))return"Chrome";if(km(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Rm(t=ht()){return/firefox\//i.test(t)}function Cm(t=ht()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pm(t=ht()){return/crios\//i.test(t)}function Vm(t=ht()){return/iemobile/i.test(t)}function km(t=ht()){return/android/i.test(t)}function Dm(t=ht()){return/blackberry/i.test(t)}function Nm(t=ht()){return/webos/i.test(t)}function ru(t=ht()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Bb(t=ht()){var e;return ru(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $b(){return xE()&&document.documentMode===10}function Om(t=ht()){return ru(t)||km(t)||Nm(t)||Dm(t)||/windows phone/i.test(t)||Vm(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(t,e=[]){let n;switch(t){case"Browser":n=Zf(ht());break;case"Worker":n=`${Zf(ht())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qb(t,e={}){return ys(t,"GET","/v2/passwordPolicy",tu(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb=6;class zb{constructor(e){var n,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:Hb,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ed(this),this.idTokenSubscription=new ed(this),this.beforeStateQueue=new jb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Yr.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Wo(this,{idToken:e}),r=await Nt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(kt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ko(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Sb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(kt(this.app))return Promise.reject(_r(this));const n=e?vt(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return kt(this.app)?Promise.reject(_r(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return kt(this.app)?Promise.reject(_r(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qb(this),n=new zb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ei("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ub(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gn(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await Yr.create(this,[gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(n);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(kt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Ib(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ca(t){return vt(t)}class ed{constructor(e){this.auth=e,this.observer=null,this.addObserver=qE(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let su={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Kb(t){su=t}function Gb(t){return su.loadJS(t)}function Qb(){return su.gapiScript}function Jb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xb(t,e){const n=vl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(yr(i,e??{}))return s;nn(s,"already-initialized")}return n.initialize({options:e})}function Yb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(gn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Zb(t,e,n){const r=Ca(t);ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Mm(e),{host:a,port:c}=e0(e),l=c===null?"":`:${c}`,h={url:`${i}//${a}${l}/`},d=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ne(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ne(yr(h,r.config.emulator)&&yr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,hs(a)?(xp(`${i}//${a}${l}`),Mp("Auth",!0)):t0()}function Mm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function e0(t){const e=Mm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:td(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:td(a)}}}function td(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function t0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pn("not implemented")}_getIdTokenResponse(e){return pn("not implemented")}_linkToIdToken(e,n){return pn("not implemented")}_getReauthenticationResolver(e){return pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zr(t,e){return Vb(t,"POST","/v1/accounts:signInWithIdp",tu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0="http://localhost";class Ir extends Lm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ir(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Xl(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Ir(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Zr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Zr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Zr(e,n)}buildRequest(){const e={requestUri:n0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ti(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi extends iu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends Pi{constructor(){super("facebook.com")}static credential(e){return Ir._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends Pi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ir._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return dn.credential(n,r)}catch{return null}}}dn.GOOGLE_SIGN_IN_METHOD="google.com";dn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends Pi{constructor(){super("github.com")}static credential(e){return Ir._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.GITHUB_SIGN_IN_METHOD="github.com";Ln.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends Pi{constructor(){super("twitter.com")}static credential(e,n){return Ir._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Fn.credential(n,r)}catch{return null}}}Fn.TWITTER_SIGN_IN_METHOD="twitter.com";Fn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Nt._fromIdTokenResponse(e,r,s),a=nd(r);return new ls({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=nd(r);return new ls({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function nd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go extends Sn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Go.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Go(e,n,r,s)}}function Fm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Go._fromErrorAndOperation(t,i,e,r):i})}async function r0(t,e,n=!1){const r=await mi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ls._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s0(t,e,n=!1){const{auth:r}=t;if(kt(r.app))return Promise.reject(_r(r));const s="reauthenticate";try{const i=await mi(t,Fm(r,s,e,t),n);ne(i.idToken,r,"internal-error");const a=nu(i.idToken);ne(a,r,"internal-error");const{sub:c}=a;return ne(t.uid===c,r,"user-mismatch"),ls._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&nn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i0(t,e,n=!1){if(kt(t.app))return Promise.reject(_r(t));const r="signIn",s=await Fm(t,r,e),i=await ls._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function o0(t,e,n,r){return vt(t).onIdTokenChanged(e,n,r)}function a0(t,e,n){return vt(t).beforeAuthStateChanged(e,n)}function c0(t,e,n,r){return vt(t).onAuthStateChanged(e,n,r)}function l0(t){return vt(t).signOut()}const Qo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Qo,"1"),this.storage.removeItem(Qo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0=1e3,h0=10;class Bm extends Um{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Om(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);$b()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,h0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},u0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Bm.type="LOCAL";const f0=Bm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m extends Um{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$m.type="SESSION";const jm=$m;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Pa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(n.origin,i)),l=await d0(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=ou("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const y=g;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(y.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(){return window}function g0(t){Zt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(){return typeof Zt().WorkerGlobalScope<"u"&&typeof Zt().importScripts=="function"}async function m0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function y0(){return qm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm="firebaseLocalStorageDb",v0=1,Jo="firebaseLocalStorage",zm="fbase_key";class Vi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Va(t,e){return t.transaction([Jo],e?"readwrite":"readonly").objectStore(Jo)}function E0(){const t=indexedDB.deleteDatabase(Hm);return new Vi(t).toPromise()}function Yc(){const t=indexedDB.open(Hm,v0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Jo,{keyPath:zm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Jo)?e(r):(r.close(),await E0(),e(await Yc()))})})}async function rd(t,e,n){const r=Va(t,!0).put({[zm]:e,value:n});return new Vi(r).toPromise()}async function T0(t,e){const n=Va(t,!1).get(e),r=await new Vi(n).toPromise();return r===void 0?null:r.value}function sd(t,e){const n=Va(t,!0).delete(e);return new Vi(n).toPromise()}const I0=800,w0=3;class Wm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>w0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pa._getInstance(y0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await m0(),!this.activeServiceWorker)return;this.sender=new p0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yc();return await rd(e,Qo,"1"),await sd(e,Qo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>rd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>T0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>sd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Va(s,!1).getAll();return new Vi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),I0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wm.type="LOCAL";const A0=Wm;new Ci(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(t,e){return e?gn(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au extends Lm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Zr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Zr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function b0(t){return i0(t.auth,new au(t),t.bypassAuthState)}function S0(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),s0(n,new au(t),t.bypassAuthState)}async function R0(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),r0(n,new au(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return b0;case"linkViaPopup":case"linkViaRedirect":return R0;case"reauthViaPopup":case"reauthViaRedirect":return S0;default:nn(this.auth,"internal-error")}}resolve(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0=new Ci(2e3,1e4);async function P0(t,e,n){if(kt(t.app))return Promise.reject(xt(t,"operation-not-supported-in-this-environment"));const r=Ca(t);wb(t,e,iu);const s=Km(r,n);return new pr(r,"signInViaPopup",e,s).executeNotNull()}class pr extends Gm{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,pr.currentPopupAction&&pr.currentPopupAction.cancel(),pr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){An(this.filter.length===1,"Popup operations only handle one event");const e=ou();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,C0.get())};e()}}pr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V0="pendingRedirect",To=new Map;class k0 extends Gm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=To.get(this.auth._key());if(!e){try{const r=await D0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}To.set(this.auth._key(),e)}return this.bypassAuthState||To.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function D0(t,e){const n=x0(e),r=O0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function N0(t,e){To.set(t._key(),e)}function O0(t){return gn(t._redirectPersistence)}function x0(t){return Eo(V0,t.config.apiKey,t.name)}async function M0(t,e,n=!1){if(kt(t.app))return Promise.reject(_r(t));const r=Ca(t),s=Km(r,e),a=await new k0(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0=600*1e3;class F0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!U0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Qm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(xt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=L0&&this.cachedEventUids.clear(),this.cachedEventUids.has(id(e))}saveEventToCache(e){this.cachedEventUids.add(id(e)),this.lastProcessedEventTime=Date.now()}}function id(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Qm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function U0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B0(t,e={}){return ys(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,j0=/^https?/;async function q0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await B0(t);for(const n of e)try{if(H0(n))return}catch{}nn(t,"unauthorized-domain")}function H0(t){const e=Jc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!j0.test(n))return!1;if($0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0=new Ci(3e4,6e4);function od(){const t=Zt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function W0(t){return new Promise((e,n)=>{var r,s,i;function a(){od(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{od(),n(xt(t,"network-request-failed"))},timeout:z0.get()})}if(!((s=(r=Zt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Zt().gapi)===null||i===void 0)&&i.load)a();else{const c=Jb("iframefcb");return Zt()[c]=()=>{gapi.load?a():n(xt(t,"network-request-failed"))},Gb(`${Qb()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Io=null,e})}let Io=null;function K0(t){return Io=Io||W0(t),Io}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0=new Ci(5e3,15e3),Q0="__/auth/iframe",J0="emulator/auth/iframe",X0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Y0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Z0(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?eu(e,J0):`https://${t.config.authDomain}/${Q0}`,r={apiKey:e.apiKey,appName:t.name,v:fs},s=Y0.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ti(r).slice(1)}`}async function eS(t){const e=await K0(t),n=Zt().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:Z0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:X0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=xt(t,"network-request-failed"),c=Zt().setTimeout(()=>{i(a)},G0.get());function l(){Zt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nS=500,rS=600,sS="_blank",iS="http://localhost";class ad{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oS(t,e,n,r=nS,s=rS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},tS),{width:r.toString(),height:s.toString(),top:i,left:a}),h=ht().toLowerCase();n&&(c=Pm(h)?sS:n),Rm(h)&&(e=e||iS,l.scrollbars="yes");const d=Object.entries(l).reduce((y,[b,V])=>`${y}${b}=${V},`,"");if(Bb(h)&&c!=="_self")return aS(e||"",c),new ad(null);const g=window.open(e||"",c,d);ne(g,t,"popup-blocked");try{g.focus()}catch{}return new ad(g)}function aS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS="__/auth/handler",lS="emulator/auth/handler",uS=encodeURIComponent("fac");async function cd(t,e,n,r,s,i){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:fs,eventId:s};if(e instanceof iu){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",jE(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,g]of Object.entries({}))a[d]=g}if(e instanceof Pi){const d=e.getScopes().filter(g=>g!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await t._getAppCheckToken(),h=l?`#${uS}=${encodeURIComponent(l)}`:"";return`${hS(t)}?${Ti(c).slice(1)}${h}`}function hS({config:t}){return t.emulator?eu(t,lS):`https://${t.authDomain}/${cS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc="webStorageSupport";class fS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jm,this._completeRedirectFn=M0,this._overrideRedirectResult=N0}async _openPopup(e,n,r,s){var i;An((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await cd(e,n,r,Jc(),s);return oS(e,a,ou())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await cd(e,n,r,Jc(),s);return g0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(An(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await eS(e),r=new F0(e);return n.register("authEvent",s=>(ne(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(pc,{type:pc},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[pc];a!==void 0&&n(!!a),nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=q0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Om()||Cm()||ru()}}const dS=fS;var ld="@firebase/auth",ud="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function mS(t){ns(new vr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;ne(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xm(t)},h=new Wb(r,s,i,l);return Yb(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ns(new vr("auth-internal",e=>{const n=Ca(e.getProvider("auth").getImmediate());return(r=>new pS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jn(ld,ud,gS(t)),jn(ld,ud,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S=300,yS=Op("authIdTokenMaxAge")||_S;let hd=null;const vS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>yS)return;const s=n==null?void 0:n.token;hd!==s&&(hd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ES(t=Bp()){const e=vl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Xb(t,{popupRedirectResolver:dS,persistence:[A0,f0,jm]}),r=Op("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=vS(i.toString());a0(n,a,()=>a(n.currentUser)),o0(n,c=>a(c))}}const s=Dp("auth");return s&&Zb(n,`http://${s}`),n}function TS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Kb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=xt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",TS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});mS("Browser");const IS={apiKey:"AIzaSyDqXmXyjnkh06EHunQ7_ZsDqSycdEfsx4Y",authDomain:"beveragestore-e55f0.firebaseapp.com",projectId:"beveragestore-e55f0",storageBucket:"beveragestore-e55f0.firebasestorage.app",messagingSenderId:"785621841581",appId:"1:785621841581:web:2529cd867c22b0516b3824",measurementId:"G-ER94R66MSN"},Jm=Up(IS),Mr=YA(Jm),gc=ES(Jm),ki=rE("BeverageStore",{state:()=>({temps:rc,currentTemp:rc[0],bases:[],currentBase:null,syrups:[],currentSyrup:null,creamers:[],currentCreamer:null,beverages:[],currentBeverage:null,currentName:"",currentUser:null,authBusy:!1,authMessage:"",successMessage:"",successVisible:!1,successTimeoutId:null,initialized:!1}),actions:{async init(){this.initialized||(this.initialized=!0,await Promise.all([this.loadBases(),this.loadSyrups(),this.loadCreamers()]),c0(gc,async t=>{this.currentUser=t,t?await this.loadMyBeverages(t.uid):this.beverages=[]}))},makeBeverage(){if(this.currentUser&&this.currentBase&&this.currentSyrup&&this.currentCreamer){const t=this.currentName.trim()||"Untitled Beverage",e={id:Date.now().toString(),name:t,temp:this.currentTemp,base:this.currentBase,syrup:this.currentSyrup,creamer:this.currentCreamer,userId:this.currentUser.uid};this.beverages.push(e),this.currentBeverage=e,_b(qf(Mr,"beverages",e.id),e),this.successMessage=`Beverage ${t} made successfully!`,this.successVisible=!0,this.successTimeoutId&&globalThis.clearTimeout(this.successTimeoutId),this.successTimeoutId=globalThis.setTimeout(()=>{this.successVisible=!1,this.successTimeoutId=null},15e3),this.currentName=""}},async removeBeverage(t){var e;this.beverages=this.beverages.filter(n=>n.id!==t),((e=this.currentBeverage)==null?void 0:e.id)===t&&(this.currentBeverage=this.beverages[0]??null),await yb(qf(Mr,"beverages",t))},async signInWithGoogle(){if(this.authBusy)return;this.authBusy=!0,this.authMessage="";const t=new dn;try{await P0(gc,t)}catch(e){e instanceof Error&&e.message.includes("auth/unauthorized-domain")?this.authMessage="Google sign-in is not enabled for this site.":this.authMessage="Google sign-in failed. Please try again."}finally{this.authBusy=!1}},async signOutUser(){if(!this.authBusy){this.authBusy=!0;try{await l0(gc)}finally{this.currentUser=null,this.beverages=[],this.currentBeverage=null,this.currentName="",this.successMessage="",this.successVisible=!1,this.successTimeoutId&&(globalThis.clearTimeout(this.successTimeoutId),this.successTimeoutId=null),this.currentTemp=rc[0],this.currentBase=null,this.currentSyrup=null,this.currentCreamer=null,this.authMessage="",this.authBusy=!1}}},async loadMyBeverages(t){var s;const e=t??((s=this.currentUser)==null?void 0:s.uid);if(!e){this.beverages=[],this.currentBeverage=null;return}const n=hb(ro(Mr,"beverages"),fb("userId","==",e)),r=await io(n);this.beverages=r.docs.map(i=>i.data()),this.currentBeverage=this.beverages[0]??null},showBeverage(){this.currentBeverage&&alert(`Beverage: ${this.currentBeverage.name}
Temperature: ${this.currentBeverage.temp}
Base: ${this.currentBeverage.base.name}
Syrup: ${this.currentBeverage.syrup.name}
Creamer: ${this.currentBeverage.creamer.name}`)},async loadBases(){const t=await io(ro(Mr,"bases"));this.bases=t.docs.map(e=>e.data()),this.currentBase=this.bases[0]??null},async loadSyrups(){const t=await io(ro(Mr,"syrups"));this.syrups=t.docs.map(e=>e.data()),this.currentSyrup=this.syrups[0]??null},async loadCreamers(){const t=await io(ro(Mr,"creamers"));this.creamers=t.docs.map(e=>e.data()),this.currentCreamer=this.creamers[0]??null}}}),wS={setup(){return{beverageStore:ki()}}};function AS(t,e,n,r,s,i){var a;return ge(),Re("div",{class:"syrup",style:us({"--texture-color":(a=r.beverageStore.currentSyrup)==null?void 0:a.color})},null,4)}const bS=Zn(wS,[["render",AS],["__scopeId","data-v-3aee45c0"]]),SS={setup(){return{beverageStore:ki()}}};function RS(t,e,n,r,s,i){var a;return ge(),Re("div",{class:"baseBeverage",style:us({backgroundColor:(a=r.beverageStore.currentBase)==null?void 0:a.color})},null,4)}const CS=Zn(SS,[["render",RS],["__scopeId","data-v-61527b0e"]]),PS={setup(){return{beverageStore:ki()}}},VS={class:"froth"};function kS(t,e,n,r,s,i){return ge(),Re("div",VS,[(ge(),Re(Fe,null,On(5,a=>{var c;return we("div",{key:a,class:"foam",style:us({backgroundColor:(c=r.beverageStore.currentCreamer)==null?void 0:c.color})},null,4)}),64))])}const DS=Zn(PS,[["render",kS],["__scopeId","data-v-af6103d4"]]),NS={},OS={id:"steam"};function xS(t,e){return ge(),Re("div",OS,[(ge(),Re(Fe,null,On(3,n=>we("div",{class:"stream",key:n})),64))])}const MS=Zn(NS,[["render",xS]]),LS={},FS={id:"condensation"};function US(t,e){return ge(),Re("div",FS,[(ge(),Re(Fe,null,On(3,n=>we("div",{class:"flake",key:n})),64))])}const BS=Zn(LS,[["render",US]]),$S={components:{Contents:fE,Mug:mE,Syrup:bS,Base:CS,Creamer:DS,Hot:MS,Cold:BS},props:{isIced:{type:Boolean,required:!0}},setup(){return{beverageStore:ki()}}};function jS(t,e,n,r,s,i){const a=cr("Cold"),c=cr("Hot"),l=cr("Creamer"),h=cr("Syrup"),d=cr("Base"),g=cr("Contents"),y=cr("Mug");return ge(),xn(y,null,{default:Ls(()=>[n.isIced?(ge(),xn(a,{key:0})):(ge(),xn(c,{key:1})),wt(g,null,{top:Ls(()=>{var b;return[((b=r.beverageStore.currentCreamer)==null?void 0:b.color)!=="transparent"?(ge(),xn(l,{key:0})):Qs("",!0)]}),mid:Ls(()=>{var b;return[((b=r.beverageStore.currentSyrup)==null?void 0:b.color)!=="transparent"?(ge(),xn(h,{key:0})):Qs("",!0)]}),bottom:Ls(()=>[wt(d)]),_:1})]),_:1})}const qS=Zn($S,[["render",jS]]),HS=["id","value"],zS=["id","value"],WS=["id","value"],KS=["id","value"],GS=["disabled"],QS={key:1},JS=["disabled"],XS={key:2},YS={key:3},ZS=["disabled"],eR={key:4},tR={class:"beverage-list"},nR={class:"beverage-option"},rR=["id","value"],sR={class:"beverage-text"},iR=["onClick"],oR=Ty({__name:"App",setup(t){const e=ki();return e.init(),(n,r)=>(ge(),Re(Fe,null,[we("div",null,[wt(qS,{isIced:de(e).currentTemp==="Cold"},null,8,["isIced"]),we("ul",null,[we("li",null,[(ge(!0),Re(Fe,null,On(de(e).temps,s=>(ge(),Re("label",{key:s},[Or(we("input",{type:"radio",name:"temperature",id:`r${s}`,value:s,"onUpdate:modelValue":r[0]||(r[0]=i=>de(e).currentTemp=i)},null,8,HS),[[Ms,de(e).currentTemp]]),Fr(" "+$t(s),1)]))),128))])]),we("ul",null,[we("li",null,[(ge(!0),Re(Fe,null,On(de(e).bases,s=>(ge(),Re("label",{key:s.id},[Or(we("input",{type:"radio",name:"bases",id:`r${s.id}`,value:s,"onUpdate:modelValue":r[1]||(r[1]=i=>de(e).currentBase=i)},null,8,zS),[[Ms,de(e).currentBase]]),Fr(" "+$t(s.name),1)]))),128))])]),we("ul",null,[we("li",null,[(ge(!0),Re(Fe,null,On(de(e).syrups,s=>(ge(),Re("label",{key:s.id},[Or(we("input",{type:"radio",name:"syrups",id:`r${s.id}`,value:s,"onUpdate:modelValue":r[2]||(r[2]=i=>de(e).currentSyrup=i)},null,8,WS),[[Ms,de(e).currentSyrup]]),Fr(" "+$t(s.name),1)]))),128))])]),we("ul",null,[we("li",null,[(ge(!0),Re(Fe,null,On(de(e).creamers,s=>(ge(),Re("label",{key:s.id},[Or(we("input",{type:"radio",name:"creamers",id:`r${s.id}`,value:s,"onUpdate:modelValue":r[3]||(r[3]=i=>de(e).currentCreamer=i)},null,8,KS),[[Ms,de(e).currentCreamer]]),Fr(" "+$t(s.name),1)]))),128))])]),de(e).currentUser?(ge(),Re("p",QS,[Fr(" Signed in as: "+$t(de(e).currentUser.displayName||de(e).currentUser.uid)+" ",1),we("button",{disabled:de(e).authBusy,onClick:r[5]||(r[5]=s=>de(e).signOutUser())},"Sign out",8,JS)])):(ge(),Re("button",{key:0,disabled:de(e).authBusy,onClick:r[4]||(r[4]=s=>de(e).signInWithGoogle())}," Sign in with Google ",8,GS)),de(e).authMessage?(ge(),Re("p",XS,$t(de(e).authMessage),1)):Qs("",!0),de(e).successVisible?(ge(),Re("p",YS,$t(de(e).successMessage),1)):Qs("",!0),Or(we("input",{type:"text",placeholder:"Beverage Name","onUpdate:modelValue":r[6]||(r[6]=s=>de(e).currentName=s)},null,512),[[Hv,de(e).currentName]]),we("button",{disabled:!de(e).currentUser,onClick:r[7]||(r[7]=s=>de(e).makeBeverage())}," 🍺 Make Beverage ",8,ZS),de(e).beverages.length?(ge(),Re("section",eR,[we("ul",tR,[(ge(!0),Re(Fe,null,On(de(e).beverages,s=>(ge(),Re("li",{key:s.id,class:"beverage-item"},[we("label",nR,[Or(we("input",{type:"radio",name:"beverage",id:`r${s.id}`,value:s,"onUpdate:modelValue":r[8]||(r[8]=i=>de(e).currentBeverage=i)},null,8,rR),[[Ms,de(e).currentBeverage]]),we("span",sR,[we("strong",null,$t(s.name),1),we("span",null,$t(s.temp),1)])]),we("button",{type:"button",class:"remove-button","aria-label":"Remove beverage",title:"Remove beverage",onClick:i=>de(e).removeBeverage(s.id)}," × ",8,iR)]))),128))])])):Qs("",!0)]),r[9]||(r[9]=we("div",{id:"beverage-container",style:{"margin-top":"20px"}},null,-1))],64))}}),Xm=Xv();Xm.use(cE);Gv(oR).use(Xm).mount("#app");
