import Logout from "./Logout"
import Search from "./Search"
import Users from "./Users"

const Left = () => {
  return (
    <div className="w-[30%] bg-black">
        <Search/>
        <Users/>
        <Logout/>
    </div>
  )
}

export default Left