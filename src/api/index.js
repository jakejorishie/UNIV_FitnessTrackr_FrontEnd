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

export const getUser = async ({ token }) => {
   const response = await fetch(`${APIURL}/users/me`, {
      headers: {
         'Content-Type': 'application/json',
         Authorization: `Bearer ${token}`,
      },
   })
      .then((response) => response.json())
      .then((result) => {
         return result;
      })
      .catch(console.error);
   return response;
};

export const fetchAllActivities = async () => {
   const response = await fetch(`${APIURL}/activities`, {
      headers: {
         'Content-Type': 'application/json',
      },
   });
   const result = await response.json();
   return result;
};

export const fetchAllRoutines = async () => {
   const response = await fetch(`${APIURL}/routines`, {
      headers: {
         'Content-Type': 'application/json',
      },
   });
   const result = await response.json();
   return result;
};

export const attachActivity = async ({
   activityId,
   count,
   duration,
}) => {
   const response = await fetch(
      `${APIURL}routines/${activityId}/activities`,
      {
         method: 'POST',
         body: JSON.stringify({
            activityId,
            count,
            duration,
         }),
      }
   );
   const result = await response.json();
   return result;
};

export const deleteRoutine = async ({ routineId, token }) => {
   const response = await fetch(`${APIURL}/routines/${routineId}`, {
      method: 'DELETE',
      headers: {
         'Content-Type': 'application/json',
         Authorization: `Bearer${token}`,
      },
   });
   const result = await response.json();
   return result;
};
