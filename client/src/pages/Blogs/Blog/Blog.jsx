import BlogBanner from "../Component/BlogBanner/BlogBanner";
import BlogData from "../BlogData/BlogData";
import SideBar from "../SideBar/SideBar";

const Blog = () => {
    return (
        <div>
            <BlogBanner text='Tips' />
            <div className="container mx-auto md:grid grid-cols-12 gap-4">
                <div className="col-span-8">
                    <BlogData />
                </div>
                <div className='col-span-4'>
                    <SideBar />
                </div>
            </div>
        </div>
    );
};

export default Blog;