import{u as g,j as e}from"./app-664bebcc.js";import D from"./Layout-fc062159.js";/* empty css            */import"./MenuBar-de3da3a0.js";const E=({detail:r})=>{const{data:c,setData:i,post:h,processing:m,errors:d}=g({approved_amount:"",remark:"",transaction_code:r.transaction_code}),{data:j,setData:b,post:f,processing:n,errors:x}=g({remark:"",transaction_code:r.transaction_code}),y=s=>{s.preventDefault(),h(route("admin.approve.deposit",{code:r.transaction_code}),{onSuccess:()=>{alert("Deposit request approved successfully!")}})},N=s=>{s.preventDefault(),f(route("admin.reject.deposit",{code:r.transaction_code}),{onSuccess:()=>{alert("Deposit request rejected successfully!")}})};if(!r)return e.jsx("div",{children:"Loading..."});const{amount:v,transaction_code:k,currency:p,deposited_by:o,status:l,approved_amount:u,remark:_,created_at:w,updated_at:A,deposit_info:t}=r;let a="";switch(l){case"Pending":a="bg-yellow-300";break;case"Approved":a="bg-green-300";break;case"Rejected":a="bg-red-300";break;default:a="bg-gray-300"}return e.jsx(D,{children:e.jsx("div",{className:"mt-5 p-5 bg-white shadow sm:rounded-lg",children:e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"border border-gray-400",children:[e.jsxs("div",{className:"mb-4 bg-blue-500 px-4 py-2",children:[e.jsx("h3",{className:"text-lg font-medium leading-6 text-white",children:"Deposit Request Information"}),e.jsxs("p",{className:"mt-1 max-w-2xl text-sm text-white",children:["Details for transaction code: ",e.jsx("span",{className:"font-bold",children:k})]})]}),e.jsx("div",{className:"px-4",children:e.jsxs("dl",{className:"grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-8",children:[e.jsxs("div",{className:"py-3",children:[e.jsx("dt",{className:"text-sm font-medium text-gray-500",children:"Amount"}),e.jsxs("dd",{className:"mt-1 text-sm text-gray-900 font-bold",children:[v," ",p]})]}),e.jsxs("div",{className:"py-3",children:[e.jsx("dt",{className:"text-sm font-medium text-gray-500",children:"Status"}),e.jsx("dd",{className:`mt-1 text-sm font-semibold ${a} py-1 px-2 rounded-md inline-block`,children:l})]}),e.jsxs("div",{className:"py-3",children:[e.jsx("dt",{className:"text-sm font-medium text-gray-500",children:"Approved Amount"}),e.jsx("dd",{className:"mt-1 text-sm text-gray-900 font-bold",children:u?`${u} ${p}`:"Not approved"})]}),e.jsxs("div",{className:"py-3",children:[e.jsx("dt",{className:"text-sm font-medium text-gray-500",children:"Created At"}),e.jsx("dd",{className:"mt-1 text-sm text-gray-900 font-bold",children:w})]}),e.jsxs("div",{className:"py-3",children:[e.jsx("dt",{className:"text-sm font-medium text-gray-500",children:"Remark"}),e.jsx("dd",{className:"mt-1 text-sm text-gray-900 font-bold",children:_||"-"})]}),e.jsxs("div",{className:"py-3",children:[e.jsx("dt",{className:"text-sm font-medium text-gray-500",children:"Deposited By"}),e.jsxs("dd",{className:"mt-1 text-sm text-gray-900 font-bold",children:[o.full_name," (",o.customer_code,") - ",o.email]})]}),e.jsxs("div",{className:"py-3",children:[e.jsx("dt",{className:"text-sm font-medium text-gray-500",children:"Deposit Info Type"}),e.jsx("dd",{className:"mt-1 text-sm text-gray-900 font-bold",children:t.type})]}),t.type==="flat"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"py-3",children:[e.jsx("dt",{className:"text-sm font-medium text-gray-500",children:"Bank Name"}),e.jsx("dd",{className:"mt-1 text-sm text-gray-900 font-bold",children:t.flat_bank_name})]}),e.jsxs("div",{className:"py-3",children:[e.jsx("dt",{className:"text-sm font-medium text-gray-500",children:"Account Number"}),e.jsx("dd",{className:"mt-1 text-sm text-gray-900 font-bold",children:t.flat_account_no})]}),e.jsxs("div",{className:"py-3",children:[e.jsx("dt",{className:"text-sm font-medium text-gray-500",children:"Account Name"}),e.jsx("dd",{className:"mt-1 text-sm text-gray-900 font-bold",children:t.flat_account_name})]})]}),t.type==="crypto"&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"py-3",children:[e.jsx("dt",{className:"text-sm font-medium text-gray-500",children:"Wallet Address"}),e.jsx("dd",{className:"mt-1 text-sm text-gray-900 font-bold",children:t.wallet_address})]})}),e.jsxs("div",{className:"py-3",children:[e.jsx("dt",{className:"text-sm font-medium text-gray-500",children:"Deposit Instruction"}),e.jsx("dd",{className:"mt-1 text-sm text-gray-900 font-bold",children:t.deposit_instruction})]})]})})]}),l==="Pending"&&e.jsxs("div",{children:[e.jsxs("div",{className:"mt-4 bg-white shadow overflow-hidden sm:rounded-lg",children:[e.jsx("div",{className:"px-4 py-5 sm:px-6 bg-green-500",children:e.jsx("h3",{className:"text-lg leading-6 font-medium text-white",children:"Approve"})}),e.jsx("div",{className:"border-t border-gray-200",children:e.jsx("form",{onSubmit:y,children:e.jsxs("div",{className:"px-4 py-5 sm:p-6",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"approved_amount",className:"block text-sm font-medium text-gray-700",children:"Approved Amount"}),e.jsx("input",{type:"number",name:"approved_amount",id:"approved_amount",value:c.approved_amount,onChange:s=>i("approved_amount",s.target.value),className:"px-4 py-2 mt-1 block w-full bg-gray-100 border border-green-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900 placeholder-gray-500",placeholder:"Enter approved amount"}),d.approved_amount&&e.jsx("p",{className:"mt-2 text-sm text-red-600",children:d.approved_amount})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"remark",className:"block text-sm font-medium text-gray-700",children:"Remark"}),e.jsx("textarea",{id:"remark",name:"remark",rows:"3",value:c.remark,onChange:s=>i("remark",s.target.value),className:"mt-1 px-4 py-2 block w-full bg-white border border-green-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900 placeholder-gray-500",placeholder:"Enter remark"}),d.remark&&e.jsx("p",{className:"mt-2 text-sm text-red-600",children:d.remark})]}),e.jsx("div",{className:"flex justify-end",children:e.jsx("button",{type:"submit",disabled:m,className:`inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${m?"bg-gray-400 cursor-not-allowed":"bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"}`,children:m?"Approving...":"Approve"})})]})})})]}),e.jsxs("div",{className:"mt-4 bg-white shadow overflow-hidden sm:rounded-lg",children:[e.jsx("div",{className:"px-4 py-5 sm:px-6 bg-red-400",children:e.jsx("h3",{className:"text-lg leading-6 font-medium text-gray-900",children:"Reject"})}),e.jsx("div",{className:"border-t border-gray-200",children:e.jsx("form",{onSubmit:N,children:e.jsxs("div",{className:"px-4 py-5 sm:p-6",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"reject_remark",className:"block text-sm font-medium text-gray-700",children:"Remark"}),e.jsx("textarea",{id:"reject_remark",name:"reject_remark",rows:"3",value:j.remark,onChange:s=>b("remark",s.target.value),className:"mt-1 px-4 py-2 block w-full bg-white border border-red-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900 placeholder-gray-500",placeholder:"Enter remark"}),x.remark&&e.jsx("p",{className:"mt-2 text-sm text-red-600",children:x.remark})]}),e.jsx("div",{className:"flex justify-end",children:e.jsx("button",{type:"submit",disabled:n,className:`inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${n?"bg-gray-400 cursor-not-allowed":"bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"}`,children:n?"Rejecting...":"Reject"})})]})})})]})]})]})})})};export{E as default};
