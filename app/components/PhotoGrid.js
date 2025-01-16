'use client'
import React, { useState } from 'react';
import PhotoModal from './PhotoModal';
import SearchBar from './SearchBar';

const PhotoGrid = ({ photos }) => {
  const [filteredPhotos, setFilteredPhotos] = useState(photos);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  const handleSearch = (query) => {
    if (query) {
      const result = photos.filter(photo => 
        photo.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      );
      setFilteredPhotos(result);
    } else {
      setFilteredPhotos(photos); // Reset to show all photos if query is empty
    }
  };

  return (
    <div className='container-xl bg-neutral-content'>
      <SearchBar onSearch={handleSearch} />
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 p-4">
        {filteredPhotos.map((photo) => (
          <div key={photo.id} className="cursor-pointer mb-4 break-inside" onClick={() => handlePhotoClick(photo)}>
            <img src={photo.url} alt={photo.title} className="w-full rounded-lg shadow-md cursor-pointer" />
          </div>
        ))}
      </div>

      {selectedPhoto && <PhotoModal photo={selectedPhoto} onClose={handleCloseModal} />}
    </div>
  );
};

export default PhotoGrid;
