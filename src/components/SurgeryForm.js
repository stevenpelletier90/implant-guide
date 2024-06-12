import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SurgeryForm = () => {
  const [formData, setFormData] = useState({
    primaryGoals: [],
    recoveryTime: '',
    naturalFeel: '',
    desiredOutcome: '',
  });
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === 'primaryGoals') {
      setFormData((prevData) => ({
        ...prevData,
        primaryGoals: checked
          ? [...prevData.primaryGoals, value]
          : prevData.primaryGoals.filter((item) => item !== value),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    const errors = {};

    if (formData.primaryGoals.length === 0) {
      errors.primaryGoals = 'Please select at least one primary goal.';
    }
    if (!formData.recoveryTime) {
      errors.recoveryTime = 'Please select your preferred recovery time.';
    }
    if (!formData.naturalFeel) {
      errors.naturalFeel =
        'Please select how important the natural feel of the breasts is to you.';
    }
    if (!formData.desiredOutcome) {
      errors.desiredOutcome = 'Please select your desired outcome.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowRecommendations(true);
    }
  };

  const getRecommendedProcedure = () => {
    const { primaryGoals, recoveryTime } = formData;
    const procedureScores = {
      'breast augmentation': 0,
      'breast reduction': 0,
      'breast lift': 0,
    };

    primaryGoals.forEach((goal) => {
      switch (goal) {
        case 'increaseSize':
        case 'improveShape':
        case 'transferBodyFat':
          procedureScores['breast augmentation']++;
          break;
        case 'reduceSize':
          procedureScores['breast reduction']++;
          break;
        case 'reduceSagginess':
          procedureScores['breast lift']++;
          break;
        default:
          break;
      }
    });

    switch (recoveryTime) {
      case 'short':
        procedureScores['breast reduction']++;
        break;
      case 'moderate':
        procedureScores['breast lift']++;
        break;
      case 'long':
        procedureScores['breast augmentation']++;
        break;
      default:
        break;
    }

    const recommendedProcedure = Object.keys(procedureScores).reduce((a, b) =>
      procedureScores[a] > procedureScores[b] ? a : b
    );

    return recommendedProcedure;
  };

  const getRecommendedImplant = () => {
    const { naturalFeel } = formData;
    if (naturalFeel === 'veryImportant') {
      return 'We recommend considering silicone implants or fat transfer for a more natural feel.';
    } else if (naturalFeel === 'notTooImportant') {
      return 'Saline implants are a suitable option for you.';
    }
    return '';
  };

  const getOutcomeAdvice = () => {
    const { desiredOutcome } = formData;
    switch (desiredOutcome) {
      case 'natural':
        return 'A natural appearance can be best achieved with silicone implants or fat transfer.';
      case 'enhanced':
        return 'An enhanced appearance can be achieved with saline implants or larger silicone implants.';
      case 'balanced':
        return 'A balanced appearance can be achieved with moderate-sized silicone or saline implants.';
      default:
        return '';
    }
  };

  const recommendedProcedure = getRecommendedProcedure();
  const recommendedImplant = getRecommendedImplant();
  const outcomeAdvice = getOutcomeAdvice();

  return (
    <div className="surgery-form-container">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="primaryGoals">
          <Form.Label>
            What are your primary goals? <span className="text-danger">*</span>
          </Form.Label>
          {formErrors.primaryGoals && (
            <p className="text-danger">{formErrors.primaryGoals}</p>
          )}
          <Form.Check
            type="checkbox"
            name="primaryGoals"
            value="increaseSize"
            label="Increase size of breasts"
            onChange={handleChange}
          />
          <Form.Check
            type="checkbox"
            name="primaryGoals"
            value="reduceSize"
            label="Reduce size of breasts"
            onChange={handleChange}
          />
          <Form.Check
            type="checkbox"
            name="primaryGoals"
            value="reduceSagginess"
            label="Reduce sagginess"
            onChange={handleChange}
          />
          <Form.Check
            type="checkbox"
            name="primaryGoals"
            value="improveShape"
            label="Improve shape"
            onChange={handleChange}
          />
          <Form.Check
            type="checkbox"
            name="primaryGoals"
            value="transferBodyFat"
            label="Transfer body fat to breasts"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="recoveryTime">
          <Form.Label>
            What is your preferred recovery time?{' '}
            <span className="text-danger">*</span>
          </Form.Label>
          {formErrors.recoveryTime && (
            <p className="text-danger">{formErrors.recoveryTime}</p>
          )}
          <Form.Check
            type="radio"
            name="recoveryTime"
            value="short"
            label="Short (2-6 weeks)"
            onChange={handleChange}
          />
          <Form.Check
            type="radio"
            name="recoveryTime"
            value="moderate"
            label="Moderate (2-4 weeks)"
            onChange={handleChange}
          />
          <Form.Check
            type="radio"
            name="recoveryTime"
            value="long"
            label="Long (4-6 weeks)"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="naturalFeel">
          <Form.Label>
            How important is the natural feel of the breasts to you?{' '}
            <span className="text-danger">*</span>
          </Form.Label>
          {formErrors.naturalFeel && (
            <p className="text-danger">{formErrors.naturalFeel}</p>
          )}
          <Form.Check
            type="radio"
            name="naturalFeel"
            value="veryImportant"
            label="Very important"
            onChange={handleChange}
          />
          <Form.Check
            type="radio"
            name="naturalFeel"
            value="notTooImportant"
            label="Not too important"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="desiredOutcome">
          <Form.Label>
            What is your desired outcome? <span className="text-danger">*</span>
          </Form.Label>
          {formErrors.desiredOutcome && (
            <p className="text-danger">{formErrors.desiredOutcome}</p>
          )}
          <Form.Check
            type="radio"
            name="desiredOutcome"
            value="natural"
            label="Natural appearance"
            onChange={handleChange}
          />
          <Form.Check
            type="radio"
            name="desiredOutcome"
            value="enhanced"
            label="Enhanced appearance"
            onChange={handleChange}
          />
          <Form.Check
            type="radio"
            name="desiredOutcome"
            value="balanced"
            label="Balanced appearance"
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-4">
          Get Recommendations
        </Button>
      </Form>

      {showRecommendations && (
        <div className="recommendation mt-4">
          <h2 className="text-center mb-4">{recommendedProcedure}</h2>
          <p>
            Based on your selections, we recommend considering{' '}
            {recommendedProcedure}.
            {recommendedImplant && <> {recommendedImplant}</>}
          </p>
          <p>{outcomeAdvice}</p>
        </div>
      )}
    </div>
  );
};

export default SurgeryForm;
