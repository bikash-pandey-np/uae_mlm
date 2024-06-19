import{r as a,j as t}from"./app-a384a3ae.js";/* empty css              *//* empty css            */function i(){const s=a.useRef();return a.useEffect(()=>{const e=document.createElement("script");e.src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js",e.type="text/javascript",e.async=!0,e.innerHTML=`
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
        }`,s.current.appendChild(e)},[]),t.jsxs("div",{className:"tradingview-widget-container",ref:s,style:{height:"70vh",width:"100%"},children:[t.jsx("div",{className:"tradingview-widget-container__widget",style:{height:"calc(70vh - 32px)",width:"100%"}}),t.jsx("div",{className:"tradingview-widget-copyright",children:t.jsx("a",{href:"https://www.tradingview.com/",rel:"noopener nofollow",target:"_blank",children:t.jsx("span",{className:"blue-text",children:"Track all markets on TradingView"})})})]})}const l=a.memo(i);export{l as default};
