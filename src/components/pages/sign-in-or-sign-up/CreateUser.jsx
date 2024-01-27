"use client";

import SignInForm from "@/components/form/sign-in/SignInForm";
import Link from "next/link";
import React from "react";

export default function CreateUser({ login, register, setLogin, setRegister }) {
  return (
    <header className="bg-gray-900 pattern">
      <div className="container px-6 mx-auto">
        <nav className="flex flex-col py-6 sm:flex-row sm:justify-between sm:items-center">
          <Link href="/">
            <img
              className="w-auto h-6 sm:h-7"
              src="https://merakiui.com/images/logo.svg"
              alt=""
            />
          </Link>

          <div className="flex items-center mt-2 -mx-2 sm:mt-0">
            <Link
              href="/sign-in"
              className="px-3 py-1 text-sm font-semibold text-white transition-colors duration-300 transform border-2 rounded-md hover:bg-gray-700"
            >
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className="px-3 py-2 mx-2 text-sm font-semibold text-white transition-colors duration-300 transform bg-black rounded-md hover:bg-gray-800"
            >
              Sign Up
            </Link>
          </div>
        </nav>

        <div className="flex flex-col items-center py-6 lg:h-[36rem] lg:flex-row">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-100 lg:text-4xl">
              Welcome To AskDev
            </h2>

            <h3 className="mt-2 text-2xl font-semibold text-gray-100">
              Hello <span className="text-blue-400">Developer</span>
            </h3>

            <p className="mt-4 text-gray-100">Good to see you again</p>
          </div>

          <div className="flex mt-8 lg:w-1/2 lg:justify-end lg:mt-0">
            {/* <div className="w-full max-w-md bg-white rounded-lg dark:bg-gray-800">
              <div className="px-6 py-8 text-center">
                <h2 className="text-2xl font-semibold text-gray-700 dark:text-white fo">
                  Sign In
                </h2>

                <form action="#">
                  <div className="mt-4">
                    <input
                      className="block w-full px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring"
                      type="email"
                      placeholder="Email address"
                      aria-label="Email address"
                    />
                    <input
                      className="block w-full px-4 py-2 mt-4 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring"
                      type="password"
                      placeholder="Password"
                      aria-label="Password"
                    />
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <a
                      href="#"
                      className="text-sm text-gray-600 dark:text-gray-200 hover:underline"
                    >
                      Forget Password?
                    </a>

                    <button className="px-6 py-2 font-medium text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-800 dark:focus:bg-gray-700">
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div> */}
            <SignInForm />
          </div>
        </div>
      </div>
    </header>
  );
}
