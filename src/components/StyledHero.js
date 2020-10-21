import styled from 'styled-components'
import defaultImg from '../images/item-1.jpeg'


export let StyledHero = styled.header`
    min-height: 75vh;
    background: linear-gradient(rgba(197, 157, 95, 0.5), rgba(0, 0, 0, 0.7)), url(${ props => ( props.img ? props.img : defaultImg )}) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`

export let StyledRoom = styled.header `
    min-height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
`