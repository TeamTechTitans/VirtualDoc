import BlogBanner from "../Component/BlogBanner/BlogBanner";
import BlogData from "../BlogData/BlogData";
import SideBar from "../SideBar/SideBar";

const Blog = () => {
    return (
        <div>
            <BlogBanner />
            <div className="container mx-auto grid grid-cols-12 gap-4">
                <div className="col-span-8">
                    <BlogData />
                </div>
                <div>
                    <SideBar />
                </div>
            </div>
        </div>
    );
};

export default Blog;