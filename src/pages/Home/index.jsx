import React from 'react'
import {DadosApi} from '../../data/dados.jsx'
import {ProductCard} from "../../components/CardProdutos/index.jsx";
import {HeaderContainer, HomeContainer, StyledTitle,} from "./style.jsx";
import {useState} from "react";
import {InputField} from "../../components/InputField/index.jsx";

export const Home = () => {
    const [search, setSearch] = useState("");
    const produtosFiltrados = DadosApi.filter((product) => {
        const busca = search.toLowerCase();
        return (
            product.name.toLowerCase().includes(busca) ||
            product.model.toLowerCase().includes(busca) ||
            product.simpleColor.toLowerCase().includes(busca)
        );
    });

    return (
        <>
            <HeaderContainer>
                <StyledTitle>Instrumentos populares</StyledTitle>
            </HeaderContainer>
            <HeaderContainer>
                <InputField
                    inputId={'searchInput'}
                    inputType="text"
                    inputPlaceholder="Buscar por nome, modelo ou cor..."
                    inputValue={search}
                    inputOnChange={(e) => setSearch(e.target.value)}
                    icon='search'/>
            </HeaderContainer>
            <HomeContainer>
                <ProductCard data={produtosFiltrados}/>
            </HomeContainer>
        </>
    )
}

