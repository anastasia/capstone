(function(e){function t(t){for(var i,o,l=t[0],s=t[1],u=t[2],f=0,c=[];f<l.length;f++)o=l[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&c.push(a[o][0]),a[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);d&&d(t);while(c.length)c.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,l=1;l<n.length;l++){var s=n[l];0!==a[s]&&(i=!1)}i&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},a={base:0},r=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/static/dist/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=s;r.push([0,"chunk-common"]),n()})({0:function(e,t,n){e.exports=n("ce9c")},"3dea":function(e,t,n){
/*!
  * Bootstrap modal.js v4.5.3 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,i){e.exports=i(n("a881"),n("dd75"))})(0,(function(e,t){"use strict";function n(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var i=n(e),a=n(t);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r.apply(this,arguments)}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function l(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}var s="modal",u="4.5.3",d="bs.modal",f="."+d,c=".data-api",h=i["default"].fn[s],g=27,p={backdrop:!0,keyboard:!0,focus:!0,show:!0},m={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},_="hide"+f,v="hidePrevented"+f,y="hidden"+f,b="show"+f,w="shown"+f,E="focusin"+f,C="resize"+f,T="click.dismiss"+f,k="keydown.dismiss"+f,S="mouseup.dismiss"+f,N="mousedown.dismiss"+f,D="click"+f+c,A="modal-dialog-scrollable",j="modal-scrollbar-measure",O="modal-backdrop",P="modal-open",I="fade",R="show",x="modal-static",B=".modal-dialog",F=".modal-body",q='[data-toggle="modal"]',Q='[data-dismiss="modal"]',L=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",M=".sticky-top",W=function(){function e(e,t){this._config=this._getConfig(t),this._element=e,this._dialog=e.querySelector(B),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var t=e.prototype;return t.toggle=function(e){return this._isShown?this.hide():this.show(e)},t.show=function(e){var t=this;if(!this._isShown&&!this._isTransitioning){i["default"](this._element).hasClass(I)&&(this._isTransitioning=!0);var n=i["default"].Event(b,{relatedTarget:e});i["default"](this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),i["default"](this._element).on(T,Q,(function(e){return t.hide(e)})),i["default"](this._dialog).on(N,(function(){i["default"](t._element).one(S,(function(e){i["default"](e.target).is(t._element)&&(t._ignoreBackdropClick=!0)}))})),this._showBackdrop((function(){return t._showElement(e)})))}},t.hide=function(e){var t=this;if(e&&e.preventDefault(),this._isShown&&!this._isTransitioning){var n=i["default"].Event(_);if(i["default"](this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var r=i["default"](this._element).hasClass(I);if(r&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),i["default"](document).off(E),i["default"](this._element).removeClass(R),i["default"](this._element).off(T),i["default"](this._dialog).off(N),r){var o=a["default"].getTransitionDurationFromElement(this._element);i["default"](this._element).one(a["default"].TRANSITION_END,(function(e){return t._hideModal(e)})).emulateTransitionEnd(o)}else this._hideModal()}}},t.dispose=function(){[window,this._element,this._dialog].forEach((function(e){return i["default"](e).off(f)})),i["default"](document).off(E),i["default"].removeData(this._element,d),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(e){return e=r({},p,e),a["default"].typeCheckConfig(s,e,m),e},t._triggerBackdropTransition=function(){var e=this;if("static"===this._config.backdrop){var t=i["default"].Event(v);if(i["default"](this._element).trigger(t),t.isDefaultPrevented())return;var n=this._element.scrollHeight>document.documentElement.clientHeight;n||(this._element.style.overflowY="hidden"),this._element.classList.add(x);var r=a["default"].getTransitionDurationFromElement(this._dialog);i["default"](this._element).off(a["default"].TRANSITION_END),i["default"](this._element).one(a["default"].TRANSITION_END,(function(){e._element.classList.remove(x),n||i["default"](e._element).one(a["default"].TRANSITION_END,(function(){e._element.style.overflowY=""})).emulateTransitionEnd(e._element,r)})).emulateTransitionEnd(r),this._element.focus()}else this.hide()},t._showElement=function(e){var t=this,n=i["default"](this._element).hasClass(I),r=this._dialog?this._dialog.querySelector(F):null;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),i["default"](this._dialog).hasClass(A)&&r?r.scrollTop=0:this._element.scrollTop=0,n&&a["default"].reflow(this._element),i["default"](this._element).addClass(R),this._config.focus&&this._enforceFocus();var o=i["default"].Event(w,{relatedTarget:e}),l=function(){t._config.focus&&t._element.focus(),t._isTransitioning=!1,i["default"](t._element).trigger(o)};if(n){var s=a["default"].getTransitionDurationFromElement(this._dialog);i["default"](this._dialog).one(a["default"].TRANSITION_END,l).emulateTransitionEnd(s)}else l()},t._enforceFocus=function(){var e=this;i["default"](document).off(E).on(E,(function(t){document!==t.target&&e._element!==t.target&&0===i["default"](e._element).has(t.target).length&&e._element.focus()}))},t._setEscapeEvent=function(){var e=this;this._isShown?i["default"](this._element).on(k,(function(t){e._config.keyboard&&t.which===g?(t.preventDefault(),e.hide()):e._config.keyboard||t.which!==g||e._triggerBackdropTransition()})):this._isShown||i["default"](this._element).off(k)},t._setResizeEvent=function(){var e=this;this._isShown?i["default"](window).on(C,(function(t){return e.handleUpdate(t)})):i["default"](window).off(C)},t._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._showBackdrop((function(){i["default"](document.body).removeClass(P),e._resetAdjustments(),e._resetScrollbar(),i["default"](e._element).trigger(y)}))},t._removeBackdrop=function(){this._backdrop&&(i["default"](this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(e){var t=this,n=i["default"](this._element).hasClass(I)?I:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=O,n&&this._backdrop.classList.add(n),i["default"](this._backdrop).appendTo(document.body),i["default"](this._element).on(T,(function(e){t._ignoreBackdropClick?t._ignoreBackdropClick=!1:e.target===e.currentTarget&&t._triggerBackdropTransition()})),n&&a["default"].reflow(this._backdrop),i["default"](this._backdrop).addClass(R),!e)return;if(!n)return void e();var r=a["default"].getTransitionDurationFromElement(this._backdrop);i["default"](this._backdrop).one(a["default"].TRANSITION_END,e).emulateTransitionEnd(r)}else if(!this._isShown&&this._backdrop){i["default"](this._backdrop).removeClass(R);var o=function(){t._removeBackdrop(),e&&e()};if(i["default"](this._element).hasClass(I)){var l=a["default"].getTransitionDurationFromElement(this._backdrop);i["default"](this._backdrop).one(a["default"].TRANSITION_END,o).emulateTransitionEnd(l)}else o()}else e&&e()},t._adjustDialog=function(){var e=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&e&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!e&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var e=document.body.getBoundingClientRect();this._isBodyOverflowing=Math.round(e.left+e.right)<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var e=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(L)),n=[].slice.call(document.querySelectorAll(M));i["default"](t).each((function(t,n){var a=n.style.paddingRight,r=i["default"](n).css("padding-right");i["default"](n).data("padding-right",a).css("padding-right",parseFloat(r)+e._scrollbarWidth+"px")})),i["default"](n).each((function(t,n){var a=n.style.marginRight,r=i["default"](n).css("margin-right");i["default"](n).data("margin-right",a).css("margin-right",parseFloat(r)-e._scrollbarWidth+"px")}));var a=document.body.style.paddingRight,r=i["default"](document.body).css("padding-right");i["default"](document.body).data("padding-right",a).css("padding-right",parseFloat(r)+this._scrollbarWidth+"px")}i["default"](document.body).addClass(P)},t._resetScrollbar=function(){var e=[].slice.call(document.querySelectorAll(L));i["default"](e).each((function(e,t){var n=i["default"](t).data("padding-right");i["default"](t).removeData("padding-right"),t.style.paddingRight=n||""}));var t=[].slice.call(document.querySelectorAll(""+M));i["default"](t).each((function(e,t){var n=i["default"](t).data("margin-right");"undefined"!==typeof n&&i["default"](t).css("margin-right",n).removeData("margin-right")}));var n=i["default"](document.body).data("padding-right");i["default"](document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},t._getScrollbarWidth=function(){var e=document.createElement("div");e.className=j,document.body.appendChild(e);var t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t},e._jQueryInterface=function(t,n){return this.each((function(){var a=i["default"](this).data(d),o=r({},p,i["default"](this).data(),"object"===typeof t&&t?t:{});if(a||(a=new e(this,o),i["default"](this).data(d,a)),"string"===typeof t){if("undefined"===typeof a[t])throw new TypeError('No method named "'+t+'"');a[t](n)}else o.show&&a.show(n)}))},l(e,null,[{key:"VERSION",get:function(){return u}},{key:"Default",get:function(){return p}}]),e}();return i["default"](document).on(D,q,(function(e){var t,n=this,o=a["default"].getSelectorFromElement(this);o&&(t=document.querySelector(o));var l=i["default"](t).data(d)?"toggle":r({},i["default"](t).data(),i["default"](this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var s=i["default"](t).one(b,(function(e){e.isDefaultPrevented()||s.one(y,(function(){i["default"](n).is(":visible")&&n.focus()}))}));W._jQueryInterface.call(i["default"](t),l,this)})),i["default"].fn[s]=W._jQueryInterface,i["default"].fn[s].Constructor=W,i["default"].fn[s].noConflict=function(){return i["default"].fn[s]=h,W._jQueryInterface},W}))},"698c":function(e,t){var n=n||[];n.push(["setCookieDomain","*.case.law"]),n.push(["trackPageView"]),n.push(["enableLinkTracking"]),function(){var e="//analytics.lil.tools/";n.push(["setTrackerUrl",e+"piwik.php"]),n.push(["setSiteId","4"]);var t=document,i=t.createElement("script"),a=t.getElementsByTagName("script")[0];i.type="text/javascript",i.async=!0,i.defer=!0,i.src=e+"piwik.js",a.parentNode.insertBefore(i,a)}(),window._paq=n},8521:function(e,t,n){
/*!
  * Bootstrap collapse.js v4.5.3 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,i){e.exports=i(n("a881"),n("dd75"))})(0,(function(e,t){"use strict";function n(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var i=n(e),a=n(t);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r.apply(this,arguments)}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function l(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}var s="collapse",u="4.5.3",d="bs.collapse",f="."+d,c=".data-api",h=i["default"].fn[s],g={toggle:!0,parent:""},p={toggle:"boolean",parent:"(string|element)"},m="show"+f,_="shown"+f,v="hide"+f,y="hidden"+f,b="click"+f+c,w="show",E="collapse",C="collapsing",T="collapsed",k="width",S="height",N=".show, .collapsing",D='[data-toggle="collapse"]',A=function(){function e(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(D)),i=0,r=n.length;i<r;i++){var o=n[i],l=a["default"].getSelectorFromElement(o),s=[].slice.call(document.querySelectorAll(l)).filter((function(t){return t===e}));null!==l&&s.length>0&&(this._selector=l,this._triggerArray.push(o))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=e.prototype;return t.toggle=function(){i["default"](this._element).hasClass(w)?this.hide():this.show()},t.show=function(){var t,n,r=this;if(!this._isTransitioning&&!i["default"](this._element).hasClass(w)&&(this._parent&&(t=[].slice.call(this._parent.querySelectorAll(N)).filter((function(e){return"string"===typeof r._config.parent?e.getAttribute("data-parent")===r._config.parent:e.classList.contains(E)})),0===t.length&&(t=null)),!(t&&(n=i["default"](t).not(this._selector).data(d),n&&n._isTransitioning)))){var o=i["default"].Event(m);if(i["default"](this._element).trigger(o),!o.isDefaultPrevented()){t&&(e._jQueryInterface.call(i["default"](t).not(this._selector),"hide"),n||i["default"](t).data(d,null));var l=this._getDimension();i["default"](this._element).removeClass(E).addClass(C),this._element.style[l]=0,this._triggerArray.length&&i["default"](this._triggerArray).removeClass(T).attr("aria-expanded",!0),this.setTransitioning(!0);var s=function(){i["default"](r._element).removeClass(C).addClass(E+" "+w),r._element.style[l]="",r.setTransitioning(!1),i["default"](r._element).trigger(_)},u=l[0].toUpperCase()+l.slice(1),f="scroll"+u,c=a["default"].getTransitionDurationFromElement(this._element);i["default"](this._element).one(a["default"].TRANSITION_END,s).emulateTransitionEnd(c),this._element.style[l]=this._element[f]+"px"}}},t.hide=function(){var e=this;if(!this._isTransitioning&&i["default"](this._element).hasClass(w)){var t=i["default"].Event(v);if(i["default"](this._element).trigger(t),!t.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",a["default"].reflow(this._element),i["default"](this._element).addClass(C).removeClass(E+" "+w);var r=this._triggerArray.length;if(r>0)for(var o=0;o<r;o++){var l=this._triggerArray[o],s=a["default"].getSelectorFromElement(l);if(null!==s){var u=i["default"]([].slice.call(document.querySelectorAll(s)));u.hasClass(w)||i["default"](l).addClass(T).attr("aria-expanded",!1)}}this.setTransitioning(!0);var d=function(){e.setTransitioning(!1),i["default"](e._element).removeClass(C).addClass(E).trigger(y)};this._element.style[n]="";var f=a["default"].getTransitionDurationFromElement(this._element);i["default"](this._element).one(a["default"].TRANSITION_END,d).emulateTransitionEnd(f)}}},t.setTransitioning=function(e){this._isTransitioning=e},t.dispose=function(){i["default"].removeData(this._element,d),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(e){return e=r({},g,e),e.toggle=Boolean(e.toggle),a["default"].typeCheckConfig(s,e,p),e},t._getDimension=function(){var e=i["default"](this._element).hasClass(k);return e?k:S},t._getParent=function(){var t,n=this;a["default"].isElement(this._config.parent)?(t=this._config.parent,"undefined"!==typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var r='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',o=[].slice.call(t.querySelectorAll(r));return i["default"](o).each((function(t,i){n._addAriaAndCollapsedClass(e._getTargetFromElement(i),[i])})),t},t._addAriaAndCollapsedClass=function(e,t){var n=i["default"](e).hasClass(w);t.length&&i["default"](t).toggleClass(T,!n).attr("aria-expanded",n)},e._getTargetFromElement=function(e){var t=a["default"].getSelectorFromElement(e);return t?document.querySelector(t):null},e._jQueryInterface=function(t){return this.each((function(){var n=i["default"](this),a=n.data(d),o=r({},g,n.data(),"object"===typeof t&&t?t:{});if(!a&&o.toggle&&"string"===typeof t&&/show|hide/.test(t)&&(o.toggle=!1),a||(a=new e(this,o),n.data(d,a)),"string"===typeof t){if("undefined"===typeof a[t])throw new TypeError('No method named "'+t+'"');a[t]()}}))},l(e,null,[{key:"VERSION",get:function(){return u}},{key:"Default",get:function(){return g}}]),e}();return i["default"](document).on(b,D,(function(e){"A"===e.currentTarget.tagName&&e.preventDefault();var t=i["default"](this),n=a["default"].getSelectorFromElement(this),r=[].slice.call(document.querySelectorAll(n));i["default"](r).each((function(){var e=i["default"](this),n=e.data(d),a=n?"toggle":t.data();A._jQueryInterface.call(e,a)}))})),i["default"].fn[s]=A._jQueryInterface,i["default"].fn[s].Constructor=A,i["default"].fn[s].noConflict=function(){return i["default"].fn[s]=h,A._jQueryInterface},A}))},"9b55":function(e,t,n){
/*!
  * Bootstrap dropdown.js v4.5.3 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,i){e.exports=i(n("a881"),n("cb7e"),n("dd75"))})(0,(function(e,t,n){"use strict";function i(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var a=i(e),r=i(t),o=i(n);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},l.apply(this,arguments)}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function u(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}var d="dropdown",f="4.5.3",c="bs.dropdown",h="."+c,g=".data-api",p=a["default"].fn[d],m=27,_=32,v=9,y=38,b=40,w=3,E=new RegExp(y+"|"+b+"|"+m),C="hide"+h,T="hidden"+h,k="show"+h,S="shown"+h,N="click"+h,D="click"+h+g,A="keydown"+h+g,j="keyup"+h+g,O="disabled",P="show",I="dropup",R="dropright",x="dropleft",B="dropdown-menu-right",F="position-static",q='[data-toggle="dropdown"]',Q=".dropdown form",L=".dropdown-menu",M=".navbar-nav",W=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",H="top-start",U="top-end",z="bottom-start",J="bottom-end",V="right-start",K="left-start",Y={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},G={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},X=function(){function e(e,t){this._element=e,this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=e.prototype;return t.toggle=function(){if(!this._element.disabled&&!a["default"](this._element).hasClass(O)){var t=a["default"](this._menu).hasClass(P);e._clearMenus(),t||this.show(!0)}},t.show=function(t){if(void 0===t&&(t=!1),!(this._element.disabled||a["default"](this._element).hasClass(O)||a["default"](this._menu).hasClass(P))){var n={relatedTarget:this._element},i=a["default"].Event(k,n),l=e._getParentFromElement(this._element);if(a["default"](l).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar&&t){if("undefined"===typeof r["default"])throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var s=this._element;"parent"===this._config.reference?s=l:o["default"].isElement(this._config.reference)&&(s=this._config.reference,"undefined"!==typeof this._config.reference.jquery&&(s=this._config.reference[0])),"scrollParent"!==this._config.boundary&&a["default"](l).addClass(F),this._popper=new r["default"](s,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===a["default"](l).closest(M).length&&a["default"](document.body).children().on("mouseover",null,a["default"].noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),a["default"](this._menu).toggleClass(P),a["default"](l).toggleClass(P).trigger(a["default"].Event(S,n))}}},t.hide=function(){if(!this._element.disabled&&!a["default"](this._element).hasClass(O)&&a["default"](this._menu).hasClass(P)){var t={relatedTarget:this._element},n=a["default"].Event(C,t),i=e._getParentFromElement(this._element);a["default"](i).trigger(n),n.isDefaultPrevented()||(this._popper&&this._popper.destroy(),a["default"](this._menu).toggleClass(P),a["default"](i).toggleClass(P).trigger(a["default"].Event(T,t)))}},t.dispose=function(){a["default"].removeData(this._element,c),a["default"](this._element).off(h),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;a["default"](this._element).on(N,(function(t){t.preventDefault(),t.stopPropagation(),e.toggle()}))},t._getConfig=function(e){return e=l({},this.constructor.Default,a["default"](this._element).data(),e),o["default"].typeCheckConfig(d,e,this.constructor.DefaultType),e},t._getMenuElement=function(){if(!this._menu){var t=e._getParentFromElement(this._element);t&&(this._menu=t.querySelector(L))}return this._menu},t._getPlacement=function(){var e=a["default"](this._element.parentNode),t=z;return e.hasClass(I)?t=a["default"](this._menu).hasClass(B)?U:H:e.hasClass(R)?t=V:e.hasClass(x)?t=K:a["default"](this._menu).hasClass(B)&&(t=J),t},t._detectNavbar=function(){return a["default"](this._element).closest(".navbar").length>0},t._getOffset=function(){var e=this,t={};return"function"===typeof this._config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e._config.offset(t.offsets,e._element)||{}),t}:t.offset=this._config.offset,t},t._getPopperConfig=function(){var e={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(e.modifiers.applyStyle={enabled:!1}),l({},e,this._config.popperConfig)},e._jQueryInterface=function(t){return this.each((function(){var n=a["default"](this).data(c),i="object"===typeof t?t:null;if(n||(n=new e(this,i),a["default"](this).data(c,n)),"string"===typeof t){if("undefined"===typeof n[t])throw new TypeError('No method named "'+t+'"');n[t]()}}))},e._clearMenus=function(t){if(!t||t.which!==w&&("keyup"!==t.type||t.which===v))for(var n=[].slice.call(document.querySelectorAll(q)),i=0,r=n.length;i<r;i++){var o=e._getParentFromElement(n[i]),l=a["default"](n[i]).data(c),s={relatedTarget:n[i]};if(t&&"click"===t.type&&(s.clickEvent=t),l){var u=l._menu;if(a["default"](o).hasClass(P)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&t.which===v)&&a["default"].contains(o,t.target))){var d=a["default"].Event(C,s);a["default"](o).trigger(d),d.isDefaultPrevented()||("ontouchstart"in document.documentElement&&a["default"](document.body).children().off("mouseover",null,a["default"].noop),n[i].setAttribute("aria-expanded","false"),l._popper&&l._popper.destroy(),a["default"](u).removeClass(P),a["default"](o).removeClass(P).trigger(a["default"].Event(T,s)))}}}},e._getParentFromElement=function(e){var t,n=o["default"].getSelectorFromElement(e);return n&&(t=document.querySelector(n)),t||e.parentNode},e._dataApiKeydownHandler=function(t){if(!(/input|textarea/i.test(t.target.tagName)?t.which===_||t.which!==m&&(t.which!==b&&t.which!==y||a["default"](t.target).closest(L).length):!E.test(t.which))&&!this.disabled&&!a["default"](this).hasClass(O)){var n=e._getParentFromElement(this),i=a["default"](n).hasClass(P);if(i||t.which!==m){if(t.preventDefault(),t.stopPropagation(),!i||t.which===m||t.which===_)return t.which===m&&a["default"](n.querySelector(q)).trigger("focus"),void a["default"](this).trigger("click");var r=[].slice.call(n.querySelectorAll(W)).filter((function(e){return a["default"](e).is(":visible")}));if(0!==r.length){var o=r.indexOf(t.target);t.which===y&&o>0&&o--,t.which===b&&o<r.length-1&&o++,o<0&&(o=0),r[o].focus()}}}},u(e,null,[{key:"VERSION",get:function(){return f}},{key:"Default",get:function(){return Y}},{key:"DefaultType",get:function(){return G}}]),e}();return a["default"](document).on(A,q,X._dataApiKeydownHandler).on(A,L,X._dataApiKeydownHandler).on(D+" "+j,X._clearMenus).on(D,q,(function(e){e.preventDefault(),e.stopPropagation(),X._jQueryInterface.call(a["default"](this),"toggle")})).on(D,Q,(function(e){e.stopPropagation()})),a["default"].fn[d]=X._jQueryInterface,a["default"].fn[d].Constructor=X,a["default"].fn[d].noConflict=function(){return a["default"].fn[d]=p,X._jQueryInterface},X}))},ce9c:function(e,t,n){"use strict";n.r(t);n("2252"),n("46d4"),n("b902"),n("32ec"),n("6991"),n("dddc"),n("dd75"),n("8521"),n("9b55"),n("3dea");var i=n("a881"),a=n.n(i),r=n("6c44"),o=(n("698c"),function(){document.querySelectorAll("a[role='button']").forEach((function(e){e.addEventListener("keypress",(function(e){" "!=e.key&&32!=e.keyCode||(e.preventDefault(),this.click())}),!1),e.addEventListener("click",(function(e){e.preventDefault()}),!1)}))}),l=function(e){e.removeClass("show"),e.find("> a").attr("aria-expanded","false")},s=function(e){e.addClass("show"),e.find("> a").attr("aria-expanded","true")},u=function(){var e=a()(".dropdown");e.click((function(t){var n=a()(this),i=n.hasClass("show");l(e),i?l(n):s(n),t.stopPropagation()})),a()(document).click((function(){l(e)}))},d=function(){var e="body",t="#burger-icon";a()(e).addClass("hamburger-menu-closed"),a()(t).on("click touch",(function(t){a()(e).toggleClass("hamburger-menu-open").toggleClass("hamburger-menu-closed"),t.stopPropagation()}))},f=function(){var e=["bulk","api","search","search-docs","trends","trends-docs"],t=window.location.pathname.split("/")[1];t=t.split("#")[0];var n=window.location.host.split(".")[0];"cite"===n||e.indexOf(t)>-1?t="tools":"user"===t?t="account":"action"===t&&(t="courts"),a()("#nav-"+t).find("a").addClass("selected")},c=function(){var e=a()(".list-group-item"),t=a()(".subtitle");window.addEventListener("scroll",(function(){for(var n=0;n<t.length;n++)if(r["b"](t[n])){a()(e).removeClass("selected");var i="a.list-group-item[href='#"+t[n].id+"']";a()(i).addClass("selected")}}))},h=function(){var e=a()("#main-nav"),t=e.height(),n=t/2,i=!1,r=document.getElementById("content-and-footer"),o=function(){r.scrollTop>n?i||(e.addClass("small-nav"),i=!0):i&&(e.removeClass("small-nav"),i=!1)};r.addEventListener("scroll",o),o()};a()((function(){f(),h(),c(),u(),d(),o()}))},dd75:function(e,t,n){
/*!
  * Bootstrap util.js v4.5.3 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,i){e.exports=i(n("a881"))})(0,(function(e){"use strict";function t(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var n=t(e),i="transitionend",a=1e6,r=1e3;function o(e){return null===e||"undefined"===typeof e?""+e:{}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase()}function l(){return{bindType:i,delegateType:i,handle:function(e){if(n["default"](e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}}function s(e){var t=this,i=!1;return n["default"](this).one(d.TRANSITION_END,(function(){i=!0})),setTimeout((function(){i||d.triggerTransitionEnd(t)}),e),this}function u(){n["default"].fn.emulateTransitionEnd=s,n["default"].event.special[d.TRANSITION_END]=l()}var d={TRANSITION_END:"bsTransitionEnd",getUID:function(e){do{e+=~~(Math.random()*a)}while(document.getElementById(e));return e},getSelectorFromElement:function(e){var t=e.getAttribute("data-target");if(!t||"#"===t){var n=e.getAttribute("href");t=n&&"#"!==n?n.trim():""}try{return document.querySelector(t)?t:null}catch(i){return null}},getTransitionDurationFromElement:function(e){if(!e)return 0;var t=n["default"](e).css("transition-duration"),i=n["default"](e).css("transition-delay"),a=parseFloat(t),o=parseFloat(i);return a||o?(t=t.split(",")[0],i=i.split(",")[0],(parseFloat(t)+parseFloat(i))*r):0},reflow:function(e){return e.offsetHeight},triggerTransitionEnd:function(e){n["default"](e).trigger(i)},supportsTransitionEnd:function(){return Boolean(i)},isElement:function(e){return(e[0]||e).nodeType},typeCheckConfig:function(e,t,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var a=n[i],r=t[i],l=r&&d.isElement(r)?"element":o(r);if(!new RegExp(a).test(l))throw new Error(e.toUpperCase()+': Option "'+i+'" provided type "'+l+'" but expected type "'+a+'".')}},findShadowRoot:function(e){if(!document.documentElement.attachShadow)return null;if("function"===typeof e.getRootNode){var t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?d.findShadowRoot(e.parentNode):null},jQueryDetection:function(){if("undefined"===typeof n["default"])throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=n["default"].fn.jquery.split(" ")[0].split("."),t=1,i=2,a=9,r=1,o=4;if(e[0]<i&&e[1]<a||e[0]===t&&e[1]===a&&e[2]<r||e[0]>=o)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};return d.jQueryDetection(),u(),d}))}});
//# sourceMappingURL=base.715aa884.js.map