import axios from "../../axios";
import React, { useEffect, useState } from "react";
import style from "./styles.module.css";
import env from 'react-dotenv'

function Genre() {

  const [genre, setGenre] = useState([]);

  useEffect(() => {
    getMovieGenre();
  }, []);

  const getMovieGenre = () => {
    axios
      .get(
        `genre/movie/list?api_key=${env.API_KEY}&language=en-US`
      )
      .then(({ data }) => {
        setGenre(data.genres);
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  const getGenereId = (Id) => {
    alert('Feature Comming soon !')
    // axios
    //   .get(
    //     `discover/movie?api_key=${env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${Id}&with_watch_monetization_types=flatrate`
    //   )
    //   .then(({ data }) => {
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <>
      {" "}
      <h1 className={style.genres_title}>Movie Gneres</h1>
      <div className={style.genres_box}>
        {genre.length ? (
          genre.map((elem) => {
            return (
              <div
                onClick={() => getGenereId(elem.id)}
                className={style.genre}
                key={elem.id}
              >
                <p>{elem.name}</p>
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default Genre;
