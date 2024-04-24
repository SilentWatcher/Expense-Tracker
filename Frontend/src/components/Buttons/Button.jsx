import React from 'react'
import styled from 'styled-components'

function Button({name, icon, onClickFunction, btn_background, btn_padding, color, btn_radius}) {
    return (
        <ButtonStyled style={{
            background: btn_background,
            padding: btn_padding,
            borderRadius: btn_radius,
            color: color,
        }} onClick={onClickFunction}>
            {icon}
            {name}
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    outline: none;
    border: none;
    font-family: inherit;
    font-size: inherit;
    display: flex;
    align-items: center;
    gap: .5rem;
    cursor: pointer;
    transition: all .4s ease-in-out;
`;


export default Button