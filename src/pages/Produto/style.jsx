import styled from "styled-components";
import {Link} from "react-router";

export const StyleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
    min-height: 100vh;
    background-color: #000;
    color: #fff;
    box-sizing: border-box;
`

export const StyleImageContainer = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 15px;
    max-width: 450px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const StyleLink = styled(Link)`
    text-decoration: none;
    width: 20%;
    color: inherit;
`;


export const StyleImage = styled.img`
    max-width: 100%;
    height: auto;
    max-height: 400px;
`

export const StyleDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;
`

export const StyleTitle = styled.h1`
    font-size: 2.5rem;
    margin: 0;
`

export const StyleText = styled.p`
    font-size: 1.2rem;
    line-height: 1.6;
    margin: 0;
    color: #ccc;
`