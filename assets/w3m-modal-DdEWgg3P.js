const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-JLuG0Ndg.js","assets/index-CNe_fQXO.js","assets/index-BJqoXdxl.css"])))=>i.map(i=>d[i]);
import{a_ as k,b0 as C,b4 as a,b7 as w,aZ as f,cu as S,b5 as x,b2 as A,bb as m,aM as g,bj as _,bg as E,b9 as O,cv as p,b3 as h,a$ as L,cw as I}from"./index-CNe_fQXO.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="18956dc2-2a30-4428-9de4-c3fa0c2b003c",n._sentryDebugIdIdentifier="sentry-dbid-18956dc2-2a30-4428-9de4-c3fa0c2b003c")}catch{}})();const N=k`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`;var d=function(n,e,t,o){var s=arguments.length,i=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var c=n.length-1;c>=0;c--)(l=n[c])&&(i=(s<3?l(i):s>3?l(e,t,i):l(e,t))||i);return s>3&&i&&Object.defineProperty(e,t,i),i};const y="scroll-lock";let r=class extends C{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=a.state.open,this.caipAddress=w.state.caipAddress,this.isSiweEnabled=f.state.isSiweEnabled,this.connected=w.state.isConnected,this.loading=a.state.loading,this.shake=a.state.shake,this.initializeTheming(),S.prefetch(),this.unsubscribe.push(a.subscribeKey("open",e=>e?this.onOpen():this.onClose()),a.subscribeKey("shake",e=>this.shake=e),a.subscribeKey("loading",e=>{this.loading=e,this.onNewAddress(w.state.caipAddress)}),w.subscribeKey("isConnected",e=>this.connected=e),w.subscribeKey("caipAddress",e=>this.onNewAddress(e)),f.subscribeKey("isSiweEnabled",e=>this.isSiweEnabled=e)),x.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?A`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card shake="${this.shake}" role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){const e=m.state.view==="ConnectingSiwe",t=m.state.view==="ApproveTransaction";if(this.isSiweEnabled){const{SIWEController:o}=await g(async()=>{const{SIWEController:i}=await import("./index-JLuG0Ndg.js");return{SIWEController:i}},__vite__mapDeps([0,1,2]));o.state.status!=="success"&&(e||t)?a.shake():a.close()}else a.close()}initializeTheming(){const{themeVariables:e,themeMode:t}=I.state,o=_.getColorTheme(t);E(e,o)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),O.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=y,e.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${y}"]`);e&&e.remove()}onAddKeyboardListener(){var t;this.abortController=new AbortController;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-card");e==null||e.focus(),window.addEventListener("keydown",o=>{if(o.key==="Escape")this.handleClose();else if(o.key==="Tab"){const{tagName:s}=o.target;s&&!s.includes("W3M-")&&!s.includes("WUI-")&&(e==null||e.focus())}},this.abortController)}onRemoveKeyboardListener(){var e;(e=this.abortController)==null||e.abort(),this.abortController=void 0}async onNewAddress(e){var l,c;if(!this.connected||this.loading)return;const t=p.getPlainAddress(this.caipAddress),o=p.getPlainAddress(e),s=p.getNetworkId(this.caipAddress),i=p.getNetworkId(e);if(this.caipAddress=e,this.isSiweEnabled){const{SIWEController:u}=await g(async()=>{const{SIWEController:v}=await import("./index-JLuG0Ndg.js");return{SIWEController:v}},__vite__mapDeps([0,1,2])),b=await u.getSession();if(b&&t&&o&&t!==o){(l=u.state._client)!=null&&l.options.signOutOnAccountChange&&(await u.signOut(),this.onSiweNavigation());return}if(b&&s&&i&&s!==i){(c=u.state._client)!=null&&c.options.signOutOnNetworkChange&&(await u.signOut(),this.onSiweNavigation());return}this.onSiweNavigation()}}onSiweNavigation(){this.open?m.push("ConnectingSiwe"):a.open({view:"ConnectingSiwe"})}};r.styles=N;d([h()],r.prototype,"open",void 0);d([h()],r.prototype,"caipAddress",void 0);d([h()],r.prototype,"isSiweEnabled",void 0);d([h()],r.prototype,"connected",void 0);d([h()],r.prototype,"loading",void 0);d([h()],r.prototype,"shake",void 0);r=d([L("w3m-modal")],r);export{r as W3mModal};
//# sourceMappingURL=w3m-modal-DdEWgg3P.js.map