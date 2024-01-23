

import { useLoaderData, useLocation, useParams } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import BlogBanner from "../Component/BlogBanner/BlogBanner";

const BlogDetails = () => {
    const location = useLocation();
  const blog = location.state?.blog;
  
    return (
        <div>
          <BlogBanner text='Tips Details'/>
            <div className="container mx-auto grid grid-cols-12 gap-4">
                <div className="col-span-8">
                    
                </div>
                <div className='col-span-4'>
                    <SideBar />
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;