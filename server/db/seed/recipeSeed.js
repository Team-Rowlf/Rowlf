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
    },
    {
        url: 'https://www.allrecipes.com/recipe/14685/slow-cooker-beef-stew-i/',
        img: 'https://www.allrecipes.com/thmb/VHMVLGqIcXXirxhYcqIwnUjR4a4=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/14685-slow-cooker-beef-stew-mfs-315-e5994bd0cf47400caffbaf273504b72b.jpg',
        name: 'Slow Cooker Beef Stew',
        cuisine: ['soup'],
        appliances: ['slow cooker','instant pot'],
        restrictions: ['nut-free','lactose-free'],
        cookTime: 260,
        servings: 6,
        ingredients: [
          {
            qty: 2,
            name: 'beef stew meat',
            denom: 'lb'
          },
          { qty: 1/4, name: 'flour', denom: 'cup' },
          { qty: 1/2, name: 'salt', denom: 'tsp' },
          { qty: 1/2, name: 'pepper', denom: 'tsp' },
          { qty: 3/2, name: 'beef broth', denom: 'cup' },
          { qty: 1, name: 'carrot', denom: 'medium' },
          { qty: 1, name: 'potato', denom: 'medium' },
          { qty: 1, name: 'onion', denom: 'medium' },
          { qty: 1, name: 'celery', denom: 'stalk' },
          { qty: 1, name: 'Worcestershire sauce', denom: 'tsp' },
          { qty: 1, name: 'paprika', denom: 'tsp' },
          { qty: 1, name: 'garlic', denom: 'clove' },
          { qty: 1, name: 'bay leaf', denom: 'large' }
        ]
      },
      {
        url: 'https://www.allrecipes.com/recipe/23600/worlds-best-lasagna/',
        img: 'https://www.allrecipes.com/thmb/SFQwnEJPxr27sfhf0ZkdKueFeQc=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/23600-worlds-best-lasagna-armag-1x1-1-339b21b9f88b48c9943def663f43889c.jpg',
        name: "World's Best Lasagna",
        cuisine: ['pasta'],
        appliances: ['stovetop','oven'],
        restrictions: ['nut-free'],
        cookTime: 195,
        servings: 12,
        ingredients: [
          { qty: 1, name: 'sweet Italian sausage', denom: 'lb' },
          { qty: 3/4, name: 'ground beef', denom: 'lb' },
          { qty: 1/2, name: 'onion', denom: 'cup' },
          { qty: 2, name: 'garlic', denom: 'cloves' },
          { qty: 28, name: 'crushed tomatoes', denom: 'oz' },
          { qty: 12, name: 'tomato paste', denom: 'oz' },
          {
            qty: 13,
            name: 'canned tomato sauce',
            denom: 'oz'
          },
          { qty: 1/2, name: 'water', denom: 'cup' },
          { qty: 2, name: 'white sugar', denom: 'tbsp' },
          { qty: 3/2, name: 'dried basil leaves', denom: 'tsp' },
          { qty: 1/2, name: 'fennel seeds', denom: 'tsp' },
          { qty: 1, name: 'Italian seasoning', denom: 'tsp' },
          {
            qty: 3/2,
            name: 'salt',
            denom: 'tsp'
          },
          { qty: 1/4, name: 'pepper', denom: 'tsp' },
          { qty: 4, name: 'parsley', denom: 'tbsp' },
          { qty: 12, name: 'lasagna noodles', denom: 'whole' },
          { qty: 16, name: 'ricotta cheese', denom: 'oz' },
          { qty: 1, name: 'egg', denom: 'whole' },
          { qty: 3/4, name: 'mozzarella cheese', denom: 'lb' },
          { qty: 3/4, name: 'parmesan cheese', denom: 'cup' }
        ]
      },
      {
        url: 'https://www.allrecipes.com/recipe/23600/worlds-best-lasagna/',
        img: 'https://www.allrecipes.com/thmb/SFQwnEJPxr27sfhf0ZkdKueFeQc=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/23600-worlds-best-lasagna-armag-1x1-1-339b21b9f88b48c9943def663f43889c.jpg',
        name: "World's Best Lasagna",
        cuisine: ['pasta'],
        appliances: ['stovetop','oven'],
        restrictions: [],
        cookTime: 195,
        servings: 12,
        ingredients: [
          { qty: '1', name: 'sweet Italian sausage', denom: 'pound' },
          { qty: '¾', name: 'lean ground beef', denom: 'pound' },
          { qty: '½', name: 'minced onion', denom: 'cup' },
          { qty: '2', name: 'garlic, crushed', denom: 'cloves' },
          { qty: '1', name: 'crushed tomatoes', denom: '(28 ounce) can' },
          { qty: '2', name: 'tomato paste', denom: '(6 ounce) cans' },
          {
            qty: '2',
            name: 'canned tomato sauce',
            denom: '(6.5 ounce) cans'
          },
          { qty: '½', name: 'water', denom: 'cup' },
          { qty: '2', name: 'white sugar', denom: 'tablespoons' },
          { qty: '1 ½', name: 'dried basil leaves', denom: 'teaspoons' },
          { qty: '½', name: 'fennel seeds', denom: 'teaspoon' },
          { qty: '1', name: 'Italian seasoning', denom: 'teaspoon' },
          {
            qty: '1 ½',
            name: 'salt, divided, or to taste',
            denom: 'teaspoons'
          },
          { qty: '¼', name: 'ground black pepper', denom: 'teaspoon' },
          { qty: '4', name: 'chopped fresh parsley', denom: 'tablespoons' },
          { qty: '12', name: 'lasagna noodles', denom: '' },
          { qty: '16', name: 'ricotta cheese', denom: 'ounces' },
          { qty: '1', name: 'egg', denom: '' },
          { qty: '¾', name: 'mozzarella cheese, sliced', denom: 'pound' },
          { qty: '¾', name: 'grated Parmesan cheese', denom: 'cup' }
        ]
      },
      {
        url: 'https://www.allrecipes.com/recipe/26317/chicken-pot-pie-ix/',
        img: 'https://www.allrecipes.com/thmb/H36Ok67wp6E167fVlY7jVduNSw4=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/26317-chicken-pot-pie-mfs-480-7e84da80505a410fa75139eab67a652f.jpg',
        name: 'Chicken Pot Pie',
        cuisine: ['american'],
        appliances: ['stovetop','oven'],
        restrictions: [],
        cookTime: 80,
        servings: 8,
        ingredients: [
          {
            qty: 1,
            name: 'chicken breast',
            denom: 'lb'
          },
          { qty: 1, name: 'carrot', denom: 'cup' },
          { qty: 1, name: 'frozen peas', denom: 'cup' },
          { qty: 1/2, name: 'celery', denom: 'cup' },
          { qty: 1/3, name: 'butter', denom: 'cup' },
          { qty: 1/3, name: 'onion', denom: 'cup' },
          { qty: 1/3, name: 'flour', denom: 'cup' },
          { qty: 1/2, name: 'salt', denom: 'tsp' },
          { qty: 1/4, name: 'pepper', denom: 'tsp' },
          { qty: 1/4, name: 'celery seed', denom: 'tsp' },
          { qty: 7/4, name: 'chicken broth', denom: 'cup' },
          { qty: 2/3, name: 'milk', denom: 'cup' },
          { qty: 2, name: 'unbaked pie crusts', denom: '(9 inch)' }
        ]
      },
      {
        url: 'https://www.allrecipes.com/recipe/92462/slow-cooker-texas-pulled-pork/',
        img: 'https://www.allrecipes.com/thmb/udHTIESqLLZB4LPDKL_96uPgZJc=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/92462_Slow-Cooker-Texas-Pulled-Pork_psychedilemma_4560053_original-1x1-1-e3c3aa5d5a10431b8b5cb589174c0060.jpg',
        name: 'Slow Cooker Texas Pulled Pork',
        cuisine: ['american'],
        appliances: ['slow cooker','instant pot'],
        restrictions: ['lactose-free'],
        cookTime: 315,
        servings: 8,
        ingredients: [
          { qty: 1, name: 'vegetable oil', denom: 'tsp' },
          { qty: 4, name: 'pork shoulder roast ', denom: 'lb' },
          { qty: 1, name: 'barbeque sauce', denom: 'cup' },
          { qty: 1/2, name: 'apple cider vinegar', denom: 'cup' },
          { qty: 1/2, name: 'chicken broth', denom: 'cup' },
          { qty: 1/4, name: 'brown sugar', denom: 'cup' },
          { qty: 1, name: 'yellow mustard', denom: 'tbsp' },
          { qty: 1, name: 'worcestershire sauce', denom: 'tbsp' },
          { qty: 1, name: 'chili powder', denom: 'tbsp' },
          { qty: 1, name: 'onion', denom: 'extra large' },
          { qty: 2, name: 'garlic', denom: 'cloves' },
          { qty: 3/2, name: 'thyme', denom: 'tsp' },
          { qty: 8, name: 'hamburger buns', denom: 'whole' },
          { qty: 2, name: 'butter', denom: 'tbsp' }
        ]
      },
      {
        url: 'https://www.allrecipes.com/recipe/238691/simple-macaroni-and-cheese/',
        img: 'https://www.allrecipes.com/thmb/xtr0F0_bhNd2WK7OqSAO5HKF7xY=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/238691-Simple-Macaroni-And-Cheese-mfs_008-7a50b284b67140919a0984093cb4611b.jpg',
        name: 'Simple Macaroni and Cheese',
        cuisine: ['pasta'],
        appliances: ['stovetop'],
        restrictions: ['nut-free','vegetarian'],
        cookTime: 25,
        servings: 4,
        ingredients: [
          { qty: 8, name: 'elbow macaroni', denom: 'oz' },
          { qty: 1/4, name: 'butter', denom: 'cup' },
          { qty: 1/4, name: 'flour', denom: 'cup' },
          { qty: 1/2, name: 'salt', denom: 'tsp' },
          { qty: 1, name: 'pepper', denom: 'to taste' },
          { qty: 2, name: 'milk', denom: 'cup' },
          { qty: 2, name: 'cheddar cheese', denom: 'cup' }
        ]
      },
      {
        url: 'https://www.allrecipes.com/recipe/222000/spaghetti-aglio-e-olio/',
        img: 'https://www.allrecipes.com/thmb/0Ed2TDhoYM8tHNYDR5fSWTu3GXw=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/8962968_original-Tammy-2000-ce9b060431df4d3cb3b73b760b970bcc.jpg',
        name: 'Spaghetti Aglio e Olio',
        cuisine: ['pasta'],
        appliances: ['stovetop'],
        restrictions: ['vegetarian','nut-free'],
        cookTime: 32,
        servings: 4,
        ingredients: [
          { qty: 1, name: 'spaghetti', denom: 'lb' },
          { qty: 6, name: 'garlic', denom: 'cloves' },
          { qty: 1/2, name: 'olive oil', denom: 'cup' },
          {
            qty: 1/4,
            name: 'red pepper flakes',
            denom: 'tsp'
          },
          {
            qty: 1,
            name: 'salt',
            denom: 'to taste'
          },
          {
            qty: 1,
            name: 'pepper',
            denom: 'to taste'
          },
          { qty: 1/4, name: 'parsley', denom: 'cup' },
          {
            qty: 1,
            name: 'parmigiano-reggiano cheese',
            denom: 'cup'
          }
        ]
      },
      {
        url: 'https://www.allrecipes.com/recipe/228823/quick-beef-stir-fry/',
        img: 'https://www.allrecipes.com/thmb/mr2JX6WYZRxQz_QIF7U5444WP8s=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/165870762520220724_155204_Quick-Beef-Stir-Fry-4x3-1-92228a5a01d24d259e2dcffec28fa3c5.jpg',
        name: 'Quick Beef Stir-Fry',
        cuisine: ['asian'],
        appliances: ['stovetop'],
        restrictions: [],
        cookTime: 25,
        servings: 4,
        ingredients: [
          { qty: 2, name: 'vegetable oil', denom: 'tbsp' },
          {
            qty: 1,
            name: 'beef sirloin',
            denom: 'lb'
          },
          { qty: 3/2, name: 'broccoli', denom: 'cup' },
          {
            qty: 1,
            name: 'red bell pepper',
            denom: 'whole'
          },
          { qty: 2, name: 'carrot', denom: 'whole' },
          { qty: 1, name: 'green onion', denom: 'stalk' },
          { qty: 1, name: 'garlic', denom: 'tsp' },
          { qty: 2, name: 'soy sauce', denom: 'tbsp' },
          { qty: 2, name: 'sesame seeds', denom: 'tbsp' }
        ]
      },
      {
        url: 'https://www.allrecipes.com/recipe/14595/salisbury-steak/',
        img: undefined,
        name: 'Salisbury Steak',
        cuisine: ['american'],
        appliances: ['stovetop'],
        restrictions: ['lactose-free'],
        cookTime: 40,
        servings: 6,
        ingredients: [
          { qty: 3/2, name: 'ground beef', denom: 'lb' },
          {
            qty: 10.5,
            name: 'condensed French onion soup',
            denom: 'oz'
          },
          { qty: 1/2, name: 'bread crumbs', denom: 'cup' },
          { qty: 1, name: 'egg', denom: 'whole' },
          { qty: 1/4, name: 'salt', denom: 'tsp' },
          { qty: 1/8, name: 'pepper', denom: 'tsp' },
          { qty: 1, name: 'flour', denom: 'tbsp' },
          { qty: 1/4, name: 'ketchup', denom: 'cup' },
          { qty: 1/4, name: 'water', denom: 'cup' },
          { qty: 1, name: 'worcestershire sauce', denom: 'tbsp' },
          { qty: 1/2, name: 'mustard powder', denom: 'tsp' }
        ]
      },
      {
        url: 'https://www.allrecipes.com/recipe/11887/pesto-pasta/',
        img: undefined,
        name: 'Pesto Pasta',
        cuisine: ['pasta'],
        appliances: ['stovetop'],
        restrictions: ['vegetarian'],
        cookTime: 15,
        servings: 8,
        ingredients: [
          { qty: 1, name: 'pasta', denom: 'lb' },
          { qty: 2, name: 'olive oil', denom: 'tbsp' },
          { qty: 1/2, name: 'onion', denom: 'cup' },
          { qty: 5/2, name: 'pesto', denom: 'tbsp' },
          { qty: 1, name: 'salt', denom: 'to taste' },
          { qty: 1, name: 'pepper', denom: 'to taste' },
          { qty: 2, name: 'parmesan cheese', denom: 'tbsp' }
        ]
      },
      {
        url: 'https://www.allrecipes.com/recipe/223382/chicken-stir-fry/',
        img: 'https://www.allrecipes.com/thmb/uN_R2BjOK2HQBmU00qK0fTN1NBM=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/223382_chicken-stir-fry_Rita-1x1-1-b6b835ccfc714bb6a8391a7c47a06a84.jpg',
        name: 'Chicken Stir-Fry',
        cuisine: ['asian'],
        appliances: ['stovetop'],
        restrictions: [],
        cookTime: 40,
        servings: 6,
        ingredients: [
          { qty: 4, name: 'water', denom: 'cup' },
          { qty: 2, name: 'white rice', denom: 'cup' },
          { qty: 2/3, name: 'soy sauce', denom: 'cup' },
          { qty: 1/4, name: 'brown sugar', denom: 'cup' },
          { qty: 1, name: 'cornstarch', denom: 'tbsp' },
          { qty: 1, name: 'ginger', denom: 'tbsp' },
          { qty: 1, name: 'garlic', denom: 'tbsp' },
          { qty: 1/4, name: 'red pepper flakes', denom: 'tsp' },
          {
            qty: 3,
            name: 'chicken breast',
            denom: 'halves'
          },
          { qty: 2, name: 'sesame oil', denom: 'tbsp' },
          { qty: 1, name: 'broccoli', denom: 'head' },
          { qty: 1, name: 'onion', denom: 'medium' },
          { qty: 1, name: 'carrot', denom: 'cup' },
          {
            qty: 8,
            name: 'water chestnuts',
            denom: 'oz'
          },
          {
            qty: 1,
            name: 'green bell pepper',
            denom: 'whole'
          }
        ]
      },
      {
        url: 'https://www.allrecipes.com/recipe/17219/best-tuna-casserole/',
        img: 'https://www.allrecipes.com/thmb/npdqvIck8zWluNHe33ZCUovQoqg=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/17219-best-tuna-casserole-mfs-256-594d7889179e4c63a99b1333ebcf1360.jpg',
        name: 'Best Tuna Casserole',
        cuisine: ['pasta'],
        appliances: ['stovetop','oven'],
        restrictions: ['pescatarian'],
        cookTime: 35,
        servings: 6,
        ingredients: [
          { qty: 12, name: 'egg noodles', denom: 'oz' },
          { qty: 1/4, name: 'onion', denom: 'cup' },
          { qty: 2, name: 'cheddar cheese', denom: 'cup' },
          { qty: 1, name: 'frozen peas', denom: 'cup' },
          { qty: 10, name: 'canned tuna', denom: 'oz' },
          {
            qty: 2,
            name: 'condensed cream of mushroom soup',
            denom: 'can'
          },
          { qty: 2.25, name: 'canned sliced mushrooms', denom: 'oz' },
          { qty: 1, name: 'potato chips', denom: 'cup' }
        ]
      },
      {
        url: 'https://www.allrecipes.com/recipe/229960/shrimp-scampi-with-pasta/',
        img: 'https://www.allrecipes.com/thmb/USQBMzWZB0l6P99NsKXp3RxcA18=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/229960-Shrimp-Scampi-with-Pasta-mfs-050-09903cd453324332b01e5670eaffbf74.jpg',
        name: 'Shrimp Scampi with Pasta',
        cuisine: ['pasta'],
        appliances: ['stovetop'],
        restrictions: ['pescatarian'],
        cookTime: 40,
        servings: 6,
        ingredients: [
          { qty: 16, name: 'linguine', denom: 'oz' },
          { qty: 2, name: 'butter', denom: 'tbsp' },
          { qty: 2, name: 'extra-virgin olive oil', denom: 'tbsp' },
          { qty: 2, name: 'shallot', denom: 'whole' },
          { qty: 2, name: 'garlic', denom: 'cloves' },
          { qty: 1, name: 'red pepper flakes', denom: 'pinch' },
          { qty: 1, name: 'shrimp', denom: 'lb' },
          {
            qty: 1,
            name: 'salt',
            denom: 'pinch'
          },
          {
            qty: 1,
            name: 'pepper',
            denom: 'pinch'
          },
          { qty: 1/2, name: 'dry white wine', denom: 'cup' },
          { qty: 1, name: 'lemon', denom: 'whole' },
          { qty: 2, name: 'butter', denom: 'tbsp' },
          { qty: 2, name: 'extra-virgin olive oil', denom: 'tbsp' },
          {
            qty: 1/4,
            name: 'parsley',
            denom: 'cup'
          },
          {
            qty: 1,
            name: 'extra-virgin olive oil',
            denom: 'tsp'
          }
        ]
      },
      {
        url: 'https://www.allrecipes.com/recipe/39455/marinated-tuna-steak/',
        img: 'https://www.allrecipes.com/thmb/CZ2gdp4DcBuUFd9q8ZJpsFQNMUI=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/1608428-bba14c2f4ea5427691806e7b6adef171.jpg',
        name: 'Marinated Tuna Steak',
        cuisine: ['healthy','other'],
        appliances: ['grill'],
        restrictions: ['pescatarian'],
        cookTime: 51,
        servings: 4,
        ingredients: [
          { qty: 1/4, name: 'orange juice', denom: 'cup' },
          { qty: 1/4, name: 'soy sauce', denom: 'cup' },
          { qty: 2, name: 'olive oil', denom: 'tbsp' },
          { qty: 1, name: 'lemon juice', denom: 'tbsp' },
          { qty: 2, name: 'parsley', denom: 'tbsp' },
          { qty: 1, name: 'garlic', denom: 'clove' },
          { qty: 1/2, name: 'oregano', denom: 'tsp' },
          { qty: 1/2, name: 'pepper', denom: 'tsp' },
          { qty: 1, name: 'tuna steak', denom: 'lb' }
        ]
      },
      {
        url: 'https://www.allrecipes.com/recipe/16330/stuffed-peppers/',
        img: 'https://www.allrecipes.com/thmb/OLgj6HOxVMXvtNhd2JvIsxIZTdc=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/16330_stuffed-peppers_Rita-1x1-1-3b5ceccdf88e43f98d8107596e1e75b9.jpg',
        name: 'Stuffed Peppers',
        cuisine: ['american','other'],
        appliances: ['stovetop','oven'],
        restrictions: [],
        cookTime: 90,
        servings: 6,
        ingredients: [
          { qty: 1, name: 'water', denom: 'cup' },
          { qty: 1/2, name: 'white rice', denom: 'cup' },
          { qty: 1, name: 'vegetable oil', denom: 'tbsp' },
          { qty: 1, name: 'ground beef', denom: 'lb' },
          { qty: 6, name: 'green bell pepper', denom: 'medium' },
          { qty: 16, name: 'tomato sauce', denom: 'oz' },
          { qty: 1, name: 'worcestershire sauce', denom: 'tbsp' },
          { qty: 1/4, name: 'garlic powder', denom: 'tsp' },
          { qty: 1/4, name: 'onion powder', denom: 'tsp' },
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
          { qty: 1, name: 'Italian seasoning', denom: 'tsp' }
        ]
      },
      {
        url: 'https://www.allrecipes.com/recipe/257938/spicy-thai-basil-chicken-pad-krapow-gai/',
        img: 'https://www.allrecipes.com/thmb/TQU_p0AME9Dt_N-3LCR2OK81jDo=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/4507925-spicy-thai-basil-chicken-pad-krapow-gai-photo-by-chef-john-cropped-dc99cdbd3e414da5ae3258a723c00108.jpg',
        name: 'Spicy Thai Basil Chicken (Pad Krapow Gai)',
        cuisine: ['asian'],
        appliances: ['stovetop'],
        restrictions: [],
        cookTime: 25,
        servings: 2,
        ingredients: [
          { qty: 1/3, name: 'chicken broth', denom: 'cup' },
          { qty: 1, name: 'oyster sauce', denom: 'tbsp' },
          { qty: 1, name: 'soy sauce', denom: 'tbsp' },
          { qty: 2, name: 'fish sauce', denom: 'tsp' },
          { qty: 1, name: 'white sugar', denom: 'tsp' },
          { qty: 1, name: 'brown sugar', denom: 'tsp' },
          { qty: 2, name: 'vegetable oil', denom: 'tbsp' },
          {
            qty: 1,
            name: 'boneless chicken thigh',
            denom: 'lb'
          },
          { qty: 1/4, name: 'shallot', denom: 'cup' },
          { qty: 4, name: 'garlic', denom: 'cloves' },
          {
            qty: 2,
            name: 'Thai chili',
            denom: 'tbsp'
          },
          {
            qty: 1,
            name: 'fresh basil',
            denom: 'cup'
          },
          { qty: 2, name: 'cooked rice', denom: 'cup' }
        ]
      },
      {
        url: 'https://www.allrecipes.com/recipe/23891/grilled-cheese-sandwich/',
        img: 'https://www.allrecipes.com/thmb/GHyA3uJLFRKXVRANXeOOBxZttWM=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/23891-grilled-cheese-sandwich-molly-1x1-1-b241c5d092c54aafa2d81cdd4e5a8e07.jpg',
        name: 'Grilled Cheese Sandwich',
        cuisine: ['american'],
        appliances: ['stovetop'],
        restrictions: ['vegetarian'],
        cookTime: 20,
        servings: 2,
        ingredients: [
          { qty: 4, name: 'bread', denom: 'slices' },
          { qty: 3, name: 'butter', denom: 'tbsp' },
          { qty: 2, name: 'cheddar cheese', denom: 'slices' }
        ]
      },
      {
        url: 'https://www.allrecipes.com/recipe/16311/simple-beef-stroganoff/',
        img: 'https://www.allrecipes.com/thmb/jSf6tjNnSnu4xWAkud_t0LhS9Z0=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/61311-simple-beef-stroganoff-ddmfs-1x1-1-03f36d6638f249ce9f2fdaaf12eee4a7.jpg',
        name: 'Simple Beef Stroganoff',
        cuisine: ['pasta'],
        appliances: ['stovetop'],
        restrictions: [],
        cookTime: 20,
        servings: 4,
        ingredients: [
          { qty: 8, name: 'egg noodles', denom: 'oz' },
          { qty: 1, name: 'ground beef', denom: 'lb' },
          {
            qty: 10.5,
            name: 'condensed cream of mushroom soup',
            denom: 'oz'
          },
          { qty: 1, name: 'garlic powder', denom: 'tbsp' },
          { qty: 1/2, name: 'sour cream', denom: 'cup' },
          {
            qty: 1,
            name: 'salt',
            denom: 'to taste'
          },
          {
            qty: 1,
            name: 'pepper',
            denom: 'to taste'
          }
        ]
      },
      {
        url: 'https://www.allrecipes.com/recipe/47717/reuben-sandwich-ii/',
        img: 'https://www.allrecipes.com/thmb/uq1zSYqrdi5UJQVE5ncMevDIpZg=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/9109692-d1046b5d2ca84f498691b31f9511e460.jpg',
        name: 'Reuben Sandwich',
        cuisine: ['american','other'],
        appliances: ['stovetop'],
        restrictions: [],
        cookTime: 25,
        servings: 4,
        ingredients: [
          { qty: 2, name: 'butter', denom: 'tbsp' },
          { qty: 8, name: 'rye bread', denom: 'slices' },
          { qty: 8, name: 'corned beef', denom: 'slices' },
          { qty: 8, name: 'swiss cheese', denom: 'slices' },
          { qty: 1, name: 'sauerkraut', denom: 'cup' },
          { qty: 1/2, name: 'Thousand Island dressing', denom: 'cup' }
        ]
      },
      {
        url: 'https://www.allrecipes.com/recipe/12720/grilled-salmon-i/',
        img: 'https://www.allrecipes.com/thmb/EUZJDqbwEbQ9CVkTDGBGiBJWguc=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/Screen-Shot-2022-05-20-at-2.43.04-PM-d08fcdc038804bf8be273978f1abdaa9.png',
        name: 'Grilled Salmon',
        cuisine: ['fusion','healthy','other'],
        appliances: ['grill'],
        restrictions: ['pescatarian'],
        cookTime: 151,
        servings: 6,
        ingredients: [
          { qty: 3/2, name: 'salmon fillet', denom: 'lb' },
          { qty: 1, name: 'lemon pepper', denom: 'to taste' },
          { qty: 1, name: 'garlic powder', denom: 'to taste' },
          { qty: 1, name: 'salt', denom: 'to taste' },
          { qty: 1/3, name: 'soy sauce', denom: 'cup' },
          { qty: 1/3, name: 'brown sugar', denom: 'cup' },
          { qty: 1/3, name: 'water', denom: 'cup' },
          { qty: 1/4, name: 'vegetable oil', denom: 'cup' }
        ]
      },
      {
        url: 'https://www.allrecipes.com/recipe/220987/baked-bbq-baby-back-ribs/',
        img: 'https://www.allrecipes.com/thmb/ilrfK5IVK8TVuKn3kz8O46vVldQ=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/220987-Baked-BBQ-Baby-Back-Ribs-mfs-044-ec4dd182443c463c9bde9c0d5478dd32.jpg',
        name: 'Oven-Baked Baby Back Ribs',
        cuisine: ['american'],
        appliances: ['oven'],
        restrictions: [],
        cookTime: 200,
        servings: 4,
        ingredients: [
          { qty: 1/2, name: 'ancho chile powder', denom: 'cup' },
          { qty: 1/4, name: 'white sugar', denom: 'cup' },
          { qty: 1/4, name: 'brown sugar', denom: 'cup' },
          { qty: 1/4, name: 'salt', denom: 'cup' },
          {
            qty: 2,
            name: 'pepper',
            denom: 'tbsp'
          },
          { qty: 1, name: 'cumin', denom: 'tbsp' },
          { qty: 1, name: 'mustard powder', denom: 'tsp' },
          { qty: 1, name: 'cayenne pepper', denom: 'tsp' },
          {
            qty: 1/2,
            name: 'ground chipotle pepper',
            denom: 'tsp'
          },
          { qty: 1, name: 'pork ribs', denom: 'rack' },
          { qty: 1, name: 'barbeque sauce', denom: 'cup' }
        ]
      },
      {
        url: 'https://www.allrecipes.com/recipe/25490/broccoli-rice-cheese-and-chicken-casserole/',
        img: 'https://www.allrecipes.com/thmb/jIbUakKYdfvXKiR0qZszIEs6ip4=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/Broccoli-Rice-Cheese-and-Chicken-Casserole-by-Sharon-Embry-7a431c0b76004bd695336d0b026a702d.jpg',
        name: 'Broccoli, Rice, Cheese, and Chicken Casserole',
        cuisine: ['american'],
        appliances: ['stovetop','oven'],
        restrictions: [],
        cookTime: 45,
        servings: 8,
        ingredients: [
          { qty: 2, name: 'water', denom: 'cup' },
          { qty: 2, name: 'instant rice', denom: 'cup' },
          {
            qty: 20,
            name: 'canned chunk chicken',
            denom: 'oz'
          },
          {
            qty: 1,
            name: 'condensed cream of mushroom soup',
            denom: 'can '
          },
          {
            qty: 1,
            name: 'condensed cream of chicken soup',
            denom: 'can '
          },
          { qty: 1/4, name: 'butter', denom: 'cup' },
          { qty: 1, name: 'milk', denom: 'cup' },
          {
            qty: 1,
            name: 'frozen broccoli',
            denom: 'lb'
          },
          { qty: 1, name: 'white onion', denom: 'small' },
          { qty: 1, name: 'processed cheese', denom: 'lb' }
        ]
      },
      {
        url: 'https://www.allrecipes.com/recipe/77981/butternut-squash-soup-ii/',
        img: 'https://www.allrecipes.com/thmb/wmc-uE45yIvGUizdb9xpiVHzn-g=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/77981-butternut-squash-soup-ii-AR-40503f98d6984741818c6ea2f7cd66c9.jpg',
        name: 'Butternut Squash Soup',
        cuisine: ['soup','healthy'],
        appliances: ['stovetop'],
        restrictions: [],
        cookTime: 65,
        servings: 4,
        ingredients: [
          { qty: 2, name: 'butter', denom: 'tbsp' },
          { qty: 1, name: 'onion', denom: 'small' },
          { qty: 1, name: 'celery', denom: 'stalk' },
          { qty: 1, name: 'carrot', denom: 'medium' },
          { qty: 2, name: 'potato', denom: 'medium' },
          {
            qty: 1,
            name: 'butternut squash',
            denom: 'medium'
          },
          {
            qty: 4,
            name: 'chicken stock',
            denom: 'cup'
          },
          {
            qty: 1,
            name: 'salt',
            denom: 'to taste'
          },
          {
            qty: 1,
            name: 'pepper',
            denom: 'to taste'
          }
        ]
      },
      {
        url: 'https://www.allrecipes.com/recipe/13313/best-cream-of-broccoli-soup/',
        img: 'https://www.allrecipes.com/thmb/Gi_9-02tc-jmaOiodNTVz123QUQ=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/13313_BestCreamofBroccoliSoup_ArMag-7d4ae2b074864fdeba8e0726d1d5e34c.jpg',
        name: 'Best Cream Of Broccoli Soup',
        cuisine: ['soup'],
        appliances: ['stovetop'],
        restrictions: ['nut-free'],
        cookTime: 35,
        servings: 6,
        ingredients: [
          { qty: 5, name: 'butter', denom: 'tbsp' },
          { qty: 1, name: 'onion', denom: 'medium' },
          { qty: 1, name: 'celery', denom: 'stalk' },
          { qty: 3, name: 'chicken broth', denom: 'cup' },
          { qty: 8, name: 'broccoli', denom: 'cup' },
          { qty: 3, name: 'flour', denom: 'tbsp' },
          { qty: 2, name: 'milk', denom: 'cup' },
          { qty: 1, name: 'pepper', denom: 'to taste' }
        ]
      },
      {
        url: 'https://www.allrecipes.com/recipe/13309/rich-and-simple-french-onion-soup/',
        img: 'https://www.allrecipes.com/thmb/ev12ZGeDive7xnbHvi-RyNV_k00=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/13309-rich-and-simple-french-onion-soup-mfs-041-47adba34d9e5490ea28129efcd3f27ba.jpg',
        name: 'Rich and Simple French Onion Soup',
        cuisine: ['soup'],
        appliances: ['stovetop','oven'],
        restrictions: ['nut-free'],
        cookTime: 55,
        servings: 4,
        ingredients: [
          { qty: 1/2, name: 'unsalted butter', denom: 'cup' },
          { qty: 2, name: 'olive oil', denom: 'tbsp' },
          { qty: 4, name: 'onion', denom: 'cup' },
          { qty: 5, name: 'beef broth', denom: 'cup' },
          { qty: 2, name: 'dry sherry', denom: 'tbsp' },
          { qty: 1, name: 'thyme', denom: 'tsp' },
          { qty: 1, name: 'pepper', denom: 'pinch' },
          { qty: 1, name: 'salt', denom: 'pinch' },
          { qty: 4, name: 'French bread', denom: 'slices' },
          { qty: 4, name: 'provolone cheese', denom: 'slices' },
          { qty: 2, name: 'swiss cheese', denom: 'slices' },
          { qty: 1/4, name: 'parmesan cheese', denom: 'cup' }
        ]
      },
      {
        url: 'https://www.allrecipes.com/recipe/39544/garden-fresh-tomato-soup/',
        img: 'https://www.allrecipes.com/thmb/Z-s2MFGsNvE69Iiy3e7ptsTfZW8=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/39544-Garden-Fresh-Tomato-Soup-mfs-327-6613358123c5436e8d02440073171329.jpg',
        name: 'Fresh Tomato Soup',
        cuisine: ['soup'],
        appliances: ['stovetop'],
        restrictions: ['nut-free'],
        cookTime: 35,
        servings: 6,
        ingredients: [
          { qty: 4, name: 'tomato', denom: 'cup' },
          { qty: 1, name: 'onion', denom: 'slice' },
          { qty: 4, name: 'garlic', denom: 'cloves' },
          { qty: 2, name: 'chicken broth', denom: 'cup' },
          { qty: 2, name: 'butter', denom: 'tbsp' },
          { qty: 2, name: 'flour', denom: 'tbsp' },
          { qty: 1, name: 'salt', denom: 'tsp' },
          { qty: 2, name: 'white sugar', denom: 'tsp' }
        ]
      },
      {
        url: 'https://www.allrecipes.com/recipe/16248/easy-homemade-chili/',
        img: 'https://www.allrecipes.com/thmb/UnbKJGjRay3BVFsnUGKYpkM4AJ0=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/16248_easy-homemade-chili_Rita-1x1-1-f584fa2d46e94fb99e152697a005136e.jpg',
        name: 'Easy Homemade Chili',
        cuisine: ['soup','american'],
        appliances: ['stovetop'],
        restrictions: ['nut-free','lactose-free'],
        cookTime: 30,
        servings: 6,
        ingredients: [
          { qty: 1, name: 'ground beef', denom: 'lb' },
          { qty: 1, name: 'onion', denom: 'medium' },
          { qty: 14.5, name: 'stewed tomatoes', denom: 'oz' },
          { qty: 15, name: 'tomato sauce', denom: 'oz' },
          { qty: 15, name: 'kidney beans', denom: 'oz' },
          { qty: 3/2, name: 'water', denom: 'cup' },
          { qty: 1, name: 'chili powder', denom: 'pinch' },
          { qty: 1, name: 'garlic powder', denom: 'pinch' },
          { qty: 1, name: 'pepper', denom: 'to taste' },
          { qty: 1, name: 'salt', denom: 'to taste' }
        ]
      },
      {
        url: 'https://www.allrecipes.com/recipe/72508/the-best-vegetarian-chili-in-the-world/',
        img: 'https://www.allrecipes.com/thmb/-UENqppBGKc0l_o03ZbKLnHy2WA=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/9215371-The-Best-Vegetarian-Chili-in-The-World-NatashaForestBrown-1x1-1-1290da8f7186491aa02b32a8ba57306d.jpg',
        name: 'The Best Vegetarian Chili in the World',
        cuisine: ['soup','american'],
        appliances: ['stovetop'],
        restrictions: ['vegetarian'],
        cookTime: 75,
        servings: 8,
        ingredients: [
          { qty: 1, name: 'olive oil', denom: 'tbsp' },
          { qty: 1/2, name: 'onion', denom: 'medium' },
          { qty: 2, name: 'bay leaf', denom: 'whole' },
          { qty: 1, name: 'cumin', denom: 'tsp' },
          { qty: 2, name: 'oregano', denom: 'tbsp' },
          { qty: 1, name: 'salt', denom: 'tbsp' },
          { qty: 2, name: 'celery', denom: 'stalks' },
          { qty: 2, name: 'green bell pepper', denom: 'whole' },
          { qty: 2, name: 'jalapeno pepper', denom: 'whole' },
          { qty: 3, name: 'garlic', denom: 'cloves' },
          {
            qty: 8,
            name: 'canned green chile peppers',
            denom: 'oz'
          },
          {
            qty: 24,
            name: 'vegetarian burger crumbles',
            denom: 'oz'
          },
          {
            qty: 74,
            name: 'canned whole peeled tomatoes',
            denom: 'oz'
          },
          { qty: 1/4, name: 'chili powder', denom: 'cup' },
          { qty: 1, name: 'pepper', denom: 'tbsp' },
          {
            qty: 15,
            name: 'kidney beans',
            denom: 'oz'
          },
          {
            qty: 15,
            name: 'garbanzo beans',
            denom: 'oz'
          },
          { qty: 15, name: 'black beans', denom: 'oz' },
          { qty: 15, name: 'corn', denom: 'oz' }
        ]
      },
      {
        url: 'https://www.allrecipes.com/recipe/146035/the-best-thai-coconut-soup/',
        img: 'https://www.allrecipes.com/thmb/RiTEalxP2B-GpXfvWozecY7Ur-c=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/2319909-the-best-thai-coconut-soup-Aja-1x1-1-d2385a72da884e75a7364d6ecca5680e.jpg',
        name: 'The Best Thai Coconut Soup',
        cuisine: ['asian','soup'],
        appliances: ['stovetop'],
        restrictions: [],
        cookTime: 60,
        servings: 8,
        ingredients: [
          { qty: 1, name: 'vegetable oil', denom: 'tbsp' },
          { qty: 2, name: 'ginger ', denom: 'tbsp' },
          { qty: 2, name: 'red curry paste', denom: 'tsp' },
          { qty: 1, name: 'lemon grass', denom: 'stalk' },
          { qty: 4, name: 'chicken broth', denom: 'cup' },
          { qty: 3, name: 'fish sauce', denom: 'tbsp' },
          { qty: 1, name: 'brown sugar', denom: 'tbsp' },
          { qty: 3, name: 'coconut milk', denom: '(13.5 ounce) cans' },
          {
            qty: 1/2,
            name: 'shiitake mushrooms',
            denom: 'lb'
          },
          {
            qty: 1,
            name: 'shrimp',
            denom: 'lb'
          },
          { qty: 2, name: 'lime juice', denom: 'tbsp' },
          { qty: 1, name: 'salt', denom: 'to taste' },
          { qty: 1/4, name: 'cilantro', denom: 'cup' }
        ]
      },
      {
        url: 'https://www.allrecipes.com/recipe/13351/chicken-tortilla-soup-i/',
        img: 'https://www.allrecipes.com/thmb/B57bWKYC5ml3Ay3A2I5soVmqG8o=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/13351-chicken-tortilla-soup-i-3x2-152-bc4457afecee45e28c5779997727e28b.jpg',
        name: 'Chicken Tortilla Soup',
        cuisine: ['mexican','soup'],
        appliances: ['stovetop'],
        restrictions: [],
        cookTime: 40,
        servings: 8,
        ingredients: [
          { qty: 1, name: 'olive oil', denom: 'tbsp' },
          { qty: 1, name: 'onion', denom: 'medium' },
          { qty: 3, name: 'garlic', denom: 'cloves' },
          { qty: 28, name: 'crushed tomatoes', denom: 'oz' },
          {
            qty: 10.5,
            name: 'condensed chicken broth',
            denom: 'oz'
          },
          { qty: 5/4, name: 'water', denom: 'cup' },
          { qty: 2, name: 'chili powder', denom: 'tsp' },
          { qty: 1, name: 'oregano', denom: 'tsp' },
          {
            qty: 15,
            name: 'black beans',
            denom: 'oz'
          },
          {
            qty: 2,
            name: 'chicken breast',
            denom: 'halves'
          },
          { qty: 1, name: 'corn', denom: 'cup' },
          { qty: 1, name: 'white hominy', denom: 'cup' },
          {
            qty: 4,
            name: 'canned green chile peppers',
            denom: 'oz'
          },
          { qty: 1/4, name: 'cilantro', denom: 'cup' },
          {
            qty: 1/2,
            name: 'tortilla chips',
            denom: 'cup'
          },
          {
            qty: 2,
            name: 'avocados',
            denom: 'medium'
          },
          {
            qty: 1/2,
            name: 'Monterey Jack cheese',
            denom: 'cup'
          },
          {
            qty: 2,
            name: 'green onion',
            denom: 'tbsp'
          }
        ]
      },
]

module.exports = recipes