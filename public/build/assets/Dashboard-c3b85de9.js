import{r,j as e}from"./app-5fd90439.js";import p from"./SwitchComponent-eb3bb291.js";import f from"./Layout-f263b9d2.js";/* empty css            */import"./TopMenu-e6fbe055.js";import"./index-dd9e70cf.js";import"./iconBase-474fee26.js";import"./BottomMenu-6c3bbf5e.js";const u="/build/assets/1-f414dcc6.jpg",w=({balance:s,username:n})=>{const[i,l]=r.useState({}),[d,m]=r.useState({});return r.useEffect(()=>{document.title="Dashboard | TheCapex.pro";const o=async()=>{try{const t=await fetch(route("market.share-data"));if(t.ok){const a=await t.json();m(a)}else console.error("Failed to fetch data")}catch(t){console.error("Error fetching data:",t)}};o();const h=setInterval(o,3e3),c=async()=>{try{const t=await fetch(route("market.crypto-data"));if(t.ok){const a=await t.json();l(a)}else console.error("Failed to fetch data")}catch(t){console.error("Error fetching data:",t)}};c();const x=setInterval(c,3e3);return()=>{clearInterval(x),clearInterval(h)}},[]),e.jsx(f,{children:e.jsxs("section",{style:{marginTop:"5rem",backgroundImage:`url(${u})`,backgroundSize:"cover",backgroundPosition:"center"},children:[e.jsxs("h2",{className:"text-md mx-4 my-4",children:["Welcome, ",n]}),e.jsx("div",{className:"mx-4 grid grid-cols-1 md:grid-cols-4 gap-4",children:e.jsxs("div",{className:"bg-gray-300 p-4 rounded-lg shadow-md flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-black-500 font-semibold",children:"Balance"}),e.jsxs("p",{className:"text-black-600 text-xl font-bold",children:[s," USDT"]}),e.jsxs("p",{className:"text-black-600 text-xl font-bold",children:["~ ₹ ",(s*83.23).toFixed(2)," "]})]}),e.jsx("a",{href:route("v1.deposit"),className:"px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none",children:"Deposit"})]})}),e.jsx("div",{className:"container",style:{marginBottom:"5rem"},children:e.jsx(p,{fetchMarketData:i,fetchShareData:d})})]})})};export{w as default};