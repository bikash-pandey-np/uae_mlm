import{a as d,u,r as x,B as a,j as e}from"./app-145e20ba.js";import{l as p}from"./capex_email_logo-cde0f7f6.js";/* empty css              *//* empty css            */const b=()=>{const{flash:t,email:i}=d().props;console.log("email",i);const{data:o,setData:m,post:n,processing:l,errors:r}=u({email:i,otp:""}),c=s=>{s.preventDefault(),console.log("data",o),n(route("verify"),o)};return x.useEffect(()=>{document.title="Login | TheCapex.pro";let s=null;return(t.success||t.error)&&(s&&a.dismiss(s),t.success?s=a.success(t.success,{pauseOnHover:!1,autoClose:2e3}):t.error&&(s=a.error(t.error,{pauseOnHover:!1,autoClose:2e3}))),()=>{s&&a.dismiss(s)}},[t]),e.jsx("section",{children:e.jsxs("div",{className:"min-h-screen bg-gray-100 flex flex-col justify-center py-1 sm:px-6 lg:px-8 mx-auto",children:[e.jsxs("div",{className:"sm:mx-auto sm:w-full sm:max-w-md",children:[e.jsx("h2",{className:"text-center text-xl font-extrabold text-gray-900",children:e.jsx("a",{className:"flex justify-center items-center",href:route("v1.homepage"),children:e.jsx("img",{src:p,style:{height:"35px"}})})}),e.jsx("h2",{className:"text-center text-xl font-extrabold text-gray-900",children:"Verify Your Account"})]}),e.jsx("div",{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md",children:e.jsx("div",{className:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",children:e.jsxs("form",{onSubmit:c,className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email address"}),e.jsx("div",{className:"mt-1",children:e.jsx("input",{disabled:!0,id:"email",name:"email",type:"email",autoComplete:"email",defaultValue:o.email,className:"appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"})})]}),r.email&&e.jsx("p",{className:"mt-2 text-sm text-red-600",id:"email-error",children:r.email}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"OTP"}),e.jsx("div",{className:"mt-1",children:e.jsx("input",{id:"number",name:"otp",type:"text",value:o.otp,onChange:s=>m("otp",s.target.value),className:"appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"})})]}),r.otp&&e.jsx("p",{className:"mt-2 text-sm text-red-600",id:"email-error",children:r.otp}),e.jsx("div",{children:e.jsx("button",{type:"submit",disabled:l,className:`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${l?"opacity-50 cursor-not-allowed":""}`,children:l?"Processing...":"Verify"})})]})})})]})})};export{b as default};
