import React, { useState } from 'react';
import Customer from './Customer';
import "react-table/react-table.css";
import Paper from '@material-ui/core/Paper';
import './Customers.css'

function CustomerList({customers, deleteCustomer, editCustomer, addTraining}) {

    return(
        <Paper>
            {customers.map(cust => 
                <Customer
                    key={cust.links[0].href}
                    id={cust.links[0].href} 
                    firstname={cust.firstname}
                    lastname={cust.lastname}
                    address={cust.streetaddress}
                    postcode={cust.postcode}
                    city={cust.city}
                    email={cust.email}
                    phone={cust.phone}
                    deleteCustomer={deleteCustomer}
                    editCustomer={editCustomer}
                    addTraining={addTraining}
                />
                )}
        </Paper>
    )
}

export default CustomerList;
