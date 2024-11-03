import React,{useState,useRef} from 'react'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import CVForm from '../components/CvForm/CvForm';
import CVPreview from '../components/CvForm/CvPreview';
import './CV.css'

const CV = () => {
    const [cvData, setCvData] = useState({});
    const printRef = useRef();
  
    const handleFormDataChange = (data) => {
      setCvData(data); // Ensure cvData is updated with the new data
      console.log('Form Data:', data);
    };
  
    const handleDownloadPDF = async () => {
      const input = printRef.current;
      const canvas = await html2canvas(input);
      const dataURL = canvas.toDataURL('image/png');
  
      const pdf = new jsPDF();
      pdf.addImage(dataURL, 'PNG', 0, 0);
      pdf.save('cv.pdf');
    };
  return (
    <div className="cv-builder_cont">
    <h1>Resume Builder</h1>
    <div className="cv-builder">
      {/* <div  className="cv-form"> */}
        <CVForm onChange={handleFormDataChange} />
      {/* </div> */}
      <div ref={printRef} className="cv-preview">
        <CVPreview data={cvData} />
      </div>
    </div>
    <button onClick={handleDownloadPDF}>Download as PDF</button>
  </div>
  )
}

export default CV
