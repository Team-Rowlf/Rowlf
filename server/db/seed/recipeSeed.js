const recipes = [
    {
        name: "Taco Salad",
        url: "https://www.wholesomeyum.com/recipes/taco-salad/",
        servings: 6,
        cookTime: 20,
        ingredients: [
            {name: 'ground beef', qty: 1, denom: 'lb'},
            {name: 'avocado oil', qty: 1, denom: 'tsp'},
            {name: 'taco seasoning', qty: 2, denom: 'tbsp'},
            {name: 'romain lettuce', qty: 8, denom: 'oz'},
            {name: 'grape tomatoes', qty: 4/3, denom: 'cup'},
            {name: 'cheddar cheese', qty: 3/4, denom: 'cup'},
            {name: 'avocado', qty: 1, denom: 'medium'},
            {name: 'salsa', qty: 1/3, denom: 'cup'},
            {name: 'sour cream', qty: 1/3, denom: 'cup'}
        ],
        cuisine: ['mexican'],
        restrictions: ['glutan-free', 'nut-free']
    },
    {
        name: "Tomato Basil Pasta",
        url: "https://cookingformysoul.com/tomato-basil-pasta/",
        servings: 4,
        cookTime: 25,
        ingredients: [
            {name: 'spaghetti', qty: 3/4, denom: 'lb'},
            {name: 'cherry tomatoes', qty: 4, denom: 'cup'},
            {name: 'garlic', qty: 4, denom: 'clove'},
            {name: 'olive oil', qty: 1/4, denom: 'cup'},
            {name: 'fresh basil', qty: 1/2, denom: 'cup'},
            {name: 'salt', qty: 2, denom: 'taste'},
            {name: 'pepper', qty: 2, denom: 'taste'}
        ],
        cuisine: ['italian'],
        restrictions: ['vegetarian','nut-free']
    }
]

module.exports = recipes