var JSX={};(function(l){function p(b,e){var a=function(){};a.prototype=e.prototype;var c=new a;for(var d in b){b[d].prototype=c}}function $(c,b){for(var a in b.prototype)if(b.prototype.hasOwnProperty(a))c.prototype[a]=b.prototype[a]}function f(a,b,d){function c(a,b,c){delete a[b];a[b]=c;return c}Object.defineProperty(a,b,{get:function(){return c(a,b,d())},set:function(d){c(a,b,d)},enumerable:true,configurable:true})}var r=Math.imul;if(typeof r==='undefined'){r=function(c,d){var e=c>>>16&65535;var a=c&65535;var f=d>>>16&65535;var b=d&65535;return a*b+(e*b+a*f<<16>>>0)|0}}function Y(a,b,c){return a[b]=a[b]+c|0}function X(a,b,c){return a[b]=a[b]-c|0}function W(a,b,c){return a[b]=r(a[b],c)}function V(a,b,c){return a[b]=a[b]/c|0}function U(a,b,c){return a[b]=a[b]%c|0}function T(b,c){var a=b[c];b[c]=a+1|0;return a}function S(b,c){var a=b[c];b[c]=a-1|0;return a}function _(b,d){var c=b.length;for(var a=0;a<c;++a)d(b[a])}var E=parseInt;var D=parseFloat;function Z(a){return a!==a}var B=isFinite;var A=encodeURIComponent;var z=decodeURIComponent;var x=encodeURI;var w=decodeURI;var F=Object.prototype.toString;var G=Object.prototype.hasOwnProperty;function k(){}l.require=function(b){var a=u[b];return a!==undefined?a:null};l.profilerIsRunning=function(){return k.getResults!=null};l.getProfileResults=function(){return(k.getResults||function(){return{}})()};l.postProfileResults=function(a,b){if(k.postResults==null)throw new Error('profiler has not been turned on');return k.postResults(a,b)};l.resetProfileResults=function(){if(k.resetResults==null)throw new Error('profiler has not been turned on');return k.resetResults()};l.DEBUG=false;var y=function(){function a(){this.__next=0;this.__loop=null;this.__seed=null;this.__value=undefined;this.__status=0}a.prototype.next=function(b){switch(this.__status){case 0:this.__status=1;this.__seed=b;this.__loop(this.__next);var a=false;if(this.__next!=-1){this.__status=0}else{this.__status=2;a=true}return{value:this.__value,done:a};case 1:throw new Error('Generator is already running');case 2:throw new Error('Generator is already finished');default:throw new Error('Unexpected generator internal state')}};return a}();function b(a,b,c){this.F=a.length;this.K=a;this.L=b;this.I=c;this.H=null;this.P=null};p([b],Object);function t(){};p([t],Object);function g(){var a;var b;var c;this.G={};a=this.E='';b=this._=0;c=this.A=a.length;this.D=0;this.B=b;this.C=c};p([g],t);function C(a,b){a.E=b.E;a._=b._;a.A=b.A;a.D=b.D;a.B=b.B;a.C=b.C};function m(a,e,d,f){var b;var c;if(a._>=a.A){return false}b=a.E.charCodeAt(a._);if(b>f||b<d){return false}b-=d;if((e[b>>>3]&1<<(b&7))===0){return false}c=a._,a._=c+1|0,c;return true};function h(a,e,d,f){var b;var c;if(a._<=a.D){return false}b=a.E.charCodeAt(a._-1);if(b>f||b<d){return false}b-=d;if((e[b>>>3]&1<<(b&7))===0){return false}c=a._,a._=c-1|0,c;return true};function o(a,e,d,f){var b;var c;if(a._>=a.A){return false}b=a.E.charCodeAt(a._);if(b>f||b<d){c=a._,a._=c+1|0,c;return true}b-=d;if((e[b>>>3]&1<<(b&7))===0){c=a._,a._=c+1|0,c;return true}return false};function j(a,e,d,f){var b;var c;if(a._<=a.D){return false}b=a.E.charCodeAt(a._-1);if(b>f||b<d){c=a._,a._=c-1|0,c;return true}b-=d;if((e[b>>>3]&1<<(b&7))===0){c=a._,a._=c-1|0,c;return true}return false};function i(a,b,d){var c;if((a.A-a._|0)<b){return false}if(a.E.slice(c=a._,c+b|0)!==d){return false}a._=a._+b|0;return true};function e(a,b,d){var c;if((a._-a.D|0)<b){return false}if(a.E.slice((c=a._)-b|0,c)!==d){return false}a._=a._-b|0;return true};function q(f,m,p){var b;var d;var e;var n;var g;var k;var l;var i;var h;var c;var a;var j;var o;b=0;d=p;e=f._;n=f.A;g=0;k=0;l=false;while(true){i=b+(d-b>>>1);h=0;c=g<k?g:k;a=m[i];for(j=c;j<a.F;j++){if(e+c===n){h=-1;break}h=f.E.charCodeAt(e+c)-a.K.charCodeAt(j);if(h!==0){break}c++}if(h<0){d=i;k=c}else{b=i;g=c}if(d-b<=1){if(b>0){break}if(d===b){break}if(l){break}l=true}}while(true){a=m[b];if(g>=a.F){f._=e+a.F|0;if(a.H==null){return a.I}o=a.H(a.P);f._=e+a.F|0;if(o){return a.I}}b=a.L;if(b<0){return 0}}return-1};function d(d,m,p){var b;var g;var e;var n;var f;var k;var l;var i;var h;var c;var a;var j;var o;b=0;g=p;e=d._;n=d.D;f=0;k=0;l=false;while(true){i=b+(g-b>>1);h=0;c=f<k?f:k;a=m[i];for(j=a.F-1-c;j>=0;j--){if(e-c===n){h=-1;break}h=d.E.charCodeAt(e-1-c)-a.K.charCodeAt(j);if(h!==0){break}c++}if(h<0){g=i;k=c}else{b=i;f=c}if(g-b<=1){if(b>0){break}if(g===b){break}if(l){break}l=true}}while(true){a=m[b];if(f>=a.F){d._=e-a.F|0;if(a.H==null){return a.I}o=a.H(d);d._=e-a.F|0;if(o){return a.I}}b=a.L;if(b<0){return 0}}return-1};function n(a,b,d,e){var c;c=e.length-(d-b|0)|0;a.E=a.E.slice(0,b)+e+a.E.slice(d);a.A=a.A+c|0;if(a._>=d){a._=a._+c|0}else if(a._>b){a._=b}return c|0};function c(a,f){var b;var c;var d;var e;b=false;if((c=a.B)<0||c>(d=a.C)||d>(e=a.A)||e>a.E.length?false:true){n(a,a.B,a.C,f);b=true}return b};g.prototype.J=function(){return false};g.prototype.f=function(b){var a;var c;var d;var e;a=this.G['.'+b];if(a==null){c=this.E=b;d=this._=0;e=this.A=c.length;this.D=0;this.B=d;this.C=e;this.J();a=this.E;this.G['.'+b]=a}return a};g.prototype.stemWord=g.prototype.f;g.prototype.g=function(e){var d;var b;var c;var a;var f;var g;var h;d=[];for(b=0;b<e.length;b++){c=e[b];a=this.G['.'+c];if(a==null){f=this.E=c;g=this._=0;h=this.A=f.length;this.D=0;this.B=g;this.C=h;this.J();a=this.E;this.G['.'+c]=a}d.push(a)}return d};g.prototype.stemWords=g.prototype.g;function a(){g.call(this);this.B_Y_found=false;this.I_p2=0;this.I_p1=0};p([a],g);a.prototype.M=function(a){this.B_Y_found=a.B_Y_found;this.I_p2=a.I_p2;this.I_p1=a.I_p1;C(this,a)};a.prototype.copy_from=a.prototype.M;a.prototype.d=function(){var k;var o;var n;var l;var h;var j;var b;var g;var f;var e;var p;var q;var r;var d;this.B_Y_found=false;k=this._;j=true;a:while(j===true){j=false;this.B=this._;if(!i(this,1,'\'')){break a}this.C=this._;if(!c(this,'')){return false}}p=this._=k;o=p;b=true;a:while(b===true){b=false;this.B=this._;if(!i(this,1,'y')){break a}this.C=this._;if(!c(this,'Y')){return false}this.B_Y_found=true}r=this._=o;n=r;g=true;e:while(g===true){g=false;a:while(true){l=this._;f=true;c:while(f===true){f=false;d:while(true){h=this._;e=true;b:while(e===true){e=false;if(!m(this,a.g_v,97,121)){break b}this.B=this._;if(!i(this,1,'y')){break b}this.C=this._;this._=h;break d}q=this._=h;if(q>=this.A){break c}d=this._,this._=d+1|0,d}if(!c(this,'Y')){return false}this.B_Y_found=true;continue a}this._=l;break a}}this._=n;return true};a.prototype.r_prelude=a.prototype.d;function v(b){var p;var o;var n;var l;var j;var k;var d;var g;var f;var e;var q;var r;var s;var h;b.B_Y_found=false;p=b._;k=true;a:while(k===true){k=false;b.B=b._;if(!i(b,1,'\'')){break a}b.C=b._;if(!c(b,'')){return false}}q=b._=p;o=q;d=true;a:while(d===true){d=false;b.B=b._;if(!i(b,1,'y')){break a}b.C=b._;if(!c(b,'Y')){return false}b.B_Y_found=true}s=b._=o;n=s;g=true;e:while(g===true){g=false;a:while(true){l=b._;f=true;c:while(f===true){f=false;d:while(true){j=b._;e=true;b:while(e===true){e=false;if(!m(b,a.g_v,97,121)){break b}b.B=b._;if(!i(b,1,'y')){break b}b.C=b._;b._=j;break d}r=b._=j;if(r>=b.A){break c}h=b._,b._=h+1|0,h}if(!c(b,'Y')){return false}b.B_Y_found=true;continue a}b._=l;break a}}b._=n;return true};a.prototype.b=function(){var j;var k;var e;var f;var g;var c;var i;var h;var d;var l;var b;this.I_p1=l=this.A;this.I_p2=l;j=this._;e=true;a:while(e===true){e=false;f=true;d:while(f===true){f=false;k=this._;g=true;b:while(g===true){g=false;if(q(this,a.a_0,3)===0){break b}break d}this._=k;b:while(true){c=true;c:while(c===true){c=false;if(!m(this,a.g_v,97,121)){break c}break b}if(this._>=this.A){break a}b=this._,this._=b+1|0,b}c:while(true){i=true;b:while(i===true){i=false;if(!o(this,a.g_v,97,121)){break b}break c}if(this._>=this.A){break a}b=this._,this._=b+1|0,b}}this.I_p1=this._;b:while(true){h=true;c:while(h===true){h=false;if(!m(this,a.g_v,97,121)){break c}break b}if(this._>=this.A){break a}b=this._,this._=b+1|0,b}c:while(true){d=true;b:while(d===true){d=false;if(!o(this,a.g_v,97,121)){break b}break c}if(this._>=this.A){break a}b=this._,this._=b+1|0,b}this.I_p2=this._}this._=j;return true};a.prototype.r_mark_regions=a.prototype.b;function H(b){var l;var k;var f;var g;var h;var i;var j;var e;var d;var n;var c;b.I_p1=n=b.A;b.I_p2=n;l=b._;f=true;a:while(f===true){f=false;g=true;d:while(g===true){g=false;k=b._;h=true;b:while(h===true){h=false;if(q(b,a.a_0,3)===0){break b}break d}b._=k;b:while(true){i=true;c:while(i===true){i=false;if(!m(b,a.g_v,97,121)){break c}break b}if(b._>=b.A){break a}c=b._,b._=c+1|0,c}c:while(true){j=true;b:while(j===true){j=false;if(!o(b,a.g_v,97,121)){break b}break c}if(b._>=b.A){break a}c=b._,b._=c+1|0,c}}b.I_p1=b._;b:while(true){e=true;c:while(e===true){e=false;if(!m(b,a.g_v,97,121)){break c}break b}if(b._>=b.A){break a}c=b._,b._=c+1|0,c}c:while(true){d=true;b:while(d===true){d=false;if(!o(b,a.g_v,97,121)){break b}break c}if(b._>=b.A){break a}c=b._,b._=c+1|0,c}b.I_p2=b._}b._=l;return true};a.prototype.e=function(){var d;var b;var c;b=true;b:while(b===true){b=false;d=this.A-this._|0;c=true;a:while(c===true){c=false;if(!j(this,a.g_v_WXY,89,121)){break a}if(!h(this,a.g_v,97,121)){break a}if(!j(this,a.g_v,97,121)){break a}break b}this._=this.A-d|0;if(!j(this,a.g_v,97,121)){return false}if(!h(this,a.g_v,97,121)){return false}if(this._>this.D){return false}}return true};a.prototype.r_shortv=a.prototype.e;function s(b){var e;var c;var d;c=true;b:while(c===true){c=false;e=b.A-b._|0;d=true;a:while(d===true){d=false;if(!j(b,a.g_v_WXY,89,121)){break a}if(!h(b,a.g_v,97,121)){break a}if(!j(b,a.g_v,97,121)){break a}break b}b._=b.A-e|0;if(!j(b,a.g_v,97,121)){return false}if(!h(b,a.g_v,97,121)){return false}if(b._>b.D){return false}}return true};a.prototype.Q=function(){return!(this.I_p1<=this._)?false:true};a.prototype.r_R1=a.prototype.Q;a.prototype.R=function(){return!(this.I_p2<=this._)?false:true};a.prototype.r_R2=a.prototype.R;a.prototype.S=function(){var b;var g;var m;var i;var j;var k;var f;var l;var e;g=this.A-this._|0;i=true;a:while(i===true){i=false;this.C=this._;b=d(this,a.a_1,3);if(b===0){this._=this.A-g|0;break a}this.B=this._;switch(b){case 0:this._=this.A-g|0;break a;case 1:if(!c(this,'')){return false}break}}this.C=this._;b=d(this,a.a_2,6);if(b===0){return false}this.B=this._;switch(b){case 0:return false;case 1:if(!c(this,'ss')){return false}break;case 2:j=true;a:while(j===true){j=false;m=this.A-this._|0;k=true;b:while(k===true){k=false;f=this._-2|0;if(this.D>f||f>this.A){break b}this._=f;if(!c(this,'i')){return false}break a}this._=this.A-m|0;if(!c(this,'ie')){return false}}break;case 3:if(this._<=this.D){return false}e=this._,this._=e-1|0,e;a:while(true){l=true;b:while(l===true){l=false;if(!h(this,a.g_v,97,121)){break b}break a}if(this._<=this.D){return false}e=this._,this._=e-1|0,e}if(!c(this,'')){return false}break}return true};a.prototype.r_Step_1a=a.prototype.S;function I(b){var f;var m;var n;var j;var k;var l;var g;var i;var e;m=b.A-b._|0;j=true;a:while(j===true){j=false;b.C=b._;f=d(b,a.a_1,3);if(f===0){b._=b.A-m|0;break a}b.B=b._;switch(f){case 0:b._=b.A-m|0;break a;case 1:if(!c(b,'')){return false}break}}b.C=b._;f=d(b,a.a_2,6);if(f===0){return false}b.B=b._;switch(f){case 0:return false;case 1:if(!c(b,'ss')){return false}break;case 2:k=true;a:while(k===true){k=false;n=b.A-b._|0;l=true;b:while(l===true){l=false;g=b._-2|0;if(b.D>g||g>b.A){break b}b._=g;if(!c(b,'i')){return false}break a}b._=b.A-n|0;if(!c(b,'ie')){return false}}break;case 3:if(b._<=b.D){return false}e=b._,b._=e-1|0,e;a:while(true){i=true;b:while(i===true){i=false;if(!h(b,a.g_v,97,121)){break b}break a}if(b._<=b.D){return false}e=b._,b._=e-1|0,e}if(!c(b,'')){return false}break}return true};a.prototype.T=function(){var e;var q;var t;var m;var j;var i;var p;var k;var o;var l;var g;var r;var f;var b;this.C=this._;e=d(this,a.a_4,6);if(e===0){return false}this.B=this._;switch(e){case 0:return false;case 1:if(!(!(this.I_p1<=this._)?false:true)){return false}if(!c(this,'ee')){return false}break;case 2:q=this.A-this._|0;a:while(true){j=true;b:while(j===true){j=false;if(!h(this,a.g_v,97,121)){break b}break a}if(this._<=this.D){return false}b=this._,this._=b-1|0,b}this._=this.A-q|0;if(!c(this,'')){return false}t=this.A-this._|0;e=d(this,a.a_3,13);if(e===0){return false}this._=this.A-t|0;switch(e){case 0:return false;case 1:i=g=this._;p=g;k=n(this,g,g,'e');if(g<=this.B){this.B=this.B+k|0}if(p<=this.C){this.C=this.C+k|0}this._=i;break;case 2:this.C=r=this._;if(r<=this.D){return false}b=this._,this._=b-1|0,b;this.B=this._;if(!c(this,'')){return false}break;case 3:if(this._!==this.I_p1){return false}m=this.A-this._|0;if(!s(this)){return false}f=this._=this.A-m|0;i=f;o=f;l=n(this,f,f,'e');if(f<=this.B){this.B=this.B+l|0}if(o<=this.C){this.C=this.C+l|0}this._=i;break}break}return true};a.prototype.r_Step_1b=a.prototype.T;function J(b){var f;var r;var u;var o;var k;var j;var q;var l;var p;var m;var i;var t;var g;var e;b.C=b._;f=d(b,a.a_4,6);if(f===0){return false}b.B=b._;switch(f){case 0:return false;case 1:if(!(!(b.I_p1<=b._)?false:true)){return false}if(!c(b,'ee')){return false}break;case 2:r=b.A-b._|0;a:while(true){k=true;b:while(k===true){k=false;if(!h(b,a.g_v,97,121)){break b}break a}if(b._<=b.D){return false}e=b._,b._=e-1|0,e}b._=b.A-r|0;if(!c(b,'')){return false}u=b.A-b._|0;f=d(b,a.a_3,13);if(f===0){return false}b._=b.A-u|0;switch(f){case 0:return false;case 1:j=i=b._;q=i;l=n(b,i,i,'e');if(i<=b.B){b.B=b.B+l|0}if(q<=b.C){b.C=b.C+l|0}b._=j;break;case 2:b.C=t=b._;if(t<=b.D){return false}e=b._,b._=e-1|0,e;b.B=b._;if(!c(b,'')){return false}break;case 3:if(b._!==b.I_p1){return false}o=b.A-b._|0;if(!s(b)){return false}g=b._=b.A-o|0;j=g;p=g;m=n(b,g,g,'e');if(g<=b.B){b.B=b.B+m|0}if(p<=b.C){b.C=b.C+m|0}b._=j;break}break}return true};a.prototype.U=function(){var g;var h;var b;var d;var f;this.C=this._;b=true;a:while(b===true){b=false;g=this.A-this._|0;d=true;b:while(d===true){d=false;if(!e(this,1,'y')){break b}break a}this._=this.A-g|0;if(!e(this,1,'Y')){return false}}this.B=this._;if(!j(this,a.g_v,97,121)){return false}h=this.A-this._|0;f=true;a:while(f===true){f=false;if(this._>this.D){break a}return false}this._=this.A-h|0;return!c(this,'i')?false:true};a.prototype.r_Step_1c=a.prototype.U;function K(b){var h;var i;var d;var f;var g;b.C=b._;d=true;a:while(d===true){d=false;h=b.A-b._|0;f=true;b:while(f===true){f=false;if(!e(b,1,'y')){break b}break a}b._=b.A-h|0;if(!e(b,1,'Y')){return false}}b.B=b._;if(!j(b,a.g_v,97,121)){return false}i=b.A-b._|0;g=true;a:while(g===true){g=false;if(b._>b.D){break a}return false}b._=b.A-i|0;return!c(b,'i')?false:true};a.prototype.V=function(){var b;var f;this.C=this._;b=d(this,a.a_5,24);if(b===0){return false}this.B=f=this._;if(!(!(this.I_p1<=f)?false:true)){return false}switch(b){case 0:return false;case 1:if(!c(this,'tion')){return false}break;case 2:if(!c(this,'ence')){return false}break;case 3:if(!c(this,'ance')){return false}break;case 4:if(!c(this,'able')){return false}break;case 5:if(!c(this,'ent')){return false}break;case 6:if(!c(this,'ize')){return false}break;case 7:if(!c(this,'ate')){return false}break;case 8:if(!c(this,'al')){return false}break;case 9:if(!c(this,'ful')){return false}break;case 10:if(!c(this,'ous')){return false}break;case 11:if(!c(this,'ive')){return false}break;case 12:if(!c(this,'ble')){return false}break;case 13:if(!e(this,1,'l')){return false}if(!c(this,'og')){return false}break;case 14:if(!c(this,'ful')){return false}break;case 15:if(!c(this,'less')){return false}break;case 16:if(!h(this,a.g_valid_LI,99,116)){return false}if(!c(this,'')){return false}break}return true};a.prototype.r_Step_2=a.prototype.V;function L(b){var f;var g;b.C=b._;f=d(b,a.a_5,24);if(f===0){return false}b.B=g=b._;if(!(!(b.I_p1<=g)?false:true)){return false}switch(f){case 0:return false;case 1:if(!c(b,'tion')){return false}break;case 2:if(!c(b,'ence')){return false}break;case 3:if(!c(b,'ance')){return false}break;case 4:if(!c(b,'able')){return false}break;case 5:if(!c(b,'ent')){return false}break;case 6:if(!c(b,'ize')){return false}break;case 7:if(!c(b,'ate')){return false}break;case 8:if(!c(b,'al')){return false}break;case 9:if(!c(b,'ful')){return false}break;case 10:if(!c(b,'ous')){return false}break;case 11:if(!c(b,'ive')){return false}break;case 12:if(!c(b,'ble')){return false}break;case 13:if(!e(b,1,'l')){return false}if(!c(b,'og')){return false}break;case 14:if(!c(b,'ful')){return false}break;case 15:if(!c(b,'less')){return false}break;case 16:if(!h(b,a.g_valid_LI,99,116)){return false}if(!c(b,'')){return false}break}return true};a.prototype.W=function(){var b;var e;this.C=this._;b=d(this,a.a_6,9);if(b===0){return false}this.B=e=this._;if(!(!(this.I_p1<=e)?false:true)){return false}switch(b){case 0:return false;case 1:if(!c(this,'tion')){return false}break;case 2:if(!c(this,'ate')){return false}break;case 3:if(!c(this,'al')){return false}break;case 4:if(!c(this,'ic')){return false}break;case 5:if(!c(this,'')){return false}break;case 6:if(!(!(this.I_p2<=this._)?false:true)){return false}if(!c(this,'')){return false}break}return true};a.prototype.r_Step_3=a.prototype.W;function M(b){var e;var f;b.C=b._;e=d(b,a.a_6,9);if(e===0){return false}b.B=f=b._;if(!(!(b.I_p1<=f)?false:true)){return false}switch(e){case 0:return false;case 1:if(!c(b,'tion')){return false}break;case 2:if(!c(b,'ate')){return false}break;case 3:if(!c(b,'al')){return false}break;case 4:if(!c(b,'ic')){return false}break;case 5:if(!c(b,'')){return false}break;case 6:if(!(!(b.I_p2<=b._)?false:true)){return false}if(!c(b,'')){return false}break}return true};a.prototype.X=function(){var b;var h;var f;var g;var i;this.C=this._;b=d(this,a.a_7,18);if(b===0){return false}this.B=i=this._;if(!(!(this.I_p2<=i)?false:true)){return false}switch(b){case 0:return false;case 1:if(!c(this,'')){return false}break;case 2:f=true;a:while(f===true){f=false;h=this.A-this._|0;g=true;b:while(g===true){g=false;if(!e(this,1,'s')){break b}break a}this._=this.A-h|0;if(!e(this,1,'t')){return false}}if(!c(this,'')){return false}break}return true};a.prototype.r_Step_4=a.prototype.X;function N(b){var f;var i;var g;var h;var j;b.C=b._;f=d(b,a.a_7,18);if(f===0){return false}b.B=j=b._;if(!(!(b.I_p2<=j)?false:true)){return false}switch(f){case 0:return false;case 1:if(!c(b,'')){return false}break;case 2:g=true;a:while(g===true){g=false;i=b.A-b._|0;h=true;b:while(h===true){h=false;if(!e(b,1,'s')){break b}break a}b._=b.A-i|0;if(!e(b,1,'t')){return false}}if(!c(b,'')){return false}break}return true};a.prototype.Y=function(){var b;var i;var j;var f;var g;var h;var k;this.C=this._;b=d(this,a.a_8,2);if(b===0){return false}this.B=this._;switch(b){case 0:return false;case 1:f=true;a:while(f===true){f=false;i=this.A-this._|0;g=true;b:while(g===true){g=false;if(!(!(this.I_p2<=this._)?false:true)){break b}break a}k=this._=this.A-i|0;if(!(!(this.I_p1<=k)?false:true)){return false}j=this.A-this._|0;h=true;b:while(h===true){h=false;if(!s(this)){break b}return false}this._=this.A-j|0}if(!c(this,'')){return false}break;case 2:if(!(!(this.I_p2<=this._)?false:true)){return false}if(!e(this,1,'l')){return false}if(!c(this,'')){return false}break}return true};a.prototype.r_Step_5=a.prototype.Y;function O(b){var f;var j;var k;var g;var h;var i;var l;b.C=b._;f=d(b,a.a_8,2);if(f===0){return false}b.B=b._;switch(f){case 0:return false;case 1:g=true;a:while(g===true){g=false;j=b.A-b._|0;h=true;b:while(h===true){h=false;if(!(!(b.I_p2<=b._)?false:true)){break b}break a}l=b._=b.A-j|0;if(!(!(b.I_p1<=l)?false:true)){return false}k=b.A-b._|0;i=true;b:while(i===true){i=false;if(!s(b)){break b}return false}b._=b.A-k|0}if(!c(b,'')){return false}break;case 2:if(!(!(b.I_p2<=b._)?false:true)){return false}if(!e(b,1,'l')){return false}if(!c(b,'')){return false}break}return true};a.prototype.a=function(){var b;this.C=this._;if(d(this,a.a_9,8)===0){return false}this.B=b=this._;return b>this.D?false:true};a.prototype.r_exception2=a.prototype.a;function P(b){var c;b.C=b._;if(d(b,a.a_9,8)===0){return false}b.B=c=b._;return c>b.D?false:true};a.prototype.Z=function(){var b;var d;this.B=this._;b=q(this,a.a_10,18);if(b===0){return false}this.C=d=this._;if(d<this.A){return false}switch(b){case 0:return false;case 1:if(!c(this,'ski')){return false}break;case 2:if(!c(this,'sky')){return false}break;case 3:if(!c(this,'die')){return false}break;case 4:if(!c(this,'lie')){return false}break;case 5:if(!c(this,'tie')){return false}break;case 6:if(!c(this,'idl')){return false}break;case 7:if(!c(this,'gentl')){return false}break;case 8:if(!c(this,'ugli')){return false}break;case 9:if(!c(this,'earli')){return false}break;case 10:if(!c(this,'onli')){return false}break;case 11:if(!c(this,'singl')){return false}break}return true};a.prototype.r_exception1=a.prototype.Z;function Q(b){var d;var e;b.B=b._;d=q(b,a.a_10,18);if(d===0){return false}b.C=e=b._;if(e<b.A){return false}switch(d){case 0:return false;case 1:if(!c(b,'ski')){return false}break;case 2:if(!c(b,'sky')){return false}break;case 3:if(!c(b,'die')){return false}break;case 4:if(!c(b,'lie')){return false}break;case 5:if(!c(b,'tie')){return false}break;case 6:if(!c(b,'idl')){return false}break;case 7:if(!c(b,'gentl')){return false}break;case 8:if(!c(b,'ugli')){return false}break;case 9:if(!c(b,'earli')){return false}break;case 10:if(!c(b,'onli')){return false}break;case 11:if(!c(b,'singl')){return false}break}return true};a.prototype.c=function(){var f;var a;var b;var d;var g;var e;if(!this.B_Y_found){return false}a:while(true){f=this._;b=true;b:while(b===true){b=false;c:while(true){a=this._;d=true;d:while(d===true){d=false;this.B=this._;if(!i(this,1,'Y')){break d}this.C=this._;this._=a;break c}g=this._=a;if(g>=this.A){break b}e=this._,this._=e+1|0,e}if(!c(this,'y')){return false}continue a}this._=f;break a}return true};a.prototype.r_postlude=a.prototype.c;function R(a){var g;var b;var d;var e;var h;var f;if(!a.B_Y_found){return false}a:while(true){g=a._;d=true;b:while(d===true){d=false;c:while(true){b=a._;e=true;d:while(e===true){e=false;a.B=a._;if(!i(a,1,'Y')){break d}a.C=a._;a._=b;break c}h=a._=b;if(h>=a.A){break b}f=a._,a._=f+1|0,f}if(!c(a,'y')){return false}continue a}a._=g;break a}return true};a.prototype.J=function(){var l;var D;var E;var F;var s;var t;var u;var w;var x;var y;var z;var A;var B;var j;var c;var d;var e;var a;var g;var h;var i;var b;var k;var f;var m;var n;var o;var p;var q;var r;var G;var S;var T;var U;var V;var W;var X;var Y;var Z;var _;var $;var a0;var a1;var a2;var a3;var a4;var a5;var C;j=true;a:while(j===true){j=false;l=this._;c=true;b:while(c===true){c=false;if(!Q(this)){break b}break a}this._=l;d=true;b:while(d===true){d=false;D=this._;e=true;c:while(e===true){e=false;a=this._+3|0;if(0>a||a>this.A){break c}this._=a;break b}this._=D;break a}G=this._=l;E=G;g=true;b:while(g===true){g=false;if(!v(this)){break b}}S=this._=E;F=S;h=true;b:while(h===true){h=false;if(!H(this)){break b}}T=this._=F;this.D=T;V=this._=U=this.A;s=U-V|0;i=true;b:while(i===true){i=false;if(!I(this)){break b}}this._=this.A-s|0;b=true;b:while(b===true){b=false;t=this.A-this._|0;k=true;c:while(k===true){k=false;if(!P(this)){break c}break b}X=this._=(W=this.A)-t|0;u=W-X|0;f=true;c:while(f===true){f=false;if(!J(this)){break c}}Z=this._=(Y=this.A)-u|0;w=Y-Z|0;m=true;c:while(m===true){m=false;if(!K(this)){break c}}$=this._=(_=this.A)-w|0;x=_-$|0;n=true;c:while(n===true){n=false;if(!L(this)){break c}}a1=this._=(a0=this.A)-x|0;y=a0-a1|0;o=true;c:while(o===true){o=false;if(!M(this)){break c}}a3=this._=(a2=this.A)-y|0;z=a2-a3|0;p=true;c:while(p===true){p=false;if(!N(this)){break c}}a5=this._=(a4=this.A)-z|0;A=a4-a5|0;q=true;c:while(q===true){q=false;if(!O(this)){break c}}this._=this.A-A|0}C=this._=this.D;B=C;r=true;b:while(r===true){r=false;if(!R(this)){break b}}this._=B}return true};a.prototype.stem=a.prototype.J;a.prototype.N=function(b){return b instanceof a};a.prototype.equals=a.prototype.N;a.prototype.O=function(){var c;var a;var b;var d;c='EnglishStemmer';a=0;for(b=0;b<c.length;b++){d=c.charCodeAt(b);a=(a<<5)-a+d;a=a&a}return a|0};a.prototype.hashCode=a.prototype.O;a.serialVersionUID=1;f(a,'methodObject',function(){return new a});f(a,'a_0',function(){return[new b('arsen',-1,-1),new b('commun',-1,-1),new b('gener',-1,-1)]});f(a,'a_1',function(){return[new b('\'',-1,1),new b('\'s\'',0,1),new b('\'s',-1,1)]});f(a,'a_2',function(){return[new b('ied',-1,2),new b('s',-1,3),new b('ies',1,2),new b('sses',1,1),new b('ss',1,-1),new b('us',1,-1)]});f(a,'a_3',function(){return[new b('',-1,3),new b('bb',0,2),new b('dd',0,2),new b('ff',0,2),new b('gg',0,2),new b('bl',0,1),new b('mm',0,2),new b('nn',0,2),new b('pp',0,2),new b('rr',0,2),new b('at',0,1),new b('tt',0,2),new b('iz',0,1)]});f(a,'a_4',function(){return[new b('ed',-1,2),new b('eed',0,1),new b('ing',-1,2),new b('edly',-1,2),new b('eedly',3,1),new b('ingly',-1,2)]});f(a,'a_5',function(){return[new b('anci',-1,3),new b('enci',-1,2),new b('ogi',-1,13),new b('li',-1,16),new b('bli',3,12),new b('abli',4,4),new b('alli',3,8),new b('fulli',3,14),new b('lessli',3,15),new b('ousli',3,10),new b('entli',3,5),new b('aliti',-1,8),new b('biliti',-1,12),new b('iviti',-1,11),new b('tional',-1,1),new b('ational',14,7),new b('alism',-1,8),new b('ation',-1,7),new b('ization',17,6),new b('izer',-1,6),new b('ator',-1,7),new b('iveness',-1,11),new b('fulness',-1,9),new b('ousness',-1,10)]});f(a,'a_6',function(){return[new b('icate',-1,4),new b('ative',-1,6),new b('alize',-1,3),new b('iciti',-1,4),new b('ical',-1,4),new b('tional',-1,1),new b('ational',5,2),new b('ful',-1,5),new b('ness',-1,5)]});f(a,'a_7',function(){return[new b('ic',-1,1),new b('ance',-1,1),new b('ence',-1,1),new b('able',-1,1),new b('ible',-1,1),new b('ate',-1,1),new b('ive',-1,1),new b('ize',-1,1),new b('iti',-1,1),new b('al',-1,1),new b('ism',-1,1),new b('ion',-1,2),new b('er',-1,1),new b('ous',-1,1),new b('ant',-1,1),new b('ent',-1,1),new b('ment',15,1),new b('ement',16,1)]});f(a,'a_8',function(){return[new b('e',-1,1),new b('l',-1,2)]});f(a,'a_9',function(){return[new b('succeed',-1,-1),new b('proceed',-1,-1),new b('exceed',-1,-1),new b('canning',-1,-1),new b('inning',-1,-1),new b('earring',-1,-1),new b('herring',-1,-1),new b('outing',-1,-1)]});f(a,'a_10',function(){return[new b('andes',-1,-1),new b('atlas',-1,-1),new b('bias',-1,-1),new b('cosmos',-1,-1),new b('dying',-1,3),new b('early',-1,9),new b('gently',-1,7),new b('howe',-1,-1),new b('idly',-1,6),new b('lying',-1,4),new b('news',-1,-1),new b('only',-1,10),new b('singly',-1,11),new b('skies',-1,2),new b('skis',-1,1),new b('sky',-1,-1),new b('tying',-1,5),new b('ugly',-1,8)]});a.g_v=[17,65,16,1];a.g_v_WXY=[1,17,65,208,1];a.g_valid_LI=[55,141,2];var u={'src/stemmer.jsx':{Stemmer:t},'src/english-stemmer.jsx':{EnglishStemmer:a}}}(JSX))
var Stemmer = JSX.require("src/stemmer.jsx").Stemmer;
var EnglishStemmer = JSX.require("src/english-stemmer.jsx").EnglishStemmer;