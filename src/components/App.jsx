import React, { Component } from 'react';
import { AppContainer } from './App.styled';
import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { getImages } from 'services/pixabayAPI';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    value: '',
    page: 1,
    loadMore: false,
    ModalActive: false,
    largeImgObj: {},
    gallery: [],
    isLoading: false,
    notFoundText: false,
  };

  async componentDidUpdate(_, prevState) {
    const { value, page } = this.state;

    if (prevState.value !== value) {
      this.setState({
        isLoading: true,
        loadMore: false,
        gallery: [],
        notFoundText: false,
        page: 1,
      });
      const resp = await getImages(value, page).then(resp => resp.data);
      this.setState({ gallery: resp.hits });

      if (resp.totalHits > page * 12) {
        this.setState({
          loadMore: true,
          isLoading: false,
        });
      } else if (resp.totalHits === 0) {
        this.setState({
          isLoading: false,
          notFoundText: true,
        });
      } else {
        this.setState({
          loadMore: false,
          isLoading: false,
        });
      }
    }

    if (prevState.page !== page) {
      const resp = await getImages(value, page + 1).then(resp => resp.data);
      this.setState({ gallery: resp.hits });
    }
  }

  showModal = largeImgObj => {
    this.setState({ ModalActive: true });
    this.setState({ largeImgObj });
  };

  closeModal = () => {
    this.setState({ ModalActive: false });
  };

  handleSubmit = async value => {
    this.setState({ value });
  };

  handleLoadMore = async () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const {
      loadMore,
      gallery,
      ModalActive,
      largeImgObj,
      isLoading,
      notFoundText,
      value,
    } = this.state;
    const { showModal, handleSubmit, handleLoadMore, closeModal } = this;

    return (
      <AppContainer>
        <Searchbar onSubmit={handleSubmit} />
        {isLoading && <Loader />}
        {notFoundText ? (
          <p>No results found for '{value}'</p>
        ) : (
          <ImageGallery gallery={gallery} showModal={showModal} />
        )}
        {loadMore && <Button onClick={handleLoadMore} children="Load more" />}
        {ModalActive && (
          <Modal largeImgObj={largeImgObj} closeModal={closeModal} />
        )}
      </AppContainer>
    );
  }
}
