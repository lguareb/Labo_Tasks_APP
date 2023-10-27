import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { PersonBoundingBox, EnvelopeAt, TelephoneFill } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';

const formInputs = [
    { 
      controlId: 'nameInput', 
      type: 'text', 
      label: 'Your name', 
      placeholder: 'John Doe',
      icon: 'PersonBoundingBox'
    },
    {
      controlId: 'telInput',
      type: 'number',
      label: 'Phone number',
      placeholder: '+01 234 567 8900',
      icon: 'TelephoneFill'
    },
    { 
      controlId: 'emailInput',
      type: 'email',
      label: 'Email address',
      placeholder: "you@example.com",
      icon: 'EnvelopeAt'
    },
  ]
 
  const FormStyle = {
    container: {
      color: 'blue',
      lineHeight: 3,
      padding: '1.5em',
      maxWidth: '55%',
      margin: 'auto',
    },

 }

const ContactForm = () => {
  return (
    <Form style={FormStyle.container}>
   
      <Form.Group className="mb-3" controlId="nameInput">
        <Form.Label column="lg" lg={2}>Your name</Form.Label>
        <InputGroup className="mb-2">
          <InputGroup.Text>
            <PersonBoundingBox />
          </InputGroup.Text>
          <Form.Control type="text" placeholder="John Doe" />
        </InputGroup>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="telInput">
        <Form.Label column="lg" lg={2}>Phone number</Form.Label>
        <InputGroup className="mb-2">
          <InputGroup.Text>
            <TelephoneFill />
          </InputGroup.Text>
          <Form.Control type="text" placeholder="+01 234 567 8900" />
        </InputGroup>
      </Form.Group>
 
      <Form.Group className="mb-3" controlId="emailInput">
      <Form.Label column="lg" lg={2}>Email address</Form.Label>
      <InputGroup className="mb-2">
        <InputGroup.Text>
          <EnvelopeAt />
        </InputGroup.Text>
        <Form.Control type="email" placeholder="you@example.com" />
      </InputGroup>
    </Form.Group>
      
      <Form.Group className="mb-3" controlId='message'>
      <Form.Label column="lg" lg={2}>Your message</Form.Label>
      <Form.Control placeholder='Write your message' as="textarea" rows={5} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
 
    </Form>
    
  );
}

export default ContactForm