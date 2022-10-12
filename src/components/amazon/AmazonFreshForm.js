import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const AmazonFreshForm = () => {
    const [ingredients, setIngredients] = useState({})
    const shoppingList = useSelector(
		(state) => state.shoppingList.shoppingList.recipes
	);

    React.useEffect(() => {
        async function getIngredients () {
            const {data} = await axios.post('/api/amazon/convertshoppinglist', shoppingList)
            setIngredients(JSON.stringify(data))
        }
        getIngredients()
    },[shoppingList])

    return (
        <div className="amazon-fresh-form">
            <form method="POST" action="https://www.amazon.com/afx/ingredients/landing" target="_blank">
                <input id="json-ingredients" type="hidden" name="ingredients" value={`${ingredients}`}/>
                <input type="submit" value="Order On Amazon Fresh"/>
            </form>
        </div>
    )
}

export default AmazonFreshForm;