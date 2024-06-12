import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SurgeryForm from './components/SurgeryForm';
import SurgeryRecommendation from './components/SurgeryRecommendation';
import './App.css';

function App() {
  const [formData, setFormData] = useState(null);

  const handleSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className="App">
      <Header />
      <main className="container mt-5">
        {!formData ? (
          <SurgeryForm onSubmit={handleSubmit} />
        ) : (
          <SurgeryRecommendation formData={formData} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
