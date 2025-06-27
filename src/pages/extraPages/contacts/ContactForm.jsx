import React from 'react';
import Swal from "sweetalert2";

const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            Swal.fire({
                icon: "error",
                title: "All fields are required!",
                text: "Please fill out every field before submitting.",
            });
            return;
        }

        Swal.fire({
            icon: "success",
            title: "Successfully Submitted!",
            text: "Our concern will reach you #asap",
        });

        form.reset();
    };
    return (
        <div>
            <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text mr-7">Your Name</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Raj On"
                        className="input input-bordered"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text mr-2">Email Address</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        className="input input-bordered"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text mr-2">Your Message</span>
                    </label>
                    <textarea
                        name="message"
                        className="textarea textarea-bordered"
                        rows="4"
                        placeholder="Tell us about your project..."
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactForm;