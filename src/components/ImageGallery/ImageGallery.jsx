import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({
  data,
  getActiveImg,
  toggleModal,
}) {
  return (
    <ul className={css.ImageGallery}>
      {data.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem
          id={id}
          getActiveImg={getActiveImg}
          toggleModal={toggleModal}
          webformatURL={webformatURL}
          tags={tags}
          key={id}
        />
      ))}
    </ul>
  );
}
