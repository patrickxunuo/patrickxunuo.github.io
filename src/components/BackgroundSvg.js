import React from 'react'
import SvgSaitama from './SvgSaitama.js'
import SvgMakima from './SvgMakima.js'
import SvgAkaza from './SvgAkaza.js'
import SvgAce from './SvgAce.js'

const BackgroundSvg = () => {
    return (
        <div className="background-svg">
            <SvgMakima />
            <SvgSaitama />
            <SvgAce />
            <SvgAkaza />
        </div>
    )
}

export default BackgroundSvg
