import React, { useEffect, useState } from "react";
// import Navbar from '../03.Components/Navbar';
import axios from "axios";
import { NavLink } from "react-router-dom";
import SearchBar from "../03.Components/SearchBar";

const HomePage = () => {
  const [data, setData] = useState([]);

  // useState permettant de filtrer avec la searchBar
  const [searchInput, setSearchInput] = useState("");
  const [filteredBySearchBar, setFilteredBySearchBar] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/recipes`).then((res) => {
      setData(res.data.data);
    });

    if (searchInput.length > 0) {
      //Filtrer les recherches dans la barre de recherche
      const filteredChar = data.filter((el) => {
        return el.name.toLowerCase().includes(searchInput.toLowerCase());
      });
      setFilteredBySearchBar(filteredChar);
    } else {
      setFilteredBySearchBar();
    }
  }, [searchInput]);

  return (
    <div className="h-full w-full">
      <div className="bg-white py-4 px-8">
        <div className="max-w-6xl flex justify-between m-auto">
          <h2 className="font-Grotesk-Black text-2xl tracking-tight">
            Kebab master
          </h2>
          <NavLink to="/login">
            <button className="border border-solid border-slate-300 hover:bg-slate-100 duration-200 px-4 py-1 rounded">
              Admin
            </button>
          </NavLink>
        </div>
      </div>
      <div className="flex flex-col items-center py-24 px-8 gap-24 m-auto">
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
        <div className="grid grid-cols-3 gap-8 m-auto">
          {filteredBySearchBar
            ? filteredBySearchBar.map((e, index) => {
                return (
                  <div
                    key={index}
                    className="bg-white min-w-64 w-80 h-52 rounded-lg shadow-sm hover:shadow-md duration-150  cursor-pointer max-w-52 flex flex-col"
                  >
                    <img className="bg-neutral-400 w-full h-3/4 rounded-t-lg"></img>
                    <div className="p-2 flex flex-col gap-2">
                      <h3 className="">{e.name}</h3>
                      <button
                        className="bg-orange-400 w-fit py-1 px-4 rounded-md text-white font-medium hover:bg-orange-500 duration-150"
                        value={e.id}
                      >
                        Voir
                      </button>
                    </div>
                  </div>
                );
              })
            : data.map((e, index) => {
                return (
                  <div
                    key={index}
                    className="bg-white min-w-64 w-80 h-52 rounded-lg shadow-sm hover:shadow-md duration-150  cursor-pointer max-w-52 flex flex-col"
                  >
                    <img className="bg-neutral-400 w-full h-3/4 rounded-t-lg"></img>
                    <div className="p-2 flex flex-col gap-2">
                      <h3 className="">{e.name}</h3>
                      <NavLink to={`/recipes/${e.id}`}>
                        <button
                          className="bg-orange-400 w-fit py-1 px-4 rounded-md text-white font-medium hover:bg-orange-500 duration-150"
                          value={e.id}
                        >
                          Voir
                        </button>
                      </NavLink>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
