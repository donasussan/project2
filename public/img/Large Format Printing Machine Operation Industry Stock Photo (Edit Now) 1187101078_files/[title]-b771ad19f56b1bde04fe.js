(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[17989],{1960:function(e,t,r){"use strict";r.r(t),r.d(t,{CONTAINED_IN_COLLECTIONS_ITEMS_SIZE:function(){return N},CONTAINED_IN_COLLECTIONS_SIZE:function(){return L},VISUALLY_SIMILAR_ITEMS_COUNT:function(){return D},VISUALLY_SIMILAR_VIDEOS_COUNT:function(){return k},__N_SSP:function(){return A},default:function(){return M}});var n=r(92809),i=r(5152),s=r(9008),o=r(11163),a=r(86722),c=r(67294),l=r(70967),u=r(23240),p=r(21929),f=r(56129),m=r(76252),d=r(69825),O=r(53797),g=r(48403),_=r.n(g),b=r(96390),y=function(e){return e&&"string"===typeof e?e.replace(/[\r\n]/g," "):""},v=function(e){if(!e)return"";var t=[];return e.split(" ").forEach((function(e){e.trim().length&&!b.O.en[e.toLowerCase()]&&t.push(e)})),t.join(" ")},h=function(e){return e&&"string"===typeof e?e.split(" ").map((function(e){return/(^https?:\/\/)|(^www\.)|(\.[a-z]{2,3}$)/i.test(e)?e.replace(/^https?:\/\//i,"").split(/[/?#]/)[0].replace(/^www\./i,"").replace(/\.[a-z]{2,3}$/i,""):-1!==e.indexOf("?")||/[^\x00-\x7F]+/.test(e)?"":e})).join(" ").replace(/[^\w\s]/gi,"").replace(/ +(?= )/g,"").trim():""},S=function(e,t){return"string"!==typeof e?"":e.trim().split(/\s+/).slice(0,t).join(" ")},T=function(e){return e&&"string"===typeof e?e.split(" ").map((function(e,t){return 0!==t&&function(e){return b.O.en[e.toLowerCase()]}(e)?e.toLowerCase():_()(e)})).join(" "):""},j=r(57650),w=r(12676),P=r(85893);function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var C=(0,i.default)((function(){return Promise.all([r.e(7719),r.e(93013),r.e(65532),r.e(79026),r.e(85835),r.e(55701),r.e(98365),r.e(88904),r.e(32809)]).then(r.bind(r,26746)).then((function(e){return e.RelatedSections}))}),{ssr:!1,loadableGenerated:{webpack:function(){return[26746]},modules:["_shutterstock/image-photo/[title].jsx -> @/components/AssetDetails/RelatedSections"]}}),A=!0,L=1,N=20,D=44,k=12,R=function(e){var t=e.asset,r=e.relatedAssets,n=e.relatedAssetsPathProps,i=e.relatedAssetsToUse,u=e.remainingRelatedAssets,g=e.sameArtistAssets,_=e.schemas,b=t.containedInCollections,I=(b=void 0===b?{}:b).title,A=b.id,L=b.meta,N=(L=void 0===L?{}:L).items,D=t.contributor,k=t.id,R=t.imageType,M=t.sameModel,x=t.visuallySimilar,U=t.visuallySimilarVideos,V=(0,a.$G)(m.Cgc).t,Z=(0,o.useRouter)().locale,G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("en"!==t&&r[t])return S(y(e),6);var n=h(e),i=v(n),s=y(i),o=S(s,6);return T(o)}((0,d.G)({asset:t,language:Z}),Z,t.descriptionLanguageMap),B=(0,p._N)({contributor:D}).name,F=function(e){var t=e.t,r=e.collectionTitle,n=e.contributorName,i=e.description,s=e.id,o=e.imageType;return{assetsFromSameCollection:t("assets_same_collection"),relatedKeywordsTitle:t("image:idp_keywords_title"),visuallySimilarTitle:t("image:similar_images_title"),containedInCollectionsTitle:(0,w.v)(t,"image:contained_in_collection_title",{CONTRIBUTOR:n,COLLECTION_TITLE:r}),visuallySimilarVideosTitle:t("image:similar_videos_title"),sameModelTitle:t("image:same_model_title"),sameArtistAssetsTitle:t("image:same_artist_title"),relatedSectionButton:t("common:actions_see_all"),metaTitle:t("image:seo_title_".concat(o),{DESCRIPTION:i,ASSET_ID:s}),metaDescription:t("image:search_meta_description",{SEARCH_TERM:i})}}({t:V,contributorName:B,collectionTitle:I,description:G,id:k,imageType:R}),H=(0,c.useMemo)((function(){if(null!==_&&void 0!==_&&_.length){var e=(0,j.C)({assets:[t],schemas:_,t:V});return(0,O.oc)({html:e})}return null}),[t,_,V]),$=(0,P.jsx)(C,{asset:t,collectionId:A,collectionItems:N===r?u:N,gridSpacing:4,labels:F,sameArtistAssets:g,sameModel:M,showSimilarVideos:!0,visuallySimilar:x,visuallySimilarMaxRows:6,visuallySimilarVideos:U,withInlineCta:!0});return(0,P.jsxs)(P.Fragment,{children:[H&&(0,P.jsx)(s.default,{children:(0,P.jsx)("script",{type:H.type,dangerouslySetInnerHTML:{__html:H.innerHTML}})}),(0,P.jsx)(l.O,E(E({},e),{},{getSearchTermPathProps:f.J1,RelatedSections:$,relatedAssetsToUse:i,relatedAssetsPathProps:n,translatedLabels:F,translationNameSpace:m.Cgc}))]})};R.defaultProps={asset:{containedInCollections:{metaItems:[],title:""},sameModel:[],visuallySimilar:[],visuallySimilarVideos:[]},relatedAssets:[],relatedAssetsPathProps:["",""],relatedAssetsToUse:[],sameArtistAssets:[],schemas:[]},R.analyticsData={pageType:u.gh};var M=R},57650:function(e,t,r){"use strict";r.d(t,{C:function(){return l}});var n=r(92809),i=r(11752),s=r(80336),o=r(11409);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(0,i.default)().publicRuntimeConfig.shutterstockBaseUrl;var l=function(e){var t=e.assets,r=e.schemas,n=e.t;return t.reduce((function(e,t){if((0,o.Tp)(t)===s.k4){var i=t.description,a=t.id,l=t.imageType,u=void 0===l?"":l,p=null===r||void 0===r?void 0:r.find((function(e){return e.description===i}));if(!p)return e;var f=p.name;e.push(c(c({},p),{},{name:n("image:seo_title_".concat(u.toLowerCase()),{ASSET_ID:a,DESCRIPTION:f})}))}return e}),[])}},12676:function(e,t,r){"use strict";r.d(t,{v:function(){return c}});var n=r(79056),i=r(92809);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var a=":TOKEN;",c=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=e(t,o({OPEN_TAG:a,CLOSE_TAG:a},r)),s=i.split(a),c=(0,n.Z)(s,3),l=c[0],u=c[1],p=c[2];return{preLinkLabel:l,linkLabel:u,postLinkLabel:p}}},18640:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_shutterstock/image-photo/[title]",function(){return r(1960)}])}},function(e){e.O(0,[79351,52387,110,39803,31430,21466,10203,11409,88789,51224,64223,21551,50723,19384,84470,39012,8617,10278,62325,66831,23923,2700,90338,35298,70967,49774,92888,40179],(function(){return t=18640,e(e.s=t);var t}));var t=e.O();_N_E=t}]);