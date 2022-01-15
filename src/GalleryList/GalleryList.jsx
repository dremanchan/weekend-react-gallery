import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';

const GalleryList = ({picList, onLike}) => {
    return (
        <div id="imgBox">
            {picList.map((photo, index) => {
                return (
                    <GalleryItem
                        key={index}
                        photo={photo}
                        onLike={onLike}
                        clickPhoto={clickPhoto}
                        photoIdClicked={photoIdClicked}
                    />
                );
            })}

        </div>
        
    )
}

export default GalleryList;