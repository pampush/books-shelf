(this["webpackJsonpbooks-shelf"]=this["webpackJsonpbooks-shelf"]||[]).push([[0],{17:function(e){e.exports=JSON.parse('{"select-options":["Relevance","Newest"],"datalist-options":["All","Art","Biography","Computers","History","Medical","Poetry"]}')},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var r,l=n(0),a=n.n(l),c=n(12),o=n.n(c),i=n(6),s=n(15),u=n.n(s),d=n(29),m=n(16),b=n.n(m),f=n(10),p=n(30),j=n(18),g=n(2);!function(e){e.FETCH_REQUEST="@@books/FETCH_REQUEST",e.FETCH_ERROR="@@books/FETCH_ERROR",e.FETCH_SUCCESS="@@books/FETCH_SUCCESS",e.FETCH_ADD_ITEMS="@@books/FETCH_ADD_ITEMS",e.FETCH_TOTAL_ITEMS="@@books/FETCH_TOTAL_ITEMS",e.FETCH_PAGE="@@books/FETCH_PAGE",e.FETCH_ADD_PAGE="@@books/FETCH_ADD_PAGE"}(r||(r={}));var O,h={items:[],loading:!1,errors:{},totalItems:0,page:0},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.FETCH_SUCCESS:return Object(g.a)(Object(g.a)({},e),{},{items:t.payload,loading:!1,page:30});case r.FETCH_ADD_ITEMS:return Object(g.a)(Object(g.a)({},e),{},{items:[].concat(Object(j.a)(e.items),Object(j.a)(t.payload)),loading:!1});case r.FETCH_REQUEST:return Object(g.a)(Object(g.a)({},e),{},{loading:!0});case r.FETCH_ERROR:var n=t.payload;return Object(g.a)(Object(g.a)({},e),{},{errors:n});case r.FETCH_TOTAL_ITEMS:return Object(g.a)(Object(g.a)({},e),{},{totalItems:t.payload});case r.FETCH_PAGE:return Object(g.a)(Object(g.a)({},e),{},{page:t.payload});case r.FETCH_ADD_PAGE:var l=e.page+t.payload;return Object(g.a)(Object(g.a)({},e),{},{page:l});default:return e}};!function(e){e.SET_CATEGORY="@@filters/SET_CATEGORY",e.SET_SORTBY="@@filters/SET_SORTBY",e.SET_TEXT="@@filters/SET_TEXT"}(O||(O={}));var E={sortBy:"Relevance",category:"",text:""},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.SET_CATEGORY:return Object(g.a)(Object(g.a)({},e),{},{category:t.payload});case O.SET_SORTBY:return Object(g.a)(Object(g.a)({},e),{},{sortBy:t.payload});case O.SET_TEXT:return Object(g.a)(Object(g.a)({},e),{},{text:t.payload});default:return e}},y=Object(f.b)({books:v,filters:x}),w=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||f.c,_=Object(f.d)(y,w(Object(f.a)(p.a))),k=function(e){var t={totalItems:e.totalItems,items:e.items};if(0===t.totalItems)return null;var n=t.items.map((function(e){return{id:e.id,imageLinks:e.volumeInfo.imageLinks,title:e.volumeInfo.title,categories:e.volumeInfo.categories,authors:e.volumeInfo.authors,description:e.volumeInfo.description}}));return{totalItems:t.totalItems,items:n}},T=function(e){return{type:r.FETCH_SUCCESS,payload:e}},S=function(e){return{type:r.FETCH_ERROR,payload:e}},C=function(e){return{type:r.FETCH_PAGE,payload:e}},I=function(e){return{type:r.FETCH_ADD_ITEMS,payload:e}},F=function(e){return function(){var t=Object(d.a)(u.a.mark((function t(n){var l,a,c,o,i,s,d;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n({type:r.FETCH_REQUEST}),l=_.getState(),a=l.books,c=l.filters,o="fields=(totalItems, items(id, volumeInfo(title, description, authors, imageLinks, categories)))",!(a.totalItems&&a.page>=a.totalItems)){t.next=6;break}return t.abrupt("return",null);case 6:return t.next=8,b.a.get("".concat("https://www.googleapis.com/books/v1","/volumes?q=").concat(c.text,"+subject:").concat("All"!==c.category&&c.category?'"'.concat(c.category,'"'):"","&orderBy=").concat(c.sortBy,"&maxResults=").concat(30,"&startIndex=").concat(a.page)+"&".concat(o,"&filter=ebooks&key=").concat("AIzaSyDnEjxJ2_Lk0SiuGWpW9f13xygv82rOnyk"));case 8:if(i=t.sent,s=i.data,d=k(s)){t.next=13;break}return t.abrupt("return",null);case 13:n((u=d.totalItems,{type:r.FETCH_TOTAL_ITEMS,payload:u})),n(C(d.totalItems-30>0?a.page+30:d.totalItems-a.page)),n(e(d.items)),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(0),b.a.isAxiosError(t.t0)?(console.error(t.t0.toJSON()),n(S(t.t0.toJSON()))):(console.error(t.t0.message),n(S({message:t.t0.message})));case 21:case"end":return t.stop()}var u}),t,null,[[0,18]])})));return function(e){return t.apply(this,arguments)}}()};var N=function(e){var t=e.children,n=a.a.useRef(null),r=Object(i.b)();return a.a.useEffect((function(){if(n){var e=new IntersectionObserver((function(e){e[0].isIntersecting&&r(F(I))}),{root:null,rootMargin:"0px",threshold:.8});return e.observe(n.current),function(){console.log("unobserve"),e.unobserve(n.current)}}}),[]),a.a.cloneElement(t,{ref:n})},R=n(7),A=n(1),H=a.a.createContext({open:!1,content:Object(A.jsx)(A.Fragment,{}),setContent:function(e){return e},openModalWindow:function(){return null},closeModalWindow:function(){return null}});var z,M,L,P,B,D,G,Y,X,U,W,J,q,Q,K,V,Z=function(){return a.a.useContext(H)},$=function(e){var t=e.children,n=a.a.useState(!1),r=Object(R.a)(n,2),l=r[0],c=r[1],o=a.a.useState(Object(A.jsx)(A.Fragment,{})),i=Object(R.a)(o,2),s=i[0],u=i[1];return Object(A.jsx)(H.Provider,{value:{content:s,open:l,openModalWindow:function(){return c(!0)},closeModalWindow:function(){return c(!1)},setContent:function(e){return u(e)}},children:t})},ee=n(17),te=function(e){return{type:O.SET_CATEGORY,payload:e}},ne=function(e){return{type:O.SET_TEXT,payload:e}},re=n(3),le=n(4),ae=["title","titleId"];function ce(){return(ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function oe(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function ie(e,t){var n=e.title,r=e.titleId,a=oe(e,ae);return l.createElement("svg",ce({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 490.688 490.688",style:{enableBackground:"new 0 0 490.688 490.688"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},a),n?l.createElement("title",{id:r},n):null,l.createElement("path",{style:{fill:"#FFC107"},d:"M472.328,120.529L245.213,347.665L18.098,120.529c-4.237-4.093-10.99-3.975-15.083,0.262 c-3.992,4.134-3.992,10.687,0,14.82l234.667,234.667c4.165,4.164,10.917,4.164,15.083,0l234.667-234.667 c4.237-4.093,4.354-10.845,0.262-15.083c-4.093-4.237-10.845-4.354-15.083-0.262c-0.089,0.086-0.176,0.173-0.262,0.262 L472.328,120.529z"}),z||(z=l.createElement("path",{d:"M245.213,373.415c-2.831,0.005-5.548-1.115-7.552-3.115L2.994,135.633c-4.093-4.237-3.975-10.99,0.262-15.083 c4.134-3.992,10.687-3.992,14.82,0l227.136,227.115l227.115-227.136c4.093-4.237,10.845-4.354,15.083-0.262 c4.237,4.093,4.354,10.845,0.262,15.083c-0.086,0.089-0.173,0.176-0.262,0.262L252.744,370.279 C250.748,372.281,248.039,373.408,245.213,373.415z"})),M||(M=l.createElement("g",null)),L||(L=l.createElement("g",null)),P||(P=l.createElement("g",null)),B||(B=l.createElement("g",null)),D||(D=l.createElement("g",null)),G||(G=l.createElement("g",null)),Y||(Y=l.createElement("g",null)),X||(X=l.createElement("g",null)),U||(U=l.createElement("g",null)),W||(W=l.createElement("g",null)),J||(J=l.createElement("g",null)),q||(q=l.createElement("g",null)),Q||(Q=l.createElement("g",null)),K||(K=l.createElement("g",null)),V||(V=l.createElement("g",null)))}var se,ue,de,me,be,fe,pe,je,ge,Oe,he,ve,Ee,xe,ye,we,_e=l.forwardRef(ie),ke=(n.p,["title","titleId"]);function Te(){return(Te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Se(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function Ce(e,t){var n=e.title,r=e.titleId,a=Se(e,ke);return l.createElement("svg",Te({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 490.523 490.523",style:{enableBackground:"new 0 0 490.523 490.523"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},a),n?l.createElement("title",{id:r},n):null,l.createElement("path",{style:{fill:"#FFC107"},d:"M487.411,355.047L252.744,120.38c-4.165-4.164-10.917-4.164-15.083,0L2.994,355.047 c-4.093,4.237-3.976,10.99,0.262,15.083c4.134,3.993,10.687,3.993,14.821,0l227.115-227.115l227.115,227.136 c4.237,4.093,10.99,3.976,15.083-0.261c3.993-4.134,3.993-10.688,0-14.821L487.411,355.047z"}),se||(se=l.createElement("path",{d:"M479.859,373.266c-2.831,0.005-5.548-1.115-7.552-3.115L245.192,143.015L18.077,370.151 c-4.237,4.093-10.99,3.976-15.083-0.262c-3.993-4.134-3.993-10.687,0-14.821l234.667-234.667c4.165-4.164,10.917-4.164,15.083,0 l234.667,234.667c4.159,4.172,4.148,10.926-0.024,15.085C485.388,372.146,482.681,373.265,479.859,373.266z"})),ue||(ue=l.createElement("g",null)),de||(de=l.createElement("g",null)),me||(me=l.createElement("g",null)),be||(be=l.createElement("g",null)),fe||(fe=l.createElement("g",null)),pe||(pe=l.createElement("g",null)),je||(je=l.createElement("g",null)),ge||(ge=l.createElement("g",null)),Oe||(Oe=l.createElement("g",null)),he||(he=l.createElement("g",null)),ve||(ve=l.createElement("g",null)),Ee||(Ee=l.createElement("g",null)),xe||(xe=l.createElement("g",null)),ye||(ye=l.createElement("g",null)),we||(we=l.createElement("g",null)))}var Ie,Fe,Ne,Re,Ae=l.forwardRef(Ce),He=(n.p,le.a.div(Ie||(Ie=Object(re.a)(["\n  position: relative;\n  padding-top: 2.8rem;\n  @media (max-width: 960px) {\n    padding-top: 2rem;\n  }\n"])))),ze=le.a.label(Fe||(Fe=Object(re.a)(["\n  display: flex;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 1rem;\n  pointer-events: none;\n  transform-origin: top left;\n  transform: translateY(\n    ","\n  );\n  transition: all 0.2s ease;\n  @media (max-width: 960px) {\n    transform: translateY(\n      ","\n    );\n  }\n  @media (max-width: 600px) {\n    transform: translateY(\n      ","\n    );\n  }\n"])),(function(e){return e.selected||e.opened?"0":"3.2rem"}),(function(e){return e.selected||e.opened?"0":"3.6rem"}),(function(e){return e.selected||e.opened?"0":"3.8rem"})),Me=le.a.div(Ne||(Ne=Object(re.a)(["\n  display: flex;\n  border-radius: 1.5rem;\n  padding-left: 1rem;\n  background-color: #ffffff;\n  box-shadow: 0 0 0.5rem -0.2rem #000000;\n  height: ",";\n  width: 100%;\n  &:focus {\n    outline: 2px solid black;\n  }\n"])),(function(e){return{small:"4rem",regular:"6rem"}[e.size]}));var Le,Pe,Be=Object(le.a)((function(e){var t=a.a.useRef(null),n=function(n){e.open&&t.current&&!t.current.contains(n.target)&&e.onClose()};return a.a.useEffect((function(){return document.addEventListener("click",n),function(){document.removeEventListener("click",n)}}),[e.open]),Object(A.jsx)(A.Fragment,{children:e.open&&Object(A.jsx)("div",{ref:t,className:e.className,children:e.items.map((function(t,n){return Object(A.jsx)("div",{onClick:function(){return e.handleSelect(t)},children:t},"".concat(t,"+").concat(n))}))})})}))(Re||(Re=Object(re.a)(["\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  max-height: 20rem;\n  border-radius: 0.5rem;\n  background-color: #ffffff;\n  box-shadow: 0 0 0.5rem 0 rgb(118, 118, 118);\n  overflow-y: auto;\n  cursor: pointer;\n  z-index: 2;\n  & div {\n    overflow: hidden;\n    padding: 0.5rem;\n    border-radius: 0.5rem;\n  }\n  & div:hover {\n    background-color: rgb(118, 118, 118);\n    color: #ffffff;\n  }\n"]))),De=le.a.span(Le||(Le=Object(re.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  margin-left: auto;\n  width: ",";\n  cursor: pointer;\n"])),(function(e){return{small:"4rem",regular:"6rem"}[e.size]})),Ge=le.a.input(Pe||(Pe=Object(re.a)(["\n  width: 100%;\n  border-style: none;\n  border-radius: 1.5rem;\n  outline: none;\n"])));var Ye,Xe,Ue,We,Je,qe,Qe,Ke,Ve,Ze,$e,et,tt,nt,rt,lt,at=function(e){var t=e.value,n=e.placeholder,r=e.label,l=e.name,c=void 0===l?"":l,o=e.options,i=e.size,s=void 0===i?"regular":i,u=e.onChange,d=e.handleSelect,m=a.a.useState(!1),b=Object(R.a)(m,2),f=b[0],p=b[1];return Object(A.jsxs)(He,{children:[Object(A.jsx)(Be,{items:o.filter((function(e){return e.includes(t)})),className:"",open:f,onClose:function(){return p(!1)},handleSelect:function(e){d(e),p(!1)}}),Object(A.jsxs)(Me,{tabIndex:2,size:s,onClick:function(){return p(!0)},children:[Object(A.jsx)(ze,{selected:!0,opened:f,children:r}),Object(A.jsx)(Ge,{value:t,name:c,placeholder:n,onChange:function(e){u(e.target.value)}}),Object(A.jsx)(De,{size:s,children:f?Object(A.jsx)(Ae,{}):Object(A.jsx)(_e,{})})]})]})},ct=["title","titleId"];function ot(){return(ot=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function it(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function st(e,t){var n=e.title,r=e.titleId,a=it(e,ct);return l.createElement("svg",ot({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512.005 512.005",style:{enableBackground:"new 0 0 512.005 512.005"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},a),n?l.createElement("title",{id:r},n):null,Ye||(Ye=l.createElement("g",null,l.createElement("g",null,l.createElement("path",{d:"M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667 S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6 c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z  M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z"})))),Xe||(Xe=l.createElement("g",null)),Ue||(Ue=l.createElement("g",null)),We||(We=l.createElement("g",null)),Je||(Je=l.createElement("g",null)),qe||(qe=l.createElement("g",null)),Qe||(Qe=l.createElement("g",null)),Ke||(Ke=l.createElement("g",null)),Ve||(Ve=l.createElement("g",null)),Ze||(Ze=l.createElement("g",null)),$e||($e=l.createElement("g",null)),et||(et=l.createElement("g",null)),tt||(tt=l.createElement("g",null)),nt||(nt=l.createElement("g",null)),rt||(rt=l.createElement("g",null)),lt||(lt=l.createElement("g",null)))}var ut,dt,mt,bt=l.forwardRef(st),ft=(n.p,le.a.div(ut||(ut=Object(re.a)(["\n  display: flex;\n  background-color: #ffffff;\n  border-radius: 15px;\n  box-shadow: 0 0 1rem -0.5rem;\n  height: ",";\n  &:focus {\n    outline: 2px solid black;\n  }\n"])),(function(e){return{small:"4rem",regular:"6rem"}[e.size]}))),pt=le.a.span(dt||(dt=Object(re.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  width: ",";\n  cursor: pointer;\n  pointer-events: ",";\n"])),(function(e){return{small:"4rem",regular:"6rem"}[e.size]}),(function(e){return e.disable?"none":""})),jt=le.a.input(mt||(mt=Object(re.a)(["\n  width: 100%;\n  padding: 1rem;\n  border-radius: 1.5rem;\n  border-style: none;\n  outline: none;\n"])));var gt,Ot=function(e){var t=e.type,n=e.placeholder,r=e.required,l=e.size,a=void 0===l?"regular":l,c=e.value,o=void 0===c?"":c,i=e.onChange,s=e.name,u=void 0===s?"":s,d=e.handleSubmit,m=e.disable;return Object(A.jsx)(He,{children:Object(A.jsxs)(ft,{size:a,tabIndex:1,children:[Object(A.jsx)(pt,{size:a,onClick:function(){return d(o)},disable:m,children:Object(A.jsx)(bt,{})}),Object(A.jsx)(jt,{type:t,value:o,name:u,placeholder:n,onChange:function(e){return i(e.target.value)},required:r,onKeyDown:function(e){if("Enter"===e.key||"NumpadEnter"===e.key){if(m)return;e.preventDefault(),d(o)}}})]})})},ht=le.a.div(gt||(gt=Object(re.a)(["\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n"])));var vt=function(e){var t=e.label,n=e.options,r=e.size,l=void 0===r?"regular":r,c=e.value,o=e.onChange,i=e.name,s=void 0===i?"":i,u=a.a.useRef(n),d=a.a.useState(!1),m=Object(R.a)(d,2),b=m[0],f=m[1];return Object(A.jsxs)(He,{children:[Object(A.jsx)(Be,{items:u.current,className:"",open:b,onClose:function(){return f(!1)},handleSelect:function(e){o(e),f(!1)}}),Object(A.jsxs)(Me,{tabIndex:3,size:l,onClick:function(){return f(!0)},children:[Object(A.jsx)(ze,{selected:Boolean(c),opened:b,children:t}),Object(A.jsx)(ht,{name:s,children:c}),Object(A.jsx)(De,{size:l,children:b?Object(A.jsx)(Ae,{}):Object(A.jsx)(_e,{})})]})]})};var Et=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.filters})),n=t.text,r=t.sortBy,l=t.category,a=Object(i.c)((function(e){return e.books})).loading;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("div",{className:"search-field",children:Object(A.jsx)(Ot,{type:"text",name:"booksearch",placeholder:"Search books",required:!0,size:"small",onChange:function(t){e(ne(t))},disable:a,handleSubmit:function(){e(ne(n)),e(C(0)),e(F(T))},value:n})}),Object(A.jsx)("div",{className:"datalist-select-field",children:Object(A.jsx)(at,{label:"Book category",options:ee["datalist-options"],placeholder:"All",size:"small",name:"searchdatalist",value:l,onChange:function(t){e(te(t))},handleSelect:function(t){e(te(t)),e(C(0)),e(F(T))}})}),Object(A.jsx)("div",{className:"select-field",children:Object(A.jsx)(vt,{label:"Sort by",size:"small",name:"searchselect",options:ee["select-options"],value:r,onChange:function(t){var n;e((n=t,{type:O.SET_SORTBY,payload:n})),e(C(0)),e(F(T))}})})]})};var xt=function(e){var t,n,r=e.book;return Object(A.jsxs)("div",{className:"fbook",children:[Object(A.jsxs)("div",{className:"fbook__meta",children:[Object(A.jsx)("div",{className:"fbook__cover-container",children:Object(A.jsx)("img",{className:"fbook__cover",src:r.imageLinks.smallThumbnail})}),Object(A.jsx)("p",{className:"fbook__category",children:(null===(t=r.categories)||void 0===t?void 0:t.length)&&r.categories.join(", ")}),Object(A.jsx)("p",{className:"fbook__title",children:r.title})]}),Object(A.jsxs)("div",{className:"fbook__info",children:[Object(A.jsx)("p",{className:"fbook__author",children:(null===(n=r.authors)||void 0===n?void 0:n.length)&&r.authors.join(", ")}),Object(A.jsx)("p",{className:"fbook__description",children:r.description})]})]})};var yt=function(e){var t,n,r=e.book,l=Z(),a=l.setContent,c=l.openModalWindow;return Object(A.jsxs)("div",{className:"book",children:[Object(A.jsx)("div",{className:"book__cover-container",onClick:function(){a(Object(A.jsx)(xt,{book:r})),c()},children:Object(A.jsx)("img",{className:"book__cover",src:r.imageLinks.smallThumbnail})}),Object(A.jsx)("p",{className:"book__category",children:(null===(t=r.categories)||void 0===t?void 0:t.length)&&r.categories[0]}),Object(A.jsx)("p",{className:"book__title",children:r.title}),Object(A.jsx)("p",{className:"book__author",children:(null===(n=r.authors)||void 0===n?void 0:n.length)&&r.authors})]})};var wt,_t,kt,Tt,St,Ct,It,Ft,Nt,Rt,At,Ht,zt,Mt,Lt,Pt,Bt=function(){var e=Object(i.c)((function(e){return e.books})),t=e.items,n=e.totalItems;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)("h3",{className:"shelf__counter",children:[n," books in total"]}),Object(A.jsx)("main",{className:"shelf",children:Object.values(t).map((function(e,t){return Object(A.jsx)(yt,{book:e},"".concat(e.id,"+").concat(t))}))})]})},Dt=["title","titleId"];function Gt(){return(Gt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Yt(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function Xt(e,t){var n=e.title,r=e.titleId,a=Yt(e,Dt);return l.createElement("svg",Gt({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 458.186 458.186",style:{enableBackground:"new 0 0 458.186 458.186"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},a),n?l.createElement("title",{id:r},n):null,wt||(wt=l.createElement("g",null,l.createElement("g",null,l.createElement("path",{d:"M445.651,201.95c-1.485-9.308-10.235-15.649-19.543-14.164c-9.308,1.485-15.649,10.235-14.164,19.543 c0.016,0.102,0.033,0.203,0.051,0.304c17.38,102.311-51.47,199.339-153.781,216.719c-102.311,17.38-199.339-51.47-216.719-153.781 S92.966,71.232,195.276,53.852c62.919-10.688,126.962,11.29,170.059,58.361l-75.605,25.19 c-8.944,2.976-13.781,12.638-10.806,21.582c0.001,0.002,0.002,0.005,0.003,0.007c2.976,8.944,12.638,13.781,21.582,10.806 c0.003-0.001,0.005-0.002,0.007-0.002l102.4-34.133c6.972-2.322,11.675-8.847,11.674-16.196v-102.4 C414.59,7.641,406.949,0,397.523,0s-17.067,7.641-17.067,17.067v62.344C292.564-4.185,153.545-0.702,69.949,87.19 s-80.114,226.911,7.779,310.508s226.911,80.114,310.508-7.779C435.905,339.799,457.179,270.152,445.651,201.95z"})))),_t||(_t=l.createElement("g",null)),kt||(kt=l.createElement("g",null)),Tt||(Tt=l.createElement("g",null)),St||(St=l.createElement("g",null)),Ct||(Ct=l.createElement("g",null)),It||(It=l.createElement("g",null)),Ft||(Ft=l.createElement("g",null)),Nt||(Nt=l.createElement("g",null)),Rt||(Rt=l.createElement("g",null)),At||(At=l.createElement("g",null)),Ht||(Ht=l.createElement("g",null)),zt||(zt=l.createElement("g",null)),Mt||(Mt=l.createElement("g",null)),Lt||(Lt=l.createElement("g",null)),Pt||(Pt=l.createElement("g",null)))}var Ut,Wt=l.forwardRef(Xt),Jt=(n.p,le.a.div(Ut||(Ut=Object(re.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  overflow-y: hidden;\n  background-color: rgba(0, 0, 0, 0.6);\n  z-index: 99;\n"]))));var qt=function(e){var t=e.children,n=e.open,r=e.onClose,l=a.a.useRef(null);return a.a.useEffect((function(){document.body.style.position=n?"fixed":"",document.body.style.right=n?"0":"",document.body.style.left=n?"0":""}),[n]),Object(A.jsx)(A.Fragment,{children:n&&Object(A.jsx)(Jt,{ref:l,onClick:function(e){var t=e.target;t&&t.contains(l.current)&&r()},children:t})})};function Qt(e,t){var n=Object(i.c)((function(e){return e.books})).loading,r=Z(),l=r.content,a=r.open,c=r.closeModalWindow;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(qt,{open:a,onClose:function(){c()},children:l}),Object(A.jsxs)("div",{className:"search",children:[Object(A.jsxs)("header",{className:"header",children:[Object(A.jsx)("h1",{children:"Explore new horizons"}),Object(A.jsx)("div",{className:"searchform",children:Object(A.jsx)(Et,{})})]}),Object(A.jsx)(Bt,{})]}),Object(A.jsx)("div",{className:"search__loading",ref:t,children:n&&Object(A.jsx)(Wt,{className:"search__loading-icon"})})]})}var Kt=a.a.forwardRef(Qt);var Vt=function(){return Object(A.jsx)("div",{className:"app",children:Object(A.jsx)($,{children:Object(A.jsx)(N,{children:Object(A.jsx)(Kt,{})})})})};n(61),n(62);o.a.render(Object(A.jsx)(a.a.StrictMode,{children:Object(A.jsx)(i.a,{store:_,children:Object(A.jsx)(Vt,{})})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.1ad836a9.chunk.js.map