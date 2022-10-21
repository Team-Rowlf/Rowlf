import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  fetchAllSuggestions,
  deleteSuggestion,
} from '../../features/userSuggestions/userSuggestionsSlice.js';

const UserSuggestionsAdminPage = () => {
  const statusArray = ['All', 'Pending', 'Approved', 'Denied'];
  const suggestions =
    useSelector((state) => state.userSuggestions.suggestions) || [];
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [dateSort, setDateSort] = useState(true);
  const [filtered, setFiltered] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllSuggestions());
  }, []);

  useEffect(() => {
    setFilteredSuggestions(suggestions);
  }, [suggestions]);

  const handleFilter = (event) => {
    let filteredArray = [];
    if (event.target.value !== 'All') {
      for (let i = 0; i < suggestions.length; i++) {
        if (suggestions[i].status === event.target.value) {
          filteredArray.push(suggestions[i]);
        }
      }
      setFilteredSuggestions(filteredArray);
    } else {
      setFilteredSuggestions(suggestions);
    }
  };

  const handleDelete = async (id) => {
    await dispatch(deleteSuggestion(id));
    await dispatch(fetchAllSuggestions());
  };

  const sortByDate = () => {
    let sortedSuggestions = [...filteredSuggestions];
    setFilteredSuggestions(sortedSuggestions.reverse());
    setDateSort(!dateSort);
  };
  return (
    <div className="user-suggestions-container">
      <div className="user-suggestions-header">
        <h1>User Recipe Suggestions</h1>
        <div className="filter-sort-container">
          <div className="filter-container">
            <label htmlFor="suggestion-filter">Filter by Status: </label>
            <select className="suggestion-select" onChange={handleFilter}>
              {statusArray.map((status, idx) => (
                <option key={idx} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
          <button
            type="button"
            className="sort-button"
            onClick={() => sortByDate(filteredSuggestions)}
          >
            Sort By {dateSort ? 'Newest' : 'Oldest'}
          </button>
        </div>
      </div>
      <table id="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>URL</th>
            <th>Suggesting User</th>
            <th>Status</th>
            <th>Admin Response</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {suggestions &&
            filteredSuggestions.map((suggestion) => {
              return (
                <tr key={suggestion.id}>
                  <td>{suggestion.id}</td>
                  <td>{suggestion.url}</td>
                  <td>{suggestion.user.username}</td>
                  <td>{suggestion.status}</td>
                  <td>{suggestion.adminResponse}</td>
                  <td>{suggestion.createdAt.slice(0, 10)}</td>
                  <td className="suggestion-button-container">
                    <Link to={`/user/reviewUserSuggestion/${suggestion.id}`}>
                      <button className="suggestion-button">
                        Review Suggestion
                      </button>
                    </Link>
                    <button
                      className="suggestion-button"
                      onClick={() => handleDelete(suggestion.id)}
                    >
                      Delete Suggestion
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default UserSuggestionsAdminPage;
