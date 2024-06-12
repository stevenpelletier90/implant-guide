import React from 'react';

const SurgeryRecommendation = ({ formData }) => {
  if (!formData) {
    return null;
  }

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
    <div className="recommendation mt-4">
      <h2 className="text-center mb-4">
        Recommended Implant: {recommendedImplant}
      </h2>
    </div>
  );
};

export default SurgeryRecommendation;
