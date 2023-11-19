import React, { useState, useEffect } from 'react';

const HelpPrompt = () => {
  const [question, setQuestion] = useState('');
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Display the prompt after 2 seconds
    const timer = setTimeout(() => setShowPrompt(true), 2000);
    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  const submitQuestion = () => {
    if (question.trim()) {
      alert(`Your question: ${question}`);
      setQuestion(''); // Reset the question input after submission
    } else {
      alert('Please enter a valid question.');
    }
  };

  // Define the styles as an object
  const styles = {
    helpPrompt: {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      backgroundColor: '#2C3E50', // dark blue
      color: '#ECF0F1', // light grey
      padding: '20px',
      borderRadius: '8px',
      width: '240px',
      boxShadow: '0px 0px 10px rgba(0, 0, 0 ,0.1)',
      fontSize: '16px',
      zIndex: 1000, // Ensure it's above other content
    },
    questionInput: {
      width: '100%',
      padding: '15px',
      border: 'none',
      borderRadius: '4px',
      marginBottom: '15px',
      boxSizing: 'border-box',
      fontSize: '16px',
    },
    submitButton: {
      backgroundColor: '#3498DB', // blueish
      color: '#FFF',
      border: 'none',
      padding: '12px 20px',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      fontSize: '16px',
    },
  };

  return showPrompt ? (
    <div style={styles.helpPrompt}>
      <textarea
        style={styles.questionInput}
        placeholder="Enter your question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button style={styles.submitButton} onClick={submitQuestion}>
        Submit
      </button>
    </div>
  ) : null;
};

export default HelpPrompt;