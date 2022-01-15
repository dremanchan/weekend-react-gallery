import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import GalleryList from '../../GalleryList/GalleryList';

function App() {
  const [picList, setPicList] = useState([]);
  const [photoIdClicked, setPhotoIdClicked] = useState(-1);
  
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

  function onLike(photoID){
    console.log('in like', );

    axios
      .put(`/gallery/like/${photoID}`)
      .then((res) => {
        getPhotos();
      })
      .catch((err) => {
        console.error('LIKE failed');
      });
  }


  function clickPhoto() {
    setPhotoIdClicked(photoID === idClicked ? -1 : photoID);
  }



  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
     <GalleryList
      picList={picList}
      onLike={onLIke}
      />
    </div>
  );
}

export default App;
