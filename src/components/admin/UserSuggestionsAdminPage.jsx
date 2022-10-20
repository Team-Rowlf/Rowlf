import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllSuggestions } from '../../features/userSuggestions/userSuggestionsSlice.js';

const UserSuggestionsAdminPage = () => {
  const suggestions =
    useSelector((state) => state.userSuggestions.suggestions) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllSuggestions());
  }, []);

  console.log(suggestions);
  return (
    <div className="user-suggestions-container">
      <div className="user-suggestions-header">
        <h1>User Recipe Suggestions</h1>
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
            suggestions.map((suggestion) => {
              return (
                <tr key={suggestion.id}>
                  <td>{suggestion.id}</td>
                  <td>{suggestion.url}</td>
                  <td>{suggestion.user.username}</td>
                  <td>{suggestion.status}</td>
                  <td>{suggestion.adminResponse}</td>
                  <td>{suggestion.createdAt.slice(0, 10)}</td>
                  <td>
                    <Link to={`ReviewUserSuggestion/${suggestion.id}`}>
                      <button className="suggestion-buttons">
                        Review Suggestion
                      </button>
                    </Link>
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
