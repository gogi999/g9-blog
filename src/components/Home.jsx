import React, {
  useEffect,
  useState,
} from 'react';

import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    /*
    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }
    */
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then((res) => {
                if (!res.ok) {
                    throw Error('Could not fetch the data for that resouce!');
                }
                return res.json();
            })
            .then((data) => {
                setBlogs(data);
                setIsLoading(false);
                setError(null);
            })
            .catch((err) => {
                setIsLoading(false);
                setError(err.message);
            });
        }, 1000);
    }, []);

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