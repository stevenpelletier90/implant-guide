import React from 'react';

const SurgeryRecommendation = ({ formData }) => {
  if (!formData) {
    return null;
  }

  const { primaryGoals, recoveryTime, naturalFeel, desiredOutcome } = formData;

  const getRecommendedProcedure = () => {
    const procedures = new Set();

    primaryGoals.forEach((goal) => {
      switch (goal) {
        case 'increaseSize':
          procedures.add('breast augmentation');
          break;
        case 'reduceSize':
          procedures.add('breast reduction');
          break;
        case 'reduceSagginess':
          procedures.add('breast lift');
          break;
        case 'improveShape':
          procedures.add('breast augmentation');
          break;
        case 'transferBodyFat':
          procedures.add('breast augmentation');
          break;
        default:
          break;
      }
    });

    switch (recoveryTime) {
      case 'short':
        procedures.add('breast reduction');
        break;
      case 'moderate':
        procedures.add('breast lift');
        break;
      case 'long':
        procedures.add('breast augmentation with implants');
        break;
      default:
        break;
    }

    return Array.from(procedures).join(', ');
  };

  const getRecommendedImplant = () => {
    if (naturalFeel === 'veryImportant') {
      return 'We recommend considering silicone implants or fat transfer for a more natural feel.';
    } else if (naturalFeel === 'notTooImportant') {
      return 'Saline implants are a suitable option for you.';
    }
    return '';
  };

  const getOutcomeAdvice = () => {
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
    <div className="recommendation">
      <h2 className="text-center mb-4">{recommendedProcedure}</h2>
      <p>
        Based on your selections, we recommend considering{' '}
        {recommendedProcedure}.
        {recommendedImplant && <> {recommendedImplant}</>}
      </p>
      <p>{outcomeAdvice}</p>
    </div>
  );
};

export default SurgeryRecommendation;
