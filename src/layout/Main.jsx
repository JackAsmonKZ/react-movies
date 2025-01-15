import React, { useEffect, useState } from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";
import { fetchMovies } from "../api/api";

export const Main = () => {
  const [movies, setMovies] = useState([]);
  const [canNotFind, setCanNotFind] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const searchMovies = async (query, type) => {
    setIsLoading(true);

    if (query.trim() === "") {
      query = "matrix";
    }

    const moviesData = await fetchMovies(query, type);

    if (!moviesData || moviesData.Search === undefined) {
      setCanNotFind(true);
      setMovies([]);
    } else {
      setCanNotFind(false);
      setMovies(moviesData.Search);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    searchMovies("matrix");
  }, []);

  return (
    <>
      <Search searchMovies={searchMovies} />
      <main className="container content">
        {canNotFind ? (
          <h3>Not found</h3>
        ) : isLoading ? (
          <Preloader />
        ) : (
          <Movies movies={movies} />
        )}
      </main>
    </>
  );
};
