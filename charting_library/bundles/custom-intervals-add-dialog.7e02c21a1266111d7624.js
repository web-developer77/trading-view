(window.webpackJsonp=window.webpackJsonp||[]).push([["custom-intervals-add-dialog","simple-dialog"],{"+l/S":function(e,t,n){},"02pg":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("q1tI"),o=n("TSYQ"),r=n("XiJV");function s(e){return a.createElement("div",{className:o(r.separator,e.className)})}},"2A9e":function(e){e.exports=JSON.parse('{"button":"button-1iktpaT1","content":"content-2PGssb8d","noOutline":"noOutline-d9Yp4qvi","grouped":"grouped-2NxOpIxM","adjust-position":"adjust-position-2zd-ooQC","first-row":"first-row-11wXF7aC","first-col":"first-col-pbJu53tK","no-corner-top-left":"no-corner-top-left-3ZsS65Fk","no-corner-top-right":"no-corner-top-right-3MYQOwk_","no-corner-bottom-right":"no-corner-bottom-right-3II18BAU","no-corner-bottom-left":"no-corner-bottom-left-3KZuX8tv","appearance-default":"appearance-default-dMjF_2Hu","intent-primary":"intent-primary-1-IOYcbg","intent-success":"intent-success-25a4XZXM","intent-default":"intent-default-2ZbSqQDs","intent-warning":"intent-warning-24j5HMi0","intent-danger":"intent-danger-1EETHCla","appearance-stroke":"appearance-stroke-12lxiUSM","appearance-text":"appearance-text-DqKJVT3U","appearance-inverse":"appearance-inverse-r1Y2JQg_","size-s":"size-s-3mait84m","size-m":"size-m-2G7L7Qat","size-l":"size-l-2NEs9_xt","full-width":"full-width-1wU8ljjC","with-icon":"with-icon-yumghDr-","icon":"icon-1grlgNdV"}')},"8NUT":function(e,t,n){e.exports={"small-height-breakpoint":"screen and (max-height: 360px)",footer:"footer-KW8170fm",submitButton:"submitButton-KW8170fm",buttons:"buttons-KW8170fm"}},ItnF:function(e,t,n){e.exports={dialog:"dialog-2cMrvu9r",wrapper:"wrapper-2cMrvu9r",separator:"separator-2cMrvu9r"}},OZBO:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("q1tI");const o=n.n(a).a.createContext({setHideClose:()=>{}})},Qhte:function(e,t,n){e.exports={scrollable:"scrollable-FNPZI_Xo",content:"content-FNPZI_Xo",row:"row-FNPZI_Xo",title:"title-FNPZI_Xo",control:"control-FNPZI_Xo"}},XiJV:function(e,t,n){e.exports={separator:"separator-3No0pWrk"}},g89m:function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),r=n("Eyy1"),s=n("TSYQ"),i=n.n(s),l=n("/3z9"),c=n("d700"),u=n("WXjp"),d=n("02pg"),m=n("uhCe"),p=n("/KDZ"),h=n("pafz"),f=n("ZjKI"),b=n("FQhm"),g=n("Iivm"),C=n("OZBO"),v=n("zztK"),w=n("px1m");function N(e){const{title:t,subtitle:n,showCloseIcon:r=!0,onClose:s,renderBefore:l,renderAfter:c,draggable:u,className:d,unsetAlign:m}=e,[p,h]=Object(a.useState)(!1);return o.a.createElement(C.a.Provider,{value:{setHideClose:h}},o.a.createElement("div",{className:i()(w.container,d,(n||m)&&w.unsetAlign)},l,o.a.createElement("div",{"data-dragg-area":u,className:w.title},o.a.createElement("div",{className:w.ellipsis},t),n&&o.a.createElement("div",{className:i()(w.ellipsis,w.subtitle)},n)),c,r&&!p&&o.a.createElement(g.a,{className:w.close,icon:v,onClick:s,"data-name":"close","data-role":"button"})))}var E=n("ItnF");n.d(t,"a",(function(){return S}));const O={vertical:20},_={vertical:0};class S extends o.a.PureComponent{constructor(){super(...arguments),
this._controller=null,this._reference=null,this._renderChildren=(e,t)=>(this._controller=e,this.props.render({requestResize:this._requestResize,centerAndFit:this._centerAndFit,isSmallWidth:t})),this._handleReference=e=>this._reference=e,this._handleClose=()=>{this.props.onClose()},this._handleKeyDown=e=>{var t;if(!e.defaultPrevented)switch(this.props.onKeyDown&&this.props.onKeyDown(e),Object(l.hashFromEvent)(e)){case 27:if(e.defaultPrevented)return;if(this.props.forceCloseOnEsc&&this.props.forceCloseOnEsc())return void this._handleClose();const{activeElement:n}=document,a=Object(r.ensureNotNull)(this._reference);if(null!==n){if(e.preventDefault(),"true"===(t=n).getAttribute("data-haspopup")&&"true"!==t.getAttribute("data-expanded"))return void this._handleClose();if(Object(c.b)(n))return void a.focus();if(a.contains(n))return void this._handleClose()}}},this._requestResize=()=>{null!==this._controller&&this._controller.recalculateBounds()},this._centerAndFit=()=>{null!==this._controller&&this._controller.centerAndFit()}}componentDidMount(){b.subscribe(f.CLOSE_POPUPS_AND_DIALOGS_COMMAND,this._handleClose,null)}componentWillUnmount(){b.unsubscribe(f.CLOSE_POPUPS_AND_DIALOGS_COMMAND,this._handleClose,null)}focus(){Object(r.ensureNotNull)(this._reference).focus()}getElement(){return this._reference}contains(e){var t,n;return null!==(n=null===(t=this._reference)||void 0===t?void 0:t.contains(e))&&void 0!==n&&n}render(){const{className:e,headerClassName:t,isOpened:n,title:a,dataName:r,onClickOutside:s,additionalElementPos:l,additionalHeaderElement:c,backdrop:f,shouldForceFocus:b=!0,showSeparator:g,subtitle:C,draggable:v=!0,fullScreen:w=!1,showCloseIcon:S=!0,rounded:A=!0,isAnimationEnabled:x,growPoint:y,dialogTooltip:j,unsetHeaderAlign:F}=this.props,I="after"!==l?c:void 0,P="after"===l?c:void 0;return o.a.createElement(p.a,{rule:m.a.SmallHeight},l=>o.a.createElement(p.a,{rule:m.a.TabletSmall},c=>o.a.createElement(u.a,{rounded:!(c||w)&&A,className:i()(E.dialog,e),isOpened:n,reference:this._handleReference,onKeyDown:this._handleKeyDown,onClickOutside:s,onClickBackdrop:s,fullscreen:c||w,guard:l?_:O,boundByScreen:c||w,shouldForceFocus:b,backdrop:f,draggable:v,isAnimationEnabled:x,growPoint:y,name:this.props.dataName,dialogTooltip:j},o.a.createElement("div",{className:E.wrapper,"data-name":r,"data-dialog-name":"string"==typeof a?a:""},void 0!==a&&o.a.createElement(N,{draggable:v&&!(c||w),onClose:this._handleClose,renderAfter:P,renderBefore:I,subtitle:C,title:a,showCloseIcon:S,className:t,unsetAlign:F}),g&&o.a.createElement(d.a,{className:E.separator}),o.a.createElement(h.a.Consumer,null,e=>this._renderChildren(e,c||w))))))}}},mwqF:function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),r=n("TSYQ"),s=n("wwkJ"),i=n("ZWNO");function l(e,t){const{intent:n="primary",size:a="m",appearance:o="default",useFullWidth:s=!1,tabIndex:l=0,icon:c,className:u,isGrouped:d,cellState:m,disablePositionAdjustment:p=!1}=t,h=function(e,t){let n="";return 0!==e&&(1&e&&(n=r(n,t["no-corner-top-left"])),2&e&&(n=r(n,t["no-corner-top-right"])),
4&e&&(n=r(n,t["no-corner-bottom-right"])),8&e&&(n=r(n,t["no-corner-bottom-left"]))),n}(Object(i.a)(m),e);return r(u,e.button,e["size-"+a],e["intent-"+n],e["appearance-"+o],s&&e["full-width"],-1===l&&e.noOutline,c&&"s"!==a&&e["with-icon"],h,d&&e.grouped,!p&&e["adjust-position"],m.isTop&&e["first-row"],m.isLeft&&e["first-col"])}var c=n("2A9e");n("+l/S");function u(e){const{className:t,intent:n,size:i,appearance:u,disabled:d,useFullWidth:m,reference:p,icon:h,children:f,tabIndex:b,...g}=e,{isGrouped:C,cellState:v,disablePositionAdjustment:w}=Object(a.useContext)(s.a),N=l(c,{intent:n,size:i,appearance:u,disabled:d,useFullWidth:m,tabIndex:b,icon:h,isGrouped:C,cellState:v,disablePositionAdjustment:w});return o.a.createElement("button",{className:r(N,t),disabled:d,ref:p,tabIndex:b,...g},h&&"s"!==i&&o.a.createElement("span",{className:c.icon},h),o.a.createElement("span",{className:c.content},f))}n.d(t,"a",(function(){return u}))},px1m:function(e,t,n){e.exports={"small-height-breakpoint":"screen and (max-height: 360px)",container:"container-2sL5JydP",unsetAlign:"unsetAlign-2sL5JydP",title:"title-2sL5JydP",subtitle:"subtitle-2sL5JydP",ellipsis:"ellipsis-2sL5JydP",close:"close-2sL5JydP"}},tmL0:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("q1tI"),o=n.n(a),r=n("x0D+"),s=n("Eyy1"),i=n("qFKp");function l(e){const{reference:t,children:n,...s}=e,l=Object(a.useRef)(null),u=Object(a.useCallback)(e=>{t&&(t.current=e),i.CheckMobile.iOS()&&(null!==l.current&&Object(r.enableBodyScroll)(l.current),l.current=e,null!==l.current&&Object(r.disableBodyScroll)(l.current,{allowTouchMove:c(l)}))},[t]);return o.a.createElement("div",{ref:u,...s},n)}function c(e){return t=>{const n=Object(s.ensureNotNull)(e.current),a=document.activeElement;return!n.contains(t)||null!==a&&n.contains(a)&&a.contains(t)}}},w9vS:function(e,t,n){"use strict";n.r(t),n.d(t,"ToolWidgetIntervalsAddDialog",(function(){return h}));var a=n("q1tI"),o=n.n(a),r=n("YFKU"),s=n("ycFu"),i=n("PECq"),l=n("wHCJ"),c=n("tWVy"),u=n("tmL0"),d=n("cSDC"),m=n("Qhte");const p=d.a.map(e=>({value:e.name,content:e.label}));function h(e){const{onAdd:t,onClose:n,onUnmount:h}=e,[f,b]=Object(a.useState)(d.a[0].name),[g,C]=Object(a.useState)("1");return Object(a.useEffect)(()=>()=>{h&&h()},[]),o.a.createElement(s.AdaptiveConfirmDialog,{dataName:"add-custom-interval-dialog",title:Object(r.t)("Add custom time interval"),isOpened:!0,onSubmit:function(){t(g,f),n()},onCancel:n,onClickOutside:n,onClose:n,render:()=>o.a.createElement(u.a,{className:m.scrollable,onScroll:w},o.a.createElement("div",{className:m.content},o.a.createElement("div",{className:m.row},o.a.createElement("div",{className:m.title},Object(r.t)("Type")),o.a.createElement(i.a,{id:"metric-items",className:m.control,value:f,items:p,onChange:N})),o.a.createElement("div",{className:m.row},o.a.createElement("div",{className:m.title},Object(r.t)("Interval")),o.a.createElement(l.a,{className:m.control,inputMode:"numeric",maxLength:6,value:g,onChange:v})))),defaultActionOnClose:"none",submitButtonText:Object(r.t)("Add"),
submitOnEnterKey:!1,fullScreen:!0});function v(e){const{value:t}=e.currentTarget;/^[0-9]*$/.test(t)&&C(t)}function w(){c.a.fire()}function N(e){b(e)}}},ycFu:function(e,t,n){"use strict";n.r(t),n.d(t,"AdaptiveConfirmDialog",(function(){return m}));var a=n("q1tI"),o=n.n(a),r=n("TSYQ"),s=n.n(r),i=n("mwqF"),l=n("Eyy1"),c=(n("YFKU"),n("/3z9")),u=n("g89m"),d=n("8NUT");class m extends o.a.PureComponent{constructor(){super(...arguments),this._dialogRef=o.a.createRef(),this._handleClose=()=>{const{defaultActionOnClose:e,onSubmit:t,onCancel:n,onClose:a}=this.props;switch(e){case"submit":t();break;case"cancel":n()}a()},this._handleCancel=()=>{this.props.onCancel(),this.props.onClose()},this._handleKeyDown=e=>{const{onSubmit:t,submitButtonDisabled:n,submitOnEnterKey:a}=this.props;switch(Object(c.hashFromEvent)(e)){case 13:!n&&a&&(e.preventDefault(),t())}}}render(){const{render:e,onClose:t,onSubmit:n,onCancel:a,footerLeftRenderer:r,submitButtonText:s,submitButtonDisabled:i,defaultActionOnClose:l,submitOnEnterKey:c,...d}=this.props;return o.a.createElement(u.a,{...d,ref:this._dialogRef,onKeyDown:this._handleKeyDown,render:this._renderChildren(),onClose:this._handleClose})}focus(){Object(l.ensureNotNull)(this._dialogRef.current).focus()}_renderChildren(){return e=>{const{render:t,footerLeftRenderer:n,additionalButtons:a,submitButtonText:r,submitButtonDisabled:l,onSubmit:c,cancelButtonText:u,showCancelButton:m=!0,submitButtonClassName:p,cancelButtonClassName:h,buttonsWrapperClassName:f}=this.props;return o.a.createElement(o.a.Fragment,null,t(e),o.a.createElement("div",{className:d.footer},n&&n(e.isSmallWidth),o.a.createElement("div",{className:s()(d.buttons,f)},a,m&&o.a.createElement(i.a,{className:h,name:"cancel",appearance:"stroke",onClick:this._handleCancel},null!=u?u:window.t("Cancel")),o.a.createElement("span",{className:d.submitButton},o.a.createElement(i.a,{className:p,disabled:l,name:"submit",onClick:c,"data-name":"submit-button"},null!=r?r:window.t("Ok"))))))}}}m.defaultProps={defaultActionOnClose:"submit",submitOnEnterKey:!0}},zztK:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17" fill="none"><path stroke="currentColor" stroke-width="1.2" d="M1 1l15 15m0-15L1 16"/></svg>'}}]);