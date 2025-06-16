import{b as m,H as l,s,o as r,a as b,e as v,P as R,N as f,f as y}from"./base-element-CzNmpVoz-HnuJvqvh.js";import{N as H,T as $,n as w}from"./ripple-handlers-BAdg-fJB-Dl1HFRFR.js";import{p as d,t as L}from"./mwc-icon-button.css-DJiDOS0_-cP83Ajs-.js";import{n as u}from"./event-options-D44mpm5S-CtVXETdJ.js";import{l as g}from"./if-defined-DN7whKwy-5WWpD-0u.js";import{R as D}from"./index-BzAyOvpL.js";import{j as E}from"./jsx-runtime-BcdWgXRp.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class t extends m{constructor(){super(...arguments),this.disabled=!1,this.icon="",this.shouldRenderRipple=!1,this.rippleHandlers=new H(()=>(this.shouldRenderRipple=!0,this.ripple))}renderRipple(){return this.shouldRenderRipple?l`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>`:""}focus(){const e=this.buttonElement;e&&(this.rippleHandlers.startFocus(),e.focus())}blur(){const e=this.buttonElement;e&&(this.rippleHandlers.endFocus(),e.blur())}render(){return l`<button
        class="mdc-icon-button mdc-icon-button--display-flex"
        aria-label="${this.ariaLabel||this.icon}"
        aria-haspopup="${g(this.ariaHasPopup)}"
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
    ${this.icon?l`<i class="material-icons">${this.icon}</i>`:""}
    <span
      ><slot></slot
    ></span>
  </button>`}handleRippleMouseDown(e){const o=()=>{window.removeEventListener("mouseup",o),this.handleRippleDeactivate()};window.addEventListener("mouseup",o),this.rippleHandlers.startPress(e)}handleRippleTouchStart(e){this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}s([r({type:Boolean,reflect:!0})],t.prototype,"disabled",void 0),s([r({type:String})],t.prototype,"icon",void 0),s([d,r({type:String,attribute:"aria-label"})],t.prototype,"ariaLabel",void 0),s([d,r({type:String,attribute:"aria-haspopup"})],t.prototype,"ariaHasPopup",void 0),s([b("button")],t.prototype,"buttonElement",void 0),s([$("mwc-ripple")],t.prototype,"ripple",void 0),s([w()],t.prototype,"shouldRenderRipple",void 0),s([u({passive:!0})],t.prototype,"handleRippleMouseDown",null),s([u({passive:!0})],t.prototype,"handleRippleTouchStart",null);let n=class extends t{};n.styles=[L,R`${v(':host{color:var(--mdc-theme-text-icon-on-background)}:host .mdc-icon-button{cursor:var(--cv-icon-button-cursor, pointer)}:host .mdc-icon-button:active,:host .mdc-icon-button:focus{font-variation-settings:"FILL" 1}')}`],n=((a,e)=>{for(var o,i=e,p=a.length-1;p>=0;p--)(o=a[p])&&(i=o(i)||i);return i})([f("cv-icon-button")],n);const F=y({tagName:"cv-icon-button",elementClass:n,react:D}),M=({icon:a,ariaLabel:e,ariaHasPopup:o,disabled:i,slot:p,onClick:c})=>{const h={icon:a,disabled:i,slot:p,"aria-label":e,"aria-haspopup":o,onClick:c};return E.jsx(F,{...h})};M.displayName="IconButton";export{M as I};
