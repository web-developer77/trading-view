(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"++uw":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n("q1tI"),r=n("yqnI");const a=e=>{const t="property"in e?e.property:void 0,n="defaultValue"in e?e.defaultValue:e.property.value(),[a,s]=Object(o.useState)(t?t.value():n);Object(o.useEffect)(()=>{if(t){const n={};return s(t.value()),t.subscribe(n,t=>{const n=t.value();e.handler&&e.handler(n),s(n)}),()=>t.unsubscribeAll(n)}return()=>{}},[t]);return[a,e=>{if(void 0!==t){const n=t.value();r.a.logNormal(`Changing property value from "${n}" to "${e}"`),t.setValue(e)}}]}},"+8gn":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var o=n("q1tI"),r=n("Eyy1"),a=n("txPx");const s=Object(a.getLogger)("Platform.GUI.StudyInputPropertyContainer"),i=o.createContext(null);class c extends o.PureComponent{constructor(e){super(e),this._setValue=(e,t,n)=>{const{property:o,model:a}=this.props,i=Object(r.ensureDefined)(o.child(e));s.logNormal(`Changing property "${e}" value from "${o.value()}" to "${t}"`),a.setProperty(i,t,"Change "+n)};const{property:t}=e,n={};t.childNames().forEach(e=>{const o=Object(r.ensureDefined)(t.child(e));n.hasOwnProperty(e)||(n[e]=o.value())}),this.state=n}componentDidMount(){const{property:e}=this.props;e.childNames().forEach(t=>{Object(r.ensureDefined)(e.child(t)).subscribe(this,e=>{const n=e.value();s.logNormal(`Property "${t}" updated to value "${n}"`),this.setState({[t]:n})})})}componentWillUnmount(){const{property:e}=this.props;e.childNames().forEach(t=>{Object(r.ensureDefined)(e.child(t)).unsubscribeAll(this)})}render(){const{study:e,model:t,children:n}=this.props,r={study:e,model:t,values:this.state,setValue:this._setValue};return o.createElement(i.Provider,{value:r},n)}}},"07LS":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n("q1tI"),r=n.n(o),a=n("Q+1u"),s=n("fktV"),i=n("Q40t");function c(e){return r.a.createElement(a.a.Row,null,r.a.createElement(a.a.Cell,{className:i.titleWrap,placement:"first",verticalAlign:"adaptive",colSpan:2,"data-section-name":e.name,checkableTitle:!0},r.a.createElement(s.a,{title:e.title,name:"is-enabled-"+e.name})))}},"0W35":function(e,t,n){"use strict";var o=n("q1tI"),r=n("17x9");class a extends o.PureComponent{constructor(){super(...arguments),this._subscriptions=new Set,this._getName=()=>this.props.name,this._getValues=()=>this.props.values,this._getOnChange=()=>this.props.onChange,this._subscribe=e=>{this._subscriptions.add(e)},this._unsubscribe=e=>{this._subscriptions.delete(e)}}getChildContext(){return{switchGroupContext:{getName:this._getName,getValues:this._getValues,getOnChange:this._getOnChange,subscribe:this._subscribe,unsubscribe:this._unsubscribe}}}render(){return this.props.children}componentDidUpdate(e){this._notify(this._getUpdates(this.props.values,e.values))}_notify(e){this._subscriptions.forEach(t=>t(e))}_getUpdates(e,t){return[...t,...e].filter(n=>t.includes(n)?!e.includes(n):e.includes(n))}}function s(e){var t;return(t=class extends o.PureComponent{
constructor(){super(...arguments),this._onChange=e=>{this.context.switchGroupContext.getOnChange()(e)},this._onUpdate=e=>{e.includes(this.props.value)&&this.forceUpdate()}}componentDidMount(){this.context.switchGroupContext.subscribe(this._onUpdate)}render(){return o.createElement(e,{...this.props,name:this._getName(),onChange:this._onChange,checked:this._isChecked()})}componentWillUnmount(){this.context.switchGroupContext.unsubscribe(this._onUpdate)}_getName(){return this.context.switchGroupContext.getName()}_isChecked(){return this.context.switchGroupContext.getValues().includes(this.props.value)}}).contextTypes={switchGroupContext:r.any.isRequired},t}a.childContextTypes={switchGroupContext:r.any.isRequired},n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return s}))},"4bOu":function(e,t,n){e.exports={colorPickerWrap:"colorPickerWrap-3gSLMlhu",focused:"focused-3gSLMlhu",readonly:"readonly-3gSLMlhu",disabled:"disabled-3gSLMlhu","size-small":"size-small-3gSLMlhu","size-medium":"size-medium-3gSLMlhu","size-large":"size-large-3gSLMlhu","font-size-small":"font-size-small-3gSLMlhu","font-size-medium":"font-size-medium-3gSLMlhu","font-size-large":"font-size-large-3gSLMlhu","border-none":"border-none-3gSLMlhu",shadow:"shadow-3gSLMlhu","border-thin":"border-thin-3gSLMlhu","border-thick":"border-thick-3gSLMlhu","intent-default":"intent-default-3gSLMlhu","intent-success":"intent-success-3gSLMlhu","intent-warning":"intent-warning-3gSLMlhu","intent-danger":"intent-danger-3gSLMlhu","intent-primary":"intent-primary-3gSLMlhu","corner-top-left":"corner-top-left-3gSLMlhu","corner-top-right":"corner-top-right-3gSLMlhu","corner-bottom-right":"corner-bottom-right-3gSLMlhu","corner-bottom-left":"corner-bottom-left-3gSLMlhu",colorPicker:"colorPicker-3gSLMlhu",swatch:"swatch-3gSLMlhu",placeholderContainer:"placeholderContainer-3gSLMlhu",placeholder:"placeholder-3gSLMlhu",white:"white-3gSLMlhu",opacitySwatch:"opacitySwatch-3gSLMlhu",colorLine:"colorLine-3gSLMlhu",thicknessContainer:"thicknessContainer-3gSLMlhu",thicknessTitle:"thicknessTitle-3gSLMlhu"}},"5YG5":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n("CW80"),r=n("3ClC");function a(e){if(Object(o.isLineTool)(e))return{isPine:()=>!1,isStandardPine:()=>!1,canOverrideMinTick:()=>!1,resolvedSymbolInfoBySymbol:()=>{throw new TypeError("Only study is supported.")},symbolsResolved:()=>{throw new TypeError("Only study is supported.")},parentSource:()=>{throw new TypeError("Only study is supported.")},getAllChildren:()=>[],sourceId:()=>{throw new TypeError("Only study is supported.")}};if(Object(r.isStudy)(e))return e;if("isInputsStudy"in e)return e;throw new TypeError("Unsupported source type.")}},"6ix9":function(e,t,n){e.exports={content:"content-22S1W3v8",cell:"cell-22S1W3v8",inner:"inner-22S1W3v8",first:"first-22S1W3v8",inlineCell:"inlineCell-22S1W3v8",fill:"fill-22S1W3v8",top:"top-22S1W3v8",topCenter:"topCenter-22S1W3v8",offset:"offset-22S1W3v8",inlineRow:"inlineRow-22S1W3v8",grouped:"grouped-22S1W3v8",separator:"separator-22S1W3v8",
groupSeparator:"groupSeparator-22S1W3v8",big:"big-22S1W3v8",adaptive:"adaptive-22S1W3v8",checkableTitle:"checkableTitle-22S1W3v8"}},"7MId":function(e,t,n){"use strict";var o=n("q1tI"),r=n.n(o),a=n("TSYQ"),s=n.n(a),i=n("Eyy1"),c=n("/3z9"),l=n("9dlw"),u=n("SpAO"),d=n("htM8"),h=n("PN6A");function p(e){const{button:t,children:n,className:a,onPopupClose:s,...p}=e,[m,f]=Object(o.useState)(!1),[b,v]=Object(o.useState)(!1),[g,C]=Object(u.a)(),y=Object(o.useRef)(null);return r.a.createElement("div",{className:a},r.a.createElement("div",{tabIndex:e.disabled?void 0:-1,ref:y,onClick:w,onFocus:C.onFocus,onBlur:C.onBlur,onKeyDown:E},"function"==typeof t?t(b,g):t),r.a.createElement(l.a,{isOpened:b,onClose:S,position:function(){const e=Object(i.ensureNotNull)(y.current).getBoundingClientRect();return{x:e.left,y:e.top+e.height}},doNotCloseOn:y.current,onKeyDown:E},r.a.createElement(h.a.Consumer,null,e=>r.a.createElement(d.a,{...p,onToggleCustom:f,menu:e})),!m&&n));function w(){e.disabled||(v(e=>!e),f(!1))}function E(e){switch(Object(c.hashFromEvent)(e)){case 27:b&&(e.preventDefault(),S())}}function S(){w(),Object(i.ensureNotNull)(y.current).focus(),s&&s()}}var m=n("V3OP"),f=n("Tmoa"),b=n("wLjq"),v=(n("YFKU"),n("0W35")),g=n("95N5");const C=Object(v.b)(class extends o.PureComponent{constructor(){super(...arguments),this._onChange=()=>{this.props.onChange&&this.props.onChange(this.props.value)}}render(){const{name:e,checked:t,value:n}=this.props,r=a(g.thicknessItem,{[g.checked]:t}),s=a(g.bar,{[g.checked]:t}),i={borderTopWidth:parseInt(n)};return o.createElement("div",{className:r},o.createElement("input",{type:"radio",className:g.radio,name:e,value:n,onChange:this._onChange,checked:t}),o.createElement("div",{className:s,style:i}," "))}});function y(e){const{name:t,values:n,selectedValues:r,onChange:a}=e,s=n.map((e,t)=>o.createElement(C,{key:t,value:e.toString()})),i=r.map(e=>e.toString());return o.createElement("div",{className:g.wrap},o.createElement(v.a,{name:t,onChange:e=>{a(parseInt(e))},values:i},s))}var w=n("85uA");const E=window.t("Thickness");function S(e){return r.a.createElement("div",{className:w.thicknessContainer},r.a.createElement("div",{className:w.thicknessTitle},E),r.a.createElement(y,{name:"color_picker_thickness_select",onChange:e.onChange,values:e.items,selectedValues:[e.value]}))}var O=n("4bOu");function N(e){const{className:t,selectOpacity:n=void 0!==e.opacity,thickness:o,color:a,disabled:i,opacity:c=1,onColorChange:l,onOpacityChange:u,onThicknessChange:d,thicknessItems:h,onPopupClose:f}=e,[b,v,g]=Object(m.a)();return r.a.createElement(p,{className:t,disabled:i,color:a,selectOpacity:n,opacity:c,selectCustom:!0,customColors:b,onColorChange:l,onOpacityChange:a?u:void 0,onAddColor:v,onRemoveCustomColor:g,button:function(e,t){const n=e||t,l=n?"primary":"default";return r.a.createElement("div",{className:s()(O.colorPickerWrap,O["intent-"+l],O["border-thin"],O["size-medium"],n&&O.highlight,n&&O.focused,i&&O.disabled),"data-role":"button","data-name":o?"color-with-thickness-select":"color-select"
},r.a.createElement("div",{className:s()(O.colorPicker,i&&O.disabled)},a?function(){const e=k(a,c),t=c>=.95&&x(a);return r.a.createElement("div",{className:O.opacitySwatch},r.a.createElement("div",{style:{backgroundColor:e},className:s()(O.swatch,t&&O.white)}))}():r.a.createElement("div",{className:O.placeholderContainer},r.a.createElement("div",{className:O.placeholder})),o&&r.a.createElement("span",{className:s()(O.colorLine,x(a)&&O.white),style:{height:o,backgroundColor:k(a,c)}})),n&&r.a.createElement("span",{className:O.shadow}))},onPopupClose:f},o&&h&&r.a.createElement(S,{value:o,items:h,onChange:function(e){d&&d(e)}}))}function k(e,t){return e?Object(f.generateColor)(e,Object(f.alphaToTransparency)(t)):"#000000"}function x(e){return!!e&&e.toLowerCase()===b.c}n.d(t,"a",(function(){return N}))},"85uA":function(e,t,n){e.exports={thicknessContainer:"thicknessContainer-2K1QSVfY",thicknessTitle:"thicknessTitle-2K1QSVfY"}},"8NUT":function(e,t,n){e.exports={"small-height-breakpoint":"screen and (max-height: 360px)",footer:"footer-KW8170fm",submitButton:"submitButton-KW8170fm",buttons:"buttons-KW8170fm"}},"95N5":function(e,t,n){e.exports={wrap:"wrap-kAIcH6Vi",thicknessItem:"thicknessItem-kAIcH6Vi",checked:"checked-kAIcH6Vi",radio:"radio-kAIcH6Vi",bar:"bar-kAIcH6Vi"}},"9dlw":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var o=n("q1tI"),r=n.n(o),a=n("i8i4"),s=n.n(a),i=n("AiMB"),c=n("DTHj"),l=n("X0gx"),u=n("8Rai");function d(e){const{controller:t,children:n,isOpened:a,closeOnClickOutside:d=!0,doNotCloseOn:h,onClickOutside:p,onClose:m,...f}=e,b=Object(o.useContext)(l.a),v=Object(u.a)({handler:function(e){p&&p(e);if(!d)return;if(h&&e.target instanceof Node){const t=s.a.findDOMNode(h);if(t instanceof Node&&t.contains(e.target))return}m()},mouseDown:!0,touchStart:!0});return a?r.a.createElement(i.a,{top:"0",left:"0",right:"0",bottom:"0",pointerEvents:"none"},r.a.createElement("span",{ref:v,style:{pointerEvents:"auto"}},r.a.createElement(c.b,{...f,onClose:m,onScroll:function(t){const{onScroll:n}=e;n&&n(t)},customCloseDelegate:b,ref:t},n))):null}},BXAb:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n("8woN");function r(e){try{return Object(o.shortName)(e)}catch(t){return e}}},E9Pn:function(e,t,n){},EYfA:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n("q1tI"),r=n.n(o),a=n("Q+1u"),s=n("fktV");function i(e){const{id:t,offset:n,disabled:o,checked:i,title:c,children:l}=e;return r.a.createElement(a.a.Row,null,r.a.createElement(a.a.Cell,{placement:"first",verticalAlign:"adaptive",offset:n,"data-section-name":t,colSpan:Boolean(l)?void 0:2,checkableTitle:!0},r.a.createElement(s.a,{name:"is-enabled-"+t,title:c,disabled:o,property:i})),Boolean(l)&&r.a.createElement(a.a.Cell,{placement:"last","data-section-name":t},l))}},HfwS:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return s}));var o=n("q1tI"),r=n("+8gn");function a(e){var t;return(t=class extends o.PureComponent{constructor(){super(...arguments),this._getTimezoneName=e=>{
const t=e.model().timezone();if("exchange"!==t)return t;const n=e.model().mainSeries().symbolInfo();return null==n?void 0:n.timezone},this._onChange=(e,t,n)=>{const{setValue:o}=this.context,{onChange:r}=this.props;s(o,r)(e,t,n)}}render(){const{input:t}=this.props,{values:n,model:r}=this.context;return o.createElement(e,{...this.props,value:n[t.id],tzName:this._getTimezoneName(r),onChange:this._onChange})}}).contextType=r.b,t}function s(e,t){return(n,o,r)=>{e(o,n,r),t&&t(n,o,r)}}},N5tr:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var o=n("q1tI"),r=n.n(o),a=n("TSYQ"),s=n("tWVy"),i=n("JWMC"),c=n("ijHL"),l=n("v1bN");const u=l;function d(e){const{reference:t,...n}=e,o={...n,ref:t};return r.a.createElement(e.href?"a":"div",o)}function h(e){e.stopPropagation()}function p(e){const{id:t,role:n,"aria-selected":u,className:p,title:m,labelRowClassName:f,labelClassName:b,shortcut:v,forceShowShortcuts:g,icon:C,isActive:y,isDisabled:w,isHovered:E,appearAsDisabled:S,label:O,link:N,showToolboxOnHover:k,target:x,rel:T,toolbox:j,reference:I,onMouseOut:_,onMouseOver:M,suppressToolboxClick:L=!0,theme:P=l}=e,A=Object(c.b)(e),W=Object(o.useRef)(null);return r.a.createElement(d,{...A,id:t,role:n,"aria-selected":u,className:a(p,P.item,C&&P.withIcon,{[P.isActive]:y,[P.isDisabled]:w||S,[P.hovered]:E}),title:m,href:N,target:x,rel:T,reference:function(e){W.current=e,"function"==typeof I&&I(e);"object"==typeof I&&(I.current=e)},onClick:function(t){const{dontClosePopup:n,onClick:o,onClickArg:r,trackEventObject:a}=e;if(w)return;a&&Object(i.trackEvent)(a.category,a.event,a.label);o&&o(r,t);n||Object(s.b)()},onContextMenu:function(t){const{trackEventObject:n,trackRightClick:o}=e;n&&o&&Object(i.trackEvent)(n.category,n.event,n.label+"_rightClick")},onMouseUp:function(t){const{trackEventObject:n,trackMouseWheelClick:o}=e;if(1===t.button&&N&&n){let e=n.label;o&&(e+="_mouseWheelClick"),Object(i.trackEvent)(n.category,n.event,e)}},onMouseOver:M,onMouseOut:_},void 0!==C&&r.a.createElement("div",{className:P.icon,dangerouslySetInnerHTML:{__html:C}}),r.a.createElement("div",{className:a(P.labelRow,f)},r.a.createElement("div",{className:a(P.label,b)},O)),(void 0!==v||g)&&r.a.createElement("div",{className:P.shortcut},(B=v)&&B.split("+").join(" + ")),void 0!==j&&r.a.createElement("div",{onClick:L?h:void 0,className:a(P.toolbox,{[P.showOnHover]:k})},j));var B}},"Q+1u":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n("q1tI"),r=n.n(o),a=n("TSYQ"),s=n("ijHL"),i=n("6ix9");const c=r.a.createContext(!1);class l extends r.a.PureComponent{render(){return r.a.createElement("div",{ref:this.props.reference,className:i.content},this.props.children)}}l.InlineRowContext=c,l.Row=function(e){const{children:t}=e;return Object(o.useContext)(c)?r.a.createElement("span",{className:i.inlineRow},t):r.a.createElement(r.a.Fragment,null,t)},l.Cell=function(e){
const t=Object(o.useContext)(c),n=a(i.cell,e.offset&&i.offset,e.grouped&&i.grouped,t&&i.inlineCell,"top"===e.verticalAlign&&i.top,"topCenter"===e.verticalAlign&&i.topCenter,"adaptive"===e.verticalAlign&&i.adaptive,e.checkableTitle&&i.checkableTitle,2===e.colSpan&&i.fill,"first"===e.placement&&2!==e.colSpan&&i.first,"last"===e.placement&&2!==e.colSpan&&i.last),l=Object(s.b)(e);return r.a.createElement("div",{...l,className:n},r.a.createElement("div",{className:a(i.inner,e.className)},e.children))},l.Separator=function(e){return r.a.createElement(l.Row,null,r.a.createElement("div",{className:a(i.cell,i.separator,i.fill)}))},l.GroupSeparator=function(e){const t=e.size||0;return r.a.createElement(l.Row,null,r.a.createElement("div",{className:a(i.cell,i.groupSeparator,i.fill,1===t&&i.big)}))}},Q40t:function(e,t,n){e.exports={titleWrap:"titleWrap-3OnZWCnE"}},Si6X:function(e,t,n){"use strict";var o=n("q1tI"),r=n.n(o),a=n("TSYQ"),s=n.n(a),i=n("YFKU"),c=n("Eyy1"),l=n("+EG+"),u=n("pafz"),d=n("Kxc7"),h=n("fV01"),p=n("kNVT"),m=n("p04v"),f=n("Iivm"),b=n("u52U"),v=n("xNfs");function g(e){const{value:t,onClick:n,disabled:o=!1,className:s}=e;return r.a.createElement("div",{className:a(v.wrap,o&&v.disabled,s),onClick:n,"data-name":"edit-button"},r.a.createElement("span",{className:a(v.text,"apply-overflow-tooltip")},t),r.a.createElement(f.a,{icon:b,className:v.icon}))}var C=n("EYfA"),y=n("xpzh"),w=n("952j"),E=n("rC+j"),S=n("BXAb"),O=n("pCpq");function N(e){const{symbol:t,onSymbolChanged:n,disabled:a,className:c}=e,[h,f]=Object(o.useState)(t),b=Object(o.useContext)(l.b),v=Object(o.useContext)(u.a);return r.a.createElement(g,{value:h,onClick:function(){const e=function(e){const t=Object(w.b)(e);return Object(E.e)(t)}(h)?h:Object(S.a)(h),t=Object(p.getSymbolSearchCompleteOverrideFunction)();Object(m.a)({onSearchComplete:e=>{t(e[0].symbol).then(e=>{n(e),f(e)})},dialogTitle:Object(i.t)("Change symbol"),defaultValue:e,manager:b,onClose:()=>{v&&v.focus()},showSpreadActions:d.enabled("show_spread_operators")&&d.enabled("studies_symbol_search_spread_operators")})},disabled:a,className:s()(c,d.enabled("uppercase_instrument_names")&&O.uppercase)})}function k(e){if("definition"in e){const{propType:t,properties:n,id:o,title:a=""}=e.definition,s=n[t],i=s.value()||"",l=e=>{s.setValue(e)};return r.a.createElement(C.a,{id:o,title:a},r.a.createElement(y.a,null,r.a.createElement(N,{symbol:Object(c.ensureDefined)(i),onSymbolChanged:l})))}{const{study:t,value:n,input:{id:o,name:a},onChange:i,disabled:l,hasTooltip:u}=e,d=e=>{const n=Object(h.b)(e,t);i(n,o,a)};return r.a.createElement(N,{symbol:Object(c.ensureDefined)(n),onSymbolChanged:d,disabled:l,className:s()(u&&O.hasTooltip)})}}n.d(t,"a",(function(){return k}))},eG6P:function(e,t,n){e.exports={wrap:"wrap-2tojvhF7"}},fV01:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return d}));var o=n("q1tI"),r=n.n(o),a=n("Eyy1"),s=n("+8gn"),i=n("HfwS"),c=n("5YG5"),l=n("Si6X");function u(e,t){const n=Object(c.a)(t).resolvedSymbolInfoBySymbol(e)
;return n&&(n.ticker||n.full_name)?n.ticker||n.full_name:e}const d=Object(i.a)((function(e){const t=Object(o.useContext)(s.b),{study:n}=Object(a.ensureNotNull)(t),{input:{defval:i},value:c}=e;return r.a.createElement(l.a,{...e,value:u(c||i||"",n),study:n})}))},fV0y:function(e,t,n){"use strict";var o=n("q1tI"),r=n("TSYQ"),a=n("0W35"),s=n("vCF3"),i=n("qibD");n("E9Pn");class c extends o.PureComponent{render(){const{inputClassName:e,labelClassName:t,...n}=this.props,a=r(this.props.className,i.checkbox,{[i.reverse]:Boolean(this.props.labelPositionReverse),[i.baseline]:Boolean(this.props.labelAlignBaseline)}),c=r(i.label,t,{[i.disabled]:this.props.disabled});let l=null;return this.props.label&&(l=o.createElement("span",{className:c,title:this.props.title},this.props.label)),o.createElement("label",{className:a},o.createElement(s.a,{...n,className:e}),l)}}c.defaultProps={value:"on"};Object(a.b)(c);n.d(t,"a",(function(){return c}))},fktV:function(e,t,n){"use strict";var o=n("q1tI"),r=n.n(o),a=n("qFKp"),s=n("fV0y"),i=n("++uw");function c(e){const{property:t,...n}=e,[o,a]=Object(i.a)({property:t});return r.a.createElement(s.a,{...n,name:"toggle-enabled",checked:o,onChange:function(){a(!o)}})}var l=n("xpzh"),u=n("vxCt");function d(e){const{property:t,disabled:n,title:o,className:s,name:i}=e,d=r.a.createElement("span",{className:u.title},o);return r.a.createElement(l.a,{className:s},t&&r.a.createElement(c,{name:i,className:u.checkbox,property:t,disabled:n,label:d,labelAlignBaseline:!a.isIE}),!t&&d)}n.d(t,"a",(function(){return d}))},pCpq:function(e,t,n){e.exports={hasTooltip:"hasTooltip-2kfQACVg",uppercase:"uppercase-2kfQACVg"}},qibD:function(e){e.exports=JSON.parse('{"checkbox":"checkbox-3xZUD-2M","reverse":"reverse-3xeTx96y","label":"label-cyItEVpF","baseline":"baseline-6TXKro4X"}')},tmL0:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n("q1tI"),r=n.n(o),a=n("x0D+"),s=n("Eyy1"),i=n("qFKp");function c(e){const{reference:t,children:n,...s}=e,c=Object(o.useRef)(null),u=Object(o.useCallback)(e=>{t&&(t.current=e),i.CheckMobile.iOS()&&(null!==c.current&&Object(a.enableBodyScroll)(c.current),c.current=e,null!==c.current&&Object(a.disableBodyScroll)(c.current,{allowTouchMove:l(c)}))},[t]);return r.a.createElement("div",{ref:u,...s},n)}function l(e){return t=>{const n=Object(s.ensureNotNull)(e.current),o=document.activeElement;return!n.contains(t)||null!==o&&n.contains(o)&&o.contains(t)}}},u52U:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M13.5 7l1.65-1.65a.5.5 0 0 0 0-.7l-1.8-1.8a.5.5 0 0 0-.7 0L11 4.5M13.5 7L11 4.5M13.5 7l-8.35 8.35a.5.5 0 0 1-.36.15H2.5v-2.3a.5.5 0 0 1 .15-.35L11 4.5"/></svg>'},v1bN:function(e,t,n){e.exports={"tablet-small-breakpoint":"screen and (max-width: 428px)",item:"item-2IihgTnv",hovered:"hovered-2IihgTnv",isDisabled:"isDisabled-2IihgTnv",isActive:"isActive-2IihgTnv",shortcut:"shortcut-2IihgTnv",toolbox:"toolbox-2IihgTnv",withIcon:"withIcon-2IihgTnv",icon:"icon-2IihgTnv",
labelRow:"labelRow-2IihgTnv",label:"label-2IihgTnv",showOnHover:"showOnHover-2IihgTnv"}},vxCt:function(e,t,n){e.exports={checkbox:"checkbox-FNjK79Y1",title:"title-FNjK79Y1"}},"x0D+":function(e,t,n){var o,r,a;r=[t],void 0===(a="function"==typeof(o=function(e){"use strict";function t(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(e,"__esModule",{value:!0});var n=!1;if("undefined"!=typeof window){var o={get passive(){n=!0}};window.addEventListener("testPassive",null,o),window.removeEventListener("testPassive",null,o)}var r="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&/iP(ad|hone|od)/.test(window.navigator.platform),a=[],s=!1,i=-1,c=void 0,l=void 0,u=function(e){return a.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},d=function(e){var t=e||window.event;return!!u(t.target)||1<t.touches.length||(t.preventDefault&&t.preventDefault(),!1)},h=function(){setTimeout((function(){void 0!==l&&(document.body.style.paddingRight=l,l=void 0),void 0!==c&&(document.body.style.overflow=c,c=void 0)}))};e.disableBodyScroll=function(e,o){if(r){if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(e&&!a.some((function(t){return t.targetElement===e}))){var h={targetElement:e,options:o||{}};a=[].concat(t(a),[h]),e.ontouchstart=function(e){1===e.targetTouches.length&&(i=e.targetTouches[0].clientY)},e.ontouchmove=function(t){var n,o,r,a;1===t.targetTouches.length&&(o=e,a=(n=t).targetTouches[0].clientY-i,!u(n.target)&&(o&&0===o.scrollTop&&0<a||(r=o)&&r.scrollHeight-r.scrollTop<=r.clientHeight&&a<0?d(n):n.stopPropagation()))},s||(document.addEventListener("touchmove",d,n?{passive:!1}:void 0),s=!0)}}else{m=o,setTimeout((function(){if(void 0===l){var e=!!m&&!0===m.reserveScrollBarGap,t=window.innerWidth-document.documentElement.clientWidth;e&&0<t&&(l=document.body.style.paddingRight,document.body.style.paddingRight=t+"px")}void 0===c&&(c=document.body.style.overflow,document.body.style.overflow="hidden")}));var p={targetElement:e,options:o||{}};a=[].concat(t(a),[p])}var m},e.clearAllBodyScrollLocks=function(){r?(a.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),s&&(document.removeEventListener("touchmove",d,n?{passive:!1}:void 0),s=!1),a=[],i=-1):(h(),a=[])},e.enableBodyScroll=function(e){if(r){if(!e)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");e.ontouchstart=null,e.ontouchmove=null,a=a.filter((function(t){return t.targetElement!==e})),s&&0===a.length&&(document.removeEventListener("touchmove",d,n?{passive:!1}:void 0),s=!1)}else 1===a.length&&a[0].targetElement===e?(h(),a=[]):a=a.filter((function(t){return t.targetElement!==e}))}})?o.apply(t,r):o)||(e.exports=a)},xNfs:function(e,t,n){e.exports={wrap:"wrap-3GItoI3T",icon:"icon-3GItoI3T",text:"text-3GItoI3T",
disabled:"disabled-3GItoI3T"}},xpzh:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n("q1tI"),r=n.n(o),a=n("TSYQ"),s=n.n(a),i=n("eG6P");function c(e){return r.a.createElement("div",{className:s()(i.wrap,e.className)},e.children)}},ycFu:function(e,t,n){"use strict";n.r(t),n.d(t,"AdaptiveConfirmDialog",(function(){return h}));var o=n("q1tI"),r=n.n(o),a=n("TSYQ"),s=n.n(a),i=n("mwqF"),c=n("Eyy1"),l=(n("YFKU"),n("/3z9")),u=n("g89m"),d=n("8NUT");class h extends r.a.PureComponent{constructor(){super(...arguments),this._dialogRef=r.a.createRef(),this._handleClose=()=>{const{defaultActionOnClose:e,onSubmit:t,onCancel:n,onClose:o}=this.props;switch(e){case"submit":t();break;case"cancel":n()}o()},this._handleCancel=()=>{this.props.onCancel(),this.props.onClose()},this._handleKeyDown=e=>{const{onSubmit:t,submitButtonDisabled:n,submitOnEnterKey:o}=this.props;switch(Object(l.hashFromEvent)(e)){case 13:!n&&o&&(e.preventDefault(),t())}}}render(){const{render:e,onClose:t,onSubmit:n,onCancel:o,footerLeftRenderer:a,submitButtonText:s,submitButtonDisabled:i,defaultActionOnClose:c,submitOnEnterKey:l,...d}=this.props;return r.a.createElement(u.a,{...d,ref:this._dialogRef,onKeyDown:this._handleKeyDown,render:this._renderChildren(),onClose:this._handleClose})}focus(){Object(c.ensureNotNull)(this._dialogRef.current).focus()}_renderChildren(){return e=>{const{render:t,footerLeftRenderer:n,additionalButtons:o,submitButtonText:a,submitButtonDisabled:c,onSubmit:l,cancelButtonText:u,showCancelButton:h=!0,submitButtonClassName:p,cancelButtonClassName:m,buttonsWrapperClassName:f}=this.props;return r.a.createElement(r.a.Fragment,null,t(e),r.a.createElement("div",{className:d.footer},n&&n(e.isSmallWidth),r.a.createElement("div",{className:s()(d.buttons,f)},o,h&&r.a.createElement(i.a,{className:m,name:"cancel",appearance:"stroke",onClick:this._handleCancel},null!=u?u:window.t("Cancel")),r.a.createElement("span",{className:d.submitButton},r.a.createElement(i.a,{className:p,disabled:c,name:"submit",onClick:l,"data-name":"submit-button"},null!=a?a:window.t("Ok"))))))}}}h.defaultProps={defaultActionOnClose:"submit",submitOnEnterKey:!0}},yqnI:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n("txPx");const r=Object(o.getLogger)("Platform.GUI.PropertyDefinitionTrace")}}]);