import React from 'react'
import { FaInstagramSquare, FaFacebookSquare, FaWhatsappSquare, FaTwitterSquare } from 'react-icons/fa'
import { GiHamburger } from 'react-icons/gi'

export default function Customer() {
    return (
        <>
            <GiHamburger size={100} color='#c59d5f'/>
            <FaFacebookSquare size={100} color='hsl(205, 72%, 37%)'/>
            <FaInstagramSquare size={100} color='hsl(360, 67%, 44%)'/>
            <FaWhatsappSquare size={100} color='hsl(125, 67%, 44%)'/>
            <FaTwitterSquare size={100} color=' #49a6e9'/>
        </>
    )
}
