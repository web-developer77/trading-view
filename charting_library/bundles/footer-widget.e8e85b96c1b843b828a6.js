(window.webpackJsonp=window.webpackJsonp||[]).push([["footer-widget"],{"+EG+":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s}));var i=n("q1tI");class o extends i.Component{shouldComponentUpdate(){return!1}render(){return i.createElement("div",{style:{position:"fixed",zIndex:150,left:0,top:0},ref:this.props.reference})}}const s=i.createContext(null)},"/q/I":function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" d="M7 20h14v1H7z"/></svg>'},"8Rai":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n("q1tI"),o=n("R5JZ");function s(e){const{click:t,mouseDown:n,touchEnd:s,touchStart:r,handler:a,reference:c,ownerDocument:l=document}=e,u=Object(i.useRef)(null),d=Object(i.useRef)(new CustomEvent("timestamp").timeStamp);return Object(i.useLayoutEffect)(()=>{const e={click:t,mouseDown:n,touchEnd:s,touchStart:r},i=c?c.current:u.current;return Object(o.a)(d.current,i,a,l,e)},[t,n,s,r,a]),c||u}},"9dlw":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var i=n("q1tI"),o=n.n(i),s=n("i8i4"),r=n.n(s),a=n("AiMB"),c=n("DTHj"),l=n("X0gx"),u=n("8Rai");function d(e){const{controller:t,children:n,isOpened:s,closeOnClickOutside:d=!0,doNotCloseOn:h,onClickOutside:m,onClose:p,...v}=e,g=Object(i.useContext)(l.a),f=Object(u.a)({handler:function(e){m&&m(e);if(!d)return;if(h&&e.target instanceof Node){const t=r.a.findDOMNode(h);if(t instanceof Node&&t.contains(e.target))return}p()},mouseDown:!0,touchStart:!0});return s?o.a.createElement(a.a,{top:"0",left:"0",right:"0",bottom:"0",pointerEvents:"none"},o.a.createElement("span",{ref:f,style:{pointerEvents:"auto"}},o.a.createElement(c.b,{...v,onClose:p,onScroll:function(t){const{onScroll:n}=e;n&&n(t)},customCloseDelegate:g,ref:t},n))):null}},AiMB:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l}));var i=n("q1tI"),o=n("i8i4"),s=n("e3/o"),r=n("jAh7"),a=n("+EG+");class c extends i.PureComponent{constructor(){super(...arguments),this._uuid=Object(s.guid)()}componentWillUnmount(){this._manager().removeWindow(this._uuid)}render(){const e=this._manager().ensureWindow(this._uuid,this.props.layerOptions);return e.style.top=this.props.top||"",e.style.bottom=this.props.bottom||"",e.style.left=this.props.left||"",e.style.right=this.props.right||"",e.style.pointerEvents=this.props.pointerEvents||"",o.createPortal(i.createElement(l.Provider,{value:this},this.props.children),e)}moveToTop(){this._manager().moveToTop(this._uuid)}_manager(){return null===this.context?Object(r.b)():this.context}}c.contextType=a.b;const l=i.createContext(null)},H19F:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" width="19" height="12" fill="none"><path stroke="currentColor" d="M1 8l8.5-6.5L18 8"/></svg>'},HWhk:function(e,t){
e.exports='<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M7.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM5 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm9.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM12 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm9.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM19 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z"/></svg>'},Iivm:function(e,t,n){"use strict";var i=n("q1tI");const o=i.forwardRef((e,t)=>{const{icon:n="",...o}=e;return i.createElement("span",{...o,ref:t,dangerouslySetInnerHTML:{__html:n}})});n.d(t,"a",(function(){return o}))},LPTw:function(e,t,n){e.exports={tabbar:"tabbar-37voAVwR",tabs:"tabs-37voAVwR",compact:"compact-37voAVwR",fakeTabs:"fakeTabs-37voAVwR",tab:"tab-37voAVwR",menuButtonWrap:"menuButtonWrap-37voAVwR",hover:"hover-37voAVwR",active:"active-37voAVwR",title:"title-37voAVwR",menuButton:"menuButton-37voAVwR",titleText:"titleText-37voAVwR"}},N5tr:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var i=n("q1tI"),o=n.n(i),s=n("TSYQ"),r=n("tWVy"),a=n("JWMC"),c=n("ijHL"),l=n("v1bN");const u=l;function d(e){const{reference:t,...n}=e,i={...n,ref:t};return o.a.createElement(e.href?"a":"div",i)}function h(e){e.stopPropagation()}function m(e){const{id:t,role:n,"aria-selected":u,className:m,title:p,labelRowClassName:v,labelClassName:g,shortcut:f,forceShowShortcuts:b,icon:_,isActive:w,isDisabled:E,isHovered:x,appearAsDisabled:N,label:T,link:k,showToolboxOnHover:O,target:W,rel:C,toolbox:M,reference:y,onMouseOut:z,onMouseOver:B,suppressToolboxClick:I=!0,theme:A=l}=e,j=Object(c.b)(e),R=Object(i.useRef)(null);return o.a.createElement(d,{...j,id:t,role:n,"aria-selected":u,className:s(m,A.item,_&&A.withIcon,{[A.isActive]:w,[A.isDisabled]:E||N,[A.hovered]:x}),title:p,href:k,target:W,rel:C,reference:function(e){R.current=e,"function"==typeof y&&y(e);"object"==typeof y&&(y.current=e)},onClick:function(t){const{dontClosePopup:n,onClick:i,onClickArg:o,trackEventObject:s}=e;if(E)return;s&&Object(a.trackEvent)(s.category,s.event,s.label);i&&i(o,t);n||Object(r.b)()},onContextMenu:function(t){const{trackEventObject:n,trackRightClick:i}=e;n&&i&&Object(a.trackEvent)(n.category,n.event,n.label+"_rightClick")},onMouseUp:function(t){const{trackEventObject:n,trackMouseWheelClick:i}=e;if(1===t.button&&k&&n){let e=n.label;i&&(e+="_mouseWheelClick"),Object(a.trackEvent)(n.category,n.event,e)}},onMouseOver:B,onMouseOut:z},void 0!==_&&o.a.createElement("div",{className:A.icon,dangerouslySetInnerHTML:{__html:_}}),o.a.createElement("div",{className:s(A.labelRow,v)},o.a.createElement("div",{className:s(A.label,g)},T)),(void 0!==f||b)&&o.a.createElement("div",{className:A.shortcut},(D=f)&&D.split("+").join(" + ")),void 0!==M&&o.a.createElement("div",{onClick:I?h:void 0,className:s(A.toolbox,{[A.showOnHover]:O})},M));var D}},R5JZ:function(e,t,n){"use strict";function i(e,t,n,i,o){function s(o){if(e>o.timeStamp)return;const s=o.target
;void 0!==n&&null!==t&&null!==s&&s.ownerDocument===i&&(t.contains(s)||n(o))}return o.click&&i.addEventListener("click",s,!1),o.mouseDown&&i.addEventListener("mousedown",s,!1),o.touchEnd&&i.addEventListener("touchend",s,!1),o.touchStart&&i.addEventListener("touchstart",s,!1),()=>{i.removeEventListener("click",s,!1),i.removeEventListener("mousedown",s,!1),i.removeEventListener("touchend",s,!1),i.removeEventListener("touchstart",s,!1)}}n.d(t,"a",(function(){return i}))},YQff:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" fill="none"><path stroke="currentColor" d="M17.5 3.5v-1a2 2 0 0 0-2-2h-13a2 2 0 0 0-2 2v1m17 0v10a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-10m17 0H.5"/></svg>'},d9HZ:function(e,t,n){e.exports={"css-value-footer-widget-horizontal-margin":"4px",footerPanel:"footerPanel-3rEcU9Zs",tabs:"tabs-3rEcU9Zs",buttons:"buttons-3rEcU9Zs",hidden:"hidden-3rEcU9Zs",button:"button-3rEcU9Zs",hover:"hover-3rEcU9Zs",maximizeButton:"maximizeButton-3rEcU9Zs",active:"active-3rEcU9Zs",overlap:"overlap-3rEcU9Zs"}},ijHL:function(e,t,n){"use strict";function i(e){return s(e,r)}function o(e){return s(e,a)}function s(e,t){const n=Object.entries(e).filter(t),i={};for(const[e,t]of n)i[e]=t;return i}function r(e){const[t,n]=e;return 0===t.indexOf("data-")&&"string"==typeof n}function a(e){return 0===e[0].indexOf("aria-")}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"e",(function(){return r})),n.d(t,"d",(function(){return a}))},jAh7:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return a}));var i=n("Eyy1");class o{constructor(){this._storage=[]}add(e){this._storage.push(e)}remove(e){this._storage=this._storage.filter(t=>e!==t)}has(e){return this._storage.includes(e)}getItems(){return this._storage}}class s{constructor(e=document){this._storage=new o,this._windows=new Map,this._index=0,this._document=e,this._container=e.createDocumentFragment()}setContainer(e){const t=this._container,n=null===e?this._document.createDocumentFragment():e;!function(e,t){Array.from(e.childNodes).forEach(e=>{e.nodeType===Node.ELEMENT_NODE&&t.appendChild(e)})}(t,n),this._container=n}registerWindow(e){this._storage.has(e)||this._storage.add(e)}ensureWindow(e,t={position:"fixed",direction:"normal"}){const n=this._windows.get(e);if(void 0!==n)return n;this.registerWindow(e);const i=this._document.createElement("div");if(i.style.position=t.position,i.style.zIndex=this._index.toString(),i.dataset.id=e,void 0!==t.index){const e=this._container.childNodes.length;if(t.index>=e)this._container.appendChild(i);else if(t.index<=0)this._container.insertBefore(i,this._container.firstChild);else{const e=this._container.childNodes[t.index];this._container.insertBefore(i,e)}}else"reverse"===t.direction?this._container.insertBefore(i,this._container.firstChild):this._container.appendChild(i);return this._windows.set(e,i),++this._index,i}unregisterWindow(e){this._storage.remove(e);const t=this._windows.get(e)
;void 0!==t&&(null!==t.parentElement&&t.parentElement.removeChild(t),this._windows.delete(e))}getZindex(e){const t=this.ensureWindow(e);return parseInt(t.style.zIndex||"0")}moveToTop(e){if(this.getZindex(e)!==this._index){this.ensureWindow(e).style.zIndex=(++this._index).toString()}}removeWindow(e){this.unregisterWindow(e)}}const r=new WeakMap;function a(e=document){const t=e.getElementById("overlap-manager-root");if(null!==t)return Object(i.ensureDefined)(r.get(t));{const t=new s(e),n=function(e){const t=e.createElement("div");return t.style.position="absolute",t.style.zIndex=150..toString(),t.style.top="0px",t.style.left="0px",t.id="overlap-manager-root",t}(e);return r.set(n,t),t.setContainer(n),e.body.appendChild(n),t}}},lAWZ:function(e,t,n){e.exports={"css-value-footer-widget-horizontal-margin":"4px"}},r5PD:function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),o=n("i8i4"),s=n("TSYQ"),r=n("9dlw"),a=n("N5tr"),c=n("Iivm"),l=n("Eyy1"),u=n("JWMC"),d=n("LPTw");class h extends i.PureComponent{constructor(){super(...arguments),this._ref=e=>{const{name:t,reference:n}=this.props;n&&n(t,e)},this._onToggle=()=>{this._toggleWidget()},this._activationCallback=()=>{this._toggleWidget(!0)}}render(){const{name:e,isActive:t,title:n,customTitleComponent:o,buttonOpenTooltip:r,buttonCloseTooltip:a,dataName:c,compact:l}=this.props,u=t?a:r,h=o;return i.createElement("div",{className:s(d.tab,h&&d.customTab,u&&"apply-common-tooltip",t&&d.active),title:u,ref:this._ref},h?i.createElement(h,{onClick:this._onToggle,activationCallback:this._activationCallback,isActive:t,dataName:c,compact:l}):i.createElement("div",{onClick:this._onToggle,className:d.title,"data-name":this.props.dataName,"data-active":t},i.createElement("span",{className:d.titleText},n||e)))}_toggleWidget(e){const{name:t,onToggle:n,_gaEvent:i}=this.props;i&&Object(u.trackEvent)("Platform widgets",i),n(t,e)}}var m=n("HWhk");class p extends i.PureComponent{constructor(e){super(e),this._menuButton=null,this._fakeTabs={},this._fakeMenuButton=null,this._refFakeTabs=(e,t)=>{this._fakeTabs[e]=t},this._refFakeMenuButton=e=>{this._fakeMenuButton=e},this._refMenuButton=e=>{this._menuButton=e},this._resize=e=>{if(!e)return;const t=Object(l.ensureNotNull)(this._fakeMenuButton).offsetWidth,{activeWidgetName:n}=this.props;let i=[],o=[],s=0;"string"==typeof n&&(o=[n],s=Object(l.ensureNotNull)(this._fakeTabs[n]).offsetWidth);const r=this.props.widgets.map(e=>e.name),a=r.filter(e=>e!==n);let c=!1;a.forEach(n=>{if(!this._fakeTabs[n])return;const a=Object(l.ensureNotNull)(this._fakeTabs[n]).offsetWidth,u=r.length-o.length==1?e:e-t;!c&&s+a<u?(s+=a,o.push(n)):(c=!0,i.push(n))}),0===o.length&&(o=[r[0]],i=i.filter(e=>e!==r[0])),o=r.filter(e=>o.includes(e)),this.setState({visibleTabs:o,hiddenTabs:i})},this._onToggle=(e,t)=>{void 0!==e&&(this.props.setActiveWidget(e,t),this._resize(this.props.width))},this._getDropdownPosition=()=>{const e=Object(l.ensureNotNull)(this._menuButton).getBoundingClientRect();return{x:e.left,y:e.top+e.height}},this._onMenuClick=e=>{this._onToggle(e,!0)},
this._toggleMenu=()=>{this.setState(e=>({isMenuOpened:!e.isMenuOpened}))},this.state={visibleTabs:[],hiddenTabs:[],isMenuOpened:!1}}componentDidMount(){this._resize(this.props.width)}componentDidUpdate(e){const{widgets:t,activeWidgetName:n,width:i}=this.props;e.widgets===t&&e.activeWidgetName===n&&e.width===i||this._resize(i)}getMinWidth(){const e=this.props.activeWidgetName||this.props.widgets[0].name;return Object(l.ensureNotNull)(this._fakeTabs[e]).offsetWidth+Object(l.ensureNotNull)(this._fakeMenuButton).offsetWidth}render(){const{visibleTabs:e}=this.state,{widgets:t,compact:n}=this.props,o=t.filter(t=>e.includes(t.name));return i.createElement("div",{className:d.tabbar},i.createElement("div",{className:s(d.tabs,1===e.length&&n&&d.compact)},this._renderTabs(o,!1)),i.createElement("div",{className:s(d.tabs,d.fakeTabs)},this._renderTabs(t,!0)))}_renderTabs(e,t){const{activeWidgetName:n,compact:o}=this.props,{visibleTabs:r,hiddenTabs:a,isMenuOpened:l}=this.state,u=e.map(e=>i.createElement(h,{...e,key:e.name,isActive:n===e.name,onToggle:this._onToggle,dataName:t?void 0:e.name,reference:t?this._refFakeTabs:void 0,compact:!t&&o&&1===r.length}));return(t||a.length>0)&&u.push(i.createElement("div",{key:"menu-button",className:d.menuButtonWrap,ref:t?this._refFakeMenuButton:this._refMenuButton},i.createElement("div",{className:s(d.menuButton,l&&d.active),onClick:this._toggleMenu},i.createElement(c.a,{icon:m})))),!t&&a.length>0&&u.push(this._renderMenu()),u}_renderMenu(){const{widgets:e}=this.props,{hiddenTabs:t,isMenuOpened:n}=this.state,o=e.filter(e=>t.includes(e.name)).map(e=>i.createElement(a.b,{key:e.name,onClick:this._onMenuClick,onClickArg:e.name,label:e.title||e.name}));return i.createElement(r.a,{key:"menu-dropdown",isOpened:n,doNotCloseOn:this._menuButton,onClose:this._toggleMenu,position:this._getDropdownPosition},o)}}var v=n("XAms"),g=n("lAWZ");const f=parseInt(g["css-value-footer-widget-horizontal-margin"]);n("YFKU");var b=n("/q/I"),_=n("H19F"),w=n("YQff"),E=n("d9HZ");const x={context:"close-button"},N=window.t("Show",x),T=window.t("Hide",x),k=window.t("Toggle Maximize",x);class O extends i.PureComponent{constructor(e){super(e),this._updateMode=()=>{this.setState({mode:this.props.mode.value()})},this.state={mode:e.mode.value()}}componentDidMount(){this.props.mode.subscribe(this._updateMode)}componentWillUnmount(){this.props.mode.unsubscribe(this._updateMode)}render(){const{toggleMinimize:e,toggleMaximize:t}=this.props,{mode:n}=this.state,o="minimized"===n,r="maximized"===n;return i.createElement(i.Fragment,null,i.createElement("button",{className:s(E.button,E.minimizeButton,"apply-common-tooltip",{[E.active]:o}),title:o?N:T,onClick:e,tabIndex:-1,"data-name":"toggle-visibility-button","data-active":o},i.createElement(c.a,{icon:o?_:b})),i.createElement("button",{className:s(E.button,E.maximizeButton,"apply-common-tooltip",{[E.active]:r}),title:k,onClick:t,tabIndex:-1,"data-name":"toggle-maximize-button","data-active":r},i.createElement(c.a,{icon:w})))}}class W extends i.PureComponent{constructor(e){super(e),
this._tabs=null,this._buttons=null,this._refTabs=e=>{this._tabs=e},this._refButtons=e=>{this._buttons=e},this._handleMode=e=>{this.setState({isOpened:"minimized"!==e})},this._handleOverlap=e=>{this.setState({isOverlap:e})},this._handleActiveWidgetName=e=>{const{resizerBridge:t}=this.props;this.setState({activeWidgetName:e},()=>this._resize(t.width.value()))},this._setActiveWidget=(e,t)=>{this.props.bottomWidgetBar.toggleWidget(e,t)},this._resize=e=>{if(!e)return;e-=f+f;const t=Object(l.ensureNotNull)(this._tabs).getMinWidth()+Object(l.ensureNotNull)(this._buttons).offsetWidth<=e;this.setState({width:e,showButtons:t})};const{bottomWidgetBar:t,resizerBridge:n}=this.props;this.state={isOpened:"minimized"!==t.mode().value(),isOverlap:t.isOverlap().value(),activeWidgetName:t.activeWidget().value(),width:n.width.value(),showButtons:!1}}componentDidMount(){const{bottomWidgetBar:e,resizerBridge:t}=this.props;e.mode().subscribe(this._handleMode),e.isOverlap().subscribe(this._handleOverlap),e.activeWidget().subscribe(this._handleActiveWidgetName),t.width.subscribe(this._resize),this._resize(t.width.value())}componentWillUnmount(){const{bottomWidgetBar:e,resizerBridge:t}=this.props;e.mode().unsubscribe(this._handleMode),e.isOverlap().unsubscribe(this._handleOverlap),e.activeWidget().unsubscribe(this._handleActiveWidgetName),t.width.unsubscribe(this._resize)}render(){const{bottomWidgetBar:e}=this.props,{isOverlap:t,activeWidgetName:n,width:o,showButtons:r}=this.state,a=this._buttons?this._buttons.offsetWidth:0,c=e.enabledWidgets(),l="minimized"!==e.mode().value()&&n;return i.createElement("div",{id:"footer-chart-panel",className:s(E.footerPanel,t&&E.overlap),onContextMenu:v.a},i.createElement(p,{ref:this._refTabs,widgets:c,activeWidgetName:l,setActiveWidget:this._setActiveWidget,close:e.close,width:o-a,compact:!r}),i.createElement("div",{className:s(E.buttons,!r&&E.hidden),ref:this._refButtons},i.createElement(O,{toggleMinimize:e.toggleMinimize,toggleMaximize:e.toggleMaximize,mode:e.mode()})))}}n.d(t,"FooterWidgetRenderer",(function(){return C}));class C{constructor(e,t,n){this._component=null,this._handleRef=e=>this._component=e,this._container=e;const s=i.createElement(W,{resizerBridge:t,bottomWidgetBar:n,ref:this._handleRef});o.render(s,this._container)}getComponent(){return Object(l.ensureNotNull)(this._component)}destroy(){o.unmountComponentAtNode(this._container)}}},v1bN:function(e,t,n){e.exports={"tablet-small-breakpoint":"screen and (max-width: 428px)",item:"item-2IihgTnv",hovered:"hovered-2IihgTnv",isDisabled:"isDisabled-2IihgTnv",isActive:"isActive-2IihgTnv",shortcut:"shortcut-2IihgTnv",toolbox:"toolbox-2IihgTnv",withIcon:"withIcon-2IihgTnv",icon:"icon-2IihgTnv",labelRow:"labelRow-2IihgTnv",label:"label-2IihgTnv",showOnHover:"showOnHover-2IihgTnv"}}}]);