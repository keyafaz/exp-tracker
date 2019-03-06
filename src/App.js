import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import Routes from './shared/components/Routes.js'

const App = () => {
  return (
    <div>
      <h1>Main Application</h1>
      <BrowserRouter>
        <Switch>
          <Routes />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App