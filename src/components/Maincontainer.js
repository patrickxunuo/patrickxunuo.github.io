import React from 'react'
import Title from './Title.js'
import { AnimateSharedLayout} from "framer-motion"

export const Maincontainer = () => {

    const items = [
        {
            'id': 1,
            'content': 'home',
            'location': 'Vancouer',
            'time': 'now',
            'what': `Creative web developer, love to learn and explore.`,
            'more': false,
            'extens': null
        },
        {
            'id': 2,
            'content': 'education',
            'location': 'Simon Fraser University',
            'time': '2017 - 2021',
            'what': `Bachelor of Applied Science, Engineering Science`,
            'more': false,
            'extens': null
        },
        {
            'id': 3,
            'content': 'intership',
            'location': null,
            'time': null,
            'what': null,
            'more': true,
            'extens': 'intership'
        },
        {
            'id': 4,
            'content': 'project',
            'location': null,
            'time': null,
            'what': null,
            'more': true,
            'extens': 'project'
        },
        {
            'id': 5,
            'content': 'contact',
            'location': null,
            'time': null,
            'what': null,
            'more': true,
            'extens': 'contact'
        }
    ]

    return (
        <div className="main-container">
            <div className="ball-line">
                <div className="the-ball" />
                <div className="the-line" />
            </div>
            <AnimateSharedLayout type="crossfade">
                {items.map((item) => (<Title item={item} />))}
            </AnimateSharedLayout>
        </div>
    )
}

export default Maincontainer
