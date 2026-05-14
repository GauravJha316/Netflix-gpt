import { useState } from "react";
import Header from "./Header";

const Login = () => {

    const [isSignInForm, setIsSignForm]=useState(true);

    const toggleSignInForm = ()=>{
      setIsSignForm(!isSignInForm);
    }
  return (
    <div className="relative">
      <Header />

      <div>
        <img
          className="w-full h-screen object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/76c5a455-c62c-46d4-8653-3924728113e3/web/IN-en-20260504-TRIFECTA-perspective_596176fe-3b1e-48ec-8a00-a0acb34e68f1_large.jpg"
          alt="logo"
        />
      </div>
      <form className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-12 bg-black/80 w-3/12 text-white rounded-lg flex flex-col gap-4">
        
        <h1 className="text-3xl font-bold mb-6">{isSignInForm? "Sign In": "Sign Up"}</h1>
        
        {!isSignInForm && (
          <input
          type="text"
          placeholder="Enter Full name"
          className="p-4 rounded bg-gray-700 outline-none"
        />
        )}
        <input
          type="text"
          placeholder="Email or mobile number"
          className="p-4 rounded bg-gray-700 outline-none"
        />


        <input
          type="password"
          placeholder="Password"
          className="p-4 rounded bg-gray-700 outline-none"
        />

        <button className="bg-red-600 py-3 rounded font-semibold hover:bg-red-700">
         {isSignInForm? "Sign In": "Sign Up"}
        </button>

        <p className="text-gray-400 text-center cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm? " New to Netflix? Sign Up Now ": "Allready registed ? Sign in Now "}
         </p>

      </form>
    </div>
  );
};

export default Login;