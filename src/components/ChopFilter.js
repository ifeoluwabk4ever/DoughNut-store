import React, { useContext } from 'react'
import { ChopContext } from '../Context'
import {Title} from './Title'

    let getUnique = (items, value) => {
        return [ ...new Set(items.map(item => item[value]))]
    }

export default function ChopFilter({chops}) {

    let context = useContext(ChopContext)
    let { category, price, handleChange, minPrice, maxPrice } = context

    let categories = getUnique(chops, 'category')
    categories =  ['all', ...categories]
    categories = categories.map((item, index) => {
        return <li value={item} key={index}>{item}</li>
    })

    return (
        <section className="filter-container">
            <Title title="search for your desired chop"/>
            <div className="filter-form">
                <div className="div-group">
                    <label htmlFor="category">chop type:</label>
                    <ul name="category" id="category" value={category} className="ul-control" onChange={handleChange}>
                        {categories}
                    </ul>
                </div>
                <form className="div-group">
                    <label htmlFor="price">chop price: ${price}</label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="ul-control" />
                </form>
            </div>
        </section>
    )
}
