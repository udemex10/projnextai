import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faExpandAlt, faCompressAlt } from '@fortawesome/free-solid-svg-icons';

function HelpPrompt() {
  const [activeTab, setActiveTab] = useState('Assistant');
  const [question, setQuestion] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false)

  const handleQuestionSubmit = async () => {
    if (!question.trim()) {
      alert('Please enter a valid question.');
      return;
    }

    setIsLoading(true);
    try {
      const apiResponse = await axios.post('/api/openaiassistant', {
        question,
        chatbot: activeTab
      });

      setChatHistory([...chatHistory, { question, response: apiResponse.data.result }]);
      setQuestion('');
    } catch (error) {
      console.error('Error sending question:', error);
      setChatHistory([...chatHistory, { question, response: 'Error fetching response.' }]);
    } finally {
      setIsLoading(false);
    }
  };

    const handleExpandClick = () => {
      setIsExpanded(!isExpanded);
      document.body.style.overflow = isExpanded ? 'auto' : 'hidden';
    };

    const tabs = ['Assistant', 'CAD Building', 'Knowledge transfer'];

    const baseClasses = "fixed bottom-5 right-5 bg-gray-800 text-white p-6 rounded-3xl shadow-2xl border border-gray-300 z-50";
    const sizeClasses = isExpanded ? "w-full h-full max-w-4xl max-h-screen" : "w-1/3 h-auto max-w-2xl";

    // Dynamically adjust the max height
    let responseAreaMaxHeight = '0px';
    if (isLoading) {
      responseAreaMaxHeight = '100px'; // Small expansion for loading
    } else if (chatHistory.length > 0) {
      responseAreaMaxHeight = '300px'; // Larger expansion for responses
    }


    return (
      <div className={`${baseClasses} ${sizeClasses} flex flex-col`}>
        <div className="text-2xl mb-4 font-bold">What can I help you with?</div>
        <div className="flex mb-4 border-b border-gray-300">
          {tabs.map(tab => (
            <div
              key={tab}
              className={`flex-1 text-center cursor-pointer py-2 ${tab === activeTab ? 'border-b-2 border-blue-500 font-semibold' : 'text-gray-500'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          ))}
        </div>
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
            disabled={isLoading}
          >
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
        <div className="flex-grow mt-4 bg-gray-700 p-3 rounded-md overflow-auto" style={{ maxHeight: responseAreaMaxHeight, transition: 'max-height 0.3s ease' }}>
          <div className="text-left">
            {isLoading ? 'Loading...' : chatHistory.map((item, index) => (
              <div key={index}>
                <p className="text-blue-500">Q: {item.question}</p>
                <p className="whitespace-pre-wrap">A: {item.response}</p>
              </div>
              ))}
          </div>
        </div>
        <button
          className="absolute top-3 right-3 text-lg"
          onClick={handleExpandClick}
          >
           <FontAwesomeIcon icon={isExpanded ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
    );
  }

  export default HelpPrompt;