import TipBanner from "../Component/TipBanner/TipBanner";
import TipData from "../TipData/TipData";
import SideBar from "../SideBar/SideBar";

const Tip = () => {
    return (
        <div>
            <TipBanner text='Tips' />
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