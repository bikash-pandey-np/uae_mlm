import{r,j as e}from"./app-74522766.js";import a from"./MenuBar-7185b319.js";/* empty css              *//* empty css            */import"./iconBase-f2e453a7.js";const d=()=>{const i=r.useRef();return r.useEffect(()=>{const t=document.createElement("script");t.src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js",t.type="text/javascript",t.async=!0,t.innerHTML=`
          {
            "autosize": true,
            "symbol": "BINANCE:BTCUSDT",
            "interval": "1",
            "timezone": "Etc/UTC",
            "theme": "light",
            "style": "1",
            "locale": "en",
            "allow_symbol_change": false,
            "save_image": false,
            "calendar": false,
            "support_host": "https://www.tradingview.com"
          }`,i.current.appendChild(t)},[]),e.jsxs("div",{children:[e.jsx(a,{}),e.jsx("section",{children:e.jsxs("div",{className:"tradingview-widget-container",ref:i,style:{height:"70vh",width:"100%"},children:[e.jsx("div",{className:"tradingview-widget-container__widget",style:{height:"calc(70vh - 32px)",width:"100%"}}),e.jsx("div",{className:"tradingview-widget-copyright",children:e.jsx("a",{href:"https://www.tradingview.com/",rel:"noopener nofollow",target:"_blank",children:e.jsx("span",{className:"blue-text",children:"Track all markets on TradingView"})})})]})})]})};export{d as default};
