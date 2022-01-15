import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [picList, setPicList] = useState([]);

  useEffect(() => {
    getPhotos();
  }, []);

  // get request
  const getPhotos = () => {
    console.log("in getPhotos");

    axios
      .get("/gallery")
      .then((res) => {
        setPhotoList(res.data);
      })
      .catch((err) => {
        console.error("GET failed", err);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Gallery goes here</p>
      <img src="images/goat_small.jpg" />
    </div>
  );
}

export default App;
