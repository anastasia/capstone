(function(e){function t(t){for(var i,s,a=t[0],l=t[1],c=t[2],d=0,h=[];d<a.length;d++)s=a[d],r[s]&&h.push(r[s][0]),r[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);u&&u(t);while(h.length)h.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(i=!1)}i&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},r={base:0},o=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/static/dist/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var u=l;o.push([0,"chunk-common"]),n()})({0:function(e,t,n){e.exports=n("ce9c")},"3dea":function(e,t,n){
/*!
  * Bootstrap modal.js v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function(t,i){e.exports=i(n("a881"),n("dd75"))})(0,function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function i(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach(function(t){r(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e["default"]:e,t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t["default"]:t;var a="modal",l="4.5.0",c="bs.modal",u="."+c,d=".data-api",h=e.fn[a],f=27,p={backdrop:!0,keyboard:!0,focus:!0,show:!0},g={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},m="hide"+u,_="hidePrevented"+u,y="hidden"+u,v="show"+u,b="shown"+u,w="focusin"+u,E="resize"+u,O="click.dismiss"+u,C="keydown.dismiss"+u,k="mouseup.dismiss"+u,T="mousedown.dismiss"+u,j="click"+u+d,S="modal-dialog-scrollable",P="modal-scrollbar-measure",D="modal-backdrop",N="modal-open",A="fade",I="show",x="modal-static",R=".modal-dialog",B=".modal-body",F='[data-toggle="modal"]',q='[data-dismiss="modal"]',Q=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",L=".sticky-top",M=function(){function n(e,t){this._config=this._getConfig(t),this._element=e,this._dialog=e.querySelector(R),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var r=n.prototype;return r.toggle=function(e){return this._isShown?this.hide():this.show(e)},r.show=function(t){var n=this;if(!this._isShown&&!this._isTransitioning){e(this._element).hasClass(A)&&(this._isTransitioning=!0);var i=e.Event(v,{relatedTarget:t});e(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),e(this._element).on(O,q,function(e){return n.hide(e)}),e(this._dialog).on(T,function(){e(n._element).one(k,function(t){e(t.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(t)}))}},r.hide=function(n){var i=this;if(n&&n.preventDefault(),this._isShown&&!this._isTransitioning){var r=e.Event(m);if(e(this._element).trigger(r),this._isShown&&!r.isDefaultPrevented()){this._isShown=!1;var o=e(this._element).hasClass(A);if(o&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),e(document).off(w),e(this._element).removeClass(I),e(this._element).off(O),e(this._dialog).off(T),o){var s=t.getTransitionDurationFromElement(this._element);e(this._element).one(t.TRANSITION_END,function(e){return i._hideModal(e)}).emulateTransitionEnd(s)}else this._hideModal()}}},r.dispose=function(){[window,this._element,this._dialog].forEach(function(t){return e(t).off(u)}),e(document).off(w),e.removeData(this._element,c),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},r.handleUpdate=function(){this._adjustDialog()},r._getConfig=function(e){return e=s(s({},p),e),t.typeCheckConfig(a,e,g),e},r._triggerBackdropTransition=function(){var n=this;if("static"===this._config.backdrop){var i=e.Event(_);if(e(this._element).trigger(i),i.defaultPrevented)return;this._element.classList.add(x);var r=t.getTransitionDurationFromElement(this._element);e(this._element).one(t.TRANSITION_END,function(){n._element.classList.remove(x)}).emulateTransitionEnd(r),this._element.focus()}else this.hide()},r._showElement=function(n){var i=this,r=e(this._element).hasClass(A),o=this._dialog?this._dialog.querySelector(B):null;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),e(this._dialog).hasClass(S)&&o?o.scrollTop=0:this._element.scrollTop=0,r&&t.reflow(this._element),e(this._element).addClass(I),this._config.focus&&this._enforceFocus();var s=e.Event(b,{relatedTarget:n}),a=function(){i._config.focus&&i._element.focus(),i._isTransitioning=!1,e(i._element).trigger(s)};if(r){var l=t.getTransitionDurationFromElement(this._dialog);e(this._dialog).one(t.TRANSITION_END,a).emulateTransitionEnd(l)}else a()},r._enforceFocus=function(){var t=this;e(document).off(w).on(w,function(n){document!==n.target&&t._element!==n.target&&0===e(t._element).has(n.target).length&&t._element.focus()})},r._setEscapeEvent=function(){var t=this;this._isShown?e(this._element).on(C,function(e){t._config.keyboard&&e.which===f?(e.preventDefault(),t.hide()):t._config.keyboard||e.which!==f||t._triggerBackdropTransition()}):this._isShown||e(this._element).off(C)},r._setResizeEvent=function(){var t=this;this._isShown?e(window).on(E,function(e){return t.handleUpdate(e)}):e(window).off(E)},r._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){e(document.body).removeClass(N),t._resetAdjustments(),t._resetScrollbar(),e(t._element).trigger(y)})},r._removeBackdrop=function(){this._backdrop&&(e(this._backdrop).remove(),this._backdrop=null)},r._showBackdrop=function(n){var i=this,r=e(this._element).hasClass(A)?A:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=D,r&&this._backdrop.classList.add(r),e(this._backdrop).appendTo(document.body),e(this._element).on(O,function(e){i._ignoreBackdropClick?i._ignoreBackdropClick=!1:e.target===e.currentTarget&&i._triggerBackdropTransition()}),r&&t.reflow(this._backdrop),e(this._backdrop).addClass(I),!n)return;if(!r)return void n();var o=t.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(t.TRANSITION_END,n).emulateTransitionEnd(o)}else if(!this._isShown&&this._backdrop){e(this._backdrop).removeClass(I);var s=function(){i._removeBackdrop(),n&&n()};if(e(this._element).hasClass(A)){var a=t.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(t.TRANSITION_END,s).emulateTransitionEnd(a)}else s()}else n&&n()},r._adjustDialog=function(){var e=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&e&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!e&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},r._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},r._checkScrollbar=function(){var e=document.body.getBoundingClientRect();this._isBodyOverflowing=Math.round(e.left+e.right)<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},r._setScrollbar=function(){var t=this;if(this._isBodyOverflowing){var n=[].slice.call(document.querySelectorAll(Q)),i=[].slice.call(document.querySelectorAll(L));e(n).each(function(n,i){var r=i.style.paddingRight,o=e(i).css("padding-right");e(i).data("padding-right",r).css("padding-right",parseFloat(o)+t._scrollbarWidth+"px")}),e(i).each(function(n,i){var r=i.style.marginRight,o=e(i).css("margin-right");e(i).data("margin-right",r).css("margin-right",parseFloat(o)-t._scrollbarWidth+"px")});var r=document.body.style.paddingRight,o=e(document.body).css("padding-right");e(document.body).data("padding-right",r).css("padding-right",parseFloat(o)+this._scrollbarWidth+"px")}e(document.body).addClass(N)},r._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(Q));e(t).each(function(t,n){var i=e(n).data("padding-right");e(n).removeData("padding-right"),n.style.paddingRight=i||""});var n=[].slice.call(document.querySelectorAll(""+L));e(n).each(function(t,n){var i=e(n).data("margin-right");"undefined"!==typeof i&&e(n).css("margin-right",i).removeData("margin-right")});var i=e(document.body).data("padding-right");e(document.body).removeData("padding-right"),document.body.style.paddingRight=i||""},r._getScrollbarWidth=function(){var e=document.createElement("div");e.className=P,document.body.appendChild(e);var t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t},n._jQueryInterface=function(t,i){return this.each(function(){var r=e(this).data(c),o=s(s(s({},p),e(this).data()),"object"===typeof t&&t?t:{});if(r||(r=new n(this,o),e(this).data(c,r)),"string"===typeof t){if("undefined"===typeof r[t])throw new TypeError('No method named "'+t+'"');r[t](i)}else o.show&&r.show(i)})},i(n,null,[{key:"VERSION",get:function(){return l}},{key:"Default",get:function(){return p}}]),n}();return e(document).on(j,F,function(n){var i,r=this,o=t.getSelectorFromElement(this);o&&(i=document.querySelector(o));var a=e(i).data(c)?"toggle":s(s({},e(i).data()),e(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||n.preventDefault();var l=e(i).one(v,function(t){t.isDefaultPrevented()||l.one(y,function(){e(r).is(":visible")&&r.focus()})});M._jQueryInterface.call(e(i),a,this)}),e.fn[a]=M._jQueryInterface,e.fn[a].Constructor=M,e.fn[a].noConflict=function(){return e.fn[a]=h,M._jQueryInterface},M})},"698c":function(e,t){var n=n||[];n.push(["setCookieDomain","*.case.law"]),n.push(["trackPageView"]),n.push(["enableLinkTracking"]),function(){var e="//analytics.lil.tools/";n.push(["setTrackerUrl",e+"piwik.php"]),n.push(["setSiteId","4"]);var t=document,i=t.createElement("script"),r=t.getElementsByTagName("script")[0];i.type="text/javascript",i.async=!0,i.defer=!0,i.src=e+"piwik.js",r.parentNode.insertBefore(i,r)}(),window._paq=n},8521:function(e,t,n){
/*!
  * Bootstrap collapse.js v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function(t,i){e.exports=i(n("a881"),n("dd75"))})(0,function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function i(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach(function(t){r(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e["default"]:e,t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t["default"]:t;var a="collapse",l="4.5.0",c="bs.collapse",u="."+c,d=".data-api",h=e.fn[a],f={toggle:!0,parent:""},p={toggle:"boolean",parent:"(string|element)"},g="show"+u,m="shown"+u,_="hide"+u,y="hidden"+u,v="click"+u+d,b="show",w="collapse",E="collapsing",O="collapsed",C="width",k="height",T=".show, .collapsing",j='[data-toggle="collapse"]',S=function(){function n(e,n){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(n),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var i=[].slice.call(document.querySelectorAll(j)),r=0,o=i.length;r<o;r++){var s=i[r],a=t.getSelectorFromElement(s),l=[].slice.call(document.querySelectorAll(a)).filter(function(t){return t===e});null!==a&&l.length>0&&(this._selector=a,this._triggerArray.push(s))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var r=n.prototype;return r.toggle=function(){e(this._element).hasClass(b)?this.hide():this.show()},r.show=function(){var i,r,o=this;if(!this._isTransitioning&&!e(this._element).hasClass(b)&&(this._parent&&(i=[].slice.call(this._parent.querySelectorAll(T)).filter(function(e){return"string"===typeof o._config.parent?e.getAttribute("data-parent")===o._config.parent:e.classList.contains(w)}),0===i.length&&(i=null)),!(i&&(r=e(i).not(this._selector).data(c),r&&r._isTransitioning)))){var s=e.Event(g);if(e(this._element).trigger(s),!s.isDefaultPrevented()){i&&(n._jQueryInterface.call(e(i).not(this._selector),"hide"),r||e(i).data(c,null));var a=this._getDimension();e(this._element).removeClass(w).addClass(E),this._element.style[a]=0,this._triggerArray.length&&e(this._triggerArray).removeClass(O).attr("aria-expanded",!0),this.setTransitioning(!0);var l=function(){e(o._element).removeClass(E).addClass(w+" "+b),o._element.style[a]="",o.setTransitioning(!1),e(o._element).trigger(m)},u=a[0].toUpperCase()+a.slice(1),d="scroll"+u,h=t.getTransitionDurationFromElement(this._element);e(this._element).one(t.TRANSITION_END,l).emulateTransitionEnd(h),this._element.style[a]=this._element[d]+"px"}}},r.hide=function(){var n=this;if(!this._isTransitioning&&e(this._element).hasClass(b)){var i=e.Event(_);if(e(this._element).trigger(i),!i.isDefaultPrevented()){var r=this._getDimension();this._element.style[r]=this._element.getBoundingClientRect()[r]+"px",t.reflow(this._element),e(this._element).addClass(E).removeClass(w+" "+b);var o=this._triggerArray.length;if(o>0)for(var s=0;s<o;s++){var a=this._triggerArray[s],l=t.getSelectorFromElement(a);if(null!==l){var c=e([].slice.call(document.querySelectorAll(l)));c.hasClass(b)||e(a).addClass(O).attr("aria-expanded",!1)}}this.setTransitioning(!0);var u=function(){n.setTransitioning(!1),e(n._element).removeClass(E).addClass(w).trigger(y)};this._element.style[r]="";var d=t.getTransitionDurationFromElement(this._element);e(this._element).one(t.TRANSITION_END,u).emulateTransitionEnd(d)}}},r.setTransitioning=function(e){this._isTransitioning=e},r.dispose=function(){e.removeData(this._element,c),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},r._getConfig=function(e){return e=s(s({},f),e),e.toggle=Boolean(e.toggle),t.typeCheckConfig(a,e,p),e},r._getDimension=function(){var t=e(this._element).hasClass(C);return t?C:k},r._getParent=function(){var i,r=this;t.isElement(this._config.parent)?(i=this._config.parent,"undefined"!==typeof this._config.parent.jquery&&(i=this._config.parent[0])):i=document.querySelector(this._config.parent);var o='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',s=[].slice.call(i.querySelectorAll(o));return e(s).each(function(e,t){r._addAriaAndCollapsedClass(n._getTargetFromElement(t),[t])}),i},r._addAriaAndCollapsedClass=function(t,n){var i=e(t).hasClass(b);n.length&&e(n).toggleClass(O,!i).attr("aria-expanded",i)},n._getTargetFromElement=function(e){var n=t.getSelectorFromElement(e);return n?document.querySelector(n):null},n._jQueryInterface=function(t){return this.each(function(){var i=e(this),r=i.data(c),o=s(s(s({},f),i.data()),"object"===typeof t&&t?t:{});if(!r&&o.toggle&&"string"===typeof t&&/show|hide/.test(t)&&(o.toggle=!1),r||(r=new n(this,o),i.data(c,r)),"string"===typeof t){if("undefined"===typeof r[t])throw new TypeError('No method named "'+t+'"');r[t]()}})},i(n,null,[{key:"VERSION",get:function(){return l}},{key:"Default",get:function(){return f}}]),n}();return e(document).on(v,j,function(n){"A"===n.currentTarget.tagName&&n.preventDefault();var i=e(this),r=t.getSelectorFromElement(this),o=[].slice.call(document.querySelectorAll(r));e(o).each(function(){var t=e(this),n=t.data(c),r=n?"toggle":i.data();S._jQueryInterface.call(t,r)})}),e.fn[a]=S._jQueryInterface,e.fn[a].Constructor=S,e.fn[a].noConflict=function(){return e.fn[a]=h,S._jQueryInterface},S})},"9b55":function(e,t,n){
/*!
  * Bootstrap dropdown.js v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function(t,i){e.exports=i(n("a881"),n("cb7e"),n("dd75"))})(0,function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach(function(t){o(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e["default"]:e,t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t["default"]:t,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n["default"]:n;var l="dropdown",c="4.5.0",u="bs.dropdown",d="."+u,h=".data-api",f=e.fn[l],p=27,g=32,m=9,_=38,y=40,v=3,b=new RegExp(_+"|"+y+"|"+p),w="hide"+d,E="hidden"+d,O="show"+d,C="shown"+d,k="click"+d,T="click"+d+h,j="keydown"+d+h,S="keyup"+d+h,P="disabled",D="show",N="dropup",A="dropright",I="dropleft",x="dropdown-menu-right",R="position-static",B='[data-toggle="dropdown"]',F=".dropdown form",q=".dropdown-menu",Q=".navbar-nav",L=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",M="top-start",W="top-end",U="bottom-start",H="bottom-end",z="right-start",J="left-start",V={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},K={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},G=function(){function i(e,t){this._element=e,this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var o=i.prototype;return o.toggle=function(){if(!this._element.disabled&&!e(this._element).hasClass(P)){var t=e(this._menu).hasClass(D);i._clearMenus(),t||this.show(!0)}},o.show=function(r){if(void 0===r&&(r=!1),!(this._element.disabled||e(this._element).hasClass(P)||e(this._menu).hasClass(D))){var o={relatedTarget:this._element},s=e.Event(O,o),a=i._getParentFromElement(this._element);if(e(a).trigger(s),!s.isDefaultPrevented()){if(!this._inNavbar&&r){if("undefined"===typeof t)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var l=this._element;"parent"===this._config.reference?l=a:n.isElement(this._config.reference)&&(l=this._config.reference,"undefined"!==typeof this._config.reference.jquery&&(l=this._config.reference[0])),"scrollParent"!==this._config.boundary&&e(a).addClass(R),this._popper=new t(l,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===e(a).closest(Q).length&&e(document.body).children().on("mouseover",null,e.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),e(this._menu).toggleClass(D),e(a).toggleClass(D).trigger(e.Event(C,o))}}},o.hide=function(){if(!this._element.disabled&&!e(this._element).hasClass(P)&&e(this._menu).hasClass(D)){var t={relatedTarget:this._element},n=e.Event(w,t),r=i._getParentFromElement(this._element);e(r).trigger(n),n.isDefaultPrevented()||(this._popper&&this._popper.destroy(),e(this._menu).toggleClass(D),e(r).toggleClass(D).trigger(e.Event(E,t)))}},o.dispose=function(){e.removeData(this._element,u),e(this._element).off(d),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},o.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},o._addEventListeners=function(){var t=this;e(this._element).on(k,function(e){e.preventDefault(),e.stopPropagation(),t.toggle()})},o._getConfig=function(t){return t=a(a(a({},this.constructor.Default),e(this._element).data()),t),n.typeCheckConfig(l,t,this.constructor.DefaultType),t},o._getMenuElement=function(){if(!this._menu){var e=i._getParentFromElement(this._element);e&&(this._menu=e.querySelector(q))}return this._menu},o._getPlacement=function(){var t=e(this._element.parentNode),n=U;return t.hasClass(N)?n=e(this._menu).hasClass(x)?W:M:t.hasClass(A)?n=z:t.hasClass(I)?n=J:e(this._menu).hasClass(x)&&(n=H),n},o._detectNavbar=function(){return e(this._element).closest(".navbar").length>0},o._getOffset=function(){var e=this,t={};return"function"===typeof this._config.offset?t.fn=function(t){return t.offsets=a(a({},t.offsets),e._config.offset(t.offsets,e._element)||{}),t}:t.offset=this._config.offset,t},o._getPopperConfig=function(){var e={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(e.modifiers.applyStyle={enabled:!1}),a(a({},e),this._config.popperConfig)},i._jQueryInterface=function(t){return this.each(function(){var n=e(this).data(u),r="object"===typeof t?t:null;if(n||(n=new i(this,r),e(this).data(u,n)),"string"===typeof t){if("undefined"===typeof n[t])throw new TypeError('No method named "'+t+'"');n[t]()}})},i._clearMenus=function(t){if(!t||t.which!==v&&("keyup"!==t.type||t.which===m))for(var n=[].slice.call(document.querySelectorAll(B)),r=0,o=n.length;r<o;r++){var s=i._getParentFromElement(n[r]),a=e(n[r]).data(u),l={relatedTarget:n[r]};if(t&&"click"===t.type&&(l.clickEvent=t),a){var c=a._menu;if(e(s).hasClass(D)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&t.which===m)&&e.contains(s,t.target))){var d=e.Event(w,l);e(s).trigger(d),d.isDefaultPrevented()||("ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),n[r].setAttribute("aria-expanded","false"),a._popper&&a._popper.destroy(),e(c).removeClass(D),e(s).removeClass(D).trigger(e.Event(E,l)))}}}},i._getParentFromElement=function(e){var t,i=n.getSelectorFromElement(e);return i&&(t=document.querySelector(i)),t||e.parentNode},i._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(t.which===g||t.which!==p&&(t.which!==y&&t.which!==_||e(t.target).closest(q).length)):b.test(t.which))&&!this.disabled&&!e(this).hasClass(P)){var n=i._getParentFromElement(this),r=e(n).hasClass(D);if(r||t.which!==p){if(t.preventDefault(),t.stopPropagation(),!r||r&&(t.which===p||t.which===g))return t.which===p&&e(n.querySelector(B)).trigger("focus"),void e(this).trigger("click");var o=[].slice.call(n.querySelectorAll(L)).filter(function(t){return e(t).is(":visible")});if(0!==o.length){var s=o.indexOf(t.target);t.which===_&&s>0&&s--,t.which===y&&s<o.length-1&&s++,s<0&&(s=0),o[s].focus()}}}},r(i,null,[{key:"VERSION",get:function(){return c}},{key:"Default",get:function(){return V}},{key:"DefaultType",get:function(){return K}}]),i}();return e(document).on(j,B,G._dataApiKeydownHandler).on(j,q,G._dataApiKeydownHandler).on(T+" "+S,G._clearMenus).on(T,B,function(t){t.preventDefault(),t.stopPropagation(),G._jQueryInterface.call(e(this),"toggle")}).on(T,F,function(e){e.stopPropagation()}),e.fn[l]=G._jQueryInterface,e.fn[l].Constructor=G,e.fn[l].noConflict=function(){return e.fn[l]=f,G._jQueryInterface},G})},ce9c:function(e,t,n){"use strict";n.r(t);n("6ac6"),n("8ade"),n("5b54"),n("dd75"),n("8521"),n("9b55"),n("3dea");var i=n("a881"),r=n.n(i),o=n("6c44"),s=(n("698c"),function(){document.querySelectorAll("a[role='button']").forEach(function(e){e.addEventListener("keypress",function(e){" "!=e.key&&32!=e.keyCode||(e.preventDefault(),this.click())},!1),e.addEventListener("click",function(e){e.preventDefault()},!1)})}),a=function(e){e.removeClass("show"),e.find("> a").attr("aria-expanded","false")},l=function(e){e.addClass("show"),e.find("> a").attr("aria-expanded","true")},c=function(){var e=r()(".dropdown");e.click(function(t){var n=r()(this),i=n.hasClass("show");a(e),i?a(n):l(n),t.stopPropagation()}),r()(document).click(function(){a(e)})},u=function(){var e="body",t="#burger-icon";r()(e).addClass("hamburger-menu-closed"),r()(t).on("click touch",function(t){r()(e).toggleClass("hamburger-menu-open").toggleClass("hamburger-menu-closed"),t.stopPropagation()})},d=function(){var e=["bulk","api","search","search-docs","trends","trends-docs"],t=window.location.pathname.split("/")[1];t=t.split("#")[0];var n=window.location.host.split(".")[0];"cite"===n||e.indexOf(t)>-1?t="tools":"user"===t?t="account":"action"===t&&(t="courts"),r()("#nav-"+t).find("a").addClass("selected")},h=function(){var e=r()(".list-group-item"),t=r()(".subtitle");window.addEventListener("scroll",function(){for(var n=0;n<t.length;n++)if(o["b"](t[n])){r()(e).removeClass("selected");var i="a.list-group-item[href='#"+t[n].id+"']";r()(i).addClass("selected")}})},f=function(){var e=r()("#main-nav"),t=e.height(),n=t/2,i=!1,o=document.getElementById("content-and-footer"),s=function(){o.scrollTop>n?i||(e.addClass("small-nav"),i=!0):i&&(e.removeClass("small-nav"),i=!1)};o.addEventListener("scroll",s),s()};r()(function(){d(),f(),h(),c(),u(),s()})},dd75:function(e,t,n){
/*!
  * Bootstrap util.js v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function(t,i){e.exports=i(n("a881"))})(0,function(e){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e["default"]:e;var t="transitionend",n=1e6,i=1e3;function r(e){return null===e||"undefined"===typeof e?""+e:{}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase()}function o(){return{bindType:t,delegateType:t,handle:function(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}}}function s(t){var n=this,i=!1;return e(this).one(l.TRANSITION_END,function(){i=!0}),setTimeout(function(){i||l.triggerTransitionEnd(n)},t),this}function a(){e.fn.emulateTransitionEnd=s,e.event.special[l.TRANSITION_END]=o()}var l={TRANSITION_END:"bsTransitionEnd",getUID:function(e){do{e+=~~(Math.random()*n)}while(document.getElementById(e));return e},getSelectorFromElement:function(e){var t=e.getAttribute("data-target");if(!t||"#"===t){var n=e.getAttribute("href");t=n&&"#"!==n?n.trim():""}try{return document.querySelector(t)?t:null}catch(i){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var n=e(t).css("transition-duration"),r=e(t).css("transition-delay"),o=parseFloat(n),s=parseFloat(r);return o||s?(n=n.split(",")[0],r=r.split(",")[0],(parseFloat(n)+parseFloat(r))*i):0},reflow:function(e){return e.offsetHeight},triggerTransitionEnd:function(n){e(n).trigger(t)},supportsTransitionEnd:function(){return Boolean(t)},isElement:function(e){return(e[0]||e).nodeType},typeCheckConfig:function(e,t,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],s=t[i],a=s&&l.isElement(s)?"element":r(s);if(!new RegExp(o).test(a))throw new Error(e.toUpperCase()+': Option "'+i+'" provided type "'+a+'" but expected type "'+o+'".')}},findShadowRoot:function(e){if(!document.documentElement.attachShadow)return null;if("function"===typeof e.getRootNode){var t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?l.findShadowRoot(e.parentNode):null},jQueryDetection:function(){if("undefined"===typeof e)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=e.fn.jquery.split(" ")[0].split("."),n=1,i=2,r=9,o=1,s=4;if(t[0]<i&&t[1]<r||t[0]===n&&t[1]===r&&t[2]<o||t[0]>=s)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};return l.jQueryDetection(),a(),l})}});
//# sourceMappingURL=base.e1ae819b.js.map