import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAllUsersState, fetchAllUsers } from "../../features/admin/adminSlice";
import { fetchUser } from "../../features/user/userSlice";
import Nav from "../general/Nav.jsx";
import { toast } from 'react-toastify';
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const AllUsersAdminPage = () => {
    const users = useSelector((state) => state.admin.allUsers);
    const numUsers = useSelector((state) => state.admin.numUsers)
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [page, setPage]  = useState(1)
    const [sortByLastName, setSortByLastName] = useState(false)
	const [list, setList] = useState(users.slice(0, 25));
    let load = undefined;
	let loading = undefined;

    useEffect(() => {
		setList(users.slice(0, 25 * Number(page)));
	}, [page, users]);
	
	const handleLoad = () =>{
		function reset () {
			load.innerHTML = 'Load More';
			load.classList.remove(' fa-spin');
		}
		load = document.getElementById('load');
		loading = document.getElementById('loading')
		setPage((page) => page + 1);
		load.innerHTML = 'Loading'
		load.classList.add(' fa-spin');
		setTimeout(reset,2000)
	}

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        if ((user.isLogged && !user.isAdmin) || !token) {
            toast.error("Not authorized for admin portal", {
                position: 'bottom-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            })
            navigate('/');
        }
    },[user.isLogged]);

    useEffect(() => {
        dispatch(fetchUser())
        if (user.isAdmin) {
            dispatch(fetchAllUsers({page: page, sortByLastName: sortByLastName}))
        }
        return () => {
            dispatch(clearAllUsersState())
        }
    },[user.isAdmin, page, sortByLastName]);

    return (
        list.length ?
            <div className="all-users-container">
                <div className='allusers-header'>
                    <h1>All User Information ({numUsers})</h1>
                    <div>
                        <input className='sort-checkbox' type='checkbox' name='sort-lastName' defaultChecked={sortByLastName} onChange={() => setSortByLastName(!sortByLastName)}/>
                        <label htmlFor='sort-lastName'>Sort by Last Name (Asc.)</label>
                    </div>
                </div>
                <table id="table">
                    <thead>
                        <tr>
                                <th>ID</th>
                                <th>Username</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Admin?</th>
                        </tr>
                    </thead>
                    <tbody>
                    {list.map((user, idx) => {
                        return (
                        <tr key={idx}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.phoneNum}</td>
                            <td>{user.isAdmin ? 'Yes' : 'No'}</td>
                        </tr>
                        );
                    })}
                    </tbody>
                </table>
                {list.length < users.length ? 
                    <button id='load' className='button ' onClick={handleLoad}>Load More</button>
                    :
                    <></>
                }
            </div>
        : 
        <h1 className="loading">Loading...</h1>
    )
};

export default AllUsersAdminPage;