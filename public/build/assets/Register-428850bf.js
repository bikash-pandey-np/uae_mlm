import{a as k,r as s,u as S,B as r,j as e}from"./app-22b52879.js";import{g as x,h as p}from"./index-3732a86f.js";import{l as _}from"./capex_email_logo-cde0f7f6.js";/* empty css              *//* empty css            */import"./iconBase-1b6b2af8.js";const T=()=>{const{flash:a}=k().props,[h,j]=s.useState(!1),[t,v]=s.useState(!1),[d,m]=s.useState(!1),{data:n,setData:u,post:g,processing:c,errors:o}=S({email:"",full_name:"",password:"",password_confirmation:"",contact_number:"",country_code:"971",agree:!1}),f=()=>{j(!0)},l=i=>{const{name:N,value:C}=i.target;u(N,C)},y=i=>{i.preventDefault(),g(route("register"),n)},b=()=>{v(!t)},w=()=>{m(!d)};return s.useEffect(()=>{document.title="Register | TheCapex.pro";let i=null;return(a.success||a.error)&&(i&&r.dismiss(i),a.success?(i=r.success(a.success,{pauseOnHover:!1,autoClose:2e3}),u({email:"",full_name:"",password:"",password_confirmation:"",contact_number:"",country_code:"977",agree:!1})):a.error&&(i=r.error(a.error,{pauseOnHover:!1,autoClose:2e3}))),()=>{i&&r.dismiss(i)}},[a]),e.jsx("section",{children:e.jsxs("div",{className:"min-h-screen bg-gray-100 flex flex-col justify-center py-8 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"sm:mx-auto sm:w-full sm:max-w-md",children:[e.jsx("h2",{className:"text-center text-xl font-extrabold text-gray-900",children:e.jsx("a",{className:"flex justify-center items-center",href:route("v1.homepage"),children:e.jsx("img",{src:_,style:{height:"35px"}})})}),e.jsx("h2",{className:"text-center text-xl font-extrabold text-gray-900",children:"Register an Account"})]}),e.jsx("div",{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md",children:e.jsx("div",{className:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",children:e.jsxs("form",{onSubmit:y,className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email address"}),e.jsx("div",{className:"mt-1",children:e.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",onChange:l,value:n.email,className:"appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"})}),o.email&&e.jsx("p",{className:"mt-2 text-sm text-red-600",id:"email-error",children:o.email})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"full_name",className:"block text-sm font-medium text-gray-700",children:"Full Name"}),e.jsx("div",{className:"mt-1",children:e.jsx("input",{id:"full_name",name:"full_name",type:"text",autoComplete:"name",onChange:l,value:n.full_name,className:"appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"})}),o.full_name&&e.jsx("p",{className:"mt-2 text-sm text-red-600",id:"full_name-error",children:o.full_name})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),e.jsxs("div",{className:"mt-1 relative",children:[e.jsx("input",{id:"password",name:"password",type:t?"text":"password",onChange:l,value:n.password,className:"appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"}),e.jsx("button",{type:"button",className:"absolute inset-y-0 right-0 flex items-center px-2 text-gray-700",onClick:b,children:t?e.jsx(x,{}):e.jsx(p,{})})]}),o.password&&e.jsx("p",{className:"mt-2 text-sm text-red-600",id:"password-error",children:o.password})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"password_confirmation",className:"block text-sm font-medium text-gray-700",children:"Confirm Password"}),e.jsxs("div",{className:"mt-1 relative",children:[e.jsx("input",{id:"password_confirmation",name:"password_confirmation",type:d?"text":"password",onChange:l,value:n.password_confirmation,className:"appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"}),e.jsx("button",{type:"button",className:"absolute inset-y-0 right-0 flex items-center px-2 text-gray-700",onClick:w,children:d?e.jsx(x,{}):e.jsx(p,{})})]}),o.password_confirmation&&e.jsx("p",{className:"mt-2 text-sm text-red-600",id:"password-error",children:o.password_confirmation})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"country_code",className:"block text-sm font-medium text-gray-700",children:"Country Code"}),e.jsxs("div",{className:"mt-1 flex",children:[e.jsxs("select",{id:"country_code",name:"country_code",onChange:l,value:n.country_code,className:"appearance-none block w-1/4 px-3 py-2 border rounded-l-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",children:[e.jsx("option",{value:"1",children:"+1 (USA)"}),e.jsx("option",{value:"44",children:"+44 (UK)"}),e.jsx("option",{value:"61",children:"+61 (Australia)"}),e.jsx("option",{value:"81",children:"+81 (Japan)"}),e.jsx("option",{value:"49",children:"+49 (Germany)"}),e.jsx("option",{value:"33",children:"+33 (France)"}),e.jsx("option",{value:"39",children:"+39 (Italy)"}),e.jsx("option",{value:"86",children:"+86 (China)"}),e.jsx("option",{value:"7",children:"+7 (Russia)"}),e.jsx("option",{value:"34",children:"+34 (Spain)"}),e.jsx("option",{value:"55",children:"+55 (Brazil)"}),e.jsx("option",{value:"27",children:"+27 (South Africa)"}),e.jsx("option",{value:"82",children:"+82 (South Korea)"}),e.jsx("option",{value:"91",children:"+91 (India)"}),e.jsx("option",{value:"62",children:"+62 (Indonesia)"}),e.jsx("option",{value:"52",children:"+52 (Mexico)"}),e.jsx("option",{value:"60",children:"+60 (Malaysia)"}),e.jsx("option",{value:"65",children:"+65 (Singapore)"}),e.jsx("option",{value:"66",children:"+66 (Thailand)"}),e.jsx("option",{value:"90",children:"+90 (Turkey)"}),e.jsx("option",{value:"98",children:"+98 (Iran)"}),e.jsx("option",{value:"20",children:"+20 (Egypt)"}),e.jsx("option",{value:"31",children:"+31 (Netherlands)"}),e.jsx("option",{value:"32",children:"+32 (Belgium)"}),e.jsx("option",{value:"46",children:"+46 (Sweden)"}),e.jsx("option",{value:"47",children:"+47 (Norway)"}),e.jsx("option",{value:"48",children:"+48 (Poland)"}),e.jsx("option",{value:"30",children:"+30 (Greece)"}),e.jsx("option",{value:"351",children:"+351 (Portugal)"}),e.jsx("option",{value:"353",children:"+353 (Ireland)"}),e.jsx("option",{value:"354",children:"+354 (Iceland)"}),e.jsx("option",{value:"358",children:"+358 (Finland)"}),e.jsx("option",{value:"420",children:"+420 (Czech Republic)"}),e.jsx("option",{value:"421",children:"+421 (Slovakia)"}),e.jsx("option",{value:"36",children:"+36 (Hungary)"}),e.jsx("option",{value:"40",children:"+40 (Romania)"}),e.jsx("option",{value:"43",children:"+43 (Austria)"}),e.jsx("option",{value:"45",children:"+45 (Denmark)"}),e.jsx("option",{value:"48",children:"+48 (Poland)"}),e.jsx("option",{value:"64",children:"+64 (New Zealand)"}),e.jsx("option",{value:"92",children:"+92 (Pakistan)"}),e.jsx("option",{value:"94",children:"+94 (Sri Lanka)"}),e.jsx("option",{value:"95",children:"+95 (Myanmar)"}),e.jsx("option",{value:"98",children:"+98 (Iran)"}),e.jsx("option",{value:"212",children:"+212 (Morocco)"}),e.jsx("option",{value:"213",children:"+213 (Algeria)"}),e.jsx("option",{value:"216",children:"+216 (Tunisia)"}),e.jsx("option",{value:"218",children:"+218 (Libya)"}),e.jsx("option",{value:"220",children:"+220 (Gambia)"}),e.jsx("option",{value:"221",children:"+221 (Senegal)"}),e.jsx("option",{value:"222",children:"+222 (Mauritania)"}),e.jsx("option",{value:"223",children:"+223 (Mali)"}),e.jsx("option",{value:"224",children:"+224 (Guinea)"}),e.jsx("option",{value:"225",children:"+225 (Ivory Coast)"}),e.jsx("option",{value:"226",children:"+226 (Burkina Faso)"}),e.jsx("option",{value:"227",children:"+227 (Niger)"}),e.jsx("option",{value:"228",children:"+228 (Togo)"}),e.jsx("option",{value:"229",children:"+229 (Benin)"}),e.jsx("option",{value:"230",children:"+230 (Mauritius)"}),e.jsx("option",{value:"231",children:"+231 (Liberia)"}),e.jsx("option",{value:"232",children:"+232 (Sierra Leone)"}),e.jsx("option",{value:"233",children:"+233 (Ghana)"}),e.jsx("option",{value:"234",children:"+234 (Nigeria)"}),e.jsx("option",{value:"235",children:"+235 (Chad)"}),e.jsx("option",{value:"236",children:"+236 (Central African Republic)"}),e.jsx("option",{value:"237",children:"+237 (Cameroon)"}),e.jsx("option",{value:"238",children:"+238 (Cape Verde)"}),e.jsx("option",{value:"239",children:"+239 (Sao Tome and Principe)"}),e.jsx("option",{value:"240",children:"+240 (Equatorial Guinea)"}),e.jsx("option",{value:"241",children:"+241 (Gabon)"}),e.jsx("option",{value:"242",children:"+242 (Congo)"}),e.jsx("option",{value:"243",children:"+243 (Democratic Republic of the Congo)"}),e.jsx("option",{value:"244",children:"+244 (Angola)"}),e.jsx("option",{value:"245",children:"+245 (Guinea-Bissau)"}),e.jsx("option",{value:"246",children:"+246 (British Indian Ocean Territory)"}),e.jsx("option",{value:"248",children:"+248 (Seychelles)"}),e.jsx("option",{value:"249",children:"+249 (Sudan)"}),e.jsx("option",{value:"250",children:"+250 (Rwanda)"}),e.jsx("option",{value:"251",children:"+251 (Ethiopia)"}),e.jsx("option",{value:"252",children:"+252 (Somalia)"}),e.jsx("option",{value:"253",children:"+253 (Djibouti)"}),e.jsx("option",{value:"254",children:"+254 (Kenya)"}),e.jsx("option",{value:"255",children:"+255 (Tanzania)"}),e.jsx("option",{value:"256",children:"+256 (Uganda)"}),e.jsx("option",{value:"257",children:"+257 (Burundi)"}),e.jsx("option",{value:"258",children:"+258 (Mozambique)"}),e.jsx("option",{value:"260",children:"+260 (Zambia)"}),e.jsx("option",{value:"261",children:"+261 (Madagascar)"}),e.jsx("option",{value:"262",children:"+262 (Reunion)"}),e.jsx("option",{value:"263",children:"+263 (Zimbabwe)"}),e.jsx("option",{value:"264",children:"+264 (Namibia)"}),e.jsx("option",{value:"265",children:"+265 (Malawi)"}),e.jsx("option",{value:"266",children:"+266 (Lesotho)"}),e.jsx("option",{value:"267",children:"+267 (Botswana)"}),e.jsx("option",{value:"268",children:"+268 (Swaziland)"}),e.jsx("option",{value:"269",children:"+269 (Comoros)"}),e.jsx("option",{value:"290",children:"+290 (Saint Helena)"}),e.jsx("option",{value:"291",children:"+291 (Eritrea)"}),e.jsx("option",{value:"297",children:"+297 (Aruba)"}),e.jsx("option",{value:"298",children:"+298 (Faroe Islands)"}),e.jsx("option",{value:"299",children:"+299 (Greenland)"}),e.jsx("option",{value:"350",children:"+350 (Gibraltar)"}),e.jsx("option",{value:"351",children:"+351 (Portugal)"}),e.jsx("option",{value:"352",children:"+352 (Luxembourg)"}),e.jsx("option",{value:"353",children:"+353 (Ireland)"}),e.jsx("option",{value:"354",children:"+354 (Iceland)"}),e.jsx("option",{value:"355",children:"+355 (Albania)"}),e.jsx("option",{value:"356",children:"+356 (Malta)"}),e.jsx("option",{value:"357",children:"+357 (Cyprus)"}),e.jsx("option",{value:"358",children:"+358 (Finland)"}),e.jsx("option",{value:"359",children:"+359 (Bulgaria)"}),e.jsx("option",{value:"370",children:"+370 (Lithuania)"}),e.jsx("option",{value:"371",children:"+371 (Latvia)"}),e.jsx("option",{value:"372",children:"+372 (Estonia)"}),e.jsx("option",{value:"373",children:"+373 (Moldova)"}),e.jsx("option",{value:"374",children:"+374 (Armenia)"}),e.jsx("option",{value:"375",children:"+375 (Belarus)"}),e.jsx("option",{value:"376",children:"+376 (Andorra)"}),e.jsx("option",{value:"377",children:"+377 (Monaco)"}),e.jsx("option",{value:"378",children:"+378 (San Marino)"}),e.jsx("option",{value:"380",children:"+380 (Ukraine)"}),e.jsx("option",{value:"381",children:"+381 (Serbia)"}),e.jsx("option",{value:"382",children:"+382 (Montenegro)"}),e.jsx("option",{value:"383",children:"+383 (Kosovo)"}),e.jsx("option",{value:"385",children:"+385 (Croatia)"}),e.jsx("option",{value:"386",children:"+386 (Slovenia)"}),e.jsx("option",{value:"387",children:"+387 (Bosnia and Herzegovina)"}),e.jsx("option",{value:"389",children:"+389 (North Macedonia)"}),e.jsx("option",{value:"420",children:"+420 (Czech Republic)"}),e.jsx("option",{value:"421",children:"+421 (Slovakia)"}),e.jsx("option",{value:"423",children:"+423 (Liechtenstein)"}),e.jsx("option",{value:"500",children:"+500 (Falkland Islands)"}),e.jsx("option",{value:"501",children:"+501 (Belize)"}),e.jsx("option",{value:"502",children:"+502 (Guatemala)"}),e.jsx("option",{value:"503",children:"+503 (El Salvador)"}),e.jsx("option",{value:"504",children:"+504 (Honduras)"}),e.jsx("option",{value:"505",children:"+505 (Nicaragua)"}),e.jsx("option",{value:"506",children:"+506 (Costa Rica)"}),e.jsx("option",{value:"507",children:"+507 (Panama)"}),e.jsx("option",{value:"508",children:"+508 (Saint Pierre and Miquelon)"}),e.jsx("option",{value:"509",children:"+509 (Haiti)"}),e.jsx("option",{value:"590",children:"+590 (Guadeloupe)"}),e.jsx("option",{value:"591",children:"+591 (Bolivia)"}),e.jsx("option",{value:"592",children:"+592 (Guyana)"}),e.jsx("option",{value:"593",children:"+593 (Ecuador)"}),e.jsx("option",{value:"594",children:"+594 (French Guiana)"}),e.jsx("option",{value:"595",children:"+595 (Paraguay)"}),e.jsx("option",{value:"596",children:"+596 (Martinique)"}),e.jsx("option",{value:"597",children:"+597 (Suriname)"}),e.jsx("option",{value:"598",children:"+598 (Uruguay)"}),e.jsx("option",{value:"599",children:"+599 (Netherlands Antilles)"}),e.jsx("option",{value:"670",children:"+670 (East Timor)"}),e.jsx("option",{value:"672",children:"+672 (Norfolk Island)"}),e.jsx("option",{value:"673",children:"+673 (Brunei)"}),e.jsx("option",{value:"674",children:"+674 (Nauru)"}),e.jsx("option",{value:"675",children:"+675 (Papua New Guinea)"}),e.jsx("option",{value:"676",children:"+676 (Tonga)"}),e.jsx("option",{value:"677",children:"+677 (Solomon Islands)"}),e.jsx("option",{value:"678",children:"+678 (Vanuatu)"}),e.jsx("option",{value:"679",children:"+679 (Fiji)"}),e.jsx("option",{value:"680",children:"+680 (Palau)"}),e.jsx("option",{value:"681",children:"+681 (Wallis and Futuna)"}),e.jsx("option",{value:"682",children:"+682 (Cook Islands)"}),e.jsx("option",{value:"683",children:"+683 (Niue)"}),e.jsx("option",{value:"685",children:"+685 (Samoa)"}),e.jsx("option",{value:"686",children:"+686 (Kiribati)"}),e.jsx("option",{value:"687",children:"+687 (New Caledonia)"}),e.jsx("option",{value:"688",children:"+688 (Tuvalu)"}),e.jsx("option",{value:"689",children:"+689 (French Polynesia)"}),e.jsx("option",{value:"690",children:"+690 (Tokelau)"}),e.jsx("option",{value:"691",children:"+691 (Micronesia)"}),e.jsx("option",{value:"692",children:"+692 (Marshall Islands)"}),e.jsx("option",{value:"850",children:"+850 (North Korea)"}),e.jsx("option",{value:"852",children:"+852 (Hong Kong)"}),e.jsx("option",{value:"853",children:"+853 (Macau)"}),e.jsx("option",{value:"855",children:"+855 (Cambodia)"}),e.jsx("option",{value:"856",children:"+856 (Laos)"}),e.jsx("option",{value:"880",children:"+880 (Bangladesh)"}),e.jsx("option",{value:"886",children:"+886 (Taiwan)"}),e.jsx("option",{value:"960",children:"+960 (Maldives)"}),e.jsx("option",{value:"961",children:"+961 (Lebanon)"}),e.jsx("option",{value:"962",children:"+962 (Jordan)"}),e.jsx("option",{value:"963",children:"+963 (Syria)"}),e.jsx("option",{value:"964",children:"+964 (Iraq)"}),e.jsx("option",{value:"965",children:"+965 (Kuwait)"}),e.jsx("option",{value:"966",children:"+966 (Saudi Arabia)"}),e.jsx("option",{value:"967",children:"+967 (Yemen)"}),e.jsx("option",{value:"968",children:"+968 (Oman)"}),e.jsx("option",{value:"971",children:"+971 (United Arab Emirates)"}),e.jsx("option",{value:"972",children:"+972 (Israel)"}),e.jsx("option",{value:"973",children:"+973 (Bahrain)"}),e.jsx("option",{value:"974",children:"+974 (Qatar)"}),e.jsx("option",{value:"975",children:"+975 (Bhutan)"}),e.jsx("option",{value:"976",children:"+976 (Mongolia)"}),e.jsx("option",{value:"977",children:"+977 (Nepal)"}),e.jsx("option",{value:"992",children:"+992 (Tajikistan)"}),e.jsx("option",{value:"993",children:"+993 (Turkmenistan)"}),e.jsx("option",{value:"994",children:"+994 (Azerbaijan)"}),e.jsx("option",{value:"995",children:"+995 (Georgia)"}),e.jsx("option",{value:"996",children:"+996 (Kyrgyzstan)"}),e.jsx("option",{value:"998",children:"+998 (Uzbekistan)"})]}),e.jsx("input",{id:"phone_number",name:"contact_number",type:"text",onChange:l,value:n.contact_number,className:"appearance-none block w-3/4 px-3 py-2 border rounded-r-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"})]}),o.contact_number&&e.jsx("p",{className:"mt-2 text-sm text-red-600",id:"phone_number-error",children:o.contact_number})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",className:"form-checkbox",name:"agree",checked:n.agree,onChange:l}),e.jsx("span",{className:"ml-2 text-sm text-gray-600 register_policy_txt",children:h?e.jsx("div",{className:"ml-2 text-sm text-gray-600 register_policy_txt",children:"You confirm you are over 18 years of age. To improve your trading experience, we would like to notify you of market events and product updates. We will also use your registration data to optimise our marketing campaigns. You can manage and amend your preferences in the Notifications and Privacy Settings tabs. For more information, please see our Privacy Policy."}):e.jsxs("div",{className:"ml-2 text-sm text-gray-600 register_policy_txt",children:["You confirm you are over 18 years of age. To improve your trading experience, we would like to notify you of market events and product updates.",e.jsx("button",{className:"text-indigo-600 hover:underline",onClick:f,children:"See more"})]})})]}),o.agree&&e.jsx("p",{className:"mt-2 text-sm text-red-600",id:"agree-error",children:o.agree})]}),e.jsx("div",{children:e.jsx("button",{type:"submit",disabled:c||!n.agree,className:`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${c||!n.agree?"opacity-50 cursor-not-allowed":""}`,children:c?"Processing...":"Register"})}),e.jsx("div",{className:"bg-white p-4 shadow-md rounded-md mt-4 hover:bg-gray-300 hover:cursor-pointer",children:e.jsx("ul",{children:e.jsxs("li",{children:["Already Registered?",e.jsx("a",{href:route("login"),className:"ml-4 rounded px-4 py-2 text-white",style:{background:"#fe4948"},children:"Login"})]})})})]})})})]})})};export{T as default};
