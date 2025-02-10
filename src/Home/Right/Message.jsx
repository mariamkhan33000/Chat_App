import Messag from "./Messag";

const Message = () => {
  return (
   <div className="flex flex-col space-y-4 overflow-x-auto whitespace-nowrap scrollbar-hide h-[76vh]">
    <Messag/>
    <Messag/>
    <Messag/>
    <Messag/>
    <Messag/>
   </div>
  );
};

export default Message;
