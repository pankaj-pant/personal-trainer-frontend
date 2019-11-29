import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import moment from 'moment'
import InputMoment from 'input-moment'
import 'input-moment/dist/input-moment.css'
import { FormGroup } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { DateTimePicker } from 'material-ui-pickers'
import { MuiPickersUtilsProvider } from 'material-ui-pickers'
import DateFnsUtils from '@date-io/date-fns'
import Button from '@material-ui/core/Button'


function AddTrainingForm({ custId, data, addTraining, toggleEditForm }) {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [open, setOpen] = useState(true)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const [training, setTraining] = useState({
    date: selectedDate,
    activity: '',
    duration: '',
    customer: custId
  })

  const handleChange = (event) => {
    setTraining({ ...training, [event.target.name]: event.target.value })
  }

  const handleDateChange = date => {
    setSelectedDate(date)
    setTraining({ ...training, date: date })
  }

  const reset = () => {
    setTraining({
      date: selectedDate,
      activity: '',
      duration: '',
      customer: custId
    })
  }

  return(
    <div>
      <form>
        <FormGroup>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <DateTimePicker
                value={selectedDate}
                disablePast
                onChange={handleDateChange}
                label="Date & Time"
                showTodayButton
                autoFocus
                margin="dense"
                fullWidth
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </FormGroup>
        <FormGroup>
          <TextField name="activity" label="Activity" onChange={handleChange} value={training.activity} autoFocus
            margin="dense" fullWidth/>
          <TextField name="duration" label="Duration" onChange={handleChange} value={training.duration} autoFocus
            margin="dense" fullWidth/>
        </FormGroup>
        <Button onClick={(event)=>{
          event.preventDefault()
          addTraining(training)
          reset()
          toggleEditForm()
        }}>Submit</Button>

        <Button onClick={toggleEditForm} color="primary">
                    Cancel
        </Button>


      </form>
    </div>

  )
}

export default AddTrainingForm