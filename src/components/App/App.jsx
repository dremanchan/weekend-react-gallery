import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import GalleryList from '../../GalleryList/GalleryList';

function App() {
  const [picList, setPicList] = useState([]);

  useEffect(() => {
    getPhotos();
  }, []);

  // get request
  const getPhotos = () => {
    console.log("in getPhotos");

    axios
      .get('/gallery')
      .then((res) => {
        setPicList(res.data);
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
     <GalleryList
      picList={picList}
      />
    </div>
  );
}

export default App;
