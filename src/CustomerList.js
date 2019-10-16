import React, { useState } from 'react';
import Customer from './Customer';
import "react-table/react-table.css";
import Paper from '@material-ui/core/Paper';
import MaterialTable from "material-table";
import './Customers.css'
import AddTrainingForm from './AddTrainingForm';
import { display } from '@material-ui/system';
import useToggleState from './hooks/useToggleState';
import Dialog from '@material-ui/core/Dialog';
import Snackbar from '@material-ui/core/Snackbar';

function CustomerList({customers, addCustomer, deleteCustomer, editCustomer, addTraining}) {
    const [isEditingTrainingForm, toggleIsEditingTrainingForm] = useToggleState(false);
    const [custId, setCustId] = useState("");
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = useState('');

    const handleClose = (event, reason) => {
      setOpen(false);
    };

    const [state, setState] = React.useState({
        columns: [
          { title: 'Firstname', field: 'firstname' },
          { title: 'Lastname', field: 'lastname' },
          { title: 'Streetaddress', field: 'streetaddress'},
          { title: 'Postcode', field: 'postcode'},
          { title: 'City', field: 'city'},
          { title: 'Email', field: 'email'},
          { title: 'Phone', field: 'phone'},
        ],
        data: []
      });
  
      
      const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(responseData => {
          setState({...state, data: responseData.content});
        })
    };

    React.useEffect(() => {
        fetchData();
        } ,[] 
      );
   
    return (
      <div>
      <MaterialTable
        title="List of Customers"
        columns={state.columns}
        data={state.data}
        options={{pageSize: 10, actionsColumnIndex: -1}}

        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...state.data];
                data.push(newData);
                setState({ ...state, data });
                addCustomer(newData);
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...state.data];
                data[data.indexOf(oldData)] = newData;
                setState({ ...state, data });
                editCustomer(oldData.links[0].href, newData);
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...state.data];
                data.splice(data.indexOf(oldData), 1);
                setState({ ...state, data });
                deleteCustomer(oldData.links[0].href);
                setMessage("Customer deleted");
                setOpen(true);
              }, 600);
            }),
        }}
        actions={[
          {
          icon: 'fitness_center',
          tooltip: 'Add Training',
          onClick: (event, rowData) => {
            toggleIsEditingTrainingForm(true);
            setCustId(rowData.links[0].href);
          }
          }
        ]}
      />
      <Snackbar 
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message={message}
      />
      

      <Dialog open={isEditingTrainingForm} onClose={toggleIsEditingTrainingForm} aria-labelledby="form-dialog-title" fullWidth>
          
          <AddTrainingForm
            custId={custId}
            data={state.data}
            toggleEditForm={toggleIsEditingTrainingForm}
            addTraining={addTraining}  
          />
      </Dialog>
      </div>
    );
}

export default CustomerList;

