// help prompt

 import React, { useState } from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

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
      <div className="fixed bottom-5 right-5 bg-gray-800 text-white p-6 rounded-3xl shadow-2xl border border-gray-600 z-50 w-1/4 min-w-max">
        <div className="text-lg mb-4 font-semibold">What can I help you with?</div>
        <div className="flex">
          <textarea
            className="flex-grow p-3 border border-gray-500 rounded-l-3xl resize-none bg-gray-700"
            placeholder="Enter your question here..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            rows={1}
            style={{ minHeight: '44px' }}
          />
          <button
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 rounded-r-3xl shadow flex items-center"
            onClick={handleQuestionSubmit}
          >
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </div>
    )
  );
}

export default HelpPrompt;
