import { useLoaderData, useNavigate, useParams } from "react-router";

const BlogDetails = () => {
    const blogs = useLoaderData();       // entire blogs array
    const { id } = useParams();           // get id from URL param
    const navigate = useNavigate();

    // Find blog by id (convert id to number)
    const blog = blogs.find((b) => b.id === Number(id));

    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-red-500 text-xl font-semibold">Blog not found!</p>
            </div>
        );
    }

    return (
        <article className="max-w-5xl mx-auto px-4 py-10">
            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="mb-6 inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            >
                ← Back
            </button>

            {/* Hero Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                    src={blog.image}
                    alt={`Image for blog: ${blog.title}`}
                    className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                />
            </div>

            {/* Title and Meta */}
            <header className="mt-8 space-y-3">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    {blog.title}
                </h1>
                <time
                    dateTime={blog.date}
                    className="text-sm block"
                >
                    Published on{" "}
                    {new Date(blog.date).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </time>
            </header>

            {/* Content */}
            <section className="mt-6 text-lg leading-relaxed space-y-5">
                <p>{blog.description}</p>
            </section>

            {/* Footer */}
            <footer className="mt-10 border-t pt-6 flex flex-col md:flex-row items-start md:items-center justify-between text-sm">
                <p>
                    Written by: <span className="font-semibold">RoomieConnect Team</span>
                </p>
            </footer>
        </article>
    );
};

export default BlogDetails;
