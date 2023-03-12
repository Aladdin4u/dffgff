(this["webpackJsonpfinal-project"]=this["webpackJsonpfinal-project"]||[]).push([[0],{54:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c.n(n),s=c(28),a=c.n(s),i=(c(54),c(8)),j=c(7),o=c(3),d=c(36),l=c(17),u=c(15),h=c(1),b=Object(n.createContext)();function O(e){var t=Object(n.useState)((function(){var e=[];try{e=JSON.parse(localStorage.getItem("cart"))||[]}catch(t){e=[]}return e})),c=Object(o.a)(t,2),r=c[0],s=c[1];Object(n.useEffect)((function(){r&&localStorage.setItem("cart",JSON.stringify(r))}),[r]);var a={cart:r,getCartCount:function(){return r.reduce((function(e,t){return e+t.quantity}),0)},getProductFromCart:function(e){return r.find((function(t){return t.id===e}))},getTotalPrice:function(){return r.reduce((function(e,t){return e+t.price*t.quantity}),0)},onProductAdd:function(e){if(r.find((function(t){return t.id===e.id}))){var t=r.map((function(t){return t.id===e.id?Object(u.a)(Object(u.a)({},t),{},{quantity:t.quantity+1}):t}));s(t)}else s([].concat(Object(l.a)(r),[Object(u.a)(Object(u.a)({},e),{},{quantity:1})]))},onProductDelete:function(e){var t=r.filter((function(t){return t.id!==e}));s(t)}};return Object(h.jsx)(b.Provider,{value:a,children:e.children})}var x=c(46);function p(e){var t=Object(n.useContext)(b).getCartCount(),c=Object(n.useState)(!1),r=Object(o.a)(c,2),s=r[0],a=r[1],j=Object(n.useState)(!0),l=Object(o.a)(j,2),u=l[0],O=l[1],p=function(e){O(e)};return Object(n.useEffect)((function(){window.matchMedia("(prefers-color-scheme: dark)").matches&&a(!0)}),[]),Object(n.useEffect)((function(){s?document.body.classList.add("dark"):document.body.classList.remove("dark")}),[s]),Object(h.jsxs)("nav",{className:"navbar",children:[Object(h.jsx)(i.c,{to:"/",className:"nav-brand",children:"SuperM"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(i.c,{exact:!0,activeClassName:"active",to:"/",children:"Home"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(i.c,{exact:!0,activeClassName:"active",to:"/about",children:"About us"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(i.c,{activeClassName:"active",to:"/products",children:"Products"})}),Object(h.jsx)("li",{className:"nav-item",style:{paddingRight:"15px"},children:Object(h.jsx)("div",{className:"theme-switcher",onClick:function(){a(!s)},children:s?Object(h.jsx)(d.a,{checked:u,onChange:p,size:24,sunColor:"white"}):Object(h.jsx)(d.a,{checked:u,onChange:p,size:24,moonColor:"black",sunColor:"white"})})}),Object(h.jsx)("li",{children:Object(h.jsx)(i.c,{to:"/cart",className:"nav-item",children:Object(h.jsxs)("div",{className:"cartCount-item",children:[Object(h.jsx)(x.a,{size:"24px"}),t>0&&Object(h.jsx)("div",{className:"cartCount",children:Object(h.jsx)("div",{className:"cart-item",children:t})})]})})})]})]})}function m(){return Object(h.jsxs)("div",{className:"home-layout",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Online shopping simplified"}),Object(h.jsxs)("p",{children:["Order your groceries from ",Object(h.jsx)("em",{children:"SuperM"})," with our easy to use app, and get your products delivered straight to your doorstep."]}),Object(h.jsx)(i.b,{to:"/products",className:"btn btn-default",children:"Start shopping"})]}),Object(h.jsx)("img",{src:"https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_700/v1607770215/react-tutorial/supermarket/home.jpg",width:"350",height:"240",className:"rounded home-image",alt:""})]})}function f(){return Object(h.jsxs)("div",{className:"about-layout",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"About Us"}),Object(h.jsxs)("p",{children:["We started operations in 2020. We guarantee fresh produce.",Object(h.jsx)("br",{}),"Save time by shopping on our app and we'll deliver the products right to your home. ",Object(h.jsx)("br",{}),Object(h.jsx)("em",{children:"We use Stripe to process your payment."})]})]}),Object(h.jsx)("img",{src:"https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_550/v1607770215/react-tutorial/supermarket/about.jpg",height:"275",width:"183",className:"rounded",alt:""})]})}var v=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Sorry to see you cancel your stripe payment!"}),Object(h.jsx)(i.b,{to:"/",className:"btn btn-default",children:"Return Home"})]})},g=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Thank you for your purchase!"}),Object(h.jsx)(i.b,{to:"/",className:"btn btn-default",children:"Return Home"})]})},y=c(32),N=c(33),C=["children","outline","className"];function w(e){var t=e.children,c=e.outline,n=e.className,r=Object(y.a)(e,C),s=Object(N.a)({btn:!0,"btn-default":!c,"btn-outline":c},n);return Object(h.jsx)("button",Object(u.a)(Object(u.a)({className:s},r),{},{children:t}))}function k(e){var t=e.details,c=Object(n.useContext)(b),r=c.getProductFromCart(t.id),s=r?r.quantity:0;return Object(h.jsxs)("div",{className:"product",children:[Object(h.jsxs)("div",{className:"product-image-container",children:[Object(h.jsx)(i.b,{to:"/products/".concat(t.id),children:Object(h.jsx)("img",{src:t.image,width:"100",height:"100",className:"product-image",alt:t.name})}),s>0&&Object(h.jsx)("div",{className:"product-quantity-container",children:Object(h.jsx)("div",{className:"product-quantity",children:s})})]}),Object(h.jsxs)("div",{className:"product-info",children:[Object(h.jsx)("h3",{children:t.name}),Object(h.jsx)("p",{children:t.description})]}),Object(h.jsxs)("div",{className:"product-checkout",children:[Object(h.jsx)("div",{children:s>0&&Object(h.jsx)(w,{outline:!0,onClick:function(){return c.onProductDelete(t.id)},className:"product-delete",children:"x"})}),Object(h.jsxs)(w,{outline:!0,onClick:function(){return c.onProductAdd(t)},children:["$",t.price]})]})]})}function S(e){var t=Object(n.useState)(!1),c=Object(o.a)(t,2),r=c[0],s=c[1];return{get:function(t){return new Promise((function(c,n){fetch(e+t).then((function(e){return e.json()})).then((function(e){if(!e)return s(!1),n(e);s(!1),c(e)})).catch((function(e){s(!1),n(e)}))}))},post:function(t,c){return new Promise((function(n,r){fetch(e+t,Object(u.a)({},{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)})).then((function(e){return e.json()})).then((function(e){if(!e)return s(!1),r(e);s(!1),n(e)})).catch((function(e){s(!1),r(e)}))}))},loading:r}}function P(){return Object(h.jsx)("svg",{className:"spinner",width:"65px",height:"65px",viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg",children:Object(h.jsx)("circle",{className:"path",fill:"none",strokeWidth:"6",strokeLinecap:"round",cx:"33",cy:"33",r:"30"})})}function q(e){var t=Object(n.useState)(""),c=Object(o.a)(t,2),r=c[0],s=c[1],a=Object(n.useState)([]),i=Object(o.a)(a,2),j=i[0],d=i[1],l=S("https://shoppingcart-d80f0-default-rtpb.firebaseio.com/"),u=l.get,b=l.loading;Object(n.useEffect)((function(){u("supermarket.json").then((function(e){d(e)})).catch((function(e){return console.log("Could not load products",e)}))}),[]);var O=r?j.filter((function(e){return e.name.toLowerCase()===r.toLowerCase()})):j;return Object(h.jsxs)("div",{className:"products-layout",children:[Object(h.jsx)("div",{children:Object(h.jsx)("input",{className:"input",style:{width:"100%"},type:"search",placeholder:"Search Product...",value:r,onChange:function(e){s(e.target.value)}})}),Object(h.jsx)("h1",{children:"Products"}),Object(h.jsx)("p",{children:"Take a look at our products"}),Object(h.jsxs)("div",{className:"products-grid",children:[b&&Object(h.jsx)(P,{}),O.map((function(t){return Object(h.jsx)(k,{details:t,cart:e.cart,onProductAdd:e.onProductAdd,onProducpelete:e.onProducpelete},t.id)}))]})]})}function F(e){var t=e.product,c=Object(n.useContext)(b);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("p",{children:[t.description," sold at ",Object(h.jsxs)("strong",{children:["$",t.price]})," per piece."]}),Object(h.jsxs)(w,{onClick:function(){return c.onProductAdd(t)},children:["$",t.price]})]})}function T(e){var t=e.nutrition;return Object(h.jsxs)("table",{className:"table table-nutrition",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Nutrient"}),Object(h.jsx)("th",{children:"Value"})]})}),Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Protein"}),Object(h.jsxs)("td",{children:[t.protein,"g"]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Carbohydrates"}),Object(h.jsxs)("td",{children:[t.carbs,"g"]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Fat"}),Object(h.jsxs)("td",{children:[t.fat,"g"]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Salt"}),Object(h.jsxs)("td",{children:[t.salt,"g"]})]})]})]})}function E(e){var t=e.storage;return Object(h.jsxs)("p",{children:[Object(h.jsx)("strong",{children:"Storage instructions:"})," ",t]})}function A(e){var t=Object(n.useState)({}),c=Object(o.a)(t,2),r=c[0],s=c[1],a=S("https://shoppingcart-d80f0-default-rtdb.firebaseio.com/").get,d=Object(j.f)(),l=Object(j.g)();return Object(n.useEffect)((function(){a("productinfo/id".concat(d.id,".json")).then((function(e){s(e)})).catch((function(e){return console.log("Could not load product details",e)}))}),[]),Object(h.jsxs)("div",{className:"product-details-layout",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:r.name}),Object(h.jsx)("img",{src:r.image,width:"125",height:"125",className:"product-details-image",alt:r.name})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"tabs",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(i.c,{exact:!0,activeClassName:"tab-active",to:l.url,children:"Details"})}),Object(h.jsx)("li",{children:Object(h.jsx)(i.c,{exact:!0,activeClassName:"tab-active",to:l.url+"/nutrition",children:"Nutrition"})}),Object(h.jsx)("li",{children:Object(h.jsx)(i.c,{exact:!0,activeClassName:"tab-active",to:l.url+"/storage",children:"Storage"})})]})}),Object(h.jsxs)(j.c,{children:[Object(h.jsx)(j.a,{exact:!0,path:l.path,children:Object(h.jsx)(F,{product:r})}),Object(h.jsx)(j.a,{path:l.path+"/nutrition",children:Object(h.jsx)(T,{nutrition:r.nutrition})}),Object(h.jsx)(j.a,{path:l.path+"/storage",children:Object(h.jsx)(E,{storage:r.storage})})]})]})]})}var I=c(45),_=["className","placeholder","required","type"];function z(e){var t=e.className,c=e.placeholder,n=e.required,r=e.type,s=void 0===r?"text":r,a=Object(y.a)(e,_),i=Object(N.a)({input:!0},t);return Object(h.jsxs)("label",{className:"label",children:[c,n&&Object(h.jsx)("span",{className:"input-required",children:"*"}),Object(h.jsx)("div",{children:Object(h.jsx)("input",Object(u.a)({type:s,placeholder:c,className:i,required:n},a))})]})}var D=Object(I.a)("pk_test_51MDIJ1GsoFsdfGabIPtjmnQsWW7VFkNzYcBP3ctDQzIdx2q3XvbG6454emaG9NcPaF5r1XNj8MST7ml1TGHpkbSl00z2yOAN0F");function J(){var e=Object(n.useContext)(b),t=e.cart,c=e.getTotalPrice(),r=Object(n.useState)(""),s=Object(o.a)(r,2),a=s[0],i=s[1];return Object(h.jsx)("div",{className:"cart-layout",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Your Cart"}),0===t.length&&Object(h.jsx)("p",{children:"You have not added any product to your cart yet."}),t.length>0&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("table",{className:"table table-cart",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{width:"25%",className:"th-product",children:"Product"}),Object(h.jsx)("th",{width:"20%",children:"Unit price"}),Object(h.jsx)("th",{width:"10%",children:"Quanity"}),Object(h.jsx)("th",{width:"25%",children:"Total"})]})}),Object(h.jsx)("tbody",{children:t.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsxs)("td",{children:[Object(h.jsx)("img",{src:e.image,width:"30",height:"30",alt:""})," ",e.name]}),Object(h.jsxs)("td",{children:["$",e.price]}),Object(h.jsx)("td",{children:e.quantity}),Object(h.jsx)("td",{children:Object(h.jsxs)("strong",{children:["$",e.price*e.quantity]})})]},e.id)}))}),Object(h.jsx)("tfoot",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{colSpan:"2"}),Object(h.jsx)("th",{className:"cart-highlight",children:"Total"}),Object(h.jsxs)("th",{className:"cart-highlight",children:["$",c]})]})})]}),Object(h.jsxs)("form",{className:"pay-form",onSubmit:function(e){e.preventDefault();var c=t.map((function(e){return{price:e.price_id,quantity:e.quantity}}));D.then((function(e){e.redirectToCheckout({lineItems:c,mode:"payment",successUrl:"https://supermarkets123.netlify.app/success",cancelUrl:"https://supermarkets123.netlify.app/cancel",customerEmail:a}).then((function(e){console.log(e.error)})).catch((function(e){console.log(e)}))}))},children:[Object(h.jsx)("p",{children:"Enter your email and then click on pay and your products will be delivered to you on the same day!"}),Object(h.jsx)(z,{placeholder:"Email",onChange:function(e){return i(e.target.value)},value:a,type:"email",required:!0}),Object(h.jsx)(w,{type:"submit",children:"Pay"})]})]})]})})}var M=function(){return Object(h.jsx)(O,{children:Object(h.jsxs)(i.a,{children:[Object(h.jsx)(p,{}),Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)(j.c,{children:[Object(h.jsx)(j.a,{exact:!0,path:"/",children:Object(h.jsx)(m,{})}),Object(h.jsx)(j.a,{exact:!0,path:"/about",children:Object(h.jsx)(f,{})}),Object(h.jsx)(j.a,{exact:!0,path:"/success",children:Object(h.jsx)(g,{})}),Object(h.jsx)(j.a,{exact:!0,path:"/cancel",children:Object(h.jsx)(v,{})}),Object(h.jsx)(j.a,{exact:!0,path:"/products",children:Object(h.jsx)(q,{})}),Object(h.jsx)(j.a,{path:"/products/:id",children:Object(h.jsx)(A,{})}),Object(h.jsx)(j.a,{exact:!0,path:"/cart",children:Object(h.jsx)(J,{})})]})})]})})};a.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(M,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.25b930e8.chunk.js.map