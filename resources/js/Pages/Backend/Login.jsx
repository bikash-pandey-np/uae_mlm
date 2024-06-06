import React, { useEffect, useState } from 'react';
import { useForm, usePage } from '@inertiajs/inertia-react';
import { toast } from 'react-toastify';

const Login = () => {
    const { flash } = usePage().props;
    const { data, setData, post, errors } = useForm({
        email: 'admin@app.com',
        password: 'Nepal123',
    });

    useEffect(() => {
        let toastId = null;

        if (flash.success || flash.error) {
            if (toastId) {
                toast.dismiss(toastId);
            }

            if (flash.success) {
                toastId = toast.success(flash.success, {pauseOnHover: false, autoClose:2000,});
            } else if (flash.error) {
                toastId = toast.error(flash.error, {pauseOnHover: false, autoClose:2000,});
            }
        }

        return () => {
            if (toastId) {
                toast.dismiss(toastId);
            }
        };
    }, [flash]);

    const handleLogin = (e) => {
        e.preventDefault();
        post(route('admin.login'), data);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-teal-100">
            <div className="bg-white p-4 rounded shadow-md w-100">
                <h1 className="text-2xl font-semibold mb-4">Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        {errors.email && <div className="text-red-500">{errors.email}</div>}
                        <input
                            type="email"
                            id="email"
                            className="mt-1 p-2 border rounded w-full"
                            placeholder="Enter your email"
                            autoComplete="off"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 p-2 border rounded w-full"
                            placeholder="Enter your password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                        />
                        {errors.password && <div className="text-red-500">{errors.password}</div>}
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
