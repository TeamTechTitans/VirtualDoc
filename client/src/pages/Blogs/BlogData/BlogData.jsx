import { useEffect, useState } from "react";
import BlogCard from "../Component/BlogBanner/blogCard/BlogCard";

const BlogData = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div>
            {
                blogs.map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
            }
        </div>
    );
};

export default BlogData;