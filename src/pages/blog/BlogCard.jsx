import React from 'react';
import { Link, useNavigation } from 'react-router';
import Loading from '../../components/loading/Loading';

const BlogCard = ({ single }) => {
    const navigation = useNavigation();

    if (navigation.state === "loading") {
        return <Loading />;
    }
    return (
        <div className="card bg-base-100 w-96 shadow-md hover:shadow-lg transition-shadow duration-300">
            <figure className="w-full h-56 overflow-hidden">
                <img
                    className="w-full h-full object-cover"
                    src={single.image}
                    alt={single.title}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-lg font-semibold">{single.title}</h2>
                <p className="text-sm">{single.summary}</p>
                <div className="card-actions justify-end">
                    <Link to={`/blog/${single.id}`}>
                        <button className="btn btn-primary btn-sm">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;