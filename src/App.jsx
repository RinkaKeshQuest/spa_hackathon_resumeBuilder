// /src/App.js
import React, { useState, useRef } from 'react';
import CVForm from './components/CvForm/CvForm';
import CVPreview from './components/CvForm/CvPreview';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import './App.css';
import AllRoutes from './AllRoutes';

const App = () => {
 

  return (
    <div className="App">
      <AllRoutes/>
    </div>
  );
};

export default App;