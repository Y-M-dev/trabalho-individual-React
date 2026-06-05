import React from 'react'
import {Routes, Route} from "react-router";
import {Home} from "../pages/Home/index.jsx";
import {Page404} from "../pages/Page404/index.jsx";
import {Product} from "../pages/Produto/index.jsx";
import {Layout} from "../components/Layout/index.jsx";

export const Routers = () => {
    return (
        <Routes>
            <Route element={<Layout></Layout>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/product/:id" element={<Product/>}/>
            </Route>
            <Route path="*" element={<Page404/>}/>
        </Routes>
    )
}
