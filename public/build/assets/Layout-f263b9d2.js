import{r,j as t}from"./app-5fd90439.js";import c from"./TopMenu-e6fbe055.js";import d from"./BottomMenu-6c3bbf5e.js";/* empty css            */import"./index-dd9e70cf.js";import"./iconBase-474fee26.js";const f=({children:a})=>{const[e,s]=r.useState("Dark");r.useEffect(()=>{const o=localStorage.getItem("mode");o&&s(o)},[]);const m=()=>{const o=e==="Dark"?"Light":"Dark";s(o),localStorage.setItem("mode",o)};return t.jsxs("div",{className:"app_layout",children:[t.jsx(c,{mode:e,toggleMode:m}),t.jsx("div",{className:"mx-4 my-2",children:a}),t.jsx(d,{mode:e})]})};export{f as default};