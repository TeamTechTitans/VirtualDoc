import Calendar from "react-calendar";

const Calender = () => {
  return (
    <div className="flex justify-center items-center gap-20 py-20 ">
      <Calendar />
      <div>
        <img
          className="w-[600px] flex justify-center items-center rounded-lg"
          src="https://i.ibb.co/vH3stMb/download-6.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Calender;
