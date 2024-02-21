const UserServicesCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-2 gap-2 py-5">
      <div className="flex justify-center items-center mx-auto gap-10 py-10 shadow-md ">
        <img className="h-44 w-48 rounded-md" src="https://i.ibb.co/b6VpcJH/teeth.jpg" alt="" />
        <div>
          <h1 className="font-bold">Medical Research</h1>
          <p>Excepteur sint ocecat pro dent sunt in culpa qui.</p>
        </div>
      </div>
      <div className="flex justify-center items-center mx-auto gap-10 py-10 shadow-md ">
        <img className="h-44 w-48 rounded-md" src="https://i.ibb.co/8YSXC60/skin.jpg" alt="" />
        <div>
          <h1 className="font-bold">Medical Research</h1>
          <p>Excepteur sint ocecat pro dent sunt in culpa qui.</p>
        </div>
      </div>
      <div className="flex justify-center items-center mx-auto gap-10 py-10 shadow-md ">
        <img className="h-44 w-48 rounded-md" src="https://i.ibb.co/hdxYnsY/clen.jpg" alt="" />
        <div>
          <h1 className="font-bold">Medical Research</h1>
          <p>Excepteur sint ocecat pro dent sunt in culpa qui.</p>
        </div>
      </div>
    </div>
  );
};

export default UserServicesCard;
