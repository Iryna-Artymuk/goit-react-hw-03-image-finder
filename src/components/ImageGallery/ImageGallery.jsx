import { Component } from 'react';

import css from './ImageGallery.module.css';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
const KEY = '32771968-7fd567c901afb84ab6320145c';
class ImageGallery extends Component {
  state = {
    modalActive: false,
    images: [],
    page: 1,
    activeImgUrl: '',
    status: 'idel',
    error: null,
  };

  componentDidUpdate(prevProps, PrevState) {
    if (
      prevProps.searchValue !== this.props.searchValue ||
      PrevState.page !== this.state.page
    ) {
      this.setState({
        status: 'pending',
      });
      fetch(
        ` https://pixabay.com/api/?q=${this.props.searchValue}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(resp => resp.json())
        .then(imagesData => {
          this.setState({
            images: [
              ...this.state.images,
              ...imagesData.hits,
            ],
            status: 'resolved',
            page: 1,
          });
        })
        .catch(error =>
          this.setState({ error, status: 'rejected' })
        );
    }
  }

  getActiveImg = id => {
    this.state.images.find(image => {
      if (image.id === id) {
        console.log(`found img ${image.largeImageURL}`);
        this.setState({
          activeImgUrl: image.largeImageURL,
        });
      }
    });
  };
  toggleModal = () => {
    this.setState({ modalActive: !this.state.modalActive });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  render() {
    if (this.state.status === 'rejected') {
      return (
        <p>we are sorry some error happend try again</p>
      );
    }
    if (this.state.status === 'pending') {
      return <p>Please wait we are lodding</p>;
    }
    if (this.state.status === 'resolved') {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 30,
            alignItems: 'center',
          }}
        >
          <ul className={css.ImageGallery}>
            {this.state.images.map(
              ({
                id,
                webformatURL,
                largeImageURL,
                tags,
              }) => (
                <ImageGalleryItem
                  id={id}
                  getActiveImg={this.getActiveImg}
                  toggleModal={this.toggleModal}
                  webformatURL={webformatURL}
                  largeImageURL={largeImageURL}
                  tags={tags}
                  key={id}
                />
              )
            )}
          </ul>
          <Button onClick={this.loadMore}>Load more</Button>
          {this.state.modalActive && (
            <Modal toggleModal={this.toggleModal}>
              <img src={this.state.activeImgUrl} alt="" />{' '}
              тут буде картинка
            </Modal>
          )}
        </div>
      );
    }
  }
}

export default ImageGallery;
