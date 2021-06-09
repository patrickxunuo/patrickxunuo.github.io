import react from 'react';
import { motion } from "framer-motion"
import Photos from "./photo"
import Image1 from "../images/image1.jpg"
import { BrowserRouter as Switch, Route, Link, useLocation, useRouteMatch } from "react-router-dom"

const PhotoCard = (props) => {
    const photo = props.photo
    // let url = require(`../images/${photo.url}.jpg`)
    // console.log(photo)
    return (
        <div className="photo-card">
            <img src={Image1} className="not-photo"/>
        </div>
    )
}

const NotMore = () => {
    let { path, url } = useRouteMatch()
    const photos = Photos.photo

    return (
        <div className="not-photo-wrap">
            <div className="not-photo-container">
                <Switch>
                    <Route path={`${path}/places`}>
                            {photos.map(photo => (
                                <PhotoCard photo={photo} key={photo.id}/>
                            ))}
                            <img src="" alt="" />
                    </Route>
                    <Route path={`${path}/foods`}>
                        <div className="not-photos">
                        </div>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default NotMore