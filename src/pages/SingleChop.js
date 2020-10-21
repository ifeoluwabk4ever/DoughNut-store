import React, { Component } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import { ChopContext } from '../Context'
import defaultBcg from '../images/hero-bcg.jpeg'
import {StyledHero} from '../components/StyledHero'

export default class SingleChop extends Component {

    constructor(props) {
        super(props)

        this.state = {
            slug: this.props.match.params.chop,
            defaultBcg
        }
    }
    
    static contextType = ChopContext
    
    render() {

        let { getChop } = this.context
        let chop = getChop(this.state.slug)
        if (!chop) {
            return ( 
                <Hero hero="roomsHero">
                    <Banner title="oops!!!" subtitle="no such chop could be found...">
                    <Link to="/menu" className="btn-primary">back to chop</Link>
                    </Banner>
                </Hero>
            )
        }

        let { title, desc, price, images } = chop
        let [mainImg, ...defaultImg] = images

        return (
            <>
                <StyledHero img={mainImg || defaultBcg}>
                    <Banner title={`${title} chop`}>
                        <Link to="/menu" className="btn-primary">Back to chops</Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {
                            defaultImg.map((item,index) => {
                                return ( 
                                    <img key={index} alt={title} src={item} />
                                )
                            })
                        }
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>Details</h3>
                            <p>{desc}.</p>
                        </article>
                        <article className="info">
                            <h3>Info</h3>
                            <h6>price : ${price}.</h6>
                        </article>
                    </div>
                </section>
            </>
        )
    }
}
