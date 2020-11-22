import React, { useState } from 'react'
import './Landing.css'

function Landing(){
    const [theme,setTheme] = useState('light')

    function darkLightMode(){
        if(theme === 'light'){
            setTheme('dark')
        }else{
            setTheme('light')
        }
    }
    return(
        <div className={theme}>
            <div>
                <h1>Hello!</h1>
                <h2>Website Name</h2>
            </div>
            <div>
                <button onClick={() => darkLightMode()}>
                    Click Me
                </button>
            </div>
        </div>
    )
}

export default Landing