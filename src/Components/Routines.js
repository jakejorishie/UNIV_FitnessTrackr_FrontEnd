import * as React from 'react';
import { useEffect, useState } from 'react';
import { APIURL } from '../index';

const Routines = ({token}) => {
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
    )
}
export default Routines