import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import InputMoment from 'input-moment';
import 'input-moment/dist/input-moment.css';
import { FormGroup } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { DateTimePicker } from "material-ui-pickers";
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


function AddTrainingForm({custId, data, addTraining, toggleEditForm}) {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [open, setOpen] = React.useState(true);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    const [training, setTraining] = useState({
        date: "",
        activity: "",
        duration: "",
        customer: custId
      });

    const handleChange = (event) => {
        setTraining({...training, [event.target.name]: event.target.value})
    };

    const handleDateChange = date => {
      setSelectedDate(date);
      setTraining({...training, date: date});
    };

    const reset = () => {
        setTraining({
            date: selectedDate,
            activity: "",
            duration: "",
            customer: custId
        })
    }

    console.log(training.customer);
    

    return(
       /*  <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">New Training</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Fill training information here.
            </DialogContentText>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                <DateTimePicker
                    value={selectedDate}
                    disablePast
                    onChange={handleDateChange}
                    label="Date & Time"
                    showTodayButton
                />
                </Grid>
            </MuiPickersUtilsProvider>
            <TextField name="activity" label="Activity" onChange={handleChange} value={training.activity} autoFocus
                margin="dense" fullWidth/>
            <TextField name="duration" label="Duration" onChange={handleChange} value={training.duration} autoFocus
                margin="dense" fullWidth/>
            
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={addTraining(training)} color="primary">
                Save Car
            </Button>
            </DialogActions>
        </Dialog> */

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
                            event.preventDefault();
                            addTraining(training);
                            reset();
                            toggleEditForm();
                    }}>Submit</Button>
                
                <Button onClick={toggleEditForm} color="primary">
                    Cancel
                </Button>
                    
                    
            </form>
        </div>
        
    )
}

export default AddTrainingForm;


/* const training = {
    date: "2019-10-24T09:00:31.825+0000",
    activity: "Karate",
    duration: 30,
    customer: id
  }; */

  /* 
  <div>
            <form onSubmit={(event)=>{
                event.preventDefault();
                addTraining(training);
                reset();
            }}>
                <FormGroup>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                        <DateTimePicker
                            value={selectedDate}
                            disablePast
                            onChange={handleDateChange}
                            label="Date & Time"
                            showTodayButton
                        />
                        </Grid>
                    </MuiPickersUtilsProvider>
                </FormGroup>
                <FormGroup>
                    <TextField name="activity" label="Activity" onChange={handleChange} value={training.activity}/>
                    <TextField name="duration" label="Duration" onChange={handleChange} value={training.duration}/>
                </FormGroup>
                <button>Submit</button>
                
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    
                    
            </form>
        </div>
  */