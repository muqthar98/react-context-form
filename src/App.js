import React,{useState} from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Event from './Event'
import Event1 from './Event1'
import Event2 from './Event2'
import './App.css';

const WizardContext = React.createContext()

function App() {

  const[name,setName] = useState('')
  const[email,setEmail] = useState('')
  const[address,setAddress] = useState('')

  return (

    <WizardContext.Provider value={{name,setName,email,setEmail,address,setAddress}}>
      <Router>
      <Route path="/" exact component={Event}/>
      <Route path="/event1" component={Event1}/>
      <Route path="/event2" component={Event2}/>
      </Router>
    </WizardContext.Provider>
    
  );
}

export {App,WizardContext};