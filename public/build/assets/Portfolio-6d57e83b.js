import{r as x,j as e}from"./app-f08e0058.js";import{M as o,F as c}from"./MenuBar-0cc7cf71.js";import m from"./BottomNavbar-13f945c8.js";import{G as n}from"./iconBase-7297f21a.js";import s from"./CardDisplay-00ce0b38.js";/* empty css              *//* empty css            */import"./Logo-988da1fc.js";import"./index-7a0d54b1.js";function h(t){return n({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"},child:[]}]})(t)}const y=({active:t,balance:r,total_deposit_amount:i,pending_deposit:l,total_withdraw:a,total_pending_withdraw:d})=>(x.useEffect(()=>{document.title="Portfolio | TheCapex.pro"},[]),e.jsxs("div",{children:[e.jsx(o,{balance:r}),e.jsxs("section",{className:"mt-4",children:[e.jsx("h2",{className:"text-xl mx-4 my-4",children:"Portfolio"}),e.jsxs("div",{className:"mx-4 grid grid-cols-1 md:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"bg-white-800 p-4 rounded-lg shadow-md flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-gray-500 font-semibold",children:"Balance"}),e.jsxs("p",{className:"text-black-600 text-xl font-bold",children:[r," USDT"]}),e.jsxs("p",{className:"text-black-600 text-xl font-bold",children:["~ ₹ ",(r*83.23).toFixed(2)," "]})]}),e.jsx("a",{href:route("deposit"),className:"px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none",children:"Deposit"}),e.jsx("a",{href:route("withdraw"),className:"ml-4 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none",children:"Withdraw"})]}),e.jsx("div",{className:"mt-4"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-5 mx-4 max-w-2xl",children:[e.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-md flex items-center",children:[e.jsx("div",{className:"mr-4",children:e.jsx(h,{className:"text-4xl text-green-500"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold",children:"Crypto Wallet"}),e.jsx("p",{className:"text-gray-600",children:"Manage your crypto assets securely."})]})]}),e.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-md flex items-center",children:[e.jsx("div",{className:"mr-4",children:e.jsx(c,{className:"text-4xl text-blue-500"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold",children:"P2P"}),e.jsx("p",{className:"text-gray-600",children:"Trade directly with other users."})]})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-8 mx-4 max-w-2xl",children:[e.jsx(s,{title:"Total Deposits",number:`$ ${i}`}),e.jsx(s,{title:"Pending Deposits",number:`$ ${l}`})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-8 mx-4 max-w-2xl",children:[e.jsx(s,{title:"Total Withdraw",number:`$ ${a}`}),e.jsx(s,{title:"Pending Withdraw",number:`$ ${d}`})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-8 mx-4 max-w-2xl",children:[e.jsx(s,{title:"Credit Score",number:"100"}),e.jsx(s,{title:"Freezed Amount",number:"0"})]})]}),e.jsx(m,{active:t})]}));export{y as default};
