import React, {useState} from 'react'
import {
    StyleButton,
    StyleCard, StyleDescriptionContainer, StyleDescriptionText,
    StyleImage,
    StyleImgContainer,
    StyleLink,
    StyleName,
    StyleText
} from "./style.jsx";
import {BsStar, BsStarFill} from "react-icons/bs";


export const ProductCard = ({data}) => {
    const [favoritos, setFavoritos] = useState(() => {
        const salvos = localStorage.getItem('favoritos');
        if (salvos) {
            return JSON.parse(salvos);
        } else
            return [];
    });
    const handleFavorito = (e, productId) => {
        e.preventDefault();
        e.stopPropagation();
        let novosFavoritos;
        if (favoritos.includes(productId)) {
            novosFavoritos = favoritos.filter(id => id !== productId);
        } else {
            novosFavoritos = [...favoritos, productId];
        }
        setFavoritos(novosFavoritos);
        localStorage.setItem('favoritos', JSON.stringify(novosFavoritos));
    }
    console.log("Array do LocalStorage:", favoritos);
    console.log("Tipo do ID no LocalStorage:", typeof favoritos[0]);
    console.log("Tipo do ID no seu dados.jsx:", typeof data[0]?.id);
    return (
        <>
            {data.map((product) => {
                const isFavorito = favoritos.includes(product.id);
                return (
                    <StyleLink to={`/product/${product.id}`} key={product.id}>
                        <StyleCard>
                            <StyleImgContainer>
                                <StyleImage src={product.image} alt="Produto"/>
                            </StyleImgContainer>
                            <StyleName>{product.name}</StyleName>
                            <StyleDescriptionContainer>
                                <StyleDescriptionText>{product.description}</StyleDescriptionText>
                                <StyleButton
                                    onClick={(e) => handleFavorito(e, product.id)}
                                    title={isFavorito ? <BsStarFill color="#ffc107" size={22}/> : <BsStar size={22}/>}
                                />
                            </StyleDescriptionContainer>
                            <StyleText>{product.model}</StyleText>
                            <StyleText>{product.color}</StyleText>
                        </StyleCard>
                    </StyleLink>
                );
            })}
        </>
    );
};
