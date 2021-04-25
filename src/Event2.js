import React,{useContext} from 'react'
import {WizardContext} from './App'
import {Link} from 'react-router-dom'
import './Event.css'

function Event2() {

    const{name,setName,email,setEmail,address,setAddress} = useContext(WizardContext)

    const submit= () =>  {
        console.log(name)
        console.log(email)
        console.log(address)
        setEmail('')
        setAddress('')
        setName('')
    }

    return (
            <form className="form">
                <label>Address</label>
                <div/>
                <input value={address} onChange={event => setAddress(event.target.value)}/>
                <div/>
                <Link to="/event1">
                <button className="btn btn-md btn-success">Back</button>
                </Link>
                <Link to="/">
                <button className="btn btn-md btn-success next" onClick={submit}>Submit</button>
                </Link>
            </form>
    )
}

export default Event2