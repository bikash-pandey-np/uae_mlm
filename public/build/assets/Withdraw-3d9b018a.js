import{a as u,u as x,r as p,B as o,j as e}from"./app-69f142c7.js";import f from"./MenuBar-479a4500.js";/* empty css              *//* empty css            */import"./iconBase-de7a1ece.js";const y=()=>{const{flash:t}=u().props,d=1200,i=12320,{data:a,setData:n,post:c,processing:l,errors:r}=x({amount:"",currency:"USDT",wallet_address:""});p.useEffect(()=>{let s=null;return(t.success||t.error)&&(s&&o.dismiss(s),t.success?(s=o.success(t.success,{pauseOnHover:!1,autoClose:2e3,onClose:()=>window.location.reload()}),n({email:"",password:""})):t.error&&(s=o.error(t.error,{pauseOnHover:!1,autoClose:2e3,onClose:()=>window.location.reload()}))),()=>{s&&o.dismiss(s)}},[t]);const m=s=>{s.preventDefault(),console.log(a),c(route("withdraw"),a)};return e.jsxs("div",{children:[e.jsx(f,{}),e.jsxs("div",{className:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("h2",{className:"text-xl font-extrabold text-gray-900 mb-4",children:"Withdraw From Account"}),e.jsxs("p",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:w-2/3 ml-auto",children:["Balance: ",e.jsxs("span",{className:"font-bold",children:[d," USDT ~ ",d*83.45," INR"]}),e.jsxs("span",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:w-2/3 ml-4",children:["Pending Deposit: ",e.jsxs("span",{className:"font-bold",children:["~",i]})," INR"]})]})]}),e.jsxs("form",{onSubmit:m,className:"space-y-6 mt-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"amount",className:"block text-sm font-medium text-gray-700",children:"Withdraw Amount"}),e.jsx("div",{className:"mt-1",children:e.jsx("input",{id:"amount",name:"amount",type:"number",onChange:s=>{s.preventDefault(),n("amount",s.target.value)},value:a.amount,className:"appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"})}),r.amount&&e.jsx("p",{className:"mt-2 text-sm text-red-600",id:"amount-error",children:r.amount})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"currency",className:"block text-sm font-medium text-gray-700",children:"Choose Currency"}),e.jsx("div",{className:"mt-1",children:e.jsx("select",{id:"currency",name:"currency",defaultValue:a.currency,className:"appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",children:e.jsx("option",{value:"USDT",children:"USDT"})})})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"wallet_address",className:"block text-sm font-medium text-gray-700",children:"Wallet Address (Network: TRC20)"}),e.jsx("div",{className:"mt-1",children:e.jsx("input",{id:"wallet_address",name:"wallet_address",type:"text",onChange:s=>{s.preventDefault(),n("wallet_address",s.target.value)},value:a.wallet_address,className:"appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"})}),r.wallet_address&&e.jsx("p",{className:"mt-2 text-sm text-red-600",id:"amount-error",children:r.wallet_address})]}),e.jsx("div",{children:e.jsx("button",{type:"submit",disabled:l,className:`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${l?"opacity-50 cursor-not-allowed":""}`,children:l?"Processing...":"Withdraw"})})]})]})]})};export{y as default};