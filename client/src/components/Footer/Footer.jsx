import { FaEnvelope, FaLocationPin, FaPhone } from "react-icons/fa6";
import img from "../../assets/logo.png";
const Footer = () => {
  return (
    <footer className="footer relative flex flex-wrap justify-between bottom-0 p-4 md:p-10 bg-[#22b6af6e]">
      <nav>
        <header className="footer-title flex gap-2 items-center">
          <img src={img} alt="img" className="w-[30px] "/>
          <p className="text-[#0e1a30] text-[22px]">Virtual Doc</p>
        </header>
        <div className="text-[#14243D] font-medium space-y-1">
            <p className="font-semibold">Our Info</p>
            <div className="space-y-2">
              <p className="flex items-center gap-2"><FaLocationPin className="text-teal-500"/><span>House 9, Road 15, Uttara, Dhaka</span></p>
            <p className="flex items-center gap-2"><FaPhone className="text-teal-500"/><span>Call Us: +88011111111</span></p>
            <p className="flex items-center gap-2"><FaEnvelope className="text-teal-500"/><span>team.techTitan@gmail.com</span></p>    
            </div>
            
        </div>
      </nav>
      <nav className="text-[#14243D] font-semibold">
        <header className="footer-title text-[#0e1a30] text-[17px]">Latest Events</header>
        <div>
            <a className="link link-hover">Decade of Action on <br />Nutrition and Global <br />Initiatives</a>
            <p className="text-[#7A7A7A]">27 May, 2023</p>
        </div>
        <div>
            <a className="link link-hover">Standards and Scientific <br />Advice on Food and <br />Nutrition</a>
            <p className="text-[#7A7A7A]">27 May, 2023</p>
        </div>
        <div>
            <a className="link link-hover">Monitoring Nutritional <br />Status & Food Safety <br />Events</a>
            <p className="text-[#7A7A7A]">27 May, 2023</p>
        </div>
      </nav>
      <nav className="text-[#14243D] font-medium">
      <header className="footer-title text-[#0e1a30] text-[17px]">Useful Link</header>
        <a className="link link-hover">About Company</a>
        <a className="link link-hover">Services</a>
        <a className="link link-hover">How It Works</a>
        <a className="link link-hover">Our Blog</a>
        <a className="link link-hover">Contact us</a>
        <a className="link link-hover">Policy</a>
      </nav>
      <form>
      <header className="footer-title text-[#0e1a30] text-[17px]">Subscribe</header>
        <fieldset className="form-control w-80 font-medium">
          <label className="label">
            <span className="label-text text-[#14243D]">
              Enter your email address
            </span>
          </label>
          <div className="relative">
            <input
              type="email"
              placeholder="abc@gmail.com"
              className="input input-bordered text-[#14243D] w-full pr-16"
            />
            <button className="btn bg-teal-400 hover:bg-teal-300 absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
