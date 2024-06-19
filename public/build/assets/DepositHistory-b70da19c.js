import{a as g,r as o,B as a,j as e}from"./app-932ec9d2.js";import{M as v}from"./index-a0c616a5.js";import{c as y}from"./index-93b78f4a.js";import w from"./FrontModal-09cf58dd.js";import S from"./MenuBar-cee9fdac.js";/* empty css              *//* empty css            */import"./iconBase-91bcc807.js";import"./Logo-055f5a91.js";const M=({balance:r,pending_amount:d,deposit_histories:n})=>{const{flash:l}=g().props,[i,c]=o.useState(!1),[t,p]=o.useState(null),[m,x]=o.useState(""),[u,h]=o.useState("all"),j=s=>{x(s.target.value)},f=s=>{h(s.target.value)};console.log(n),o.useEffect(()=>{document.title="Deposit History | TheCapex.pro";let s=null;return(l.success||l.error)&&(s&&a.dismiss(s),l.success?s=a.success(l.success,{pauseOnHover:!1,autoClose:2e3,onClose:()=>window.location.reload()}):l.error&&(s=a.error(l.error,{pauseOnHover:!1,autoClose:2e3,onClose:()=>window.location.reload()}))),()=>{s&&a.dismiss(s)}},[l]);const b=s=>{p(s),c(!0)},N=()=>{c(!1)};return e.jsxs("section",{children:[e.jsx(S,{}),e.jsxs("div",{className:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("h2",{className:"text-xl font-bold text-gray-700 mb-4",children:"Deposit History"}),e.jsxs("p",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:w-2/3 ml-auto",children:["Balance: ",e.jsxs("span",{className:"font-bold",children:[r," USDT ~ ",r*83.45," INR"]}),e.jsxs("span",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:w-2/3 ml-4",children:["Pending Deposit: ",e.jsxs("span",{className:"font-bold",children:["~",d]})," INR"]})]})]}),n.length===0?e.jsxs("div",{className:"bg-yellow-100 border-l-4 border-yellow-500 text-black-700 p-4 flex my-4",role:"alert",children:[e.jsx("div",{className:"mr-2",children:e.jsx(v,{size:24})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold",children:"No Record Found"}),e.jsx("p",{children:"Please Deposit First to view Deposit History"}),e.jsx("a",{href:route("deposit"),className:"mt-2 inline-block text-white py-1 px-2 rounded",style:{backgroundColor:"#E88D67",fontSize:"9pt",letterSpacing:"1.1px"},children:"Deposit Now"})]})]}):e.jsxs("div",{className:"overflow-x-auto mt-4",children:[e.jsxs("div",{className:"flex items-center mt-3 mb-3",children:[e.jsx("input",{type:"text",placeholder:"Search...",value:m,onChange:j,className:"px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:border-blue-300"}),e.jsxs("div",{className:"ml-4",children:[e.jsx("label",{children:"Status"}),e.jsxs("select",{value:u,onChange:f,className:"px-4 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring focus:border-blue-300",children:[e.jsx("option",{value:"all",children:"All"}),e.jsx("option",{value:"approved",children:"Approved"}),e.jsx("option",{value:"pending",children:"Pending"}),e.jsx("option",{value:"rejected",children:"Rejected"})]})]}),e.jsx("button",{className:"ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300",children:"Filter"})]}),e.jsxs("table",{className:"min-w-full bg-white",children:[e.jsx("thead",{className:"bg-gray-200",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-2 font-bold text-md",children:"Transaction Code"}),e.jsx("th",{className:"px-4 py-2 font-bold text-md",children:"Deposit Amount"}),e.jsx("th",{className:"px-4 py-2 font-bold text-md",children:"Approved Amount"}),e.jsx("th",{className:"px-4 py-2 font-bold text-md",children:"Deposited Time"}),e.jsx("th",{className:"px-4 py-2 font-bold text-md",children:"Status"})]})}),e.jsx("tbody",{children:n.map(s=>e.jsxs("tr",{children:[e.jsx("td",{className:"border px-4 py-2",children:e.jsxs("span",{className:"flex items-center",children:[s.transaction_code,e.jsx(y,{className:"ml-2 text-blue-500 text-xl cursor-pointer",onClick:()=>b(s)})]})}),e.jsxs("td",{className:"border px-4 py-2",children:[s.amount," ",s.currency]}),e.jsx("td",{className:"border px-4 py-2",children:s.is_approved?s.approved_amount+" USDT":e.jsx("span",{className:"text-center",children:"-"})}),e.jsx("td",{className:"border px-4 py-2",children:s.created_at}),e.jsx("td",{className:"border px-4 py-2",children:e.jsx("span",{className:`inline-block py-1 px-2 rounded ${s.status==="Pending"?"bg-blue-500":s.status==="Rejected"?"bg-red-500":"bg-green-500"} text-white text-xs`,children:s.status})})]},s.id))})]}),e.jsxs("p",{className:"mt-4 text-center",children:["Showing ",n.length," Records"]})]}),t&&e.jsxs(w,{isOpen:i,onClose:N,children:[e.jsx("h2",{className:"font-bold",style:{fontSize:"14pt",letterSpacing:"1.1px"},children:"Deposit Details"}),e.jsxs("p",{children:["Transaction Code: ",t.transaction_code]}),e.jsxs("p",{children:["Deposit Amount: ",t.amount," ",t.currency]}),e.jsxs("p",{children:["Status:",e.jsxs("span",{className:"font-semibold",children:[" ",t.status]})]}),t.approved_amount&&e.jsxs("p",{children:["Approved Amount: ",t.approved_amount," USDT"]}),e.jsx("p",{className:"font-semibold mt-2 mb-2",children:"Deposited To"}),t.currency==="INR"?e.jsxs("div",{children:[e.jsxs("p",{children:["Bank Name: ",t.deposit_info.flat_bank_name]}),e.jsxs("p",{children:["Account No: ",t.deposit_info.flat_account_no]}),e.jsxs("p",{children:["Account Name: ",t.deposit_info.flat_account_name]})]}):e.jsxs("div",{children:[e.jsxs("p",{children:["Network: ",t.deposit_info.network_type]}),e.jsxs("p",{children:["Wallet Address: ",t.deposit_info.wallet_address]})]}),t.remark&&e.jsxs("p",{className:"mt-1",children:["Remark: ",t.remark]}),console.log(t)]})]})]})};export{M as default};
