import React from 'react';

function StoreList({ stores }) {
  return (
    <div className="store-list">
      {stores &&
        stores.map((store) => (
          <div
            className="store"
            key={store.place_id}
            onClick={() => console.log('clicked')}
          >
            <div className="store-text">
              <h2>{store.name}</h2>
              {store.rating ? (
                <p> Rating: {store.rating}/5</p>
              ) : (
                <p>Rating: N/A</p>
              )}
              <p>{store.vicinity}</p>
            </div>
            <div className="store-img">
              <img
                className="store-img"
                src={
                  store.photos
                    ? store.photos[0].getUrl({
                        maxWidth: 500,
                        maxHeight: 500,
                      })
                    : '/images/stockStore.jpeg'
                }
              />
            </div>
          </div>
        ))}
    </div>
  );
}

export default StoreList;
