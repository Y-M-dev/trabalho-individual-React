import styled from "styled-components";

export const StyleDescriptionHome = styled.p`
    margin: 5px 0;
    position: absolute;
    background-color: #272727ef;
    opacity: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    transform: translateY(100%);
    transition: all 0.4s ease-in-out;
`
export const StyleCard = styled.div`
    width: 20%;
    position: relative;
    background-color: #000;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 15px;
    padding: 20px;
    box-sizing: border-box;
    margin: 20px 20px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    overflow: hidden;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 20px #000;
        cursor: pointer;
        z-index: 10;

        ${StyleDescriptionHome} {
            opacity: 1;
            transform: translateY(0);
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
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
