import React from 'react'
import ChopArray from './ChopArray'
import ChopFilter from './ChopFilter'
import {Title} from './Title'
import Loading from './Loading'
import { withChopConsumer } from '../Context'

function ChopBox({context}) {
    let { loading, sortedChops, chops } = context

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <Title title="small chops" />
            {/*<ChopFilter chops={chops}/>*/}
            <ChopArray chops={sortedChops}/>
        </>
    )
}

export default withChopConsumer(ChopBox)

