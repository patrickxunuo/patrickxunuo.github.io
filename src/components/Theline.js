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
            <div className="the-ball" style={{transform:`translateY(${offsetY * 10}px)`}} />
            <div className="the-line" />
        </div>
    )
}

export default Theline
