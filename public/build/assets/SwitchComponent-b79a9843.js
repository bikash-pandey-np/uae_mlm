import{r,j as a}from"./app-145e20ba.js";/* empty css            */const x=({fetchMarketData:s,fetchShareData:l})=>{r.useState("Crypto");const i=e=>{var d=null;return e.id==="aaveusd"&&(d="https://cdn.capex.com/uploads/aave_logo_552d83ae93/aave_logo_552d83ae93.png"),e.id==="linkusd"&&(d="https://cdn.capex.com/uploads/Chain_Link_ed2ba099b3/Chain_Link_ed2ba099b3.png"),e.id==="bitcoin"&&(d="https://cdn.capex.com/uploads/Bitcoin_61110681a4/Bitcoin_61110681a4.png"),e.id==="ethereum"&&(d="https://cdn.capex.com/uploads/Ethereum_4cb32422d4/Ethereum_4cb32422d4.png"),e.id==="adausd"&&(d="https://cdn.capex.com/uploads/Cardano_icon_dd9e2ed4f8/Cardano_icon_dd9e2ed4f8.png"),a.jsx("img",{src:d,alt:e.display,style:{width:"25px",height:"25px"}})},t=e=>{var d=null;return e.id==="amzn"&&(d="https://cdn.capex.com/uploads/dma_amzn_7c2c7f2d6c/dma_amzn_7c2c7f2d6c.png"),e.id==="google"&&(d="https://cdn.capex.com/uploads/google_d332823ed3/google_d332823ed3.png"),e.id==="facebook"&&(d="https://cdn.capex.com/uploads/meta_icon_7ec2dc3bb5/meta_icon_7ec2dc3bb5.webp"),e.id==="apple"&&(d="https://cdn.capex.com/uploads/apple_4a039036e4/apple_4a039036e4.svg"),e.id==="nvidia"&&(d="https://cdn.capex.com/uploads/nvidia_logo_adeaf6e9b8/nvidia_logo_adeaf6e9b8.png"),e.id==="tesla"&&(d="https://cdn.capex.com/uploads/tesla_c50a817690/tesla_c50a817690.png"),e.id==="netflix"&&(d="https://cdn.capex.com/uploads/dma_netflix_8734c13a9a/dma_netflix_8734c13a9a.png"),a.jsx("img",{src:d,alt:e.display,style:{width:"25px",height:"25px"}})},c=e=>{var d=null;return e.id==="amzn"&&(d="AMZN"),e.id==="google"&&(d="GOOG"),e.id==="facebook"&&(d="META"),e.id==="apple"&&(d="APPL"),e.id==="nvidia"&&(d="NVDA"),e.id==="tesla"&&(d="TSLA"),e.id==="netflix"&&(d="NFLX"),d},n=e=>{var d=null;return e.id==="aaveusd"&&(d="AAVEUSDT"),e.id==="linkusd"&&(d="LINKUSDT"),e.id==="bitcoin"&&(d="BTCUSDT"),e.id==="ethereum"&&(d="ETHUSDT"),e.id==="adausd"&&(d="ADAUSDT"),d};return a.jsxs("div",{className:"m-4",children:[a.jsxs("div",{className:"crypto-details mt-5",children:[a.jsx("h2",{className:"mt-4 mb-4 font-bold",children:"CryptoCurrency Market"}),a.jsx("hr",{}),a.jsxs("table",{className:"table-auto w-4/5 border-collapse mx-auto",children:[a.jsx("thead",{className:"border-b",children:a.jsxs("tr",{children:[a.jsx("th",{className:"px-4 py-2",children:"Display"}),a.jsx("th",{className:"px-4 py-2",children:"Price"}),a.jsx("th",{className:"hidden md:table-cell px-4 py-2",children:"24H Change"}),a.jsx("th",{className:"hidden md:table-cell px-4 py-2",children:"Action"})]})}),a.jsx("tbody",{children:Object.values(s).map(e=>a.jsxs("tr",{className:"hover:cursor-pointer hover:bg-red-200",children:[a.jsxs("td",{className:"px-4 py-2 flex items-center",children:[i(e),a.jsx("span",{className:"ml-2",children:e.display})]}),a.jsx("td",{className:"px-4 py-2",children:e.price}),a.jsx("td",{className:`hidden md:table-cell px-4 py-2 ${parseFloat(e.change)<0?"text-red-500":"text-green-500"}`,children:e.change}),a.jsx("td",{className:"px-4 py-2",children:a.jsx("a",{href:route("v1.trade",["crypto",n(e)]),className:"bg-white text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white py-1 px-4 rounded text-sm",children:"Trade"})})]},e.id))})]})]}),a.jsxs("div",{className:"shares-details mt-5",children:[a.jsx("h2",{className:"mt-8 mb-4 font-bold",children:"Stock Market"}),a.jsx("hr",{}),a.jsxs("table",{className:"table-auto w-4/5 border-collapse mx-auto",children:[a.jsx("thead",{className:"border-b",children:a.jsxs("tr",{children:[a.jsx("th",{className:"px-4 py-2",children:"Display"}),a.jsx("th",{className:"px-4 py-2",children:"Buy"}),a.jsx("th",{className:"px-4 py-2",children:"Sell"}),a.jsx("th",{className:"hidden md:table-cell px-4 py-2",children:"24H Change"}),a.jsx("th",{className:"hidden md:table-cell px-4 py-2",children:"Action"})]})}),a.jsx("tbody",{children:Object.values(l).map(e=>a.jsxs("tr",{className:"hover:cursor-pointer hover:bg-red-200",children:[a.jsxs("td",{className:"px-4 py-2 flex items-center",children:[t(e),a.jsx("span",{className:"ml-2",children:e.display})]}),a.jsx("td",{className:"px-4 py-2",children:e.buy}),a.jsx("td",{className:"px-4 py-2",children:e.sell}),a.jsx("td",{className:`hidden md:table-cell px-4 py-2 ${parseFloat(e.change)<0?"text-red-500":"text-green-500"}`,children:e.change}),a.jsx("td",{className:"px-4 py-2",children:a.jsx("a",{href:route("v1.trade",["shares",c(e)]),className:"bg-white text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white py-1 px-4 rounded text-sm",children:"Trade"})})]},e.id))})]})]})]})};export{x as default};
