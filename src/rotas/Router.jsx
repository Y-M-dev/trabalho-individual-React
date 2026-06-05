import React from 'react'
import {Routes,Route} from "react-router";
import {Home} from "../pages/Home/index.jsx";
import {Page404} from "../pages/Page404/index.jsx";
import {Produto} from "../pages/Produto/index.jsx";

export const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/produto/:id" element={<Produto/>} />
            <Route path="*" element={<Page404/>} />
        </Routes>
    )
}
