import * as React from 'react';
import { useState } from 'react';
import { APIURL } from '../api/index';

const AddRoutine = ({ token, name, goal }) => {
   const [name, setName] = useState([]);
   const [goal, setGoal] = useState([]);

   const handleSubmit = async (e) => {
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
         }),
      });
      const result = await response.json();
      console.log('result', result);
      setActivities([result, ...routines]);
      setName('');
      setGoal('');
   };
};

export default AddRoutine;
