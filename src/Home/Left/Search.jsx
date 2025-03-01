import { FaSearch } from "react-icons/fa";
const Search = () => {
  return (
    <div className="px-6 py-4">
      <form action="">
        <div className="flex space-x-3">
        <label className="input input-bordered flex items-center gap-2 bg-gray-800 w-[90%] rounded-lg p-4">
          <input type="text" className="grow" placeholder="Search" />
        </label>
        <button>
        <FaSearch className="text-4xl p-1 hover:bg-gray-600 rounded-full duration-300"/>
        </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
