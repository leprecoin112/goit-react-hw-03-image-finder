import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';
import { BsXCircle } from 'react-icons/bs';

function Modal({ description, largeImageURL, onClick }) {
  return (
    <div onClick={onClick} className={styles.Overlay}>
      <div className={styles.Modal}>
        <button type="button" className={styles.Button}>
          <BsXCircle className={styles.Icon} />
        </button>
        <img src={largeImageURL} alt={description} data-action="visible" />
      </div>
    </div>
  );
}

Modal.propTypes = {
  description: PropTypes.string,
  largeImageURL: PropTypes.string,
  onClick: PropTypes.func,
};

export default Modal;
