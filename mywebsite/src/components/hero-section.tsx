"use client"
import { useState, useEffect } from "react"
export function HeroSec(){

    //Create a state variable for the text
    const [currentText, setCurrentText] = useState("")
    const words = ["creative", "learner", "developer"] // Define our words
    const targetWord = words[0]

    useEffect(() => {
        if (currentText === targetWord) return

        const timeout = setTimeout(() => {
        setCurrentText(targetWord.slice(0, currentText.length + 1))
        }, 150)

        return () => clearTimeout(timeout)
    }, [currentText, targetWord])

    return(
        <section className="pt-20 text-center">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 mb-8">
                    Hi! I'm Tyler
                </h1>
                <div className="text-4xl lg:text-6xl font-bold text-gray-900 mb-12 h-20">
                    <span>{currentText}</span>
                </div>

                <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
                    <p>
                        I'm a student at the University of Victoria
                    </p>
                    <p>
                        Passionate about technlogy
                    </p>
                </div>
            </div>
        </section>
    )
}