(window.webpackJsonp=window.webpackJsonp||[]).push([["news-description-dialog"],{"+EG+":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s}));var r=n("q1tI");class o extends r.Component{shouldComponentUpdate(){return!1}render(){return r.createElement("div",{style:{position:"fixed",zIndex:150,left:0,top:0},ref:this.props.reference})}}const s=r.createContext(null)},"/1KR":function(e,t,n){e.exports={title:"title-2-Un7Upl",body:"body-2-Un7Upl"}},"/KDZ":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("q1tI");class o extends r.PureComponent{constructor(e){super(e),this._handleChange=()=>{this.forceUpdate()},this.state={query:window.matchMedia(this.props.rule)}}componentDidMount(){this._subscribe(this.state.query)}componentDidUpdate(e,t){this.state.query!==t.query&&(this._unsubscribe(t.query),this._subscribe(this.state.query))}componentWillUnmount(){this._unsubscribe(this.state.query)}render(){return this.props.children(this.state.query.matches)}static getDerivedStateFromProps(e,t){return e.rule!==t.query.media?{query:window.matchMedia(e.rule)}:null}_subscribe(e){e.addListener(this._handleChange)}_unsubscribe(e){e.removeListener(this._handleChange)}}},"1O6C":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("q1tI"),o=n("TSYQ"),s=n("+EG+"),i=n("jAh7"),c=n("ijHL"),a=n("aYmi");class u extends r.PureComponent{constructor(){super(...arguments),this._manager=new i.a,this._handleSlot=e=>{this._manager.setContainer(e)}}render(){const{rounded:e=!0,shadowed:t=!0,fullscreen:n=!1,darker:i=!1,className:u,backdrop:d}=this.props,l=o(u,a.dialog,e&&a.rounded,t&&a.shadowed,n&&a.fullscreen,i&&a.darker),h=Object(c.b)(this.props),p=this.props.style?{...this._createStyles(),...this.props.style}:this._createStyles();return r.createElement(r.Fragment,null,r.createElement(s.b.Provider,{value:this._manager},d&&r.createElement("div",{onClick:this.props.onClickBackdrop,className:a.backdrop}),r.createElement("div",{...h,className:l,style:p,ref:this.props.reference,onFocus:this.props.onFocus,onMouseDown:this.props.onMouseDown,onMouseUp:this.props.onMouseUp,onClick:this.props.onClick,onKeyDown:this.props.onKeyDown,tabIndex:-1},this.props.children)),r.createElement(s.a,{reference:this._handleSlot}))}_createStyles(){const{bottom:e,left:t,width:n,right:r,top:o,zIndex:s,height:i}=this.props;return{bottom:e,left:t,right:r,top:o,zIndex:s,maxWidth:n,height:i}}}},"1c1/":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),s=n("i8i4"),i=n.n(s),c=n("YFKU"),a=n("TSYQ"),u=n("/KDZ"),d=n("1O6C"),l=n("uqKQ"),h=n("RgaO"),p=n("UJLh");class m extends r.PureComponent{constructor(){super(...arguments),this._containerRef=null,this._handleContainerRef=e=>{this._containerRef=e}}componentDidMount(){var e;this.props.autofocus&&(null===(e=this._containerRef)||void 0===e||e.focus())}render(){const{zIndex:e,onClickOutside:t,children:n,className:o}=this.props;return r.createElement("div",{ref:this._handleContainerRef,style:{zIndex:e},"data-dialog-name":this.props["data-dialog-name"],
tabIndex:-1},r.createElement("div",{className:p.backdrop}),r.createElement("div",{className:p.wrap},r.createElement("div",{className:p.container},r.createElement(h.a,{mouseDown:!0,touchStart:!0,handler:t},e=>r.createElement("div",{className:p.modal,ref:e},r.createElement(d.a,{...this.props,className:a(o,p.dialog)},n))))))}}m.defaultProps={width:500};const f=Object(l.a)(m);var w=n("oWMF"),v=n("ycI/"),g=n("PwON"),x=n("Ju5u");function E(e){const{className:t,children:n,isOpened:r,maxWidth:s,onCloseIntent:i,closeOnOutsideClick:d=!0,closeOnEsc:l=!0,showCloseButton:h=!0,actions:p,fullscreenMode:m=1}=e,E=c.t("Close",{context:"input"});return o.a.createElement(u.a,{rule:g.a},e=>{const c=0===m||e;return o.a.createElement(f,{width:_(s,c),className:a(x.dialog,t),isOpened:r,onClickOutside:d?i:void 0,fullscreen:c,rounded:!c},h&&o.a.createElement(w.a,{className:x.closeButton,"aria-label":E,onClick:i,size:"m"}),i&&l&&o.a.createElement(v.a,{keyCode:27,handler:i}),"function"==typeof n?n(c):n,p&&o.a.createElement("div",{className:x.actions},p(c)))})}function _(e,t){return t?"100%":e||"100%"}var b=n("/1KR");function y(e){const{title:t,content:n,theme:r=b,header:s,reference:i,relatedSymbols:c}=e;return o.a.createElement("article",null,s,o.a.createElement("h2",{className:r.title},t),c,o.a.createElement("div",{className:r.body,ref:i},n))}var C=n("yEBn");function k(e){const{title:t,description:n}=e;return o.a.createElement(y,{title:t,content:o.a.createElement("div",{className:C.description},n)})}function N(e){const t=document.createElement("div");i.a.render(o.a.createElement(E,{isOpened:!0,onCloseIntent:()=>i.a.unmountComponentAtNode(t),maxWidth:800},o.a.createElement(k,{...e})),t)}n.d(t,"openLibraryNewsDescriptionDialogImpl",(function(){return N}))},"8Rai":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("q1tI"),o=n("R5JZ");function s(e){const{click:t,mouseDown:n,touchEnd:s,touchStart:i,handler:c,reference:a,ownerDocument:u=document}=e,d=Object(r.useRef)(null),l=Object(r.useRef)(new CustomEvent("timestamp").timeStamp);return Object(r.useLayoutEffect)(()=>{const e={click:t,mouseDown:n,touchEnd:s,touchStart:i},r=a?a.current:d.current;return Object(o.a)(l.current,r,c,u,e)},[t,n,s,i,c]),a||d}},AiMB:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return u}));var r=n("q1tI"),o=n("i8i4"),s=n("e3/o"),i=n("jAh7"),c=n("+EG+");class a extends r.PureComponent{constructor(){super(...arguments),this._uuid=Object(s.guid)()}componentWillUnmount(){this._manager().removeWindow(this._uuid)}render(){const e=this._manager().ensureWindow(this._uuid,this.props.layerOptions);return e.style.top=this.props.top||"",e.style.bottom=this.props.bottom||"",e.style.left=this.props.left||"",e.style.right=this.props.right||"",e.style.pointerEvents=this.props.pointerEvents||"",o.createPortal(r.createElement(u.Provider,{value:this},this.props.children),e)}moveToTop(){this._manager().moveToTop(this._uuid)}_manager(){return null===this.context?Object(i.b)():this.context}}a.contextType=c.b;const u=r.createContext(null)},
ByBs:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9" width="9" height="9"><path stroke="currentColor" stroke-width="1.2" d="M1 1l7 7m0-7L1 8"/></svg>'},Iivm:function(e,t,n){"use strict";var r=n("q1tI");const o=r.forwardRef((e,t)=>{const{icon:n="",...o}=e;return r.createElement("span",{...o,ref:t,dangerouslySetInnerHTML:{__html:n}})});n.d(t,"a",(function(){return o}))},Ju5u:function(e,t,n){e.exports={dialog:"dialog-3Q8J4Pu0",closeButton:"closeButton-3Q8J4Pu0",actions:"actions-3Q8J4Pu0"}},KkTf:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17"><path stroke="currentColor" stroke-width="1.2" d="M1 1l15 15m0-15L1 16"/></svg>'},LeKP:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11" width="11" height="11"><path stroke="currentColor" stroke-width="1.2" d="M1 1l9 9m0-9l-9 9"/></svg>'},N9IK:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" width="23" height="23"><path stroke="currentColor" stroke-width="1.2" d="M1 1l21 21m0-21L1 22"/></svg>'},PwON:function(e){e.exports=JSON.parse('{"a":"screen and (max-width: 479px)"}')},R5JZ:function(e,t,n){"use strict";function r(e,t,n,r,o){function s(o){if(e>o.timeStamp)return;const s=o.target;void 0!==n&&null!==t&&null!==s&&s.ownerDocument===r&&(t.contains(s)||n(o))}return o.click&&r.addEventListener("click",s,!1),o.mouseDown&&r.addEventListener("mousedown",s,!1),o.touchEnd&&r.addEventListener("touchend",s,!1),o.touchStart&&r.addEventListener("touchstart",s,!1),()=>{r.removeEventListener("click",s,!1),r.removeEventListener("mousedown",s,!1),r.removeEventListener("touchend",s,!1),r.removeEventListener("touchstart",s,!1)}}n.d(t,"a",(function(){return r}))},RgaO:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("8Rai");function o(e){const{children:t,...n}=e;return t(Object(r.a)(n))}},UJLh:function(e,t,n){e.exports={wrap:"wrap-2qEpRlNG",container:"container-2qEpRlNG",backdrop:"backdrop-2qEpRlNG",modal:"modal-2qEpRlNG",dialog:"dialog-2qEpRlNG"}},aYmi:function(e,t,n){e.exports={dialog:"dialog-UM6w7sFp",rounded:"rounded-UM6w7sFp",shadowed:"shadowed-UM6w7sFp",fullscreen:"fullscreen-UM6w7sFp",darker:"darker-UM6w7sFp",backdrop:"backdrop-UM6w7sFp"}},ijHL:function(e,t,n){"use strict";function r(e){return s(e,i)}function o(e){return s(e,c)}function s(e,t){const n=Object.entries(e).filter(t),r={};for(const[e,t]of n)r[e]=t;return r}function i(e){const[t,n]=e;return 0===t.indexOf("data-")&&"string"==typeof n}function c(e){return 0===e[0].indexOf("aria-")}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return c}))},jAh7:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return c}));var r=n("Eyy1");class o{constructor(){this._storage=[]}add(e){this._storage.push(e)}remove(e){this._storage=this._storage.filter(t=>e!==t)}has(e){return this._storage.includes(e)}getItems(){
return this._storage}}class s{constructor(e=document){this._storage=new o,this._windows=new Map,this._index=0,this._document=e,this._container=e.createDocumentFragment()}setContainer(e){const t=this._container,n=null===e?this._document.createDocumentFragment():e;!function(e,t){Array.from(e.childNodes).forEach(e=>{e.nodeType===Node.ELEMENT_NODE&&t.appendChild(e)})}(t,n),this._container=n}registerWindow(e){this._storage.has(e)||this._storage.add(e)}ensureWindow(e,t={position:"fixed",direction:"normal"}){const n=this._windows.get(e);if(void 0!==n)return n;this.registerWindow(e);const r=this._document.createElement("div");if(r.style.position=t.position,r.style.zIndex=this._index.toString(),r.dataset.id=e,void 0!==t.index){const e=this._container.childNodes.length;if(t.index>=e)this._container.appendChild(r);else if(t.index<=0)this._container.insertBefore(r,this._container.firstChild);else{const e=this._container.childNodes[t.index];this._container.insertBefore(r,e)}}else"reverse"===t.direction?this._container.insertBefore(r,this._container.firstChild):this._container.appendChild(r);return this._windows.set(e,r),++this._index,r}unregisterWindow(e){this._storage.remove(e);const t=this._windows.get(e);void 0!==t&&(null!==t.parentElement&&t.parentElement.removeChild(t),this._windows.delete(e))}getZindex(e){const t=this.ensureWindow(e);return parseInt(t.style.zIndex||"0")}moveToTop(e){if(this.getZindex(e)!==this._index){this.ensureWindow(e).style.zIndex=(++this._index).toString()}}removeWindow(e){this.unregisterWindow(e)}}const i=new WeakMap;function c(e=document){const t=e.getElementById("overlap-manager-root");if(null!==t)return Object(r.ensureDefined)(i.get(t));{const t=new s(e),n=function(e){const t=e.createElement("div");return t.style.position="absolute",t.style.zIndex=150..toString(),t.style.top="0px",t.style.left="0px",t.id="overlap-manager-root",t}(e);return i.set(n,t),t.setContainer(n),e.body.appendChild(n),t}}},oWMF:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n("q1tI"),o=n("TSYQ"),s=n("Iivm"),i=n("N9IK"),c=n("KkTf"),a=n("zvJH"),u=n("LeKP"),d=n("ByBs"),l=n("yMrP");n("wk5D");function h(e="l"){switch(e){case"l":return i;case"m":return c;case"s":return a;case"xs":return u;case"xxs":return d;default:return c}}const p=r.forwardRef((e,t)=>{const{className:n,size:i,...c}=e,a=o(l["close-button"],l["button-"+i],n);return r.createElement("button",{...c,type:"button",className:a,ref:t},r.createElement(s.a,{icon:h(i),className:l["close-icon"]}))})},uqKQ:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("q1tI"),o=n("AiMB");function s(e){return class extends r.PureComponent{render(){const{isOpened:t,root:n}=this.props;if(!t)return null;const s=r.createElement(e,{...this.props,zIndex:150});return"parent"===n?s:r.createElement(o.a,null,s)}}}},wk5D:function(e,t,n){},yEBn:function(e,t,n){e.exports={description:"description-vdtPsa1P"}},yMrP:function(e){
e.exports=JSON.parse('{"close-button":"close-button-1WFSq2PU","close-icon":"close-icon-3unB1Yrw","button-l":"button-l-uIo2rThA","button-m":"button-m-3MMteafV","button-s":"button-s-Nv9EL6Kl","button-xs":"button-xs-3f-PiL7F","button-xxs":"button-xxs-1ElYVuPk"}')},"ycI/":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("q1tI");class o extends r.PureComponent{constructor(){super(...arguments),this._handleKeyDown=e=>{e.keyCode===this.props.keyCode&&this.props.handler(e)}}componentDidMount(){document.addEventListener(this.props.eventType||"keydown",this._handleKeyDown,!1)}componentWillUnmount(){document.removeEventListener(this.props.eventType||"keydown",this._handleKeyDown,!1)}render(){return null}}},zvJH:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path stroke="currentColor" stroke-width="1.2" d="M1 1l11 11m0-11L1 12"/></svg>'}}]);