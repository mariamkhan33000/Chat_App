

const User = () => {
  return (
    <div>
        <div className="flex items-center space-x-6 p-6 hover:bg-slate-700 duration-300">
      <div className="avatar online">
        <div className="w-14 rounded-full ">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"  className=""/>
        </div>
      </div>
      
      <div className="">
        <h1 className="text-xl">Mohsin</h1>
        <span className="text-gray-400">mohsin@dev.com</span>
      </div>
      </div>
    </div>
  )
}

export default User