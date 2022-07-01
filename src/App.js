import "./App.css";
import React from "react";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import RowPost from "./components/RowPost/RowPost";
import Genre from "./components/MovieGenre/Genre";
import { originals, action } from './TMDB'

function App() {

  return (<div className="container">
    <Navbar />
    <Banner />
    <RowPost title="Action" poster={true} url={action} />
    <RowPost title="Netflix originals" poster={false} url={originals} />
    <Genre />
  </div>)

}

export default App;
