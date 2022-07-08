(window.webpackJsonp=window.webpackJsonp||[]).push([["create-confirm-dialog"],{"0W35":function(e,t,n){"use strict";var s=n("q1tI"),o=n("17x9");class a extends s.PureComponent{constructor(){super(...arguments),this._subscriptions=new Set,this._getName=()=>this.props.name,this._getValues=()=>this.props.values,this._getOnChange=()=>this.props.onChange,this._subscribe=e=>{this._subscriptions.add(e)},this._unsubscribe=e=>{this._subscriptions.delete(e)}}getChildContext(){return{switchGroupContext:{getName:this._getName,getValues:this._getValues,getOnChange:this._getOnChange,subscribe:this._subscribe,unsubscribe:this._unsubscribe}}}render(){return this.props.children}componentDidUpdate(e){this._notify(this._getUpdates(this.props.values,e.values))}_notify(e){this._subscriptions.forEach(t=>t(e))}_getUpdates(e,t){return[...t,...e].filter(n=>t.includes(n)?!e.includes(n):e.includes(n))}}function i(e){var t;return(t=class extends s.PureComponent{constructor(){super(...arguments),this._onChange=e=>{this.context.switchGroupContext.getOnChange()(e)},this._onUpdate=e=>{e.includes(this.props.value)&&this.forceUpdate()}}componentDidMount(){this.context.switchGroupContext.subscribe(this._onUpdate)}render(){return s.createElement(e,{...this.props,name:this._getName(),onChange:this._onChange,checked:this._isChecked()})}componentWillUnmount(){this.context.switchGroupContext.unsubscribe(this._onUpdate)}_getName(){return this.context.switchGroupContext.getName()}_isChecked(){return this.context.switchGroupContext.getValues().includes(this.props.value)}}).contextTypes={switchGroupContext:o.any.isRequired},t}a.childContextTypes={switchGroupContext:o.any.isRequired},n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}))},"4Qqi":function(e,t,n){"use strict";n.r(t),n.d(t,"ConfirmDialogRenderer",(function(){return h}));var s=n("i8i4"),o=n("q1tI"),a=n.n(o),i=n("YFKU"),r=n("fV0y"),c=n("WncW"),l=n("/3z9"),u=n("8Lsi"),m=n("GnWp");class h{constructor(e){this._root=document.createElement("div"),this._disabledConfirmations=e}open(e){return new Promise(t=>{this._open(t,e)})}_open(e,t){const{title:n,message:o,confirmButton:i,closeButton:r,showDisableConfirmationsCheckbox:c}=t,h=()=>{e({status:!1}),this._close()},p={className:m.dialog,isOpened:!0,backdrop:!0,showSeparator:!0,title:n,cancelButtonText:r,submitButtonText:i,onSubmit:t=>{if(t){const e=Object(u.a)(o);void 0!==e&&this._disabledConfirmations.add(e)}e({status:!0}),this._close()},onClose:h,onKeyDown:e=>{27===Object(l.hashFromEvent)(e)&&h()},onCancel:()=>{},dataName:"trading-confirm-dialog",defaultActionOnClose:"none",showDisableConfirmationsCheckbox:c,message:o};s.render(a.a.createElement(d,{...p}),this._root)}_close(){s.unmountComponentAtNode(this._root)}}function d(e){const{showDisableConfirmationsCheckbox:t,message:n,onSubmit:s,...l}=e,[u,h]=Object(o.useState)(!1),d=()=>h(!u);return a.a.createElement(c.a,{...l,render:()=>a.a.createElement(a.a.Fragment,null,a.a.createElement("p",{className:t?m.messageWithCheckbox:m.message},Array.isArray(n)?n.map((e,t)=>a.a.createElement("span",{
className:m.messageBlock,key:t},e)):n),e.showDisableConfirmationsCheckbox&&a.a.createElement(r.a,{className:m.checkbox,label:Object(i.t)("Don't ask again"),checked:u,onChange:d})),onSubmit:()=>s(u),isOpen:!0})}},"8NUT":function(e,t,n){e.exports={"small-height-breakpoint":"screen and (max-height: 360px)",footer:"footer-KW8170fm",submitButton:"submitButton-KW8170fm",buttons:"buttons-KW8170fm"}},E9Pn:function(e,t,n){},F0Qt:function(e){e.exports=JSON.parse('{"wrapper":"wrapper-21v50zE8","input":"input-24iGIobO","box":"box-3574HVnv","icon":"icon-2jsUbtec","noOutline":"noOutline-3VoWuntz","intent-danger":"intent-danger-1Sr9dowC","check":"check-382c8Fu1","dot":"dot-3gRd-7Qt"}')},GnWp:function(e,t,n){e.exports={"tablet-small-breakpoint":"screen and (max-width: 428px)",dialog:"dialog-1Bm1Tr0A",message:"message-1Bm1Tr0A",messageWithCheckbox:"messageWithCheckbox-1Bm1Tr0A",checkbox:"checkbox-1Bm1Tr0A",messageBlock:"messageBlock-1Bm1Tr0A"}},Hc1a:function(e,t,n){"use strict";n.r(t);var s=n("q1tI"),o=n.n(s),a=n("YFKU"),i=n("fV0y"),r=n("9ujr"),c=n("Iivm"),l=n("w3IL");function u(e){return s.createElement(s.Fragment,null,s.createElement(c.a,{icon:e.icon,className:l.icon}),e.text)}var m=n("MizY");function h(e){const{disabledConfirmations:t,title:n,titleIcon:c,text:l,mainButtonText:h,mainButtonIntent:d,cancelButtonText:p,showDisableConfirmationsCheckbox:b,showCancelButton:f=!0,onClose:C=(()=>{}),onConfirm:g,onCancel:x,showBackdrop:w}=e,[_,k]=Object(s.useState)(!1),v=o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:m.text,dangerouslySetInnerHTML:{__html:l}}),b&&o.a.createElement(i.a,{className:m.checkbox,label:Object(a.t)("Don't ask again"),checked:_,tabIndex:-1,onChange:()=>k(e=>!e)}));return o.a.createElement(r.a,{title:function(){const e=null!=n?n:Object(a.t)("Confirmation");if(void 0===c)return e;return o.a.createElement(u,{text:e,icon:c})}(),content:v,onClose:C,actions:function(){const e=[{name:"yes",title:null!=h?h:Object(a.t)("Yes"),intent:null!=d?d:"success",handler:N}];f&&e.push({name:"no",title:null!=p?p:Object(a.t)("No"),appearance:"stroke",intent:"default",handler:E});return e}(),dataName:"simple-confirm-dialog",backdrop:w});function N(e){void 0!==t&&_&&t.add(l),g(e)}function E(e){void 0!==x?x(e):e.dialogClose()}}n.d(t,"SimpleConfirmDialog",(function(){return h}))},MizY:function(e,t,n){e.exports={text:"text-3Wd1RGGX",checkbox:"checkbox-3Wd1RGGX"}},"P4l+":function(e,t,n){},WncW:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var s=n("q1tI"),o=n("tLSG");const a=s.lazy(async()=>({default:(await Promise.all([n.e("react"),n.e(5),n.e(16),n.e(19),n.e(20),n.e(25),n.e(36),n.e(87),n.e(128),n.e(4),n.e(76),n.e("create-confirm-dialog")]).then(n.bind(null,"ycFu"))).AdaptiveConfirmDialog})),i=Object(o.a)(a)},fV0y:function(e,t,n){"use strict";var s=n("q1tI"),o=n("TSYQ"),a=n("0W35"),i=n("vCF3"),r=n("qibD");n("E9Pn");class c extends s.PureComponent{render(){const{inputClassName:e,labelClassName:t,...n}=this.props,a=o(this.props.className,r.checkbox,{[r.reverse]:Boolean(this.props.labelPositionReverse),
[r.baseline]:Boolean(this.props.labelAlignBaseline)}),c=o(r.label,t,{[r.disabled]:this.props.disabled});let l=null;return this.props.label&&(l=s.createElement("span",{className:c,title:this.props.title},this.props.label)),s.createElement("label",{className:a},s.createElement(i.a,{...n,className:e}),l)}}c.defaultProps={value:"on"};Object(a.b)(c);n.d(t,"a",(function(){return c}))},qibD:function(e){e.exports=JSON.parse('{"checkbox":"checkbox-3xZUD-2M","reverse":"reverse-3xeTx96y","label":"label-cyItEVpF","baseline":"baseline-6TXKro4X"}')},tLSG:function(e,t,n){"use strict";var s=n("q1tI"),o=n("PR+g");function a(e){return t=>{const n=Object(o.a)();return((e=>{const[t,n]=Object(s.useState)(!1);return Object(s.useEffect)(()=>{!t&&e&&n(!0)},[e]),t})(t.isOpen)||t.isOpen)&&n?s.createElement(s.Suspense,{fallback:null},s.createElement(e,{...t})):null}}n.d(t,"a",(function(){return a}))},tUxN:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 9" width="11" height="9" fill="none"><path stroke-width="2" d="M0.999878 4L3.99988 7L9.99988 1"/></svg>'},vCF3:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var s=n("q1tI"),o=n("TSYQ"),a=n("Iivm"),i=n("tUxN"),r=n("F0Qt");n("P4l+");function c(e){const t=o(r.box,r["intent-"+e.intent],{[r.check]:!Boolean(e.indeterminate),[r.dot]:Boolean(e.indeterminate),[r.noOutline]:-1===e.tabIndex}),n=o(r.wrapper,e.className);return s.createElement("span",{className:n,title:e.title},s.createElement("input",{id:e.id,tabIndex:e.tabIndex,className:r.input,type:"checkbox",name:e.name,checked:e.checked,disabled:e.disabled,value:e.value,autoFocus:e.autoFocus,role:e.role,onChange:function(){e.onChange&&e.onChange(e.value)},ref:e.reference}),s.createElement("span",{className:t},s.createElement(a.a,{icon:i,className:r.icon})))}},w3IL:function(e,t,n){e.exports={icon:"icon-NnWruywv"}},ycFu:function(e,t,n){"use strict";n.r(t),n.d(t,"AdaptiveConfirmDialog",(function(){return h}));var s=n("q1tI"),o=n.n(s),a=n("TSYQ"),i=n.n(a),r=n("mwqF"),c=n("Eyy1"),l=(n("YFKU"),n("/3z9")),u=n("g89m"),m=n("8NUT");class h extends o.a.PureComponent{constructor(){super(...arguments),this._dialogRef=o.a.createRef(),this._handleClose=()=>{const{defaultActionOnClose:e,onSubmit:t,onCancel:n,onClose:s}=this.props;switch(e){case"submit":t();break;case"cancel":n()}s()},this._handleCancel=()=>{this.props.onCancel(),this.props.onClose()},this._handleKeyDown=e=>{const{onSubmit:t,submitButtonDisabled:n,submitOnEnterKey:s}=this.props;switch(Object(l.hashFromEvent)(e)){case 13:!n&&s&&(e.preventDefault(),t())}}}render(){const{render:e,onClose:t,onSubmit:n,onCancel:s,footerLeftRenderer:a,submitButtonText:i,submitButtonDisabled:r,defaultActionOnClose:c,submitOnEnterKey:l,...m}=this.props;return o.a.createElement(u.a,{...m,ref:this._dialogRef,onKeyDown:this._handleKeyDown,render:this._renderChildren(),onClose:this._handleClose})}focus(){Object(c.ensureNotNull)(this._dialogRef.current).focus()}_renderChildren(){return e=>{
const{render:t,footerLeftRenderer:n,additionalButtons:s,submitButtonText:a,submitButtonDisabled:c,onSubmit:l,cancelButtonText:u,showCancelButton:h=!0,submitButtonClassName:d,cancelButtonClassName:p,buttonsWrapperClassName:b}=this.props;return o.a.createElement(o.a.Fragment,null,t(e),o.a.createElement("div",{className:m.footer},n&&n(e.isSmallWidth),o.a.createElement("div",{className:i()(m.buttons,b)},s,h&&o.a.createElement(r.a,{className:p,name:"cancel",appearance:"stroke",onClick:this._handleCancel},null!=u?u:window.t("Cancel")),o.a.createElement("span",{className:m.submitButton},o.a.createElement(r.a,{className:d,disabled:c,name:"submit",onClick:l,"data-name":"submit-button"},null!=a?a:window.t("Ok"))))))}}}h.defaultProps={defaultActionOnClose:"submit",submitOnEnterKey:!0}}}]);