import React from 'react'
import {StyleCard, StyleDescriptionHome, StyleImage, StyleImgContainer, StyleName, StyleText} from "./style.jsx";


export const ProductCard = ({data}) => {
    return (
        <>
            {data.map((product, index) => (
                <StyleCard key={index}>
                    <StyleImgContainer>
                        <StyleImage src={product.image} alt="Produto"/>
                    </StyleImgContainer>
                    <StyleName>{product.name}</StyleName>
                    <StyleDescriptionHome>{product.description}</StyleDescriptionHome>
                    <StyleText>{product.model}</StyleText>
                    <StyleText>{product.color}</StyleText>

                </StyleCard>
            ))}
        </>
    )
}
