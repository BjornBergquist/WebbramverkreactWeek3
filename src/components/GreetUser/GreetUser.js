import React from 'react'
import './GreetUser.css'

export const GreetUser = ({name}) => {
    const showAlert = () => alert("You've clicked me!")
    return (
        <h1 className="greetuser__header" onClick = {() => showAlert()}>Welcome to my website {name}!</h1>
    )
}
