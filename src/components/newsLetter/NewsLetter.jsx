import React, { useState } from 'react';
import Swal from 'sweetalert2';

const NewsLetter = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();

        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            return Swal.fire({
                icon: 'error',
                title: 'Invalid Email',
                text: 'Please enter a valid email address.',
            });
        }

        Swal.fire({
            icon: 'success',
            title: 'Subscribed!',
            text: 'You have successfully subscribed to our newsletter 🎉',
        });

        setEmail('');
    };

    return (
        <section className="bg-base-300 py-16 px-4">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Stay Updated</h2>
                <p className="mb-8 text-base-content/80 text-sm md:text-base">
                    Subscribe to get our latest roommate posts, tips, and exclusive offers straight to your inbox!
                </p>

                <form
                    onSubmit={handleSubscribe}
                    className="w-full flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <label htmlFor="email" className="sr-only">
                        Your email
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="input input-bordered w-full sm:w-[300px] text-base-content bg-base-100 focus:outline-none focus:ring-2 focus:ring-primary transition"
                        required
                        aria-label="Email address"
                    />
                    <button
                        type="submit"
                        className="btn btn-primary text-white px-6 py-2 hover:scale-105 transition-transform w-full sm:w-auto"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
};

export default NewsLetter;
