import{R as h,r as B}from"./app-145e20ba.js";function C(){return C=Object.assign?Object.assign.bind():function(s){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(s[o]=t[o])}return s},C.apply(this,arguments)}var A=h.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},h.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),X=h.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},h.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function D(s){if(s.length===7)return s;for(var i="#",t=1;t<4;t+=1)i+=s[t]+s[t];return i}function E(s,i,t,o,e){return function(l,c,a,p,y){var u=(l-a)/(c-a);if(u===0)return p;if(u===1)return y;for(var m="#",d=1;d<6;d+=2){var g=parseInt(p.substr(d,2),16),M=parseInt(y.substr(d,2),16),v=Math.round((1-u)*g+u*M).toString(16);v.length===1&&(v="0"+v),m+=v}return m}(s,i,t,D(o),D(e))}var $=function(s){function i(t){s.call(this,t);var o=t.height,e=t.width,l=t.checked;this.t=t.handleDiameter||o-2,this.i=Math.max(e-o,e-(o+this.t)/2),this.o=Math.max(0,(o-this.t)/2),this.state={h:l?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.m=this.m.bind(this),this.M=this.M.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return s&&(i.__proto__=s),(i.prototype=Object.create(s&&s.prototype)).constructor=i,i.prototype.componentDidMount=function(){this.W=!0},i.prototype.componentDidUpdate=function(t){t.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},i.prototype.componentWillUnmount=function(){this.W=!1},i.prototype.I=function(t){this.H.focus(),this.setState({R:t,j:!0,B:Date.now()})},i.prototype.L=function(t){var o=this.state,e=o.R,l=o.h,c=(this.props.checked?this.i:this.o)+t-e;o.N||t===e||this.setState({N:!0});var a=Math.min(this.i,Math.max(this.o,c));a!==l&&this.setState({h:a})},i.prototype.U=function(t){var o=this.state,e=o.h,l=o.N,c=o.B,a=this.props.checked,p=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var y=Date.now()-c;(!l||y<250||a&&e<=p||!a&&e>=p)&&this.A(t),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},i.prototype.p=function(t){t.preventDefault(),typeof t.button=="number"&&t.button!==0||(this.I(t.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},i.prototype.v=function(t){t.preventDefault(),this.L(t.clientX)},i.prototype.g=function(t){this.U(t),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},i.prototype.k=function(t){this.X=null,this.I(t.touches[0].clientX)},i.prototype.m=function(t){this.L(t.touches[0].clientX)},i.prototype.M=function(t){t.preventDefault(),this.U(t)},i.prototype.$=function(t){Date.now()-this.l>50&&(this.A(t),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},i.prototype.C=function(){this.u=Date.now()},i.prototype.D=function(){this.setState({j:!0})},i.prototype.O=function(){this.setState({j:!1})},i.prototype.S=function(t){this.H=t},i.prototype.T=function(t){t.preventDefault(),this.H.focus(),this.A(t),this.W&&this.setState({j:!1})},i.prototype.A=function(t){var o=this.props;(0,o.onChange)(!o.checked,t,o.id)},i.prototype.render=function(){var t=this.props,o=t.checked,e=t.disabled,l=t.className,c=t.offColor,a=t.onColor,p=t.offHandleColor,y=t.onHandleColor,u=t.checkedIcon,m=t.uncheckedIcon,d=t.checkedHandleIcon,g=t.uncheckedHandleIcon,M=t.boxShadow,v=t.activeBoxShadow,r=t.height,x=t.width,k=t.borderRadius,W=function(b,U){var T={};for(var w in b)Object.prototype.hasOwnProperty.call(b,w)&&U.indexOf(w)===-1&&(T[w]=b[w]);return T}(t,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),S=this.state,f=S.h,n=S.N,I=S.j,H={position:"relative",display:"inline-block",textAlign:"left",opacity:e?.5:1,direction:"ltr",borderRadius:r/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},O={height:r,width:x,margin:Math.max(0,(this.t-r)/2),position:"relative",background:E(f,this.i,this.o,c,a),borderRadius:typeof k=="number"?k:r/2,cursor:e?"default":"pointer",WebkitTransition:n?null:"background 0.25s",MozTransition:n?null:"background 0.25s",transition:n?null:"background 0.25s"},j={height:r,width:Math.min(1.5*r,x-(this.t+r)/2+1),position:"relative",opacity:(f-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:n?null:"opacity 0.25s",MozTransition:n?null:"opacity 0.25s",transition:n?null:"opacity 0.25s"},L={height:r,width:Math.min(1.5*r,x-(this.t+r)/2+1),position:"absolute",opacity:1-(f-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:n?null:"opacity 0.25s",MozTransition:n?null:"opacity 0.25s",transition:n?null:"opacity 0.25s"},R={height:this.t,width:this.t,background:E(f,this.i,this.o,p,y),display:"inline-block",cursor:e?"default":"pointer",borderRadius:typeof k=="number"?k-1:"50%",position:"absolute",transform:"translateX("+f+"px)",top:Math.max(0,(r-this.t)/2),outline:0,boxShadow:I?v:M,border:0,WebkitTransition:n?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:n?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:n?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},N={height:this.t,width:this.t,opacity:Math.max(2*(1-(f-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:n?null:"opacity 0.25s",MozTransition:n?null:"opacity 0.25s",transition:n?null:"opacity 0.25s"},z={height:this.t,width:this.t,opacity:Math.max(2*((f-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:n?null:"opacity 0.25s",MozTransition:n?null:"opacity 0.25s",transition:n?null:"opacity 0.25s"};return h.createElement("div",{className:l,style:H},h.createElement("div",{className:"react-switch-bg",style:O,onClick:e?null:this.T,onMouseDown:function(b){return b.preventDefault()}},u&&h.createElement("div",{style:j},u),m&&h.createElement("div",{style:L},m)),h.createElement("div",{className:"react-switch-handle",style:R,onClick:function(b){return b.preventDefault()},onMouseDown:e?null:this.p,onTouchStart:e?null:this.k,onTouchMove:e?null:this.m,onTouchEnd:e?null:this.M,onTouchCancel:e?null:this.O},g&&h.createElement("div",{style:N},g),d&&h.createElement("div",{style:z},d)),h.createElement("input",C({},{type:"checkbox",role:"switch","aria-checked":o,checked:o,disabled:e,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},W,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},i}(B.Component);$.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:A,checkedIcon:X,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56};export{$ as a};
