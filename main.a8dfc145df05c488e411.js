!function(n){var i={};function r(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=n,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=9)}([function(t,e,n){var E,i,y=n(7),A=n(8),I=(i=[],{activateTrap:function(t){if(0<i.length){var e=i[i.length-1];e!==t&&e.pause()}var n=i.indexOf(t);-1===n||i.splice(n,1),i.push(t)},deactivateTrap:function(t){var e=i.indexOf(t);-1!==e&&i.splice(e,1),0<i.length&&i[i.length-1].unpause()}});function C(t){return setTimeout(t,0)}t.exports=function(t,e){var i=document,n="string"==typeof t?i.querySelector(t):t,r=A({returnFocusOnDeactivate:!0,escapeDeactivates:!0},e),o={firstTabbableNode:null,lastTabbableNode:null,nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1},a={activate:function(t){if(o.active)return;v(),o.active=!0,o.paused=!1,o.nodeFocusedBeforeActivation=i.activeElement;var e=t&&t.onActivate?t.onActivate:r.onActivate;e&&e();return c(),a},deactivate:s,pause:function(){if(o.paused||!o.active)return;o.paused=!0,u()},unpause:function(){if(!o.paused||!o.active)return;o.paused=!1,v(),c()}};return a;function s(t){if(o.active){clearTimeout(E),u(),o.active=!1,o.paused=!1,I.deactivateTrap(a);var e=t&&void 0!==t.onDeactivate?t.onDeactivate:r.onDeactivate;return e&&e(),(t&&void 0!==t.returnFocus?t.returnFocus:r.returnFocusOnDeactivate)&&C(function(){m(function(t){var e=d("setReturnFocus");return e||t}(o.nodeFocusedBeforeActivation))}),a}}function c(){if(o.active)return I.activateTrap(a),E=C(function(){m(l())}),i.addEventListener("focusin",f,!0),i.addEventListener("mousedown",p,{capture:!0,passive:!1}),i.addEventListener("touchstart",p,{capture:!0,passive:!1}),i.addEventListener("click",_,{capture:!0,passive:!1}),i.addEventListener("keydown",h,{capture:!0,passive:!1}),a}function u(){if(o.active)return i.removeEventListener("focusin",f,!0),i.removeEventListener("mousedown",p,!0),i.removeEventListener("touchstart",p,!0),i.removeEventListener("click",_,!0),i.removeEventListener("keydown",h,!0),a}function d(t){var e=r[t],n=e;if(!e)return null;if("string"==typeof e&&!(n=i.querySelector(e)))throw new Error("`"+t+"` refers to no known node");if("function"==typeof e&&!(n=e()))throw new Error("`"+t+"` did not return a node");return n}function l(){var t;if(!(t=null!==d("initialFocus")?d("initialFocus"):n.contains(i.activeElement)?i.activeElement:o.firstTabbableNode||d("fallbackFocus")))throw new Error("Your focus-trap needs to have at least one focusable element");return t}function p(t){n.contains(t.target)||(r.clickOutsideDeactivates?s({returnFocus:!y.isFocusable(t.target)}):r.allowOutsideClick&&r.allowOutsideClick(t)||t.preventDefault())}function f(t){n.contains(t.target)||t.target instanceof Document||(t.stopImmediatePropagation(),m(o.mostRecentlyFocusedNode||l()))}function h(t){if(!1!==r.escapeDeactivates&&function(t){return"Escape"===t.key||"Esc"===t.key||27===t.keyCode}(t))return t.preventDefault(),void s();!function(t){return"Tab"===t.key||9===t.keyCode}(t)||function(t){if(v(),t.shiftKey&&t.target===o.firstTabbableNode)return t.preventDefault(),m(o.lastTabbableNode);if(!t.shiftKey&&t.target===o.lastTabbableNode)t.preventDefault(),m(o.firstTabbableNode)}(t)}function _(t){r.clickOutsideDeactivates||n.contains(t.target)||r.allowOutsideClick&&r.allowOutsideClick(t)||(t.preventDefault(),t.stopImmediatePropagation())}function v(){var t=y(n);o.firstTabbableNode=t[0]||l(),o.lastTabbableNode=t[t.length-1]||l()}function m(t){t!==i.activeElement&&(t&&t.focus?(t.focus(),function(t){return t.tagName&&"input"===t.tagName.toLowerCase()&&"function"==typeof t.select}(o.mostRecentlyFocusedNode=t)&&t.select()):m(l()))}}},function(t,e,n){t.exports=n.p+"mql4solutions-logo-navbar.d8cad8d330426eb1cca7.png"},function(t,e,n){t.exports=n.p+"mql4solutions-banner.63816cceb5f68c4abfd8.png"},function(t,e,n){t.exports=n.p+"fiverr-countdown.313ebfb6cff3ce8d8804.png"},function(t,e,n){t.exports=n.p+"fiverr-timer.32dd673bef2d5dc85d1f.png"},function(t,e,n){},function(t,e,n){},function(t,e){var n=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],c=n.join(","),u="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function i(t,e){e=e||{};var n,i,r,o=[],a=[],s=t.querySelectorAll(c);for(e.includeContainer&&u.call(t,c)&&(s=Array.prototype.slice.apply(s)).unshift(t),n=0;n<s.length;n++)d(i=s[n])&&(0===(r=l(i))?o.push(i):a.push({documentOrder:n,tabIndex:r,node:i}));return a.sort(p).map(function(t){return t.node}).concat(o)}function d(t){return!(!r(t)||function(t){return function(t){return a(t)&&"radio"===t.type}(t)&&!function(t){if(!t.name)return!0;var e=function(t){for(var e=0;e<t.length;e++)if(t[e].checked)return t[e]}(t.ownerDocument.querySelectorAll('input[type="radio"][name="'+t.name+'"]'));return!e||e===t}(t)}(t)||l(t)<0)}function r(t){return!(t.disabled||function(t){return a(t)&&"hidden"===t.type}(t)||function(t){return null===t.offsetParent||"hidden"===getComputedStyle(t).visibility}(t))}i.isTabbable=function(t){if(!t)throw new Error("No node provided");return!1!==u.call(t,c)&&d(t)},i.isFocusable=function(t){if(!t)throw new Error("No node provided");return!1!==u.call(t,o)&&r(t)};var o=n.concat("iframe").join(",");function l(t){var e=parseInt(t.getAttribute("tabindex"),10);return isNaN(e)?function(t){return"true"===t.contentEditable}(t)?0:t.tabIndex:e}function p(t,e){return t.tabIndex===e.tabIndex?t.documentOrder-e.documentOrder:t.tabIndex-e.tabIndex}function a(t){return"INPUT"===t.tagName}t.exports=i},function(t,e){t.exports=function(){for(var t={},e=0;e<arguments.length;e++){var n=arguments[e];for(var i in n)r.call(n,i)&&(t[i]=n[i])}return t};var r=Object.prototype.hasOwnProperty},function(t,e,n){"use strict";n.r(e);var i=n(1),r=n.n(i),o=n(2),a=n.n(o),s=n(3),c=n.n(s),u=n(4),d=n.n(u),l=function(t,e){return(l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function p(t,e){function n(){this.constructor=t}l(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var f=function(){return(f=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};function h(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var i,r,o=n.call(t),a=[];try{for(;(void 0===e||0<e--)&&!(i=o.next()).done;)a.push(i.value)}catch(t){r={error:t}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}return a}function _(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(h(arguments[e]));return t}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var v=(Object.defineProperty(m,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(m,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(m,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(m,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),m.prototype.init=function(){},m.prototype.destroy=function(){},m);function m(t){void 0===t&&(t={}),this.adapter_=t}var E=(y.attachTo=function(t){return new y(t,new v({}))},y.prototype.initialize=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},y.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},y.prototype.initialSyncWithDOM=function(){},y.prototype.destroy=function(){this.foundation_.destroy()},y.prototype.listen=function(t,e,n){this.root_.addEventListener(t,e,n)},y.prototype.unlisten=function(t,e,n){this.root_.removeEventListener(t,e,n)},y.prototype.emit=function(t,e,n){var i;void 0===n&&(n=!1),"function"==typeof CustomEvent?i=new CustomEvent(t,{bubbles:n,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,n,!1,e),this.root_.dispatchEvent(i)},y);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function y(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];this.root_=t,this.initialize.apply(this,_(n)),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}function A(t,e){return(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e)}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var I={LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_DISABLED_CLASS:"mdc-list-item--disabled",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",ROOT:"mdc-list"},C={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"]:not(:disabled), input[type="radio"]:not(:disabled)',CHECKBOX_SELECTOR:'input[type="checkbox"]:not(:disabled)',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:"\n    ."+I.LIST_ITEM_CLASS+" button:not(:disabled),\n    ."+I.LIST_ITEM_CLASS+" a\n  ",FOCUSABLE_CHILD_ELEMENTS:"\n    ."+I.LIST_ITEM_CLASS+" button:not(:disabled),\n    ."+I.LIST_ITEM_CLASS+" a,\n    ."+I.LIST_ITEM_CLASS+' input[type="radio"]:not(:disabled),\n    .'+I.LIST_ITEM_CLASS+' input[type="checkbox"]:not(:disabled)\n  ',RADIO_SELECTOR:'input[type="radio"]:not(:disabled)'},g={UNSET_INDEX:-1},b=["input","button","textarea","select"];var S,T=(p(L,S=v),Object.defineProperty(L,"strings",{get:function(){return C},enumerable:!0,configurable:!0}),Object.defineProperty(L,"cssClasses",{get:function(){return I},enumerable:!0,configurable:!0}),Object.defineProperty(L,"numbers",{get:function(){return g},enumerable:!0,configurable:!0}),Object.defineProperty(L,"defaultAdapter",{get:function(){return{addClassForElementIndex:function(){},focusItemAtIndex:function(){},getAttributeForElementIndex:function(){return null},getFocusedElementIndex:function(){return 0},getListItemCount:function(){return 0},hasCheckboxAtIndex:function(){return!1},hasRadioAtIndex:function(){return!1},isCheckboxCheckedAtIndex:function(){return!1},isFocusInsideList:function(){return!1},isRootFocused:function(){return!1},notifyAction:function(){},removeClassForElementIndex:function(){},setAttributeForElementIndex:function(){},setCheckedCheckboxOrRadioAtIndex:function(){},setTabIndexForListItemChildren:function(){}}},enumerable:!0,configurable:!0}),L.prototype.layout=function(){0!==this.adapter_.getListItemCount()&&(this.adapter_.hasCheckboxAtIndex(0)?this.isCheckboxList_=!0:this.adapter_.hasRadioAtIndex(0)&&(this.isRadioList_=!0))},L.prototype.setWrapFocus=function(t){this.wrapFocus_=t},L.prototype.setVerticalOrientation=function(t){this.isVertical_=t},L.prototype.setSingleSelection=function(t){this.isSingleSelectionList_=t},L.prototype.setUseActivatedClass=function(t){this.useActivatedClass_=t},L.prototype.getSelectedIndex=function(){return this.selectedIndex_},L.prototype.setSelectedIndex=function(t){this.isIndexValid_(t)&&(this.isCheckboxList_?this.setCheckboxAtIndex_(t):this.isRadioList_?this.setRadioAtIndex_(t):this.setSingleSelectionAtIndex_(t))},L.prototype.handleFocusIn=function(t,e){0<=e&&this.adapter_.setTabIndexForListItemChildren(e,"0")},L.prototype.handleFocusOut=function(t,e){var n=this;0<=e&&this.adapter_.setTabIndexForListItemChildren(e,"-1"),setTimeout(function(){n.adapter_.isFocusInsideList()||n.setTabindexToFirstSelectedItem_()},0)},L.prototype.handleKeydown=function(t,e,n){var i="ArrowLeft"===t.key||37===t.keyCode,r="ArrowUp"===t.key||38===t.keyCode,o="ArrowRight"===t.key||39===t.keyCode,a="ArrowDown"===t.key||40===t.keyCode,s="Home"===t.key||36===t.keyCode,c="End"===t.key||35===t.keyCode,u="Enter"===t.key||13===t.keyCode,d="Space"===t.key||32===t.keyCode;if(this.adapter_.isRootFocused())r||c?(t.preventDefault(),this.focusLastElement()):(a||s)&&(t.preventDefault(),this.focusFirstElement());else{var l=this.adapter_.getFocusedElementIndex();if(!(-1===l&&(l=n)<0)){var p;if(this.isVertical_&&a||!this.isVertical_&&o)this.preventDefaultEvent_(t),p=this.focusNextElement(l);else if(this.isVertical_&&r||!this.isVertical_&&i)this.preventDefaultEvent_(t),p=this.focusPrevElement(l);else if(s)this.preventDefaultEvent_(t),p=this.focusFirstElement();else if(c)this.preventDefaultEvent_(t),p=this.focusLastElement();else if((u||d)&&e){var f=t.target;if(f&&"A"===f.tagName&&u)return;this.preventDefaultEvent_(t),this.isSelectableList_()&&this.setSelectedIndexOnAction_(l),this.adapter_.notifyAction(l)}this.focusedItemIndex_=l,void 0!==p&&(this.setTabindexAtIndex_(p),this.focusedItemIndex_=p)}}},L.prototype.handleClick=function(t,e){t!==g.UNSET_INDEX&&(this.isSelectableList_()&&this.setSelectedIndexOnAction_(t,e),this.adapter_.notifyAction(t),this.setTabindexAtIndex_(t),this.focusedItemIndex_=t)},L.prototype.focusNextElement=function(t){var e=t+1;if(this.adapter_.getListItemCount()<=e){if(!this.wrapFocus_)return t;e=0}return this.adapter_.focusItemAtIndex(e),e},L.prototype.focusPrevElement=function(t){var e=t-1;if(e<0){if(!this.wrapFocus_)return t;e=this.adapter_.getListItemCount()-1}return this.adapter_.focusItemAtIndex(e),e},L.prototype.focusFirstElement=function(){return this.adapter_.focusItemAtIndex(0),0},L.prototype.focusLastElement=function(){var t=this.adapter_.getListItemCount()-1;return this.adapter_.focusItemAtIndex(t),t},L.prototype.setEnabled=function(t,e){this.isIndexValid_(t)&&(e?(this.adapter_.removeClassForElementIndex(t,I.LIST_ITEM_DISABLED_CLASS),this.adapter_.setAttributeForElementIndex(t,C.ARIA_DISABLED,"false")):(this.adapter_.addClassForElementIndex(t,I.LIST_ITEM_DISABLED_CLASS),this.adapter_.setAttributeForElementIndex(t,C.ARIA_DISABLED,"true")))},L.prototype.preventDefaultEvent_=function(t){var e=(""+t.target.tagName).toLowerCase();-1===b.indexOf(e)&&t.preventDefault()},L.prototype.setSingleSelectionAtIndex_=function(t){if(this.selectedIndex_!==t){var e=I.LIST_ITEM_SELECTED_CLASS;this.useActivatedClass_&&(e=I.LIST_ITEM_ACTIVATED_CLASS),this.selectedIndex_!==g.UNSET_INDEX&&this.adapter_.removeClassForElementIndex(this.selectedIndex_,e),this.adapter_.addClassForElementIndex(t,e),this.setAriaForSingleSelectionAtIndex_(t),this.selectedIndex_=t}},L.prototype.setAriaForSingleSelectionAtIndex_=function(t){this.selectedIndex_===g.UNSET_INDEX&&(this.ariaCurrentAttrValue_=this.adapter_.getAttributeForElementIndex(t,C.ARIA_CURRENT));var e=null!==this.ariaCurrentAttrValue_,n=e?C.ARIA_CURRENT:C.ARIA_SELECTED;this.selectedIndex_!==g.UNSET_INDEX&&this.adapter_.setAttributeForElementIndex(this.selectedIndex_,n,"false");var i=e?this.ariaCurrentAttrValue_:"true";this.adapter_.setAttributeForElementIndex(t,n,i)},L.prototype.setRadioAtIndex_=function(t){this.adapter_.setCheckedCheckboxOrRadioAtIndex(t,!0),this.selectedIndex_!==g.UNSET_INDEX&&this.adapter_.setAttributeForElementIndex(this.selectedIndex_,C.ARIA_CHECKED,"false"),this.adapter_.setAttributeForElementIndex(t,C.ARIA_CHECKED,"true"),this.selectedIndex_=t},L.prototype.setCheckboxAtIndex_=function(t){for(var e=0;e<this.adapter_.getListItemCount();e++){var n=!1;0<=t.indexOf(e)&&(n=!0),this.adapter_.setCheckedCheckboxOrRadioAtIndex(e,n),this.adapter_.setAttributeForElementIndex(e,C.ARIA_CHECKED,n?"true":"false")}this.selectedIndex_=t},L.prototype.setTabindexAtIndex_=function(t){this.focusedItemIndex_===g.UNSET_INDEX&&0!==t?this.adapter_.setAttributeForElementIndex(0,"tabindex","-1"):0<=this.focusedItemIndex_&&this.focusedItemIndex_!==t&&this.adapter_.setAttributeForElementIndex(this.focusedItemIndex_,"tabindex","-1"),this.adapter_.setAttributeForElementIndex(t,"tabindex","0")},L.prototype.isSelectableList_=function(){return this.isSingleSelectionList_||this.isCheckboxList_||this.isRadioList_},L.prototype.setTabindexToFirstSelectedItem_=function(){var t=0;this.isSelectableList_()&&("number"==typeof this.selectedIndex_&&this.selectedIndex_!==g.UNSET_INDEX?t=this.selectedIndex_:function(t){return t instanceof Array}(this.selectedIndex_)&&0<this.selectedIndex_.length&&(t=this.selectedIndex_.reduce(function(t,e){return Math.min(t,e)}))),this.setTabindexAtIndex_(t)},L.prototype.isIndexValid_=function(t){var e=this;if(t instanceof Array){if(!this.isCheckboxList_)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");return 0===t.length||t.some(function(t){return e.isIndexInRange_(t)})}if("number"!=typeof t)return!1;if(this.isCheckboxList_)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+t);return this.isIndexInRange_(t)},L.prototype.isIndexInRange_=function(t){var e=this.adapter_.getListItemCount();return 0<=t&&t<e},L.prototype.setSelectedIndexOnAction_=function(t,e){void 0===e&&(e=!0),this.isCheckboxList_?this.toggleCheckboxAtIndex_(t,e):this.setSelectedIndex(t)},L.prototype.toggleCheckboxAtIndex_=function(e,t){var n=this.adapter_.isCheckboxCheckedAtIndex(e);t&&(n=!n,this.adapter_.setCheckedCheckboxOrRadioAtIndex(e,n)),this.adapter_.setAttributeForElementIndex(e,C.ARIA_CHECKED,n?"true":"false");var i=this.selectedIndex_===g.UNSET_INDEX?[]:this.selectedIndex_.slice();n?i.push(e):i=i.filter(function(t){return t!==e}),this.selectedIndex_=i},L);function L(t){var e=S.call(this,f({},L.defaultAdapter,t))||this;return e.wrapFocus_=!1,e.isVertical_=!0,e.isSingleSelectionList_=!1,e.selectedIndex_=g.UNSET_INDEX,e.focusedItemIndex_=g.UNSET_INDEX,e.useActivatedClass_=!1,e.ariaCurrentAttrValue_=null,e.isCheckboxList_=!1,e.isRadioList_=!1,e}var O,x=(p(D,O=E),Object.defineProperty(D.prototype,"vertical",{set:function(t){this.foundation_.setVerticalOrientation(t)},enumerable:!0,configurable:!0}),Object.defineProperty(D.prototype,"listElements",{get:function(){return[].slice.call(this.root_.querySelectorAll("."+I.LIST_ITEM_CLASS))},enumerable:!0,configurable:!0}),Object.defineProperty(D.prototype,"wrapFocus",{set:function(t){this.foundation_.setWrapFocus(t)},enumerable:!0,configurable:!0}),Object.defineProperty(D.prototype,"singleSelection",{set:function(t){this.foundation_.setSingleSelection(t)},enumerable:!0,configurable:!0}),Object.defineProperty(D.prototype,"selectedIndex",{get:function(){return this.foundation_.getSelectedIndex()},set:function(t){this.foundation_.setSelectedIndex(t)},enumerable:!0,configurable:!0}),D.attachTo=function(t){return new D(t)},D.prototype.initialSyncWithDOM=function(){this.handleClick_=this.handleClickEvent_.bind(this),this.handleKeydown_=this.handleKeydownEvent_.bind(this),this.focusInEventListener_=this.handleFocusInEvent_.bind(this),this.focusOutEventListener_=this.handleFocusOutEvent_.bind(this),this.listen("keydown",this.handleKeydown_),this.listen("click",this.handleClick_),this.listen("focusin",this.focusInEventListener_),this.listen("focusout",this.focusOutEventListener_),this.layout(),this.initializeListType()},D.prototype.destroy=function(){this.unlisten("keydown",this.handleKeydown_),this.unlisten("click",this.handleClick_),this.unlisten("focusin",this.focusInEventListener_),this.unlisten("focusout",this.focusOutEventListener_)},D.prototype.layout=function(){var t=this.root_.getAttribute(C.ARIA_ORIENTATION);this.vertical=t!==C.ARIA_ORIENTATION_HORIZONTAL,[].slice.call(this.root_.querySelectorAll(".mdc-list-item:not([tabindex])")).forEach(function(t){t.setAttribute("tabindex","-1")}),[].slice.call(this.root_.querySelectorAll(C.FOCUSABLE_CHILD_ELEMENTS)).forEach(function(t){return t.setAttribute("tabindex","-1")}),this.foundation_.layout()},D.prototype.initializeListType=function(){var e=this,t=this.root_.querySelectorAll(C.ARIA_ROLE_CHECKBOX_SELECTOR),n=this.root_.querySelector("\n      ."+I.LIST_ITEM_ACTIVATED_CLASS+",\n      ."+I.LIST_ITEM_SELECTED_CLASS+"\n    "),i=this.root_.querySelector(C.ARIA_CHECKED_RADIO_SELECTOR);if(t.length){var r=this.root_.querySelectorAll(C.ARIA_CHECKED_CHECKBOX_SELECTOR);this.selectedIndex=[].map.call(r,function(t){return e.listElements.indexOf(t)})}else n?(n.classList.contains(I.LIST_ITEM_ACTIVATED_CLASS)&&this.foundation_.setUseActivatedClass(!0),this.singleSelection=!0,this.selectedIndex=this.listElements.indexOf(n)):i&&(this.selectedIndex=this.listElements.indexOf(i))},D.prototype.setEnabled=function(t,e){this.foundation_.setEnabled(t,e)},D.prototype.getDefaultFoundation=function(){var r=this;return new T({addClassForElementIndex:function(t,e){var n=r.listElements[t];n&&n.classList.add(e)},focusItemAtIndex:function(t){var e=r.listElements[t];e&&e.focus()},getAttributeForElementIndex:function(t,e){return r.listElements[t].getAttribute(e)},getFocusedElementIndex:function(){return r.listElements.indexOf(document.activeElement)},getListItemCount:function(){return r.listElements.length},hasCheckboxAtIndex:function(t){return!!r.listElements[t].querySelector(C.CHECKBOX_SELECTOR)},hasRadioAtIndex:function(t){return!!r.listElements[t].querySelector(C.RADIO_SELECTOR)},isCheckboxCheckedAtIndex:function(t){return r.listElements[t].querySelector(C.CHECKBOX_SELECTOR).checked},isFocusInsideList:function(){return r.root_.contains(document.activeElement)},isRootFocused:function(){return document.activeElement===r.root_},notifyAction:function(t){r.emit(C.ACTION_EVENT,{index:t},!0)},removeClassForElementIndex:function(t,e){var n=r.listElements[t];n&&n.classList.remove(e)},setAttributeForElementIndex:function(t,e,n){var i=r.listElements[t];i&&i.setAttribute(e,n)},setCheckedCheckboxOrRadioAtIndex:function(t,e){var n=r.listElements[t].querySelector(C.CHECKBOX_RADIO_SELECTOR);n.checked=e;var i=document.createEvent("Event");i.initEvent("change",!0,!0),n.dispatchEvent(i)},setTabIndexForListItemChildren:function(t,e){var n=r.listElements[t];[].slice.call(n.querySelectorAll(C.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX)).forEach(function(t){return t.setAttribute("tabindex",e)})}})},D.prototype.getListItemIndex_=function(t){var e=
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function(t,e){if(t.closest)return t.closest(e);for(var n=t;n;){if(A(n,e))return n;n=n.parentElement}return null}(t.target,"."+I.LIST_ITEM_CLASS+", ."+I.ROOT);return e&&A(e,"."+I.LIST_ITEM_CLASS)?this.listElements.indexOf(e):-1},D.prototype.handleFocusInEvent_=function(t){var e=this.getListItemIndex_(t);this.foundation_.handleFocusIn(t,e)},D.prototype.handleFocusOutEvent_=function(t){var e=this.getListItemIndex_(t);this.foundation_.handleFocusOut(t,e)},D.prototype.handleKeydownEvent_=function(t){var e=this.getListItemIndex_(t),n=t.target;this.foundation_.handleKeydown(t,n.classList.contains(I.LIST_ITEM_CLASS),e)},D.prototype.handleClickEvent_=function(t){var e=this.getListItemIndex_(t),n=!A(t.target,C.CHECKBOX_RADIO_SELECTOR);this.foundation_.handleClick(e,n)},D);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function D(){return null!==O&&O.apply(this,arguments)||this}var w,R=n(0),F=n.n(R),N={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},k={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim"},H=(p(M,w=v),Object.defineProperty(M,"strings",{get:function(){return k},enumerable:!0,configurable:!0}),Object.defineProperty(M,"cssClasses",{get:function(){return N},enumerable:!0,configurable:!0}),Object.defineProperty(M,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!0,configurable:!0}),M.prototype.destroy=function(){this.animationFrame_&&cancelAnimationFrame(this.animationFrame_),this.animationTimer_&&clearTimeout(this.animationTimer_)},M.prototype.open=function(){var t=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter_.addClass(N.OPEN),this.adapter_.addClass(N.ANIMATE),this.runNextAnimationFrame_(function(){t.adapter_.addClass(N.OPENING)}),this.adapter_.saveFocus())},M.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter_.addClass(N.CLOSING)},M.prototype.isOpen=function(){return this.adapter_.hasClass(N.OPEN)},M.prototype.isOpening=function(){return this.adapter_.hasClass(N.OPENING)||this.adapter_.hasClass(N.ANIMATE)},M.prototype.isClosing=function(){return this.adapter_.hasClass(N.CLOSING)},M.prototype.handleKeydown=function(t){var e=t.keyCode;"Escape"!==t.key&&27!==e||this.close()},M.prototype.handleTransitionEnd=function(t){var e=N.OPENING,n=N.CLOSING,i=N.OPEN,r=N.ANIMATE,o=N.ROOT;this.isElement_(t.target)&&this.adapter_.elementHasClass(t.target,o)&&(this.isClosing()?(this.adapter_.removeClass(i),this.closed_(),this.adapter_.restoreFocus(),this.adapter_.notifyClose()):(this.adapter_.focusActiveNavigationItem(),this.opened_(),this.adapter_.notifyOpen()),this.adapter_.removeClass(r),this.adapter_.removeClass(e),this.adapter_.removeClass(n))},M.prototype.opened_=function(){},M.prototype.closed_=function(){},M.prototype.runNextAnimationFrame_=function(t){var e=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame(function(){e.animationFrame_=0,clearTimeout(e.animationTimer_),e.animationTimer_=setTimeout(t,0)})},M.prototype.isElement_=function(t){return Boolean(t.classList)},M);function M(t){var e=w.call(this,f({},M.defaultAdapter,t))||this;return e.animationFrame_=0,e.animationTimer_=0,e}var P,B=(p(V,P=H),V.prototype.handleScrimClick=function(){this.close()},V.prototype.opened_=function(){this.adapter_.trapFocus()},V.prototype.closed_=function(){this.adapter_.releaseFocus()},V);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function V(){return null!==P&&P.apply(this,arguments)||this}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var U,q=H.cssClasses,z=H.strings,j=(p(G,U=E),G.attachTo=function(t){return new G(t)},Object.defineProperty(G.prototype,"open",{get:function(){return this.foundation_.isOpen()},set:function(t){t?this.foundation_.open():this.foundation_.close()},enumerable:!0,configurable:!0}),Object.defineProperty(G.prototype,"list",{get:function(){return this.list_},enumerable:!0,configurable:!0}),G.prototype.initialize=function(t,e){void 0===t&&(t=F.a),void 0===e&&(e=function(t){return new x(t)});var n=this.root_.querySelector("."+T.cssClasses.ROOT);n&&(this.list_=e(n),this.list_.wrapFocus=!0),this.focusTrapFactory_=t},G.prototype.initialSyncWithDOM=function(){var e=this,t=q.MODAL,n=z.SCRIM_SELECTOR;this.scrim_=this.root_.parentNode.querySelector(n),this.scrim_&&this.root_.classList.contains(t)&&(this.handleScrimClick_=function(){return e.foundation_.handleScrimClick()},this.scrim_.addEventListener("click",this.handleScrimClick_),this.focusTrap_=
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function(t,e){return void 0===e&&(e=F.a),e(t,{clickOutsideDeactivates:!0,escapeDeactivates:!1,initialFocus:void 0,returnFocusOnDeactivate:!1})}(this.root_,this.focusTrapFactory_)),this.handleKeydown_=function(t){return e.foundation_.handleKeydown(t)},this.handleTransitionEnd_=function(t){return e.foundation_.handleTransitionEnd(t)},this.listen("keydown",this.handleKeydown_),this.listen("transitionend",this.handleTransitionEnd_)},G.prototype.destroy=function(){this.unlisten("keydown",this.handleKeydown_),this.unlisten("transitionend",this.handleTransitionEnd_),this.list_&&this.list_.destroy();var t=q.MODAL;this.scrim_&&this.handleScrimClick_&&this.root_.classList.contains(t)&&(this.scrim_.removeEventListener("click",this.handleScrimClick_),this.open=!1)},G.prototype.getDefaultFoundation=function(){var e=this,t={addClass:function(t){return e.root_.classList.add(t)},removeClass:function(t){return e.root_.classList.remove(t)},hasClass:function(t){return e.root_.classList.contains(t)},elementHasClass:function(t,e){return t.classList.contains(e)},saveFocus:function(){return e.previousFocus_=document.activeElement},restoreFocus:function(){var t=e.previousFocus_;t&&t.focus&&e.root_.contains(document.activeElement)&&t.focus()},focusActiveNavigationItem:function(){var t=e.root_.querySelector("."+T.cssClasses.LIST_ITEM_ACTIVATED_CLASS);t&&t.focus()},notifyClose:function(){return e.emit(z.CLOSE_EVENT,{},!0)},notifyOpen:function(){return e.emit(z.OPEN_EVENT,{},!0)},trapFocus:function(){return e.focusTrap_.activate()},releaseFocus:function(){return e.focusTrap_.deactivate()}},n=q.DISMISSIBLE,i=q.MODAL;if(this.root_.classList.contains(n))return new H(t);if(this.root_.classList.contains(i))return new B(t);throw new Error("MDCDrawer: Failed to instantiate component. Supported variants are "+n+" and "+i+".")},G);function G(){return null!==U&&U.apply(this,arguments)||this}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var X=(Object.defineProperty(K,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(K,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(K,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(K,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),K.prototype.init=function(){},K.prototype.destroy=function(){},K);function K(t){void 0===t&&(t={}),this.adapter_=t}var W=(Y.attachTo=function(t){return new Y(t,new X({}))},Y.prototype.initialize=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},Y.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},Y.prototype.initialSyncWithDOM=function(){},Y.prototype.destroy=function(){this.foundation_.destroy()},Y.prototype.listen=function(t,e,n){this.root_.addEventListener(t,e,n)},Y.prototype.unlisten=function(t,e,n){this.root_.removeEventListener(t,e,n)},Y.prototype.emit=function(t,e,n){var i;void 0===n&&(n=!1),"function"==typeof CustomEvent?i=new CustomEvent(t,{bubbles:n,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,n,!1,e),this.root_.dispatchEvent(i)},Y);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function Y(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];this.root_=t,this.initialize.apply(this,_(n)),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}var Z=(Object.defineProperty(J,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(J,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(J,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(J,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),J.prototype.init=function(){},J.prototype.destroy=function(){},J);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function J(t){void 0===t&&(t={}),this.adapter_=t}var Q=($.attachTo=function(t){return new $(t,new Z({}))},$.prototype.initialize=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},$.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},$.prototype.initialSyncWithDOM=function(){},$.prototype.destroy=function(){this.foundation_.destroy()},$.prototype.listen=function(t,e,n){this.root_.addEventListener(t,e,n)},$.prototype.unlisten=function(t,e,n){this.root_.removeEventListener(t,e,n)},$.prototype.emit=function(t,e,n){var i;void 0===n&&(n=!1),"function"==typeof CustomEvent?i=new CustomEvent(t,{bubbles:n,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,n,!1,e),this.root_.dispatchEvent(i)},$);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function $(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];this.root_=t,this.initialize.apply(this,_(n)),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}var tt;
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function et(t,e){if(void 0===t&&(t=window),void 0===e&&(e=!1),void 0===tt||e){var n=!1;try{t.document.addEventListener("test",function(){},{get passive(){return n=!0}})}catch(t){}tt=n}return!!tt&&{passive:!0}}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function nt(t,e){return(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e)}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var it,rt={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},ot={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},at={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};function st(t,e){void 0===e&&(e=!1);var n=t.CSS,i=it;if("boolean"==typeof it&&!e)return it;if(!(n&&"function"==typeof n.supports))return!1;var r=n.supports("--css-vars","yes"),o=n.supports("(--css-vars: yes)")&&n.supports("color","#00000000");return i=!(!r&&!o)&&!function(t){var e=t.document,n=e.createElement("div");n.className="mdc-ripple-surface--test-edge-var-bug",e.head.appendChild(n);var i=t.getComputedStyle(n),r=null!==i&&"solid"===i.borderTopStyle;return n.parentNode&&n.parentNode.removeChild(n),r}(t),e||(it=i),i}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ct,ut=["touchstart","pointerdown","mousedown","keydown"],dt=["touchend","pointerup","mouseup","contextmenu"],lt=[],pt=(p(ft,ct=Z),Object.defineProperty(ft,"cssClasses",{get:function(){return rt},enumerable:!0,configurable:!0}),Object.defineProperty(ft,"strings",{get:function(){return ot},enumerable:!0,configurable:!0}),Object.defineProperty(ft,"numbers",{get:function(){return at},enumerable:!0,configurable:!0}),Object.defineProperty(ft,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!0,configurable:!0}),ft.prototype.init=function(){var t=this,e=this.supportsPressRipple_();if(this.registerRootHandlers_(e),e){var n=ft.cssClasses,i=n.ROOT,r=n.UNBOUNDED;requestAnimationFrame(function(){t.adapter_.addClass(i),t.adapter_.isUnbounded()&&(t.adapter_.addClass(r),t.layoutInternal_())})}},ft.prototype.destroy=function(){var t=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(ft.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(ft.cssClasses.FG_DEACTIVATION));var e=ft.cssClasses,n=e.ROOT,i=e.UNBOUNDED;requestAnimationFrame(function(){t.adapter_.removeClass(n),t.adapter_.removeClass(i),t.removeCssVars_()})}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()},ft.prototype.activate=function(t){this.activate_(t)},ft.prototype.deactivate=function(){this.deactivate_()},ft.prototype.layout=function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(function(){t.layoutInternal_(),t.layoutFrame_=0})},ft.prototype.setUnbounded=function(t){var e=ft.cssClasses.UNBOUNDED;t?this.adapter_.addClass(e):this.adapter_.removeClass(e)},ft.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter_.addClass(ft.cssClasses.BG_FOCUSED)})},ft.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter_.removeClass(ft.cssClasses.BG_FOCUSED)})},ft.prototype.supportsPressRipple_=function(){return this.adapter_.browserSupportsCssVars()},ft.prototype.defaultActivationState_=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},ft.prototype.registerRootHandlers_=function(t){var e=this;t&&(ut.forEach(function(t){e.adapter_.registerInteractionHandler(t,e.activateHandler_)}),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)},ft.prototype.registerDeactivationHandlers_=function(t){var e=this;"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):dt.forEach(function(t){e.adapter_.registerDocumentInteractionHandler(t,e.deactivateHandler_)})},ft.prototype.deregisterRootHandlers_=function(){var e=this;ut.forEach(function(t){e.adapter_.deregisterInteractionHandler(t,e.activateHandler_)}),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)},ft.prototype.deregisterDeactivationHandlers_=function(){var e=this;this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),dt.forEach(function(t){e.adapter_.deregisterDocumentInteractionHandler(t,e.deactivateHandler_)})},ft.prototype.removeCssVars_=function(){var e=this,n=ft.strings;Object.keys(n).forEach(function(t){0===t.indexOf("VAR_")&&e.adapter_.updateCssVariable(n[t],null)})},ft.prototype.activate_=function(t){var e=this;if(!this.adapter_.isSurfaceDisabled()){var n=this.activationState_;if(!n.isActivated){var i=this.previousActivationEvent_;i&&void 0!==t&&i.type!==t.type||(n.isActivated=!0,n.isProgrammatic=void 0===t,n.activationEvent=t,n.wasActivatedByPointer=!n.isProgrammatic&&void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type),void 0!==t&&0<lt.length&&lt.some(function(t){return e.adapter_.containsEventTarget(t)})?this.resetActivationState_():(void 0!==t&&(lt.push(t.target),this.registerDeactivationHandlers_(t)),n.wasElementMadeActive=this.checkElementMadeActive_(t),n.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame(function(){lt=[],n.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(n.wasElementMadeActive=e.checkElementMadeActive_(t),n.wasElementMadeActive&&e.animateActivation_()),n.wasElementMadeActive||(e.activationState_=e.defaultActivationState_())})))}}},ft.prototype.checkElementMadeActive_=function(t){return void 0===t||"keydown"!==t.type||this.adapter_.isSurfaceActive()},ft.prototype.animateActivation_=function(){var t=this,e=ft.strings,n=e.VAR_FG_TRANSLATE_START,i=e.VAR_FG_TRANSLATE_END,r=ft.cssClasses,o=r.FG_DEACTIVATION,a=r.FG_ACTIVATION,s=ft.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var c="",u="";if(!this.adapter_.isUnbounded()){var d=this.getFgTranslationCoordinates_(),l=d.startPoint,p=d.endPoint;c=l.x+"px, "+l.y+"px",u=p.x+"px, "+p.y+"px"}this.adapter_.updateCssVariable(n,c),this.adapter_.updateCssVariable(i,u),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(o),this.adapter_.computeBoundingRect(),this.adapter_.addClass(a),this.activationTimer_=setTimeout(function(){return t.activationTimerCallback_()},s)},ft.prototype.getFgTranslationCoordinates_=function(){var t,e=this.activationState_,n=e.activationEvent;return{startPoint:t={x:(t=e.wasActivatedByPointer?function(t,e,n){if(!t)return{x:0,y:0};var i,r,o=e.x,a=e.y,s=o+n.left,c=a+n.top;if("touchstart"===t.type){var u=t;i=u.changedTouches[0].pageX-s,r=u.changedTouches[0].pageY-c}else{var d=t;i=d.pageX-s,r=d.pageY-c}return{x:i,y:r}}(n,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:t.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}},ft.prototype.runDeactivationUXLogicIfReady_=function(){var t=this,e=ft.cssClasses.FG_DEACTIVATION,n=this.activationState_,i=n.hasDeactivationUXRun,r=n.isActivated;!i&&r||!this.activationAnimationHasEnded_||(this.rmBoundedActivationClasses_(),this.adapter_.addClass(e),this.fgDeactivationRemovalTimer_=setTimeout(function(){t.adapter_.removeClass(e)},at.FG_DEACTIVATION_MS))},ft.prototype.rmBoundedActivationClasses_=function(){var t=ft.cssClasses.FG_ACTIVATION;this.adapter_.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()},ft.prototype.resetActivationState_=function(){var t=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(function(){return t.previousActivationEvent_=void 0},ft.numbers.TAP_DELAY_MS)},ft.prototype.deactivate_=function(){var t=this,e=this.activationState_;if(e.isActivated){var n=f({},e);e.isProgrammatic?(requestAnimationFrame(function(){return t.animateDeactivation_(n)}),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame(function(){t.activationState_.hasDeactivationUXRun=!0,t.animateDeactivation_(n),t.resetActivationState_()}))}},ft.prototype.animateDeactivation_=function(t){var e=t.wasActivatedByPointer,n=t.wasElementMadeActive;(e||n)&&this.runDeactivationUXLogicIfReady_()},ft.prototype.layoutInternal_=function(){var t=this;this.frame_=this.adapter_.computeBoundingRect();var e=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?e:Math.sqrt(Math.pow(t.frame_.width,2)+Math.pow(t.frame_.height,2))+ft.numbers.PADDING,this.initialSize_=Math.floor(e*ft.numbers.INITIAL_ORIGIN_SCALE),this.fgScale_=""+this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()},ft.prototype.updateLayoutCssVars_=function(){var t=ft.strings,e=t.VAR_FG_SIZE,n=t.VAR_LEFT,i=t.VAR_TOP,r=t.VAR_FG_SCALE;this.adapter_.updateCssVariable(e,this.initialSize_+"px"),this.adapter_.updateCssVariable(r,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(n,this.unboundedCoords_.left+"px"),this.adapter_.updateCssVariable(i,this.unboundedCoords_.top+"px"))},ft);function ft(t){var e=ct.call(this,f({},ft.defaultAdapter,t))||this;return e.activationAnimationHasEnded_=!1,e.activationTimer_=0,e.fgDeactivationRemovalTimer_=0,e.fgScale_="0",e.frame_={width:0,height:0},e.initialSize_=0,e.layoutFrame_=0,e.maxRadius_=0,e.unboundedCoords_={left:0,top:0},e.activationState_=e.defaultActivationState_(),e.activationTimerCallback_=function(){e.activationAnimationHasEnded_=!0,e.runDeactivationUXLogicIfReady_()},e.activateHandler_=function(t){return e.activate_(t)},e.deactivateHandler_=function(){return e.deactivate_()},e.focusHandler_=function(){return e.handleFocus()},e.blurHandler_=function(){return e.handleBlur()},e.resizeHandler_=function(){return e.layout()},e}var ht,_t=(p(vt,ht=Q),vt.attachTo=function(t,e){void 0===e&&(e={isUnbounded:void 0});var n=new vt(t);return void 0!==e.isUnbounded&&(n.unbounded=e.isUnbounded),n},vt.createAdapter=function(n){return{addClass:function(t){return n.root_.classList.add(t)},browserSupportsCssVars:function(){return st(window)},computeBoundingRect:function(){return n.root_.getBoundingClientRect()},containsEventTarget:function(t){return n.root_.contains(t)},deregisterDocumentInteractionHandler:function(t,e){return document.documentElement.removeEventListener(t,e,et())},deregisterInteractionHandler:function(t,e){return n.root_.removeEventListener(t,e,et())},deregisterResizeHandler:function(t){return window.removeEventListener("resize",t)},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}},isSurfaceActive:function(){return nt(n.root_,":active")},isSurfaceDisabled:function(){return Boolean(n.disabled)},isUnbounded:function(){return Boolean(n.unbounded)},registerDocumentInteractionHandler:function(t,e){return document.documentElement.addEventListener(t,e,et())},registerInteractionHandler:function(t,e){return n.root_.addEventListener(t,e,et())},registerResizeHandler:function(t){return window.addEventListener("resize",t)},removeClass:function(t){return n.root_.classList.remove(t)},updateCssVariable:function(t,e){return n.root_.style.setProperty(t,e)}}},Object.defineProperty(vt.prototype,"unbounded",{get:function(){return Boolean(this.unbounded_)},set:function(t){this.unbounded_=Boolean(t),this.setUnbounded_()},enumerable:!0,configurable:!0}),vt.prototype.activate=function(){this.foundation_.activate()},vt.prototype.deactivate=function(){this.foundation_.deactivate()},vt.prototype.layout=function(){this.foundation_.layout()},vt.prototype.getDefaultFoundation=function(){return new pt(vt.createAdapter(this))},vt.prototype.initialSyncWithDOM=function(){var t=this.root_;this.unbounded="mdcRippleIsUnbounded"in t.dataset},vt.prototype.setUnbounded_=function(){this.foundation_.setUnbounded(Boolean(this.unbounded_))},vt);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function vt(){var t=null!==ht&&ht.apply(this,arguments)||this;return t.disabled=!1,t}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var mt,Et={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},yt={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},At={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"},It=(p(Ct,mt=X),Object.defineProperty(Ct,"strings",{get:function(){return At},enumerable:!0,configurable:!0}),Object.defineProperty(Ct,"cssClasses",{get:function(){return Et},enumerable:!0,configurable:!0}),Object.defineProperty(Ct,"numbers",{get:function(){return yt},enumerable:!0,configurable:!0}),Object.defineProperty(Ct,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!0,configurable:!0}),Ct.prototype.handleTargetScroll=function(){},Ct.prototype.handleWindowResize=function(){},Ct.prototype.handleNavigationClick=function(){this.adapter_.notifyNavigationIconClicked()},Ct);function Ct(t){return mt.call(this,f({},Ct.defaultAdapter,t))||this}var gt,bt=(p(St,gt=It),St.prototype.destroy=function(){gt.prototype.destroy.call(this),this.adapter_.setStyle("top","")},St.prototype.handleTargetScroll=function(){var t=Math.max(this.adapter_.getViewportScrollY(),0),e=t-this.lastScrollPosition_;this.lastScrollPosition_=t,this.isCurrentlyBeingResized_||(this.currentAppBarOffsetTop_-=e,0<this.currentAppBarOffsetTop_?this.currentAppBarOffsetTop_=0:Math.abs(this.currentAppBarOffsetTop_)>this.topAppBarHeight_&&(this.currentAppBarOffsetTop_=-this.topAppBarHeight_),this.moveTopAppBar_())},St.prototype.handleWindowResize=function(){var t=this;this.resizeThrottleId_||(this.resizeThrottleId_=setTimeout(function(){t.resizeThrottleId_=0,t.throttledResizeHandler_()},yt.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized_=!0,this.resizeDebounceId_&&clearTimeout(this.resizeDebounceId_),this.resizeDebounceId_=setTimeout(function(){t.handleTargetScroll(),t.isCurrentlyBeingResized_=!1,t.resizeDebounceId_=0},yt.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},St.prototype.checkForUpdate_=function(){var t=-this.topAppBarHeight_,e=this.currentAppBarOffsetTop_<0,n=this.currentAppBarOffsetTop_>t,i=e&&n;if(i)this.wasDocked_=!1;else{if(!this.wasDocked_)return this.wasDocked_=!0;if(this.isDockedShowing_!==n)return this.isDockedShowing_=n,!0}return i},St.prototype.moveTopAppBar_=function(){if(this.checkForUpdate_()){var t=this.currentAppBarOffsetTop_;Math.abs(t)>=this.topAppBarHeight_&&(t=-yt.MAX_TOP_APP_BAR_HEIGHT),this.adapter_.setStyle("top",t+"px")}},St.prototype.throttledResizeHandler_=function(){var t=this.adapter_.getTopAppBarHeight();this.topAppBarHeight_!==t&&(this.wasDocked_=!1,this.currentAppBarOffsetTop_-=this.topAppBarHeight_-t,this.topAppBarHeight_=t),this.handleTargetScroll()},St);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function St(t){var e=gt.call(this,t)||this;return e.wasDocked_=!0,e.isDockedShowing_=!0,e.currentAppBarOffsetTop_=0,e.isCurrentlyBeingResized_=!1,e.resizeThrottleId_=0,e.resizeDebounceId_=0,e.lastScrollPosition_=e.adapter_.getViewportScrollY(),e.topAppBarHeight_=e.adapter_.getTopAppBarHeight(),e}var Tt,Lt=(p(Ot,Tt=bt),Ot.prototype.handleTargetScroll=function(){this.adapter_.getViewportScrollY()<=0?this.wasScrolled_&&(this.adapter_.removeClass(Et.FIXED_SCROLLED_CLASS),this.wasScrolled_=!1):this.wasScrolled_||(this.adapter_.addClass(Et.FIXED_SCROLLED_CLASS),this.wasScrolled_=!0)},Ot);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function Ot(){var t=null!==Tt&&Tt.apply(this,arguments)||this;return t.wasScrolled_=!1,t}var xt,Dt=(p(wt,xt=It),Object.defineProperty(wt.prototype,"isCollapsed",{get:function(){return this.isCollapsed_},enumerable:!0,configurable:!0}),wt.prototype.init=function(){xt.prototype.init.call(this),0<this.adapter_.getTotalActionItems()&&this.adapter_.addClass(Et.SHORT_HAS_ACTION_ITEM_CLASS),this.setAlwaysCollapsed(this.adapter_.hasClass(Et.SHORT_COLLAPSED_CLASS))},wt.prototype.setAlwaysCollapsed=function(t){this.isAlwaysCollapsed_=!!t,this.isAlwaysCollapsed_?this.collapse_():this.maybeCollapseBar_()},wt.prototype.getAlwaysCollapsed=function(){return this.isAlwaysCollapsed_},wt.prototype.handleTargetScroll=function(){this.maybeCollapseBar_()},wt.prototype.maybeCollapseBar_=function(){this.isAlwaysCollapsed_||(this.adapter_.getViewportScrollY()<=0?this.isCollapsed_&&this.uncollapse_():this.isCollapsed_||this.collapse_())},wt.prototype.uncollapse_=function(){this.adapter_.removeClass(Et.SHORT_COLLAPSED_CLASS),this.isCollapsed_=!1},wt.prototype.collapse_=function(){this.adapter_.addClass(Et.SHORT_COLLAPSED_CLASS),this.isCollapsed_=!0},wt);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function wt(t){var e=xt.call(this,t)||this;return e.isCollapsed_=!1,e.isAlwaysCollapsed_=!1,e}var Rt,Ft,Nt,kt,Ht=(p(Mt,Rt=W),Mt.attachTo=function(t){return new Mt(t)},Mt.prototype.initialize=function(n){void 0===n&&(n=function(t){return _t.attachTo(t)}),this.navIcon_=this.root_.querySelector(At.NAVIGATION_ICON_SELECTOR);var t=[].slice.call(this.root_.querySelectorAll(At.ACTION_ITEM_SELECTOR));this.navIcon_&&t.push(this.navIcon_),this.iconRipples_=t.map(function(t){var e=n(t);return e.unbounded=!0,e}),this.scrollTarget_=window},Mt.prototype.initialSyncWithDOM=function(){this.handleNavigationClick_=this.foundation_.handleNavigationClick.bind(this.foundation_),this.handleWindowResize_=this.foundation_.handleWindowResize.bind(this.foundation_),this.handleTargetScroll_=this.foundation_.handleTargetScroll.bind(this.foundation_),this.scrollTarget_.addEventListener("scroll",this.handleTargetScroll_),this.navIcon_&&this.navIcon_.addEventListener("click",this.handleNavigationClick_);var t=this.root_.classList.contains(Et.FIXED_CLASS);this.root_.classList.contains(Et.SHORT_CLASS)||t||window.addEventListener("resize",this.handleWindowResize_)},Mt.prototype.destroy=function(){this.iconRipples_.forEach(function(t){return t.destroy()}),this.scrollTarget_.removeEventListener("scroll",this.handleTargetScroll_),this.navIcon_&&this.navIcon_.removeEventListener("click",this.handleNavigationClick_);var t=this.root_.classList.contains(Et.FIXED_CLASS);this.root_.classList.contains(Et.SHORT_CLASS)||t||window.removeEventListener("resize",this.handleWindowResize_),Rt.prototype.destroy.call(this)},Mt.prototype.setScrollTarget=function(t){this.scrollTarget_.removeEventListener("scroll",this.handleTargetScroll_),this.scrollTarget_=t,this.handleTargetScroll_=this.foundation_.handleTargetScroll.bind(this.foundation_),this.scrollTarget_.addEventListener("scroll",this.handleTargetScroll_)},Mt.prototype.getDefaultFoundation=function(){var n=this,t={hasClass:function(t){return n.root_.classList.contains(t)},addClass:function(t){return n.root_.classList.add(t)},removeClass:function(t){return n.root_.classList.remove(t)},setStyle:function(t,e){return n.root_.style.setProperty(t,e)},getTopAppBarHeight:function(){return n.root_.clientHeight},notifyNavigationIconClicked:function(){return n.emit(At.NAVIGATION_EVENT,{})},getViewportScrollY:function(){var t=n.scrollTarget_,e=n.scrollTarget_;return void 0!==t.pageYOffset?t.pageYOffset:e.scrollTop},getTotalActionItems:function(){return n.root_.querySelectorAll(At.ACTION_ITEM_SELECTOR).length}};return this.root_.classList.contains(Et.SHORT_CLASS)?new Dt(t):this.root_.classList.contains(Et.FIXED_CLASS)?new Lt(t):new bt(t)},Mt);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function Mt(){return null!==Rt&&Rt.apply(this,arguments)||this}function Pt(t,e){var n=document.querySelector(t);n&&(n.src=e)}n(5),n(6),Pt(".img-logo-drawer",r.a),Pt(".img-logo-top-app-bar",r.a),Pt(".img-logo",r.a),Ft=".img-banner",Nt=a.a,(kt=document.querySelector(Ft))&&(kt.style.background="url('"+Nt+"') no-repeat",kt.style.backgroundSize="cover"),Pt(".img-fiverr-countdown",c.a),Pt(".img-fiverr-timer",d.a);var Bt=j.attachTo(document.querySelector(".mdc-drawer")),Vt=Ht.attachTo(document.getElementById("app-bar"));Vt.setScrollTarget(document.getElementById("main-content")),Vt.listen("MDCTopAppBar:nav",function(){Bt.open=!Bt.open});var Ut=document.querySelector(".mdc-drawer .mdc-list");document.querySelector(".main-content");Ut.addEventListener("click",function(t){Bt.open=!1});[].map.call(document.querySelectorAll(".mdc-button,.mdc-card__primary-action,.mdc-drawer .mdc-list-item"),function(t){return new _t(t)}),[].map.call(document.querySelectorAll(".mdc-icon-button"),function(t){var e=new _t(t);return e.unbounded=!0,e});!function(){var t=document.querySelectorAll(".in-contents");if(!(t.length<=0)){for(var e="",n=0;n<t.length;++n){var i=t[n];if(i){var r=i.getAttribute("id"),o=i.querySelector(".page-section__overline"),a=i.querySelector(".page-section__h");if(r)if(a)e+='<li><a href="#'+r+'">'+(o?o.innerText+" - ":"")+a.innerText+"</a></li>"}}var s=document.querySelector(".page-contents ul");s&&(s.innerHTML=e)}}(),function(){var t=document.querySelectorAll(".mdc-drawer .mdc-list-item");if(!(t.length<=0)){for(var e=[],n=0;n<t.length;++n)e[n]={href:t[n].getAttribute("href"),html:t[n].innerHTML,text:t[n].innerText};for(var i=document.querySelectorAll(".desktop-nav-list-item"),r=0;r<e.length&&r<i.length;++r){i[r].setAttribute("href",e[r].href);var o=i[r].querySelector(".desktop-nav-list-item__text");o&&(o.innerHTML=e[r].html)}var a=document.querySelector(".main-footer nav");if(a){for(var s=a.innerHTML,c="",u=0;u<e.length;++u)c+=(""==c?"":" | ")+'<a href="'+e[u].href+'">'+e[u].text+"</a>";c+=s,a.innerHTML=c}}}(),function(){for(var t=new URL(window.location.href).pathname.replace(/\.html/i,""),e=document.querySelectorAll(".mdc-drawer .mdc-list-item"),n=0;n<e.length;++n){if(new URL(e[n]).pathname.replace(/\.html/i,"")==t){e[n].classList.add("mdc-list-item--activated"),e[n].setAttribute("aria-selected","true"),e[n].setAttribute("tabindex","0");break}}for(var i=document.querySelectorAll(".desktop-nav-list-item"),r=0;r<i.length;++r){if(new URL(i[r]).pathname.replace(/\.html/i,"")==t){i[r].setAttribute("aria-selected","true"),i[r].querySelector(".desktop-nav-list-item__text").classList.add("desktop-nav-list-item__text--activated");break}}}();var qt=document.querySelector(".modal-for-asides"),zt=document.querySelector(".modal-for-asides__got-it-button"),jt=document.querySelector(".modal-for-asides__content"),Gt=document.querySelector("#aside-card--loader");zt&&(zt.onclick=function(){qt.classList.remove("modal-for-asides--shown")});var Xt=document.querySelectorAll(".has-aside");function Kt(t){for(var e=document.querySelectorAll(".aside-card"),n=0;n<e.length;++n){var i=e[n];if(i.getAttribute("data-aside")==t)return i}return!1}Xt&&Xt.forEach(function(t){var e=document.createElement("i");e.className="material-icons md-18",e.setAttribute("aria-hidden","true"),e.innerHTML="zoom_in",t.appendChild(e)}),document.querySelector("body").addEventListener("click",function(t){t.target.classList.contains("has-aside")&&!function n(i){document.querySelectorAll(".aside-card").forEach(function(t){t.classList.add("d-none")});Gt.classList.remove("d-none");qt.classList.add("modal-for-asides--shown");var t=Kt(i);if(t)t.classList.remove("d-none"),Gt.classList.add("d-none");else{var e="asides/"+i,r=new XMLHttpRequest;r.onreadystatechange=function(){if(4==r.readyState&&200==r.status){var t=document.createElement("div");t.innerHTML=r.responseText;var e=t.firstChild;e.setAttribute("data-aside",i),jt.appendChild(e),e.classList.remove("d-none"),Gt.classList.add("d-none")}else 4==r.readyState&&404==r.status&&n("aside__404.html")},r.open("GET",e,!0),r.send()}}(t.target.getAttribute("data-aside"))})}]);