import React from 'react'
import PersonalTrainerApp from './PersonalTrainerApp'
import Trainings from './Trainings'
import CalendarDisplay from './CalendarDisplay'
import { fade, makeStyles } from '@material-ui/core/styles'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigator from './Navigator'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './PersonalTrainerApp.css'




const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  }
}))


function App() {
  const classes = useStyles()


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

