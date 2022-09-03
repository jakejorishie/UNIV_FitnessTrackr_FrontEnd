import * as React from 'react';
import { useEffect, useState } from 'react';
import { APIURL } from '../api/index';
// eslint-disable-next-line
import Typography from '@mui/material/Typography';
// eslint-disable-next-line
import Card from '@mui/material/Card';
// eslint-disable-next-line
import CardContent from '@mui/material/CardContent';
// eslint-disable-next-line
import Grid from '@mui/material/Grid';
// eslint-disable-next-line
import { CardActions, IconButton } from '@mui/material';

const Activities = ({ token }) => {
   const [activities, setActivities] = useState([]);

   useEffect(() => {
      const fetchAllActivities = async () => {
         const response = await fetch(`${APIURL}/activities`, {
            headers: {
               'Content-Type': 'application/json',
            },
         });
         const result = await response.json();
         console.log(result);
         setActivities(result);
      };
      fetchAllActivities();
   }, [activities]);

   return (
      <>
         <h1>Activities</h1>
         {activities.map((activity) => (
            <div key={activity.id}>
               <h3>{activity.name}</h3>
               <div>
                  <h4>{activity.description}</h4>
               </div>
            </div>
         ))}
      </>
   );
};

export default Activities;
