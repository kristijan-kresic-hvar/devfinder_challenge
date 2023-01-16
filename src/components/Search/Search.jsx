import { useRef, useState } from "react";
import "./Search.scss";

function Search({ onSearch, noResults, onChange, loading }) {
  const inputRef = useRef(null);

  const [lastSearch, setLastSearch] = useState("");

  const handleKeyDown = (e) => {
    const currentSearch = inputRef.current.value;
    if (lastSearch === currentSearch) return;

    if (e.key === "Enter") {
      onSearch(currentSearch);
      setLastSearch(currentSearch);
    }
  };

  const handleClick = () => {
    const currentSearch = inputRef.current.value;
    if (lastSearch === currentSearch) return;

    onSearch(currentSearch);
    setLastSearch(currentSearch);
  };

  if (noResults) inputRef.current.value = "";

  const disabledStyle = loading ? { pointerEvents: "none", opacity: 0.5 } : {};

  return (
    <div className="search">
      <input
        ref={inputRef}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        type="text"
        name="q"
        placeholder={noResults ? "" : "Search GitHub username…"}
      />
      <div className="search__right">
        {noResults && <p className="search__right__error">No results</p>}
        <button
          style={disabledStyle}
          disabled={loading}
          onClick={handleClick}
          type="button"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
