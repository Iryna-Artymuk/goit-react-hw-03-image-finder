import { Component } from 'react';

import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
class ImageGallery extends Component {
  state = {};

  render() {
    return (
      <ul className={css.ImageGallery}>
        <ImageGalleryItem />
        <ImageGalleryItem />
        <ImageGalleryItem />
        <ImageGalleryItem />
        тут будуть зораження
      </ul>
    );
  }
}

export default ImageGallery;
