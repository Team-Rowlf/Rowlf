import React from 'react';

function StoreList({ stores, openMarkerPopup }) {
  return (
    <div className="store-list">
      {stores &&
        stores.map((store) => (
          <div
            className="store"
            key={store.place_id}
            onClick={() => openMarkerPopup(store)}
          >
            <div className="store-text">
              <h2>{store.name}</h2>
              {store.rating ? (
                <p>
                  {' '}
                  Rating: {store.rating}/5 ({store.user_ratings_total} reviews)
                </p>
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
