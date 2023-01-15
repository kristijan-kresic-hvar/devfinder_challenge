import { useRef } from "react";
import "./Search.scss";

function Search({ onSearch }) {
  const inputRef = useRef(null);
  return (
    <div className="search">
      <input
        ref={inputRef}
        type="text"
        name="q"
        placeholder="Search GitHub username…"
      />
      <div className="search__right">
        <p className="search__right__error">No results</p>
        <button onClick={() => onSearch(inputRef.current.value)} type="button">
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
