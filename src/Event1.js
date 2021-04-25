import React,{useContext} from 'react'
import {WizardContext} from './App'
import {Link} from 'react-router-dom'
import './Event.css'

function Event1() {

    const{email,setEmail} = useContext(WizardContext)

    return (
            <form className="form">
                <label>Email</label>
                <div/>
                <input value={email} onChange={event => setEmail(event.target.value)}/>
                <div/>
                <Link to="/">
                <button className="btn btn-md btn-success">Back</button>
                </Link>
                <Link to="/event2">
                <button className="btn btn-md btn-success next">Next</button>
                </Link>
            </form>
    )
}

export default Event1