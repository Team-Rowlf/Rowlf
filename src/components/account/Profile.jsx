import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import Dislikes from '../pages/Dislikes.jsx';
import Likes from '../pages/Likes.jsx';
import EditProfile from './EditProfile.jsx';
import ProfileFrame from './ProfileFrame.jsx';

const Profile = () => {
	const profile = useSelector((state) => state.profile);
	useEffect(() => {}, [profile]);
	useEffect(() => {}, [OnClick]);

	const OnClick = (event) => {
		let tablinks = document.getElementsByClassName("tab");
		for (let i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(" active", "");
		}
		if(event){
			console.log(event)
			if(event.target){
				event.target.className += " active";
			}
		}
		
		else if(event.target == undefined){
			return(
				<Likes />
			)
		}
		else if (event.target.id == "likes"){
			return(
				<Likes />
			)
		}
		else if (event.target.id == "dislikes"){
			return(
				<Dislikes />
			)
		}
		else if (event.target.id == "edit"){
			return(
				<EditProfile />
			)
		}
	}

	return (
		<div className="profile">
			<nav>
				
				<Link to={'likes'}>
					<button  className="tab" id="likes"  onClick={OnClick}>
							Likes 
					</button>
				</Link >
				<Link to={'dislikes'}>
					<button  className="tab" id="dislikes"  onClick={OnClick}>
							Dislikes 
					</button>
				</Link >
				<Link to={'edit'}>
					<button  className="tab" id="edit"  onClick={OnClick}>
							Profile 
					</button>
				</Link >
			</nav>
			<Outlet />
		</div>
	);
};

export default Profile;
