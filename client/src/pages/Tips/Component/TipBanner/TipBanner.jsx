import bgimg from '../../../../assets/background/blog_banner.jpg'
import bgShape from '../../../../assets/shape-blog.png'
const TipBanner = ({ text }) => {
  return (
    <div
      className="hero max-h-[700px]"
      style={{
        backgroundImage: `url(${bgimg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content py-16 text-center text-neutral-content">
        <div className="w-full text-center bg-contain " style={{
          backgroundImage: `url(${bgShape})`,
          backgroundRepeat: 'no-repeat',

        }}>
          <h1 className=" md:text-[50px] text-[40px] font-extrabold text-[#fff]  p-16 pt-0">{text}</h1>
        </div>
      </div>
    </div>

  );
};

export default TipBanner;
