import React,{useContext} from 'react'
import {WizardContext} from './App'
import {Link} from 'react-router-dom'

function Event1() {

    const{email,setEmail} = useContext(WizardContext)

    return (
            <form>
                <label>Email</label>
                <div/>
                <input value={email} onChange={event => setEmail(event.target.value)}/>
                <div/>
                <Link to="/">
                <button>Back</button>
                </Link>
                <Link to="/event2">
                <button>Next</button>
                </Link>
            </form>
    )
}

export default Event1