import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';

const GalleryList = ({picList}) => {
    return (
        <div id="imgBox">
            {picList.map((photo, index) => {
                return (
                    <GalleryItem
                        key={index}
                        photo={photo}
                    />
                );
            })}

        </div>
        
    )
}

export default GalleryList;