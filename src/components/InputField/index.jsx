import React from 'react'
import {StyleInput} from './style.jsx'
import {BsSearch} from "react-icons/bs";

export const InputField = ({inputId, inputPlaceholder, inputValue, inputType, inputOnChange, icon}) => {
    return (
        <>
            <StyleInput id={inputId} type={inputType} value={inputValue} onChange={inputOnChange}
                        placeholder={inputPlaceholder}/>
            {
                icon === "search" && (<BsSearch color={'#000'} size={30}/>)
            }
        </>

    )
}
