import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addSuggestion } from '../../features/userSuggestions/userSuggestionsSlice';
import { fetchLoggedInUserSuggestions } from '../../features/userSuggestions/userSuggestionsSlice';

const UserRecipeSuggestion = () => {
  const [url, setUrl] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    event.preventDefault();
    setUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addSuggestion({ url: url }));
    setUrl('');
    // dispatch(fetchLoggedInUserSuggestions());
    // navigate('/user/profile/userSuggestions');
  };

  return (
    <div className="signup user-recipe-suggestion">
      <div className="signupContainer ">
        <h1>Make Suggestion</h1>
        <p>
          Please enter a valid link to the recipe you would like to suggest.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="box">
            <label htmlFor="user-suggestion" className="fl fontLabel">
              Suggestion:
            </label>
            <div className="fr">
              <input
                className="textBox"
                placeholder="Enter URL here"
                name="url"
                value={url}
                onChange={handleChange}
              />
            </div>
            <div className="clr"></div>
          </div>
          <div className="suggestion-buttons">
            <div className="box">
              <button
                type="Submit"
                name="Submit-Review"
                className="submit submit-review"
              >
                Send Suggestion
              </button>
            </div>
            <div className="box suggestion-box">
              <Link to="/user/profile/userSuggestions">
                <button type="Submit" name="go-back" className="submit go-back">
                  Go Back
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserRecipeSuggestion;
