import React, { Component } from 'react'
import {FaShower, FaCreditCard, FaShoppingBasket, FaCoffee, FaIdCardAlt, FaTaxi, FaUsers} from 'react-icons/fa'
import { GiHamburger } from 'react-icons/gi'
import {Title} from './Title'

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCoffee />,
                title: 'Free Coffee',
                info: 'Lorem ipsum dolor sit amet consectetue sagejmlngrbjik erli srgsl, hbm worngl!'
            },
            {
                icon:<FaShoppingBasket />,
                title: 'Free Packaging',
                info: 'Lorem ipsum dolor sit amet consectetue sagejmlngrbjik erli srgsl, hbm worngl!'
            },
            {
                icon:<FaShower />,
                title: 'Free restroom',
                info: 'Lorem ipsum dolor sit amet consectetue sagejmlngrbjik erli srgsl, hbm worngl!'
            },
            {
                icon:<FaCreditCard />,
                title: 'Cashless Economy',
                info: 'Lorem ipsum dolor sit amet consectetue sagejmlngrbjik erli srgsl, hbm worngl!'
            },
            {
                icon:<GiHamburger />,
                title: 'affordable chops',
                info: 'Lorem ipsum dolor sit amet consectetue sagejmlngrbjik erli srgsl, hbm worngl!'
            },
            {
                icon:<FaIdCardAlt />,
                title: 'best customer services',
                info: 'Lorem ipsum dolor sit amet consectetue sagejmlngrbjik erli srgsl, hbm worngl!'
            },
            {
                icon:<FaTaxi />,
                title: 'package delivery',
                info: 'Lorem ipsum dolor sit amet consectetue sagejmlngrbjik erli srgsl, hbm worngl!'
            },
            {
                icon:<FaUsers />,
                title: 'event services',
                info: 'Lorem ipsum dolor sit amet consectetue sagejmlngrbjik erli srgsl, hbm worngl!'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {
                        this.state.services.map((item, index) => {
                            return( 
                                <article key={index} className="service">
                                    <span>{item.icon}</span>
                                    <h6>{item.title}</h6>
                                    <p>{item.info}</p>
                                </article>
                            )
                        })
                    }
                </div>
            </section>
        )
    }
}
