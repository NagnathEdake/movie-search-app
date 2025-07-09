import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Movies({ Movies }) {
  // console.log(Movies);
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async (searchMovieName) => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${
          import.meta.env.VITE_MOVIE_API_KEY
        }&s=${searchMovieName}`
      );
      const data = response.data.Search;
      setMovieData(data);
      // console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setMovieData([]);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchMovies(Movies || "superman");
  }, [Movies]);

  return (
    <div className="container mb-5">
      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      ) : movieData.length === 0 ? (
        <h5>No Movies Found</h5>
      ) : (
        <>
          {/* <h2 className="text-center mb-3 text-danger">
            {Movies == 0 ? "SUPERMAN" : Movies.toUpperCase()}
          </h2> */}
          <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-xl-5 gy-4">
            {movieData.map((movie, index) => {
              return (
                <div className="col " key={index}>
                  <div
                    className="card shadow-sm bg-gray"
                    style={{ width: "210px", height: "400px" }}
                  >
                    <div className="d-flex align-items-center justify-content-center mt-1">
                      <img
                        className=""
                        src={movie.Poster === "N/A" ? "/img.jpg" : movie.Poster}
                        width={"200px"}
                        alt=""
                      />
                    </div>
                    <div className="card-body d-flex flex-column justify-content-around">
                      <h6 className="movieTitle  ">
                        {movie.Title.length > 30
                          ? movie.Title.slice(0, 30) + "..."
                          : movie.Title}
                      </h6>
                      <div className="detail d-flex justify-content-between text-danger">
                        <span className="card-text  ">{movie.Type}</span>
                        <span className="card-text text-danger">
                          {movie.Year}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default Movies;
