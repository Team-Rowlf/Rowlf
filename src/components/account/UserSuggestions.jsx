import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchLoggedInUserSuggestions } from '../../features/userSuggestions/userSuggestionsSlice.js';

const UserSuggestions = () => {
  const suggestions = useSelector(
    (state) => state.userSuggestions.loggedInUserSuggestions
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLoggedInUserSuggestions());
  }, []);

  return (
    <div className="user-suggestions-container">
      <div className="user-suggestions-header">
        <h1>Your Suggestions</h1>
      </div>
      {suggestions.length > 0 ? (
        <table id="table">
          <thead>
            <tr>
              <th>URL</th>
              <th>Status</th>
              <th>Admin Response</th>
              <th>Response Date</th>
            </tr>
          </thead>
          <tbody>
            {suggestions &&
              suggestions.map((suggestion) => {
                return (
                  <tr key={suggestion.id}>
                    <td>{suggestion.url}</td>
                    <td>{suggestion.status}</td>
                    <td>{suggestion.adminResponse}</td>
                    {suggestion.createdAt.slice(0, 19) ===
                    suggestion.updatedAt.slice(0, 19) ? (
                      <td>N/A</td>
                    ) : (
                      <td>{suggestion.updatedAt.slice(0, 10)}</td>
                    )}
                  </tr>
                );
              })}
          </tbody>
        </table>
      ) : (
        <h1 className="no-suggestions">No suggestions at this time</h1>
      )}
      <div className="user-suggestion-link">
        <h3>Want to suggest a recipe?</h3>
        <Link to="/user/userRecipeSuggestion">
          <button>Make a suggestion</button>
        </Link>
      </div>
    </div>
  );
};

export default UserSuggestions;
