  // "use client";

  // // import React, { useState } from "react";
  // // import { useRouter } from 'next/router'
  // // import Layout from './layout/Layout';

  // // const studentLogin = () => {
    
    
  // //   return (
  // //     <Layout navbarType={1}>
  // //     <div className="container container-fluid">
  // //       <div className="row mt-5 d-flex justify-content-center">
  // //         <div className="col-10 col-lg-5 ">
  // //           <form
  // //             className="border border-secondary rounded p-4"
  // //             onSubmit={submitHandler}
  // //           >
  // //             <h1 className="mb-4">Login</h1>
  // //             <div className="form-outline mb-4">
  // //               <label className="form-label" for="username_field">
  // //                 User Name
  // //               </label>
  // //               <input
  // //                 type="text"
  // //                 id="text_field"
  // //                 className="form-control"
  // //                 value={email}
  // //                 onChange={(e) => setEmail(e.target.value)}
  // //               />
  // //               </div>

  // //             <div className="form-outline mb-4">
  // //               <label className="form-label" for="password_field">
  // //                 Password
  // //               </label>
  // //               <input
  // //                 type="password"
  // //                 id="password_field"
  // //                 className="form-control"
  // //                 value={password}
  // //                 onChange={(e) => setPassword(e.target.value)}
  // //               />

  // //             </div>

  // //             <button
  // //               type="submit"
  // //               className="btn btn-block w-100 btn-primary btn-block mb-4"
  // //             >
  // //               Sign in
  // //             </button>

            
  // //           </form>
  // //         </div>
  // //       </div>
  // //     </div>
  // //     </Layout>
  // //   );
  // // };

  // // export default studentLogin

  // import { useState } from 'react'
  // import { useRouter } from 'next/router'

  // export default function Admin() {
  //   const [username, setUsername] = useState('')
  //   const [password, setPassword] = useState('')
  //   const router = useRouter()

  //   const handleSubmit = (event) => {
  //     event.preventDefault()
  //     if (username === 'admin' && password === 'admin') {
  //       router.push('/adminDashboard')
  //     } else {
  //       alert('Invalid username or password')
  //     }
  //   }

 
  //     return (
   
  //       <div className="container container-fluid">
  //         <div className="row mt-5 d-flex justify-content-center">
  //           <div className="col-10 col-lg-5 ">
  //             <form
  //               className="border border-secondary rounded p-4"
  //               onSubmit={handleSubmit}
  //             >
  //               <h1 className="mb-4">Login</h1>
  //               <div className="form-outline mb-4">
  //                 <label className="form-label" for="email_field">
  //                   Email address
  //                 </label>
  //                 <input
  //                   type="text"
  //                   id="email_field"
  //                   className="form-control"
  //                   value={username}
  //                   onChange={(e) => setUsername(e.target.value)}
  //                 />
  //               </div>
    
  //               <div className="form-outline mb-4">
  //                 <label className="form-label" for="password_field">
  //                   Password
  //                 </label>
  //                 <input
  //                   type="password"
  //                   id="password_field"
  //                   className="form-control"
  //                   value={password}
  //                   onChange={(e) => setPassword(e.target.value)}
  //                 />
  //               </div>
    
  //               <button
  //                 type="submit"
  //                 className="btn btn-block w-100 btn-primary btn-block mb-4"
  //               >
  //                 Sign in
  //               </button>
    
              
  //             </form>
  //           </div>
  //         </div>
  //       </div>
    
  //     );
  // }
 
// create a blank react page that says "you are not authorized to view this page" and redirect to that page if the user is not logged in
function Home () {
  return <>
  
  <div>YOU ARE NOT AUTHORIZED</div>

  </>
}

export default Home

