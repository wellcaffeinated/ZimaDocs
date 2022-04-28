/*! For license information please see 14eb3368.f4841bdb.js.LICENSE.txt */
"use strict";(self.webpackChunkzimadocs=self.webpackChunkzimadocs||[]).push([[9817],{4067:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7294),r=n(5979),i={breadcrumbsContainer:"breadcrumbsContainer_Xlws"},l=n(6010),o=n(9960),c=n(4996);function s(e){var t=e.children,n=e.href,r="breadcrumbs__link";return n?a.createElement(o.Z,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r,itemProp:"item name"},t)}function m(e){var t=e.children,n=e.active,r=e.index;return a.createElement("li",{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem",className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})},t,a.createElement("meta",{itemProp:"position",content:String(r+1)}))}function u(){var e=(0,c.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(o.Z,{className:(0,l.Z)("breadcrumbs__link",i.breadcrumbsItemLink),href:e},"\ud83c\udfe0"))}function d(){var e=(0,r.s1)(),t=(0,r.Ns)();return e?a.createElement("nav",{className:(0,l.Z)(r.kM.docs.docBreadcrumbs,i.breadcrumbsContainer),"aria-label":"breadcrumbs"},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(u,null),e.map((function(t,n){return a.createElement(m,{key:n,active:n===e.length-1,index:n},a.createElement(s,{href:n<e.length-1?t.href:void 0},t.label))})))):null}},8507:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var a=n(7294),r=n(5979),i=n(9960),l=n(6010),o="cardContainer_woeA",c="cardTitle_pNjP",s="cardDescription_qC_k",m=n(3919),u=n(5999);function d(e){var t=e.href,n=e.children;return a.createElement(i.Z,{href:t,className:(0,l.Z)("card padding--lg",o)},n)}function v(e){var t=e.href,n=e.icon,r=e.title,i=e.description;return a.createElement(d,{href:t},a.createElement("h2",{className:(0,l.Z)("text--truncate",c),title:r},n," ",r),i&&a.createElement("p",{className:(0,l.Z)("text--truncate",s),title:i},i))}function f(e){var t=e.item,n=(0,r.Wl)(t);return n?a.createElement(v,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,u.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){var t,n=e.item,i=(0,m.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,r.xz)(null!=(t=n.docId)?t:void 0);return a.createElement(v,{href:n.href,icon:i,title:n.label,description:null==l?void 0:l.description})}function g(e){var t=e.item;switch(t.type){case"link":return a.createElement(p,{item:t});case"category":return a.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function h(e){var t=e.items;return a.createElement("div",{className:"row"},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,r.Wl)(e)}))}(t).map((function(e,t){return a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(g,{key:t,item:e}))})))}var b=n(150),E=n(4474),Z=n(7597),_=n(4067),y=n(9649),N=n(4996),k="generatedIndexPage_vzzw",L="title_qBh7";function w(e){var t=e.categoryGeneratedIndex;return a.createElement(r.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,N.Z)(t.image)})}function T(e){var t=e.categoryGeneratedIndex,n=(0,r.jA)();return a.createElement(a.Fragment,null,a.createElement(r.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,N.Z)(t.image)}),a.createElement("div",{className:k},a.createElement(E.Z,null),a.createElement(_.Z,null),a.createElement(Z.Z,null),a.createElement("header",null,a.createElement(y.Z,{as:"h1",className:L},t.title),t.description&&a.createElement("p",null,t.description)),a.createElement("main",{className:"margin-top--lg"},a.createElement(h,{items:n.items})),a.createElement("footer",{className:"margin-top--lg"},a.createElement(b.Z,{previous:t.navigation.previous,next:t.navigation.next}))))}function x(e){return a.createElement(a.Fragment,null,a.createElement(w,e),a.createElement(T,e))}},7597:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(5999),i=n(5979),l=n(6010);function o(e){var t=e.className,n=(0,i.E6)();return n.badge?a.createElement("span",{className:(0,l.Z)(t,i.kM.docs.docVersionBadge,"badge badge--secondary")},a.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}},4474:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(7294),r=n(2263),i=n(9960),l=n(5999),o=n(5551),c=n(5979),s=n(6010);var m={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(l.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(l.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function u(e){var t=m[e.versionMetadata.banner];return a.createElement(t,e)}function d(e){var t=e.versionLabel,n=e.to,r=e.onClick;return a.createElement(l.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(i.Z,{to:n,onClick:r},a.createElement(l.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){var t,n=e.className,i=e.versionMetadata,l=(0,r.Z)().siteConfig.title,m=(0,o.gA)({failfast:!0}).pluginId,v=(0,c.J)(m).savePreferredVersionName,f=(0,o.Jo)(m),p=f.latestDocSuggestion,g=f.latestVersionSuggestion,h=null!=p?p:(t=g).docs.find((function(e){return e.id===t.mainDocId}));return a.createElement("div",{className:(0,s.Z)(n,c.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(u,{siteTitle:l,versionMetadata:i})),a.createElement("div",{className:"margin-top--md"},a.createElement(d,{versionLabel:g.label,to:h.path,onClick:function(){return v(g.name)}})))}function f(e){var t=e.className,n=(0,c.E6)();return n.banner?a.createElement(v,{className:t,versionMetadata:n}):null}},9649:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(7462),r=n(3366),i=n(7294),l=n(6010),o=n(5999),c=n(5979),s="anchorWithStickyNavbar_mojV",m="anchorWithHideOnScrollNavbar_R0VQ",u=["as","id"],d=["as"];function v(e){var t=e.as,n=e.id,d=(0,r.Z)(e,u),v=(0,c.LU)().navbar.hideOnScroll;return n?i.createElement(t,(0,a.Z)({},d,{className:(0,l.Z)("anchor",v?m:s),id:n}),d.children,i.createElement("a",{className:"hash-link",href:"#"+n,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):i.createElement(t,d)}function f(e){var t=e.as,n=(0,r.Z)(e,d);return"h1"===t?i.createElement("h1",(0,a.Z)({},n,{id:void 0}),n.children):i.createElement(v,(0,a.Z)({as:t},n))}},1750:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),r=n(9960);function i(e){var t=e.permalink,n=e.title,i=e.subLabel;return a.createElement(r.Z,{className:"pagination-nav__link",to:t},i&&a.createElement("div",{className:"pagination-nav__sublabel"},i),a.createElement("div",{className:"pagination-nav__label"},n))}},8684:function(e,t,n){n.d(t,{Z:function(){return i},_:function(){return r}});var a=n(7294),r=(0,a.createContext)(null);function i(){var e=(0,a.useContext)(r);if(null===e)throw new TypeError("No front matter context is available for `useFrontMatter()`.");return e}r.displayName="FrontMatterContext"},150:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(7294),r=n(7462),i=n(5999),l=n(1750);function o(e){var t=e.previous,n=e.next;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},a.createElement("div",{className:"pagination-nav__item"},t&&a.createElement(l.Z,(0,r.Z)({},t,{subLabel:a.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&a.createElement(l.Z,(0,r.Z)({},n,{subLabel:a.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}var c=n(8684),s=n(5979),m=n(2263),u=n(5893);function d({id:e,repo:t,repoId:r,category:i,categoryId:l,mapping:o,term:c,reactionsEnabled:s,emitMetadata:m,inputPosition:d,theme:v,lang:f,loading:p}){return(0,a.useEffect)((()=>{n.e(904).then(n.bind(n,904))}),[]),(0,u.jsx)("giscus-widget",{id:e,repo:t,repoid:r,category:i,categoryid:l,mapping:o,term:c,reactionsenabled:s,emitmetadata:m,inputposition:d,theme:v,lang:f,loading:p})}function v(e){var t=(0,s.If)().colorMode,n=function(){try{return(0,c.Z)().comments}catch(e){return!1}}(),r=(0,m.Z)().i18n;return a.createElement(a.Fragment,null,a.createElement(o,e),n&&a.createElement("div",{className:"docusaurus-mt-lg"},a.createElement(d,{id:"comments",repo:"IceWhaleTech/ZimaDocs",repoId:"R_kgDOGcaYdg",category:"ZimaDocs Comments",categoryId:"DIC_kwDOGcaYds4CO0nU",mapping:"pathname",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",theme:t,lang:r.currentLocale,loading:"lazy"})))}},5251:function(e,t,n){n(7418);var a=n(7294),r=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;r=i("react.element"),i("react.fragment")}var l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var a,i={},s=null,m=null;for(a in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(m=t.ref),t)o.call(t,a)&&!c.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===i[a]&&(i[a]=t[a]);return{$$typeof:r,type:e,key:s,ref:m,props:i,_owner:l.current}}t.jsx=s},5893:function(e,t,n){e.exports=n(5251)}}]);