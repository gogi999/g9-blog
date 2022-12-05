import React from 'react';

import useFetch from '../hooks/useFetch';
import BlogList from './BlogList';

const Home = () => {
    /*
    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }
    */
   const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />} 
            {/* <BlogList 
                blogs={blogs.filter((blog) => blog.author === 'mario')} 
                title="Mario's blogs" 
            /> */}
        </div>
    );
}

export default Home;
