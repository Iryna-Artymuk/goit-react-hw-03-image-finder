import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';

import { Component } from 'react';

class App extends Component {
  state = {
    modalActive: true,
    searchValue: '',
  };

  GetValueFromInput = inputText => {
    this.setState({
      searchValue: inputText,
    });
  };
  toggleModal = () => {
    this.setState({ modalActive: !this.state.modalActive });
  };
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          alignItems: 'center',
        }}
      >
        <Searchbar
          GetValueFromInput={this.GetValueFromInput}
        />
        <ImageGallery />
        <Button> Load more </Button>
        {this.state.modalActive && (
          <Modal toggleModal={this.toggleModal}>
            <img src="" alt="" /> тут буде картинка
          </Modal>
        )}
      </div>
    );
  }
}

export { App };
