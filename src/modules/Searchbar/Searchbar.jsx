import { Component } from 'react';
import SearchForm from './SearchForm/SearchForm';
import styles from './Searchbar.module.scss';
class Searchbar extends Component {
  render() {
    return (
      <header className={styles.Searchbar}>
        <SearchForm onSubmit={this.props.onSubmit} />
      </header>
    );
  }
}

export default Searchbar;
