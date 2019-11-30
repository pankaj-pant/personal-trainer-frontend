import React from 'react'
import useInputState from './hooks/useInputState'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))

function AddCustomerForm({ addCustomer }) {
  const classes = useStyles()
  const [value, handleChange, reset] = useInputState('')


  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Add New Customer</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <form onSubmit={(event) => {
            event.preventDefault()
            addCustomer(value)
            reset()
          }}>
            <TextField
              label="Firstname"
              name="firstname"
              value={value.firstname}
              onChange={handleChange}
            />{' '}
            <TextField
              label="Lastname"
              name="lastname"
              value={value.lastname}
              onChange={handleChange}
            />{' '}
            <TextField
              label="Address"
              name="streetaddress"
              value={value.streetaddress}
              onChange={handleChange}
            />{' '}
            <TextField
              label="Postcode"
              name="postcode"
              value={value.postcode}
              onChange={handleChange}
            />{' '}
            <TextField
              label="City"
              name="city"
              value={value.city}
              onChange={handleChange}
            />{' '}
            <TextField
              label="Email"
              name="email"
              value={value.email}
              onChange={handleChange}
            />{' '}
            <TextField
              label="Phone"
              name="phone"
              value={value.phone}
              onChange={handleChange}
            />{' '}
            <button>Submit</button>
          </form>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}

export default AddCustomerForm
