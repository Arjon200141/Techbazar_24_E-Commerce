import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProviders";
import useAxiosPublic from "../hooks/useAxiosPublic";
import SocialLogIn from "./SocialLogIn";
import { motion } from "framer-motion";

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const axiosPublic = useAxiosPublic();
    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        title: "Congratulations!",
                                        text: "User Created Successfully!",
                                        icon: "success",
                                        background: '#1f2937',
                                        color: '#fff',
                                        confirmButtonColor: '#0C9DCA'
                                    });
                                    navigate(from, { replace: true });
                                }
                            })
                    })
                    .catch(error => {
                        Swal.fire({
                            title: "Error!",
                            text: error.message,
                            icon: "error",
                            background: '#1f2937',
                            color: '#fff',
                            confirmButtonColor: '#0C9DCA'
                        });
                    });
            })
            .catch(error => {
                Swal.fire({
                    title: "Registration Failed",
                    text: error.message,
                    icon: "error",
                    background: '#1f2937',
                    color: '#fff',
                    confirmButtonColor: '#0C9DCA'
                });
            });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="flex items-center justify-center min-h-screen p-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md md:max-w-lg lg:w-[700px] bg-white/95 dark:bg-gray-800/95 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl border border-white/20"
                >
                    {/* Header with new color theme */}
                    <div className="relative bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-700 dark:to-blue-800 p-8 text-center overflow-hidden">
                        <div className="relative p-8 text-center">
                            <motion.h2
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="text-3xl font-bold text-white"
                            >
                                Create Your Account
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                                className="text-white/90 mt-2"
                            >
                                Join us today - it's quick and easy
                            </motion.p>

                            {/* Decorative element */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20"></div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-white/10"></div>
                        <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-white/10"></div>
                    </div>

                    <div className="p-8 md:p-10">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {/* Name Field */}
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                                className="form-group"
                            >
                                <label className="block mb-3 text-lg font-medium text-gray-700 dark:text-gray-300">
                                    Full Name
                                    <span className="text-red-500 ml-1">*</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        {...register("name", { required: true })}
                                        placeholder="John Doe"
                                        className="w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/95 dark:bg-gray-700/95 text-gray-800 dark:text-white transition-all duration-200 pl-12"
                                    />
                                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                </div>
                                {errors.name && (
                                    <span className="text-red-500 text-sm mt-2 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                        Name is required
                                    </span>
                                )}
                            </motion.div>

                            {/* Email Field */}
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7 }}
                                className="form-group"
                            >
                                <label className="block mb-3 text-lg font-medium text-gray-700 dark:text-gray-300">
                                    Email Address
                                    <span className="text-red-500 ml-1">*</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        {...register("email", { required: true })}
                                        placeholder="john@example.com"
                                        className="w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/95 dark:bg-gray-700/95 text-gray-800 dark:text-white transition-all duration-200 pl-12"
                                    />
                                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                </div>
                                {errors.email && (
                                    <span className="text-red-500 text-sm mt-2 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                        Email is required
                                    </span>
                                )}
                            </motion.div>

                            {/* Password Field */}
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8 }}
                                className="form-group"
                            >
                                <label className="block mb-3 text-lg font-medium text-gray-700 dark:text-gray-300">
                                    Password
                                    <span className="text-red-500 ml-1">*</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/
                                        })}
                                        placeholder="••••••••"
                                        className="w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/95 dark:bg-gray-700/95 text-gray-800 dark:text-white transition-all duration-200 pl-12"
                                    />
                                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                </div>
                                {errors.password?.type === 'required' && (
                                    <span className="text-red-500 text-sm mt-2 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                        Password is required
                                    </span>
                                )}
                                {errors.password?.type === 'minLength' && (
                                    <span className="text-red-500 text-sm mt-2 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                        Password must be 6+ characters
                                    </span>
                                )}
                                {errors.password?.type === 'pattern' && (
                                    <span className="text-red-500 text-sm mt-2 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                        Must include uppercase, number, and special character
                                    </span>
                                )}
                                <div className="mt-3 grid grid-cols-2 gap-2">
                                    <div className={`flex items-center text-xs ${errors.password?.type === 'minLength' ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'}`}>
                                        <span className={`inline-block w-2 h-2 rounded-full mr-2 ${errors.password?.type === 'minLength' ? 'bg-red-500' : 'bg-gray-400'}`}></span>
                                        6+ characters
                                    </div>
                                    <div className={`flex items-center text-xs ${errors.password?.type === 'pattern' ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'}`}>
                                        <span className={`inline-block w-2 h-2 rounded-full mr-2 ${errors.password?.type === 'pattern' ? 'bg-red-500' : 'bg-gray-400'}`}></span>
                                        1 uppercase
                                    </div>
                                    <div className={`flex items-center text-xs ${errors.password?.type === 'pattern' ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'}`}>
                                        <span className={`inline-block w-2 h-2 rounded-full mr-2 ${errors.password?.type === 'pattern' ? 'bg-red-500' : 'bg-gray-400'}`}></span>
                                        1 number
                                    </div>
                                    <div className={`flex items-center text-xs ${errors.password?.type === 'pattern' ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'}`}>
                                        <span className={`inline-block w-2 h-2 rounded-full mr-2 ${errors.password?.type === 'pattern' ? 'bg-red-500' : 'bg-gray-400'}`}></span>
                                        1 special char
                                    </div>
                                </div>
                            </motion.div>

                            {/* Submit Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9 }}
                            >
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center"
                                >
                                    <span>Create Account</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </motion.div>

                            {/* Social Login */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.1 }}
                            >
                                <SocialLogIn />
                            </motion.div>

                            {/* Login Link */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2 }}
                                className="text-center pt-2"
                            >
                                <p className="text-gray-600 dark:text-gray-300">
                                    Already have an account?{" "}
                                    <Link
                                        to="/login-techbazar-rifat"
                                        className="font-semibold text-cyan-600 dark:text-cyan-400 hover:text-blue-800 dark:hover:text-cyan-300 transition-colors duration-200 underline underline-offset-4 decoration-2 hover:decoration-cyan-400"
                                    >
                                        Sign In
                                    </Link>
                                </p>
                            </motion.div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Register;