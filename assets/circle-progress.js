/*!
 * Circle Progress - v0.1.2 - 2020-05-01
 * https://tigrr.github.io/circle-progress/
 * Copyright (c) Tigran Sargsyan
 * Licensed MIT
 */
"use strict";function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var _extends=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a},_createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},CircleProgress=function(){!function(){function a(a){switch(a.nodeType){case 1:return d(a);case 3:return b(a);case 8:return c(a)}}function b(a){return a.textContent.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function c(a){return"<!--"+a.nodeValue+"-->"}function d(b){var c="";return c+="<"+b.tagName,b.hasAttributes()&&[].forEach.call(b.attributes,function(a){c+=" "+a.name+'="'+a.value+'"'}),c+=">",b.hasChildNodes()&&[].forEach.call(b.childNodes,function(b){c+=a(b)}),c+="</"+b.tagName+">"}try{if("undefined"==typeof SVGElement||Boolean(SVGElement.prototype.innerHTML))return}catch(e){return}Object.defineProperty(SVGElement.prototype,"innerHTML",{get:function(){var b="";return[].forEach.call(this.childNodes,function(c){b+=a(c)}),b},set:function(a){for(;this.firstChild;)this.removeChild(this.firstChild);try{var b=new DOMParser;b.async=!1;var c="<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>"+a+"</svg>",d=b.parseFromString(c,"text/xml").documentElement;[].forEach.call(d.childNodes,function(a){this.appendChild(this.ownerDocument.importNode(a,!0))}.bind(this))}catch(e){throw new Error("Error parsing markup string")}}}),Object.defineProperty(SVGElement.prototype,"innerSVG",{get:function(){return this.innerHTML},set:function(a){this.innerHTML=a}})}();var a=function(){var a,b,c,d;return a=function(a,c,d,e){var f,g;return e=e||document,g=Object.create(b),"string"==typeof a&&(a=e.querySelector(a)),a?(f=e.createElementNS("http://www.w3.org/2000/svg","svg"),f.setAttribute("version","1.1"),c&&f.setAttribute("width",c),d&&f.setAttribute("height",d),c&&d&&f.setAttribute("viewBox","0 0 "+c+" "+d),a.appendChild(f),g.svg=f,g):void 0},b={element:function(a,b,d,e){var f;return f=c(this,a,b,e),d&&(f.el.innerHTML=d),f},_shortcutElement:function(a,b){var c,d,e={};switch(a){case"rect":c=["x","y","width","height","r"];break;case"circle":c=["cx","cy","r"];break;case"path":c=["d"];break;case"text":c=["x","y"],d=b[3]}if(c.length!==b.length)throw new Error("Unexpected number of arguments to "+a+". Expected "+c.length+" arguments, got "+b.length);return c.forEach(function(a){e[a]=b[a]}),this.element.apply(this,[a,e,d])},rect:function(){return this._shortcutElement("rect",arguments)},circle:function(){return this._shortcutElement("circle",arguments)},path:function(){return this._shortcutElement("path",arguments)}},c=function(a,b,c,e,f){var g;return f=f||document,g=Object.create(d),g.el=f.createElementNS("http://www.w3.org/2000/svg",b),g.attr(c),(e?e.el||e:a.svg).appendChild(g.el),g},d={attr:function(a,b){if(void 0===a)return this;if("object"===("undefined"==typeof a?"undefined":_typeof(a))){for(var c in a)this.attr(c,a[c]);return this}return void 0===b?this.el.getAttributeNS(null,a):(this.el.setAttribute(a,b),this)},content:function(a){return this.el.innerHTML=a,this}},a}(),b=function d(a,b,c,e,f){var g="string"==typeof a?d.easings[a]:a,h=void 0,i=function j(a){h||(h=a),a-=h,a=Math.min(a,e);var d=g(a,b,c,e);f(d),e>a?requestAnimationFrame(j):f(b+c)};requestAnimationFrame(i)};b.easings={linear:function(a,b,c,d){return c*a/d+b},easeInQuad:function(a,b,c,d){return a/=d,c*a*a+b},easeOutQuad:function(a,b,c,d){return a/=d,-c*a*(a-2)+b},easeInOutQuad:function(a,b,c,d){return a/=d/2,1>a?c/2*a*a+b:(a--,-c/2*(a*(a-2)-1)+b)},easeInCubic:function(a,b,c,d){return a/=d,c*a*a*a+b},easeOutCubic:function(a,b,c,d){return a/=d,a--,c*(a*a*a+1)+b},easeInOutCubic:function(a,b,c,d){return a/=d/2,1>a?c/2*a*a*a+b:(a-=2,c/2*(a*a*a+2)+b)},easeInQuart:function(a,b,c,d){return a/=d,c*a*a*a*a+b},easeOutQuart:function(a,b,c,d){return a/=d,a--,-c*(a*a*a*a-1)+b},easeInOutQuart:function(a,b,c,d){return a/=d/2,1>a?c/2*a*a*a*a+b:(a-=2,-c/2*(a*a*a*a-2)+b)},easeInQuint:function(a,b,c,d){return a/=d,c*a*a*a*a*a+b},easeOutQuint:function(a,b,c,d){return a/=d,a--,c*(a*a*a*a*a+1)+b},easeInOutQuint:function(a,b,c,d){return a/=d/2,1>a?c/2*a*a*a*a*a+b:(a-=2,c/2*(a*a*a*a*a+2)+b)},easeInSine:function(a,b,c,d){return-c*Math.cos(a/d*(Math.PI/2))+c+b},easeOutSine:function(a,b,c,d){return c*Math.sin(a/d*(Math.PI/2))+b},easeInOutSine:function(a,b,c,d){return-c/2*(Math.cos(Math.PI*a/d)-1)+b},easeInExpo:function(a,b,c,d){return c*Math.pow(2,10*(a/d-1))+b},easeOutExpo:function(a,b,c,d){return c*(-Math.pow(2,-10*a/d)+1)+b},easeInOutExpo:function(a,b,c,d){return a/=d/2,1>a?c/2*Math.pow(2,10*(a-1))+b:(a--,c/2*(-Math.pow(2,-10*a)+2)+b)},easeInCirc:function(a,b,c,d){return a/=d,-c*(Math.sqrt(1-a*a)-1)+b},easeOutCirc:function(a,b,c,d){return a/=d,a--,c*Math.sqrt(1-a*a)+b},easeInOutCirc:function(a,b,c,d){return a/=d/2,1>a?-c/2*(Math.sqrt(1-a*a)-1)+b:(a-=2,c/2*(Math.sqrt(1-a*a)+1)+b)}};var c=function(){var c={math:{polarToCartesian:function(a,b){return{x:a*Math.cos(b*Math.PI/180),y:a*Math.sin(b*Math.PI/180)}}}},d=function(){function d(b){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;_classCallCheck(this,d);var f=void 0;if("string"==typeof b&&(b=e.querySelector(b)),!b)throw new Error("CircleProgress: you must pass the container element as the first argument");return b.circleProgress?b.circleProgress:(b.circleProgress=this,this.doc=e,b.setAttribute("role","progressbar"),this.el=b,c=_extends({},d.defaults,c),Object.defineProperty(this,"_attrs",{value:{},enumerable:!1}),f="valueOnCircle"===c.textFormat?16:8,this.graph={paper:a(b,100,100),angle:0},this.graph.paper.svg.setAttribute("class","circle-progress"),this.graph.circle=this.graph.paper.element("circle").attr({"class":"circle-progress-circle",cx:50,cy:50,r:50-f/2,fill:"none",stroke:"#ddd","stroke-width":f}),this.graph.sector=this.graph.paper.path(d._makeSectorPath(50,50,50-f/2,0,0)).attr({"class":"circle-progress-value",fill:"none",stroke:"#00E699","stroke-width":f}),this.graph.text=this.graph.paper.element("text",{"class":"circle-progress-text",x:50,y:50,font:"16px Arial, sans-serif","text-anchor":"middle",fill:"#999"}),this._initText(),void this.attr(["indeterminateText","textFormat","startAngle","clockwise","animation","animationDuration","constrain","min","max","value"].filter(function(a){return a in c}).map(function(a){return[a,c[a]]})))}return _createClass(d,[{key:"value",get:function(){return this._attrs.value},set:function(a){this.attr("value",a)}},{key:"min",get:function(){return this._attrs.min},set:function(a){this.attr("min",a)}},{key:"max",get:function(){return this._attrs.max},set:function(a){this.attr("max",a)}},{key:"startAngle",get:function(){return this._attrs.startAngle},set:function(a){this.attr("startAngle",a)}},{key:"clockwise",get:function(){return this._attrs.clockwise},set:function(a){this.attr("clockwise",a)}},{key:"constrain",get:function(){return this._attrs.constrain},set:function(a){this.attr("constrain",a)}},{key:"indeterminateText",get:function(){return this._attrs.indeterminateText},set:function(a){this.attr("indeterminateText",a)}},{key:"textFormat",get:function(){return this._attrs.textFormat},set:function(a){this.attr("textFormat",a)}},{key:"animation",get:function(){return this._attrs.animation},set:function(a){this.attr("animation",a)}},{key:"animationDuration",get:function(){return this._attrs.animationDuration},set:function(a){this.attr("animationDuration",a)}}]),_createClass(d,[{key:"attr",value:function(a){var b=this;if("string"==typeof a)return 1===arguments.length?this._attrs[a]:(this._set(arguments[0],arguments[1]),this._updateGraph(),this);if("object"!==("undefined"==typeof a?"undefined":_typeof(a)))throw new TypeError('Wrong argument passed to attr. Expected object, got "'+("undefined"==typeof a?"undefined":_typeof(a))+'"');return Array.isArray(a)||(a=Object.keys(a).map(function(b){return[b,a[b]]})),a.forEach(function(a){return b._set(a[0],a[1])}),this._updateGraph(),this}},{key:"_set",value:function(a,b){var c={value:"aria-valuenow",min:"aria-valuemin",max:"aria-valuemax"},d=void 0;if(b=this._formatValue(a,b),void 0===b)throw new TypeError("Failed to set the "+a+" property on CircleProgress: The provided value is non-finite.");this._attrs[a]!==b&&("min"===a&&b>=this.max||"max"===a&&b<=this.min||("value"===a&&void 0!==b&&this.constrain&&(null!=this.min&&b<this.min&&(b=this.min),null!=this.max&&b>this.max&&(b=this.max)),this._attrs[a]=b,a in c&&(void 0!==b?this.el.setAttribute(c[a],b):this.el.removeAttribute(c[a])),-1!==["min","max","constrain"].indexOf(a)&&(this.value>this.max||this.value<this.min)&&(this.value=Math.min(this.max,Math.max(this.min,this.value))),"textFormat"===a&&(this._initText(),d="valueOnCircle"===b?16:8,this.graph.sector.attr("stroke-width",d),this.graph.circle.attr("stroke-width",d))))}},{key:"_formatValue",value:function(a,c){switch(a){case"value":case"min":case"max":c=parseFloat(c),isFinite(c)||(c=void 0);break;case"startAngle":c=parseFloat(c),c=isFinite(c)?Math.max(0,Math.min(360,c)):void 0;break;case"clockwise":case"constrain":c=!!c;break;case"indeterminateText":c=""+c;break;case"textFormat":if("function"!=typeof c&&-1===["valueOnCircle","horizontal","vertical","percent","value","none"].indexOf(c))throw new Error('Failed to set the "textFormat" property on CircleProgress: the provided value "'+c+'" is not a legal textFormat identifier.');break;case"animation":if("string"!=typeof c&&"function"!=typeof c)throw new TypeError('Failed to set "animation" property on CircleProgress: the value must be either string or function, '+("undefined"==typeof c?"undefined":_typeof(c))+" passed.");if("string"==typeof c&&"none"!==c&&!b.easings[c])throw new Error('Failed to set "animation" on CircleProgress: the provided value '+c+" is not a legal easing function name.")}return c}},{key:"_valToAngle",value:function(){var a=void 0;return this._isIndeterminate()?0:0===this.max?this.value?360:0:(a=(this.value-this.min)/this.max*360,a=Math.min(360,Math.max(0,a)))}},{key:"_isIndeterminate",value:function(){return!("number"==typeof this.value&&"number"==typeof this.max&&"number"==typeof this.min)}},{key:"_positionValueText",value:function(a){var b=c.math.polarToCartesian(this._getRadius(),a);this.graph.textVal.attr({x:50+b.x,y:50+b.y})}},{key:"_initText",value:function(){switch(this.graph.text.content(""),this.textFormat){case"valueOnCircle":this.graph.textVal=this.graph.paper.element("tspan",{x:0,y:0,"class":"circle-progress-text-value","font-size":"12",fill:"valueOnCircle"===this.textFormat?"#fff":"#888"},"",this.graph.text),this.graph.textMax=this.graph.paper.element("tspan",{x:50,y:50,"class":"circle-progress-text-max","font-size":"22","font-weight":"bold",fill:"#ddd"},"",this.graph.text),this.graph.text.el.hasAttribute("dominant-baseline")||this.graph.textMax.attr("dy","0.4em");break;case"horizontal":this.graph.textVal=this.graph.paper.element("tspan",{"class":"circle-progress-text-value"},"",this.graph.text),this.graph.textSeparator=this.graph.paper.element("tspan",{"class":"circle-progress-text-separator"},"/",this.graph.text),this.graph.textMax=this.graph.paper.element("tspan",{"class":"circle-progress-text-max"},"",this.graph.text);break;case"vertical":this.graph.text.el.hasAttribute("dominant-baseline")&&this.graph.text.attr("dominant-baseline","text-after-edge"),this.graph.textVal=this.graph.paper.element("tspan",{"class":"circle-progress-text-value",x:50,dy:"-0.2em"},"",this.graph.text),this.graph.textSeparator=this.graph.paper.element("tspan",{"class":"circle-progress-text-separator",x:50,dy:"0.1em","font-family":"Arial, sans-serif"},"___",this.graph.text),this.graph.textMax=this.graph.paper.element("tspan",{"class":"circle-progress-text-max",x:50,dy:"1.2em"},"",this.graph.text)}"vertical"!==this.textFormat&&(this.graph.text.el.hasAttribute("dominant-baseline")?this.graph.text.attr("dominant-baseline","central"):this.graph.text.attr("dy","0.4em"))}},{key:"_updateGraph",value:function(){var a=this,c=this.startAngle-90,e=void 0,f=void 0,g=void 0;this._isIndeterminate()?"valueOnCircle"===this.textFormat&&this._positionValueText(c):(e=this._valToAngle(this.value),f=this._getRadius(),g=this.clockwise,this.graph.circle.attr("r",f),"none"!==this.animation&&e!==this.graph.angle?b(this.animation,this.graph.angle,e-this.graph.angle,this.animationDuration,function(b){a.graph.sector.attr("d",d._makeSectorPath(50,50,f,c,b,g))}):this.graph.sector.attr("d",d._makeSectorPath(50,50,f,c,e,g)),this.graph.angle=e,"valueOnCircle"===this.textFormat&&this._positionValueText((2*c+e)/2)),"function"==typeof this.textFormat?this.graph.text.content(this.textFormat(this.value,this.max)):"value"===this.textFormat?this.graph.text.el.textContent=void 0!==this.value?this.value:this.indeterminateText:"percent"===this.textFormat?this.graph.text.el.textContent=(void 0!==this.value&&null!=this.max?Math.round(this.value/this.max*100):this.indeterminateText)+"%":"none"===this.textFormat?this.graph.text.el.textContent="":(this.graph.textVal.el.textContent=void 0!==this.value?this.value:this.indeterminateText,this.graph.textMax.el.textContent=void 0!==this.max?this.max:this.indeterminateText)}},{key:"_getRadius",value:function(){return 50-Math.max(parseFloat(this.doc.defaultView.getComputedStyle(this.graph.circle.el,null)["stroke-width"]),parseFloat(this.doc.defaultView.getComputedStyle(this.graph.sector.el,null)["stroke-width"]))/2}}],[{key:"_makeSectorPath",value:function(a,b,d,e,f,g){g=!!g,f>0&&.3>f?f=0:f>359.999&&(f=359.999);var h=e+f*(2*g-1),i=c.math.polarToCartesian(d,e),j=c.math.polarToCartesian(d,h),k=a+i.x,l=a+j.x,m=b+i.y,n=b+j.y;return["M",k,m,"A",d,d,0,+(f>180),+g,l,n].join(" ")}}]),d}();return d.defaults={startAngle:0,min:0,max:1,constrain:!0,indeterminateText:"?",clockwise:!0,textFormat:"horizontal",animation:"easeInOutCubic",animationDuration:600},d}();return c}();