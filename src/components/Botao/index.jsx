import {StyledButton} from './style.jsx'

export function Button({title, onClick}) {
    return <StyledButton onClick={onClick}>{title}</StyledButton>
}