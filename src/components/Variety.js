import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import defaultImg from '../images/hero-bcg.jpeg'
import PropTypes from 'prop-types'

export default function Variety({chop}) {

    let { title, slug, images, price } = chop

    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaultImg} alt={title}/>
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per chop</p>
                </div>
                <Link to={`/menu/${slug}`} className="btn-primary room-link">Features</Link>
            </div>
            <blockquote className="room-info">{title}</blockquote>
        </article>
    )
}

Variety.propTypes = {
    chop: PropTypes.shape({
        title: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired
    })
}