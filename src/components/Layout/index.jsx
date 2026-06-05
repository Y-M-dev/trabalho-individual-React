import React from 'react'
import {Outlet} from "react-router";
import {Header} from "../Header/index.jsx";
import {Footer} from "../Footer/index.jsx";

export const Layout = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}
