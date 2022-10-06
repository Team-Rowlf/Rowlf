import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const ShoppingList = () => {
	// const user = useSelector((state) => state.user);
	// const navigate = useNavigate();

	// React.useEffect(() => {
	// 	!user.isLogged && navigate('/');
	// }, []);
	return (
		<div className="shoppingList-container">
			{' '}
			<p>
				<u>Main Shopping List</u>
			</p>{' '}
			<ul>
				<li> Item 1</li>
				<li> Item 2</li>
				<li> Item 3</li>
			</ul>
		</div>
	);
};

export default ShoppingList;
