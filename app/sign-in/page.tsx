'use client';
import { BadgeCheck, Vote, Waves } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import React from "react";

const page = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const { data: session, status: sessionStatus } = useSession();
  const [result, setResult] = React.useState("");
  const [isOnboarded, setIsOnboarded] = useState(false);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: any) => {
    setResult('Logging in....');
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
    } else {
      setError("");
    }
  };

  if (sessionStatus === "loading") {
    return <h1>LOADING...</h1>
  }

  if(session){
    redirect('/')
  }


    return (
<div className="flex font-poppins items-center justify-center">
    <div className="h-screen w-screen flex justify-center items-center dark:bg-gray-900">
    <div className="grid gap-8">
      <div
        id="back-div"
        className="bg-gradient-to-r from-cyan-400 to-neon rounded-[26px] m-4"
      >
        <div
          className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2"
        >
          <h1 className="pt-8 pb-6 font-bold dark:text-gray-400 text-5xl text-center cursor-default">
            Log in
          </h1>
          <form onSubmit={handleSubmit} method="post" className="space-y-4">
            <div>
              <label htmlFor="email" className="mb-2  dark:text-gray-400 text-lg">Email</label>
              <input
                id="email"
                className="border p-3 dark:bg-neon dark:text-black  dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full dark:placeholder:text-gray-700"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="mb-2 dark:text-gray-400 text-lg">Password</label>
              <input
                id="password"
                className="border p-3 shadow-md dark:bg-neon dark:text-black dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full dark:placeholder:text-gray-700"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <a
              className="group text-blue-400 transition-all duration-100 ease-in-out"
              href="#"
            >
              <span
                className="bg-left-bottom bg-gradient-to-r text-sm from-neon to-neon bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
              >
                Forget your password?
              </span>
            </a>
            <button
              className="bg-gradient-to-r dark:text-gray-300 from-cyan-400 to-neon shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-neon hover:to-blue-500 transition duration-300 ease-in-out"
              type="submit"
            >
              LOG IN
            </button>
            <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
          </form>
          <div className="flex flex-col mt-4 items-center justify-center text-sm">
            <h3 className="dark:text-gray-300">
              Don't have an account?
              <a
                className="group text-blue-400 transition-all duration-100 ease-in-out"
                href="/register"
              >
                <span
                  className="bg-left-bottom bg-gradient-to-r from-cyan-400 to-neon bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                >
                  Sign Up
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
                href="#"
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
                href="#"
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
  </div>
    
  )
}

export default page