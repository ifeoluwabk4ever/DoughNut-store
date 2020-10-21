import React from 'react'
import { Link } from 'react-router-dom'
import ContactDetail from '../components/ContactDetail'
import Form from '../components/Form'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Message from '../components/Message'

export default function ContactUs(){
        return (
            <>
                <Hero hero="roomsHero contactHero">
                    <Banner title="contact us" subtitle="your feedback on our product and services is important to us, why not drop a review...">
                        <Link to="/" className="btn-primary">return home</Link>
                    </Banner>
                </Hero>
                <Hero hero="message">
                    <Message />
                </Hero>
                <section className="form-box py-5">
                    <ContactDetail />
                    <Form />
                </section>
            </>
        )
    }
