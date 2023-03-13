import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  state = {
    searchValue: '',
  };
  // Отримуєм значення фоми
  getFromData = value =>
    this.setState({ searchValue: value });

  render() {
    return (
      <div
        style={{
          position: 'relative',
        }}
      >
        <ToastContainer
          autoClose={2000}
          hideProgressBar={true}
        />
        <Searchbar getFromData={this.getFromData} />
        <ImageGallery
          // передаєм значення форми як пропс в коспонет галереї де буде іти запит на бекенд
          searchValue={this.state.searchValue}
        />
      </div>
    );
  }
}

export { App };
