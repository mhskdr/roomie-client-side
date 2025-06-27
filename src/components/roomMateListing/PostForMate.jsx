import React, { useState } from "react";
import Swal from "sweetalert2";

const PostForMate = ({ users }) => {
    const [formData, setFormData] = useState({
        title: "",
        location: "",
        rent: "",
        roomType: "",
        lifestyle: [],
        description: "",
        contactInfo: "",
        imageLink: "",
        availability: "Available",
        userName: users?.name || "",
        userEmail: users?.email || "",
    });

    const lifestyleOptions = ["Pets", "Smoking", "Night Owl", "Early Riser", "Vegetarian"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (option) => {
        setFormData((prev) => {
            const updated = prev.lifestyle.includes(option)
                ? prev.lifestyle.filter((item) => item !== option)
                : [...prev.lifestyle, option];
            return { ...prev, lifestyle: updated };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // like and mail fields
        const updatedFormData = {
            ...formData,
            count: 0,
            likerEmail: []
        };
        console.log(updatedFormData);

        // send formData to backend

        fetch('https://back-end-alpha-bay.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedFormData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Post Submitted Successfully.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    };

    return (
        <section className="bg-base-200 py-12 px-4 lg:px-16">
            <div className="bg-base-100 p-8 rounded-xl shadow-xl max-w-4xl mx-auto space-y-6">
                <h2 className="text-2xl font-bold text-center text-primary">Post to find Roommate</h2>
                <form onSubmit={handleSubmit} className="grid gap-6">
                    <input
                        type="text"
                        name="title"
                        placeholder="Post Title"
                        className="input input-bordered w-full"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="location"
                        placeholder="Location (e.g., Dhaka, Mirpur-2)"
                        className="input input-bordered w-full"
                        value={formData.location}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="number"
                        name="rent"
                        placeholder="Rent Amount"
                        className="input input-bordered w-full"
                        value={formData.rent}
                        onChange={handleChange}
                        required
                    />
                    <select
                        name="roomType"
                        className="select select-bordered w-full"
                        value={formData.roomType}
                        onChange={handleChange}
                        required
                    >
                        <option disabled value="">Select Room Type</option>
                        <option>Single</option>
                        <option>Shared</option>
                        <option>Studio</option>
                    </select>

                    <div>
                        <label className="label font-semibold">Lifestyle Preferences:</label>
                        <div className="flex flex-wrap gap-3">
                            {lifestyleOptions.map((option) => (
                                <label key={option} className="cursor-pointer flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={formData.lifestyle.includes(option)}
                                        onChange={() => handleCheckboxChange(option)}
                                        className="checkbox checkbox-sm"
                                    />
                                    <span className="text-sm">{option}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <input
                        type="text"
                        name="imageLink"
                        placeholder="Photos direct Link(URL)"
                        className="input input-bordered w-full"
                        value={formData.imageLink}
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        name="description"
                        className="textarea textarea-bordered w-full"
                        placeholder="Describe yourself, the place, expectations..."
                        rows={4}
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="contactInfo"
                        placeholder="Contact Info (e.g., phone or alternate email)"
                        className="input input-bordered w-full"
                        value={formData.contactInfo}
                        onChange={handleChange}
                        required
                    />

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="label font-semibold">Availability:</label>
                            <select
                                name="availability"
                                className="select select-bordered w-full"
                                value={formData.availability}
                                onChange={handleChange}
                            >
                                <option>Available</option>
                                <option>Not Available</option>
                            </select>
                        </div>
                        <div>
                            <label className="label font-semibold">Room Type:</label>
                            <input
                                type="text"
                                value={formData.roomType}
                                disabled
                                className="input input-bordered w-full"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="userName"
                            className="input input-bordered w-full"
                            value={formData.userName}
                            disabled
                        />
                        <input
                            type="email"
                            name="userEmail"
                            className="input input-bordered w-full"
                            value={formData.userEmail}
                            disabled
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-full">
                        Post Ads
                    </button>
                </form>
            </div>
        </section>
    );
};

export default PostForMate;