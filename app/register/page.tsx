'use client';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
    const [error, setError] = useState("");
    const router = useRouter();
    const { data: session, status: sessionStatus } = useSession();
  
    useEffect(() => {
      if (sessionStatus === "authenticated") {
        router.replace("/dashboard");
      }
    }, [sessionStatus, router]);
  
    const isValidEmail = (email: string) => {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
      };
      
    const handleSubmit = async (e: any) => {
      e.preventDefault();
      const firstName = e.target[0].value;
      const lastName = e.target[1].value;
      const email = e.target[2].value;
      const password = e.target[2].value;
  
      if (!isValidEmail(email)) {
        setError("Email is invalid");
        return;
      }
  
      if (!password || password.length < 8) {
        setError("Password is invalid");
        return;
      }
  
      try {
        const res = await fetch("/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            password,
          }),
        });
        if (res.status === 400) {
          setError("This email is already registered");
        }
        if (res.status === 200) {
          setError("");
          router.push("/sign-in");
        }
      } catch (error) {
        setError("Error, try again");
        console.log(error);
      }
    };
  
    if (sessionStatus === "loading") {
      return <h1>Loading...</h1>;
    }
    
    return (
        sessionStatus !== "authenticated" && (
        <div
        className="flex font-poppins items-center justify-center dark:bg-gray-900 min-w-screen min-h-screen py-28"
      >
        <div className="grid gap-8">
          <div
            id="back-div"
            className="bg-gradient-to-r from-cyan-400 to-neon rounded-[26px] m-4 "
          >
            <div
              className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2"
            >
              <h1 className="pt-8 pb-6 font-bold text-5xl dark:text-gray-400 text-center cursor-default">
                Sign Up
              </h1>
              <form onSubmit={handleSubmit} method="post" className="space-y-4">
                <div>
                  <label htmlFor="text" className="mb-2 dark:text-gray-400 text-lg">First Name</label>
                  <input
                    id="first name"
                    className="border dark:bg-neon dark:text-black dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300 dark:placeholder:text-gray-700"
                    type="text"
                    placeholder="Enter your first name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="text" className="mb-2 dark:text-gray-400 text-lg">Last Name</label>
                  <input
                    id="last name"
                    className="border dark:bg-neon dark:text-black dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300 dark:placeholder:text-gray-700"
                    type="text"
                    placeholder="Enter your last name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="text" className="mb-2 dark:text-gray-400 text-lg">Email</label>
                  <input
                    id="email"
                    className="border dark:bg-neon dark:text-black dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300 dark:placeholder:text-gray-700"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>


                <div>
                  <label htmlFor="password" className="mb-2 dark:text-gray-400 text-lg">Password</label>
                  <input
                    id="password"
                    className="border dark:bg-neon dark:text-black dark:border-gray-700 p-3 mb-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300 dark:placeholder:text-gray-700"
                    type="password"
                    placeholder="Password" 
                    required
                  />
                </div>

                <button
                  className="bg-gradient-to-r from-blue-500 to-neon shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-neon hover:to-blue-500 transition duration-300 ease-in-out"
                  type="submit"
                >
                  SIGN UP
                </button>
                <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
              </form>
              <div className="flex flex-col mt-4 items-center justify-center text-sm">
                <h3>
                  <span className="cursor-default dark:text-gray-300">Have an account?</span>
                  <a
                    className="group text-blue-400 transition-all duration-100 ease-in-out"
                    href='/sign-in'
                  >
                    <span
                      className="bg-left-bottom ml-1 bg-gradient-to-r from-neon to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                    >
                      Log In
                    </span>
                  </a>
                </h3>
              </div>
    
              {/* <!-- Third Party Authentication Options --> */}
              <div
              id="third-party-auth"
              className="flex items-center justify-center mt-5 flex-wrap"
            >
              <button
                
                className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
              >
                <img
                  className="max-w-[25px]"
                  src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                  alt="Google"
                />
              </button>
              <button
                
                className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
              >
                <img
                  className="max-w-[25px]"
                  src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/"
                  alt="Linkedin"
                />
              </button>
              <button
                
                className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
              >
                <img
                  className="max-w-[25px] filter dark:invert"
                  src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/"
                  alt="Github"
                />
              </button>
              <button
                
                className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
              >
                <img
                  className="max-w-[25px]"
                  src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/"
                  alt="Facebook"
                />
              </button>
              <button
                
                className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
              >
                <img
                  className="max-w-[25px] dark:gray-100"
                  src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/"
                  alt="twitter"
                />
              </button>
    
              <button
                
                className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
              >
                <img
                  className="max-w-[25px]"
                  src="https://ucarecdn.com/3277d952-8e21-4aad-a2b7-d484dad531fb/"
                  alt="apple"
                />
              </button>
            </div>
              <div
                className="text-gray-500 flex text-center flex-col mt-4 items-center text-sm"
              >
                <p className="cursor-default">
                  By signing in, you agree to our
                  <a
                    className="group text-blue-400 transition-all duration-100 ease-in-out"
                    
                  >
                    <span
                      className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                    >
                      Terms
                    </span>
                  </a>
                  and
                  <a
                    className="group text-blue-400 transition-all duration-100 ease-in-out"
                    
                  >
                    <span
                      className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                    >
                      Privacy Policy
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
)
}

export default page