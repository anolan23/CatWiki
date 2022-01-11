function SearchButton({ onClick }) {
  return (
    <div className="search-button" onClick={onClick}>
      <span className="search-button__search">Search</span>
      <span className="material-icons search-button__search__icon">search</span>
    </div>
  );
}
export default SearchButton;
