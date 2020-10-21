import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function NavContact() {
    return (
        <>
            <NavWrapper className="navbar py-2 navbar-expand-sm navbar-dark px-sm-5">
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5"><FaPhone /><span className="ml-3">+234 (0)813 537 3695</span></li>
                    <li className="nav-item ml-5"><FaEnvelope /><span className="ml-3">admin@smallchops.com</span></li>
                </ul>
                <ul className="ml-auto navbar-nav align-items-center d-none d-lg-flex">
                    <Link to="https://facebook.com" className="mr-3 nav-item nav-title"><FaFacebookF color='hsl(205, 72%, 37%)' /></Link>
                    <Link to="https://twitter.com" className="mr-3 nav-item nav-title"><FaTwitter color=' #49a6e9' /></Link>
                    <Link to="https://instagram.com" className="mr-3 nav-item nav-title"><FaInstagram color='hsl(360, 67%, 44%)' /></Link>
                    <Link to="https://whatsapp.com" className="mr-3 nav-item nav-title"><FaWhatsapp color='hsl(125, 67%, 44%)' /></Link>
                </ul>
            </NavWrapper>
        </>
    )
}

let NavWrapper = styled.nav`
    background: var(--clr-white);
    box-shadow: var(--dark-shadow) !important;
    // position: fixed;
	// width: 100%;
	// z-index: 100;
    
    .nav-link {
        color: var(--clr-primary-1) !important;
        transition: var(--transition) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
        font-family: Tekton Pro;

        &:hover{
            color: var(--clr-gold) !important;
            font-style: italic;
        }
    }
`