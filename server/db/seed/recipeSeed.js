const recipes = [
    {
        name: "Taco Salad",
        url: "https://www.wholesomeyum.com/recipes/taco-salad/",
        img: "https://www.wholesomeyum.com/wp-content/uploads/2016/08/wholesomeyum-Easy-Healthy-Taco-Salad-Recipe-with-Ground-Beef-11.jpg",
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
            {name: 'sour cream', qty: 1/3, denom: 'cup'},
            {name: 'green onion', qty: 1/2, denom: 'cup'}
        ],
        cuisine: ['mexican'],
        restrictions: ['glutan-free', 'nut-free'],
        appliances: ['stovetop']
    },
    {
        name: "Tomato Basil Pasta",
        url: "https://cookingformysoul.com/tomato-basil-pasta/",
        img: "https://cookingformysoul.com/wp-content/uploads/2020/07/fresh-tomato-and-basil-bucatini-min-360x361.jpg",
        servings: 4,
        cookTime: 25,
        ingredients: [
            {name: 'spaghetti', qty: 3/4, denom: 'lb'},
            {name: 'cherry tomatoes', qty: 4, denom: 'cup'},
            {name: 'garlic', qty: 4, denom: 'clove'},
            {name: 'olive oil', qty: 1/4, denom: 'cup'},
            {name: 'fresh basil', qty: 1/2, denom: 'cup'},
            {name: 'salt', qty: 1, denom: 'to taste'},
            {name: 'pepper', qty: 1, denom: 'to taste'},
            {name: 'burrata', qty: 1, denom: 'ball'},
        ],
        cuisine: ['pasta'],
        restrictions: ['vegetarian','nut-free','healthy'],
        appliances: ['stovetop']
    },
    {
        name: "Vegan Quesadilla",
        url: "https://www.loveandlemons.com/vegan-quesadilla-recipe/",
        img: "https://cdn.loveandlemons.com/wp-content/uploads/2021/01/vegan-quesadilla-580x580.jpg",
        servings: 4,
        cookTime: 20,
        ingredients: [
            {name: 'poblano pepper', qty: 2, denom: 'whole'},
            {name: 'tortillas', qty: 8, denom: 'whole'},
            {name: 'vegan cheese', qty: 3/2, denom: "cup"},
            {name: 'sweet potato', qty: 1, denom: 'whole'},
            {name: 'red bell pepper', qty: 1, denom: 'whole'},
            {name: 'black beans', qty: 1/2, denom: 'cup'},
            {name: 'green onion', qty: 1/4, denom: 'cup'},
            {name: 'serrano pepper', qty: 1, denom: 'whole'},
            {name: 'guacamole', qty: 1, denom: 'to taste'},
            {name: 'salsa', qty: 1, denom: 'to taste'},
            {name: 'lime', qty: 1, denom: 'to taste'},
            {name: 'cilantro', qty: 1, denom: 'to taste'}
        ],
        cuisine: ['mexican','healthy'],
        restrictions: ['vegetarian','vegan','nut-free','lactose-free'],
        appliances: ['stovetop']
    },
    {
        name: "Vegan Burrito Bowl",
        url: "https://www.loveandlemons.com/vegan-burrito-bowl-recipe/",
        img: "https://cdn.loveandlemons.com/wp-content/uploads/2018/07/vegan-burrito-bowl-1.jpg",
        servings: 2,
        cookTime: 50,
        ingredients: [
            {name: 'black or pinto beans', qty: 1, denom: 'cup'},
            {name: 'chipotle pepper', qty: 1, denom: 'canned'},
            {name: 'olive oil', qty: 1/2, denom: 'tsp'},
            {name: 'cooked rice', qty: 1, denom: 'cup'},
            {name: 'arugula', qty: 2, denom: 'cup'},
            {name: 'guacamole', qty: 1/2, denom: 'cup'},
            {name: 'salsa', qty: 1/2, denom: 'cup'},
            {name: 'cilantro', qty: 1/4, denom: 'cup'},
            {name: 'salt', qty: 1, denom: 'to taste'},
            {name: 'pepper', qty: 1, denom: 'to taste'},
            {name: 'portobello mushroom', qty: 2, denom: 'whole'},
            {name: 'red bell pepper', qty: 1, denom: 'whole'},
            {name: 'green pepper', qty: 1, denom: 'whole'},
            {name: 'jalapeno pepper', qty: 1, denom: 'whole'}
        ],
        cuisine: ['mexican','healthy'],
        restrictions: ['vegetarian','vegan','nut-free','lactose-free'],
        appliances: ['grill']
    },
    {
        name: 'Minestrone soup',
        url: "https://www.loveandlemons.com/minestrone-soup/",
        img: "https://cdn.loveandlemons.com/wp-content/uploads/2021/11/minestrone-soup-580x580.jpg",
        servings: 4,
        cookTime: 45,
        ingredients: [
            {name: 'olive oil', qty: 2, denom: 'tbsp'},
            {name: 'yellow onion', qty: 1, denom: 'medium'},
            {name: 'carrot', qty: 2, denom: 'medium'},
            {name: 'celery', qty: 2, denom: 'stalk'},
            {name: 'salt', qty: 1, denom: 'tsp'},
            {name: 'pepper', qty: 1, denom: 'to taste'},
            {name: 'garlic', qty: 3, denom: 'clove'},
            {name: 'diced tomatoes', qty: 28, denom: 'oz'},
            {name: 'white beans', qty: 3/2, denom: 'cup'},
            {name: 'green beans', qty: 1, denom: 'cup'},
            {name: 'vegetable broth', qty: 4, denom: 'cup'},
            {name: 'bay leaf', qty: 2, denom: 'leaves'},
            {name: 'oregano', qty: 1, denom: 'tsp'},
            {name: 'thyme', qty: 1, denom: 'tsp'},
            {name: 'pasta', qty: 3/4, denom: 'cup'},
            {name: 'parsley', qty: 1/2, denom: 'cup'},
            {name: 'red pepper flakes', qty: 1, denom: 'to taste'},
            {name: 'parmesan cheese', qty: 1, denom: 'to taste'}
        ],
        cuisine: ['soup', 'pasta'],
        restrictions: ['nut-free','vegetarian','lactose-free'],
        appliances: ['stovetop']
    },
    {
        name: 'Quick Shrimp Pad Thai',
        url: 'https://www.foodandwine.com/recipes/quick-shrimp-pad-thai',
        img: 'https://www.foodandwine.com/thmb/IPsKJGSW74tZB0fo2xLLQpmgY9o=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/201105-xl-quick-shrimp-pad-thai-ed2f91e4237d487b951c2bcbd3b37230.jpg',
        servings: 4,
        cookTime: 30,
        ingredients: [
            {name: 'pad thai noodles', qty: 8, denom: 'oz'},
            {name: 'fish sauce', qty: 2, denom: 'tbsp'},
            {name: 'brown sugar', qty: 3, denom: 'tbsp'},
            {name: 'lime juice', qty: 1/4, denom: 'cup'},
            {name: 'serrano pepper', qty: 1, denom: 'whole'},
            {name: 'canola oil', qty: 1/4, denom: 'cup'},
            {name: 'shallot', qty: 3, denom: 'whole'},
            {name: 'garlic', qty: 3, denom: 'clove'},
            {name: 'shrimp', qty: 12, denom: 'oz'},
            {name: 'egg', qty: 2, denom: 'whole'},
            {name: 'green onion', qty: 4, denom: 'stalk'},
            {name: 'peanuts', qty: 1, denom: 'to taste'},
            {name: 'cilanto', qty: 1, denom: 'to taste'},
            {name: 'bean sprouts', qty: 1, denom: 'to taste'}
        ],
        cuisine: ['asian', 'pasta'],
        restrictions: ['pescatarian', 'lactose-free'],
        appliances: ['stovetop']
    },
    {
        name: 'Corned Beef and Cabbage',
        url: 'https://www.allrecipes.com/recipe/16310/corned-beef-and-cabbage-i/',
        img: 'https://www.allrecipes.com/thmb/LpXBZhpPnWOQxXYocmKCFzFSB6c=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/16310-Corned-Beef-and-Cabbage-I-372809-Photo-by-Jenbc27-2000-0281c355b76543a6bef0f8e4cd52a517.jpg',
        servings: 6,
        cookTime: 150,
        ingredients: [
            {name: 'corned beef brisket', qty: 3, denom: 'lb'},
            {name: 'red potatoes', qty: 10, denom: 'small'},
            {name: 'carrot', qty: 5, denom: 'medium'},
            {name: 'cabbage head', qty: 1, denom: 'large'}
        ],
        cuisine: ['other'],
        restrictions: ['nut-free','lactose-free'],
        appliances: ['stovetop']
    },
    {
        url: 'https://www.allrecipes.com/recipe/223042/chicken-parmesan/',
        img: 'https://www.allrecipes.com/thmb/VNte5t9OkENLpZ1SN5CJVVSHNcg=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/223042-Chicken-Parmesan-mfs_001-b5a42a1bd4564f0a880b9030a33e24d3.jpg',
        name: 'Chicken Parmesan',
        cuisine: ['other'],
        appliances: ['oven', 'stovetop'],
        restrictions: [],
        cookTime: 45,
        servings: 4,
        ingredients: [
          {
            qty: '2',
            name: 'chicken breast',
            denom: 'whole'
          },
          {
            qty: 1,
            name: 'pepper',
            denom: 'to taste'
          },
          {
            qty: 1,
            name: 'salt',
            denom: 'to taste'
          },
          { qty: 2, name: 'eggs', denom: 'large' },
          {
            qty: 1,
            name: 'panko bread crumbs',
            denom: 'cup'
          },
          { qty: 3/4, name: 'parmesan cheese', denom: 'cup' },
          {
            qty: 2,
            name: 'flour',
            denom: 'tbsp'
          },
          {
            qty: 1/2,
            name: 'olive oil',
            denom: 'cup'
          },
          { qty: 1/2, name: 'tomato sauce', denom: 'cup' },
          {
            qty: 1/4,
            name: 'fresh mozzarella',
            denom: 'cup'
          },
          { qty: 1/4, name: 'fresh basil', denom: 'cup' },
          { qty: 1/2, name: 'provolone cheese', denom: 'cup' },
          { qty: 2, name: 'olive oil', denom: 'tsp' }
        ]
      }
]

module.exports = recipes