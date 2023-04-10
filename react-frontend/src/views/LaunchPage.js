import React from 'react'
import './LaunchPage.css'
import { Navigate, useNavigate } from 'react-router-dom'
import { LinkButton } from 'components/buttons'
import Button from './Button'

function LaunchPage () {

    let navigate = useNavigate()


    return (
        <div className="launch-page">
            
            <div>
                <h1 className='h1-lp' >Welcome to NuOrder</h1>
            </div>

            <div className="header">
                
                <div className='button-1'>
                    {/* <Button route={"/login"} buttonText="Login"/> */}
                    <a href="/login" className='btnls'>Login</a>
                </div>    
                <div className='button-1'>
                    {/* <Button route={"/register"} buttonText="Sign up"/> */}
                    <a href='/register' className='btnls'>Sign up</a>
                </div>
            </div>
            
        </div>
    )
}

export default LaunchPage


