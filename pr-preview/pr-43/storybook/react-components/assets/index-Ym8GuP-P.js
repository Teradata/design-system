import{H as h,b as g,g as f,s as e,a as R,o as r,N as v,e as y,P as $,f as O}from"./base-element-CzNmpVoz-HnuJvqvh.js";import{p as w,t as I}from"./mwc-icon-button.css-DJiDOS0_-cP83Ajs-.js";import{N as L,T as H,n as k}from"./ripple-handlers-BAdg-fJB-Dl1HFRFR.js";import{n as u}from"./event-options-D44mpm5S-CtVXETdJ.js";import{l as m}from"./if-defined-DN7whKwy-5WWpD-0u.js";import{R as D}from"./index-BzAyOvpL.js";import{j as S}from"./jsx-runtime-BcdWgXRp.js";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class t extends g{constructor(){super(...arguments),this.disabled=!1,this.onIcon="",this.offIcon="",this.on=!1,this.shouldRenderRipple=!1,this.rippleHandlers=new L(()=>(this.shouldRenderRipple=!0,this.ripple))}handleClick(){this.on=!this.on,this.dispatchEvent(new CustomEvent("icon-button-toggle-change",{detail:{isOn:this.on},bubbles:!0}))}click(){this.mdcRoot.focus(),this.mdcRoot.click()}focus(){this.rippleHandlers.startFocus(),this.mdcRoot.focus()}blur(){this.rippleHandlers.endFocus(),this.mdcRoot.blur()}renderRipple(){return this.shouldRenderRipple?h`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>`:""}render(){const o={"mdc-icon-button--on":this.on},s=this.ariaLabelOn!==void 0&&this.ariaLabelOff!==void 0,a=s?void 0:this.on,l=s?this.on?this.ariaLabelOn:this.ariaLabelOff:this.ariaLabel;return h`<button
          class="mdc-icon-button mdc-icon-button--display-flex ${f(o)}"
          aria-pressed="${m(a)}"
          aria-label="${m(l)}"
          @click="${this.handleClick}"
          ?disabled="${this.disabled}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleMouseDown}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleTouchStart}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}"
        >${this.renderRipple()}
        <span class="mdc-icon-button__icon"
          ><slot name="offIcon"
            ><i class="material-icons">${this.offIcon}</i
          ></slot
        ></span>
        <span class="mdc-icon-button__icon mdc-icon-button__icon--on"
          ><slot name="onIcon"
            ><i class="material-icons">${this.onIcon}</i
          ></slot
        ></span>
      </button>`}handleRippleMouseDown(o){const s=()=>{window.removeEventListener("mouseup",s),this.handleRippleDeactivate()};window.addEventListener("mouseup",s),this.rippleHandlers.startPress(o)}handleRippleTouchStart(o){this.rippleHandlers.startPress(o)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}e([R(".mdc-icon-button")],t.prototype,"mdcRoot",void 0),e([w,r({type:String,attribute:"aria-label"})],t.prototype,"ariaLabel",void 0),e([r({type:Boolean,reflect:!0})],t.prototype,"disabled",void 0),e([r({type:String})],t.prototype,"onIcon",void 0),e([r({type:String})],t.prototype,"offIcon",void 0),e([r({type:String})],t.prototype,"ariaLabelOn",void 0),e([r({type:String})],t.prototype,"ariaLabelOff",void 0),e([r({type:Boolean,reflect:!0})],t.prototype,"on",void 0),e([H("mwc-ripple")],t.prototype,"ripple",void 0),e([k()],t.prototype,"shouldRenderRipple",void 0),e([u({passive:!0})],t.prototype,"handleRippleMouseDown",null),e([u({passive:!0})],t.prototype,"handleRippleTouchStart",null);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let c=class extends t{};c.styles=[I],c=e([v("mwc-icon-button-toggle")],c);var B=Object.defineProperty,F=Object.getOwnPropertyDescriptor,b=(i,o,s,a)=>{for(var l,n=a>1?void 0:a?F(o,s):o,p=i.length-1;p>=0;p--)(l=i[p])&&(n=(a?l(o,s,n):l(n))||n);return a&&n&&B(o,s,n),n};let d=class extends c{constructor(){super(...arguments),this.toggledOn=!1}update(i){i.has("toggledOn")&&this.toggledOn!==this.on&&(this.on=this.toggledOn),i.has("on")&&this.toggledOn!==this.on&&(this.toggledOn=this.on),super.update(i)}renderRipple(){return this.shouldRenderRipple?h` <mwc-ripple
          .disabled="${this.disabled}"
          .activated="${this.toggledOn}"
          unbounded
        >
        </mwc-ripple>`:""}};d.styles=[...c.styles,$`
      ${y(':host{border-radius:50%;color:var(--cv-theme-on-surface-variant)}:host([disabled]){background-color:transparent}:host([on]){--mdc-ripple-color: var(--cv-theme-on-surface);background-color:var(--cv-theme-secondary-container);color:var(--cv-theme-on-secondary-container)}:host([on]) .material-icons{font-variation-settings:"FILL" 1}')}
    `],b([r({type:Boolean,reflect:!0})],d.prototype,"toggledOn",2),d=b([v("cv-icon-button-toggle")],d);const M=O({tagName:"cv-icon-button-toggle",elementClass:d,react:D}),P=({offIcon:i,onIcon:o,ariaLabel:s,ariaHasPopup:a,disabled:l,onClick:n})=>{const p={offIcon:i,onIcon:o,disabled:l,"aria-label":s,"aria-haspopup":a,onClick:n};return S.jsx(M,{...p})};P.displayName="IconButtonToggle";export{P as I};
