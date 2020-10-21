import React from 'react'
import Variety from './Variety'
import Banner from '../components/Banner'
import {StyledRoom} from '../components/StyledHero'


export default function ChopArray({chops}) {
    if ( chops.length === 0) {
        return ( 
            <StyledRoom>
                <Banner title="oops!!!" subtitle="unfortunately, no chop matched your search parameter...">
                </Banner>
            </StyledRoom>
        )
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {
                    chops.map( item => {
                        return(
                            <Variety key={item.id} chop={item} />
                        )
                    })
                }
            </div>
        </section>
    )
}
