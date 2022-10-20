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
            {name: 'garlic', qty: 4, denom: 'cloves'},
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
            {name: 'canned black beans', qty: 1/2, denom: 'cup'},
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
            {name: 'canned black or pinto beans', qty: 1, denom: 'cup'},
            {name: 'canned chipotle pepper', qty: 1, denom: 'whole'},
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
            {name: 'garlic', qty: 3, denom: 'cloves'},
            {name: 'canned diced tomatoes', qty: 28, denom: 'oz'},
            {name: 'canned white beans', qty: 3/2, denom: 'cup'},
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
            {name: 'garlic', qty: 3, denom: 'cloves'},
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
          { qty: 1, name: 'garlic', denom: 'cloves' },
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
          { qty: 2, name: 'pie crust', denom: '(9 inch)' }
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
            qty: 22,
            name: 'condensed cream of mushroom soup',
            denom: 'oz'
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
          { qty: 1, name: 'garlic', denom: 'cloves' },
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
            qty: 10.75,
            name: 'condensed cream of mushroom soup',
            denom: 'oz '
          },
          {
            qty: 10.75,
            name: 'condensed cream of chicken soup',
            denom: 'oz '
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
          { qty: 15, name: 'canned kidney beans', denom: 'oz' },
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
            name: 'canned kidney beans',
            denom: 'oz'
          },
          {
            qty: 15,
            name: 'canned garbanzo beans',
            denom: 'oz'
          },
          { qty: 15, name: 'canned black beans', denom: 'oz' },
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
          { qty: 40.5, name: 'coconut milk', denom: 'oz' },
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
            name: 'canned black beans',
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
          { qty: 58, name: 'chicken broth', denom: 'oz' },
          { qty: 14.5, name: 'vegetable broth', denom: 'oz' },
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
        name: 'canned black beans',
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
      { qty: 1, name: 'garlic', denom: 'cloves' },
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
      { qty: 1, name: 'garlic', denom: 'cloves' },
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
        qty: 21,
        name: 'condensed cream of chicken soup',
        denom: 'oz'
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
        name: 'canned chili beans',
        denom: 'oz'
      },
      {
        qty: 15,
        name: 'canned kidney beans',
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
        name: 'canned diced tomatoes',
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
        name: 'canned garbanzo beans',
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
      { qty: 10.5, name: 'beef consomme', denom: 'oz' },
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
      { qty: 3.5, name: 'canned black beans', denom: 'cup' },
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
        qty: 15,
        name: 'canned black beans',
        denom: 'oz'
      },
      {
        qty: 14.5,
        name: 'canned fire-roasted diced tomatoes',
        denom: 'oz'
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
      { qty: 15, name: 'canned corn', denom: 'oz' },
      {
        qty: 15,
        name: 'canned black beans',
        denom: 'oz'
      },
      {
        qty: 10,
        name: 'canned diced tomatoes',
        denom: 'oz'
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
      { qty: 1, name: 'garlic', denom: 'cloves' },
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
      { qty: 28, name: 'canned diced tomatoes', denom: 'oz' },
      { qty: 3, name: 'water', denom: 'cup' },
      {
        qty: 15.5,
        name: 'canned kidney beans',
        denom: 'oz'
      },
      { qty: 15.5, name: 'canned red beans', denom: 'oz' },
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
    },
    {
      url: "https://www.delish.com/cooking/recipe-ideas/recipes/a45774/chicken-bacon-and-spinach-spaghetti-recipe/",
      img: "https://hips.hearstapps.com/del.h-cdn.co/assets/16/04/1453934758-chicken-bacon-spaghetti-delish.jpg?resize=480:*",
      name: "Hearty Tuscan Chicken Pasta",
      cuisine: ['pasta'],
      appliances: ['stovetop'],
      restrictions: [],
      ingredients: [
        {
          qty: 12,
          denom: "oz.",
          name: "spaghetti or angel hair"
        },
        {
          qty: 1,
          denom: "tbsp.",
          name: "extra-virgin olive oil"
        },
        {
          qty: 1.25,
          denom: "lb",
          name: "chicken breast"
        },
        {
          qty: 1,
          denom: "to taste",
          name: "salt"
        },
        {
          qty: 1,
          denom: "to taste",
          name: "pepper"
        },
        {
          qty: 6,
          denom: "slices",
          name: "bacon"
        },
        {
          qty: 2,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 2,
          denom: "cup",
          name: "diced tomatoes"
        },
        {
          qty: 3,
          denom: "cup",
          name: "spinach"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "heavy cream"
        },
        {
          qty: 1/3,
          denom: "cup",
          name: "parmesan"
        },
        {
          qty: 1,
          denom: "to taste",
          name: "fresh basil"
        }
      ],
      cookTime: 45,
      servings: 4
    },
    {
      "url": "https://www.delish.com/cooking/recipe-ideas/a35421563/baked-feta-pasta-tiktok/",
      img: "https://hips.hearstapps.com/hmg-prod/images/delish-210212-feta-pasta-007-ab-1613747029.jpg?crop=0.668xw:1.00xh;0.138xw,0&resize=480:*",
      name: "Baked Feta Pasta",
      cuisine: ['pasta'],
      appliances: ['oven'],
      restrictions: ['vegetarian'],
      ingredients: [
        {
          qty: 2,
          denom: "pint",
          name: "cherry tomatoes"
        },
        {
          qty: 1,
          denom: "whole",
          name: "shallot"
        },
        {
          qty: 3,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "extra-virgin olive oil"
        },
        {
          qty: 1,
          denom: "to taste",
          name: "salt"
        },
        {
          qty: 1,
          denom: "pinch",
          name: "red pepper flakes"
        },
        {
          qty: 8,
          denom: "oz",
          name: "feta"
        },
        {
          qty: 3,
          denom: "sprigs",
          name: "fresh thyme"
        },
        {
          qty: 10,
          denom: "oz",
          name: "pasta"
        },
        {
          qty: 1,
          denom: "whole",
          name: "lemon zest"
        },
        {
          qty: 1,
          denom: "to taste",
          name: "fresh basil"
        }
      ],
      cookTime: 45,
      servings: 3
    },
    {
      url: "https://www.myrecipes.com/recipe/instant-pot-baked-potato-soup",
      name: "Instant Pot Baked Potato Soup",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2021%2F01%2F19%2Fbaked-potato-soup-batch-21.jpg",
      cuisine: ['soup'],
      appliances: ['instant pot'],
      restrictions: ['nut-free'],
      servings: 4,
      cookTime: 50,
      ingredients: [
        {
          qty: 2,
          denom: "slice",
          name: "bacon"
        },
        {
          qty: 1,
          denom: "cup",
          name: "onion"
        },
        {
          qty: 2,
          denom: "lb",
          name: "russet potatoes"
        },
        {
          qty: 2,
          denom: "clove",
          name: "garlic"
        },
        {
          qty: 3,
          denom: "cups",
          name: "chicken broth"
        },
        {
          qty: 1/2,
          denom: "tsp",
          name: "salt"
        },
        {
          qty: 1/4,
          denom: "tsp",
          name: "pepper"
        },
        {
          qty: 4,
          denom: "oz",
          name: "cream cheese"
        },
        {
          qty: 2,
          denom: "oz",
          name: "cheddar cheese"
        },
        {
          qty: 1,
          denom: "to taste",
          name: "scallions"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/instant-pot-taco-soup",
      name: "Instant Pot Two-Minute Taco Soup",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2018%2F12%2F05%2Finstant-pot-taco-soup-dcms-large-2000.jpg",
      cuisine: ['soup','mexican'],
      appliances: ['instant pot'],
      restrictions: ['nut-free'],
      servings: 8,
      cookTime: 30,
      ingredients: [
        {
          qty: 1,
          denom: "tbsp",
          name: "canola oil"
        },
        {
          qty: 1.25,
          denom: "pounds",
          name: "ground beef"
        },
        {
          qty: 1,
          denom: "cup",
          name: "onion"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "flour"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "taco seasoning mix"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "ranch dressing mix"
        },
        {
          qty: 3,
          denom: "cups",
          name: "beef stock"
        },
        {
          qty: 1,
          denom: "cup",
          name: "frozen corn kernels"
        },
        {
          qty: 18,
          denom: "oz",
          name: "crushed tomatoes"
        },
        {
          qty: 16,
          denom: "oz",
          name: "can kidney chili beans"
        },
        {
          qty: 15,
          denom: "oz",
          name: "can black beans"
        },
        {
          qty: 4,
          denom: "oz",
          name: "cheddar cheese"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "sour cream"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "scallion"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/best-beefy-vegan-burgers",
      name: "The Best \"Beefy\" Vegan Burgers",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2016%2F08%2F12%2Fbest-beefy-vegan-burgers-mr_0-2000.jpg",
      cuisine: ['healthy'],
      appliances: ['stovetop','grill'],
      restrictions: ['vegan','vegetarian','lactose-free'],
      servings: 10,
      cookTime: 75,
      ingredients: [
        {
          qty: 2,
          denom: "cups",
          name: "walnuts"
        },
        {
          qty: 8,
          denom: "ounces",
          name: "portobello mushrooms"
        },
        {
          qty: 3,
          denom: "ounces",
          name: "vegan butter"
        },
        {
          qty: 2,
          denom: "cups",
          name: "cooked brown rice"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "uncooked regular rolled oats"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "red beet"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "vegan mayonnaise"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "soy sauce"
        },
        {
          qty: 2.5,
          denom: "teaspoons",
          name: "salt"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "pepper"
        },
        {
          qty: 4,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 10,
          denom: "whole",
          name: "hamburger buns"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/white-bean-jackfruit-chili",
      name: "White Bean and Jackfruit Chili",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2016%2F09%2F06%2Fwhitebeanjackfruitchili-mr-2000.jpg",
      cuisine: ['soup','healthy'],
      appliances: ['oven','stovetop'],
      restrictions: ['vegan','vegetarian','lactose-free','glutan-free'],
      servings: 6,
      cookTime: 35,
      ingredients: [
        {
          qty: 1,
          denom: "whole",
          name: "onion"
        },
        {
          qty: 2,
          denom: "whole",
          name: "serrano chiles"
        },
        {
          qty: 1,
          denom: "whole",
          name: "jalapeno pepper"
        },
        {
          qty: 5,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 4,
          denom: "cups",
          name: "vegetable broth"
        },
        {
          qty: 30,
          denom: "oz",
          name: "canned white beans"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "canola oil"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "cumin"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "oregano"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "coriander"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "paprika"
        },
        {
          qty: 30,
          denom: "oz",
          name: "canned jackfruit"
        },
        {
          qty: 1,
          denom: "whole",
          name: "bay leaf"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/vegan-buffalo-tofu-tot-skillet",
      name: "Vegan Buffalo Tofu Tot Skillet",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2016%2F08%2F16%2Fbuffalotofutotskillet.jpg",
      cuisine: ['other','healthy'],
      appliances: ['stovetop'],
      restrictions: ['vegan','vegetarian','lactose-free'],
      servings: 4,
      cookTime: 45,
      ingredients: [
        {
          qty: 32,
          denom: "oz",
          name: "tater tots"
        },
        {
          qty: 28,
          denom: "oz",
          name: "extra firm tofu"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "olive oil"
        },
        {
          qty: 3/4,
          denom: "cup",
          name: "non-dairy cheddar cheese"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "green onion"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "celery"
        },
        {
          qty: 3/4,
          denom: "cup",
          name: "hot pepper sauce"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "vegan margarine"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "garlic powder"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "agave nectar"
        },
        {
          qty: 1/3,
          denom: "cup",
          name: "apple cider vinegar"
        },
        {
          qty: 2,
          denom: "whole",
          name: "avocado"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "cucumber"
        },
        {
          qty: 3/4,
          denom: "cup",
          name: "unsweetened non-dairy milk"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "olive oil"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "apple cider vinegar"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "lemon juice"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "chives"
        },
        {
          qty: 14,
          denom: "cup",
          name: "fresh dill"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "fresh parsley"
        },
        {
          qty: 1,
          denom: "clove",
          name: "garlic"
        },
        {
          qty: 1/2,
          denom: "tablespoon",
          name: "onion powder"
        },
        {
          qty: 1,
          denom: "tsp",
          name: "celery salt"
        },
        {
          qty: 1,
          denom: "to taste",
          name: "pepper"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/instant-pot-chicken-and-rice",
      name: "Instant Pot Chicken and Rice",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2021%2F01%2F21%2Finstant-pot-chicken-and-rice-batch-21.jpg",
      cuisine: ['american','other'],
      appliances: ['instant pot'],
      restrictions: ['healthy','lactose-free'],
      servings: 4,
      cookTime: 40,
      ingredients: [
        {
          qty: 2,
          denom: "tsp",
          name: "rosemary"
        },
        {
          qty: 1.5,
          denom: "tsp",
          name: "thyme"
        },
        {
          qty: 1,
          denom: "tsp",
          name: "salt"
        },
        {
          qty: 3/4,
          denom: "tsp",
          name: "garlic powder"
        },
        {
          qty: 3/4,
          denom: "tsp",
          name: "paprika"
        },
        {
          qty: 3/4,
          denom: "tsp",
          name: "pepper"
        },
        {
          qty: 1/2,
          denom: "tsp",
          name: "dry mustard"
        },
        {
          qty: 1/2,
          denom: "tsp",
          name: "oregano"
        },
        {
          qty: 2.5,
          denom: "lbs",
          name: "bone-in chicken thighs"
        },
        {
          qty: 1,
          denom: "tbsp",
          name: "olive oil"
        },
        {
          qty: 1,
          denom: "cup",
          name: "white rice"
        },
        {
          qty: 1.5,
          denom: "cups",
          name: "chicken broth"
        },
        {
          qty: 1,
          denom: "tsp",
          name: "lemon zest"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/creamy-chicken-wild-rice-soup",
      name: "Creamy Chicken and Wild Rice Soup",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2017%2F08%2F21%2Fcreamy20chicken20and20wild20rice20soup.jpeg",
      cuisine: ['soup'],
      appliances: ['stovetop'],
      restrictions: ['nut-free'],
      servings: 6,
      cookTime: 40,
      ingredients: [
        {
          qty: 5,
          denom: "slices",
          name: "bacon"
        },
        {
          qty: 1,
          denom: "cup",
          name: "onion"
        },
        {
          qty: 1,
          denom: "cup",
          name: "carrot"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "celery"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "fresh thyme"
        },
        {
          qty: 8,
          denom: "oz",
          name: "cremini mushrooms"
        },
        {
          qty: 4,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 4,
          denom: "cups",
          name: "chicken stock"
        },
        {
          qty: 1,
          denom: "cup",
          name: "water"
        },
        {
          qty: 4,
          denom: "cups",
          name: "kale"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "pepper"
        },
        {
          qty: 6,
          denom: "ounces",
          name: "rotisserie chicken breast"
        },
        {
          qty: 8,
          denom: "oz",
          name: "precooked wild rice"
        },
        {
          qty: 1,
          denom: "cup",
          name: "half-and-half"
        },
        {
          qty: 1/3,
          denom: "cup",
          name: "flour"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/easy-chicken-adobo",
      name: "Easy Chicken Adobo",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2007%2F02%2F13%2Feasy_chicken_adobo_139-2000.jpg",
      cuisine: ['mexican'],
      appliances: ['stovetop'],
      restrictions: ['nut-free','lactose-free'],
      servings: 4,
      cookTime: 45,
      ingredients: [
        {
          qty: 1,
          denom: "tablespoon",
          name: "vegetable oil"
        },
        {
          qty: 6,
          denom: "count",
          name: "bone-in chicken thighs"
        },
        {
          qty: 3,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 2/3,
          denom: "cup",
          name: "apple cider vinegar"
        },
        {
          qty: 1/3,
          denom: "cup",
          name: "soy sauce"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "whole black peppercorns"
        },
        {
          qty: 1,
          denom: "whole",
          name: "bay leaf"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/arroz-con-pollo-3",
      name: "Arroz Con Pollo",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2019%2F12%2F06%2Farroz-con-pollo-ay.jpg",
      cuisine: ['mexican'],
      appliances: ['oven','stovetop'],
      restrictions: ['nut-free','lactose-free'],
      servings: 12,
      cookTime: 95,
      ingredients: [
        {
          qty: 2,
          denom: "whole",
          name: "chickens"
        },
        {
          qty: 1,
          denom: "to taste",
          name: "salt"
        },
        {
          qty: 1,
          denom: "to taste",
          name: "pepper"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "unsalted butter"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "vegetable oil"
        },
        {
          qty: 2,
          denom: "whole",
          name: "onions"
        },
        {
          qty: 2,
          denom: "stalk",
          name: "celery"
        },
        {
          qty: 2,
          denom: "whole",
          name: "carrots"
        },
        {
          qty: 1,
          denom: "whole",
          name: "green bell pepper"
        },
        {
          qty: 1,
          denom: "whole",
          name: "red bell pepper"
        },
        {
          qty: 2,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 14.5,
          denom: "oz",
          name: "canned diced tomatoes"
        },
        {
          qty: 3,
          denom: "cups",
          name: "long-grain rice"
        },
        {
          qty: 3,
          denom: "cups",
          name: "chicken broth"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "fresh parsley"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/blackened-chicken-dirty-rice",
      name: "Blackened Chicken with Dirty Rice",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2012%2F02%2F22%2Fblackened-chicken-dirty-rice-ck-x.jpg",
      cuisine: ['other'],
      appliances: ['stovetop'],
      restrictions: ['nut-free','lactose-free'],
      servings: 4,
      cookTime: 29,
      ingredients: [
        {
          qty: 1,
          denom: "tablespoon",
          name: "olive oil"
        },
        {
          qty: 1/3,
          denom: "cup",
          name: "onion"
        },
        {
          qty: 1/3,
          denom: "cup",
          name: "celery"
        },
        {
          qty: 1/3,
          denom: "cup",
          name: "green bell pepper"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "fresh thyme"
        },
        {
          qty: 1,
          denom: "cup",
          name: "white rice"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "paprika"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "ground red pepper"
        },
        {
          qty: 3,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 2,
          denom: "cups",
          name: "water"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 1,
          denom: "spray",
          name: "cooking spray"
        },
        {
          qty: 4,
          denom: "ounces",
          name: "chicken livers"
        },
        {
          qty: 2,
          denom: "stalk",
          name: "green onions"
        },
        {
          qty: 1/8,
          denom: "teaspoon",
          name: "hot pepper sauce"
        },
        {
          qty: 1.5,
          denom: "teaspoons",
          name: "cumin"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "paprika"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "ground coriander"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "pepper"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "ground red pepper"
        },
        {
          qty: 24,
          denom: "oz",
          name: "chicken breast"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "olive oil"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "chicken broth"
        },
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/chicken-broccoli-brown-rice-casserole",
      name: "Chicken, Broccoli, and Brown Rice Casserole",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2015%2F01%2F27%2Fchicken-broccoli-brown-rice-casserole-ck.jpg",
      cuisine: ['american','other'],
      appliances: ['oven','stovetop'],
      restrictions: ['nut-pre'],
      servings: 4,
      cookTime: 30,
      ingredients: [
        {
          qty: 7,
          denom: "oz",
          name: "boil-in-bag brown rice"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "olive oil"
        },
        {
          qty: 1,
          denom: "whole",
          name: "onion"
        },
        {
          qty: 8,
          denom: "ounces",
          name: "presliced button mushrooms"
        },
        {
          qty: 8,
          denom: "ounces",
          name: "chicken thighs"
        },
        {
          qty: 3/4,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "pepper"
        },
        {
          qty: 12,
          denom: "oz",
          name: "microwave-in-bag broccoli"
        },
        {
          qty: 1.5,
          denom: "cups",
          name: "milk"
        },
        {
          qty: 3,
          denom: "tablespoons",
          name: "flour"
        },
        {
          qty: 3,
          denom: "ounces",
          name: "cheddar cheese"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/creamy-chicken-tomato-skillet",
      name: "Creamy Chicken-Tomato Skillet",
      img: "https://www.myrecipes.com/recipe/creamy-chicken-tomato-skillet",
      cuisine: ['other'],
      appliances: ['stovetop'],
      restrictions: ['nut-free'],
      servings: 4,
      cookTime: 20,
      ingredients: [
        {
          qty: 1,
          denom: "tablespoon",
          name: "olive oil"
        },
        {
          qty: 1,
          denom: "pound",
          name: "chicken thighs"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "pepper"
        },
        {
          qty: 1,
          denom: "cup",
          name: "grape tomatoes"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "onion"
        },
        {
          qty: 1,
          denom: "clove",
          name: "garlic"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "rosemary"
        },
        {
          qty: 1.5,
          denom: "cups",
          name: "chicken stock"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "flour"
        },
        {
          qty: 9,
          denom: "oz",
          name: "microwavable brown rice"
        },
        {
          qty: 3,
          denom: "cups",
          name: "spinach"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "lemon zest"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "lemon juice"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/lemon-chicken-teriyaki-rice-bowl",
      name: "Lemon Chicken Teriyaki Rice Bowl",
      img: "https://www.myrecipes.com/recipe/lemon-chicken-teriyaki-rice-bowl",
      cuisine: ['asian'],
      appliances: ['stovetop'],
      restrictions: ['lactose-free'],
      servings: 4,
      cookTime: 48,
      ingredients: [
        {
          qty: 1,
          denom: "cup",
          name: "brown rice"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "soy sauce"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "cornstarch"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "brown sugar"
        },
        {
          qty: 4,
          denom: "teaspoons",
          name: "mirin"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "lemon juice"
        },
        {
          qty: 18,
          denom: "oz",
          name: "chicken breast"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "pepper"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "canola oil"
        },
        {
          qty: 1,
          denom: "pound",
          name: "broccolini"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/millet-amaranth-buddha-bowls",
      name: "Millet Amaranth Buddha Bowls",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2015%2F12%2F16%2Fmillet-amaranth-buddha-bowls-su.jpg",
      cuisine: ['asian','fusion','healthy'],
      appliances: ['oven','stovetop'],
      restrictions: ['vegan','vegetarian','lactose-free'],
      servings: 4,
      cookTime: 60,
      ingredients: [
        {
          qty: 3/4,
          denom: "cup",
          name: "hulled millet"
        },
        {
          qty: 3/4,
          denom: "cup",
          name: "whole-grain amaranth"
        },
        {
          qty: 3,
          denom: "cups",
          name: "vegetable broth"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "curry powder"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "olive oil"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 8,
          denom: "ounces",
          name: "extra firm tofu"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "soy sauce"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "canola oil"
        },
        {
          qty: 1,
          denom: "bunch",
          name: "kale"
        },
        {
          qty: 8,
          denom: "ounces",
          name: "broccoli"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "sesame oil"
        },
        {
          qty: 3/4,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "sesame seeds"
        },
        {
          qty: 1,
          denom: "whole",
          name: "avocado"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "paprika"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "pine nuts"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "basil"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "basil sprigs"
        },
        {
          qty: 3/4,
          denom: "cup",
          name: "tahini"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "white miso"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "sesame oil"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "cider vinegar"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "chives"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/vegan-corndogs",
      name: "Vegan Corndogs",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2019%2F04%2F03%2FMRTrending_0326190439205-2000.jpg",
      cuisine: ['american'],
      appliances: ['stovetop'],
      restrictions: ['vegan','vegetarian'],
      servings: 8,
      cookTime: 75,
      ingredients: [
        {
          qty: 6,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 3,
          denom: "whole",
          name: "carrot"
        },
        {
          qty: 6,
          denom: "oz",
          name: "portobello mushrooms"
        },
        {
          qty: 5,
          denom: "oz",
          name: "red beet"
        },
        {
          qty: 1/2,
          denom: "whole",
          name: "onion"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "salt"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "pepper"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "nutritional yeast"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "soy sauce"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "paprika"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "lemon juice"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "cumin"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "brown or red miso"
        },
        {
          qty: 1.25,
          denom: "cups",
          name: "vital wheat gluten"
        },
        {
          qty: 1,
          denom: "count",
          name: "Oil for frying"
        },
        {
          qty: 8,
          denom: "count",
          name: "skewers"
        },
        {
          qty: 1.5,
          denom: "cups",
          name: "flour"
        },
        {
          qty: 1.5,
          denom: "cups",
          name: "cornmeal"
        },
        {
          qty: 6,
          denom: "tablespoons",
          name: "sugar"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "baking powder"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 2,
          denom: "cups",
          name: "plant-based milk"
        },
        {
          qty: 1,
          denom: "to taste",
          name: "ketchup"
        },
        {
          qty: 1,
          denom: "to taste",
          name: "mustard"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/quinoa-brown-rice-vegetables-tahini",
      name: "Quinoa and Brown Rice Bowl with Vegetables and Tahini",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2013%2F05%2F16%2Fquinoa-brown-rice-bowl-vegetables-tahini-fw-x.jpg",
      cuisine: ['asian','fusion','healthy'],
      appliances: ['stovetop'],
      restrictions: ['vegan','vegetarian','lactose-free'],
      servings: 6,
      cookTime: 60,
      ingredients: [
        {
          qty: 1,
          denom: "cup",
          name: "brown rice"
        },
        {
          qty: 1,
          denom: "cup",
          name: "red quinoa"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "extra-virgin olive oil"
        },
        {
          qty: 1,
          denom: "whole",
          name: "onion"
        },
        {
          qty: 1,
          denom: "whole",
          name: "carrot"
        },
        {
          qty: 1/4,
          denom: "pound",
          name: "shiitake mushrooms"
        },
        {
          qty: 1,
          denom: "whole",
          name: "zucchini"
        },
        {
          qty: 1,
          denom: "to taste",
          name: "salt"
        },
        {
          qty: 1,
          denom: "head",
          name: "broccoli"
        },
        {
          qty: 1,
          denom: "bunch",
          name: "kale"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "tahini"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "lemon juice"
        },
        {
          qty: 2,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "water"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "crushed red pepper"
        },
        {
          qty: 1,
          denom: "whole",
          name: "avocado"
        },
        {
          qty: 1,
          denom: "cup",
          name: "mung bean sprouts"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/spicy-asparagus-tempeh-stir-fry",
      name: "Spicy Asparagus-Tempeh Stir-Fry",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2008%2F04%2F16%2Fspicy-asparagus-oh-1733510-x.jpg",
      cuisine: ['asian','fusion','healthy'],
      appliances: ['stovetop'],
      restrictions: ['vegan','vegetarian','lactose-free'],
      servings: 4,
      cookTime: 22,
      ingredients: [
        {
          qty: 3/4,
          denom: "pound",
          name: "asparagus"
        },
        {
          qty: 3/4,
          denom: "cup",
          name: "vegetable broth"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "soy sauce"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "cornstarch"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "sesame oil"
        },
        {
          qty: 8,
          denom: "oz",
          name: "multigrain tempeh"
        },
        {
          qty: 4,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "crushed red pepper"
        },
        {
          qty: 6,
          denom: "oz",
          name: "shiitake mushrooms"
        },
        {
          qty: 3,
          denom: "cups",
          name: "instant brown rice"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/peanut-broccoli-stir-fry",
      name: "Peanut-Broccoli Stir-fry",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2007%2F12%2F12%2Fbroccoli-stirfry-sl-1694189-x.jpg",
      cuisine: ['asian','fusion','healthy'],
      appliances: ['stovetop'],
      restrictions: ['vegan','vegetarian','nut-free'],
      servings: 6,
      cookTime: 95,
      ingredients: [
        {
          qty: 16,
          denom: "oz",
          name: "firm tofu"
        },
        {
          qty: 2,
          denom: "cups",
          name: "brown rice"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 1.5,
          denom: "cups",
          name: "vegetable broth"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "brown sugar"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "lime juice"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "sweet chili sauce"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "creamy peanut butter"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "soy sauce"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "ginger"
        },
        {
          qty: 3/4,
          denom: "teaspoon",
          name: "cornstarch"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "vegetable oil"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "sesame oil"
        },
        {
          qty: 2,
          denom: "cups",
          name: "broccoli"
        },
        {
          qty: 1,
          denom: "cup",
          name: "carrot"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "chopped peanuts"
        },
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/curried-red-kidney-beans-cauliflower-rajma-masala",
      name: "Curried Red Kidney Beans and Cauliflower (Rajma Masala)",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2007%2F01%2F09%2Fkidney-beans-su-1575588-x.jpg",
      cuisine: ['asian','healthy'],
      appliances: ['stovetop'],
      restrictions: ['vegan','vegetarian','lactose-free'],
      servings: 6,
      cookTime: 60,
      ingredients: [
        {
          qty: 3,
          denom: "tablespoons",
          name: "vegetable oil"
        },
        {
          qty: 1,
          denom: "whole",
          name: "onion"
        },
        {
          qty: 1,
          denom: "piece",
          name: "cinnamon stick"
        },
        {
          qty: 1,
          denom: "whole",
          name: "bay leaf"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "garlic"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "ginger"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "fennel"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "cumin seeds"
        },
        {
          qty: 3,
          denom: "count",
          name: "green cardamom pods"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "cayenne"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "ground coriander"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "turmeric"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "garam masala"
        },
        {
          qty: 14.5,
          denom: "oz",
          name: "canned whole peeled tomatoes"
        },
        {
          qty: 1,
          denom: "whole",
          name: "serrano chile"
        },
        {
          qty: 1,
          denom: "tsp",
          name: "salt"
        },
        {
          qty: 56,
          denom: "oz",
          name: "canned red kidney beans"
        },
        {
          qty: 1/2,
          denom: "head",
          name: "cauliflower"
        },
        {
          qty: 1,
          denom: "tbsp",
          name: "lemon juice"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "cilantro"
        },
        {
          qty: 6,
          denom: "cups",
          name: "cooked brown rice"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/mixed-vegetable-farro-soup",
      name: "Mixed Vegetable and Farro Soup",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2013%2F10%2F09%2Fmixed-vegetable-farro-soup-x.jpg",
      cuisine: ['soup','healthy'],
      appliances: ['stovetop'],
      restrictions: ['vegan','vegetarian','nut-free','lactose-free'],
      servings: 6,
      cookTime: 165,
      ingredients: [
        {
          qty: 3,
          denom: "tablespoons",
          name: "extra-virgin olive oil"
        },
        {
          qty: 2,
          denom: "stalks",
          name: "celery"
        },
        {
          qty: 1,
          denom: "whole",
          name: "onion"
        },
        {
          qty: 1,
          denom: "whole",
          name: "leek"
        },
        {
          qty: 1,
          denom: "cup",
          name: "farro"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "tomato paste"
        },
        {
          qty: 2,
          denom: "quarts",
          name: "water"
        },
        {
          qty: 15,
          denom: "oz",
          name: "canned pinto beans"
        },
        {
          qty: 2,
          denom: "whole",
          name: "carrots"
        },
        {
          qty: 1.5,
          denom: "cups",
          name: "frozen peas"
        },
        {
          qty: 1,
          denom: "to taste",
          name: "pepper"
        },
        {
          qty: 1,
          denom: "to taste",
          name: "salt"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "fresh basil"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/chilled-corn-soup-0",
      name: "Chilled Corn Soup",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2011%2F08%2F10%2Fchilled-corn-soup-ck-x.jpg",
      cuisine: ['soup'],
      appliances: ['stovetop'],
      restrictions: ['vegan','vegetarian','nut-free','lactose-free'],
      servings: 6,
      cookTime: 218,
      ingredients: [
        {
          qty: 4,
          denom: "ears",
          name: "corn"
        },
        {
          qty: 4,
          denom: "tablespoons",
          name: "canola oil"
        },
        {
          qty: 3/4,
          denom: "cup",
          name: "onion"
        },
        {
          qty: 1,
          denom: "bunch",
          name: "fresh thyme"
        },
        {
          qty: 3/4,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 1,
          denom: "clove",
          name: "garlic"
        },
        {
          qty: 3,
          denom: "cups",
          name: "water"
        },
        {
          qty: 1/2,
          denom: "cups",
          name: "avocado"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "radish"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "cilantro"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "lime juice"
        },
        {
          qty: 1/8,
          denom: "teaspoon",
          name: "ground red pepper"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/parmesan-crusted-baked-fish",
      name: "Parmesan Crusted Baked Fish",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2015%2F09%2F01%2FParmesan_Crusted_Baked_Fish_141.jpg",
      cuisine: ['american','other'],
      appliances: ['oven'],
      restrictions: ['nut-free','pescatarian','lactose-free'],
      servings: 4,
      cookTime: 22,
      ingredients: [
        {
          qty: 3/4,
          denom: "cup",
          name: "panko breadcrumbs"
        },
        {
          qty: 3/4,
          denom: "cup",
          name: "parmesan cheese"
        },
        {
          qty: 3,
          denom: "tablespoons",
          name: "unsalted butter"
        },
        {
          qty: 3,
          denom: "tablespoons",
          name: "mayonnaise"
        },
        {
          qty: 3,
          denom: "stalks",
          name: "green onions"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "worchestershire sauce"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "hot pepper sauce"
        },
        {
          qty: 1.5,
          denom: "tablespoons",
          name: "lemon juice"
        },
        {
          qty: 1,
          denom: "to taste",
          name: "salt"
        },
        {
          qty: 1,
          denom: "to taste",
          name: "pepper"
        },
        {
          qty: 24,
          denom: "oz",
          name: "white fish fillet"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "fresh parsely"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/pacific-northwest-smoked-salmon-tacos",
      name: "Pacific Northwest Smoked Salmon Tacos",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2017%2F02%2F02%2Fpacific-northwest-smoked-salmon.jpg",
      cuisine: ['mexican','fusion','healthy'],
      appliances: ['stovetop'],
      restrictions: ['pescatarian','nut-free'],
      servings: 8,
      cookTime: 15,
      ingredients: [
        {
          qty: 8,
          denom: "ounces",
          name: "cream cheese"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "fresh dill"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "lemon zest"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "pepper"
        },
        {
          qty: 16,
          denom: "count",
          name: "flour tortillas"
        },
        {
          qty: 1,
          denom: "pound",
          name: "hot smoked salmon"
        },
        {
          qty: 8,
          denom: "ounces",
          name: "cucumber"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "shallot"
        },
        {
          qty: 16,
          denom: "teaspoons",
          name: "salmon roe"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "mint leaves"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/everything-bagel-roasted-salmon",
      name: "Everything Bagel Roasted Salmon",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2019%2F01%2F03%2Feverything-bagel-salmon-dcms-large-2000.jpg",
      cuisine: ['other','healthy'],
      appliances: ['oven'],
      restrictions: ['pescatarian','lactose-free','glutan-free'],
      servings: 4,
      cookTime: 15,
      ingredients: [
        {
          qty: 20,
          denom: "oz",
          name: "salmon fillet"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "honey"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "dijon mustard"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "everything bagel seasoning"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/tuna-melt-2",
      name: "Tuna Melt",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2018%2F06%2F25%2Ftuna-melt-dcms-large-image-2000.jpg",
      cuisine: ['other','american'],
      appliances: ['stovetop'],
      restrictions: ['pescatarian'],
      servings: 2,
      cookTime: 15,
      ingredients: [
        {
          qty: 1/4,
          denom: "cup",
          name: "mayonnaise"
        },
        {
          qty: 3,
          denom: "tablespoons",
          name: "red onion"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "fresh dill"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "pickled banana peppers"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "capers"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "dijon mustard"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "lemon juice"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "apple cider vinegar"
        },
        {
          qty: 1/8,
          denom: "teaspoon",
          name: "pepper"
        },
        {
          qty: 10,
          denom: "oz",
          name: "canned tun"
        },
        {
          qty: 1.5,
          denom: "tablespoons",
          name: "unsalted butter"
        },
        {
          qty: 4,
          denom: "slices",
          name: "sourdough bread"
        },
        {
          qty: 8,
          denom: "slice",
          name: "pickle chips"
        },
        {
          qty: 4,
          denom: "slice",
          name: "swiss cheese"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/seafood-cataplana",
      name: "Seafood Cataplana",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F06%2F16%2Fseafood-cataplana-cl-x.jpg",
      cuisine: ['mediterranean'],
      appliances: ['stovetop'],
      restrictions: ['nut-free','lactose-free','glutan-free'],
      servings: 2,
      cookTime: 32,
      ingredients: [
        {
          qty: 1,
          denom: "tablespoon",
          name: "olive oil"
        },
        {
          qty: 6,
          denom: "oz",
          name: "chorizo sausage"
        },
        {
          qty: 1/2,
          denom: "whole",
          name: "onione"
        },
        {
          qty: 2,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 1,
          denom: "whole",
          name: "bay leaf"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "paprika"
        },
        {
          qty: 1/4,
          denom: "tsp",
          name: "salt"
        },
        {
          qty: 1/8,
          denom: "teaspoon",
          name: "crushed red pepper"
        },
        {
          qty: 14,
          denom: "oz",
          name: "canned crushed tomatoes"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "white wine"
        },
        {
          qty: 18,
          denom: "count",
          name: "clams"
        },
        {
          qty: 1/2,
          denom: "pound",
          name: "raw shrimp"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "fresh parsley"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/instant-pot-gumbo",
      name: "Instant Pot Gumbo",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2018%2F12%2F05%2Finstant-pot-gumbo-dcms-large-2000.jpg",
      cuisine: ['soup','american'],
      appliances: ['instant pot'],
      restrictions: ['lactose-free','nut-free'],
      servings: 6,
      cookTime: 60,
      ingredients: [
        {
          qty: 1/4,
          denom: "cup",
          name: "canola oil"
        },
        {
          qty: 5,
          denom: "tablespoons",
          name: "flour"
        },
        {
          qty: 1,
          denom: "cup",
          name: "onion"
        },
        {
          qty: 1,
          denom: "cup",
          name: "green bell pepper"
        },
        {
          qty: 1,
          denom: "cup",
          name: "celery"
        },
        {
          qty: 3,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 12,
          denom: "ounces",
          name: "chicken thighs"
        },
        {
          qty: 6,
          denom: "ounces",
          name: "andouille sausage"
        },
        {
          qty: 3,
          denom: "cups",
          name: "chicken stock"
        },
        {
          qty: 2,
          denom: "cups",
          name: "frozen okra"
        },
        {
          qty: 14.5,
          denom: "oz",
          name: "canned diced tomatoes"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "fresh thyme"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "creole seasoning"
        },
        {
          qty: 1,
          denom: "whole",
          name: "bay leaf"
        },
        {
          qty: 3,
          denom: "cups",
          name: "cooked white rice"
        },
        {
          qty: 3,
          denom: "tablespoons",
          name: "scallions"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/simple-lemon-shrimp-and-prosciutto-pasta",
      name: "Simple Lemon, Shrimp, and Prosciutto Pasta",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2018%2F12%2F17%2Fsimple-lemon-shrimp-and-prosciutto-pasta-1808-p91-2000.jpg",
      cuisine: ['pasta','mediterranean'],
      appliances: ['stovetop'],
      restrictions: ['nut-free','lactose-free'],
      servings: 4,
      cookTime: 20,
      ingredients: [
        {
          qty: 8,
          denom: "ounces",
          name: "angel hair pasta"
        },
        {
          qty: 2,
          denom: "ounces",
          name: "prosciutto"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "extra-virgin olive oil"
        },
        {
          qty: 4,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 2,
          denom: "cups",
          name: "cherry tomatoes"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "fresh basil"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "crushed red pepper"
        },
        {
          qty: 12,
          denom: "ounces",
          name: "raw shrimp"
        },
        {
          qty: 2,
          denom: "whole",
          name: "lemon"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/spinach-quinoa-salad-shrimp",
      name: "Spinach and Quinoa Salad with Shrimp",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2015%2F01%2F26%2Fspinach-quinoa-salad-shrimp-ck.jpg",
      cuisine: ['salad','healthy'],
      appliances: ['stovetop'],
      restrictions: ['pescatarian'],
      servings: 2,
      cookTime: 15,
      ingredients: [
        {
          qty: 3/4,
          denom: "cup",
          name: "water"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "quinoa"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 1,
          denom: "spray",
          name: "cooking spray"
        },
        {
          qty: 1/2,
          denom: "pound",
          name: "shrimp"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "pepper"
        },
        {
          qty: 1.5,
          denom: "tablespoons",
          name: "extra-virgin olive oil"
        },
        {
          qty: 3,
          denom: "tablespoons",
          name: "lemon juice"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "fresh dill"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "honey"
        },
        {
          qty: 2,
          denom: "cups",
          name: "spinach"
        },
        {
          qty: 1,
          denom: "cup",
          name: "cucumber"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "radish"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "sugar snap peas"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/slow-cooker-chicken-posole",
      name: "Slow Cooker Chicken Posole",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2019%2F05%2F13%2Fslow-cooker-chicken-posole-2000.jpg",
      cuisine: ['soup','mexican'],
      appliances: ['slow cooker'],
      restrictions: ['lactose-free','nut-free'],
      servings: 6,
      cookTime: 370,
      ingredients: [
        {
          qty: 2,
          denom: "cups",
          name: "water"
        },
        {
          qty: 2,
          denom: "cups",
          name: "chicken stock"
        },
        {
          qty: 1,
          denom: "cup",
          name: "onion"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "poblano pepper"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "cumin"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "garlic"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "oregano"
        },
        {
          qty: 28,
          denom: "oz",
          name: "canned white hominy"
        },
        {
          qty: 20,
          denom: "oz",
          name: "bone-in chicken breasts"
        },
        {
          qty: 1/3,
          denom: "cup",
          name: "tomatillos"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "cilantro"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "lime juice"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 1/3,
          denom: "cup",
          name: "radishes"
        },
        {
          qty: 1.5,
          denom: "whole",
          name: "avocados"
        },
        {
          qty: 3,
          denom: "ounces",
          name: "tortilla strips"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "pepper"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/tex-mex-chicken-and-black-bean-soup",
      name: "Slow Cooker Tex-Mex Chicken and Black Bean Soup",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2019%2F02%2F26%2Ftex-mex-chicken-and-black-bean-soup-1811-p151-2000.jpg",
      cuisine: ['soup','mexican'],
      appliances: ['slow cooker'],
      restrictions: ['lactose-free','nut-free'],
      servings: 5,
      cookTime: 315,
      ingredients: [
        {
          qty: 1.25,
          denom: "pounds",
          name: "chicken thighs"
        },
        {
          qty: 4,
          denom: "cups",
          name: "chicken stock"
        },
        {
          qty: 15,
          denom: "oz",
          name: "canned black beans"
        },
        {
          qty: 14.5,
          denom: "oz",
          name: "canned diced tomatoes"
        },
        {
          qty: 1,
          denom: "cup",
          name: "onion"
        },
        {
          qty: 1,
          denom: "cup",
          name: "red bell pepper"
        },
        {
          qty: 1,
          denom: "cup",
          name: "corn kernels"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "canned chipotle chiles"
        },
        {
          qty: 2,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "chili powder"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "cumin"
        },
        {
          qty: 3/4,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "pepper"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "lime juice"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "plain greek yogurt"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "cilantro"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/slow-cooker-shrimp-boil",
      name: "Slow Cooker Shrimp Boil",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2018%2F05%2F22%2Fmr_0515180265_1-2000.jpg",
      cuisine: ['american','other'],
      appliances: ['slow cooker'],
      restrictions: ['nut-free','lactose-free'],
      servings: 4,
      cookTime: 300,
      ingredients: [
        {
          qty: 10,
          denom: "cups",
          name: "water"
        },
        {
          qty: 2,
          denom: "pounds",
          name: "red potato"
        },
        {
          qty: 2,
          denom: "whole",
          name: "onion"
        },
        {
          qty: 1,
          denom: "whole",
          name: "garlic bulb"
        },
        {
          qty: 1,
          denom: "whole",
          name: "lemon"
        },
        {
          qty: 3,
          denom: "oz",
          name: "crab boil-in-bag seasoning"
        },
        {
          qty: 3,
          denom: "teaspoons",
          name: "salt"
        },
        {
          qty: 10,
          denom: "ounces",
          name: "andouille sausage"
        },
        {
          qty: 6,
          denom: "ears",
          name: "corn"
        },
        {
          qty: 2,
          denom: "pounds",
          name: "raw shrimp"
        },
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/slow-cooker-ramen-bowls",
      name: "Slow Cooker Ramen Bowls",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2016%2F03%2F23%2F1605p44-slow-cooker-ramen-bowls-2000.jpg",
      cuisine: ['soup','asian'],
      appliances: ['slow cooker'],
      restrictions: ['lactose-free'],
      servings: 8,
      cookTime: 495,
      ingredients: [
        {
          qty: 2,
          denom: "tablespoons",
          name: "canola oil"
        },
        {
          qty: 2,
          denom: "lb",
          name: "pork shoulder roast"
        },
        {
          qty: 2,
          denom: "whole",
          name: "onion"
        },
        {
          qty: 4,
          denom: "cups",
          name: "chicken stock"
        },
        {
          qty: 4,
          denom: "cups",
          name: "water"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "soy sauce"
        },
        {
          qty: 12,
          denom: "ounces",
          name: "shiitake mushrooms"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "sesame oil"
        },
        {
          qty: 1,
          denom: "piece",
          name: "kombu"
        },
        {
          qty: 1,
          denom: "piece",
          name: "ginger"
        },
        {
          qty: 12,
          denom: "ounces",
          name: "fresh chinese noodles"
        },
        {
          qty: 8,
          denom: "whole",
          name: "eggs"
        },
        {
          qty: 3,
          denom: "stalk",
          name: "green onion"
        },
        {
          qty: 2,
          denom: "whole",
          name: "fresno chiles"
        },
        {
          qty: 4,
          denom: "teaspoons",
          name: "sesame seeds"
        },
        {
          qty: 1,
          denom: "sheet",
          name: "nori"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/slow-cooker-chicken-tikka-masala",
      name: "Slow Cooker Chicken Tikka Masala",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F08%2F13%2Fslow-cooker-chicken-tikka-masala-ck.jpg",
      cuisine: ['asian'],
      appliances: ['slow cooker'],
      restrictions: ['lactose-free'],
      servings: 4,
      cookTime: 490,
      ingredients: [
        {
          qty: 1,
          denom: "tablespoon",
          name: "extra-virgin olive oil"
        },
        {
          qty: 1,
          denom: "cup",
          name: "onion"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "ginger"
        },
        {
          qty: 6,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "tomato paste"
        },
        {
          qty: 29,
          denom: "oz",
          name: "canned diced tomatoes"
        },
        {
          qty: 1/3,
          denom: "cup",
          name: "water"
        },
        {
          qty: 3,
          denom: "tablespoons",
          name: "flour"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "garam masala"
        },
        {
          qty: 1.5,
          denom: "teaspoons",
          name: "paprika"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "curry powder"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "ground red pepper"
        },
        {
          qty: 24,
          denom: "oz",
          name: "bone-in chicken thighs"
        },
        {
          qty: 1,
          denom: "spray",
          name: "cooking spray"
        },
        {
          qty: 1,
          denom: "cup",
          name: "coconut milk"
        },
        {
          qty: 3,
          denom: "tablespoons",
          name: "cilantro"
        },
        {
          qty: 2,
          denom: "cups",
          name: "cooked brown rice"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "plain greek yogurt"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/slow-cooker-barbacoa-brisket",
      name: "Slow Cooker Barbacoa Brisket",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2016%2F01%2F20%2Fslow-cooker-barbacoa-brisket-ck.jpg",
      cuisine: ['mexican'],
      appliances: ['slow cooker'],
      restrictions: ['lactose-free','nut-free'],
      servings: 4,
      cookTime: 495,
      ingredients: [
        {
          qty: 1,
          denom: "tablespoon",
          name: "oregano"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "brown sugar"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "olive oil"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "chipotle chiles"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "adobo sauce"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "cumin"
        },
        {
          qty: 3/4,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "pepper"
        },
        {
          qty: 3,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 1,
          denom: "pound",
          name: "beef brisket"
        },
        {
          qty: 2,
          denom: "whole",
          name: "tomato"
        },
        {
          qty: 1/2,
          denom: "whole",
          name: "onion"
        },
        {
          qty: 1,
          denom: "whole",
          name: "red bell pepper"
        },
        {
          qty: 1,
          denom: "whole",
          name: "jalapeno pepper"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/slow-cooker-mississippi-pork-roast",
      name: "Slow Cooker Mississippi Pork Roast",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2020%2F02%2F07%2Fmississippi-pork-roast-dcms-large-2000.jpg",
      cuisine: ['american','other'],
      appliances: ['slow cooker'],
      restrictions: ['lactose-free','nut-free'],
      servings: 8,
      cookTime: 480,
      ingredients: [
        {
          qty: 3.5,
          denom: "lb",
          name: "boneless pork shoulder"
        },
        {
          qty: 1,
          denom: "oz",
          name: "ranch dressing mix"
        },
        {
          qty: 1,
          denom: "oz",
          name: "brown gravy mix"
        },
        {
          qty: 4,
          denom: "tablespoons",
          name: "unsalted butter"
        },
        {
          qty: 8,
          denom: "whole",
          name: "jarred pepperoncini salad peppers"
        },
        {
          qty: 2/3,
          denom: "cup",
          name: "cold water"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/lazy-lasagna-soup",
      name: "Slow Cooker Lazy Lasagna Soup",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2019%2F02%2F26%2Flazy-lasagna-soup-1811-p152-2000.jpg",
      cuisine: ['soup','pasta'],
      appliances: ['slow cooker'],
      restrictions: [],
      servings: 8,
      cookTime: 405,
      ingredients: [
        {
          qty: 1,
          denom: "pound",
          name: "ground chuck"
        },
        {
          qty: 8,
          denom: "ounces",
          name: "cremini mushrooms"
        },
        {
          qty: 1,
          denom: "cup",
          name: "onion"
        },
        {
          qty: 1,
          denom: "cup",
          name: "red bell pepper"
        },
        {
          qty: 2,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 4,
          denom: "cups",
          name: "chicken stock"
        },
        {
          qty: 14.5,
          denom: "oz",
          name: "canned crushed tomatoes"
        },
        {
          qty: 6,
          denom: "oz",
          name: "tomato paste"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "oregano"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "pepper"
        },
        {
          qty: 8,
          denom: "ounces",
          name: "lasagna noodles"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "half-and-half"
        },
        {
          qty: 4,
          denom: "ounces",
          name: "mozzarella cheese"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "fresh basil"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/easy-brunswick-stew-2",
      name: "Easy Brunswick Stew",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2012%2F10%2F09%2Feasy-brunswick-stew-10-1000.jpg",
      cuisine: ['soup'],
      appliances: ['slow cooker'],
      restrictions: ['nut-free','lactose-free'],
      servings: 9,
      cookTime: 480,
      ingredients: [
        {
          qty: 4,
          denom: "cups",
          name: "hash brown potatoes"
        },
        {
          qty: 7/3,
          denom: "cups",
          name: "onion"
        },
        {
          qty: 2,
          denom: "cups",
          name: "chicken broth"
        },
        {
          qty: 1.5,
          denom: "cups",
          name: "frozen lima beans"
        },
        {
          qty: 1.25,
          denom: "cups",
          name: "green bell pepper"
        },
        {
          qty: 1,
          denom: "cup",
          name: "frozen okra"
        },
        {
          qty: 1,
          denom: "cup",
          name: "barbecue sauce"
        },
        {
          qty: 1,
          denom: "cup",
          name: "cooked chicken breast"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "celery"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "pepper"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 3/4,
          denom: "pound",
          name: "pulled smoked pork"
        },
        {
          qty: 16,
          denom: "oz",
          name: "canned tomato sauce"
        },
        {
          qty: 15,
          denom: "oz",
          name: "canned corn"
        },
        {
          qty: 14.5,
          denom: "oz",
          name: "canned diced tomatoes"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/slow-cooker-sweet-and-sour-chicken",
      name: "Slow Cooker Sweet-and-Sour Chicken",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2018%2F12%2F18%2Fslow-cooker-sweet-and-sour-chicken-1808-p38-2000.jpg",
      cuisine: ['asian'],
      appliances: ['slow cooker'],
      restrictions: ['lactose-free'],
      servings: 6,
      cookTime: 480,
      ingredients: [
        {
          qty: 1.25,
          denom: "pounds",
          name: "chicken thighs"
        },
        {
          qty: 2,
          denom: "cups",
          name: "red bell pepper"
        },
        {
          qty: 1.5,
          denom: "cups",
          name: "chicken stock"
        },
        {
          qty: 1,
          denom: "cup",
          name: "onion"
        },
        {
          qty: 1,
          denom: "cup",
          name: "carrots"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "soy sauce"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "worcestershire sauce"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "chile paste"
        },
        {
          qty: 3/4,
          denom: "cup",
          name: "ketchup"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "pineapple juice"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "cornstarch"
        },
        {
          qty: 3,
          denom: "cups",
          name: "cooked brown rice"
        },
        {
          qty: 1.5,
          denom: "teaspoons",
          name: "sesame seeds"
        },
        {
          qty: 1.5,
          denom: "teaspoons",
          name: "scallions"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/instant-pot-chana-dal",
      name: "Instant Pot Chana Dal",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2019%2F09%2F27%2Finstantpotchanadal-2000.jpg",
      cuisine: ['asian','soup'],
      appliances: ['instant pot'],
      restrictions: ['vegetarian'],
      servings: 6,
      cookTime: 60,
      ingredients: [
        {
          qty: 2,
          denom: "cups",
          name: "split chickpeas"
        },
        {
          qty: 3,
          denom: "cups",
          name: "water"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "olive oil"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "cumin seeds"
        },
        {
          qty: 1,
          denom: "cup",
          name: "red onion"
        },
        {
          qty: 1,
          denom: "cup",
          name: "red bell pepper"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "ginger"
        },
        {
          qty: 4,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 2,
          denom: "small",
          name: "tomato"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "red curry powder"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "ground coriander"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "turmeric"
        },
        {
          qty: 1.25,
          denom: "teaspoons",
          name: "salt"
        },
        {
          qty: 4,
          denom: "cups",
          name: "vegetable stock"
        },
        {
          qty: 1,
          denom: "cup",
          name: "plain yogurt"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "cilantro"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "lime juice"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/instant-pot-butternut-squash-soup-chorizo",
      name: "Instant Pot Butternut Squash Soup with Chorizo",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2018%2F09%2F28%2Fmr_trending5591-2000.jpg",
      cuisine: ['soup','fusion'],
      appliances: ['instant pot'],
      restrictions: ['lactose-free'],
      servings: 6,
      cookTime: 40,
      ingredients: [
        {
          qty: 4,
          denom: "ounces",
          name: "chorizo"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "olive oil"
        },
        {
          qty: 1,
          denom: "cup",
          name: "onion"
        },
        {
          qty: 1.5,
          denom: "teaspoons",
          name: "salt"
        },
        {
          qty: 1,
          denom: "clove",
          name: "garlic"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "cumin"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "chili powder"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "pepper"
        },
        {
          qty: 3,
          denom: "lb",
          name: "butternut squash"
        },
        {
          qty: 4,
          denom: "cups",
          name: "chicken stock"
        },
        {
          qty: 6,
          denom: "tablespoons",
          name: "sour cream"
        },
        {
          qty: 6,
          denom: "tablespoons",
          name: "roasted pumpkin seed"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/cauliflower-soup-with-shiitake",
      name: "Instant Pot Cauliflower Soup with Shiitakes",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2017%2F06%2F29%2Fcauliflower-soup-shiitakes-ck-x.jpg",
      cuisine: ['soup'],
      appliances: ['instant pot'],
      restrictions: ['vegetarian', 'nut-free','glutan-free'],
      servings: 4,
      cookTime: 35,
      ingredients: [
        {
          qty: 4,
          denom: "teaspoons",
          name: "extra-virgin olive oil"
        },
        {
          qty: 3/4,
          denom: "cup",
          name: "leeks"
        },
        {
          qty: 3/8,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 4,
          denom: "cups",
          name: "cauliflower"
        },
        {
          qty: 1.5,
          denom: "cups",
          name: "chicken stock"
        },
        {
          qty: 3/4,
          denom: "cup",
          name: "water"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "fresh thyme"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "2% milk"
        },
        {
          qty: 1.5,
          denom: "teaspoons",
          name: "butter"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "white pepper"
        },
        {
          qty: 3.5,
          denom: "oz",
          name: "shiitake mushroom"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "worcestershire sauce"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "sherry vinegar"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "fresh parsley"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/instant-pot-spicy-black-bean-soup-chorizo",
      name: "Instant Pot Spicy Black Bean Soup with Chorizo",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2020%2F01%2F06%2Fspicy_black_bean_soup_with_chorizo-2000.jpg",
      cuisine: ['soup','mexican'],
      appliances: ['instant pot'],
      restrictions: ['glutan-free','nut-free'],
      servings: 8,
      cookTime: 490,
      ingredients: [
        {
          qty: 2,
          denom: "cups",
          name: "onion"
        },
        {
          qty: 1,
          denom: "cup",
          name: "green bell pepper"
        },
        {
          qty: 4,
          denom: "cup",
          name: "chicken broth"
        },
        {
          qty: 2,
          denom: "cup",
          name: "water"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "jalepeno pepper"
        },
        {
          qty: 2,
          denom: "tsp",
          name: "paprika"
        },
        {
          qty: 1,
          denom: "tsp",
          name: "cumin"
        },
        {
          qty: 1,
          denom: "tsp",
          name: "oregano"
        },
        {
          qty: 1/2,
          denom: "tsp",
          name: "salt"
        },
        {
          qty: 1/2,
          denom: "tsp",
          name: "hot pepper sauce"
        },
        {
          qty: 1,
          denom: "lb",
          name: "dried black beans"
        },
        {
          qty: 3,
          denom: "oz",
          name: "chorizo"
        },
        {
          qty: 4,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 1,
          denom: "whole",
          name: "bay leaf"
        },
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/instant-pot-vegetable-beef-soup",
      name: "Instant Pot Vegetable Beef Soup",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2017%2F06%2F29%2Fvegetable_beef_soup.jpg",
      cuisine: ['soup'],
      appliances: ['instant pot'],
      restrictions: ['lactose-free'],
      servings: 12,
      cookTime: 25,
      ingredients: [
        {
          qty: 1,
          denom: "cup",
          name: "dried navy beans"
        },
        {
          qty: 1,
          denom: "tbsp",
          name: "olive oil"
        },
        {
          qty: 1/2,
          denom: ";b",
          name: "chuck eye roast"
        },
        {
          qty: 1.5,
          denom: "cup",
          name: "onion"
        },
        {
          qty: 1.25,
          denom: "cup",
          name: "carrot"
        },
        {
          qty: 1,
          denom: "cup",
          name: "celery"
        },
        {
          qty: 4,
          denom: "cup",
          name: "beef broth"
        },
        {
          qty: 3,
          denom: "cup",
          name: "water"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "uncooked barley"
        },
        {
          qty: 1,
          denom: "tsp",
          name: "thyme"
        },
        {
          qty: 1/4,
          denom: "tsp",
          name: "salt"
        },
        {
          qty: 14.5,
          denom: "oz",
          name: "canned diced tomatoes"
        },
        {
          qty: 4,
          denom: "cup",
          name: "kale"
        },
        {
          qty: 1,
          denom: "tsp",
          name: "balsamic vinegar"
        },
        {
          qty: 6,
          denom: "tsp",
          name: "parmesan cheese"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/1-hour-spanish-chickpea-soup",
      name: "Instant Pot One-Hour Spanish Chickpea Soup",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2010%2F08%2F12%2Fchickpea-soup-ck-x.jpg",
      cuisine: ['soup','mexican'],
      appliances: ['instant pot'],
      restrictions: ['lactose-free','nut-free'],
      servings: 6,
      cookTime: 77,
      ingredients: [
        {
          qty: 1,
          denom: "tablespoon",
          name: "olive oil"
        },
        {
          qty: 1/5,
          denom: "cups",
          name: "onion"
        },
        {
          qty: 5,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 4,
          denom: "ounces",
          name: "chorizo"
        },
        {
          qty: 2.5,
          denom: "cups",
          name: "water"
        },
        {
          qty: 2.5,
          denom: "cups",
          name: "chicken broth"
        },
        {
          qty: 1.5,
          denom: "cups",
          name: "dried chickpeas"
        },
        {
          qty: 2,
          denom: "leaves",
          name: "bay leaves"
        },
        {
          qty: 6,
          denom: "cups",
          name: "escarole"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "sherry vinegar"
        },
        {
          qty: 3/8,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "pepper"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "crushed red pepper"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/instant-pot-dal-makhani",
      name: "Instant Pot Dal Makhani",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2019%2F04%2F09%2Fmyrecipes_ip_dal-makhani42-2000.jpg",
      cuisine: ['asian','soup'],
      appliances: ['instant pot'],
      restrictions: ['vegetarian'],
      servings: 4,
      cookTime: 75,
      ingredients: [
        {
          qty: 3/4,
          denom: "cup",
          name: "unsalted butter"
        },
        {
          qty: 1,
          denom: "cup",
          name: "onion"
        },
        {
          qty: 3,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "ginger"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "turmeric"
        },
        {
          qty: 1,
          denom: "whole",
          name: "jalepeno pepper"
        },
        {
          qty: 1,
          denom: "cup",
          name: "tomato"
        },
        {
          qty: 7,
          denom: "oz",
          name: "dried black lentils"
        },
        {
          qty: 1.5,
          denom: "teaspoons",
          name: "salt"
        },
        {
          qty: 3,
          denom: "cup",
          name: "water"
        },
        {
          qty: 1.5,
          denom: "teaspoons",
          name: "cumin seeds"
        },
        {
          qty: 3/4,
          denom: "teaspoon",
          name: "cayenne pepper"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "garam masala"
        },
        {
          qty: 1/8,
          denom: "teaspoon",
          name: "asafetida powder"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "heavy cream"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "lime juice"
        },
        {
          qty: 1,
          denom: "to taste",
          name: "cilantro"
        },
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/instant-pot-khao-soi",
      name: "Instant Pot Khao Soi",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2019%2F04%2F01%2Fmrtrending_khaosoi-2000.jpg",
      cuisine: ['soup','asian'],
      appliances: ['instant pot'],
      restrictions: [],
      servings: 6,
      cookTime: 45,
      ingredients: [
        {
          qty: 4,
          denom: "whole",
          name: "guajillo chiles"
        },
        {
          qty: 8,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 2,
          denom: "whole",
          name: "shallot"
        },
        {
          qty: 1,
          denom: "piece",
          name: "ginger"
        },
        {
          qty: 1/3,
          denom: "cup",
          name: "cilantro"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "lemongrass"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "turmeric"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "ground coriander"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "ground cardamom"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "curry powder"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "olive oil"
        },
        {
          qty: 28,
          denom: "oz",
          name: "unsweetened coconut milk"
        },
        {
          qty: 3,
          denom: "cups",
          name: "chicken broth"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "salt"
        },
        {
          qty: 1/5,
          denom: "pounds",
          name: "chicken drumsticks"
        },
        {
          qty: 1,
          denom: "pound",
          name: "ramen noodles"
        },
        {
          qty: 3,
          denom: "tablespoons",
          name: "fish sauce"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "brown sugar"
        },
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/instant-pot-keto-clam-chowder",
      name: "Instant Pot Keto Clam Chowder",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2019%2F05%2F20%2Finstant-pot-keto-clam-chowder-dcms-large-2000.jpg",
      cuisine: ['soup','american'],
      appliances: ['instant pot'],
      restrictions: [],
      servings: 8,
      cookTime: 30,
      ingredients: [
        {
          qty: 3,
          denom: "slice",
          name: "bacon"
        },
        {
          qty: 1,
          denom: "whole",
          name: "onion"
        },
        {
          qty: 2,
          denom: "stalks",
          name: "celery"
        },
        {
          qty: 2,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "unsalted butter"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "fresh thyme"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "pepper"
        },
        {
          qty: 1,
          denom: "head",
          name: "cauliflower"
        },
        {
          qty: 1.5,
          denom: "cups",
          name: "water"
        },
        {
          qty: 1,
          denom: "cup",
          name: "clam juice"
        },
        {
          qty: 1.5,
          denom: "cups",
          name: "heavy cream"
        },
        {
          qty: 16,
          denom: "ounces",
          name: "canned clams"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "parsley"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/instant-pot-tuscan-white-bean-and-lentil-soup",
      name: "Instant Pot Tuscan White Bean and Lentil Soup",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2019%2F02%2F26%2Ftuscan-white-bean-and-lentil-soup-1811-p151-2000.jpg",
      cuisine: ['soup', 'mediterranean'],
      appliances: ['instant pot'],
      restrictions: ['vegetarian', 'glutan-free'],
      servings: 6,
      cookTime: 25,
      ingredients: [
        {
          qty: 4,
          denom: "cups",
          name: "vegetable broth"
        },
        {
          qty: 30,
          denom: "oz",
          name: "canned white beans"
        },
        {
          qty: 1,
          denom: "cup",
          name: "uncooked lentils"
        },
        {
          qty: 2,
          denom: "cup",
          name: "water"
        },
        {
          qty: 1,
          denom: "cup",
          name: "onion"
        },
        {
          qty: 3/4,
          denom: "cup",
          name: "carrot"
        },
        {
          qty: 1,
          denom: "piece",
          name: "parmesan cheese"
        },
        {
          qty: 2,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "fresh thyme"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "pepper"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 1,
          denom: "whole",
          name: "bay leaf"
        },
        {
          qty: 4,
          denom: "cups",
          name: "rainbow chard"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "lemon juice"
        },
        {
          qty: 2,
          denom: "ounces",
          name: "parmesan cheese"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/lamb-souvlaki-tzatziki",
      name: "Lamb Souvlaki with Tzatziki",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2016%2F01%2F07%2Flamb-souviaki-tzatziki-cl.jpg",
      cuisine: ['mediterranean'],
      appliances: ['stovetop','grill'],
      restrictions: ['glutan-free','nut-free'],
      servings: 6,
      cookTime: 95,
      ingredients: [
        {
          qty: 1/2,
          denom: "cup",
          name: "extra-virgin olive oil"
        },
        {
          qty: 1/3,
          denom: "cup",
          name: "fresh mint"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "red wine vinegar"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "oregano"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "salt"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "pepper"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "crushed red pepper"
        },
        {
          qty: 8,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 1.5,
          denom: "pounds",
          name: "boneless leg of lamb"
        },
        {
          qty: 2,
          denom: "whole",
          name: "lemons"
        },
        {
          qty: 1,
          denom: "pint",
          name: "grape tomatoes"
        },
        {
          qty: 1,
          denom: "spray",
          name: "cooking spray"
        },
        {
          qty: 1,
          denom: "cup",
          name: "tzatziki"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/light-veggie-moussaka",
      name: "Light Veggie Moussaka",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2011%2F02%2F15%2Fvegetarian-moussaka-ck-x.jpg",
      cuisine: ['mediterranean'],
      appliances: ['oven','stovetop'],
      restrictions: ['vegetarian','nut-free'],
      servings: 4,
      cookTime: 75,
      ingredients: [
        {
          qty: 1,
          denom: "whole",
          name: "eggplant"
        },
        {
          qty: 1,
          denom: "whole",
          name: "zucchini"
        },
        {
          qty: 1,
          denom: "spray",
          name: "cooking spray"
        },
        {
          qty: 1,
          denom: "whole",
          name: "shallot"
        },
        {
          qty: 12,
          denom: "oz",
          name: "vegetarian crumble"
        },
        {
          qty: 1/2,
          denom: "tsp",
          name: "mixed herbs"
        },
        {
          qty: 14,
          denom: "oz",
          name: "canned chopped tomatoes"
        },
        {
          qty: 1,
          denom: "count",
          name: "vegetable stock cube"
        },
        {
          qty: 1.25,
          denom: "cup",
          name: "fat-free milk"
        },
        {
          qty: 1,
          denom: "whole",
          name: "shallot"
        },
        {
          qty: 2,
          denom: "tbsp",
          name: "cornstarch"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "feta"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "parmesan"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/lemony-greek-chicken-soup",
      name: "Lemony Greek Chicken Soup",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2019%2F02%2F26%2Flemony-greek-chicken-soup-1811-p16-2000.jpg",
      cuisine: ['mediterranean','soup'],
      appliances: ['stovetop'],
      restrictions: ['nut-free'],
      servings: 6,
      cookTime: 20,
      ingredients: [
        {
          qty: 1,
          denom: "tablespoon",
          name: "olive oil"
        },
        {
          qty: 3/4,
          denom: "cup",
          name: "carrot"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "onion"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "garlic"
        },
        {
          qty: 3/4,
          denom: "teaspoon",
          name: "crushed red pepper"
        },
        {
          qty: 6,
          denom: "cups",
          name: "chicken stock"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "uncooked orzo"
        },
        {
          qty: 3,
          denom: "whole",
          name: "eggs"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "lemon juice"
        },
        {
          qty: 3,
          denom: "cups",
          name: "shredded rotisserie chicken"
        },
        {
          qty: 3,
          denom: "cups",
          name: "spinach"
        },
        {
          qty: 1.25,
          denom: "teaspoons",
          name: "salt"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "pepper"
        },
        {
          qty: 3,
          denom: "tablespoons",
          name: "fresh dill"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/greek-chicken-grain-bowls",
      name: "Greek Chicken Grain Bowls",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2018%2F04%2F20%2Fmr1817041769_1-2000.jpg",
      cuisine: ['mediterranean','healthy'],
      appliances: ['stovetop'],
      restrictions: ['nut-free'],
      servings: 4,
      cookTime: 20,
      ingredients: [
        {
          qty: 2,
          denom: "whole",
          name: "lemon"
        },
        {
          qty: 24,
          denom: "oz",
          name: "chicken breast"
        },
        {
          qty: 1.5,
          denom: "teaspoons",
          name: "salt"
        },
        {
          qty: 1.5,
          denom: "teaspoons",
          name: "pepper"
        },
        {
          qty: 9,
          denom: "tablespoons",
          name: "olive oil"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "dijon mustard"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "oregano"
        },
        {
          qty: 2,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 2,
          denom: "cups",
          name: "cooked quinoa"
        },
        {
          qty: 2,
          denom: "cups",
          name: "kale"
        },
        {
          qty: 4/3,
          denom: "cups",
          name: "grape tomatoes"
        },
        {
          qty: 1,
          denom: "cup",
          name: "cucumber"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "red onion"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "kalamata olives"
        },
        {
          qty: 3,
          denom: "ounces",
          name: "feta"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/greek-baked-ziti-0",
      name: "Greek Baked Ziti",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2015%2F09%2F03%2Fgreek-baked-ziti-sl.jpg",
      cuisine: ['pasta','mediterranean'],
      appliances: ['stovetop','oven'],
      restrictions: ['nut-free'],
      servings: 6,
      cookTime: 80,
      ingredients: [
        {
          qty: 12,
          denom: "ounces",
          name: "ziti pasta"
        },
        {
          qty: 1,
          denom: "small",
          name: "onion"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "olive oil"
        },
        {
          qty: 2,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 1.5,
          denom: "pounds",
          name: "ground beef"
        },
        {
          qty: 30,
          denom: "oz",
          name: "tomato sauce"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "lemon juice"
        },
        {
          qty: 1.5,
          denom: "teaspoons",
          name: "oregano"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "sugar"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "cinnamon"
        },
        {
          qty: 1.5,
          denom: "teaspoons",
          name: "salt"
        },
        {
          qty: 3,
          denom: "tablespoons",
          name: "butter"
        },
        {
          qty: 3,
          denom: "tablespoons",
          name: "flour"
        },
        {
          qty: 3,
          denom: "cups",
          name: "milk"
        },
        {
          qty: 1,
          denom: "cup",
          name: "parmesan cheese"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "pepper"
        },
        {
          qty: 1,
          denom: "spray",
          name: "cooking spray"
        },
        {
          qty: 8,
          denom: "oz",
          name: "mozzarella cheese"
        },
        {
          qty: 1/3,
          denom: "cup",
          name: "breadcrumbs"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/grilled-portobello-goat-cheese-pitas",
      name: "Grilled Portobello-Goat Cheese Pitas",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2011%2F04%2F14%2Fcheese-pitas-ck-686182-x.jpg",
      cuisine: ['mediterranean','healthy'],
      appliances: ['stovetop'],
      restrictions: ['vegetarian','nut-free'],
      servings: 4,
      cookTime: 10,
      ingredients: [
        {
          qty: 1.5,
          denom: "teaspoons",
          name: "garlic"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "olive oil"
        },
        {
          qty: 4,
          denom: "piece",
          name: "pita"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "pepper"
        },
        {
          qty: 6,
          denom: "oz",
          name: "portobello mushrooms"
        },
        {
          qty: 2,
          denom: "whole",
          name: "tomato"
        },
        {
          qty: 1/3,
          denom: "cup",
          name: " goat cheese"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "fresh basil"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/greek-farro-chickpea-salad",
      name: "Greek Farro and Chickpea Salad",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2016%2F07%2F29%2F6006801_ftgoo_60066803_ftgoo_8533-2000.jpg",
      cuisine: ['mediterranean','salad','healthy'],
      appliances: ['stovetop'],
      restrictions: ['vegetarian','glutan-free'],
      servings: 1,
      cookTime: 5,
      ingredients: [
        {
          qty: 2,
          denom: "teaspoons",
          name: "extra-virgin olive oil"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "red wine vinegar"
        },
        {
          qty: 1/2,
          denom: "clove",
          name: "garlic"
        },
        {
          qty: 1/8,
          denom: "teaspoon",
          name: "oregano"
        },
        {
          qty: 1,
          denom: "cup",
          name: "arugula"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "cooked farro"
        },
        {
          qty: 1/3,
          denom: "cup",
          name: "canned chickpeas"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "red bell pepper"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "cucumber"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "feta"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/chicken-gyro-bowls",
      name: "Chicken Gyro Bowls",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2016%2F03%2F23%2F1605p74-chicken-gyro-bowls_0-2000.jpg",
      cuisine: ['mediterranean','healthy'],
      appliances: ['stovetop'],
      restrictions: [],
      servings: 4,
      cookTime: 60,
      ingredients: [
        {
          qty: 1/4,
          denom: "cup",
          name: "water"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "cider vinegar"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "sugar"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "red onion"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "greek yogurt"
        },
        {
          qty: 1.5,
          denom: "tablespoons",
          name: "tahini"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "lemon juice"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "water"
        },
        {
          qty: 2,
          denom: "cups",
          name: "cooked quinoa"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "olive oil"
        },
        {
          qty: 1,
          denom: "cup",
          name: "kale"
        },
        {
          qty: 3/4,
          denom: "cup",
          name: "parsley"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "onion powder"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "garlic powder"
        },
        {
          qty: 3/4,
          denom: "teaspoon",
          name: "oregano"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "cumin"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "pepper"
        },
        {
          qty: 8,
          denom: "oz",
          name: "chicken breast"
        },
        {
          qty: 1/2,
          denom: "piece",
          name: "pita"
        },
        {
          qty: 1,
          denom: "spray",
          name: "cooking spray"
        },
        {
          qty: 1,
          denom: "cup",
          name: "grape tomatoes"
        },
        {
          qty: 1,
          denom: "cup",
          name: "cucumber"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "canned chickpeas"
        },
        {
          qty: 12,
          denom: "count",
          name: "kalamata olives"
        },
        {
          qty: 1.5,
          denom: "ounces",
          name: "feta"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/la-korean-short-rib-tacos",
      name: "L.A. Korean Short Rib Tacos",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2017%2F02%2F02%2Fla-korean-short-rib-tacos.jpg",
      cuisine: ['asian','mexican','fusion'],
      appliances: ['grill'],
      restrictions: ['lactose-free'],
      servings: 8,
      cookTime: 540,
      ingredients: [
        {
          qty: 1/2,
          denom: "cup",
          name: "soy sauce"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "honey"
        },
        {
          qty: 3,
          denom: "tablespoons",
          name: "sesame oil"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "mirin"
        },
        {
          qty: 1,
          denom: "medium",
          name: "pear"
        },
        {
          qty: 4,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "ginger"
        },
        {
          qty: 3/4,
          denom: "teaspoon",
          name: "pepper"
        },
        {
          qty: 3,
          denom: "pounds",
          name: "bone-in beef short ribs"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 12,
          denom: "oz",
          name: "napa cabbage"
        },
        {
          qty: 1,
          denom: "cup",
          name: "kimchi"
        },
        {
          qty: 1,
          denom: "cup",
          name: "cilantro"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "sliced scallions (about 2 scallions)"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "extra-virgin olive oil"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "lime juice"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 16,
          denom: "count",
          name: "corn tortillas"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/korean-chicken-lettuce-wraps",
      name: "Korean Chicken Lettuce Wraps",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F12%2F04%2Fkorean-chicken-lettuce-wraps-ck.jpg",
      cuisine: ['asian','healthy'],
      appliances: ['stovetop'],
      restrictions: ['lactose-free'],
      servings: 4,
      cookTime: 140,
      ingredients: [
        {
          qty: 2.5,
          denom: "tablespoons",
          name: "soy sauce"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "brown sugar"
        },
        {
          qty: 1.5,
          denom: "tablespoons",
          name: "sesame oil"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "gochujang sauce"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "garlic"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "pepper"
        },
        {
          qty: 1,
          denom: "pound",
          name: "chicken breast"
        },
        {
          qty: 1,
          denom: "cup",
          name: "uncooked brown rice"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "canola oil"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "sesame seeds"
        },
        {
          qty: 12,
          denom: "count",
          name: "lettuce leaves"
        },
        {
          qty: 24,
          denom: "slices",
          name: "cucumber"
        },
        {
          qty: 4,
          denom: "stalk",
          name: "green onion"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/korean-shrimp-bbq-bowl",
      name: "Korean Shrimp BBQ Bowl",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2016%2F03%2F23%2F1605p73-california-caprese-bowl-2000.jpg",
      cuisine: ['asian','fusion'],
      appliances: ['stovetop'],
      restrictions: ['lactose-free'],
      servings: 1,
      cookTime: 15,
      ingredients: [
        {
          qty: 2,
          denom: "cups",
          name: "spinach"
        },
        {
          qty: 1,
          denom: "ounce",
          name: "shiitake mushrooms"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "canola oil"
        },
        {
          qty: 2/3,
          denom: "cup",
          name: "cooked brown rice"
        },
        {
          qty: 1/3,
          denom: "cup",
          name: "carrot"
        },
        {
          qty: 1/3,
          denom: "cup",
          name: "cabbage"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "green onions"
        },
        {
          qty: 3,
          denom: "ounces",
          name: "shrimp"
        },
        {
          qty: 1,
          denom: "whole",
          name: "egg"
        },
  
        {
          qty: 2,
          denom: "teaspoons",
          name: "gochujang"
        },
        {
          qty: 1.5,
          denom: "teaspoons",
          name: "mayonnaise"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "sesame oil"
        },
        {
          qty: 1,
          denom: "clove",
          name: "garlic"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/bulgogi-jungol",
      name: "Bulgogi Jungol (Korean Bulgogi Soup)",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2012%2F10%2F09%2Fbulgogi-jungol-ck-x.jpg",
      cuisine: ['asian','soup'],
      appliances: ['stovetop'],
      restrictions: ['lactose-free'],
      servings: 6,
      cookTime: 95,
      ingredients: [
        {
          qty: 1,
          denom: "pound",
          name: "rib-eye steak"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "soy sauce"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "sugar"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "soju"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "sesame oil"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "pepper"
        },
        {
          qty: 8,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 4,
          denom: "ounces",
          name: "sweet potato noodles"
        },
        {
          qty: 7,
          denom: "ounces",
          name: "enoki mushrooms"
        },
        {
          qty: 2,
          denom: "medium",
          name: "carrots"
        },
        {
          qty: 6,
          denom: "cups",
          name: "beef stock"
        },
        {
          qty: 2,
          denom: "ounces",
          name: "shiitake mushrooms"
        },
        {
          qty: 8,
          denom: "ounces",
          name: "extra firm tofu"
        },
        {
          qty: 1,
          denom: "whole",
          name: "red jalapeno pepper"
        },
        {
          qty: 1,
          denom: "bunch",
          name: "green onions"
        },
        {
          qty: 3/8,
          denom: "teaspoon",
          name: "salt"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/bibimbop",
      name: "Bibimbop",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2012%2F02%2F07%2Fbibimbop-ck-x.jpg",
      cuisine: ['asian'],
      appliances: ['stovetop'],
      restrictions: ['lactose-free'],
      servings: 4,
      cookTime: 66,
      ingredients: [
        {
          qty: 8,
          denom: "ounces",
          name: "extra firm tofu"
        },
        {
          qty: 1/3,
          denom: "cup",
          name: "water"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "apple cider vinegar"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "sugar"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "garlic"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "ginger"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "crushed red pepper"
        },
        {
          qty: 1,
          denom: "cup",
          name: "carrot"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "soy sauce"
        },
        {
          qty: 3,
          denom: "tablespoons",
          name: "sesame oil"
        },
        {
          qty: 3,
          denom: "cups",
          name: "cooked rice"
        },
        {
          qty: 1,
          denom: "cup",
          name: "bean sprouts"
        },
        {
          qty: 5,
          denom: "oz",
          name: "shiitake mushroom"
        },
        {
          qty: 9,
          denom: "oz",
          name: "spinach"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "unsalted butter"
        },
        {
          qty: 4,
          denom: "whole",
          name: "eggs"
        },
        {
          qty: 4,
          denom: "teaspoons",
          name: "gochujang"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "salt"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/dak-bokkeum-spinach-korea",
      name: "Dak Bokkeum with Spinach (Korean Stewed Chicken with Spinach)",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2012%2F02%2F07%2Fdak-bokkeum-spinach-ck-x.jpg",
      cuisine: ['asian'],
      appliances: ['stovetop'],
      restrictions: ['lactose-free'],
      servings: 6,
      cookTime: 85,
      ingredients: [
        {
          qty: 1/3,
          denom: "cup",
          name: "gochujang"
        },
        {
          qty: 2.5,
          denom: "tablespoons",
          name: "soy sauce"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "garlic"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "ginger"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "sesame oil"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "brown sugar"
        },
        {
          qty: 3/4,
          denom: "teaspoon",
          name: "crushed red pepper"
        },
        {
          qty: 2,
          denom: "pounds",
          name: "chicken thighs"
        },
        {
          qty: 1.5,
          denom: "cups",
          name: "uncooked rice"
        },
        {
          qty: 1.5,
          denom: "cups",
          name: "water"
        },
        {
          qty: 1/3,
          denom: "cup",
          name: "water"
        },
        {
          qty: 1,
          denom: "bunch",
          name: "green onion"
        },
        {
          qty: 5,
          denom: "oz",
          name: "spinach"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "sesame seeds"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/korean-barbecue-burgers",
      name: "Korean Barbecue Burgers",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2007%2F07%2F19%2Fkorean-burger-ck-1646413-x.jpg",
      cuisine: ['asian','american','fusion'],
      appliances: ['grill','stovetop'],
      restrictions: [],
      servings: 6,
      cookTime: 30,
      ingredients: [
        {
          qty: 1/2,
          denom: "cup",
          name: "green onions"
        },
        {
          qty: 1.5,
          denom: "tablespoons",
          name: "brown sugar"
        },
        {
          qty: 1.5,
          denom: "tablespoons",
          name: "ginger"
        },
        {
          qty: 3,
          denom: "tablespoons",
          name: "soy sauce"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "sesame oil"
        },
        {
          qty: 1.2,
          denom: "teaspoon",
          name: "pepper"
        },
        {
          qty: 2,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 1.5,
          denom: "pounds",
          name: "ground sirloin"
        },
        {
          qty: 1,
          denom: "spray",
          name: "cooking spray"
        },
        {
          qty: 6,
          denom: "count",
          name: "hamburger buns"
        },
        {
          qty: 6,
          denom: "leaves",
          name: "lettuce"
        },
        {
          qty: 6,
          denom: "tablespoons",
          name: "radishes"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/vegetarian-pozole",
      name: "Vegetarian Pozole",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2019%2F09%2F27%2Fvegetarianpozole-2000.jpg",
      cuisine: ['soup','mexican'],
      appliances: ['stovetop'],
      restrictions: ['vegetarian','lactose-free','nut-free'],
      servings: 4,
      cookTime: 15,
      ingredients: [
        {
          qty: 3,
          denom: "whole",
          name: "poblano chiles"
        },
        {
          qty: 2,
          denom: "small",
          name: "onions"
        },
        {
          qty: 1,
          denom: "pound",
          name: "tomatillos"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "cilanto"
        },
        {
          qty: 6,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 2,
          denom: "whole",
          name: "jalapeno pepper"
        },
        {
          qty: 3,
          denom: "cups",
          name: "vegetable stock"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "olive oil"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "cumin"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "ground coriander"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "oregano"
        },
        {
          qty: 30,
          denom: "oz",
          name: "canned white hominy"
        },
        {
          qty: 15,
          denom: "oz",
          name: "canned kidney beans"
        },
        {
          qty: 5,
          denom: "ounces",
          name: "spinach"
        },
        {
          qty: 1.5,
          denom: "teaspoons",
          name: "salt"
        },
        {
          qty: 1,
          denom: "to taste",
          name: "matchstick radishes"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/white-bean-fettuccine-alfredo",
      name: "Creamy White Bean Fettuccine Alfredo",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2019%2F10%2F24%2Fwhitebeanalfredo-2000.jpg",
      cuisine: ['pasta'],
      appliances: ['stovetop'],
      restrictions: ['vegetarian'],
      servings: 4,
      cookTime: 30,
      ingredients: [
        {
          qty: 2,
          denom: "teaspoons",
          name: "olive oil"
        },
        {
          qty: 2,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 1/8,
          denom: "teaspoon",
          name: "crushed red pepper"
        },
        {
          qty: 30,
          denom: "oz",
          name: "canned cannellini beans"
        },
        {
          qty: 1.5,
          denom: "cups",
          name: "vegetable broth"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "nutritional yeast"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "lemon zest"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 16,
          denom: "ounces",
          name: "fettucine noodles"
        },
        {
          qty: 3,
          denom: "ounces",
          name: "spinach"
        },
        {
          qty: 1,
          denom: "to taste",
          name: "parsley"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/spinach-black-bean-lasagna",
      name: "Spinach-Black Bean Lasagna",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2002%2F02%2F02%2Fspinach-lasagna-sl-258981-x.jpg",
      cuisine: ['pasta'],
      appliances: ['oven'],
      restrictions: ['vegetarian'],
      servings: 6,
      cookTime: 75,
      ingredients: [
        {
          qty: 2,
          denom: "whole",
          name: "eggs"
        },
        {
          qty: 15,
          denom: "oz",
          name: "ricotta cheese"
        },
        {
          qty: 10,
          denom: "oz",
          name: "frozen spinach"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "cilantro"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 4,
          denom: "cups",
          name: "monterey jack cheese"
        },
        {
          qty: 32,
          denom: "oz",
          name: "canned black beans"
        },
        {
          qty: 45,
          denom: "oz",
          name: "pasta sauce"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "cumin"
        },
        {
          qty: 9,
          denom: "piece",
          name: "precooked lasagna noodles"
        },
        {
          qty: 1,
          denom: "to taste",
          name: "cilantro"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/stir-fried-tofu-broccoli-lo-mein",
      name: "Stir-Fried Tofu and Broccoli Lo Mein",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2015%2F05%2F04%2Fstir-fried-tofu-broccoli-lo-mein-ay.jpg",
      cuisine: ['asian'],
      appliances: ['stovetop'],
      restrictions: ['vegetarian'],
      servings: 4,
      cookTime: 40,
      ingredients: [
        {
          qty: 2,
          denom: "cups",
          name: "broccoli"
        },
        {
          qty: 1,
          denom: "to taste",
          name: "salt"
        },
        {
          qty: 1,
          denom: "pound",
          name: "chinese egg noodles"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "sesame oil"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "soy sauce"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "oyster sauce"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "mirin"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "sugar"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "vegetable oil"
        },
        {
          qty: 14,
          denom: "oz",
          name: "extra firm tofu"
        },
        {
          qty: 2,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "ginger"
        },
        {
          qty: 4,
          denom: "stalk",
          name: "scallions"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/moroccan-chickpea-stew",
      name: "Moroccan Chickpea Stew",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2007%2F10%2F17%2Fchickpea-stew-ck-1673009-x.jpg",
      cuisine: ['soup','other'],
      appliances: ['stovetop'],
      restrictions: ['vegetarian'],
      servings: 6,
      cookTime: 30,
      ingredients: [
        {
          qty: 2,
          denom: "teaspoons",
          name: "olive oil"
        },
        {
          qty: 1,
          denom: "cup",
          name: "onion"
        },
        {
          qty: 1,
          denom: "cup",
          name: "carrot"
        },
        {
          qty: 2,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 1,
          denom: "whole",
          name: "jalapeno pepper"
        },
        {
          qty: 1,
          denom: "large",
          name: "yukon gold potato"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "cumin"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "chili powder"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "turmeric"
        },
        {
          qty: 1/8,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 28,
          denom: "oz",
          name: "canned diced tomatoes"
        },
        {
          qty: 15,
          denom: "oz",
          name: "canned chickpeas"
        },
        {
          qty: 14,
          denom: "oz",
          name: "vegetable broth"
        },
        {
          qty: 3,
          denom: "cups",
          name: "cooked brown rice"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "plain yogurt"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/shrimp-bean-burrito-bowl",
      name: "Shrimp and Bean Burrito Bowl",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2016%2F06%2F21%2F6046101_dtdin8546_beer-2000.jpg",
      cuisine: ['mexican','fusion'],
      appliances: ['stovetop'],
      restrictions: ['pescatarian','nut-free'],
      servings: 4,
      cookTime: 15,
      ingredients: [
        {
          qty: 3/4,
          denom: "cup",
          name: "chicken stock"
        },
        {
          qty: 30,
          denom: "oz",
          name: "canned kidney beans"
        },
        {
          qty: 1.5,
          denom: "tablespoons",
          name: "unsalted butter"
        },
        {
          qty: 5/8,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 5/8,
          denom: "teaspoon",
          name: "pepper"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "olive oil"
        },
        {
          qty: 1,
          denom: "pound",
          name: "shrimp"
        },
        {
          qty: 1.5,
          denom: "tablespoons",
          name: "sweet chili sauce"
        },
        {
          qty: 8.5,
          denom: "oz",
          name: "precooked brown rice"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "cilantro"
        },
        {
          qty: 1,
          denom: "whole",
          name: "avocado"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "cotija cheese"
        },
        {
          qty: 1,
          denom: "whole",
          name: "lime"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/whole-grain-veggie-burrito-bowl",
      name: "Whole-Grain Veggie Burrito Bowl",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2016%2F02%2F22%2F1604p24-whole-grain-veggie-burrito-bowl.jpg",
      cuisine: ['mexican','fusion'],
      appliances: ['stovetop'],
      restrictions: ['vegetarian','nut-free'],
      servings: 4,
      cookTime: 15,
      ingredients: [
        {
          qty: 3.5,
          denom: "oz",
          name: "boil-in-bag brown rice"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "olive oil"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "cumin"
        },
        {
          qty: 3,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 3/4,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 15,
          denom: "oz",
          name: "canned black beans"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "canned chipotle chiles"
        },
        {
          qty: 1,
          denom: "cup",
          name: "grape tomatoes"
        },
        {
          qty: 1/3,
          denom: "cup",
          name: "onion"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "cilantro"
        },
        {
          qty: 1.5,
          denom: "tablespoons",
          name: "lime juice"
        },
        {
          qty: 1,
          denom: "whole",
          name: "jalapeno pepper"
        },
        {
          qty: 4/3,
          denom: "cups",
          name: "red cabbage"
        },
        {
          qty: 3,
          denom: "ounces",
          name: "queso fresco"
        },
        {
          qty: 1,
          denom: "whole",
          name: "avocado"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/tangy-chicken-farro-bowl",
      name: "Tangy Chicken-Farro Bowl",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2015%2F12%2F07%2Ftangy-chicken-farro-bowl-ck.jpg",
      cuisine: ['fusion','other'],
      appliances: ['stovetop'],
      restrictions: ['lactose-free','nut-free'],
      servings: 4,
      cookTime: 20,
      ingredients: [
        {
          qty: 5,
          denom: "tablespoons",
          name: "white vinegar"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "sugar"
        },
        {
          qty: 5/8,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 1/8,
          denom: "teaspoon",
          name: "allspice"
        },
        {
          qty: 2,
          denom: "whole",
          name: "cucumbers"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "dijon mustard"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "dry mustard"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "canola oil"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "fresh dill"
        },
        {
          qty: 17,
          denom: "oz",
          name: "precooked farro"
        },
        {
          qty: 12,
          denom: "oz",
          name: "rotisserie chicken breasts"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "lingonberry preserves"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/tex-mex-rice-bowl",
      name: "Tex-Mex Rice Bowl",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2012%2F02%2F22%2Ftex-mex-rice-bowl-ck-x.jpg",
      cuisine: ['mexican','fusion'],
      appliances: ['stovetop'],
      restrictions: ['nut-free'],
      servings: 4,
      cookTime: 11,
      ingredients: [
        {
          qty: 9,
          denom: "oz",
          name: "precooked brown rice"
        },
        {
          qty: 8,
          denom: "ounces",
          name: "ground sirloin"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "water"
        },
        {
          qty: 1.5,
          denom: "tablespoons",
          name: "taco seasoning"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "frozen corn"
        },
        {
          qty: 15,
          denom: "oz",
          name: "canned black beans"
        },
        {
          qty: 1,
          denom: "cup",
          name: "pico de gallo"
        },
        {
          qty: 1,
          denom: "whoe",
          name: "jalapeno pepper"
        },
        {
          qty: 4,
          denom: "teaspoons",
          name: "cilantro"
        },
        {
          qty: 1,
          denom: "cup",
          name: "red onion"
        },
        {
          qty: 2,
          denom: "tbsp",
          name: "olive oil"
        },
        {
          qty: 1,
          denom: "tbsp",
          name: "lime juice"
        },
        {
          qty: 1/4,
          denom: "teaspoons",
          name: "salt"
        },
        {
          qty: 1/4,
          denom: "teaspoons",
          name: "pepper"
        },
        {
          qty: 3,
          denom: "cups",
          name: "lettuce"
        },
        {
          qty: 1,
          denom: "cup",
          name: "avocado"
        },
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/tuna-poke-bowls-brown-rice-kale",
      name: "Tuna Poke Bowls with Brown Rice and Kale",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2016%2F06%2F21%2F6046401_cldie1104-2000.jpg",
      cuisine: ['asian','fusion'],
      appliances: ['stovetop'],
      restrictions: ['lactose-free','pescatarian'],
      servings: 4,
      cookTime: 10,
      ingredients: [
        {
          qty: 2,
          denom: "cups",
          name: "cooked brown rice"
        },
        {
          qty: 1,
          denom: "cup",
          name: "kale"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "rice vinegar"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 2.5,
          denom: "tablespoons",
          name: "soy sauce"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "sesame oil"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "sriracha chili sauce"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "ginger"
        },
        {
          qty: 1,
          denom: "pound",
          name: "raw sushi-grade ahi tuna"
        },
        {
          qty: 3/4,
          denom: "cup",
          name: "cucumber"
        },
        {
          qty: 1,
          denom: "small",
          name: "avocado"
        },
        {
          qty: 1,
          denom: "count",
          name: "green onion"
        },
        {
          qty: 1.5,
          denom: "tablespoons",
          name: "sesame seeds"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/fresh-thai-noodle-bowl",
      name: "Fresh Thai Noodle Bowl",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2015%2F02%2F24%2Ffresh-thai-noodle-bowl-ck.jpg",
      cuisine: ['asian','fusion'],
      appliances: ['stovetop'],
      restrictions: ['lactose-free'],
      servings: 4,
      cookTime: 20,
      ingredients: [
        {
          qty: 8,
          denom: "oz",
          name: "rice vermicelli noodles"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "canola oil"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "ginger"
        },
        {
          qty: 4,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 3.5,
          denom: "cups",
          name: "vegetable stock"
        },
        {
          qty: 2.5,
          denom: "tablespoons",
          name: "soy sauce"
        },
        {
          qty: 1,
          denom: "cup",
          name: "carrots"
        },
        {
          qty: 1,
          denom: "whole",
          name: "red bell pepper"
        },
        {
          qty: 1,
          denom: "small",
          name: "cucumber"
        },
        {
          qty: 5,
          denom: "tablespoons",
          name: "fresh herbs"
        },
        {
          qty: 6,
          denom: "tablespoons",
          name: "unsalted peanuts"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "chili oil"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/soba-edamame-noodle-bowl",
      name: "Soba-Edamame Noodle Bowl",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2016%2F03%2F23%2F1605p18-seared-baby-bok-choy-2000.jpg",
      cuisine: ['asian','fusion'],
      appliances: ['stovetop'],
      restrictions: ['lactose-free','vegetarian'],
      servings: 4,
      cookTime: 10,
      ingredients: [
        {
          qty: 1,
          denom: "cup",
          name: "frozen edamame"
        },
        {
          qty: 6,
          denom: "ounces",
          name: "uncooked soba noodles"
        },
        {
          qty: 1,
          denom: "cup",
          name: "snow peas"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "sesame oil"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "rice vinegar"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "soy sauce"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "yellow miso"
        },
        {
          qty: 1.5,
          denom: "teaspoons",
          name: "brown sugar"
        },
        {
          qty: 1.5,
          denom: "teaspoons",
          name: "ginger"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 2,
          denom: "cups",
          name: "red cabbage"
        },
        {
          qty: 2/3,
          denom: "cup",
          name: "green onions"
        },
        {
          qty: 2,
          denom: "large",
          name: "carrot"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "cilantro"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/slow-cooker-barbecue-chicken",
      name: "Slow-Cooker Barbecue Chicken",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2011%2F05%2F10%2Fslow-cooker-bbq-chicken-ay-x.jpg",
      cuisine: ['american'],
      appliances: ['slow cooker'],
      restrictions: ['lactose-free'],
      servings: 8,
      cookTime: 365,
      ingredients: [
        {
          qty: 24,
          denom: "ounces",
          name: "chicken breasts"
        },
        {
          qty: 3/4,
          denom: "cup",
          name: "barbecue sauce"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "Italian dressing"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "brown sugar"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "worcestershire sauce"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "cornstarch"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "chicken broth"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/chicken-chilaquiles-casserole",
      name: "Chicken Chilaquiles Casserole",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2017%2F01%2F17%2Fchicken-chilaquiles-casserole-.jpg",
      cuisine: ['mexican','fusion'],
      appliances: ['oven'],
      restrictions: ['nut-free'],
      servings: 6,
      cookTime: 35,
      ingredients: [
        {
          qty: 15,
          denom: "count",
          name: "corn tostadas"
        },
        {
          qty: 16,
          denom: "oz",
          name: "green chile enchilada sauce"
        },
        {
          qty: 3,
          denom: "cups",
          name: "rotisserie chicken"
        },
        {
          qty: 8,
          denom: "ounces",
          name: "monterey jack cheese"
        },
        {
          qty: 4,
          denom: "ounces",
          name: "manchego cheese"
        },
        {
          qty: 3,
          denom: "tablespoons",
          name: "sour cream"
        },
        {
          qty: 1,
          denom: "whole",
          name: "jalapeno pepper"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "cilantro"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/lemon-garlic-pork-broccoli-bulgur-bowl",
      name: "Lemon-Garlic Pork and Broccoli Bulgur Bowl",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2016%2F04%2F20%2F1606p36-lemon-garlic-pork-and-broccoli-bulgur-bowl-2000.jpg",
      cuisine: ['other','healthy'],
      appliances: ['stovetop'],
      restrictions: ['lactose-free','nut-free'],
      servings: 4,
      cookTime: 25,
      ingredients: [
        {
          qty: 1.25,
          denom: "cups",
          name: "water"
        },
        {
          qty: 3/4,
          denom: "cup",
          name: "uncooked bulgur"
        },
        {
          qty: 1.25,
          denom: "teaspoons",
          name: "salt"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "olive oil"
        },
        {
          qty: 2,
          denom: "cups",
          name: "broccoli"
        },
        {
          qty: 1,
          denom: "lb",
          name: "pork tenderloin"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "cornstarch"
        },
        {
          qty: 3,
          denom: "tablespoons",
          name: "unsalted butter"
        },
        {
          qty: 5,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "chicken stock"
        },
        {
          qty: 1.5,
          denom: "tablespoons",
          name: "lemon juice"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "honey"
        },
        {
          qty: 3,
          denom: "tablespoons",
          name: "fresh basil"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/toasted-farro-salad-watermelon-peaches",
      name: "Toasted Farro Salad with Watermelon and Peaches",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2017%2F06%2F12%2Ffarrosalad-2000.jpeg",
      cuisine: ['salad','healthy'],
      appliances: ['stovetop'],
      restrictions: ['vegetarian','nut-free'],
      servings: 4,
      cookTime: 25,
      ingredients: [
        {
          qty: 1,
          denom: "cup",
          name: "uncooked farro"
        },
        {
          qty: 1.5,
          denom: "cups",
          name: "watermelon"
        },
        {
          qty: 2,
          denom: "medium",
          name: "peaches"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "fresh mint"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "fresh basil"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "extra-virgin olive oil"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "sherry vinegar"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "shallot"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "lime juice"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "pepper"
        },
        {
          qty: 1,
          denom: "to taste",
          name: "feta"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/chicken-farro-vegetable-salad-lemon-vinaigrette",
      name: "Chicken, Farro, and Vegetable Salad with Lemon Vinaigrette",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2015%2F02%2F10%2Fchicken-farro-vegetable-salad-lemon-vinaigrette-sl.jpg",
      cuisine: ['salad','healthy'],
      appliances: ['stovetop'],
      restrictions: [],
      servings: 6,
      cookTime: 90,
      ingredients: [
        {
          qty: 4,
          denom: "count",
          name: "chicken thighs"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "lemon vinaigrette dressing"
        },
        {
          qty: 1,
          denom: "cup",
          name: "uncooked farro"
        },
        {
          qty: 2.25,
          denom: "teaspoons",
          name: "salt"
        },
        {
          qty: 2,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 3/4,
          denom: "teaspoon",
          name: "pepper"
        },
        {
          qty: 1/2,
          denom: "whole",
          name: "red onion"
        },
        {
          qty: 1,
          denom: "bulb",
          name: "fennel"
        },
        {
          qty: 10,
          denom: "count",
          name: "sweet mini peppers"
        },
        {
          qty: 1.5,
          denom: "teaspoons",
          name: "olive oil"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "parsley"
        },
        {
          qty: 1/3,
          denom: "cup",
          name: "fresh basil"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "fresh thyme"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/the-cheeseburger-salad",
      name: "The Cheeseburger Salad",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2016%2F02%2F22%2F1604p48-the-cheeseburger-salad.jpg",
      cuisine: ['american','salad','fusion'],
      appliances: ['stovetop'],
      restrictions: ['nut-free'],
      servings: 4,
      cookTime: 30,
      ingredients: [
        {
          qty: 12,
          denom: "ounces",
          name: "ground sirloin"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "pepper"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 1,
          denom: "spray",
          name: "cooking spray"
        },
        {
          qty: 1,
          denom: "large",
          name: "red onion"
        },
        {
          qty: 10,
          denom: "oz",
          name: "romaine hearts"
        },
        {
          qty: 1.5,
          denom: "cups",
          name: "tomato"
        },
        {
          qty: 3,
          denom: "ounces",
          name: "cheddar cheese"
        },
        {
          qty: 1/3,
          denom: "cup",
          name: "mayonnaise"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "ketchup"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "water"
        },
        {
          qty: 1.5,
          denom: "ounces",
          name: "potato chips"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/tuscan-steak-salad",
      name: "Tuscan Steak Salad",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2015%2F04%2F21%2Ftuscan-steak-salad-ck.jpg",
      cuisine: ['salad','mediterranean','healthy'],
      appliances: ['stovetop'],
      restrictions: ['nut-free'],
      servings: 2,
      cookTime: 30,
      ingredients: [
        {
          qty: 1,
          denom: "clove",
          name: "garlic"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "olive oil"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "rosemary"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "lemon rind"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "pepper"
        },
        {
          qty: 8,
          denom: "oz",
          name: "strip steak"
        },
        {
          qty: 1,
          denom: "spray",
          name: "cooking spray"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "balsamic vinegar"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "dijon mustard"
        },
        {
          qty: 3,
          denom: "cups",
          name: "salad greens"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "parmesan cheese"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/caprese-wraps-with-chicken",
      name: "Caprese Wraps with Chicken",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2010%2F04%2F12%2Fcaprese-wraps-ck-4x3-1-2000.jpg",
      cuisine: ['mediterranean','healthy'],
      appliances: ['stovetop'],
      restrictions: ['nut-free'],
      servings: 4,
      cookTime: 20,
      ingredients: [
        {
          qty: 2,
          denom: "tablespoons",
          name: "olive oil"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "white wine vinegar"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "pepper"
        },
        {
          qty: 4,
          denom: "cups",
          name: "romaine lettuce"
        },
        {
          qty: 1.5,
          denom: "cups",
          name: "rotisserie chicken breast"
        },
        {
          qty: 3/4,
          denom: "cup",
          name: "fresh mozzarella cheese"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "fresh basil"
        },
        {
          qty: 1,
          denom: "pint",
          name: "cherry tomatoes"
        },
        {
          qty: 1,
          denom: "spray",
          name: "cooking spray"
        },
        {
          qty: 4,
          denom: "piece",
          name: "flatbreads"
        },
        {
          qty: 1,
          denom: "clove",
          name: "garlic"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/grilled-zucchini-caprese-sandwiches",
      name: "Grilled Zucchini Caprese Sandwiches",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2011%2F07%2F06%2Fgrilled-zucchini-caprese-ck-x.jpg",
      cuisine: ['mediterranean','healthy'],
      appliances: ['stovetop'],
      restrictions: ['vegetarian','nut-free'],
      servings: 4,
      cookTime: 15,
      ingredients: [
        {
          qty: 1,
          denom: "medium",
          name: "zucchini"
        },
        {
          qty: 4,
          denom: "teaspoons",
          name: "extra-virgin olive oil"
        },
        {
          qty: 1,
          denom: "clove",
          name: "garlic"
        },
        {
          qty: 1.5,
          denom: "teaspoons",
          name: "balsamic vinegar"
        },
        {
          qty: 1/8,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 1/8,
          denom: "teaspoon",
          name: "pepper"
        },
        {
          qty: 4,
          denom: "count",
          name: "ciabatta rolls"
        },
        {
          qty: 8,
          denom: "leaves",
          name: "fresh basil"
        },
        {
          qty: 1,
          denom: "medium",
          name: "tomato"
        },
        {
          qty: 6,
          denom: "ounces",
          name: "fresh mozzarella cheese"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/roasted-chicken-bow-tie-pasta-salad",
      name: "Roasted Chicken and Bow Tie Pasta Salad",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2004%2F02%2F18%2Fpasta-salad-ck-592284-r-2000.jpg",
      cuisine: ['pasta','salad'],
      appliances: ['stovetop'],
      restrictions: [],
      servings: 6,
      cookTime: 20,
      ingredients: [
        {
          qty: 3,
          denom: "cups",
          name: "bow tie pasta"
        },
        {
          qty: 1/3,
          denom: "cup",
          name: "orange juice"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "lemon juice"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "olive oil"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "mustard"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "sugar"
        },
        {
          qty: 1.25,
          denom: "teaspoons",
          name: "salt"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "pepper"
        },
        {
          qty: 1.5,
          denom: "teaspoons",
          name: "rice vinegar"
        },
        {
          qty: 2,
          denom: "cups",
          name: "cooked chicken breast"
        },
        {
          qty: 1.5,
          denom: "cups",
          name: "red grapes"
        },
        {
          qty: 1,
          denom: "cup",
          name: "celery"
        },
        {
          qty: 1/3,
          denom: "cup",
          name: "red onion"
        },
        {
          qty: 1/3,
          denom: "cup",
          name: "walnuts"
        },
        {
          qty: 3,
          denom: "tablespoons",
          name: "chives"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "parsley"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/tex-mex-pasta-salad",
      name: "Tex-Mex Pasta Salad",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2005%2F08%2F17%2Fpasta-salad-ck-1097017-x.jpg",
      cuisine: ['mexican','salad','fusion'],
      appliances: ['stovetop'],
      restrictions: [],
      servings: 12,
      cookTime: 40,
      ingredients: [
        {
          qty: 1,
          denom: "pound",
          name: "radiatore pasta"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "olive oil"
        },
        {
          qty: 3,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 1.5,
          denom: "pounds",
          name: "ground turkey"
        },
        {
          qty: 2/3,
          denom: "cup",
          name: "water"
        },
        {
          qty: 1.25,
          denom: "oz",
          name: "taco seasoning"
        },
        {
          qty: 2,
          denom: "cups",
          name: "mexican blend cheese"
        },
        {
          qty: 2,
          denom: "cups",
          name: "tomato"
        },
        {
          qty: 1,
          denom: "cup",
          name: "bell pepper"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "cilantro"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "green onions"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "olives"
        },
        {
          qty: 15.5,
          denom: "oz",
          name: "canned black beans"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "lime juice"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "cumin"
        },
        {
          qty: 8,
          denom: "oz",
          name: "sour cream"
        },
        {
          qty: 1,
          denom: "to taste",
          name: "salsa"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/sirloin-steak-pasta-salad",
      name: "Sirloin Steak and Pasta Salad",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2003%2F11%2F24%2Fsteak-salad-ck-554716-x.jpg",
      cuisine: ['pasta'],
      appliances: ['stovetop'],
      restrictions: ['lactose-free'],
      servings: 4,
      cookTime: 35,
      ingredients: [
        {
          qty: 2,
          denom: "cups",
          name: "penne"
        },
        {
          qty: 1/4,
          denom: "pound",
          name: "green beans"
        },
        {
          qty: 3/4,
          denom: "lb",
          name: "sirloin steak"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "garlic-pepper"
        },
        {
          qty: 1.5,
          denom: "cups",
          name: "red onion"
        },
        {
          qty: 1.5,
          denom: "cups",
          name: "red bell pepper"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "fresh basil"
        },
        {
          qty: 3,
          denom: "tablespoons",
          name: "dijon mustard"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "balsamic vinegar"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "olive oil"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "garlic"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "pepper"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "blue cheese"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/speedy-shepherds-pie",
      name: "Speedy Shepherd's Pie",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2016%2F10%2F03%2Fspeedy-shepherds-pie-ck.jpg",
      cuisine: ['american','other'],
      appliances: ['oven','stovetop'],
      restrictions: ['nut-free'],
      servings: 4,
      cookTime: 20,
      ingredients: [
        {
          qty: 1,
          denom: "pound",
          name: "ground beef"
        },
        {
          qty: 1,
          denom: "cup",
          name: "carrot"
        },
        {
          qty: 1,
          denom: "cup",
          name: "onion"
        },
        {
          qty: 4,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "tomato paste"
        },
        {
          qty: 1,
          denom: "cup",
          name: "beef stock"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "cornstarch"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "worcestershire sauce"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "pepper"
        },
        {
          qty: 3/8,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 1.5,
          denom: "cups",
          name: "frozen peas"
        },
        {
          qty: 24,
          denom: "oz",
          name: "premade mashed potatoes"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "freeze-dried onion"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "paprika"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/ground-beef-pasta-casserole",
      name: "Ground Beef and Pasta Casserole",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2016%2F01%2F20%2Fground-beef-pasta-casserole-ck.jpg",
      cuisine: ['pasta','other'],
      appliances: ['stovetop','oven'],
      restrictions: ['nut-free'],
      servings: 6,
      cookTime: 45,
      ingredients: [
        {
          qty: 2,
          denom: "small",
          name: "onion"
        },
        {
          qty: 2,
          denom: "large",
          name: "carrot"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "olive oil"
        },
        {
          qty: 4,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "Italian seasoning"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "crushed red pepper"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 1,
          denom: "pound",
          name: "ground sirloin"
        },
        {
          qty: 3.5,
          denom: "cups",
          name: "chicken stock"
        },
        {
          qty: 6,
          denom: "tablespoons",
          name: "fresh basil"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "tomato paste"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "red wine vinegar"
        },
        {
          qty: 12,
          denom: "ounces",
          name: "rigatoni"
        },
        {
          qty: 26.5,
          denom: "oz",
          name: "carton strained tomatoes"
        },
        {
          qty: 4,
          denom: "ounces",
          name: "fresh mozzarella cheese"
        },
        {
          qty: 1,
          denom: "ounce",
          name: "parmigiano-reggiano cheese"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/baked-italian-style-cauliflower",
      name: "Baked Italian-Style Cauliflower",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2011%2F10%2F12%2Fbaked-italian-style-cauliflower-ck-x.jpg",
      cuisine: ['other','mediterranean'],
      appliances: ['oven'],
      restrictions: ['nut-free'],
      servings: 4,
      cookTime: 28,
      ingredients: [
        {
          qty: 1,
          denom: "tablespoon",
          name: "olive oil"
        },
        {
          qty: 1,
          denom: "cup",
          name: "onion"
        },
        {
          qty: 4,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 6,
          denom: "ounces",
          name: "ground sirloin"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "crushed red pepper"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "pepper"
        },
        {
          qty: 1.5,
          denom: "cups",
          name: "marinara sauce"
        },
        {
          qty: 2,
          denom: "ounces",
          name: "kalamata olives"
        },
        {
          qty: 1.5,
          denom: "pounds",
          name: "cauliflower"
        },
        {
          qty: 1,
          denom: "spray",
          name: "cooking spray"
        },
        {
          qty: 1,
          denom: "ounce",
          name: "French bread baguette"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "pecorino romano cheese"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/nacho-grande-casserole",
      name: "Nacho Grande Casserole",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2010%2F11%2F29%2Fnacho-grande-casserole-gbp-4x3-1-2000.jpg",
      cuisine: ['mexican','fusion'],
      appliances: ['oven','stovetop'],
      restrictions: ['nut-free'],
      servings: 8,
      cookTime: 50,
      ingredients: [
        {
          qty: 2,
          denom: "pounds",
          name: "ground beef"
        },
        {
          qty: 1,
          denom: "whole",
          name: "onion"
        },
        {
          qty: 32,
          denom: "oz",
          name: "canned chili beans"
        },
        {
          qty: 16,
          denom: "oz",
          name: "frozen corn"
        },
        {
          qty: 15,
          denom: "oz",
          name: "tomato sauce"
        },
        {
          qty: 1.25,
          denom: "oz",
          name: "taco seasoning mix"
        },
        {
          qty: 3,
          denom: "cups",
          name: "cheddar jack cheese"
        },
        {
          qty: 3,
          denom: "cups",
          name: "nacho-flavored tortilla chips"
        },
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/eggplant-lasagna-0",
      name: "Eggplant Lasagna",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2019%2F07%2F10%2Feggplantlasagnamr_trending_3496-2000.jpg",
      cuisine: ['pasta','other'],
      appliances: ['oven'],
      restrictions: ['nut-free'],
      servings: 8,
      cookTime: 150,
      ingredients: [
        {
          qty: 1,
          denom: "large",
          name: "eggplant"
        },
        {
          qty: 12,
          denom: "ounces",
          name: "ground beef"
        },
        {
          qty: 1,
          denom: "cup",
          name: "onion"
        },
        {
          qty: 1/2,
          denom: "whole",
          name: "red bell pepper"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "garlic"
        },
        {
          qty: 1.5,
          denom: "teaspoons",
          name: "salt"
        },
        {
          qty: 1,
          denom: "teaspoon",
          name: "pepper"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "crushed red pepper"
        },
        {
          qty: 24,
          denom: "oz",
          name: "marinara sauce"
        },
        {
          qty: 2,
          denom: "cups",
          name: "ricotta cheese"
        },
        {
          qty: 2,
          denom: "whole",
          name: "eggs"
        },
        {
          qty: 16,
          denom: "ounces",
          name: "mozzarella cheese"
        },
        {
          qty: 7,
          denom: "ounces",
          name: "fresh mozzarella"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "fresh thyme"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/pork-chops-with-country-gravy",
      name: "Pork Chops with Country Gravy",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2017%2F10%2F01%2Fpork-chops-ck-1197218-x.jpg",
      cuisine: ['american'],
      appliances: ['stovetop'],
      restrictions: ['nut-free'],
      servings: 4,
      cookTime: 20,
      ingredients: [
        {
          qty: 1/4,
          denom: "cup",
          name: "flour"
        },
        {
          qty: 3/4,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "dried marjoram"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "thyme"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "sage"
        },
        {
          qty: 16,
          denom: "oz",
          name: "pork chops"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "butter"
        },
        {
          qty: 1,
          denom: "spray",
          name: "cooking spray"
        },
        {
          qty: 1.5,
          denom: "cups",
          name: "1% milk"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/pork-chops-grits-gravy",
      name: "Pork Chops with Grits and Red-Eye Gravy",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2011%2F11%2F16%2Fpork-chops-ck-x.jpg",
      cuisine: ['american'],
      appliances: ['stovetop'],
      restrictions: ['nut-free'],
      servings: 4,
      cookTime: 40,
      ingredients: [
        {
          qty: 1,
          denom: "tablespoon",
          name: "extra-virgin olive oil"
        },
        {
          qty: 24,
          denom: "oz",
          name: "pork chops"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "pepper"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "shallot"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "fresh thyme"
        },
        {
          qty: 4,
          denom: "oz",
          name: "mushrooms"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "dry sherry"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "hot coffee"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "tomato juice"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "sherry vinegar"
        },
        {
          qty: 1/8,
          denom: "teaspoon",
          name: "ground red pepper"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "cornstarch"
        },
        {
          qty: 2.25,
          denom: "cups",
          name: "2% milk"
        },
        {
          qty: 1/2,
          denom: "cup",
          name: "uncooked grits"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "butter"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/pork-schnitzel",
      name: "Pork Schnitzel",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2013%2F03%2F28%2Fpork-schnitzel-ck-x.jpg",
      cuisine: ['other'],
      appliances: ['stovetop'],
      restrictions: [],
      servings: 4,
      cookTime: 24,
      ingredients: [
        {
          qty: 1/4,
          denom: "cup",
          name: "sour cream"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "dill"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "buttermilk"
        },
        {
          qty: 5/8,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 3/4,
          denom: "teaspoon",
          name: "pepper"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "milk"
        },
        {
          qty: 1,
          denom: "large",
          name: "egg"
        },
        {
          qty: 3/4,
          denom: "cup",
          name: "breadcrumbs"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "parsley"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "garlic powder"
        },
        {
          qty: 16,
          denom: "oz",
          name: "pork chops"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "olive oil"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/pork-chops-stuffed-with-feta-spinach",
      name: "Pork Chops Stuffed with Feta and Spinach",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2007%2F03%2F15%2Fpork-chops-ck-1599621-x.jpg",
      cuisine: ['american'],
      appliances: ['oven','stovetop'],
      restrictions: [],
      servings: 4,
      cookTime: 25,
      ingredients: [
        {
          qty: 1,
          denom: "spray",
          name: "cooking spray"
        },
        {
          qty: 4,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "pepper"
        },
        {
          qty: 5,
          denom: "count",
          name: "sun-dried tomatoes"
        },
        {
          qty: 10,
          denom: "oz",
          name: "frozen spinach"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "feta"
        },
        {
          qty: 3,
          denom: "tablespoons",
          name: "cream cheese"
        },
        {
          qty: 1/2,
          denom: "teaspoon",
          name: "lemon rind"
        },
        {
          qty: 16,
          denom: "oz",
          name: "pork chops"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "lemon juice"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "dijon mustard"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "oregano"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/spicy-shrimp-noodles",
      name: "Spicy Shrimp Noodles",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2019%2F02%2F21%2Fspicy-shrimp-noodles-1810-p32-2000.jpg",
      cuisine: ['pasta','asian','fusion'],
      appliances: ['stovetop'],
      restrictions: ['pescatarian'],
      servings: 4,
      cookTime: 20,
      ingredients: [
        {
          qty: 6,
          denom: "ounces",
          name: "pad Thai noodles"
        },
        {
          qty: 3,
          denom: "tablespoons",
          name: "canola oil"
        },
        {
          qty: 2,
          denom: "cups",
          name: "scallions"
        },
        {
          qty: 8,
          denom: "ounces",
          name: "shrimp"
        },
        {
          qty: 1,
          denom: "large",
          name: "egg"
        },
        {
          qty: 1/3,
          denom: "cup",
          name: "unsalted peanuts"
        },
        {
          qty: 3,
          denom: "tablespoons",
          name: "ketchup"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "lime juice"
        },
        {
          qty: 1.5,
          denom: "tablespoons",
          name: "Sriracha chili sauce"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "fish sauce"
        },
        {
          qty: 1,
          denom: "tablespoon",
          name: "water"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "cilantro"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/cacio-e-pepe-sauteed-shrimp",
      name: "Cacio e Pepe with Sauteed Shrimp",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2017%2F05%2F12%2F4068801_ShrimpManifesto_Noodles_04-2000.jpg",
      cuisine: ['pasta','mediterranean'],
      appliances: ['stovetop'],
      restrictions: ['pescatarian'],
      servings: 6,
      cookTime: 25,
      ingredients: [
        {
          qty: 8,
          denom: "ounces",
          name: "linguini"
        },
        {
          qty: 2,
          denom: "tablespoons",
          name: "salt"
        },
        {
          qty: 1/4,
          denom: "cup",
          name: "unsalted butter"
        },
        {
          qty: 1,
          denom: "pound",
          name: "shrimp"
        },
        {
          qty: 3,
          denom: "cloves",
          name: "garlic"
        },
        {
          qty: 3,
          denom: "ounces",
          name: "Grana Padano cheese"
        },
        {
          qty: 2,
          denom: "teaspoons",
          name: "pepper"
        },
        {
          qty: 1,
          denom: "ounce",
          name: "pecorino romano cheese"
        },
        {
          qty: 1,
          denom: "whole",
          name: "lemon"
        }
      ]
    },
    {
      url: "https://www.myrecipes.com/recipe/no-cook-shrimp-noodle-bowl-with-peanut-ginger-sauce",
      name: "No-Cook Shrimp Noodle Bowl with Peanut-Ginger Sauce",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2018%2F07%2F05%2Fmrpackaging_0621181790-1-2000.jpg",
      cuisine: ['asian'],
      appliances: ['stovetop'],
      restrictions: ['pescatarian'],
      servings: 6,
      cookTime: 20,
      ingredients: [
        {
          qty: 1/2,
          denom: "cup",
          name: "creamy peanut butter"
        },
        {
          qty: 4.5,
          denom: "tablespoons",
          name: "lime juice"
        },
        {
          qty: 3,
          denom: "tablespoons",
          name: "rice vinegar"
        },
        {
          qty: 3,
          denom: "tablespoons",
          name: "soy sauce"
        },
        {
          qty: 3,
          denom: "tablespoons",
          name: "honey"
        },
        {
          qty: 1.5,
          denom: "teaspoons",
          name: "sesame oil"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "salt"
        },
        {
          qty: 1/4,
          denom: "teaspoon",
          name: "crushed red pepper"
        },
        {
          qty: 8,
          denom: "cups",
          name: "water"
        },
        {
          qty: 9,
          denom: "oz",
          name: "rice stick noodles"
        },
        {
          qty: 3,
          denom: "cups",
          name: "napa cabbage"
        },
        {
          qty: 1.5,
          denom: "cups",
          name: "cucumber"
        },
        {
          qty: 1.5,
          denom: "cups",
          name: "carrot"
        },
        {
          qty: 1.5,
          denom: "cups",
          name: "red bell pepper"
        },
        {
          qty: 1.5,
          denom: "pounds",
          name: "steamed shrimp"
        },
        {
          qty: 3/4,
          denom: "cup",
          name: "salted peanuts"
        }
      ]
    }
]

module.exports = recipes