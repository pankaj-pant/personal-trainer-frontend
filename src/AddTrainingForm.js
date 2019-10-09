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


function AddTrainingForm({id, addTraining}) {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const [training, setTraining] = useState({
        date: "",
        activity: "",
        duration: "",
        customer: id
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
            customer: id
        })
    }

    return(
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