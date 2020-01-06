!function(n){var i={};function o(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=n,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=9)}([function(t,e,n){var E,i,y=n(7),A=n(8),I=(i=[],{activateTrap:function(t){if(0<i.length){var e=i[i.length-1];e!==t&&e.pause()}var n=i.indexOf(t);-1===n||i.splice(n,1),i.push(t)},deactivateTrap:function(t){var e=i.indexOf(t);-1!==e&&i.splice(e,1),0<i.length&&i[i.length-1].unpause()}});function C(t){return setTimeout(t,0)}t.exports=function(t,e){var i=document,n="string"==typeof t?i.querySelector(t):t,o=A({returnFocusOnDeactivate:!0,escapeDeactivates:!0},e),r={firstTabbableNode:null,lastTabbableNode:null,nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1},a={activate:function(t){if(r.active)return;v(),r.active=!0,r.paused=!1,r.nodeFocusedBeforeActivation=i.activeElement;var e=t&&t.onActivate?t.onActivate:o.onActivate;e&&e();return c(),a},deactivate:s,pause:function(){if(r.paused||!r.active)return;r.paused=!0,u()},unpause:function(){if(!r.paused||!r.active)return;r.paused=!1,v(),c()}};return a;function s(t){if(r.active){clearTimeout(E),u(),r.active=!1,r.paused=!1,I.deactivateTrap(a);var e=t&&void 0!==t.onDeactivate?t.onDeactivate:o.onDeactivate;return e&&e(),(t&&void 0!==t.returnFocus?t.returnFocus:o.returnFocusOnDeactivate)&&C(function(){m(function(t){var e=d("setReturnFocus");return e||t}(r.nodeFocusedBeforeActivation))}),a}}function c(){if(r.active)return I.activateTrap(a),E=C(function(){m(l())}),i.addEventListener("focusin",f,!0),i.addEventListener("mousedown",p,{capture:!0,passive:!1}),i.addEventListener("touchstart",p,{capture:!0,passive:!1}),i.addEventListener("click",h,{capture:!0,passive:!1}),i.addEventListener("keydown",_,{capture:!0,passive:!1}),a}function u(){if(r.active)return i.removeEventListener("focusin",f,!0),i.removeEventListener("mousedown",p,!0),i.removeEventListener("touchstart",p,!0),i.removeEventListener("click",h,!0),i.removeEventListener("keydown",_,!0),a}function d(t){var e=o[t],n=e;if(!e)return null;if("string"==typeof e&&!(n=i.querySelector(e)))throw new Error("`"+t+"` refers to no known node");if("function"==typeof e&&!(n=e()))throw new Error("`"+t+"` did not return a node");return n}function l(){var t;if(!(t=null!==d("initialFocus")?d("initialFocus"):n.contains(i.activeElement)?i.activeElement:r.firstTabbableNode||d("fallbackFocus")))throw new Error("Your focus-trap needs to have at least one focusable element");return t}function p(t){n.contains(t.target)||(o.clickOutsideDeactivates?s({returnFocus:!y.isFocusable(t.target)}):o.allowOutsideClick&&o.allowOutsideClick(t)||t.preventDefault())}function f(t){n.contains(t.target)||t.target instanceof Document||(t.stopImmediatePropagation(),m(r.mostRecentlyFocusedNode||l()))}function _(t){if(!1!==o.escapeDeactivates&&function(t){return"Escape"===t.key||"Esc"===t.key||27===t.keyCode}(t))return t.preventDefault(),void s();!function(t){return"Tab"===t.key||9===t.keyCode}(t)||function(t){if(v(),t.shiftKey&&t.target===r.firstTabbableNode)return t.preventDefault(),m(r.lastTabbableNode);if(!t.shiftKey&&t.target===r.lastTabbableNode)t.preventDefault(),m(r.firstTabbableNode)}(t)}function h(t){o.clickOutsideDeactivates||n.contains(t.target)||o.allowOutsideClick&&o.allowOutsideClick(t)||(t.preventDefault(),t.stopImmediatePropagation())}function v(){var t=y(n);r.firstTabbableNode=t[0]||l(),r.lastTabbableNode=t[t.length-1]||l()}function m(t){t!==i.activeElement&&(t&&t.focus?(t.focus(),function(t){return t.tagName&&"input"===t.tagName.toLowerCase()&&"function"==typeof t.select}(r.mostRecentlyFocusedNode=t)&&t.select()):m(l()))}}},function(t,e,n){t.exports=n.p+"mql4solutions-logo-navbar.d8cad8d330426eb1cca7.png"},function(t,e,n){t.exports=n.p+"mql4solutions-banner.c6c4abd9a3b741316aa2.png"},function(t,e,n){t.exports=n.p+"fiverr-countdown.313ebfb6cff3ce8d8804.png"},function(t,e,n){t.exports=n.p+"fiverr-timer.32dd673bef2d5dc85d1f.png"},function(t,e,n){},function(t,e,n){},function(t,e){var n=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],c=n.join(","),u="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function i(t,e){e=e||{};var n,i,o,r=[],a=[],s=t.querySelectorAll(c);for(e.includeContainer&&u.call(t,c)&&(s=Array.prototype.slice.apply(s)).unshift(t),n=0;n<s.length;n++)d(i=s[n])&&(0===(o=l(i))?r.push(i):a.push({documentOrder:n,tabIndex:o,node:i}));return a.sort(p).map(function(t){return t.node}).concat(r)}function d(t){return!(!o(t)||function(t){return function(t){return a(t)&&"radio"===t.type}(t)&&!function(t){if(!t.name)return!0;var e=function(t){for(var e=0;e<t.length;e++)if(t[e].checked)return t[e]}(t.ownerDocument.querySelectorAll('input[type="radio"][name="'+t.name+'"]'));return!e||e===t}(t)}(t)||l(t)<0)}function o(t){return!(t.disabled||function(t){return a(t)&&"hidden"===t.type}(t)||function(t){return null===t.offsetParent||"hidden"===getComputedStyle(t).visibility}(t))}i.isTabbable=function(t){if(!t)throw new Error("No node provided");return!1!==u.call(t,c)&&d(t)},i.isFocusable=function(t){if(!t)throw new Error("No node provided");return!1!==u.call(t,r)&&o(t)};var r=n.concat("iframe").join(",");function l(t){var e=parseInt(t.getAttribute("tabindex"),10);return isNaN(e)?function(t){return"true"===t.contentEditable}(t)?0:t.tabIndex:e}function p(t,e){return t.tabIndex===e.tabIndex?t.documentOrder-e.documentOrder:t.tabIndex-e.tabIndex}function a(t){return"INPUT"===t.tagName}t.exports=i},function(t,e){t.exports=function(){for(var t={},e=0;e<arguments.length;e++){var n=arguments[e];for(var i in n)o.call(n,i)&&(t[i]=n[i])}return t};var o=Object.prototype.hasOwnProperty},function(t,e,n){"use strict";n.r(e);var i=n(1),o=n.n(i),r=n(2),a=n.n(r),s=n(3),c=n.n(s),u=n(4),d=n.n(u),l=function(t,e){return(l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function p(t,e){function n(){this.constructor=t}l(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var f=function(){return(f=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function _(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var i,o,r=n.call(t),a=[];try{for(;(void 0===e||0<e--)&&!(i=r.next()).done;)a.push(i.value)}catch(t){o={error:t}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return a}function h(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(_(arguments[e]));return t}
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
 */function y(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];this.root_=t,this.initialize.apply(this,h(n)),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}function A(t,e){return(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e)}
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
 */var I={LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_DISABLED_CLASS:"mdc-list-item--disabled",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",ROOT:"mdc-list"},C={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"]:not(:disabled), input[type="radio"]:not(:disabled)',CHECKBOX_SELECTOR:'input[type="checkbox"]:not(:disabled)',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:"\n    ."+I.LIST_ITEM_CLASS+" button:not(:disabled),\n    ."+I.LIST_ITEM_CLASS+" a\n  ",FOCUSABLE_CHILD_ELEMENTS:"\n    ."+I.LIST_ITEM_CLASS+" button:not(:disabled),\n    ."+I.LIST_ITEM_CLASS+" a,\n    ."+I.LIST_ITEM_CLASS+' input[type="radio"]:not(:disabled),\n    .'+I.LIST_ITEM_CLASS+' input[type="checkbox"]:not(:disabled)\n  ',RADIO_SELECTOR:'input[type="radio"]:not(:disabled)'},g={UNSET_INDEX:-1},b=["input","button","textarea","select"];var S,T=(p(O,S=v),Object.defineProperty(O,"strings",{get:function(){return C},enumerable:!0,configurable:!0}),Object.defineProperty(O,"cssClasses",{get:function(){return I},enumerable:!0,configurable:!0}),Object.defineProperty(O,"numbers",{get:function(){return g},enumerable:!0,configurable:!0}),Object.defineProperty(O,"defaultAdapter",{get:function(){return{addClassForElementIndex:function(){},focusItemAtIndex:function(){},getAttributeForElementIndex:function(){return null},getFocusedElementIndex:function(){return 0},getListItemCount:function(){return 0},hasCheckboxAtIndex:function(){return!1},hasRadioAtIndex:function(){return!1},isCheckboxCheckedAtIndex:function(){return!1},isFocusInsideList:function(){return!1},isRootFocused:function(){return!1},notifyAction:function(){},removeClassForElementIndex:function(){},setAttributeForElementIndex:function(){},setCheckedCheckboxOrRadioAtIndex:function(){},setTabIndexForListItemChildren:function(){}}},enumerable:!0,configurable:!0}),O.prototype.layout=function(){0!==this.adapter_.getListItemCount()&&(this.adapter_.hasCheckboxAtIndex(0)?this.isCheckboxList_=!0:this.adapter_.hasRadioAtIndex(0)&&(this.isRadioList_=!0))},O.prototype.setWrapFocus=function(t){this.wrapFocus_=t},O.prototype.setVerticalOrientation=function(t){this.isVertical_=t},O.prototype.setSingleSelection=function(t){this.isSingleSelectionList_=t},O.prototype.setUseActivatedClass=function(t){this.useActivatedClass_=t},O.prototype.getSelectedIndex=function(){return this.selectedIndex_},O.prototype.setSelectedIndex=function(t){this.isIndexValid_(t)&&(this.isCheckboxList_?this.setCheckboxAtIndex_(t):this.isRadioList_?this.setRadioAtIndex_(t):this.setSingleSelectionAtIndex_(t))},O.prototype.handleFocusIn=function(t,e){0<=e&&this.adapter_.setTabIndexForListItemChildren(e,"0")},O.prototype.handleFocusOut=function(t,e){var n=this;0<=e&&this.adapter_.setTabIndexForListItemChildren(e,"-1"),setTimeout(function(){n.adapter_.isFocusInsideList()||n.setTabindexToFirstSelectedItem_()},0)},O.prototype.handleKeydown=function(t,e,n){var i="ArrowLeft"===t.key||37===t.keyCode,o="ArrowUp"===t.key||38===t.keyCode,r="ArrowRight"===t.key||39===t.keyCode,a="ArrowDown"===t.key||40===t.keyCode,s="Home"===t.key||36===t.keyCode,c="End"===t.key||35===t.keyCode,u="Enter"===t.key||13===t.keyCode,d="Space"===t.key||32===t.keyCode;if(this.adapter_.isRootFocused())o||c?(t.preventDefault(),this.focusLastElement()):(a||s)&&(t.preventDefault(),this.focusFirstElement());else{var l=this.adapter_.getFocusedElementIndex();if(!(-1===l&&(l=n)<0)){var p;if(this.isVertical_&&a||!this.isVertical_&&r)this.preventDefaultEvent_(t),p=this.focusNextElement(l);else if(this.isVertical_&&o||!this.isVertical_&&i)this.preventDefaultEvent_(t),p=this.focusPrevElement(l);else if(s)this.preventDefaultEvent_(t),p=this.focusFirstElement();else if(c)this.preventDefaultEvent_(t),p=this.focusLastElement();else if((u||d)&&e){var f=t.target;if(f&&"A"===f.tagName&&u)return;this.preventDefaultEvent_(t),this.isSelectableList_()&&this.setSelectedIndexOnAction_(l),this.adapter_.notifyAction(l)}this.focusedItemIndex_=l,void 0!==p&&(this.setTabindexAtIndex_(p),this.focusedItemIndex_=p)}}},O.prototype.handleClick=function(t,e){t!==g.UNSET_INDEX&&(this.isSelectableList_()&&this.setSelectedIndexOnAction_(t,e),this.adapter_.notifyAction(t),this.setTabindexAtIndex_(t),this.focusedItemIndex_=t)},O.prototype.focusNextElement=function(t){var e=t+1;if(this.adapter_.getListItemCount()<=e){if(!this.wrapFocus_)return t;e=0}return this.adapter_.focusItemAtIndex(e),e},O.prototype.focusPrevElement=function(t){var e=t-1;if(e<0){if(!this.wrapFocus_)return t;e=this.adapter_.getListItemCount()-1}return this.adapter_.focusItemAtIndex(e),e},O.prototype.focusFirstElement=function(){return this.adapter_.focusItemAtIndex(0),0},O.prototype.focusLastElement=function(){var t=this.adapter_.getListItemCount()-1;return this.adapter_.focusItemAtIndex(t),t},O.prototype.setEnabled=function(t,e){this.isIndexValid_(t)&&(e?(this.adapter_.removeClassForElementIndex(t,I.LIST_ITEM_DISABLED_CLASS),this.adapter_.setAttributeForElementIndex(t,C.ARIA_DISABLED,"false")):(this.adapter_.addClassForElementIndex(t,I.LIST_ITEM_DISABLED_CLASS),this.adapter_.setAttributeForElementIndex(t,C.ARIA_DISABLED,"true")))},O.prototype.preventDefaultEvent_=function(t){var e=(""+t.target.tagName).toLowerCase();-1===b.indexOf(e)&&t.preventDefault()},O.prototype.setSingleSelectionAtIndex_=function(t){if(this.selectedIndex_!==t){var e=I.LIST_ITEM_SELECTED_CLASS;this.useActivatedClass_&&(e=I.LIST_ITEM_ACTIVATED_CLASS),this.selectedIndex_!==g.UNSET_INDEX&&this.adapter_.removeClassForElementIndex(this.selectedIndex_,e),this.adapter_.addClassForElementIndex(t,e),this.setAriaForSingleSelectionAtIndex_(t),this.selectedIndex_=t}},O.prototype.setAriaForSingleSelectionAtIndex_=function(t){this.selectedIndex_===g.UNSET_INDEX&&(this.ariaCurrentAttrValue_=this.adapter_.getAttributeForElementIndex(t,C.ARIA_CURRENT));var e=null!==this.ariaCurrentAttrValue_,n=e?C.ARIA_CURRENT:C.ARIA_SELECTED;this.selectedIndex_!==g.UNSET_INDEX&&this.adapter_.setAttributeForElementIndex(this.selectedIndex_,n,"false");var i=e?this.ariaCurrentAttrValue_:"true";this.adapter_.setAttributeForElementIndex(t,n,i)},O.prototype.setRadioAtIndex_=function(t){this.adapter_.setCheckedCheckboxOrRadioAtIndex(t,!0),this.selectedIndex_!==g.UNSET_INDEX&&this.adapter_.setAttributeForElementIndex(this.selectedIndex_,C.ARIA_CHECKED,"false"),this.adapter_.setAttributeForElementIndex(t,C.ARIA_CHECKED,"true"),this.selectedIndex_=t},O.prototype.setCheckboxAtIndex_=function(t){for(var e=0;e<this.adapter_.getListItemCount();e++){var n=!1;0<=t.indexOf(e)&&(n=!0),this.adapter_.setCheckedCheckboxOrRadioAtIndex(e,n),this.adapter_.setAttributeForElementIndex(e,C.ARIA_CHECKED,n?"true":"false")}this.selectedIndex_=t},O.prototype.setTabindexAtIndex_=function(t){this.focusedItemIndex_===g.UNSET_INDEX&&0!==t?this.adapter_.setAttributeForElementIndex(0,"tabindex","-1"):0<=this.focusedItemIndex_&&this.focusedItemIndex_!==t&&this.adapter_.setAttributeForElementIndex(this.focusedItemIndex_,"tabindex","-1"),this.adapter_.setAttributeForElementIndex(t,"tabindex","0")},O.prototype.isSelectableList_=function(){return this.isSingleSelectionList_||this.isCheckboxList_||this.isRadioList_},O.prototype.setTabindexToFirstSelectedItem_=function(){var t=0;this.isSelectableList_()&&("number"==typeof this.selectedIndex_&&this.selectedIndex_!==g.UNSET_INDEX?t=this.selectedIndex_:function(t){return t instanceof Array}(this.selectedIndex_)&&0<this.selectedIndex_.length&&(t=this.selectedIndex_.reduce(function(t,e){return Math.min(t,e)}))),this.setTabindexAtIndex_(t)},O.prototype.isIndexValid_=function(t){var e=this;if(t instanceof Array){if(!this.isCheckboxList_)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");return 0===t.length||t.some(function(t){return e.isIndexInRange_(t)})}if("number"!=typeof t)return!1;if(this.isCheckboxList_)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+t);return this.isIndexInRange_(t)},O.prototype.isIndexInRange_=function(t){var e=this.adapter_.getListItemCount();return 0<=t&&t<e},O.prototype.setSelectedIndexOnAction_=function(t,e){void 0===e&&(e=!0),this.isCheckboxList_?this.toggleCheckboxAtIndex_(t,e):this.setSelectedIndex(t)},O.prototype.toggleCheckboxAtIndex_=function(e,t){var n=this.adapter_.isCheckboxCheckedAtIndex(e);t&&(n=!n,this.adapter_.setCheckedCheckboxOrRadioAtIndex(e,n)),this.adapter_.setAttributeForElementIndex(e,C.ARIA_CHECKED,n?"true":"false");var i=this.selectedIndex_===g.UNSET_INDEX?[]:this.selectedIndex_.slice();n?i.push(e):i=i.filter(function(t){return t!==e}),this.selectedIndex_=i},O);function O(t){var e=S.call(this,f({},O.defaultAdapter,t))||this;return e.wrapFocus_=!1,e.isVertical_=!0,e.isSingleSelectionList_=!1,e.selectedIndex_=g.UNSET_INDEX,e.focusedItemIndex_=g.UNSET_INDEX,e.useActivatedClass_=!1,e.ariaCurrentAttrValue_=null,e.isCheckboxList_=!1,e.isRadioList_=!1,e}var L,x=(p(D,L=E),Object.defineProperty(D.prototype,"vertical",{set:function(t){this.foundation_.setVerticalOrientation(t)},enumerable:!0,configurable:!0}),Object.defineProperty(D.prototype,"listElements",{get:function(){return[].slice.call(this.root_.querySelectorAll("."+I.LIST_ITEM_CLASS))},enumerable:!0,configurable:!0}),Object.defineProperty(D.prototype,"wrapFocus",{set:function(t){this.foundation_.setWrapFocus(t)},enumerable:!0,configurable:!0}),Object.defineProperty(D.prototype,"singleSelection",{set:function(t){this.foundation_.setSingleSelection(t)},enumerable:!0,configurable:!0}),Object.defineProperty(D.prototype,"selectedIndex",{get:function(){return this.foundation_.getSelectedIndex()},set:function(t){this.foundation_.setSelectedIndex(t)},enumerable:!0,configurable:!0}),D.attachTo=function(t){return new D(t)},D.prototype.initialSyncWithDOM=function(){this.handleClick_=this.handleClickEvent_.bind(this),this.handleKeydown_=this.handleKeydownEvent_.bind(this),this.focusInEventListener_=this.handleFocusInEvent_.bind(this),this.focusOutEventListener_=this.handleFocusOutEvent_.bind(this),this.listen("keydown",this.handleKeydown_),this.listen("click",this.handleClick_),this.listen("focusin",this.focusInEventListener_),this.listen("focusout",this.focusOutEventListener_),this.layout(),this.initializeListType()},D.prototype.destroy=function(){this.unlisten("keydown",this.handleKeydown_),this.unlisten("click",this.handleClick_),this.unlisten("focusin",this.focusInEventListener_),this.unlisten("focusout",this.focusOutEventListener_)},D.prototype.layout=function(){var t=this.root_.getAttribute(C.ARIA_ORIENTATION);this.vertical=t!==C.ARIA_ORIENTATION_HORIZONTAL,[].slice.call(this.root_.querySelectorAll(".mdc-list-item:not([tabindex])")).forEach(function(t){t.setAttribute("tabindex","-1")}),[].slice.call(this.root_.querySelectorAll(C.FOCUSABLE_CHILD_ELEMENTS)).forEach(function(t){return t.setAttribute("tabindex","-1")}),this.foundation_.layout()},D.prototype.initializeListType=function(){var e=this,t=this.root_.querySelectorAll(C.ARIA_ROLE_CHECKBOX_SELECTOR),n=this.root_.querySelector("\n      ."+I.LIST_ITEM_ACTIVATED_CLASS+",\n      ."+I.LIST_ITEM_SELECTED_CLASS+"\n    "),i=this.root_.querySelector(C.ARIA_CHECKED_RADIO_SELECTOR);if(t.length){var o=this.root_.querySelectorAll(C.ARIA_CHECKED_CHECKBOX_SELECTOR);this.selectedIndex=[].map.call(o,function(t){return e.listElements.indexOf(t)})}else n?(n.classList.contains(I.LIST_ITEM_ACTIVATED_CLASS)&&this.foundation_.setUseActivatedClass(!0),this.singleSelection=!0,this.selectedIndex=this.listElements.indexOf(n)):i&&(this.selectedIndex=this.listElements.indexOf(i))},D.prototype.setEnabled=function(t,e){this.foundation_.setEnabled(t,e)},D.prototype.getDefaultFoundation=function(){var o=this;return new T({addClassForElementIndex:function(t,e){var n=o.listElements[t];n&&n.classList.add(e)},focusItemAtIndex:function(t){var e=o.listElements[t];e&&e.focus()},getAttributeForElementIndex:function(t,e){return o.listElements[t].getAttribute(e)},getFocusedElementIndex:function(){return o.listElements.indexOf(document.activeElement)},getListItemCount:function(){return o.listElements.length},hasCheckboxAtIndex:function(t){return!!o.listElements[t].querySelector(C.CHECKBOX_SELECTOR)},hasRadioAtIndex:function(t){return!!o.listElements[t].querySelector(C.RADIO_SELECTOR)},isCheckboxCheckedAtIndex:function(t){return o.listElements[t].querySelector(C.CHECKBOX_SELECTOR).checked},isFocusInsideList:function(){return o.root_.contains(document.activeElement)},isRootFocused:function(){return document.activeElement===o.root_},notifyAction:function(t){o.emit(C.ACTION_EVENT,{index:t},!0)},removeClassForElementIndex:function(t,e){var n=o.listElements[t];n&&n.classList.remove(e)},setAttributeForElementIndex:function(t,e,n){var i=o.listElements[t];i&&i.setAttribute(e,n)},setCheckedCheckboxOrRadioAtIndex:function(t,e){var n=o.listElements[t].querySelector(C.CHECKBOX_RADIO_SELECTOR);n.checked=e;var i=document.createEvent("Event");i.initEvent("change",!0,!0),n.dispatchEvent(i)},setTabIndexForListItemChildren:function(t,e){var n=o.listElements[t];[].slice.call(n.querySelectorAll(C.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX)).forEach(function(t){return t.setAttribute("tabindex",e)})}})},D.prototype.getListItemIndex_=function(t){var e=
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
 */function D(){return null!==L&&L.apply(this,arguments)||this}var w,R=n(0),F=n.n(R),N={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},k={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim"},H=(p(M,w=v),Object.defineProperty(M,"strings",{get:function(){return k},enumerable:!0,configurable:!0}),Object.defineProperty(M,"cssClasses",{get:function(){return N},enumerable:!0,configurable:!0}),Object.defineProperty(M,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!0,configurable:!0}),M.prototype.destroy=function(){this.animationFrame_&&cancelAnimationFrame(this.animationFrame_),this.animationTimer_&&clearTimeout(this.animationTimer_)},M.prototype.open=function(){var t=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter_.addClass(N.OPEN),this.adapter_.addClass(N.ANIMATE),this.runNextAnimationFrame_(function(){t.adapter_.addClass(N.OPENING)}),this.adapter_.saveFocus())},M.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter_.addClass(N.CLOSING)},M.prototype.isOpen=function(){return this.adapter_.hasClass(N.OPEN)},M.prototype.isOpening=function(){return this.adapter_.hasClass(N.OPENING)||this.adapter_.hasClass(N.ANIMATE)},M.prototype.isClosing=function(){return this.adapter_.hasClass(N.CLOSING)},M.prototype.handleKeydown=function(t){var e=t.keyCode;"Escape"!==t.key&&27!==e||this.close()},M.prototype.handleTransitionEnd=function(t){var e=N.OPENING,n=N.CLOSING,i=N.OPEN,o=N.ANIMATE,r=N.ROOT;this.isElement_(t.target)&&this.adapter_.elementHasClass(t.target,r)&&(this.isClosing()?(this.adapter_.removeClass(i),this.closed_(),this.adapter_.restoreFocus(),this.adapter_.notifyClose()):(this.adapter_.focusActiveNavigationItem(),this.opened_(),this.adapter_.notifyOpen()),this.adapter_.removeClass(o),this.adapter_.removeClass(e),this.adapter_.removeClass(n))},M.prototype.opened_=function(){},M.prototype.closed_=function(){},M.prototype.runNextAnimationFrame_=function(t){var e=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame(function(){e.animationFrame_=0,clearTimeout(e.animationTimer_),e.animationTimer_=setTimeout(t,0)})},M.prototype.isElement_=function(t){return Boolean(t.classList)},M);function M(t){var e=w.call(this,f({},M.defaultAdapter,t))||this;return e.animationFrame_=0,e.animationTimer_=0,e}var P,B=(p(V,P=H),V.prototype.handleScrimClick=function(){this.close()},V.prototype.opened_=function(){this.adapter_.trapFocus()},V.prototype.closed_=function(){this.adapter_.releaseFocus()},V);
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
var U,z=H.cssClasses,q=H.strings,j=(p(G,U=E),G.attachTo=function(t){return new G(t)},Object.defineProperty(G.prototype,"open",{get:function(){return this.foundation_.isOpen()},set:function(t){t?this.foundation_.open():this.foundation_.close()},enumerable:!0,configurable:!0}),Object.defineProperty(G.prototype,"list",{get:function(){return this.list_},enumerable:!0,configurable:!0}),G.prototype.initialize=function(t,e){void 0===t&&(t=F.a),void 0===e&&(e=function(t){return new x(t)});var n=this.root_.querySelector("."+T.cssClasses.ROOT);n&&(this.list_=e(n),this.list_.wrapFocus=!0),this.focusTrapFactory_=t},G.prototype.initialSyncWithDOM=function(){var e=this,t=z.MODAL,n=q.SCRIM_SELECTOR;this.scrim_=this.root_.parentNode.querySelector(n),this.scrim_&&this.root_.classList.contains(t)&&(this.handleScrimClick_=function(){return e.foundation_.handleScrimClick()},this.scrim_.addEventListener("click",this.handleScrimClick_),this.focusTrap_=
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
function(t,e){return void 0===e&&(e=F.a),e(t,{clickOutsideDeactivates:!0,escapeDeactivates:!1,initialFocus:void 0,returnFocusOnDeactivate:!1})}(this.root_,this.focusTrapFactory_)),this.handleKeydown_=function(t){return e.foundation_.handleKeydown(t)},this.handleTransitionEnd_=function(t){return e.foundation_.handleTransitionEnd(t)},this.listen("keydown",this.handleKeydown_),this.listen("transitionend",this.handleTransitionEnd_)},G.prototype.destroy=function(){this.unlisten("keydown",this.handleKeydown_),this.unlisten("transitionend",this.handleTransitionEnd_),this.list_&&this.list_.destroy();var t=z.MODAL;this.scrim_&&this.handleScrimClick_&&this.root_.classList.contains(t)&&(this.scrim_.removeEventListener("click",this.handleScrimClick_),this.open=!1)},G.prototype.getDefaultFoundation=function(){var e=this,t={addClass:function(t){return e.root_.classList.add(t)},removeClass:function(t){return e.root_.classList.remove(t)},hasClass:function(t){return e.root_.classList.contains(t)},elementHasClass:function(t,e){return t.classList.contains(e)},saveFocus:function(){return e.previousFocus_=document.activeElement},restoreFocus:function(){var t=e.previousFocus_;t&&t.focus&&e.root_.contains(document.activeElement)&&t.focus()},focusActiveNavigationItem:function(){var t=e.root_.querySelector("."+T.cssClasses.LIST_ITEM_ACTIVATED_CLASS);t&&t.focus()},notifyClose:function(){return e.emit(q.CLOSE_EVENT,{},!0)},notifyOpen:function(){return e.emit(q.OPEN_EVENT,{},!0)},trapFocus:function(){return e.focusTrap_.activate()},releaseFocus:function(){return e.focusTrap_.deactivate()}},n=z.DISMISSIBLE,i=z.MODAL;if(this.root_.classList.contains(n))return new H(t);if(this.root_.classList.contains(i))return new B(t);throw new Error("MDCDrawer: Failed to instantiate component. Supported variants are "+n+" and "+i+".")},G);function G(){return null!==U&&U.apply(this,arguments)||this}
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
 */function Y(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];this.root_=t,this.initialize.apply(this,h(n)),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}var Z=(Object.defineProperty(J,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(J,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(J,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(J,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),J.prototype.init=function(){},J.prototype.destroy=function(){},J);
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
 */function J(t){void 0===t&&(t={}),this.adapter_=t}var Q=(tt.attachTo=function(t){return new tt(t,new Z({}))},tt.prototype.initialize=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},tt.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},tt.prototype.initialSyncWithDOM=function(){},tt.prototype.destroy=function(){this.foundation_.destroy()},tt.prototype.listen=function(t,e,n){this.root_.addEventListener(t,e,n)},tt.prototype.unlisten=function(t,e,n){this.root_.removeEventListener(t,e,n)},tt.prototype.emit=function(t,e,n){var i;void 0===n&&(n=!1),"function"==typeof CustomEvent?i=new CustomEvent(t,{bubbles:n,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,n,!1,e),this.root_.dispatchEvent(i)},tt);
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
 */function tt(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];this.root_=t,this.initialize.apply(this,h(n)),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}var et;
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
 */function nt(t,e){if(void 0===t&&(t=window),void 0===e&&(e=!1),void 0===et||e){var n=!1;try{t.document.addEventListener("test",function(){},{get passive(){return n=!0}})}catch(t){}et=n}return!!et&&{passive:!0}}
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
 */function it(t,e){return(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e)}
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
 */var ot,rt={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},at={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},st={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};function ct(t,e){void 0===e&&(e=!1);var n=t.CSS,i=ot;if("boolean"==typeof ot&&!e)return ot;if(!(n&&"function"==typeof n.supports))return!1;var o=n.supports("--css-vars","yes"),r=n.supports("(--css-vars: yes)")&&n.supports("color","#00000000");return i=!(!o&&!r)&&!function(t){var e=t.document,n=e.createElement("div");n.className="mdc-ripple-surface--test-edge-var-bug",e.head.appendChild(n);var i=t.getComputedStyle(n),o=null!==i&&"solid"===i.borderTopStyle;return n.parentNode&&n.parentNode.removeChild(n),o}(t),e||(ot=i),i}
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
var ut,dt=["touchstart","pointerdown","mousedown","keydown"],lt=["touchend","pointerup","mouseup","contextmenu"],pt=[],ft=(p(_t,ut=Z),Object.defineProperty(_t,"cssClasses",{get:function(){return rt},enumerable:!0,configurable:!0}),Object.defineProperty(_t,"strings",{get:function(){return at},enumerable:!0,configurable:!0}),Object.defineProperty(_t,"numbers",{get:function(){return st},enumerable:!0,configurable:!0}),Object.defineProperty(_t,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!0,configurable:!0}),_t.prototype.init=function(){var t=this,e=this.supportsPressRipple_();if(this.registerRootHandlers_(e),e){var n=_t.cssClasses,i=n.ROOT,o=n.UNBOUNDED;requestAnimationFrame(function(){t.adapter_.addClass(i),t.adapter_.isUnbounded()&&(t.adapter_.addClass(o),t.layoutInternal_())})}},_t.prototype.destroy=function(){var t=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(_t.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(_t.cssClasses.FG_DEACTIVATION));var e=_t.cssClasses,n=e.ROOT,i=e.UNBOUNDED;requestAnimationFrame(function(){t.adapter_.removeClass(n),t.adapter_.removeClass(i),t.removeCssVars_()})}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()},_t.prototype.activate=function(t){this.activate_(t)},_t.prototype.deactivate=function(){this.deactivate_()},_t.prototype.layout=function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(function(){t.layoutInternal_(),t.layoutFrame_=0})},_t.prototype.setUnbounded=function(t){var e=_t.cssClasses.UNBOUNDED;t?this.adapter_.addClass(e):this.adapter_.removeClass(e)},_t.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter_.addClass(_t.cssClasses.BG_FOCUSED)})},_t.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter_.removeClass(_t.cssClasses.BG_FOCUSED)})},_t.prototype.supportsPressRipple_=function(){return this.adapter_.browserSupportsCssVars()},_t.prototype.defaultActivationState_=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},_t.prototype.registerRootHandlers_=function(t){var e=this;t&&(dt.forEach(function(t){e.adapter_.registerInteractionHandler(t,e.activateHandler_)}),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)},_t.prototype.registerDeactivationHandlers_=function(t){var e=this;"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):lt.forEach(function(t){e.adapter_.registerDocumentInteractionHandler(t,e.deactivateHandler_)})},_t.prototype.deregisterRootHandlers_=function(){var e=this;dt.forEach(function(t){e.adapter_.deregisterInteractionHandler(t,e.activateHandler_)}),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)},_t.prototype.deregisterDeactivationHandlers_=function(){var e=this;this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),lt.forEach(function(t){e.adapter_.deregisterDocumentInteractionHandler(t,e.deactivateHandler_)})},_t.prototype.removeCssVars_=function(){var e=this,n=_t.strings;Object.keys(n).forEach(function(t){0===t.indexOf("VAR_")&&e.adapter_.updateCssVariable(n[t],null)})},_t.prototype.activate_=function(t){var e=this;if(!this.adapter_.isSurfaceDisabled()){var n=this.activationState_;if(!n.isActivated){var i=this.previousActivationEvent_;i&&void 0!==t&&i.type!==t.type||(n.isActivated=!0,n.isProgrammatic=void 0===t,n.activationEvent=t,n.wasActivatedByPointer=!n.isProgrammatic&&void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type),void 0!==t&&0<pt.length&&pt.some(function(t){return e.adapter_.containsEventTarget(t)})?this.resetActivationState_():(void 0!==t&&(pt.push(t.target),this.registerDeactivationHandlers_(t)),n.wasElementMadeActive=this.checkElementMadeActive_(t),n.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame(function(){pt=[],n.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(n.wasElementMadeActive=e.checkElementMadeActive_(t),n.wasElementMadeActive&&e.animateActivation_()),n.wasElementMadeActive||(e.activationState_=e.defaultActivationState_())})))}}},_t.prototype.checkElementMadeActive_=function(t){return void 0===t||"keydown"!==t.type||this.adapter_.isSurfaceActive()},_t.prototype.animateActivation_=function(){var t=this,e=_t.strings,n=e.VAR_FG_TRANSLATE_START,i=e.VAR_FG_TRANSLATE_END,o=_t.cssClasses,r=o.FG_DEACTIVATION,a=o.FG_ACTIVATION,s=_t.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var c="",u="";if(!this.adapter_.isUnbounded()){var d=this.getFgTranslationCoordinates_(),l=d.startPoint,p=d.endPoint;c=l.x+"px, "+l.y+"px",u=p.x+"px, "+p.y+"px"}this.adapter_.updateCssVariable(n,c),this.adapter_.updateCssVariable(i,u),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(r),this.adapter_.computeBoundingRect(),this.adapter_.addClass(a),this.activationTimer_=setTimeout(function(){return t.activationTimerCallback_()},s)},_t.prototype.getFgTranslationCoordinates_=function(){var t,e=this.activationState_,n=e.activationEvent;return{startPoint:t={x:(t=e.wasActivatedByPointer?function(t,e,n){if(!t)return{x:0,y:0};var i,o,r=e.x,a=e.y,s=r+n.left,c=a+n.top;if("touchstart"===t.type){var u=t;i=u.changedTouches[0].pageX-s,o=u.changedTouches[0].pageY-c}else{var d=t;i=d.pageX-s,o=d.pageY-c}return{x:i,y:o}}(n,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:t.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}},_t.prototype.runDeactivationUXLogicIfReady_=function(){var t=this,e=_t.cssClasses.FG_DEACTIVATION,n=this.activationState_,i=n.hasDeactivationUXRun,o=n.isActivated;!i&&o||!this.activationAnimationHasEnded_||(this.rmBoundedActivationClasses_(),this.adapter_.addClass(e),this.fgDeactivationRemovalTimer_=setTimeout(function(){t.adapter_.removeClass(e)},st.FG_DEACTIVATION_MS))},_t.prototype.rmBoundedActivationClasses_=function(){var t=_t.cssClasses.FG_ACTIVATION;this.adapter_.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()},_t.prototype.resetActivationState_=function(){var t=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(function(){return t.previousActivationEvent_=void 0},_t.numbers.TAP_DELAY_MS)},_t.prototype.deactivate_=function(){var t=this,e=this.activationState_;if(e.isActivated){var n=f({},e);e.isProgrammatic?(requestAnimationFrame(function(){return t.animateDeactivation_(n)}),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame(function(){t.activationState_.hasDeactivationUXRun=!0,t.animateDeactivation_(n),t.resetActivationState_()}))}},_t.prototype.animateDeactivation_=function(t){var e=t.wasActivatedByPointer,n=t.wasElementMadeActive;(e||n)&&this.runDeactivationUXLogicIfReady_()},_t.prototype.layoutInternal_=function(){var t=this;this.frame_=this.adapter_.computeBoundingRect();var e=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?e:Math.sqrt(Math.pow(t.frame_.width,2)+Math.pow(t.frame_.height,2))+_t.numbers.PADDING,this.initialSize_=Math.floor(e*_t.numbers.INITIAL_ORIGIN_SCALE),this.fgScale_=""+this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()},_t.prototype.updateLayoutCssVars_=function(){var t=_t.strings,e=t.VAR_FG_SIZE,n=t.VAR_LEFT,i=t.VAR_TOP,o=t.VAR_FG_SCALE;this.adapter_.updateCssVariable(e,this.initialSize_+"px"),this.adapter_.updateCssVariable(o,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(n,this.unboundedCoords_.left+"px"),this.adapter_.updateCssVariable(i,this.unboundedCoords_.top+"px"))},_t);function _t(t){var e=ut.call(this,f({},_t.defaultAdapter,t))||this;return e.activationAnimationHasEnded_=!1,e.activationTimer_=0,e.fgDeactivationRemovalTimer_=0,e.fgScale_="0",e.frame_={width:0,height:0},e.initialSize_=0,e.layoutFrame_=0,e.maxRadius_=0,e.unboundedCoords_={left:0,top:0},e.activationState_=e.defaultActivationState_(),e.activationTimerCallback_=function(){e.activationAnimationHasEnded_=!0,e.runDeactivationUXLogicIfReady_()},e.activateHandler_=function(t){return e.activate_(t)},e.deactivateHandler_=function(){return e.deactivate_()},e.focusHandler_=function(){return e.handleFocus()},e.blurHandler_=function(){return e.handleBlur()},e.resizeHandler_=function(){return e.layout()},e}var ht,vt=(p(mt,ht=Q),mt.attachTo=function(t,e){void 0===e&&(e={isUnbounded:void 0});var n=new mt(t);return void 0!==e.isUnbounded&&(n.unbounded=e.isUnbounded),n},mt.createAdapter=function(n){return{addClass:function(t){return n.root_.classList.add(t)},browserSupportsCssVars:function(){return ct(window)},computeBoundingRect:function(){return n.root_.getBoundingClientRect()},containsEventTarget:function(t){return n.root_.contains(t)},deregisterDocumentInteractionHandler:function(t,e){return document.documentElement.removeEventListener(t,e,nt())},deregisterInteractionHandler:function(t,e){return n.root_.removeEventListener(t,e,nt())},deregisterResizeHandler:function(t){return window.removeEventListener("resize",t)},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}},isSurfaceActive:function(){return it(n.root_,":active")},isSurfaceDisabled:function(){return Boolean(n.disabled)},isUnbounded:function(){return Boolean(n.unbounded)},registerDocumentInteractionHandler:function(t,e){return document.documentElement.addEventListener(t,e,nt())},registerInteractionHandler:function(t,e){return n.root_.addEventListener(t,e,nt())},registerResizeHandler:function(t){return window.addEventListener("resize",t)},removeClass:function(t){return n.root_.classList.remove(t)},updateCssVariable:function(t,e){return n.root_.style.setProperty(t,e)}}},Object.defineProperty(mt.prototype,"unbounded",{get:function(){return Boolean(this.unbounded_)},set:function(t){this.unbounded_=Boolean(t),this.setUnbounded_()},enumerable:!0,configurable:!0}),mt.prototype.activate=function(){this.foundation_.activate()},mt.prototype.deactivate=function(){this.foundation_.deactivate()},mt.prototype.layout=function(){this.foundation_.layout()},mt.prototype.getDefaultFoundation=function(){return new ft(mt.createAdapter(this))},mt.prototype.initialSyncWithDOM=function(){var t=this.root_;this.unbounded="mdcRippleIsUnbounded"in t.dataset},mt.prototype.setUnbounded_=function(){this.foundation_.setUnbounded(Boolean(this.unbounded_))},mt);
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
 */function mt(){var t=null!==ht&&ht.apply(this,arguments)||this;return t.disabled=!1,t}
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
var Et,yt={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},At={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},It={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"},Ct=(p(gt,Et=X),Object.defineProperty(gt,"strings",{get:function(){return It},enumerable:!0,configurable:!0}),Object.defineProperty(gt,"cssClasses",{get:function(){return yt},enumerable:!0,configurable:!0}),Object.defineProperty(gt,"numbers",{get:function(){return At},enumerable:!0,configurable:!0}),Object.defineProperty(gt,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!0,configurable:!0}),gt.prototype.handleTargetScroll=function(){},gt.prototype.handleWindowResize=function(){},gt.prototype.handleNavigationClick=function(){this.adapter_.notifyNavigationIconClicked()},gt);function gt(t){return Et.call(this,f({},gt.defaultAdapter,t))||this}var bt,St=(p(Tt,bt=Ct),Tt.prototype.destroy=function(){bt.prototype.destroy.call(this),this.adapter_.setStyle("top","")},Tt.prototype.handleTargetScroll=function(){var t=Math.max(this.adapter_.getViewportScrollY(),0),e=t-this.lastScrollPosition_;this.lastScrollPosition_=t,this.isCurrentlyBeingResized_||(this.currentAppBarOffsetTop_-=e,0<this.currentAppBarOffsetTop_?this.currentAppBarOffsetTop_=0:Math.abs(this.currentAppBarOffsetTop_)>this.topAppBarHeight_&&(this.currentAppBarOffsetTop_=-this.topAppBarHeight_),this.moveTopAppBar_())},Tt.prototype.handleWindowResize=function(){var t=this;this.resizeThrottleId_||(this.resizeThrottleId_=setTimeout(function(){t.resizeThrottleId_=0,t.throttledResizeHandler_()},At.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized_=!0,this.resizeDebounceId_&&clearTimeout(this.resizeDebounceId_),this.resizeDebounceId_=setTimeout(function(){t.handleTargetScroll(),t.isCurrentlyBeingResized_=!1,t.resizeDebounceId_=0},At.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},Tt.prototype.checkForUpdate_=function(){var t=-this.topAppBarHeight_,e=this.currentAppBarOffsetTop_<0,n=this.currentAppBarOffsetTop_>t,i=e&&n;if(i)this.wasDocked_=!1;else{if(!this.wasDocked_)return this.wasDocked_=!0;if(this.isDockedShowing_!==n)return this.isDockedShowing_=n,!0}return i},Tt.prototype.moveTopAppBar_=function(){if(this.checkForUpdate_()){var t=this.currentAppBarOffsetTop_;Math.abs(t)>=this.topAppBarHeight_&&(t=-At.MAX_TOP_APP_BAR_HEIGHT),this.adapter_.setStyle("top",t+"px")}},Tt.prototype.throttledResizeHandler_=function(){var t=this.adapter_.getTopAppBarHeight();this.topAppBarHeight_!==t&&(this.wasDocked_=!1,this.currentAppBarOffsetTop_-=this.topAppBarHeight_-t,this.topAppBarHeight_=t),this.handleTargetScroll()},Tt);
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
 */function Tt(t){var e=bt.call(this,t)||this;return e.wasDocked_=!0,e.isDockedShowing_=!0,e.currentAppBarOffsetTop_=0,e.isCurrentlyBeingResized_=!1,e.resizeThrottleId_=0,e.resizeDebounceId_=0,e.lastScrollPosition_=e.adapter_.getViewportScrollY(),e.topAppBarHeight_=e.adapter_.getTopAppBarHeight(),e}var Ot,Lt=(p(xt,Ot=St),xt.prototype.handleTargetScroll=function(){this.adapter_.getViewportScrollY()<=0?this.wasScrolled_&&(this.adapter_.removeClass(yt.FIXED_SCROLLED_CLASS),this.wasScrolled_=!1):this.wasScrolled_||(this.adapter_.addClass(yt.FIXED_SCROLLED_CLASS),this.wasScrolled_=!0)},xt);
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
 */function xt(){var t=null!==Ot&&Ot.apply(this,arguments)||this;return t.wasScrolled_=!1,t}var Dt,wt=(p(Rt,Dt=Ct),Object.defineProperty(Rt.prototype,"isCollapsed",{get:function(){return this.isCollapsed_},enumerable:!0,configurable:!0}),Rt.prototype.init=function(){Dt.prototype.init.call(this),0<this.adapter_.getTotalActionItems()&&this.adapter_.addClass(yt.SHORT_HAS_ACTION_ITEM_CLASS),this.setAlwaysCollapsed(this.adapter_.hasClass(yt.SHORT_COLLAPSED_CLASS))},Rt.prototype.setAlwaysCollapsed=function(t){this.isAlwaysCollapsed_=!!t,this.isAlwaysCollapsed_?this.collapse_():this.maybeCollapseBar_()},Rt.prototype.getAlwaysCollapsed=function(){return this.isAlwaysCollapsed_},Rt.prototype.handleTargetScroll=function(){this.maybeCollapseBar_()},Rt.prototype.maybeCollapseBar_=function(){this.isAlwaysCollapsed_||(this.adapter_.getViewportScrollY()<=0?this.isCollapsed_&&this.uncollapse_():this.isCollapsed_||this.collapse_())},Rt.prototype.uncollapse_=function(){this.adapter_.removeClass(yt.SHORT_COLLAPSED_CLASS),this.isCollapsed_=!1},Rt.prototype.collapse_=function(){this.adapter_.addClass(yt.SHORT_COLLAPSED_CLASS),this.isCollapsed_=!0},Rt);
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
 */function Rt(t){var e=Dt.call(this,t)||this;return e.isCollapsed_=!1,e.isAlwaysCollapsed_=!1,e}var Ft,Nt,kt,Ht,Mt=(p(Pt,Ft=W),Pt.attachTo=function(t){return new Pt(t)},Pt.prototype.initialize=function(n){void 0===n&&(n=function(t){return vt.attachTo(t)}),this.navIcon_=this.root_.querySelector(It.NAVIGATION_ICON_SELECTOR);var t=[].slice.call(this.root_.querySelectorAll(It.ACTION_ITEM_SELECTOR));this.navIcon_&&t.push(this.navIcon_),this.iconRipples_=t.map(function(t){var e=n(t);return e.unbounded=!0,e}),this.scrollTarget_=window},Pt.prototype.initialSyncWithDOM=function(){this.handleNavigationClick_=this.foundation_.handleNavigationClick.bind(this.foundation_),this.handleWindowResize_=this.foundation_.handleWindowResize.bind(this.foundation_),this.handleTargetScroll_=this.foundation_.handleTargetScroll.bind(this.foundation_),this.scrollTarget_.addEventListener("scroll",this.handleTargetScroll_),this.navIcon_&&this.navIcon_.addEventListener("click",this.handleNavigationClick_);var t=this.root_.classList.contains(yt.FIXED_CLASS);this.root_.classList.contains(yt.SHORT_CLASS)||t||window.addEventListener("resize",this.handleWindowResize_)},Pt.prototype.destroy=function(){this.iconRipples_.forEach(function(t){return t.destroy()}),this.scrollTarget_.removeEventListener("scroll",this.handleTargetScroll_),this.navIcon_&&this.navIcon_.removeEventListener("click",this.handleNavigationClick_);var t=this.root_.classList.contains(yt.FIXED_CLASS);this.root_.classList.contains(yt.SHORT_CLASS)||t||window.removeEventListener("resize",this.handleWindowResize_),Ft.prototype.destroy.call(this)},Pt.prototype.setScrollTarget=function(t){this.scrollTarget_.removeEventListener("scroll",this.handleTargetScroll_),this.scrollTarget_=t,this.handleTargetScroll_=this.foundation_.handleTargetScroll.bind(this.foundation_),this.scrollTarget_.addEventListener("scroll",this.handleTargetScroll_)},Pt.prototype.getDefaultFoundation=function(){var n=this,t={hasClass:function(t){return n.root_.classList.contains(t)},addClass:function(t){return n.root_.classList.add(t)},removeClass:function(t){return n.root_.classList.remove(t)},setStyle:function(t,e){return n.root_.style.setProperty(t,e)},getTopAppBarHeight:function(){return n.root_.clientHeight},notifyNavigationIconClicked:function(){return n.emit(It.NAVIGATION_EVENT,{})},getViewportScrollY:function(){var t=n.scrollTarget_,e=n.scrollTarget_;return void 0!==t.pageYOffset?t.pageYOffset:e.scrollTop},getTotalActionItems:function(){return n.root_.querySelectorAll(It.ACTION_ITEM_SELECTOR).length}};return this.root_.classList.contains(yt.SHORT_CLASS)?new wt(t):this.root_.classList.contains(yt.FIXED_CLASS)?new Lt(t):new St(t)},Pt);
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
 */function Pt(){return null!==Ft&&Ft.apply(this,arguments)||this}function Bt(t,e){var n=document.querySelector(t);n&&(n.src=e)}n(5),n(6),Bt(".img-logo-drawer",o.a),Bt(".img-logo-top-app-bar",o.a),Bt(".img-logo",o.a),Nt=".img-banner",kt=a.a,(Ht=document.querySelector(Nt))&&(Ht.style.background="url('"+kt+"') no-repeat",Ht.style.backgroundSize="cover"),Bt(".img-fiverr-countdown",c.a),Bt(".img-fiverr-timer",d.a);var Vt=j.attachTo(document.querySelector(".mdc-drawer")),Ut=Mt.attachTo(document.getElementById("app-bar"));Ut.setScrollTarget(document.getElementById("main-content")),Ut.listen("MDCTopAppBar:nav",function(){Vt.open=!Vt.open});var zt=document.querySelector(".mdc-drawer .mdc-list");document.querySelector(".main-content");zt.addEventListener("click",function(t){Vt.open=!1});[].map.call(document.querySelectorAll(".mdc-button,.mdc-card__primary-action,.mdc-drawer .mdc-list-item"),function(t){return new vt(t)}),[].map.call(document.querySelectorAll(".mdc-icon-button"),function(t){var e=new vt(t);return e.unbounded=!0,e});!function(){var t=document.querySelectorAll(".in-contents");if(!(t.length<=0)){for(var e="",n=0;n<t.length;++n){var i=t[n];if(i){var o=i.getAttribute("id"),r=i.querySelector(".page-section__overline"),a=i.querySelector(".page-section__h");if(o)if(a)e+='<li><a href="#'+o+'">'+(r?r.innerText+" - ":"")+a.innerText+"</a></li>"}}var s=document.querySelector(".page-contents ul");s&&(s.innerHTML=e)}}(),function(){var t=document.querySelectorAll(".mdc-drawer .mdc-list-item");if(!(t.length<=0)){for(var e=[],n=0;n<t.length;++n)e[n]={href:t[n].getAttribute("href"),html:t[n].innerHTML,text:t[n].innerText};for(var i=document.querySelectorAll(".desktop-nav-list-item"),o=0;o<e.length&&o<i.length;++o){i[o].setAttribute("href",e[o].href);var r=i[o].querySelector(".desktop-nav-list-item__text");r&&(r.innerHTML=e[o].html)}var a=document.querySelector(".main-footer nav");if(a){for(var s=a.innerHTML,c="",u=0;u<e.length;++u)c+=(""==c?"":" | ")+'<a href="'+e[u].href+'">'+e[u].text+"</a>";c+=s,a.innerHTML=c}}}(),function(){for(var t=new URL(window.location.href).pathname.replace(/\.html/i,""),e=document.querySelectorAll(".mdc-drawer .mdc-list-item"),n=0;n<e.length;++n){if(new URL(e[n]).pathname.replace(/\.html/i,"")==t){e[n].classList.add("mdc-list-item--activated"),e[n].setAttribute("aria-selected","true"),e[n].setAttribute("tabindex","0");break}}for(var i=document.querySelectorAll(".desktop-nav-list-item"),o=0;o<i.length;++o){if(new URL(i[o]).pathname.replace(/\.html/i,"")==t){i[o].setAttribute("aria-selected","true"),i[o].querySelector(".desktop-nav-list-item__text").classList.add("desktop-nav-list-item__text--activated");break}}}();var qt=$(".modal-for-asides"),jt=$(".modal-for-asides__got-it-button"),Gt=$(".modal-for-asides__content"),Xt=$("#aside-card--loader");function Kt(t){for(var e=document.querySelectorAll(".aside-card"),n=0;n<e.length;++n){var i=e[n];if(i.getAttribute("data-aside")==t)return i}return!1}$(jt).on("click",function(){$(qt).removeClass("modal-for-asides--shown")}),$(".has-aside").append('<i class="material-icons md-18" aria-hidden="true">zoom_in</i>'),$(document.body).on("click",".has-aside",function(){!function t(e){$(".aside-card").addClass("d-none");$(Xt).removeClass("d-none");$(qt).addClass("modal-for-asides--shown");var n=Kt(e);if(n)$(n).removeClass("d-none"),$(Xt).addClass("d-none");else{var i="asides/"+e;$.get(i,function(t){$(t).attr("data-aside",e).appendTo(Gt).removeClass("d-none"),$(Xt).addClass("d-none")},"html").fail(function(){t("aside__404.html")})}}($(this).attr("data-aside"))})}]);