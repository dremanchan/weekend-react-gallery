BASE MODE

- Add images to public/images folder
- Add these images to the server/modules/data.js

- Create GET request from /gallery and render to app.jsx
- Loop through list of gallery data in GalleryList
- Create GalleryItem and pass the original gallery item to it w props

    - update GalleryList to show these images
    - Swap the img with the description onclick (conditional rendering)
    - Display number of likes
    - Add Like button
        - Use Axios to update and put the like count
        - Re render gallery after like is clicked
