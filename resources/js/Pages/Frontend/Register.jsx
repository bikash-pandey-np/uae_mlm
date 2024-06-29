import React, { useState, useEffect } from 'react';
import { useForm, usePage } from '@inertiajs/inertia-react';
import { toast } from 'react-toastify';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import logo from '../../../images/capex_email_logo.svg'
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
        country_code: '971',
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
        document.title = "Register | TheCapex.pro";

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
            <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-8 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="text-center text-xl font-extrabold text-gray-900">
                <a className="flex justify-center items-center"
                href={route('v1.homepage')}
                
                >
                    <img src={logo} style={{ height: '35px' }} />
                </a>
            </h2>
                    
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
                                       
                                        <option value="1">+1 (USA)</option>
                                        <option value="44">+44 (UK)</option>
                                        <option value="61">+61 (Australia)</option>
                                        <option value="81">+81 (Japan)</option>
                                        <option value="49">+49 (Germany)</option>
                                        <option value="33">+33 (France)</option>
                                        <option value="39">+39 (Italy)</option>
                                        <option value="86">+86 (China)</option>
                                        <option value="7">+7 (Russia)</option>
                                        <option value="34">+34 (Spain)</option>
                                        <option value="55">+55 (Brazil)</option>
                                        <option value="27">+27 (South Africa)</option>
                                        <option value="82">+82 (South Korea)</option>
                                        <option value="91">+91 (India)</option>
                                        <option value="62">+62 (Indonesia)</option>
                                        <option value="52">+52 (Mexico)</option>
                                        <option value="60">+60 (Malaysia)</option>
                                        <option value="65">+65 (Singapore)</option>
                                        <option value="66">+66 (Thailand)</option>
                                        <option value="90">+90 (Turkey)</option>
                                        <option value="98">+98 (Iran)</option>
                                        <option value="20">+20 (Egypt)</option>
                                        <option value="31">+31 (Netherlands)</option>
                                        <option value="32">+32 (Belgium)</option>
                                        <option value="46">+46 (Sweden)</option>
                                        <option value="47">+47 (Norway)</option>
                                        <option value="48">+48 (Poland)</option>
                                        <option value="30">+30 (Greece)</option>
                                        <option value="351">+351 (Portugal)</option>
                                        <option value="353">+353 (Ireland)</option>
                                        <option value="354">+354 (Iceland)</option>
                                        <option value="358">+358 (Finland)</option>
                                        <option value="420">+420 (Czech Republic)</option>
                                        <option value="421">+421 (Slovakia)</option>
                                        <option value="36">+36 (Hungary)</option>
                                        <option value="40">+40 (Romania)</option>
                                        <option value="43">+43 (Austria)</option>
                                        <option value="45">+45 (Denmark)</option>
                                        <option value="48">+48 (Poland)</option>
                                        <option value="64">+64 (New Zealand)</option>
                                        <option value="92">+92 (Pakistan)</option>
                                        <option value="94">+94 (Sri Lanka)</option>
                                        <option value="95">+95 (Myanmar)</option>
                                        <option value="98">+98 (Iran)</option>
                                        <option value="212">+212 (Morocco)</option>
                                        <option value="213">+213 (Algeria)</option>
                                        <option value="216">+216 (Tunisia)</option>
                                        <option value="218">+218 (Libya)</option>
                                        <option value="220">+220 (Gambia)</option>
                                        <option value="221">+221 (Senegal)</option>
                                        <option value="222">+222 (Mauritania)</option>
                                        <option value="223">+223 (Mali)</option>
                                        <option value="224">+224 (Guinea)</option>
                                        <option value="225">+225 (Ivory Coast)</option>
                                        <option value="226">+226 (Burkina Faso)</option>
                                        <option value="227">+227 (Niger)</option>
                                        <option value="228">+228 (Togo)</option>
                                        <option value="229">+229 (Benin)</option>
                                        <option value="230">+230 (Mauritius)</option>
                                        <option value="231">+231 (Liberia)</option>
                                        <option value="232">+232 (Sierra Leone)</option>
                                        <option value="233">+233 (Ghana)</option>
                                        <option value="234">+234 (Nigeria)</option>
                                        <option value="235">+235 (Chad)</option>
                                        <option value="236">+236 (Central African Republic)</option>
                                        <option value="237">+237 (Cameroon)</option>
                                        <option value="238">+238 (Cape Verde)</option>
                                        <option value="239">+239 (Sao Tome and Principe)</option>
                                        <option value="240">+240 (Equatorial Guinea)</option>
                                        <option value="241">+241 (Gabon)</option>
                                        <option value="242">+242 (Congo)</option>
                                        <option value="243">+243 (Democratic Republic of the Congo)</option>
                                        <option value="244">+244 (Angola)</option>
                                        <option value="245">+245 (Guinea-Bissau)</option>
                                        <option value="246">+246 (British Indian Ocean Territory)</option>
                                        <option value="248">+248 (Seychelles)</option>
                                        <option value="249">+249 (Sudan)</option>
                                        <option value="250">+250 (Rwanda)</option>
                                        <option value="251">+251 (Ethiopia)</option>
                                        <option value="252">+252 (Somalia)</option>
                                        <option value="253">+253 (Djibouti)</option>
                                        <option value="254">+254 (Kenya)</option>
                                        <option value="255">+255 (Tanzania)</option>
                                        <option value="256">+256 (Uganda)</option>
                                        <option value="257">+257 (Burundi)</option>
                                        <option value="258">+258 (Mozambique)</option>
                                        <option value="260">+260 (Zambia)</option>
                                        <option value="261">+261 (Madagascar)</option>
                                        <option value="262">+262 (Reunion)</option>
                                        <option value="263">+263 (Zimbabwe)</option>
                                        <option value="264">+264 (Namibia)</option>
                                        <option value="265">+265 (Malawi)</option>
                                        <option value="266">+266 (Lesotho)</option>
                                        <option value="267">+267 (Botswana)</option>
                                        <option value="268">+268 (Swaziland)</option>
                                        <option value="269">+269 (Comoros)</option>
                                        <option value="290">+290 (Saint Helena)</option>
                                        <option value="291">+291 (Eritrea)</option>
                                        <option value="297">+297 (Aruba)</option>
                                        <option value="298">+298 (Faroe Islands)</option>
                                        <option value="299">+299 (Greenland)</option>
                                        <option value="350">+350 (Gibraltar)</option>
                                        <option value="351">+351 (Portugal)</option>
                                        <option value="352">+352 (Luxembourg)</option>
                                        <option value="353">+353 (Ireland)</option>
                                        <option value="354">+354 (Iceland)</option>
                                        <option value="355">+355 (Albania)</option>
                                        <option value="356">+356 (Malta)</option>
                                        <option value="357">+357 (Cyprus)</option>
                                        <option value="358">+358 (Finland)</option>
                                        <option value="359">+359 (Bulgaria)</option>
                                        <option value="370">+370 (Lithuania)</option>
                                        <option value="371">+371 (Latvia)</option>
                                        <option value="372">+372 (Estonia)</option>
                                        <option value="373">+373 (Moldova)</option>
                                        <option value="374">+374 (Armenia)</option>
                                        <option value="375">+375 (Belarus)</option>
                                        <option value="376">+376 (Andorra)</option>
                                        <option value="377">+377 (Monaco)</option>
                                        <option value="378">+378 (San Marino)</option>
                                        <option value="380">+380 (Ukraine)</option>
                                        <option value="381">+381 (Serbia)</option>
                                        <option value="382">+382 (Montenegro)</option>
                                        <option value="383">+383 (Kosovo)</option>
                                        <option value="385">+385 (Croatia)</option>
                                        <option value="386">+386 (Slovenia)</option>
                                        <option value="387">+387 (Bosnia and Herzegovina)</option>
                                        <option value="389">+389 (North Macedonia)</option>
                                        <option value="420">+420 (Czech Republic)</option>
                                        <option value="421">+421 (Slovakia)</option>
                                        <option value="423">+423 (Liechtenstein)</option>
                                        <option value="500">+500 (Falkland Islands)</option>
                                        <option value="501">+501 (Belize)</option>
                                        <option value="502">+502 (Guatemala)</option>
                                        <option value="503">+503 (El Salvador)</option>
                                        <option value="504">+504 (Honduras)</option>
                                        <option value="505">+505 (Nicaragua)</option>
                                        <option value="506">+506 (Costa Rica)</option>
                                        <option value="507">+507 (Panama)</option>
                                        <option value="508">+508 (Saint Pierre and Miquelon)</option>
                                        <option value="509">+509 (Haiti)</option>
                                        <option value="590">+590 (Guadeloupe)</option>
                                        <option value="591">+591 (Bolivia)</option>
                                        <option value="592">+592 (Guyana)</option>
                                        <option value="593">+593 (Ecuador)</option>
                                        <option value="594">+594 (French Guiana)</option>
                                        <option value="595">+595 (Paraguay)</option>
                                        <option value="596">+596 (Martinique)</option>
                                        <option value="597">+597 (Suriname)</option>
                                        <option value="598">+598 (Uruguay)</option>
                                        <option value="599">+599 (Netherlands Antilles)</option>
                                        <option value="670">+670 (East Timor)</option>
                                        <option value="672">+672 (Norfolk Island)</option>
                                        <option value="673">+673 (Brunei)</option>
                                        <option value="674">+674 (Nauru)</option>
                                        <option value="675">+675 (Papua New Guinea)</option>
                                        <option value="676">+676 (Tonga)</option>
                                        <option value="677">+677 (Solomon Islands)</option>
                                        <option value="678">+678 (Vanuatu)</option>
                                        <option value="679">+679 (Fiji)</option>
                                        <option value="680">+680 (Palau)</option>
                                        <option value="681">+681 (Wallis and Futuna)</option>
                                        <option value="682">+682 (Cook Islands)</option>
                                        <option value="683">+683 (Niue)</option>
                                        <option value="685">+685 (Samoa)</option>
                                        <option value="686">+686 (Kiribati)</option>
                                        <option value="687">+687 (New Caledonia)</option>
                                        <option value="688">+688 (Tuvalu)</option>
                                        <option value="689">+689 (French Polynesia)</option>
                                        <option value="690">+690 (Tokelau)</option>
                                        <option value="691">+691 (Micronesia)</option>
                                        <option value="692">+692 (Marshall Islands)</option>
                                        <option value="850">+850 (North Korea)</option>
                                        <option value="852">+852 (Hong Kong)</option>
                                        <option value="853">+853 (Macau)</option>
                                        <option value="855">+855 (Cambodia)</option>
                                        <option value="856">+856 (Laos)</option>
                                        <option value="880">+880 (Bangladesh)</option>
                                        <option value="886">+886 (Taiwan)</option>
                                        <option value="960">+960 (Maldives)</option>
                                        <option value="961">+961 (Lebanon)</option>
                                        <option value="962">+962 (Jordan)</option>
                                        <option value="963">+963 (Syria)</option>
                                        <option value="964">+964 (Iraq)</option>
                                        <option value="965">+965 (Kuwait)</option>
                                        <option value="966">+966 (Saudi Arabia)</option>
                                        <option value="967">+967 (Yemen)</option>
                                        <option value="968">+968 (Oman)</option>
                                        <option value="971">+971 (United Arab Emirates)</option>
                                        <option value="972">+972 (Israel)</option>
                                        <option value="973">+973 (Bahrain)</option>
                                        <option value="974">+974 (Qatar)</option>
                                        <option value="975">+975 (Bhutan)</option>
                                        <option value="976">+976 (Mongolia)</option>
                                        <option value="977">+977 (Nepal)</option>
                                        <option value="992">+992 (Tajikistan)</option>
                                        <option value="993">+993 (Turkmenistan)</option>
                                        <option value="994">+994 (Azerbaijan)</option>
                                        <option value="995">+995 (Georgia)</option>
                                        <option value="996">+996 (Kyrgyzstan)</option>
                                        <option value="998">+998 (Uzbekistan)</option>
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
                            <div className="bg-white p-4 shadow-md rounded-md mt-4 hover:bg-gray-300 hover:cursor-pointer">
                            <ul>
                                <li>
                                    Already Registered? 
                                    <a href={route('login')}
                                        className='ml-4 rounded px-4 py-2 text-white'
                                        style={{ background: '#fe4948' }}
                                        >Login</a>
                                </li>
                               
                            </ul>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegisterPage;
