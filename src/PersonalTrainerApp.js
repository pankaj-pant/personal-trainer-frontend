import React, { useState, useEffect } from 'react'
import './PersonalTrainerApp.css'
import AddTrainingForm from './AddTrainingForm'
import useToggleState from './hooks/useToggleState'
import Paper from '@material-ui/core/Paper'
import MaterialTable from 'material-table'
import 'react-table/react-table.css'
import Dialog from '@material-ui/core/Dialog'
import Snackbar from '@material-ui/core/Snackbar'

function PersonalTrainerApp() {

  const [isLoaded, setIsLoaded] = useState(false)
  const [isEditingTrainingForm, toggleIsEditingTrainingForm] = useToggleState(false)
  const [custId, setCustId] = useState('')
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleClose = (event, reason) => {
    setOpen(false)
  }

  const [state, setState] = useState({
    columns: [
      { title: 'Firstname', field: 'firstname' },
      { title: 'Lastname', field: 'lastname' },
      { title: 'Streetaddress', field: 'streetaddress' },
      { title: 'Postcode', field: 'postcode' },
      { title: 'City', field: 'city' },
      { title: 'Email', field: 'email' },
      { title: 'Phone', field: 'phone' },
    ],
    data: []
  })

  const fetchData = () => {
    fetch('https://customerrest.herokuapp.com/api/customers')
      .then(response => response.json())
      .then(responseData => {
        const data = responseData.content
        setState({ ...state, data })
        setIsLoaded(true)
      })
  }

  useEffect(() => {
    fetchData()
    //eslint-disable-next-line react-hooks/exhaustive-deps
  } ,[]
  )

  const addCustomer = newCustomer => {
    fetch('https://customerrest.herokuapp.com/api/customers',
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
  }

  const deleteCustomer = link => {
    fetch(link, { method: 'DELETE' })
      .then(res => fetchData())
      .catch(err => console.error(err))
  }

  const editCustomer = (link, updatedCustomer) => {
    fetch(link, { method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedCustomer)
    })
      .then(res => fetchData())
      .then (err => console.error(err))
  }

  const addTraining = (newTraining) => {
    fetch('https://customerrest.herokuapp.com/api/trainings',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTraining)
      })
  }



  return (
    <Paper>
      {isLoaded ? (
        <div>
          <MaterialTable
            title="List of Customers"
            columns={state.columns}
            data={state.data}
            options={{ pageSize: 10, actionsColumnIndex: -1 }}

            editable={{
              onRowAdd: newData =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    {
                      const data = state.data
                      data.push(newData)
                      addCustomer(newData)
                      setState({ ...state, data })
                      setMessage('Customer added')
                      setOpen(true)
                    }
                    resolve()
                  }, 1000)
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve()
                    const data = [...state.data]
                    data[data.indexOf(oldData)] = newData
                    setState({ ...state, data })
                    editCustomer(oldData.links[0].href, newData)
                    setMessage('Customer edited succesfully')
                    setOpen(true)
                  }, 600)
                }),
              onRowDelete: oldData =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve()
                    const data = state.data
                    data.splice(data.indexOf(oldData), 1)
                    setState({ ...state, data })
                    deleteCustomer(oldData.links[0].href)
                    setMessage('Customer deleted')
                    setOpen(true)
                  }, 600)
                })

            }}
            actions={[
              {
                icon: 'fitness_center',
                tooltip: 'Add Training',
                onClick: (event, rowData) => {
                  toggleIsEditingTrainingForm(true)
                  setCustId(rowData.links[0].href)
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
          <Dialog
            open={isEditingTrainingForm}
            onClose={toggleIsEditingTrainingForm}
            aria-labelledby="form-dialog-title"
            fullWidth>
            <AddTrainingForm
              custId={custId}
              data={state.data}
              toggleEditForm={toggleIsEditingTrainingForm}
              addTraining={addTraining}
            />
          </Dialog>
        </div>
      ) : (
        <div className="rubik-loader"></div>
      )}

    </Paper>

  )
}

export default PersonalTrainerApp
