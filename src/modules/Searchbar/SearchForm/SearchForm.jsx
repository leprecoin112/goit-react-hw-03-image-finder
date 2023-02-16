import styles from './SearchForm.module.scss';
import { BsSearch } from 'react-icons/bs';
import { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
class SearchForm extends Component {
  state = {
    valueSearch: '',
  };
  handleSearchChange = event => {
    this.setState({
      valueSearch: event.currentTarget.value.toLowerCase(),
    });
  };

  handleSubmit = event => {
    const { valueSearch } = this.state;
    event.preventDefault();

    if (valueSearch.trim() === '') {
      toast.error('Enter your request.');
      return;
    }

    this.props.onSubmit(this.state.valueSearch);
  };
  render() {
    const { valueSearch } = this.state;
    return (
      <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
        <button type="submit" className={styles['SearchForm-button']}>
          <BsSearch className={styles['SearchForm-button-icon']} />
        </button>

        <input
          value={valueSearch}
          name="search"
          onChange={this.handleSearchChange}
          className={styles['SearchForm-input']}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default SearchForm;
