import{j as e}from"./app-5fd90439.js";import{k as a,l as r}from"./index-dd9e70cf.js";import{G as t}from"./iconBase-474fee26.js";/* empty css            */function l(s){return t({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m15 12 5-4-5-4v2.999H2v2h13zm7 3H9v-3l-5 4 5 4v-3h13z"},child:[]}]})(s)}function i(s){return t({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M8.00488 5.00281H11.0049V14.0028H8.00488V17.0028H6.00488V14.0028H3.00488V5.00281H6.00488V2.00281H8.00488V5.00281ZM18.0049 10.0028H21.0049V19.0028H18.0049V22.0028H16.0049V19.0028H13.0049V10.0028H16.0049V7.00281H18.0049V10.0028Z"},child:[]}]})(s)}const h=({mode:s})=>(console.log(s),e.jsx("div",{className:`fixed inset-x-0 bottom-0 ${s==="Dark"?"bg-gray-700":"bg-white"} shadow-lg border-t border-gray-300`,children:e.jsxs("nav",{className:"flex justify-around items-center h-16",children:[e.jsx("div",{className:"flex flex-col items-center",children:e.jsxs("a",{href:route("v1.homepage"),className:s==="Dark"?"text-white":"text-gray-500",children:[e.jsx(a,{className:"h-6 w-6"}),e.jsx("span",{className:"text-xs",children:"Home"})]})}),e.jsx("div",{className:"flex flex-col items-center",children:e.jsxs("a",{href:route("v1.trade",["crypto","BTCUSDT"]),className:s==="Dark"?"text-white":"text-gray-500",children:[e.jsx(l,{className:"h-6 w-6"}),e.jsx("span",{className:"text-xs",children:"Trade"})]})}),e.jsx("div",{className:"flex flex-col items-center",children:e.jsxs("a",{href:route("v1.portfolio"),className:s==="Dark"?"text-white":"text-gray-500",children:[e.jsx(i,{className:"h-6 w-6"}),e.jsx("span",{className:"text-xs",children:"Assets"})]})}),e.jsx("div",{className:"flex flex-col items-center",children:e.jsxs("a",{href:route("v1.profile"),className:s==="Dark"?"text-white":"text-gray-500",children:[e.jsx(r,{className:"h-6 w-6"}),e.jsx("span",{className:"text-xs",children:"Profile"})]})})]})}));export{h as default};