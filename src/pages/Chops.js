import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import ChopBox from '../components/ChopBox'

export let Chops = () => {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="our chops" subtitle="find your desired delicacy here">
                    <Link to="/" className="btn-primary">return home</Link>
                </Banner>
            </Hero>
            <ChopBox />
        </>
    )
}
