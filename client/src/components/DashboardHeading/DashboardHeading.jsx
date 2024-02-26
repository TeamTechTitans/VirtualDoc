import CustomTitle from "../CustomTitle/CustomTitle";


const DashboardHeading = ({ children, title }) => {
    return (
        <div className="my-5">
            <div className="flex items-center text-center justify-center">
                <CustomTitle title={title} double></CustomTitle>
            </div>
            <div className="mb-2">
                <h2 className="text-3xl text-center font-barlow font-bold dark-blue">
                    {children}
                </h2>
            </div>
        </div>
    );
};

export default DashboardHeading;