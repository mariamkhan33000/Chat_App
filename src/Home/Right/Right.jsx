import Chatuser from "./Chatuser"
import Message from "./Message"
import TypeSend from "./TypeSend"


const Right = () => {
  return (
    <div className="border border-black w-[70%] bg-slate-900">
      <Chatuser/>
      <Message/>
      <TypeSend/>
      </div>
  )
}

export default Right