import User from "./User";

const Users = () => {
  return (
    <div>
      <h1 className="px-8 py-2 text-white font-semibold bg-slate-800 rounded-md">
        Message
      </h1>
      <div  className="flex flex-col space-y-4 overflow-x-auto whitespace-nowrap scrollbar-hide h-[82vh]">
       <User/>
       <User/>
       <User/>
       <User/>
       <User/>
       <User/>
       <User/>
       <User/>
       <User/>
       <User/>
       <User/>
       <User/>
      </div>
    </div>
  );
};

export default Users;
