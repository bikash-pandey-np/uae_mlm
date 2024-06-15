import{a as g,u as N,r as y,B as m,j as e,R as u}from"./app-bb49f515.js";import{M as b}from"./index-1f623ffa.js";import w from"./MenuBar-da39abe9.js";/* empty css              *//* empty css            */import"./iconBase-cf2c36ac.js";const F=({inr_deposit_info:d,usdt_deposit_info:p,balance:r,pending_amount:f})=>{const{flash:n}=g().props,{data:s,setData:o,post:h,processing:a,errors:c}=N({amount:"",currency:"INR",deposit_info:d}),l=t=>{const{name:x,value:i}=t.target;o(x==="currency"?{...s,currency:i,deposit_info:i==="INR"?d:p}:{...s,[x]:i})},j=t=>{t.preventDefault(),console.log(s),h(route("deposit"),s)};return y.useEffect(()=>{document.title="Deposit Account | TheCapex.pro";let t=null;return(n.success||n.error)&&(t&&m.dismiss(t),n.success?(t=m.success(n.success,{pauseOnHover:!1,autoClose:2e3,onClose:()=>window.location.reload()}),o({email:"",password:""})):n.error&&(t=m.error(n.error,{pauseOnHover:!1,autoClose:2e3,onClose:()=>window.location.reload()}))),()=>{t&&m.dismiss(t)}},[n]),e.jsxs("section",{children:[e.jsx(w,{}),e.jsxs("div",{className:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("h2",{className:"text-xl font-extrabold text-gray-900 mb-4",children:"Fund your Account"}),e.jsxs("p",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:w-2/3 ml-auto",children:["Balance : ",e.jsxs("span",{className:"font-bold",children:[r," USDT ~ ",r*83.45," INR"]}),e.jsxs("span",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:w-2/3 ml-4",children:["Pending Deposit : ",e.jsxs("span",{className:"font-bold",children:["~",f]})," INR"]})]})]}),r<100?e.jsxs("div",{className:"bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 flex my-4",role:"alert",children:[e.jsx("div",{className:"mr-2",children:e.jsx(b,{size:24})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold",children:"Deposit Now"}),e.jsx("p",{children:"Please Fund your Account, to start trading "})]})]}):null,e.jsxs("form",{onSubmit:j,className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"amount",className:"block text-sm font-medium text-gray-700",children:"Deposit Amount"}),e.jsx("div",{className:"mt-1",children:e.jsx("input",{id:"amount",name:"amount",type:"number",onChange:l,value:s.amount,className:"appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"})}),c.amount&&e.jsx("p",{className:"mt-2 text-sm text-red-600",id:"amount-error",children:c.amount})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"currency",className:"block text-sm font-medium text-gray-700",children:"Choose Currency"}),e.jsx("div",{className:"mt-1",children:e.jsxs("select",{id:"currency",name:"currency",value:s.currency,onChange:l,className:"appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",children:[e.jsx("option",{value:"INR",children:"INR"}),e.jsx("option",{value:"USDT",children:"USDT"})]})})]}),s.deposit_info&&e.jsxs("div",{className:"mt-6 bg-white shadow overflow-hidden sm:rounded-lg",children:[e.jsx("div",{className:"p-4 bg-indigo-100",children:e.jsx("h3",{className:"text-md font-medium text-gray-900",children:"Deposit Information"})}),e.jsx("div",{className:"border-t border-gray-200 px-4 py-5 sm:p-0 bg-gray-50",children:e.jsxs("dl",{className:"sm:divide-y sm:divide-gray-200",children:[s.currency==="INR"&&e.jsxs(u.Fragment,{children:[e.jsxs("div",{className:"sm:flex sm:items-center sm:justify-between p-2",children:[e.jsx("dt",{className:"text-sm font-medium text-gray-500 sm:w-1/3",children:"Bank Name"}),e.jsx("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:w-2/3",children:s.deposit_info.flat_bank_name})]}),e.jsxs("div",{className:"sm:flex sm:items-center sm:justify-between p-2",children:[e.jsx("dt",{className:"text-sm font-medium text-gray-500 sm:w-1/3",children:"Account Name"}),e.jsx("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:w-2/3",children:s.deposit_info.flat_account_name})]}),e.jsxs("div",{className:"sm:flex sm:items-center sm:justify-between p-2",children:[e.jsx("dt",{className:"text-sm font-medium text-gray-500 sm:w-1/3",children:"Account Number"}),e.jsx("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:w-2/3",children:s.deposit_info.flat_account_no})]})]}),s.currency==="USDT"&&e.jsxs(u.Fragment,{children:[e.jsxs("div",{className:"sm:flex sm:items-center sm:justify-between p-2",children:[e.jsx("dt",{className:"text-sm font-medium text-gray-500 sm:w-1/3",children:"Wallet Address"}),e.jsx("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:w-2/3",children:s.deposit_info.wallet_address})]}),e.jsxs("div",{className:"sm:flex sm:items-center sm:justify-between p-2",children:[e.jsx("dt",{className:"text-sm font-medium text-gray-500 sm:w-1/3",children:"Network Type"}),e.jsx("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:w-2/3",children:s.deposit_info.network_type})]})]}),e.jsxs("div",{className:"sm:flex sm:items-center sm:justify-between p-2",children:[e.jsx("dt",{className:"text-sm font-medium text-gray-500 sm:w-1/3",children:"Deposit Instruction"}),e.jsx("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:w-2/3",children:s.deposit_info.deposit_instruction})]})]})})]}),e.jsx("div",{children:e.jsx("button",{type:"submit",disabled:a,className:`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${a?"opacity-50 cursor-not-allowed":""}`,children:a?"Processing...":"Deposit"})})]})]})]})};export{F as default};
