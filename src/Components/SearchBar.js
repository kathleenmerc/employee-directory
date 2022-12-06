export default function SearchBar(props) {
  return (
    <>
      <form className="searchBar">
        <input className="search" type="search" placeholder="Search..." />
        <button>Enter</button>
      </form>
    </>
  );
}
