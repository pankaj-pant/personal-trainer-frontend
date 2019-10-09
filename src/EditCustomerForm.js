import React, { useState } from 'react';
import useInputState from './hooks/useInputState';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

function EditCustomerForm({id, firstname, lastname, streetaddress, postcode, city, email, phone, deleteCustomer, editCustomer, toggleEditForm}) {
    const classes = useStyles();
    const [value, handleChange, reset] = useInputState({firstname, lastname, streetaddress, postcode, city, email, phone, deleteCustomer, editCustomer});
   
    
    return (
        <div>
            <form onSubmit={(event) => {
                        event.preventDefault();
                        editCustomer(id, value);
                        reset();
                        toggleEditForm();
                    }}>
                    <TextField
                        label="Firstname"
                        name="firstname"  
                        value={value.firstname}
                        onChange={handleChange}
                    />{" "}
                    <TextField
                        label="Lastname"
                        name="lastname"  
                        value={value.lastname}
                        onChange={handleChange}
                    />{" "}
                    <TextField
                        label="Address"
                        name="streetaddress"  
                        value={value.streetaddress}
                        onChange={handleChange}
                    />{" "}
                    <TextField
                        label="Postcode"
                        name="postcode"  
                        value={value.postcode}
                        onChange={handleChange}
                    />{" "}
                    <TextField
                        label="City"
                        name="city"  
                        value={value.city}
                        onChange={handleChange}
                    />{" "}
                    <TextField
                        label="Email"
                        name="email"  
                        value={value.email}
                        onChange={handleChange}
                    />{" "}
                    <TextField
                        label="Phone"
                        name="phone"  
                        value={value.phone}
                        onChange={handleChange}
                    />{" "}
                    <button>Submit</button>
                    </form>
        </div>
    )
}

export default EditCustomerForm;
