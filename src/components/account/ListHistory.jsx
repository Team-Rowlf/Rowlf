import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearListHistory, getProfileStatus, getUserListHistory } from "../../features/profile/profileSlice";

const ListHistory = () => {
    const dispatch = useDispatch();
    const status = useSelector(getProfileStatus)
    const lists = useSelector((state) => state.profile.listHistory)
    // need to fetch all lists associated with user; maybe even just the completed ones, since active still is the shopping list
    // display the date of completion
    // -- if click on particular list, expand to show the recipes associated with the list and links; don't need to show ingredients
    // -- could maybe have a button under each toE 'add to current list'; would add all recipes to current shopping list

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        if (token) {
            dispatch(getUserListHistory({ token }));
        }
        return () => {
            dispatch(clearListHistory())
        }
    },[])

    const capitalize = (string) => {
		let arr = string.split(' ');
		arr = arr.map((itm) => itm[0].toUpperCase() + itm.slice(1));
		string = arr.join(' ');
		return string;
	};

    return ( 
        status === 'pending' ?
            <h2 className="loading">Loading...</h2>
            :
            (lists.length ?
                <div className="completed-lists">
                    {lists.map((list, idx) => {
                        return (
                            <div key={idx}>
                                <h3>{`List ${lists.length - idx} - Completed ${list.updatedAt.slice(0,10)}`}</h3>
                                <details>
                                    <summary> Recipes: </summary>
                                    <ul>
                                        {list.recipes.map(recipe => <li key={recipe.name}><Link to={`/user/recipes/${recipe.id}`}>{capitalize(recipe.name)}</Link></li>)}
                                    </ul>
                                </details>
                            </div>
                        )
                    })}
                </div>
                : 
                <h2 className="no-completed-lists">No completed lists</h2>
            )

    )
}

export default ListHistory;