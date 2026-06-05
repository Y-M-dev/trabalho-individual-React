import {DadosApi} from '../../data/dados.jsx'
import {useParams} from "react-router";
import {
    StyleContainer,
    StyleText,
    StyleTitle,
    StyleDescription,
    StyleImage,
    StyleImageContainer,
    StyleLink
} from "./style.jsx";
import React from "react";
import {Button} from "../../components/Botao/index.jsx";

export const Product = () => {
    const {id} = useParams();

    const produto = DadosApi.find((item) => String(item.id) === String(id));

    if (!produto) {
        return (
            <PageContainer>
                <h2>Instrumento não encontrado!</h2>
            </PageContainer>
        );
    }
    return (
        <StyleContainer>

            <StyleContainer>
                <StyleImageContainer>
                    <StyleImage src={produto.image} alt={produto.name}/>
                </StyleImageContainer>
                <StyleDescription>
                    <StyleTitle>{produto.name}</StyleTitle>
                    <StyleText><strong>Modelo:</strong> {produto.model}</StyleText>
                    <StyleText><strong>Cor:</strong> {produto.color || produto.simpleColor}</StyleText>
                    <StyleText><strong>Sobre o instrumento:</strong> {produto.description}</StyleText>
                </StyleDescription>
                <StyleLink to={'aaaaaa'}>
                <Button title={'Comprar'}></Button>
                </StyleLink>
            </StyleContainer>
        </StyleContainer>
    );
};
