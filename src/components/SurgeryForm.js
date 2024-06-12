import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';

const SurgeryForm = () => {
  const [formData, setFormData] = useState({
    naturalAppearance: '',
    breastFeel: '',
    discreetIncisions: '',
    priceImportance: '',
    age: '',
  });
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.naturalAppearance) {
      errors.naturalAppearance =
        'Please select an option for natural appearance.';
    }
    if (!formData.breastFeel) {
      errors.breastFeel = 'Please select an option for breast feel.';
    }
    if (!formData.discreetIncisions) {
      errors.discreetIncisions =
        'Please select an option for discreet incisions.';
    }
    if (!formData.priceImportance) {
      errors.priceImportance =
        'Please select an option for price/cost importance.';
    }
    if (!formData.age) {
      errors.age = 'Please select an option for age.';
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

  const getRecommendedImplant = () => {
    const {
      naturalAppearance,
      breastFeel,
      discreetIncisions,
      priceImportance,
      age,
    } = formData;
    const scores = {
      Silicone: 0,
      Saline: 0,
    };

    if (naturalAppearance === 'very') {
      scores.Silicone++;
    } else {
      scores.Saline++;
    }

    if (breastFeel === 'moreLikeTissue') {
      scores.Silicone++;
    } else {
      scores.Saline++;
    }

    if (discreetIncisions === 'doesntMatter') {
      scores.Silicone++;
    } else {
      scores.Saline++;
    }

    if (priceImportance === 'very') {
      scores.Saline++;
    } else {
      scores.Silicone++;
    }

    if (age === 'yes') {
      scores.Silicone++;
    } else {
      scores.Saline++;
    }

    const recommendedImplant =
      scores.Silicone > scores.Saline ? 'Silicone' : 'Saline';
    return recommendedImplant;
  };

  const recommendedImplant = getRecommendedImplant();

  return (
    <Container className="">
      <Card className="p-4">
        <h2 className="text-center mb-4">Breast Implant Recommendation</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="naturalAppearance" className="form-group">
            <Form.Label className="form-label">
              How concerned are you with having a natural appearance?{' '}
              <span className="text-danger">*</span>
            </Form.Label>
            {formErrors.naturalAppearance && (
              <p className="text-danger">{formErrors.naturalAppearance}</p>
            )}
            <Form.Check
              type="radio"
              name="naturalAppearance"
              value="very"
              label="Very"
              onChange={handleChange}
              id="naturalAppearance-very"
              className="form-check"
            />
            <Form.Check
              type="radio"
              name="naturalAppearance"
              value="doesntMatter"
              label="Doesn't Matter"
              onChange={handleChange}
              id="naturalAppearance-doesntMatter"
              className="form-check"
            />
          </Form.Group>

          <Form.Group controlId="breastFeel" className="form-group">
            <Form.Label className="form-label">
              Do you want the breasts to feel slightly firmer or more like
              breast tissue? <span className="text-danger">*</span>
            </Form.Label>
            {formErrors.breastFeel && (
              <p className="text-danger">{formErrors.breastFeel}</p>
            )}
            <Form.Check
              type="radio"
              name="breastFeel"
              value="slightlyFirmer"
              label="Slightly Firmer"
              onChange={handleChange}
              id="breastFeel-slightlyFirmer"
              className="form-check"
            />
            <Form.Check
              type="radio"
              name="breastFeel"
              value="moreLikeTissue"
              label="More Like Breast Tissue"
              onChange={handleChange}
              id="breastFeel-moreLikeTissue"
              className="form-check"
            />
          </Form.Group>

          <Form.Group controlId="discreetIncisions" className="form-group">
            <Form.Label className="form-label">
              How important is having discreet incisions and scars?{' '}
              <span className="text-danger">*</span>
            </Form.Label>
            {formErrors.discreetIncisions && (
              <p className="text-danger">{formErrors.discreetIncisions}</p>
            )}
            <Form.Check
              type="radio"
              name="discreetIncisions"
              value="very"
              label="Very"
              onChange={handleChange}
              id="discreetIncisions-very"
              className="form-check"
            />
            <Form.Check
              type="radio"
              name="discreetIncisions"
              value="doesntMatter"
              label="Doesn't Matter"
              onChange={handleChange}
              id="discreetIncisions-doesntMatter"
              className="form-check"
            />
          </Form.Group>

          <Form.Group controlId="priceImportance" className="form-group">
            <Form.Label className="form-label">
              How important is price/cost?{' '}
              <span className="text-danger">*</span>
            </Form.Label>
            {formErrors.priceImportance && (
              <p className="text-danger">{formErrors.priceImportance}</p>
            )}
            <Form.Check
              type="radio"
              name="priceImportance"
              value="very"
              label="Very"
              onChange={handleChange}
              id="priceImportance-very"
              className="form-check"
            />
            <Form.Check
              type="radio"
              name="priceImportance"
              value="notTooImportant"
              label="Not Too Important"
              onChange={handleChange}
              id="priceImportance-notTooImportant"
              className="form-check"
            />
          </Form.Group>

          <Form.Group controlId="age" className="form-group">
            <Form.Label className="form-label">
              Are you 22 or older? <span className="text-danger">*</span>
            </Form.Label>
            {formErrors.age && <p className="text-danger">{formErrors.age}</p>}
            <Form.Check
              type="radio"
              name="age"
              value="yes"
              label="Yes"
              onChange={handleChange}
              id="age-yes"
              className="form-check"
            />
            <Form.Check
              type="radio"
              name="age"
              value="no"
              label="No"
              onChange={handleChange}
              id="age-no"
              className="form-check"
            />
          </Form.Group>

          <div className="d-flex justify-content-center">
            <Button variant="primary" type="submit" className="mt-4">
              Get Recommendations
            </Button>
          </div>
        </Form>

        {showRecommendations && (
          <div className="recommendation mt-4">
            <h2 className="text-center mb-4">
              Recommended Implant: {recommendedImplant}
            </h2>
          </div>
        )}
      </Card>
    </Container>
  );
};

export default SurgeryForm;
