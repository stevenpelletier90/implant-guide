import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SurgeryForm from './components/SurgeryForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="content-wrap">
        <Header />
        <main className="container">
          <SurgeryForm />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
