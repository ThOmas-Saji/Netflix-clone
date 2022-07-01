import React, { useEffect, useState } from "react";
import axios from "../../axios";
import style from "./styles.module.css";
import env from "react-dotenv";
import { IMG_URL } from "../../TMDB";

function Banner() {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`trending/movie/day?api_key=${env.API_KEY}`)
      .then(({ data }) => {
        let num = Math.floor(Math.random() * 19 + 1);
        setMovie(data.results[num]);
        setLoading(true);
      })
      .catch((err) => {
        console.log({ err });
      });
  }, []);
  return (
    <>
      {loading ? (
        <div
          style={{ backgroundImage: `url(${IMG_URL + movie.backdrop_path})` }}
          className={style.banner}
        >
          <div className={style.content}>
            <h1 className={style.title}>{movie.title}</h1>
            <div className={style.buttons}>
              <button className={style.banner_botton}>Play</button>
              <button className={style.banner_botton}>Movie lists</button>
            </div>
            <p className={style.description}>{movie.overview}</p>
          </div>
          <div className={style.fade_bottom}></div>
        </div>
      ) : (
        <>...</>
      )}
    </>
  );
}

export default Banner;
