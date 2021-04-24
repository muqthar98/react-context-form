import React from 'react'

import Event from './Event'
import Event1 from './Event1'
import Event2 from './Event2'

function Routes(){
    return(
        <Router>
            <Switch>
                <Route path="/event2">
                <Event2/>
                </Route>
                <Route path="/event1">
                <Event1/>
                </Route>
                <Route path="/">
                <Event/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes