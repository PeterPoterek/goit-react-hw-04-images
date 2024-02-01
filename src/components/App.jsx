import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Searchbar from './Searchbar/Searchbar.jsx';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import Button from './Button/Button.jsx';
import Loader from './Loader/Loader.jsx';
import Modal from './Modal/Modal.jsx';

const App = () => {
  const apiKey = '41114633-51106070bf303d1c44ed5d4b9';
  const url = 'https://pixabay.com/api/';

  const loaderDelay = 350;
  const imagesPerPage = 12;

  const [currentSearchInput, setCurrentSearchInput] = useState('');
  const [imagesToRender, setImagesToRender] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState('');

  const handleImageSearch = e => {
    e.preventDefault();
    const userSearchInput = e.target[1].value;
    setCurrentSearchInput(userSearchInput);
  };

  const fetchData = (currentSearchInput, page, pageIncrement = 0) => {
    return axios.get(url, {
      params: {
        key: apiKey,
        q: currentSearchInput,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page + pageIncrement,
        per_page: imagesPerPage,
      },
    });
  };

  useEffect(() => {
    if (currentSearchInput) {
      setImagesToRender([]);
      fetchPixabayApi(currentSearchInput, 1);
    }
  }, [currentSearchInput]);

  const fetchPixabayApi = (currentSearchInput, page, pageIncrement = 0) => {
    setLoading(true);

    fetchData(currentSearchInput, page, pageIncrement)
      .then(res => {
        setTimeout(() => {
          setImagesToRender(res.data.hits);
          setCurrentPage(1);
          setTotalHits(res.data.totalHits);
          setLoading(false);
        }, loaderDelay);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  const renderMoreImages = () => {
    setLoading(true);

    if (currentPage * imagesPerPage < totalHits) {
      fetchData(currentSearchInput, currentPage + 1)
        .then(res => {
          setTimeout(() => {
            const newImages = res.data.hits;
            const updatedImages = [...imagesToRender, ...newImages];

            setImagesToRender(updatedImages);
            setCurrentPage(currentPage + 1);
            setLoading(false);
          }, loaderDelay);
        })
        .catch(error => {
          console.error('Error fetching more images:', error);
          setLoading(false);
        });
    }
  };

  const openModal = modalImg => {
    setLoading(true);

    setTimeout(() => {
      setModalOpen(true);
      setModalImg(modalImg);
      setLoading(false);
    }, loaderDelay);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImg('');
  };

  return (
    <>
      <Searchbar handleImageSearch={handleImageSearch} />
      <ImageGallery openModal={openModal} imagesToRender={imagesToRender} />
      {imagesToRender.length > 0 && imagesToRender.length < totalHits && (
        <Button renderMoreImages={renderMoreImages} />
      )}
      {loading && <Loader />}
      {modalOpen && <Modal closeModal={closeModal} largeImageURL={modalImg} />}
    </>
  );
};

export default App;
