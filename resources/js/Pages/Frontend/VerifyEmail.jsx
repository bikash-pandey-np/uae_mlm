import React, { useState, useEffect } from 'react';
import { useForm, usePage } from '@inertiajs/inertia-react';
import MenuBar from './Components/MenuBar';
import { toast } from 'react-toastify';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import '../../../css/app/front.css';

const VerifyEmail = () => {
    const { flash, email } = usePage().props;
    console.log('email', email);
    const { data, setData, post, processing, errors } = useForm({
        email: email,
        otp: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('data', data);
        // post(route('login'), data);
    };

  

    useEffect(() => {
        document.title = "Login | TheCapex.pro";

        let toastId = null;

        if (flash.success || flash.error) {
            if (toastId) {
                toast.dismiss(toastId);
            }

            if (flash.success) {
                toastId = toast.success(flash.success, {pauseOnHover: false, autoClose:2000});
               
            } else if (flash.error) {
                toastId = toast.error(flash.error, {pauseOnHover: false, autoClose:2000});
            }
        }

        return () => {
            if (toastId) {
                toast.dismiss(toastId);
            }
        };
    }, [flash]);

    return (
        <section>
            <MenuBar />
            <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-1 sm:px-6 lg:px-8 mx-auto">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="text-center text-xl font-extrabold text-gray-900">Verify Your Account</h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form onSubmit={handleSubmit} className="space-y-6">

                            {/* Email field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                    disabled
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        defaultValue={data.email}
                                        className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                              {/* OTP*/}
                              <div>
                              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                  OTP
                              </label>
                              <div className="mt-1">
                                  <input
                                      id="number"
                                      name="otp"
                                      type="number"
                                      value={data.otp}
                                      onChange={(e) => setData('otp', e.target.value)}
                                      className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                  />
                              </div>
                          </div>
                         

                            {/* Submit button */}
                            <div>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${processing ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    {processing ? 'Processing...' : 'Verify'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VerifyEmail;
