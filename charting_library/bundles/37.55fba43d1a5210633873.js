(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{WboT:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),s=n("8+VR"),a=n("zcN6"),i=n("TSYQ"),l=n("YFKU"),c=n("Iivm"),u=n("R4+T"),p=n("uZsJ");function d(e){const t=i(p.control,p.controlIncrease),n=i(p.control,p.controlDecrease);return r.createElement(r.Fragment,null,void 0!==e.title&&r.createElement("div",{className:p.title},e.title),r.createElement("div",{className:p.controlWrapper},(e.defaultButtonsVisible||e.title)&&r.createElement(r.Fragment,null,r.createElement("button",{type:"button",tabIndex:-1,"aria-label":Object(l.t)("Increase"),className:t,onClick:e.increaseValue},r.createElement(c.a,{icon:u,className:p.controlIcon})),r.createElement("button",{type:"button",tabIndex:-1,"aria-label":Object(l.t)("Increase"),className:n,onClick:e.decreaseValue},r.createElement(c.a,{icon:u,className:p.controlIcon})))))}var h=n("8d0Q"),m=n("SpAO"),g=n("3F0O"),f=n("/3z9");n.d(t,"a",(function(){return v}));const b=[38],S=[40];function v(e){const[t,n]=Object(h.c)(),[i,l]=Object(m.a)(),c=Object(g.a)(l.onFocus,e.onFocus),u=Object(g.a)(l.onBlur,e.onBlur),p=Object(r.useCallback)(t=>{!e.disabled&&i&&(t.preventDefault(),t.deltaY<0?e.onValueByStepChange(1):e.onValueByStepChange(-1))},[i,e.disabled,e.onValueByStepChange]);return o.a.createElement(a.a,{...n,name:e.name,pattern:e.pattern,borderStyle:e.borderStyle,fontSizeStyle:e.fontSizeStyle,value:e.value,className:e.className,inputClassName:e.inputClassName,button:function(){const{button:n,forceShowControls:r,disabled:a,title:l}=e,c=!a&&!s.mobiletouch&&(r||i||t);return a?void 0:o.a.createElement(o.a.Fragment,null,null!=n?n:o.a.createElement(d,{increaseValue:v,decreaseValue:y,defaultButtonsVisible:c,title:l}))}(),disabled:e.disabled,placeholder:e.placeholder,innerLabel:e.innerLabel,endSlot:e.endSlot,containerReference:e.containerReference,inputReference:e.inputReference,inputMode:e.inputMode,type:e.type,error:e.error,errorMessage:e.errorMessage,onClick:e.onClick,onFocus:c,onBlur:u,onChange:e.onValueChange,onKeyDown:function(t){if(e.disabled||0!==Object(f.modifiersFromEvent)(t.nativeEvent))return;let n=b,r=S;e.controlDecKeyCodes&&(r=r.concat(e.controlDecKeyCodes));e.controlIncKeyCodes&&(n=n.concat(e.controlIncKeyCodes));(r.includes(t.keyCode)||n.includes(t.keyCode))&&(t.preventDefault(),e.onValueByStepChange(r.includes(t.keyCode)?-1:1));e.onKeyDown&&e.onKeyDown(t)},onWheelNoPassive:p,stretch:e.stretch,intent:e.intent,highlight:e.highlight,highlightRemoveRoundBorder:e.highlightRemoveRoundBorder,autoSelectOnFocus:!0});function v(){e.disabled||e.onValueByStepChange(1)}function y(){e.disabled||e.onValueByStepChange(-1)}}},"ZgM/":function(e,t,n){e.exports={innerLabel:"innerLabel-21h1g6jU"}},uZsJ:function(e,t,n){e.exports={controlWrapper:"controlWrapper-7ApHzdB4",hidden:"hidden-7ApHzdB4",control:"control-7ApHzdB4",controlIncrease:"controlIncrease-7ApHzdB4",controlDecrease:"controlDecrease-7ApHzdB4",controlIcon:"controlIcon-7ApHzdB4",title:"title-7ApHzdB4"}},xx2B:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}))
;var r=n("q1tI"),o=n.n(r),s=n("YFKU"),a=n("nc0P"),i=n("WboT"),l=n("m6W+"),c=n("zXvd"),u=n("Hr11");const p=Object(s.t)("Number format is invalid."),d=new l.a,h=/^-?[0-9]*$/,m=9e15;class g extends o.a.PureComponent{constructor(e){super(e),this._onFocus=e=>{this.setState({focused:!0}),this.props.onFocus&&this.props.onFocus(e)},this._onBlur=e=>{this.setState({displayValue:f(this.props,this.props.value),focused:!1}),this.props.errorHandler&&this.props.errorHandler(!1),this.props.onBlur&&this.props.onBlur(e)},this._onValueChange=e=>{const t=e.target.value;if(void 0!==this.props.onEmptyString&&""===t&&this.props.onEmptyString(),"integer"===this.props.mode&&!h.test(t))return;const n=b(t,this.props.formatter),r=n.res?this._checkValueBoundaries(n.value):{value:!1},o=n.res&&!r.value,s=n.res&&n.suggest&&!this.state.focused?n.suggest:t,a=o&&r.msg?r.msg:p;this.setState({displayValue:s,errorMsg:a}),n.res&&r.value&&this.props.onValueChange(n.value,"input"),this.props.errorHandler&&this.props.errorHandler(!n.res||o)},this._onValueByStepChange=e=>{const{roundByStep:t=!0,step:n=1,uiStep:r,min:o=n,formatter:s}=this.props,i=b(this.state.displayValue,s),l=null!=r?r:n;let c=n;if(i.res){const r=new a.Big(i.value),s=r.minus(o).mod(n);let u=r.plus(e*l);!s.eq(0)&&t&&(u=u.plus((e>0?0:1)*l).minus(s)),c=Number(u)}this._checkValueBoundaries(c).value&&(this.setState({displayValue:f(this.props,c)}),this.props.onValueChange(c,"step")),this.props.errorHandler&&this.props.errorHandler(!1)};const{value:t}=e;this.state={value:t,displayValue:f(e,t),focused:!1,errorMsg:p}}render(){return o.a.createElement(i.a,{inputMode:this.props.inputMode,borderStyle:this.props.borderStyle,fontSizeStyle:this.props.fontSizeStyle,value:this.state.displayValue,forceShowControls:this.props.forceShowControls,className:this.props.className,inputClassName:this.props.inputClassName,button:this.props.button,placeholder:this.props.placeholder,innerLabel:this.props.innerLabel,endSlot:this.props.endSlot,disabled:this.props.disabled,error:this.props.error,errorMessage:this.props.errorMessage||this.state.errorMsg,onValueChange:this._onValueChange,onValueByStepChange:this._onValueByStepChange,containerReference:this.props.containerReference,inputReference:this.props.inputReference,onClick:this.props.onClick,onFocus:this._onFocus,onBlur:this._onBlur,onKeyDown:this.props.onKeyDown,controlDecKeyCodes:this.props.controlDecKeyCodes,controlIncKeyCodes:this.props.controlIncKeyCodes,title:this.props.title,intent:this.props.intent,highlight:this.props.highlight,highlightRemoveRoundBorder:this.props.highlightRemoveRoundBorder,stretch:this.props.stretch})}getClampedValue(){const{min:e=-1/0,max:t=m}=this.props,n=b(this.state.displayValue,this.props.formatter);return n.res?Object(u.clamp)(n.value,e,t):null}static getDerivedStateFromProps(e,t){const{alwaysUpdateValueFromProps:n,value:r}=e;return t.focused&&!n||t.value===r?null:{value:r,displayValue:f(e,r)}}_checkValueBoundaries(e){const{min:t=-1/0,max:n=m}=this.props,r=function(e,t,n){const r=e>=t,o=e<=n;return{passMin:r,passMax:o,pass:r&&o,
clamped:Object(u.clamp)(e,t,n)}}(e,t,n),o=r.passMax?r.passMin?void 0:Object(s.t)("Specified value is less than the instrument minimum of {min}.").format({min:String(t)}):Object(s.t)("Specified value is more than the instrument maximum of {max}.").format({max:String(n)});return{value:r.pass,msg:o}}}function f(e,t){const{useFormatter:n=!0,formatter:r,mode:o}=e;return n&&"integer"!==o?function(e,t=d){return null!==e?t.format(e):""}(t,r):function(e){if(null===e)return"";return c.NumericFormatter.formatNoE(e)}(t)}function b(e,t=d){return t.parse?t.parse(e):{res:!1,error:"Formatter does not support parse"}}},zcN6:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n("q1tI"),o=n("TSYQ"),s=n("ldG2"),a=n("xADF"),i=n("dKnb"),l=n("jh7f"),c=n("VET0"),u=n("ZgM/");const p={large:s.b.FontSizeLarge,medium:s.b.FontSizeMedium},d={attachment:c.a.top.attachment,targetAttachment:c.a.top.targetAttachment,attachmentOffsetY:-4};function h(e){const{className:t,inputClassName:n,stretch:s=!0,errorMessage:c,fontSizeStyle:h="large",endSlot:m,button:g,error:f,warning:b,innerLabel:S,inputReference:v,children:y,...C}=e,B=f&&void 0!==c?[c]:void 0,V=b&&void 0!==c?[c]:void 0,N=o(u.inputContainer,p[h],t),F=S?r.createElement(a.d,{className:u.innerLabel,interactive:!1},S):void 0,E=m||g||y?r.createElement(a.b,null,m,g,y):void 0;return r.createElement(i.a,{...C,className:N,inputClassName:n,errors:B,warnings:V,hasErrors:f,hasWarnings:b,messagesPosition:l.a.Attached,customErrorsAttachment:d,messagesRoot:"document",inheritMessagesWidthFromTarget:!0,disableMessagesRtlStyles:!0,iconHidden:!0,stretch:s,reference:v,startSlot:F,endSlot:E})}}}]);