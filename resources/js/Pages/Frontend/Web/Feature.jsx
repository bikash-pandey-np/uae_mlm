import React from 'react';

const Feature = () => {
  const features = [
    { title: 'User Friendly Interface', body: 'Our platform is designed with a user-friendly interface that ensures a seamless and intuitive experience for all users. Whether you are a beginner or an experienced trader, you will find it easy to navigate and use our features.' },
    { title: 'Real Time Market Data', body: 'Our platform provides real-time market data, ensuring that you have the most up-to-date information at your fingertips. Stay informed about market trends and make well-informed trading decisions with our accurate and timely data.' },
    { title: 'Portfolio Management', body: 'Our platform has solid principles for user portfolio management, ensuring that your investments are well-organized and easily accessible.' },
    { title: 'Watchlist Customization', body: 'Our platform allows you to customize your watchlist, ensuring that you can keep track of the assets that matter most to you. Easily add or remove assets and stay updated on their performance.' },
    { title: 'Customizable Alerts', body: 'Our platform offers customizable alerts, allowing you to set up notifications for specific market conditions or asset performance. Stay informed and never miss an important update.' },
    { title: 'Company Financials', body: 'Capex.Pro provide access to company financial statements, earnings, reports and other relavent data. ' },
  ];

  return (
    <section className="py-20 bg-gray-100" id="features">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Our Features</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-lg">{feature.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;

