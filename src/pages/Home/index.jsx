import React from 'react'
import {DadosApi} from '../../data/dados.jsx'
import {ProductCard} from "../../components/CardProdutos/index.jsx";
import {HomeContainer, StyledTitle,} from "./style.jsx";

export const Home = () => {
    return (
        <>
            <HomeContainer>
                <StyledTitle>Instrumentos populares</StyledTitle>
                <ProductCard data={DadosApi}></ProductCard>
            </HomeContainer>
        </>
    )
}
