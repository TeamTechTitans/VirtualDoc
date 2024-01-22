import SiteHeader from "../../components/siteHeader/SiteHeader";
import FilterDoctor from "./components/FilterDoctor";


const Doctors = () => {
    return (
        <div>
            <SiteHeader title={'- Most Experienced'}>Our Doctors</SiteHeader>
            <div className="container mx-auto">
                <FilterDoctor></FilterDoctor>
            </div>
        </div>
    );
};

export default Doctors;