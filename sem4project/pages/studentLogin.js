 "use client";
// import{useState} from "react";
// import { signIn } from "next-auth/react";
// import { useRouter } from "next/router";

// const studentLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();



//   const submitHandler = async(e) => {
//     e.preventDefault();
//     const result = await signIn("credentials", {
//       redirect: false,
//       email,
//       password,
//     });
//     if (result.error) {
//      console.log(error);
//     }else{
//       router.push("/studentDashboard");
//     }
//   }

//   return (
   
//     <div className="container container-fluid">
//       <div className="row mt-5 d-flex justify-content-center">
//         <div className="col-10 col-lg-5 ">
//           <form
//             className="border border-secondary rounded p-4"
//             onSubmit={submitHandler}
//           >
//             <h1 className="mb-4">Login</h1>
//             <div className="form-outline mb-4">
//               <label className="form-label" htmlFor="email_field">
//                 Email address
//               </label>
//               <input
//                 type="email"
//                 id="email_field"
//                 className="form-control"
//                 value={email}
//                 onChange={(e) =>setEmail(e.target.value)}
//               />
//             </div>

//             <div className="form-outline mb-4">
//               <label className="form-label" htmlFor="password_field">
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
//               className="btn btn-block w-100 btn-primary btn-block mb-4"            >
//               Sign in
//             </button>

          
//           </form>
//         </div>
//       </div>
//     </div>

//   );
// };

// export default studentLogin;

import { useState } from "react";
import { getProviders, signIn } from "next-auth/react";



export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (!result.error) {
      // Redirect to the authenticated page
      router.push("./studentDashboard");
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
