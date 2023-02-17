import React from 'react';
import Modal from 'shared/components/Modal/Modal';
import styles from './ImageGalleryItem.module.scss';
import { Component } from 'react';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  state = {
    visible: false,
  };

  toggleModal = e => {
    if (e.target.dataset.action !== 'visible') {
      this.setState(prevState => ({ visible: !prevState.visible }));
    }
  };
  render() {
    const { smallImg, description, largeImageURL } = this.props;
    const { visible } = this.state;
    return (
      <li className={styles.ImageGalleryItem}>
        <img
          onClick={this.toggleModal}
          className={styles['ImageGalleryItem-image']}
          src={smallImg}
          alt={description}
        />
        {visible && (
          <Modal
            largeImageURL={largeImageURL}
            description={description}
            onClick={this.toggleModal}
          />
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string,
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
};

export default ImageGalleryItem;
