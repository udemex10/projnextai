import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faExpandAlt, faCompressAlt, faWindowMinimize } from '@fortawesome/free-solid-svg-icons';

function HelpPrompt() {
  const [activeTab, setActiveTab] = useState('Assistant');
  const [question, setQuestion] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false); // State to manage minimization

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

      let typedResponse = '';
      const fullResponse = apiResponse.data.result;
      const typeCharacterByCharacter = (pos) => {
        if (pos < fullResponse.length) {
          typedResponse += fullResponse.charAt(pos);
          setChatHistory([...chatHistory, { question, response: typedResponse }]);
          setTimeout(() => typeCharacterByCharacter(pos + 1), 30);
        } else {
          setChatHistory(prevHistory => prevHistory.map((item, index) =>
            index === prevHistory.length - 1 ? { ...item, response: fullResponse } : item));
        }
      };

      setChatHistory([...chatHistory, { question, response: '' }]);
      typeCharacterByCharacter(0);
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

  const handleMinimizeClick = () => {
    setIsMinimized(!isMinimized);
  };

  const tabs = ['Assistant', 'CAD Building', 'Knowledge transfer'];

  const baseClasses = "fixed bottom-5 right-5 bg-gray-800 text-white p-4 rounded-3xl shadow-2xl border border-gray-300 z-50 transition-all ease-in-out duration-300";
  const sizeClasses = isExpanded ? "w-full h-full max-w-4xl max-h-screen" : "w-1/4 h-auto max-w-xl";
  const minimizedClasses = isMinimized ? "h-14 overflow-hidden" : "";

  // Dynamically adjust the max height based on content
  let responseAreaMaxHeight = '0px';
  if (isLoading) {
    responseAreaMaxHeight = '100px';
  } else if (chatHistory.length > 0) {
    responseAreaMaxHeight = '300px';
  }

  return (
    <div className={`${baseClasses} ${sizeClasses} ${minimizedClasses} flex flex-col`}>
      {!isMinimized && (
        <>
          <div className="text-xl mb-4 font-bold">What can I help you with?</div>
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
        </>
      )}
      <div className="absolute top-3 right-3 flex items-center">
        <button
          className="text-lg p-1"
          onClick={handleMinimizeClick}
          title="Minimize/Maximize"
        >
          <FontAwesomeIcon icon={isMinimized ? faExpandAlt : faWindowMinimize} />
        </button>
        <button
          className="text-lg p-1 ml-2"
          onClick={handleExpandClick}
          title="Expand/Compress"
        >
          <FontAwesomeIcon icon={isExpanded ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
    </div>
  );
}

export default HelpPrompt;
