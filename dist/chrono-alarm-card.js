function t(t,e,i,o){var s,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(s=t[r])&&(a=(n<3?s(a):n>3?s(e,i,a):s(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),s=new WeakMap;let n=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(e,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new n(i,t,o)},r=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,o))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,m=globalThis,g=m.trustedTypes,_=g?g.emptyScript:"",f=m.reactiveElementPolyfillSupport,v=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,e)=>!l(t,e),$={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&c(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){const{get:o,set:s}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:o,set(e){const n=o?.call(this);s?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{if(i)t.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of o){const o=document.createElement("style"),s=e.litNonce;void 0!==s&&o.setAttribute("nonce",s),o.textContent=i.cssText,t.appendChild(o)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=i.getPropertyOptions(o),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=o;const n=s.fromAttribute(e,t.type);this[o]=n??this._$Ej?.get(o)??n,this._$Em=null}}requestUpdate(t,e,i,o=!1,s){if(void 0!==t){const n=this.constructor;if(!1===o&&(s=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??b)(s,e)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:o,wrapped:s},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==s||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===o&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,o=this[e];!0!==t||this._$AL.has(e)||void 0===o||this.C(e,void 0,i,o)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[v("elementProperties")]=new Map,w[v("finalized")]=new Map,f?.({ReactiveElement:w}),(m.reactiveElementVersions??=[]).push("2.1.2");const x=globalThis,A=t=>t,k=x.trustedTypes,C=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",z=`lit$${Math.random().toFixed(9).slice(2)}$`,E="?"+z,T=`<${E}>`,P=document,D=()=>P.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,I="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,H=/>/g,R=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,L=/"/g,W=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),F=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),V=new WeakMap,X=P.createTreeWalker(P,129);function Y(t,e){if(!U(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}class J{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let s=0,n=0;const a=t.length-1,r=this.parts,[l,c]=((t,e)=>{const i=t.length-1,o=[];let s,n=2===e?"<svg>":3===e?"<math>":"",a=N;for(let e=0;e<i;e++){const i=t[e];let r,l,c=-1,h=0;for(;h<i.length&&(a.lastIndex=h,l=a.exec(i),null!==l);)h=a.lastIndex,a===N?"!--"===l[1]?a=O:void 0!==l[1]?a=H:void 0!==l[2]?(W.test(l[2])&&(s=RegExp("</"+l[2],"g")),a=R):void 0!==l[3]&&(a=R):a===R?">"===l[0]?(a=s??N,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,r=l[1],a=void 0===l[3]?R:'"'===l[3]?L:j):a===L||a===j?a=R:a===O||a===H?a=N:(a=R,s=void 0);const d=a===R&&t[e+1].startsWith("/>")?" ":"";n+=a===N?i+T:c>=0?(o.push(r),i.slice(0,c)+S+i.slice(c)+z+d):i+z+(-2===c?e:d)}return[Y(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),o]})(t,e);if(this.el=J.createElement(l,i),X.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=X.nextNode())&&r.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(S)){const e=c[n++],i=o.getAttribute(t).split(z),a=/([.?@])?(.*)/.exec(e);r.push({type:1,index:s,name:a[2],strings:i,ctor:"."===a[1]?tt:"?"===a[1]?et:"@"===a[1]?it:Q}),o.removeAttribute(t)}else t.startsWith(z)&&(r.push({type:6,index:s}),o.removeAttribute(t));if(W.test(o.tagName)){const t=o.textContent.split(z),e=t.length-1;if(e>0){o.textContent=k?k.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],D()),X.nextNode(),r.push({type:2,index:++s});o.append(t[e],D())}}}else if(8===o.nodeType)if(o.data===E)r.push({type:2,index:s});else{let t=-1;for(;-1!==(t=o.data.indexOf(z,t+1));)r.push({type:7,index:s}),t+=z.length-1}s++}}static createElement(t,e){const i=P.createElement("template");return i.innerHTML=t,i}}function G(t,e,i=t,o){if(e===F)return e;let s=void 0!==o?i._$Co?.[o]:i._$Cl;const n=M(e)?void 0:e._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),void 0===n?s=void 0:(s=new n(t),s._$AT(t,i,o)),void 0!==o?(i._$Co??=[])[o]=s:i._$Cl=s),void 0!==s&&(e=G(t,s._$AS(t,e.values),s,o)),e}class K{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??P).importNode(e,!0);X.currentNode=o;let s=X.nextNode(),n=0,a=0,r=i[0];for(;void 0!==r;){if(n===r.index){let e;2===r.type?e=new Z(s,s.nextSibling,this,t):1===r.type?e=new r.ctor(s,r.name,r.strings,this,t):6===r.type&&(e=new ot(s,this,t)),this._$AV.push(e),r=i[++a]}n!==r?.index&&(s=X.nextNode(),n++)}return X.currentNode=P,o}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Z{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),M(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>U(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=J.createElement(Y(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new K(o,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new J(t)),e}k(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const s of t)o===e.length?e.push(i=new Z(this.O(D()),this.O(D()),this,this.options)):i=e[o],i._$AI(s),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,s){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(t,e=this,i,o){const s=this.strings;let n=!1;if(void 0===s)t=G(this,t,e,0),n=!M(t)||t!==this._$AH&&t!==F,n&&(this._$AH=t);else{const o=t;let a,r;for(t=s[0],a=0;a<s.length-1;a++)r=G(this,o[i+a],e,a),r===F&&(r=this._$AH[a]),n||=!M(r)||r!==this._$AH[a],r===q?t=q:t!==q&&(t+=(r??"")+s[a+1]),this._$AH[a]=r}n&&!o&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class et extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class it extends Q{constructor(t,e,i,o,s){super(t,e,i,o,s),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??q)===F)return;const i=this._$AH,o=t===q&&i!==q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==q&&(i===q||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const st={I:Z},nt=x.litHtmlPolyfillSupport;nt?.(J,Z),(x.litHtmlVersions??=[]).push("3.3.2");const at=globalThis;let rt=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const o=i?.renderBefore??e;let s=o._$litPart$;if(void 0===s){const t=i?.renderBefore??null;o._$litPart$=s=new Z(e.insertBefore(D(),t),t,void 0,i??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}};rt._$litElement$=!0,rt.finalized=!0,at.litElementHydrateSupport?.({LitElement:rt});const lt=at.litElementPolyfillSupport;lt?.({LitElement:rt}),(at.litElementVersions??=[]).push("4.2.2");const ct=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ht={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b},dt=(t=ht,e,i)=>{const{kind:o,metadata:s}=i;let n=globalThis.litPropertyMetadata.get(s);if(void 0===n&&globalThis.litPropertyMetadata.set(s,n=new Map),"setter"===o&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===o){const{name:o}=i;return{set(i){const s=e.get.call(this);e.set.call(this,i),this.requestUpdate(o,s,t,!0,i)},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===o){const{name:o}=i;return function(i){const s=this[o];e.call(this,i),this.requestUpdate(o,s,t,!0,i)}}throw Error("Unsupported decorator location: "+o)};function pt(t){return(e,i)=>"object"==typeof i?dt(t,e,i):((t,e,i)=>{const o=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),o?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function ut(t){return pt({...t,state:!0,attribute:!1})}const mt=a`
  :host {
    display: block;
    margin: 0 !important;
  }

  ha-card {
    height: 100%;
    overflow: hidden;
    margin: 0;
    border: none;
    box-shadow: none;
  }

  .chrono-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;
    min-height: 300px;
    box-sizing: border-box;
    background: var(--ha-card-background, var(--card-background-color));
    color: var(--primary-text-color);
    position: relative;
  }

  .chrono-card.panel {
    height: 100vh;
    min-height: 0;
    padding: 8px 16px;
    overflow: hidden;
  }

  /* -- Clock group (wraps top bar + clock + info to share width) ---- */
  .clock-group {
    display: inline-flex;
    flex-direction: column;
    align-items: stretch;
  }

  /* -- Top bar (alarm icon left, chips right) ----------------------- */
  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
  }

  .alarm-menu-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--secondary-background-color, rgba(0, 0, 0, 0.06));
    border: none;
    border-radius: 20px;
    padding: 6px 14px;
    cursor: pointer;
    color: var(--primary-text-color);
    font-size: 0.85rem;
    transition: background 0.2s;
  }

  .alarm-menu-btn:hover {
    background: var(--primary-color, #03a9f4);
    color: var(--text-primary-color, #fff);
  }

  .alarm-menu-btn ha-icon {
    --mdc-icon-size: 20px;
  }

  .next-alarm-badge {
    opacity: 0.7;
    font-size: 0.8rem;
  }

  /* -- Clock section ------------------------------------------------ */
  .clock-section {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* -- Alarms panel (overlay) --------------------------------------- */
  .alarms-panel {
    min-width: 360px;
    max-width: 500px;
  }

  .alarms-list {
    max-height: 60vh;
    overflow-y: auto;
  }

  /* -- Info section (date, day, weather) ----------------------------- */
  .info-section {
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: center;
    font-size: clamp(0.9rem, 2.5vh, 1.6rem);
    opacity: 0.75;
    margin-top: 4px;
  }

  .info-section .separator {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: currentColor;
    opacity: 0.5;
  }

  .weather-info {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .weather-info ha-icon {
    --mdc-icon-size: 20px;
  }

  /* -- Alarms section ----------------------------------------------- */
  .alarms-section {
    width: 100%;
    max-width: 480px;
    margin-bottom: 20px;
  }

  .alarms-header {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: 0.5;
    margin-bottom: 8px;
    padding-left: 4px;
  }

  .alarm-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 14px;
    cursor: pointer;
    border-radius: 12px;
    transition: background-color 0.2s ease;
    margin-bottom: 4px;
  }

  .alarm-item:hover {
    background: var(--secondary-background-color, rgba(0, 0, 0, 0.05));
  }

  .alarm-item .alarm-name {
    font-weight: 500;
    min-width: 80px;
  }

  .alarm-item .alarm-time {
    font-size: 1.1rem;
    font-variant-numeric: tabular-nums;
    flex: 1;
  }

  .alarm-item .alarm-days {
    font-size: 0.8rem;
    opacity: 0.6;
  }

  .alarm-item .alarm-countdown {
    font-size: 0.75rem;
    opacity: 0.5;
    font-style: italic;
  }

  .alarm-item .alarm-toggle {
    margin-left: auto;
  }

  .alarm-item.disabled {
    opacity: 0.4;
  }

  /* -- Action toggles ----------------------------------------------- */
  .toggles-section {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    max-width: 480px;
  }

  .toggle-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 14px;
    background: var(--secondary-background-color, rgba(0, 0, 0, 0.05));
    border-radius: 24px;
    font-size: 0.9rem;
  }

  .toggle-item ha-icon {
    --mdc-icon-size: 18px;
    opacity: 0.7;
  }

  /* -- Chips section ------------------------------------------------ */
  .chips-section {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    justify-content: flex-end;
  }

  .chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    background: var(--secondary-background-color, rgba(0, 0, 0, 0.06));
    border-radius: 18px;
    font-size: 0.85rem;
    color: var(--primary-text-color);
    cursor: pointer;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
    transition: transform 0.1s, opacity 0.1s;
  }

  .chip:active {
    transform: scale(0.93);
    opacity: 0.8;
  }

  .chip ha-icon {
    --mdc-icon-size: 16px;
    opacity: 0.8;
  }

  .chip .chip-state {
    font-weight: 500;
  }

  /* -- Overlay (dialogs) -------------------------------------------- */
  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    backdrop-filter: blur(4px);
  }

  .dialog-card {
    background: var(--ha-card-background, var(--card-background-color, #fff));
    color: var(--primary-text-color);
    border-radius: 16px;
    padding: 24px;
    min-width: 300px;
    max-width: 90%;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }

  .dialog-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 20px;
    text-align: center;
  }

  .dialog-actions {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 20px;
  }

  .dialog-actions button {
    padding: 8px 20px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 500;
  }

  .btn-cancel {
    background: transparent;
    color: var(--primary-text-color);
    opacity: 0.7;
  }

  .btn-cancel:hover {
    opacity: 1;
  }

  .btn-save {
    background: var(--primary-color, #03a9f4);
    color: var(--text-primary-color, #fff);
  }

  .btn-save:hover {
    opacity: 0.9;
  }

  /* -- Error / empty states ----------------------------------------- */
  .error-state {
    padding: 16px;
    color: var(--error-color, #db4437);
    text-align: center;
  }
`,gt=a`
  :host {
    display: block;
  }

  .digital-clock {
    display: flex;
    align-items: baseline;
    justify-content: center;
    position: relative;
    font-family: var(--chrono-font-family, 'Segoe UI', system-ui, sans-serif);
    font-weight: 300;
    line-height: 1;
    user-select: none;
  }

  .time-digits {
    font-size: var(--chrono-clock-size, 96px);
    font-variant-numeric: tabular-nums;
    letter-spacing: -2px;
  }

  .colon {
    display: inline-block;
    width: 0.3em;
    text-align: center;
    transition: opacity 0.15s;
  }

  .colon-hidden {
    opacity: 0;
  }

  .period {
    position: absolute;
    left: 100%;
    bottom: 0;
    margin-left: 6px;
    font-size: calc(var(--chrono-clock-size, 96px) * 0.28);
    font-weight: 400;
    opacity: 0.7;
    white-space: nowrap;
  }
`,_t=a`
  :host {
    display: block;
  }

  .flip-clock {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    user-select: none;
  }

  .flip-group {
    display: flex;
    gap: 4px;
    position: relative;
  }

  /* -- Individual digit ---------------------------------------------- */
  .flip-unit {
    position: relative;
    width: var(--chrono-flip-width, 64px);
    height: var(--chrono-flip-height, 100px);
    perspective: 300px;
    border-radius: 8px;
    overflow: visible;
    font-size: var(--chrono-flip-font-size, 80px);
    font-family: var(--chrono-flip-font, 'Roboto Mono', 'Courier New', monospace);
    font-weight: 700;
    color: var(--chrono-flip-color, #e0e0e0);
    border: 1px solid rgba(255, 255, 255, 0.12);
  }

  .flip-face {
    position: absolute;
    left: 0;
    width: 100%;
    height: 50%;
    overflow: hidden;
  }

  /* The digit-text spans the full unit height, clipped by the 50% face */
  .digit-text {
    position: absolute;
    left: 0;
    width: 100%;
    height: var(--chrono-flip-height, 100px);
    display: flex;
    align-items: center;
    justify-content: center;
    font: inherit;
    color: inherit;
  }

  .upper {
    top: 0;
    background: var(--chrono-flip-bg, #2a2a2a);
    border-radius: 8px 8px 0 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    z-index: 1;
  }

  .upper .digit-text {
    top: 0;
  }

  .lower {
    bottom: 0;
    background: var(--chrono-flip-bg-lower, #242424);
    border-radius: 0 0 8px 8px;
    z-index: 1;
  }

  .lower .digit-text {
    bottom: 0;
  }

  /* -- Fold animation panels ---------------------------------------- */
  .fold {
    position: absolute;
    left: 0;
    width: 100%;
    height: 50%;
    overflow: hidden;
    backface-visibility: hidden;
  }

  .fold .digit-text {
    font: inherit;
    color: inherit;
  }

  .fold-upper {
    top: 0;
    background: var(--chrono-flip-bg, #2a2a2a);
    border-radius: 8px 8px 0 0;
    transform-origin: bottom center;
    z-index: 3;
    animation: foldDown 0.3s ease-in forwards;
  }

  .fold-upper .digit-text {
    top: 0;
  }

  .fold-lower {
    top: 50%;
    background: var(--chrono-flip-bg-lower, #242424);
    border-radius: 0 0 8px 8px;
    transform-origin: top center;
    transform: rotateX(90deg);
    z-index: 2;
    animation: foldUp 0.3s ease-out 0.3s forwards;
  }

  .fold-lower .digit-text {
    bottom: 0;
  }

  @keyframes foldDown {
    0% {
      transform: rotateX(0deg);
    }
    100% {
      transform: rotateX(-90deg);
    }
  }

  @keyframes foldUp {
    0% {
      transform: rotateX(90deg);
    }
    100% {
      transform: rotateX(0deg);
    }
  }

  /* -- Divider line ------------------------------------------------- */
  .flip-unit::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background: rgba(0, 0, 0, 0.35);
    z-index: 5;
    transform: translateY(-50%);
    pointer-events: none;
  }

  /* -- Colon separator ---------------------------------------------- */
  .flip-separator {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 14px;
    margin: 0 6px;
  }

  .flip-separator .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--chrono-flip-color, #e0e0e0);
    opacity: 0.6;
  }

  /* -- Period (AM/PM) ----------------------------------------------- */
  .flip-period {
    position: absolute;
    top: -2px;
    left: 0;
    font-size: calc(var(--chrono-flip-font-size, 80px) * 0.16);
    font-family: var(--chrono-flip-font, 'Roboto Mono', 'Courier New', monospace);
    color: var(--chrono-flip-color, #e0e0e0);
    opacity: 0.7;
    line-height: 1;
    transform: translateY(-100%);
    pointer-events: none;
  }

  /* -- Shadow / depth ----------------------------------------------- */
  .flip-unit {
    box-shadow:
      0 2px 6px rgba(0, 0, 0, 0.3),
      0 1px 2px rgba(0, 0, 0, 0.2);
  }
`,ft=a`
  .time-picker {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin: 20px 0;
  }

  .time-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  .time-col button {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: none;
    background: var(--secondary-background-color, rgba(0, 0, 0, 0.06));
    color: var(--primary-text-color);
    font-size: 1.2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
  }

  .time-col button:hover {
    background: var(--primary-color, #03a9f4);
    color: var(--text-primary-color, #fff);
  }

  .time-col .time-value {
    font-size: 2.4rem;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    width: 64px;
    text-align: center;
  }

  .time-colon {
    font-size: 2.4rem;
    font-weight: 600;
    padding: 0 4px;
    padding-top: 4px;
  }

  .days-picker {
    display: flex;
    justify-content: center;
    gap: 6px;
    margin: 16px 0;
  }

  .day-btn {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: 2px solid var(--divider-color, rgba(0, 0, 0, 0.12));
    background: transparent;
    color: var(--primary-text-color);
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }

  .day-btn.active {
    background: var(--primary-color, #03a9f4);
    border-color: var(--primary-color, #03a9f4);
    color: var(--text-primary-color, #fff);
  }

  .day-btn:hover:not(.active) {
    border-color: var(--primary-color, #03a9f4);
  }

  .no-days-entity {
    text-align: center;
    font-size: 0.85rem;
    opacity: 0.5;
    margin: 8px 0;
    font-style: italic;
  }
`,vt=a`
  .snooze-overlay {
    position: absolute;
    inset: 0;
    background: var(--ha-card-background, var(--card-background-color, #111));
    color: var(--primary-text-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 20;
    animation: fadeIn 0.3s ease;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .snooze-alarm-name {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 8px;
    opacity: 0.8;
  }

  .snooze-time {
    font-size: 4rem;
    font-weight: 200;
    margin-bottom: 32px;
    font-variant-numeric: tabular-nums;
  }

  .snooze-buttons {
    display: flex;
    gap: 24px;
  }

  .snooze-btn,
  .dismiss-btn {
    padding: 14px 32px;
    border-radius: 28px;
    border: none;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.15s, opacity 0.2s;
  }

  .snooze-btn:active,
  .dismiss-btn:active {
    transform: scale(0.96);
  }

  .snooze-btn {
    background: var(--primary-color, #03a9f4);
    color: var(--text-primary-color, #fff);
  }

  .snooze-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .dismiss-btn {
    background: var(--secondary-background-color, rgba(255, 255, 255, 0.1));
    color: var(--primary-text-color);
  }

  .snooze-remaining {
    font-size: 0.8rem;
    opacity: 0.5;
    margin-top: 12px;
  }

  .snooze-ring-icon {
    font-size: 3rem;
    margin-bottom: 16px;
    animation: ring 0.5s ease infinite alternate;
  }

  @keyframes ring {
    from {
      transform: rotate(-15deg);
    }
    to {
      transform: rotate(15deg);
    }
  }
`,yt=a`
  :host {
    display: block;
  }

  .editor {
    padding: 16px;
  }

  .editor-section {
    margin-bottom: 16px;
    border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
    padding-bottom: 16px;
  }

  .editor-section:last-child {
    border-bottom: none;
  }

  .section-title {
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 12px;
    opacity: 0.7;
  }

  .editor-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
  }

  .editor-row label {
    font-size: 0.95rem;
  }

  .editor-row ha-entity-picker,
  .editor-row ha-select,
  .editor-row ha-textfield {
    width: 100%;
  }

  .editor-field {
    margin-bottom: 12px;
  }

  .editor-field ha-textfield,
  .editor-field ha-entity-picker,
  .editor-field ha-select,
  .editor-field ha-icon-picker {
    width: 100%;
    display: block;
  }

  .alarm-block {
    background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 8px;
  }

  .alarm-block-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-weight: 500;
  }

  .handle {
    cursor: grab;
    opacity: 0.5;
    display: flex;
    align-items: center;
  }

  .handle:hover {
    opacity: 1;
  }

  .handle ha-icon {
    --mdc-icon-size: 20px;
  }

  .remove-btn {
    margin-left: auto;
    background: none;
    border: none;
    color: var(--error-color, #db4437);
    cursor: pointer;
    font-size: 0.85rem;
    padding: 4px 8px;
    border-radius: 4px;
  }

  .remove-btn:hover {
    background: rgba(219, 68, 55, 0.1);
  }

  .add-btn {
    width: 100%;
    padding: 8px;
    border: 2px dashed var(--divider-color, rgba(0, 0, 0, 0.12));
    border-radius: 8px;
    background: transparent;
    color: var(--primary-text-color);
    cursor: pointer;
    font-size: 0.9rem;
    opacity: 0.6;
    transition: opacity 0.2s;
  }

  .add-btn:hover {
    opacity: 1;
  }

  .editor-hidden {
    display: none !important;
  }

  .color-row {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 0;
  }

  .color-row label {
    font-size: 0.95rem;
    min-width: 80px;
  }

  .color-row input[type='color'] {
    width: 40px;
    height: 32px;
    border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
    border-radius: 6px;
    padding: 2px;
    cursor: pointer;
    background: transparent;
  }

  .color-row input[type='text'] {
    flex: 1;
    padding: 6px 8px;
    border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
    border-radius: 6px;
    background: transparent;
    color: var(--primary-text-color);
    font-size: 0.85rem;
  }

  .action-details {
    margin-top: 8px;
    border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
    border-radius: 8px;
    overflow: hidden;
  }

  .action-details summary {
    padding: 8px 12px;
    cursor: pointer;
    font-size: 0.85rem;
    font-weight: 500;
    opacity: 0.7;
    background: var(--secondary-background-color, rgba(0, 0, 0, 0.03));
    user-select: none;
    -webkit-user-select: none;
  }

  .action-details summary:hover {
    opacity: 1;
  }

  .action-details-content {
    padding: 8px 12px 12px;
  }

  .action-group {
    margin-bottom: 12px;
  }

  .action-group:last-child {
    margin-bottom: 0;
  }

  .action-group-label {
    font-size: 0.8rem;
    font-weight: 500;
    opacity: 0.6;
    margin-bottom: 4px;
  }
`,bt=["mon","tue","wed","thu","fri","sat","sun"],$t={mon:"M",tue:"T",wed:"W",thu:"T",fri:"F",sat:"S",sun:"S"},wt={mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat",sun:"Sun"},xt=["sun","mon","tue","wed","thu","fri","sat"],At={action:"toggle"},kt={action:"none"},Ct={action:"more-info"},St={clock_style:"digital",mode:"panel",time_format:"12h",show_date:!0,show_day:!0,show_weather:!1,alarms:[],snooze:{duration:5,max_count:3},action_toggles:[],chips:[]};function zt(t,e,i){t.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:i}))}function Et(t,e){let i=t.getHours();const o=t.getMinutes().toString().padStart(2,"0");let s;return"12h"===e&&(s=i>=12?"PM":"AM",i=i%12||12),{hours:i.toString().padStart(2,"0"),minutes:o,period:s}}function Tt(t,e){if(!t.days_entity)return[];const i=e.states[t.days_entity];return i&&i.state&&"unknown"!==i.state?i.state.split(",").map(t=>t.trim().toLowerCase()).filter(t=>xt.includes(t)):[]}function Pt(t){const e=t.split(":").map(Number);return e.length<2||isNaN(e[0])||isNaN(e[1])?null:{hours:e[0],minutes:e[1]}}function Dt(t,e,i){const o=new Date,s=o.getDay(),n=60*o.getHours()+o.getMinutes(),a=60*t+e,r=i.length>0?i:[...xt];for(let t=0;t<=7;t++){const e=xt[(s+t)%7];if(!r.includes(e))continue;if(0===t&&a<=n)continue;const i=0===t?a-n:24*t*60-n+a;return{hours:Math.floor(i/60),minutes:i%60}}return null}function Mt(t,e){if(t>=24){return`in ${Math.floor(t/24)}d ${t%24}h`}return t>0?`in ${t}h ${e}m`:`in ${e}m`}let Ut=class extends rt{constructor(){super(...arguments),this.format="12h",this._time=new Date,this._colonVisible=!0}connectedCallback(){super.connectedCallback(),this._startTick()}disconnectedCallback(){super.disconnectedCallback(),this._stopTick()}_startTick(){this._tick(),this._interval=window.setInterval(()=>this._tick(),1e3)}_stopTick(){this._interval&&(clearInterval(this._interval),this._interval=void 0)}_tick(){this._time=new Date,this._colonVisible=!this._colonVisible}render(){const{hours:t,minutes:e,period:i}=Et(this._time,this.format);return B`
      <div class="digital-clock">
        <span class="time-digits">
          ${t}<span class="colon ${this._colonVisible?"":"colon-hidden"}">:</span>${e}
        </span>
        ${i?B`<span class="period">${i}</span>`:q}
      </div>
    `}};Ut.styles=gt,t([pt()],Ut.prototype,"format",void 0),t([ut()],Ut.prototype,"_time",void 0),t([ut()],Ut.prototype,"_colonVisible",void 0),Ut=t([ct("chrono-digital-clock")],Ut);let It=class extends rt{constructor(){super(...arguments),this.format="12h",this._time=new Date,this._digits="0000",this._prevDigits="0000",this._flipping=new Set,this._period=""}connectedCallback(){super.connectedCallback();const{hours:t,minutes:e,period:i}=Et(new Date,this.format);this._digits=`${t}${e}`,this._prevDigits=this._digits,this._period=i??"",this._startTick()}disconnectedCallback(){super.disconnectedCallback(),this._stopTick()}_startTick(){this._interval=window.setInterval(()=>this._tick(),1e3)}_stopTick(){this._interval&&clearInterval(this._interval),this._animTimeout&&clearTimeout(this._animTimeout)}_tick(){this._time=new Date;const{hours:t,minutes:e,period:i}=Et(this._time,this.format),o=`${t}${e}`;if(this._period=i??"",o===this._digits)return;const s=new Set;for(let t=0;t<o.length;t++)o[t]!==this._digits[t]&&s.add(t);this._prevDigits=this._digits,this._digits=o,this._flipping=s,this._animTimeout&&clearTimeout(this._animTimeout),this._animTimeout=window.setTimeout(()=>{this._flipping=new Set},650)}render(){const t=this._digits,e=this._prevDigits;return B`
      <div class="flip-clock">
        <div class="flip-group">
          ${this._period?B`<span class="flip-period">${this._period}</span>`:q}
          ${this._renderUnit(t[0],e[0],0)}
          ${this._renderUnit(t[1],e[1],1)}
        </div>
        <div class="flip-separator">
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        <div class="flip-group">
          ${this._renderUnit(t[2],e[2],2)}
          ${this._renderUnit(t[3],e[3],3)}
        </div>
      </div>
    `}_renderUnit(t,e,i){const o=this._flipping.has(i);return B`
      <div class="flip-unit">
        <!-- Static upper half: always shows NEW digit -->
        <div class="flip-face upper">
          <span class="digit-text">${t}</span>
        </div>
        <!-- Static lower half: shows OLD digit while flipping, then NEW -->
        <div class="flip-face lower">
          <span class="digit-text">${o?e:t}</span>
        </div>

        ${o?B`
              <!-- Fold-down: old digit top half folds away -->
              <div class="fold fold-upper">
                <span class="digit-text">${e}</span>
              </div>
              <!-- Fold-up: new digit bottom half folds into place -->
              <div class="fold fold-lower">
                <span class="digit-text">${t}</span>
              </div>
            `:q}
      </div>
    `}};It.styles=_t,t([pt()],It.prototype,"format",void 0),t([ut()],It.prototype,"_time",void 0),t([ut()],It.prototype,"_digits",void 0),t([ut()],It.prototype,"_prevDigits",void 0),t([ut()],It.prototype,"_flipping",void 0),t([ut()],It.prototype,"_period",void 0),It=t([ct("chrono-flip-clock")],It);let Nt=class extends rt{constructor(){super(...arguments),this.alarmIndex=0,this._hours=0,this._minutes=0,this._days=new Set,this._initialised=!1}willUpdate(){!this._initialised&&this.hass&&this.alarm&&(this._loadFromEntity(),this._initialised=!0)}_loadFromEntity(){const t=this.hass.states[this.alarm.time_entity];if(t){const e=Pt(t.state);e&&(this._hours=e.hours,this._minutes=e.minutes)}const e=Tt(this.alarm,this.hass);this._days=new Set(e)}_adjustHours(t){this._hours=(this._hours+t+24)%24}_adjustMinutes(t){this._minutes=(this._minutes+t+60)%60}_toggleDay(t){const e=new Set(this._days);e.has(t)?e.delete(t):e.add(t),this._days=e}async _save(){const t=`${this._hours.toString().padStart(2,"0")}:${this._minutes.toString().padStart(2,"0")}:00`;try{if(await this.hass.callService("input_datetime","set_datetime",{entity_id:this.alarm.time_entity,time:t}),this.alarm.days_entity){const t=bt.filter(t=>this._days.has(t)).join(",");await this.hass.callService("input_text","set_value",{entity_id:this.alarm.days_entity,value:t})}}catch(t){console.error("Chrono Alarm Card: failed to save alarm",t)}this._close()}_close(){this._initialised=!1,zt(this,"alarm-dialog-close")}render(){const t=this._hours.toString().padStart(2,"0"),e=this._minutes.toString().padStart(2,"0"),i=this.alarm?.name||`Alarm ${this.alarmIndex+1}`;return B`
      <div class="overlay" @click=${this._close}>
        <div class="dialog-card" @click=${t=>t.stopPropagation()}>
          <div class="dialog-title">${i}</div>

          <!-- Time picker -->
          <div class="time-picker">
            <div class="time-col">
              <button @click=${()=>this._adjustHours(1)}>&#9650;</button>
              <span class="time-value">${t}</span>
              <button @click=${()=>this._adjustHours(-1)}>&#9660;</button>
            </div>
            <span class="time-colon">:</span>
            <div class="time-col">
              <button @click=${()=>this._adjustMinutes(1)}>&#9650;</button>
              <span class="time-value">${e}</span>
              <button @click=${()=>this._adjustMinutes(-1)}>&#9660;</button>
            </div>
          </div>

          <!-- Day picker -->
          ${this.alarm?.days_entity?B`
                <div class="days-picker">
                  ${bt.map(t=>B`
                      <button
                        class="day-btn ${this._days.has(t)?"active":""}"
                        title="${wt[t]}"
                        @click=${()=>this._toggleDay(t)}
                      >
                        ${$t[t]}
                      </button>
                    `)}
                </div>
              `:B`<p class="no-days-entity">
                Add a days_entity to enable day-of-week editing
              </p>`}

          <!-- Actions -->
          <div class="dialog-actions">
            <button class="btn-cancel" @click=${this._close}>Cancel</button>
            <button class="btn-save" @click=${this._save}>Save</button>
          </div>
        </div>
      </div>
    `}};Nt.styles=[mt,ft],t([pt({attribute:!1})],Nt.prototype,"hass",void 0),t([pt({attribute:!1})],Nt.prototype,"alarm",void 0),t([pt({type:Number})],Nt.prototype,"alarmIndex",void 0),t([ut()],Nt.prototype,"_hours",void 0),t([ut()],Nt.prototype,"_minutes",void 0),t([ut()],Nt.prototype,"_days",void 0),t([ut()],Nt.prototype,"_initialised",void 0),Nt=t([ct("chrono-alarm-dialog")],Nt);let Ot=class extends rt{constructor(){super(...arguments),this.snoozeCount=0,this.maxSnoozes=3,this.timeFormat="12h",this._time=new Date}connectedCallback(){super.connectedCallback(),this._interval=window.setInterval(()=>{this._time=new Date},1e3)}disconnectedCallback(){super.disconnectedCallback(),this._interval&&clearInterval(this._interval)}_snooze(){zt(this,"alarm-snooze")}_dismiss(){zt(this,"alarm-dismiss")}render(){const{hours:t,minutes:e,period:i}=Et(this._time,this.timeFormat),o=i?`${t}:${e} ${i}`:`${t}:${e}`,s=this.alarm?.name||"Alarm",n=this.maxSnoozes-this.snoozeCount,a=n>0;return B`
      <div class="snooze-overlay">
        <div class="snooze-ring-icon">&#128276;</div>
        <div class="snooze-alarm-name">${s}</div>
        <div class="snooze-time">${o}</div>
        <div class="snooze-buttons">
          <button
            class="snooze-btn"
            ?disabled=${!a}
            @click=${this._snooze}
          >
            Snooze
          </button>
          <button class="dismiss-btn" @click=${this._dismiss}>Dismiss</button>
        </div>
        ${a?B`<div class="snooze-remaining">
              ${n} snooze${n>1?"s":""} remaining
            </div>`:B`<div class="snooze-remaining">No snoozes remaining</div>`}
      </div>
    `}};Ot.styles=vt,t([pt({attribute:!1})],Ot.prototype,"alarm",void 0),t([pt({type:Number})],Ot.prototype,"snoozeCount",void 0),t([pt({type:Number})],Ot.prototype,"maxSnoozes",void 0),t([pt()],Ot.prototype,"timeFormat",void 0),t([ut()],Ot.prototype,"_time",void 0),Ot=t([ct("chrono-snooze-dialog")],Ot);const Ht=2;let Rt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const{I:jt}=st,Lt=t=>t,Wt=()=>document.createComment(""),Bt=(t,e,i)=>{const o=t._$AA.parentNode,s=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=o.insertBefore(Wt(),s),n=o.insertBefore(Wt(),s);i=new jt(e,n,t,t.options)}else{const e=i._$AB.nextSibling,n=i._$AM,a=n!==t;if(a){let e;i._$AQ?.(t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==n._$AU&&i._$AP(e)}if(e!==s||a){let t=i._$AA;for(;t!==e;){const e=Lt(t).nextSibling;Lt(o).insertBefore(t,s),t=e}}}return i},Ft=(t,e,i=t)=>(t._$AI(e,i),t),qt={},Vt=(t,e=qt)=>t._$AH=e,Xt=t=>{t._$AR(),t._$AA.remove()},Yt=(t,e,i)=>{const o=new Map;for(let s=e;s<=i;s++)o.set(t[s],s);return o},Jt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends Rt{constructor(t){if(super(t),t.type!==Ht)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let o;void 0===i?i=e:void 0!==e&&(o=e);const s=[],n=[];let a=0;for(const e of t)s[a]=o?o(e,a):a,n[a]=i(e,a),a++;return{values:n,keys:s}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,o]){const s=(t=>t._$AH)(t),{values:n,keys:a}=this.dt(e,i,o);if(!Array.isArray(s))return this.ut=a,n;const r=this.ut??=[],l=[];let c,h,d=0,p=s.length-1,u=0,m=n.length-1;for(;d<=p&&u<=m;)if(null===s[d])d++;else if(null===s[p])p--;else if(r[d]===a[u])l[u]=Ft(s[d],n[u]),d++,u++;else if(r[p]===a[m])l[m]=Ft(s[p],n[m]),p--,m--;else if(r[d]===a[m])l[m]=Ft(s[d],n[m]),Bt(t,l[m+1],s[d]),d++,m--;else if(r[p]===a[u])l[u]=Ft(s[p],n[u]),Bt(t,s[d],s[p]),p--,u++;else if(void 0===c&&(c=Yt(a,u,m),h=Yt(r,d,p)),c.has(r[d]))if(c.has(r[p])){const e=h.get(a[u]),i=void 0!==e?s[e]:null;if(null===i){const e=Bt(t,s[d]);Ft(e,n[u]),l[u]=e}else l[u]=Ft(i,n[u]),Bt(t,s[d],i),s[e]=null;u++}else Xt(s[p]),p--;else Xt(s[d]),d++;for(;u<=m;){const e=Bt(t,l[m+1]);Ft(e,n[u]),l[u++]=e}for(;d<=p;){const t=s[d++];null!==t&&Xt(t)}return this.ut=a,Vt(t,l),F}});let Gt=class extends rt{setConfig(t){this._config={...St,...t}}connectedCallback(){super.connectedCallback(),this._loadComponents()}async _loadComponents(){const t=await(window.loadCardHelpers?.());if(t){const e=await t.createCardElement({type:"entity",entity:"sun.sun"});e&&(e.hass=this.hass)}}_dispatch(){zt(this,"config-changed",{config:{...this._config}})}_valueChanged(t,e){this._config[t]=e,this._config={...this._config},this._dispatch()}_snoozeChanged(t,e){this._config={...this._config,snooze:{...this._config.snooze,[t]:e}},this._dispatch()}_alarmChanged(t,e,i){const o=[...this._config.alarms??[]];o[t]={...o[t],[e]:i},this._config={...this._config,alarms:o},this._dispatch()}_addAlarm(){const t=[...this._config.alarms??[]];t.length>=5||(t.push({time_entity:"",enabled_entity:""}),this._config={...this._config,alarms:t},this._dispatch())}_removeAlarm(t){const e=[...this._config.alarms??[]];e.splice(t,1),this._config={...this._config,alarms:e},this._dispatch()}_toggleChanged(t,e,i){const o=[...this._config.action_toggles??[]];o[t]={...o[t],[e]:i},this._config={...this._config,action_toggles:o},this._dispatch()}_addToggle(){const t=[...this._config.action_toggles??[]];t.push({entity:"",show:!0}),this._config={...this._config,action_toggles:t},this._dispatch()}_removeToggle(t){const e=[...this._config.action_toggles??[]];e.splice(t,1),this._config={...this._config,action_toggles:e},this._dispatch()}_chipChanged(t,e,i){const o=[...this._config.chips??[]];o[t]={...o[t],[e]:i},this._config={...this._config,chips:o},this._dispatch()}_addChip(){const t=[...this._config.chips??[]];t.push({entity:"",show_icon:!0,show_name:!1,show_state:!0}),this._config={...this._config,chips:t},this._dispatch()}_removeChip(t){const e=[...this._config.chips??[]];e.splice(t,1),this._config={...this._config,chips:e},this._dispatch()}_chipMoved(t){const{oldIndex:e,newIndex:i}=t.detail,o=[...this._config.chips??[]],[s]=o.splice(e,1);o.splice(i,0,s),this._config={...this._config,chips:o},this._dispatch()}_chipActionChanged(t,e,i,o){const s=[...this._config.chips??[]],n={...s[t]},a={tap_action:At,double_tap_action:kt,hold_action:Ct},r={...n[e]??a[e]};"action"===i?(r.action=o,delete r.service,delete r.service_data,delete r.navigation_path,delete r.url_path):r[i]=o,n[e]=r,s[t]=n,this._config={...this._config,chips:s},this._dispatch()}_renderActionEditor(t,e,i,o){const s=(this._config.chips??[])[t];if(!s)return q;const n=s[e]??o;return B`
      <div class="action-group">
        <div class="action-group-label">${i}</div>
        <div class="editor-field">
          <ha-select
            label="Action"
            .value=${n.action}
            @selected=${i=>this._chipActionChanged(t,e,"action",i.target.value)}
            @closed=${t=>t.stopPropagation()}
            fixedMenuPosition
            naturalMenuWidth
          >
            <mwc-list-item value="none">None</mwc-list-item>
            <mwc-list-item value="toggle">Toggle</mwc-list-item>
            <mwc-list-item value="more-info">More info</mwc-list-item>
            <mwc-list-item value="call-service">Call service</mwc-list-item>
            <mwc-list-item value="navigate">Navigate</mwc-list-item>
            <mwc-list-item value="url">URL</mwc-list-item>
          </ha-select>
        </div>

        ${"call-service"===n.action?B`
              <div class="editor-field">
                <ha-textfield
                  label="Service (e.g. light.toggle)"
                  .value=${n.service??""}
                  @input=${i=>this._chipActionChanged(t,e,"service",i.target.value)}
                ></ha-textfield>
              </div>
              <div class="editor-field">
                <ha-textfield
                  label="Service data (JSON, optional)"
                  .value=${n.service_data?JSON.stringify(n.service_data):""}
                  @input=${i=>{const o=i.target.value;try{const i=o?JSON.parse(o):void 0;this._chipActionChanged(t,e,"service_data",i)}catch{}}}
                ></ha-textfield>
              </div>
            `:q}

        ${"navigate"===n.action?B`
              <div class="editor-field">
                <ha-textfield
                  label="Navigation path (e.g. /lovelace/0)"
                  .value=${n.navigation_path??""}
                  @input=${i=>this._chipActionChanged(t,e,"navigation_path",i.target.value)}
                ></ha-textfield>
              </div>
            `:q}

        ${"url"===n.action?B`
              <div class="editor-field">
                <ha-textfield
                  label="URL"
                  .value=${n.url_path??""}
                  @input=${i=>this._chipActionChanged(t,e,"url_path",i.target.value)}
                ></ha-textfield>
              </div>
            `:q}
      </div>
    `}render(){return this.hass&&this._config?B`
      <div class="editor">
        ${this._renderGeneral()}
        ${this._renderChips()}
        ${this._renderAlarms()}
        ${this._renderSnooze()}
        ${this._renderToggles()}
      </div>
    `:q}_renderChips(){const t=this._config.chips??[];return B`
      <div class="editor-section">
        <div class="section-title">Chips</div>

        <ha-sortable
          handle-selector=".handle"
          @item-moved=${this._chipMoved}
        >
          <div>
            ${Jt(t,(t,e)=>e,(t,e)=>B`
            <div class="alarm-block">
              <div class="alarm-block-header">
                <div class="handle">
                  <ha-icon icon="mdi:drag"></ha-icon>
                </div>
                <span>Chip ${e+1}</span>
                <button class="remove-btn" @click=${()=>this._removeChip(e)}>
                  Remove
                </button>
              </div>

              <div class="editor-field">
                <ha-entity-picker
                  .hass=${this.hass}
                  .value=${t.entity??""}
                  label="Entity"
                  allow-custom-entity
                  @value-changed=${t=>this._chipChanged(e,"entity",t.detail.value)}
                ></ha-entity-picker>
              </div>

              <div class="editor-field">
                <ha-icon-picker
                  .hass=${this.hass}
                  .value=${t.icon??""}
                  label="Icon (optional, defaults to entity icon)"
                  @value-changed=${t=>this._chipChanged(e,"icon",t.detail.value)}
                ></ha-icon-picker>
              </div>

              <div class="editor-field">
                <ha-textfield
                  label="Custom name (optional)"
                  .value=${t.name??""}
                  @input=${t=>this._chipChanged(e,"name",t.target.value)}
                ></ha-textfield>
              </div>

              <div class="editor-row">
                <label>Show icon</label>
                <ha-switch
                  .checked=${!1!==t.show_icon}
                  @change=${t=>this._chipChanged(e,"show_icon",t.target.checked)}
                ></ha-switch>
              </div>

              <div class="editor-row">
                <label>Show name</label>
                <ha-switch
                  .checked=${!1!==t.show_name}
                  @change=${t=>this._chipChanged(e,"show_name",t.target.checked)}
                ></ha-switch>
              </div>

              <div class="editor-row">
                <label>Show state</label>
                <ha-switch
                  .checked=${!1!==t.show_state}
                  @change=${t=>this._chipChanged(e,"show_state",t.target.checked)}
                ></ha-switch>
              </div>

              <div class="color-row">
                <label>Color on</label>
                <input
                  type="color"
                  .value=${t.color_on??"#4caf50"}
                  @input=${t=>this._chipChanged(e,"color_on",t.target.value)}
                />
                <input
                  type="text"
                  .value=${t.color_on??""}
                  placeholder="#4caf50 or empty for default"
                  @input=${t=>this._chipChanged(e,"color_on",t.target.value)}
                />
              </div>

              <div class="color-row">
                <label>Color off</label>
                <input
                  type="color"
                  .value=${t.color_off??"#9e9e9e"}
                  @input=${t=>this._chipChanged(e,"color_off",t.target.value)}
                />
                <input
                  type="text"
                  .value=${t.color_off??""}
                  placeholder="#9e9e9e or empty for default"
                  @input=${t=>this._chipChanged(e,"color_off",t.target.value)}
                />
              </div>

              <details class="action-details">
                <summary>Actions</summary>
                <div class="action-details-content">
                  ${this._renderActionEditor(e,"tap_action","Tap action",At)}
                  ${this._renderActionEditor(e,"double_tap_action","Double-tap action",kt)}
                  ${this._renderActionEditor(e,"hold_action","Hold action",Ct)}
                </div>
              </details>
            </div>
            `)}
          </div>
        </ha-sortable>

        <button class="add-btn" @click=${this._addChip}>+ Add Chip</button>
      </div>
    `}_renderGeneral(){const t=this._config;return B`
      <div class="editor-section">
        <div class="section-title">General</div>

        <div class="editor-field">
          <ha-select
            label="Clock Style"
            .value=${t.clock_style??"digital"}
            @selected=${t=>this._valueChanged("clock_style",t.target.value)}
            @closed=${t=>t.stopPropagation()}
            fixedMenuPosition
            naturalMenuWidth
          >
            <mwc-list-item value="digital">Digital</mwc-list-item>
            <mwc-list-item value="flip">Flip Clock</mwc-list-item>
          </ha-select>
        </div>

        <div class="editor-field">
          <ha-select
            label="Time Format"
            .value=${t.time_format??"12h"}
            @selected=${t=>this._valueChanged("time_format",t.target.value)}
            @closed=${t=>t.stopPropagation()}
            fixedMenuPosition
            naturalMenuWidth
          >
            <mwc-list-item value="12h">12 Hour</mwc-list-item>
            <mwc-list-item value="24h">24 Hour</mwc-list-item>
          </ha-select>
        </div>

        <div class="editor-row">
          <label>Show date</label>
          <ha-switch
            .checked=${!1!==t.show_date}
            @change=${t=>this._valueChanged("show_date",t.target.checked)}
          ></ha-switch>
        </div>

        <div class="editor-row">
          <label>Show day of week</label>
          <ha-switch
            .checked=${!1!==t.show_day}
            @change=${t=>this._valueChanged("show_day",t.target.checked)}
          ></ha-switch>
        </div>

        <div class="editor-row">
          <label>Show weather</label>
          <ha-switch
            .checked=${!0===t.show_weather}
            @change=${t=>this._valueChanged("show_weather",t.target.checked)}
          ></ha-switch>
        </div>

        <div class="editor-field ${t.show_weather?"":"editor-hidden"}">
          <ha-entity-picker
            .hass=${this.hass}
            .value=${t.weather_entity??""}
            .includeDomains=${["weather"]}
            label="Weather entity"
            allow-custom-entity
            @value-changed=${t=>this._valueChanged("weather_entity",t.detail.value)}
          ></ha-entity-picker>
        </div>
      </div>
    `}_renderAlarms(){const t=this._config.alarms??[],e=t.length<5;return B`
      <div class="editor-section">
        <div class="section-title">Alarms (${t.length}/${5})</div>

        ${t.map((t,e)=>B`
            <div class="alarm-block">
              <div class="alarm-block-header">
                <span>Alarm ${e+1}</span>
                <button class="remove-btn" @click=${()=>this._removeAlarm(e)}>
                  Remove
                </button>
              </div>

              <div class="editor-field">
                <ha-entity-picker
                  .hass=${this.hass}
                  .value=${t.time_entity??""}
                  .includeDomains=${["input_datetime"]}
                  label="Time entity"
                  allow-custom-entity
                  @value-changed=${t=>this._alarmChanged(e,"time_entity",t.detail.value)}
                ></ha-entity-picker>
              </div>

              <div class="editor-field">
                <ha-entity-picker
                  .hass=${this.hass}
                  .value=${t.enabled_entity??""}
                  .includeDomains=${["input_boolean"]}
                  label="Enabled entity"
                  allow-custom-entity
                  @value-changed=${t=>this._alarmChanged(e,"enabled_entity",t.detail.value)}
                ></ha-entity-picker>
              </div>

              <div class="editor-field">
                <ha-entity-picker
                  .hass=${this.hass}
                  .value=${t.days_entity??""}
                  .includeDomains=${["input_text"]}
                  label="Days entity (optional)"
                  allow-custom-entity
                  @value-changed=${t=>this._alarmChanged(e,"days_entity",t.detail.value)}
                ></ha-entity-picker>
              </div>

              <div class="editor-field">
                <ha-textfield
                  label="Display name (optional)"
                  .value=${t.name??""}
                  @input=${t=>this._alarmChanged(e,"name",t.target.value)}
                ></ha-textfield>
              </div>
            </div>
          `)}

        ${e?B`<button class="add-btn" @click=${this._addAlarm}>
              + Add Alarm
            </button>`:q}
      </div>
    `}_renderSnooze(){const t=this._config.snooze??St.snooze;return B`
      <div class="editor-section">
        <div class="section-title">Snooze</div>

        <div class="editor-field">
          <ha-textfield
            label="Snooze duration (minutes)"
            type="number"
            min="1"
            max="60"
            .value=${String(t.duration)}
            @input=${t=>this._snoozeChanged("duration",Number(t.target.value)||5)}
          ></ha-textfield>
        </div>

        <div class="editor-field">
          <ha-textfield
            label="Max snoozes"
            type="number"
            min="0"
            max="20"
            .value=${String(t.max_count)}
            @input=${t=>this._snoozeChanged("max_count",Number(t.target.value)||3)}
          ></ha-textfield>
        </div>
      </div>
    `}_renderToggles(){const t=this._config.action_toggles??[];return B`
      <div class="editor-section">
        <div class="section-title">Action Toggles</div>

        ${t.map((t,e)=>B`
            <div class="alarm-block">
              <div class="alarm-block-header">
                <span>Toggle ${e+1}</span>
                <button class="remove-btn" @click=${()=>this._removeToggle(e)}>
                  Remove
                </button>
              </div>

              <div class="editor-field">
                <ha-entity-picker
                  .hass=${this.hass}
                  .value=${t.entity??""}
                  .includeDomains=${["input_boolean"]}
                  label="Entity"
                  allow-custom-entity
                  @value-changed=${t=>this._toggleChanged(e,"entity",t.detail.value)}
                ></ha-entity-picker>
              </div>

              <div class="editor-field">
                <ha-textfield
                  label="Custom name (optional)"
                  .value=${t.name??""}
                  @input=${t=>this._toggleChanged(e,"name",t.target.value)}
                ></ha-textfield>
              </div>

              <div class="editor-field">
                <ha-icon-picker
                  .hass=${this.hass}
                  .value=${t.icon??""}
                  label="Icon (optional)"
                  @value-changed=${t=>this._toggleChanged(e,"icon",t.detail.value)}
                ></ha-icon-picker>
              </div>

              <div class="editor-row">
                <label>Show name</label>
                <ha-switch
                  .checked=${!1!==t.show_name}
                  @change=${t=>this._toggleChanged(e,"show_name",t.target.checked)}
                ></ha-switch>
              </div>

              <div class="editor-row">
                <label>Show icon</label>
                <ha-switch
                  .checked=${!1!==t.show_icon}
                  @change=${t=>this._toggleChanged(e,"show_icon",t.target.checked)}
                ></ha-switch>
              </div>

              <div class="editor-row">
                <label>Visible</label>
                <ha-switch
                  .checked=${!1!==t.show}
                  @change=${t=>this._toggleChanged(e,"show",t.target.checked)}
                ></ha-switch>
              </div>
            </div>
          `)}

        <button class="add-btn" @click=${this._addToggle}>+ Add Toggle</button>
      </div>
    `}};Gt.styles=yt,t([pt({attribute:!1})],Gt.prototype,"hass",void 0),t([ut()],Gt.prototype,"_config",void 0),Gt=t([ct("chrono-alarm-card-editor")],Gt);const Kt={"clear-night":"mdi:weather-night",cloudy:"mdi:weather-cloudy",fog:"mdi:weather-fog",hail:"mdi:weather-hail",lightning:"mdi:weather-lightning","lightning-rainy":"mdi:weather-lightning-rainy",partlycloudy:"mdi:weather-partly-cloudy",pouring:"mdi:weather-pouring",rainy:"mdi:weather-rainy",snowy:"mdi:weather-snowy","snowy-rainy":"mdi:weather-snowy-rainy",sunny:"mdi:weather-sunny",windy:"mdi:weather-windy","windy-variant":"mdi:weather-windy-variant",exceptional:"mdi:alert-circle-outline"};let Zt=class extends rt{constructor(){super(...arguments),this._showAlarmDialog=!1,this._editingAlarmIndex=-1,this._showSnoozeDialog=!1,this._activeAlarmIndex=-1,this._snoozeCount=0,this._showAlarmsPanel=!1,this._firedAlarms=new Set,this._lastCheckedMinute=-1,this._tapCount=0,this._held=!1,this._touchStartX=0,this._touchStartY=0}static getConfigElement(){return document.createElement("chrono-alarm-card-editor")}static getStubConfig(){return{...St}}setConfig(t){if(!t)throw new Error("No configuration provided");this._config={...St,...t,snooze:{...St.snooze,...t.snooze??{}}}}getCardSize(){return"panel"===this._config?.mode?12:4}connectedCallback(){super.connectedCallback(),this._alarmCheckInterval=window.setInterval(()=>this._checkAlarms(),1e3),this._resizeObserver=new ResizeObserver(()=>this._fitClock())}disconnectedCallback(){super.disconnectedCallback(),this._alarmCheckInterval&&clearInterval(this._alarmCheckInterval),this._snoozeTimeout&&clearTimeout(this._snoozeTimeout),this._holdTimer&&clearTimeout(this._holdTimer),this._tapTimer&&clearTimeout(this._tapTimer),this._resizeObserver?.disconnect()}firstUpdated(){const t=this.renderRoot.querySelector(".chrono-card");t&&this._resizeObserver?.observe(t),this._fitClock()}updated(){this._fitClock()}_fitClock(){if("panel"!==this._config?.mode)return;const t=this.renderRoot.querySelector(".chrono-card");if(!t)return;const e=this.renderRoot.querySelector(".top-bar"),i=this.renderRoot.querySelector(".info-section"),o=t.clientHeight,s=t.clientWidth,n=o-(e?.offsetHeight??0)-(i?.offsetHeight??0)-16,a=s-32;if("flip"===(this._config.clock_style??"digital")){const e=n,i=(a-24)/2.68,o=Math.floor(Math.min(e,i)),s=Math.floor(.67*o),r=Math.floor(.8*o);t.style.setProperty("--chrono-flip-height",`${o}px`),t.style.setProperty("--chrono-flip-width",`${s}px`),t.style.setProperty("--chrono-flip-font-size",`${r}px`)}else{const e=n,i=a/2.5,o=Math.floor(Math.min(e,i));t.style.setProperty("--chrono-clock-size",`${o}px`)}}_checkAlarms(){if(!this.hass||!this._config?.alarms?.length)return;if(this._showSnoozeDialog)return;const t=new Date,e=60*t.getHours()+t.getMinutes();e!==this._lastCheckedMinute&&(this._firedAlarms.clear(),this._lastCheckedMinute=e);const i=xt[(new Date).getDay()];for(let t=0;t<this._config.alarms.length;t++){if(this._firedAlarms.has(t))continue;const o=this._config.alarms[t],s=this.hass.states[o.enabled_entity];if(!s||"on"!==s.state)continue;const n=this.hass.states[o.time_entity];if(!n)continue;const a=Pt(n.state);if(!a)continue;if(60*a.hours+a.minutes!==e)continue;const r=Tt(o,this.hass);if(!(r.length>0)||r.includes(i)){this._firedAlarms.add(t),this._activeAlarmIndex=t,this._snoozeCount=0,this._showSnoozeDialog=!0;break}}}_openAlarmDialog(t){this._showAlarmsPanel=!1,this._editingAlarmIndex=t,this._showAlarmDialog=!0}_closeAlarmDialog(){this._showAlarmDialog=!1,this._editingAlarmIndex=-1}_handleSnooze(){this._showSnoozeDialog=!1,this._snoozeCount++;const t=60*(this._config.snooze?.duration??5)*1e3;this._snoozeTimeout=window.setTimeout(()=>{this._showSnoozeDialog=!0},t)}_handleDismiss(){this._showSnoozeDialog=!1,this._activeAlarmIndex=-1,this._snoozeTimeout&&clearTimeout(this._snoozeTimeout)}_toggleAlarmEnabled(t,e){e.stopPropagation();const i=this.hass.states[t.enabled_entity];if(!i)return;const o="on"===i.state?"turn_off":"turn_on";this.hass.callService("input_boolean",o,{entity_id:t.enabled_entity})}_toggleAction(t){this.hass.states[t]&&this.hass.callService("homeassistant","toggle",{},{entity_id:t})}_chipPointerDown(t,e){if(this._held=!1,e instanceof TouchEvent){const t=e.touches[0];this._touchStartX=t.clientX,this._touchStartY=t.clientY}this._holdTimer=window.setTimeout(()=>{this._held=!0},500)}_chipTouchMove(t){if(!this._holdTimer)return;const e=t.touches[0],i=e.clientX-this._touchStartX,o=e.clientY-this._touchStartY;Math.sqrt(i*i+o*o)>10&&(clearTimeout(this._holdTimer),this._holdTimer=void 0)}_chipPointerUp(t,e){this._holdTimer&&(clearTimeout(this._holdTimer),this._holdTimer=void 0);const i=t.entity;if(this._held){this._held=!1;const e=t.hold_action??Ct;return void this._executeAction(e,i)}const o=t.double_tap_action??kt;if("none"===o.action){const e=t.tap_action??At;return void this._executeAction(e,i)}this._tapCount++,1===this._tapCount?this._tapTimer=window.setTimeout(()=>{const e=t.tap_action??At;this._executeAction(e,i),this._tapCount=0},250):(clearTimeout(this._tapTimer),this._tapTimer=void 0,this._tapCount=0,this._executeAction(o,i))}_executeAction(t,e){switch(t.action){case"none":break;case"toggle":this._toggleAction(e);break;case"more-info":zt(this,"hass-more-info",{entityId:e});break;case"call-service":{if(!t.service)break;const[i,o]=t.service.split(".",2);if(!i||!o)break;this.hass.callService(i,o,t.service_data??{},{entity_id:e});break}case"navigate":t.navigation_path&&(history.pushState(null,"",t.navigation_path),window.dispatchEvent(new Event("location-changed")));break;case"url":t.url_path&&window.open(t.url_path,"_blank")}}render(){if(!this._config||!this.hass)return B`<ha-card>
        <div class="error-state">Card not configured</div>
      </ha-card>`;const t=this._config.mode??"panel";return B`
      <ha-card>
        <div class="chrono-card ${t}">
          <div class="clock-group">
            ${this._renderTopBar()}
            ${this._renderClock()}
            ${this._renderInfo()}
          </div>
          ${this._renderToggles()}
          ${this._renderAlarmsPanel()}
          ${this._renderAlarmDialog()}
          ${this._renderSnoozeDialog()}
        </div>
      </ha-card>
    `}_getNextAlarmCountdown(){const t=this._config.alarms;if(!t?.length)return"";let e=null;for(const i of t){const t=this.hass.states[i.enabled_entity];if(!t||"on"!==t.state)continue;const o=this.hass.states[i.time_entity];if(!o)continue;const s=Pt(o.state);if(!s)continue;const n=Tt(i,this.hass),a=Dt(s.hours,s.minutes,n);if(!a)continue;const r=60*a.hours+a.minutes;(!e||r<60*e.hours+e.minutes)&&(e=a)}return e?Mt(e.hours,e.minutes):""}_toggleAlarmsPanel(){this._showAlarmsPanel=!this._showAlarmsPanel}_renderTopBar(){const t=this._config.alarms,e=t&&t.length>0,i=e?this._getNextAlarmCountdown():"";return B`
      <div class="top-bar">
        <div class="top-bar-left">
          ${e?B`
                <button class="alarm-menu-btn" @click=${this._toggleAlarmsPanel}>
                  <ha-icon icon="mdi:alarm"></ha-icon>
                  ${i?B`<span class="next-alarm-badge">${i}</span>`:q}
                </button>
              `:q}
        </div>
        <div class="top-bar-right">
          ${this._renderChips()}
        </div>
      </div>
    `}_renderChips(){const t=this._config.chips;return t?.length?B`
      <div class="chips-section">
        ${t.map(t=>{const e=this.hass.states[t.entity];if(!e)return q;const i=e.attributes.friendly_name??t.entity,o=t.icon??e.attributes.icon??"",s=t.name??i,n=!1!==t.show_icon,a=!1!==t.show_name,r=!1!==t.show_state,l="on"===e.state?t.color_on||"":t.color_off||"";return B`
            <div
              class="chip"
              style=${l?`background: ${l}; color: #fff;`:""}
              @mousedown=${e=>this._chipPointerDown(t,e)}
              @mouseup=${e=>this._chipPointerUp(t,e)}
              @touchstart=${e=>this._chipPointerDown(t,e)}
              @touchend=${e=>{e.preventDefault(),this._chipPointerUp(t,e)}}
              @touchmove=${t=>this._chipTouchMove(t)}
              @contextmenu=${t=>t.preventDefault()}
            >
              ${n&&o?B`<ha-icon icon=${o}></ha-icon>`:q}
              ${a?B`<span class="chip-name">${s}</span>`:q}
              ${r?B`<span class="chip-state">${e.state}</span>`:q}
            </div>
          `})}
      </div>
    `:q}_renderClock(){const t=this._config.clock_style??"digital",e=this._config.time_format??"12h";return"flip"===t?B`
        <div class="clock-section">
          <chrono-flip-clock .format=${e}></chrono-flip-clock>
        </div>
      `:B`
      <div class="clock-section">
        <chrono-digital-clock .format=${e}></chrono-digital-clock>
      </div>
    `}_renderInfo(){const t=this._config,e=new Date,i=[];if(t.show_day){const t=e.toLocaleDateString(void 0,{weekday:"long"});i.push(B`<span class="day-name">${t}</span>`)}if(t.show_date){i.length&&i.push(B`<span class="separator"></span>`);const t=e.toLocaleDateString(void 0,{month:"long",day:"numeric",year:"numeric"});i.push(B`<span class="date-text">${t}</span>`)}if(t.show_weather&&t.weather_entity){const e=this.hass.states[t.weather_entity];if(e){i.length&&i.push(B`<span class="separator"></span>`);const t=e.attributes.temperature??"",o=e.attributes.temperature_unit??"",s=e.state??"",n=Kt[s]??"mdi:weather-cloudy";i.push(B`
          <span class="weather-info">
            <ha-icon icon=${n}></ha-icon>
            ${t}${o}
          </span>
        `)}}return i.length?B`<div class="info-section">${i}</div>`:q}_renderAlarmsPanel(){if(!this._showAlarmsPanel)return q;const t=this._config.alarms;if(!t?.length)return q;const e=this._config.time_format??"12h";return B`
      <div class="overlay" @click=${this._toggleAlarmsPanel}>
        <div class="dialog-card alarms-panel" @click=${t=>t.stopPropagation()}>
          <div class="dialog-title">Alarms</div>
          <div class="alarms-list">
            ${t.map((t,i)=>{const o=this.hass.states[t.time_entity],s=this.hass.states[t.enabled_entity],n="on"===s?.state,a=o?function(t,e){const i=Pt(t);if(!i)return"--:--";let{hours:o}=i;const s=i.minutes.toString().padStart(2,"0");if("12h"===e){const t=o>=12?"PM":"AM";return o=o%12||12,`${o}:${s} ${t}`}return`${o.toString().padStart(2,"0")}:${s}`}(o.state,e):"--:--",r=Tt(t,this.hass),l=function(t){if(0===t.length)return"Every day";if(7===t.length)return"Every day";if(5===t.length&&["mon","tue","wed","thu","fri"].every(e=>t.includes(e)))return"Weekdays";if(2===t.length&&["sat","sun"].every(e=>t.includes(e)))return"Weekends";const e={mon:"Mo",tue:"Tu",wed:"We",thu:"Th",fri:"Fr",sat:"Sa",sun:"Su"};return t.map(t=>e[t]).join(", ")}(r),c=t.name||`Alarm ${i+1}`;let h="";if(n&&o){const t=Pt(o.state);if(t){const e=Dt(t.hours,t.minutes,r);e&&(h=Mt(e.hours,e.minutes))}}return B`
                <div
                  class="alarm-item ${n?"":"disabled"}"
                  @click=${()=>this._openAlarmDialog(i)}
                >
                  <span class="alarm-name">${c}</span>
                  <span class="alarm-time">${a}</span>
                  <span class="alarm-days">${l}</span>
                  ${h?B`<span class="alarm-countdown">${h}</span>`:q}
                  <span class="alarm-toggle" @click=${e=>this._toggleAlarmEnabled(t,e)}>
                    <ha-switch .checked=${n}></ha-switch>
                  </span>
                </div>
              `})}
          </div>
          <div class="dialog-actions">
            <button class="btn-save" @click=${this._toggleAlarmsPanel}>Done</button>
          </div>
        </div>
      </div>
    `}_renderToggles(){const t=this._config.action_toggles;return t?.length?B`
      <div class="toggles-section">
        ${t.filter(t=>!1!==t.show).map(t=>{const e=this.hass.states[t.entity];if(!e)return q;const i="on"===e.state,o=t.name??e.attributes.friendly_name??t.entity,s=!1!==t.show_icon,n=!1!==t.show_name;return B`
              <div class="toggle-item">
                ${s&&t.icon?B`<ha-icon icon=${t.icon}></ha-icon>`:q}
                ${n?B`<span>${o}</span>`:q}
                <ha-switch
                  .checked=${i}
                  @change=${()=>this._toggleAction(t.entity)}
                ></ha-switch>
              </div>
            `})}
      </div>
    `:q}_renderAlarmDialog(){return!this._showAlarmDialog||this._editingAlarmIndex<0||!this._config.alarms[this._editingAlarmIndex]?q:B`
      <chrono-alarm-dialog
        .hass=${this.hass}
        .alarm=${this._config.alarms[this._editingAlarmIndex]}
        .alarmIndex=${this._editingAlarmIndex}
        @alarm-dialog-close=${this._closeAlarmDialog}
      ></chrono-alarm-dialog>
    `}_renderSnoozeDialog(){return!this._showSnoozeDialog||this._activeAlarmIndex<0||!this._config.alarms[this._activeAlarmIndex]?q:B`
      <chrono-snooze-dialog
        .alarm=${this._config.alarms[this._activeAlarmIndex]}
        .snoozeCount=${this._snoozeCount}
        .maxSnoozes=${this._config.snooze?.max_count??3}
        .timeFormat=${this._config.time_format??"12h"}
        @alarm-snooze=${this._handleSnooze}
        @alarm-dismiss=${this._handleDismiss}
      ></chrono-snooze-dialog>
    `}};Zt.styles=mt,t([pt({attribute:!1})],Zt.prototype,"hass",void 0),t([ut()],Zt.prototype,"_config",void 0),t([ut()],Zt.prototype,"_showAlarmDialog",void 0),t([ut()],Zt.prototype,"_editingAlarmIndex",void 0),t([ut()],Zt.prototype,"_showSnoozeDialog",void 0),t([ut()],Zt.prototype,"_activeAlarmIndex",void 0),t([ut()],Zt.prototype,"_snoozeCount",void 0),t([ut()],Zt.prototype,"_showAlarmsPanel",void 0),Zt=t([ct("chrono-alarm-card")],Zt),window.customCards=window.customCards||[],window.customCards.push({type:"chrono-alarm-card",name:"Chrono Alarm Card",description:"A clock and multi-alarm card for Home Assistant",preview:!0});export{Zt as ChronoAlarmCard};
