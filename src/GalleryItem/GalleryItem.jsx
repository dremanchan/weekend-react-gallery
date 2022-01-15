import './GalleryItem.css';

const GalleryItem = ({ photo }) => {
    return(
        <div id="imgBox">
            <img
               src={photo.path}
            />
                
        </div>
    )
}

export default GalleryItem;