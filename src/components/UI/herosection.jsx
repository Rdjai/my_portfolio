import React from 'react'

const HeroSection = () => {
    return (
        <div className="flex bg-blue-950 max-w-3xl mx-auto px-5 h-[120px ] rounded-xs">
            <div className="m-auto text-center">
                <h1 className="text-3xl sm:text-4xl font-bold text-white">
                    Hey 👋, I'm Jagannath Kashyap
                </h1>
                <p className="text-md sm:text-lg text-gray-300 mt-2">
                    A Passionate Developer and Tech Enthusiast
                </p>
            </div>
            <div className="img">
                {/* Image can be added here if needed */}
            </div>
        </div>
    )
}

export default HeroSection
