(window.webpackJsonp=window.webpackJsonp||[]).push([["source-properties-editor"],{CbZh:function(e,t,n){"use strict";n.r(t);n("YFKU");var i=n("q1tI"),o=n("i8i4"),s=n("FQhm"),a=n("Eyy1"),r=(n("bSeV"),n("qFKp")),l=n("Vdly"),c=n.n(l),d=n("ycFu"),u=n("tWVy"),h=n("aDg1"),p=n("pLAj"),m=n("tmL0"),g=n("CW80"),b=n("vHME"),_=n("3ClC"),C=n("qJq3"),f=n("Ss5c"),v=n("GVHu"),S=n("/KDZ"),y=n("LWBq"),I=n("ttKw");class P extends i.PureComponent{constructor(e){super(e),this._activePageRef=i.createRef(),this._getActionPageById=e=>{if(!e)return;const{pages:t}=this.props;return t.find(t=>t.id.toLowerCase()===e.toLowerCase())},this._onChangeActivePageDefinitions=()=>{this.setState({tableKey:Date.now()},()=>{this._requestResize&&this._requestResize()})},this._renderFooterLeft=()=>{const{source:e,model:t}=this.props;return Object(g.isLineTool)(e)?i.createElement(p.a,{source:e,model:t}):i.createElement(S.a,{rule:"screen and (max-width: 428px)"},n=>Object(_.isStudy)(e)&&i.createElement(b.a,{model:t,source:e,mode:n?"compact":"normal"}))},this._subscribe=e=>{e&&e.definitions.subscribe(this._onChangeActivePageDefinitions)},this._unsubscribe=e=>{e&&e.definitions.unsubscribe(this._onChangeActivePageDefinitions)},this._getActiveTabSettingsName=()=>{const{source:e}=this.props;return e instanceof C.Series?"properties_dialog.active_tab.chart":e instanceof f.LineDataSource?"properties_dialog.active_tab.drawing":e instanceof v.Study?"properties_dialog.active_tab.study":""},this._handleSelectPage=e=>{const{activePageId:t}=this.state,n=this._getActionPageById(t),i=this._getActionPageById(e),o=this._getActiveTabSettingsName();t!==e&&(this._unsubscribe(n),o&&c.a.setValue(o,e),this._subscribe(i),this.setState({activePageId:e,tableKey:Date.now()},()=>{this._requestResize&&this._requestResize(),this._focusActivePageFirstTextInput()}))},this._handleScroll=()=>{u.a.fire()},this._handleSubmit=()=>{this.props.onSubmit(),this._closePopupDialog()},this._closePopupDialog=()=>{window.lineToolPropertiesToolbar&&window.lineToolPropertiesToolbar.refresh(),this.props.onClose()};const{pages:t}=this.props;let n;if(this._getActionPageById(this.props.activePageId))n=Object(a.ensureDefined)(this.props.activePageId);else{const e=c.a.getValue(this._getActiveTabSettingsName(),""),i=this._getActionPageById(e);n=i?i.id:t[0].id}this.state={activePageId:n,tableKey:Date.now()},window.lineToolPropertiesToolbar&&window.lineToolPropertiesToolbar.hide()}componentDidMount(){const{activePageId:e}=this.state,t=this._getActionPageById(e);this._focusActivePageFirstTextInput(),this._subscribe(t)}componentWillUnmount(){const{activePageId:e}=this.props,t=this._getActionPageById(e);clearTimeout(this._timeout),this._unsubscribe(t)}render(){var e;const{source:t,onCancel:n}=this.props,{activePageId:o}=this.state,s=(null===(e=t.properties().title)||void 0===e?void 0:e.value())||t.title();return i.createElement(d.AdaptiveConfirmDialog,{dataName:"source-properties-editor",title:s,isOpened:!0,onSubmit:this._handleSubmit,onCancel:n,onClickOutside:this._handleSubmit,onClose:this._closePopupDialog,
footerLeftRenderer:this._renderFooterLeft,render:this._renderChildren(o),submitOnEnterKey:!1})}_renderChildren(e){return({requestResize:t})=>{this._requestResize=t;const{pages:n}=this.props,o={allIds:n.map(e=>e.id),byId:n.reduce((e,t)=>({...e,[t.id]:{title:t.title}}),{})},s=n.find(t=>t.id===e);return i.createElement(i.Fragment,null,i.createElement(h.a,{activeTabId:e,onSelect:this._handleSelectPage,tabs:o}),i.createElement(m.a,{className:I.scrollable,onScroll:this._handleScroll},i.createElement(y.a,{page:s,pageRef:this._activePageRef,tableKey:this.state.tableKey})))}}_focusActivePageFirstTextInput(){if(!r.CheckMobile.any()&&this._activePageRef.current){const e=this._activePageRef.current.querySelector("input[type=text],textarea");e&&(this._timeout=setTimeout(()=>{e.focus()},0))}}}var A=n("sQaR");n.d(t,"SourcePropertiesEditorRenderer",(function(){return w}));class w extends A.a{constructor(e){super(),this._timeout=null,this._handleClose=()=>{o.unmountComponentAtNode(this._container),this._setVisibility(!1),this._onClose&&this._onClose(),this._subscription.unsubscribe(this,this._handleCollectionChanged)},this._handleSubmit=()=>{const e=this._source;Object(g.isLineTool)(e)&&e.hasAlert.value()&&setTimeout(()=>{e.localAndServerAlertsMismatch&&e.synchronizeAlert(!0)})},this._handleCancel=()=>{this._model.undoToCheckpoint(this._checkpoint)},this._propertyPages=e.propertyPages,this._model=e.model,this._activePageId=e.activePageId,this._onClose=e.onClose,this._source=e.source,this._checkpoint=this._ensureCheckpoint(e.undoCheckPoint),this._subscription=this._model.model().dataSourceCollectionChanged(),this._subscription.subscribe(this,this._handleCollectionChanged)}hide(e){e?this._handleCancel():this._handleSubmit(),this._handleClose()}isVisible(){return this.visible().value()}show(){o.render(i.createElement(P,{source:this._source,onSubmit:this._handleSubmit,onClose:this._handleClose,onCancel:this._handleCancel,pages:this._propertyPages,model:this._model,activePageId:this._activePageId}),this._container),this._setVisibility(!0),s.emit("drawings_settings_dialog",{objectType:"drawing",scriptTitle:this._source.title()})}_handleCollectionChanged(){null===this._timeout&&(this._timeout=setTimeout(()=>{this._closeDialogIfSourceIsDeleted(),this._timeout=null}))}_closeDialogIfSourceIsDeleted(){null===this._model.model().dataSourceForId(this._source.id())&&this._handleClose()}_ensureCheckpoint(e){return void 0===e&&(e=this._model.createUndoCheckpoint()),e}}},WboT:function(e,t,n){"use strict";var i=n("q1tI"),o=n.n(i),s=n("8+VR"),a=n("zcN6"),r=n("TSYQ"),l=n("YFKU"),c=n("Iivm"),d=n("R4+T"),u=n("uZsJ");function h(e){const t=r(u.control,u.controlIncrease),n=r(u.control,u.controlDecrease);return i.createElement(i.Fragment,null,void 0!==e.title&&i.createElement("div",{className:u.title},e.title),i.createElement("div",{className:u.controlWrapper},(e.defaultButtonsVisible||e.title)&&i.createElement(i.Fragment,null,i.createElement("button",{type:"button",tabIndex:-1,"aria-label":Object(l.t)("Increase"),className:t,onClick:e.increaseValue
},i.createElement(c.a,{icon:d,className:u.controlIcon})),i.createElement("button",{type:"button",tabIndex:-1,"aria-label":Object(l.t)("Increase"),className:n,onClick:e.decreaseValue},i.createElement(c.a,{icon:d,className:u.controlIcon})))))}var p=n("8d0Q"),m=n("SpAO"),g=n("3F0O"),b=n("/3z9");n.d(t,"a",(function(){return f}));const _=[38],C=[40];function f(e){const[t,n]=Object(p.c)(),[r,l]=Object(m.a)(),c=Object(g.a)(l.onFocus,e.onFocus),d=Object(g.a)(l.onBlur,e.onBlur),u=Object(i.useCallback)(t=>{!e.disabled&&r&&(t.preventDefault(),t.deltaY<0?e.onValueByStepChange(1):e.onValueByStepChange(-1))},[r,e.disabled,e.onValueByStepChange]);return o.a.createElement(a.a,{...n,name:e.name,pattern:e.pattern,borderStyle:e.borderStyle,fontSizeStyle:e.fontSizeStyle,value:e.value,className:e.className,inputClassName:e.inputClassName,button:function(){const{button:n,forceShowControls:i,disabled:a,title:l}=e,c=!a&&!s.mobiletouch&&(i||r||t);return a?void 0:o.a.createElement(o.a.Fragment,null,null!=n?n:o.a.createElement(h,{increaseValue:f,decreaseValue:v,defaultButtonsVisible:c,title:l}))}(),disabled:e.disabled,placeholder:e.placeholder,innerLabel:e.innerLabel,endSlot:e.endSlot,containerReference:e.containerReference,inputReference:e.inputReference,inputMode:e.inputMode,type:e.type,error:e.error,errorMessage:e.errorMessage,onClick:e.onClick,onFocus:c,onBlur:d,onChange:e.onValueChange,onKeyDown:function(t){if(e.disabled||0!==Object(b.modifiersFromEvent)(t.nativeEvent))return;let n=_,i=C;e.controlDecKeyCodes&&(i=i.concat(e.controlDecKeyCodes));e.controlIncKeyCodes&&(n=n.concat(e.controlIncKeyCodes));(i.includes(t.keyCode)||n.includes(t.keyCode))&&(t.preventDefault(),e.onValueByStepChange(i.includes(t.keyCode)?-1:1));e.onKeyDown&&e.onKeyDown(t)},onWheelNoPassive:u,stretch:e.stretch,intent:e.intent,highlight:e.highlight,highlightRemoveRoundBorder:e.highlightRemoveRoundBorder,autoSelectOnFocus:!0});function f(){e.disabled||e.onValueByStepChange(1)}function v(){e.disabled||e.onValueByStepChange(-1)}}},"ZgM/":function(e,t,n){e.exports={innerLabel:"innerLabel-21h1g6jU"}},ttKw:function(e,t,n){e.exports={scrollable:"scrollable-2w4-r8AL"}},uZsJ:function(e,t,n){e.exports={controlWrapper:"controlWrapper-7ApHzdB4",hidden:"hidden-7ApHzdB4",control:"control-7ApHzdB4",controlIncrease:"controlIncrease-7ApHzdB4",controlDecrease:"controlDecrease-7ApHzdB4",controlIcon:"controlIcon-7ApHzdB4",title:"title-7ApHzdB4"}},zcN6:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var i=n("q1tI"),o=n("TSYQ"),s=n("ldG2"),a=n("xADF"),r=n("dKnb"),l=n("jh7f"),c=n("VET0"),d=n("ZgM/");const u={large:s.b.FontSizeLarge,medium:s.b.FontSizeMedium},h={attachment:c.a.top.attachment,targetAttachment:c.a.top.targetAttachment,attachmentOffsetY:-4};function p(e){const{className:t,inputClassName:n,stretch:s=!0,errorMessage:c,fontSizeStyle:p="large",endSlot:m,button:g,error:b,warning:_,innerLabel:C,inputReference:f,children:v,...S}=e,y=b&&void 0!==c?[c]:void 0,I=_&&void 0!==c?[c]:void 0,P=o(d.inputContainer,u[p],t),A=C?i.createElement(a.d,{className:d.innerLabel,
interactive:!1},C):void 0,w=m||g||v?i.createElement(a.b,null,m,g,v):void 0;return i.createElement(r.a,{...S,className:P,inputClassName:n,errors:y,warnings:I,hasErrors:b,hasWarnings:_,messagesPosition:l.a.Attached,customErrorsAttachment:h,messagesRoot:"document",inheritMessagesWidthFromTarget:!0,disableMessagesRtlStyles:!0,iconHidden:!0,stretch:s,reference:f,startSlot:A,endSlot:w})}}}]);