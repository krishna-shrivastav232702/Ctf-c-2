import React, { useEffect } from 'react';

const FormPage = () => {
  useEffect(() => {
    console.log("Copy the sentence below and paste it into the first input field on the CodeSprint website")
    console.log('First part of Challenge 2 solved');
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f0f2f5',
      margin: 0,
      padding: 0
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
        padding: '2.5rem',
        textAlign: 'center',
        maxWidth: '400px',
        width: '90%',
        animation: 'fadeIn 1s ease-out'
      }}>
        <div style={{
          backgroundColor: '#e7f3fe',
          border: '2px solid #3498db',
          borderRadius: '8px',
          padding: '1rem',
          marginBottom: '1.5rem'
        }}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="48" 
            height="48" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#3498db" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={{
              marginBottom: '1rem'
            }}
          >
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
            <path d="M12 8v4"/>
            <path d="M12 16h.01"/>
          </svg>
          <h2 style={{
            color: '#2980b9',
            marginBottom: '0.5rem'
          }}>
            Check Console
          </h2>
          <p style={{
            color: '#34495e',
            fontSize: '1.2rem'
          }}>
            An important message has been logged. Open your browser's developer tools to view it.
          </p>
        </div>
        <p style={{
          color: '#7f8c8d',
          fontSize: '1rem'
        }}>
          Press Ctrl+Shift+J (Windows/Linux) or Cmd+Option+J (Mac) to open developer tools
        </p>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default FormPage;