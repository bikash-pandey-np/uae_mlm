import{r,j as t}from"./app-22b52879.js";import c from"./TopMenu-c78dbfae.js";import d from"./BottomMenu-fef6ca4e.js";/* empty css            */import"./index-3732a86f.js";import"./iconBase-1b6b2af8.js";const f=({children:a})=>{const[e,s]=r.useState("Dark");r.useEffect(()=>{const o=localStorage.getItem("mode");o&&s(o)},[]);const m=()=>{const o=e==="Dark"?"Light":"Dark";s(o),localStorage.setItem("mode",o)};return t.jsxs("div",{className:"app_layout",children:[t.jsx(c,{mode:e,toggleMode:m}),t.jsx("div",{className:"mx-4 my-2",children:a}),t.jsx(d,{mode:e})]})};export{f as default};