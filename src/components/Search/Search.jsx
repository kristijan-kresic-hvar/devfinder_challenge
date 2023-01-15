import "./Search.scss";

function Search() {
  return (
    <div className="search">
      <input type="text" name="q" placeholder="Search GitHub username…" />
      <div className="search__right">
        <p className="search__right__error">No results</p>
        <button type="button">Search</button>
      </div>
    </div>
  );
}

export default Search;
