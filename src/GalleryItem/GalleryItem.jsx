import './GalleryItem.css';

const GalleryItem = ({ photo, clickPhoto, onLike, photoIdClicked, }) => {
    return(
        <div id="imgBox">
            <img
               src={photo.path}
               onClick={() => {
                   clickPhoto(photo.id);
               }}
            />
            
                
        </div>
    )
}

export default GalleryItem;