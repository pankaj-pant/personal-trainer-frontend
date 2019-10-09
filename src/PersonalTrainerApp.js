import React, { useState } from 'react';
import CustomerList from './CustomerList';
import AddCustomerForm from './AddCustomerForm';
import Paper from '@material-ui/core/Paper';

function PersonalTrainerApp() {
    /* const initialState= [
       {firstname: "Mary",
        lastname: "Philips",
        streetaddress: "Hill Street 3",
        postcode: "23322",
        city: "Flintsone",
        email: "m.philips@mail.com",
        phone: "232-310122"},
       {firstname: "Dan",
        lastname: "Davidson",
        streetaddress: "32 Main Road",
        postcode: "23130",
        city: "Flintsone",
        email: "dan.d@mail.com",
        phone: "232-1227006"}
    ] */

    const [customers, setCustomers] = useState([]);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(responseData => {
            setCustomers(responseData.content);
        })
    };

    React.useEffect(() => {
        fetchData();
        } ,[] 
      );

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
            <AddCustomerForm addCustomer={addCustomer}/>
            <CustomerList customers={customers} deleteCustomer={deleteCustomer} editCustomer={editCustomer} addTraining={addTraining}/>
        </Paper>
    )
}

export default PersonalTrainerApp;
