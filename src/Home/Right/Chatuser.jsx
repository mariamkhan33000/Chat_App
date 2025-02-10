const Chatuser = () => {
  return (
    <div className="flex items-center justify-center space-x-6 p-2 bg-gray-800 hover:bg-gray-700 duration-300 cursor-pointer">
      <div className="avatar online">
        <div className="w-24 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div>
        <h1 className="text-xl">Name</h1>
        <h3 className="text-sm">offline</h3>
      </div>
    </div>
  );
};

export default Chatuser;
