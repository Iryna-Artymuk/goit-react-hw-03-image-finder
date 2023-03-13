import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

import { Component } from 'react';

class App extends Component {
  state = {
    searchValue: '',
  };
  // Отримуєм значення фоми
  getFromData = value =>
    this.setState({ searchValue: value });

  render() {
    return (
      <div>
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
