import{r as d,j as e}from"./app-74522766.js";import i from"./MenuBar-7185b319.js";/* empty css              *//* empty css            */import"./iconBase-f2e453a7.js";const u=()=>{const[l,r]=d.useState({});d.useEffect(()=>{const a=async()=>{try{const t=await fetch(route("market.crypto-data"));if(t.ok){const n=await t.json();r(n)}else console.error("Failed to fetch data")}catch(t){console.error("Error fetching data:",t)}};a();const s=setInterval(a,3e3);return()=>clearInterval(s)},[]);const c=a=>{var s=null;return a.id==="aaveusd"&&(s="https://cdn.capex.com/uploads/aave_logo_552d83ae93/aave_logo_552d83ae93.png"),a.id==="linkusd"&&(s="https://cdn.capex.com/uploads/Chain_Link_ed2ba099b3/Chain_Link_ed2ba099b3.png"),a.id==="bitcoin"&&(s="https://cdn.capex.com/uploads/Bitcoin_61110681a4/Bitcoin_61110681a4.png"),a.id==="ethereum"&&(s="https://cdn.capex.com/uploads/Ethereum_4cb32422d4/Ethereum_4cb32422d4.png"),a.id==="adausd"&&(s="https://cdn.capex.com/uploads/Cardano_icon_dd9e2ed4f8/Cardano_icon_dd9e2ed4f8.png"),e.jsx("img",{src:s,alt:a.display,style:{width:"25px",height:"25px"}})};return e.jsxs("div",{children:[e.jsx(i,{}),e.jsx("section",{style:{height:"70vh"},className:"bg-gray-800 banner_section"}),e.jsx("section",{className:"text-center mt-4 mx-4",children:e.jsxs("div",{className:"container mx-auto",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Crypto Market Data"}),e.jsxs("table",{className:"table-auto w-4/5 border-collapse mx-auto",children:[e.jsx("thead",{className:"border-b",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-2",children:"Display"}),e.jsx("th",{className:"px-4 py-2",children:"Buy"}),e.jsx("th",{className:"px-4 py-2",children:"Sell"}),e.jsx("th",{className:"hidden md:table-cell px-4 py-2",children:"24H Change"}),e.jsx("th",{className:"hidden md:table-cell px-4 py-2",children:"Action"})]})}),e.jsx("tbody",{children:Object.values(l).map(a=>(console.log(a),e.jsxs("tr",{id:a.id,className:"hover:cursor-pointer hover:bg-red-200",children:[e.jsxs("td",{className:"px-4 py-2 flex items-center",children:[c(a),e.jsx("span",{className:"ml-2",children:a.display})]}),e.jsx("td",{className:"px-4 py-2",children:a.buy}),e.jsx("td",{className:"px-4 py-2",children:a.sell}),e.jsx("td",{className:`hidden md:table-cell px-4 py-2 ${parseFloat(a.change)<0?"text-red-500":"text-green-500"}`,children:a.change}),e.jsx("td",{className:"px-4 py-2",children:e.jsx("button",{className:"bg-white text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white py-1 px-4 rounded text-sm",children:"Trade"})})]})))})]})]})})]})};export{u as default};