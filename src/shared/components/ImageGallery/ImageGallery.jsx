import React from 'react';
import styles from './ImageGallery.module.scss';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
function ImageGallery({ images }) {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(({ id, largeImageURL, webformatURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            smallImg={webformatURL}
            largeImageURL={largeImageURL}
            description={tags}
          />
        );
      })}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array,
};

export default ImageGallery;
