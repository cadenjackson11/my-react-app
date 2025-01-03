import React from 'react'
import logo from './logo.svg'
import './App.css'

import { withAuthenticator } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello Auto Deployed On Commit!</h1>
        <p>Graduation Season</p>
      </header>
    </div>
  );
}

export default withAuthenticator(App, { includeGreetings: true })