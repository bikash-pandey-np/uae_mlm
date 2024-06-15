import Layout from "./Components/Layout";

const Dashboard = () => {
    return (
        <Layout>
        <h2 className="px-4 mb-4">Total Stats</h2>
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/4 px-4">
                    <div className="max-w-xs mx-auto bg-white rounded-xl overflow-hidden shadow-md text-center p-4">
                        <h2 className="text-4xl font-bold text-gray-800">30</h2>
                        <p className="text-gray-600">Customers</p>
                    </div>
                </div>

                <div className="w-full md:w-1/4 px-4">
                    <div className="max-w-xs mx-auto bg-white rounded-xl overflow-hidden shadow-md text-center p-4">
                    <h2 className="text-4xl font-bold text-gray-800">
                    30 <span className="text-gray-600" style={{ fontSize: "14pt" }}>USDT</span>
                    </h2>
                <p className="text-gray-600">Deposited</p>
                    </div>
                </div>

                <div className="w-full md:w-1/4 px-4">
                    <div className="max-w-xs mx-auto bg-white rounded-xl overflow-hidden shadow-md text-center p-4">
                        <h2 className="text-4xl font-bold text-gray-800">
                            30 <span className="text-gray-600" style={{ fontSize: "14pt" }}>USDT</span>
                        </h2>
                        <p className="text-gray-600">Withdrawn</p>
                    </div>
                </div>

                <div className="w-full md:w-1/4 px-4">
                    <div className="max-w-xs mx-auto bg-white rounded-xl overflow-hidden shadow-md text-center p-4">
                        <h2 className="text-4xl font-bold text-gray-800">3</h2>
                        <p className="text-gray-600">Blocked Cust</p>
                    </div>
                </div>
            </div>

            <h2 className="px-4 my-4">Today Stats</h2>
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/4 px-4">
                    <div className="max-w-xs mx-auto bg-white rounded-xl overflow-hidden shadow-md text-center p-4">
                    <h2 className="text-4xl font-bold text-gray-800">
                    30 <span className="text-gray-600" style={{ fontSize: "14pt" }}>USDT</span>
                    </h2>
                    <p className="text-gray-600">Deposit Request</p>
                    </div>
                </div>

                <div className="w-full md:w-1/4 px-4">
                    <div className="max-w-xs mx-auto bg-white rounded-xl overflow-hidden shadow-md text-center p-4">
                    <h2 className="text-4xl font-bold text-gray-800">
                    30 <span className="text-gray-600" style={{ fontSize: "14pt" }}>USDT</span>
                    </h2>
                <p className="text-gray-600">Pending Deposit</p>
                    </div>
                </div>

                <div className="w-full md:w-1/4 px-4">
                    <div className="max-w-xs mx-auto bg-white rounded-xl overflow-hidden shadow-md text-center p-4">
                        <h2 className="text-4xl font-bold text-gray-800">
                            30 <span className="text-gray-600" style={{ fontSize: "14pt" }}>USDT</span>
                        </h2>
                        <p className="text-gray-600">Withdraw Request</p>
                    </div>
                </div>

                <div className="w-full md:w-1/4 px-4">
                    <div className="max-w-xs mx-auto bg-white rounded-xl overflow-hidden shadow-md text-center p-4">
                    <h2 className="text-4xl font-bold text-gray-800">
                    30 <span className="text-gray-600" style={{ fontSize: "14pt" }}>USDT</span>
                </h2>
                <p className="text-gray-600">Pending Withdraw</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Dashboard;
