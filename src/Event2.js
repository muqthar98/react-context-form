import React,{useContext} from 'react'
import {WizardContext} from './App'
import {Link} from 'react-router-dom'

function Event2() {

    const{name,email,address,setAddress} = useContext(WizardContext)

    const submit= () =>  {
        console.log(name)
        console.log(email)
        console.log(address)
    }

    return (
            <form>
                <label>Address</label>
                <div/>
                <input value={address} onChange={event => setAddress(event.target.value)}/>
                <div/>
                <Link to="/event1">
                <button>Back</button>
                </Link>
                <Link to="/event1">
                <button onClick={submit}>Submit</button>
                </Link>
            </form>
    )
}

export default Event2