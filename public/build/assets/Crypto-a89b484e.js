import{r as d,j as a}from"./app-932ec9d2.js";import o from"./MenuBar-cee9fdac.js";/* empty css              *//* empty css            */import"./iconBase-91bcc807.js";import"./Logo-055f5a91.js";const h="/build/assets/crypto_banner-d5108079.jpg",f=()=>{const[r,n]=d.useState({});d.useEffect(()=>{document.title="Crypto currencies Data | TheCapex.pro";const e=async()=>{try{const s=await fetch(route("market.crypto-data"));if(s.ok){const c=await s.json();n(c)}else console.error("Failed to fetch data")}catch(s){console.error("Error fetching data:",s)}};e();const t=setInterval(e,3e3);return()=>clearInterval(t)},[]);const l=e=>{var t=null;return e.id==="aaveusd"&&(t="https://cdn.capex.com/uploads/aave_logo_552d83ae93/aave_logo_552d83ae93.png"),e.id==="linkusd"&&(t="https://cdn.capex.com/uploads/Chain_Link_ed2ba099b3/Chain_Link_ed2ba099b3.png"),e.id==="bitcoin"&&(t="https://cdn.capex.com/uploads/Bitcoin_61110681a4/Bitcoin_61110681a4.png"),e.id==="ethereum"&&(t="https://cdn.capex.com/uploads/Ethereum_4cb32422d4/Ethereum_4cb32422d4.png"),e.id==="adausd"&&(t="https://cdn.capex.com/uploads/Cardano_icon_dd9e2ed4f8/Cardano_icon_dd9e2ed4f8.png"),a.jsx("img",{src:t,alt:e.display,style:{width:"25px",height:"25px"}})},i=e=>{var t=null;return e.id==="aaveusd"&&(t="AAVEUSDT"),e.id==="linkusd"&&(t="LINKUSDT"),e.id==="bitcoin"&&(t="BTCUSDT"),e.id==="ethereum"&&(t="ETHUSDT"),e.id==="adausd"&&(t="ADAUSDT"),t};return a.jsxs("div",{children:[a.jsx(o,{}),a.jsx("section",{style:{height:"70vh",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0px 8px 10px -5px rgba(0, 0, 0, 0.75)"},className:"bg-white-800",children:a.jsx("img",{src:h})}),a.jsx("section",{className:"text-center mt-6 mx-4",children:a.jsxs("div",{className:"container mx-auto",children:[a.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Crypto Market Data"}),a.jsxs("table",{className:"table-auto w-4/5 border-collapse mx-auto",children:[a.jsx("thead",{className:"border-b",children:a.jsxs("tr",{children:[a.jsx("th",{className:"px-4 py-2",children:"Display"}),a.jsx("th",{className:"px-4 py-2",children:"Buy"}),a.jsx("th",{className:"px-4 py-2",children:"Sell"}),a.jsx("th",{className:"hidden md:table-cell px-4 py-2",children:"24H Change"}),a.jsx("th",{className:"hidden md:table-cell px-4 py-2",children:"Action"})]})}),a.jsx("tbody",{children:Object.values(r).map(e=>(console.log(e),a.jsxs("tr",{id:e.id,className:"hover:cursor-pointer hover:bg-red-200",children:[a.jsxs("td",{className:"px-4 py-2 flex items-center",children:[l(e),a.jsx("span",{className:"ml-2",children:e.display})]}),a.jsx("td",{className:"px-4 py-2",children:e.buy}),a.jsx("td",{className:"px-4 py-2",children:e.sell}),a.jsx("td",{className:`hidden md:table-cell px-4 py-2 ${parseFloat(e.change)<0?"text-red-500":"text-green-500"}`,children:e.change}),a.jsx("td",{className:"px-4 py-2",children:a.jsx("a",{href:route("trade",["crypto",i(e)]),className:"bg-white text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white py-1 px-4 rounded text-sm",children:"Trade"})})]})))})]})]})})]})};export{f as default};
