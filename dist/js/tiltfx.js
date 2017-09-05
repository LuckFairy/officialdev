!function(t){"use strict";function e(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}function i(e){var i=0,o=0;if(!e)var e=t.event;return e.pageX||e.pageY?(i=e.pageX,o=e.pageY):(e.clientX||e.clientY)&&(i=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,o=e.clientY+document.body.scrollTop+document.documentElement.scrollTop),{x:i,y:o}}function o(t,e){var i=!0;return function(o){i&&(i=!1,setTimeout(function(){i=!0},e),t(o))}}function s(t,i){this.el=t,this.options=e({},this.options),e(this.options,i),this._init(),this._initEvents()}function r(){[].slice.call(document.querySelectorAll("img.tilt-effect")).forEach(function(t){new s(t,JSON.parse(t.getAttribute("data-tilt-options")))})}for(var n,a=0,p="webkit moz ms o".split(" "),l=t.requestAnimationFrame,m=t.cancelAnimationFrame,c=0;c<p.length&&(!l||!m);c++)n=p[c],l=l||t[n+"RequestAnimationFrame"],m=m||t[n+"CancelAnimationFrame"]||t[n+"CancelRequestAnimationFrame"];l&&m||(l=function(e,i){var o=(new Date).getTime(),s=Math.max(0,16-(o-a)),r=t.setTimeout(function(){e(o+s)},s);return a=o+s,r},m=function(e){t.clearTimeout(e)}),s.prototype.options={extraImgs:2,opacity:.7,bgfixed:!0,movement:{perspective:1e3,translateX:-10,translateY:-10,translateZ:20,rotateX:2,rotateY:2,rotateZ:0}},s.prototype._init=function(){this.tiltWrapper=document.createElement("div"),this.tiltWrapper.className="tilt",this.eleWrapper=document.createElement("div"),this.eleWrapper.className="tilt-wrapper",this.tiltImgBack=document.createElement("div"),this.tiltImgBack.className="tilt__back",this.tiltImgBack.style.backgroundImage="url("+this.el.src+")",this.tiltWrapper.appendChild(this.tiltImgBack),this.options.extraImgs<1?this.options.extraImgs=1:this.options.extraImgs>5&&(this.options.extraImgs=5),this.options.movement.perspective||(this.options.movement.perspective=0),this.imgElems=[];for(var t=0;t<this.options.extraImgs;++t){var e=document.createElement("div");e.className="tilt__front",e.style.backgroundImage="url("+this.el.src+")",e.style.opacity=this.options.opacity,this.tiltWrapper.appendChild(e),this.imgElems.push(e)}this.options.bgfixed||(this.imgElems.push(this.tiltImgBack),++this.options.extraImgs),this.el.parentNode.insertBefore(this.tiltWrapper,this.el),this.el.parentNode.insertBefore(this.eleWrapper,this.el),this.el.parentNode.removeChild(this.el),this.view={width:this.tiltWrapper.offsetWidth,height:this.tiltWrapper.offsetHeight}},s.prototype._initEvents=function(){var e=this,s=e.options.movement;this.eleWrapper.addEventListener("mousemove",function(t){l(function(){for(var o=i(t),r={left:document.body.scrollLeft+document.documentElement.scrollLeft,top:document.body.scrollTop+document.documentElement.scrollTop},n=e.tiltWrapper.getBoundingClientRect(),a={x:o.x-n.left-r.left,y:o.y-n.top-r.top},p=0,l=e.imgElems.length;p<l;++p){var m=e.imgElems[p],c=s.rotateX?2*((p+1)*s.rotateX/e.options.extraImgs)/e.view.height*a.y-(p+1)*s.rotateX/e.options.extraImgs:0,h=s.rotateY?2*((p+1)*s.rotateY/e.options.extraImgs)/e.view.width*a.x-(p+1)*s.rotateY/e.options.extraImgs:0,d=s.rotateZ?2*((p+1)*s.rotateZ/e.options.extraImgs)/e.view.width*a.x-(p+1)*s.rotateZ/e.options.extraImgs:0,g=s.translateX?2*((p+1)*s.translateX/e.options.extraImgs)/e.view.width*a.x-(p+1)*s.translateX/e.options.extraImgs:0,u=s.translateY?2*((p+1)*s.translateY/e.options.extraImgs)/e.view.height*a.y-(p+1)*s.translateY/e.options.extraImgs:0,f=s.translateZ?2*((p+1)*s.translateZ/e.options.extraImgs)/e.view.height*a.y-(p+1)*s.translateZ/e.options.extraImgs:0;m.style.WebkitTransform="perspective("+s.perspective+"px) translate3d("+g+"px,"+u+"px,"+f+"px) rotate3d(1,0,0,"+c+"deg) rotate3d(0,1,0,"+h+"deg) rotate3d(0,0,1,"+d+"deg)",m.style.transform="perspective("+s.perspective+"px) translate3d("+g+"px,"+u+"px,"+f+"px) rotate3d(1,0,0,"+c+"deg) rotate3d(0,1,0,"+h+"deg) rotate3d(0,0,1,"+d+"deg)"}})},60),this.eleWrapper.addEventListener("mouseleave",function(t){setTimeout(function(){for(var t=0,i=e.imgElems.length;t<i;++t){var o=e.imgElems[t];o.style.WebkitTransform="perspective("+s.perspective+"px) translate3d(0,0,0) rotate3d(1,1,1,0deg)",o.style.transform="perspective("+s.perspective+"px) translate3d(0,0,0) rotate3d(1,1,1,0deg)"}},60)}),t.addEventListener("load",o(function(t){e.view={width:e.tiltWrapper.offsetWidth,height:e.tiltWrapper.offsetHeight}},60)),t.addEventListener("resize",o(function(t){e.view={width:e.tiltWrapper.offsetWidth,height:e.tiltWrapper.offsetHeight}},60))},r(),t.TiltFx=s}(window);
//# sourceMappingURL=tiltfx.js.map