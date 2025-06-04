function t(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),r=new WeakMap;class o{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}}const n=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new o(i,t,s)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,f=globalThis,g=f.trustedTypes,m=g?g.emptyScript:"",$=f.reactiveElementPolyfillSupport,v=(t,e)=>t,_={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!l(t,e),b={attribute:!0,type:String,converter:_,reflect:!1,useDefault:!1,hasChanged:y};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;class A extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const o=s?.call(this);r?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...h(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of s){const s=document.createElement("style"),r=e.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:_).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:_;this._$Em=s,this[s]=r.fromAttribute(e,t.type)??this._$Ej?.get(s)??null,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const s=this.constructor,r=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??y)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==r||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(t){}firstUpdated(t){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[v("elementProperties")]=new Map,A[v("finalized")]=new Map,$?.({ReactiveElement:A}),(f.reactiveElementVersions??=[]).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,x=w.trustedTypes,E=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+C,k=`<${P}>`,O=document,U=()=>O.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,T="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,z=/>/g,j=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,L=/"/g,B=/^(?:script|style|textarea|title)$/i,I=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),W=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),V=new WeakMap,F=O.createTreeWalker(O,129);function G(t,e){if(!N(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const J=(t,e)=>{const i=t.length-1,s=[];let r,o=2===e?"<svg>":3===e?"<math>":"",n=H;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(n.lastIndex=d,l=n.exec(i),null!==l);)d=n.lastIndex,n===H?"!--"===l[1]?n=R:void 0!==l[1]?n=z:void 0!==l[2]?(B.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=j):void 0!==l[3]&&(n=j):n===j?">"===l[0]?(n=r??H,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?j:'"'===l[3]?L:D):n===L||n===D?n=j:n===R||n===z?n=H:(n=j,r=void 0);const h=n===j&&t[e+1].startsWith("/>")?" ":"";o+=n===H?i+k:c>=0?(s.push(a),i.slice(0,c)+S+i.slice(c)+C+h):i+C+(-2===c?e:h)}return[G(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class K{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[l,c]=J(t,e);if(this.el=K.createElement(l,i),F.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=F.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(S)){const e=c[o++],i=s.getAttribute(t).split(C),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:n[2],strings:i,ctor:"."===n[1]?tt:"?"===n[1]?et:"@"===n[1]?it:Y}),s.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:r}),s.removeAttribute(t));if(B.test(s.tagName)){const t=s.textContent.split(C),e=t.length-1;if(e>0){s.textContent=x?x.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],U()),F.nextNode(),a.push({type:2,index:++r});s.append(t[e],U())}}}else if(8===s.nodeType)if(s.data===P)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(C,t+1));)a.push({type:7,index:r}),t+=C.length-1}r++}}static createElement(t,e){const i=O.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,s){if(e===W)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const o=M(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=Z(t,r._$AS(t,e.values),r,s)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??O).importNode(e,!0);F.currentNode=s;let r=F.nextNode(),o=0,n=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new X(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new st(r,this,t)),this._$AV.push(e),a=i[++n]}o!==a?.index&&(r=F.nextNode(),o++)}return F.currentNode=O,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),M(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>N(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Q(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new K(t)),e}k(t){N(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new X(this.O(U()),this.O(U()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(void 0===r)t=Z(this,t,e,0),o=!M(t)||t!==this._$AH&&t!==W,o&&(this._$AH=t);else{const s=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=Z(this,s[i+n],e,n),a===W&&(a=this._$AH[n]),o||=!M(a)||a!==this._$AH[n],a===q?t=q:t!==q&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}o&&!s&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class et extends Y{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class it extends Y{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??q)===W)return;const i=this._$AH,s=t===q&&i!==q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==q&&(i===q||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const rt=w.litHtmlPolyfillSupport;rt?.(K,X),(w.litHtmlVersions??=[]).push("3.3.0");const ot=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class nt extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new X(e.insertBefore(U(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}nt._$litElement$=!0,nt.finalized=!0,ot.litElementHydrateSupport?.({LitElement:nt});const at=ot.litElementPolyfillSupport;at?.({LitElement:nt}),(ot.litElementVersions??=[]).push("4.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lt=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)},ct={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:y},dt=(t=ct,e,i)=>{const{kind:s,metadata:r}=i;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];e.call(this,i),this.requestUpdate(s,r,t)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ht(t){return(e,i)=>"object"==typeof i?dt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}let pt=class extends nt{hass;config;static styles=n`
    :host {
      display: block;
      max-width: 300px;
      margin: auto;
    }

    .card {
      position: relative;
      padding: 1rem;
      border-radius: 1rem;
      background: var(--card-background-color);
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
      display: flex;
      flex-direction: column;
      gap: 1rem;
      overflow: hidden;
      transition: filter 0.4s ease, opacity 0.4s ease;
    }

    .card.off {
      filter: blur(2px);
      opacity: 0.5;
    }

    .overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.4);
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
      font-weight: bold;
      z-index: 5;
      pointer-events: none;
    }

    .header {
      font-size: 1.25rem;
      font-weight: bold;
      border-bottom: 1px solid var(--divider-color);
      padding-bottom: 0.25rem;
      text-align: center;
    }

    .ring-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.4rem;
    }

    svg.ring {
      width: 150px;
      height: 150px;
    }

    .ring-bg {
      fill: none;
      stroke: #444;
      stroke-width: 10;
    }

    .ring-fg {
      fill: none;
      stroke: var(--ring-color, #1e90ff);
      stroke-width: 10;
      stroke-linecap: round;
      transform: rotate(-90deg);
      transform-origin: center;
      transition: stroke-dashoffset 0.6s ease;
    }

    .ring-text {
      fill: var(--primary-text-color);
      font-size: 1.2rem;
      font-weight: bold;
      dominant-baseline: middle;
    }

    .time-left {
      font-size: 0.9rem;
      color: var(--secondary-text-color);
      margin-top: -0.5rem;
    }

    .tile-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      gap: 0.6rem;
    }

    .tile {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid var(--divider-color);
      padding: 0.5rem;
      border-radius: 0.75rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      font-size: 0.85rem;
      align-items: center;
    }

    .tile ha-icon {
      margin-bottom: 0.25rem;
      color: var(--primary-color);
    }

    .tile .value {
      font-weight: bold;
      font-size: 1rem;
      color: var(--primary-text-color);
    }

    .tile .label {
      color: var(--secondary-text-color);
      font-size: 0.75rem;
      margin-top: 0.2rem;
    }
  `;render(){const t=this.config.entities,e=this.config.display,i=this.hass.states,s=i[t.run_state]?.state||"unknown",r="on"===i["switch.washer_power"]?.state,o=i[t.initial_time]?.state||"0:00",n=i[t.remaining_time]?.state||"0:00",[a,l]=o.split(":").map(Number),[c,d]=n.split(":").map(Number),h=60*a+l,p=60*c+d,u=h>0?Math.min(100,(h-p)/h*100):0,f=2*Math.PI*45,g="done"===s?"#00cc66":"running"===s?"#1e90ff":"#888888";this.style.setProperty("--ring-color",g);const m=t=>I`<ha-icon icon="${t}"></ha-icon>`;return I`
      <div class="card ${r?"":"off"}">
        ${r?"":I`<div class="overlay">Off</div>`}
        <div class="header">Washer</div>
        <div class="ring-wrap">
          <svg class="ring" viewBox="0 0 100 100">
            <circle class="ring-bg" cx="50" cy="50" r="45" />
            <circle
              class="ring-fg"
              cx="50"
              cy="50"
              r="45"
              stroke-dasharray="${f}"
              stroke-dashoffset="${f-f*u/100}"
            />
            <text x="50%" y="54%" text-anchor="middle" class="ring-text">
              ${"done"===s?"Done":`${u.toFixed(0)}%`}
            </text>
          </svg>
          <div class="time-left">${n} remaining</div>
        </div>

        <div class="tile-grid">
          ${e.includes("run_state")&&t.run_state?I`<div class="tile">${m("mdi:play-circle")}<div class="value">${s}</div><div class="label">Status</div></div>`:""}
          ${e.includes("spin_speed")&&t.spin_speed?I`<div class="tile">${m("mdi:rotate-right")}<div class="value">${i[t.spin_speed]?.state??"-"}</div><div class="label">Spin</div></div>`:""}
          ${e.includes("water_temp")&&t.water_temp?I`<div class="tile">${m("mdi:thermometer")}<div class="value">${i[t.water_temp]?.state??"-"}</div><div class="label">Temp</div></div>`:""}
          ${e.includes("course")&&t.course?I`<div class="tile">${m("mdi:playlist-check")}<div class="value">${i[t.course]?.state??"-"}</div><div class="label">Course</div></div>`:""}
          ${e.includes("run_completed")&&t.run_completed?I`<div class="tile">${m("mdi:check-circle")}<div class="value">${i[t.run_completed]?.state??"-"}</div><div class="label">Complete</div></div>`:""}
        </div>
      </div>
    `}};t([ht({attribute:!1})],pt.prototype,"hass",void 0),t([ht({type:Object})],pt.prototype,"config",void 0),pt=t([lt("washer-card")],pt);let ut=class extends nt{hass;config;static styles=n`
    :host {
      display: block;
      max-width: 300px;
      margin: auto;
    }

    .card {
      position: relative;
      padding: 1rem;
      border-radius: 1rem;
      background: var(--card-background-color);
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
      display: flex;
      flex-direction: column;
      gap: 1rem;
      overflow: hidden;
      transition: filter 0.4s ease, opacity 0.4s ease;
    }

    .card.off {
      filter: blur(2px);
      opacity: 0.5;
    }

    .overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.4);
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
      font-weight: bold;
      z-index: 5;
      pointer-events: none;
    }

    .header {
      font-size: 1.25rem;
      font-weight: bold;
      border-bottom: 1px solid var(--divider-color);
      padding-bottom: 0.25rem;
      text-align: center;
    }

    .ring-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.4rem;
    }

    svg.ring {
      width: 150px;
      height: 150px;
    }

    .ring-bg {
      fill: none;
      stroke: #444;
      stroke-width: 10;
    }

    .ring-fg {
      fill: none;
      stroke: var(--ring-color, #f39c12);
      stroke-width: 10;
      stroke-linecap: round;
      transform: rotate(-90deg);
      transform-origin: center;
      transition: stroke-dashoffset 0.6s ease;
    }

    .ring-text {
      fill: var(--primary-text-color);
      font-size: 1.2rem;
      font-weight: bold;
      dominant-baseline: middle;
    }

    .time-left {
      font-size: 0.9rem;
      color: var(--secondary-text-color);
      margin-top: -0.5rem;
    }

    .tile-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      gap: 0.6rem;
    }

    .tile {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid var(--divider-color);
      padding: 0.5rem;
      border-radius: 0.75rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      font-size: 0.85rem;
      align-items: center;
    }

    .tile ha-icon {
      margin-bottom: 0.25rem;
      color: var(--primary-color);
    }

    .tile .value {
      font-weight: bold;
      font-size: 1rem;
      color: var(--primary-text-color);
    }

    .tile .label {
      color: var(--secondary-text-color);
      font-size: 0.75rem;
      margin-top: 0.2rem;
    }
  `;render(){const t=this.config.entities,e=this.config.display,i=this.hass.states,s=i[t.run_state]?.state||"unknown",r="on"===i["switch.dryer_power"]?.state,o=i[t.initial_time]?.state||"0:00",n=i[t.remaining_time]?.state||"0:00",[a,l]=o.split(":").map(Number),[c,d]=n.split(":").map(Number),h=60*a+l,p=60*c+d,u=h>0?Math.min(100,(h-p)/h*100):0,f=2*Math.PI*45,g="done"===s?"#00cc66":"running"===s?"#f39c12":"#888888";this.style.setProperty("--ring-color",g);const m=t=>I`<ha-icon icon="${t}"></ha-icon>`;return I`
      <div class="card ${r?"":"off"}">
        ${r?"":I`<div class="overlay">Off</div>`}
        <div class="header">Dryer</div>
        <div class="ring-wrap">
          <svg class="ring" viewBox="0 0 100 100">
            <circle class="ring-bg" cx="50" cy="50" r="45" />
            <circle
              class="ring-fg"
              cx="50"
              cy="50"
              r="45"
              stroke-dasharray="${f}"
              stroke-dashoffset="${f-f*u/100}"
            />
            <text x="50%" y="54%" text-anchor="middle" class="ring-text">
              ${"done"===s?"Done":`${u.toFixed(0)}%`}
            </text>
          </svg>
          <div class="time-left">${n} remaining</div>
        </div>

        <div class="tile-grid">
          ${e.includes("run_state")&&t.run_state?I`<div class="tile">${m("mdi:tumble-dryer")}<div class="value">${s}</div><div class="label">Status</div></div>`:""}
          ${e.includes("course")&&t.course?I`<div class="tile">${m("mdi:playlist-check")}<div class="value">${i[t.course]?.state??"-"}</div><div class="label">Course</div></div>`:""}
          ${e.includes("run_completed")&&t.run_completed?I`<div class="tile">${m("mdi:check-circle")}<div class="value">${i[t.run_completed]?.state??"-"}</div><div class="label">Complete</div></div>`:""}
        </div>
      </div>
    `}};t([ht({attribute:!1})],ut.prototype,"hass",void 0),t([ht({type:Object})],ut.prototype,"config",void 0),ut=t([lt("dryer-card")],ut);let ft=class extends nt{hass;_config;static styles=n`
    :host {
      display: block;
    }
    .wrapper {
      display: grid;
      gap: 1.5rem;
    }
    .error {
      padding: 1rem;
      font-weight: bold;
      color: red;
    }
  `;setConfig(t){if(!t.washer?.entities&&!t.dryer?.entities)throw new Error("Washer or Dryer configuration must be provided.");this._config=t}getCardSize(){return 2}render(){if(!this._config||!this.hass)return I`<div class="error">❌ LG Appliance Card is not configured correctly.</div>`;const t=this._config.washer?.enabled&&this._config.washer.entities&&Object.values(this._config.washer.entities).some(Boolean),e=this._config.dryer?.enabled&&this._config.dryer.entities&&Object.values(this._config.dryer.entities).some(Boolean);return t||e?I`
      <ha-card>
        <div class="wrapper">
          ${t?I`<washer-card .hass=${this.hass} .config=${this._config.washer}></washer-card>`:""}
          ${e?I`<dryer-card .hass=${this.hass} .config=${this._config.dryer}></dryer-card>`:""}
        </div>
      </ha-card>
    `:I`<div class="error">❌ LG Appliance Card: No valid washer or dryer entities defined.</div>`}};t([ht({attribute:!1})],ft.prototype,"hass",void 0),t([ht({type:Object})],ft.prototype,"_config",void 0),ft=t([lt("lg-appliance-card")],ft),window.customCards=window.customCards||[],window.customCards.push({type:"lg-appliance-card",name:"LG Appliance Card",description:"A dual washer/dryer UI card with animated progress ring and minimal design."});export{ft as LGApplianceCard};
