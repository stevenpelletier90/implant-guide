import React from 'react';

function SurgeryRecommendation({ goals, implantHistory, naturalFeel }) {
  const getRecommendedProcedure = () => {
    if (goals.includes('increaseSize')) {
      return 'breast augmentation or breast lift';
    } else if (goals.includes('reduceSize')) {
      return 'breast reduction or breast lift';
    } else if (goals.includes('reduceSagginess')) {
      return 'breast lift, breast reduction, or breast augmentation';
    } else if (goals.includes('improveShape')) {
      return 'breast augmentation, breast lift, or breast reduction';
    } else if (goals.includes('transferBodyFat')) {
      return 'breast augmentation or breast lift';
    } else {
      return 'breast augmentation, breast lift, or breast reduction';
    }
  };

  const getRecommendedImplant = () => {
    if (naturalFeel === 'veryImportant') {
      return 'silicone implants or fat transfer';
    } else if (naturalFeel === 'notTooImportant') {
      return 'saline implants';
    }
    return '';
  };

  const recommendedProcedure = getRecommendedProcedure();
  const recommendedImplant = getRecommendedImplant();

  return (
    <div className="recommendation">
      <h2 className="text-center mb-4">{recommendedProcedure}</h2>
      <p>
        Based on your selections, we recommend considering {recommendedProcedure}.{recommendedImplant && <> Given your preference on natural feel, we also recommend considering {recommendedImplant}.</>}
      </p>
    </div>
  );
}

export default SurgeryRecommendation;
