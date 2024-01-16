const SearchBar = ({ setSearchInput }) => {
    return <div className="">
        <input
            className="w-64 rounded-full px-2 border-2 border-slate-600"
            type="search"
            placeholder="Search here..."
            onChange={(e) => {
                setSearchInput(e.target.value);
            }}
        />
    </div>
}

export default SearchBar;