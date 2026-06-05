import React from 'react'
import {StyleFooterContainer, StyleName} from "./style.jsx";
import {GiGuitarHead} from "react-icons/gi";

export const Footer = () => {
    return (
        <>
            <StyleFooterContainer>
                <StyleName>Yuri Martins</StyleName>
                <GiGuitarHead color={'#c9c7c7'} size={50}></GiGuitarHead>
            </StyleFooterContainer>
        </>
    )
}
