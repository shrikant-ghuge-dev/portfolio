import React from 'react'
import Typewriter from "typewriter-effect";

function Text() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Angular Developer",
                    "Frontend Developer",
                    "ReactJs Developer",
                    "MEAN Stack",
                    "MERN Stack"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    )
}

export default Text;