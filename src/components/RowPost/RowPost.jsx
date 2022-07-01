import React, { useEffect, useState } from "react";
import style from "./styles.module.css";
import axios from "../../axios";
import { IMG_URL } from "../../TMDB";
import YouTube from "react-youtube";
import env from "react-dotenv";

function RowPost({ title, poster, url }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewTrailer, setViewTrailer] = useState(false);
  const [error, setError] = useState(false);
  const [youTubeV, setYouTubeV] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log({ err });
      });
  }, []);

  const handleMovieTrailer = (Id) => {
    axios
      .get(`/movie/${Id}/videos?api_key=${env.API_KEY}&language=en-US`)
      .then(({ data }) => {
        setYouTubeV(data.results[0].key);
        setError(false);
        setViewTrailer(true);
      })
      .catch((err) => {
        setViewTrailer(false);
        console.log({ err });
        setError(true);
      });
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <div className={style.row}>
          <h1 className={style.row_title}>{title}</h1>
          <div className={style.posters}>
            {movies.map((elem, index) => {
              return (
                <div
                  onClick={() => handleMovieTrailer(elem.id)}
                  key={index}
                  className={style.movie}
                >
                  <img
                    className={poster ? style.poster_1 : style.poster_2}
                    src={`${IMG_URL}${elem.poster_path}`}
                    alt="poster"
                  />
                </div>
              );
            })}
          </div>
          {viewTrailer ? (
            <div className={style.youtube_stream}>
              <span
                onClick={() => setViewTrailer(false)}
                className={style.close_btn}
              >
                Close X
              </span>
              <YouTube videoId={youTubeV} opts={opts} />
            </div>
          ) : (
            <></>
          )}
          {error ? (
            <div className={style.youtube_stream}>
              <span
                onClick={() => setError(false)}
                className={style.close_btn}
              >
                Close X
              </span>
              <h3>Video isn't available</h3>
            </div>
          ) : (
            <></>
          )}
        </div>
      )}
    </>
  );
}

export default RowPost;
