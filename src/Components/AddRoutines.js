import * as React from 'react';
import { useState } from 'react';
import { addRoutine } from '../api/index';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
// import MenuItem from '@material-ui/core/MenuItem';

function AddRoutine(props) {
   const [token, setModifyRoutine] = [
      props.token,
      props.setModifyRoutine,
   ];
   const [name, setName] = useState('');
   const [goal, setGoal] = useState('');
   const [isPublic, setIsPublic] = useState(false);
   const [message, setMessage] = useState('');
   const [activities, setActivities] = useState([]);

   async function handleSubmit(e) {
      e.preventDefault();
      setModifyRoutine(true);
      const result = await addRoutine(name, goal, isPublic, token);
      if (
         result.message ===
         'duplicate key value violates unique constraint "routines_name_key"'
      ) {
         setMessage(`A routine with name ${name} already exists`);
      } else {
         if (result.message) {
            setMessage(result.message);
         } else {
            setMessage('Routine Added');
            setName('');
            setGoal('');
            setIsPublic(false);
            setModifyRoutine(false);
         }
      }
   }

   return (
      <>
         <Box component='form' onSubmit={handleSubmit}>
            <TextField
               margin='normal'
               fullWidth
               id='outlined'
               label='Name'
               value={name}
               onChange={(e) => setName(e.target.value)}></TextField>
            <TextField
               margin='normal'
               fullWidth
               id='outlined'
               label='Goal'
               value={goal}
               onChange={(e) => setGoal(e.target.value)}>
               {/* <Select>
                  {activities.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                     {option.label}
                  </MenuItem>
               ))}
                  </Select> */}
            </TextField>
            <Button
               variant='contained'
               type='submit'
               margin='normal'
               aria-label='send'>
               Send
            </Button>
         </Box>
         {/* <select
            name='classification'
            id='select-classification'
            value={classification}
            onChange={(event) => {
               setClassification(event.target.value);
            }}>
            <option value='any'>Any</option>
            {classificationList.map(({ name, index }) => {
               return (
                  <option value={name} key={index}>
                     {name}
                  </option>
               );
            })}
         </select> */}
      </>
   );
}

export default AddRoutine;
