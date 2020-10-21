import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Services from '../components/Services'
import FeaturedChops from '../components/FeaturedChops'

export default class Home extends Component {

    render() {
        return (
            <>
            <Hero>
                <Banner title="small chops factory" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fugiat consequatur libero quidem dolor nam veritatis aliquid eveniet iure natus?">
                    <Link to="/menu" className="btn btn-white">our menu</Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedChops />
        </>
        )
    }
}
