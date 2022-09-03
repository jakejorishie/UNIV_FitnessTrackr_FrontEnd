import React, { useState } from 'react';
import { APIURL } from '../api/index';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const AddActivities = ({ activities, setActivities, token }) => {
   const [name, setName] = useState([]);
   const [description, setDescription] = useState([]);

   const handleSubmit = async (event) => {
      event.preventDefault();
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
   };

   return (
      <Form onSubmit={handleSubmit}>
         <Form.Group
            as={Row}
            className='mb-3'
            controlId='formHorizontalEmail'
            onChange={(event) => setName(event.target.value)}>
            <Form.Label column sm={2}>
               Activity
            </Form.Label>
            <Col sm={10}>
               <Form.Control />
            </Col>
         </Form.Group>

         <Form.Group
            as={Row}
            className='mb-3'
            controlId='formHorizontalPassword'
            onChange={(event) => setDescription(event.target.value)}>
            <Form.Label column sm={2}>
               Description
            </Form.Label>
            <Col sm={10}>
               <Form.Control />
            </Col>
         </Form.Group>

         <Form.Group as={Row} className='mb-3'>
            <Col sm={{ span: 10, offset: 2 }}>
               <Button type='submit'>Add Activity</Button>
            </Col>
         </Form.Group>
      </Form>
   );
};

export default AddActivities;
