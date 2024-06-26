// Layout.js
import React, { useState, useEffect } from 'react';
import TopMenu from './TopMenu';
import BottomMenu from './BottomMenu';

const Layout = ({ children }) => {
    const [mode, setMode] = useState('Dark');

    useEffect(() => {
        const storedMode = localStorage.getItem('mode');
        if (storedMode) {
            setMode(storedMode);
        }
    }, []);

    const toggleMode = () => {
        const newMode = mode === 'Dark' ? 'Light' : 'Dark';
        setMode(newMode);
        localStorage.setItem('mode', newMode);
    };

    return (
        <div className={`app_layout`}>
            <TopMenu mode={mode} toggleMode={toggleMode} />
            <div className="mx-4 my-2">
                {children}
            </div>
            <BottomMenu mode={mode} />
        </div>
    );
};

export default Layout;
