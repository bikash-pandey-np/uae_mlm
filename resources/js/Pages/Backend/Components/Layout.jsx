import React, { useState } from 'react';
import MenuBar from './MenuBar';

const Layout = ({ children }) => {
   

    return (
        <div className="h-screen bg-gray-100">
            <MenuBar />
            <main className="p-4">
                {children}
            </main>
        </div>
    );
};

export default Layout;
