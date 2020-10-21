import styled from 'styled-components'

export let ButtonContainer = styled.button `
    text-transform: capitalize;
    background: transparent;
    border: 0.15rem solid var(--clr-gold);
    font-size: 1.4rem;
    color: var(--clr-grey-1);
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem;
    transition: 0.5s ease-in-out;

        &:hover{
            background: var(--clr-grey-1);
            color: var(--clr-gold)
        }
        &:focus{
            outline: none;
        }
`