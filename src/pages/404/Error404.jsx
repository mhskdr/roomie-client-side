import { Link } from "react-router";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import MouseTail from "../../components/mouseTail/MouseTail";
import DynamicTitle from "../../components/dynamicTitle/DynamicTitle";


export default function NotFound() {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        fetch("https://assets6.lottiefiles.com/packages/lf20_qp1q7mct.json")
            .then((res) => res.json())
            .then(setAnimationData);
    }, []);

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center bg-base-200 text-base-content overflow-hidden px-4">
            <DynamicTitle title='oops... || back to home...'></DynamicTitle>
            {/* Wavy Background */}
            <div className="absolute inset-0 z-0">
                <svg
                    className="absolute bottom-0 w-full"
                    viewBox="0 0 1440 320"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="currentColor"
                        className="text-primary/20"
                        d="M0,64L80,96C160,128,320,192,480,213.3C640,235,800,213,960,186.7C1120,160,1280,128,1360,112L1440,96V320H0Z"
                    ></path>
                </svg>
            </div>
            {/* mouse tail*/}

            <MouseTail></MouseTail>

            {/* Content */}
            <div className="z-10 flex flex-col items-center text-center">
                {/* Lottie Animation */}
                {animationData && (
                    <Lottie
                        animationData={animationData}
                        loop
                        style={{ width: 250, height: 250 }}
                        className="mb-6"
                    />
                )}

                <h1 className="text-7xl font-extrabold text-error mb-2 tracking-widest">
                    404
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                    Page not found
                </h2>
                <p className="max-w-md text-base-content/70 mb-6">
                    Looks like you hit a broken route. Let's take you home.
                </p>

                <Link to="/" className="btn btn-primary gap-2">
                    🏠 Go Home
                </Link>
            </div>
        </div>
    );
}