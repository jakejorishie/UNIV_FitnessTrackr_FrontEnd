// import { Typography } from '@mui/material';
// import * as React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';

// const Logout = ({ token, setToken }) => {
//    const history = useNavigate();
//    const handleLogout = async () => {
//       setToken('');
//       localStorage.removeItem('token');
//       history('/Login');
//    };
//    return (
//       <Card
//          variant='outline'
//          sx={{
//             display: 'flex',
//             backgroundColor: 'aliceblue',
//             boxShadow: '5px 5px grey',
//          }}>
//          <CardContent sx={{ flex: 1 }} key='logout'>
//             <Typography component='h2' variant='h4'>
//                Logging Out?
//             </Typography>
//             <Button
//                variant='outlined'
//                color='error'
//                onClick={handleLogout}>
//                Logout
//             </Button>
//             <Button
//                variant='outlined'
//                color='inherit'
//                onClick={() => history(-1)}>
//                Go Back
//             </Button>
//          </CardContent>
//       </Card>
//    );
// };

// export default Logout;
