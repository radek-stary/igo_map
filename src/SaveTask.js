// import React from "react";
// import { db } from "./firebase";
// import { useSelector } from "react-redux";
// import { collection, doc, setDoc, Timestamp } from "firebase/firestore";
// import { auth } from "./firebase";

// const Addtask = () => {
//   /* function to add new task to firestore */
//   const handleSubmit = async (e) => {
//     console.log("well at least i am here");
//     try {
//       // Add a new document in collection "cities"
//       const cityRef = doc(db, "users", "RADAAANEW");

//       await setDoc(doc(db, "users", auth.user.displayName), {
//         username: auth.user.displayName,
//         analysis: [
//           {
//             nameOfAnalysis: "someRandomName",
//             analysisHead: {
//               name: "first hypothesis",
//               information: "this is a wonderfull hypothesis",
//             },
//             analysisBody: {
//               name: "Evidence1",
//               relevance: "low",
//               type: "collection",
//               credibility: "high",
//               inputCells: [
//                 "C",
//                 "I",
//                 "N",
//                 "",
//                 "I",
//                 "C",
//                 "C",
//                 "C",
//                 "C",
//                 "I",
//                 "N",
//                 "N",
//               ],
//             },
//           },
//         ],
//       });

//       console.log("Document written with ID: ");
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
//   };

//   return <button onClick={handleSubmit}>Add the the task</button>;
// };

// export default Addtask;