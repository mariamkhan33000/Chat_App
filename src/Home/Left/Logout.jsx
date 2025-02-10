import { RiLogoutCircleLine } from "react-icons/ri";

const Logout = () => {
  return (
    <div className="h-[15vh] px-10  rounded-full py-6 w-[200px] cursor-pointer  ">
      <RiLogoutCircleLine  size={44} className="hover:scale-150 duration-200 hover:text-gray-300"/>
    </div>
  )
}

export default Logout