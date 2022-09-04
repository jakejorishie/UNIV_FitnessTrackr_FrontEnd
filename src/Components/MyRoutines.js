import * as React from 'react';
import { useEffect, useState } from 'react';
import { APIURL } from '../api/index';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

const MyRoutines = ({ token }) => {
   const [routines, setRoutines] = useState([]);

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
   return (
      <>
         <h1>My Routines</h1>

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
