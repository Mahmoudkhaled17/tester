System.register(["jimu-core","jimu-core/emotion","jimu-for-builder","jimu-ui"],function(e,t){var i={},s={},o={},n={};return{setters:[function(e){i.AppMode=e.AppMode,i.BrowserSizeMode=e.BrowserSizeMode,i.GuideLevels=e.GuideLevels,i.GuideManager=e.GuideManager,i.GuideTypes=e.GuideTypes,i.React=e.React,i.appActions=e.appActions,i.classNames=e.classNames,i.css=e.css,i.defaultMessages=e.defaultMessages,i.getAppStore=e.getAppStore,i.jimuHistory=e.jimuHistory,i.polished=e.polished},function(e){s.jsx=e.jsx,s.jsxs=e.jsxs},function(e){o.builderAppSync=e.builderAppSync,o.getAppConfigAction=e.getAppConfigAction,o.helpUtils=e.helpUtils},function(e){n.Button=e.Button,n.Dropdown=e.Dropdown,n.DropdownButton=e.DropdownButton,n.DropdownItem=e.DropdownItem,n.DropdownMenu=e.DropdownMenu,n.Icon=e.Icon,n.Nav=e.Nav,n.NavItem=e.NavItem,n.NavLink=e.NavLink,n.Popper=e.Popper,n.defaultMessages=e.defaultMessages}],execute:function(){e((()=>{var e={9244(e){"use strict";e.exports=i},7386(e){"use strict";e.exports=s},4108(e){"use strict";e.exports=o},4321(e){"use strict";e.exports=n}},t={};function r(i){var s=t[i];if(void 0!==s)return s.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,r),o.exports}r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="";var a={};return r.p=window.jimuConfig.baseUrl,(()=>{"use strict";r.r(a),r.d(a,{__set_webpack_public_path__:()=>f,default:()=>v});var e=r(7386),t=r(9244),i=r(4321),s=r(4108);const o="Show help guide",n="What's new",l="Live view",p="Unable to add widgets in {liveViewElement} mode.",d="You cannot insert a widget while the layout is locked.",h="Turn off live view",u="Unlock layout",c={page:"./widgets/setting-navigator/dist/runtime/assets/page.svg",data:"./widgets/setting-navigator/dist/runtime/assets/data.svg",utility:"./widgets/setting-navigator/dist/runtime/assets/utility.svg",theme:"./widgets/setting-navigator/dist/runtime/assets/theme.svg",insert:"./widgets/setting-navigator/dist/runtime/assets/insert.svg",appSetting:"./widgets/setting-navigator/dist/runtime/assets/setting.svg"},g="left-sidebar";class m extends t.React.PureComponent{constructor(e){super(e),this.viewLabel={page:this.props.intl.formatMessage({id:"page",defaultMessage:t.defaultMessages.page}),data:this.props.intl.formatMessage({id:"data",defaultMessage:i.defaultMessages.data}),theme:this.props.intl.formatMessage({id:"theme",defaultMessage:t.defaultMessages.theme}),utility:this.props.intl.formatMessage({id:"utility",defaultMessage:i.defaultMessages.utility}),insert:this.props.intl.formatMessage({id:"insert",defaultMessage:i.defaultMessages.insert}),appSetting:this.props.intl.formatMessage({id:"general",defaultMessage:i.defaultMessages.general})},this.isReplayingPendingTranslationViewChange=!1,this.pendingTranslationViewChange=null,this.translationCloseTimeoutId=null,this.onInsertMouseEnter=e=>{"insert"===e&&this.getWhetherViewDisabled("insert")&&this.getWhetherShowInsertDisabledPopper(this.props)&&this.setState({isInsertDisabledPopperShown:!0})},this.addMouseMoveListener=()=>{document.addEventListener("mousemove",this.onDocumentMouseMove)},this.removeMouseMoveListener=()=>{document.removeEventListener("mousemove",this.onDocumentMouseMove)},this.onDocumentMouseMove=e=>{this.requestAnimationFrameId&&cancelAnimationFrame(this.requestAnimationFrameId),this.requestAnimationFrameId=requestAnimationFrame(()=>{if(!this.getWhetherShowInsertDisabledPopper(this.props))return void this.setState({isInsertDisabledPopperShown:!1});const t=this.getInsertDisablePopperAndInsertNavUnionRect();if(!t)return;const{left:i,top:s,right:o,bottom:n}=t;e.clientX>=i&&e.clientX<=o&&e.clientY>=s&&e.clientY<=n?this.setState({isInsertDisabledPopperShown:!0}):this.setState({isInsertDisabledPopperShown:!1})})},this.getHelpUrl=()=>{var e;null===(e=null===s.helpUtils||void 0===s.helpUtils?void 0:s.helpUtils.getHomeHelpLink())||void 0===e||e.then(e=>{e&&this.setState({helpHref:e})})},this.getWhatsNewUrl=()=>{var e;null===(e=null===s.helpUtils||void 0===s.helpUtils?void 0:s.helpUtils.getWhatsNewLink())||void 0===e||e.then(e=>{e&&this.setState({whatsNewHref:e})})},this.getStyle=e=>{const i=window.isExpressBuilder;return t.css`
      height: 100%;
      margin: 0;
      padding: 0;
      background-color: ${e.sys.color.secondary.main};

      .jimu-nav-link-wrapper{
        > div{
          display: flex;
          justify-content: center;
        }
      }
      .nav.nav-underline {
        border: 0 !important;
        .nav-item{
          display: flex !important;
        }
        .nav-item:focus{
          border: 0;
          outline: none;
          box-shadow: 0 0 0;
        }
        .nav-item > .jimu-link{
          height: auto !important;
          padding-left: 0;
          padding-right: 0;
          position: relative;
          border-width: 0 !important;
          &::before {
            content: " ";
            display: block;
            position: absolute;
            width: 4px;
            height: 100%;
            top: 0;
            left: -4px;
            background-color: ${e.sys.color.primary.light};
            transition: left ease-in .2s .2s;
            z-index: 1;
          }
          > .jimu-icon {
            margin: 0;
          }
          &:active,
          &.active {
            border-left-width: 0 !important;
            &::before {
              left: 0;
            }
          }
        }
      }

      .top-sections {
        height: ${i?"110px":"330px"};
        .link-icon-color{
          svg{
            margin-right: 0 !important;
            margin-left: 0 !important;
          }
        }

        .link-icon-color:not(.disable-setting){
          &:hover{
            svg{
              color: ${e.ref.palette.neutral[1200]} !important;
            }
          }
        }
      }

      .nav-item:hover{
        background-color: ${e.sys.color.secondary.main};
      }

      .active-setting:not(.disable-setting){
        background-color: ${e.ref.palette.neutral[700]};
      }

      .disable-setting{
        &.nav-item:focus, &.nav-item button:focus, &.nav-item:active, &.nav-item button:active, &.nav-item:hover, &.nav-item button:hover{
          outline: none !important;
          cursor: default !important;
          border: 0 !important;
          box-shadow: 0 0 0 !important;
        }
        &.nav-item button:active::before{
          width: 0 !important;
        }
      }

      .link-focus{
        &:focus, button:focus{
          border: 0;
          box-shadow: 0 0 0;
        }
      }

      .bottom-sections{
        position: absolute;
        bottom: 0;
        .func-buttons{
          margin: 0.25rem;
          >span{
            display: inline-block;
            position: relative;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
          .cover-dropdown-button {
            min-height: 3rem;
          }
          .dropdown-button.cover-dropdown-button:hover{
            background-color: ${e.sys.color.secondary.main};
            svg{
              color: ${e.ref.palette.neutral[1200]} !important
            }
          }
        }
      }
    `},this.getDropdownMenuStyle=()=>t.css`
      .link-con {
        &, &:hover {
          color: var(--ref-palette-black);
          padding: ${t.polished.rem(4)} ${t.polished.rem(8)} !important;
          text-decoration: none;
        }
      }
    `,this.getBuilderUrl=()=>{const e=(0,t.getAppStore)().getState().queryObject;let i=`${window.jimuConfig.mountPath}builder/?id=${e.id}`;return e.locale&&(i+=`&locale=${e.locale}`),window.isExpressBuilder||(i+="&mode=express"),i},this.onSwitchModeClick=()=>{const e=this.getBuilderUrl();window.location.href=e},this.turnOffLiveView=()=>{s.builderAppSync.publishAppModeChangeToApp(t.AppMode.Design),setTimeout(()=>{this.props.lockLayoutLabel||(this.setState({isInsertDisabledPopperShown:!1}),this.changeView("insert",!0))})},this.turnOffLockLayout=()=>{(0,s.getAppConfigAction)().setLockLayout(!1).exec(),setTimeout(()=>{this.setState({isInsertDisabledPopperShown:!1}),this.changeView("insert",!0)})},this.state={isInsertDisabledPopperShown:!1,helpHref:"#",whatsNewHref:"#"}}componentDidMount(){this.getHelpUrl(),this.getWhatsNewUrl(),this.getWhetherDisableInsert(this.props)&&"insert"===this.props.currentViewId&&(window.isExpressBuilder?t.jimuHistory.changeView("opts-section","theme"):t.jimuHistory.changeView("opts-section","page"))}componentDidUpdate(e,i){const s=this.getWhetherDisableInsert(this.props);!this.getWhetherShowInsertDisabledPopper(this.props)&&this.state.isInsertDisabledPopperShown&&this.setState({isInsertDisabledPopperShown:!1}),s&&!this.getWhetherDisableInsert(e)&&"insert"===this.props.currentViewId&&(window.isExpressBuilder?t.jimuHistory.changeView("opts-section","theme"):t.jimuHistory.changeView("opts-section","page")),this.props.portalUrl===(null==e?void 0:e.portalUrl)&&this.props.portalSelf===(null==e?void 0:e.portalSelf)||(this.getHelpUrl(),this.getWhatsNewUrl()),i.isInsertDisabledPopperShown!==this.state.isInsertDisabledPopperShown&&(this.state.isInsertDisabledPopperShown?this.addMouseMoveListener():this.removeMouseMoveListener()),this.pendingTranslationViewChange&&this.props.translationConfigCloseVersion!==e.translationConfigCloseVersion&&this.applyPendingTranslationViewChange()}componentWillUnmount(){this.removeMouseMoveListener(),this.requestAnimationFrameId&&cancelAnimationFrame(this.requestAnimationFrameId),this.clearTranslationCloseTimeout()}getInsertDisablePopperAndInsertNavUnionRect(){var e,t;const i=null===(e=this.insertDom)||void 0===e?void 0:e.getBoundingClientRect(),s=null===(t=this.insertDisablePopper)||void 0===t?void 0:t.getBoundingClientRect();if(!i||!s)return null;return{left:Math.min(i.left,s.left),top:Math.min(i.top,s.top),right:Math.max(i.right,s.right),bottom:Math.max(i.bottom,s.bottom)}}getWhetherDisableInsert(e){return e.lockLayoutLabel||e.appMode===t.AppMode.Run}getWhetherShowInsertDisabledPopper(e){return this.getWhetherDisableInsert(e)&&!e.isConfiguringTranslations}changeView(e,i=!1){if(i||!this.getWhetherViewDisabled(e)){if(this.props.isConfiguringTranslations&&!this.isReplayingPendingTranslationViewChange){const t=!!this.pendingTranslationViewChange;return this.pendingTranslationViewChange={viewId:e,force:i},void(t||this.closeTranslationPanelForPendingViewChange())}this.props.currentViewId===e?(0,t.getAppStore)().dispatch(t.appActions.widgetStatePropChange(g,"collapse",!this.props.sidebarVisible)):(t.jimuHistory.changeView("opts-section",e),this.props.sidebarVisible||(0,t.getAppStore)().dispatch(t.appActions.widgetStatePropChange(g,"collapse",!0)))}}closeTranslationPanelForPendingViewChange(){this.clearTranslationCloseTimeout(),this.translationCloseTimeoutId=window.setTimeout(()=>{this.applyPendingTranslationViewChange()},3e3),(0,t.getAppStore)().dispatch(t.appActions.widgetStatePropChange("app-loader","dockPanel",{isOpen:!1,owner:"config-translation"}))}clearTranslationCloseTimeout(){null!==this.translationCloseTimeoutId&&(window.clearTimeout(this.translationCloseTimeoutId),this.translationCloseTimeoutId=null)}applyPendingTranslationViewChange(){const e=this.pendingTranslationViewChange;if(this.clearTranslationCloseTimeout(),this.pendingTranslationViewChange=null,e){this.isReplayingPendingTranslationViewChange=!0;try{this.changeView(e.viewId,e.force)}finally{this.isReplayingPendingTranslationViewChange=!1}}}getWhetherViewDisabled(e){return this.getWhetherDisableInsert(this.props)&&"insert"===e}getWhetherViewActive(e){return e===this.props.currentViewId&&(this.props.sidebarVisible||this.props.isConfiguringTranslations&&"appSetting"===e)}render(){const s="active-setting",r="disable-setting",{sectionJson:a,theme:g,browserSizeMode:m}=this.props,v=this.props.intl.formatMessage({id:"liveView",defaultMessage:l}),f=this.props.intl.formatMessage({id:"disableInsertDueToLiveViewTip",defaultMessage:p},{liveViewElement:(0,e.jsx)("strong",{children:v},"disableInsertDueToLiveViewTip")}),w=this.props.intl.formatMessage({id:"disableInsertDueToLockLayoutTip",defaultMessage:d}),b=this.props.intl.formatMessage({id:"help",defaultMessage:i.defaultMessages.help});return(0,e.jsxs)("div",{css:this.getStyle(g),className:"widget-builder-setting-navigator h-100",children:[(0,e.jsxs)(i.Popper,{ref:e=>{this.insertDisablePopper=e},open:this.getWhetherShowInsertDisabledPopper(this.props)&&this.state.isInsertDisabledPopperShown,arrowOptions:!0,keepMount:!!this.insertDom,reference:this.insertDom,placement:"right",autoFocus:!1,className:"notranslate",css:t.css`
            width: ${t.polished.rem(300)};
            padding: ${t.polished.rem(12)};
            background-color: ${g.sys.color.surface.overlay};
            color: ${g.sys.color.surface.overlayHint};
            font-size: ${t.polished.rem(12)};
            font-weight: 500;
            strong {
              font-size: ${t.polished.rem(16)};
              color: ${g.ref.palette.black};
            }
            .jimu-popper--arrow::after {
              border-right-color: ${g.sys.color.surface.overlay} !important;
            }
          `,children:[(0,e.jsx)("div",{className:"insert-disable-tooltip",children:this.props.appMode===t.AppMode.Run?(0,e.jsx)("div",{children:(0,e.jsx)("span",{children:f})}):(0,e.jsx)("div",{children:(0,e.jsx)("span",{children:w})})}),(0,e.jsx)("div",{className:"d-flex justify-content-end align-items-center mt-2",children:this.props.appMode===t.AppMode.Run?(0,e.jsx)(i.Button,{className:"py-0",type:"secondary",onClick:this.turnOffLiveView,children:this.props.intl.formatMessage({id:"turnOffLiveView",defaultMessage:h})}):(0,e.jsx)(i.Button,{className:"py-0",type:"secondary",onClick:this.turnOffLockLayout,children:this.props.intl.formatMessage({id:"turnOffLockLayout",defaultMessage:u})})})]}),(0,e.jsx)(i.Nav,{fill:!0,underline:!0,vertical:!0,right:!0,className:"top-sections",iconOnly:!0,children:a.views.map(o=>{const n=o,a=this.getWhetherViewDisabled(n),l=this.getWhetherViewActive(n);return(0,e.jsx)(i.NavItem,{className:(0,t.classNames)("link-icon-color",{[s]:l,[r]:a}),disabled:a,onMouseEnter:()=>{this.onInsertMouseEnter(n)},children:(0,e.jsx)(i.NavLink,{iconPosition:"above",tag:"button",active:l,onClick:e=>{this.changeView(n)},iconOnly:!0,title:this.viewLabel[n],"aria-label":this.viewLabel[n],"aria-pressed":l?"true":"false",children:(0,e.jsx)("div",{className:"w-100 h-100",ref:e=>{"insert"===n&&(this.insertDom=e)},children:(0,e.jsx)(i.Icon,{className:(0,t.classNames)({[s]:l,[r]:a}),icon:c[n],size:"20",color:a?this.props.theme.sys.color.action.disabled.text:l?this.props.theme.ref.palette.neutral[1200]:this.props.theme.ref.palette.neutral[1e3]})})})},n)})}),(0,e.jsx)("div",{className:"bottom-sections w-100",children:(0,e.jsx)("div",{className:"func-buttons",children:(0,e.jsxs)(i.Dropdown,{direction:"right","aria-label":b,className:"link-focus link-icon-color w-100 d-flex justify-content-center",children:[(0,e.jsx)(i.DropdownButton,{icon:!0,arrow:!1,className:"cover-dropdown-button",title:b,children:(0,e.jsx)(i.Icon,{icon:"./widgets/setting-navigator/dist/runtime/assets/help.svg",color:this.props.theme.ref.palette.neutral[1e3]})}),(0,e.jsxs)(i.DropdownMenu,{css:this.getDropdownMenuStyle(),children:[(0,e.jsxs)(i.DropdownItem,{tag:"a",className:"link-con w-100 h-100 d-block",href:this.state.helpHref,target:"_blank",rel:"noopener noreferrer",role:"menuitem",children:[(0,e.jsx)(i.Icon,{autoFlip:!0,icon:"./widgets/setting-navigator/dist/runtime/assets/help-document.svg",className:"mr-2",title:""}),b]}),m===t.BrowserSizeMode.Large&&(0,e.jsxs)(i.DropdownItem,{onClick:()=>{window.isExpressBuilder?t.GuideManager.getInstance().startGuide({id:"general-express-mode",type:t.GuideTypes.Program,level:t.GuideLevels.Builder}):t.GuideManager.getInstance().startGuide({id:"opening-tour",type:t.GuideTypes.Program,level:t.GuideLevels.Builder})},children:[(0,e.jsx)(i.Icon,{icon:"./widgets/setting-navigator/dist/runtime/assets/launch.svg",className:"mr-2",title:""}),this.props.intl.formatMessage({id:"showGuide",defaultMessage:o})]}),(0,e.jsxs)(i.DropdownItem,{tag:"a",className:"link-con w-100 h-100 d-block",href:this.state.whatsNewHref,target:"_blank",rel:"noopener noreferrer",role:"menuitem",children:[(0,e.jsx)(i.Icon,{icon:"./widgets/setting-navigator/dist/runtime/assets/whats-new.svg",className:"mr-2",title:""}),this.props.intl.formatMessage({id:"whatsNew",defaultMessage:n})]})]})]})})})]})}}m.mapExtraStateProps=(e,t)=>{var i,s,o,n,r,a,l,p,d,h,u,c,m,v,f,w;const b=Object.keys(e.appRuntimeInfo.sectionNavInfos||{}).map(t=>e.appRuntimeInfo.sectionNavInfos[t].currentViewId),M=null===(s=null===(i=e.appConfig)||void 0===i?void 0:i.widgets)||void 0===s?void 0:s["left-sidebar"];let y=!0;return M&&(y=0!==M.config.defaultState),{sectionJson:null===(o=e.appConfig)||void 0===o?void 0:o.sections[t.config.sectionId],currentViewId:b[0]?b[0]:"insert",sidebarVisible:null!==(a=null===(r=null===(n=e.widgetsState)||void 0===n?void 0:n[g])||void 0===r?void 0:r.collapse)&&void 0!==a?a:y,lockLayoutLabel:null===(d=null===(p=null===(l=e.appStateInBuilder)||void 0===l?void 0:l.appConfig)||void 0===p?void 0:p.forBuilderAttributes)||void 0===d?void 0:d.lockLayout,appMode:null===(h=e.appStateInBuilder)||void 0===h?void 0:h.appRuntimeInfo.appMode,portalUrl:null===(u=e.appStateInBuilder)||void 0===u?void 0:u.portalUrl,portalSelf:null===(c=e.appStateInBuilder)||void 0===c?void 0:c.portalSelf,browserSizeMode:null===(m=e.appStateInBuilder)||void 0===m?void 0:m.browserSizeMode,isConfiguringTranslations:!!(null===(v=e.builder)||void 0===v?void 0:v.isConfiguringTranslations),translationConfigCloseVersion:null!==(w=null===(f=e.builder)||void 0===f?void 0:f.translationConfigCloseVersion)&&void 0!==w?w:0}};const v=m;function f(e){r.p=e}})(),a})())}}});