
const PageBanner = ({title, subtitle}) => {
  return (
    <div className="flex flex-col justify-center items-center  bg-dark-blue h-60 w-full bg-center " 
    style={{
      backgroundImage:
        "url(https://laborex.smartdemowp.com/wp-content/uploads/2021/05/shape-62.png)",
    }}
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white">{title}</h1>
      <h1 className="font-semibold text-white">{subtitle}</h1>
    </div>
  );
};

export default PageBanner;