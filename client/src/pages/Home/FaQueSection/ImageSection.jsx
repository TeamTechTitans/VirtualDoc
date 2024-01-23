const ImageSection = () => {
  return (
    <div>
      <div className=" ">
        <img
          src="https://i.ibb.co/bFdGG97/shape-27.png"
          alt=""
          className="-mb-28 ml-28"
        />

        <div className="relative  ">
          <div className=" md:flex ">
            <img
              src="https://i.ibb.co/tqwgZ9Z/faq-2.jpg"
              alt=""
              className="md:absolute w-64  md:mt-[8rem] "
            />

            <div>
              <img
                src="https://i.ibb.co/RhkTZpz/faq-1.jpg"
                alt=""
                className=" md:relative md:ml-56 mt-5  w-64 rounded-3xl border-4 shadow-2xl border-x-white"
              />
            </div>
          </div>
        </div>
        <img
          src="https://i.ibb.co/bFdGG97/shape-27.png"
          alt=""
          className="md:-mt-24 -mt-24 ml-5 md:ml-72 "
        />
      </div>
    </div>
  );
};

export default ImageSection;
