!function(e,t,a){var n=e.Lazyload.extend({init:function(e,t){this._super(e,t)},_init:function(){this.options.selector="[data-lazyload]",this._super()},_set:function(e,t){"IMG"===e.tagName?e.src=t:e.style.backgroundImage="url("+t+")"},_hasPlaceholder:function(e){return!!e.offsetWidth&&("IMG"===e.tagName?!!e.src:!!e.style.backgroundImage)},_addPlaceHolder:function(e){var t=this;"IMG"===e.tagName?(t._counter++,e.onload=function(){t._counter--,t.addCallback(e,t.handle),this.onload=null},t.onPlaceHolder(function(a){t._set(e,a)})):e.style.backgroundImage="url("+t.options.placeholder+")"},addElement:function(e){var t=this,a=e.getAttribute("data-lazyload");return!!a&&(t._hasPlaceholder(e)?t.addCallback(e,t.handle):(t.onPlaceHolder=t._createLoader(function(e){var a=new Image,n=t.options.placeholder;a.src=n,a.onload=a.onerror=function(){e(n)}}),t._addPlaceHolder(e)),!0)},set:function(t,a){var n=this,o=new Image;o.onload=function(){n._set(t,a),e.trigger(n.element,"success",{element:t,uri:a})},o.onerror=function(){e.trigger(n.element,"error",{element:t,uri:a})},o.src=a,t.removeAttribute("data-lazyload")},handle:function(e,t){var a=e.getAttribute("data-lazyload");a&&this.set(e,a)},destroy:function(){this._super(),this.element.removeAttribute("data-imageLazyload")}});e.fn.imageLazyload=function(o){var r=[];return this.each(function(){var l=this,i=null;l!==a&&l!==t||(l=a.body);var d=l.getAttribute("data-imageLazyload");d?i=e.data[d]:(d=++e.uuid,e.data[d]=i=new n(l,o),l.setAttribute("data-imageLazyload",d)),r.push(i)}),1===r.length?r[0]:r}}(mui,window,document);
//# sourceMappingURL=mui.lazyload.img.js.map
