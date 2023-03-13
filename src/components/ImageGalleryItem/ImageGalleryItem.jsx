import css from './ImageGalleryItem.module.css';
const ImageGalleryItem = () => {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItemImage}
        src=""
        alt=""
      />
      це зображення
    </li>
  );
};

export default ImageGalleryItem;
