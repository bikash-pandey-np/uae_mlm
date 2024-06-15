import{r as c,j as e}from"./app-761f72af.js";import x from"./Layout-2bc206c1.js";import m from"./PageHeader-0e7d821a.js";import h from"./Modal-174d8e51.js";import{A as b}from"./index-624eb413.js";/* empty css            */import"./MenuBar-4bb3d494.js";import"./iconBase-6df011ba.js";const _=({customers:l})=>{const[r,a]=c.useState(null),[s,n]=c.useState(null);console.log(l);const o=[{name:"Home",link:"/"},{name:"Customers",link:"/customers"}],d=t=>{a(t.id),n(t)},i=()=>{a(null),n(null)};return e.jsxs(x,{children:[e.jsx(m,{title:"Manage Customers",buttonLabel:"Add New",buttonLink:"/customers/create",breadcrumbItems:o}),e.jsxs("table",{className:"min-w-full divide-y divide-gray-200 mt-4",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-3 text-left font-bold text-gray-500 uppercase tracking-wider",children:"Full Name"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left font-bold text-gray-500 uppercase tracking-wider",children:"Email"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left font-bold text-gray-500 uppercase tracking-wider",children:"Customer Code"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left font-bold text-gray-500 uppercase tracking-wider",children:"Contact Number"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left font-bold text-gray-500 uppercase tracking-wider",children:"Action"})]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:l.map((t,p)=>e.jsxs("tr",{children:[e.jsxs("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-black-500",children:[t.full_name," - ",e.jsxs("b",{children:[t.balance," AED"]})]}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-black-500",children:t.email}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-black-500",children:t.customer_code}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-black-500",children:`+${t.country_code} ${t.contact_number}`}),e.jsxs("td",{className:"px-6 py-4 whitespace-nowrap text-md text-black-500",children:[e.jsx(b,{onClick:()=>d(t),className:"text-blue-500 hover:text-blue-700 cursor-pointer"}),e.jsx("br",{}),t.is_active?e.jsx("button",{class:"bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-sm",children:"Block"}):e.jsx("button",{class:"bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded text-sm",children:"UnBlock"})]})]},p))})]}),s&&e.jsxs(h,{isOpen:r===s.id,onClose:i,children:[e.jsxs("h1",{className:"font-bold mb-3",children:[s.full_name," Details"]}),e.jsxs("p",{children:["Balance: ",e.jsxs("span",{className:"font-bold",children:[s.balance," AED"]})]}),e.jsxs("p",{children:["Full Name: ",e.jsx("span",{className:"font-bold",children:s.full_name})]}),e.jsxs("p",{children:["Email: ",e.jsx("span",{className:"font-bold",children:s.email})]}),e.jsxs("p",{children:["Customer Code: ",e.jsx("span",{className:"font-bold",children:s.customer_code})]}),e.jsxs("p",{children:["Contact Number: ",e.jsx("span",{className:"font-bold",children:`+${s.country_code} ${s.contact_number}`})]}),e.jsx("br",{}),e.jsxs("p",{children:["Registered At: ",e.jsx("span",{className:"font-bold",children:s.created_at})]}),e.jsxs("p",{children:["Updated At: ",e.jsx("span",{className:"font-bold",children:s.updated_at})]}),e.jsx("br",{}),e.jsxs("p",{children:["Account Status: ",e.jsx("span",{className:"font-bold",children:s.is_active?"Active":"Inactive"})]}),e.jsxs("p",{children:["Is Verified: ",e.jsx("span",{className:"font-bold",children:s.is_verified?"Verified":"Not Verified"})]}),e.jsx("br",{}),e.jsxs("p",{children:["Profile Img: ",e.jsx("span",{className:"font-bold",children:s.profile_img})]}),e.jsxs("p",{children:["Doc Img: ",e.jsx("span",{className:"font-bold",children:s.doc_img})]})]})]})};export{_ as default};
