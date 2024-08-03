// import React from 'react'
// import axios from 'axios';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';


// export default function chatbot() {
//     const [question, setquestion] = useState("");
//     const [answer, setanswer] = useState("");
//     const [history,sethistory]=useState([])
//     const generateAnswer = async () => {
//       setanswer("Loading......");
//       try {
//         const response = await axios({
//           url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCsyY0sePPqJKeRICAhvvPHX5uk_vBg6bY',
//           method: "POST",
//           data: { "contents": [{ "parts": [{ "text": question }] }] }
//         });
//         alert(response)
//         setanswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
//         const obj={q:question,a:response['data']['candidates'][0]['content']['parts'][0]['text']};
//         sethistory([...history,obj]);
//       } catch (error) {
//         console.error('There was an error!', error);
  
//       }
//     };
  
//     return (
//       <>
//         <div className="flex flex-col items-center mt-8 space-y-8 p-4 bg-gray-100 rounded-lg ">
//           <h1 className="rounded-xl text-4xl font-bold text-center bg-blue-600 text-white py-2 px-4">
//             CHAT BOT AI
//           </h1>
          
//           <textarea
//             value={question}
//             onChange={(e) => {
//               setquestion(e.target.value);
//             }}
//             className="w-full max-w-2xl h-32 p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//             placeholder="Ask a question..."
//           ></textarea>
//           <button
//             className="rounded-xl bg-blue-600 text-white w-40 h-12 hover:bg-blue-700 focus:outline-none focus:border-gray-900"
//             onClick={generateAnswer}
//           >
//             Generate Answer
//           </button>
//           <div className="bg-white p-4 w-2/4 h-96 overflow-auto rounded-lg">
//             <p className="text-gray-700 whitespace-pre-wrap">{answer} 
//             </p>
  
//           </div>
//           {
// (history.length>=1)  ?(
//         <div className='flex flex-col items-center h-auto w-2/4 bg-gray-100'>
//         <h3 className='text-2xl text-center rounded-xl bg-blue-600 text-white w-40 h-12 hover:bg-blue-700 focus:outline-none focus:border-gray-900 pt-2'>History</h3>
//         <ul className="space-y-4">
//         {history.map((item, index) => (
           
//           <li key={index} className="bg-gray-100 shadow-md rounded-lg p-4">
//             <p className="text-lg font-semibold">Question:</p>
//             <p className="text-gray-700">{item.q}</p>
//             <p className="text-lg font-semibold mt-2">Answer:</p>
//             <p className="text-gray-700">{item.a}</p>
//           </li>
//         ))}
//       </ul>
//       </div>):(<h1 className='text-2xl'>No history</h1>)}
         
//         </div>


//       </>

//     );
//   }
  
import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Chatbot() {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [history, setHistory] = useState([]);

    const generateAnswer = async () => {

    
        setAnswer("Loading......");
        try {
            const response = await axios({
                url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCsyY0sePPqJKeRICAhvvPHX5uk_vBg6bY',
                method: "POST",
                data: {
                    "contents": [{
                        "parts": [{
                            "text": `Please provide information related to the IPL (Indian Premier League). Only respond to IPL-related questions. Question: ${question}`

                        }]
                    }]
                }
            });
            alert(response);
            setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
            const obj = { q: question, a: response['data']['candidates'][0]['content']['parts'][0]['text'] };
            setHistory([...history, obj]);
        } catch (error) {
            console.error('There was an error!', error);
            setAnswer("Sorry, something went wrong. Please try again.");
        }
    };

    return (
        <>
            <div className="flex flex-col items-center mt-8 space-y-8 p-4 bg-gray-100 rounded-lg ">
                <h1 className="rounded-xl text-4xl font-bold text-center bg-blue-600 text-white py-2 px-4">
                    IPL CHAT BOT
                </h1>

                <textarea
                    value={question}
                    onChange={(e) => {
                        setQuestion(e.target.value);
                    }}
                    className="w-full max-w-2xl h-32 p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Ask a question about IPL..."
                ></textarea>
                <button
                    className="rounded-xl bg-blue-600 text-white w-40 h-12 hover:bg-blue-700 focus:outline-none focus:border-gray-900"
                    onClick={generateAnswer}
                >
                    Generate Answer
                </button>
                <div className="bg-white p-4 w-2/4 h-96 overflow-auto rounded-lg">
                    <p className="text-gray-700 whitespace-pre-wrap">{answer}
                    </p>
                </div>
                {
                    (history.length >= 1) ? (
                        <div className='flex flex-col items-center h-auto w-2/4 bg-gray-100'>
                            <h3 className='text-2xl text-center rounded-xl bg-blue-600 text-white w-40 h-12 hover:bg-blue-700 focus:outline-none focus:border-gray-900 pt-2'>History</h3>
                            <ul className="space-y-4">
                                {history.map((item, index) => (
                                    <li key={index} className="bg-gray-100 shadow-md rounded-lg p-4">
                                        <p className="text-lg font-semibold">Question:</p>
                                        <p className="text-gray-700">{item.q}</p>
                                        <p className="text-lg font-semibold mt-2">Answer:</p>
                                        <p className="text-gray-700">{item.a}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <h1 className='text-2xl'>No history</h1>
                    )
                }
            </div>
        </>
    );
}
