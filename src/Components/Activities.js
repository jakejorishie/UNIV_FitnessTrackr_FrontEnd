import * as React from 'react';
import { useEffect, useState } from 'react';
import { fetchAllActivities } from '../api/index';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

const Activities = ({ isLoggedIn, activities, setActivities}) => {
   const navigate = useNavigate();
   const navigateNew = () => {
      navigate('/AddActivities');
   };
   // useEffect(() => {
   //    const fetchActivities = async () => {
   //       const response = await fetchAllActivities();
   //       setActivities(response);
   //    };
   //    fetchActivities();
   // }, []);

   return (
      <>
         {isLoggedIn ? (
            <button
               id='new-post-button'
               className='m-button'
               onClick={navigateNew}>
               Create New Activity
            </button>
         ) : null}
         <h1>Activities</h1>
         <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}>
            {activities.map((activity) => (
               <Grid key={activity.id} item xs={12} md={6} sm={4}>
                  <Card
                     variant='outlined'
                     sx={{
                        display: 'flex',
                        backgroundColor: 'grey',
                        boxShadow: '5px 5px grey',
                     }}>
                     <CardContent sx={{ flex: 1 }} key={activity.id}>
                        <Typography component='h2' variant='h5'>
                           {' '}
                           {activity.name}
                        </Typography>
                        <Typography variant='subtitle1'>
                           {activity.description}
                        </Typography>
                     </CardContent>
                  </Card>
               </Grid>
            ))}
         </Grid>

         {/* {activities.map((activity) => (
            <div key={activity.id}>
               <h3>{activity.name}</h3>
               <div>
                  <h4>{activity.description}</h4>
               </div>
            </div>
         ))} */}
      </>
   );
};

export default Activities;
