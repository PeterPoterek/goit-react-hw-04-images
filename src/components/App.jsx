import React, { Component } from 'react';
import axios from 'axios';

import Searchbar from './Searchbar/Searchbar.jsx';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import Button from './Button/Button.jsx';
import Loader from './Loader/Loader.jsx';
import Modal from './Modal/Modal.jsx';

class App extends Component {
  apiKey = '41114633-51106070bf303d1c44ed5d4b9';
  url = 'https://pixabay.com/api/';

  loaderDelay = 350;
  imagesPerPage = 12;

  state = {
    currentSearchInput: '',
    imagesToRender: [],
    currentPage: 1,
    totalHits: 0,
    loading: false,
    modalOpen: false,
    modalImg: '',
  };

  handleImageSearch = e => {
    e.preventDefault();

    const userSearchInput = e.target[1].value;
    this.setState({ currentSearchInput: userSearchInput });
  };

  fetchData = (currentSearchInput, page, pageIncrement = 0) => {
    return axios.get(this.url, {
      params: {
        key: this.apiKey,
        q: currentSearchInput,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page + pageIncrement,
        per_page: this.imagesPerPage,
      },
    });
  };

  fetchApi = (currentSearchInput, page, pageIncrement = 0) => {
    this.setState({ loading: true });

    this.fetchData(currentSearchInput, page, pageIncrement)
      .then(res => {
        setTimeout(() => {
          this.setState({
            imagesToRender: res.data.hits,
            currentPage: 1,
            totalHits: res.data.totalHits,
            loading: false,
          });
        }, this.loaderDelay);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        this.setState({ loading: false });
      });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentSearchInput !== this.state.currentSearchInput) {
      this.setState({ imagesToRender: [] });

      this.fetchApi(this.state.currentSearchInput, 1);
    }
  }
  renderMoreImages = () => {
    const { currentSearchInput, currentPage, imagesToRender, totalHits } =
      this.state;

    this.setState({ loading: true });

    if (currentPage * this.imagesPerPage < totalHits) {
      this.fetchData(currentSearchInput, currentPage + 1)
        .then(res => {
          setTimeout(() => {
            const newImages = res.data.hits;
            const updatedImages = [...imagesToRender, ...newImages];

            this.setState({
              imagesToRender: updatedImages,
              currentPage: currentPage + 1,
              loading: false,
            });
          }, this.loaderDelay);
        })
        .catch(error => {
          console.error('Error fetching more images:', error);
          this.setState({ loading: false });
        });
    }
  };

  openModal = modalImg => {
    this.setState({ loading: true });

    setTimeout(() => {
      this.setState({ modalOpen: true, modalImg: modalImg, loading: false });
    }, this.loaderDelay);
  };

  closeModal = () => {
    this.setState({ modalOpen: false, modalImg: '' });
  };
  render() {
    const { imagesToRender, totalHits, loading, modalOpen, modalImg } =
      this.state;

    return (
      <>
        <Searchbar handleImageSearch={this.handleImageSearch} />
        <ImageGallery
          openModal={this.openModal}
          imagesToRender={imagesToRender}
        />
        {imagesToRender.length > 0 && imagesToRender.length < totalHits && (
          <Button renderMoreImages={this.renderMoreImages} />
        )}
        {loading && <Loader />}

        {modalOpen && (
          <Modal closeModal={this.closeModal} largeImageURL={modalImg} />
        )}
      </>
    );
  }
}

export default App;
