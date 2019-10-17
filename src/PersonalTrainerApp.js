import React, { useState } from 'react';
import CustomerList from './CustomerList';
import AddCustomerForm from './AddCustomerForm';
import Paper from '@material-ui/core/Paper';
import Trainings from './Trainings';
import './PersonalTrainerApp.css'

function PersonalTrainerApp() {

    const [customers, setCustomers] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(responseData => {
            setCustomers(responseData.content);
            setIsLoaded(true);
        })
    };

    React.useEffect(() => {
        fetchData();
        } ,[] 
      );

    console.log(customers);
      
    const addCustomer = newCustomer => {
        fetch("https://customerrest.herokuapp.com/api/customers",
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCustomer)
          }
        )
        .then(res=> fetchData())
        .catch(err => console.error(err))
    };

    const deleteCustomer = link => {
        fetch(link, {method: 'DELETE'})
      .then(res => fetchData())
      .catch(err => console.error(err))
    }

    const editCustomer = (link, updatedCustomer) => {
        fetch(link, {method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedCustomer)
      })
      .then(res => fetchData())
      .then (err => console.error(err))
    }

    const addTraining = (newTraining) => {
      fetch("https://customerrest.herokuapp.com/api/trainings",
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTraining)
          })
    };

  

    return (
      <Paper>
        {isLoaded ? (
          <CustomerList 
            customers={customers} 
            addCustomer={addCustomer} 
            deleteCustomer={deleteCustomer} 
            editCustomer={editCustomer} 
            addTraining={addTraining}
            />
        ) : (
          <div className="rubik-loader"></div>
        )}
          
      </Paper>
        
    )
}

export default PersonalTrainerApp;
