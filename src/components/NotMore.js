import react from 'react';
import { motion } from "framer-motion"
import { Row1, Row2, Row3 } from "./photo"
import Photos from "./photo"
import { BrowserRouter as Switch, Route, Link, useLocation, useRouteMatch } from "react-router-dom"

const PhotoCard = (props) => {
    const photo = props.photo
    const description = photo.description
    const url = photo.url

    const photoVarients = {
        reset: {
            scale: 1,
            transition: { duration: 0.3, ease: "easeInOut" }
        },
        hover: {
            scale: 1.05,
            transition: { duration: 0.5, ease: "easeInOut" }
        }
    }
    const descriptionTitleVarients = {
        reset: {
            opacity: 0,
            transition: { duration: 0.3, ease: "easeInOut" }
        },
        hover: {
            opacity: 1,
            transition: { duration: 0.5, ease: "easeInOut" }
        }
    }

    const descriptionVarients = {
        reset: {
            y: -20,
            opacity: 0,
            transition: { duration: 0.3, ease: "easeInOut" }
        },
        hover: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeInOut" }
        }
    }
    return (
        <motion.div className="photo-card" whileHover="hover" initial="initial" animate="reset">
            <motion.div className="card-pop" variants={descriptionTitleVarients}>
                <motion.h2 variants={descriptionVarients}>{description}</motion.h2>
            </motion.div>
            <motion.img src={require(`../images/${url}.jpg`).default} className="not-photo" variants={photoVarients} />
        </motion.div>
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
                            <PhotoCard photo={photo} key={photo.id} row={1} />
                        ))}
                        {/* <div className="photo-column">
                            {photos.map(photo => (
                                <PhotoCard photo={photo} key={photo.id} row={1}/>
                            ))}
                        </div>
                        <div className="photo-column">
                            {photos.map(photo => (
                                <PhotoCard photo={photo} key={photo.id} row={2}/>
                            ))}
                        </div>
                        <div className="photo-column">
                            {photos.map(photo => (
                                <PhotoCard photo={photo} key={photo.id} row={3}/>
                            ))}
                        </div> */}
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