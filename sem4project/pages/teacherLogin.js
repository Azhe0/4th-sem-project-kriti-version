// "use client";

// import Link from "next/link";
// import React, { useState } from "react";
// import Layout from './layout/Layout';

// const teacherLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const submitHandler = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <Layout navbarType={1}>
//     <div className="container container-fluid">
//       <div className="row mt-5 d-flex justify-content-center">
//         <div className="col-10 col-lg-5 ">
//           <form
//             className="border border-secondary rounded p-4"
//             onSubmit={submitHandler}
//           >
//             <h1 className="mb-4">Login</h1>
//             <div className="form-outline mb-4">
//               <label className="form-label" for="email_field">
//                 Email address
//               </label>
//               <input
//                 type="email"
//                 id="email_field"
//                 className="form-control"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             <div className="form-outline mb-4">
//               <label className="form-label" for="password_field">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password_field"
//                 className="form-control"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>

//             <button
//               type="submit"
//               className="btn btn-block w-100 btn-primary btn-block mb-4"
//             >
//               Sign in
//             </button>

          
//           </form>
//         </div>
//       </div>
//     </div>
//     </Layout>
//   );
// };

// export default teacherLogin;