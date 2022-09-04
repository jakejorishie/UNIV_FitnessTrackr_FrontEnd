export const APIURL = 'https://fitnesstrac-kr.herokuapp.com/api';

export const addRoutine = async (name, goal, isPublic, token) => {
   const response = await fetch(`${APIURL}/routines`, {
      headers: {
         'Content-Type': 'application/json',
         Authorization: `Bearer ${token}`,
      },
      method: 'POST',
      body: JSON.stringify({
         name: name,
         goal: goal,
         isPublic: isPublic,
      }),
   });
   const result = await response.json();
   return result;
};
