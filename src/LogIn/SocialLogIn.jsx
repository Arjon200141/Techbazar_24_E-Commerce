import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProviders";
import useAxiosPublic from "../hooks/useAxiosPublic";

const SocialLogIn = () => {
    const { signInWithGoogle } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user.email,
                    name: result.user?.displayName,
                    photo: result.user?.photoURL
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        Swal.fire({
                            title: "Congratulations!",
                            text: "User Logged In Successfully!",
                            icon: "success"
                        });
                        navigate(from, { replace: true });
                    })
            })
    }

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="relative flex py-4 items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-500">Or continue with</span>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>
            
            <button 
                onClick={handleGoogleSignIn} 
                className="btn w-full flex items-center justify-center gap-3 py-3 px-6 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 shadow-sm transition-all duration-300"
            >
                <img 
                    src="https://i.ibb.co/TLh1bgK/google-symbol.png" 
                    alt="Google logo" 
                    className="h-6 w-6" 
                />
                <span className="text-gray-700 font-medium text-lg">Sign in with Google</span>
            </button>
            
            <style jsx>{`
                .btn:hover {
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                }
            `}</style>
        </div>
    );
};

export default SocialLogIn;