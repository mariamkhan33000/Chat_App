import { IoSendSharp } from "react-icons/io5";

const TypeSend = () => {
  return (
    <div className="flex items-center space-x-4 p-4">
        <div className="w-[70%]">
        <input type="text" placeholder="Type here" className="text-xl input input-bordered w-full bg-black px-4 py-8" />
        </div>
        <button>
        <IoSendSharp size={45}/>
        </button>
    </div>
  )
}

export default TypeSend