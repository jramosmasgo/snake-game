import React from 'react'
import { Logo } from '../../../config/assets'

const Header: React.FunctionComponent = () => {
    return (
        <div className='header'>
            <div className="header-title">
                <img src={Logo} alt="" />
                <h1>
                    Snake Game
                </h1>

            </div>
        </div>
    )
}

export default Header