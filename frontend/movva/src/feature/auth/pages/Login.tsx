import { useState } from "react";
import { login } from "../services/auth";
import AppLogo from "../../../shared/components/app-logo";
import back from "../../../../public/back.png";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  

  const handleLogin = async () => {
    const res = await login({ email, password });
    if(res) {
      navigate("/shop", {replace: true});
    }else {
      setError("Invalid credentials. Please try again.");
    }
   
  }
  return (
    <>
      <div className="min-h-screen  bg-gray-100 text-gray-900 flex justify-center">
        <div className=" m-0 sm:m-10 bg-[#E3F2FD] dark:bg-[#0D47A1] shadow sm:rounded-lg flex justify-center flex-1 ">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="flex justify-center">
              <AppLogo width={200} height={200} />
            </div>
            <div className="mt-4 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold text-[#E3F2FD]">
                Sign up
              </h1>
              <div className="w-full flex-1 mt-8">
                <div className="flex flex-col items-center">
                  <div className="mx-auto max-w-xs m-4">
                  
                  <input
                  onChange={e => setEmail(e.target.value)}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email" placeholder="Email" />
                  <input
                  onChange={e => setPassword(e.target.value)}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password" placeholder="Password" />
                  <button
                    className="mt-5 tracking-wide font-semibold bg-blue-500 text-gray-100 w-full py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none" onClick={handleLogin}>
                    
                    <span className="ml-3">
                      LOG IN
                    </span>
                  </button>
                  
                </div>
                </div>

                <p className="flex justify-center align-center px-2 my-2 text-sm text-gray-200 tracking-wide font-medium transform translate-y-1/2">
                    Or log in with Google
                </p>
                <div className="flex justify-center">
                <button
                    className="w-full max-w-xs my-4 font-bold shadow-sm rounded-lg py-3 bg-blue-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                    <div className="bg-white p-2 rounded-full">
                      <svg className="w-4" viewBox="0 0 533.5 544.3">
                        <path
                          d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                          fill="#4285f4" />
                        <path
                          d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                          fill="#34a853" />
                        <path
                          d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                          fill="#fbbc04" />
                        <path
                          d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                          fill="#ea4335" />
                      </svg>
                    </div>
                    <span className="ml-4">
                      Sign Up with Google
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex !bg-gray-900 !dark:bg-gray-900 text-center hidden lg:flex">
            <img src={back} className="opacity-40" />
          </div>
        </div>
      </div>
    </>
  );
}