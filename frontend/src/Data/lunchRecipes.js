const lunchRecipes = [
    {
      id: 7,
      name: "Grilled Chicken Salad",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8R3JpbGxlZCUyMENoaWNrZW4lMjBTYWxhZHxlbnwwfHwwfHx8MA%3D%3D.jpg",
      description: "A healthy salad with grilled chicken, fresh greens, and a light vinaigrette.",
      time: "25 mins",
      rating: 3.9,
      ingredients: [
        "2 chicken breasts",
        "4 cups mixed greens",
        "1/2 red onion (sliced)",
        "1/2 cup cherry tomatoes (halved)",
        "1/4 cup feta cheese",
        "2 tbsp olive oil",
        "Salt and pepper to taste"
      ],
      instructions: [
        "Season chicken breasts with salt, pepper, and olive oil.",
        "Grill chicken over medium heat for 6-7 minutes per side until cooked through.",
        "Let the chicken rest for 5 minutes, then slice.",
        "In a large bowl, combine mixed greens, onion, tomatoes, and feta.",
        "Top the salad with sliced chicken.",
        "Drizzle with olive oil and toss gently.",
        "Serve immediately."
      ]
    },
    {
      id: 8,
      name: "Pasta Primavera",
      image: "https://www.budgetbytes.com/wp-content/uploads/2023/05/Pasta-Primavera-fork.jpg",
      description: "A colorful pasta dish with seasonal vegetables and a garlic olive oil sauce.",
      time: "30 mins",
    rating: 4,
      ingredients: [
        "8 oz spaghetti or penne pasta",
        "1 zucchini (sliced)",
        "1 red bell pepper (sliced)",
        "1/2 cup cherry tomatoes (halved)",
        "2 cloves garlic (minced)",
        "2 tbsp olive oil",
        "Salt and pepper to taste",
        "Fresh basil for garnish"
      ],
      instructions: [
        "Cook pasta according to package instructions until al dente.",
        "Heat olive oil in a large pan over medium heat.",
        "Add garlic and sauté until fragrant.",
        "Add zucchini, bell pepper, and cherry tomatoes. Cook until tender.",
        "Drain pasta and add to the pan. Toss with vegetables.",
        "Season with salt and pepper.",
        "Garnish with fresh basil and serve."
      ]
    },
    {
      id: 9,
      name: "Vegetable Stir-Fry",
      image: "https://plus.unsplash.com/premium_photo-1664472637341-3ec829d1f4df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VmVnZXRhYmxlJTIwU3RpciUyMEZyeXxlbnwwfHwwfHx8MA%3D%3D.jpg",
      description: "A quick and easy stir-fry with fresh vegetables and a savory soy sauce.",
      time: "20 mins",
      rating: 2.3,
      ingredients: [
        "1 cup broccoli florets",
        "1 carrot (sliced)",
        "1 red bell pepper (sliced)",
        "1/2 cup snap peas",
        "2 cloves garlic (minced)",
        "2 tbsp soy sauce",
        "1 tbsp sesame oil",
        "Sesame seeds for garnish"
      ],
      instructions: [
        "Heat sesame oil in a large pan over medium-high heat.",
        "Add garlic and sauté until fragrant.",
        "Add broccoli, carrot, bell pepper, and snap peas. Stir-fry for 5-7 minutes.",
        "Pour in soy sauce and toss to coat vegetables evenly.",
        "Cook for an additional 2 minutes.",
        "Remove from heat and sprinkle with sesame seeds.",
        "Serve hot."
      ]
    },
  {
    id: 10,
    name: "Caprese Grilled Cheese Sandwich",
    image: "https://media.istockphoto.com/id/1309401247/photo/grilled-sandwiches.jpg?s=612x612&w=0&k=20&c=XivY89yokhR9Vp12GdbVNlI2_NOwDBn2ydL_Xdwc6Os=",
    description: "A crispy grilled sandwich with melted mozzarella, fresh tomatoes, and basil.",
    time: "15 mins",
    rating: 4.7,
    ingredients: [
      "4 slices sourdough bread",
      "2 tbsp butter (softened)",
      "4 slices fresh mozzarella cheese",
      "1 large tomato (sliced)",
      "6 fresh basil leaves",
      "1 tbsp balsamic glaze",
      "Salt & black pepper to taste"
    ],
    instructions: [
      "Spread butter evenly on one side of each bread slice.",
      "Heat a pan over medium heat.",
      "Place 2 bread slices (butter side down) in the pan.",
      "Add mozzarella slices, tomato, basil leaves, salt, and black pepper.",
      "Drizzle with balsamic glaze and top with the remaining bread slices (butter side up).",
      "Grill for 3-4 minutes per side until golden brown and the cheese melts.",
      "Serve warm with a side of salad or soup."
    ]
  },
  {
    id: 11,
    name: "Chickpea & Spinach Wrap",
    image: "https://media.istockphoto.com/id/1070940466/photo/tortilla-with-vegetables-and-hummus-with-chickpeas.jpg?s=612x612&w=0&k=20&c=bmLpQDWR-BG2gs1y57wfyIYZMSvtEbD-3wa4M5aPbv0=",
    description: "A healthy and protein-rich wrap with chickpeas, spinach, and yogurt sauce.",
    time: "20 mins",
    rating: 4.6,
    ingredients: [
      "1 cup canned chickpeas (rinsed & drained)",
      "2 tbsp olive oil",
      "1/2 tsp cumin powder",
      "1/2 tsp paprika",
      "Salt & black pepper to taste",
      "1 cup fresh spinach",
      "1/4 red onion (thinly sliced)",
      "1/2 cup Greek yogurt",
      "1 tbsp lemon juice",
      "2 whole wheat tortillas"
    ],
    instructions: [
      "Heat olive oil in a pan and sauté chickpeas with cumin, paprika, salt, and pepper for 5 minutes.",
      "In a small bowl, mix Greek yogurt with lemon juice and a pinch of salt.",
      "Warm tortillas in a dry pan for 30 seconds per side.",
      "Spread yogurt sauce on each tortilla, add spinach, chickpeas, and red onions.",
      "Roll the wrap tightly, cut in half, and serve."
    ]
  },
  {
    id: 12,
    name: "Mediterranean Quinoa Salad",
    image: "https://media.istockphoto.com/id/518536916/photo/homemade-quinoa-tofu-bowl.jpg?s=612x612&w=0&k=20&c=B2saRZ3vzROY0e-STZQbXfaIqwA_jWIjMoFdpartmoo=",
    description: "A light and refreshing salad packed with Mediterranean flavors.",
    time: "15 mins",
    rating: 4.8,
    ingredients: [
      "1 cup cooked quinoa",
      "1/2 cup cherry tomatoes (halved)",
      "1/2 cucumber (diced)",
      "1/4 cup red onion (chopped)",
      "1/4 cup feta cheese (crumbled)",
      "2 tbsp olives (sliced)",
      "2 tbsp olive oil",
      "1 tbsp lemon juice",
      "1/2 tsp dried oregano",
      "Salt & black pepper to taste"
    ],
    instructions: [
      "In a large bowl, mix cooked quinoa, tomatoes, cucumber, red onion, and olives.",
      "In a small bowl, whisk together olive oil, lemon juice, oregano, salt, and pepper.",
      "Pour the dressing over the salad and toss well.",
      "Top with crumbled feta cheese and serve chilled."
    ]
  }, 
  ];
  
  export default lunchRecipes;
  