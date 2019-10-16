import React, { useState } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import moment from 'moment';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

function Trainings() {
    const [trainings, setTrainings] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = useState('');

    const handleClose = (event, reason) => {
      setOpen(false);
    };

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
        .then(response => response.json())
        .then(responseData => {
            setTrainings(responseData.content);
        })
    }
    
    React.useEffect(() => {
        fetchData();
        } ,[] 
      )

    const columns = [
        {
          Header: "Activity",
          accessor: "activity"
        },
        {
          Header: "Duration",
          accessor: "duration"
        }, 
        {
            Header: 'Date',
            id: 'date',
            accessor: row => moment(row.date).format('x'),
            Cell: row => moment(row.original.date).format('MMMM Do YYYY, h:mm a'),
        },
        {
            accessor: 'links[0].href',
            sortable: false,
            filterable: false,
            Cell: ({value}) => <Button size="small" color="secondary" onClick={() => deleteTraining(value)}>Delete</Button>
          }
    ];  

    const deleteTraining = (link) => {
      if(window.confirm('Are you sure?')){
        fetch(link, {method: 'DELETE'})
        .then(res => fetchData())
        .then(res => setMessage("Training deleted"))
        .then(res => setOpen(true))
        .catch(err => console.error(err))
      }
    }

    return (
        <div>
            <h1>Trainings </h1>
            <ReactTable data={trainings} columns={columns} filterable={true} />
            <Snackbar 
              open={open}
              autoHideDuration={3000}
              onClose={handleClose}
              message={message}
            />
        </div>
    )
}

export default Trainings;
