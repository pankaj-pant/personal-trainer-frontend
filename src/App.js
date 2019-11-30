import React from 'react'
import PersonalTrainerApp from './PersonalTrainerApp'
import Trainings from './Trainings'
import CalendarDisplay from './CalendarDisplay'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigator from './Navigator'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './PersonalTrainerApp.css'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navigator />
          <Switch>
            <Route path="/" exact component={PersonalTrainerApp} />
            <Route path="/trainings/" component={Trainings} />
            <Route path="/calendar/" component={CalendarDisplay} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App

