import{r,j as t}from"./app-725808a5.js";import c from"./TopMenu-60321180.js";import d from"./BottomMenu-f4b104d9.js";/* empty css            */import"./index-96ab6593.js";import"./iconBase-d13172aa.js";const f=({children:a})=>{const[e,s]=r.useState("Dark");r.useEffect(()=>{const o=localStorage.getItem("mode");o&&s(o)},[]);const m=()=>{const o=e==="Dark"?"Light":"Dark";s(o),localStorage.setItem("mode",o)};return t.jsxs("div",{className:"app_layout",children:[t.jsx(c,{mode:e,toggleMode:m}),t.jsx("div",{className:"mx-4 my-2",children:a}),t.jsx(d,{mode:e})]})};export{f as default};