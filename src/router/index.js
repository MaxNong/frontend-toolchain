import React from 'react'
import {HashRouter, Switch, Route} from 'react-router-dom'
import Home from '../views/home'
import GenerateDTS from '../views/generate-dts'

const BasicRouter = () => {
    return (
        <HashRouter>
          <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/generateDts' component={GenerateDTS}></Route>
          </Switch>
        </HashRouter>
    )
}

export default BasicRouter