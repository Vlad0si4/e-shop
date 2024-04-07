import PropTypes from "prop-types";
import { FiSearch } from "react-icons/fi";

export const Filter = ({ filter, search }) => {
  const handleChange = (e) => {
    const selectedValue = e.target.value;
    filter(selectedValue);
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    search(searchTerm);
  };

  return (
    <div className=" container flex items-center justify-center gap-3 sm:gap-10 my-[50px] flex-col sm:flex-row">
      <div>
        <select
          className="py-2 px-5 cursor-pointer focus:outline-none border bg-primaryColor text-white text-xs  rounded-md w-[150px]"
          onChange={handleChange}
        >
          <option value="all">All Categories</option>
          <option value="sofa">Sofa</option>
          <option value="mobile">Mobile</option>
          <option value="chair">Chair</option>
          <option value="watch">Watch</option>
          <option value="wireless">Wireless</option>
        </select>
      </div>
      <div>
        <select className="py-2 px-5 cursor-pointer focus:outline-none border bg-primaryColor text-white text-xs rounded-md w-[150px]">
          <option>Sort By</option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
      <div className="flex items-center relative cursor-pointer ">
        <input
          type="text"
          placeholder="Search..."
          className=" py-2 px-5 focus:outline-none cursor-pointer rounded-md w-full"
          onChange={handleSearch}
        />
        <span className="">
          <FiSearch />
        </span>
      </div>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
};
