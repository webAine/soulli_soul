import React from 'react';

const Gallery = ({ images, onDelete, folder }) => {
  return (
    <div>
      <h2>Галерея</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <div key={image.name} style={{ margin: '10px' }}>
            <img
              src={`/uploads/${folder}/${image.name}`}
              alt={image.name}
              style={{ width: '200px', height: 'auto' }}
            />
            <button onClick={() => onDelete(image.name)}>Удалить</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
