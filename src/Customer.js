import React from 'react';
import EditCustomerForm from './EditCustomerForm';
import useToggleState from './hooks/useToggleState';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';

import './CustomersCard.css'
import AddTrainingForm from './AddTrainingForm';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    float: "right",
    margin: "5px",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  
});

function CustomersCard({id, firstname, lastname, address, postcode, city, email, phone, deleteCustomer, editCustomer, addTraining}) {
  const classes = useStyles();
  const [isEditingCustomerForm, toggleIsEditingCustomerForm] = useToggleState(false);
  const [isEditingTrainingForm, toggleIsEditingTrainingForm] = useToggleState(false);

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography color="textSecondary" variant="h5" component="h2" gutterBottom>
        {firstname} {lastname}
        </Typography>
        <Typography variant="body2" component="p">
          {address}, {postcode},
        </Typography>
        <Typography variant="body2" component="p">
          {city}
        </Typography>
        <Typography variant="body2" component="p">
          Email: {email}
        </Typography>
        <Typography variant="body2" component="p">
          Phone: {phone}
        </Typography>
      </CardContent>
      <CardActions>
      <IconButton className={classes.button} aria-label="edit" onClick={toggleIsEditingCustomerForm}>
          <EditIcon />
      </IconButton>
      <Dialog open={isEditingCustomerForm} onClose={toggleIsEditingCustomerForm} aria-labelledby="form-dialog-title">
          <EditCustomerForm 
            id={id} 
            firstname={firstname} 
            lastname={lastname} 
            streetaddress={address} 
            postcode={postcode} 
            city={city} 
            email={email} 
            phone={phone} 
            deleteCustomer={deleteCustomer} 
            editCustomer={editCustomer}
            toggleEditForm={toggleIsEditingCustomerForm}  
          />  
      </Dialog>
      <IconButton className={classes.button} aria-label="delete" onClick={() => deleteCustomer(id)}>
        <DeleteIcon />
      </IconButton>
      <IconButton className={classes.button} aria-label="add training" onClick={toggleIsEditingTrainingForm}>
        <FitnessCenterIcon />
      </IconButton>
      <Dialog open={isEditingTrainingForm} onClose={toggleIsEditingTrainingForm} aria-labelledby="form-dialog-title">
          <AddTrainingForm
            id={id}
            toggleEditForm={toggleIsEditingTrainingForm}
            addTraining={addTraining}  
          />  
      </Dialog>
      </CardActions>
    </Card>
  );
}

export default CustomersCard;

   