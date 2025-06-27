import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import { useNavigate } from 'react-router';

const Blog = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((json) => setData(json))
            .catch((err) => console.error("Failed to fetch data:", err));
    }, []);

    return (
        <section className="min-h-screen py-14 px-4 sm:px-6 lg:px-8 xl:px-20 transition-colors duration-500">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-extrabold mb-3 tracking-tight">
                        Explore Our Latest Blogs
                    </h2>
                    <p className=" text-base">
                        Curated articles about renting, subletting, and single life.{" "}
                        <span className="font-medium text-indigo-600 dark:text-indigo-400">
                            {data.length}
                        </span>{" "}
                        articles and counting!
                    </p>
                </div>
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="mb-6 inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                >
                    ← Back
                </button>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map((single) => (
                        <BlogCard key={single.id} single={single} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
