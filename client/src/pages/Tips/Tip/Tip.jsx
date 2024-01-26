import TipData from "../TipData/TipData";
import SideBar from "../SideBar/SideBar";
import SiteHeader from "../../../components/siteHeader/SiteHeader";

const Tip = () => {
    return (
        <div>
            <SiteHeader title='by Doctor'>Regular Tips </SiteHeader>
            <div className="container mx-auto md:grid grid-cols-12 gap-4">
                <div className="col-span-8">
                    <TipData />
                </div>
                <div className='col-span-4'>
                    <SideBar />
                </div>
            </div>
        </div>
    );
};

export default Tip;