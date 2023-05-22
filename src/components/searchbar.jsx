import React from "react";

const Searchbar = () => {
  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          name="searchbar"
          id="searchbar"
          placeholder="Search products..."
        />
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </>
  );
};

export default Searchbar;
