import React, { useState } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import moment from 'moment';

function Trainings() {
    const [trainings, setTrainings] = useState([]);

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
        }
    ];  

    return (
        <div>
            <h1>Trainings </h1>
            <ReactTable data={trainings} columns={columns} filterable={true} />
        </div>
    )
}

export default Trainings;
