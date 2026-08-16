System.register(["jimu-core","jimu-core/emotion","jimu-for-builder","jimu-layouts/layout-builder","jimu-ui","jimu-ui/advanced/setting-components"],function(e,t){var a={},o={},n={},i={},r={},l={};return{setters:[function(e){a.BrowserSizeMode=e.BrowserSizeMode,a.DialogMode=e.DialogMode,a.ErrorBoundary=e.ErrorBoundary,a.GridItemType=e.GridItemType,a.LayoutItemType=e.LayoutItemType,a.LayoutParentType=e.LayoutParentType,a.LayoutType=e.LayoutType,a.PagePart=e.PagePart,a.PageType=e.PageType,a.React=e.React,a.ReactRedux=e.ReactRedux,a.appActions=e.appActions,a.classNames=e.classNames,a.css=e.css,a.focusElementInKeyboardMode=e.focusElementInKeyboardMode,a.getAppStore=e.getAppStore,a.hooks=e.hooks,a.lodash=e.lodash,a.utils=e.utils},function(e){o.jsx=e.jsx,o.jsxs=e.jsxs},function(e){n.builderAppSync=e.builderAppSync,n.getAppConfigAction=e.getAppConfigAction},function(e){i.getLabelOfGridTab=e.getLabelOfGridTab},function(e){r.Button=e.Button,r.Dropdown=e.Dropdown,r.DropdownButton=e.DropdownButton,r.DropdownItem=e.DropdownItem,r.DropdownMenu=e.DropdownMenu,r.Icon=e.Icon,r.Label=e.Label,r.Popper=e.Popper,r.Switch=e.Switch,r.Tooltip=e.Tooltip,r.defaultMessages=e.defaultMessages,r.styleUtils=e.styleUtils},function(e){l.changeCurrentDialog=e.changeCurrentDialog,l.changeCurrentPage=e.changeCurrentPage}],execute:function(){e((()=>{var e={3502(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M14 1H8v3H7V1H1v6h3v1H1v6h6v-3h1v3h6V8h-3V7h3zM1 0a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z" clip-rule="evenodd"></path></svg>'},5679(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M14 1v13H1V7.46l2.138 2.348a.508.508 0 0 0 .752-.684L2.867 8H6V7H2.794l1.023-1.124a.508.508 0 0 0-.752-.685L1 7.46V1zm0-1a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1zm-1.867 7L11.11 5.876a.508.508 0 1 1 .752-.684L14 7.54l-2.065 2.268a.508.508 0 0 1-.751-.684L12.206 8H9V7z" clip-rule="evenodd"></path></svg>'},6024(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M4.653 13.854a.485.485 0 0 1 0-.708L10.24 8 4.653 2.854a.485.485 0 0 1 0-.708.54.54 0 0 1 .738 0l5.956 5.5a.485.485 0 0 1 0 .708l-5.956 5.5a.54.54 0 0 1-.738 0" clip-rule="evenodd"></path></svg>'},6843(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M0 7.5A.5.5 0 0 1 .5 7h14a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5"></path></svg>'},5629(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M7.5 0a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0 0 1H7v6.5a.5.5 0 0 0 1 0V8h6.5a.5.5 0 0 0 0-1H8V.5a.5.5 0 0 0-.5-.5"></path></svg>'},6597(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6.5 7.5A.5.5 0 0 1 7 7h1.5v4.5h1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h1V8H7a.5.5 0 0 1-.5-.5"></path><path fill="#000" fill-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16m0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14" clip-rule="evenodd"></path></svg>'},9244(e){"use strict";e.exports=a},7386(e){"use strict";e.exports=o},4108(e){"use strict";e.exports=n},6055(e){"use strict";e.exports=i},4321(e){"use strict";e.exports=r},9298(e){"use strict";e.exports=l}},t={};function s(a){var o=t[a];if(void 0!==o)return o.exports;var n=t[a]={exports:{}};return e[a](n,n.exports,s),n.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="";var p={};return s.p=window.jimuConfig.baseUrl,(()=>{"use strict";s.r(p),s.d(p,{__set_webpack_public_path__:()=>Z,default:()=>W});var e=s(7386),t=s(9244),a=s(4321),o=s(4108);var n=s(9298);function i(o){const{pageId:n,label:i,isInFolder:r,isFolder:l,isActive:s,hasSubPage:p,onSelect:d}=o,c=t.React.useCallback(()=>{d(n)},[n,d]);return(0,e.jsx)(a.DropdownItem,{className:(0,t.classNames)({"page-item":!l||p,"in-folder":r,folder:l&&!p,"has-subpage":p,active:s}),active:s,header:l&&!p,onClick:c,children:(0,e.jsx)("div",{className:"text-truncate w-100",title:i,children:i})})}function r(e){(0,n.changeCurrentPage)(e)}function l(a){const n=t.ReactRedux.useSelector(e=>{var t,a;return null===(a=null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===a?void 0:a.pageStructure}),l=[];if(n){const e=(0,o.getAppConfigAction)().appConfig.pages;n.forEach(a=>{var o,n;const i=Object.keys(a)[0],r=e[i];if(r.type===t.PageType.Normal)if((null===(o=a[i])||void 0===o?void 0:o.length)>0){const o=[];a[i].forEach(a=>{const n=e[a];n.type===t.PageType.Normal&&o.push({pageId:a,label:n.label,isInFolder:!0})}),o.length>0?(l.push({pageId:i,label:r.label,isFolder:!0,hasSubPage:!0}),l.push(...o)):l.push({pageId:i,label:r.label})}else l.push({pageId:i,label:r.label});else if(r.type===t.PageType.Folder){const o=[];(null===(n=a[i])||void 0===n?void 0:n.length)>0&&a[i].forEach(a=>{const n=e[a];n.type===t.PageType.Normal&&o.push({pageId:a,label:n.label,isInFolder:!0})}),o.length>0&&(l.push({pageId:i,label:r.label,isFolder:!0}),l.push(...o))}})}return(0,e.jsx)(t.React.Fragment,{children:l.map(t=>(0,e.jsx)(i,Object.assign({onSelect:r,isActive:t.pageId===a.currentPageId},t),t.pageId))})}function d(e){(0,n.changeCurrentDialog)(e)}function c(o){const n=t.ReactRedux.useSelector(e=>{var t,a;return null===(a=null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===a?void 0:a.dialogs});if(!n||0===Object.keys(n).length)return null;const i=[],r=[];return Object.keys(n).forEach(e=>{var a,o;const l=n[e];l.mode===t.DialogMode.Fixed?i.push({id:e,label:l.label,index:null!==(a=l.index)&&void 0!==a?a:0}):l.mode===t.DialogMode.Anchored&&r.push({id:e,label:l.label,index:null!==(o=l.index)&&void 0!==o?o:0})}),i.sort((e,t)=>e.index-t.index),r.sort((e,t)=>e.index-t.index),(0,e.jsxs)(t.React.Fragment,{children:[(0,e.jsx)(a.DropdownItem,{header:!0,className:"page-header",children:o.formatMessage("dialog")}),(0,e.jsx)(a.DropdownItem,{className:"folder",header:!0,children:o.formatMessage("fixedWindows")}),i.map(n=>(0,e.jsx)(a.DropdownItem,{className:(0,t.classNames)("page-item in-folder",{active:o.currentDialogId===n.id}),active:o.currentDialogId===n.id,onClick:()=>{d(n.id)},children:(0,e.jsx)("div",{className:"text-truncate w-100",title:n.label,children:n.label})},n.id)),(0,e.jsx)(a.DropdownItem,{className:"folder",header:!0,children:o.formatMessage("anchoredWindows")}),r.map(n=>(0,e.jsx)(a.DropdownItem,{className:(0,t.classNames)("page-item in-folder",{active:o.currentDialogId===n.id}),active:o.currentDialogId===n.id,onClick:()=>{d(n.id)},children:(0,e.jsx)("div",{className:"text-truncate w-100",title:n.label,children:n.label})},n.id))]})}var u=s(6843),g=s.n(u),m=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(a[o[n]]=e[o[n]])}return a};const h=a=>{const o=window.SVG,{className:n}=a,i=m(a,["className"]),r=(0,t.classNames)("jimu-icon jimu-icon-component",n);return o?(0,e.jsx)(o,Object.assign({className:r,src:g()},i)):(0,e.jsx)("svg",Object.assign({className:r},i))};var f=s(5629),v=s.n(f),b=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(a[o[n]]=e[o[n]])}return a};const y=a=>{const o=window.SVG,{className:n}=a,i=b(a,["className"]),r=(0,t.classNames)("jimu-icon jimu-icon-component",n);return o?(0,e.jsx)(o,Object.assign({className:r,src:v()},i)):(0,e.jsx)("svg",Object.assign({className:r},i))};var x=s(5679),w=s.n(x),j=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(a[o[n]]=e[o[n]])}return a};const S=a=>{const o=window.SVG,{className:n}=a,i=j(a,["className"]),r=(0,t.classNames)("jimu-icon jimu-icon-component",n);return o?(0,e.jsx)(o,Object.assign({className:r,src:w()},i)):(0,e.jsx)("svg",Object.assign({className:r},i))};var I=s(3502),P=s.n(I),O=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(a[o[n]]=e[o[n]])}return a};const N=a=>{const o=window.SVG,{className:n}=a,i=O(a,["className"]),r=(0,t.classNames)("jimu-icon jimu-icon-component",n);return o?(0,e.jsx)(o,Object.assign({className:r,src:P()},i)):(0,e.jsx)("svg",Object.assign({className:r},i))};var T=s(6597),C=s.n(T),k=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(a[o[n]]=e[o[n]])}return a};const M=a=>{const o=window.SVG,{className:n}=a,i=k(a,["className"]),r=(0,t.classNames)("jimu-icon jimu-icon-component",n);return o?(0,e.jsx)(o,Object.assign({className:r,src:C()},i)):(0,e.jsx)("svg",Object.assign({className:r},i))},z={fixedLayoutTip:"Auto-calculate element tab orders in fixed layouts",fixedLayoutDesc:"For widgets in full-screen pages or fixed layouts (e.g., Fixed Panel, Card, List, etc.), turning on this option will automatically calculate their tab orders based on positions so that they sync up with the visual order for a better experience when it comes to accessibility support. This option will affect the overlay of widgets, so you may want to move certain elements forward or backward for desired results.",calTabOrder:"Calculate tab order for accessibility",a11yEnableWidgetSettings:"Enable accessibility settings for each widget"};function B(n){const{open:i,reference:r,enabledSettings:l,onToggle:s}=n,p=t.hooks.useTranslation(z,a.defaultMessages),d=t.ReactRedux.useSelector(e=>{var t,a;return null===(a=null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===a?void 0:a.useAutoSortInFixedLayout}),c=t.React.useCallback(e=>{(0,o.getAppConfigAction)().setUseAutoSortInFixedLayout(e.target.checked).exec()},[]),u=t.React.useCallback(e=>{let t=(0,o.getAppConfigAction)().appConfig;t.attributes||(t=t.set("attributes",{}));const a=t.attributes.set("enableA11yForWidgetSettings",!l);(0,o.getAppConfigAction)().editAttributes(a).exec()},[l]);return(0,e.jsx)(a.Popper,{open:i,reference:r,placement:"top-end",offsetOptions:10,toggle:s,"aria-label":p("calTabOrder"),css:t.css`
        width: 300px;
        padding: 16px;
        background-color: var(--ref-palette-neutral-500);
        color: var(--ref-palette-neutral-1100);
        font-size: 13px;
        font-weight: 500;
        line-height: 18px;
        border: 1px solid var(--ref-palette-neutral-600);;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
        border-radius: 3px;
      `,children:(0,e.jsxs)("div",{className:"builder-setting-content",children:[(0,e.jsxs)("div",{className:"d-flex align-items-center",children:[(0,e.jsx)("label",{className:"flex-grow-1",htmlFor:"fixed-tab-order-tip",children:p("fixedLayoutTip")}),(0,e.jsxs)("div",{className:"d-flex align-items-center ml-auto",children:[(0,e.jsx)(a.Tooltip,{title:p("fixedLayoutDesc"),children:(0,e.jsx)(a.Button,{icon:!0,disableRipple:!0,disableHoverEffect:!0,type:"tertiary",children:(0,e.jsx)(M,{})})}),(0,e.jsx)(a.Switch,{checked:d,onChange:c,id:"fixed-tab-order-tip"})]})]}),(0,e.jsx)("div",{children:(0,e.jsxs)(a.Label,{className:"d-flex align-items-center",children:[(0,e.jsx)("span",{className:"flex-grow-1",children:p("a11yEnableWidgetSettings")}),(0,e.jsx)(a.Switch,{checked:l,onChange:u})]})})]})})}var A=s(6055),L=s(6024),D=s.n(L),R=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(a[o[n]]=e[o[n]])}return a};const V=a=>{const o=window.SVG,{className:n}=a,i=R(a,["className"]),r=(0,t.classNames)("jimu-icon jimu-icon-component",n);return o?(0,e.jsx)(o,Object.assign({className:r,src:D()},i)):(0,e.jsx)("svg",Object.assign({className:r},i))};function F(n){const{layoutId:i,layoutItemId:r,label:l}=n,s=t.React.useCallback(()=>{o.builderAppSync.publishChangeSelectionToApp({layoutId:i,layoutItemId:r})},[i,r]);return(0,e.jsxs)(a.Button,{type:"tertiary",className:"h-100 bread-node text-truncate",onClick:s,children:[(0,e.jsx)("span",{className:"sep",children:(0,e.jsx)(V,{size:"s",autoFlip:!0})}),(0,e.jsx)("span",{className:"bread-label",children:l})]})}function E(){const n=t.hooks.useTranslation(a.defaultMessages),i=t.ReactRedux.useSelector(e=>{var t,a;return null===(a=null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appRuntimeInfo)||void 0===a?void 0:a.selection},t.ReactRedux.shallowEqual),r=(t.ReactRedux.useSelector(e=>{var a;if(i){const{layoutId:o}=i,n=null===(a=e.appStateInBuilder)||void 0===a?void 0:a.appConfig.layouts[o];return n.type===t.LayoutType.GridLayout?n:null}return null},t.ReactRedux.shallowEqual),t.ReactRedux.useSelector(e=>{var t;return null===(t=e.appStateInBuilder)||void 0===t?void 0:t.browserSizeMode})),l=t.React.useCallback((e,a)=>{var o,n,i;if(!a.parent)return null;const{type:s,id:p}=a.parent,{mainSizeMode:d}=e;switch(s){case t.LayoutParentType.View:{const t=e.views[p],a=e.sections[t.parent],n=null!==(o=a.parent[r])&&void 0!==o?o:a.parent[d];if(1===n.length)return n[0];const i=n[0].layoutId,s=e.layouts[i];return l(e,s)}case t.LayoutParentType.Screen:{const t=e.screens[p],a=e.screenGroups[t.parent];return null!==(n=a.parent[r])&&void 0!==n?n:a.parent[d]}case t.LayoutParentType.Widget:{const t=e.widgets[p],a=null!==(i=t.parent[r])&&void 0!==i?i:t.parent[d];if(!a)return null;if(1===a.length)return a[0];const o=a[0].layoutId,n=e.layouts[o];return l(e,n)}default:return null}},[r]),s=t.React.useCallback((e,a)=>{const o=[];let n=e.content[a].parent;for(;null!=n;){const a=e.content[n];a.gridType===t.GridItemType.Row||(a.gridType,t.GridItemType.Column),o.push({layoutId:e.id,layoutItemId:n}),n=a.parent}return o},[]),p=t.css`
    margin-left: 32px;
    max-width: calc(100% - 550px);

    .nav {
      display: flex;
      white-space: nowrap;
      overflow: hidden;
    }

    .bread-node {
      flex: 0 auto;
      flex-shrink: 1000;
      display: inline-block;
      line-height: 16px;

      &:hover {
        flex: 1 0 auto;
        .sep svg {
          transform: translatex(4px);
          transition: transform ease-in-out .3s;
        }
      }

      &:first-of-type {
        flex: 0 0 auto;
        flex-shrink: 0.5;
        .sep {
          display: none;
        }
      }

      &:last-of-type {
        flex: 1 0 auto !important;
        &:hover {
          flex: 1 0 auto !important;
        }
      }

      .bread-label {
        font-size: 13px;
        flex: 0 1 auto;
      }

      .sep {
        padding-left: 4px;
        padding-right: 4px;
      }
    }
  `;return null==(null==i?void 0:i.layoutId)||null==i.layoutItemId?null:(0,e.jsx)("div",{className:"breadcrumb d-flex",css:p,children:(0,e.jsx)("nav",{className:"nav",children:(0,e.jsx)(t.ErrorBoundary,{children:(a=>{const{layoutId:i,layoutItemId:r}=a,p=(0,o.getAppConfigAction)().appConfig,d=[];let c=p.layouts[i];if(d.push(a),c.type===t.LayoutType.GridLayout){const e=s(c,r);e.length>0&&d.push(...e)}let u=l(p,c);for(;null!=u;){if(c=p.layouts[u.layoutId],d.push(u),c.type===t.LayoutType.GridLayout){const e=s(c,u.layoutItemId);e.length>0&&d.push(...e)}u=l(p,c)}return d.reverse().map((a,o)=>{const i=function(e,a,o,n){const i=e.layouts[a].content[o];switch(i.type){case t.LayoutItemType.Widget:{const t=i.widgetId;return t?e.widgets[t].label:n("placeholder")}case t.LayoutItemType.Section:const a=i.sectionId;return e.sections[a].label;case t.LayoutItemType.ScreenGroup:const o=i.screenGroupId;return e.screenGroups[o].label}const r=e.layouts[a];if(r.type===t.LayoutType.GridLayout){const a=i,l=r.content[i.parent];return(null==l?void 0:l.gridType)!==t.GridItemType.Tab||a.gridType!==t.GridItemType.Column&&a.gridType!==t.GridItemType.Row?a.gridType===t.GridItemType.Column?n("gridCol"):a.gridType===t.GridItemType.Row?n("gridRow"):n("tab"):(0,A.getLabelOfGridTab)(e,{layoutId:r.id,layoutItemId:o},n)}return n("none")}(p,a.layoutId,a.layoutItemId,n);return(0,e.jsx)(F,{layoutId:a.layoutId,layoutItemId:a.layoutItemId,label:i},o)})})(i)})})})}const G="right-sidebar",H=.5,$=100;class _ extends t.React.PureComponent{constructor(o){super(o),this.prevSettingPanelVisible=null,this.formatMessage=(e,t)=>this.props.intl.formatMessage({id:e,defaultMessage:z[e]},t),this.onPreviewScaleChange=e=>{e.stopPropagation();const t=this.fromRangeToZoomScale(Number(e.currentTarget.value));this.updateScale(t)},this.zoomOut=e=>{e.stopPropagation();const{zoomScale:t}=this.props,a=Math.round(100*t),o=10*Math.floor(a/10);let n;n=a===o?t-.1:o/100,n=Math.round(10*n)/10,n=Math.max(H,n),this.updateScale(n)},this.zoomIn=e=>{e.stopPropagation();const{zoomScale:t}=this.props,a=Math.round(100*t),o=10*Math.ceil(a/10);let n;n=a===o?t+.1:o/100,n=Math.round(10*n)/10,n=Math.min(2,n),this.updateScale(n)},this.zoomToFit=e=>{e.stopPropagation();const{viewportSize:t}=this.props,a=this.calAvailableWidth();let{width:o}=t;if(0===o){if(a>=1024)return void this.updateScale(1);o=1024}let n=a/o;n=Math.floor(100*n)/100,n=Math.max(.5,Math.min(2,n)),this.updateScale(n)},this.zoomToNormal=e=>{e.stopPropagation(),this.updateScale(1)},this.stopPropagation=e=>{e.stopPropagation()},this.toggleSettingPanel=()=>{(0,t.getAppStore)().dispatch(t.appActions.widgetStatePropChange(G,"collapse",!this.props.settingPanelVisible))},this.toggleTabConfigPopper=()=>{this.setState({isTabConfigPopperOpen:!this.state.isTabConfigPopperOpen}),t.lodash.defer(()=>{(0,t.focusElementInKeyboardMode)(this.a11yBtn)})},this.onDropDownToggle=e=>{const{isPageListOpen:t}=this.state;this.setState({isPageListOpen:!t}),null==e||e.stopPropagation()},this.getDropdownStyle=()=>t.css`
      padding: unset;
      max-width: 240px;

      .page-header {
        height: 2rem;
        background-color: var(--ref-palette-neutral-600);
        color: var(--ref-palette-neutral-1100) !important;
        font-size: 14px;
        line-height: 2rem;
        display: flex !important;
        align-items: center;
      }

      .page-item {
        font-size: 13px;
        color: var(--ref-palette-black) !important;
        padding: 0 24px !important;
        height: 2rem;

        &:not(.active):hover {
          background: var(--ref-palette-neutral-600) !important;
        }

        &.active {
          background: var(--sys-color-primary-main);
        }
      }

      .folder {
        font-size: 13px;
        color: var(--ref-palette-neutral-1000) !important;
        padding: 0 !important;
        margin: 0 24px;
        height: 2rem;
        line-height: 2rem;
      }

      .page-header,
      .folder {
        &:focus {
          outline: none;
        }
      }

      .in-folder {
        padding-left: 2.25rem !important;
      }
    `,this.renderPageList=()=>{var o;const{isPageListOpen:n}=this.state,{pages:i,currentPageId:r,currentDialogId:s,currentDialogLabel:p}=this.props,d=s?this.formatMessage("dialog"):this.formatMessage("page"),u=s?p:null===(o=null==i?void 0:i[r])||void 0===o?void 0:o.label;return(0,e.jsxs)("div",{className:"d-flex page-list align-items-center ml-4",children:[(0,e.jsxs)("div",{className:"page-label",children:[d,":"]}),(0,e.jsxs)(a.Dropdown,{direction:"up",size:"sm",toggle:this.onDropDownToggle,isOpen:n,menuItemCheckMode:"singleCheck","aria-label":d,children:[(0,e.jsx)(a.DropdownButton,{className:"page-select-btn text-truncate jimu-outline-inside",css:t.css`max-width: 240px; font-size: 12px;`,size:"sm",type:"tertiary",title:u,children:u}),(0,e.jsxs)(a.DropdownMenu,{css:this.getDropdownStyle(),children:[(0,e.jsx)(a.DropdownItem,{header:!0,className:"page-header",children:this.formatMessage("page")}),(0,e.jsx)(l,{currentPageId:s?null:r}),(0,e.jsx)(c,{currentDialogId:s,formatMessage:this.formatMessage})]})]})]})},this.state={isPageListOpen:!1,isTabConfigPopperOpen:!1}}calAvailableWidth(){const e=document.querySelector('div[data-widgetid="app-loader"]').getBoundingClientRect();let t=parseFloat(a.styleUtils.remToPixel("3rem"));isNaN(t)&&(t=48);return e.width-t-10}updateScale(e){o.builderAppSync.publishChangeZoomScaleToApp(e)}percentageZoomScale(){const{zoomScale:e}=this.props;return t.utils.formatPercentageNumber(`${Math.round(100*e)}%`)}componentDidUpdate(e){const{isConfiguringTranslations:a,settingPanelVisible:o}=this.props;a&&!e.isConfiguringTranslations?(this.prevSettingPanelVisible=o,o&&(0,t.getAppStore)().dispatch(t.appActions.widgetStatePropChange(G,"collapse",!1))):!a&&e.isConfiguringTranslations&&null!==this.prevSettingPanelVisible&&((0,t.getAppStore)().dispatch(t.appActions.widgetStatePropChange(G,"collapse",this.prevSettingPanelVisible)),this.prevSettingPanelVisible=null)}fromZoomScaleToRange(e){return e<1?50*(e-H)/.5+0:e>1?50*(e-1)/1+50:50}fromRangeToZoomScale(e){return e<50?.5*(e-0)/50+H:e>50?1*(e-50)/50+1:1}calBackground(){const e=100*(this.fromZoomScaleToRange(this.props.zoomScale)-0)/100+"%",a=`linear-gradient(to right, var(--ref-palette-neutral-1000) 0%, var(--ref-palette-neutral-1000) ${e}, var(--ref-palette-neutral-700) ${e}, var(--ref-palette-neutral-600))`;return t.css`
      &::-webkit-slider-runnable-track {
        background: ${a} !important;
      }
      &::-moz-range-track {
        background: ${a} !important;
      }
      &::-ms-track {
        background: ${a} !important;
      }
    `}render(){const{zoomScale:o,settingPanelVisible:n,useAutoSortInFixedLayout:i,activePagePart:r,enabledA11ySettings:l,isConfiguringTranslations:s}=this.props;return(0,e.jsxs)("div",{css:(p=this.props.theme,t.css`
    overflow: hidden;
    height: 100%;
    background-color: var(--sys-color-secondary-main);
    border-top: 1px solid var(--ref-palette-neutral-700);

    .zoom-section {
      .percentage-label {
        width: 4rem;
        color: var(--ref-palette-neutral-1100);
      }
      .form-control-range {
        margin: 0 8px 1px;
        &:focus {
          outline: 2px solid ${p.sys.color.action.focus};
        }
      }
    }

    .a11y-btn {
      font-size: 12px;
      height: 16px;
      line-height: 16px;
      &.active {
        background-color: var(--sys-color-primary-main) !important;
      }
    }

    .btn {
      padding: 0;
      &.page-select-btn, &.a11y-btn, &.page-zoom-select-btn {
        display: inline-block;
      }

      .jimu-icon {
        margin-right: 0;
        margin-left: 0;
      }
    }
    .jimu-dropdown-button {
      line-height: 16px;
      height: 18px;
    }

    .setting-panel-visible {
      background-color: var(--ref-palette-neutral-600);
      .btn {
        color: var(--ref-palette-black);
      }
    }

    .jimu-dropdown .jimu-icon {
      transform: rotate(180deg);
    }

    .page-list {
      .page-label {
        color: var(--ref-palette-neutral-1100);
        font-size: 12px;
        margin-right: 8px;
      }
      .icon-btn {
        color: var(--ref-palette-neutral-1100);
        &:hover {
          color: var(--ref-palette-black);
        }
        .jimu-icon {
          margin-left: 6px;
        }
      }
    }

    input[type='range'] {
      -webkit-appearance: none;
      background: transparent;
    }
    input[type='range']:focus {
      outline: none;
    }
    input[type='range']::-webkit-slider-runnable-track {
      width: 100%;
      height: 2px;
      cursor: pointer;
      background: var(--ref-palette-neutral-700);
      border-radius: 2px;
    }
    input[type='range']::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 12px;
      width: 12px;
      border-radius: 6px;
      cursor: pointer;
      background: var(--ref-palette-neutral-400);
      border: 2px solid var(--ref-palette-neutral-1000);
      margin-top: -5px;

      &:hover {
        border-color: var(--ref-palette-black);
      }
    }
    input[type='range']:focus::-webkit-slider-runnable-track {
      background: var(--ref-palette-neutral-700);
    }
    input[type='range']::-moz-range-track {
      width: 100%;
      height: 2px;
      cursor: pointer;
      background: var(--ref-palette-neutral-700);
      border-radius: 2px;
    }
    input[type='range']::-moz-range-thumb {
      height: 10px;
      width: 10px;
      border-radius: 8px;
      cursor: pointer;
      background: var(--ref-palette-neutral-400);
      border: 2px solid var(--ref-palette-neutral-1000);
      margin-top: -5px;
      &:hover {
        border-color: var(--ref-palette-black);
      }
    }
    input[type='range']::-ms-track {
      width: 100%;
      height: 2px;
      cursor: pointer;
      background: ${null===(d=null==p?void 0:p.ref.palette)||void 0===d?void 0:d.neutral[700]};
      border-radius: 2px;
    }
    input[type='range']::-ms-thumb {
      height: 10px;
      width: 10px;
      border-radius: 8px;
      cursor: pointer;
      background: ${null===(c=null==p?void 0:p.ref.palette)||void 0===c?void 0:c.neutral[400]};
      border: 2px solid ${null===(u=null==p?void 0:p.ref.palette)||void 0===u?void 0:u.neutral[1e3]};
      margin-top: 0px;
      &:hover {
        border-color: ${null===(g=null==p?void 0:p.ref.palette)||void 0===g?void 0:g.black};
      }
    }
  `),className:"jimu-widget widget-status-bar d-flex",children:[!window.isExpressBuilder&&r===t.PagePart.Body&&this.renderPageList(),!window.isExpressBuilder&&(0,e.jsx)(E,{}),(0,e.jsxs)("div",{className:"zoom-section flex-grow-1 d-flex justify-content-end align-items-center",children:[!window.isExpressBuilder&&(0,e.jsxs)(t.React.Fragment,{children:[(0,e.jsx)(a.Button,{type:"tertiary",onClick:this.toggleTabConfigPopper,className:(0,t.classNames)("a11y-btn mr-2 px-1 jimu-outline-inside",{active:i||l}),ref:e=>{this.a11yBtn=e},title:this.formatMessage("a11y"),"aria-label":this.formatMessage("a11y"),"aria-haspopup":"dialog","aria-expanded":this.state.isTabConfigPopperOpen,children:"A11Y"}),(0,e.jsx)(B,{open:this.state.isTabConfigPopperOpen,reference:this.a11yBtn,enabledSettings:l,onToggle:this.toggleTabConfigPopper})]}),(0,e.jsxs)("div",{className:"zoom-control d-flex h-100",role:"group","aria-label":this.formatMessage("pageZoom"),children:[(0,e.jsx)(a.Button,{type:"tertiary",disabled:o<=H,className:"jimu-outline-inside",title:this.formatMessage("zoomOut"),"aria-label":this.formatMessage("zoomOut"),onClick:this.zoomOut,children:(0,e.jsx)(h,{size:"s"})}),(0,e.jsx)("input",{css:this.calBackground(),type:"range",className:"form-control-range jimu-outline-inside","aria-label":this.formatMessage("zoomSlider"),min:0,max:$,step:1,value:this.fromZoomScaleToRange(o),onClick:this.stopPropagation,onChange:this.onPreviewScaleChange}),(0,e.jsx)(a.Button,{type:"tertiary",disabled:o>=2,className:"jimu-outline-inside",title:this.formatMessage("zoomIn"),"aria-label":this.formatMessage("zoomIn"),onClick:this.zoomIn,children:(0,e.jsx)(y,{size:"s"})})]}),(0,e.jsxs)(a.Dropdown,{direction:"up",size:"sm",className:"ml-2","aria-label":this.formatMessage("zoomScale"),children:[(0,e.jsx)(a.DropdownButton,{size:"sm",type:"tertiary",className:"page-zoom-select-btn jimu-outline-inside",children:this.percentageZoomScale()}),(0,e.jsx)(a.DropdownMenu,{css:t.css`min-width: 5rem;`,children:[200,175,150,125,100,75,50].map(o=>(0,e.jsx)(a.DropdownItem,{className:"justify-content-center",onClick:()=>{this.updateScale(o/100)},children:t.utils.formatPercentageNumber(`${o}%`)},o))})]}),(0,e.jsx)(a.Button,{type:"tertiary",className:"ml-2 jimu-outline-inside",onClick:this.zoomToNormal,title:this.formatMessage("zoomToNormal"),"aria-label":this.formatMessage("zoomToNormal"),children:(0,e.jsx)(N,{size:"s",className:"m-0"})}),(0,e.jsx)(a.Button,{type:"tertiary",className:"ml-2 jimu-outline-inside",onClick:this.zoomToFit,title:this.formatMessage("zoomToFit"),"aria-label":this.formatMessage("zoomToFit"),children:(0,e.jsx)(S,{size:"s",className:"m-0"})})]}),(0,e.jsx)("div",{className:(0,t.classNames)("setting-panel-section d-flex justify-content-center align-items-center ml-5 mr-2",{"setting-panel-visible":n}),children:(0,e.jsx)(a.Button,{type:"tertiary",title:n?this.formatMessage("closeSettingPanel"):this.formatMessage("openSettingPanel"),className:"px-2 jimu-outline-inside","aria-label":n?this.formatMessage("closeSettingPanel"):this.formatMessage("openSettingPanel"),"aria-haspopup":"dialog","aria-expanded":n,disabled:s,onClick:this.toggleSettingPanel,children:(0,e.jsx)(a.Icon,{icon:"./widgets/status-bar/dist/runtime/assets/setting-panel.svg",size:12,className:"m-0",autoFlip:!0})})})]});var p,d,c,u,g}}_.mapExtraStateProps=(e,a)=>{var o,n,i,r,l,s,p,d,c,u,g,m,h,f,v,b,y,x,w,j,S,I,P,O,N,T,C,k;const M=null!==(i=null===(n=null===(o=e.appStateInBuilder)||void 0===o?void 0:o.appRuntimeInfo)||void 0===n?void 0:n.zoomScale)&&void 0!==i?i:1,z=null!==(l=null===(r=e.appStateInBuilder)||void 0===r?void 0:r.browserSizeMode)&&void 0!==l?l:t.BrowserSizeMode.Large,B=t.utils.findViewportSize(null===(s=e.appStateInBuilder)||void 0===s?void 0:s.appConfig,z),A=null===(d=null===(p=null==e?void 0:e.appStateInBuilder)||void 0===p?void 0:p.appConfig)||void 0===d?void 0:d.pages,L=null===(u=null===(c=null==e?void 0:e.appStateInBuilder)||void 0===c?void 0:c.appConfig)||void 0===u?void 0:u.useAutoSortInFixedLayout,D=null===(m=null===(g=null==e?void 0:e.appStateInBuilder)||void 0===g?void 0:g.appConfig)||void 0===m?void 0:m.pageStructure,R=null===(f=null===(h=null==e?void 0:e.appStateInBuilder)||void 0===h?void 0:h.appRuntimeInfo)||void 0===f?void 0:f.currentPageId,V=null===(b=null===(v=null==e?void 0:e.appStateInBuilder)||void 0===v?void 0:v.appRuntimeInfo)||void 0===b?void 0:b.currentDialogId,F=V?null===(y=null==e?void 0:e.appStateInBuilder)||void 0===y?void 0:y.appConfig.dialogs[V].label:null,E=null!==(w=null===(x=null==e?void 0:e.appStateInBuilder)||void 0===x?void 0:x.appRuntimeInfo.activePagePart)&&void 0!==w?w:t.PagePart.Body,H=null!==(P=null===(I=null===(S=null===(j=null==e?void 0:e.appStateInBuilder)||void 0===j?void 0:j.appConfig)||void 0===S?void 0:S.attributes)||void 0===I?void 0:I.enableA11yForWidgetSettings)&&void 0!==P&&P;return{zoomScale:M,viewportSize:B,settingPanelVisible:null===(T=null===(N=null===(O=e.widgetsState)||void 0===O?void 0:O[G])||void 0===N?void 0:N.collapse)||void 0===T||T,pages:A,pageStructure:D,currentPageId:R,currentDialogId:V,currentDialogLabel:F,activePagePart:E,enabledA11ySettings:H,useAutoSortInFixedLayout:L,locale:null===(C=null==e?void 0:e.appContext)||void 0===C?void 0:C.locale,isConfiguringTranslations:!!(null===(k=e.builder)||void 0===k?void 0:k.isConfiguringTranslations)}};const W=_;function Z(e){s.p=e}})(),p})())}}});