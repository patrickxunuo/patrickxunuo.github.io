import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Title from './Title.js'
import Extens from './Extens.js'
import Theline from './Theline.js'

export const Maincontainer = () => {

    const items = [
        {
            'content': 'home',
            'location': 'Vancouer',
            'time': 'now',
            'what': `Creative web developer, love to learn and explore.`,
            'more': false,
            'extens': null
        },
        {
            'content': 'education',
            'location': 'Simon Fraser University',
            'time': '2017 - 2021',
            'what': `Bachelor of Applied Science, Engineering Science`,
            'more': false,
            'extens': null
        },
        {
            'content': 'intership',
            'location': 'Beijing',
            'time': 'May - Dec 2019',
            'what': `PwC China as Full Stack Intern`,
            'more': true,
            'extens': 'intership/1'
        },
        {
            'content': 'intership',
            'location': 'West Vancouver',
            'time': '2018',
            'what': `Sager Education as Robotics Instructor`,
            'more': true,
            'extens': 'intership/2'
        },
        {
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
            <Theline />

            {items.map((item) => (<Title item={item} />))}

            {items.map((item) => (item.more === true && <Extens identifier={item.extens} />))}
        </div>
    )
}

export default Maincontainer
