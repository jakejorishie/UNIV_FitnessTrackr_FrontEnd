import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addRoutine, APIURL } from '../api/index';
import { IconButton, Typography, Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { CardActions } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const MyRoutines = ({ token }) => {
   const history = useNavigate;
   const [routines, setRoutines] = useState([]);
   const [open, setOpen] = useState(false);
   const [goal, setGoal] = useState('');
   const [name, setName] = useState('');
   const [isPublic, setIsPublic] = useState(false);
   const [newRoutines, setNewRoutines] = useState([]);

   useEffect(() => {
      const getUser = async () => {
         const token = localStorage.getItem('token');
         console.log(token);
         const response = await fetch(`${APIURL}/users/me`, {
            headers: {
               'Content-Type': 'application/json',
               Authorization: `Bearer ${token}`,
            },
         })
            .then((response) => response.json())
            .then((result) => {
               console.log(result);
               return result;
            })
            .catch(console.error);
         return response;
      };

      const fetchMyRoutines = async () => {
         const user = await getUser();
         const response = await fetch(
            `${APIURL}/users/${user.username}/routines`,
            {
               headers: {
                  'Content-Type': 'application/json',
               },
            }
         );
         const result = await response.json();
         console.log(result);
         setRoutines(result);
      };
      fetchMyRoutines();
   }, [token]);

   const handleSubmit = async (e) => {
      const token = localStorage.getItem('token');
      e.preventDefault();
      const response = await fetch(`${APIURL}/routines`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
         body: JSON.stringify({
            name,
            goal,
            isPublic,
         }),
      });
      const result = await response.json();
      console.log(result);
      if (result) {
         const activeRoutine = result.data.routines.filter(
            (routine) => routine.isPublic === false
         );
         setNewRoutines(activeRoutine);
      }

      // history('/Activities');
   };

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   return (
      <>
         <h1>My Routines</h1>
         <IconButton
            aria-label='add'
            size='small'
            onClick={handleClickOpen}>
            <AddCircleOutlineOutlinedIcon />
            <Box
               component='form'
               sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
               }}>
               <Dialog open={open} onClose={handleClose}>
                  <DialogTitle>Create Routine</DialogTitle>
                  <DialogContent>
                     <DialogContentText>
                        Create a New Routine
                     </DialogContentText>
                     <TextField
                        autoFocus
                        margin='dense'
                        id='outlined'
                        label='Enter Routine Name'
                        halfwidth='true'
                        onChange={(e) => setName(e.target.value)}
                     />
                     <TextField
                        autoFocus
                        margin='dense'
                        id='outlined-multiline-flexible'
                        label='Enter Goal'
                        multiline
                        maxRows={4}
                        halfwidth='true'
                        onChange={(e) => setGoal(e.target.value)}
                     />
                  </DialogContent>
                  <DialogActions>
                     <Button type='submit' onClick={handleSubmit}>
                        Create
                     </Button>
                     <Button onClick={handleClose}>Cancel</Button>
                  </DialogActions>
               </Dialog>
            </Box>
         </IconButton>
         <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}>
            {routines.map((routine) => (
               <Grid key={routine.id} item xs={12} md={6} sm={4}>
                  <Card
                     variant='outlined'
                     sx={{
                        display: 'flex',
                        backgroundColor: 'grey',
                        boxShadow: '5px 5px grey',
                     }}>
                     <CardContent sx={{ flex: 1 }} key={routine.id}>
                        <Typography component='h2' variant='h5'>
                           {' '}
                           {routine.name}
                        </Typography>
                        <Typography variant='subtitle1'>
                           {routine.goal}
                        </Typography>
                        <Typography variant='subtitle1'>
                           {routine.creatorName}
                        </Typography>
                     </CardContent>
                     <CardActions>
                        <IconButton
                           aria-label='edit'
                           size='small'
                           href='/Update'>
                           <EditIcon />
                        </IconButton>
                        <IconButton aria-label='delete' size='small'>
                           <DeleteIcon />
                        </IconButton>
                     </CardActions>
                  </Card>
               </Grid>
            ))}
         </Grid>
         {/* {routines.map((routine) => (
            <div key={routine.id}>
               <h3>{routine.name}</h3>
               <div>
                  <h4>{routine.goal}</h4>
                  <h3>{routine.creatorName}</h3>
               </div>
            </div>
         ))} */}
      </>
   );
};
export default MyRoutines;
