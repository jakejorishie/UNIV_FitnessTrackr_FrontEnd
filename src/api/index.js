export const APIURL = 'https://fitnesstrac-kr.herokuapp.com/api';

export async function loginUser({ username, password }) {
   return fetch(`${APIURL}/users/login`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify({
         username: username,
         password: password,
      }),
   })
      .then((response) => response.json())
      .then((result) => {
         console.log(result);
         return result;
      })
      .catch(console.error);
}
