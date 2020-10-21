import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import {Title} from '../components/Title'
import Banner from '../components/Banner'
import Coverage from '../components/Coverage'
import Customer from '../components/Customer'
import AboutDetail from '../components/AboutDetail'
import GetInTouch from '../components/GetInTouch'
import AboutStatement from '../components/AboutStatement'
import mainImg from '../images/menu-item.jpeg'
import styled from 'styled-components'

export default function AboutUs() {
        return (
            <>
                <Hero hero="roomsHero contactHero aboutHero">
                        <Banner title="about us" subtitle="want to know more about us, why not take a simple tour here...">
                            <Link to="/" className="btn-primary">return home</Link>
                        </Banner>
                    </Hero>
                <div className="container about-page py-5">
                    <AboutStatement />
                    <img src={mainImg} alt="about-page" />
                </div>
                <Hero hero="message coverage">
                    <Coverage />
                </Hero>
                <div className="container-fluid mission-vision p-5">
                    <GetInTouch />
                    <AboutDetail className="pl-5"/>
                </div><hr className="d-none d-lg-block"/>
                <div className="container d-none d-lg-block">
                    <Title title="our clients" />
                    <CustomerWrapper className="d-flex justify-content-between py-4 my-5">
                        <Customer />
                    </CustomerWrapper>
                </div>
            </>
        )
    }


    let CustomerWrapper = styled.div`
        background: var(--clr-grey-8);
    `