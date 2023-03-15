import React from 'react'
import Typewriter from "typewriter-effect";

function Text() {
    return (
        <Typewriter
            options={{
                strings: [
                    "ReactJs Developer",
                    "Frontend Developer",
                    "Angular Developer"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    )
}

export default Text;