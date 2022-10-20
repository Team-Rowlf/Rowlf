import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { fetchSingleSuggestion } from '../../features/userSuggestions/userSuggestionsSlice.js';
import { reviewSuggestion } from '../../features/userSuggestions/userSuggestionsSlice.js';
import { fetchAllSuggestions } from '../../features/userSuggestions/userSuggestionsSlice.js';

const ReviewSuggestionsAdminPage = () => {
  const [adminResponse, setAdminResponse] = useState('');
  const [status, setStatus] = useState(null);
  const singleSuggestion = useSelector(
    (state) => state.userSuggestions.singleSuggestion
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    console.log('here');
    dispatch(fetchSingleSuggestion(params.id));
  }, []);

  useEffect(() => {
    console.log('second');
    setAdminResponse(singleSuggestion.adminResponse);
    setStatus(singleSuggestion.status);
  }, [singleSuggestion]);

  const handleResponse = (event) => {
    setAdminResponse(event.target.value);
  };

  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(
      reviewSuggestion({
        adminResponse: adminResponse,
        status: status,
        id: singleSuggestion.id,
      })
    );
    navigate('/admin/userSuggestions');
  }

  console.log(singleSuggestion);
  return (
    <div className="signup">
      <div className="signupContainer">
        <h1>Review Suggestion</h1>
        <p>
          Please approve or deny this suggestion and provide the user with a
          brief response.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="box">
            <label htmlFor="admin-response" className="fl fontLabel">
              Admin Response:
            </label>
            <div className="fr">
              <input
                className="textBox"
                placeholder="Response"
                name="name"
                value={adminResponse || ''}
                onChange={handleResponse}
              />
            </div>
            <div className="clr"></div>
          </div>
          <div className="box radio">
            <label htmlFor="status" className="fl fontLabel">
              {' '}
              Status ({singleSuggestion.status}){' '}
            </label>{' '}
            <input
              className="suggestion-radio"
              type="radio"
              name="Status"
              value="pending"
              onChange={handleStatus}
              defaultChecked={
                singleSuggestion.status === 'pending' ? true : false
              }
            />{' '}
            pending
            <input
              className="suggestion-radio"
              type="radio"
              name="Status"
              value="approved"
              onChange={handleStatus}
              defaultChecked={
                singleSuggestion.status === 'approved' ? true : false
              }
            />{' '}
            approved
            <input
              className="suggestion-radio"
              type="radio"
              name="Status"
              value="denied"
              onChange={handleStatus}
              defaultChecked={
                singleSuggestion.status === 'denied' ? true : false
              }
            />{' '}
            denied
          </div>

          <p>
            Suggested by:{' '}
            {singleSuggestion.user ? singleSuggestion.user.username : 'N/A'}
          </p>
          <div className="box suggestion-box">
            <button
              type="Submit"
              name="Submit-Review"
              className="submit submit-review"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewSuggestionsAdminPage;
