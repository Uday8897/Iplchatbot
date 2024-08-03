// import axios from "axios";
import React, { useState } from "react";
import Chatbot from "./components/chatbot";
import NewChatBot from "./components/NewChatBot";
// import History from "./components/History";
// export default function App() {
//   const [question, setquestion] = useState("");
//   const [answer, setanswer] = useState("");
//   const [history,sethistory]=useState([{q:"",a:""}])
//   const generateAnswer = async () => {
//     setanswer("Loading......");
//     try {
//       const response = await axios({
//         url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCsyY0sePPqJKeRICAhvvPHX5uk_vBg6bY',
//         method: "POST",
//         data: { "contents": [{ "parts": [{ "text": question }] }] }
//       });
//       setanswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
//       const obj={q:question,a:response['data']['candidates'][0]['content']['parts'][0]['text']};
//       sethistory([...history,obj]);
//     } catch (error) {
//       console.error('There was an error!', error);

//     }
//   };

//   return (
//     <>
//       <div className="flex flex-col items-center mt-8 space-y-8 p-4 bg-gray-100 rounded-lg shadow-lg">
//         <h1 className="rounded-xl text-4xl font-bold text-center bg-blue-600 text-white py-2 px-4">
//           CHAT BOT AI
//         </h1>
//         <textarea
//           value={question}
//           onChange={(e) => {
//             setquestion(e.target.value);
//           }}
//           className="w-full max-w-2xl h-32 p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//           placeholder="Ask a question..."
//         ></textarea>
//         <button
//           className="rounded-xl bg-blue-600 text-white w-40 h-12 hover:bg-blue-700 focus:outline-none focus:border-gray-900"
//           onClick={generateAnswer}
//         >
//           Generate Answer
//         </button>
//         <div className="bg-white p-4 w-full max-w-2xl h-96 overflow-auto rounded-lg shadow-inner">
//           <pre className="text-gray-700 whitespace-pre-wrap">{answer}          {JSON.stringify(history)}
//           </pre>

//         </div>
       
//       </div>
//       <Chatbot/>
//     </>
//   );
// }
export default function App(){
  return(
    <>
  <NewChatBot/>
    
    </>
  )
}