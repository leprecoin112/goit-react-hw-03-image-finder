import { Component } from 'react';
import styles from './App.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from 'modules/Searchbar/Searchbar';
import pixaBayApi from 'shared/api/pixabay-api';
import ImageGallery from 'shared/components/ImageGallery/ImageGallery';
import Button from 'shared/components/Button/Button';
import { ThreeDots } from 'react-loader-spinner';

class App extends Component {
  state = {
    valueSearch: '',
    items: [],
    page: 1,
    isLoadMore: false,
    isLoader: false,
  };

  handleFormSubmit = value => {
    this.setState({
      valueSearch: value,
      page: 1,
      items: [],
      isLoadMore: false,
      isLoader: false,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  finalPage = (page, totalPages) => {
    if (page >= totalPages) {
      this.setState({ isLoadMore: false });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const prevValue = prevState.valueSearch;
    const nextValue = this.state.valueSearch;
    const prevPage = prevState.page;
    const nextPage = this.state.page;
    if (prevValue !== nextValue || prevPage !== nextPage) {
      this.setState({ isLoadMore: false, isLoader: true });
      pixaBayApi
        .getImagesByName(nextValue, nextPage)
        .then(response => response.data)
        .then(({ hits, totalHits }) => {
          if (totalHits === 0) {
            toast.warn('Nothing found. Try another query.');
          }
          const totalPages = totalHits / 12;
          this.setState(prevState => ({
            items: [...prevState.items, ...hits],
            isLoadMore: true,
          }));

          this.finalPage(nextPage, totalPages);
        })
        .catch(error => console.log(error.messages))
        .finally(() => this.setState({ isLoader: false }));
    }
  }
  render() {
    const { isLoadMore, items, isLoader } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <main>
          <section>
            <ImageGallery images={items} />
            {isLoadMore && (
              <Button type="button" title="Load more" onClick={this.loadMore} />
            )}
            {isLoader && (
              <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#4fa94d"
                ariaLabel="three-dots-loading"
                wrapperClass={styles.loader}
                visible="true"
              />
            )}
          </section>
        </main>

        <ToastContainer autoClose={5000} />
      </div>
    );
  }
}

export default App;
