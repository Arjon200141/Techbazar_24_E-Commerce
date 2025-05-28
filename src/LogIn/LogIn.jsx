import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Providers/AuthProviders';
import SocialLogIn from './SocialLogIn';

const LogIn = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                Swal.fire({
                    title: "Welcome Back!",
                    text: "User Logged In Successfully!",
                    icon: "success",
                    background: '#1f2937',
                    color: '#fff',
                    confirmButtonColor: '#6366f1'
                });
                navigate(from, { replace: true });
            })
            .catch(error => {
                Swal.fire({
                    title: "Login Failed",
                    text: error.message,
                    icon: "error",
                    background: '#1f2937',
                    color: '#fff',
                    confirmButtonColor: '#6366f1'
                });
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
            <div className="w-full max-w-md">
                {/* Glassmorphism Card */}
                <div className="relative overflow-hidden rounded-2xl bg-white/30 dark:bg-gray-800/50 backdrop-blur-lg shadow-2xl border border-white/20 dark:border-gray-700/50">
                    {/* Decorative Elements */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20"></div>
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 p-8">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                                Welcome Back
                            </h2>
                            <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                                Sign in to continue your journey
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-700/80 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                                            required
                                        />
                                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Enter your password"
                                            className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-700/80 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                                            required
                                        />
                                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                                        Remember me
                                    </label>
                                </div>
                                <div className="text-sm">
                                    <Link to="/forgot-password" className="font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500">
                                        Forgot password?
                                    </Link>
                                </div>
                            </div> */}

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-indigo-500/20"
                            >
                                Sign In
                            </button>
                        </form>

                        {/* <div className="my-6 relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white/30 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400">
                                    Or continue with
                                </span>
                            </div>
                        </div> */}

                        <SocialLogIn />

                        <div className="mt-6 text-center">
                            <p className="text-gray-600 dark:text-gray-300">
                                Don't have an account?{' '}
                                <Link 
                                    to="/register-techbazar-rifat" 
                                    className="font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 hover:underline"
                                >
                                    Sign up now
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;