import React from 'react';

const Intro = () => {
  return (
    <section className="py-20" id="features">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Why Choose Capex Pro?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center">
            <div className="text-2xl text-blue-900 mr-4">01</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Secure and Reliable</h3>
              <p className="text-lg">Our platform uses advanced security measures to keep your funds safe.</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-2xl text-blue-900 mr-4">02</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">User-Friendly Interface</h3>
              <p className="text-lg">Designed for simplicity and efficiency in trading cryptocurrencies.</p>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <div className="text-2xl text-blue-900 mr-4">03</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Advanced Charting Tools</h3>
              <p className="text-lg">Access detailed charts and analysis tools for informed trading decisions.</p>
            </div>
          </div>
          <div className="flex items-center  mt-4">
            <div className="text-2xl text-blue-900 mr-4">04</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Instant Trade Execution</h3>
              <p className="text-lg">Execute trades swiftly with our high-speed trading infrastructure.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
