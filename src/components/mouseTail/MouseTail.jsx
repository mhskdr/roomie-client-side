import React, { useEffect } from 'react';

const MouseTail = () => {
    useEffect(() => {
        const handleMouseMove = (e) => {
            const dot = document.createElement("span");
            dot.className =
                "pointer-dot fixed w-3 h-3 rounded-full bg-primary/70 animate-fade pointer-events-none z-0";
            dot.style.left = e.clientX + "px";
            dot.style.top = e.clientY + "px";
            document.body.appendChild(dot);

            setTimeout(() => {
                dot.remove();
            }, 1000);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <>
            <style>{`
        @keyframes fade {
          0% {opacity: 1; transform: scale(1);}
          100% {opacity: 0; transform: scale(2);}
        }
        .animate-fade {
          animation: fade 1s forwards;
        }
      `}</style>
        </>
    );
};

export default MouseTail;