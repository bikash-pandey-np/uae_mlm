import{r as l,j as a}from"./app-145e20ba.js";import{M as h}from"./MenuBar-35618e31.js";/* empty css              *//* empty css            */import"./iconBase-10b2ed3d.js";import"./Logo-9c9f284c.js";const x="/build/assets/share_banner-386b7ef1.png",j=({balance:d})=>{const[i,n]=l.useState({});l.useEffect(()=>{document.title="Shares Data | TheCapex.pro";const e=async()=>{try{const t=await fetch(route("market.share-data"));if(t.ok){const o=await t.json();n(o)}else console.error("Failed to fetch data")}catch(t){console.error("Error fetching data:",t)}};e();const s=setInterval(e,3e3);return()=>clearInterval(s)},[]);const c=e=>{var s=null;return e.id==="amzn"&&(s="https://cdn.capex.com/uploads/dma_amzn_7c2c7f2d6c/dma_amzn_7c2c7f2d6c.png"),e.id==="google"&&(s="https://cdn.capex.com/uploads/google_d332823ed3/google_d332823ed3.png"),e.id==="facebook"&&(s="https://cdn.capex.com/uploads/meta_icon_7ec2dc3bb5/meta_icon_7ec2dc3bb5.webp"),e.id==="apple"&&(s="https://cdn.capex.com/uploads/apple_4a039036e4/apple_4a039036e4.svg"),e.id==="nvidia"&&(s="https://cdn.capex.com/uploads/nvidia_logo_adeaf6e9b8/nvidia_logo_adeaf6e9b8.png"),e.id==="tesla"&&(s="https://cdn.capex.com/uploads/tesla_c50a817690/tesla_c50a817690.png"),e.id==="netflix"&&(s="https://cdn.capex.com/uploads/dma_netflix_8734c13a9a/dma_netflix_8734c13a9a.png"),a.jsx("img",{src:s,alt:e.display,style:{width:"25px",height:"25px"}})},r=e=>{var s=null;return e.id==="amzn"&&(s="AMZN"),e.id==="google"&&(s="GOOG"),e.id==="facebook"&&(s="META"),e.id==="apple"&&(s="APPL"),e.id==="nvidia"&&(s="NVDA"),e.id==="tesla"&&(s="TSLA"),e.id==="netflix"&&(s="NFLX"),s};return a.jsxs("div",{children:[a.jsx(h,{balance:d}),a.jsx("section",{style:{width:"100%",height:"70vh",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0px 8px 10px -5px rgba(0, 0, 0, 0.75)",overflow:"hidden"},className:"bg-white-800",children:a.jsx("img",{src:x,className:"md:max-w-55 sm:w-full"})}),a.jsx("section",{className:"text-center mt-4 mx-4",children:a.jsxs("div",{className:"container mx-auto",children:[a.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Shares Market Data"}),a.jsxs("table",{className:"table-auto w-4/5 border-collapse mx-auto",children:[a.jsx("thead",{className:"border-b",children:a.jsxs("tr",{children:[a.jsx("th",{className:"px-4 py-2",children:"Display"}),a.jsx("th",{className:"px-4 py-2",children:"Buy"}),a.jsx("th",{className:"px-4 py-2",children:"Sell"}),a.jsx("th",{className:"hidden md:table-cell px-4 py-2",children:"24H Change"}),a.jsx("th",{className:"hidden md:table-cell px-4 py-2",children:"Action"})]})}),a.jsx("tbody",{children:Object.values(i).map(e=>(console.log(e),a.jsxs("tr",{id:e.id,className:"hover:cursor-pointer hover:bg-red-200",children:[a.jsxs("td",{className:"px-4 py-2 flex items-center",children:[c(e),a.jsx("span",{className:"ml-2",children:e.display})]}),a.jsx("td",{className:"px-4 py-2",children:e.buy}),a.jsx("td",{className:"px-4 py-2",children:e.sell}),a.jsx("td",{className:`hidden md:table-cell px-4 py-2 ${parseFloat(e.change)<0?"text-red-500":"text-green-500"}`,children:e.change}),a.jsx("td",{className:"px-4 py-2",children:a.jsx("a",{href:route("trade",["shares",r(e)]),className:"bg-white text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white py-1 px-4 rounded text-sm",children:"Trade"})})]})))})]})]})})]})};export{j as default};