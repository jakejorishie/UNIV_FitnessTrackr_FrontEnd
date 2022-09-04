import * as React from 'react';
import { addRoutine } from '../api/index';

function AddRoutine(props) {
   const [token, setModifyRoutine] = [
      props.token,
      props.setModifyRoutine,
   ];
   const [name, setName] = useState('');
   const [goal, setGoal] = useState('');
   const [isPublic, setIsPublic] = useState(false);
   const [message, setMessage] = useState('');
   async function submitHandler(event) {
      event.preventDefault();
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
         <select
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
         </select>
      </>
   );
}
