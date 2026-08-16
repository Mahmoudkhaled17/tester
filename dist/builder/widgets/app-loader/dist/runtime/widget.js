System.register(["jimu-core","jimu-core/emotion","jimu-for-builder","jimu-for-builder/templates","jimu-layouts/layout-builder","jimu-layouts/layout-runtime","jimu-theme","jimu-ui","jimu-ui/advanced/data-source-selector","jimu-ui/advanced/rich-text-editor","jimu-ui/advanced/setting-components"],function(e,t){var o={},i={},s={},n={},r={},a={},l={},d={},c={},u={},p={};return Object.defineProperty(n,"__esModule",{value:!0}),{setters:[function(e){o.APP_FRAME_NAME_IN_BUILDER=e.APP_FRAME_NAME_IN_BUILDER,o.AppMode=e.AppMode,o.BrowserSizeMode=e.BrowserSizeMode,o.IntlProvider=e.IntlProvider,o.LayoutItemType=e.LayoutItemType,o.LayoutParentType=e.LayoutParentType,o.LayoutType=e.LayoutType,o.PageMode=e.PageMode,o.React=e.React,o.ReactDOM=e.ReactDOM,o.ReactRedux=e.ReactRedux,o.SystemErrorCode=e.SystemErrorCode,o.WidgetType=e.WidgetType,o.classNames=e.classNames,o.css=e.css,o.getAppStore=e.getAppStore,o.hooks=e.hooks,o.lodash=e.lodash,o.moduleLoader=e.moduleLoader,o.polished=e.polished,o.queryString=e.queryString,o.urlUtils=e.urlUtils,o.utils=e.utils},function(e){i.Fragment=e.Fragment,i.jsx=e.jsx,i.jsxs=e.jsxs},function(e){s.AppResourceManager=e.AppResourceManager,s.LayoutServiceProvider=e.LayoutServiceProvider,s.ToBuilderMessage=e.ToBuilderMessage,s.WidgetSettingManager=e.WidgetSettingManager,s.appStateActions=e.appStateActions,s.builderActions=e.builderActions,s.builderAppSync=e.builderAppSync,s.getAppConfigAction=e.getAppConfigAction},function(e){n.default=e.default||e,Object.keys(e).forEach(function(t){n[t]=e[t]})},function(e){r.ColumnLayoutService=e.ColumnLayoutService,r.FixedLayoutService=e.FixedLayoutService,r.FlowLayoutService=e.FlowLayoutService,r.GridLayoutService=e.GridLayoutService,r.RowLayoutService=e.RowLayoutService},function(e){a.searchUtils=e.searchUtils,a.utils=e.utils},function(e){l.ThemeSwitchComponent=e.ThemeSwitchComponent,l.styled=e.styled},function(e){d.AlertPopup=e.AlertPopup,d.Loading=e.Loading,d.LoadingType=e.LoadingType,d.PanelHeader=e.PanelHeader,d.defaultMessages=e.defaultMessages,d.styleUtils=e.styleUtils},function(e){c.DataSourceRemoveWaringReason=e.DataSourceRemoveWaringReason,c.DataSourceRemoveWarningPopup=e.DataSourceRemoveWarningPopup,c.dataComponentsUtils=e.dataComponentsUtils},function(e){u.RichArcadeContentBuilder=e.RichArcadeContentBuilder,u.RichExpressionBuilder=e.RichExpressionBuilder},function(e){p.TemplateList=e.TemplateList,p.WidgetList=e.WidgetList}],execute:function(){e((()=>{var e={9244(e){"use strict";e.exports=o},7386(e){"use strict";e.exports=i},4108(e){"use strict";e.exports=s},6884(e){"use strict";e.exports=n},6055(e){"use strict";e.exports=r},1496(e){"use strict";e.exports=a},1888(e){"use strict";e.exports=l},4321(e){"use strict";e.exports=d},3089(e){"use strict";e.exports=c},3949(e){"use strict";e.exports=u},9298(e){"use strict";e.exports=p}},t={};function g(o){var i=t[o];if(void 0!==i)return i.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,g),s.exports}g.d=(e,t)=>{for(var o in t)g.o(t,o)&&!g.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},g.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),g.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},g.p="";var h={};return g.p=window.jimuConfig.baseUrl,(()=>{"use strict";g.r(h),g.d(h,{__set_webpack_public_path__:()=>O,default:()=>B});var e=g(7386),t=g(9244),o=g(4108),i=g(4321);const s=t.css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;function n(e,o,i){return t.css`
    ${e?s:""};
    overflow: auto;

    &.dock-panel-split {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: stretch;
      overflow: hidden;
    }

    .dock-panel-slot {
      height: 100%;
      overflow: auto;
    }

    .content-section {
      height: 100%;
      width: 100%;
      overflow: auto;

      &.dock-panel-split-content {
        flex: 1 1 0;
        min-width: 0;
        width: auto;
      }
    }

    .content {
      padding: 1.5rem;
      margin: 0 auto;
    }

    .top-section {
      margin-top: 5px;
    }

    .page-name {
      color: ${i.ref.palette.neutral[800]};
    }

    .body-section {
      width: 100%;
      display: flex;
      margin-top: 5px;
      overflow: visible;
      position: relative;
      align-items: center;
      // box-shadow: 0 2px 5px 1px rgba(0,0,0,0.15);

      .device-frame {
        position: relative;
        overflow: hidden;
        height: ${o>0?`${o}px`:"auto"};
        flex-grow: 0;
        flex-shrink: 0;

        &.center-origin {
          transform-origin: top center;
          align-self: center;
        }
        &.left-origin {
          transform-origin: top left;
          align-self: flex-start;
        }

        iframe {
          width: 100%;
          // height: 100%;
          border: none;
          position: relative;
          overflow: visible;
        }
      }
    }
  `}class r extends t.React.PureComponent{constructor(e){super(e),this.formatMessage=(e,t)=>this.props.formatMessage(e,t),this.toggleLayoutMode=()=>{const{isAuto:e}=this.props;e?this.handleToggleCustomConfirm():this.handleToggleAutoConfirm()},this.handleToggleAutoConfirm=()=>{this.setState({showAutoConfirm:!this.state.showAutoConfirm})},this.autoConfirmClosed=()=>{this.props.isHeader?this.resetHeader():this.props.isFooter?this.resetFooter():this.props.isDialog?this.resetDialog():this.resetPageBody()},this.handleToggleCustomConfirm=()=>{this.setState({showCustomConfirm:!this.state.showCustomConfirm})},this.customConfirmClosed=()=>{this.props.isHeader?this.unLockHeaderLayout():this.props.isFooter?this.unLockFooterLayout():this.props.isDialog?this.unLockDialogLayout():this.unLockPageBodyLayout()},this.unLockFooterLayout=()=>{const{browserSizeMode:e,mainSizeMode:i}=this.props,s=(0,o.getAppConfigAction)(),n=s.appConfig.footer.layout,r=s.createLayoutForSizeMode(e,i,n,t.LayoutParentType.Footer,"footer");r&&s.editFooterProperty("layout",r).exec()},this.unLockHeaderLayout=()=>{const{browserSizeMode:e,mainSizeMode:i}=this.props,s=(0,o.getAppConfigAction)(),n=s.appConfig.header.layout,r=s.createLayoutForSizeMode(e,i,n,t.LayoutParentType.Header,"header");r&&s.editHeaderProperty("layout",r).exec()},this.unLockPageBodyLayout=()=>{const{browserSizeMode:e,mainSizeMode:i,pageId:s}=this.props,n=(0,o.getAppConfigAction)(),r=n.appConfig.pages[s],a=n.createLayoutForSizeMode(e,i,r.layout,t.LayoutParentType.Page,s);a&&n.editPageProperty(s,"layout",a).exec()},this.unLockDialogLayout=()=>{var e;const{browserSizeMode:i,mainSizeMode:s,dialogId:n}=this.props,r=(0,o.getAppConfigAction)(),a=r.appConfig.dialogs[n],l=r.createLayoutForSizeMode(i,s,a.layout,t.LayoutParentType.Dialog,n);l&&(r.editDialogProperty(n,"layout",l),(null===(e=a.sizeMode)||void 0===e?void 0:e.LARGE)&&r.editDialogProperty(n,"sizeMode",a.sizeMode.set(i,a.sizeMode.LARGE)),r.exec())},this.resetHeader=()=>{const{browserSizeMode:e}=this.props,t=(0,o.getAppConfigAction)(),i=t.appConfig.header.layout;t.removeSizeModeLayout(i[e],e).editHeaderProperty("layout",i.without(e)).exec()},this.resetFooter=()=>{const{browserSizeMode:e}=this.props,t=(0,o.getAppConfigAction)(),i=t.appConfig.footer.layout;t.removeSizeModeLayout(i[e],e).editFooterProperty("layout",i.without(e)).exec()},this.resetPageBody=()=>{const{browserSizeMode:e,pageId:t}=this.props,i=(0,o.getAppConfigAction)(),s=i.appConfig.pages[t].layout;i.removeSizeModeLayout(s[e],e).editPageProperty(t,"layout",s.without(e)).exec()},this.resetDialog=()=>{var e;const{browserSizeMode:t,dialogId:i}=this.props,s=(0,o.getAppConfigAction)(),n=s.appConfig.dialogs[i],r=n.layout;s.removeSizeModeLayout(r[t],t).editDialogProperty(i,"layout",r.without(t)),(null===(e=n.sizeMode)||void 0===e?void 0:e[t])&&s.editDialogProperty(i,"sizeMode",n.sizeMode.without(t)),s.exec()},this.state={showAutoConfirm:!1,showCustomConfirm:!1}}getStyle(){const{isAuto:e,isHeader:o,isFooter:i}=this.props;let s;return i?s=t.css`position: absolute;`:o||i||(s=t.css`
        position: sticky;
        transform: translateZ(1px);
      `),t.css`
      ${s};
      .state-toggle-btn{
        cursor: pointer;
        position: relative;
        padding: 0 1rem;
        overflow: hidden;
        background: var(--ref-palette-neutral-500);
        border-radius: 2px;
      }
      .toggle-part {
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
      }
      .toggle-highlight {
        position: absolute;
        height: 30px;
        left: 0;
        right: 0;
        background-color: var(--sys-color-primary-main);
        transition: 0.2s;
        top: ${e?0:30}px;
      }
    `}getSizeModeNls(e){switch(e){case t.BrowserSizeMode.Small:return this.formatMessage("smallScreen");case t.BrowserSizeMode.Medium:return this.formatMessage("mediumScreen");default:return this.formatMessage("largeScreen")}}render(){const{isAuto:o,mainSizeMode:s}=this.props,n=this.getSizeModeNls(s);return(0,e.jsxs)("div",{style:this.props.style,css:this.getStyle(),children:[(0,e.jsxs)("div",{className:"d-flex flex-column state-toggle-btn",onClick:this.toggleLayoutMode,title:o?`${this.formatMessage("autoEnabledTip",{label:n})} ${this.formatMessage("customDisabledTip")}`:`${this.formatMessage("customEnabledTip")} ${this.formatMessage("autoDisabledTip")}`,children:[(0,e.jsx)("div",{className:"toggle-part text-nowrap",children:this.formatMessage("auto")}),(0,e.jsx)("div",{className:"toggle-part text-nowrap",children:this.formatMessage("custom")}),(0,e.jsx)("div",{className:"toggle-highlight"})]}),(0,e.jsx)(i.AlertPopup,{toggle:this.handleToggleAutoConfirm,onClickClose:this.handleToggleAutoConfirm,onClickOk:this.autoConfirmClosed,title:this.formatMessage("enableConfirm"),isOpen:this.state.showAutoConfirm,severity:"warning",withIcon:!0,children:(0,e.jsx)("div",{children:(0,e.jsx)("div",{children:this.formatMessage("autoConfirmMsg",{label:n,auto:this.formatMessage("auto").toLocaleLowerCase()})})})}),(0,e.jsx)(i.AlertPopup,{toggle:this.handleToggleCustomConfirm,onClickClose:this.handleToggleCustomConfirm,onClickOk:this.customConfirmClosed,title:this.formatMessage("enableConfirm"),isOpen:this.state.showCustomConfirm,severity:"warning",withIcon:!0,children:(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{children:this.formatMessage("customConfirmMsg1",{custom:this.formatMessage("custom").toLocaleLowerCase()})}),(0,e.jsx)("div",{css:t.css`margin-top: 1rem;`,children:this.formatMessage("customConfirmMsg2")})]})})]})}}const a={certainly:"OK",autoEnabledTip:"Auto layout is enabled. Widgets are synced with those on the {label} and arranged automatically.",autoDisabledTip:"Click to enable auto layout.",customEnabledTip:"Custom layout is enabled. Widgets added in other device modes will not be automatically added here. Alternatively, you can manually add them from the pending list on the Insert panel.",customDisabledTip:"Click to enable custom layout.",enableConfirm:"Are you sure you want to enable it?",autoConfirmMsg:"By enabling {auto}, the widgets will be synced with those on the {label} and arranged automatically.",customConfirmMsg1:"By enabling {custom}, you can manually arrange widgets for this device mode.",customConfirmMsg2:"However, widgets added in other device modes will not be automatically added here. Alternatively, you can manually add them from the pending list on the Insert panel.",dragToResize:"Drag to resize",largeScreen:"Large screen device",mediumScreen:"Medium screen device",smallScreen:"Small screen device",deleteWarning:'Deleting a widget will remove it from all device views. Linked widgets in other states of the same list or card will also be deleted. Use "Move to the pending list" button to remove it from current device view and state and preserve it in the others.',confirmDelete:"Are you sure you want to delete this widget from all devices and states?",quickStyleItem:"Quick style {index}",chooseWidget:"Choose widget",canvasTitle:"Experience Builder Canvas"};var l=g(1496);function d(){return`${t.utils.getLocalStorageAppKey()}-confirm-delete-widget`}function c(){return"false"!==t.utils.readLocalStorage(d())}function u(e){return!(!e||window.isExpressBuilder)&&(!!c()&&(!!function(e){var i;if(!e)return!1;const s=(0,o.getAppConfigAction)().appConfig,{layoutId:n,layoutItemId:r}=e,a=s.layouts[n].content[r];if(!a)return!1;if(a.type===t.LayoutItemType.Section||a.type===t.LayoutItemType.ScreenGroup)return!0;if(a.type===t.LayoutItemType.Widget&&a.widgetId)return(null===(i=s.widgets[a.widgetId].manifest)||void 0===i?void 0:i.widgetType)!==t.WidgetType.Layout;return!1}(e)&&function(e){const{layoutId:i,layoutItemId:s}=e,n=(0,o.getAppConfigAction)().appConfig,r=n.layouts[i].content[s],a=r.type,d=l.utils.getCurrentSizeMode();if(a===t.LayoutItemType.Widget){const e=r.widgetId,t=n.widgets[e];let o=!1;return Object.keys(t.parent).length>1&&(o=p(n,d,t.parent)),o||t.parent[d].length>1}if(a===t.LayoutItemType.Section){const e=r.sectionId,t=n.sections[e];let o=!1;return Object.keys(t.parent).length>1&&(o=p(n,d,t.parent)),o||t.parent[d].length>1}return!1}(e)))}function p(e,t,o){let i=!1;return Object.keys(o).length>1&&(i=Object.keys(o).some(i=>i!==t&&(o[i].length>0&&o[i].some(t=>!l.searchUtils.findLayoutItem(e,t).isPending)))),i}function m(o){const{formatMessage:s,onConfirmDelete:n,onCancelDelete:r}=o,a=t.ReactRedux.useSelector(e=>{var t;return null===(t=e.builder)||void 0===t?void 0:t.contentToDelete},t.ReactRedux.shallowEqual),l=t.React.useMemo(()=>u(a),[a]),c=t.React.useCallback(()=>{n(a)},[a,n]);t.React.useEffect(()=>{a&&!l&&c()},[a,l,c]);const p=t.React.useCallback(e=>{var o;o=!e,t.utils.setLocalStorage(d(),`${o}`),c()},[c]);return l?(0,e.jsx)(i.AlertPopup,{onClickClose:r,onClickOk:p,title:s("confirmDelete"),severity:"warning",hasNotShowAgainOption:!0,withIcon:!0,isOpen:!0,children:(0,e.jsx)("div",{className:"message",css:t.css`
    font-weight: 400;
    font-size: 0.8125rem;
    line-height: normal;
  `,children:(0,e.jsx)("div",{"data-testid":"confirmDeleteMessage",className:"text-paper",css:t.css`
          color: var(--ref-palette-neutral-1100);
        `,children:s("deleteWarning")})})}):null}var v=g(3089);function f(i){var s,n,r;const a=t.ReactRedux.useSelector(e=>{var t;return null===(t=e.builder)||void 0===t?void 0:t.contentToDelete},t.ReactRedux.shallowEqual),l=t.React.useMemo(()=>function(e){var i,s,n,r,a;if(!e||window.isExpressBuilder)return!1;let l=!1;const{layoutId:d,layoutItemId:c}=e,u=(0,o.getAppConfigAction)().appConfig,p=null===(n=null===(s=null===(i=u.layouts)||void 0===i?void 0:i[d])||void 0===s?void 0:s.content)||void 0===n?void 0:n[c];if((null==p?void 0:p.type)===t.LayoutItemType.Widget&&p.widgetId){const e=null===(r=u.widgets)||void 0===r?void 0:r[p.widgetId];(null===(a=null==e?void 0:e.outputDataSources)||void 0===a?void 0:a.length)>0&&(l=e.outputDataSources.some(e=>v.dataComponentsUtils.getWidgetsUsingDsOrItsDescendantDss(e,u.widgets).length>0))}return l}(a),[a]),d=t.React.useCallback(()=>{i.onConfirmDelete(a)},[a]);t.React.useEffect(()=>{a&&!l&&d()},[a,l]);const c=t.React.useCallback(()=>{i.onCancelDelete()},[]);if(!l)return null;const u=(0,o.getAppConfigAction)().appConfig,p=null===(r=null===(n=null===(s=null==u?void 0:u.layouts)||void 0===s?void 0:s[null==a?void 0:a.layoutId])||void 0===n?void 0:n.content)||void 0===r?void 0:r[null==a?void 0:a.layoutItemId];return(0,e.jsx)(v.DataSourceRemoveWarningPopup,{isOpen:!0,toggle:c,widgetId:null==p?void 0:p.widgetId,reason:v.DataSourceRemoveWaringReason.SourceWidgetRemoved,afterRemove:d})}var y=g(6055),w=g(9298),S=g(6884);function b(o){const{data:i}=o,{templateMethod:s,onSelect:n}=null!=i?i:{},r=t.hooks.useEventCallback(e=>{n(e)});return null==i?null:(0,e.jsx)(w.TemplateList,{templates:S[s](!1),onItemSelect:r})}function x(o){const{data:i}=o,{isPlaceholder:s,isItemAccepted:n,onSelect:r}=null!=i?i:{},a=t.hooks.useEventCallback(e=>{r(e)});return null==i?null:(0,e.jsx)(w.WidgetList,{isPlaceholder:s,isAccepted:n,onSelect:a})}var M=g(1888),C=g(3949),I=function(e,t,o,i){return new(o||(o=Promise))(function(s,n){function r(e){try{l(i.next(e))}catch(e){n(e)}}function a(e){try{l(i.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof o?t:new o(function(e){e(t)})).then(r,a)}l((i=i.apply(e,t||[])).next())})};const{useState:k,useRef:L,useEffect:A}=t.React,R=(0,M.styled)(C.RichExpressionBuilder)(({theme:e})=>{var o,i;const s=e.ref.palette.neutral[400],n=null===(i=null===(o=null==e?void 0:e.ref.palette)||void 0===o?void 0:o.neutral)||void 0===i?void 0:i[1e3],r=e.ref.palette.black;return t.css`
    > * {
      user-select: none;
    }
    width: 285px;
    height: 500px;
    color: ${r};
    background: ${s};
    .panel-header {
      background: ${s};
      color: ${n};
    }
    .expression-body {
      height: 100%;
    }
  `});function j(s){const{theme:n,intl:r,locale:a,isFullScreenPage:l}=s,d=t.hooks.useTranslation(i.defaultMessages),[c,u]=k(null),[p,g]=k({}),[h,m]=k({}),v=t.ReactRedux.useSelector(e=>{var t,o,i,s;const n=null==e?void 0:e.appStateInBuilder,r=null===(t=null==n?void 0:n.appConfig)||void 0===t?void 0:t.layouts,a=null===(o=null==n?void 0:n.appRuntimeInfo)||void 0===o?void 0:o.selection,l=r[null==a?void 0:a.layoutId];return null===(s=null===(i=null==l?void 0:l.content)||void 0===i?void 0:i[null==a?void 0:a.layoutItemId])||void 0===s?void 0:s.widgetId}),f=t.ReactRedux.useSelector(e=>{var t;const o=null==e?void 0:e.appStateInBuilder;return null===(t=null==o?void 0:o.appRuntimeInfo)||void 0===t?void 0:t.currentPageId}),y=L(null),w=L(null),S=L(null),C=L(null),j=L(null),P=L(null),D=L(null),z=t.hooks.usePrevious(v),T=t.hooks.usePrevious(f);let B;A(()=>{const e=e=>I(this,void 0,void 0,function*(){if(!h[e]&&e){const o=`${e}dist/runtime/builder-support`;t.moduleLoader.loadModule(o).then(t=>{switch(m(Object.assign(Object.assign({},h),{[e]:!0})),e){case"widgets/common/button/":y.current=t.default.QuickStyle;break;case"widgets/common/divider/":w.current=t.default.QuickStyle;break;case"widgets/common/navigator/":S.current=t.default.NavQuickStyle,C.current=t.default.ManageViews;break;case"widgets/common/controller/":j.current=t.default.ManageWidgetsComponent;break;case"widgets/layout/accordion/":P.current=t.default.QuickStyle;break;case"widgets/common/login/":D.current=t.default.QuickStyle}})}yield Promise.resolve()});window._builderPubsub.subscribe(`to_builder.${o.ToBuilderMessage.SetSidePanel}`,(t,o)=>{const i=e=>{var t;null===(t=null==o?void 0:o.onSelect)||void 0===t||t.call(o,e),!(null==o?void 0:o.keepPanel)&&g(e=>{const t=Object.assign({},e);return Object.keys(t).forEach(e=>{t[e]=!1}),t})};e(null==o?void 0:o.uri).then(()=>{!1!==(null==o?void 0:o.active)&&u(Object.assign(Object.assign({},o),{onSelect:i}));const e=void 0===(null==o?void 0:o.active)||(null==o?void 0:o.active);g(e?t=>{const i=Object.assign({},t);return Object.keys(i).forEach(e=>{i[e]=!1}),i[(null==o?void 0:o.widgetId)||"other"]=e,i}:t=>{const i=Object.assign({},t);return i[(null==o?void 0:o.widgetId)||"other"]=e,i})})});((null==c?void 0:c.widgetId)!==v&&z!==v||T!==f)&&g(e=>{const t=Object.assign({},e);return Object.keys(t).forEach(e=>{t[e]=!1}),t})},[h,c,z,v,T,f]),B="template"===(null==c?void 0:c.type)||"templateBlock"===(null==c?void 0:c.type)?d("selectTemplate"):"widget"===(null==c?void 0:c.type)?d("addWidget"):"manageWidgets"===(null==c?void 0:c.type)?d("manageWidgets"):"textExpression"===(null==c?void 0:c.type)?d("dynamicContent"):"navigatorManageViews"===(null==c?void 0:c.type)?d("manageViews"):d("quickStyle");const O=t.hooks.useEventCallback(()=>{g(e=>{const t=Object.assign({},e);return Object.keys(t).forEach(e=>{t[e]=!1}),t}),"function"==typeof(null==c?void 0:c.onClose)&&c.onClose()}),W=Object.keys(p).some(e=>p[e]),E=r.messages,$=["buttonQuickStyle","dividerQuickStyle","navigatorQuickStyle"].includes(null==c?void 0:c.type);return(0,e.jsx)(t.IntlProvider,{locale:a,defaultLocale:a,messages:E,children:W&&(0,e.jsxs)("div",{className:"mobile-tool-container",css:((e,o)=>{const i="dark"===e.sys.color.mode;let s=360;switch(o){case"template":s=370;break;case"templateBlock":s=450;break;case"widget":s=405;break;case"manageWidgets":case"navigatorManageViews":s=300;break;case"buttonQuickStyle":s=470;break;case"textExpression":case"navigatorQuickStyle":s=260;break;case"dividerQuickStyle":case"loginQuickStyle":s=360;break;case"accordionQuickStyle":s=310}return t.css`
      width: ${t.polished.rem(s)};
      ${l?"max-height: 100%;":`max-height: ${t.polished.rem(640)};`}
      ${"textExpression"===o&&"height: 640px;"}
      color: ${i?e.sys.color.surface.overlayText:e.sys.color.surface.paperText};
      background-color: ${i?e.sys.color.surface.header:e.sys.color.surface.headerHint};
      border: 1px solid ${i?e.sys.color.divider.tertiary:e.sys.color.surface.paperHint};

      position: sticky;
      top: 20px;
      .panel-header{
        color: ${i?e.sys.color.surface.paperHint:e.sys.color.divider.tertiary} !important;
        .action-btn{
          color: ${i?e.sys.color.surface.paperHint:e.sys.color.divider.tertiary} !important;
          &:hover{
            color: ${i?e.sys.color.surface.background:e.sys.color.surface.backgroundText} !important;
          }
        }
      }
      .mobile-tool-board{
        height: calc(100% - 40px);
        ${"widget"!==o?"overflow-y: auto;":"overflow-y: hidden;"}
        overflow-x: hidden;
        .content{
          height: 100%;
          margin: 0 auto;
          padding: 0px;
        }
        .fixed-at-bottom{
          position: absolute !important;
        }
        .list-container{
          height: calc(100% - 100px);
        }
      }
      .quick-style-item-container{
        padding-left: 4px;
        padding-right: 4px;
        padding-bottom: 8px;
      }
      .quick-style-item{
        border: 2px solid transparent;
        &.quick-style-item-selected{
          border: 2px solid ${e.sys.color.primary.main};
        }
        ${"buttonQuickStyle"===o&&`.quick-style-item-inner{\n          background-color: ${i?e.ref.palette.neutral[500]:e.ref.palette.neutral[1e3]};\n        }`}
      }
    `})(n,null==c?void 0:c.type),onClick:e=>{e.stopPropagation()},children:[(0,e.jsx)(i.PanelHeader,{showClose:!0,onClose:O,title:B}),(0,e.jsx)(M.ThemeSwitchComponent,{useTheme2:$,children:(0,e.jsx)("div",{className:"mobile-tool-board",children:(t=>{if(!t||!c)return;let o;switch(t){case"template":case"templateBlock":o=(0,e.jsx)(b,{data:c});break;case"widget":o=(0,e.jsx)(x,{data:c});break;case"manageWidgets":const t=j.current;o=t?(0,e.jsx)(t,{widgetId:c.widgetId}):null;break;case"buttonQuickStyle":const i=y.current;o=i?(0,e.jsx)(i,{widgetId:c.widgetId}):null;break;case"textExpression":o=(0,e.jsx)(R,{widgetId:c.widgetId,useDataSources:c.useDataSources,editor:c.editor,formats:c.formats,selection:c.selection});break;case"dividerQuickStyle":const s=w.current;o=s?(0,e.jsx)(s,{widgetId:c.widgetId}):null;break;case"navigatorQuickStyle":const n=S.current;o=n?(0,e.jsx)(n,{widgetId:c.widgetId}):null;break;case"navigatorManageViews":const r=C.current;o=r?(0,e.jsx)(r,{widgetId:c.widgetId}):null;break;case"accordionQuickStyle":const a=P.current;o=a?(0,e.jsx)(a,{widgetId:c.widgetId}):null;break;case"loginQuickStyle":const l=D.current;o=l?(0,e.jsx)(l,{widgetId:c.widgetId}):null}return o})(null==c?void 0:c.type)})})]})})}const{useState:P,useEffect:D}=t.React;function z(){const[t,i]=P(null);return D(()=>{window._builderPubsub.subscribe(`to_builder.${o.ToBuilderMessage.ShowTextArcadePanel}`,(e,t)=>{i(t)})},[]),(0,e.jsx)(e.Fragment,{children:t&&(0,e.jsx)(C.RichArcadeContentBuilder,Object.assign({},t,{onModalClose:null==t?void 0:t.onModalClose}))})}o.LayoutServiceProvider.getInstance().registerService(t.LayoutType.RowLayout,new y.RowLayoutService),o.LayoutServiceProvider.getInstance().registerService(t.LayoutType.GridLayout,new y.GridLayoutService),o.LayoutServiceProvider.getInstance().registerService(t.LayoutType.FixedLayout,new y.FixedLayoutService),o.LayoutServiceProvider.getInstance().registerService(t.LayoutType.FlowLayout,new y.FlowLayoutService),o.LayoutServiceProvider.getInstance().registerService(t.LayoutType.ColumnLayout,new y.ColumnLayoutService);class T extends t.React.PureComponent{constructor(i){super(i),this.resizeIframe=()=>{const{viewportSize:e,pageMode:o,appMode:i,currentDialogId:s,isCookieBannerOpenByPrivacyPanel:n}=this.props;if(i!==t.AppMode.Design||s||n)return void(e.height>0?this.deviceRef.current.style.height=`${e.height}px`:this.deviceRef.current.style.height="100%");if(o!==t.PageMode.AutoScroll){return void(!(e.width>0)&&i===t.AppMode.Design&&(this.deviceRef.current.style.height="100%"))}const r=this.appIframe.contentWindow.document.documentElement.querySelector("div#app > div.page-renderer");if(r){const t=r.getBoundingClientRect(),o=Math.round(Math.max(t.height,e.height>0?e.height:768));this.deviceRef.current.style.height=`${o}px`,e.width>0?this.deviceRef.current.style.minHeight="100%":this.deviceRef.current.style.minHeight=null}},this.formatMessage=(e,t)=>this.props.intl.formatMessage({id:e,defaultMessage:a[e]},t),this.mobileToolsHandler=()=>{var o,i;const{theme2:s,intl:n,locale:r,appMode:a,pageMode:l,viewportSize:d}=this.props;if(a===t.AppMode.Run)return null;const c=l===t.PageMode.FitWindow;let u;return u=d.width>0?(null===(i=null===(o=this.deviceRef)||void 0===o?void 0:o.current)||void 0===i?void 0:i.classList.contains("center-origin"))?`calc(50% + ${d.width/2+10}px)`:`${d.width+10}px`:`calc(50% + ${this.contentRef.current.clientWidth/2+10}px)`,(0,e.jsx)("div",{css:t.css`
          position: absolute;
          top: 0;
          bottom: 0;
          left: ${u};
        `,className:"d-flex flex-column",children:(0,e.jsx)(j,{locale:r,intl:n,theme:s,isFullScreenPage:c})})},this.clearSelectionInApp=()=>{o.builderAppSync.publishChangeSelectionToApp(null)},this.showConfirmDeleteDsDialog=()=>{this.setState({shouldShowDeleteDsDialog:!0})},this.hideConfirmDeleteDsDialog=()=>{this.setState({shouldShowDeleteDsDialog:!1})},this.removeLayoutItem=e=>{this.resetConfirmDeleteContent();const i=(0,o.getAppConfigAction)();i.removeLayoutItem(e,!0,!0),i.exec(),window.isExpressBuilder||t.lodash.defer(()=>{const t=l.searchUtils.findParentLayoutInfo(e,i.appConfig,l.utils.getCurrentSizeMode());o.builderAppSync.publishChangeSelectionToApp(t)})},this.resetConfirmDeleteContent=()=>{this.hideConfirmDeleteDsDialog(),(0,t.getAppStore)().dispatch(o.builderActions.confirmDeleteContentChanged(null))},this.state={appUrl:null,isPortrait:!0,shouldShowDeleteDsDialog:!1},this.resizeRef=t.React.createRef(),this.deviceRef=t.React.createRef(),this.contentRef=t.React.createRef(),this.debounceResizeIframe=t.lodash.debounce(this.resizeIframe,200)}componentDidMount(){this.setAppUrl(),t.lodash.defer(()=>{this.resizeIframe()}),window._builderPubsub.subscribe(`to_builder.${o.ToBuilderMessage.ClassificationBannerReady}`,()=>{this.debounceResizeIframe()})}componentDidUpdate(e){this.setAppUrl();const{viewportSize:i,zoomScale:s,appMode:n}=this.props;if(this.viewportWidth===i.width&&Math.round(10*this.zoomScale)===Math.round(10*s)||(this.viewportWidth=i.width,this.zoomScale=s,this.applyZoomScale(this.props.zoomScale)),n!==e.appMode&&n===t.AppMode.Run&&this.contentRef.current&&(this.contentRef.current.scrollTop=0),!e.appConfig&&this.props.appConfig){const e=o.AppResourceManager.getInstance();e.init().catch(e=>{console.error("Init app resource manager failed:",e)}).finally(()=>{e.clearResources(this.props.currentAppId,this.props.appConfig)})}this.debounceResizeIframe()}setAppUrl(){const e=t.urlUtils.getAppIdPageIdFromUrl().pageId;if(e&&"default"!==e)return;let i=`${window.jimuConfig.mountPath}experience/`;const s=this.props.queryObject;let n,r={draft:"true"};s.id?(n=s.id,n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(0,n.length-1)),window.jimuConfig.useStructuralUrl?i+=this.props.queryObject.id+"/":r.id=this.props.queryObject.id):s.app_config&&(n=s.app_config,r.config=s.app_config),r=Object.assign(r,s.without("id","config","views","theme")),i+="?"+t.queryString.stringify(r);const a=this.props.urlHashObject;if(i+="#"+t.queryString.stringify(a),this.state.appUrl!==i){if(this.props.currentAppId!==n){if(this.props.currentAppId&&this.props.appConfig){o.AppResourceManager.getInstance().clearResources(this.props.currentAppId,this.props.appConfig)}o.WidgetSettingManager.getInstance().destroyAllWidgetSettingClasses()}this.setState({appUrl:i})}this.props.currentAppId!==n&&this.props.dispatch(o.appStateActions.inAppAppStateChanged(null))}calAvailableWidth(){const e=this.contentRef.current.getBoundingClientRect();let t=parseFloat(i.styleUtils.remToPixel("3rem"));return isNaN(t)&&(t=48),e.width-t}applyZoomScale(e,o){const{viewportSize:i,browserSizeMode:s}=this.props,n=null!=o?o:this.calAvailableWidth();i.width>0?n<i.width?(this.deviceRef.current.classList.add("left-origin"),this.deviceRef.current.classList.remove("center-origin")):(this.deviceRef.current.classList.add("center-origin"),this.deviceRef.current.classList.remove("left-origin")):s!==t.BrowserSizeMode.Large||e<1?(this.deviceRef.current.classList.add("center-origin"),this.deviceRef.current.classList.remove("left-origin")):(this.deviceRef.current.classList.add("left-origin"),this.deviceRef.current.classList.remove("center-origin")),this.deviceRef.current.style.transform=`scale(${e})`}getButtonGroupStyle(){return t.css`
      position: absolute !important;
      right: 20px;
      top: 15px;
      box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
      button {
        background: white !important;
        border: none !important;
      }

      button:focus {
        box-shadow: none !important;
      }

      button.active {
        background: #00a6b6 !important;
      }
    `}syncLayoutHandler(){var o,i;const{appConfig:s,appMode:n,currentPageId:a,browserSizeMode:l,currentDialogId:d,isRTL:c,isCookieBannerOpenByPrivacyPanel:u}=this.props;if(!s||n!==t.AppMode.Design)return null;const p=s.mainSizeMode;if(l===p)return null;if(u)return null;const g=null===(o=s.pages)||void 0===o?void 0:o[a],h=null===(i=s.dialogs)||void 0===i?void 0:i[d],m=s.header&&g.header&&(s.header.height[l]||s.header.height[p])||0,v=c?{left:"calc( 100% + 12px )"}:{right:"calc( 100% + 12px )"},f=Object.assign({top:"calc( 50% - 30px)",position:"fixed"},v);return(0,e.jsxs)("div",{css:t.css`
          position: absolute;
          top: 0;
          bottom: 0;
          right: calc(100% + 12px);
        `,className:"d-flex flex-column sync-layout-handler",children:[g.header&&!d&&(0,e.jsx)(r,{isAuto:!s.header.layout[l],formatMessage:this.formatMessage,theme:this.props.theme,pageId:a,browserSizeMode:l,mainSizeMode:s.mainSizeMode,isHeader:!0}),!d&&(0,e.jsx)(r,{isAuto:!g.layout[l],formatMessage:this.formatMessage,theme:this.props.theme,browserSizeMode:l,mainSizeMode:s.mainSizeMode,pageId:a,style:{marginTop:`${Math.max(+m-60,20)}px`,top:20}}),g.footer&&!d&&(0,e.jsx)(r,{isAuto:!s.footer.layout[l],formatMessage:this.formatMessage,theme:this.props.theme,browserSizeMode:l,mainSizeMode:s.mainSizeMode,pageId:a,isFooter:!0,style:{bottom:30}}),d&&(0,e.jsx)(r,{isAuto:!h.layout[l],formatMessage:this.formatMessage,theme:this.props.theme,browserSizeMode:l,mainSizeMode:s.mainSizeMode,dialogId:d,isDialog:!0,style:f})]})}render(){var o,s,r,a;const{appConfig:l,theme:d,appMode:c,pageMode:u,viewportSize:p,systemError:g,browserSizeMode:h,dockPanel:v}=this.props,y=!(p.width>0),w=u===t.PageMode.FitWindow,S=this.getScaledViewportSize(),b=null!==(o=null==p?void 0:p.height)&&void 0!==o?o:0,x=l||(null==g?void 0:g.code)===t.SystemErrorCode.AppNotExisted||(null==g?void 0:g.code)===t.SystemErrorCode.AppNotPublished,M=(null==v?void 0:v.isOpen)?{isFullWidth:!!v.isFullWidth,isSplit:!v.isFullWidth,width:null!==(s=v.width)&&void 0!==s?s:"960px",canvasMinWidth:y?v.minCanvasWidth:void 0}:null,C={width:(null==M?void 0:M.isFullWidth)?"100%":null==M?void 0:M.width,flex:(null==M?void 0:M.isFullWidth)?"1 1 100%":M?`0 0 ${M.width}`:void 0},I={minHeight:w&&!y?(null!==(r=S.height)&&void 0!==r?r:0)+100:"100%",minWidth:null!==(a=null==M?void 0:M.canvasMinWidth)&&void 0!==a?a:"100%",width:y?"100%":`calc(${S.width}px + 3rem)`,height:w&&y||c!==t.AppMode.Design?"100%":"auto"};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{css:n(w,b,d),onClick:this.clearSelectionInApp,className:(0,t.classNames)("jimu-widget widget-builder-app-loader",{"dock-panel-split":null==M?void 0:M.isSplit}),children:[!x&&t.ReactDOM.createPortal((0,e.jsx)(i.Loading,{type:i.LoadingType.Primary}),document.body),M&&(0,e.jsx)("div",{id:"app-loader-dock-panel-slot",className:"dock-panel-slot",style:C}),(0,e.jsx)("div",{className:(0,t.classNames)("content-section",{"d-none":null==M?void 0:M.isFullWidth,"dock-panel-split-content":null==M?void 0:M.isSplit}),ref:this.contentRef,children:(0,e.jsx)("div",{className:(0,t.classNames)("content",{"d-flex":y}),style:I,children:(0,e.jsx)("div",{ref:this.resizeRef,className:(0,t.classNames)("body-section d-flex flex-column justify-content-start"),children:(0,e.jsxs)("div",{ref:this.deviceRef,className:(0,t.classNames)("device-frame shadow d-flex flex-grow-1",{invisible:!x}),style:Object.assign(Object.assign({},this.getDeviceSize()),{overflow:"visible"}),children:[(0,e.jsx)("iframe",{allowFullScreen:!0,name:t.APP_FRAME_NAME_IN_BUILDER,src:this.state.appUrl,className:"config-preview",title:this.formatMessage("canvasTitle"),ref:e=>{this.appIframe=e}}),this.syncLayoutHandler(),h===t.BrowserSizeMode.Small&&this.mobileToolsHandler()]})})})}),(0,e.jsx)(m,{formatMessage:this.formatMessage,onConfirmDelete:this.showConfirmDeleteDsDialog,onCancelDelete:this.resetConfirmDeleteContent}),this.state.shouldShowDeleteDsDialog&&(0,e.jsx)(f,{onConfirmDelete:this.removeLayoutItem,onCancelDelete:this.resetConfirmDeleteContent})]}),(0,e.jsx)(z,{})]})}getDeviceSize(){const{pageMode:e,viewportSize:o,appMode:i,currentDialogId:s,isCookieBannerOpenByPrivacyPanel:n}=this.props;return o.width>0?e===t.PageMode.FitWindow||i!==t.AppMode.Design||e===t.PageMode.AutoScroll&&s||e===t.PageMode.AutoScroll&&n?o:{width:o.width}:{width:"100%",height:"100%",minWidth:1024}}getScaledViewportSize(){const{viewportSize:e,zoomScale:t}=this.props;return e.width>0?{width:e.width*t,height:e.height*t}:{}}}T.mapExtraStateProps=(e,o)=>{var i,s,n,r,a,l,d,c,u,p,g,h,m,v,f,y,w,S,b,x,M,C,I,k,L,A;const R=null===(s=null===(i=e.appStateInBuilder)||void 0===i?void 0:i.appRuntimeInfo)||void 0===s?void 0:s.currentPageId,j=(null===(n=e.appStateInBuilder)||void 0===n?void 0:n.browserSizeMode)||t.BrowserSizeMode.Large;let P;R&&(P=null===(d=null===(l=null===(a=null===(r=e.appStateInBuilder)||void 0===r?void 0:r.appConfig)||void 0===a?void 0:a.pages)||void 0===l?void 0:l[R])||void 0===d?void 0:d.mode);const D=t.utils.findViewportSize(null===(c=e.appStateInBuilder)||void 0===c?void 0:c.appConfig,j);return{currentDialogId:null===(p=null===(u=e.appStateInBuilder)||void 0===u?void 0:u.appRuntimeInfo)||void 0===p?void 0:p.currentDialogId,isCookieBannerOpenByPrivacyPanel:null===(m=null===(h=null===(g=e.appStateInBuilder)||void 0===g?void 0:g.appRuntimeInfo)||void 0===h?void 0:h.cookieBanner)||void 0===m?void 0:m.isCookieBannerOpenByPrivacyPanel,currentPageId:R,pageMode:P,viewportSize:D,appConfig:null===(v=e.appStateInBuilder)||void 0===v?void 0:v.appConfig,systemError:null===(f=e.appStateInBuilder)||void 0===f?void 0:f.systemError,currentAppId:e.builder.currentAppId,activePagePart:null===(w=null===(y=e.appStateInBuilder)||void 0===y?void 0:y.appRuntimeInfo)||void 0===w?void 0:w.activePagePart,browserSizeMode:j,appMode:null===(b=null===(S=e.appStateInBuilder)||void 0===S?void 0:S.appRuntimeInfo)||void 0===b?void 0:b.appMode,zoomScale:null!==(C=null===(M=null===(x=e.appStateInBuilder)||void 0===x?void 0:x.appRuntimeInfo)||void 0===M?void 0:M.zoomScale)&&void 0!==C?C:1,widgetsRuntimeInfo:null===(I=e.appStateInBuilder)||void 0===I?void 0:I.widgetsRuntimeInfo,isRTL:null===(k=e.appContext)||void 0===k?void 0:k.isRTL,queryObject:e.queryObject,urlHashObject:e.urlHashObject,locale:e.appContext.locale,defaultLocale:e.appContext.locale,dockPanel:null===(A=null===(L=e.widgetsState)||void 0===L?void 0:L["app-loader"])||void 0===A?void 0:A.dockPanel}};const B=T;function O(e){g.p=e}})(),h})())}}});