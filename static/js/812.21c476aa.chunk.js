/*! For license information please see 812.21c476aa.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[812,415,523,149],{368:function(A,t,e){e.d(t,{e:function(){return o}});var r=e(689),n=e(87),i=e(184),o=function(A){var t=A.films;console.log(t);var e=(0,r.TH)();return(0,i.jsx)("div",{className:"movie-list",children:t.map((function(A){return(0,i.jsx)("div",{className:"movie-card",children:(0,i.jsx)(n.rU,{to:"/movies/".concat(A.id),state:{from:e},children:A.title})},A.id)}))})}},415:function(A,t,e){e.r(t);var r=e(439),n=e(791),i=e(959),o=e(368),a=e(184);t.default=function(){var A=(0,n.useState)([]),t=(0,r.Z)(A,2),e=t[0],c=t[1];return(0,n.useEffect)((function(){(0,i.yd)().then(c)}),[]),(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{className:"title-home",children:"Trending films"}),(0,a.jsx)(o.e,{films:e})]})}},523:function(A,t,e){e.r(t),e.d(t,{default:function(){return h}});var r=e(861),n=e(439),i=e(689),o=e(87),a=e(791),c=e(959),s=e(510),u=e(184);function l(){l=function(){return t};var A,t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(A,t,e){A[t]=e.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(A,t,e){return Object.defineProperty(A,t,{value:e,enumerable:!0,configurable:!0,writable:!0}),A[t]}try{s({},"")}catch(A){s=function(A,t,e){return A[t]=e}}function u(A,t,e,r){var i=t&&t.prototype instanceof m?t:m,o=Object.create(i.prototype),a=new G(r||[]);return n(o,"_invoke",{value:L(A,e,a)}),o}function h(A,t,e){try{return{type:"normal",arg:A.call(t,e)}}catch(A){return{type:"throw",arg:A}}}t.wrap=u;var f="suspendedStart",w="executing",v="completed",p={};function m(){}function d(){}function D(){}var P={};s(P,o,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(I([])));b&&b!==e&&r.call(b,o)&&(P=b);var g=D.prototype=m.prototype=Object.create(P);function Z(A){["next","throw","return"].forEach((function(t){s(A,t,(function(A){return this._invoke(t,A)}))}))}function x(A,t){function e(n,i,o,a){var c=h(A[n],A,i);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"==typeof u&&r.call(u,"__await")?t.resolve(u.__await).then((function(A){e("next",A,o,a)}),(function(A){e("throw",A,o,a)})):t.resolve(u).then((function(A){s.value=A,o(s)}),(function(A){return e("throw",A,o,a)}))}a(c.arg)}var i;n(this,"_invoke",{value:function(A,r){function n(){return new t((function(t,n){e(A,r,t,n)}))}return i=i?i.then(n,n):n()}})}function L(t,e,r){var n=f;return function(i,o){if(n===w)throw new Error("Generator is already running");if(n===v){if("throw"===i)throw o;return{value:A,done:!0}}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=w;var s=h(t,e,r);if("normal"===s.type){if(n=r.done?v:"suspendedYield",s.arg===p)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=v,r.method="throw",r.arg=s.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(n===A)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=A,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var i=h(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,p;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=A),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function j(A){var t={tryLoc:A[0]};1 in A&&(t.catchLoc=A[1]),2 in A&&(t.finallyLoc=A[2],t.afterLoc=A[3]),this.tryEntries.push(t)}function X(A){var t=A.completion||{};t.type="normal",delete t.arg,A.completion=t}function G(A){this.tryEntries=[{tryLoc:"root"}],A.forEach(j,this),this.reset(!0)}function I(t){if(t||""===t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=A,e.done=!0,e};return i.next=i}}throw new TypeError(typeof t+" is not iterable")}return d.prototype=D,n(g,"constructor",{value:D,configurable:!0}),n(D,"constructor",{value:d,configurable:!0}),d.displayName=s(D,c,"GeneratorFunction"),t.isGeneratorFunction=function(A){var t="function"==typeof A&&A.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(A){return Object.setPrototypeOf?Object.setPrototypeOf(A,D):(A.__proto__=D,s(A,c,"GeneratorFunction")),A.prototype=Object.create(g),A},t.awrap=function(A){return{__await:A}},Z(x.prototype),s(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(A,e,r,n,i){void 0===i&&(i=Promise);var o=new x(u(A,e,r,n),i);return t.isGeneratorFunction(e)?o:o.next().then((function(A){return A.done?A.value:o.next()}))},Z(g),s(g,c,"Generator"),s(g,o,(function(){return this})),s(g,"toString",(function(){return"[object Generator]"})),t.keys=function(A){var t=Object(A),e=[];for(var r in t)e.push(r);return e.reverse(),function A(){for(;e.length;){var r=e.pop();if(r in t)return A.value=r,A.done=!1,A}return A.done=!0,A}},t.values=I,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=A,this.done=!1,this.delegate=null,this.method="next",this.arg=A,this.tryEntries.forEach(X),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=A)},stop:function(){this.done=!0;var A=this.tryEntries[0].completion;if("throw"===A.type)throw A.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=A),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(A,t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===A||"continue"===A)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=A,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(o)},complete:function(A,t){if("throw"===A.type)throw A.arg;return"break"===A.type||"continue"===A.type?this.next=A.arg:"return"===A.type?(this.rval=this.arg=A.arg,this.method="return",this.next="end"):"normal"===A.type&&t&&(this.next=t),p},finish:function(A){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.finallyLoc===A)return this.complete(e.completion,e.afterLoc),X(e),p}},catch:function(A){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.tryLoc===A){var r=e.completion;if("throw"===r.type){var n=r.arg;X(e)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:I(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=A),p}},t}var h=function(){var A,t=(0,i.UO)().movieId,e=(0,i.TH)(),h=(0,a.useState)(null),f=(0,n.Z)(h,2),w=f[0],v=f[1],p=(0,a.useState)(0),m=(0,n.Z)(p,2),d=m[0],D=m[1];return(0,a.useEffect)((function(){var A=function(){var A=(0,r.Z)(l().mark((function A(){var e,r;return l().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,(0,c.Y5)(t);case 3:e=A.sent,v(e),r=Math.round(10*e.vote_average),D(r),A.next=12;break;case 9:A.prev=9,A.t0=A.catch(0),console.error(A.t0);case 12:case"end":return A.stop()}}),A,null,[[0,9]])})));return function(){return A.apply(this,arguments)}}();A()}),[t]),w?(0,u.jsxs)("div",{className:"movie-details-container",children:[(0,u.jsx)(o.rU,{to:(null===(A=e.state)||void 0===A?void 0:A.from)||"/",className:"back-link",children:"Go back"}),(0,u.jsxs)("div",{className:"movie-details-content",children:[(0,u.jsx)("div",{className:"poster-container",children:(0,u.jsx)("img",{className:"movie-poster",src:w.poster_path?"https://image.tmdb.org/t/p/w500".concat(w.poster_path):"".concat("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/4QBHRXhpZgAASUkqAAgAAAABAA4BAgAlAAAAGgAAAAAAAABWZWN0b3IgZ3JhcGhpYyBvZiBubyB0aHVtYm5haWwgc3ltYm9s/+EFUWh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyI+Cgk8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgoJCTxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6SXB0YzR4bXBDb3JlPSJodHRwOi8vaXB0Yy5vcmcvc3RkL0lwdGM0eG1wQ29yZS8xLjAveG1sbnMvIiAgIHhtbG5zOkdldHR5SW1hZ2VzR0lGVD0iaHR0cDovL3htcC5nZXR0eWltYWdlcy5jb20vZ2lmdC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBsdXM9Imh0dHA6Ly9ucy51c2VwbHVzLm9yZy9sZGYveG1wLzEuMC8iICB4bWxuczppcHRjRXh0PSJodHRwOi8vaXB0Yy5vcmcvc3RkL0lwdGM0eG1wRXh0LzIwMDgtMDItMjkvIiB4bWxuczp4bXBSaWdodHM9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9yaWdodHMvIiBwaG90b3Nob3A6Q3JlZGl0PSJHZXR0eSBJbWFnZXMvaVN0b2NrcGhvdG8iIEdldHR5SW1hZ2VzR0lGVDpBc3NldElEPSIxMTQ3NTQ0ODA3IiB4bXBSaWdodHM6V2ViU3RhdGVtZW50PSJodHRwczovL3d3dy5pc3RvY2twaG90by5jb20vbGVnYWwvbGljZW5zZS1hZ3JlZW1lbnQ/dXRtX21lZGl1bT1vcmdhbmljJmFtcDt1dG1fc291cmNlPWdvb2ds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AAAAAAAAB//EACUQAAEDBAICAwEBAQAAAAAAAAABAhIDERMyEFAgITAxQGCgQv/aAAgBAQABBQKbibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibibv9QkVUVFT+IsqmNTGhZE4VLp/CQUxkUTzft38VUxkE8bmRDIpNwi3Qqd5FVMamNC1vGaGQmq+NPh+vb2uY1MaEUTxkiGQmvws27aCmMiieN0QyIZFLqvjjUxr8L9uviqmMgnlNDISVfga23Lm38malT66uyqY1MaFkTy9lnGNTGpjUxqY1MamNTGpjUxqIyy+DmXXGpjUxqY1GtjwqXTGpjUxqY1FaqdKlMiidO7Xp8iGRRiqruFqIZDIZDIZDIZDIZDIZDIZDIZDIZDIZDIZDIZDIZDIZDIZBFvw7XpG+2lT64p7Dtf3U/sdr0lPh+vFPYdr+X7EpmNBWqnlT2Ha9Izbwp7DtfytbZOXJZfCnsO16d+xT2Ha/kT78KnjT2Ha9KzUqcU9h2v5fvwqL78Kew7XpafD9SnsO1/K11i9+HPt5U9h2vSt9O4X7p7DtfFjbisQVtvz09h2vTJ7QqbU9h2viiWQ+xzLfmp7Dtemp6lT6p7DtfCmni5njjFaqfPT2Ha9NT+x3ttPYdryntU9J4ubcVLcU05dT+ansO16ZvpeG+njteaafAqXMfi5qKK1U+SnsO16dvtD/sdrwiXX8Dqfx09h2vT0/rl2vFNPX4XNRRUVPhp7Dtenp7cu1Gpdfx/Y5nwU9h2vTp6Xl2pT+/yuZcVLeVPYdr1DfbeHalP89rjmW8aew7XqKfLtSn+lzLipbmnsO16hm3DtRFsZFMhkMhkMhkMhkMhkMhkMhkMhkMhkMhkMhkMhkHOlzT2Ha9WqXRUt+6m3h2vUs16J2vU016N6+uqupdS6l1LqXUupdS6l1LqXUupdS6l1LqXUupdS6l1LqXUupdS6l1LqXUupdS6l1/1Zf/EAB8QAQEAAgEFAQEAAAAAAAAAADEAAVAgEBEhMEBgoP/aAAgBAQAGPwJmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZn+oQvP4s/EMfhy859nfeHp8Y5dt6cX8H5zH4cvOfS789TMzMzMzPNmZ69pmZ03mNPnXEREREREREREREREREREdc6zOhzpe3PPz+Z9OdZnQ51mfqxzzqO/DP1duedN25Z+nx6M6zOhzrM6HOszx78fHF+LOsz7u/Xx8GdVnpnh39L8mdZn5PHtzrM9e/wB2dZn5/HqzrM6HOsz0z9HjnnU9uuemfvzrM8CIiIiIiIiIiIiIiI5Z/F9+mfxudV2/HMzMzMzMzMzMzMzMzMzMzMzP9WX/xAAoEAACAgAFBAICAwEAAAAAAAAAARFhECAhMVFBUHGhMECRsWCB4aD/2gAIAQEAAT8htlstlstlstlstlstlstlstlstlstlstlstlstlstlstlstlstlstlstlstlstlstlstlstlstlstlstlstlstlstlstlstlstlstlstlstlstlstlst/9Qi2TGyv4QtgmxN30Erdti2iYSC/giTeyE/pHkS9Qs+JD/wBGL/IJfSfJEbZGi3cDTY+koNbc17Bdu+FsmF1nAk76iTYoybDT1nwP/YPqvxlffAkvXeE2xSJu+gus2xbBMr3wa9EN/WBtvdz8DQt4boahtdzSb2E/pHkX+QWXHvGho2ljbtCHvG8m+wm0NPDGo3yrRyJypwWPLuCMTgl9J8iSWyyNpbuBrsb9FA918BC3ihbNsrz44LofbFtGE7dpCTvqLYJLM+Ef2N/SvBQKhUKhUKhUKhUKg9LbWVrWmioVCoVB0pe+E2KhUKhUN57KqJ/AWyTs+vsktGsZjcadtRs2SRrhzpig4SkiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI8haysPW7K8GDuCx/Vhp+/b/jD1uyvo8Cz4Y/q+xkm0I5RxMeN5zb3jD1uyvC3g1KaNnh+r7G808dzT+mXe8Yet2VOHInKnBIe8P1fX2tfOXblb3jD1uzPK1gu2D9X18nDkThKyTJwy73jD1uzPq8CS+H6vsbbvYSbHOCdGpjcucu94w9bszwYpDLg/V8Gky9kMraBz6/Qlvrn3vGHrdnaB4JHkfqz5KXCIpYNJIYzWtV9be8Yet2dphxguh8H6s+1Z/wBZev8AjkSlwhaddRvP5+fe8Yet2d9a5wSRH6s2SBISBLMmrGNDw6v+sGp3Op+Pzb3jD1uztC8VhZtoz/r4ErDN/AShQslK+Rzr8m94w9btDQvCInysuikJQo+dpNQyDX8fj3vGHrdofWuMOuXQ8j+lSse6/DveMPW7Q0Q5zaDX1GkkMatdS+De8Yet2hoHxmy6n9ZGvZjXhrNveMPW7S8H3NNEhobq1LLveMPW7S+jytv+yRrWjGNDWO94w9btLwt5cxpRUifAnwJ8CfAnwJ8CfAnwJ8CfAnwJ8CfAnwJ8CfAnwJ8CfAnwJ8CfAnwJ8BqQ0sd7xh63aVo5E5U4SC5GNDX3mLVh63anla7H63akptuvY1p11fa7BYLBYLBYLBYLBYLBYLBYLBYLBYLBYLBYLBYLBYLBYLBYLBYLBY/6sv/aAAgBAQAAABAAAAAAAAAAAAAH/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wC//wD/AP8A/wD/AP8A/wD/AOf/AP8A/wD/AP8A/wD/AP8A2/f/AP8A/wD/AP8A/wD/AP73v/8A/wD/AP8A/wD/AP8A8f3/AP8A/wD/AP8A/wD/APw/p/8A/wD/AP8A/wD+/hw8v/8A/wD/AP8A/wD3D+/1/wD/AP8A/wD/AP8A+ADwMH//AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/ALHAAAAAX/8A/wD/AP8Atf8A/wD/AP7/AP8A/wD/AP2//wD/AK/X/wD/AP8A/wDl/wD/AP3+v/8A/wD/APyv/wD/AN/1/wD/AP8A/wD9f/8A/n+v/wD/AP8A/wDr/wD/AP8AvX//AP8A/wD/AN/n/wD36/8A/wD/AP8A/Py//wD/AF//AP8A/wD/AOf/APH/APr/AP8A/wD/AP8Av/8Ar/8A1/8A/wD/AP8A/wD/APXf/r//AP8A/wD/AP8AP/8AP/X/AP8A/wD/AP8Ae/8A/v8Ar/8A/wD/AP8A/wD/AP8A+/1//wD/AP8A/wD9/wD/APvr/wD/AP8A/wD/AO//AP8A71//AP8A/wD/AP8A/wD/AP8Auv8A/wD/AP8A/wD+AAAA1/8A/wD/AP8A+X//AP8A/r//AP8A/wD/AP8A/wD/AP8A/f8A/wD/AP8A/wD/AP8A/wD/AO//AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/8QAKxAAAgECBQQCAgMBAQEAAAAAAAERYfEQITFBUSBQcZGh8DBAgcHRYKCx/9oACAEBAAE/EL2XsvZey9l7L2XsvZey9l7L2XsvZey9l7L2XsvZey9l7L2XsvZey9l7L2XsvZey9l7L2XsvZey9l7L2XsvZey9l7L2XsvZey9l7L2XsvZey9l7L2XsvZey9l7L2XsvZey9l7L2XsvZey9/+oTXBXQ1ZX/EfGYjXCWuZ/lQadKxgpytUNQ2nt/wbGGN0RraJULazosjSknl5mnVDdnmu/pNuEpNOZLl5D9hUQ5uCRIRJU6Ecq8maU29EOaflmJEs9GhS1ynVcYZ/8T75rAqOafhmbwerFUL8F0NpJbSVTn7+Q/8AsY1p0uMg225bnoy/5lhXmbvGtfgjaC1Yp/kGlCsdOkE8LMV13V5GnolENZY1X+CnMmDSYno8hzzVOO5sIRt0RxZUL3HRDTkb5eYlGnRpW/k078Bpj5DWN5fQk2hG29kKpaXkxVKXgYxoRprZ9LNCapyKWmjU4T72Se366GnMly8h7QVEjmyoQQhKi6E8o8mae21EO6flma4RwsutJtpLNs03L6vHTcLoxps01DWvTHLdowl4bjtmvSsH+1Bvh6s+MxdXF8htc4yDe5bHWfxREREREPSEtl0pSE9n0xERHENcMNsG9H0xERpqU9GuywjXL2bGkCuvZ1UjZT2R009E0zVTg0RtoS3Zph/E/wB6BjnzMZcI7orfZW+yt9lb7K32VvsrfZW+yt9lb7K32VvsrfZW+yt9lb7K32VvsrfZW+yt9lb7K32VvsrfZW+yt9lb7L4Sd8rjs4TvdKHgolo3njq+WDNhcfvs4tn2cE/GcrCfe7Tjq+WHxP1lhLbewxqYaIcWQdTPWp4Or6FV2cIZtkwU80agabE9Vlhq+WHxP1lJbW88WkjTUp7EsmrNdP0Krs4MQmqciEJo1OFOZlhq+WHxP1USL0adKqTeWun6FV2gKsyYZf8AE8NXyw+J+qxCapyLTpNT0IQbM+n6FV2gPOs1hDd1msNXyw+J+tz9/gVSpKYI2xUdEMYzlvV9P0KrtATvZuHg0mmnoxjndBq+WHxOpbk/3MgyVtmiLJls1o/zptOU2h65n5fX9Cq7QCcOUVVU4S72STV8sPidLFIltwhKXbWrweEJp7E5P8q/W+hVdpCqGjCXmoNXyw+J0zsjJZdJLlUPf/A004ahrFikS3kjhFCHuSVsmn5/oVXaQh4LDxlkavlh8TobqJsToJLqXyvLyQ9h4a6KYEI0iaezGKcxBppw1D/L9Cq7SFFnnjTVP/7h8TojZGby/AirPD4EuqXCMxCEQlkuhDL8AgS5bNaP8n0KrtQVWWeH23dYfExal318CEIoSUL87EhNPZjJZi9kafi+hVdqCXksITR7rD4mObFw+P0s1/lRCl8PZ/h+hVdqCikjo+Jhwq3n4EoUL9N4SmnsyVl4N1+D6FV2oKopE5UrH4mE3CUfrSSeXkyoq89X0KrtYTvdKHj8TD+r9eKJokJODddP0KrtYeNZrH4mDqDdpP8AZlv6VmTk8foVXawozJj8TBBfDQos3MvhfC+F8L4XwvhfC+F8L4XwvhfC+F8L4XwvhfC+F8L4XwSEEOcsfoVXawZoTVORC00anDa2EDc0mQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ+CRXEqEn2wIZvk6IXBC4IXBC4IXBC4IXBC4IXBC4IXBC4IXBC4IXBC4IXBC4IXBC4IXBC4IXBC4IXBC4IXBC4IXbQYxC0eexyN2Eu1xKFB5LwXgvBeC8F4LwXgvBeC8F4LwXgvBeC8F4LwXgvBeC8F4LwXgvBeC8F4LwXgvA225bl/+rH/2Q=="),alt:w.title})}),(0,u.jsxs)("div",{className:"movie-description",children:[(0,u.jsx)("h1",{className:"movie-title",children:w.title}),(0,u.jsxs)("h4",{className:"user-score",children:["User score: ",d,"%"]}),(0,u.jsx)("h2",{className:"section-title",children:"Overview"}),(0,u.jsx)("p",{className:"overview-text",children:w.overview}),(0,u.jsx)("h2",{className:"section-title",children:"Genres"}),(0,u.jsx)("p",{className:"genres-list",children:w.genres.map((function(A){return(0,u.jsx)("span",{className:"genre",children:A.name},A.id)}))}),(0,u.jsxs)("div",{className:"additional-info-links",children:[(0,u.jsx)(o.rU,{to:"cast",className:"info-link",children:"Cast"}),(0,u.jsx)(o.rU,{to:"reviews",className:"info-link",children:"Reviews"})]})]})]}),(0,u.jsx)(a.Suspense,{fallback:(0,u.jsx)(s.a,{}),children:(0,u.jsx)(i.j3,{})})]}):(0,u.jsx)(s.a,{})}},149:function(A,t,e){e.r(t),e.d(t,{default:function(){return u}});var r=e(439),n=e(368),i=e(791),o=e(184),a=function(A){var t=A.onSubmit,e=A.nameButton,n=(0,i.useState)(""),a=(0,r.Z)(n,2),c=a[0],s=a[1];return(0,o.jsxs)("form",{className:"search-form",onSubmit:function(A){A.preventDefault(),c.trim()?(t(c),s("")):alert("Add Todo")},children:[(0,o.jsx)("input",{required:!0,className:"search-input",value:c,type:"text",placeholder:"Find favorite film",onChange:function(A){s(A.target.value)}}),(0,o.jsx)("button",{type:"submit",className:"search-button",children:e})]})},c=e(959),s=e(87),u=function(){var A=(0,i.useState)([]),t=(0,r.Z)(A,2),e=t[0],u=t[1],l=(0,s.lr)(),h=(0,r.Z)(l,2),f=h[0],w=h[1];(0,i.useEffect)((function(){var A=f.get("query");A&&(0,c.Zf)(A).then(u)}),[f]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h2",{className:"title-home",children:"Find you're movie"}),(0,o.jsx)(a,{onSubmit:function(A){w({query:A})},nameButton:"Search Film"}),(0,o.jsx)(n.e,{films:e})]})}},812:function(A,t,e){e.r(t);e(415),e(149),e(523)},959:function(A,t,e){e.d(t,{Y5:function(){return c},Zf:function(){return s},ei:function(){return l},uV:function(){return u},yd:function(){return a}});var r=e(861),n=e(243);function i(){i=function(){return t};var A,t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(A,t,e){A[t]=e.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function u(A,t,e){return Object.defineProperty(A,t,{value:e,enumerable:!0,configurable:!0,writable:!0}),A[t]}try{u({},"")}catch(A){u=function(A,t,e){return A[t]=e}}function l(A,t,e,r){var i=t&&t.prototype instanceof m?t:m,o=Object.create(i.prototype),a=new G(r||[]);return n(o,"_invoke",{value:L(A,e,a)}),o}function h(A,t,e){try{return{type:"normal",arg:A.call(t,e)}}catch(A){return{type:"throw",arg:A}}}t.wrap=l;var f="suspendedStart",w="executing",v="completed",p={};function m(){}function d(){}function D(){}var P={};u(P,a,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(I([])));b&&b!==e&&r.call(b,a)&&(P=b);var g=D.prototype=m.prototype=Object.create(P);function Z(A){["next","throw","return"].forEach((function(t){u(A,t,(function(A){return this._invoke(t,A)}))}))}function x(A,t){function e(n,i,o,a){var c=h(A[n],A,i);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"==typeof u&&r.call(u,"__await")?t.resolve(u.__await).then((function(A){e("next",A,o,a)}),(function(A){e("throw",A,o,a)})):t.resolve(u).then((function(A){s.value=A,o(s)}),(function(A){return e("throw",A,o,a)}))}a(c.arg)}var i;n(this,"_invoke",{value:function(A,r){function n(){return new t((function(t,n){e(A,r,t,n)}))}return i=i?i.then(n,n):n()}})}function L(t,e,r){var n=f;return function(i,o){if(n===w)throw new Error("Generator is already running");if(n===v){if("throw"===i)throw o;return{value:A,done:!0}}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=w;var s=h(t,e,r);if("normal"===s.type){if(n=r.done?v:"suspendedYield",s.arg===p)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=v,r.method="throw",r.arg=s.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(n===A)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=A,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var i=h(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,p;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=A),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function j(A){var t={tryLoc:A[0]};1 in A&&(t.catchLoc=A[1]),2 in A&&(t.finallyLoc=A[2],t.afterLoc=A[3]),this.tryEntries.push(t)}function X(A){var t=A.completion||{};t.type="normal",delete t.arg,A.completion=t}function G(A){this.tryEntries=[{tryLoc:"root"}],A.forEach(j,this),this.reset(!0)}function I(t){if(t||""===t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=A,e.done=!0,e};return i.next=i}}throw new TypeError(typeof t+" is not iterable")}return d.prototype=D,n(g,"constructor",{value:D,configurable:!0}),n(D,"constructor",{value:d,configurable:!0}),d.displayName=u(D,s,"GeneratorFunction"),t.isGeneratorFunction=function(A){var t="function"==typeof A&&A.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(A){return Object.setPrototypeOf?Object.setPrototypeOf(A,D):(A.__proto__=D,u(A,s,"GeneratorFunction")),A.prototype=Object.create(g),A},t.awrap=function(A){return{__await:A}},Z(x.prototype),u(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(A,e,r,n,i){void 0===i&&(i=Promise);var o=new x(l(A,e,r,n),i);return t.isGeneratorFunction(e)?o:o.next().then((function(A){return A.done?A.value:o.next()}))},Z(g),u(g,s,"Generator"),u(g,a,(function(){return this})),u(g,"toString",(function(){return"[object Generator]"})),t.keys=function(A){var t=Object(A),e=[];for(var r in t)e.push(r);return e.reverse(),function A(){for(;e.length;){var r=e.pop();if(r in t)return A.value=r,A.done=!1,A}return A.done=!0,A}},t.values=I,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=A,this.done=!1,this.delegate=null,this.method="next",this.arg=A,this.tryEntries.forEach(X),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=A)},stop:function(){this.done=!0;var A=this.tryEntries[0].completion;if("throw"===A.type)throw A.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=A),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(A,t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===A||"continue"===A)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=A,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(o)},complete:function(A,t){if("throw"===A.type)throw A.arg;return"break"===A.type||"continue"===A.type?this.next=A.arg:"return"===A.type?(this.rval=this.arg=A.arg,this.method="return",this.next="end"):"normal"===A.type&&t&&(this.next=t),p},finish:function(A){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.finallyLoc===A)return this.complete(e.completion,e.afterLoc),X(e),p}},catch:function(A){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.tryLoc===A){var r=e.completion;if("throw"===r.type){var n=r.arg;X(e)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:I(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=A),p}},t}n.Z.defaults.baseURL="https://api.themoviedb.org/3";var o={params:{api_key:"8aba4e3419a44727b7eb66f35fce4fa2",language:"en-US"}},a=function(){var A=(0,r.Z)(i().mark((function A(){var t;return i().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,n.Z.get("trending/movie/day",o);case 2:return t=A.sent,A.abrupt("return",t.data.results);case 4:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}(),c=function(){var A=(0,r.Z)(i().mark((function A(t){var e;return i().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,n.Z.get("/movie/".concat(t),o);case 2:return e=A.sent,A.abrupt("return",e.data);case 4:case"end":return A.stop()}}),A)})));return function(t){return A.apply(this,arguments)}}(),s=function(){var A=(0,r.Z)(i().mark((function A(t){var e;return i().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,n.Z.get("/search/movie?query=".concat(t),o);case 2:return e=A.sent,A.abrupt("return",e.data.results);case 4:case"end":return A.stop()}}),A)})));return function(t){return A.apply(this,arguments)}}(),u=function(){var A=(0,r.Z)(i().mark((function A(t){var e;return i().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,n.Z.get("/movie/".concat(t,"/credits?"),o);case 2:return e=A.sent,A.abrupt("return",e.data.cast);case 4:case"end":return A.stop()}}),A)})));return function(t){return A.apply(this,arguments)}}(),l=function(){var A=(0,r.Z)(i().mark((function A(t){var e;return i().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,n.Z.get("/movie/".concat(t,"/reviews?"),o);case 2:return e=A.sent,A.abrupt("return",e.data.results);case 4:case"end":return A.stop()}}),A)})));return function(t){return A.apply(this,arguments)}}()}}]);
//# sourceMappingURL=812.21c476aa.chunk.js.map