// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import './Loader.css';  // Import the loader CSS

// // const NewChatBot = () => {
// //   const [question, setQuestion] = useState('');
// //   const [answer, setAnswer] = useState('');
// //   const [chatHistory, setChatHistory] = useState([]);
// //   const [isLoading, setIsLoading] = useState(false);  // Loading state

// //   const handleQuestionChange = (event) => {
// //     setQuestion(event.target.value);
// //   };

// //   const handleSendQuestion = async () => {
// //     if (question.trim() === '') return;

// //     setIsLoading(true); 

// //     try {
// //       const response = await axios.post('http://localhost:5000/api/chat', { question });
// //       const newChatHistory = [
// //         ...chatHistory,
// //         { role: 'human', content: question },
// //         { role: 'ai', content: response.data.answer },
// //       ];
// //       setChatHistory(newChatHistory);
// //       setAnswer(response.data.answer);
// //       setQuestion('');
// //     } catch (error) {
// //       console.error('Error sending question:', error);
// //     } finally {
// //       setIsLoading(false);  // Stop loading
// //     }
// //   };

// //   return (
// //           <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
// //       <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
// //         <h1 className="text-2xl font-bold mb-4">ChatBot</h1>
// //         <div className="mb-4">
// //           <input
// //             type="text"
// //             value={question}
// //             onChange={handleQuestionChange}
// //             placeholder="Type your question..."
// //             className="w-full p-2 border border-gray-300 rounded-lg"
// //           />
// //         </div>
// //         <button
// //           onClick={handleSendQuestion}
// //           className="bg-blue-500 text-white p-2 rounded-lg w-full"
// //           disabled={isLoading}  // Disable button while loading
// //         >
// //           {isLoading ? 'Sending...' : 'Send'}
// //         </button>
// //         {isLoading && (
// //           <div className="mt-4 text-center ">
// //             <div className="loader"></div>  
// //           </div>
// //         )}
// //         <div className="mt-4">
// //           <h2 className="text-xl font-semibold">Chat History</h2>
// //           <div className="bg-gray-50 p-4 rounded-lg mt-2">
// //             {chatHistory.map((chat, index) => (
// //               <div
// //                 key={index}
// //                 className={`mb-2 p-2 rounded-lg ${
// //                   chat.role === 'human' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
// //                 }`}
// //               >
// //                 <strong>{chat.role === 'human' ? 'You' : 'AI'}:</strong> {chat.content}
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
          
// //   );
// // };

// // export default NewChatBot;
// import React, { useState } from 'react';
// import axios from 'axios';
// import './Loader.css';  // Import the loader CSS

// const NewChatBot = () => {
//   const [question, setQuestion] = useState('');
//   const [answer, setAnswer] = useState('');
//   const [chatHistory, setChatHistory] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleQuestionChange = (event) => {
//     setQuestion(event.target.value);
//   };

//   const handleSendQuestion = async () => {
//     if (question.trim() === '') return;

//     setIsLoading(true);

//     try {
//       const response = await axios.post('http://127.0.0.1:5000/api/chat', { query });
//       const newChatHistory = [
//         ...chatHistory,
//         { role: 'human', content: question },
//         { role: 'ai', content: response.data.answer }
//         // {retrieved_docs:response.data.retrieved_documents}

//       ];
//       setChatHistory(newChatHistory);
//       setAnswer(response.data.answer);
//       setQuestion('');
//     } catch (error) {
//       console.error('Error sending question:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center relative">
//       <div className={`bg-white shadow-lg rounded-lg p-6 w-full max-w-lg ${isLoading ? 'opacity-50' : ''}`}>
//         <h1 className="text-2xl font-bold mb-4">ChatBot</h1>
//         <div className="mb-4">
//           <input
//             type="text"
//             value={question}
//             onChange={handleQuestionChange}
//             placeholder="Type your question..."
//             className="w-full p-2 border border-gray-300 rounded-lg"
//             disabled={isLoading}
//           />
//         </div>
//         <button
//           onClick={handleSendQuestion}
//           className="bg-blue-500 text-white p-2 rounded-lg w-full"
//           disabled={isLoading}
//         >
//           {isLoading ? 'Sending...' : 'Send'}
//         </button>
//         <div className="mt-4">
//           <h2 className="text-xl font-semibold">Chat History</h2>
//           <div className="bg-gray-50 p-4 rounded-lg mt-2">
//             {chatHistory.map((chat, index) => (
//               <div
//                 key={index}
//                 className={`mb-2 p-2 rounded-lg ${
//                   chat.role === 'human' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
//                 }`}
//               >
//                 <strong>{chat.role === 'human' ? 'You' : 'AI'}:</strong> {chat.content}
//                 {/* <strong>{chat.retrieved_docs}</strong> */}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       {isLoading && (
//         <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50">
//           <div className="loader"></div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NewChatBot;
import React, { useState } from 'react';
import axios from 'axios';
import './Loader.css';  // Import the loader CSS

const NewChatBot = () => {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleQuestionChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSendQuestion = async () => {
    if (query.trim() === '') return;

    setIsLoading(true);
    setError('');

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/chat', { query });
      const newChatHistory = [
        ...chatHistory,
        { role: 'human', content: query },
        { role: 'ai', content: response.data.answer }
      ];
      setChatHistory(newChatHistory);
      setAnswer(response.data.answer);
      setQuery('');
    } catch (error) {
      console.error('Error sending question:', error);
      setError('Failed to get a response from the server. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center relative">
      <div className={`bg-white shadow-lg rounded-lg p-6 w-full max-w-lg ${isLoading ? 'opacity-50' : ''}`}>
        <h1 className="text-2xl font-bold mb-4">ChatBot</h1>
        <div className="mb-4">
          <input
            type="text"
            value={query}
            onChange={handleQuestionChange}
            placeholder="Type your question..."
            className="w-full p-2 border border-gray-300 rounded-lg"
            disabled={isLoading}
          />
        </div>
        <button
          onClick={handleSendQuestion}
          className="bg-blue-500 text-white p-2 rounded-lg w-full"
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Send'}
        </button>
        {error && (
          <div className="mt-4 text-red-500">
            {error}
          </div>
        )}
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Chat History</h2>
          <div className="bg-gray-50 p-4 rounded-lg mt-2">
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded-lg ${
                  chat.role === 'human' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                }`}
              >
                <strong>{chat.role === 'human' ? 'You' : 'AI'}:</strong> {chat.content}
              </div>
            ))}
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
};

export default NewChatBot;
