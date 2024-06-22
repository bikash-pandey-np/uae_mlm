import React, { useEffect, useState } from 'react';
import { usePage } from '@inertiajs/inertia-react';

import MenuBar from './MenuBar';
import { toast } from 'react-toastify';

const Layout = ({ children }) => {

    const { flash } = usePage().props;

    useEffect(() => {
        document.title = "Deposit Account | TheCapex.pro";

        let toastId = null;

        if (flash.success || flash.error) {
            if (toastId) {
                toast.dismiss(toastId);
            }

            if (flash.success) {
                toastId = toast.success(flash.success, {
                    pauseOnHover: false, 
                    autoClose:2000,
                    onClose: () => window.location.reload()
                });
               
            } else if (flash.error) {
                toastId = toast.error(flash.error, {
                    pauseOnHover: false, 
                    autoClose:2000,
                    onClose: () => window.location.reload()
                });
            }
        }

        return () => {
            if (toastId) {
                toast.dismiss(toastId);
            }
        };
    }, [flash]);


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
