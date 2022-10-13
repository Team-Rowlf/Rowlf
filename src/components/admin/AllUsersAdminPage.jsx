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
    const [page, setPage]  = useState(searchParams.get('page'))
    const [sortByLastName, setSortByLastName] = useState(false)
    
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
        users.length ?
            <div className="all-users-container">
                <Nav />
                <div className='allusers-header'>
                    <h1>All User Information ({numUsers})</h1>
                    <div>
                        <input className='sort-checkbox' type='checkbox' name='sort-lastName' defaultChecked={sortByLastName} onChange={() => setSortByLastName(!sortByLastName)}/>
                        <label htmlFor='sort-lastName'>Sort by Last Name (Asc.)</label>
                    </div>
                    <div className='display-info'>
                        <div className='display-text'>Displaying 25 users per page:</div>
                        <div className="prev-next">
                        <Link to={`/adminportal/allusers?page=${Number(page)-1}`} className={Number(page) === 1 ? 'prevNext disabled' : 'prevNext'} onClick={() => setPage(+page-1)}>Prev</Link>
                        <Link to={`/adminportal/allusers?page=${Number(page)+1}`} className={page*25 >= numUsers ? 'prevNext disabled' : 'prevNext'} onClick={() => setPage(+page+1)}>Next</Link>
                        </div>
                    </div>
                </div>
                <table id="all-users-table">
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
                    {users.map((user, idx) => {
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
            </div>
        : 
        <h1 className="loading">Loading...</h1>
    )
};

export default AllUsersAdminPage;