import React from 'react'
import { motion } from 'framer-motion'

export const Loader = () => {

    const homeVariants = {
        hidden: {
            width: 0
        },
        visible: {
            width: ["0%","100%"],
            opacity: [1,0],
            transition: { duration: 2, ease: "easeInOut" }
        }
    }

    return (
        <motion.div variants={homeVariants}
            initial="hidden"
            animate="visible"
            className="loader">
        </motion.div>
    )
}

export default Loader
