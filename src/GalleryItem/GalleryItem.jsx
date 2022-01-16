import "./GalleryItem.css";

const GalleryItem = ({ photo, clickPhoto, onLike, photoIdClicked }) => {
  return (
    <div id="imgBox">
      <img
        src={photo.path}
        onClick={() => {
          clickPhoto(photo.id);
        }}
      />
      {photo.id == photoIdClicked ? (
        <div className="description">
          <h3>{photo.title}</h3>
          <div>{photo.description}</div>
        </div>
      ) : (
        <div></div>
      )}
      <button
        onClick={() => {
          onLike(photo.id);
        }}
        className="likeBtn"
      >
        Likes: {photo.likes}
      </button>
    </div>
  );
};

export default GalleryItem;
