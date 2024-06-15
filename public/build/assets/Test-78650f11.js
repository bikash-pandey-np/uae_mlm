import{r as a,j as t}from"./app-761f72af.js";/* empty css            */function i(){const s=a.useRef();return a.useEffect(()=>{const e=document.createElement("script");e.src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js",e.type="text/javascript",e.async=!0,e.innerHTML=`
        {
          "autosize": true,
          "symbol": "BINANCE:BTCUSDT",
          "interval": "1",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "2",
          "locale": "en",
          "allow_symbol_change": false,
          "save_image": false,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`,s.current.appendChild(e)},[]),t.jsxs("div",{className:"tradingview-widget-container",ref:s,style:{height:"100%",width:"100%"},children:[t.jsx("div",{className:"tradingview-widget-container__widget",style:{height:"calc(100% - 32px)",width:"100%"}}),t.jsx("div",{className:"tradingview-widget-copyright",children:t.jsx("a",{href:"https://www.tradingview.com/",rel:"noopener nofollow",target:"_blank",children:t.jsx("span",{className:"blue-text",children:"Track all markets on TradingView"})})})]})}const c=a.memo(i);export{c as default};
