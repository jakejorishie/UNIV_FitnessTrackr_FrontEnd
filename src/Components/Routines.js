import * as React from 'react';
import { useEffect, useState } from 'react';
import { APIURL } from '../api/index';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

const Routines = ({ token }) => {
   const [routines, setRoutines] = useState([]);
   useEffect(() => {
      const fetchAllRoutines = async () => {
         const response = await fetch(`${APIURL}/routines`, {
            headers: {
               'Content-Type': 'application/json',
            },
         });
         const result = await response.json();
         console.log(result);
         setRoutines(result);
      };
      fetchAllRoutines();
   }, [token]);
   return (
      <>
         <h1>Routines</h1>
         <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}>
            {routines.map((routine) => (
               <Grid item xs={12} md={6} sm={4}>
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
      </>
   );
};
export default Routines;
