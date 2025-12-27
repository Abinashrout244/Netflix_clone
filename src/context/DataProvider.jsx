import { createContext, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [moviesByCategory, setMoviesByCategory] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const addMovies = (category, movies) => {
    setMoviesByCategory((prev) => ({
      ...prev,
      [category]: movies,
    }));
  };

  const searchMovies = (text) => {
    if (!text.trim()) {
      setIsSearching(false);
      setSearchResults([]);
      return;
    }

    // flat() convert The All array to a single array. And Object.values()
    //  convert It takes an object and returns an array of all its values
    const allMovies = Object.values(moviesByCategory).flat();

    const filtered = allMovies.filter((movie) =>
      movie?.title?.toLowerCase().includes(text.toLowerCase())
    );

    setSearchResults(filtered);
    setIsSearching(true);
  };

  return (
    <DataContext.Provider
      value={{
        moviesByCategory,
        addMovies,
        searchMovies,
        searchResults,
        isSearching,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
