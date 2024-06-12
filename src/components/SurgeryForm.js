import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function SurgeryForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    goals: [],
    implantHistory: '',
    naturalFeel: '',
  });

  const handleGoalChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      goals: checked ? [...prevData.goals, value] : prevData.goals.filter((item) => item !== value),
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="goals">
        <Form.Label>What are your primary goals?</Form.Label>
        <Form.Check type="checkbox" name="goals" value="increaseSize" label="Increase size of breasts" onChange={handleGoalChange} />
        <Form.Check type="checkbox" name="goals" value="reduceSize" label="Reduce size of breasts" onChange={handleGoalChange} />
        <Form.Check type="checkbox" name="goals" value="reduceSagginess" label="Reduce sagginess" onChange={handleGoalChange} />
        <Form.Check type="checkbox" name="goals" value="improveShape" label="Improve shape" onChange={handleGoalChange} />
        <Form.Check type="checkbox" name="goals" value="transferBodyFat" label="Transfer body fat to breasts" onChange={handleGoalChange} />
      </Form.Group>

      <Form.Group controlId="implantHistory">
        <Form.Label>Have you ever had breast implants?</Form.Label>
        <Form.Check type="radio" name="implantHistory" value="yes" label="Yes" onChange={handleChange} />
        <Form.Check type="radio" name="implantHistory" value="no" label="No" onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="naturalFeel">
        <Form.Label>How important is the natural feel of the breasts to you?</Form.Label>
        <Form.Check type="radio" name="naturalFeel" value="veryImportant" label="Very important" onChange={handleChange} />
        <Form.Check type="radio" name="naturalFeel" value="notTooImportant" label="Not too important" onChange={handleChange} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Get Recommendations
      </Button>
    </Form>
  );
}

export default SurgeryForm;
