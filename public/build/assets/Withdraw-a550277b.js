import{a as f,u as b,r as m,B as d,j as e}from"./app-145e20ba.js";import{M as g}from"./index-bdac4c18.js";import j from"./Layout-4dfc69e9.js";/* empty css            */import"./iconBase-10b2ed3d.js";import"./TopMenu-cadf5041.js";import"./index-c681be0e.js";import"./BottomMenu-24605223.js";const D=({balance:w})=>{const{flash:t}=f().props,{data:s,setData:l,post:u,processing:i,errors:n,reset:x}=b({amount:"",currency:"USDT",wallet_address:"",bank_name:"",account_no:"",account_name:""});m.useEffect(()=>{document.title="Withdraw | The Capex Pro"},[]),m.useEffect(()=>{let a=null;return(t.success||t.error)&&(console.log("here"),a&&d.dismiss(a),t.success?a=d.success(t.success,{pauseOnHover:!1,autoClose:2e3,onClose:()=>{window.location.reload()}}):t.error&&(a=d.error(t.error,{pauseOnHover:!1,autoClose:2e3,onClose:()=>{window.location.reload()}}))),()=>{a&&d.dismiss(a)}},[t,x]);const h=async a=>{a.preventDefault();try{await u(route("v1.withdraw"))}catch(c){if(c.response&&c.response.status===422){const o=c.response.data.errors;o&&l(p=>({...p,...o}))}}},r=a=>{const{name:c,value:o}=a.target;c==="currency"?o==="USDT"?l({...s,currency:o,wallet_address:"",bank_name:"",account_no:"",account_name:""}):o==="INR"&&l({...s,currency:o,wallet_address:"",bank_name:s.bank_name||"",account_no:s.account_no||"",account_name:s.account_name||""}):l({...s,[c]:o})};return e.jsx(j,{children:e.jsxs("div",{className:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",style:{marginTop:"5rem",marginBottom:"5rem"},children:[e.jsx("div",{className:"flex items-center",children:e.jsx("h2",{className:"text-xl font-extrabold text-gray-900 mb-4",children:"Withdraw From Account"})}),e.jsxs("div",{className:"bg-yellow-100 border-l-4 border-yellow-500 text-black-700 p-4 flex my-4",role:"alert",children:[e.jsx("div",{className:"mr-2",children:e.jsx(g,{size:24})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold",children:"Info"}),e.jsx("p",{children:"No fees are deducted while withdrawing from Crypto "}),e.jsx("p",{children:"You can manually request a bank withdrawal with a fee of 10% of the amount. "})]})]}),e.jsxs("form",{onSubmit:h,className:"space-y-6 mt-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"amount",className:"block text-sm font-medium text-gray-700",children:"Withdraw Amount"}),e.jsx("div",{className:"mt-1",children:e.jsx("input",{id:"amount",name:"amount",type:"number",onChange:r,value:s.amount,className:"appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"})}),n.amount&&e.jsx("p",{className:"mt-2 text-sm text-red-600",id:"amount-error",children:n.amount})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"currency",className:"block text-sm font-medium text-gray-700",children:"Choose Currency"}),e.jsx("div",{className:"mt-1",children:e.jsxs("select",{id:"currency",name:"currency",value:s.currency,onChange:r,className:"appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",children:[e.jsx("option",{value:"USDT",children:"USDT"}),e.jsx("option",{value:"INR",children:"INR"})]})})]}),s.currency==="USDT"&&e.jsxs("div",{children:[e.jsx("label",{htmlFor:"wallet_address",className:"block text-sm font-medium text-gray-700",children:"Wallet Address (Network: TRC20)"}),e.jsx("div",{className:"mt-1",children:e.jsx("input",{id:"wallet_address",name:"wallet_address",type:"text",onChange:r,value:s.wallet_address,className:"appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"})}),n.wallet_address&&e.jsx("p",{className:"mt-2 text-sm text-red-600",id:"wallet-address-error",children:n.wallet_address})]}),s.currency==="INR"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"bank_name",className:"block text-sm font-medium text-gray-700",children:"Bank Name"}),e.jsx("div",{className:"mt-1",children:e.jsx("input",{id:"bank_name",name:"bank_name",type:"text",onChange:r,value:s.bank_name,className:"appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"})}),n.bank_name&&e.jsx("p",{className:"mt-2 text-sm text-red-600",id:"bank-name-error",children:n.bank_name})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"account_no",className:"block text-sm font-medium text-gray-700",children:"Account Number"}),e.jsx("div",{className:"mt-1",children:e.jsx("input",{id:"account_no",name:"account_no",type:"text",onChange:r,value:s.account_no,className:"appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"})}),n.account_no&&e.jsx("p",{className:"mt-2 text-sm text-red-600",id:"account-no-error",children:n.account_no})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"account_name",className:"block text-sm font-medium text-gray-700",children:"Account Name"}),e.jsx("div",{className:"mt-1",children:e.jsx("input",{id:"account_name",name:"account_name",type:"text",onChange:r,value:s.account_name,className:"appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"})}),n.account_name&&e.jsx("p",{className:"mt-2 text-sm text-red-600",id:"account-name-error",children:n.account_name})]})]}),e.jsx("div",{children:e.jsx("button",{type:"submit",disabled:i,className:`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${i?"opacity-50 cursor-not-allowed":""}`,children:i?"Processing...":"Withdraw"})})]})]})})};export{D as default};
