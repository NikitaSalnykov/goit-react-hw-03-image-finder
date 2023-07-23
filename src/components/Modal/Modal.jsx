import React, { Component } from 'react';
import { ModalContainer, ModalLoader, Overlay } from './Modal.style';
import { Loader } from 'components/Loader/Loader';
import PropTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseModal);
  }

  componentDidUpdate(prevProps, prevState) {
    window.removeEventListener('keydown', this.handleCloseModal);
  }

  handleCloseModal = e => {
    if (e.key === 'Escape' || e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  render() {
    const { largeImgObj } = this.props;
    console.log(largeImgObj.largeImageURL);
    return (
      <Overlay onClick={this.handleCloseModal}>
        <ModalContainer>
          <img
            src={
              largeImgObj.largeImageURL ||
              'https://cid.center/wp-content/uploads/2020/11/placeholder.png'
            }
            alt={largeImgObj.tags}
          />
          <ModalLoader format={largeImgObj.largeImageURL}>
            <Loader />
          </ModalLoader>
        </ModalContainer>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  largeImgObj: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
};
