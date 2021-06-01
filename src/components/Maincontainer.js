import React from 'react'
import Title from './Title.js'
import Theline from './Theline.js'
import Items from './items.js'
import { AnimateSharedLayout} from "framer-motion"

export const Maincontainer = () => {

    const items = Items.items

    return (
        <div className="main-container">
            <Theline />
            <AnimateSharedLayout type="crossfade">
                {items.map((item) => (<Title item={item} />))}
            </AnimateSharedLayout>
        </div>
    )
}

export default Maincontainer
