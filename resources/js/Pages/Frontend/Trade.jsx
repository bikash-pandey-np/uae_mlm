import React, { useEffect, useRef, memo } from 'react';
import MenuBar from './Components/MenuBar';
import { FiMenu, FiChevronDown } from 'react-icons/fi'; // Import FiMenu for toggler icon
import '../../../css/app/front.css';

const Trade = ({slug, type}) => {
    const container = useRef();

    useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify({
        "autosize": true,
        "symbol": type === 'crypto' ? `BINANCE:${slug}` : `NASDAQ:${slug}`,
        "interval": "1",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "1",
        "locale": "en",
        "allow_symbol_change": false,
        "save_image": false,
        "calendar": false,
        "support_host": "https://www.tradingview.com"
      });
      container.current.appendChild(script);
    }, []);
    return (
        <div>
            <MenuBar />

            <section>
            <div className="tradingview-widget-container" ref={container} style={{ height: "70vh", width: "100%" }}>
            <div className="tradingview-widget-container__widget" style={{ height: "calc(70vh - 32px)", width: "100%" }}></div>
            <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
          </div>
            </section>

            
        </div>
    );
}

export default Trade;
