import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  fetchSingleSuggestion,
  reviewSuggestion,
} from '../../features/userSuggestions/userSuggestionsSlice.js';

const ReviewSuggestionsAdminPage = () => {
  const [adminResponse, setAdminResponse] = useState('');
  const [status, setStatus] = useState(null);
  const singleSuggestion = useSelector(
    (state) => state.userSuggestions.singleSuggestion
  );
  const errorStatus = useSelector((state) => state.userSuggestions.status);
  const [errorState, setErrorState] = useState('failed');
  const [reviewed, setReviewed] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchSingleSuggestion(params.id));
  }, []);

  useEffect(() => {
    setAdminResponse(singleSuggestion.adminResponse);
    setStatus(singleSuggestion.status);
  }, [singleSuggestion]);

  const handleResponse = (event) => {
    setAdminResponse(event.target.value);
  };

  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(
      reviewSuggestion({
        adminResponse: adminResponse,
        status: status,
        id: singleSuggestion.id,
      })
    );
    setReviewed(!reviewed);
  };

  // useEffect(() => {
  //   if (errorState === 'succeeded') {
  //     navigate('/admin/userSuggestions');
  //   }
  // }, [reviewed]);

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
              value="Pending"
              onChange={handleStatus}
              defaultChecked={
                singleSuggestion.status == 'Pending' ? true : false
              }
            />{' '}
            Pending
            <input
              className="suggestion-radio"
              type="radio"
              name="Status"
              value="Approved"
              onChange={handleStatus}
              defaultChecked={
                singleSuggestion.status == 'Approved' ? true : false
              }
            />{' '}
            Approved
            <input
              className="suggestion-radio"
              type="radio"
              name="Status"
              value="Denied"
              onChange={handleStatus}
              defaultChecked={
                singleSuggestion.status == 'Denied' ? true : false
              }
            />{' '}
            Denied
          </div>

          <p>
            Suggested by:{' '}
            {singleSuggestion.user ? singleSuggestion.user.username : 'N/A'}
          </p>
          <div className="suggestion-buttons">
            <div className="box suggestion-box">
              <button
                type="Submit"
                name="Submit-Review"
                className="submit submit-review"
              >
                Submit Review
              </button>
            </div>
            <div className="box suggestion-box">
              <Link to="/admin/userSuggestions">
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

export default ReviewSuggestionsAdminPage;
