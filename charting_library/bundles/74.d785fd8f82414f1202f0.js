(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{"5Ssy":function(e,t,n){"use strict";var s,o=n("YFKU"),r=n("q1tI"),a=n.n(r),i=n("+8gn"),l=n("Q+1u"),c=n("0W35"),u=n("TSYQ"),p=n("b8Mn");n("GZ2k");const d=Object(c.b)(((s=class extends r.PureComponent{constructor(){super(...arguments),this._onChange=()=>{this.props.onChange&&this.props.onChange(this.props.value)}}render(){const e=u(this.props.className,p.radio,{[p.reverse]:Boolean(this.props.labelPositionReverse)}),t=u(p.label,{[p.disabled]:this.props.disabled}),n=u(p.box,{[p.noOutline]:-1===this.props.tabIndex});let s=null;return this.props.label&&(s=r.createElement("span",{className:t},this.props.label)),r.createElement("label",{className:e},r.createElement("span",{className:p.wrapper,title:this.props.title},r.createElement("input",{id:this.props.id,tabIndex:this.props.tabIndex,autoFocus:this.props.autoFocus,role:this.props.role,className:p.input,type:"radio",name:this.props.name,checked:this.props.checked,disabled:this.props.disabled,value:this.props.value,onChange:this._onChange,ref:this.props.reference}),r.createElement("span",{className:n})),s)}}).defaultProps={value:"on"},s));var h=n("Eyy1"),m=n("fV01"),b=n("HfwS"),f=n("qzWo"),v=n("tDS2");function g(e){const{children:t,input:n,disabled:s,onChange:u,grouped:p,tooltip:g}=e,C=Object(r.useContext)(i.b),{values:y,setValue:E}=Object(h.ensureNotNull)(C),O=y[n.id],[T,_]=Object(r.useState)(O?"another-symbol":"main-symbol"),[w,j]=Object(r.useState)(O);return Object(r.useEffect)(()=>{O&&j(O)},[O]),a.a.createElement(c.a,{name:"symbol-source-"+n.id,values:[T],onChange:function(e){_(e),"main-symbol"===e?Object(b.b)(E)("",n.id,n.name):"another-symbol"===e&&w&&Object(b.b)(E,u)(w,n.id,n.name)}},a.a.createElement(l.a.Row,null,a.a.createElement(l.a.Cell,{colSpan:2,placement:"first",grouped:p},a.a.createElement(d,{value:"main-symbol",className:v.checkbox,disabled:s,label:a.a.createElement("span",{className:v.label},Object(o.t)("Main chart symbol",{context:"input"}))}))),a.a.createElement(l.a.Row,null,a.a.createElement(l.a.Cell,{placement:"first",grouped:p},a.a.createElement(d,{value:"another-symbol",className:v.checkbox,disabled:s,label:a.a.createElement("span",{className:v.label},Object(o.t)("Another symbol",{context:"input"}))})),a.a.createElement(l.a.Cell,{placement:"last",grouped:p},t||a.a.createElement(m.a,{input:Object(h.ensureDefined)(n),onChange:u,disabled:s||"main-symbol"===T,hasTooltip:Boolean(g)}),g&&a.a.createElement(f.a,{title:g}))))}var C=n("h5Dg");class y extends r.PureComponent{render(){const{label:e,input:t,tooltip:n}=this.props;return r.createElement(l.a.Row,null,r.createElement(l.a.Cell,{placement:"first",colSpan:2},r.createElement(C.a,{label:e,input:t,hasTooltip:Boolean(n)}),n&&r.createElement(f.a,{title:n})))}}var E=n("rJEJ");function O(e){const{input:t,tooltip:n}=e;return"symbol"===t.type&&t.optional?r.createElement(g,{input:t,tooltip:n}):"bool"===t.type?r.createElement(y,{label:Object(o.t)(t.name,{context:"input"}),input:t,tooltip:n}):r.createElement(E.a,{labelAlign:function(e){switch(e){case"session":
return"adaptive";case"time":return"topCenter";default:return}}(t.type),input:t,tooltip:n})}var T=n("07LS"),_=n("MALe");function w(e){const{content:t}=e;let n;return r.createElement(l.a.InlineRowContext.Provider,{value:!0},r.createElement("div",{className:_.inlineRow},t.children.map((e,s)=>(void 0!==e.tooltip&&(n=e.tooltip),r.createElement(O,{key:e.id,input:e,tooltip:s===t.children.length-1?n:void 0})))))}var j=n("M87J"),x=n("Jt4T");function S(e){const{content:t}=e;return Object(j.b)(t)?Object(j.c)(t)?r.createElement(w,{content:t}):r.createElement(r.Fragment,null,r.createElement("div",{className:x.titleWrap},r.createElement(T.a,{title:t.id,name:t.id})),t.children.map(e=>Object(j.b)(e)?r.createElement(w,{key:e.id,content:e}):r.createElement(O,{key:e.id,input:e,tooltip:e.tooltip})),r.createElement("div",{className:x.groupFooter})):r.createElement(O,{input:t,tooltip:t.tooltip})}n.d(t,"a",(function(){return P}));const k={offset:window.t("Offset")};class P extends a.a.PureComponent{render(){const{reference:e,inputs:t,property:n,study:s,model:o}=this.props,{offset:r,offsets:i}=n;return a.a.createElement(l.a,{reference:e},a.a.createElement(N,{study:s,model:o,property:n.inputs,inputs:t}),r&&this._createOffsetSection(r),i&&i.childNames().map(e=>{const t=i.childs()[e];return this._createOffsetSection(t)}))}_createOffsetSection(e){const t=e.childs();return a.a.createElement(N,{key:"offset_"+t.title.value(),study:this.props.study,model:this.props.model,inputs:[R(t)],property:e})}}function N(e){const{study:t,model:n,inputs:s,property:o}=e,l=Object(r.useMemo)(()=>Object(j.a)(s),[s]);return a.a.createElement(i.a,{property:o,study:t,model:n},l.map(e=>a.a.createElement(S,{key:e.id,content:e})))}function R(e){return{id:"val",name:e.title.value()||k.offset,defval:e.val.value(),type:"integer",min:e.min.value(),max:e.max.value()}}},GZ2k:function(e,t,n){},HGyE:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u}));var s=n("q1tI"),o=n("TSYQ"),r=n.n(o),a=n("PECq"),i=n("HfwS"),l=n("tDS2");class c extends s.PureComponent{constructor(){super(...arguments),this._onChange=e=>{const{input:{id:t,name:n},onChange:s}=this.props;s(e,t,n)}}render(){const{input:{id:e,defval:t,options:n,optionsTitles:o},value:i,disabled:c,hasTooltip:u}=this.props,p=n.map(e=>{const t=o&&o[e]?o[e]:e;return{value:e,content:window.t(t,{context:"input"})}}),d=void 0!==i&&n.includes(i)?i:t;return s.createElement(a.a,{id:e,className:r()(l.input,u&&l.hasTooltip),menuClassName:l.dropdownMenu,value:d,items:p,onChange:this._onChange,disabled:c})}}const u=Object(i.a)(c)},HyYY:function(e,t,n){e.exports={icon:"icon-3oPFhRYI"}},Jt4T:function(e,t,n){e.exports={titleWrap:"titleWrap-24p2N42k",groupFooter:"groupFooter-24p2N42k"}},KJt4:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r}));var s=n("q1tI");const o=s.createContext(null);function r(e,t){return s.createElement(o.Consumer,null,n=>n?s.createElement(e,{...Object.assign({model:n},t)}):null)}},M87J:function(e,t,n){"use strict";n.d(t,"b",(function(){
return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var s=n("Eyy1");function o(e){return e.hasOwnProperty("groupType")}function r(e){return o(e)&&"inline"===e.groupType}function a(e){const t=[],n=new Map,o=new Map;return o.set(void 0,new Map),e.forEach(e=>{const{group:r,inline:a}=e;if(void 0!==r||void 0!==a)if(void 0!==r)if(void 0!==a)if(n.has(r)){const t=Object(s.ensureDefined)(n.get(r));let l;o.has(t)?l=Object(s.ensureDefined)(o.get(t)):(l=new Map,o.set(t,l)),i(e,"inline",a,l,t.children)}else{const s={id:a,groupType:"inline",children:[e]},i={id:r,groupType:"group",children:[s]},l=new Map;l.set(a,s),o.set(i,l),n.set(r,i),t.push(i)}else i(e,"group",r,n,t);else{const n=Object(s.ensureDefined)(o.get(void 0));i(e,"inline",Object(s.ensureDefined)(a),n,t)}else t.push(e)}),t}function i(e,t,n,o,r){if(o.has(n))Object(s.ensureDefined)(o.get(n)).children.push(e);else{const s={id:n,groupType:t,children:[e]};o.set(n,s),r.push(s)}}},MALe:function(e,t,n){e.exports={inlineRow:"inlineRow-3IOXimxZ"}},PjdP:function(e,t,n){"use strict";var s=n("q1tI"),o=n("ZAxB"),r=n("kk0y"),a=n("YS4w"),i=n("h5Dg"),l=n("TSYQ"),c=n.n(l),u=n("wHCJ"),p=n("HfwS"),d=n("Yi2Q"),h=n("tDS2");class m extends s.PureComponent{constructor(){super(...arguments),this._onChange=e=>{const{input:{id:t,name:n},onChange:s}=this.props;s(e.currentTarget.value,t,n)}}render(){const{input:{defval:e},value:t,disabled:n,onBlur:o,onKeyDown:r,hasTooltip:a}=this.props;return s.createElement(u.a,{className:c()(h.input,a&&h.hasTooltip),value:void 0===t?e:t,onChange:this._onChange,onBlur:o,onKeyDown:r,disabled:n})}}const b=Object(d.a)(m),f=Object(p.a)(b);var v=n("fV01"),g=n("Eyy1"),C=n("XDrA"),y=n("qZIh");function E(e=""){const[,t="",n="",s="",o=""]=Array.from(e.match(/^(\d\d)(\d\d)-(\d\d)(\d\d)/)||[]);return[`${t}:${n}`,`${s}:${o}`]}class O extends s.PureComponent{constructor(e){super(e),this._onStartPick=e=>{this.setState({startTime:e},this._onChange)},this._onEndPick=e=>{this.setState({endTime:e},this._onChange)},this._onChange=()=>{const{input:{id:e,name:t},onChange:n}=this.props,{startTime:s,endTime:o}=this.state;n(s.replace(":","")+"-"+o.replace(":",""),e,t)};const t=e.value||e.input.defval,[n,s]=E(t);this.state={prevValue:t,startTime:n,endTime:s}}render(){const{startTime:e,endTime:t}=this.state,{hasTooltip:n}=this.props;return s.createElement(C.a,{className:c()(n&&h.hasTooltip)},s.createElement("div",{className:h.sessionStart},s.createElement(y.a,{className:c()(h.input,h.sessionInputContainer),name:"start",value:Object(g.ensureDefined)(e),onChange:this._onStartPick}),s.createElement("span",{className:h.sessionDash}," — ")),s.createElement("div",{className:h.sessionEnd},s.createElement(y.a,{className:c()(h.input,h.sessionInputContainer),name:"end",value:Object(g.ensureDefined)(t),onChange:this._onEndPick})))}static getDerivedStateFromProps(e,t){if(e.value===t.prevValue)return t;const[n,s]=E(e.value);return{prevValue:e.value,startTime:n,endTime:s}}}const T=Object(p.a)(O)
;var _=n("YFKU"),w=n("Kxc7"),j=n("0YCj"),x=n.n(j),S=n("+8gn"),k=n("HGyE"),P=n("5YG5");const N={open:window.t("open"),high:window.t("high"),low:window.t("low"),close:window.t("close"),hl2:window.t("hl2"),hlc3:window.t("hlc3"),ohlc4:window.t("ohlc4")};class R extends s.PureComponent{render(){const{input:e}=this.props,{study:t,model:n}=this.context;let o={...N};const r=Object(P.a)(t);if(t&&this._isStudy(t)&&t.isChildStudy()){const t=r.parentSource(),n=t.title(),s=x.a.getChildSourceInputTitles(e,t.metaInfo(),n);o={...o,...s}}if(w.enabled("study_on_study")&&t&&this._isStudy(t)&&(t.isChildStudy()||x.a.canBeChild(t.metaInfo()))){const e=[t,...r.getAllChildren()];n.model().allStudies().filter(t=>t.canHaveChildren()&&!e.includes(t)).forEach(e=>{const t=e.title(!0,void 0,!0),n=e.sourceId()||"#"+e.id(),s=e.metaInfo(),r=s.styles,a=s.plots||[];if(1===a.length)o[n+"$0"]=t;else if(a.length>1){const e=a.reduce((e,s,o)=>{if(!x.a.canPlotBeSourceOfChildStudy(s.type))return e;let a;try{a=Object(g.ensureDefined)(Object(g.ensureDefined)(r)[s.id]).title}catch(e){a=s.id}return{...e,[`${n}$${o}`]:`${t}: ${a}`}},{});o={...o,...e}}})}const a={...e,type:"text",options:Object.keys(o),optionsTitles:o};return s.createElement(k.a,{...this.props,input:a})}_isStudy(e){return!e.hasOwnProperty("isInputsStudy")}}R.contextType=S.b;var I=n("LxhU"),D=n("pPtI"),q=n("PECq");const W=void 0,V=["1","3","5","15","30","45","60","120","180","240","1D","1W","1M"];class Y extends s.PureComponent{constructor(){super(...arguments),this._onChange=e=>{const{input:{id:t,name:n},onChange:s}=this.props;s(e,t,n)}}render(){const{input:e,value:t,disabled:n,hasTooltip:o}=this.props,r=I.Interval.parse(void 0===t?e.defval:t),a=r.multiplier();let i=r.value();const l=W?W.get().filter(e=>!I.Interval.parse(e).isRange()):[],u=Object(D.mergeResolutions)(V,l);return u.unshift(""),a&&u.includes(i)||(i=u[0]),s.createElement(q.a,{id:e.id,className:c()(h.input,h.resolution,o&&h.hasTooltip),menuClassName:c()(h.dropdownMenu,h.resolution),items:(p=u,p.map(e=>({value:e,content:""===e?Object(_.t)("Same as chart"):Object(D.getTranslatedResolutionModel)(e).hint}))),value:i,onChange:this._onChange,disabled:n});var p}}const M=Object(p.a)(Y);var B=n("lkVX"),A=n("Z1Tk");class J extends s.PureComponent{render(){return s.createElement(S.b.Consumer,null,e=>e?this._getColorInputWithContext(e):null)}_getColorInputWithContext(e){var t;const{input:{id:n},disabled:o,hasTooltip:r}=this.props,{model:a,study:i}=e;if("properties"in i||"tempProperties"in i){const e="properties"in i?i.properties().inputs[n]:null===(t=i.tempProperties)||void 0===t?void 0:t.inputs.child(n);return s.createElement(A.a,{model:a,property:e},s.createElement(B.a,{className:c()(r&&h.hasTooltip),color:e,disabled:o}))}return null}}n.d(t,"a",(function(){return z}));class z extends s.PureComponent{render(){const{input:e,disabled:t,onChange:n,tzName:l,hasTooltip:c}=this.props;if(Object(o.b)(e))return s.createElement(k.a,{input:e,disabled:t,onChange:n,hasTooltip:c});switch(e.type){case"integer":return s.createElement(r.a,{input:e,disabled:t,
onChange:n,hasTooltip:c});case"float":case"price":return s.createElement(a.a,{input:e,disabled:t,onChange:n,hasTooltip:c});case"bool":return s.createElement(i.a,{input:e,disabled:t,onChange:n,hasTooltip:c});case"text":return s.createElement(f,{input:e,disabled:t,onChange:n,hasTooltip:c});case"symbol":return s.createElement(v.a,{input:e,disabled:t,onChange:n,hasTooltip:c});case"session":return s.createElement(T,{input:e,disabled:t,onChange:n,hasTooltip:c});case"source":return s.createElement(R,{input:e,disabled:t,onChange:n,hasTooltip:c});case"resolution":return s.createElement(M,{input:e,disabled:t,onChange:n,hasTooltip:c});case"time":return null;case"color":return s.createElement(J,{input:e,disabled:t,onChange:n,hasTooltip:c});default:return null}}}},S0KV:function(e,t,n){"use strict";function s(e){return Array.isArray(e)?e[0].value():e.value()}function o(e,t){if(Array.isArray(e))for(const n of e)t(n);else t(e)}n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return o}))},UYhW:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var s=n("q1tI"),o=n("Eyy1"),r=n("xx2B"),a=n("qFKp");class i extends s.PureComponent{constructor(){super(...arguments),this._container=null,this._handleContainerRef=e=>this._container=e,this._onChange=(e,t)=>{const{input:{id:n,name:s},onChange:o,onBlur:r}=this.props;o(e,n,s),"step"===t&&r&&r()},this._onBlur=e=>{const{onBlur:t}=this.props;if(t){const n=Object(o.ensureNotNull)(this._container);n.contains(document.activeElement)||n.contains(e.relatedTarget)||t()}}}render(){const{input:{defval:e,min:t,max:n,step:o},value:i,disabled:l,onKeyDown:c,className:u,mode:p,stretch:d}=this.props;return s.createElement(r.a,{className:u,value:Number(void 0===i?e:i),min:t,max:n,step:o,mode:p,onBlur:this._onBlur,onValueChange:this._onChange,onKeyDown:c,disabled:l,containerReference:this._handleContainerRef,inputMode:a.CheckMobile.iOS()?void 0:"numeric",fontSizeStyle:"medium",roundByStep:!1,stretch:d})}}},XDrA:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var s=n("q1tI"),o=n.n(s),r=n("TSYQ"),a=n("Q+1u"),i=n("tDS2");function l(e){const{className:t}=e,n=Object(s.useContext)(a.a.InlineRowContext);return o.a.createElement("div",{className:r(i.inputGroup,n&&i.inlineGroup,t)},e.children)}},YS4w:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return d}));var s=n("q1tI"),o=n("TSYQ"),r=n.n(o),a=n("UYhW"),i=n("HfwS"),l=n("Yi2Q"),c=n("tDS2");class u extends s.PureComponent{render(){const{hasTooltip:e}=this.props;return s.createElement(a.a,{...this.props,className:r()(c.input,e&&c.hasTooltip),stretch:!1})}}const p=Object(l.a)(u,{change:1/0,commit:0,blur:0}),d=Object(i.a)(p)},Yi2Q:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var s=n("q1tI");const o={blur:0,commit:0,change:1/0};function r(e,t=o){return class extends s.PureComponent{constructor(e){super(e),this._onChange=(e,n,s)=>{const o=t.change;o?(clearTimeout(this._timeout),this.setState({value:e},()=>{o!==1/0&&(this._timeout=setTimeout(()=>this._flush(),o))})):this._flush(e)},
this._onBlur=()=>{this._debounce(t.blur);const{onBlur:e}=this.props;e&&e()},this._onKeyDown=e=>{13===e.keyCode&&this._debounce(t.commit)},this.state={prevValue:e.value,value:e.value}}componentWillUnmount(){this._flush()}render(){const{value:t}=this.state;return s.createElement(e,{...this.props,value:t,onChange:this._onChange,onBlur:this._onBlur,onKeyDown:this._onKeyDown})}static getDerivedStateFromProps(e,t){return e.value===t.prevValue?t:{prevValue:e.value,value:e.value}}_debounce(e){e?(clearTimeout(this._timeout),e!==1/0&&(this._timeout=setTimeout(()=>this._flush(),e))):this.setState(e=>{this._flush(e.value)})}_flush(e){const{input:{id:t,name:n},onChange:s}=this.props,{prevValue:o,value:r}=this.state;clearTimeout(this._timeout);const a=void 0!==e?e:r;void 0!==a&&a!==o&&s(a,t,n)}}}},Z1Tk:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return i}));var s=n("q1tI"),o=n("KJt4");const r=s.createContext(null);class a extends s.PureComponent{constructor(){super(...arguments),this._setValue=(e,t,n)=>{const{model:s}=this.props;s.setProperty(e,t,n)}}componentDidMount(){const{property:e}=this.props;e.subscribe(this,()=>this.forceUpdate())}componentWillUnmount(){const{property:e}=this.props;e.unsubscribeAll(this)}render(){const e={setValue:this._setValue};return s.createElement(r.Provider,{value:e},this.props.children)}}function i(e,t){return Object(o.b)(({model:n})=>s.createElement(a,{model:n,property:t.property},s.createElement(e,{...t})),t)}},b8Mn:function(e){e.exports=JSON.parse('{"radio":"radio-1cZENBYk","input":"input-303BGOua","box":"box-3rMRS-wv","reverse":"reverse-39E2s_WA","label":"label-3Xg_J0oJ","wrapper":"wrapper-1Law0ttl","noOutline":"noOutline-3-BkNnru"}')},h5Dg:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return p}));var s=n("q1tI"),o=n("fV0y"),r=n("TSYQ"),a=n.n(r),i=n("qFKp"),l=n("HfwS"),c=n("tDS2");class u extends s.PureComponent{constructor(){super(...arguments),this._onChange=()=>{const{input:{id:e,name:t},value:n,onChange:s}=this.props;s(!n,e,t)}}render(){const{input:{defval:e},value:t,disabled:n,label:r,hasTooltip:l}=this.props,u=void 0===t?e:t;return s.createElement(o.a,{className:a()(c.checkbox,l&&c.hasTooltip),disabled:n,checked:u,onChange:this._onChange,label:s.createElement("span",{className:c.label},r),labelAlignBaseline:!i.isIE})}}const p=Object(l.a)(u)},kk0y:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return d}));var s=n("q1tI"),o=n("TSYQ"),r=n.n(o),a=n("HfwS"),i=n("Yi2Q"),l=n("UYhW"),c=n("tDS2");class u extends s.PureComponent{render(){const{hasTooltip:e}=this.props;return s.createElement(l.a,{...this.props,mode:"integer",className:r()(c.input,e&&c.hasTooltip),stretch:!1})}}const p=Object(i.a)(u,{change:1/0,commit:0,blur:0}),d=Object(a.a)(p)},lkVX:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));n("YFKU");var s=n("q1tI"),o=n.n(s),r=n("eJTA"),a=n("Tmoa"),i=n("Z1Tk"),l=n("7MId"),c=n("S0KV"),u=n("JWMC")
;const p=window.t("Change Thickness"),d=window.t("Change Color"),h=window.t("Change Opacity"),m=[1,2,3,4];class b extends o.a.PureComponent{constructor(){super(...arguments),this._trackEventLabel=null,this._getTransparencyValue=()=>{const{transparency:e}=this.props;return e?e.value():0},this._getOpacityValue=()=>{const{color:e}=this.props,t=Object(c.a)(e);if(t)return Object(a.isHexColor)(t)?Object(a.transparencyToAlpha)(this._getTransparencyValue()):Object(r.parseRgba)(t)[3]},this._getColorValueInHex=()=>{const{color:e}=this.props,t=Object(c.a)(e);return t?Object(a.isHexColor)(t)?t:Object(r.rgbToHexString)(Object(r.parseRgb)(t)):null},this._onThicknessChange=e=>{const{thickness:t}=this.props;void 0!==t&&this._setProperty(t,e,p)},this._onColorChange=e=>{const{color:t,isPaletteColor:n}=this.props,s=Object(c.a)(t);let o=0;s&&(o=Object(a.isHexColor)(s)?this._getTransparencyValue():Object(a.alphaToTransparency)(Object(r.parseRgba)(s)[3])),this._setProperty(t,Object(a.generateColor)(String(e),o,!0),d),this._trackEventLabel="Plot color > "+(n?"Palette":"Single")},this._onOpacityChange=e=>{const{color:t}=this.props,n=Object(c.a)(t);this._setProperty(t,Object(a.generateColor)(n,Object(a.alphaToTransparency)(e),!0),h)},this._onPopupClose=()=>{this._trackEventLabel&&(Object(u.trackEvent)("GUI","Study settings",this._trackEventLabel),this._trackEventLabel=null)}}componentWillUnmount(){this._onPopupClose()}render(){const{selectOpacity:e=!0,disabled:t,className:n}=this.props;return o.a.createElement(l.a,{className:n,disabled:t,color:this._getColorValueInHex(),selectOpacity:e,opacity:this._getOpacityValue(),thickness:this._getThicknessValue(),thicknessItems:m,onColorChange:this._onColorChange,onOpacityChange:this._onOpacityChange,onThicknessChange:this._onThicknessChange,onPopupClose:this._onPopupClose})}_getThicknessValue(){const{thickness:e}=this.props;return e?Object(c.a)(e):void 0}_setProperty(e,t,n){const{setValue:s}=this.context;Object(c.b)(e,e=>s(e,t,n))}}b.contextType=i.b},"m6W+":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var s=n("EBrf"),o=n("Ialn");class r{constructor(e=" "){this._divider=e}format(e){const t=Object(s.splitThousands)(e,this._divider);return Object(o.isRtl)()?Object(o.startWithLTR)(t):t}parse(e){const t=Object(o.stripLTRMarks)(e).split(this._divider).join(""),n=Number(t);return isNaN(n)||/e/i.test(t)?{res:!1}:{res:!0,value:n,suggest:this.format(n)}}}},qzWo:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var s=n("q1tI"),o=n.n(s),r=n("TSYQ"),a=n.n(r),i=n("Iivm"),l=n("+6II"),c=n("8+VR"),u=n("HyYY"),p=n("xJ0h");function d(){document.removeEventListener("scroll",d),document.removeEventListener("touchstart",d),Object(l.a)()}function h(e){c.mobiletouch&&(Object(l.c)(e.currentTarget,{tooltipDelay:0}),document.addEventListener("scroll",d),document.addEventListener("touchstart",d))}function m(e){const{title:t}=e;return o.a.createElement(i.a,{icon:p,className:a()("apply-common-tooltip",u.icon),title:t,onClick:h})}},rJEJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}))
;n("YFKU");var s=n("q1tI"),o=n("Eyy1"),r=n("PjdP"),a=n("Q+1u"),i=n("qzWo");class l extends s.PureComponent{render(){const{label:e,children:t,input:n,disabled:l,onChange:c,labelAlign:u,grouped:p,tooltip:d,offset:h}=this.props;return s.createElement(a.a.Row,null,s.createElement(a.a.Cell,{placement:"first",verticalAlign:u,grouped:p,offset:h},void 0!==e?e:window.t(Object(o.ensureDefined)(n).name,{context:"input"})),s.createElement(a.a.Cell,{placement:"last",grouped:p},t||s.createElement(r.a,{input:Object(o.ensureDefined)(n),onChange:c,disabled:l,hasTooltip:Boolean(d)}),d&&s.createElement(i.a,{title:d})))}}},tDS2:function(e,t,n){e.exports={input:"input-1zfqRRWX",resolution:"resolution-1zfqRRWX",symbol:"symbol-1zfqRRWX",checkbox:"checkbox-1zfqRRWX",label:"label-1zfqRRWX",dropdownMenu:"dropdownMenu-1zfqRRWX",sessionStart:"sessionStart-1zfqRRWX",sessionEnd:"sessionEnd-1zfqRRWX",sessionInputContainer:"sessionInputContainer-1zfqRRWX",sessionDash:"sessionDash-1zfqRRWX",inputGroup:"inputGroup-1zfqRRWX",inlineGroup:"inlineGroup-1zfqRRWX",hasTooltip:"hasTooltip-1zfqRRWX"}},xJ0h:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M8 8.5h1.5V14"/><circle fill="currentColor" cx="9" cy="5" r="1"/><path stroke="currentColor" d="M16.5 9a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0z"/></svg>'}}]);