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
      {
        url: 'https://www.allrecipes.com/recipe/82923/healing-cabbage-soup/',
        img: 'https://www.allrecipes.com/thmb/o5AGo5gaDpHQCnsPNcGSd67sn1s=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/82923-healing-cabbage-soup-ddmfs-4x3-0120-2847bb9e35504c658a6d677199db0c56.jpg',
        name: 'Healing Cabbage Soup',
        cuisine: ['soup','healthy'],
        appliances: ['stovetop'],
        restrictions: ['nut-free','lactose-free'],
        cookTime: 50,
        servings: 8,
        ingredients: [
          { qty: 3, name: 'olive oil', denom: 'tbsp' },
          { qty: 1/2, name: 'onion', denom: 'medium' },
          { qty: 2, name: 'garlic', denom: 'cloves' },
          { qty: 2, name: 'water', denom: 'quart' },
          { qty: 4, name: 'chicken bouillon', denom: 'tsp' },
          { qty: 1, name: 'salt', denom: 'tsp' },
          { qty: 1/2, name: 'pepper', denom: 'tsp' },
          {
            qty: 1/2,
            name: 'cabbage',
            denom: 'head'
          },
          {
            qty: 14.5,
            name: 'stewed tomatoes',
            denom: 'oz'
          }
        ]
      },
      {
        url: 'https://www.allrecipes.com/recipe/26460/quick-and-easy-chicken-noodle-soup/',
        img: 'https://www.allrecipes.com/thmb/XB3QnN9PR9pToE2BGT0BnaMiwyA=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/26460-quick-and-easy-chicken-noodle-soup-allrecipes-1x1-1-b88125437574471db3e114c40bc6928e.jpg',
        name: 'Quick and Easy Chicken Noodle Soup',
        cuisine: ['soup','pasta'],
        appliances: ['stovetop'],
        restrictions: ['nut-free'],
        cookTime: 40,
        servings: 6,
        ingredients: [
          { qty: 1, name: 'butter', denom: 'tbsp' },
          { qty: 1/2, name: 'onion', denom: 'cup' },
          { qty: 1/2, name: 'celery', denom: 'cup' },
          { qty: 4, name: 'chicken broth', denom: 'can' },
          { qty: 1, name: 'vegetable broth', denom: 'can' },
          { qty: 1/2, name: 'cooked chicken breast', denom: 'lb' },
          { qty: 3/2, name: 'egg noodles', denom: 'cup' },
          { qty: 1, name: 'carrot', denom: 'cup' },
          { qty: 1/2, name: 'dried basil', denom: 'tsp' },
          { qty: 1/2, name: 'oregano', denom: 'tsp' },
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
  url: 'https://www.allrecipes.com/recipe/31848/jambalaya/',
  img: 'https://www.allrecipes.com/thmb/z9ahyE6bihqAVqzhbLoGjUOkGoQ=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/101804670-Jambalaya-meredith-390fb40aef864518ad2bcda30dd782fb.jpg',
  name: 'Jambalaya',
  cuisine: ['soup','other'],
  appliances: ['stovetop'],
  restrictions: ['lactose-free'],
  cookTime: 65,
  servings: 6,
  ingredients: [
    { qty: 2, name: 'peanut oil', denom: 'tbsp' },
    { qty: 1, name: 'cajun seasoning', denom: 'tbsp' },
    {
      qty: 10,
      name: 'andouille sausage',
      denom: 'oz'
    },
    {
      qty: 1,
      name: 'chicken breast',
      denom: 'lb'
    },
    { qty: 1, name: 'onion', denom: 'medium' },
    { qty: 1, name: 'green bell pepper', denom: 'small' },
    { qty: 2, name: 'celery', denom: 'stalks' },
    { qty: 3, name: 'garlic', denom: 'cloves' },
    {
      qty: 16,
      name: 'crushed tomatoes',
      denom: 'oz'
    },
    { qty: 1/2, name: 'red pepper flakes', denom: 'tsp' },
    { qty: 1/2, name: 'pepper', denom: 'tsp' },
    { qty: 1, name: 'salt', denom: 'tsp' },
    { qty: 1/2, name: 'hot pepper sauce', denom: 'tsp' },
    { qty: 2, name: 'worcestershire sauce', denom: 'tsp' },
    { qty: 1, name: 'file powder', denom: 'tsp' },
    { qty: 5/4, name: 'uncooked white rice', denom: 'cup' },
    { qty: 5/2, name: 'chicken broth', denom: 'cup' }
  ]
},
{
    url: 'https://www.allrecipes.com/recipe/13384/split-pea-soup/',
    img: 'https://www.allrecipes.com/thmb/YPMlp5aHnDcGm1xsUPg8SO3a-kA=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/Split-Pea-Soup-Maggie-Stryjewska-Kara-2afe02a1fb5942a4a4ac5d5582acfba6.jpg',
    name: 'Split Pea Soup',
    cuisine: ['soup'],
    appliances: ['stovetop'],
    restrictions: [],
    cookTime: 630,
    servings: 6,
    ingredients: [
      { qty: 9/4, name: 'dried split peas', denom: 'cup' },
      { qty: 2, name: 'water', denom: 'quart' },
      { qty: 3/2, name: 'ham bone', denom: 'lb' },
      { qty: 2, name: 'onion', denom: 'medium' },
      { qty: 1/2, name: 'salt', denom: 'tsp' },
      { qty: 1/4, name: 'pepper', denom: 'tsp' },
      { qty: 1, name: 'marjoram', denom: 'pinch' },
      { qty: 3, name: 'celery', denom: 'stalks' },
      { qty: 3, name: 'carrots', denom: 'whole' },
      { qty: 1, name: 'potato', denom: 'whole' }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/14385/pasta-salad/',
    img: 'https://www.allrecipes.com/thmb/7AzqznG5qLoWkhzw4jo04Q7xS7M=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/14385-pasta-salad-mfs-66-553a4348fa7b4d83a52099146aca7439.jpg',
    name: 'Pasta Salad',
    cuisine: ['pasta','salad'],
    appliances: ['stovetop'],
    restrictions: ['vegetarian'],
    cookTime: 30,
    servings: 6,
    ingredients: [
      { qty: 1, name: 'tri-colored spiral pasta', denom: 'lb' },
      {
        qty: 16,
        name: 'Italian-style salad dressing',
        denom: 'oz'
      },
      { qty: 6, name: 'salad seasoning mix', denom: 'tbsp' },
      { qty: 2, name: 'cherry tomatoes', denom: 'cups' },
      { qty: 1, name: 'green bell pepper', denom: 'whole' },
      { qty: 1, name: 'red bell pepper', denom: 'whole' },
      { qty: 1/2, name: 'yellow bell pepper', denom: 'whole' },
      {
        qty: 2.25,
        name: 'black olives',
        denom: 'oz'
      }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/14295/seven-layer-salad/',
    img: 'https://www.allrecipes.com/thmb/sroDXOMWDII1gSf1WSrO49hBMqc=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/14295-seven-layer-salad-MEREDITH-FOOD-STUDIOS-1x1-1-4db0553197f3493bb249a3f562df88a5.jpg',
    name: 'Seven Layer Salad',
    cuisine: ['salad','healthy'],
    appliances: ['stovetop'],
    restrictions: ['nut-free','glutan-free'],
    cookTime: 30,
    servings: 12,
    ingredients: [
      { qty: 1, name: 'bacon', denom: 'lb' },
      {
        qty: 1,
        name: 'iceberg lettuce',
        denom: 'head'
      },
      { qty: 1, name: 'red onion', denom: 'medium' },
      {
        qty: 10,
        name: 'frozen peas',
        denom: 'oz'
      },
      { qty: 10, name: 'cheddar cheese', denom: 'oz' },
      { qty: 1, name: 'cauliflower', denom: 'cup' },
      { qty: 5/4, name: 'mayonnaise', denom: 'cup' },
      { qty: 2, name: 'white sugar', denom: 'tbsp' },
      { qty: 2/3, name: 'parmesan cheese', denom: 'cup' }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/90500/beet-salad-with-goat-cheese/',
    img: 'https://www.allrecipes.com/thmb/erMJGHYpxB8aiatOSNuPovJDGsY=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/90500-beet-salad-with-goat-cheese-ar-mag-4x3-1-2dc8545848154ad5ae06e2c1b5da21af.jpg',
    name: 'Beet Salad with Goat Cheese',
    cuisine: ['salad','healthy'],
    appliances: ['stovetop'],
    restrictions: ['vegetarian','glutan-free'],
    cookTime: 40,
    servings: 6,
    ingredients: [
      {
        qty: 4,
        name: 'beets',
        denom: 'medium'
      },
      { qty: 1/3, name: 'chopped walnuts', denom: 'cup' },
      { qty: 3, name: 'maple syrup', denom: 'tbsp' },
      {
        qty: 10,
        name: 'salad greens',
        denom: 'oz'
      },
      { qty: 1/2, name: 'frozen orange juice concentrate', denom: 'cup' },
      { qty: 1/4, name: 'balsamic vinegar', denom: 'cup' },
      { qty: 1/2, name: 'extra-virgin olive oil', denom: 'cup' },
      { qty: 2, name: 'goat cheese', denom: 'oz' }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/14452/green-salad/',
    img: 'https://www.allrecipes.com/thmb/DLHZipbzyN-9_yy7xMqS4QCzAm8=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc():gifv():format(webp)/AR-14452-GreenSalad-0025-4x3-1-7c57ab1a097e4fcf832a59405b15afb2.jpg',
    name: 'Green Salad',
    cuisine: ['salad','healthy'],
    appliances: ['stovetop'],
    restrictions: ['glutan-free','nut-free'],
    cookTime: 30,
    servings: 8,
    ingredients: [
      { qty: 1/2, name: 'onion', denom: 'cup' },
      { qty: 1/2, name: 'green bell pepper', denom: 'cup' },
      {
        qty: 20,
        name: 'salad greens',
        denom: 'oz'
      },
      {
        qty: 4,
        name: 'chicken deli meat',
        denom: 'slices'
      },
      { qty: 1, name: 'tomato', denom: 'medium' },
      { qty: 1/4, name: 'onion powder', denom: 'tsp' },
      { qty: 3, name: 'garlic powder', denom: 'dashes' },
      {
        qty: 2,
        name: 'salt',
        denom: 'pinch'
      },
      {
        qty: 2,
        name: 'pepper',
        denom: 'pinch'
      },
      {
        qty: 3,
        name: 'balsamic vinaigrette salad dressing',
        denom: 'tbsp'
      }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/176650/greek-pasta-salad/',
    img: 'https://www.allrecipes.com/thmb/e9e0mtGzk4I1E1bT8578cq5OM2Q=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc():gifv():format(webp)/1016228-a11566eda64949c6915009b1119b7490.jpg',
    name: 'Greek Pasta Salad',
    cuisine: ['pasta','salad', 'mediterranean'],
    appliances: ['stovetop'],
    restrictions: ['vegetarian'],
    cookTime: 30,
    servings: 8,
    ingredients: [
      { qty: 2, name: 'penne pasta', denom: 'cup' },
      { qty: 2/3, name: 'extra-virgin olive oil', denom: 'cup' },
      { qty: 1/4, name: 'red wine vinegar', denom: 'cup' },
      { qty: 2, name: 'garlic', denom: 'cloves' },
      { qty: 1, name: 'lemon juice', denom: 'tbsp' },
      { qty: 2, name: 'oregano', denom: 'tsp' },
      { qty: 1, name: 'salt', denom: 'to taste' },
      { qty: 1, name: 'pepper', denom: 'to taste' },
      { qty: 10, name: 'cherry tomatoes', denom: 'whole' },
      { qty: 1, name: 'green bell pepper', denom: 'whole' },
      { qty: 1, name: 'red bell pepper', denom: 'whole' },
      { qty: 1, name: 'red onion', denom: 'small' },
      { qty: 1/2, name: 'cucumber', denom: 'whole' },
      { qty: 1/2, name: 'black olives', denom: 'cup' },
      { qty: 1/2, name: 'feta cheese', denom: 'cup' }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/14415/cobb-salad/',
    img: 'https://www.allrecipes.com/thmb/IMjG07QophmSR7lIdnnWEwd-Irg=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/14415-cobb-salad-ddmfs-0309-1x1-1-9be8b219ede6498fabc0d053e380da34.jpg',
    name: 'Cobb Salad',
    cuisine: ['salad','healthy'],
    appliances: ['stovetop'],
    restrictions: ['glutan-free'],
    cookTime: 30,
    servings: 6,
    ingredients: [
      { qty: 6, name: 'bacon', denom: 'slices' },
      { qty: 3, name: 'eggs', denom: 'whole' },
      { qty: 1, name: 'iceberg lettuce', denom: 'head' },
      { qty: 3, name: 'cooked chicken meat', denom: 'cups' },
      { qty: 2, name: 'tomatoes', denom: 'whole' },
      { qty: 3/4, name: 'blue cheese', denom: 'cup' },
      { qty: 3, name: 'green onion', denom: 'stalk' },
      { qty: 1, name: 'avocado', denom: 'whole' },
      {
        qty: 8,
        name: 'Ranch dressing',
        denom: 'oz'
      }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/16409/spinach-and-strawberry-salad/',
    img: 'https://www.allrecipes.com/thmb/II_iOaPsmPxTkC_YMzCSWB1aVYw=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/4535439-564adcef998c47bebfcb6d9c5aa2a3df.jpg',
    name: 'Spinach and Strawberry Salad',
    cuisine: ['salad','healthy'],
    appliances: [],
    restrictions: ['vegan','vegetarian','lactose-free','glutan-free'],
    cookTime: 10,
    servings: 8,
    ingredients: [
      {
        qty: 2,
        name: 'spinach',
        denom: 'bunches'
      },
      { qty: 4, name: 'strawberries', denom: 'cups' },
      { qty: 1/2, name: 'vegetable oil', denom: 'cup' },
      { qty: 1/2, name: 'white sugar', denom: 'cup' },
      { qty: 1/4, name: 'white wine vinegar', denom: 'cup' },
      { qty: 2, name: 'sesame seeds', denom: 'tbsp' },
      { qty: 1, name: 'poppy seeds', denom: 'tbsp' },
      { qty: 1/4, name: 'paprika', denom: 'tsp' }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/16414/broccoli-and-ramen-noodle-salad/',
    img: 'https://www.allrecipes.com/thmb/ztJbo1yCgF0pWmgkvuxpoOx8Z6g=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/1129965-8411e10106b84f0f83b50d61bb2ef98f.jpg',
    name: 'Broccoli and Ramen Noodle Salad',
    cuisine: ['salad','fusion','asian'],
    appliances: ['stovetop'],
    restrictions: ['lactose-free'],
    cookTime: 45,
    servings: 6,
    ingredients: [
      {
        qty: 16,
        name: 'broccoli coleslaw mix',
        denom: 'oz'
      },
      {
        qty: 2,
        name: 'chicken flavored ramen noodles',
        denom: 'package'
      },
      { qty: 1, name: 'green onion', denom: 'bunch' },
      { qty: 1/2, name: 'white sugar', denom: 'cup' },
      { qty: 1/3, name: 'cider vinegar', denom: 'cup' },
      { qty: 1/4, name: 'vegetable oil', denom: 'cup' },
      { qty: 1, name: 'unsalted peanuts', denom: 'cup' },
      { qty: 1, name: 'sunflower seeds', denom: 'cup' }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/100606/beef-bulgogi/',
    img: 'https://www.allrecipes.com/thmb/_bNaqWL_Nw7j4t72zYcM5c9T__M=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/100606-beef-bulgogi-3x2-264-0435817888b24507bd86c8a6cdc4dd7f.jpg',
    name: 'Beef Bulgogi',
    cuisine: ['asian'],
    appliances: ['grill'],
    restrictions: ['lactose-free'],
    cookTime: 75,
    servings: 4,
    ingredients: [
      { qty: 5, name: 'soy sauce', denom: 'tbsp' },
      { qty: 1/4, name: 'green onion', denom: 'cup' },
      { qty: 5/2, name: 'white sugar', denom: 'tbsp' },
      { qty: 2, name: 'garlic', denom: 'tbsp' },
      { qty: 2, name: 'sesame seeds', denom: 'tbsp' },
      { qty: 2, name: 'sesame oil', denom: 'tbsp' },
      { qty: 1/2, name: 'pepper', denom: 'tsp' },
      { qty: 1, name: 'flank steak', denom: 'lb' }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/149975/beer-brats/',
    img: 'https://www.allrecipes.com/thmb/y9o0PpRrUTJQ0iYOrmuzU6q-BKk=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/149975_Beer-Brats_TTV78_5941169_original-4x3-1-f857b0a8e01f48bbb3b834a8c286d294.jpg',
    name: 'Beer Brats',
    cuisine: ['american'],
    appliances: ['grill','stovetop'],
    restrictions: ['nut-free','lactose-free'],
    cookTime: 25,
    servings: 10,
    ingredients: [
      { qty: 48, name: 'beer', denom: 'oz' },
      { qty: 1, name: 'onion', denom: 'large' },
      { qty: 10, name: 'bratwurst', denom: 'links' },
      { qty: 2, name: 'red pepper flakes', denom: 'tsp' },
      { qty: 1, name: 'garlic powder', denom: 'tsp' },
      { qty: 1, name: 'salt', denom: 'tsp' },
      { qty: 1/2, name: 'pepper', denom: 'tsp' }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/8626/yummy-honey-chicken-kabobs/',
    img: 'https://www.allrecipes.com/thmb/ScqA4wCtnsO0NZgK6Qi-dVLKsWI=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/1017234_Yummy-Honey-Chicken-Kabobs_8626_Photo-by-balsdon_21-2000-5f6c799b00644da99e7e863353db51dd.jpg',
    name: 'Yummy Honey Chicken Kabobs',
    cuisine: ['asian',],
    appliances: ['grill'],
    restrictions: ['lactose-free'],
    cookTime: 150,
    servings: 12,
    ingredients: [
      { qty: 1/3, name: 'honey', denom: 'cup' },
      { qty: 1/3, name: 'soy sauce', denom: 'cup' },
      { qty: 1/4, name: 'vegetable oil', denom: 'cup' },
      { qty: 1/4, name: 'pepper', denom: 'tsp' },
      {
        qty: 8,
        name: 'chicken breast',
        denom: 'halves'
      },
      { qty: 5, name: 'onion', denom: 'small' },
      {
        qty: 2,
        name: 'red bell pepper',
        denom: 'medium'
      },
      { qty: 2, name: 'garlic', denom: 'cloves' },
      {
        qty: 12,
        name: 'bamboo skewers',
        denom: 'whole'
      }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/229166/grilled-veggie-skewers/',
    img: 'https://www.allrecipes.com/thmb/3X-hlhgiBbKgLMZ7i-ibWUsE8tc=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/1968731-daca7034ebbf49fd85fd2da3cd180e1b.jpg',
    name: 'Grilled Veggie Skewers',
    cuisine: ['other'],
    appliances: ['grill'],
    restrictions: ['vegan','vegetarian','lactose-free','nut-free','glutan-free'],
    cookTime: 20,
    servings: 4,
    ingredients: [
      { qty: 1, name: 'pineapple', denom: 'whole' },
      {
        qty: 2,
        name: 'zucchini',
        denom: 'medium'
      },
      {
        qty: 2,
        name: 'yellow squash',
        denom: 'medium'
      },
      { qty: 1/2, name: 'mushroom', denom: 'lb' },
      { qty: 1, name: 'red onion', denom: 'medium' },
      { qty: 12, name: 'cherry tomatoes', denom: 'whole' },
      {
        qty: 1,
        name: 'red bell pepper',
        denom: 'medium'
      },
      {
        qty: 8,
        name: 'bamboo skewers',
        denom: 'whole'
      },
      { qty: 1/3, name: 'olive oil', denom: 'cup' },
      { qty: 3/2, name: 'dried basil', denom: 'tsp' },
      { qty: 3/4, name: 'oregano', denom: 'tsp' },
      { qty: 1/2, name: 'salt', denom: 'tsp' },
      { qty: 1/8, name: 'pepper', denom: 'tsp' }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/150685/perfect-flat-iron-steak/',
    img: 'https://www.allrecipes.com/thmb/DbD2ycR_KKP1VlSvJdrQBy5Z7rI=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc():gifv():format(webp)/150685-perfect-flat-iron-steak-ddmfs-090-3x4-1-c20aa78812f14180a0377b8a8658535f.jpg',
    name: 'Perfect Flat Iron Steak',
    cuisine: ['american'],
    appliances: ['grill'],
    restrictions: ['lactose-free','nut-free','glutan-free'],
    cookTime: 15,
    servings: 6,
    ingredients: [
      { qty: 2, name: 'flat iron steak', denom: 'lb' },
      { qty: 2.5, name: 'olive oil', denom: 'tbsp' },
      { qty: 2, name: 'garlic', denom: 'cloves' },
      { qty: 1, name: 'parsley', denom: 'tsp' },
      { qty: 1/4, name: 'rosemary', denom: 'tsp' },
      { qty: 1/2, name: 'chives', denom: 'tsp' },
      {
        qty: 1/4,
        name: 'dry red wine',
        denom: 'cup'
      },
      { qty: 1/2, name: 'salt', denom: 'tsp' },
      { qty: 3/4, name: 'pepper', denom: 'tsp' },
      { qty: 1/4, name: 'mustard powder', denom: 'tsp' }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/222202/grilled-cod/',
    img: 'https://www.allrecipes.com/thmb/qXA-rRhQ61O-S-0A1Iv5f-ALAcI=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/222202-Grilled-Cod-Melissa-Goff_5553669_original-1x1-1-c252b84a03a94b8c9aac08440778fbbd.jpg',
    name: 'Grilled Cod',
    cuisine: ['american','other'],
    appliances: ['grill'],
    restrictions: ['pescatarian','glutan-free','lactose-free','nut-free'],
    cookTime: 35,
    servings: 4,
    ingredients: [
      { qty: 16, name: 'cod fillet', denom: 'oz' },
      { qty: 1, name: 'cajun seasoning', denom: 'tbsp' },
      { qty: 1/2, name: 'lemon pepper', denom: 'tsp' },
      { qty: 1/4, name: 'salt', denom: 'tsp' },
      { qty: 1/4, name: 'pepper', denom: 'tsp' },
      { qty: 2, name: 'butter', denom: 'tbsp' },
      { qty: 1, name: 'lemon', denom: 'whole' },
      {
        qty: 2,
        name: 'green onion stem',
        denom: 'tbsp'
      }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/241607/vietnamese-grilled-lemongrass-chicken/',
    img: 'https://www.allrecipes.com/thmb/hPJXOfaft3PRpTOnIVZ2iZu-gkQ=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/6827213-vietnamese-grilled-lemongrass-chicken-AllrecipesPhoto-1x1-1-36e69cd06cd646e3b380675e7f0c5a43.jpg',
    name: 'Vietnamese Grilled Lemongrass Chicken',
    cuisine: ['asian'],
    appliances: ['grill'],
    restrictions: ['nut-free','lactose-free'],
    cookTime: 40,
    servings: 4,
    ingredients: [
      { qty: 2, name: 'canola oil', denom: 'tbsp' },
      {
        qty: 2,
        name: 'lemongrass',
        denom: 'tbsp'
      },
      { qty: 1, name: 'lemon juice', denom: 'tbsp' },
      { qty: 2, name: 'soy sauce', denom: 'tsp' },
      { qty: 2, name: 'brown sugar', denom: 'tsp' },
      { qty: 2, name: 'garlic', denom: 'tsp' },
      { qty: 1, name: 'fish sauce', denom: 'tsp' },
      {
        qty: 3/2,
        name: 'chicken thigh',
        denom: 'lb'
      }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/85452/homemade-black-bean-veggie-burgers/',
    img: 'https://www.allrecipes.com/thmb/DugCixyzC9A27ATZeBLlxDsJX-w=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/85452-Homemade-Black-Bean-Veggie-Burger-ddmfs-103085-1x1-1-e1904681012b48cf81e2ba56a24068c9.jpg',
    name: 'Homemade Black Bean Veggie Burgers',
    cuisine: ['american'],
    appliances: ['grill'],
    restrictions: ['vegetarian'],
    cookTime: 35,
    servings: 4,
    ingredients: [
      { qty: 1, name: 'cooking spray', denom: 'spray' },
      {
        qty: 16,
        name: 'black beans',
        denom: 'oz'
      },
      {
        qty: 1/2,
        name: 'green bell pepper',
        denom: 'whole'
      },
      { qty: 1/2, name: 'onion', denom: 'whole' },
      { qty: 3, name: 'garlic', denom: 'cloves' },
      { qty: 1, name: 'egg', denom: 'whole' },
      { qty: 1, name: 'chili powder', denom: 'tbsp' },
      { qty: 1, name: 'cumin', denom: 'tbsp' },
      {
        qty: 1,
        name: 'hot sauce',
        denom: 'tsp'
      },
      { qty: 1/2, name: 'bread crumbs', denom: 'cup' }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/218075/grilled-pork-loin-chops/',
    img: 'https://www.allrecipes.com/thmb/0uWGuflPutLruqcMEn6ooddWQzU=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/5906108-9130fabcc47b4a47b1fae42189b02ae9.jpg',
    name: 'Grilled Pork Loin Chops',
    cuisine: ['american'],
    appliances: ['grill'],
    restrictions: ['lactose-free'],
    cookTime: 35,
    servings: 2,
    ingredients: [
      { qty: 3, name: 'honey', denom: 'tbsp' },
      { qty: 3, name: 'soy sauce', denom: 'tbsp' },
      { qty: 3, name: 'worcestershire sauce', denom: 'tbsp' },
      { qty: 2, name: 'brown sugar', denom: 'tbsp' },
      { qty: 2, name: 'garlic', denom: 'cloves' },
      { qty: 2, name: 'ketchup', denom: 'tsp' },
      { qty: 1/2, name: 'ginger', denom: 'tsp' },
      { qty: 1/2, name: 'onion powder', denom: 'tsp' },
      { qty: 1/4, name: 'cinnamon', denom: 'tsp' },
      { qty: 1/8, name: 'cayenne pepper', denom: 'tsp' },
      {
        qty: 12,
        name: 'pork loin chops',
        denom: 'oz'
      }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/24239/vietnamese-fresh-spring-rolls/',
    img: 'https://www.allrecipes.com/thmb/tDdbpMMDtXLwJxUyRN91QZN7QPg=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/24239-Vietnamese-Fresh-Spring-Rolls-gielastic_5265636_original-1x1-1-6f23b00cc9f8406faf0f4d786d15b4b7.jpg',
    name: 'Vietnamese Fresh Spring Rolls',
    cuisine: ['asian','healthy'],
    appliances: ['stovetop'],
    restrictions: ['pescatarian','lactose-free'],
    cookTime: 50,
    servings: 8,
    ingredients: [
      { qty: 2, name: 'rice vermicelli', denom: 'oz' },
      { qty: 8, name: 'rice wrappers', denom: 'whole' },
      {
        qty: 8,
        name: 'cooked shrimp',
        denom: 'large'
      },
      {
        qty: 4/3,
        name: 'Thai basil',
        denom: 'tbsp'
      },
      {
        qty: 3,
        name: 'fresh mint leaves',
        denom: 'tbsp'
      },
      { qty: 3, name: 'cilantro', denom: 'tsp' },
      { qty: 2, name: 'lettuce', denom: 'leaves' },
      { qty: 4, name: 'fish sauce', denom: 'tsp' },
      { qty: 1/4, name: 'water', denom: 'cup' },
      { qty: 2, name: 'lime juice', denom: 'tbsp' },
      { qty: 1, name: 'garlic', denom: 'clove' },
      { qty: 2, name: 'white sugar', denom: 'tbsp' },
      { qty: 1/2, name: 'garlic chili sauce', denom: 'tsp' },
      { qty: 3, name: 'hoisin sauce', denom: 'tbsp' },
      { qty: 1, name: 'peanuts', denom: 'tsp' }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/201934/pan-seared-tilapia/',
    img: 'https://www.allrecipes.com/thmb/_X1AZX66NOgdkg3sWooWsL-UiYM=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/201934-PanSearedTilapiaRecipe-mfs-2X3-297738f14e5c49358e62c7406751a711.jpg',
    name: 'Pan-Seared Tilapia',
    cuisine: ['other','healthy'],
    appliances: ['stovetop'],
    restrictions: ['pescatarian','nut-free'],
    cookTime: 15,
    servings: 4,
    ingredients: [
      { qty: 16, name: 'tilapia fillets', denom: 'oz' },
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
      { qty: 1/2, name: 'flour', denom: 'cup' },
      { qty: 1, name: 'olive oil', denom: 'tbsp' },
      { qty: 2, name: 'unsalted butter', denom: 'tbsp' },
      {
        qty: 1,
        name: 'lemon juice',
        denom: 'tbsp'
      },
      {
        qty: 1,
        name: 'parsley',
        denom: 'tsp'
      },
      {
        qty: 1/2,
        name: 'thyme',
        denom: 'tsp'
      }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/220895/old-charleston-style-shrimp-and-grits/',
    img: 'https://www.allrecipes.com/thmb/iNYjpqKHGuQTc5ON6l4FxbE7ULA=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/220895_OldCharleston-StyleShrimpandGrits_mfs_-0051-078e4996629f453a99f5a243f9258f45.jpg',
    name: 'Old Charleston-Style Shrimp and Grits',
    cuisine: ['american'],
    appliances: ['stovetop'],
    restrictions: [],
    cookTime: 75,
    servings: 8,
    ingredients: [
      { qty: 3, name: 'water', denom: 'cup' },
      { qty: 2, name: 'salt', denom: 'tsp' },
      { qty: 1, name: 'ground grits', denom: 'cup' },
      { qty: 2, name: 'half-and-half', denom: 'cup' },
      {
        qty: 2,
        name: 'shrimp',
        denom: 'lb'
      },
      { qty: 1, name: 'salt', denom: 'to taste' },
      { qty: 1, name: 'cayenne pepper', denom: 'pinch' },
      { qty: 1, name: 'lemon', denom: 'medium' },
      {
        qty: 1,
        name: 'andouille sausage',
        denom: 'lb'
      },
      { qty: 5, name: 'bacon', denom: 'slices' },
      { qty: 1, name: 'green bell pepper', denom: 'medium' },
      { qty: 1, name: 'red bell pepper', denom: 'medium' },
      { qty: 1, name: 'yellow bell pepper', denom: 'medium' },
      { qty: 1, name: 'onion', denom: 'cup' },
      { qty: 1, name: 'garlic', denom: 'tsp' },
      { qty: 1/4, name: 'butter', denom: 'cup' },
      { qty: 1/4, name: 'flour', denom: 'cup' },
      { qty: 1, name: 'chicken broth', denom: 'cup' },
      { qty: 1, name: '2orcestershire sauce', denom: 'tbsp' },
      { qty: 1, name: 'cheddar cheese', denom: 'cup' }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/24509/grandmas-famous-salmon-cakes/',
    img: 'https://www.allrecipes.com/thmb/iFtRSQUMxxXIBYdNxR6Am_C8yZI=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/785713-grandmas-famous-salmon-cakes-Rock_lobster-1x1-1-545d3e4dd5ce48aeb0bed5931efa90d6.jpg',
    name: "Grandma's Famous Salmon Cakes",
    cuisine: ['american','healthy'],
    appliances: ['stovetop'],
    restrictions: ['pescatarian','glutan-free','nut-free'],
    cookTime: 30,
    servings: 4,
    ingredients: [
      {
        qty: 15,
        name: 'canned salmon',
        denom: 'oz'
      },
      { qty: 2, name: 'eggs', denom: 'whole' },
      { qty: 1, name: 'onion', denom: 'small' },
      { qty: 1, name: 'pepper', denom: 'tsp' },
      { qty: 3, name: 'vegetable oil', denom: 'tbsp' }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/278876/spicy-tuna-rice-bowl/',
    img: 'https://www.allrecipes.com/thmb/VSxed-Ips_unhM5MZ3EoqIrw8XM=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/7757838-62906b4d20484cb58b604841b44af691.jpg',
    name: 'Spicy Tuna Rice Bowl',
    cuisine: ['asian','fusion'],
    appliances: ['stovetop'],
    restrictions: ['pescatarian'],
    cookTime: 40,
    servings: 2,
    ingredients: [
      { qty: 1, name: 'uncooked rice', denom: 'cup' },
      { qty: 3/2, name: 'water', denom: 'cup' },
      {
        qty: 7,
        name: 'canned tuna',
        denom: 'oz'
      },
      { qty: 1/2, name: 'red bell pepper', denom: 'cup' },
      { qty: 1/4, name: 'jalapeno pepper', denom: 'cup' },
      { qty: 1/4, name: 'green onion', denom: 'cup' },
      { qty: 1/3, name: 'rice vinegar', denom: 'cup' },
      { qty: 1/2, name: 'lemon', denom: 'whole' },
      { qty: 2, name: 'soy sauce', denom: 'tbsp' },
      { qty: 2, name: 'Sriracha hot sauce', denom: 'tsp' },
      { qty: 1/2, name: 'sesame oil', denom: 'teastsppoon' },
      {
        qty: 1,
        name: 'red pepper flakes',
        denom: 'pinch'
      },
      {
        qty: 1,
        name: 'green onion',
        denom: 'teaspoon'
      }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/244458/buttered-noodles/',
    img: 'https://www.allrecipes.com/thmb/fJp3cCyA7e0U-SURE5zHDIoRjys=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/244458-ButteredNoodles-0692-2X3-97824658d6e0472b9287298c63b0cfcf.jpg',
    name: 'Buttered Noodles',
    cuisine: ['pasta'],
    appliances: ['stovetop'],
    restrictions: ['vegetarian','nut-free'],
    cookTime: 20,
    servings: 8,
    ingredients: [
      {
        qty: 16,
        name: 'fettuccine',
        denom: 'oz'
      },
      { qty: 6, name: 'butter', denom: 'tbsp' },
      { qty: 1/3, name: 'parmesan cheese', denom: 'cup' },
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
    url: 'https://www.allrecipes.com/recipe/14759/pork-dumplings/',
    img: 'https://www.allrecipes.com/thmb/5-l5vO13RbgaL0xIQJGKq8ivdh4=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/102329015-Pork-Dumplings-resize-916b0027f8e64f94b28bef36fbff9cfe.png',
    name: 'Pork Dumplings',
    cuisine: ['asian'],
    appliances: ['stovetop'],
    restrictions: [],
    cookTime: 60,
    servings: 10,
    ingredients: [
      {
        qty: 100,
        name: 'wonton wrapper',
        denom: 'sheet'
      },
      { qty: 1.75, name: 'ground pork', denom: 'lb' },
      { qty: 1, name: 'ginger', denom: 'tbsp' },
      { qty: 4, name: 'garlic', denom: 'cloves' },
      {
        qty: 2,
        name: 'green onion',
        denom: 'tbsp'
      },
      { qty: 4, name: 'soy sauce', denom: 'tbsp' },
      { qty: 3, name: 'sesame oil', denom: 'tbsp' },
      { qty: 1, name: 'egg', denom: 'whole' },
      {
        qty: 5,
        name: 'Chinese cabbage',
        denom: 'cup'
      }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/279015/air-fryer-chicken-taquitos/',
    img: 'https://www.allrecipes.com/thmb/tnh0B3_VTDchPNlw8Y7UbRJFDlE=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc():gifv():format(webp)/7774033-91ec667fb877462aa0d84acbc6ac1cf5.jpg',
    name: 'Air Fryer Chicken Taquitos',
    cuisine: ['mexican'],
    appliances: ['air fryer'],
    restrictions: [],
    cookTime: 35,
    servings: 6,
    ingredients: [
      { qty: 1, name: 'vegetable oil', denom: 'tsp' },
      { qty: 2, name: 'onion', denom: 'tbsp' },
      { qty: 1, name: 'garlic', denom: 'clove' },
      {
        qty: 2,
        name: 'green chiles',
        denom: 'tablespoons'
      },
      {
        qty: 2,
        name: 'hot tomato sauce',
        denom: 'tbsp'
      },
      { qty: 1, name: 'shredded rotisserie chicken', denom: 'cup' },
      { qty: 1/2, name: 'Mexican cheese', denom: 'cup' },
      { qty: 2, name: 'Neufchâtel cheese', denom: 'tbsp' },
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
      { qty: 6, name: 'corn tortillas', denom: 'whole' },
      { qty: 1, name: 'cooking spray', denom: 'spray' }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/278806/air-fryer-chicken-cordon-bleu/',
    img: 'https://www.allrecipes.com/thmb/8BpEm-mPzlWiAjJ0pUrGRjTL_co=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc():gifv():format(webp)/Air-Fryer-Chicken-Cordon-Bleu-4x3-1-2000-d67a1d758930430b9c72ca9a1eb6337e.jpg',
    name: 'Air Fryer Chicken Cordon Bleu',
    cuisine: ['other'],
    appliances: ['air fryer'],
    restrictions: [],
    cookTime: 40,
    servings: 2,
    ingredients: [
      { qty: 2, name: 'chicken breast', denom: 'piece' },
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
      { qty: 1, name: 'Dijon mustard', denom: 'tbsp' },
      { qty: 4, name: 'swiss cheese', denom: 'slices' },
      { qty: 4, name: 'deli ham', denom: 'slices' },
      { qty: 1/4, name: 'flour', denom: 'cup' },
      { qty: 1, name: 'egg', denom: 'whole' },
      { qty: 1, name: 'panko bread crumbs', denom: 'cup' },
      { qty: 1/3, name: 'parmesan cheese', denom: 'cup' },
      { qty: 1, name: 'cooking spray', denom: 'spray' }
    ]
  },
    {
    url: 'https://www.allrecipes.com/recipe/270940/air-fryer-eggplant-parmesan/',
    img: 'https://www.allrecipes.com/thmb/4ZaKfEudUbtCbEkEmwTk77AsCFI=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/270940-air-fryer-eggplant-parmesan-1x1-502-copy-84cc521802fa43f0a75d1da36a9433a1.jpg',
    name: 'Air Fryer Eggplant Parmesan',
    cuisine: ['other','pasta'],
    appliances: ['air fryer'],
    restrictions: ['vegetarian','nut-free'],
    cookTime: 35,
    servings: 4,
    ingredients: [
      { qty: 1/2, name: 'Italian bread crumbs', denom: 'cup' },
      { qty: 1/4, name: 'parmesan cheese', denom: 'cup' },
      { qty: 1, name: 'Italian seasoning', denom: 'tsp' },
      { qty: 1, name: 'salt', denom: 'tsp' },
      { qty: 1/2, name: 'dried basil', denom: 'tsp' },
      { qty: 1/2, name: 'garlic powder', denom: 'tsp' },
      { qty: 1/2, name: 'onion powder', denom: 'tsp' },
      {
        qty: 1/2,
        name: 'pepper',
        denom: 'tsp'
      },
      { qty: 1/4, name: 'flour', denom: 'cup' },
      { qty: 2, name: 'eggs', denom: 'whole' },
      {
        qty: 1,
        name: 'eggplant',
        denom: 'medium'
      },
      {
        qty: 1,
        name: 'marinara sauce',
        denom: 'cup'
      },
      {
        qty: 8,
        name: 'mozzarella cheese',
        denom: 'slices'
      }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/278702/air-fryer-chimichangas/',
    img: undefined,
    name: 'Air Fryer Chimichangas',
    cuisine: ['mexican'],
    appliances: ['air fryer'],
    restrictions: ['nut-free'],
    cookTime: 35,
    servings: 6,
    ingredients: [
      { qty: 1, name: 'vegetable oil', denom: 'tbsp' },
      { qty: 1/2, name: 'onion', denom: 'cup' },
      { qty: 2, name: 'shredded cooked chicken', denom: 'cup' },
      {
        qty: 4,
        name: 'Neufchatel cheese',
        denom: 'oz'
      },
      {
        qty: 4,
        name: 'canned green chiles',
        denom: 'oz'
      },
      { qty: 1/4, name: 'chicken broth', denom: 'cup' },
      {
        qty: 3/2,
        name: 'taco seasoning',
        denom: 'tbsp'
      },
      { qty: 1/2, name: 'salt', denom: 'tsp' },
      { qty: 1/4, name: 'pepper', denom: 'tsp' },
      { qty: 6, name: 'flour tortillas', denom: 'whole' },
      {
        qty: 1,
        name: 'Mexican cheese',
        denom: 'cup'
      },
      { qty: 1, name: 'cooking spray', denom: 'spray' }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/8941/slow-cooker-chicken-and-dumplings/',
    img: 'https://www.allrecipes.com/thmb/VFJW47fmRJyWfLNOOCa9L2zRSAs=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/8941-slow-cooker-chicken-and-dumplings-mfs1810-3643c7a637ca4ba6848479f7c7eddf73.jpg',
    name: 'Slow Cooker Chicken and Dumplings',
    cuisine: ['american','soup'],
    appliances: ['slow cooker','instant pot'],
    restrictions: [],
    cookTime: 300,
    servings: 8,
    ingredients: [
      {
        qty: 4,
        name: 'chicken breast',
        denom: 'halves'
      },
      { qty: 2, name: 'butter', denom: 'tbsp' },
      {
        qty: 2,
        name: 'condensed cream of chicken soup',
        denom: '(10.5 ounce) cans'
      },
      { qty: 1, name: 'onion', denom: 'medium' },
      {
        qty: 10,
        name: 'biscuit dough',
        denom: 'oz'
      },
      { qty: 2, name: 'water', denom: 'cup' }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/16678/slow-cooker-taco-soup/',
    img: 'https://www.allrecipes.com/thmb/vnPwR8pygpNawP3iGwopEQh7Fh4=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/16678_Slow-Cooker-Taco-Soup_TTV78_5941186_original-4x3-1-d8efc3f2c8204bdb9a7a02362cc9e27b.jpg',
    name: 'Slow Cooker Taco Soup',
    cuisine: ['mexican','soup'],
    appliances: ['slow cooker','instant pot'],
    restrictions: [],
    cookTime: 490,
    servings: 8,
    ingredients: [
      { qty: 1, name: 'ground beef', denom: 'lb' },
      { qty: 1, name: 'onion', denom: 'medium' },
      {
        qty: 16,
        name: 'chili beans',
        denom: 'oz'
      },
      {
        qty: 15,
        name: 'kidney beans',
        denom: 'oz'
      },
      {
        qty: 15,
        name: 'corn',
        denom: 'oz'
      },
      { qty: 8, name: 'tomato sauce', denom: 'oz' },
      { qty: 1, name: 'water', denom: 'cup' },
      {
        qty: 29,
        name: 'diced tomatoes',
        denom: 'oz'
      },
      {
        qty: '4',
        name: 'canned green chiles',
        denom: 'oz'
      },
      {
        qty: 1,
        name: 'taco seasoning',
        denom: 'packet'
      }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/174543/slow-cooker-butter-chicken/',
    img: 'https://www.allrecipes.com/thmb/Tlss3SVlyqylhCrWUWd8bvOWStY=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/2435088-slow-cooker-butter-chicken-Allrecipes-Magazine-1x1-1-a5b427055dfc49e0994f4d595f5a4f52.jpg',
    name: 'Slow Cooker Butter Chicken',
    cuisine: ['asian'],
    appliances: ['slow cooker','instant pot'],
    restrictions: [],
    cookTime: 255,
    servings: 6,
    ingredients: [
      { qty: 2, name: 'butter', denom: 'tbsp' },
      { qty: 2, name: 'vegetable oil', denom: 'tbsp' },
      {
        qty: 4,
        name: 'chicken thigh',
        denom: 'large'
      },
      { qty: 1, name: 'onion', denom: 'medium' },
      { qty: 3, name: 'garlic', denom: 'cloves' },
      { qty: 6, name: 'tomato paste', denom: 'oz' },
      { qty: 1, name: 'curry paste', denom: 'tbsp' },
      { qty: 2, name: 'curry powder', denom: 'tsp' },
      { qty: 2, name: 'tandoori masala', denom: 'tsp' },
      { qty: 1, name: 'garam masala', denom: 'tsp' },
      { qty: 15, name: 'green cardamom', denom: 'pods' },
      { qty: 14, name: 'coconut milk', denom: 'oz' },
      { qty: 1, name: 'low-fat plain yogurt', denom: 'cup' },
      { qty: 1, name: 'salt', denom: 'to taste' }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/13023/beef-barley-vegetable-soup/',
    img: 'https://www.allrecipes.com/thmb/qYuFksqL7U8N77FcvKQshqmITL4=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/8989222-eed9557e7eb0437285010be3d748b092.jpg',
    name: 'Beef Barley Vegetable Soup',
    cuisine: ['soup'],
    appliances: ['slow cooker','instant pot'],
    restrictions: ['nut-free','lactose-free'],
    cookTime: 255,
    servings: 10,
    ingredients: [
      { qty: 3, name: 'chuck roast', denom: 'lb' },
      { qty: 1/2, name: 'barley', denom: 'cup' },
      { qty: 1, name: 'bay leaf', denom: 'leaf' },
      { qty: 2, name: 'oil', denom: 'tbsp' },
      { qty: 3, name: 'carrot', denom: 'whole' },
      { qty: 3, name: 'celery', denom: 'stalks' },
      { qty: 1, name: 'onion', denom: 'medium' },
      {
        qty: 16,
        name: 'frozen vegetables',
        denom: 'oz'
      },
      { qty: 4, name: 'water', denom: 'cup' },
      {
        qty: 28,
        name: 'stewed tomatoes',
        denom: 'oz'
      },
      { qty: 4, name: 'beef bouillon', denom: 'cubes' },
      { qty: 1, name: 'white sugar', denom: 'tbsp' },
      {
        qty: 1/4,
        name: 'pepper',
        denom: 'tsp'
      },
      { qty: 1, name: 'salt', denom: 'to taste' }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/236110/baked-chicken-breasts-and-vegetables/',
    img: 'https://www.allrecipes.com/thmb/bXycF_fEdEzVclNj2HWX_gC7AwQ=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/1959478-baked-chicken-breasts-and-vegetables-William-Hooper-1x1-1-246b3f625c744d13aeb54b9d2aa7b446.jpg',
    name: 'Baked Chicken Breasts and Vegetables',
    cuisine: ['other','healthy'],
    appliances: ['oven'],
    restrictions: ['nut-free','lactose-free'],
    cookTime: 50,
    servings: 4,
    ingredients: [
      {
        qty: 4,
        name: 'chicken breast',
        denom: 'halves'
      },
      {
        qty: 8,
        name: 'carrot',
        denom: 'whole'
      },
      { qty: 8, name: 'celery', denom: 'stalks' },
      { qty: 8, name: 'green onions', denom: 'stalks' },
      { qty: 4, name: 'green bell pepper', denom: 'whole' },
      { qty: 1/4, name: 'parsley', denom: 'cup' },
      { qty: 1/2, name: 'olive oil', denom: 'cup' },
      { qty: 1, name: 'Italian seasoning', denom: 'tsp' },
      { qty: 1, name: 'chili powder', denom: 'tsp' },
      { qty: 1, name: 'lemon pepper', denom: 'tsp' },
      { qty: 1, name: 'salt', denom: 'tsp' },
      {
        qty: 4,
        name: 'pepper',
        denom: 'pinches'
      }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/242352/greek-lemon-chicken-and-potatoes/',
    img: 'https://www.allrecipes.com/thmb/JaPJL_ygTH33bGnOgTVndonCKJ4=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/4539284_original-2000-09b01bd66782408a9735eda9256b7d40.jpg',
    name: 'Greek Lemon Chicken and Potatoes',
    cuisine: ['mediterranean'],
    appliances: ['oven'],
    restrictions: ['lactose-free','nut-free'],
    cookTime: 60,
    servings: 4,
    ingredients: [
      {
        qty: 4,
        name: 'bone-in chicken thigh',
        denom: 'lb'
      },
      {
        qty: 3,
        name: 'russet potatoes',
        denom: 'large'
      },
      { qty: 1/2, name: 'lemon juice', denom: 'cup' },
      { qty: 1/2, name: 'olive oil', denom: 'cup' },
      { qty: 6, name: 'garlic', denom: 'cloves' },
      { qty: 1, name: 'oregano', denom: 'tbsp' },
      { qty: 1, name: 'salt', denom: 'tbsp' },
      { qty: 1, name: 'rosemary', denom: 'tsp' },
      {
        qty: 1,
        name: 'pepper',
        denom: 'tsp'
      },
      { qty: 1, name: 'cayenne pepper', denom: 'pinch' },
      { qty: 1, name: 'chicken broth', denom: 'cup' },
      {
        qty: 1,
        name: 'fresh oregano',
        denom: 'tsp'
      }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/268999/mediterranean-chicken-sheet-pan-dinner/',
    img: undefined,
    name: 'Mediterranean Chicken Sheet Pan Dinner',
    cuisine: ['mediterranean'],
    appliances: ['oven'],
    restrictions: ['nut-free','lactose-free'],
    cookTime: 55,
    servings: 4,
    ingredients: [
      { qty: 1/4, name: 'extra-virgin olive oil', denom: 'cup' },
      { qty: 2, name: 'lemon', denom: 'whole' },
      { qty: 2, name: 'balsamic vinegar', denom: 'tbsp' },
      { qty: 1, name: 'tarragon', denom: 'tsp' },
      { qty: 1, name: 'oregano', denom: 'tsp' },
      { qty: 1, name: 'paprika', denom: 'tsp' },
      { qty: 1, name: 'salt', denom: 'tsp' },
      { qty: 1/2, name: 'pepper', denom: 'tsp' },
      { qty: 4, name: 'chicken thighs', denom: 'whole' },
      { qty: 1, name: 'red onion', denom: 'small' },
      {
        qty: 8,
        name: 'mini bell peppers',
        denom: 'whole'
      },
      { qty: 1, name: 'baby potatoes', denom: 'lb' },
      { qty: 1/4, name: 'feta cheese', denom: 'cup' },
      { qty: 1/4, name: 'parsley', denom: 'cup' },
      { qty: 8, name: 'kalamata olives', denom: 'whole' }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/262162/sheet-pan-salmon-and-bell-pepper-dinner/',
    img: 'https://www.allrecipes.com/thmb/wFqVeNROxxuTConECuaCMi3I7vk=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc():gifv():format(webp)/9237989-sheet-pan-salmon-and-bell-pepper-dinner-Susan-Williams-Valenzuela-4x3-1-dd4b74fb0444414796873dc446918dec.jpg',
    name: 'Sheet Pan Salmon and Bell Pepper Dinner',
    cuisine: ['other','healthy'],
    appliances: ['oven'],
    restrictions: ['pescatarian','lactose-free','nut-free','glutan-free'],
    cookTime: 30,
    servings: 4,
    ingredients: [
      { qty: 2, name: 'olive oil', denom: 'tbsp' },
      { qty: 12, name: 'salmon fillets', denom: 'oz' },
      { qty: 2, name: 'red bell pepper', denom: 'whole' },
      { qty: 1, name: 'yellow bell pepper', denom: 'whole' },
      { qty: 1, name: 'onion', denom: 'medium' },
      { qty: 6, name: 'lemon juice', denom: 'tbsp' },
      { qty: 3, name: 'olive oil', denom: 'tbsp' },
      { qty: 2, name: 'water', denom: 'tbsp' },
      { qty: 1, name: 'maple syrup', denom: 'tbsp' },
      { qty: 5, name: 'garlic', denom: 'cloves' },
      { qty: 3/2, name: 'salt', denom: 'tsp' },
      { qty: 3/2, name: 'red pepper flakes', denom: 'tsp' },
      { qty: 1, name: 'cumin', denom: 'tsp' },
      { qty: 1/2, name: 'fresh parsley', denom: 'bunch' },
      { qty: 1, name: 'lemon', denom: 'whole' }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/269152/shrimp-and-vegetable-sheet-pan-dinner/',
    img: 'https://www.allrecipes.com/thmb/HspHH4ipcdkkN8H2yU31L1waLCc=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc():gifv():format(webp)/6884014-38ca576b3f584d8780e82707593c0e8f.jpg',
    name: 'Shrimp and Vegetable Sheet Pan Dinner',
    cuisine: ['other','healthy'],
    appliances: ['oven'],
    restrictions: ['pescatarian','nut-free','lactose-free','glutan-free'],
    cookTime: 35,
    servings: 4,
    ingredients: [
      { qty: 1, name: 'red onion', denom: 'medium' },
      { qty: 1, name: 'red bell pepper', denom: 'whole' },
      { qty: 1, name: 'mushrooms', denom: 'cup' },
      { qty: 1, name: 'zucchini', denom: 'whole' },
      { qty: 3, name: 'olive oil', denom: 'tbsp' },
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
      { qty: 1/4, name: 'paprika', denom: 'tsp' },
      {
        qty: 1,
        name: 'shrimp',
        denom: 'lb'
      },
      { qty: 1, name: 'lemon zest', denom: 'tsp' },
      { qty: 1/2, name: 'garlic powder', denom: 'tsp' }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/263602/sheet-pan-vegan-roasted-brussels-sprouts-and-butternut-squash/',
    img: 'https://www.allrecipes.com/thmb/W9fW5qCOXefX-ITvT1BUmu5eff8=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc():gifv():format(webp)/9429080-705a0d87be92477aa27da19af6761a6a.jpg',
    name: 'Sheet Pan Vegan Roasted Brussels Sprouts and Butternut Squash',
    cuisine: ['other','healthy'],
    appliances: ['oven'],
    restrictions: ['vegan','vegetarian','nut-free','glutan-free','lactose-free'],
    cookTime: 30,
    servings: 4,
    ingredients: [
      { qty: 2, name: 'brussels sprouts', denom: 'cups' },
      { qty: 2, name: 'butternut squash', denom: 'cups' },
      { qty: 3, name: 'olive oil', denom: 'tbsp' },
      { qty: 1, name: 'garlic powder', denom: 'tsp' },
      { qty: 1/2, name: 'paprika', denom: 'tsp' },
      { qty: 1/2, name: 'salt', denom: 'tsp' },
      { qty: 1/4, name: 'pepper', denom: 'tsp' }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/268995/vegetarian-sheet-pan-dinner-with-chickpeas-and-veggies/',
    img: 'https://www.allrecipes.com/thmb/lF_gjKdejDyYXvnCMTlkLWxiv0w=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc():gifv():format(webp)/5934981-3a8060031b404c8981baed48c7a4be74.jpg',
    name: 'Vegetarian Sheet Pan Dinner with Chickpeas and Veggies',
    cuisine: ['healthy','other'],
    appliances: ['oven'],
    restrictions: ['vegan','vegetarian','glutan-free','lactose-free'],
    cookTime: 70,
    servings: 8,
    ingredients: [
      {
        qty: 30,
        name: 'chickpeas',
        denom: 'oz'
      },
      {
        qty: 1/2,
        name: 'butternut squash',
        denom: 'whole'
      },
      { qty: 1, name: 'onion', denom: 'medium' },
      {
        qty: 1,
        name: 'sweet potato',
        denom: 'whole'
      },
      {
        qty: 2,
        name: 'carrot',
        denom: 'large'
      },
      {
        qty: 3,
        name: 'russet potatoes',
        denom: 'medium'
      },
      { qty: 3, name: 'vegetable oil', denom: 'tbsp' },
      { qty: 1, name: 'salt', denom: 'tsp' },
      { qty: 1/2, name: 'pepper', denom: 'tsp' },
      { qty: 1, name: 'onion powder', denom: 'tsp' },
      { qty: 1, name: 'garlic powder', denom: 'tsp' },
      { qty: 1, name: 'fennel seeds', denom: 'tsp' },
      { qty: 1, name: 'sage', denom: 'tsp' },
      { qty: 2, name: 'green onion', denom: 'stalk' }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/261608/easy-vegan-sheet-pan-roasted-cauliflower-tomatoes-and-garbanzo-beans/',
    img: 'https://www.allrecipes.com/thmb/0ztlBOSyFH-AEXoCUT87vFL2EXY=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc():gifv():format(webp)/9429086-f8d47a079f494d5082c151c571e3231d.jpg',
    name: 'Easy Vegan Sheet Pan Roasted Cauliflower, Tomatoes, and Garbanzo Beans',
    cuisine: ['healthy','other'],
    appliances: ['oven'],
    restrictions: ['vegan','vegetarian','nut-free','glutan-free','lactose-free'],
    cookTime: 35,
    servings: 2,
    ingredients: [
      { qty: 1, name: 'cooking spray', denom: 'spray' },
      { qty: 1, name: 'olive oil', denom: 'tbsp' },
      { qty: 2, name: 'garlic', denom: 'cloves' },
      { qty: 1/2, name: 'salt', denom: 'tsp' },
      { qty: 1/4, name: 'pepper', denom: 'tsp' },
      { qty: 4, name: 'cauliflower', denom: 'cup' },
      { qty: 2, name: 'cherry tomatoes', denom: 'cup' },
      {
        qty: 15,
        name: 'garbanzo beans',
        denom: 'oz'
      },
      { qty: 1, name: 'lime', denom: 'whole' },
      { qty: 1, name: 'cilantro', denom: 'tbsp' }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/268091/easy-korean-ground-beef-bowl/',
    img: 'https://www.allrecipes.com/thmb/E43eZezJpcYM8TX5tkASfHI3O6A=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/5759837-b2371603be79499c9e1cfa7eeefc7b25.jpg',
    name: 'Easy Korean Ground Beef Bowl',
    cuisine: ['asian'],
    appliances: ['stovetop'],
    restrictions: [],
    cookTime: 25,
    servings: 4,
    ingredients: [
      { qty: 1, name: 'ground beef', denom: 'lb' },
      { qty: 5, name: 'garlic', denom: 'cloves' },
      { qty: 1, name: 'ginger', denom: 'tbsp' },
      { qty: 2, name: 'sesame oil', denom: 'tsp' },
      { qty: 1/2, name: 'soy sauce', denom: 'cup' },
      { qty: 1/3, name: 'brown sugar', denom: 'cup' },
      { qty: 1/4, name: 'crushed red pepper', denom: 'tsp' },
      { qty: 6, name: 'green onion', denom: 'stalk' },
      { qty:  4, name: 'cooked rice', denom: 'cup' },
      { qty: 1, name: 'sesame seeds', denom: 'tbsp' }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/136476/easy-french-dip-sandwiches/',
    img: 'https://www.allrecipes.com/thmb/iP1ptgiTxkkaaMgPtJbExcKqULQ=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/136476-Easy-French-Dip-Sandwiches-ddmps-1x1-104759-1fdbe74e236845d3b69df16f3dfe2295.jpg',
    name: 'Easy French Dip Sandwiches',
    cuisine: ['american'],
    appliances: ['stovetop'],
    restrictions: ['nut-free'],
    cookTime: 15,
    servings: 4,
    ingredients: [
      { qty: 4, name: 'hoagie rolls', denom: 'whole' },
      { qty: 1, name: 'beef consomme', denom: '(10.5 ounce) can' },
      { qty: 1, name: 'water', denom: 'cup' },
      { qty: 1, name: 'deli roast beef', denom: 'lb' },
      { qty: 8, name: 'provolone cheese', denom: 'slices' }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/231939/honey-glazed-chicken/',
    img: 'https://www.allrecipes.com/thmb/U_WKDsjvpCp4APv7atLehcX320A=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/231939_Honey-Glazed-Chicken_Adam-Vaccarezza_4564886_original-1x1-1-d3a47a980db64551a2e8d3ae4b60eade.jpg',
    name: 'Honey Glazed Chicken',
    cuisine: ['asian'],
    appliances: ['stovetop'],
    restrictions: ['lactose-free'],
    cookTime: 20,
    servings: 4,
    ingredients: [
      { qty: 1/4, name: 'honey', denom: 'cup' },
      { qty: 2, name: 'soy sauce', denom: 'tbsp' },
      { qty: 1/8, name: 'red pepper flakes', denom: 'tsp' },
      { qty: 3/2, name: 'olive oil', denom: 'tbsp' },
      {
        qty: 2,
        name: 'chicken breast',
        denom: 'halves'
      }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/14554/sirloin-steak-with-garlic-butter/',
    img: 'https://www.allrecipes.com/thmb/JTKQMK5qNybtjrjMBl5ChS6LCco=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/1023331-sirloin-steak-with-garlic-butter-Cindy-Capps-Lepp-1x1-1-163c35fb36274d4d8c2456e829f3801a.jpg',
    name: 'Sirloin Steak with Garlic Butter',
    cuisine: ['american'],
    appliances: ['grill'],
    restrictions: ['nut-free','glutan-free'],
    cookTime: 30,
    servings: 8,
    ingredients: [
      { qty: 1/2, name: 'butter', denom: 'cup' },
      { qty: 4, name: 'garlic', denom: 'cloves' },
      { qty: 2, name: 'garlic powder', denom: 'tsp' },
      { qty: 4, name: 'sirloin steak', denom: 'lb' },
      { qty: 1, name: 'salt', denom: 'to taste' },
      { qty: 1, name: 'pepper', denom: 'to taste' }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/245932/easy-smoked-sausage-skillet/',
    img: 'https://www.allrecipes.com/thmb/fbSDuanowq056FjJvYsh67Qc2XE=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/3485679-cc7318539dd9438aab7d0ac79be51612.jpg',
    name: 'Easy Smoked Sausage Skillet',
    cuisine: ['american','other'],
    appliances: ['stovetop'],
    restrictions: ['nut-free'],
    cookTime: 20,
    servings: 4,
    ingredients: [
      { qty: 1/4, name: 'olive oil', denom: 'cup' },
      { qty: 2, name: 'garlic', denom: 'cloves' },
      {
        qty: 14,
        name: 'smoked sausage',
        denom: 'oz'
      },
      { qty: 1, name: 'red bell pepper', denom: 'large' },
      { qty: 1, name: 'yellow onion', denom: 'small' },
      {
        qty: 10,
        name: 'frozen broccoli',
        denom: 'oz'
      },
      { qty: 1/2, name: 'chicken broth', denom: 'cup' },
      { qty: 1/2, name: 'tomato sauce', denom: 'cup' },
      { qty: 2, name: 'instant rice', denom: 'cup' },
      { qty: 1/2, name: 'mozzarella cheese', denom: 'cup' }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/244950/baked-chicken-schnitzel/',
    img: 'https://www.allrecipes.com/thmb/DGikdwmpaRP1I5y3YJZgVDkTIEM=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/baked-chicken-schnitzel-2000-dd206c7e72bb4e399068e5c979dd874d.jpeg',
    name: 'Baked Chicken Schnitzel',
    cuisine: ['other'],
    appliances: ['oven'],
    restrictions: ['nut-free','lactose-free'],
    cookTime: 30,
    servings: 6,
    ingredients: [
      { qty: 1, name: 'olive oil', denom: 'tbsp' },
      {
        qty: 6,
        name: 'chicken breasts',
        denom: 'piece'
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
      { qty: 3/4, name: 'flour', denom: 'cup' },
      { qty: 1, name: 'paprika', denom: 'tbsp' },
      { qty: 2, name: 'eggs', denom: 'large' },
      { qty: 2, name: 'seasoned bread crumbs', denom: 'cup' },
      { qty: 1, name: 'lemon', denom: 'whole' }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/201849/mongolian-beef-and-spring-onions/',
    img: 'https://www.allrecipes.com/thmb/mmeSRn8VotBNrnLt21mZN5UN0No=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/9083831-mongolian-beef-and-spring-onions-Megan-Nieves-1x1-1-feb41bcec3ca452c84c3c35cfe900a51.jpg',
    name: 'Mongolian Beef and Spring Onions',
    cuisine: ['asian'],
    appliances: ['stovetop'],
    restrictions: ['lactose-free'],
    cookTime: 35,
    servings: 4,
    ingredients: [
      { qty: 2, name: 'vegetable oil', denom: 'tsp' },
      { qty: 1, name: 'garlic', denom: 'tbsp' },
      { qty: 12, name: 'ginger', denom: 'tsp' },
      { qty: 2/3, name: 'brown sugar', denom: 'cup' },
      { qty: 1/2, name: 'soy sauce', denom: 'cup' },
      { qty: 1/2, name: 'water', denom: 'cup' },
      {
        qty: 1,
        name: 'flank steak',
        denom: 'lb'
      },
      { qty: 1/4, name: 'cornstarch', denom: 'cup' },
      { qty: 1, name: 'vegetable oil', denom: 'cup' },
      {
        qty: 2,
        name: 'green onion',
        denom: 'stalk'
      }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/230818/pork-fried-rice/',
    img: 'https://www.allrecipes.com/thmb/5jcsVRYQ0eyamITkUQuELOfDQR4=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/1353688-34e6ed5e0653413e85995033e316d1e6.jpg',
    name: 'Pork Fried Rice',
    cuisine: ['asian'],
    appliances: ['stovetop'],
    restrictions: ['lactose-free'],
    cookTime: 30,
    servings: 2,
    ingredients: [
      { qty: 1, name: 'butter', denom: 'tbsp' },
      {
        qty: 6,
        name: 'pork loin chop',
        denom: 'oz'
      },
      { qty: 1, name: 'green onion', denom: 'stalk' },
      { qty: 1/4, name: 'carrot', denom: 'cup' },
      { qty: 1/4, name: 'broccoli', denom: 'cup' },
      { qty: 1, name: 'egg', denom: 'whole' },
      { qty: 1, name: 'cooked rice', denom: 'cup' },
      { qty: 1/4, name: 'frozen peas', denom: 'cup' },
      { qty: 3/2, name: 'soy sauce', denom: 'tbsp' },
      { qty: 1/8, name: 'garlic powder', denom: 'tsp' },
      { qty: 1/8, name: 'ground ginger', denom: 'tsp' }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/216757/savory-sea-scallops-and-angel-hair-pasta/',
    img: 'https://www.allrecipes.com/thmb/lrbm2E6kZsvAJcvBWo7oG7dLN2Y=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc():gifv():format(webp)/8248413-29ef09d6a2da41c79218987366431f95.jpg',
    name: 'Savory Sea Scallops and Angel Hair Pasta',
    cuisine: ['pasta'],
    appliances: ['stovetop'],
    restrictions: ['pescatarian'],
    cookTime: 35,
    servings: 6,
    ingredients: [
      { qty: 16, name: 'angel hair pasta', denom: 'oz' },
      { qty: 1/4, name: 'butter', denom: 'cup' },
      { qty: 2, name: 'garlic', denom: 'cloves' },
      {
        qty: 2,
        name: 'sea scallops',
        denom: 'lb'
      },
      { qty: 3, name: 'fresh basil', denom: 'tbsp' },
      {
        qty: 2,
        name: 'parsley',
        denom: 'tbsp'
      },
      { qty: 2, name: 'lemon juice', denom: 'tbsp' },
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
      { qty: 1/2, name: 'heavy cream', denom: 'cup' },
      {
        qty: 1/2,
        name: 'parmesan cheese',
        denom: 'tbsp'
      }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/209578/blt/',
    img: 'https://www.allrecipes.com/thmb/I6UU9_SiDzrEMMceJa5q3AN5Iig=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc():gifv():format(webp)/4543157-e47cd201c0e34de0b63c70f62ccbe2ce.jpg',
    name: 'BLT',
    cuisine: ['american'],
    appliances: ['stovetop'],
    restrictions: ['nut-free'],
    cookTime: 15,
    servings: 1,
    ingredients: [
      { qty: 4, name: 'bacon', denom: 'slices' },
      { qty: 2, name: 'lettuce', denom: 'leaves' },
      { qty: 2, name: 'tomato', denom: 'slices' },
      { qty: 2, name: 'bread', denom: 'slices' },
      { qty: 1, name: 'mayonnaise', denom: 'tbsp' }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/15559/black-beans-and-rice/',
    img: 'https://www.allrecipes.com/thmb/BOOQwfk6kGrYO-WgvAqHPIrpOfE=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/Black-Beans-and-Rice-by-House-of-Aqua-2119665_original-4e87fb50007047deb0756d83d15591b7.jpg',
    name: 'Black Beans and Rice',
    cuisine: ['mexican'],
    appliances: ['stovetop'],
    restrictions: ['vegetarian','nut-free','lactose-free'],
    cookTime: 30,
    servings: 6,
    ingredients: [
      { qty: 1, name: 'olive oil', denom: 'tsp' },
      { qty: 1, name: 'onion', denom: 'medium' },
      { qty: 2, name: 'garlic', denom: 'cloves' },
      { qty: 3/4, name: 'uncooked rice', denom: 'cup' },
      {
        qty: 3/2,
        name: 'vegetable broth',
        denom: 'cup'
      },
      { qty: 3.5, name: 'black beans', denom: 'cup' },
      { qty: 1, name: 'cumin', denom: 'tsp' },
      { qty: 1/4, name: 'cayenne pepper', denom: 'tsp' }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/272858/air-fryer-chicken-thighs/',
    img: 'https://www.allrecipes.com/thmb/PPaFX9Is6gp3x3HPFawhmGt9NRQ=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/image-9e5c4aa20ccf4579a9e56eec692171ec.jpg',
    name: 'Air Fryer Chicken Thighs',
    cuisine: ['other'],
    appliances: ['air fryer'],
    restrictions: ['glutan-free','nut-free','lactose-free'],
    cookTime: 30,
    servings: 4,
    ingredients: [
      { qty: 4, name: 'chicken thigh', denom: 'whole' },
      { qty: 2, name: 'extra-virgin olive oil', denom: 'tsp' },
      { qty: 1, name: 'paprika', denom: 'tsp' },
      { qty: 3/4, name: 'garlic powder', denom: 'tsp' },
      { qty: 1/2, name: 'salt', denom: 'tsp' },
      { qty: 1/2, name: 'pepper', denom: 'tsp' }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/46982/pesto-pasta-with-chicken/',
    img: 'https://www.allrecipes.com/thmb/p--kqk205PyJrhJiIEPLsc7ODMY=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/image-6-9532607d48a248b48ddc4a3588ae1b9c.jpg',
    name: 'Pesto Pasta with Chicken',
    cuisine: ['pasta'],
    appliances: ['stovetop'],
    restrictions: [],
    cookTime: 30,
    servings: 8,
    ingredients: [
      { qty: 16, name: 'bow tie pasta', denom: 'oz' },
      { qty: 1, name: 'olive oil', denom: 'tsp' },
      { qty: 2, name: 'garlic', denom: 'cloves' },
      {
        qty: 2,
        name: 'chicken breast',
        denom: 'piece'
      },
      {
        qty: 1,
        name: 'red pepper flakes',
        denom: 'pinch'
      },
      { qty: 1/2, name: 'pesto sauce', denom: 'cup' },
      {
        qty: 1/3,
        name: 'sun-dried tomatoes',
        denom: 'cup'
      }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/280935/air-fryer-tilapia-with-fresh-lemon-pepper/',
    img: undefined,
    name: 'Air Fryer Tilapia with Fresh Lemon Pepper',
    cuisine: ['other'],
    appliances: ['air fryer'],
    restrictions: ['pescatarian'],
    cookTime: 20,
    servings: 4,
    ingredients: [
      { qty: 24, name: 'tilapia fillet', denom: 'oz' },
      { qty: 2, name: 'lemon zest', denom: 'tbsp' },
      { qty: 2, name: 'olive oil', denom: 'tbsp' },
      {
        qty: 3/2,
        name: 'pepper',
        denom: 'tsp'
      },
      { qty: 1/2, name: 'salt', denom: 'tsp' },
      { qty: 2, name: 'garlic', denom: 'cloves' },
      { qty: 1, name: 'paprika', denom: 'pinch' },
      { qty: 1, name: 'cooking spray', denom: 'spray' },
      {
        qty: 1,
        name: 'parsley',
        denom: 'sprig'
      },
      { qty: 1, name: 'lemon', denom: 'whole' }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/272834/easy-homemade-shrimp-fried-rice/',
    img: 'https://www.allrecipes.com/thmb/ukJN3E2XyQNiY88fh9B-QanypV8=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc():gifv():format(webp)/7664895-easy-homemade-shrimp-fried-rice-rfj-4x3-1-58aaca8230e84467a4087cb8c5ac0652.jpg',
    name: 'Easy Homemade Shrimp Fried Rice',
    cuisine: ['asian'],
    appliances: ['stovetop'],
    restrictions: ['pescatarian'],
    cookTime: 30,
    servings: 4,
    ingredients: [
      { qty: 2, name: 'sesame oil', denom: 'tbsp' },
      { qty: 2, name: 'olive oil', denom: 'tbsp' },
      {
        qty: 1,
        name: 'shrimp',
        denom: 'lb'
      },
      { qty: 1, name: 'frozen peas and carrots', denom: 'cup' },
      { qty: 1/2, name: 'frozen corn', denom: 'cup' },
      {
        qty: 2,
        name: 'garlic',
        denom: 'cloves'
      },
      { qty: 3, name: 'eggs', denom: 'large' },
      { qty: 4, name: 'cooked rice', denom: 'cup' },
      {
        qty: 3,
        name: 'green onion',
        denom: 'tbsp'
      },
      {
        qty: 3,
        name: 'soy sauce',
        denom: 'tbsp'
      },
      { qty: 1/2, name: 'salt', denom: 'tsp' },
      {
        qty: 1/2,
        name: 'pepper',
        denom: 'tsp'
      }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/241066/one-skillet-mexican-quinoa/',
    img: 'https://www.allrecipes.com/thmb/L1E2PypH3xpjR-TFr31YKMcDAZA=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/One-Skillet-Quinoa-with-Black-Beans-2000-98a43445a6684f75b12c8a81fdfe6a9b.jpg',
    name: 'One-Skillet Mexican Quinoa',
    cuisine: ['mexican'],
    appliances: ['stovetop'],
    restrictions: ['vegetarian'],
    cookTime: 40,
    servings: 4,
    ingredients: [
      { qty: 1, name: 'olive oil', denom: 'tbsp' },
      { qty: 1, name: 'jalapeno pepper', denom: 'medium' },
      { qty: 2, name: 'garlic', denom: 'cloves' },
      {
        qty: 1,
        name: 'black beans, rinsed and drained',
        denom: 'can'
      },
      {
        qty: 1,
        name: 'fire-roasted diced tomatoes',
        denom: 'can'
      },
      { qty: 1, name: 'corn', denom: 'cup' },
      { qty: 1, name: 'quinoa', denom: 'cup' },
      { qty: 1, name: 'chicken broth', denom: 'cup' },
      {
        qty: 1,
        name: 'red pepper flakes',
        denom: 'tbsp'
      },
      { qty: 3/2, name: 'chili powder', denom: 'tsp' },
      { qty: 1/2, name: 'cumin', denom: 'tsp' },
      {
        qty: 1,
        name: 'pepper',
        denom: 'to taste'
      },{
        qty: 1,
        name: 'salt',
        denom: 'to taste'
      },
      {
        qty: 1,
        name: 'avocado',
        denom: 'medium'
      },
      { qty: 1, name: 'lime', denom: 'medium' },
      { qty: 2, name: 'cilantro', denom: 'tablespoons' }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/277112/instant-pot-mexican-chicken-and-rice-bowls/',
    img: 'https://www.allrecipes.com/thmb/lOeL7R3PN8cKiVIUpTFhB911V8Y=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc():gifv():format(webp)/7244825-5f0b76749559461cb80e3af8d012fa85.jpg',
    name: 'Instant Pot® Mexican Chicken and Rice Bowls',
    cuisine: ['mexican'],
    appliances: ['instant pot'],
    restrictions: [],
    cookTime: 55,
    servings: 4,
    ingredients: [
      { qty: 1, name: 'olive oil', denom: 'to taste' },
      {
        qty: 1,
        name: 'chicken breast',
        denom: 'lb'
      },
      { qty: 1/2, name: 'chicken broth', denom: 'cup' },
      { qty: 1, name: 'corn', denom: '(15 ounce) can' },
      {
        qty: 1,
        name: 'black beans',
        denom: '(15 ounce) can'
      },
      {
        qty: 1,
        name: 'diced tomatoes and green chilies',
        denom: '(10 ounce) can'
      },
      {
        qty: 1,
        name: 'rice',
        denom: 'cup'
      },
      { qty: 1/2, name: 'salt', denom: 'tsp' },
      { qty: 1/2, name: 'chili powder', denom: 'tsp' },
      { qty: 1/4, name: 'garlic powder', denom: 'tsp' },
      {
        qty: 4,
        name: 'Mexican cheese',
        denom: 'tbsp'
      },
      {
        qty: 2,
        name: 'cilantro',
        denom: 'tbsp'
      }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/261196/creamy-keto-cauliflower-risotto/',
    img: 'https://www.allrecipes.com/thmb/CLuLicJKFw0UgtHDTSi86-20ZsY=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc():gifv():format(webp)/8218665-creamy-keto-cauliflower-risotto-Audrey-4x3-1-74dc868ce977411191df737cc7e51db0.jpg',
    name: 'Creamy Keto Cauliflower Risotto',
    cuisine: ['other'],
    appliances: ['stovetop'],
    restrictions: ['vegetarian','nut-free','glutan-free'],
    cookTime: 29,
    servings: 4,
    ingredients: [
      { qty: 1/4, name: 'ghee', denom: 'cup' },
      { qty: 1/2, name: 'onion', denom: 'medium' },
      { qty: 1, name: 'garlic', denom: 'clove' },
      { qty: 1, name: 'cauliflower', denom: 'head' },
      { qty: 1, name: 'mushrooms', denom: 'cup' },
      { qty: 1/2, name: 'heavy whipping cream', denom: 'cup' },
      { qty: 1, name: 'parmesan cheese', denom: 'cup' },
      { qty: 1/2, name: 'salt', denom: 'tsp' },
      { qty: 1/4, name: 'pepper', denom: 'tsp' },
      { qty: 1/4, name: 'nutmeg', denom: 'tsp' }
    ]
  },
  {
    url: 'https://www.allrecipes.com/recipe/262477/low-calorie-vegan-chili/',
    img: 'https://www.allrecipes.com/thmb/a0xitiiujLrLTNjaDQ1U4XNiJks=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc():gifv():format(webp)/6270879-low-calorie-vegan-chili-Yasmin-4x3-1-1750393050d44c289801b7a0021ac103.jpg',
    name: 'Low-Calorie Vegan Chili',
    cuisine: ['soup','other'],
    appliances: ['stovetop'],
    restrictions: ['vegan','vegetarian','nut-free','lactose-free'],
    cookTime: 55,
    servings: 6,
    ingredients: [
      { qty: 1, name: 'diced tomatoes', denom: '(28 ounce) can' },
      { qty: 3, name: 'water', denom: 'cup' },
      {
        qty: 1,
        name: 'kidney beans',
        denom: '(15.5 ounce) can'
      },
      { qty: 1, name: 'red beans', denom: '(15.5 ounce) can' },
      { qty: 1, name: 'yellow onion', denom: 'medium' },
      { qty: 6, name: 'tomato paste', denom: 'oz' },
      {
        qty: 6,
        name: 'canned mushrooms',
        denom: 'oz'
      },
      { qty: 1/2, name: 'yellow bell pepper', denom: 'whole' },
      { qty: 1/2, name: 'orange bell pepper', denom: 'whole' },
      { qty: 3, name: 'chili powder', denom: 'tbsp' },
      { qty: 2, name: 'garlic powder', denom: 'tbsp' },
      { qty: 2, name: 'salt', denom: 'pinches' }
    ]
    }
]

module.exports = recipes