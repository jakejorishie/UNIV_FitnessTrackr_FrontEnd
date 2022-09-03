import * as React from 'react';
import { useEffect, useState } from 'react';
import { APIURL } from '../api/index';

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
         {routines.map((routine) => (
            <div key={routine.id}>
               <h3>{routine.name}</h3>
               <div>
                  <h4>{routine.goal}</h4>
                  <h3>{routine.creatorName}</h3>
               </div>
            </div>
         ))}
      </>
   );
};
export default MyRoutines;
