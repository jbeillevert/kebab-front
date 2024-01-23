const SearchBar = ({ setSearchInput }) => {
  return (
    <div className="w-96 m-auto">
      <div className="flex flex-col p-6 gap-2 bg-white border border-solid border-slate-200 rounded-md">
        <label className="text-sm">🔎 Search recipe</label>
        <input
          className="flex h-9 w-full rounded-md border border-solid border-slate-300 cursor-pointer bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          type="search"
          placeholder="Ratatouille"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
