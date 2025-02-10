import { RiLogoutCircleLine } from "react-icons/ri";

const Logout = () => {
  return (
    <div className="h-[10vh] px-10 bg-gray-900 rounded-full py-6 w-[200px] cursor-pointer hover:bg-gray-700 ">
      <RiLogoutCircleLine  size={44} className=""/>
    </div>
  )
}

export default Logout