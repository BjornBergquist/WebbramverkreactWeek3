import React from 'react'
import { Link  } from 'react-router-dom'

export const DesktopNavigation = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/signin">Sign in</Link>
        </div>
    )
}
