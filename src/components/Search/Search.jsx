import "./Search.scss";

function Search() {
  return (
    <div className="search">
      <input type="text" name="q" placeholder="Search GitHub username…" />
      <button type="button">Search</button>
    </div>
  );
}

export default Search;
