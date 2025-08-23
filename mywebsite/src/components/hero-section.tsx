"use client"
import { useState, useEffect } from "react"
export function HeroSec(){

    //Create a state variable for the text
    const [currentText, setCurrentText] = useState("")
    const words = ["creative", "learner", "developer"] // Define our words
    const [wordIndex, setWordIndex] = useState(0) // Which word we’re on
    const [isDeleting, setIsDeleting] = useState(false) // Typing or deleting?

    useEffect(() =>{
        //The word that we are doing animation
        const targetWord = words[wordIndex]
        let typingSpeed = 150;
        if (isDeleting){
            typingSpeed = 100;
        }
        // This checks whether we are typing and have not finished the word yet
        if(!isDeleting && currentText !== targetWord){
            const timeout = setTimeout(() => {
                // Take more than one character from the target word
                setCurrentText(targetWord.slice(0, currentText.length + 1))
            },typingSpeed)
            //Prevent old timers to keep running if state changes quickly.
            return() => clearTimeout(timeout)
        }

        // If we just finished typing the whole word
        if (!isDeleting && currentText === targetWord){
            const timeout = setTimeout(() => {
                // switch to deleting mode
                setIsDeleting(true)
            }, 1000)
            return () => clearTimeout(timeout)
        }
        // If we are deleting and there still characters left
        if(isDeleting && currentText !== ""){
            const timeout = setTimeout(() =>{
                //remove one character
                setCurrentText(targetWord.slice(0, currentText.length - 1))
            }, typingSpeed)
            return () => clearTimeout(timeout)
        }

        // If we have deleted everything, now move to the next word and start typing
        if(isDeleting && currentText === ""){
            setIsDeleting(false) //Switch back to typing mode
            setWordIndex((prev) => (prev + 1) % words.length) // wrap to 0 at the end
        }
    }, [currentText, isDeleting, wordIndex, words ])

    return(
        <section className="pt-20 text-center">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl lg:text-8xl font-bold text-gray-900 mb-8">
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