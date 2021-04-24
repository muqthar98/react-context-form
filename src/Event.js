import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import {WizardContext} from './App'
import './Event.css'

function Event() {

    const{name,setName} = useContext(WizardContext)

    return (

            <form>
                <label>Name</label>
                <div/>
                <input value={name} onChange={event => setName(event.target.value)}/>
                <div/>
                <Link to="/event1">
                <button>Next</button>
                </Link>
            </form>
    )
}

export default Event
