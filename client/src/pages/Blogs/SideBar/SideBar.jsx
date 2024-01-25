import { FaSearch} from 'react-icons/fa'
const SideBar = () => {
  return (
    <div className="my-10 md:px-8 space-y-8">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full rounded-2xl"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <FaSearch className="text-gray-500" />
        </div>
      </div>
      <div>
        <h3 className='text-[24px] font-semibold text-[#142441] mb-3'>Categories</h3>
        <ul className='text-[#142441] text-[18px] font-medium space-y-3'>
            <li>Medical</li>
            <li>Research</li>
            <li>Laboratory</li>
            <li>Medical</li>
            <li>Dispatch</li>
            <li>Research</li>
        </ul>
      </div>
      <div>
        <h3 className='text-[24px] font-semibold text-[#142441]'>Latest News</h3>
        <div className='my-3'>
        <p className="text-teal-600">27 May, 2023</p>
            <a className="link link-hover font-medium">Decade of Action on Nutrition and Global Initiatives</a>
          </div>
          <div className='my-3'>
          <p className="text-teal-600 ">27 May, 2023</p>
            <a className="link link-hover font-medium">Standards and Scientific Advice on Food and Nutrition</a>
          </div>
      </div>
      <div>
        <h3 className='text-[24px] font-semibold text-[#142441] mb-4'>Archives</h3>
        <ul className='text-[#414040] text-[16px] font-medium space-y-3'>
            <li>May 2022</li>
            <li>March 2022</li>
            <li>June 2022</li>
            <li>July 2022</li>
        </ul>
      </div>
      <div>
      <h3 className='text-[24px] font-semibold text-[#142441] mb-4'>Tags</h3>
       <div className='flex gap-4 flex-wrap'>
        <a href="" className='btn btn-outline text-[#848484] hover:border-0 rounded-full hover:bg-cyan-400'>Event</a>
        <a href="" className='btn btn-outline text-[#848484] hover:border-0 rounded-full hover:bg-cyan-400'>Medical</a>
        <a href="" className='btn btn-outline text-[#848484] hover:border-0 rounded-full hover:bg-cyan-400'>Research</a>
        <a href="" className='btn btn-outline text-[#848484] hover:border-0 rounded-full hover:bg-cyan-400'>Laboratory</a>
       </div>
      </div>
    </div>
  );
};

export default SideBar;
