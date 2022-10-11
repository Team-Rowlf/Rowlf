import React, { useState } from "react";
import axios from "axios";

const AmazonFreshForm = () => {
    const [ingredients, setIngredients] = useState({})

    // testing for now; will need to clean up all this later
    React.useEffect(() => {
        async function getIngredients () {
            const {data} = await axios.get('/api/amazon/testingredients');
            // console.log(data)
            // console.log(JSON.stringify(data))
            setIngredients(JSON.stringify(data))
        }
        getIngredients()
    },[])
    
    const testJSON = JSON.stringify({ingredients: [{name: "chicken breast", quantityList: [{unit: "POUNDS", amount: 1}]}]})

    const submitHandlerTest = () => {
        // console.log(document.getElementById('json-ingredients').value)
    }

    return (
        <div className="amazon-fresh-form">
            <form method="POST" action="https://www.amazon.com/afx/ingredients/landing" target="_blank" onSubmit={submitHandlerTest}>
                {/* below input value should be JSON object */}
                <input id="json-ingredients" type="hidden" name="ingredients" value={`${ingredients}`}/>
                <input type="submit" value="Order Through Amazon Fresh"/>
            </form>
        </div>
    )
}
// seems like might be completely different; using arrays instead of objects in landing page?
// try making new dummy data to test; if get to work then update method in amazon.js file

export default AmazonFreshForm;