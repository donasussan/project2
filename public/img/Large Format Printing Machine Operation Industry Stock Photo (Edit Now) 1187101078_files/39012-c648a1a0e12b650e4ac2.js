"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[39012],{99479:function(e,t,r){r.d(t,{e:function(){return i}});var n=r(92809),a=r(10861);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var i=function(e){var t=e.urlParams,r=void 0===t?{}:t,i=e.queryParams,c=void 0===i?{}:i,o="/bundle/".concat(r.filename),u=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},c);return{url:o,defaultParams:u,formattedUrl:(0,a.format)({pathname:o,query:u})}}},51362:function(e,t,r){r.d(t,{rB:function(){return _},Oo:function(){return D}});var n=r(92809),a=r(30266),s=r(809),i=r.n(s),c=r(23204),o=r.n(c),u=r(88789),l=r(814),p=r(2448),f=r(80336),d=r(12878),m=r(51773),v=r(20572),b=r(85884),y=r(75114),w=r(45218),O=r(11409),j=r(76053),h=r(86037);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _=function(e){var t,r,n=e.asset;return(null===n||void 0===n||null===(t=n.metadata)||void 0===t||null===(r=t.cart)||void 0===r?void 0:r.sizes)||n.sizes},k=function(){var e=(0,a.Z)(i().mark((function e(t){var r,n,a,s,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(n=t.asset)||void 0===n||null===(r=n.metadata)||void 0===r||!r.cart||n.metadata.cart.sizes){e.next=9;break}return a=(0,O.so)(n),s={id:n.id},a&&(s.channel=d.$S,s.content_provider=m._e),e.next=7,b.uS.get((0,u.om)({queryParams:s}).formattedUrl).then((function(e){var t=e.data;return(0,y.O)(t)}));case 7:return c=e.sent,e.abrupt("return",c.sizes);case 9:return e.abrupt("return",_({asset:n}));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(e){var t,r,n,a,s=e.selectedAssetSize,i=e.asset,c=_({asset:i}),u=(0,O.EK)(i);if(!c&&null!==i&&void 0!==i&&null!==(t=i.metadata)&&void 0!==t&&null!==(r=t.cart)&&void 0!==r&&r.size&&i.metadata.cart.format)return{content_size:u?p.vD:i.metadata.cart.size,content_format:i.metadata.cart.format};var f,d=Object.values(c);return f=i.licenseAsJpeg||null!==(n=i.metadata)&&void 0!==n&&null!==(a=n.cart)&&void 0!==a&&a.licenseAsJpeg?d.find((function(e){return e.format===l._3})):j.Bg[s]?(0,w.AR)({sizes:d,compSizeImage:s}):(0,w.Nf)(d),{content_size:u?p.vD:j.nd[o()(f.name)].downloadName,content_format:f.format}},S=function(e){var t=e.map[e.licenseName];return t===p.T0?p.qY:t},z=function(e){var t=e.asset,r=e.licenseName,n=e.isVideoComp,a=e.selectedAssetSize,s=e.sizes,i=(0,O.EK)(t),c=(0,O.cL)(t),o=(0,O.$Q)({sizes:Object.values(s)});return!n&&o?S({map:j.Q1,licenseName:r}):n||r===v.f1||i||c?!a||i||c?(0,w.mF)(s):j.kR[a]:S({map:j.kR,licenseName:r})},N=function(){var e=(0,a.Z)(i().mark((function e(t){var r,n,a,s,c,o,u,l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.asset,n=t.licenseName,a=t.isVideoComp,s=t.selectedAssetSize,e.next=3,k({asset:r});case 3:return c=e.sent,o=z({asset:r,licenseName:n,isVideoComp:a,selectedAssetSize:s,sizes:c}),u=(0,O.EK)(r),l=Object.values(c).find((function(e){var t=e.resolution;return j.wb[null===t||void 0===t?void 0:t.toLowerCase()]===o})),e.abrupt("return",{content_size:u?p.vD:o,content_format:null===l||void 0===l?void 0:l.format});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=(0,a.Z)(i().mark((function e(t){var r,n,a,s,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.asset,n=t.licenseName,a=t.isVideoComp,s=t.selectedAssetSize,c=(0,h.qw)({asset:r}),(0,O.so)(r)&&(c=f.A7),e.t0=c,e.next=e.t0===f.pX||e.t0===f.A7?6:e.t0===f.j0?9:10;break;case 6:return e.next=8,N({asset:r,licenseName:n,isVideoComp:a,selectedAssetSize:s});case 8:return e.abrupt("return",e.sent);case 9:return e.abrupt("return",{content_size:p.Ng,content_format:f.j0});case 10:return e.abrupt("return",x({selectedAssetSize:s,asset:r}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=(0,a.Z)(i().mark((function e(t){var r,n,a,s,c,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.licenseName,n=t.selectedAssetSize,a=t.asset,s=t.isVideoComp,c=(0,h.qw)({asset:a}),o=a.id.toString(),e.t0=P,e.t1={content_id:o,content_type:(0,h.JD)({assetType:c,assetId:o})},e.next=7,C({asset:a,licenseName:r,isVideoComp:s,selectedAssetSize:n});case 7:return e.t2=e.sent,e.abrupt("return",(0,e.t0)(e.t1,e.t2));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},86037:function(e,t,r){r.d(t,{JD:function(){return i},qw:function(){return c},rw:function(){return o},Fy:function(){return u},Js:function(){return l}});var n=r(80336),a=r(20572),s=r(11409),i=function(e){var t=e.assetId,r=e.assetType;if((0,s.EK)({id:t}))return n.gP;switch(r){case n.k4:case n.Y_:case n.ox:return n.pV;case n.FM:return n.pX;case n.xF:case n.jr:return n.j0;default:return r}},c=function(e){var t,r=e.asset;if(null!==(t=r.image)&&void 0!==t&&t.isVector)return n.ox;if((0,s.EK)(r))return n.gP;var a=r.imageType||r.itemType||r.type;switch(a){case n.X2:case n.Y_:return n.k4;case n.FM:return n.pX;case n.jr:return n.j0;default:return a}},o=function(e){var t=e.asset;if((0,s.N3)(t))return n.gP;if((0,s.so)(t))return n.cF;var r=t.imageType||t.itemType||t.type;switch(r){case n.ox:case n.pV:case n.X2:case n.Y_:return n.k4;case n.FM:return n.pX;case n.jr:return n.j0;default:return r}},u=function(e){var t=e.asset;if((0,s.N3)(t))return n.nX;if((0,s.so)(t))return n.A7;var r=t.imageType||t.itemType||t.type;switch(r){case n.ox:case n.pV:case n.X2:case n.Y_:return n.k4;case n.FM:return n.pX;case n.jr:case n.xF:return n.j0;default:return r}},l=function(e){var t=u({asset:e.mediaItem});return e.licenseName===a._r[t]}},39012:function(e,t,r){r.d(t,{A_:function(){return h},uG:function(){return g},mJ:function(){return P},QH:function(){return _},VM:function(){return x},oe:function(){return S}});var n=r(92809),a=r(97131),s=r(30266),i=r(809),c=r.n(i),o=r(31955),u=r(99479),l=r(88789),p=r(80336),f=r(63509),d=r(20572),m=r(51362),v=r(45218),b=r(11409),y=r(51224),w=r(85884);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.name,n=t.target,a=void 0===n?"_self":n,s=document.createElement("a");s.style.display="none",document.body.appendChild(s),s.href=e,s.target=a,r&&(s.download=r),o.Z.get(f.ec)||s.click(),document.body.removeChild(s)},g=function(){var e=(0,s.Z)(c().mark((function e(t){var r,n,a,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.downloadBundlePayload,n=(0,u.e)({urlParams:{filename:r.bundleFilename}}).formattedUrl,e.next=4,w.jl.post(n,r.content);case 4:return a=e.sent,s=a.data.public_url,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(e){var t=e.licensedContent,r=e.supplementalUrlType,n=t[0],a=n.downloadUrl,s=n.supplementalUrls;if(null!==s&&void 0!==s&&s.length&&r){var i=(s.find((function(e){return e.type===r}))||{}).url;return void 0===i?a:i}return a},_=function(){var e=(0,s.Z)(c().mark((function e(t){var r,n,a,s,i,o,u;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.downloadPayload,n=t.supplementalUrlType,a=t.licenseeIdentifier,s=(0,l.f$)({urlParams:{licenseeIdentifier:a}}).formattedUrl,e.next=4,w.uS.post(s,r);case 4:return i=e.sent,o=i.data.meta.licensedContent,u=P({licensedContent:o,supplementalUrlType:n}),e.abrupt("return",{downloadUrl:u,licensedContent:o});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(e){var t=e.contentType,r=e.licenseName,n=e.subscriptions;switch(t){case p.pX:var s=(0,y.eL)({subscriptions:[].concat((0,a.Z)(null===n||void 0===n?void 0:n.videoSubscriptions),(0,a.Z)(null===n||void 0===n?void 0:n.videoCompSubscriptions)),licenseName:r});return(null===s||void 0===s?void 0:s.redeemableFor)||r;case p.j0:return r||d.zU;case p.pV:default:return r}},x=function(){var e=(0,s.Z)(c().mark((function e(t){var r,n,a,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.assets,n=t.subscriptions,a=r.map(function(){var e=(0,s.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,v.SS)({asset:t}),e.t0=j,e.t1=j,e.t2={},e.next=6,(0,m.Oo)({asset:t,licenseName:t.licenseId});case 6:return e.t3=e.sent,e.t4=(0,e.t1)(e.t2,e.t3),e.t5={},e.t6={license_name:k({contentType:r,licenseName:t.licenseId,subscriptions:n}),show_modal:!0},e.abrupt("return",(0,e.t0)(e.t4,e.t5,e.t6));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=4,Promise.all(a);case 4:return i=e.sent,e.abrupt("return",{required_cookies:"",content:i});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e&&e.id&&(e.title||e.description)&&e.type&&window.localStorage.setItem("sstk_ent_asset_preview",JSON.stringify({id:e.id,title:e.title||e.description,thumb:e.src||e.previewImageUrl||"",video:e.previewVideoUrls,url:e.link,type:(0,b.Tp)(e),isRex:e.isRexEditorial}))}}}]);