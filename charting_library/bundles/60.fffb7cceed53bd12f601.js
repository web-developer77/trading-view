(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"0W35":function(e,t,n){"use strict";var s=n("q1tI"),o=n("17x9");class a extends s.PureComponent{constructor(){super(...arguments),this._subscriptions=new Set,this._getName=()=>this.props.name,this._getValues=()=>this.props.values,this._getOnChange=()=>this.props.onChange,this._subscribe=e=>{this._subscriptions.add(e)},this._unsubscribe=e=>{this._subscriptions.delete(e)}}getChildContext(){return{switchGroupContext:{getName:this._getName,getValues:this._getValues,getOnChange:this._getOnChange,subscribe:this._subscribe,unsubscribe:this._unsubscribe}}}render(){return this.props.children}componentDidUpdate(e){this._notify(this._getUpdates(this.props.values,e.values))}_notify(e){this._subscriptions.forEach(t=>t(e))}_getUpdates(e,t){return[...t,...e].filter(n=>t.includes(n)?!e.includes(n):e.includes(n))}}function i(e){var t;return(t=class extends s.PureComponent{constructor(){super(...arguments),this._onChange=e=>{this.context.switchGroupContext.getOnChange()(e)},this._onUpdate=e=>{e.includes(this.props.value)&&this.forceUpdate()}}componentDidMount(){this.context.switchGroupContext.subscribe(this._onUpdate)}render(){return s.createElement(e,{...this.props,name:this._getName(),onChange:this._onChange,checked:this._isChecked()})}componentWillUnmount(){this.context.switchGroupContext.unsubscribe(this._onUpdate)}_getName(){return this.context.switchGroupContext.getName()}_isChecked(){return this.context.switchGroupContext.getValues().includes(this.props.value)}}).contextTypes={switchGroupContext:o.any.isRequired},t}a.childContextTypes={switchGroupContext:o.any.isRequired},n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}))},"0qWQ":function(e,t,n){e.exports={checkbox:"checkbox-3XCXBX0E"}},"1J84":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var s=n("q1tI"),o=n("TSYQ"),a=n("N5tr"),i=n("fV0y"),c=n("0qWQ");function r(e){const{isDisabled:t,hint:n,label:r,isChecked:l,checkboxClassName:u,labelClassName:p,indeterminate:h,...d}=e;return s.createElement(a.b,{...d,isDisabled:t,shortcut:n,dontClosePopup:!0,labelRowClassName:p,label:s.createElement(i.a,{disabled:t,label:r,checked:l,indeterminate:h,className:o(c.checkbox,u)})})}},"4ko3":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var s=n("q1tI"),o=n("TSYQ"),a=n("b7M3");function i(e){const{theme:t=a}=e;return s.createElement("span",{className:o(a.clickableText,t.clickableTextColor,e.className),ref:e.reference,tabIndex:e.tabIndex,onClick:e.onClick,onKeyDown:e.onKeyDown},e.text)}},"9Crk":function(e,t){
e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M13.4 5.9c-.41 1.62-1.16 2.43-2.25 2.43-.52 0-1.25-.15-2.2-.45-.93-.3-1.58-.45-1.96-.45-.55 0-.98.3-1.27.9H4.66c.1-.67.36-1.24.76-1.71.4-.48.86-.72 1.4-.72.56 0 1.31.16 2.27.46.95.3 1.62.45 2.01.45.64 0 1.06-.3 1.27-.9h1.03zm0 3.87c-.41 1.62-1.16 2.43-2.25 2.43-.52 0-1.25-.15-2.2-.45-.93-.3-1.58-.46-1.96-.46-.55 0-.98.3-1.27.9H4.66c.1-.67.36-1.24.76-1.7.4-.48.86-.72 1.4-.72.56 0 1.31.15 2.27.46.95.3 1.62.44 2.01.44.64 0 1.06-.3 1.27-.9h1.03z"/></svg>'},E9Pn:function(e,t,n){},EvtC:function(e,t,n){e.exports={button:"button-2YcRd2gv"}},F0Qt:function(e){e.exports=JSON.parse('{"wrapper":"wrapper-21v50zE8","input":"input-24iGIobO","box":"box-3574HVnv","icon":"icon-2jsUbtec","noOutline":"noOutline-3VoWuntz","intent-danger":"intent-danger-1Sr9dowC","check":"check-382c8Fu1","dot":"dot-3gRd-7Qt"}')},JP9n:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var s=n("TrPz");const o={Mobile:s.mobile}},KMt6:function(e,t,n){"use strict";var s=n("YFKU"),o=n("Iivm"),a=n("q1tI"),i=n.n(a),c=n("TSYQ"),r=n.n(c),l=n("/KDZ"),u=n("82wv"),p=n("p0W+"),h=n("uhCe"),d=n("25b6"),m=n("en3B"),b=n("JP9n"),x=n("Iksw"),C=n("h7/L");function g(e){const{icon:t,iconClassName:n,title:s,titleColor:a,text:c,solutionId:l}=e;return i.a.createElement(u.b,{arrow:!1,content:i.a.createElement(o.a,{icon:t}),className:r()(C.icon,C.button,n),drawerBreakpoint:b.a.Mobile,title:s,horizontalAttachEdge:x.a.Right,horizontalDropDirection:x.b.FromRightToLeft},i.a.createElement("div",{className:C.wrapper},i.a.createElement(o.a,{icon:t,className:r()(C.icon,n)}),i.a.createElement("div",{className:C.infoContainer},i.a.createElement("span",{className:C.title,style:{color:a}},s),i.a.createElement("span",{className:C.text},c),!1)))}var w=n("U0JK"),f=n("xHKq"),v=n("SsHz"),k=n("OqDx"),I=n("VrrN"),N=n("9Crk"),E=n("sTHI");n.d(t,"a",(function(){return y}));const _=Object(s.t)("Cboe BZX"),D=Object(d.b)(Object(s.t)("{exchange} by {originalExchange}")),F=Object(d.b)(Object(s.t)("Real-time data for {symbolName} is provided by {exchange} exchange.")),O=Object(d.b)(Object(s.t)("This data is real-time, but it’s slightly different to its official counterpart coming from {exchange}."));class y extends a.PureComponent{render(){const e=this.context.mode===m.g.Popup?{"data-dragg-area":!0}:{};let t;if(this.props.hasDelayedWarning&&(t={icon:I,iconClassName:E.delayedDataIcon,title:Object(s.t)("Delayed data"),titleColor:E.delayedDataTitleColor,text:this.props.delayedWarningMessage}),this.props.hasBatsQuotes){const[e,n]=this.props.symbol.split(":"),s=`${F.replace("{symbolName}",n).replace("{exchange}",_)} ${O.replace("{exchange}",e)}`;t={icon:N,iconClassName:E.batsQuotesIcon,title:D.format({exchange:e,originalExchange:_}),titleColor:E.batsQuotesTitleColor,text:s,solutionId:43000473924}}return a.createElement("div",{className:c(E.header,this.props.className)},this.props.hasBackButton&&a.createElement(p.a,{title:Object(s.t)("Back"),onClick:this.props.back,className:E.button,
"data-name":"button-back",icon:w}),a.createElement("div",{className:E.wrapper,...e},a.createElement("span",{className:E.text},this.props.title,this.props.description)),void 0!==t&&a.createElement(g,{...t}),this.props.hasCancelButton&&a.createElement(p.a,{title:Object(s.t)("Cancel"),onClick:this.props.cancel,className:E.button,"data-name":"button-cancel",icon:f}),0!==a.Children.count(this.props.settingsItems)&&a.createElement(l.a,{rule:h.a.TabletSmall},e=>a.createElement(u.b,{className:E.settingsButton,content:a.createElement(o.a,{icon:k}),menuClassName:E.settingsPopupMenu,children:this.props.settingsItems,isDrawer:e,title:Object(s.t)("Settings"),arrow:!1,closeOnClickOutside:!0,"data-name":"order-ticket-settings"})),this.props.hasCloseButton&&a.createElement(p.a,{title:Object(s.t)("Close",{context:"input"}),onClick:this.props.close,className:E.button,"data-name":"button-close",icon:v}))}}y.contextType=m.f},M5tu:function(e,t,n){e.exports={"tablet-small-breakpoint":"screen and (max-width: 428px)",menuButton:"menuButton-UAwHUzLU",select:"select-UAwHUzLU",selectMenu:"selectMenu-UAwHUzLU",title:"title-UAwHUzLU"}},OqDx:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M7.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM5 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm9.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM12 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm9.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM19 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z"/></svg>'},P1zo:function(e,t,n){"use strict";var s=n("q1tI"),o=n.n(s),a=(n("YFKU"),n("qFKp")),i=n("PECq"),c=n("N5tr"),r=n("82wv"),l=n("M5tu");function u(e){const t=Object(s.useMemo)(()=>function(e){return e.map(e=>({value:e.value,content:e.text}))}(e.items),[e.items]),n=Object(s.useMemo)(()=>Object.values(t).map((e,t)=>{var n;return o.a.createElement(c.b,{key:e.value,label:null!==(n=e.content)&&void 0!==n?n:e.value,onClickArg:t,onClick:h})}),[t]),u=o.a.createElement(i.a,{value:e.selectedItem.value,items:t,className:l.select,menuClassName:l.selectMenu,onClick:function(){void 0!==e.onClick&&e.onClick()},onChange:function(t){e.onItemSelected(t)},disabled:e.disabled,stretch:!0,matchButtonAndListboxWidths:!0});return o.a.createElement(o.a.Fragment,null,a.CheckMobile.any()?o.a.createElement(r.b,{className:l.menuButton,content:u,children:n,arrow:!1,onClose:p,isDrawer:!0,closeOnClickOutside:!0}):u,o.a.createElement("div",{className:l.title},e.title));function p(){void 0!==e.onClose&&e.onClose()}function h(t){e.onItemSelected(e.items[t||0].value),p()}}n.d(t,"a",(function(){return p}));class p extends s.PureComponent{constructor(e){super(e),this._onItemSelected=e=>{this.props.selectedItem.setValue(e)},this._onClick=()=>{this.props.onControlFocused&&this.props.onControlFocused.fire()},this._callback=()=>this.forceUpdate()}componentDidMount(){this.props.selectedItem.subscribe(this._callback)}componentWillUnmount(){this.props.selectedItem.unsubscribe(this._callback)}render(){
const e=this.props.items.find(e=>e.value===this.props.selectedItem.value());return s.createElement(u,{title:this.props.title,items:this.props.items,selectedItem:void 0!==e?e:this.props.items[0],onItemSelected:this._onItemSelected,disabled:this.props.disabled,onClick:this._onClick,onClose:this.props.onClose})}}},"P4l+":function(e,t,n){},SsHz:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-width="1.2" d="M7 6l15 15m0-15L7 21"/></svg>'},TrPz:function(e,t,n){e.exports={mobile:"screen and (max-width: 567px)"}},U0JK:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentcolor" stroke-width="1.2" d="M17 21l-7.5-7.5L17 6"/></svg>'},VrrN:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.84 13.7H5.78V4.4l2.48-.06c1.35 0 2.42.4 3.22 1.2.8.78 1.19 1.83 1.19 3.15 0 3.34-1.61 5.01-4.83 5.01zm-.41-7.85v6.35c.26.02.55.03.86.03.83 0 1.48-.3 1.95-.9.48-.6.72-1.46.72-2.54 0-2-.93-2.99-2.78-2.99-.18 0-.43.02-.75.05z"/></svg>'},b7M3:function(e,t,n){e.exports={clickableText:"clickableText-2Cktgp8i",clickableTextColor:"clickableTextColor-2Cktgp8i"}},fV0y:function(e,t,n){"use strict";var s=n("q1tI"),o=n("TSYQ"),a=n("0W35"),i=n("vCF3"),c=n("qibD");n("E9Pn");class r extends s.PureComponent{render(){const{inputClassName:e,labelClassName:t,...n}=this.props,a=o(this.props.className,c.checkbox,{[c.reverse]:Boolean(this.props.labelPositionReverse),[c.baseline]:Boolean(this.props.labelAlignBaseline)}),r=o(c.label,t,{[c.disabled]:this.props.disabled});let l=null;return this.props.label&&(l=s.createElement("span",{className:r,title:this.props.title},this.props.label)),s.createElement("label",{className:a},s.createElement(i.a,{...n,className:e}),l)}}r.defaultProps={value:"on"};Object(a.b)(r);n.d(t,"a",(function(){return r}))},"h7/L":function(e,t,n){e.exports={icon:"icon-rFJIPntC",button:"button-rFJIPntC",wrapper:"wrapper-rFJIPntC",infoContainer:"infoContainer-rFJIPntC",title:"title-rFJIPntC",link:"link-rFJIPntC",text:"text-rFJIPntC"}},"p0W+":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var s=n("q1tI"),o=n("TSYQ"),a=n("tU7i"),i=n("EvtC");const c=s.forwardRef((e,t)=>{const{className:n,...c}=e;return s.createElement(a.b,{...c,ref:t,className:o(n,i.button)})})},qibD:function(e){e.exports=JSON.parse('{"checkbox":"checkbox-3xZUD-2M","reverse":"reverse-3xeTx96y","label":"label-cyItEVpF","baseline":"baseline-6TXKro4X"}')},sTHI:function(e,t,n){e.exports={delayedDataTitleColor:"#F57C00",batsQuotesTitleColor:"#C2185B",header:"header-DLF_qDKI",wrapper:"wrapper-DLF_qDKI",text:"text-DLF_qDKI",button:"button-DLF_qDKI",settingsButton:"settingsButton-DLF_qDKI button-DLF_qDKI",settingsPopupMenu:"settingsPopupMenu-DLF_qDKI",delayedDataIcon:"delayedDataIcon-DLF_qDKI",batsQuotesIcon:"batsQuotesIcon-DLF_qDKI"}},tUxN:function(e,t){
e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 9" width="11" height="9" fill="none"><path stroke-width="2" d="M0.999878 4L3.99988 7L9.99988 1"/></svg>'},vCF3:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var s=n("q1tI"),o=n("TSYQ"),a=n("Iivm"),i=n("tUxN"),c=n("F0Qt");n("P4l+");function r(e){const t=o(c.box,c["intent-"+e.intent],{[c.check]:!Boolean(e.indeterminate),[c.dot]:Boolean(e.indeterminate),[c.noOutline]:-1===e.tabIndex}),n=o(c.wrapper,e.className);return s.createElement("span",{className:n,title:e.title},s.createElement("input",{id:e.id,tabIndex:e.tabIndex,className:c.input,type:"checkbox",name:e.name,checked:e.checked,disabled:e.disabled,value:e.value,autoFocus:e.autoFocus,role:e.role,onChange:function(){e.onChange&&e.onChange(e.value)},ref:e.reference}),s.createElement("span",{className:t},s.createElement(a.a,{icon:i,className:c.icon})))}},xHKq:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="currentcolor"><path d="M3.5 10A6.5 6.5 0 1 0 10 3.5H5.233M7.5 6.5l-3-3 3-3"/></svg>'}}]);