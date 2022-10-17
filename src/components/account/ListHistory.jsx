import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  clearListHistory,
  getProfileStatus,
  getUserListHistory,
} from '../../features/profile/profileSlice';

const ListHistory = () => {
  const dispatch = useDispatch();
  const status = useSelector(getProfileStatus);
  const lists = useSelector((state) => state.profile.listHistory);
  // could maybe add buttons to add recipes to current shopping list; users could still do so by visiting the single recipe pages though

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      dispatch(getUserListHistory({ token }));
    }
    return () => {
      dispatch(clearListHistory());
    };
  }, []);

  const capitalize = (string) => {
    let arr = string.split(' ');
    arr = arr.map((itm) => itm[0].toUpperCase() + itm.slice(1));
    string = arr.join(' ');
    return string;
  };

  return status === 'pending' ? (
    <h2 className="loading">Loading...</h2>
  ) : lists.length ? (
    <div className="completed-lists">
      {lists.map((list, idx) => {
        return (
          <div key={idx}>
            <h3>{`Recipe List ${
              lists.length - idx
            } - Marked Complete on ${list.updatedAt.slice(0, 10)}`}</h3>
            <details>
              <summary> Recipes: </summary>
              <ul>
                {list.recipes.map((recipe) => (
                  <li key={recipe.name}>
                    <Link to={`/user/recipes/${recipe.id}`}>
                      {capitalize(recipe.name)}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        );
      })}
    </div>
  ) : (
    <h2 className="no-completed-lists">No completed lists</h2>
  );
};

export default ListHistory;
