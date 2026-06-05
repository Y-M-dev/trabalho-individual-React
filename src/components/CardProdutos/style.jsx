import styled from "styled-components";
import {Link} from "react-router";
import {Button} from "../Botao/index.jsx";
import {StyledButton} from "../Botao/style.jsx";

export const StyleLink = styled(Link)`
    text-decoration: none;
    width: 20%;
    color: inherit;
        margin: 20px 20px;
`;
export const StyleButton = styled(Button)`
        opacity: 0;
`
export const StyleDescriptionContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-evenly;
    background-color: #272727ef;
    opacity: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    transform: translateY(100%);
    transition: all 0.4s ease-in-out;
`
export const StyleDescriptionText = styled.p`
    margin: 15px 0 ;
`
export const StyleCard = styled.div`

    position: relative;
    background-color: #000;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
    padding: 20px;
    box-sizing: border-box;
    height: 100%;
        text-align: center;
    transition: all 0.4s ease-in-out;
    overflow: hidden;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 20px #000;
        cursor: pointer;
        z-index: 10;

        ${StyleDescriptionContainer} {
            opacity: 1;
            transform: translateY(0);
        }
            ${StyledButton} {
                    opacity: 1;
            }
    }
`

export const StyleName = styled.h1`
    margin: 5px 0;
`
export const StyleText = styled.p`
    margin: 5px;
`
export const StyleImage = styled.img`
    max-width: 100%;
    max-height: 300px;`

export const StyleImgContainer = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 10px;
`
