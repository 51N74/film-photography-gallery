import React from 'react';

const PhotoModal = ({ photo, onClose }) => {
  return (
    <div 
      className="modal modal-open flex items-center justify-center" 
      onClick={onClose} 
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    >
      <div 
        className="modal-box max-w-5xl" 
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column: Image */}
          <div>
            <img src={photo.url} alt={photo.title} className="rounded-lg shadow-lg w-full h-auto" />
          </div>

          {/* Right Column: Photo Details */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">{photo.title}</h2>
              <p className="mb-4">{photo.description}</p>
              <div className="flex flex-wrap gap-2">
                {photo.tags.map((tag, index) => (
                  <span key={index} className="badge badge-primary">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;
