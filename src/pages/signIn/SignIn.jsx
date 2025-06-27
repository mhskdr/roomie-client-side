import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useNavigation } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2';
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { AuthContext } from '../../provider/AuthContext';
import DynamicTitle from '../../components/dynamicTitle/DynamicTitle';
import Loading from '../../components/loading/Loading';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lottie from "lottie-react";
import signInAnimation from "../../assets/signup.json";

const SignIn = () => {
    const { createUser, setUser, updateUser, signInWithGoogle } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const navigation = useNavigation();

    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    if (navigation.state === "loading") return <Loading />;

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                Swal.fire({
                    title: "Success!",
                    text: `Welcome back ${user.displayName || user.email}`,
                    icon: "success"
                });
                navigate(location.state ? location.state : '/');
            })
            .catch((error) => {
                Swal.fire({
                    title: "Oops!",
                    text: `Error: ${error.message}`,
                    icon: "error"
                });
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;

        const passwordReg = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordReg.test(password)) {
            Swal.fire({
                title: "Invalid Password!",
                text: "Password must have at least one uppercase, one lowercase, and 6+ characters.",
                icon: "warning"
            });
            return;
        }

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                updateUser({ displayName: name, photoURL })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL });
                        Swal.fire({
                            title: "Success!",
                            text: `Welcome ${name || email}`,
                            icon: "success"
                        });
                        navigate('/');
                    })
                    .catch((error) => {
                        console.error('Profile update error:', error);
                        setUser(user);
                    });
            })
            .catch((error) => {
                Swal.fire({
                    title: "Error!",
                    text: error.message,
                    icon: "error"
                });
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-base-200 px-4">
            <DynamicTitle title="Sign In | Go to Explore" />
            <div className="flex flex-col lg:flex-row items-stretch shadow-2xl rounded-2xl overflow-hidden max-w-6xl w-full" data-aos="fade-up">

                {/* Left Side: Lottie Animation */}
                <div className="w-full lg:w-1/2 hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-700 dark:to-purple-800 text-white">
                    <h2 className="text-4xl font-bold text-center px-6 pt-6">Welcome to RoomieConnect</h2>
                    <p className="text-lg text-center mt-2 mb-6 px-8">Create your account and find your perfect roommate today.</p>
                    <div className="w-full h-full flex-1 flex items-center justify-center px-6">
                        <Lottie animationData={signInAnimation} loop className="w-full h-full max-h-[500px]" />
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="w-full lg:w-1/2 px-6 py-10 bg-white dark:bg-base-100">
                    <form onSubmit={handleSubmit} className="space-y-5 h-full flex flex-col justify-center">
                        <h1 className="text-3xl font-bold text-center mb-2">Create an Account</h1>

                        {/* Full Name */}
                        <div>
                            <label className="block mb-1 text-sm font-medium text-black dark:text-gray-300">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-base-100 focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="John Doe"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block mb-1 text-sm font-medium text-black dark:text-gray-300">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-base-100 focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="john@example.com"
                                required
                            />
                        </div>

                        {/* Photo URL */}
                        <div>
                            <label className="block mb-1 text-sm font-medium text-black dark:text-gray-300">Photo URL</label>
                            <input
                                type="text"
                                name="photoURL"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-base-100 focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="https://..."
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block mb-1 text-sm font-medium text-black dark:text-gray-300">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    className="w-full px-4 py-2 pr-10 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-base-100 focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Enter secure password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute top-2.5 right-3 text-gray-600 dark:text-gray-300 hover:text-primary"
                                >
                                    {showPassword ? <IoIosEyeOff size={20} /> : <IoIosEye size={20} />}
                                </button>
                            </div>
                        </div>

                        {/* Submit */}
                        <button type="submit" className="btn btn-primary w-full">Sign Up</button>

                        {/* Divider */}
                        <div className="divider text-gray-500 dark:text-gray-500">OR</div>

                        {/* Google Auth */}
                        <button
                            onClick={handleGoogleSignIn}
                            type="button"
                            className="btn btn-outline w-full flex items-center justify-center gap-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-base-100 hover:bg-gray-100 dark:hover:bg-base-300"
                        >
                            <FcGoogle size={20} /> Sign in with Google
                        </button>

                        {/* Link */}
                        <p className="text-sm text-center text-gray-700 dark:text-gray-400">
                            Already have an account?
                            <Link to="/login" className="ml-1 text-blue-600 dark:text-blue-400 hover:underline">Log In</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
