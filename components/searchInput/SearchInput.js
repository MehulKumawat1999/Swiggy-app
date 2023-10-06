import { useState } from "react";
import "./searchInput.css";
export const SearchInput = ({resList, filteredList}) => {
    const [searchText, setSearchText] = useState("");

    return (
        <div className="filter">
          <div className="search-text">
            <input type="text" className="search-input" value={searchText} onChange={(e) =>setSearchText(e.target.value)}/>
            <button className="btn" onClick={() => {
              filteredList(resList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())))
            }}>
              Search
            </button>
          </div>
          
            <button className="btn" onClick={() => {
                    filteredList(resList.filter((res) => res.info.avgRating>4.2));
            }}>
                Top Rated Restraunts
            </button>
          
      </div>
    );
}