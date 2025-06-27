import React, { useContext, useEffect, useRef, useState } from 'react';
import { Navigate, useLocation, useNavigation } from 'react-router';
import Swal from 'sweetalert2';
import DynamicTitle from '../../components/dynamicTitle/DynamicTitle';
import { AuthContext } from '../../provider/AuthContext';
import Loading from '../../components/loading/Loading';

const ForgetPassword = () => {
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const initialEmail = queryParams.get("email") || "";
    const [email, setEmail] = useState(initialEmail);
    const emailInputRef = useRef(null);
    const { forgetPassword } = useContext(AuthContext);

    useEffect(() => {
        emailInputRef.current?.focus();
    }, []);
    const handleRedirect = () => {
        window.open('https://mail.google.com', '_blank');
    };

    const handleForgetPassword = (event) => {
        event.preventDefault();

        if (!email.trim()) {
            Swal.fire({
                title: "Error",
                text: "Please enter a valid email address.",
                icon: "error",
                confirmButtonText: "OK"
            });
            return;
        }
        forgetPassword(email)
            .then(() => {
                Swal.fire({
                    title: "Password Reset",
                    text: `A password reset link has been sent to ${email}. Please check your inbox.`,
                    icon: "success",
                    confirmButtonText: "OK"
                });
                handleRedirect();
            })
            .catch((error) => {
                Swal.fire({
                    title: "Error!",
                    text: error.message,
                    icon: "error",
                });
            });


    };
    const navigation = useNavigation();

    if (navigation.state === "loading") {
        return <Loading />;
    }

    return (
        <div className="hero bg-base-200 py-28">
            <DynamicTitle title="Forgot Password" />
            <div className="card w-full max-w-sm shadow-2xl mx-auto">
                <div className="card-body">
                    <h1 className="text-5xl text-center font-bold mb-6">Reset Password</h1>
                    <form onSubmit={handleForgetPassword} className="fieldset space-y-4">


                        <div>
                            <label className="label text-sm font-semibold">Email Address</label>
                            <input
                                name="email"
                                type="email"
                                ref={emailInputRef}
                                className="input input-bordered w-full"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary w-full mt-4"
                        >
                            Send Reset Link
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;