import React, { useRef, useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import Swal from 'sweetalert2';
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { AuthContext } from '../../provider/AuthContext';
import DynamicTitle from '../../components/dynamicTitle/DynamicTitle';

const LogIn = () => {
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const emailRef = useRef(null);

    const location = useLocation();
    const navigate = useNavigate();

    // Handle Google Sign-In
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                Swal.fire({
                    title: "Success!",
                    text: `Welcome back ${user.displayName || user.email}`,
                    icon: "success",
                });
                navigate(location.state ? location.state : '/');
            })
            .catch((error) => {
                Swal.fire({
                    title: "Error!",
                    text: error.message,
                    icon: "error",
                });
            });
    };

    // Handle Login Form Submission
    const handleLogin = (event) => {
        event.preventDefault();
        const email = emailRef.current?.value || "";
        const password = event.target.password.value;

        signInUser(email, password)
            .then((result) => {
                Swal.fire({
                    title: "Success!",
                    text: `Welcome back ${result.user.email}`,
                    icon: "success",
                });
                navigate(location.state ? location.state : '/');
            })
            .catch((error) => {
                Swal.fire({
                    title: "Error!",
                    text: error.message,
                    icon: "error",
                });
            });
    };

    // Handle Forgot Password Click
    const handleForgotPasswordClick = () => {
        const emailValue = emailRef.current?.value || "";
        const queryParam = emailValue ? `?email=${encodeURIComponent(emailValue)}` : "";
        navigate(`/forgotpassword${queryParam}`);
    };

    return (
        <div className='hero bg-base-200'>
            <div className="card w-full max-w-sm shrink-0 shadow-2xl my-28">
                <DynamicTitle title='Log in | Be Impressed' />
                <div className="card-body">
                    <h1 className="text-5xl text-center font-bold">Login now!</h1>
                    <form onSubmit={handleLogin} className="fieldset">

                        {/* Email Field */}
                        <label className="label">Email</label>
                        <input
                            name='email'
                            ref={emailRef}
                            type="email"
                            className="input"
                            placeholder="Email"
                            required
                        />

                        {/* Password Field */}
                        <div className='mt-4'>
                            <label className="label">Password</label>
                            <div className='relative'>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    className="input"
                                    placeholder="Password"
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute bg-cyan-600 p-0.5 rounded top-2 right-6"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <IoIosEyeOff size='20px' /> : <IoIosEye size='20px' />}
                                </button>
                            </div>
                        </div>

                        {/* Forgot Password */}
                        <div className='mt-2'>
                            <button
                                type="button"
                                onClick={handleForgotPasswordClick}
                                className="link link-hover"
                            >
                                Forgot password?
                            </button>
                        </div>

                        {/* Login Button */}
                        <button type="submit" className="btn btn-neutral mt-4">Login</button>

                        {/* Divider */}
                        <div className="divider">OR</div>

                        {/* Google Login */}
                        <button
                            type="button"
                            className="btn btn-neutral btn-outline border-[#e5e5e5]"
                            onClick={handleGoogleSignIn}
                        >
                            <FcGoogle />
                            Login with Google
                        </button>

                        {/* Create Account */}
                        <div className="mt-4">
                            <p>New here?
                                <Link to='/signin'>
                                    <span className='link link-hover text-blue-400 ml-1'>Create an Account.</span>
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;