import React, { useContext } from 'react'
import { ChopContext } from '../Context'
import Loading from './Loading';
import Variety from './Variety';
import {Title} from './Title';

export default function FeaturedChops() {    

    let { loading, featuredChops: chops } = useContext(ChopContext)

    chops = chops.map( chop => {
        return <Variety key={chop.id} chop={chop} />
    })

    return (
        <section className="featured-rooms">
            <Title  title="featured chops"/>
            <div className="featured-rooms-center">
                {
                    loading ? <Loading /> : chops
                }
            </div>
        </section>
    )
}
