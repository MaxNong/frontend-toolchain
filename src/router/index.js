import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from '../views/home'
import GenerateDTS from '../views/generate-dts'

const BasicRouter = () => {
    return (
        <BrowserRouter>
          <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/generateDts' component={GenerateDTS}></Route>
          </Switch>
        </BrowserRouter>
    )
}

export default BasicRouter