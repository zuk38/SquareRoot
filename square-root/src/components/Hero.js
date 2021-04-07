import React from 'react'

export default function Hero({ children, hero}) {
    return (
        /*hero as a prop allows for 
        modyfying the hero image for different pages
        by passing different css class*/
        <header className={ hero }>
            {children}
        </header>
    )
}

Hero.defaultProps = {
    hero: "defaultHero"
}
