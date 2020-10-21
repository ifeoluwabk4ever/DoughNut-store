import React, { Component } from 'react'
import {items} from './products'

    let ChopContext = React.createContext();

class ChopProvider extends Component {
    state={
        chops: [],
        sortedChops: [],
        featuredChops: [],
        loading: true,
        category: 'all',
        price: 0,
        minPrice: 0,
        maxPrice: 0,
    }

    // getData

    componentDidMount() {
        let chops = this.formatData(items)
        let featuredChops = chops.filter( chop => chop.featured === true );

        let maxPrice = Math.max( ...chops.map(item => item.price))
        let maxSize = Math.max( ...chops.map(item => item.size))

        this.setState({
            chops,
            featuredChops,
            sortedChops: chops,
            loading: false,
            price: maxPrice,
            maxPrice,
            maxSize
        })
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url)
            let chop = { ...item.fields, images, id }

            return chop
        })
        return tempItems
    }

    getChop = (slug) => {
        let tempChops = [ ...this.state.chops]
        let chop = tempChops.find( chop => chop.slug === slug)
        return chop
    }

    handleChange = e => {

        this.setState({
        }, this.filterChops)
    }

    filterChops = () => {
        let { chops, category, price } = this.state

        let tempChops = [ ...chops]

        // category sort
        if (category !== 'all') {
            tempChops = tempChops.filter( chop => chop.category === category)
        }

        // Price sort
        price = parseInt(price)

        tempChops = tempChops.filter( chop => chop.price <= price)

        this.setState({
            sortedChops: tempChops
        })
    }

    render() {
        return (
            <ChopContext.Provider value={{ 
                ...this.state, 
                getChop: this.getChop,
                handleChange: this.handleChange
            }}>
                { this.props.children }
            </ChopContext.Provider>
        )
    }
}

    let ChopConsumer = ChopContext.Consumer

export let withChopConsumer = (Component) => {
        let ConsumerWrapper = (props) => {
        return <ChopConsumer>
            {
                value => <Component {...props} context={value} />
            }
        </ChopConsumer>
    }
    return ConsumerWrapper
}

export { ChopProvider, ChopContext, ChopConsumer }