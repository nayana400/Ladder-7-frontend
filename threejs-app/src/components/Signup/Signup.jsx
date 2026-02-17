import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />

            {/* Main Content Wrapper */}
            <div className="flex-grow flex w-full mt-20 mb-20">
                {/* Left Column - Hero Image */}
                <div className="hidden md:flex md:w-1/2 relative bg-gray-900 rounded-r-3xl overflow-hidden ml-4">
                    <img
                        className="absolute inset-0 h-full w-full object-cover opacity-80"
                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Group of students"
                    />
                    <div className="absolute top-8 left-8 flex items-center space-x-2 z-10">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-md flex items-center justify-center font-bold text-xl italic text-white shadow-lg">
                            L7
                        </div>
                        <span className="text-2xl font-bold tracking-tight text-white drop-shadow-md">Ladder7</span>
                    </div>
                </div>

                {/* Right Column - Centered Signup Card */}
                <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 p-4">
                    <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-auto md:h-[650px]">

                        {/* Left Side of Card - Signup Form */}
                        <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center items-center overflow-y-auto">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 tracking-wider">SIGN UP</h2>

                            <form className="w-full space-y-4" action="#" method="POST">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            id="first-name"
                                            name="first-name"
                                            type="text"
                                            required
                                            className="w-full px-4 py-2 bg-gray-100 border-none rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 text-sm"
                                            placeholder="First Name"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            id="last-name"
                                            name="last-name"
                                            type="text"
                                            required
                                            className="w-full px-4 py-2 bg-gray-100 border-none rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 text-sm"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        required
                                        className="w-full px-4 py-2 bg-gray-100 border-none rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 text-sm"
                                        placeholder="Username"
                                    />
                                </div>

                                <div>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="w-full px-4 py-2 bg-gray-100 border-none rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 text-sm"
                                        placeholder="Email"
                                    />
                                </div>

                                <div className="relative">
                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        required
                                        className="w-full px-4 py-2 bg-gray-100 border-none rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 pr-10 text-sm"
                                        placeholder="Password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
                                    >
                                        {showPassword ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>

                                <div className="relative">
                                    <input
                                        id="confirm-password"
                                        name="confirm-password"
                                        type={showConfirmPassword ? "text" : "password"}
                                        required
                                        className="w-full px-4 py-2 bg-gray-100 border-none rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 pr-10 text-sm"
                                        placeholder="Confirm Password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
                                    >
                                        {showConfirmPassword ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 transition-colors duration-200 uppercase tracking-wider"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Right Side of Card - Black Info */}
                        <div
                            className="md:w-2/5 bg-black text-white flex flex-col justify-center items-center p-8 relative"
                            style={{ borderTopLeftRadius: '100px', borderBottomLeftRadius: '50px' }}
                        >
                            <div className="z-10 text-center space-y-6">
                                <h2 className="text-xl font-bold">Welcome Back!</h2>
                                <p className="text-base text-gray-300">
                                    Already have an account? Click here to login
                                </p>
                                <Link
                                    to="/login"
                                    className="inline-block px-8 py-3 border-2 border-white rounded-full font-bold text-white hover:bg-white hover:text-black transition-colors duration-300 uppercase tracking-wider text-sm"
                                >
                                    Log In
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer hideSocials={true} />
        </div>
    );
};

export default Signup;
