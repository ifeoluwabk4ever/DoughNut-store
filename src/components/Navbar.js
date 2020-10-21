import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'

// window.addEventListener('load', () => {
//     let navToggle = document.querySelector('.dropdown-toggle'),
//     linksContainer = document.querySelector('.dropdown-menu'),
//     links = document.querySelector('.link-2');

//     navToggle.addEventListener('click', () => {
//         let containerHeight = linksContainer.getBoundingClientRect().height,
//             linksHeight = links.getBoundingClientRect().height;
//         if(containerHeight === 0) {
//             linksContainer.style.height = `${linksHeight}px`
//         } else {
//             linksContainer.style.height = 0
//         }
//     })
// })


export default function Navbar() {
    return (
        <>
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/"><img src={logo} alt="Logo" className="navbar-brand" /></Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5"><Link to="/" className="nav-link">small chops factory</Link></li>
                </ul>
                <ul className="ml-auto navbar-nav align-items-center d-none d-lg-block">
                    <Link to="/" className="mr-4 nav-title nav-item">Home</Link>
                    <Link to="/about-us" className="mr-4 nav-title nav-item">About us</Link>
                    <Link to="/menu" className="mr-4 nav-title nav-item">Menu</Link>
                    <Link to="/contact-us" className="mr-4 nav-title nav-item">Contact us</Link>
                </ul>
                <div className="dropdown d-lg-none ml-auto">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                        <FaBars />
                    </button>
                    <div className="dropdown-menu dropMenu" aria-labelledby="dropdownMenuButton">
                        <Link to="/" className="nav-title dropdown-item">Home</Link>
                        <Link to="/about-us" className="nav-title dropdown-item">About us</Link>
                        <Link to="/menu" className="nav-title dropdown-item">Menu</Link>
                        <Link to="/contact-us" className="nav-title dropdown-item">Contact us</Link>
                    </div>
                </div>
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