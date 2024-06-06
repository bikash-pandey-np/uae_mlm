import React, { useState, useEffect } from 'react';
import { useForm, usePage } from '@inertiajs/inertia-react';
import MenuBar from './Components/MenuBar';
import { toast } from 'react-toastify';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import '../../../css/app/front.css';

const RegisterPage = () => {
    const { flash } = usePage().props;

    const [showFullContent, setShowFullContent] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const { data, setData, post, processing, errors } = useForm({
        email: '',
        full_name: '',
        password: '',
        password_confirmation: '',
        contact_number: '',
        country_code: '977',
        agree: false
    });

    const handleSeeMoreClick = () => {
        setShowFullContent(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('register'), data);
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };
    useEffect(() => {
        let toastId = null;

        if (flash.success || flash.error) {
            if (toastId) {
                toast.dismiss(toastId);
            }

            if (flash.success) {
                toastId = toast.success(flash.success, {pauseOnHover: false, autoClose:2000,});
                setData({
                    email: '',
                    full_name: '',
                    password: '',
                    password_confirmation: '',
                    contact_number: '',
                    country_code: '977',
                    agree: false
                });
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

    return (
        <section>
            <MenuBar />
            <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-8 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="text-center text-xl font-extrabold text-gray-900">Register an Account</h2>
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
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        onChange={handleChange}
                                        value={data.email}
                                        className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                                {errors.email && (
                                    <p className="mt-2 text-sm text-red-600" id="email-error">{errors.email}</p>
                                )}
                            </div>
                            
                            {/* Full Name field */}
                            <div>
                                <label htmlFor="full_name" className="block text-sm font-medium text-gray-700">
                                    Full Name
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="full_name"
                                        name="full_name"
                                        type="text"
                                        autoComplete="name"
                                        onChange={handleChange}
                                        value={data.full_name}
                                        className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                                {errors.full_name && (
                                    <p className="mt-2 text-sm text-red-600" id="full_name-error">{errors.full_name}</p>
                                )}
                            </div>

                            {/* Password field */}
                            <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1 relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    onChange={handleChange}
                                    value={data.password}
                                    className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? (
                                        <AiOutlineEyeInvisible />
                                    ) : (
                                        <AiOutlineEye />
                                    )}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="mt-2 text-sm text-red-600" id="password-error">{errors.password}</p>
                            )}
                        </div>

                            {/* Confirm Password field */}
                            <div>
                <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700">
                    Confirm Password
                </label>
                <div className="mt-1 relative">
                    <input
                        id="password_confirmation"
                        name="password_confirmation"
                        type={showConfirmPassword ? "text" : "password"}
                        onChange={handleChange}
                        value={data.password_confirmation}
                        className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                        onClick={toggleConfirmPasswordVisibility}
                    >
                        {showConfirmPassword ? (
                            <AiOutlineEyeInvisible />
                        ) : (
                            <AiOutlineEye />
                        )}
                    </button>
                </div>
                {errors.password_confirmation && (
                    <p className="mt-2 text-sm text-red-600" id="password-error">{errors.password_confirmation}</p>
                )}
            </div>
                          

                            {/* Country Code and Phone Number fields */}
                            <div>
                                <label htmlFor="country_code" className="block text-sm font-medium text-gray-700">
                                    Country Code
                                </label>
                                <div className="mt-1 flex">
                                    <select
                                        id="country_code"
                                        name="country_code"
                                        onChange={handleChange}
                                        value={data.country_code}
                                        className="appearance-none block w-1/4 px-3 py-2 border rounded-l-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="977">+977</option>
                                        <option value="971">+971</option>
                                        <option value="91">+91</option>

                                        {/* Add options for country codes here */}
                                    </select>
                                    <input
                                        id="phone_number"
                                        name="contact_number"
                                        type="text"
                                        onChange={handleChange}
                                        value={data.contact_number}
                                        className="appearance-none block w-3/4 px-3 py-2 border rounded-r-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                                {/* Display error for phone_number */}
                                {errors.contact_number && (
                                    <p className="mt-2 text-sm text-red-600" id="phone_number-error">{errors.contact_number}</p>
                                )}
                            </div>

                            {/* Agreement field */}
                            <div>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox"
                                        name="agree"
                                        checked={data.agree}
                                        onChange={handleChange}
                                    />
                                    <span className="ml-2 text-sm text-gray-600 register_policy_txt">
                                        {showFullContent ? (
                                            <div className="ml-2 text-sm text-gray-600 register_policy_txt">
                                                You confirm you are over 18 years of age. To improve your trading experience, we would like to notify you of market events and product updates. We will also use your registration data to optimise our marketing campaigns. You can manage and amend your preferences in the Notifications and Privacy Settings tabs. For more information, please see our Privacy Policy.
                                            </div>
                                        ) : (
                                            <div className="ml-2 text-sm text-gray-600 register_policy_txt">
                                                You confirm you are over 18 years of age. To improve your trading experience, we would like to notify you of market events and product updates. 
                                                <button className="text-indigo-600 hover:underline" onClick={handleSeeMoreClick}>See more</button>
                                            </div>
                                        )}
                                    </span>
                                </label>
                                {errors.agree && (
                                    <p className="mt-2 text-sm text-red-600" id="agree-error">{errors.agree}</p>
                                )}
                            </div>

                            {/* Submit button */}
                            <div>
                                <button
                                    type="submit"
                                    disabled={processing || !data.agree}
                                    className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${processing || !data.agree ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    {processing ? 'Processing...' : 'Register'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegisterPage;
