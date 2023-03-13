import { Component } from 'react';
import css from './Searchbar.module.css';
console.log(css);
class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handelInputChange = ({ currentTarget }) => {
    this.setState({
      inputValue: currentTarget.value,
    });
  };
  handelFormSubmit = event => {
    event.preventDefault();
    if (this.state.inputValue === '') {
      return alert('emptySearch');
    }

    this.props.GetValueFromInput(this.state.inputValue);
    this.setState({
      inputValue: '',
    });
  };
  render() {
    console.log(this.props.GetValueFromInput);
    return (
      <header className={css.Searchbar}>
        <form
          onSubmit={this.handelFormSubmit}
          className={css.SearchForm}
        >
          <input
            value={this.state.inputValue}
            onChange={this.handelInputChange}
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button
            type="submit"
            className={css.SearchFormButton}
          >
            <span className={css.Label}>Search</span>
          </button>
        </form>
      </header>
    );
  }
}

export default Searchbar;
