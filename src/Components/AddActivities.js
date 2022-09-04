import React, { useState } from 'react';
import { APIURL } from '../api/index';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Box from '@mui/material/Box';
import { TextField, CssBaseline } from '@mui/material';
import { Container } from '@mui/system';


const AddActivities = ({ activities, setActivities, token }) => {
   

   const [name, setName] = useState([]);
   const [description, setDescription] = useState([]);
  


   const handleSubmit = async (event) => {
      event.preventDefault();
      const navigate = useNavigate;
      const token = localStorage.getItem('token');
      const response = await fetch(`${APIURL}/activities`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
         body: JSON.stringify({
            name,
            description,
         }),
      });
      const data = await response.json();
      console.log('data: ', data);
      setActivities([data, ...activities]);
      setName('');
      setDescription('');
      navigate('/activities');
   };

   return (
      <>
      <Container component='main' maxWidth='xs'>
            <CssBaseline />
      <Box style={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
               }}
               component='form' onSubmit={handleSubmit}>
      <TextField
         margin='normal'
         fullWidth
         id='outlined'
         label='Name'
         value={name}
         onChange={(e) => setName(e.target.value)}></TextField>
      <TextField
         margin='normal'
         fullWidth
         id='outlined'
         label='Description'
         value={description}
         onChange={(e) => setDescription(e.target.value)}></TextField>
      <Button
         variant='contained'
         type='submit'
         margin='normal'
         aria-label='send'>
         Create New Activity
      </Button>
   </Box>
   </Container>
   </>
      // <Form onSubmit={handleSubmit}>
      //    <Form.Group
      //       as={Row}
      //       className='mb-3'
      //       controlId='formHorizontalEmail'
      //       onChange={(event) => setName(event.target.value)}>
      //       <Form.Label column sm={2}>
      //          Activity
      //       </Form.Label>
      //       <Col sm={10}>
      //          <Form.Control />
      //       </Col>
      //    </Form.Group>

      //    <Form.Group
      //       as={Row}
      //       className='mb-3'
      //       controlId='formHorizontalPassword'
      //       onChange={(event) => setDescription(event.target.value)}>
      //       <Form.Label column sm={2}>
      //          Description
      //       </Form.Label>
      //       <Col sm={10}>
      //          <Form.Control />
      //       </Col>
      //    </Form.Group>

      //    <Form.Group as={Row} className='mb-3'>
      //       <Col sm={{ span: 10, offset: 2 }}>
      //          <Button onClick={newPage} type='submit'>Add Activity</Button>
      //       </Col>
      //    </Form.Group>
      // </Form>
   );
};

export default AddActivities;
