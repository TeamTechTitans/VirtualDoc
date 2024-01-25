const TitleDashboard = ({ title, subTitle }) => {
  return (
    <div className="  justify-center items-center text-center mb-5">
      <p className="text-gray-800"> {subTitle}</p>
      <div className=" text-3xl text-primary-teal font-semibold py-5  uppercase">
        {title}
      </div>
    </div>
  );
};

export default TitleDashboard;
