// help prompt

import React, { useState } from 'react';

function HelpPrompt() {
  const [question, setQuestion] = useState('');
  const [isPromptVisible, setIsPromptVisible] = useState(true); // You can set this to false initially if you want the prompt to be hidden by default

  const handleQuestionSubmit = () => {
    if (question.trim()) {
      alert(`Your question: ${question}`);
      setQuestion('');
    } else {
      alert('Please enter a valid question.');
    }
  };

  return (
    isPromptVisible && (
      <div className="fixed bottom-5 right-5 bg-blue-700 text-white p-4 rounded-lg shadow-lg z-50">
        <div className="text-lg mb-2">Ask a Question</div>
        <textarea
          className="w-full p-2 border border-gray-300 rounded mb-2" 
          placeholder="Enter your question here..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow"
          onClick={handleQuestionSubmit}
        >
          Submit
        </button>
      </div>
    )
  );
}

export default HelpPrompt;
