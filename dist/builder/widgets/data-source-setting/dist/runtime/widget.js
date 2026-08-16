System.register(["jimu-core","jimu-core/emotion","jimu-for-builder","jimu-layouts/layout-builder","jimu-layouts/layout-runtime","jimu-theme","jimu-ui","jimu-ui/advanced/arcade-content-builder","jimu-ui/advanced/builder-components","jimu-ui/advanced/data-source-selector","jimu-ui/advanced/setting-components","jimu-ui/basic/item-selector"],function(e,t){var s={},i={},a={},o={},n={},r={},l={},d={},p={},c={},h={},u={};return{setters:[function(e){s.ArcadeContentCapability=e.ArcadeContentCapability,s.CONSTANTS=e.CONSTANTS,s.DataSourceManager=e.DataSourceManager,s.DataSourceStatus=e.DataSourceStatus,s.DataSourceTypes=e.DataSourceTypes,s.ExportFormat=e.ExportFormat,s.GridItemType=e.GridItemType,s.Immutable=e.Immutable,s.JimuFieldType=e.JimuFieldType,s.KEYBOARD_NAV_CLASS=e.KEYBOARD_NAV_CLASS,s.LayoutItemType=e.LayoutItemType,s.LayoutParentType=e.LayoutParentType,s.LayoutType=e.LayoutType,s.React=e.React,s.ReactRedux=e.ReactRedux,s.SessionManager=e.SessionManager,s.appConfigUtils=e.appConfigUtils,s.arcadeContentResolverUtils=e.arcadeContentResolverUtils,s.arcadeContentUtils=e.arcadeContentUtils,s.cancelablePromise=e.cancelablePromise,s.classNames=e.classNames,s.css=e.css,s.dataSourceUtils=e.dataSourceUtils,s.defaultMessages=e.defaultMessages,s.esri=e.esri,s.expressionUtils=e.expressionUtils,s.focusElementInKeyboardMode=e.focusElementInKeyboardMode,s.getAppStore=e.getAppStore,s.hooks=e.hooks,s.lodash=e.lodash,s.polished=e.polished,s.proxyUtils=e.proxyUtils,s.uuidv1=e.uuidv1},function(e){i.Fragment=e.Fragment,i.jsx=e.jsx,i.jsxs=e.jsxs},function(e){a.getAppConfigAction=e.getAppConfigAction},function(e){o.getLabelOfGridTab=e.getLabelOfGridTab},function(e){n.utils=e.utils},function(e){r.useTheme=e.useTheme,r.withTheme=e.withTheme},function(e){l.Button=e.Button,l.Checkbox=e.Checkbox,l.CollapsablePanel=e.CollapsablePanel,l.Dropdown=e.Dropdown,l.DropdownButton=e.DropdownButton,l.DropdownItem=e.DropdownItem,l.DropdownMenu=e.DropdownMenu,l.Icon=e.Icon,l.Label=e.Label,l.Link=e.Link,l.Modal=e.Modal,l.NumericInput=e.NumericInput,l.Popper=e.Popper,l.Radio=e.Radio,l.Switch=e.Switch,l.Tab=e.Tab,l.Tabs=e.Tabs,l.TextInput=e.TextInput,l.Tooltip=e.Tooltip,l.defaultMessages=e.defaultMessages},function(e){d.ArcadeContentBuilder=e.ArcadeContentBuilder},function(e){p.MessageActionList=e.MessageActionList},function(e){c.DataSourceErrorItem=e.DataSourceErrorItem,c.DataSourceIdCopyButton=e.DataSourceIdCopyButton,c.DataSourceItem=e.DataSourceItem,c.DataSourceRemoveWaringReason=e.DataSourceRemoveWaringReason,c.DataSourceRemoveWarningPopup=e.DataSourceRemoveWarningPopup,c.DataViewSettingPopup=e.DataViewSettingPopup,c.EditAcradePopup=e.EditAcradePopup,c.ExternalDataSourceSelector=e.ExternalDataSourceSelector,c.dataComponentsUtils=e.dataComponentsUtils},function(e){h.SettingRow=e.SettingRow,h.SettingSection=e.SettingSection,h.SidePopper=e.SidePopper},function(e){u.ItemDetail=e.ItemDetail}],execute:function(){e((()=>{var e={4156(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M12 6.5c0 .527-.074 1.036-.212 1.518l.912.438a6.5 6.5 0 1 0-6.586 4.533l-.077-1.008A5.5 5.5 0 1 1 12 6.5m-9 0a3.5 3.5 0 0 0 2.88 3.445L5.8 8.901a2.501 2.501 0 1 1 3.194-2.224l.949.456A3.5 3.5 0 1 0 3 6.5M15.5 11l-5 1-3 4-1-9.5zm-5.57.094-1.702 2.269-.542-5.152 4.76 2.38z" clip-rule="evenodd"></path></svg>'},8703(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M7.5 1.5a.5.5 0 0 1 1 0v2.8a.5.5 0 0 1-1 0zm6.028.874a.5.5 0 0 1 .062.705l-1.414 1.685a.5.5 0 1 1-.766-.643l1.414-1.685a.5.5 0 0 1 .704-.062m-10.352.062a.5.5 0 1 0-.766.643l1.414 1.685a.5.5 0 0 0 .766-.643zM6.244 10.6H5.43zM.961 9.8h4.88c.211 0 .359.19.359.4q0 .207.045.4a1.8 1.8 0 0 0 3.51 0h.814a2.6 2.6 0 0 1-5.139 0H.8v3.6h14.4v-3.6H9.755q.045-.194.045-.4c0-.21.148-.4.358-.4h4.881l-2.267-3.4H3.228zm11.81-4.2a.8.8 0 0 1 .666.356l2.429 3.642a.8.8 0 0 1 .134.444V14.2a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1-.8-.8v-4.158a.8.8 0 0 1 .134-.444l2.429-3.642a.8.8 0 0 1 .665-.356z" clip-rule="evenodd"></path></svg>'},6337(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M15.29 6.208 8 1 .71 6.208a.5.5 0 1 0 .58.813L2 6.515V15h12V6.514l.71.507a.5.5 0 0 0 .58-.813M13 5.8 8 2.229 3 5.8V14h3v-4h4v4h3zM9 14H7v-3h2z" clip-rule="evenodd"></path></svg>'},4865(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M4 4h2.5v1H4a3 3 0 0 0 0 6h2.5v1H4a4 4 0 1 1 0-8M12 11H9.5v1H12a4 4 0 1 0 0-8H9.5v1H12a3 3 0 0 1 0 6"></path><path fill="#000" d="M5.5 7.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"></path></svg>'},8704(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2m5 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0m6 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0" clip-rule="evenodd"></path></svg>'},4112(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M9.438.994c.213 0 .397.146.44.35q.227 1.084.316 1.852.562.242 1.048.599l1.728-.676a.455.455 0 0 1 .556.188l1.42 2.394a.43.43 0 0 1-.091.547 22 22 0 0 1-1.49 1.194q.03.27.03.552 0 .32-.038.63l1.465 1.12a.43.43 0 0 1 .111.563l-1.42 2.394a.454.454 0 0 1-.53.197 23 23 0 0 1-1.807-.66q-.49.35-1.055.586l-.263 1.794a.446.446 0 0 1-.445.376H6.574a.446.446 0 0 1-.44-.35 21 21 0 0 1-.317-1.853 5.3 5.3 0 0 1-1.047-.598l-1.728.675a.455.455 0 0 1-.556-.187l-1.42-2.395a.43.43 0 0 1 .091-.546q.85-.735 1.49-1.194a5.167 5.167 0 0 1 .008-1.183L1.19 6.243a.43.43 0 0 1-.112-.562l1.42-2.395a.455.455 0 0 1 .531-.196q1.078.35 1.807.66c.324-.233.679-.43 1.056-.587l.262-1.794A.446.446 0 0 1 6.6.994zm-.365 1H6.985l-.28 1.866-.467.19q-.353.144-.672.34l-.207.136-.42.293-.476-.197q-.492-.205-1.169-.433l-.221-.074-1.045 1.719L3.59 6.999l-.06.479a4 4 0 0 0-.021.816l.014.144.058.492-.419.294q-.433.304-.979.746l-.177.145 1.043 1.72 1.845-.703.406.29q.307.219.645.384l.228.103.474.199.059.49q.06.507.19 1.177l.043.219h2.088l.282-1.867.466-.19q.354-.144.672-.34l.207-.136.419-.293.476.198q.495.204 1.17.433l.22.072 1.044-1.718-1.56-1.165.06-.479a4 4 0 0 0 .02-.815l-.013-.144-.06-.492.42-.295a18 18 0 0 0 .98-.746l.176-.146-1.043-1.72-1.844.705-.406-.29a4.5 4.5 0 0 0-.646-.385l-.228-.103-.474-.199-.058-.49q-.049-.405-.14-.916zm-1.067 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clip-rule="evenodd"></path></svg>'},8787(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M0 0h16v16H0z" opacity=".01"></path><path fill="#000" fill-rule="evenodd" d="m9.603 3-4.175 9.642.97.358 4.174-9.642zm1.897 8.233-.738-.681L13.524 8l-2.762-2.552.738-.681L15 8zm-7-6.466.738.681L2.476 8l2.762 2.552-.738.681L1 8z" clip-rule="evenodd"></path></svg>'},3866(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M10.5 1a.5.5 0 0 1 .5.5V2h3a1 1 0 0 1 1 1v5.672A4.5 4.5 0 0 1 8.673 15H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3v-.5a.5.5 0 0 1 1 0V2h4v-.5a.5.5 0 0 1 .5-.5m1 7a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7M2 14h5.759a4.5 4.5 0 0 1 6.249-6.236L14 7.758V6H2zm0-9h12V3h-3v.5a.5.5 0 0 1-1 0V3H6v.5a.5.5 0 0 1-1 0V3H2z" clip-rule="evenodd"></path><path fill="#000" d="M11.5 9a.5.5 0 0 1 .5.5V11h1.5a.5.5 0 0 1 0 1H11V9.5a.5.5 0 0 1 .5-.5"></path></svg>'},6008(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M5.5 1a.5.5 0 0 0-.5.5V2H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-3v-.5a.5.5 0 0 0-1 0V2H6v-.5a.5.5 0 0 0-.5-.5M10 3.5V3H6v.5a.5.5 0 0 1-1 0V3H2v2h12V3h-3v.5a.5.5 0 0 1-1 0M14 6H2v8h12zM5 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" clip-rule="evenodd"></path></svg>'},9919(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m1.373 8 2.07-2.071.83.828L2.2 8.828a3.515 3.515 0 0 0 4.97 4.971l2.072-2.071.828.828L8 14.627A4.686 4.686 0 1 1 1.373 8M13.799 7.172l-2.071 2.07.828.83L14.627 8A4.686 4.686 0 1 0 8 1.373l-2.071 2.07.828.83L8.828 2.2a3.515 3.515 0 0 1 4.971 4.97"></path><path fill="#000" d="M5.515 9.657a.586.586 0 0 0 .828.828l4.142-4.142a.586.586 0 0 0-.828-.828z"></path></svg>'},5255(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="m5.635 9.86 2.168-2.18L8 7.471q.102-.11.185-.233t.138-.258a.7.7 0 0 0 .055-.283.73.73 0 0 0-.244-.558.8.8 0 0 0-.256-.151.9.9 0 0 0-.312-.054.82.82 0 0 0-.583.214.92.92 0 0 0-.276.573l-.993-.082q.03-.401.185-.709.153-.307.398-.512.244-.205.568-.311A2.2 2.2 0 0 1 7.566 5q.38 0 .706.102.327.103.572.304.244.2.386.512.142.311.142.73 0 .549-.24.946-.24.398-.62.758l-1.726 1.664h2.586v.886H5.635zM3.6 6.23 2.55 7.238 2 6.558l1.687-1.46h.86v5.804H3.6zm8.23 1.204h-.244v.886h.229q.212 0 .434.032.22.033.398.128a.8.8 0 0 1 .292.27q.114.177.114.455 0 .204-.075.373a.9.9 0 0 1-.205.287.986.986 0 0 1-.658.25q-.379 0-.6-.197a1.05 1.05 0 0 1-.307-.557l-1.01.278q.096.36.277.62.18.257.43.421.247.164.555.242.307.078.655.078.37 0 .713-.11.343-.111.603-.328.261-.217.414-.537.154-.321.154-.738 0-.54-.276-.935-.276-.393-.812-.475v-.016q.45-.115.702-.48.252-.364.252-.832a1.41 1.41 0 0 0-.536-1.16 1.7 1.7 0 0 0-.568-.29A2.4 2.4 0 0 0 12.076 5q-.307 0-.591.074-.285.074-.52.225-.237.151-.41.39a1.8 1.8 0 0 0-.268.557l1 .279a.95.95 0 0 1 .328-.472.83.83 0 0 1 .508-.168q.355 0 .576.213a.73.73 0 0 1 .22.55.8.8 0 0 1-.094.418.64.64 0 0 1-.248.237 1 1 0 0 1-.347.107 3 3 0 0 1-.398.024" clip-rule="evenodd"></path></svg>'},2276(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M12.89 6.032q.214.113.442.452l.574-.58q-.31-.493-.67-.698A1.55 1.55 0 0 0 12.454 5q-.48 0-.882.214a2.05 2.05 0 0 0-.69.609 3 3 0 0 0-.454.955 4.4 4.4 0 0 0-.165 1.246q0 .669.165 1.218.164.549.453.94t.691.604.882.214q.456 0 .86-.242.405-.242.686-.774l-.61-.597q-.204.363-.441.528a.85.85 0 0 1-.49.166q-.321 0-.582-.162a1.5 1.5 0 0 1-.448-.443 2.2 2.2 0 0 1-.29-.67 3.3 3.3 0 0 1-.102-.846q0-.427.102-.799.102-.37.29-.649.187-.277.448-.435.26-.158.583-.158.216 0 .43.113m-8.448-.887h-.638L2 10.855h.826L3.2 9.548h1.798l.386 1.307h.843zm-.34 1.21.639 2.322H3.452zm2.59-1.21h1.615q.235 0 .463.077.228.076.407.25.18.173.29.447.111.275.111.662 0 .483-.199.798t-.521.452v.016a.9.9 0 0 1 .36.149q.167.117.284.298.117.182.185.42.067.237.067.512 0 .468-.135.778t-.354.5a1.3 1.3 0 0 1-.504.27 2.1 2.1 0 0 1-.577.08H6.691zm1.41 2.323H7.43V6.016h.61q.42 0 .611.182.19.18.19.552a.73.73 0 0 1-.184.52q-.185.198-.554.198M7.43 9.984h.68q.14 0 .301-.024a.675.675 0 0 0 .518-.367.96.96 0 0 0 .088-.448q0-.45-.214-.629-.213-.177-.664-.177h-.709z" clip-rule="evenodd"></path></svg>'},343(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8.3 15.6A7.3 7.3 0 1 0 8.3 1a7.3 7.3 0 0 0 0 14.6M8.3 2A6.3 6.3 0 1 1 2 8.3 6.307 6.307 0 0 1 8.3 2m3.5 6.8h-4v-5h1v4h3z" clip-rule="evenodd"></path></svg>'},1337(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M14.497 7c.277 0 .501-.224.502-.5v-.001A.5.5 0 0 0 14.5 6h-12l2.604-3.135a.528.528 0 0 0-.805-.682L1.243 5.718A1 1 0 0 0 1 6.372V6.5a.5.5 0 0 0 .5.5zM1.503 9c-.277 0-.501.224-.502.5v.001c0 .276.224.499.499.499h12l-2.604 3.135a.528.528 0 0 0 .805.682l3.056-3.535A1 1 0 0 0 15 9.628V9.5a.5.5 0 0 0-.5-.5z" clip-rule="evenodd"></path></svg>'},85(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M11.347 2.146a.485.485 0 0 1 0 .708L5.76 8l5.587 5.146a.486.486 0 0 1 0 .708.54.54 0 0 1-.738 0l-5.956-5.5a.485.485 0 0 1 0-.708l5.956-5.5a.54.54 0 0 1 .738 0" clip-rule="evenodd"></path></svg>'},5629(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M7.5 0a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0 0 1H7v6.5a.5.5 0 0 0 1 0V8h6.5a.5.5 0 0 0 0-1H8V.5a.5.5 0 0 0-.5-.5"></path></svg>'},8698(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M7.986 1a6.99 6.99 0 0 1 5.723 2.969l-2.551-.938a.5.5 0 1 0-.345.938l4.228 1.555.163-.944.013-.005-.009-.019.6-3.471a.5.5 0 1 0-.985-.17l-.403 2.33A8 8 0 0 0 0 7.5c-.016.277.21.501.486.501a.53.53 0 0 0 .517-.5A7 7 0 0 1 7.986 1M8.015 15a6.99 6.99 0 0 1-5.724-2.969l2.551.938a.497.497 0 0 0 .642-.296.5.5 0 0 0-.297-.642L.96 10.476l-.163.944-.013.005.009.019-.6 3.471a.5.5 0 1 0 .985.17l.403-2.33A8 8 0 0 0 16 8.5a.477.477 0 0 0-.485-.501.53.53 0 0 0-.518.5A7 7 0 0 1 8.015 15"></path></svg>'},5281(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-1.27 4.936a6.5 6.5 0 1 1 .707-.707l4.136 4.137a.5.5 0 1 1-.707.707z" clip-rule="evenodd"></path></svg>'},1073(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M15.88 2.825a.5.5 0 0 0-.759-.65l-2.323 2.71-1.265-1.265a.5.5 0 1 0-.707.707l1.265 1.265a1 1 0 0 0 1.466-.056zm0 8a.5.5 0 0 0-.759-.65l-2.323 2.71-1.265-1.265a.5.5 0 1 0-.707.708l1.265 1.264a1 1 0 0 0 1.466-.056zM9 4.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1 0-1h8a.5.5 0 0 1 .5.5M8.5 13a.5.5 0 0 0 0-1h-8a.5.5 0 0 0 0 1z" clip-rule="evenodd"></path></svg>'},2907(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M16 4.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1 0-1h8a.5.5 0 0 1 .5.5M16 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1 0-1h8a.5.5 0 0 1 .5.5M5.146 2.12a.5.5 0 0 1 .055.705l-2.324 2.71a1 1 0 0 1-1.466.057L.146 4.327a.5.5 0 0 1 .708-.707l1.264 1.265 2.323-2.71a.5.5 0 0 1 .705-.055M5.146 10.12a.5.5 0 0 1 .055.705l-2.324 2.71a1 1 0 0 1-1.466.057L.146 12.328a.5.5 0 1 1 .708-.708l1.264 1.265 2.323-2.71a.5.5 0 0 1 .705-.055" clip-rule="evenodd"></path></svg>'},6597(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6.5 7.5A.5.5 0 0 1 7 7h1.5v4.5h1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h1V8H7a.5.5 0 0 1-.5-.5"></path><path fill="#000" fill-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16m0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14" clip-rule="evenodd"></path></svg>'},3935(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8 2.125 14.334 14H1.667zm-.882-.47a1 1 0 0 1 1.765 0l6.333 11.874A1 1 0 0 1 14.334 15H1.667a1 1 0 0 1-.882-1.47zM8 4.874a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0L8.9 5.87a.905.905 0 0 0-.9-.995m1 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0" clip-rule="evenodd"></path></svg>'},9244(e){"use strict";e.exports=s},7386(e){"use strict";e.exports=i},4108(e){"use strict";e.exports=a},6055(e){"use strict";e.exports=o},1496(e){"use strict";e.exports=n},1888(e){"use strict";e.exports=r},4321(e){"use strict";e.exports=l},4963(e){"use strict";e.exports=d},6739(e){"use strict";e.exports=p},3089(e){"use strict";e.exports=c},9298(e){"use strict";e.exports=h},6340(e){"use strict";e.exports=u}},t={};function m(s){var i=t[s];if(void 0!==i)return i.exports;var a=t[s]={exports:{}};return e[s](a,a.exports,m),a.exports}m.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return m.d(t,{a:t}),t},m.d=(e,t)=>{for(var s in t)m.o(t,s)&&!m.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},m.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),m.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},m.p="";var g={};return m.p=window.jimuConfig.baseUrl,(()=>{"use strict";m.r(g),m.d(g,{__set_webpack_public_path__:()=>os,default:()=>as});var e=m(7386),t=m(9244),s=m(4321),i=m(9298),a=m(3089),o=m(6340),n=m(4108),r=m(1496);const l="-$";function d(e,s){const i=u(e);if(!i)return null;let o;if(e.isDataSourceSet()){o={childSchemas:{}};const n=function(){const e=function(){const e=t.appConfigUtils.getAllWidgets(a.dataComponentsUtils.getAppConfig()).filter(e=>{var t;return null===(t=e.useDataSourcesEnabled)||void 0===t||t});return p(e)}(),s=function(){const e=a.dataComponentsUtils.getAppConfig(),t=e&&e.messageConfigs?Object.keys(e.messageConfigs).map(t=>e.messageConfigs[t]):[];let s=[];t.forEach(e=>{e.actions&&(s=s.concat(e.actions.asMutable()))});return p(s)}(),i=function(){const e=a.dataComponentsUtils.getAppConfig(),t=e&&e.dataSources;let s=[];return t&&Object.keys(t).forEach(e=>{t[e]&&!t[e].isOutputFromWidget&&t[e].originDataSources&&t[e].originDataSources.length>0&&(s=s.concat(t[e].originDataSources.asMutable().map(e=>e.dataSourceId)))}),s}(),o=e.concat(s).concat(i);return Array.from(new Set(o))}();Object.keys(i.childSchemas).filter(t=>n.some(s=>e.getChildDataSourceId(t)===s)).forEach(t=>{o.childSchemas[t]=Object.assign({},d(e.getChildDataSource(t),s))})}else{o=Object.assign(Object.assign({},u(e)),{fields:{}});const n=function(e){var s;if(!e)return[];const i=e.getDataSourceJson()&&e.getDataSourceJson().useFields&&e.getDataSourceJson().useFields.asMutable()||[],o=function(e){if(!e)return[];const s=a.dataComponentsUtils.getOutputDssFromOriginDs(e).map(s=>function(e,s){if(!s||!e)return[];const i=function(e){const s=t.appConfigUtils.getAllWidgets(a.dataComponentsUtils.getAppConfig()).filter(e=>{var t;return null===(t=e.useDataSourcesEnabled)||void 0===t||t});return function(e,t){if(!e)return[];let s=[];return e.forEach(e=>{e.useDataSources&&e.useDataSources.forEach(e=>{e.fields&&e.mainDataSourceId&&e.mainDataSourceId===t&&(s=s.concat(e.fields))})}),s}(s,e)}(s.id),o=s.getSchema(),n=o&&o.fields;let r,l,d,p=[];return i.forEach(t=>{r=n[t],l=r&&r.originFields&&r.originFields.asMutable()||[],l.length>0?(d=l.some(t=>t.split(`${e.id}.`).length>1),d&&(l=l.filter(t=>t.split(`${e.id}.`).length>1).map(t=>t.split(`${e.id}.`)[1]))):l=[t],p=p.concat(l)}),p}(e,s)),i=Array.prototype.concat.apply([],s);return Array.from(new Set(i))}(e),n=e.getConfigUsedFields(),r=e.getAllDerivedDataSources().reduce((t,s)=>{var i;const a=s.getConfigUsedFields();return"*"===a?Object.keys((null===(i=e.getSchema())||void 0===i?void 0:i.fields)||{}):t.concat(a)},"*"===n?Object.keys((null===(s=e.getSchema())||void 0===s?void 0:s.fields)||{}):n),l=i.concat(o).concat(r);return Array.from(new Set(l))}(e);i.fields&&Object.keys(i.fields).filter(e=>n.some(t=>e===t)).forEach(e=>{o.fields[e]=Object.assign({},i.fields[e]),"function"==typeof s&&(o.fields[e]=s(o.fields[e]))})}return o}function p(e){if(!e)return[];let t=[];return e.forEach(e=>{e.useDataSources&&e.useDataSources.forEach(e=>{t=t.concat(e.dataSourceId)})}),t}function c(e,t){return!(!e||!t)&&(h(e)?Object.keys(e.childSchemas).every(s=>c(e.childSchemas[s],t.childSchemas[s])):e.fields&&Object.keys(e.fields).every(e=>!(!t.fields||!t.fields[e])))}function h(e){return!!e&&!!e.childSchemas}function u(e){return e&&e.getSchema?e.getSchema():null}function f(e,s,i){let a=s.merge({});return a=a.set("id",e.id),a=a.set("schema",(0,t.Immutable)(i)),a}function S(e){const t=[];return e&&e.id&&e.getDataSourceJson()&&e.isDataSourceSet()&&v(e,t),t}function v(e,t){e.isDataSourceSet()&&e.getChildDataSources().forEach(e=>{e&&e.getDataSourceJson()&&e.id&&(t.push(e),v(e,t))})}function x(e,t,s){let i={};if(!e||!t)return e&&h(e)&&(i.childSchemas={}),i;if(h(e)&&h(t)){let a,o;i={childSchemas:{}},Object.keys(e.childSchemas).forEach(n=>{a=e.childSchemas[n].childId,o=s&&s.childSchemas&&s.childSchemas[n],i.childSchemas[n]=t.childSchemas[a]?x(e.childSchemas[n],t.childSchemas[a],o):null})}else h(e)||h(t)?console.error("types of data sources are not matched"):i=Object.assign(Object.assign({},t),{fields:D(e,t,s),jimuChildId:e.jimuChildId});return i}function D(e,t,s){const i={};if(!(e&&e.fields&&t&&t.fields))return i;let a,o,n,r;return Object.keys(e.fields).forEach(l=>{n=e.fields[l],a=n.jimuName,o=n.name,r=t.fields[o],r&&r.esriFieldType===n.esriFieldType&&(i[a]=y(n,r,s))}),i}function y(e,t,s){let i;return s&&s.fields&&s.fields[e.jimuName]?(i=s.asMutable({deep:!0}).fields[e.jimuName],i.name=t.name):(i=function(e){if(!e)return null;const t=Object.assign({},e);t.alias&&delete t.alias;return t}(Object.assign({},t)),i.jimuName=e.jimuName),i}function w(e,t){return!!(e&&t&&t.childSchemas)&&Object.keys(t.childSchemas).some(s=>t.childSchemas[s].childId===e)}function b(e,t){if(!e||!t)return null;const s=Object.assign({},e),i=t.jimuChildId,a=t.childId;let o,n,r,d;return function(e,t){return!!(e&&t&&t.childSchemas)&&Object.keys(t.childSchemas).some(t=>t===e)}(i,e)&&!w(a,e)&&(o=`${i}${l}${function(e,t){let s,i=0;if(!t||!e)return i;const a=e.split(l)[0];return Object.keys(t.childSchemas).forEach(e=>{s=e.split(l)||[],s.length>1&&s[0]===a&&parseInt(s[1])>i&&(i=parseInt(s[1]))}),i+1}(i,e)}`,n=h(t)?Object.assign(Object.assign({},t),{jimuChildId:o}):Object.assign(Object.assign({},t),{fields:{},jimuChildId:o}),s.childSchemas[o]=x(n,n,null)),d=Object.keys(e.childSchemas).filter(t=>e.childSchemas[t].childId===a),d.forEach(i=>{r=e.childSchemas[i],r&&(h(t)&&h(r)?Object.keys(t.childSchemas).forEach(e=>{s.childSchemas[i]=b(r,t.childSchemas[e])}):h(t)||h(r)?console.error("types of data sources are not matched"):Object.keys(t.fields).forEach(e=>{s.childSchemas[i]=j(r,t.fields[e])}))}),s}function j(e,t){const s=Object.assign({},e),i=t.jimuName;let a,o;var n,r;return!function(e,t){return!!(e&&t&&t.fields)&&!!t.fields[e]}(i,s)||(n=t.name,r=s,n&&r&&r.fields&&Object.keys(r.fields).some(e=>r.fields[e].name===n))||(a=`${i}${l}${function(e,t){let s,i=0;if(!t||!t.fields)return i;const a=e.split(l)[0];return Object.keys(t.fields).forEach(e=>{s=t.fields[e].jimuName?t.fields[e].jimuName.split(l):[],s.length>1&&s[0]===a&&parseInt(s[1])>i&&(i=parseInt(s[1]))}),i+1}(i,s)}`,o=Object.assign(Object.assign({},t),{jimuName:a}),s.fields[a]=y(o,o,null)),s}function M(e){return Object.keys(e).sort((e,t)=>null==e?void 0:e.localeCompare(t))}function C(e,t,s){const i=d(t),a=u(e);return w(a.childId,i)?Object.keys(i.childSchemas).filter(e=>i.childSchemas[e].childId!==a.childId).every(e=>s.some(t=>u(t).childId===i.childSchemas[e].childId)):(console.warn("data source is not child of ",t),!1)}function I(e){return e.getDataSourceJson().itemId||u(e)&&u(e).childId}function N(e,t){let s=[];return(null==e?void 0:e.length)>0&&e.forEach(e=>{a.dataComponentsUtils.isFuzzySearch(null==e?void 0:e.getLabel(),t)&&(s=s.concat(e)),(null==e?void 0:e.isDataSourceSet())&&(s=s.concat(N(e.getChildDataSources(),t)))}),s}function O(e,s){var i;const o=null===(i=r.utils.getAppConfig())||void 0===i?void 0:i.widgets;return 0===a.dataComponentsUtils.getWidgetsUsingDsOrItsDescendantDss(e,o).length?((0,n.getAppConfigAction)().removeDataSource(e).exec(),t.DataSourceManager.getInstance().destroyDataSource(e),!0):(s(e),!1)}function R(e,s){e&&s&&Object.keys(e).forEach(i=>{var a,o,n,r;const l=s.find(e=>`${e.id}`===i);l||delete e[i];const d=[t.DataSourceTypes.GroupLayer,t.DataSourceTypes.SubtypeGroupLayer,t.DataSourceTypes.MapService],p=null===(a=e[i])||void 0===a?void 0:a.type;(null===(o=e[i])||void 0===o?void 0:o.childDataSourceJsons)&&(d.includes(p)||p===t.DataSourceTypes.MapService&&(null===(n=l.layers)||void 0===n?void 0:n.length))&&R(null===(r=e[i])||void 0===r?void 0:r.childDataSourceJsons,l.layers)})}class k extends t.React.PureComponent{constructor(e){super(e),this.onRemove=e=>{var t,s,i;e.stopPropagation(),e.nativeEvent.stopImmediatePropagation();const a=O(null===(t=this.props.dsJson)||void 0===t?void 0:t.id,this.openRemoveWarningPopup);this.props.onRemoveItem&&this.props.onRemoveItem(null===(s=this.props.dsJson)||void 0===s?void 0:s.id),a&&this.props.toggle(null===(i=this.props.dsJson)||void 0===i?void 0:i.id)},this.onRename=e=>{var t,s;e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),this.props.onRenameItem&&this.props.onRenameItem(null===(t=this.props.dsJson)||void 0===t?void 0:t.id),this.props.toggle(null===(s=this.props.dsJson)||void 0===s?void 0:s.id)},this.openRemoveWarningPopup=()=>{this.setState({isRemoveDsWarningOpen:!0})},this.closeRemoveWarningPopup=()=>{this.setState({isRemoveDsWarningOpen:!1})},this.toggleMoreOptions=()=>{var e;this.closeRemoveWarningPopup(),this.props.toggle(null===(e=this.props.dsJson)||void 0===e?void 0:e.id)},this.getStyle=e=>t.css`
      .ds-more-options{
        position: fixed;
        background-color: ${e.sys.color.secondary.main};
        color: ${e.ref.palette.neutral[1200]};
        z-index: 3;
        user-select: none;
        font-size: 13px;
        border: 1px solid ${e.ref.palette.neutral[600]};
        box-shadow: 0 0 6px 0 ${t.polished.rgba(e.ref.palette.white,.2)};
        margin-left: ${t.polished.rem(-32)};
        border-radius: 2px;
        .ds-more-option{
          word-wrap: break-word;
          white-space: nowrap;
          line-height: ${t.polished.rem(26)};
          border-bottom: 1px;
          border-radius: 0;
          width: 100%;
          cursor: pointer;
          padding-left: 12px;
          padding-right: 12px;
        }
        .ds-more-option:hover{
          background-color: ${e.sys.color.primary.main};
        }
        .ds-more-option:active.ds-more-option:hover{
          background-color: ${e.sys.color.primary.main};
        }
      }
    `,this.state={isRemoveDsWarningOpen:!1,selectedWidgets:[]}}render(){var t;return this.props.reference&&this.props.dsJson?(0,e.jsx)(s.Popper,{css:this.getStyle(this.props.theme),reference:this.props.reference,open:this.props.isOpen,placement:"right-start",offsetOptions:this.props.offset||[25,0],toggle:this.toggleMoreOptions,children:(0,e.jsxs)("div",{className:"ds-more-options py-2",children:[!this.props.isRenameHidden&&(0,e.jsx)(s.Button,{type:"tertiary",className:"ds-more-option py-0",onClick:this.onRename,children:this.props.intl.formatMessage({id:"rename",defaultMessage:s.defaultMessages.rename})}),!this.props.isRemoveHidden&&(0,e.jsx)(s.Button,{type:"tertiary",className:"ds-more-option py-0",onClick:this.onRemove,children:this.props.intl.formatMessage({id:"remove",defaultMessage:s.defaultMessages.remove})}),(0,e.jsx)(a.DataSourceRemoveWarningPopup,{dataSourceId:null===(t=this.props.dsJson)||void 0===t?void 0:t.id,isOpen:this.state.isRemoveDsWarningOpen,onCancel:this.toggleMoreOptions,toggle:this.closeRemoveWarningPopup,reason:a.DataSourceRemoveWaringReason.DataSourceRemoved,afterRemove:this.toggleMoreOptions})]})}):null}}const T=[];class E extends t.React.PureComponent{constructor(e){super(e),this.handleFocus=()=>{setTimeout(()=>{var e,s;if(null===(s=null===(e=document.body)||void 0===e?void 0:e.classList)||void 0===s?void 0:s.contains(t.KEYBOARD_NAV_CLASS)){const e=document.querySelector(`.list-item-${this.index} .data-source-item-more-button`);if(e)return void(0,t.focusElementInKeyboardMode)(e,!0);const s=document.querySelector(`.list-item-${this.index+1} .data-source-item-more-button`);if(s)return void(0,t.focusElementInKeyboardMode)(s,!0);const i=document.querySelector(`.list-item-${this.index-1} .data-source-item-more-button`);if(i)return void(0,t.focusElementInKeyboardMode)(i,!0);(0,t.focusElementInKeyboardMode)(document.querySelector(".data-setting-add-data-button"),!0)}})},this.clearRemovedChildDataSourcesFromDataSourceJson=()=>{var e;if(!(null===(e=this.props.ds)||void 0===e?void 0:e.map)||T.includes(this.props.ds.id))return;T.push(this.props.ds.id);const s=this.props.ds.getDataSourceJson(),i=this.props.ds.map.resourceInfo;if(!(null==s?void 0:s.childDataSourceJsons)||!(null==i?void 0:i.operationalLayers))return;const a=(i.operationalLayers||[]).concat(i.tables||[]),o=s.childDataSourceJsons.asMutable({deep:!0});R(o,a),t.lodash.isDeepEqual(s.childDataSourceJsons,o)||(0,n.getAppConfigAction)().editDataSource(s.set("childDataSourceJsons",o)).exec()},this.onOpenRenameInput=()=>{this.setState({isRenameShown:!0})},this.toggleMoreOptions=()=>{this.props.toggleMoreOptions&&this.props.toggleMoreOptions(this.props.ds.id)},this.onChildDataIconClick=()=>{this.props.onChildDataIconClick&&this.props.onChildDataIconClick(this.props.ds)},this.onRelatedWidgetsIconClick=()=>{this.props.onRelatedWidgetsIconClick&&this.props.onRelatedWidgetsIconClick(this.props.ds)},this.onRename=e=>{if(!e)return void this.setState({isRenameShown:!1});const t=this.props.ds.getDataSourceJson().setIn(["label"],e),s=a.dataComponentsUtils.editDataSourceJson(t);(0,n.getAppConfigAction)().editDataSource(s).exec(),this.setState({isRenameShown:!1})},this.onDataSourceItemClick=()=>{this.props.onDataSourceItemClick(this.props.ds)},this.onMappingIconClick=()=>{this.props.onMappingIconClick(this.props.ds)},this.state={isRenameShown:!1},this.index=E.count,E.count++}componentDidMount(){this.clearRemovedChildDataSourcesFromDataSourceJson()}componentDidUpdate(e){var t,s;(null===(t=this.props.ds)||void 0===t?void 0:t.id)!==(null===(s=e.ds)||void 0===s?void 0:s.id)&&this.clearRemovedChildDataSourcesFromDataSourceJson(),e.isMoreOptionsShown&&!this.props.isMoreOptionsShown&&this.handleFocus()}componentWillUnmount(){this.handleFocus()}render(){if(!this.props.ds)return null;const t=!this.props.ds.parentDataSource;return(0,e.jsxs)("div",{className:`m-4 list-item list-item-${this.index}`,ref:e=>{this.rootDom=e},children:[(0,e.jsx)(a.DataSourceItem,{dataSourceJson:this.props.ds.getDataSourceJson().merge({label:this.props.ds.getLabel()}),isMappingIconShown:!1,onDataSourceItemClick:this.onDataSourceItemClick,isMoreIconShown:t,isRenameInputShown:this.state.isRenameShown&&t,isRelatedWidgetsShown:!0,onMoreIconClick:this.toggleMoreOptions,onMappingIconClick:this.onMappingIconClick,onRename:this.onRename,onChildDataIconClick:this.onChildDataIconClick,onRelatedWidgetsIconClick:this.onRelatedWidgetsIconClick,onToggleHidden:this.props.onToggleHidden,isHideable:this.props.isHideable,isCopyIdIconShown:!0}),(0,e.jsx)(k,{isOpen:this.props.isMoreOptionsShown,reference:this.rootDom,intl:this.props.intl,dsJson:this.props.ds&&this.props.ds.getDataSourceJson(),onRenameItem:this.onOpenRenameInput,theme:this.props.theme,toggle:this.toggleMoreOptions})]})}}E.count=0;const A=t.ReactRedux.connect((e,t)=>{var s;return{dataSourceJson:null===(s=t.ds)||void 0===s?void 0:s.getDataSourceJson()}})(E);class L extends t.React.PureComponent{constructor(e){super(e),this.toggleMoreOptions=()=>{this.props.toggleMoreOptions&&this.props.toggleMoreOptions(this.props.dsJson.id)},this.onRemoveItem=()=>{var e;O(null===(e=this.props.dsJson)||void 0===e?void 0:e.id,this.openRemoveWarningPopup)},this.openRemoveWarningPopup=()=>{this.setState({isRemoveDsWarningOpen:!0})},this.closeRemoveWarningPopup=()=>{this.setState({isRemoveDsWarningOpen:!1})},this.getIsLoading=()=>{if(!this.props.dsInfo)return!1;if(this.props.dsInfo.instanceStatus===t.DataSourceStatus.CreateError)return!1;if(this.props.dsInfo.instanceStatus===t.DataSourceStatus.Created){const e=t.DataSourceManager.getInstance().getDataSource(this.props.dsJson.id);return!!(null==e?void 0:e.isDataSourceSet())&&!e.areChildDataSourcesCreated()}return!0},this.getNoPermissionResourceInfoForDsItem=()=>{const e=t.SessionManager.getInstance().getNoPermissionResourceInfoList()||{},s=Object.keys(e).find(e=>{var t,s;return(null===(t=this.props.dsJson.url)||void 0===t?void 0:t.includes(e))||(null===(s=this.props.dsJson.portalUrl)||void 0===s?void 0:s.includes(e))||(null==e?void 0:e.includes(this.props.dsJson.itemId))});return s?{url:s,info:e[s]}:null},this.allowSignIn=()=>{var e,t;return!!(null===(t=null===(e=this.getNoPermissionResourceInfoForDsItem())||void 0===e?void 0:e.info)||void 0===t?void 0:t.allowSignIn)},this.isInNoPermissionResourceInfoList=()=>{var e;return!!(null===(e=this.getNoPermissionResourceInfoForDsItem())||void 0===e?void 0:e.info)},this.tryToLogin=()=>{var e,s;const i=this.getNoPermissionResourceInfoForDsItem(),a=(null===(e=this.props.dsJson.url)||void 0===e?void 0:e.includes(null==i?void 0:i.url))?this.props.dsJson.url:this.props.dsJson.portalUrl;t.SessionManager.getInstance().signInByResourceUrl(a,null===(s=null==i?void 0:i.info)||void 0===s?void 0:s.owningSystemUrl,!0)},this.isError=()=>{var e,s;return(null===(e=this.props.dsInfo)||void 0===e?void 0:e.instanceStatus)===t.DataSourceStatus.CreateError||(null===(s=this.props.dsJson)||void 0===s?void 0:s.type)===t.DataSourceTypes.Error},this.state={isRemoveDsWarningOpen:!1,isLoading:this.getIsLoading()}}componentDidUpdate(e,t){e.dsInfo!==this.props.dsInfo&&this.setState({isLoading:this.getIsLoading()}),this.props.onLoaded&&t.isLoading&&!this.state.isLoading&&this.props.onLoaded(this.props.dsJson)}render(){var s,i;if(!this.props.dsJson)return null;const o=this.isError(),n=this.allowSignIn(),r=n?"signInErrorEnterCredential":this.isInNoPermissionResourceInfoList()?"signInErrorCannotEnterCredential":null,l=r&&this.props.intl.formatMessage({id:r,defaultMessage:t.defaultMessages[r]}),d=!t.dataSourceUtils.getRootDataSourceId(this.props.dsJson.id);return(0,e.jsxs)("div",{className:"m-4 list-item list-error-item",ref:e=>{this.rootDom=e},children:[(0,e.jsx)(a.DataSourceErrorItem,{dataSourceJson:this.props.dsJson,isErrorIconShown:o,isMoreIconShown:o&&!(null===(s=t.DataSourceManager.getInstance().getDataSource(this.props.dsJson.id))||void 0===s?void 0:s.getRootDataSource()),isLoadingShown:this.state.isLoading,isCloseIconShown:this.state.isLoading&&d,isRelatedWidgetsShown:!0,isHideable:this.props.isHideable,onToggleHidden:this.props.onToggleHidden,errorTitle:l,isCopyIdIconShown:!0,onCloseIconClick:this.onRemoveItem,onMoreIconClick:this.toggleMoreOptions,onDataSourceItemClick:n&&this.tryToLogin}),(0,e.jsx)(k,{isOpen:this.props.isMoreOptionsShown,reference:this.rootDom,intl:this.props.intl,dsJson:this.props.dsJson,isRenameHidden:!0,theme:this.props.theme,toggle:this.toggleMoreOptions}),(0,e.jsx)(a.DataSourceRemoveWarningPopup,{dataSourceId:null===(i=this.props.dsJson)||void 0===i?void 0:i.id,isOpen:this.state.isRemoveDsWarningOpen,toggle:this.closeRemoveWarningPopup,reason:a.DataSourceRemoveWaringReason.DataSourceRemoved})]})}}const P=t.ReactRedux.connect((e,s)=>{var i,a,o,n;const r=(null===(i=null===window||void 0===window?void 0:window.jimuConfig)||void 0===i?void 0:i.isBuilder)?e.appStateInBuilder:e;return{dsInfo:null===(a=null==r?void 0:r.dataSourcesInfo)||void 0===a?void 0:a[null===(o=s.dsJson)||void 0===o?void 0:o.id],areChildDssSettled:!Object.keys(null!==(n=null==r?void 0:r.dataSourcesInfo)&&void 0!==n?n:{}).some(e=>{var i;return e.startsWith((null===(i=s.dsJson)||void 0===i?void 0:i.id)+"-")&&r.dataSourcesInfo[e].instanceStatus===t.DataSourceStatus.NotCreated})}})(L),H={createFailedWarning:"Failed to create data!",noSupportedDataSource:"No supported data available.",noUsedFieldToMap:"No in use fields need to be mapped.",noChildDssToMap:"No child data needs to be mapped.",noUsedField:"No used field",noLayer:"No layer",noDataNotice:"No data in the experience.<br/>Please add your data.",noDataViewNotice:'Click the "Create a view" button to add a view.',dataViewIsNotSupportedNotice:"Data views are not supported because the layer does not include attribute information.",dataViews:"Data views",originalDsLabel:"Source",autoRefresh:"Auto refresh",updateMinutesAgo:"Last update: {minutes} minutes ago",updateOneMinuteAgo:"Last update: a minute ago",updateSecondsAgo:"Last update: a few seconds ago",refreshSetting:"Refresh settings",interval:"Interval",honorLayer:"Honor layer's settings",minutes:"minutes",allowExport:"Allow export",exportNotice:"For feature services, the app will also verify that the end user's role and item settings allow exporting the data.",related:"Related",esriRelCardinalityOneToOne:"One to one",esriRelCardinalityOneToMany:"One to many",esriRelCardinalityManyToMany:"Many to many",exportSettings:"Export settings",maximumExport:"Maximum export",searchPlaceholder:"Search",formatOptions:"Format options",exportSelectLayers:"Select layers",exportSettingsApplyAllTip:"These settings will be applied to all layers.",exportSettingsApplySelectedTip:"These settings will be applied to selected layers.",messageActionTips:"Actions are executed automatically whenever the filter or selection of the data source changes.",attributeFields:"Attribute fields",arcadeExpressions:"Arcade expressions",addExpression:"Add expression",editScript:"Edit script",attributes:"Attributes"};var J=m(8703),V=m.n(J),$=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(s[i[a]]=e[i[a]])}return s};const F=s=>{const i=window.SVG,{className:a}=s,o=$(s,["className"]),n=(0,t.classNames)("jimu-icon jimu-icon-component",a);return i?(0,e.jsx)(i,Object.assign({className:n,src:V()},o)):(0,e.jsx)("svg",Object.assign({className:n},o))},U=class extends t.React.PureComponent{constructor(e){super(e),this.getInUseAndOthers=()=>{const e={hidden:[],visible:[],error:[]},s={hidden:[],visible:[],error:[]};return this.state.childDataSources&&this.state.childDataSources.forEach(i=>{var o,n;i&&i.id&&(a.dataComponentsUtils.getWidgetsUsingDsOrItsDescendantDss(i.id,this.props.widgets,!1).length>0?i.type===t.DataSourceTypes.Error?e.error.push(i):(null===(o=null==i?void 0:i.getDataSourceJson())||void 0===o?void 0:o.isHidden)?e.hidden.push(i):e.visible.push(i):i.type===t.DataSourceTypes.Error?s.error.push(i):(null===(n=null==i?void 0:i.getDataSourceJson())||void 0===n?void 0:n.isHidden)?s.hidden.push(i):s.visible.push(i))}),{inUseDss:e,otherDss:s}},this.onToggleHidden=e=>{if(!e)return;const t=!e.isHidden;let s=e.setIn(["isHidden"],t);t||(s=this.traverseUnhideChildDss(s));const i=a.dataComponentsUtils.editDataSourceJson(s);(0,n.getAppConfigAction)().editDataSource(i).exec()},this.traverseUnhideChildDss=e=>{if(!e)return;let t=e;return t=t.setIn(["isHidden"],!1),e.childDataSourceJsons&&Object.keys(e.childDataSourceJsons).forEach(e=>{t=t.setIn(["childDataSourceJsons",e],this.traverseUnhideChildDss(t.getIn(["childDataSourceJsons",e])))}),t},this.state={isMapping:!1,childDataSources:null}}componentDidMount(){this.props.ds&&this.setState({childDataSources:this.props.ds.isDataSourceSet()&&this.props.ds.getChildDataSources()})}componentDidUpdate(e,t){e.ds===this.props.ds&&e.areAllChildDssCreated===this.props.areAllChildDssCreated||(this.props.ds?this.setState({childDataSources:this.props.ds.isDataSourceSet()&&this.props.ds.getChildDataSources()}):this.setState({childDataSources:null}))}render(){if(!this.props.ds)return(0,e.jsx)("div",{className:"m-2",children:this.props.intl.formatMessage({id:"noSupportedDataSource",defaultMessage:H.noSupportedDataSource})});const t=this.getInUseAndOthers();return 0===t.inUseDss.visible.length&&0===t.inUseDss.hidden.length&&0===t.inUseDss.error.length&&0===t.otherDss.visible.length&&0===t.otherDss.hidden.length&&0===t.otherDss.error.length?(0,e.jsxs)("div",{className:"empty-placeholder w-100",children:[(0,e.jsx)("div",{className:"empty-placeholder-icon",children:(0,e.jsx)(F,{size:48})}),(0,e.jsx)("div",{className:"empty-placeholder-text",dangerouslySetInnerHTML:{__html:this.props.intl.formatMessage({id:"noLayer",defaultMessage:H.noLayer})}})]}):(0,e.jsxs)(e.Fragment,{children:[t.inUseDss.visible.length>0||t.inUseDss.hidden.length>0||t.inUseDss.error.length>0?(0,e.jsxs)("div",{children:[(0,e.jsx)("h5",{className:"m-4 data-setting-secondary-title",children:this.props.intl.formatMessage({id:"inUse",defaultMessage:s.defaultMessages.inUse})}),(0,e.jsxs)("div",{children:[t.inUseDss.visible.sort((e,t)=>(null==e?void 0:e.order)-(null==t?void 0:t.order)).map((t,s)=>t&&t.id?(0,e.jsx)(A,{ds:t,onDataSourceItemClick:this.props.onDataSourceItemClick,intl:this.props.intl,theme:this.props.theme,isHideable:!1,onChildDataIconClick:this.props.onChildDataIconClick,onRelatedWidgetsIconClick:this.props.onRelatedWidgetsIconClick,onToggleHidden:this.onToggleHidden},s):null),t.inUseDss.hidden.sort((e,t)=>(null==e?void 0:e.order)-(null==t?void 0:t.order)).map((t,s)=>t&&t.id?(0,e.jsx)(P,{dsJson:t.getDataSourceJson(),intl:this.props.intl,theme:this.props.theme,isHideable:!1,onToggleHidden:this.onToggleHidden},s):null),t.inUseDss.error.sort((e,t)=>(null==e?void 0:e.order)-(null==t?void 0:t.order)).map((t,s)=>t&&t.id?(0,e.jsx)(P,{dsJson:t.getDataSourceJson(),intl:this.props.intl,theme:this.props.theme,isHideable:!1,onToggleHidden:this.onToggleHidden},s):null)]})]}):null,t.otherDss.visible.length>0||t.otherDss.hidden.length>0||t.otherDss.error.length>0?(0,e.jsxs)("div",{children:[(t.inUseDss.visible.length>0||t.inUseDss.hidden.length>0)&&(0,e.jsx)("h5",{className:"m-4 data-setting-secondary-title",children:this.props.intl.formatMessage({id:"others",defaultMessage:s.defaultMessages.others})}),(0,e.jsxs)("div",{children:[t.otherDss.visible.sort((e,t)=>(null==e?void 0:e.order)-(null==t?void 0:t.order)).map((t,s)=>t&&t.id?(0,e.jsx)(A,{ds:t,onDataSourceItemClick:this.props.onDataSourceItemClick,intl:this.props.intl,theme:this.props.theme,isHideable:!0,onChildDataIconClick:this.props.onChildDataIconClick,onRelatedWidgetsIconClick:this.props.onRelatedWidgetsIconClick,onToggleHidden:this.onToggleHidden},s):null),t.otherDss.hidden.sort((e,t)=>(null==e?void 0:e.order)-(null==t?void 0:t.order)).map((t,s)=>t&&t.id?(0,e.jsx)(P,{dsJson:t.getDataSourceJson(),intl:this.props.intl,theme:this.props.theme,isHideable:!0,onToggleHidden:this.onToggleHidden},s):null),t.otherDss.error.sort((e,t)=>(null==e?void 0:e.order)-(null==t?void 0:t.order)).map((t,s)=>t&&t.id?(0,e.jsx)(P,{dsJson:t.getDataSourceJson(),intl:this.props.intl,theme:this.props.theme,isHideable:!1,onToggleHidden:this.onToggleHidden},s):null)]})]}):null]})}},W=600;class z extends t.React.PureComponent{constructor(e){super(e),this.getStyle=e=>t.css`
    .list-refresh-setting-popup{
      width: ${t.polished.rem(240)};
      .interval-label{
        .jimu-widget-setting--section-header>*, .jimu-widget-setting--row>*{
          font-size: ${t.polished.rem(13)};
          font-weight: normal;
          color: ${e.ref.palette.neutral[900]};
        }
      }
      .interval-custom{
        position: relative;
      }
      .interval-custom-input{
        height: ${t.polished.rem(26)};
        input{
          height: ${t.polished.rem(26)};
          padding-right: ${t.polished.rem(80)};
        }
      }
      .interval-custom-placeholder{
        position: absolute;
        right: 8px;
        color: ${e.ref.palette.neutral[900]};
      }
      .disabled-label{
        color: ${e.ref.palette.neutral[700]};
      }
      .disabled{
        border-color: ${e.ref.palette.neutral[700]} !important;
      }
    }
    `,this.onToggleAutoRefresh=(e,t)=>{t?this.props.hasOriginalDataRefreshInterval?this.props.onChange(null):this.props.onChange(W):(this.props.onChange(0),this.setState({interval:10}))},this.onToggleCustom=()=>{"number"==typeof this.props.refreshInterval?this.props.onChange(null):this.props.onChange(W)},this.onIntervalChange=e=>{this.setState({interval:e})},this.onIntervalDone=()=>{var e,t;"number"==typeof this.state.interval&&(null===(e=this.props.ds)||void 0===e||e.stopAutoRefresh(),null===(t=this.props.ds)||void 0===t||t.getAllDerivedDataSources().forEach(e=>{e.stopAutoRefresh()}),this.props.onChange(60*this.state.interval))},this.getWhetherAutoRefresh=()=>this.props.refreshInterval>0||0!==this.props.refreshInterval&&this.props.hasOriginalDataRefreshInterval,this.getWhetherHonorLayerSetting=()=>"number"!=typeof this.props.refreshInterval&&this.props.hasOriginalDataRefreshInterval,this.state={interval:(this.props.refreshInterval||W)/60}}componentDidUpdate(e){if(!this.props.isOpen&&e.isOpen){const e=this.getWhetherAutoRefresh(),t=this.getWhetherHonorLayerSetting();e&&!t&&this.onIntervalDone()}}render(){if(!this.props.reference)return null;const t=this.getWhetherAutoRefresh(),a=this.getWhetherHonorLayerSetting();return(0,e.jsx)(s.Popper,{css:this.getStyle(this.props.theme),reference:this.props.reference,open:this.props.isOpen,placement:"bottom",toggle:this.props.toggle,arrowOptions:!0,children:(0,e.jsxs)("div",{className:"list-refresh-setting-popup",children:[(0,e.jsx)(i.SettingSection,{className:"border-0",children:(0,e.jsx)(i.SettingRow,{tag:"label",label:this.props.intl.formatMessage({id:"autoRefresh",defaultMessage:H.autoRefresh}),className:"interval-label",children:(0,e.jsx)(s.Switch,{checked:t,onChange:this.onToggleAutoRefresh})})}),t&&(0,e.jsxs)(i.SettingSection,{className:"pt-0 interval-label",title:this.props.intl.formatMessage({id:"interval",defaultMessage:H.interval}),children:[this.props.canOriginalDataSetRefreshInterval&&(0,e.jsxs)("div",{children:[(0,e.jsx)(i.SettingRow,{children:(0,e.jsxs)("div",{className:"align-items-center d-flex",children:[(0,e.jsx)(s.Radio,{id:"honor-layer-setting",onChange:this.onToggleCustom,checked:a,className:"mr-2",disabled:!this.props.hasOriginalDataRefreshInterval}),(0,e.jsx)(s.Label,{for:"honor-layer-setting",disabled:!this.props.hasOriginalDataRefreshInterval,className:!this.props.hasOriginalDataRefreshInterval&&"disabled-label",children:this.props.intl.formatMessage({id:"honorLayer",defaultMessage:H.honorLayer})})]})}),(0,e.jsx)(i.SettingRow,{children:(0,e.jsxs)("div",{className:"align-items-center d-flex",children:[(0,e.jsx)(s.Radio,{id:"custom",onChange:this.onToggleCustom,checked:!a,className:"mr-2"}),(0,e.jsx)(s.Label,{for:"custom",children:this.props.intl.formatMessage({id:"custom",defaultMessage:s.defaultMessages.custom})})]})})]}),(!a||!this.props.canOriginalDataSetRefreshInterval)&&(0,e.jsxs)(i.SettingRow,{className:"mt-4 interval-custom",children:[(0,e.jsx)(s.NumericInput,{className:"w-100 interval-custom-input",value:this.state.interval,min:.1,max:999,precision:1,showHandlers:!1,onChange:this.onIntervalChange,onAcceptValue:this.onIntervalDone}),(0,e.jsx)("span",{className:"interval-custom-placeholder",children:this.props.intl.formatMessage({id:"minutes",defaultMessage:H.minutes})})]})]})]})})}}var B=m(8704),_=m.n(B),q=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(s[i[a]]=e[i[a]])}return s};const G=s=>{const i=window.SVG,{className:a}=s,o=q(s,["className"]),n=(0,t.classNames)("jimu-icon jimu-icon-component",a);return i?(0,e.jsx)(i,Object.assign({className:n,src:_()},o)):(0,e.jsx)("svg",Object.assign({className:n},o))};var K=m(6597),Q=m.n(K),Y=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(s[i[a]]=e[i[a]])}return s};const X=s=>{const i=window.SVG,{className:a}=s,o=Y(s,["className"]),n=(0,t.classNames)("jimu-icon jimu-icon-component",a);return i?(0,e.jsx)(i,Object.assign({className:n,src:Q()},o)):(0,e.jsx)("svg",Object.assign({className:n},o))};var Z=m(4112),ee=m.n(Z),te=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(s[i[a]]=e[i[a]])}return s};const se=s=>{const i=window.SVG,{className:a}=s,o=te(s,["className"]),n=(0,t.classNames)("jimu-icon jimu-icon-component",a);return i?(0,e.jsx)(i,Object.assign({className:n,src:ee()},o)):(0,e.jsx)("svg",Object.assign({className:n},o))};var ie=m(8698),ae=m.n(ie),oe=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(s[i[a]]=e[i[a]])}return s};const ne=s=>{const i=window.SVG,{className:a}=s,o=oe(s,["className"]),n=(0,t.classNames)("jimu-icon jimu-icon-component",a);return i?(0,e.jsx)(i,Object.assign({className:n,src:ae()},o)):(0,e.jsx)("svg",Object.assign({className:n},o))};var re=m(1888),le=m(9919),de=m.n(le),pe=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(s[i[a]]=e[i[a]])}return s};const ce=s=>{const i=window.SVG,{className:a}=s,o=pe(s,["className"]),n=(0,t.classNames)("jimu-icon jimu-icon-component",a);return i?(0,e.jsx)(i,Object.assign({className:n,src:de()},o)):(0,e.jsx)("svg",Object.assign({className:n},o))},he=(e,s)=>t.css`
  margin-bottom: ${e.sys.spacing(2)};

  .jimu-link {
    font-size: ${e.sys.typography.label3.fontSize};
    background: transparent;
    display: block;
    min-width: 0;
  }
  .collapse-header {
    background-color: ${e.sys.color.secondary.main};
    padding: 0 ${e.sys.spacing(2)};
    height: 32px;
    border-top: 1px solid ${s?e.sys.color.primary.main:e.sys.color.secondary.main};
    .collapse-label {
      width: 100%;
      display: flex;
      align-items:center;
      .jimu-link {
        color: ${e.sys.color.surface.overlayHint};
        max-width: calc(100% - 16px);
        padding: 0;
        margin-left: ${e.sys.spacing(1)};
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .collapsing {
    transition: none;
  }
  .collapse-body {
    padding: ${e.sys.spacing(2)};
    .cardinality {
      color: ${e.sys.color.surface.overlayHint};
      font-size: ${e.sys.typography.title3.fontSize};
      margin: ${e.sys.spacing(1)} 0;
    }
    .relationship {
      display: flex;
      .relationship-content {
        width: calc(100% - 15px);
        display: flex;
        flex-direction: column;
        gap: ${e.sys.spacing(2)};
        .relationship-table {
          .jimu-link {
            max-width: 100%;
            padding: 0;
            margin-left: ${e.sys.spacing(1)};
            text-align: left;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }
`;function ue(i){const{dataSource:a,relatedDataSources:o,onRelatedTableClick:n}=i,r=(0,re.useTheme)(),l=null==a?void 0:a.getLayerDefinition(),d=(null==l?void 0:l.relationships)||[],p=a.getLabel(),c=a.getRootDataSource(),h=e=>{null==n||n(e)},[u,m]=t.React.useState(null),g=t.hooks.useEventCallback(e=>{m(e)});t.React.useEffect(()=>{m(null)},[a]);const f=t.hooks.useTranslation(H);return(0,e.jsx)(t.React.Fragment,{children:o.map(i=>{var o,n;const m=i.getLayerDefinition(),S=(null==m?void 0:m.relationships)||[],v=d.find(e=>e.relatedTableId===m.id),x=S.find(e=>e.relatedTableId===l.id);if(!v||!x)return null;const D=i.getLabel(),y={alias:"",name:"",type:t.JimuFieldType.String},w=(null===(o=a.getSchema().fields)||void 0===o?void 0:o[v.keyField])||y,b=(null===(n=i.getSchema().fields)||void 0===n?void 0:n[x.keyField])||y,j=c.isDataSourceSet()&&c.getAllChildDataSources().find(e=>{var t,s;return void 0!==v.relationshipTableId&&(null===(s=null===(t=null==e?void 0:e.getLayerDefinition)||void 0===t?void 0:t.call(e))||void 0===s?void 0:s.id)===v.relationshipTableId}),M=(0,e.jsxs)("span",{className:"collapse-label",children:[(0,e.jsx)(s.Icon,{icon:t.dataSourceUtils.getDsIcon(i.getDataSourceJson()),className:"text-default",size:12}),(0,e.jsx)(s.Link,{tag:"button",onClick:()=>{h(i)},title:D,"aria-label":D,children:D})]}),C=u===v.id;return(0,e.jsx)(s.CollapsablePanel,{css:he(r,C),isOpen:C,onRequestOpen:()=>{g(v.id)},onRequestClose:()=>{g(null)},label:M,"aria-label":D,type:"default",children:(0,e.jsxs)("div",{className:"collapse-body",children:[(0,e.jsx)("div",{className:"cardinality",children:f(v.cardinality)}),(0,e.jsxs)("div",{className:"relationship",children:[(0,e.jsx)(me,{theme:r}),(0,e.jsxs)("div",{className:"relationship-content",children:[(0,e.jsx)(ge,{tableName:p,fieldType:w.type,fieldName:w.alias||w.name,cardinality:v.cardinality,role:v.role,theme:r}),j&&(0,e.jsx)("div",{className:"relationship-table",children:(0,e.jsx)(s.Link,{tag:"button",onClick:()=>{h(j)},title:j.getLabel(),"aria-label":j.getLabel(),children:j.getLabel()})}),(0,e.jsx)(ge,{tableName:D,fieldType:b.type,fieldName:b.alias||b.name,cardinality:x.cardinality,role:x.role,theme:r})]})]})]})},v.id)})})}const me=s=>{const{theme:i}=s,a=t.css`
    &.relationship-link {
      width: 20px;
      display: flex;
      flex-direction: column;
      .relationship-link-up {
        flex-grow: 1;
        margin-top: ${i.sys.spacing(4)};
        border-top: 1px solid ${i.sys.color.primary.text};
        margin-left: 10px;
        border-left: 1px solid ${i.sys.color.primary.text};
        margin-bottom: 5px;
      }
      .relationship-link-icon {
        margin-left: 5px;
      }
      .relationship-link-down {
        flex-grow: 1;
        margin-bottom: ${i.sys.spacing(4)};
        border-bottom: 1px solid ${i.sys.color.primary.text};
        margin-left: 10px;
        border-left: 1px solid ${i.sys.color.primary.text};
        margin-top: 5px;
      }
    }
  `;return(0,e.jsxs)("div",{className:"relationship-link",css:a,children:[(0,e.jsx)("div",{className:"relationship-link-up"}),(0,e.jsx)(ce,{className:"relationship-link-icon",size:"10px"}),(0,e.jsx)("div",{className:"relationship-link-down"})]})},ge=i=>{const{tableName:o,cardinality:n,role:r,fieldType:l,fieldName:d,theme:p}=i,c=t.css`
    &.related-table-field {
      padding-left: ${p.sys.spacing(1)};
      font-size: ${p.sys.typography.label2.fontSize};
      line-height: ${p.sys.typography.label2.lineHeight};
      .related-table {
        display: flex;
        justify-content: space-between;
        .related-name {
          width: calc(100% - 25px);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: ${p.sys.color.surface.overlayText};
        }
        .related-cardinality {
          color: ${p.sys.color.surface.overlayHint};
          .primary {
            color: ${p.sys.color.primary.main};
            font-weight: bold;
          }
        }
      }
      .related-field {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: ${p.sys.color.surface.overlayHint};
        .related-field-icon {
          margin-right: ${p.sys.spacing[1]}
        }
      }
    }
  `,h="esriRelCardinalityManyToMany"===n?"M":"1",u="esriRelCardinalityOneToOne"===n?"1":"esriRelCardinalityOneToMany"===n?"M":"N",m="esriRelRoleOrigin"===r?"primary":"",g="esriRelRoleDestination"===r?"primary":"";return(0,e.jsxs)("div",{className:"related-table-field",css:c,children:[(0,e.jsxs)("div",{className:"related-table",children:[(0,e.jsx)("span",{className:"related-name",title:o,children:o}),(0,e.jsxs)("span",{className:"related-cardinality",children:[(0,e.jsx)("span",{className:m,children:h}),(0,e.jsx)("span",{children:":"}),(0,e.jsx)("span",{className:g,children:u})]})]}),(0,e.jsxs)("div",{className:"related-field",title:d,children:[(0,e.jsx)(s.Icon,Object.assign({className:"related-field-icon"},a.dataComponentsUtils.getIconFromFieldType(l,p))),d]})]})};var fe=m(6739);const Se=e=>{var t,s;return null===(s=null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===s?void 0:s.messageConfigs},ve=t.css`
  .collapse-normal-header .collapse-label .title {
    padding: 0 !important;
    font-size: inherit;
    font-weight: inherit;
  }
`,xe=t.css`
  & {
    min-height: 200px;
  }
  .jimu-widget-setting--section {
    padding-left: 0;
    padding-right: 0;
  }
  .no-trigger-tip div {
    transform: none !important;
  }
  .message-action-setting-con-section {
    padding-bottom: 0;
  }
`;function De(i){const{dsId:a,theme:o}=i,n=t.ReactRedux.useSelector(Se),r=t.hooks.useTranslation(s.defaultMessages,H),l=r("messageActionTips"),d=t.React.useMemo(()=>(0,t.Immutable)({}),[]);return(0,e.jsx)(s.CollapsablePanel,{css:ve,className:"mt-4",type:"default",level:3,defaultIsOpen:!0,label:(0,e.jsxs)("div",{className:"d-flex align-items-center",children:[(0,e.jsx)("span",{children:r("messageAction")}),(0,e.jsx)(s.Tooltip,{title:l,placement:"bottom",showArrow:!0,children:(0,e.jsx)("span",{className:"d-inline-flex ml-1","aria-label":l,children:(0,e.jsx)(X,{size:"m"})})})]}),children:(0,e.jsx)("div",{css:xe,children:(0,e.jsx)(fe.MessageActionList,{pageId:null,dataSourceId:a,theme:o,messageConfigs:n||d,isInDataSetting:!0,formatMessage:r})})})}var ye=m(8787),we=m.n(ye),be=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(s[i[a]]=e[i[a]])}return s};const je=s=>{const i=window.SVG,{className:a}=s,o=be(s,["className"]),n=(0,t.classNames)("jimu-icon jimu-icon-component",a);return i?(0,e.jsx)(i,Object.assign({className:n,src:we()},o)):(0,e.jsx)("svg",Object.assign({className:n},o))},Me=[t.ExportFormat.GeoJSON,t.ExportFormat.KML,t.ExportFormat.Shapefile];const Ce=t.ReactRedux.connect(e=>({}))(function(i){const{theme:o,intl:r,dataSources:l,exportOptions:d,singleExport:p=!1,cachedAllowExport:c,selectLayerEnabled:h}=i,u=t.React.useId(),m=r.formatMessage({id:"allowExport",defaultMessage:H.allowExport}),g=r.formatMessage({id:"apply",defaultMessage:t.defaultMessages.apply}),f=r.formatMessage({id:"formatOptions",defaultMessage:H.formatOptions}),S=r.formatMessage({id:"exportSettingsApplyAllTip",defaultMessage:H.exportSettingsApplyAllTip}),v=r.formatMessage({id:"exportSettingsApplySelectedTip",defaultMessage:H.exportSettingsApplySelectedTip}),x=p&&l&&null===l[0].getGeometryType(),D={formats:x?Object.values(t.ExportFormat).filter(e=>e!==t.ExportFormat.GeoJSON):Object.values(t.ExportFormat),maximum:100},y=t.React.useRef(!0),[w,b]=t.React.useState((null==d?void 0:d.formats)||D.formats),[j,M]=t.React.useState(null==c||c),C=(e,t)=>(t.includes(e.id)&&(e.disableExport=!j,j?e.exportOptions={formats:w}:delete e.exportOptions),e.childDataSourceJsons&&Object.keys(e.childDataSourceJsons).forEach(s=>{const i=e.childDataSourceJsons[s];C(i,t)}),e),I=()=>{const e=[],t=l.map(e=>e.id),s=(0,n.getAppConfigAction)(),o=[];l.forEach(e=>{let t=e.getDataSourceJson();t=t.setIn(["disableExport"],!j),t=j?t.setIn(["exportOptions"],{formats:w}):t.without("exportOptions");const s=a.dataComponentsUtils.editDataSourceJson(t);o.push(s)}),o.forEach(s=>{-1===e.findIndex(e=>e.id===s.id)&&e.push(C(s.asMutable({deep:!0}),t))}),e.reduce((e,t)=>e.editDataSource(t),s).exec(),p||(i.cacheSettingStatus(j,{formats:w}),i.onClose())},N=(e,t)=>{b(e.target.checked?[...w,t]:w.filter(e=>e!==t))};return t.React.useEffect(()=>{if(p){if(y.current)return void(y.current=!1);I()}},[w]),(0,e.jsxs)("div",{css:(e=>t.css`
    padding: 16px;
    width: 200px;
    background-color: ${e.sys.color.surface.paper};
    color: ${e.sys.color.surface.paperText};
    font-size: 13px;
    font-weight: 500;
    .export-common-item{
      height: 26px;
      width: 100%;
      padding: 4px 0;
      box-sizing: border-box;
    }
    .txt{
      margin-left: 8px;
      margin-bottom: 0;
    }
    .max-export{
      margin-top: ${p?0:"16px"};
      .max-export-input{
        margin-top: 8px;
      }
    }
    .divide{
        margin-top: 8px;
        margin-bottom: 8px;
        border-top: 1px solid ${e.sys.color.divider.secondary};
    }
    .format-section{
      .format-label{
        color: ${e.sys.color.surface.paperHint};
        margin-bottom: 0;
      }
      .format-options{
        margin-top: 8px;
      }
    }
    .apply-btn{
      margin-top: 8px;
      height: 32px;
      width: 100%;
      line-height: 32px;
      font-size: 14px;
      font-weight: 500;
    }
    .export-notice{
      height: 32px;
      margin-top: 4px;
      margin-bottom: 4px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      color: var(--sys-color-surface-overlay-hint, #DCDCDC);
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
    }
  `)(o),children:[!p&&(0,e.jsxs)(s.Label,{check:!0,className:"export-common-item d-flex justify-content-between align-items-center",children:[(0,e.jsx)("div",{children:m}),(0,e.jsx)(s.Switch,{checked:j,onChange:e=>{M(e.target.checked),e.target.checked&&b(Object.values(t.ExportFormat))}})]}),!p&&(()=>{const t=h?v:S;return(0,e.jsx)("div",{className:"export-notice",title:t,children:t})})(),(j||p)&&(0,e.jsx)("div",{children:(0,e.jsxs)("div",{className:"format-section d-flex flex-column",role:"group","aria-label":f,children:[(0,e.jsx)(s.Label,{className:"format-label export-common-item",id:u,children:f}),(0,e.jsx)("div",{className:"format-options d-flex flex-column",children:Object.values(t.ExportFormat).filter(e=>!(Me.includes(e)&&x)).map(e=>({value:e,label:e})).map(i=>{const a=i.label===t.ExportFormat.Item?r.formatMessage({id:"exportItem",defaultMessage:t.defaultMessages.exportItem}):i.label;return(0,e.jsx)("div",{children:(0,e.jsxs)(s.Label,{className:"export-common-item d-flex justify-content-start align-items-center","aria-describedby":u,children:[(0,e.jsx)(s.Checkbox,{value:i.value,checked:w.includes(i.value),onChange:e=>{N(e,i.value)}},i.value),(0,e.jsx)("div",{className:"txt",children:a})]})},i.value)})})]})}),!p&&(0,e.jsx)(s.Button,{className:"apply-btn",size:"sm",type:"primary",title:g,onClick:I,children:g})]})});class Ie extends t.React.PureComponent{constructor(e){var s;super(e),this.__unmounted=!1,this.exportSettingPopperRef=t.React.createRef(),this.onShowDetailClick=()=>{this.props.onShowDetailClick(this.props.ds)},this.onOpenRenameInput=()=>{this.setState({isRenameShown:!0})},this.onRename=()=>{const e=this.state.newName.trim();if(!e)return void this.setState({isRenameShown:!1});const t=this.props.ds.getDataSourceJson().setIn(["label"],e),s=a.dataComponentsUtils.editDataSourceJson(t);(0,n.getAppConfigAction)().editDataSource(s).exec(),this.setState({isRenameShown:!1})},this.onRenameChange=e=>{this.setState({newName:e.target.value})},this.onQueryApply=e=>{if(this.toggleViewSetting(),!e)return;const t=a.dataComponentsUtils.editDataSourceJson(this.props.ds.getDataSourceJson().setIn(["query"],e));(0,n.getAppConfigAction)().editDataSource(t).exec(),this.props.ds.addSourceVersion()},this.onAutoRefreshChange=e=>{var t;let s=this.props.ds.getDataSourceJson();(null===(t=s.query)||void 0===t?void 0:t.id)||(s=s.setIn(["query"],{id:s.id,label:this.props.ds.getLabel()})),s=s.setIn(["query","refreshInterval"],e);const i=a.dataComponentsUtils.editDataSourceJson(s);(0,n.getAppConfigAction)().editDataSource(i).exec()},this.toggleMoreOptions=()=>{this.setState({isMoreOptionsShown:!this.state.isMoreOptionsShown})},this.toggleViewSetting=()=>{this.setState({isViewSettingShown:!this.state.isViewSettingShown})},this.toggleEditScript=()=>{this.setState({isEditScriptShown:!this.state.isEditScriptShown})},this.toggleAutoRefresh=()=>{this.setState({isAutoRefreshShown:!this.state.isAutoRefreshShown})},this.getOriginalLabel=()=>{var e;let s;const i=this.props.intl.formatMessage({id:"originalDsLabel",defaultMessage:H.originalDsLabel});if(this.props.ds.map)s=null===(e=this.props.ds.map.portalItem)||void 0===e?void 0:e.title;else if(this.props.ds.layer)s=this.props.ds.layer.title;else if(this.props.ds.layerDefinition)s=this.props.ds.layerDefinition.name;else if(this.props.ds.serviceDefinition){const e=this.props.ds.getDataSourceJson(),i=null==e?void 0:e.url;s=t.dataSourceUtils.getLabelFromArcGISServiceUrl(i)}return s||i},this.onExportDataActionChange=(e,t)=>{let s=this.props.ds.getDataSourceJson();s=s.setIn(["disableExport"],!t);const i=a.dataComponentsUtils.editDataSourceJson(s);(0,n.getAppConfigAction)().editDataSource(i).exec()};const i=null===(s=this.props.ds)||void 0===s?void 0:s.getDataSourceJson().url;this.state={isMoreOptionsShown:!1,isMappingDetailShown:!1,isRenameShown:!1,isTooltipOpen:!1,isViewSettingShown:!1,isEditScriptShown:!1,isAutoRefreshShown:!1,newName:this.props.ds?this.props.ds.getLabel()||this.props.ds.id:"",isSubscriberOrPremium:t.proxyUtils.isSubscriber(null,i)||t.proxyUtils.isPremium(null,i),relatedDataSources:[],exportSettingShow:!1}}componentDidMount(){this.setIsCurrentDataSourceSubscriber(),this.updateRelatedDataSources()}componentDidUpdate(e,s){s.isRenameShown!==this.state.isRenameShown&&this.state.isRenameShown&&this.renameInput&&((0,t.focusElementInKeyboardMode)(this.renameInput,!0),this.renameInput.select()),e.ds!==this.props.ds&&(this.setState({newName:this.props.ds?this.props.ds.getLabel()||this.props.ds.id:""}),this.setIsCurrentDataSourceSubscriber(),this.updateRelatedDataSources())}componentWillUnmount(){this.__unmounted=!0}setIsCurrentDataSourceSubscriber(){this.props.ds&&t.proxyUtils.isDataSourceSubscriberOrPremium(this.props.ds.getDataSourceJson()).then(e=>{this.__unmounted||this.setState({isSubscriberOrPremium:e})})}updateRelatedDataSources(){var e,t,s;const i=this.props.ds;null===(s=null===(t=null===(e=null==i?void 0:i.createRelatedDataSources)||void 0===e?void 0:e.call(i))||void 0===t?void 0:t.then)||void 0===s||s.call(t,e=>{this.setState({relatedDataSources:e||[]})})}render(){var i,o,n,r,l,d,p;if(!this.props.ds)return null;const c=null!=this.props.ds.getDataSourceJson().arcadeScript,h=t.dataSourceUtils.doesDsSupportQuery(this.props.ds),u=t.dataSourceUtils.doesDsSupportQuery(this.props.ds.parentDataSource),m=a.dataComponentsUtils.getOriginalDataUrl(this.props.ds.getDataSourceJson()),g=null===(i=this.props.ds.getSchema())||void 0===i?void 0:i.refreshInterval,f="number"==typeof g,S=!this.props.ds.parentDataSource,v=!this.state.isSubscriberOrPremium&&!this.props.ds.getDataSourceJson().disableExport,x=this.props.intl.formatMessage({id:"details",defaultMessage:s.defaultMessages.details}),D=this.props.intl.formatMessage({id:"editArcadeScript",defaultMessage:s.defaultMessages.editArcadeScript}),y=this.props.intl.formatMessage({id:"settings",defaultMessage:s.defaultMessages.settings}),w=this.props.intl.formatMessage({id:"more",defaultMessage:s.defaultMessages.more}),b=this.props.intl.formatMessage({id:"refreshSetting",defaultMessage:H.refreshSetting}),j=t.dataSourceUtils.getDsTypeString(this.props.ds.type,this.props.intl),M=this.props.intl.formatMessage({id:"exportSettings",defaultMessage:H.exportSettings});return(0,e.jsxs)("div",{className:"px-4 pb-3 ds-info",children:[(0,e.jsxs)("div",{className:"d-flex justify-content-between ds-thumbnail-type-label w-100",children:[(0,e.jsxs)("div",{className:"d-flex align-items-center ds-thumbnail-type",children:[(0,e.jsx)("div",{className:"d-flex align-items-center justify-content-center flex-shrink-0 ds-thumbnail",children:(0,e.jsx)(s.Icon,{icon:t.dataSourceUtils.getDsIcon(this.props.ds.getDataSourceJson()),className:"text-default",size:12})}),(0,e.jsx)("div",{className:"d-flex pl-2 ds-type",children:(0,e.jsx)("div",{className:"hint-paper text-truncate w-100 ds-type-name",title:j,children:j})})]}),(0,e.jsxs)("div",{className:"d-flex justify-content-between",children:[c&&(0,e.jsx)(s.Button,{size:"sm",icon:!0,type:"tertiary",disableRipple:!0,onClick:this.toggleEditScript,title:D,"aria-label":D,children:(0,e.jsx)(je,{size:"m"})}),(C=this.props.ds,I(C)&&(0,e.jsx)(s.Button,{size:"sm",icon:!0,type:"tertiary",disableRipple:!0,onClick:this.onShowDetailClick,ref:this.props.itemInfoBtn,title:x,"aria-label":x,children:(0,e.jsx)(X,{size:"m"})})),h&&!c&&(0,e.jsx)(s.Button,{size:"sm",icon:!0,type:"tertiary",onClick:this.toggleViewSetting,title:y,"aria-label":y,ref:this.props.itemInfoBtn,children:(0,e.jsx)(se,{size:"m"})}),(0,e.jsx)(s.Button,{size:"sm",icon:!0,type:"tertiary",onClick:this.toggleMoreOptions,ref:e=>{this.moreOptionsRef=e},title:w,"aria-label":w,children:(0,e.jsx)(G,{size:"m"})})]})]}),(0,e.jsxs)("div",{className:"my-2 d-flex justify-content-between align-items-center",children:[this.state.isRenameShown?(0,e.jsx)(s.TextInput,{className:"flex-grow-1 text-truncate ds-label-input ds-label",ref:e=>{this.renameInput=e},onBlur:this.onRename,onPressEnter:this.onRename,onChange:this.onRenameChange,value:this.state.newName}):(0,e.jsx)("div",{className:"flex-grow-1 three-line-truncate ds-label text-left",title:this.props.ds.getLabel()||this.props.ds.id,children:this.props.ds.getLabel()||this.props.ds.id}),(0,e.jsx)(a.DataSourceIdCopyButton,{dataSourceId:this.props.ds.id,intl:this.props.intl})]}),m&&(0,e.jsx)("div",{className:"ds-origin-label flex-grow-1 d-flex align-items-center",title:this.props.intl.formatMessage({id:"source",defaultMessage:s.defaultMessages.source}),children:(0,e.jsx)(s.Link,{to:m,className:"p-0 ds-origin-label-link d-flex",target:"_blank",children:(0,e.jsx)("span",{className:"align-middle text-truncate ds-origin-label-link-text",children:this.getOriginalLabel()})})}),h&&!u&&(0,e.jsxs)("div",{className:"d-flex align-items-center my-4",children:[(0,e.jsx)("div",{className:"mr-2 flex-grow-1 refresh-last-update-label",children:b}),(0,e.jsx)(s.Button,{size:"sm",icon:!0,type:"tertiary",onClick:this.toggleAutoRefresh,ref:e=>{this.autoRefreshRef=e},title:b,"aria-label":b,className:(0,t.classNames)({"highlight-refresh-icon":!!this.props.ds.getAutoRefreshInterval()}),children:(0,e.jsx)(ne,{size:"m"})})]}),h&&!u&&(0,e.jsxs)("div",{className:"d-flex align-items-center mt-4",children:[(0,e.jsxs)("div",{className:"mr-2 flex-grow-1 d-flex align-items-center",children:[(0,e.jsx)(s.Label,{className:"refresh-last-update-label m-0",for:"export-switch",children:this.props.intl.formatMessage({id:"allowExport",defaultMessage:H.allowExport})}),(0,e.jsx)(s.Tooltip,{title:this.props.intl.formatMessage({id:"exportNotice",defaultMessage:H.exportNotice}),placement:"bottom",showArrow:!0,children:(0,e.jsx)(s.Button,{size:"sm",icon:!0,type:"tertiary",disableHoverEffect:!0,disableRipple:!0,className:"cursor-default jimu-outline-inside",children:(0,e.jsx)(X,{size:"m"})})})]}),v&&(0,e.jsx)(s.Button,{size:"sm",icon:!0,type:"tertiary",title:M,"aria-label":M,onClick:()=>{this.setState({exportSettingShow:!this.state.exportSettingShow})},ref:this.exportSettingPopperRef,children:(0,e.jsx)(se,{size:"m"})}),(0,e.jsx)(s.Switch,{id:"export-switch",checked:v,onChange:this.onExportDataActionChange,title:this.props.intl.formatMessage({id:"allowExport",defaultMessage:H.allowExport}),disabled:this.state.isSubscriberOrPremium})]}),h&&!u&&(0,e.jsx)(De,{dsId:this.props.ds.id,theme:this.props.theme}),this.state.relatedDataSources.length>0&&(0,e.jsxs)("div",{className:"mt-4",role:"group","aria-labelledby":"related-data-label",children:[(0,e.jsx)(s.Label,{className:"refresh-last-update-label mb-2",id:"related-data-label",children:this.props.intl.formatMessage({id:"related",defaultMessage:H.related})}),(0,e.jsx)(ue,{dataSource:this.props.ds,relatedDataSources:this.state.relatedDataSources,onRelatedTableClick:this.props.onRelatedTableClick})]}),(0,e.jsx)(k,{isOpen:this.state.isMoreOptionsShown,reference:this.moreOptionsRef,intl:this.props.intl,dsJson:this.props.ds.getDataSourceJson(),onRenameItem:this.onOpenRenameInput,theme:this.props.theme,offset:[25,0],toggle:this.toggleMoreOptions,isRemoveHidden:!S}),h&&(0,e.jsx)(a.DataViewSettingPopup,{isOpen:this.state.isViewSettingShown,toggle:this.toggleViewSetting,onApply:this.onQueryApply,mainDataSource:this.props.ds,dataView:this.props.ds.getDataSourceJson().query,disableRename:!0,disableRemove:!0,disableDuplicate:!0,isSettingMainDataSource:!0,newDataViewLabel:this.props.ds.getLabel(),newDataViewId:"default"}),c&&this.state.isEditScriptShown&&(0,e.jsx)(a.EditAcradePopup,{isOpen:!0,toggle:this.toggleEditScript,mainDataSource:this.props.ds}),h&&!u&&(0,e.jsx)(z,{ds:this.props.ds,isOpen:this.state.isAutoRefreshShown,intl:this.props.intl,theme:this.props.theme,reference:this.autoRefreshRef,refreshInterval:null===(n=null===(o=this.props.ds.getDataSourceJson())||void 0===o?void 0:o.query)||void 0===n?void 0:n.refreshInterval,onChange:this.onAutoRefreshChange,toggle:this.toggleAutoRefresh,canOriginalDataSetRefreshInterval:f,hasOriginalDataRefreshInterval:f&&g>0}),this.props.ds&&(0,e.jsx)(s.Popper,{placement:"right-start",open:this.state.exportSettingShow,toggle:()=>{this.setState({exportSettingShow:!1})},reference:this.exportSettingPopperRef,children:(0,e.jsx)(Ce,{theme:this.props.theme,intl:this.props.intl,dataSources:[this.props.ds],exportOptions:Object.assign(Object.assign({},null===(r=this.props.ds.getDataSourceJson())||void 0===r?void 0:r.exportOptions),{formats:null===(p=null===(d=null===(l=this.props.ds.getDataSourceJson())||void 0===l?void 0:l.exportOptions)||void 0===d?void 0:d.formats)||void 0===p?void 0:p.asMutable()}),singleExport:!0})})]});var C}}var Ne=m(6055);class Oe extends t.React.PureComponent{constructor(){super(...arguments),this.formatMessage=(e,t,i)=>this.props.intl.formatMessage({id:e,defaultMessage:null!=t?t:s.defaultMessages[e]},i),this.getAppConfig=()=>{var e,s;return null===(s=null===(e=(0,t.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder)||void 0===s?void 0:s.appConfig},this.getBrowserSizeMode=()=>{var e,s;return null===(s=null===(e=(0,t.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder)||void 0===s?void 0:s.browserSizeMode},this.getLayoutItemLabel=(e,i,a)=>{var o,n,r,l,d,p,c,h,u,m,g,f;const S=null===(o=null==e?void 0:e.layouts)||void 0===o?void 0:o[i],v=null===(n=null==S?void 0:S.content)||void 0===n?void 0:n[a];if(!S||!v)return"";switch(v.type){case t.LayoutItemType.Widget:return v.widgetId&&null!==(d=null===(l=null===(r=e.widgets)||void 0===r?void 0:r[v.widgetId])||void 0===l?void 0:l.label)&&void 0!==d?d:"";case t.LayoutItemType.Section:return v.sectionId&&null!==(h=null===(c=null===(p=e.sections)||void 0===p?void 0:p[v.sectionId])||void 0===c?void 0:c.label)&&void 0!==h?h:"";case t.LayoutItemType.ScreenGroup:return v.screenGroupId&&null!==(g=null===(m=null===(u=e.screenGroups)||void 0===u?void 0:u[v.screenGroupId])||void 0===m?void 0:m.label)&&void 0!==g?g:""}if(S.type===t.LayoutType.GridLayout){const i=v.parent?null===(f=S.content)||void 0===f?void 0:f[v.parent]:null;return(null==i?void 0:i.gridType)!==t.GridItemType.Tab||v.gridType!==t.GridItemType.Column&&v.gridType!==t.GridItemType.Row?v.gridType===t.GridItemType.Column?this.formatMessage("gridCol",s.defaultMessages.gridCol):v.gridType===t.GridItemType.Row?this.formatMessage("gridRow",s.defaultMessages.gridRow):this.formatMessage("tab",s.defaultMessages.tab):(0,Ne.getLabelOfGridTab)(e,{layoutId:S.id,layoutItemId:a},this.formatMessage)}return""},this.getGridAncestorNodes=(e,t)=>{var s,i,a,o;const n=[];let r=null===(i=null===(s=null==e?void 0:e.content)||void 0===s?void 0:s[t])||void 0===i?void 0:i.parent;for(;null!=r;)n.push({layoutId:e.id,layoutItemId:r}),r=null===(o=null===(a=e.content)||void 0===a?void 0:a[r])||void 0===o?void 0:o.parent;return n},this.buildBreadcrumbInfos=(e,s)=>{var i,a;if(!s)return[];const o=[s];let n=null===(i=e.layouts)||void 0===i?void 0:i[s.layoutId];(null==n?void 0:n.type)===t.LayoutType.GridLayout&&o.push(...this.getGridAncestorNodes(n,s.layoutItemId));let r=this.findParentNode(e,n);for(;r;)n=null===(a=e.layouts)||void 0===a?void 0:a[r.layoutId],o.push(r),(null==n?void 0:n.type)===t.LayoutType.GridLayout&&o.push(...this.getGridAncestorNodes(n,r.layoutItemId)),r=this.findParentNode(e,n);return o.reverse()},this.getWidgetStartLayoutInfo=(e,t)=>{var s,i,a;const o=this.getBrowserSizeMode(),{mainSizeMode:n}=e,r=null!==(i=null===(s=null==t?void 0:t.parent)||void 0===s?void 0:s[o])&&void 0!==i?i:null===(a=null==t?void 0:t.parent)||void 0===a?void 0:a[n];return(null==r?void 0:r.length)?r[0]:null},this.findParentNode=(e,s)=>{var i,a,o,n,r,l,d,p,c,h,u,m,g,f,S,v,x;if(!(null==s?void 0:s.parent))return null;const{type:D,id:y}=s.parent,w=this.getBrowserSizeMode(),{mainSizeMode:b}=e;switch(D){case t.LayoutParentType.View:{const t=null===(i=e.views)||void 0===i?void 0:i[y],s=t?null===(a=e.sections)||void 0===a?void 0:a[t.parent]:null,d=null!==(n=null===(o=null==s?void 0:s.parent)||void 0===o?void 0:o[w])&&void 0!==n?n:null===(r=null==s?void 0:s.parent)||void 0===r?void 0:r[b];return(null==d?void 0:d.length)?1===d.length?d[0]:this.findParentNode(e,null===(l=e.layouts)||void 0===l?void 0:l[d[0].layoutId]):null}case t.LayoutParentType.Screen:{const t=null===(d=e.screens)||void 0===d?void 0:d[y],s=t?null===(p=e.screenGroups)||void 0===p?void 0:p[t.parent]:null;return null!==(m=null!==(h=null===(c=null==s?void 0:s.parent)||void 0===c?void 0:c[w])&&void 0!==h?h:null===(u=null==s?void 0:s.parent)||void 0===u?void 0:u[b])&&void 0!==m?m:null}case t.LayoutParentType.Widget:{const t=null===(g=e.widgets)||void 0===g?void 0:g[y],s=null!==(S=null===(f=null==t?void 0:t.parent)||void 0===f?void 0:f[w])&&void 0!==S?S:null===(v=null==t?void 0:t.parent)||void 0===v?void 0:v[b];return(null==s?void 0:s.length)?1===s.length?s[0]:this.findParentNode(e,null===(x=e.layouts)||void 0===x?void 0:x[s[0].layoutId]):null}default:return null}},this.getPageLabel=(e,i)=>{var a,o,n,r,l,d,p,c;const h=this.getWidgetStartLayoutInfo(e,i);let u=h?null===(a=e.layouts)||void 0===a?void 0:a[h.layoutId]:null;for(;null==u?void 0:u.parent;){switch(u.parent.type){case t.LayoutParentType.Page:return null!==(r=null===(n=null===(o=e.pages)||void 0===o?void 0:o[u.parent.id])||void 0===n?void 0:n.label)&&void 0!==r?r:"";case t.LayoutParentType.Dialog:return null!==(p=null===(d=null===(l=e.dialogs)||void 0===l?void 0:l[u.parent.id])||void 0===d?void 0:d.label)&&void 0!==p?p:"";case t.LayoutParentType.Header:return this.formatMessage("header",s.defaultMessages.header);case t.LayoutParentType.Footer:return this.formatMessage("footer",s.defaultMessages.footer)}const i=this.findParentNode(e,u);u=(null==i?void 0:i.layoutId)?null===(c=e.layouts)||void 0===c?void 0:c[i.layoutId]:null}return""},this.getWidgetPath=(e,t)=>{var s;const i=this.getWidgetStartLayoutInfo(e,t);if(!i)return null!==(s=t.label)&&void 0!==s?s:"";return this.buildBreadcrumbInfos(e,i).map(t=>this.getLayoutItemLabel(e,t.layoutId,t.layoutItemId)).filter(Boolean).join("/")},this.getWidgetTitle=e=>{var t;const s=this.getAppConfig();if(!s)return null!==(t=e.label)&&void 0!==t?t:"";return[this.getPageLabel(s,e),this.getWidgetPath(s,e)].filter(Boolean).join("/")},this.Item=({widgetJson:i})=>{const a="string"==typeof i.icon?i.icon:i.icon&&i.icon.svg,o="string"==typeof i.icon?null:i.icon&&i.icon.properties&&i.icon.properties.color;return(0,e.jsxs)("div",{className:"d-flex align-content-center mb-4 mx-4",children:[(0,e.jsx)("div",{className:"widget-icon",children:(0,e.jsx)(s.Icon,{icon:a,color:o,autoFlip:t.appConfigUtils.isWidgetIconAutoFlip(i)})}),(0,e.jsx)("div",{className:"flex-grow-1 text-truncate px-2",title:this.getWidgetTitle(i),children:i.label})]},i.id)}}render(){if(!this.props.ds)return(0,e.jsx)("div",{className:"m-2",children:this.props.intl.formatMessage({id:"noSupportedDataSource",defaultMessage:H.noSupportedDataSource})});const t=a.dataComponentsUtils.getWidgetsUsingDsOrItsViews(this.props.ds.id,this.props.widgets,!1);if(!t||0===t.length)return(0,e.jsxs)("div",{className:"empty-placeholder w-100",children:[(0,e.jsx)("div",{className:"empty-placeholder-icon",children:(0,e.jsx)(F,{size:48})}),(0,e.jsx)("div",{className:"empty-placeholder-text",dangerouslySetInnerHTML:{__html:this.props.intl.formatMessage({id:"noRelatedWidget",defaultMessage:s.defaultMessages.noRelatedWidget})}})]});const i=this.Item;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("h5",{className:"m-4 data-setting-secondary-title",children:this.props.intl.formatMessage({id:"relatedWidgets",defaultMessage:s.defaultMessages.relatedWidgets})}),(o=t,o.sort((e,t)=>{var s;return null===(s=e.label)||void 0===s?void 0:s.localeCompare(t.label)})).map(t=>(0,e.jsx)(i,{widgetJson:t},t.id))]});var o}}class Re extends t.React.PureComponent{componentDidMount(){this.props.ds||this.props.backToHomePage()}componentDidUpdate(e,t){e.ds!==this.props.ds&&(this.props.ds||this.props.backToHomePage())}render(){return this.props.ds?(0,e.jsxs)("div",{className:"ds-list pt-4",children:[(0,e.jsx)(Ie,{ds:this.props.ds,onMappingIconClick:this.props.onMappingIconClick,theme:this.props.theme,onShowDetailClick:this.props.onShowDetailClick,intl:this.props.intl,dsInfo:this.props.dsInfo,itemInfoBtn:this.props.itemInfoBtn,onRelatedTableClick:this.props.onRelatedTableClick}),(0,e.jsxs)(s.Tabs,{type:"pills",fill:!0,defaultValue:this.props.defaultActive,children:[(0,e.jsx)(s.Tab,{id:"layers",title:this.props.intl.formatMessage({id:"layers",defaultMessage:s.defaultMessages.layers}),children:(0,e.jsx)("div",{className:"tab-scroll",children:(0,e.jsx)(U,{dataSourceJson:this.props.dataSourceJson,ds:this.props.ds,intl:this.props.intl,dispatch:this.props.dispatch,onDataSourceItemClick:this.props.onDsItemClicked,onChildDataIconClick:this.props.onChildDataIconClick,onRelatedWidgetsIconClick:this.props.onRelatedWidgetsIconClick,widgets:this.props.widgets,theme:this.props.theme,areAllChildDssCreated:this.props.areAllChildDssCreated},this.props.ds.id)})}),(0,e.jsx)(s.Tab,{id:"widgets",title:this.props.intl.formatMessage({id:"widgets",defaultMessage:s.defaultMessages.widgets}),children:(0,e.jsx)("div",{className:"tab-scroll",children:(0,e.jsx)(Oe,{ds:this.props.ds,intl:this.props.intl,widgets:this.props.widgets})})})]})]}):null}}const ke=t.ReactRedux.connect((e,t)=>{var s;return{dataSourceJson:null===(s=t.ds)||void 0===s?void 0:s.getDataSourceJson()}})(Re);var Te=m(5255),Ee=m.n(Te),Ae=m(2276),Le=m.n(Ae),Pe=m(3866),He=m.n(Pe),Je=m(6008),Ve=m.n(Je),$e=m(343),Fe=m.n($e);const Ue={[t.JimuFieldType.Number]:{icon:Ee(),color:"var(--sys-color-info-main)"},[t.JimuFieldType.String]:{icon:Le(),color:"var(--sys-color-success-main)"},[t.JimuFieldType.Date]:{icon:He(),color:"var(--sys-color-warning-main)"},[t.JimuFieldType.DateOnly]:{icon:Ve(),color:"var(--sys-color-warning-main)"},[t.JimuFieldType.TimeOnly]:{icon:Fe(),color:"var(--sys-color-warning-main)"}};class We extends t.React.PureComponent{render(){if(!this.props.field)return null;const t=this.props.field,i=t.alias||t.name,a=this.props.intl.formatMessage({id:"inUse",defaultMessage:s.defaultMessages.inUse}),o=t.type&&Ue[t.type];return(0,e.jsxs)("div",{className:"d-flex w-100 field-item",children:[(0,e.jsxs)("div",{className:"field-item-main",children:[o&&(0,e.jsx)(s.Icon,{icon:o.icon,color:o.color,className:"field-item-type-icon",size:16}),(0,e.jsx)("div",{className:"field-item-label wrap-text",title:i,children:i})]}),t.inUse&&(0,e.jsx)("div",{className:"inuse",title:a,"aria-label":a,children:(0,e.jsx)("span",{className:"inuse-dot"})})]})}}var ze=m(5629),Be=m.n(ze),_e=m(4963);const qe=[t.ArcadeContentCapability.Value],Ge=(0,t.Immutable)([]);function Ke(i){var a,o,n;const r=i.ds.getMainDataSource().getDataSourceJson(),l=i.imUseDataSources,d=i.arcadeFieldName,p=null===(a=r.schema)||void 0===a?void 0:a.arcadeFields,c=d&&(null==p?void 0:p[d]),h=(null==c?void 0:c.name)||"",u=null===(n=null===(o=null==c?void 0:c.parts)||void 0===o?void 0:o[0])||void 0===n?void 0:n.valueType,m=i.onChange,g=null==r?void 0:r.id,f=t.arcadeContentUtils.isArcadeFieldExpressionUsed(g,d),S=t.hooks.useTranslation(s.defaultMessages,H),[v,x]=t.React.useState(!1),[D,y]=t.React.useState(h),w=t.React.useMemo(()=>c?t.expressionUtils.expressionToArcadeConfig(c):null,[c]),b=t.React.useCallback(e=>{e&&m&&m(d,e)},[m,d]),[j,M]=t.React.useState(!1),C=t.React.useCallback(()=>{M(!j)},[j]),[I,N]=t.React.useState(!1),O=t.React.useCallback(e=>{if(!e)return;const s=t.expressionUtils.arcadeConfigToExpression(e);b(s)},[b]),R=t.React.useCallback(()=>{N(!1)},[]),k=t.React.useCallback(()=>{i.onDelete&&i.onDelete(d)},[d,i]),T=t.React.useCallback(()=>{N(!0)},[]),E=t.React.useCallback(()=>{x(!0)},[]),A=t.React.useCallback(e=>{const t=e.target.value||"";y(t)},[]),L=t.React.useCallback(e=>{if(e=(e||"").trim()){const t=(null==p?void 0:p.asMutable({deep:!0}))||{},s=Object.keys(t),i=s.length>0&&s.some(s=>{var i;return s!==d&&(null===(i=t[s])||void 0===i?void 0:i.name)===e});return i?{valid:!1,msg:S("duplicatedLabel")}:{valid:!0,msg:""}}return{valid:!1,msg:""}},[d,p,S]),P=t.React.useCallback(e=>{var t;const s=((null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value)||"").trim(),i=L(s);if(s&&i.valid){if(s!==h&&c){const e=null==c?void 0:c.asMutable({deep:!0});e&&(e.name=s,b(e))}}else y(h);x(!1)},[c,h,L,b]),J=t.React.useCallback(e=>{"Enter"===(null==e?void 0:e.key)&&P(e)},[P]),V=S("more"),$=S("inUse"),F=S("editScript"),U=S("rename"),W=S("delete"),z=t.React.useMemo(()=>({[t.JimuFieldType.Number]:{icon:Ee(),color:"var(--sys-color-info-main)",label:S("numberField")},[t.JimuFieldType.String]:{icon:Le(),color:"var(--sys-color-success-main)",label:S("stringField")},[t.JimuFieldType.Date]:{icon:He(),color:"var(--sys-color-warning-main)",label:S("dateField")},[t.JimuFieldType.DateOnly]:{icon:Ve(),color:"var(--sys-color-warning-main)",label:S("dateOnlyField")},[t.JimuFieldType.TimeOnly]:{icon:Fe(),color:"var(--sys-color-warning-main)",label:S("timeOnlyField")}}),[S]),B=u&&z[u];return(0,e.jsx)("div",{className:"arcade-field-list-item d-flex w-100 align-items-center",children:c&&u&&B&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(s.Icon,{icon:B.icon,color:B.color,className:"mr-2 flex-shrink-0",size:16}),v?(0,e.jsx)(s.TextInput,{size:"sm",autoFocus:!0,value:D,onChange:A,checkValidityOnChange:L,checkValidityOnAccept:L,onBlur:P,onPressEnter:J}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"arcade-field-name wrap-text w-100",children:D}),(0,e.jsxs)("div",{className:"arcade-field-actions",children:[f&&(0,e.jsx)("div",{className:"inuse",title:$,"aria-label":$,children:(0,e.jsx)("span",{className:"inuse-dot"})}),(0,e.jsxs)(s.Dropdown,{direction:"down",isOpen:j,toggle:C,"aria-label":V,menuItemCheckMode:"singleCheck",children:[(0,e.jsx)(s.DropdownButton,{type:"tertiary",size:"sm",arrow:!1,title:V,children:(0,e.jsx)(G,{className:"mr-0"})}),(0,e.jsxs)(s.DropdownMenu,{alignment:"start",children:[(0,e.jsx)(s.DropdownItem,{onClick:T,children:F},"editScript"),(0,e.jsx)(s.DropdownItem,{onClick:E,children:U},"rename"),(0,e.jsx)(s.DropdownItem,{onClick:k,children:W},"delete")]})]})]})]}),I&&w&&(0,e.jsx)(_e.ArcadeContentBuilder,{capabilities:qe,useTitle:!1,useIcons:!1,usedForArcadeField:!0,widgetId:"arcadeField",useDataSources:l,dynamicStyleTypes:Ge,modalOnly:!0,config:w,onChange:O,onModalClose:R})]})})}const Qe=[t.ArcadeContentCapability.Value],Ye=(0,t.Immutable)([]);const Xe=t.ReactRedux.connect((e,t)=>{const s=t.ds,i=null==s?void 0:s.getMainDataSource(),a=null==i?void 0:i.getDataSourceJson();return{mainDs:i,mainDsJson:a}})(function(i){var o;const r=i.mainDs,l=i.mainDsJson,d=null===(o=null==l?void 0:l.schema)||void 0===o?void 0:o.arcadeFields,[p,c]=t.React.useState(!1),[h,u]=t.React.useState(null),[,m]=t.React.useState(0),g=t.React.useCallback(()=>{m(e=>e+1)},[]),f=t.React.useMemo(()=>{const e=r.getRootDataSource(),s=(null==e?void 0:e.id)||"",i={dataSourceId:r.id,mainDataSourceId:r.id,rootDataSourceId:s};return(0,t.Immutable)([i])},[r]),S=t.React.useMemo(()=>{const e=t.arcadeContentUtils.getCustomArcadeFieldExpressionsByDataSource(r);return(0,t.Immutable)(e)},[d]),v=t.React.useCallback(()=>{c(!0)},[]),x=t.React.useCallback(e=>{if(e){const s=a.dataComponentsUtils.editDataSourceJson(e);(0,n.getAppConfigAction)().editDataSource(s).exec(),t.lodash.defer(g)}},[g]),D=t.React.useCallback(e=>{var s,i,a,o;if(!l)return;if(!e.arcadeFieldName){const a=(null===(i=null===(s=l.schema)||void 0===s?void 0:s.arcadeFields)||void 0===i?void 0:i.asMutable({deep:!0}))||{},o=Object.keys(a),n=Object.values(a).map(e=>null==e?void 0:e.name).filter(e=>!!e),r=function(e){const s=t.CONSTANTS.EXB_ARCADE_FIELD_PREFIX;return`${s}${e.length+1}_${Date.now()}`}(o),d=(e=e.set("arcadeFieldName",r)).title;if(n.includes(d)){const t=function(e,t){let s=t,i=2;for(;e.includes(s);)s=`${t} ${i}`,i++;return s}(n,d);e=e.set("title",t)}}const n=t.expressionUtils.arcadeConfigToExpression(e);if(!n)return;if(!(null===(o=null===(a=n.parts)||void 0===a?void 0:a[0])||void 0===o?void 0:o.valueType))return;const r=e.arcadeFieldName,d=l.setIn(["schema","arcadeFields",r],n);x(d)},[l,x]),y=t.React.useCallback(()=>{c(!1)},[]),w=t.React.useCallback((e,t)=>{var s,i,a,o,n;if(!l)return;const r=null===(i=null===(s=null==l?void 0:l.schema)||void 0===s?void 0:s.arcadeFields)||void 0===i?void 0:i[e],d=null===(o=null===(a=null==r?void 0:r.parts)||void 0===a?void 0:a[0])||void 0===o?void 0:o.valueType,p=null===(n=null==t?void 0:t.parts)||void 0===n?void 0:n[0];p&&p.valueType!==d&&(p.valueType=d);const c=l.setIn(["schema","arcadeFields",e],t);x(c)},[l,x]),b=t.React.useCallback(e=>{var s;if(!l)return;let i=null===(s=null==l?void 0:l.schema)||void 0===s?void 0:s.arcadeFields;if(null==i?void 0:i[e]){const s=null==l?void 0:l.id;if(t.arcadeContentUtils.getWidgetsUsingArcadeFieldExpression(s,e).length>0)u({mainDataSourceId:s,arcadeFieldName:e});else{i=i.without(e);const t=l.setIn(["schema","arcadeFields"],i);x(t)}}},[l,x]),j=t.React.useCallback(()=>{u(null)},[]),M=t.hooks.useTranslation(s.defaultMessages,H)("addExpression"),C=S.length>0;return(0,e.jsxs)("div",{className:"arcade-fields",children:[(0,e.jsx)(s.Button,{className:"w-100 text-default set-link-btn mt-1",type:"default","aria-label":M,onClick:v,children:(0,e.jsxs)("div",{className:"w-100 px-2 text-truncate",children:[(0,e.jsx)(s.Icon,{icon:Be(),className:"mr-1",size:14}),M]})}),C&&(0,e.jsx)("div",{className:"custom-arcade-field-list",children:S.map(t=>{const s=null==t?void 0:t.arcadeFieldName;return(0,e.jsx)(Ke,{ds:r,imUseDataSources:f,arcadeFieldName:s,arcadeExpression:t,onChange:w,onDelete:b},`custom-arcade-field-${s}`)})}),p&&(0,e.jsx)(_e.ArcadeContentBuilder,{capabilities:Qe,useTitle:!0,useIcons:!1,usedForArcadeField:!0,widgetId:"arcadeField",useDataSources:f,dynamicStyleTypes:Ye,modalOnly:!0,onChange:D,onModalClose:y}),h&&(0,e.jsx)(a.DataSourceRemoveWarningPopup,{isOpen:!0,reason:a.DataSourceRemoveWaringReason.ArcadeFieldRemoved,arcadeFieldInfo:h,toggle:j,onCancel:j,afterRemove:j})]})}),Ze=class extends t.React.PureComponent{constructor(e){super(e),this.onRemove=e=>{},this.hideRemovePopup=()=>{this.setState({isRemoveOptionsShown:!1})},this.state={isRemoveOptionsShown:!1}}render(){var i,o;if(!this.props.ds)return(0,e.jsx)("div",{className:"m-2",children:this.props.intl.formatMessage({id:"noSupportedDataSource",defaultMessage:H.noSupportedDataSource})});const n=function(e){const t={},s=u(e),i=(null==s?void 0:s.fields)||{},a=d(e),o=(null==a?void 0:a.fields)||{};return Object.keys(i).forEach(e=>{t[e]=Object.assign(Object.assign({},i[e]),{inUse:!1})}),Object.keys(o).forEach(e=>{t[e]=Object.assign(Object.assign({},o[e]),{inUse:!0})}),t}(this.props.ds),r=n&&Object.keys(n).length>0,l=!!!(null===(i=this.props.ds.getDataSourceJson())||void 0===i?void 0:i.arcadeScript)&&t.arcadeContentResolverUtils.isDataSourceSupportedForArcade(this.props.ds);return(0,e.jsxs)("div",{className:"fields-tab ml-4 mr-4",children:[(0,e.jsx)(s.CollapsablePanel,{className:"fields-collapsable-panel normal-fields-collapsable-panel mt-3",type:"default",level:1,defaultIsOpen:!1,label:this.props.intl.formatMessage({id:"attributeFields",defaultMessage:H.attributeFields}),children:r&&M(n).map((t,s)=>(0,e.jsx)(We,{field:n[t],intl:this.props.intl,onRemove:this.onRemove},s))}),l&&(0,e.jsx)(s.CollapsablePanel,{className:"fields-collapsable-panel arcade-fields-collapsable-panel mt-2",type:"default",level:1,defaultIsOpen:!0,label:this.props.intl.formatMessage({id:"arcadeExpressions",defaultMessage:H.arcadeExpressions}),children:(0,e.jsx)(Xe,{ds:this.props.ds})}),(0,e.jsx)(a.DataSourceRemoveWarningPopup,{dataSourceId:null===(o=this.props.ds)||void 0===o?void 0:o.id,isOpen:this.state.isRemoveOptionsShown,toggle:this.hideRemovePopup,reason:a.DataSourceRemoveWaringReason.DataSourceRemoved})]})}};var et=m(4156),tt=m.n(et),st=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(s[i[a]]=e[i[a]])}return s};const it=s=>{const i=window.SVG,{className:a}=s,o=st(s,["className"]),n=(0,t.classNames)("jimu-icon jimu-icon-component",a);return i?(0,e.jsx)(i,Object.assign({className:n,src:tt()},o)):(0,e.jsx)("svg",Object.assign({className:n},o))};var at=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(s[i[a]]=e[i[a]])}return s};const ot=s=>{const i=window.SVG,{className:a}=s,o=at(s,["className"]),n=(0,t.classNames)("jimu-icon jimu-icon-component",a);return i?(0,e.jsx)(i,Object.assign({className:n,src:Be()},o)):(0,e.jsx)("svg",Object.assign({className:n},o))};class nt extends t.React.PureComponent{constructor(e){super(e),this.state={isTooltipOpen:!1}}render(){if(!this.props.dataView||!this.props.ds)return null;const i=t.DataSourceManager.getInstance().getDataViewDataSourceId(this.props.ds.id,this.props.dataView.id),o=a.dataComponentsUtils.getWidgetsUsingDsOrItsDescendantDss(i,this.props.widgets),n=this.props.intl.formatMessage({id:"relatedWidgetsWithDirectlyNum",defaultMessage:s.defaultMessages.relatedWidgetsWithDirectlyNum},{num:null==o?void 0:o.length});return(0,e.jsxs)("div",{tabIndex:0,className:"d-flex align-items-center justify-content-between my-2 mx-4 py-1 px-2 data-view-item text-left text-default",onClick:()=>{this.props.onDataViewClick(this.props.dataView)},title:n,"aria-label":this.props.label,children:[(0,e.jsx)("div",{className:"flex-grow-1 pl-2 my-1 two-line-truncate data-view-label",title:this.props.label,children:this.props.label}),(0,e.jsx)(a.DataSourceIdCopyButton,{dataSourceId:i,intl:this.props.intl})]})}}class rt extends t.React.PureComponent{constructor(e){super(e),this.__unmount=!1,this.toggleViewSetting=()=>{this.setState({isViewSettingOpen:!this.state.isViewSettingOpen})},this.toggleDataViewForNoSelection=(e,i)=>{if(i){const e=(0,t.Immutable)({id:t.CONSTANTS.DATA_VIEW_ID_FOR_NO_SELECTION,label:this.props.intl.formatMessage({id:"dataViewForNoSelection",defaultMessage:s.defaultMessages.dataViewForNoSelection})});this.editDataView(e,!1)}else this.removeDataView(t.CONSTANTS.DATA_VIEW_ID_FOR_NO_SELECTION)},this.onDataViewClick=e=>{this.setState({selectedDataView:e}),this.toggleViewSetting()},this.onCreateViewClick=()=>{this.setState({selectedDataView:null}),this.toggleViewSetting()},this.onApply=e=>{this.editDataView(e,!0)},this.onDuplicate=e=>{this.editDataView(e,!1)},this.removeDataView=e=>{var s,i;if(!e)return;const o=this.props.ds.getDataSourceJson();let r=o.dataViews||(0,t.Immutable)({});r=r.without(e);const l=a.dataComponentsUtils.editDataSourceJson(o.setIn(["dataViews"],r));(0,n.getAppConfigAction)().editDataSource(l).exec(),t.DataSourceManager.getInstance().destroyDataSource(null===(i=null===(s=this.props.ds.getMainDataSource())||void 0===s?void 0:s.getDataView(e))||void 0===i?void 0:i.id),this.updateSelectionView(e)},this.editDataView=(e,s)=>{if(!e)return;const i=this.props.ds.getDataSourceJson();let o=i.dataViews||(0,t.Immutable)({});o=o.set(e.id,e);const r=a.dataComponentsUtils.editDataSourceJson(i.setIn(["dataViews"],o));(0,n.getAppConfigAction)().editDataSource(r).exec(),t.lodash.defer(()=>{t.DataSourceManager.getInstance().createDataSource(i,e.id).then(s=>s.dataViewId===t.CONSTANTS.DATA_VIEW_ID_FOR_NO_SELECTION&&(null==s?void 0:s.load)?this.loadNoSelectionView(s).then(()=>(this.updateSelectionView(e.id),Promise.resolve(null))):(this.changeVersionToLetWidgetsUpdate(),Promise.resolve(null))).then(()=>{this.__unmount||(this.setState({selectedDataView:e}),s&&this.toggleViewSetting())},e=>{console.error("Failed to add data view, ",e),this.__unmount||(this.setState({selectedDataView:null}),s&&this.toggleViewSetting())})})},this.loadNoSelectionView=e=>Promise.all([e.load({returnGeometry:!0},{widgetId:t.CONSTANTS.DATA_VIEW_ID_FOR_NO_SELECTION}),e.loadCount({},{widgetId:t.CONSTANTS.DATA_VIEW_ID_FOR_NO_SELECTION})]),this.updateSelectionView=e=>{var s;e===t.CONSTANTS.DATA_VIEW_ID_FOR_NO_SELECTION&&0===(null===(s=this.props.ds.getMainDataSource())||void 0===s?void 0:s.getSelectedRecordIds().filter(e=>null!=e).length)&&this.clearSelectionView()},this.clearSelectionView=()=>{t.lodash.defer(()=>{var e,s,i,a,o;null===(s=null===(e=this.props.ds.getMainDataSource())||void 0===e?void 0:e.getDataView(t.CONSTANTS.SELECTION_DATA_VIEW_ID))||void 0===s||s.clearRecords(),null===(o=null===(a=null===(i=this.props.ds.getMainDataSource())||void 0===i?void 0:i.getDataView(t.CONSTANTS.SELECTION_DATA_VIEW_ID))||void 0===a?void 0:a.getAllDerivedDataSources())||void 0===o||o.forEach(e=>{null==e||e.clearRecords()}),this.changeVersionToLetWidgetsUpdate()})},this.changeVersionToLetWidgetsUpdate=()=>{var e;null===(e=this.props.ds.getMainDataSource())||void 0===e||e.addSourceVersion()},this.state={isViewSettingOpen:!1,selectedDataView:null}}componentWillUnmount(){this.__unmount=!0}render(){var i,o,n,r;if(!this.props.ds)return(0,e.jsx)("div",{className:"m-2",children:this.props.intl.formatMessage({id:"noSupportedDataSource",defaultMessage:H.noSupportedDataSource})});const l=null===(o=null===(i=this.props.ds.getDataSourceJson())||void 0===i?void 0:i.dataViews)||void 0===o?void 0:o.without(t.CONSTANTS.DATA_VIEW_ID_FOR_NO_SELECTION),d=(null===(n=this.props.ds.getDataSourceJson())||void 0===n?void 0:n.dataViews)&&this.props.ds.getDataSourceJson().dataViews[t.CONSTANTS.DATA_VIEW_ID_FOR_NO_SELECTION],p=this.props.intl.formatMessage({id:"createAView",defaultMessage:s.defaultMessages.createAView}),c=this.props.intl.formatMessage({id:"dataViewForNoSelectionHint",defaultMessage:s.defaultMessages.dataViewForNoSelectionHint}),h=this.props.intl.formatMessage({id:"dataViewForNoSelection",defaultMessage:s.defaultMessages.dataViewForNoSelection}),u=this.props.intl.formatMessage({id:"settings",defaultMessage:s.defaultMessages.settings}),m=t.dataSourceUtils.doesDsSupportQuery(this.props.ds),g=l&&Object.keys(l).length>0;return(0,e.jsxs)("div",{className:"tab-scroll-with-bottom-fix "+(g?"":"data-view-placeholder-con"),children:[m&&(0,e.jsxs)(s.Button,{className:"mx-4 mt-4 mb-2 d-flex justify-content-center align-items-center font-size-13 create-a-view-btn",onClick:this.onCreateViewClick,title:p,"aria-label":p,children:[(0,e.jsx)(ot,{size:"m",className:"flex-shrink-0"}),(0,e.jsx)("div",{className:"text-truncate text-left",children:p})]}),(0,e.jsx)("div",{className:"data-view-container",children:g?Object.values(l).map((t,s)=>(0,e.jsx)(nt,Object.assign({onDataViewClick:this.onDataViewClick,dataView:t,label:t.label},this.props),s)):(0,e.jsxs)("div",{className:"empty-placeholder w-100",children:[(0,e.jsx)("div",{className:"empty-placeholder-icon",children:(0,e.jsx)(it,{size:48})}),(0,e.jsx)("div",{className:"empty-placeholder-text px-4",dangerouslySetInnerHTML:{__html:m?this.props.intl.formatMessage({id:"noDataViewNotice",defaultMessage:H.noDataViewNotice}):this.props.intl.formatMessage({id:"dataViewIsNotSupportedNotice",defaultMessage:H.dataViewIsNotSupportedNotice})}})]})}),m&&(0,e.jsxs)("div",{className:"d-flex align-items-center justify-content-between p-4 no-selection-view-item bg-default",title:c,children:[(0,e.jsxs)("div",{className:"d-flex",children:[(0,e.jsx)(s.Checkbox,{checked:!!d,onChange:this.toggleDataViewForNoSelection,className:"mr-2",id:"no-selection-view-setting"}),(0,e.jsx)(s.Label,{className:"text-truncate mb-0 no-selection-view-label",for:"no-selection-view-setting",title:h,children:h})]}),(0,e.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[(0,e.jsx)("div",{className:"pl-2",title:c,children:(0,e.jsx)(s.Button,{size:"sm",icon:!0,type:"tertiary",disableHoverEffect:!0,disableRipple:!0,className:"cursor-default","aria-label":c,children:(0,e.jsx)(X,{size:"m"})})}),(0,e.jsx)(s.Button,{type:"tertiary",icon:!0,size:"sm",onClick:()=>{this.onDataViewClick(d)},title:u,"aria-label":u,disabled:!d,children:(0,e.jsx)(se,{size:"m"})})]})]}),(0,e.jsx)(a.DataViewSettingPopup,{isOpen:this.state.isViewSettingOpen,toggle:this.toggleViewSetting,onApply:this.onApply,onDuplicate:this.onDuplicate,mainDataSource:this.props.ds,dataView:this.state.selectedDataView,disableRename:(null===(r=this.state.selectedDataView)||void 0===r?void 0:r.id)===t.CONSTANTS.DATA_VIEW_ID_FOR_NO_SELECTION})]})}}const lt=t.ReactRedux.connect((e,t)=>{var s;return{dataSourceJson:null===(s=t.ds)||void 0===s?void 0:s.getDataSourceJson()}})(rt),dt=class extends t.React.PureComponent{componentDidMount(){this.props.ds||this.props.backToHomePage()}componentDidUpdate(e,t){e.ds!==this.props.ds&&(this.props.ds||this.props.backToHomePage())}render(){if(!this.props.ds)return null;const i=!!this.props.ds.query,a=this.props.ds.type!==t.DataSourceTypes.ImageryTileLayer&&this.props.ds.type!==t.DataSourceTypes.ElevationLayer,o=i||a;return(0,e.jsxs)("div",{className:"field-list pt-4 overflow-auto",children:[(0,e.jsx)(Ie,{ds:this.props.ds,onMappingIconClick:this.props.onMappingIconClick,theme:this.props.theme,onShowDetailClick:this.props.onShowDetailClick,intl:this.props.intl,dsInfo:this.props.dsInfo,itemInfoBtn:this.props.itemInfoBtn,onRelatedTableClick:this.props.onRelatedTableClick}),o?(0,e.jsxs)(s.Tabs,{type:"pills",fill:!0,defaultValue:this.props.defaultActive,children:[i&&(0,e.jsx)(s.Tab,{id:"dataViews",title:this.props.intl.formatMessage({id:"dataViews",defaultMessage:H.dataViews}),children:(0,e.jsx)("div",{className:"h-100",children:(0,e.jsx)(lt,{ds:this.props.ds,intl:this.props.intl,widgets:this.props.widgets})})}),(0,e.jsx)(s.Tab,{id:"fields",title:this.props.intl.formatMessage({id:"attributes",defaultMessage:H.attributes}),children:(0,e.jsx)("div",{className:"tab-scroll",children:(0,e.jsx)(Ze,{ds:this.props.ds,intl:this.props.intl,widgets:this.props.widgets,messages:this.props.messages})})}),(0,e.jsx)(s.Tab,{id:"widgets",title:this.props.intl.formatMessage({id:"widgets",defaultMessage:s.defaultMessages.widgets}),children:(0,e.jsx)("div",{className:"tab-scroll",children:(0,e.jsx)(Oe,{ds:this.props.ds,intl:this.props.intl,widgets:this.props.widgets})})})]}):(0,e.jsx)("div",{className:"tab-scroll",children:(0,e.jsx)(Oe,{ds:this.props.ds,intl:this.props.intl,widgets:this.props.widgets})})]})}};var pt=m(4865),ct=m.n(pt),ht=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(s[i[a]]=e[i[a]])}return s};const ut=s=>{const i=window.SVG,{className:a}=s,o=ht(s,["className"]),n=(0,t.classNames)("jimu-icon jimu-icon-component",a);return i?(0,e.jsx)(i,Object.assign({className:n,src:ct()},o)):(0,e.jsx)("svg",Object.assign({className:n},o))};var mt=m(3935),gt=m.n(mt),ft=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(s[i[a]]=e[i[a]])}return s};const St=s=>{const i=window.SVG,{className:a}=s,o=ft(s,["className"]),n=(0,t.classNames)("jimu-icon jimu-icon-component",a);return i?(0,e.jsx)(i,Object.assign({className:n,src:gt()},o)):(0,e.jsx)("svg",Object.assign({className:n},o))},vt=class extends t.React.PureComponent{constructor(i){super(i),this.toggleDropdown=()=>{this.setState({isNewDsDropdownOpen:!this.state.isNewDsDropdownOpen})},this.setNewChildDss=e=>{e&&this.setState({newDss:e.isDataSourceSet()&&e.getChildDataSources()})},this.getSelectedDsLabel=e=>e&&(e.getLabel()||e.id),this.onSelectedNewDsChange=e=>{this.props.updateMappedSchema(this.props.curDs,e)},this.DsInfo=({curDs:i,selectedNewDs:o})=>{if(!i)return null;const n=a.dataComponentsUtils.getWidgetsUsingDsOrItsViews(i.id,this.props.widgets,!1);return(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"d-flex align-items-center m-2",children:[(0,e.jsx)("div",{className:"d-flex align-items-center justify-content-center mr-1 flex-shrink-0 border-color-secondary ds-thumbnail",children:(0,e.jsx)(s.Icon,{icon:t.dataSourceUtils.getDsIcon(i.getDataSourceJson()),className:"text-default",size:"22"})}),(0,e.jsx)("div",{className:"flex-grow-1 text-truncate p-1",title:i.getLabel()||i.id,children:i.getLabel()||i.id}),this.props.isDone?null:(0,e.jsx)("div",{className:"d-flex align-items-center justify-content-center mb-4",children:(0,e.jsx)(St,{size:"s",style:{color:"var(--sys-color-error)"}})})]}),(0,e.jsxs)("div",{className:"d-flex m-2",children:[(0,e.jsx)("div",{className:"w-100 d-flex",children:(0,e.jsx)("div",{className:"d-flex bg-default ds-type h6 pl-1 pr-1",children:(0,e.jsx)("div",{className:"flex-shrink-0 hint-paper mr-1 text-truncate ds-type-name",children:t.dataSourceUtils.getDsTypeString(i.type,this.props.intl)})})}),(0,e.jsxs)("div",{className:"flex-shrink-0 d-flex flex-row ds-related-widgets",children:[(0,e.jsx)(ut,{className:"mr-1 text-default"}),(0,e.jsx)("span",{className:"align-middle",children:n&&n.length})]})]})]})},this.state={isNewDsDropdownOpen:!1,newDss:null}}componentDidMount(){this.setNewChildDss(this.props.newParentDs)}componentDidUpdate(e){e.newParentDs!==this.props.newParentDs&&this.setNewChildDss(this.props.newParentDs)}render(){if(!this.props.curDs)return null;const i=this.props.selectedNewDs,a=this.DsInfo;return(0,e.jsxs)("div",{className:"border-color-secondary bg-overlay m-2 p-2 list-item ds-mapping-ds-item",children:[(0,e.jsx)(a,{curDs:this.props.curDs,selectedNewDs:i}),(0,e.jsx)("div",{className:"align-items-center",children:(0,e.jsx)("div",{className:"ds-mapping-drop-down p-2",children:(0,e.jsxs)(s.Dropdown,{isOpen:this.state.isNewDsDropdownOpen,className:"w-100 drop-down",toggle:this.toggleDropdown,children:[(0,e.jsx)(s.DropdownButton,{className:"w-100 text-truncate",disabled:!this.state.newDss,children:this.getSelectedDsLabel(i)||""}),this.state.newDss?(0,e.jsx)(s.DropdownMenu,{className:"text-truncate",zIndex:1050,children:t.dataSourceUtils.getSortedArrayByLabel(this.state.newDss).map((t,i)=>t&&t.id?(0,e.jsx)(s.DropdownItem,{onClick:()=>{this.onSelectedNewDsChange(t)},title:t.getLabel()||t.id,style:{width:"220px"},children:(0,e.jsx)("div",{className:"text-truncate",children:t.getLabel()||t.id})},i):null)}):null]})})})]})}},xt=class extends t.React.PureComponent{constructor(e){super(e),this.toggleDropdown=()=>{this.setState({isDropdownOpen:!this.state.isDropdownOpen})},this.onDropDownItemClicked=e=>{this.props.updateMappedSchema(this.props.curField,e)},this.state={isDropdownOpen:!1}}render(){if(!this.props.curField||!this.props.newSchema)return null;const t=this.props.newSchema,i=this.props.selectedNewField;return(0,e.jsxs)("div",{className:"m-2 filed-mapping-item",children:[(0,e.jsx)("div",{children:this.props.curField.alias||this.props.curField.name}),(0,e.jsx)("div",{className:"ds-mapping-drop-down p-2",children:(0,e.jsxs)(s.Dropdown,{isOpen:this.state.isDropdownOpen,className:"w-100 drop-down",toggle:this.toggleDropdown,children:[(0,e.jsx)(s.DropdownButton,{className:"w-100 text-truncate",disabled:!t||!t.fields,children:i&&(i.alias||i.name)||""}),t&&t.fields?(0,e.jsx)(s.DropdownMenu,{className:"text-truncate",zIndex:1050,children:M(t.fields).map((i,a)=>t.fields[i]&&t.fields[i].esriType===this.props.curField.esriType?(0,e.jsx)(s.DropdownItem,{onClick:()=>{this.onDropDownItemClicked(t.fields[i])},style:{width:"220px"},children:(0,e.jsx)("div",{className:"text-truncate",children:t.fields[i].alias||t.fields[i].name})},a):null)}):null]})})]})}};var Dt=m(1337),yt=m.n(Dt),wt=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(s[i[a]]=e[i[a]])}return s};const bt=s=>{const i=window.SVG,{className:a}=s,o=wt(s,["className"]),n=(0,t.classNames)("jimu-icon jimu-icon-component",a);return i?(0,e.jsx)(i,Object.assign({className:n,src:yt()},o)):(0,e.jsx)("svg",Object.assign({className:n},o))};var jt=m(85),Mt=m.n(jt),Ct=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(s[i[a]]=e[i[a]])}return s};const It=s=>{const i=window.SVG,{className:a}=s,o=Ct(s,["className"]),n=(0,t.classNames)("jimu-icon jimu-icon-component",a);return i?(0,e.jsx)(i,Object.assign({className:n,src:Mt()},o)):(0,e.jsx)("svg",Object.assign({className:n},o))};class Nt extends t.React.PureComponent{constructor(){super(...arguments),this.onToggleExternalDsClicked=()=>{this.props.toggleExternalDs(!this.props.isExternalDsShown)},this.onCancelClicked=()=>{this.props.hideMapping()}}render(){if(!this.props.curDs)return(0,e.jsx)("div",{className:"m-2",children:this.props.intl.formatMessage({id:"noSupportedDataSource",defaultMessage:H.noSupportedDataSource})});const s=this.props.newDs||this.props.curDs;return(0,e.jsxs)("div",{className:"mapping-info",children:[(0,e.jsx)("div",{className:"border-color-gray-300 m-2 ds-mapping-header",children:this.props.isMappingReady&&(0,e.jsxs)("div",{className:"d-inline-block ds-mapping-header-back",onClick:this.onCancelClicked,children:[(0,e.jsx)(It,{autoFlip:!0}),(0,e.jsx)("span",{className:"align-middle ml-2",children:this.props.intl.formatMessage({id:"cancel",defaultMessage:t.defaultMessages.cancel})})]})}),(0,e.jsxs)("div",{className:"border-color-gray-300 ds-mapping-cur-info",children:[(0,e.jsx)("div",{className:"flex-grow-1 m-2 align-self-center text-truncate ds-label",title:this.props.curDs.getLabel()||this.props.curDs.id,children:this.props.curDs.getLabel()||this.props.curDs.id}),(0,e.jsx)("div",{className:"d-flex m-2",children:(0,e.jsxs)("div",{className:"d-flex bg-default ds-type h6",children:[(0,e.jsx)("div",{className:"ml-1 mr-1 ds-type-icon",style:{backgroundColor:"var(--sys-color-success)"}}),(0,e.jsx)("div",{className:"flex-shrink-0 hint-paper mr-1 text-truncate ds-type-name",children:t.dataSourceUtils.getDsTypeString(this.props.curDs.type,this.props.intl)})]})})]}),(0,e.jsxs)("div",{className:"m-2 d-flex flex-column ds-mapping-collapse",children:[(0,e.jsxs)("div",{className:"mt-1 d-flex justify-content-between",children:[(0,e.jsx)("span",{className:"align-middle ml-1",children:"Source"}),this.props.isOpenSelectDataBtnHide?null:(0,e.jsx)("span",{className:"inline-block mr-1 bg-default ds-mapping-source",onClick:this.onToggleExternalDsClicked,children:(0,e.jsx)(bt,{className:"text-default",size:"s"})})]}),(0,e.jsx)("div",{className:(0,t.classNames)("text-truncate pl-1 mt-2 w-100 ds-origin-label",{"border border-primary":!!this.props.newDs},{"border-light-500":!this.props.newDs}),title:s.getLabel()||s.id,children:(0,e.jsx)("span",{className:"align-middle",children:s.getLabel()||s.id})})]})]})}}class Ot extends t.React.PureComponent{constructor(e){super(e),this.updateMappedSchema=(e,t)=>{const s=Object.assign({},this.state.mappedSchema),i=y(e,t,this.props.curDs&&this.props.curDs.getDataSourceJson()&&this.props.curDs.getDataSourceJson().schema);s.fields[i.jimuName]=i,this.setState({mappedSchema:s})},this.getIsDoneStatus=()=>{let e;return e=!(!c(this.state.curSchema,this.state.mappedSchema)||!this.props.newDs),e},this.getCanSelectNewDs=()=>!this.props.newDs||this.props.newDs.id===this.props.curDs.id,this.getSelectedNewField=(e,t)=>{if(!(this.state.newSchema&&this.state.newSchema.fields&&this.state.mappedSchema&&this.state.mappedSchema.fields&&this.state.mappedSchema.fields[e]))return null;const s=this.state.newSchema.fields[this.state.mappedSchema.fields[e].name];return s&&s.esriType===t?s:null},this.onNextClicked=()=>{let e=Object.assign({},this.state.mappedSchema);this.state.newSchema&&this.state.newSchema.fields&&Object.keys(this.state.newSchema.fields).forEach(t=>{e=j(e,this.state.newSchema.fields[t])}),this.setState({mappedSchema:e},()=>{this.props.onMappingFinished(this.props.curDs,this.state.mappedSchema,this.props.isLast)})},this.onPreviousClicked=()=>{this.props.backToPreviousMapping()},this.state={curSchema:d(this.props.curDs),newSchema:u(this.props.newDs),mappedSchema:this.props.defaultMappedSchema&&this.props.defaultMappedSchema.fields?(0,t.Immutable)(this.props.defaultMappedSchema).asMutable({deep:!0}):null,isDone:!1}}componentDidMount(){if(this.getCanSelectNewDs()?this.props.toggleExternalDs(!0):this.props.toggleExternalDs(!1),!this.state.mappedSchema||!this.state.mappedSchema.fields||0===Object.keys(this.state.mappedSchema.fields).length){const e=this.props.curDs&&this.props.curDs.getDataSourceJson()&&this.props.curDs.getDataSourceJson()&&this.props.curDs.getDataSourceJson().schema;this.setState({mappedSchema:{fields:D(this.state.curSchema,this.state.newSchema,e)}})}this.setState({isDone:this.getIsDoneStatus()})}componentDidUpdate(e,s){if((e.curDs!==this.props.curDs||this.getWhetherJsonRelatedDataChange(e,this.props))&&this.setState({curSchema:d(this.props.curDs)}),(e.newDs!==this.props.newDs||this.getWhetherJsonRelatedDataChange(e,this.props))&&this.setState({newSchema:u(this.props.newDs)}),s.newSchema!==this.state.newSchema||s.curSchema!==this.state.curSchema)if(this.props.defaultMappedSchema&&this.props.defaultMappedSchema.fields&&Object.keys(this.props.defaultMappedSchema.fields).length>0)this.setState({mappedSchema:(0,t.Immutable)(this.props.defaultMappedSchema).asMutable({deep:!0})});else{const e=this.props.curDs&&this.props.curDs.getDataSourceJson()&&this.props.curDs.getDataSourceJson()&&this.props.curDs.getDataSourceJson().schema,t={fields:D(this.state.curSchema,this.state.newSchema,e)};this.setState({mappedSchema:t})}s.curSchema===this.state.curSchema&&s.mappedSchema===this.state.mappedSchema&&s.newSchema===this.state.newSchema||this.setState({isDone:this.getIsDoneStatus()})}getWhetherJsonRelatedDataChange(e,t){return e.dataSources!==t.dataSources||e.widgets!==t.widgets||e.messages!==t.messages}render(){return this.props.curDs?(0,e.jsxs)("div",{className:"ds-mapping-field",children:[(0,e.jsx)(Nt,{curDs:this.props.curDs,newDs:this.props.newDs,hideMapping:this.props.hideMapping,isOpenSelectDataBtnHide:!this.getCanSelectNewDs(),toggleExternalDs:this.props.toggleExternalDs,isMappingReady:this.props.isMappingReady,isExternalDsShown:this.props.isExternalDsShown,intl:this.props.intl}),this.state.curSchema&&this.state.curSchema.fields&&Object.keys(this.state.curSchema.fields).length>0?M(this.state.curSchema.fields).map((t,s)=>(0,e.jsx)(xt,{curField:this.state.curSchema.fields[t],newSchema:this.state.newSchema,updateMappedSchema:this.updateMappedSchema,selectedNewField:this.getSelectedNewField(t,this.state.curSchema.fields[t].esriType)},s)):(0,e.jsx)("div",{className:"ml-5 mt-2",children:this.props.intl.formatMessage({id:"noUsedFieldToMap",defaultMessage:H.noUsedFieldToMap})}),(0,e.jsxs)("div",{className:"fixed-bottom ds-mapping-buttons",children:[this.props.curDs.parentDataSource&&(0,e.jsx)(s.Button,{onClick:this.onPreviousClicked,disabled:!this.props.isMappingReady||this.props.isWarning,children:this.props.intl.formatMessage({id:"previous",defaultMessage:s.defaultMessages.previous})}),(0,e.jsx)(s.Button,{disabled:!this.state.isDone||!this.props.isMappingReady||this.props.isWarning,onClick:this.onNextClicked,className:"ml-2",style:{backgroundColor:"var(--sys-color-primary)"},children:this.props.isLast?this.props.intl.formatMessage({id:"done",defaultMessage:s.defaultMessages.done}):this.props.intl.formatMessage({id:"next",defaultMessage:s.defaultMessages.next})})]})]}):(0,e.jsx)("div",{className:"m-2",children:this.props.intl.formatMessage({id:"noSupportedDataSource",defaultMessage:H.noSupportedDataSource})})}}class Rt extends t.React.PureComponent{constructor(e){super(e),this.updateMappedChildSchema=(e,t)=>{const s=Object.assign({},this.state.mappedSchema),i=u(e),a=i&&i.jimuChildId,o=e&&e.getDataSourceJson()&&e.getDataSourceJson()&&e.getDataSourceJson().schema,n=x(d(e),u(t),o);s.childSchemas[a]=n,this.setState({mappedSchema:s})},this.updateMappedSchema=(e,t)=>{const s=Object.assign({},this.state.mappedSchema),i=u(t),a=i&&i.jimuChildId;s.childSchemas[a]=Object.assign(Object.assign({},s.childSchemas[a]),e),this.setState({mappedSchema:s})},this.setChildDs=(e,t)=>{this.setState({curChildDs:e,newChildDs:t})},this.getIsDoneStatus=()=>{let e;return e=!!c(this.state.curSchema,this.state.mappedSchema),e},this.getIsChildMappingDoneStatus=()=>{let e;var t,s;return t=this.state.curSchema,s=this.state.mappedSchema,e=!!(t&&s&&(h(t)?Object.keys(t.childSchemas).every(e=>!(!s.childSchemas||!s.childSchemas[e])):t.fields&&Object.keys(t.fields).every(e=>!(!s.fields||!s.fields[e])))),e},this.getSelectedNewDs=e=>{if(!(this.state.mappedSchema&&this.state.mappedSchema.childSchemas&&this.state.mappedSchema.childSchemas[e]&&this.props.newDs))return null;const t=this.state.mappedSchema.childSchemas[e].childId;return t&&this.props.newDs.isDataSourceSet()?this.props.newDs.getChildDataSource(t):null},this.getDefaultMappedFieldSchema=()=>{const e=u(this.props.curDs);return this.props.defaultMappedSchema&&e?this.props.defaultMappedSchema.childSchemas[e.jimuChildId]:null},this.getWhetherHaveChildDssToMap=()=>this.state.curSchema&&this.state.curSchema.childSchemas&&0!==Object.keys(this.state.curSchema.childSchemas).length,this.onFieldMappingFinished=(e,t,s)=>{const i=Object.assign({},t);this.props.updateMappedSchema&&this.props.updateMappedSchema(i,this.props.curDs),s?this.props.onDsMappingFinished():this.props.traverseParentDsMapping&&this.props.traverseParentDsMapping()},this.onDsMappingFinished=()=>{if(!this.props.newDs||!this.props.newDs.isDataSourceSet())return;let e=Object.assign({},this.state.mappedSchema);this.props.newDs.getChildDataSources().forEach(t=>{e=b(e,u(t))}),this.setState({mappedSchema:e},()=>{if(this.props.isRoot){const e=f(this.props.curDs.getDataSourceJson(),this.props.newDs.getDataSourceJson(),this.state.mappedSchema);this.props.onMappingFinished&&this.props.onMappingFinished(e)}else this.props.updateMappedSchema&&this.props.updateMappedSchema(this.state.mappedSchema,this.props.curDs);this.props.hideMapping()})},this.traverseDsMapping=()=>{const e=M(this.state.curSchema.childSchemas).find(e=>this.props.mappingHistory.every(t=>!u(t).jimuChildId||u(t).jimuChildId!==e)),t=this.props.curDs.isDataSourceSet()&&this.props.curDs.getChildDataSource(e),s=this.getSelectedNewDs(e);t?(this.setChildDs(t,s),this.props.updateMappingHistory(this.props.mappingHistory.concat(t))):this.props.traverseParentDsMapping?this.props.traverseParentDsMapping():(this.setChildDs(null,null),this.onDsMappingFinished())},this.reverseTraverseDsMapping=()=>{const e=this.props.mappingHistory.length>1?this.props.mappingHistory.slice(this.props.mappingHistory.length-2)[0]:null,t=u(e)&&u(e).jimuChildId,s=this.getSelectedNewDs(t);e&&(this.setChildDs(e,s),this.props.updateMappingHistory(this.props.mappingHistory.slice(0,this.props.mappingHistory.length-1)))},this.state={newChildDs:null,curChildDs:null,curSchema:this.props.curDs&&this.props.curDs.isDataSourceSet()?d(this.props.curDs):null,newSchema:this.props.newDs&&this.props.newDs.isDataSourceSet()?u(this.props.newDs):null,mappedSchema:this.props.defaultMappedSchema||null,isDone:!1,isChildMappingDone:!1}}componentDidMount(){if(!this.state.mappedSchema||0===Object.keys(this.state.mappedSchema).length){const e=this.props.curDs&&this.props.curDs.getDataSourceJson()&&this.props.curDs.getDataSourceJson()&&this.props.curDs.getDataSourceJson().schema;this.setState({mappedSchema:x(this.state.curSchema,this.state.newSchema,e)})}this.setState({isDone:this.getIsDoneStatus(),isChildMappingDone:this.getIsChildMappingDoneStatus()})}componentDidUpdate(e,t){if((e.curDs!==this.props.curDs&&this.props.curDs&&this.props.curDs.isDataSourceSet()||this.getWhetherJsonRelatedDataChange(e,this.props))&&this.setState({curSchema:d(this.props.curDs)}),(e.newDs!==this.props.newDs&&this.props.newDs&&this.props.newDs.isDataSourceSet()||this.getWhetherJsonRelatedDataChange(e,this.props))&&this.setState({newSchema:u(this.props.newDs)}),t.newSchema!==this.state.newSchema){const e=this.props.curDs&&this.props.curDs.getDataSourceJson()&&this.props.curDs.getDataSourceJson()&&this.props.curDs.getDataSourceJson().schema;this.setState({mappedSchema:x(this.state.curSchema,this.state.newSchema,e)})}t.curSchema===this.state.curSchema&&t.mappedSchema===this.state.mappedSchema&&t.newSchema===this.state.newSchema||this.setState({isDone:this.getIsDoneStatus(),isChildMappingDone:this.getIsChildMappingDoneStatus()}),e.isRoot!==this.props.isRoot&&this.props.isRoot&&this.props.toggleExternalDs(!0)}getWhetherJsonRelatedDataChange(e,t){return e.dataSources!==t.dataSources||e.widgets!==t.widgets||e.messages!==t.messages}render(){return this.props.curDs?(0,e.jsx)(e.Fragment,{children:this.state.curChildDs&&this.state.newChildDs?(0,e.jsx)(Rt,{newDs:this.state.newChildDs,curDs:this.state.curChildDs,defaultMappedSchema:this.state.mappedSchema,isRoot:!1,isExternalDsShown:this.props.isExternalDsShown,isMappingReady:this.props.isMappingReady,hideMapping:this.props.hideMapping,toggleExternalDs:this.props.toggleExternalDs,isWarning:this.props.isWarning,mappingHistory:this.props.mappingHistory,updateMappedSchema:this.updateMappedSchema,traverseParentDsMapping:this.traverseDsMapping,updateMappingHistory:this.props.updateMappingHistory,widgets:this.props.widgets,dataSources:this.props.dataSources,messages:this.props.messages,reverseTraverseParentDsMapping:this.reverseTraverseDsMapping,onDsMappingFinished:this.onDsMappingFinished,intl:this.props.intl}):(0,e.jsx)("div",{className:"w-100 h-100 ds-mapping-ds",children:this.props.curDs.isDataSourceSet()?(0,e.jsxs)("div",{children:[(0,e.jsx)(Nt,{curDs:this.props.curDs,newDs:this.props.newDs,hideMapping:this.props.hideMapping,toggleExternalDs:this.props.toggleExternalDs,isMappingReady:this.props.isMappingReady,isExternalDsShown:this.props.isExternalDsShown,intl:this.props.intl}),this.getWhetherHaveChildDssToMap()?(0,e.jsxs)("div",{children:[(0,e.jsx)("h5",{className:"m-4 data-setting-secondary-title",children:this.props.intl.formatMessage({id:"inUse",defaultMessage:s.defaultMessages.inUse})}),M(this.state.curSchema.childSchemas).map((t,s)=>(0,e.jsx)(vt,{curDs:this.props.curDs.isDataSourceSet()&&this.props.curDs.getChildDataSource(t),selectedNewDs:this.getSelectedNewDs(t),newParentDs:this.props.newDs,updateMappedSchema:this.updateMappedChildSchema,isDone:c(this.state.curSchema.childSchemas[t],this.state.mappedSchema.childSchemas[t]),widgets:this.props.widgets,intl:this.props.intl},s))]}):(0,e.jsx)("div",{className:"p-2",children:this.props.intl.formatMessage({id:"noChildDssToMap",defaultMessage:H.noChildDssToMap})}),(0,e.jsxs)("div",{className:"fixed-bottom ds-mapping-buttons",children:[(0,e.jsx)(s.Button,{disabled:1===this.props.mappingHistory.length||!this.props.isMappingReady||this.props.isWarning,type:"secondary",onClick:this.reverseTraverseDsMapping,children:this.props.intl.formatMessage({id:"previous",defaultMessage:s.defaultMessages.previous})}),(0,e.jsx)(s.Button,{type:"secondary",onClick:this.traverseDsMapping,disabled:!this.state.isChildMappingDone||!this.props.isMappingReady||this.props.isWarning,className:"ml-2",style:{backgroundColor:"var(--sys-color-primary)"},children:this.getWhetherHaveChildDssToMap()?this.props.intl.formatMessage({id:"next",defaultMessage:s.defaultMessages.next}):this.props.intl.formatMessage({id:"done",defaultMessage:s.defaultMessages.done})})]})]}):(0,e.jsx)("div",{className:"ds-mapping-field-container",children:(0,e.jsx)(Ot,{curDs:this.props.curDs,newDs:this.props.newDs,onMappingFinished:this.onFieldMappingFinished,defaultMappedSchema:this.getDefaultMappedFieldSchema(),isExternalDsShown:this.props.isExternalDsShown,hideMapping:this.props.hideMapping,isLast:C(this.props.curDs,this.props.curDs.parentDataSource,this.props.mappingHistory),toggleExternalDs:this.props.toggleExternalDs,isMappingReady:this.props.isMappingReady,mappingHistory:this.props.mappingHistory.concat(this.props.curDs),isWarning:this.props.isWarning,backToPreviousMapping:this.props.reverseTraverseParentDsMapping,intl:this.props.intl,widgets:this.props.widgets,dataSources:this.props.dataSources,messages:this.props.messages})})})}):(0,e.jsx)("div",{className:"m-2",children:this.props.intl.formatMessage({id:"noSupportedDataSource",defaultMessage:H.noSupportedDataSource})})}}class kt extends t.React.PureComponent{constructor(){super(...arguments),this.contentStyle={position:"fixed",bottom:"50px",top:"auto",left:"0",right:"auto",width:"280px",height:"90px",backgroundColor:this.props.theme.ref.palette.neutral[500],borderColor:this.props.theme.sys.color.error.main,borderWidth:"1px",borderStyle:"solid",zIndex:5}}render(){return this.props.warning?(0,e.jsx)(s.Popper,{open:!0,style:this.contentStyle,disablePortal:!0,reference:null,children:this.props.warning}):null}}const Tt=(0,re.withTheme)(kt);var Et=function(e,t,s,i){return new(s||(s=Promise))(function(a,o){function n(e){try{l(i.next(e))}catch(e){o(e)}}function r(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof s?t:new s(function(e){e(t)})).then(n,r)}l((i=i.apply(e,t||[])).next())})};class At extends t.React.PureComponent{constructor(e){super(e),this.__unmount=!1,this.createSameDsWithDiffId=e=>Et(this,void 0,void 0,function*(){if(!e||!e.id)return yield Promise.reject(new Error("Pass a wrong data source"));const s=this.getTempDsId(e.id),i=e.set("id",s).without("schema");return this.creatingDsId=s,yield t.DataSourceManager.getInstance().createDataSource(i).then(e=>(this.creatingDsId=null,e))}),this.destroyDs=e=>{e&&e!==this.props.ds.id&&t.DataSourceManager.getInstance().destroyDataSource(e)},this.updateMappingHistory=e=>{this.setState({mappingHistory:e})},this.hideMapping=()=>{this.state.newDs&&this.destroyDs(this.state.newDs.id),this.creatingDsId&&this.destroyDs(this.creatingDsId),this.props.hideMapping()},this.hideExternalDs=()=>{this.setState({isExternalDsShown:!1})},this.getTempDsId=e=>`${e}-${(0,t.uuidv1)()}`,this.toggleExternalDs=e=>{this.setState({isExternalDsShown:e})},this.onSelectExternalDs=e=>{const t=e[0];t?(this.setState({isMappingReady:!1}),this.createSameDsWithDiffId(t).then(e=>{this.__unmount||this.setState({newDs:e,isMappingReady:!0,isWarning:!1})},e=>{this.__unmount||(console.error(e),this.setState({isMappingReady:!0,isWarning:!0}))})):this.setState({isWarning:!0})},this.onRemoveExternalDs=e=>{e[0]||this.setState({isWarning:!0}),this.setState({newDs:null})},this.state={newDs:null,mappedSchema:this.props.ds&&this.props.ds.isDataSourceSet()?{childSchemas:{}}:{},mappingHistory:this.props.ds?[this.props.ds]:[],isExternalDsShown:!0,isDone:!1,isMappingReady:!1,isWarning:!1}}componentDidMount(){this.__unmount=!1,this.rootDom&&this.dataSelector&&this.moveDataSelector(),this.props.ds&&this.createSameDsWithDiffId(this.props.ds.getDataSourceJson()).then(e=>{this.__unmount||this.setState({newDs:e,mappedSchema:d(e,e=>(delete e.alias,e)),isMappingReady:!0,isWarning:!1})},e=>{this.__unmount||(console.error(e),this.setState({isMappingReady:!0,isWarning:!0}))})}componentDidUpdate(e,t){this.rootDom&&this.dataSelector&&this.moveDataSelector(),t.newDs!==this.state.newDs&&t.newDs&&this.destroyDs(t.newDs.id),this.state.newDs||this.creatingDsId||!this.props.ds||(this.setState({isMappingReady:!1}),this.createSameDsWithDiffId(this.props.ds.getDataSourceJson()).then(e=>{this.__unmount||this.setState({newDs:e,mappedSchema:d(e,e=>(delete e.alias,e)),isMappingReady:!0,isWarning:!1})},e=>{this.__unmount||(console.error(e),this.setState({isMappingReady:!0,isWarning:!0}))}))}componentWillUnmount(){this.__unmount=!0,this.state.newDs&&this.destroyDs(this.state.newDs.id),this.creatingDsId&&this.destroyDs(this.creatingDsId)}moveDataSelector(){const e=function(e){if(!e)return null;let t=e.offsetLeft,s=e.offsetTop,i=e.offsetParent;for(;null!==i;)t+=i.offsetLeft,s+=i.offsetTop,i=i.offsetParent;return{x:t,y:s}}(this.rootDom);this.dataSelector&&e&&(this.dataSelector.style.left=`${e.x+this.rootDom.offsetWidth}px`,this.dataSelector.style.top="40px",this.dataSelector.style.bottom="0px",this.dataSelector.style.right="0px")}onMappingFinished(e,s){if(!e||!this.state.newDs)return;let i;e.getDataSourceJson?e.getDataSourceJson&&s&&(i=f(this.props.ds.getDataSourceJson(),this.state.newDs.getDataSourceJson(),s)):i=e,(0,n.getAppConfigAction)().editDataSource(i).exec(),t.DataSourceManager.getInstance().createDataSource(i),this.setState({mappedSchema:i.schema}),this.hideMapping()}render(){return this.props.ds?(0,e.jsxs)("div",{className:"ds-mapping",ref:e=>{this.rootDom=e},children:[this.props.ds.isDataSourceSet()?(0,e.jsx)("div",{className:"ds-mapping-ds-container",children:(0,e.jsx)(Rt,{curDs:this.props.ds,newDs:this.state.newDs,isRoot:!0,intl:this.props.intl,onMappingFinished:this.onMappingFinished.bind(this),defaultMappedSchema:this.state.mappedSchema,hideMapping:this.hideMapping,toggleExternalDs:this.toggleExternalDs,isWarning:this.state.isWarning,isExternalDsShown:this.state.isExternalDsShown,isMappingReady:this.state.isMappingReady,mappingHistory:this.state.mappingHistory,updateMappingHistory:this.updateMappingHistory,widgets:this.props.widgets,dataSources:this.props.dataSources,messages:this.props.messages})}):null,this.props.ds.isDataSourceSet()?null:(0,e.jsx)("div",{className:"ds-mapping-field-container",children:(0,e.jsx)(Ot,{curDs:this.props.ds,newDs:this.state.newDs,onMappingFinished:this.onMappingFinished.bind(this),defaultMappedSchema:this.state.mappedSchema,hideMapping:this.hideMapping,isWarning:this.state.isWarning,isMappingReady:this.state.isMappingReady,isExternalDsShown:this.state.isExternalDsShown,isLast:!0,toggleExternalDs:this.toggleExternalDs,mappingHistory:this.state.mappingHistory,intl:this.props.intl,widgets:this.props.widgets,dataSources:this.props.dataSources,messages:this.props.messages})}),this.state.isMappingReady?null:(0,e.jsx)("div",{className:"jimu-secondary-loading"}),this.state.isExternalDsShown?(0,e.jsx)("div",{className:"ds-mapping-external-data",ref:e=>{this.dataSelector=e},children:(0,e.jsx)(a.ExternalDataSourceSelector,{portalUrl:this.props.portalUrl,onSelect:this.onSelectExternalDs,onRemove:this.onRemoveExternalDs,onCancel:this.hideExternalDs,types:this.props.ds?(0,t.Immutable)([this.props.ds.type]):(0,t.Immutable)([])})}):null,this.state.isWarning?(0,e.jsx)(Tt,{warning:this.props.intl.formatMessage({id:"createFailedWarning",defaultMessage:H.createFailedWarning})}):null]}):(0,e.jsx)("div",{className:"m-2",children:this.props.intl.formatMessage({id:"noSupportedDataSource",defaultMessage:H.noSupportedDataSource})})}}var Lt=m(2907),Pt=m.n(Lt),Ht=m(1073),Jt=m.n(Ht),Vt=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(s[i[a]]=e[i[a]])}return s};const $t=s=>{const i=window.SVG,{className:a}=s,o=Vt(s,["className"]),n=(0,t.classNames)("jimu-icon jimu-icon-component has-rtl-svg",a);return i?(0,e.jsx)(i,Object.assign({className:n,src:Pt(),srcRTL:Jt()},o)):(0,e.jsx)("svg",Object.assign({className:n},o))};var Ft=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(s[i[a]]=e[i[a]])}return s};const Ut=s=>{const i=window.SVG,{className:a}=s,o=Ft(s,["className"]),n=(0,t.classNames)("jimu-icon jimu-icon-component",a);return i?(0,e.jsx)(i,Object.assign({className:n,src:Jt()},o)):(0,e.jsx)("svg",Object.assign({className:n},o))};var Wt=m(5281),zt=m.n(Wt),Bt=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(s[i[a]]=e[i[a]])}return s};const _t=s=>{const i=window.SVG,{className:a}=s,o=Bt(s,["className"]),n=(0,t.classNames)("jimu-icon jimu-icon-component",a);return i?(0,e.jsx)(i,Object.assign({className:n,src:zt()},o)):(0,e.jsx)("svg",Object.assign({className:n},o))},qt=t.ReactRedux.connect(e=>({isRTL:e.appContext.isRTL}))(i=>{var o,r,l,d;const{intl:p,dataSources:c,theme:h,onSearchValueChange:u}=i,[m,g]=t.React.useState(!1),[f,S]=t.React.useState(""),[v,x]=t.React.useState(!1),[D,y]=t.React.useState(!1),[w,b]=t.React.useState(!1),[j,M]=t.React.useState(null),[C,I]=t.React.useState({}),[N,O]=t.React.useState([]),[R,k]=t.React.useState(!1),[T,E]=t.React.useState(!0),[A,L]=t.React.useState({formats:Object.values(t.ExportFormat),maximum:0}),P=t.React.useRef(null),J=t.React.useRef(null),V=t.React.useRef(null),$=p.formatMessage({id:"layers",defaultMessage:s.defaultMessages.layers}),F=p.formatMessage({id:"exportSelectLayers",defaultMessage:H.exportSelectLayers}),U=p.formatMessage({id:"exportSettings",defaultMessage:H.exportSettings}),W=p.formatMessage({id:"search",defaultMessage:t.defaultMessages.search}),z=p.formatMessage({id:"selectAll",defaultMessage:s.defaultMessages.selectAll}),B=p.formatMessage({id:"unSelectAll",defaultMessage:s.defaultMessages.unSelectAll}),_=p.formatMessage({id:"toggleAll",defaultMessage:s.defaultMessages.toggleAll}),q=p.formatMessage({id:"allowExport",defaultMessage:H.allowExport}),G=()=>{const e=Object.keys(C).filter(e=>C[e]);return N.filter(t=>e.includes(t.id))};t.React.useEffect(()=>{const e={},t=[];Object.keys(c).forEach(s=>{c[s].forEach(s=>{e[s.id]=void 0===C[s.id]||C[s.id],t.push(s)})}),O(t),I(e)},[c]),t.React.useEffect(()=>{u(f)},[f,u]),t.React.useEffect(()=>{V.current&&R&&(V.current.select(),(0,t.focusElementInKeyboardMode)(V.current,!0))},[R,V]);const K=()=>{x(!1),(0,t.focusElementInKeyboardMode)(P.current)},Q=()=>{b(!1),(0,t.focusElementInKeyboardMode)(J.current),J.current=null,M(null)},Y=i=>{var o;const r=void 0===i.getDataSourceJson().disableExport||!i.getDataSourceJson().disableExport;return(0,e.jsxs)("div",{className:"layer-item",role:"group","aria-label":i.getLabel(),children:[D&&(0,e.jsx)(s.Checkbox,{className:"chk",checked:null!==(o=C[i.id])&&void 0!==o&&o,onChange:(e,t)=>{((e,t)=>{I(s=>Object.assign(Object.assign({},s),{[e]:t}))})(i.id,t)}}),(0,e.jsx)("div",{className:"flex-grow-1 text-truncate txt",title:i.getLabel(),children:i.getLabel()}),r&&(0,e.jsx)(s.Button,{size:"sm",icon:!0,type:"tertiary","aria-haspopup":"dialog",title:U,"aria-label":U,onClick:e=>{((e,t)=>{w?Q():(J.current=e.target,M(t),b(!0),e.stopPropagation())})(e,i)},children:(0,e.jsx)(se,{size:"m"})}),(0,e.jsx)(s.Switch,{className:"switch",checked:r,"aria-label":q,onChange:(e,s)=>{((e,s)=>{let i=s.getDataSourceJson();i=i.setIn(["disableExport"],!e),i=e?i.setIn(["exportOptions"],{formats:Object.values(t.ExportFormat)}):i.without("exportOptions");const o=a.dataComponentsUtils.editDataSourceJson(i);(0,n.getAppConfigAction)().editDataSource(o).exec()})(s,i)}})]},i.id)};return(0,e.jsxs)("div",{css:t.css`
    .export-setting {
      margin-left: 16px;
      margin-right: 16px;
      padding: 4px 0;
      box-sizing: content-box;
      .export-setting-text {
        font-size: 14px;
        color: ${h.sys.color.surface.paperText};
        font-weight: 600;
      }
      .export-setting-btn {
        padding: 0;
        margin-left: 4px;
      }
      .drop-down-btn{
        padding: 0;
        margin: 0;
        width: 16px;
        .caret-icon {
          margin-left: 8px!important;
        }
      }
      .active{
          background-color: ${h.sys.color.primary.main} !important;
          .jimu-icon{
            color: ${h.sys.color.primary.text} !important;
          }
        }
      .jimu-icon {
        color: ${h.sys.color.surface.paperHint};
      }
    }
    .divider {
      width: 100%;
      margin-top: 8px;
      border-top: 1px solid ${h.sys.color.divider.primary};
    }
    .search-input {
      .input-prefix-icon {
        color: ${h.ref.palette.custom2[400]};
        margin: 5px !important;
      }
    }
    .layer-section {
      display: flex;
      flex-direction: column;
      font-size: 13px;
      color: ${h.sys.color.surface.paperHint};
      font-weight: 600;
      .text-truncate {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .layer-list {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
      .layer-title {
        line-height: 26px;
        box-sizing: border-box;
        padding: 4px 0;
        font-weight: 600;
      }
      .second-divider{
        width: 100%;
        margin-top: 12px;
        height: 1px;
        background-color: ${h.sys.color.divider.secondary};
      }
      .title-icon{
          margin-right: 8px;
      }
      .layer-item {
        display: flex;
        align-items: center;
        margin-top: 4px;
        height: 26px;
        line-height: 26px;
        box-sizing: border-box;
        padding: 4px 0;
        .chk {
          margin-right: 8px;
        }
        .txt {
          color: ${h.sys.color.surface.paperText};
          font-weight: 400;
          width: 160px;
        }
        .switch {
          margin-left: 8px;
        }
        .text-truncate {
          flex-grow: 1;
        }
      }
    }
  `,role:"group","aria-label":$,children:[(0,e.jsxs)("div",{className:"d-flex justify-content-between export-setting",children:[(0,e.jsx)("div",{className:"d-flex align-items-center justify-left",children:(0,e.jsx)(s.Label,{className:"export-setting-text",title:$,check:!0,children:$})}),(0,e.jsxs)("div",{className:"d-flex align-items-center justify-left",children:[(0,e.jsx)(s.Button,{"aria-expanded":R,size:"sm",icon:!0,type:"tertiary",title:W,"aria-label":W,onClick:()=>{k(!R),S("")},children:(0,e.jsx)(_t,{size:"m"})}),(0,e.jsx)(s.Button,{className:(0,t.classNames)("export-setting-btn",{active:D}),icon:!0,type:"tertiary",ref:P,title:F,"aria-pressed":D,"aria-label":F,disabled:0===Object.keys(c).length,onClick:()=>{const e=Object.assign({},C);Object.keys(e).forEach(t=>{e[t]=!0}),I(e),y(!D)},children:i.isRTL?(0,e.jsx)(Ut,{}):(0,e.jsx)($t,{})}),(0,e.jsxs)(s.Dropdown,{isOpen:m,"aria-label":F,disabled:!D,toggle:()=>{g(!m)},children:[(0,e.jsx)(s.DropdownButton,{title:F,className:"drop-down-btn",arrow:!0,icon:!0,type:"tertiary"}),(0,e.jsx)(s.DropdownMenu,{children:[{value:"checked",label:z},{value:"unchecked",label:B},{value:"toggle",label:_}].map(t=>(0,e.jsx)(s.DropdownItem,{onClick:()=>{(e=>{const t=Object.assign({},C);Object.keys(t).forEach(s=>{t[s]="checked"===e||"unchecked"!==e&&!t[s]}),I(t)})(t.value)},children:t.label},t.value))})]}),(0,e.jsx)(s.Button,{className:"export-setting-btn",icon:!0,type:"tertiary","aria-haspopup":"dialog",ref:P,title:U,"aria-label":U,disabled:0===G().length,onClick:()=>{x(!v)},children:(0,e.jsx)(se,{})})]})]}),(0,e.jsx)("div",{className:"divider"}),R&&(0,e.jsx)(s.TextInput,{ref:V,value:f,onChange:e=>{S(e.target.value)},className:"search-input w-100 pl-4 pt-4 pr-4",placeholder:W,allowClear:!0,"aria-label":W,prefix:(0,e.jsx)(_t,{className:"input-prefix-icon"})}),(0,e.jsx)("div",{className:"layer-section p-4 pt-0",children:Object.keys(C).length>0&&Object.keys(c).map((i,a)=>{var o;return(0,e.jsxs)("div",{role:"group","aria-label":i,className:"layer-list",children:[(0,e.jsxs)("div",{className:"flex-grow-1 text-truncate layer-title",title:i,children:[(0,e.jsx)(s.Icon,{icon:t.dataSourceUtils.getDsIcon(null===(o=c[i][0].parentDataSource?c[i][0].parentDataSource:c[i][0])||void 0===o?void 0:o.getDataSourceJson()),className:"title-icon",size:"16"}),i]}),c[i].map(e=>Y(e)),a!==Object.keys(c).length-1&&(0,e.jsx)("div",{className:"second-divider"})]},i)})}),(0,e.jsx)(s.Popper,{placement:"right-start",offsetOptions:8,open:v,toggle:K,reference:P,"aria-label":U,children:(0,e.jsx)(Ce,{theme:h,intl:i.intl,cachedAllowExport:T,exportOptions:A,dataSources:G(),onClose:K,cacheSettingStatus:(e,t)=>{E(e),L(t)},selectLayerEnabled:D})}),j&&(0,e.jsx)(s.Popper,{placement:"bottom-start",offsetOptions:8,open:w,toggle:Q,reference:J,"aria-label":U,children:(0,e.jsx)(Ce,{theme:h,intl:i.intl,dataSources:[j],exportOptions:Object.assign(Object.assign({},null===(o=j.getDataSourceJson())||void 0===o?void 0:o.exportOptions),{formats:null===(d=null===(l=null===(r=j.getDataSourceJson())||void 0===r?void 0:r.exportOptions)||void 0===l?void 0:l.formats)||void 0===d?void 0:d.asMutable()}),singleExport:!0})})]})}),{useEffect:Gt}=t.React;const Kt=t.ReactRedux.connect(e=>({}))(function(s){const{dataSources:i,theme:a}=s,[o,n]=t.React.useState(""),[r,l]=t.React.useState({});return Gt(()=>{const e={};Object.keys(i).forEach(t=>{const s=i[t].filter(e=>e.getLabel().toLowerCase().includes(o.toLowerCase())||t.toLowerCase().includes(o.toLowerCase()));s.length>0&&(e[t]=s)}),l(e)},[i,o]),(0,e.jsx)("div",{css:t.css`
`,children:(0,e.jsx)(qt,{theme:a,dataSources:r,intl:s.intl,onSearchValueChange:e=>{n(e)}})})});var Qt=m(6337),Yt=m.n(Qt),Xt=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(s[i[a]]=e[i[a]])}return s};const Zt=s=>{const i=window.SVG,{className:a}=s,o=Xt(s,["className"]),n=(0,t.classNames)("jimu-icon jimu-icon-component",a);return i?(0,e.jsx)(i,Object.assign({className:n,src:Yt()},o)):(0,e.jsx)("svg",Object.assign({className:n},o))};var es=function(e,t,s,i){return new(s||(s=Promise))(function(a,o){function n(e){try{l(i.next(e))}catch(e){o(e)}}function r(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof s?t:new s(function(e){e(t)})).then(n,r)}l((i=i.apply(e,t||[])).next())})};const ts="layers",ss="dataViews";class is extends t.React.PureComponent{constructor(e){super(e),this.promises=[],this.externalDsStyle={width:"100%",height:"100%",maxWidth:"5000px",margin:0},this.sidePopperTrigger=t.React.createRef(),this.moreNavTrigger=t.React.createRef(),this.itemInfoBtn=t.React.createRef(),this.exportSettingBtn=t.React.createRef(),this.addToDsHistory=e=>{this.setState({dsHistory:this.state.dsHistory.concat(e)})},this.onRelatedTableClick=e=>{const t=this.state.dsHistory.splice(0,this.state.dsHistory.length-1);t.push(e),this.setState({dsHistory:t})},this.onDsItemClick=e=>{const t=[e],s=0===this.state.dsHistory.length,i=this.state.isSearchInputShown&&!!this.state.searchValue;if(s&&i){let s=e.parentDataSource;for(;s;)t.unshift(s),s=s.parentDataSource}this.addToDsHistory(t),this.resetDefaultActiveTab()},this.onChildDataIconClick=e=>{this.addToDsHistory([e]),this.setState({dsListActiveTab:"layers",fieldListActiveTab:ss})},this.onRelatedWidgetsIconClick=e=>{this.addToDsHistory([e]),e.isDataSourceSet()?this.setState({dsListActiveTab:"widgets",fieldListActiveTab:ss}):this.setState({dsListActiveTab:ts,fieldListActiveTab:"widgets"})},this.resetDefaultActiveTab=()=>{this.setState({dsListActiveTab:ts,fieldListActiveTab:ss})},this.removeFromDsHistory=e=>{if(this.resetDefaultActiveTab(),!e)return void this.setState({dsHistory:[],detailedItem:null});let t=[];const s=this.state.dsHistory.findIndex(t=>t.id===e.id);this.state.dsHistory.length>0&&(t=this.state.dsHistory.slice(0,s+1)),this.setState({dsHistory:t,detailedItem:null})},this.getSearch=e=>{const s=I(e);if(!s)return null;const i=e.getDataSourceJson().portalUrl;return{q:`id: ${s}`,authentication:t.SessionManager.getInstance().getSessionByUrl(i)}},this.getDsById=e=>e?t.DataSourceManager.getInstance().getDataSource(e):null,this.getListUsedDs=e=>e?this.getDsById(e.id):null,this.backToHomePage=()=>{this.removeFromDsHistory(null)},this.onHomeKeyDown=e=>{this.wrapKeyDown(e,this.backToHomePage)},this.wrapKeyDown=(e,t,...s)=>{e.target!==e.currentTarget||"Enter"!==e.key&&" "!==e.key||t(...s)},this.onNavClicked=e=>{this.removeFromDsHistory(e)},this.onMoreNavClick=()=>{this.toggleMoreNavPopper()},this.onMoreNavKeyDown=e=>{this.wrapKeyDown(e,this.onMoreNavClick)},this.toggleMoreNavPopper=()=>{this.setState({isMoreNavPopperOpen:!this.state.isMoreNavPopperOpen})},this.onSelectDataFinished=e=>{if(!e)return void this.setState({isExternalDsShown:!1});(0,n.getAppConfigAction)().addDataSources(e).exec();const s=e.map(e=>t.DataSourceManager.getInstance().createDataSource(e).then(e=>{if(e.isDataSourceSet()&&!e.getRootDataSource())return e.childDataSourcesReady()}));Promise.allSettled(s),this.setState({isExternalDsShown:!1})},this.onSelectDataCanceled=()=>{this.setState({isExternalDsShown:!1})},this.onMappingIconClick=e=>{this.setState({mappingDs:e})},this.onShowDetailClick=e=>{const s=this.getSearch(e);if(!s)return;const i=t.cancelablePromise.cancelable(t.esri.restPortal.searchItems(s).then(t=>{this.setState({detailedItem:{item:t.results[0],portalUrl:e.getDataSourceJson().portalUrl}})},e=>{console.error(e)}));this.promises.push(i)},this.onCloseDetailClicked=()=>{this.setState({detailedItem:null}),(0,t.focusElementInKeyboardMode)(this.itemInfoBtn.current)},this.onExportSettingClick=()=>{this.props.dataSources&&Object.keys(this.props.dataSources).length>0?this.setState({isExportSettingShown:!this.state.isExportSettingShown}):this.setState({isExportSettingShown:!1})},this.onCloseExportSettingClicked=()=>{this.setState({isExportSettingShown:!1}),(0,t.focusElementInKeyboardMode)(this.exportSettingBtn.current)},this.toggleMoreOptions=e=>{this.setState({moreOptionsDsId:this.state.moreOptionsDsId===e?null:e})},this.onToggleExternalDs=()=>{this.setState({isExternalDsShown:!this.state.isExternalDsShown})},this.hideMapping=()=>{this.setState({mappingDs:null})},this.showExternalDs=()=>{this.setState({isExternalDsShown:!0})},this.onSearchIconClick=e=>{this.setState({isSearchInputShown:!this.state.isSearchInputShown})},this.onSearchValueChange=e=>{this.setState({searchValue:e.target.value})},this.getValidDsJsons=()=>{let e=[];if(!this.props.dataSources)return e;const s=t.dataSourceUtils.getSortedArrayByLabel(Object.keys(this.props.dataSources).map(e=>this.getDsById(e)).filter(e=>e&&!e.getDataSourceJson().isOutputFromWidget&&!e.parentDataSource));return e=this.state.isSearchInputShown&&this.state.searchValue?N(s,this.state.searchValue):s.map(e=>e.getDataSourceJson()).concat(Object.values(this.props.dataSources).filter(e=>!this.getDsById(null==e?void 0:e.id)&&!(null==e?void 0:e.isOutputFromWidget))),e},this.onDsItemLoaded=e=>{this.setState({loadedDsItemCount:this.state.loadedDsItemCount+1})},this.getWhetherAllChildDssCreated=e=>!(null==e?void 0:e.isDataSourceSet())||e.areChildDataSourcesCreated(),this.hasPrivilege=e=>es(this,void 0,void 0,function*(){return!(yield t.proxyUtils.isDataSourceSubscriberOrPremium(e.getDataSourceJson()))}),this.getExportSettingDataSources=()=>es(this,void 0,void 0,function*(){if(this.props.dataSources){const e={},s=[],i={},a=Object.keys(this.props.dataSources).map(e=>{const s=this.props.dataSources[e].asMutable({deep:!0}),i=this.getDsById(s.id);if(i&&!s.isOutputFromWidget&&s.type!==t.DataSourceTypes.GroupLayer&&this.getWhetherAllChildDssCreated(i))return i}).filter(e=>void 0!==e);t.dataSourceUtils.getSortedArrayByLabel(a).forEach(i=>{let a=[i];i.isDataSourceSet()&&a.push(...S(i)),a=a.filter(e=>t.dataSourceUtils.doesDsSupportQuery(e)&&!t.dataSourceUtils.doesDsSupportQuery(e.parentDataSource)),a.length>0&&(e[i.getLabel()]=a,s.push(...a))});const o=yield Promise.allSettled(s.map(e=>this.hasPrivilege(e))),n=[];return o.forEach((e,t)=>{"fulfilled"===e.status&&e.value||n.push(s[t])}),Object.keys(e).forEach(t=>{const s=e[t].filter(e=>!n.includes(e));s.length>0&&(i[t]=s)}),Promise.resolve(i)}return Promise.resolve(null)}),this.state={isExternalDsShown:!1,isSearchInputShown:!1,mappingDs:null,detailedItem:null,dsHistory:[],moreOptionsDsId:null,searchValue:"",dsListActiveTab:ts,fieldListActiveTab:ss,isMoreNavPopperOpen:!1,loadedDsItemCount:0,isExportSettingShown:!1,loadedExportSettingDss:null}}componentDidUpdate(e,s){s.isSearchInputShown!==this.state.isSearchInputShown&&this.state.isSearchInputShown&&this.searchInput&&((0,t.focusElementInKeyboardMode)(this.searchInput,!0),this.searchInput.select()),e.isDataSettingActive&&!this.props.isDataSettingActive&&(this.state.detailedItem&&this.onCloseDetailClicked(),this.state.isExportSettingShown&&this.onCloseExportSettingClicked()),e.dataSources===this.props.dataSources&&Object.keys(e.dataSourcesInfo||{}).filter(s=>[t.DataSourceStatus.Created,t.DataSourceStatus.CreateError].includes(e.dataSourcesInfo[s].instanceStatus)).length===Object.keys(this.props.dataSourcesInfo||{}).filter(e=>[t.DataSourceStatus.Created,t.DataSourceStatus.CreateError].includes(this.props.dataSourcesInfo[e].instanceStatus)).length||this.getExportSettingDataSources().then(e=>{this.setState({loadedExportSettingDss:e})})}componentWillUnmount(){this.promises.forEach(e=>{e.cancel()})}render(){var n,r,l,d,p,c,h,u;const m=this.getValidDsJsons(),g=this.props.intl.formatMessage({id:"exportSettings",defaultMessage:H.exportSettings});return(0,e.jsxs)("div",{css:(f=this.props.theme,t.css`
    .more-nav-popper{
      max-width: ${t.polished.rem(228)};
      border-radius: ${t.polished.rem(3)};
      .more-nav-line{
        width: ${t.polished.rem(4)};
        height: ${t.polished.rem(16)};
        border-left: 1px solid ${f.ref.palette.neutral[1e3]};
        border-bottom: 1px solid ${f.ref.palette.neutral[1e3]};
        border-right: 0;
        border-top: 0;
        position: relative;
        right: ${t.polished.rem(-6)};
        top: ${t.polished.rem(-6)};
      }
      .more-nav-link{
        font-size: ${t.polished.rem(12)};
        line-height: ${t.polished.rem(18)};
        text-decoration: none;
      }
    }
    .widget-ds-setting{
      width: 100%;
      height: 100%;
      background-color: ${f.ref.palette.neutral[300]};
      transform: translate(0, 0);

      .cursor-default{
        cursor: default;
      }

      .tab-scroll{
        height: 100%;
        overflow: auto;
        position: relative;
      }

      .tab-scroll-with-bottom-fix{
        &.data-view-placeholder-con {
          height: calc(100% - 50px);
          min-height: 300px;
        }
        overflow: auto;
        position: relative;
      }

      .no-selection-view-label{
        width: ${t.polished.rem(150)};
      }

      .font-size-13{
        font-size: ${t.polished.rem(13)};
      }

      .highlight-refresh-icon{
        svg{
          color: ${f.sys.color.primary.light};
        }
      }

      .refresh-last-update-label{
        font-size: ${t.polished.rem(13)};
        color: ${f.ref.palette.neutral[1e3]};
      }

      .data-view-item{
        width: ${t.polished.rem(228)};
        background-color: ${f.ref.palette.neutral[500]};
        font-size: ${t.polished.rem(13)};
        border-radius: 0;
        cursor: pointer;
        .data-view-label {
          padding-right: 8px;
        }
        .data-source-id-copy-button {
          display: none;
        }
      }
      .data-view-item:hover{
        background-color: ${f.ref.palette.neutral[600]};
        .data-view-label {
          padding-right: 0;
        }
        .data-source-id-copy-button {
          display: flex;
        }
      }

      .create-a-view-btn{
        width: ${t.polished.rem(228)};
        height: ${t.polished.rem(32)};
        position: sticky;
      }

      .data-view-container{
        overflow: auto;
        height: calc(100% - 65px);
      }

      .no-selection-view-item{
        width: ${t.polished.rem(260)};
        height: ${t.polished.rem(40)};
        border-top: 1px solid ${f.ref.palette.neutral[700]};
        position: fixed;
        bottom: 0;
      }

      .empty-placeholder{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        .empty-placeholder-text, .empty-placeholder-icon{
          display: table;
          margin: 0 auto;
        }
        .empty-placeholder-text{
          color: ${f.ref.palette.neutral[900]};
          font-size: ${t.polished.rem(14)};
          margin-top: 16px;
          text-align: center;
        }
        .empty-placeholder-icon{
          color: var(--sys-color-action-disabled-text);
        }
      }

      .title{
        padding: 18px 16px 2px 16px !important;
        font-size: 1rem;
        font-weight: 500;
        .search-icon{
          cursor: pointer;
          width: 30px;
        }
      }
      .search-input{
        height: 26px;
        border-radius: 2px;
      }

      .list-container{
        height: calc(100% - 127px);
        overflow: auto;
        padding-bottom: 20px;
      }

      .with-search-input.list-container{
        height: calc(100% - 120px);
      }

      .text-data-600{
        color: ${f.ref.palette.neutral[1e3]};
      }

      .border-color-gray-300{
        border-color: ${f.ref.palette.neutral[500]} !important;
      }

      .data-setting-secondary-title{
        font-size: 14px;
        color: ${f.ref.palette.neutral[900]};
        margin-top: 16px !important;
        margin-bottom: 16px !important;
        font-weight: 400;
      }

      .widget-icon{
        >img{
          vertical-align: text-top;
          width: ${t.polished.rem(16)};
          height: ${t.polished.rem(16)};
        }
      }

      .drop-down{
        button{
          background-color: ${f.ref.palette.white};
        }
      }

      .setting-header{
        border-bottom: 1px;
      }

      .ds-nav{
        border-bottom: 1px solid ${f.ref.palette.neutral[700]};
        padding: ${t.polished.rem(10)} ${t.polished.rem(16)};
        .max-width-1{
          max-width: ${t.polished.rem(190)};
        }
        .max-width-2{
          max-width: ${t.polished.rem(90)};
        }
        .max-width-3{
          max-width: ${t.polished.rem(55)};
        }
        .max-width-4{
          max-width: ${t.polished.rem(45)};
        }
        a, .current-ds-link{
          font-size: ${t.polished.rem(12)} !important;
          padding: 0 !important;
          svg{
            margin: 0 0 3px 0 !important;
          }
        }
        .current-ds-link{
          color: ${f.ref.palette.neutral[1100]};
        }
      }

      .add-data{
        height: ${t.polished.rem(30)};
        line-height: ${t.polished.rem(30)};
        width: 228px;
        padding: 0;
        border-radius: 2px;
        cursor: pointer;
        .add-data-label{
          max-width: 85%;
        }
      }
      button.add-data:hover{
        color: ${f.ref.palette.black} !important;
      }

      .export-setting-text{
        font-size: ${t.polished.rem(13)};
        line-height: ${t.polished.rem(18)};
        color: ${f.ref.palette.neutral[1e3]};
        font-weight: 500;
      }

      .two-line-truncate{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: break-word;
        word-wrap: break-word;
      }

      .three-line-truncate{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        word-break: break-word;
        word-wrap: break-word;
      }

      .ds-info{
        .ds-more, .ds-detail{
          cursor: pointer;
        }
        .ds-more{
          margin-right: ${t.polished.rem(-8)};
        }
      }

      .ds-origin-label{
        max-width: 100%;
        .ds-origin-label-link, .ds-origin-label-link:hover, .ds-origin-label-link:focus, .ds-origin-label-link:active{
          box-shadow: 0 0 0 !important;
          border: 0 !important;
          max-width: 100%;
        }
        .ds-origin-label-link-text{
          display: inline-block;
          font-size: ${t.polished.rem(12)};
          max-width: 100%;
        }
      }

      .mapping-info{
        .ds-label{
          cursor: default;
        }
      }

      .ds-mapping-collapse{
        padding: ${t.polished.rem(10)} ${t.polished.rem(10)} 0  ${t.polished.rem(10)};
        .ds-origin-label{
          max-width: 170px;
          height:  ${t.polished.rem(25)};
          line-height:  ${t.polished.rem(25)};
          border-radius: 2px;
        }
      }

      .ds-thumbnail{
        width:  ${t.polished.rem(18)};
        height:  ${t.polished.rem(18)};
        background-color: ${f.sys.color.info.main};
      }

      .mapping-info{
        .ds-mapping-collapse{
          border: 0;
        }
      }

      .ds-list{
        display: flex;
        flex-direction: column;
        .jimu-tabs{
          flex-grow: 1;
          overflow-y: auto;
          .jimu-nav.nav-pills{
            margin: 0 ${t.polished.rem(16)} !important;
          }
        }
      }

      .field-list{
        display: flex;
        flex-direction: column;
        .jimu-tabs{
          flex-grow: 1;
          .tab-content{
            height: calc(100% - 50px);
          }
          .jimu-nav.nav-pills{
            margin: 0 ${t.polished.rem(16)} !important;
          }
          .jimu-nav {
            button {
              padding-left: 4px !important;
              padding-right: 4px !important;
            }
          }
        }

        .fields-collapsable-panel .collapse-label .title {
          padding: 0 !important;
          font-size: 14px;
          font-weight: 600;
        }

        .normal-fields-collapsable-panel {
          > .jimu-collapse {
            margin-top: 4px;
          }

          .wrap-text {
            word-break: break-all;
            white-space: break-spaces;
          }
        }
      }

      .field-list, .ds-list{
        height: calc(100% - 60px);

        .ds-info{
          width: 100%;
          .ds-thumbnail-type{
            width: calc(100% - 52px);
          }
          .ds-label{
            font-size: ${t.polished.rem(14)};
            color: ${f.ref.palette.neutral[1100]};
          }
          .ds-type{
            width: calc(100% - 16px);
            font-size: ${t.polished.rem(13)};
            color: ${f.ref.palette.neutral[1e3]};
          }
        }
        .tab-pane{
          width: 100%;
        }
      }

      .field-item{
        width: 100%;
        min-height: ${t.polished.rem(32)};
        margin-bottom: ${t.polished.rem(4)};
        padding: ${t.polished.rem(7)} ${t.polished.rem(4)};
        display: flex;
        align-items: center;
        gap: ${t.polished.rem(8)};
        background: var(--sys-color-surface-paper, #363636);
        font-size: ${t.polished.rem(13)};
        font-weight: 500;
        color: var(--sys-color-surface-paper-text);

        &:last-child {
          margin-bottom: 0;
        }

        .field-item-main {
          min-width: 0;
          flex: 1 1 auto;
          display: flex;
          align-items: center;
          gap: ${t.polished.rem(7)};
        }

        .field-item-type-icon {
          flex-shrink: 0;
        }

        .field-item-label {
          min-width: 0;
          flex: 1 1 auto;
        }

        .inuse {
          width: ${t.polished.rem(16)};
          height: ${t.polished.rem(16)};
          display: inline-flex;
          justify-content: center;
          align-items: center;
          flex-shrink: 0;
        }

        .inuse-dot {
          width: ${t.polished.rem(8)};
          height: ${t.polished.rem(8)};
          border-radius: 50%;
          background: var(--sys-color-primary-light);
        }
      }

      .arcade-field-list-item {
        min-height: 32px;
        margin-top: 8px;
        padding-left: 4px;
        padding-right: 4px;
        background: var(--sys-color-surface-paper, #363636);
        color: var(--sys-color-surface-paper-text);
        font-weight: 500;

        .arcade-field-name {
          min-width: 0;
          flex: 1 1 auto;
          word-break: break-all;
        }

        .arcade-field-actions {
          display: inline-flex;
          align-items: center;
          gap: 0;
          flex-shrink: 0;
        }

        .inuse {
          width: ${t.polished.rem(16)};
          height: ${t.polished.rem(16)};
          display: inline-flex;
          justify-content: center;
          align-items: center;
          flex-shrink: 0;
        }

        .inuse-dot {
          width: ${t.polished.rem(8)};
          height: ${t.polished.rem(8)};
          border-radius: 50%;
          background: var(--sys-color-primary-light);
        }

        .jimu-input.is-invalid {
          input.jimu-input-base[value=""] ~ div {
            display: none !important;
          }
        }
      }

      .ds-mapping{
        .ds-mapping-header{
          height:  ${t.polished.rem(42)};
          line-height:  ${t.polished.rem(42)};
          border-bottom: 1px solid;
          .ds-mapping-header-back{
            cursor: pointer;
          }
        }

        .ds-mapping-cur-info{
          border-bottom: 1px solid;
        }

        .ds-mapping-external-data{
          position: fixed;
          z-index: 4;
        }

        .ds-mapping-set-item{
          .ds-mapping-drop-down{
            .btn-group{
              width: 100%;
              button{
                width: 100%;
              }
            }
          }
        }

        .ds-mapping-buttons{
          left:  ${t.polished.rem(65)};
          bottom:  ${t.polished.rem(10)};
        }

        .ds-mapping-source{
          width:  ${t.polished.rem(20)};
          height:  ${t.polished.rem(20)};
          border-radius:  ${t.polished.rem(10)};
          line-height:  ${t.polished.rem(20)};
          text-align: center;
          cursor: pointer;
        }

        .ds-mapping-ds{
          .ds-origin-label{
            max-width: 100%;
          }
        }

      }
    }

    .widget-ds-setting-add-data-popup{
      .modal-content{
        height: 100%;
      }
    }

    .jimu-nav{
      .jimu-nav-link-wrapper{
        display: block !important;
      }
    }

    .export-setting{
      padding: 4px 0;
      height: 19px;
      line-height: 19px;
      box-sizing: content-box;
      .export-setting-text{
        font-size: 14px;
        color: ${f.sys.color.surface.paperHint};
        font-weight: 600;
      }
    }

  `),className:"w-100 h-100",children:[(0,e.jsx)("div",{className:"jimu-widget widget-ds-setting setting-pane bg-default",ref:this.sidePopperTrigger,children:this.state.mappingDs?(0,e.jsx)(At,{portalUrl:this.props.portalUrl,ds:this.state.mappingDs,widgets:this.props.widgets,dispatch:this.props.dispatch,hideMapping:this.hideMapping,intl:this.props.intl,dataSources:this.props.dataSources,messages:this.props.messages}):(0,e.jsxs)("div",{className:"h-100",children:[this.state.dsHistory.length>0?(0,e.jsxs)("div",{className:"d-flex flex-wrap ds-nav",children:[(0,e.jsx)(s.Link,{title:this.props.intl.formatMessage({id:"home",defaultMessage:s.defaultMessages.home}),onClick:this.backToHomePage,onKeyDown:this.onHomeKeyDown,role:"button",children:(0,e.jsx)(Zt,{size:"m"})}),this.state.dsHistory.map((i,a)=>a===this.state.dsHistory.length-1?(0,e.jsxs)("div",{className:"d-flex align-items-center",children:[(0,e.jsx)("span",{className:"mx-1",children:"/"}),(0,e.jsx)("div",{title:i.getLabel(),className:(0,t.classNames)("current-ds-link text-left text-truncate",{"max-width-1":1===this.state.dsHistory.length,"max-width-2":2===this.state.dsHistory.length,"max-width-3":3===this.state.dsHistory.length,"max-width-4":this.state.dsHistory.length>3}),children:i.getLabel()})]},a):a===this.state.dsHistory.length-2||a===this.state.dsHistory.length-3?(0,e.jsxs)("div",{className:"d-flex align-items-center",children:[(0,e.jsx)("span",{className:"mx-1",children:"/"}),(0,e.jsx)(s.Link,{title:i.getLabel(),onClick:()=>{this.onNavClicked(i)},onKeyDown:e=>{this.wrapKeyDown(e,this.onNavClicked,i)},className:(0,t.classNames)("text-left text-truncate",{"max-width-1":1===this.state.dsHistory.length,"max-width-2":2===this.state.dsHistory.length,"max-width-3":3===this.state.dsHistory.length,"max-width-4":this.state.dsHistory.length>3}),role:"button",children:(0,e.jsx)("div",{className:"text-truncate",children:i.getLabel()})})]},a):a===this.state.dsHistory.length-4?(0,e.jsxs)("div",{className:"d-flex align-items-center",ref:this.moreNavTrigger,children:[(0,e.jsx)("span",{className:"mx-1",children:"/"}),(0,e.jsx)(s.Link,{title:this.props.intl.formatMessage({id:"more",defaultMessage:s.defaultMessages.more}),onClick:this.onMoreNavClick,role:"button",onKeyDown:this.onMoreNavKeyDown,children:(0,e.jsx)(G,{})})]},a):null)]}):null,0===this.state.dsHistory.length?(0,e.jsxs)("div",{className:"h-100",children:[(0,e.jsxs)("div",{className:"jimu-builder-panel--header d-flex flex-row text-data-600 title justify-content-between",children:[(0,e.jsx)("div",{className:"mb-0 w-100 text-truncate text-left",children:this.props.intl.formatMessage({id:"data",defaultMessage:s.defaultMessages.data})}),(0,e.jsx)("div",{className:"search-icon d-flex align-items-start justify-content-end",onClick:this.onSearchIconClick,title:this.props.intl.formatMessage({id:"search",defaultMessage:t.defaultMessages.search}),children:(0,e.jsx)(s.Button,{"aria-expanded":this.state.isSearchInputShown,size:"sm",icon:!0,type:"tertiary","aria-label":this.props.intl.formatMessage({id:"search",defaultMessage:t.defaultMessages.search}),children:(0,e.jsx)(_t,{size:"m"})})})]}),(0,e.jsx)("div",{className:"w-100 px-4",children:this.state.isSearchInputShown&&(0,e.jsx)("div",{children:(0,e.jsx)(s.TextInput,{value:this.state.searchValue,onChange:this.onSearchValueChange,className:"search-input my-4",placeholder:this.props.intl.formatMessage({id:"search",defaultMessage:t.defaultMessages.search}),ref:e=>{this.searchInput=e},allowClear:!0,"aria-label":this.props.intl.formatMessage({id:"search",defaultMessage:t.defaultMessages.search})})})}),(0,e.jsx)("div",{className:"w-100",children:t.DataSourceManager.getInstance()&&(0,e.jsx)("div",{className:"d-flex mx-4 mb-1 mt-4",children:(0,e.jsx)(s.Button,{type:"primary",className:"flex-grow-1 text-center add-data data-setting-add-data-button",onClick:this.showExternalDs,"aria-label":this.props.intl.formatMessage({id:"addData",defaultMessage:s.defaultMessages.addData}),children:(0,e.jsxs)("div",{className:"w-100 px-2 d-flex align-items-center justify-content-center",children:[(0,e.jsx)(ot,{size:"m",className:"mr-2"}),(0,e.jsx)("div",{className:"add-data-label text-truncate",title:this.props.intl.formatMessage({id:"addData",defaultMessage:s.defaultMessages.addData}),children:this.props.intl.formatMessage({id:"addData",defaultMessage:s.defaultMessages.addData})})]})})})}),(0,e.jsx)("div",{className:"w-100",children:this.state.loadedExportSettingDss&&Object.keys(this.state.loadedExportSettingDss).length>0&&(0,e.jsxs)("div",{className:"d-flex mx-4 mb-1 mt-4 export-setting",children:[(0,e.jsx)("div",{className:"mb-0 w-100 text-truncate text-left export-setting-text",title:g,children:g}),(0,e.jsx)(s.Button,{size:"sm",icon:!0,type:"tertiary",ref:this.exportSettingBtn,title:g,"aria-label":g,"aria-haspopup":"dialog",onClick:this.onExportSettingClick,children:(0,e.jsx)(se,{size:16})})]})}),this.props.dataSources&&Object.values(this.props.dataSources).filter(e=>!e.isOutputFromWidget).length>0?(0,e.jsx)("div",{className:(0,t.classNames)("list-container",{"with-search-input":this.state.isSearchInputShown}),children:(0,e.jsx)("div",{role:"listbox",children:m.map((t,s)=>{const i=this.getDsById(null==t?void 0:t.id);return(null==t?void 0:t.id)?i&&i.id&&(!i.isDataSourceSet()||i.areChildDataSourcesCreated())?(0,e.jsx)(A,{ds:i,onDataSourceItemClick:this.onDsItemClick,intl:this.props.intl,onMappingIconClick:this.onMappingIconClick,isMoreOptionsShown:this.state.moreOptionsDsId===i.id,onChildDataIconClick:this.onChildDataIconClick,onRelatedWidgetsIconClick:this.onRelatedWidgetsIconClick,toggleMoreOptions:this.toggleMoreOptions,theme:this.props.theme},s):(0,e.jsx)(P,{dsJson:t,intl:this.props.intl,isMoreOptionsShown:this.state.moreOptionsDsId===t.id,theme:this.props.theme,toggleMoreOptions:this.toggleMoreOptions,onLoaded:this.onDsItemLoaded},s):null})})}):(0,e.jsx)("div",{children:(null===(r=null===(n=(0,t.getAppStore)().getState())||void 0===n?void 0:n.appStateInBuilder)||void 0===r?void 0:r.appConfig)&&(0,e.jsxs)("div",{className:"empty-placeholder w-100",children:[(0,e.jsx)("div",{className:"empty-placeholder-icon",children:(0,e.jsx)(F,{size:48})}),(0,e.jsx)("div",{className:"empty-placeholder-text",dangerouslySetInnerHTML:{__html:this.props.intl.formatMessage({id:"noDataNotice",defaultMessage:H.noDataNotice})}})]})})]}):null,this.props.dataSources&&this.state.dsHistory.length>0&&!this.state.dsHistory[this.state.dsHistory.length-1].isDataSourceSet()?(0,e.jsx)(dt,{onShowDetailClick:this.onShowDetailClick,backToHomePage:this.backToHomePage,itemInfoBtn:this.itemInfoBtn,ds:this.getListUsedDs(this.state.dsHistory[this.state.dsHistory.length-1]),widgets:this.props.widgets,onMappingIconClick:this.onMappingIconClick,intl:this.props.intl,theme:this.props.theme,messages:this.props.messages,defaultActive:this.state.fieldListActiveTab,dsInfo:null===(l=this.props.dataSourcesInfo)||void 0===l?void 0:l[null===(d=this.getListUsedDs(this.state.dsHistory[this.state.dsHistory.length-1]))||void 0===d?void 0:d.id],onRelatedTableClick:this.onRelatedTableClick}):null,this.props.dataSources&&this.state.dsHistory.length>0&&this.state.dsHistory[this.state.dsHistory.length-1].isDataSourceSet()?(0,e.jsx)(ke,{onDsItemClicked:this.onDsItemClick,dispatch:this.props.dispatch,itemInfoBtn:this.itemInfoBtn,ds:this.getListUsedDs(this.state.dsHistory[this.state.dsHistory.length-1]),theme:this.props.theme,onMappingIconClick:this.onMappingIconClick,onRelatedTableClick:this.onRelatedTableClick,onShowDetailClick:this.onShowDetailClick,intl:this.props.intl,widgets:this.props.widgets,backToHomePage:this.backToHomePage,onChildDataIconClick:this.onChildDataIconClick,onRelatedWidgetsIconClick:this.onRelatedWidgetsIconClick,areAllChildDssCreated:this.getWhetherAllChildDssCreated(this.getListUsedDs(this.state.dsHistory[this.state.dsHistory.length-1])),defaultActive:this.state.dsListActiveTab,dsInfo:null===(p=this.props.dataSourcesInfo)||void 0===p?void 0:p[null===(c=this.getListUsedDs(this.state.dsHistory[this.state.dsHistory.length-1]))||void 0===c?void 0:c.id]}):null]})}),(0,e.jsx)(i.SidePopper,{position:"left",isOpen:!!this.state.detailedItem,toggle:this.onCloseDetailClicked,trigger:this.sidePopperTrigger.current,children:(0,e.jsx)(o.ItemDetail,{item:null===(h=this.state.detailedItem)||void 0===h?void 0:h.item,portalUrl:null===(u=this.state.detailedItem)||void 0===u?void 0:u.portalUrl,onClose:this.onCloseDetailClicked})}),(0,e.jsx)(i.SidePopper,{position:"left",isOpen:this.state.isExportSettingShown&&this.state.loadedExportSettingDss&&Object.keys(this.state.loadedExportSettingDss).length>0,toggle:this.onCloseExportSettingClicked,trigger:this.exportSettingBtn.current,title:g,children:(0,e.jsx)(Kt,{theme:this.props.theme,dataSources:this.state.loadedExportSettingDss,intl:this.props.intl})}),this.state.isExternalDsShown?(0,e.jsx)(s.Modal,{isOpen:this.state.isExternalDsShown,style:this.externalDsStyle,toggle:this.onToggleExternalDs,contentClassName:"border-0 h-100",className:"widget-ds-setting-add-data-popup",keyboard:!1,children:(0,e.jsx)(a.ExternalDataSourceSelector,{portalUrl:this.props.portalUrl,onCancel:this.onSelectDataCanceled,onFinish:this.onSelectDataFinished,isMultiple:!0})}):null,this.state.dsHistory.length>3&&(0,e.jsx)(s.Popper,{reference:this.moreNavTrigger,open:this.state.isMoreNavPopperOpen,disablePortal:!0,strategy:"fixed",className:"more-nav-popper",placement:"bottom-start",toggle:this.toggleMoreNavPopper,children:this.state.dsHistory.map((t,i)=>i<this.state.dsHistory.length-3?(0,e.jsxs)("div",{className:"d-flex align-items-center",style:{paddingLeft:4*i+"px"},children:[0!==i&&(0,e.jsx)("div",{className:"more-nav-line"}),(0,e.jsx)(s.Link,{title:t.getLabel(),onClick:()=>{this.onNavClicked(t)},onKeyDown:e=>{this.wrapKeyDown(e,this.onNavClicked,t)},className:"text-left text-truncate more-nav-link pb-0",children:t.getLabel()})]},i):null)})]});var f}}is.mapExtraStateProps=e=>{var t,s,i,a,o,n,r,l,d,p;return{dataSources:null===(s=null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===s?void 0:s.dataSources,widgets:null===(a=null===(i=e.appStateInBuilder)||void 0===i?void 0:i.appConfig)||void 0===a?void 0:a.widgets,messages:null===(n=null===(o=e.appStateInBuilder)||void 0===o?void 0:o.appConfig)||void 0===n?void 0:n.messageConfigs,dataSourcesInfo:null===(r=e.appStateInBuilder)||void 0===r?void 0:r.dataSourcesInfo,isDataSettingActive:"data"===(null===(p=null===(d=null===(l=e.appRuntimeInfo)||void 0===l?void 0:l.sectionNavInfos)||void 0===d?void 0:d["opts-section"])||void 0===p?void 0:p.currentViewId)}};const as=is;function os(e){m.p=e}})(),g})())}}});