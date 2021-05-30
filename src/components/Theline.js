import React, { useEffect, useState } from 'react'

const Theline = (props) => {
    const [offsetY, setOffSetY] = useState(0)
    const handleScroll = () => {
        console.log(window.pageYOffset)
        setOffSetY(window.pageYOffset)
    }
 
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
      },[])

    return (
        <div className="ball-line">
            <div className="the-ball" />
            <div className="the-line" />
            <div className="the-line the-line-move" style={{transform:`translateY(${offsetY * -0.2}px)`}} />
        </div>
    )
}

export default Theline
