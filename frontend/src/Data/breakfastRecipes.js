const breakfastRecipes = [
  {
    id: 1,
    name: "Pancakes",
    image: "https://images.unsplash.com/flagged/photo-1557609786-fd36193db6e5?w=600&auto=format&fit=crop&q=60",
    description: "Fluffy pancakes topped with fresh berries and syrup.",
    time: "20 mins",
    rating: 4.6,
    ingredients: [
      "1 cup all-purpose flour",
      "2 tablespoons sugar",
      "1 tablespoon baking powder",
      "1/2 teaspoon salt",
      "3/4 cup milk",
      "1 large egg",
      "2 tablespoons melted butter",
      "1 teaspoon vanilla extract"
    ],
    instructions: [
      "In a large mixing bowl, combine the all-purpose flour, sugar, baking powder, and salt. Stir well to evenly distribute the dry ingredients.",
      "In a separate bowl, whisk together the milk, egg, melted butter, and vanilla extract until fully combined.",
      "Gradually pour the wet ingredients into the dry ingredients while stirring gently. Mix until just combined; avoid over-mixing to keep the pancakes light and fluffy.",
      "Heat a non-stick skillet or griddle over medium heat and lightly grease with butter or oil.",
      "Pour 1/4 cup of batter onto the skillet for each pancake. Allow it to cook for about 2 minutes until small bubbles form on the surface and the edges appear set.",
      "Carefully flip the pancake with a spatula and cook for another 1-2 minutes until golden brown.",
      "Repeat with the remaining batter, greasing the pan as needed.",
      "Serve warm with maple syrup, fresh berries, or any desired toppings."
    ]
  },
  {
    id: 2,
    name: "Avocado Toast",
    image: "https://images.unsplash.com/photo-1613769049987-b31b641f25b1?q=80&w=2067&auto=format&fit=crop",
    description: "Crunchy toast with creamy avocado and chili flakes.",
    time: "10 mins",
    rating: 4.8,
    ingredients: [
      "1 ripe avocado",
      "2 slices whole-grain bread",
      "1/2 lemon (juiced)",
      "Salt and pepper to taste",
      "1 tsp red chili flakes (optional)",
      "1 tbsp olive oil"
    ],
    instructions: [
      "Start by toasting the bread slices in a toaster or on a skillet over medium heat until they become golden brown and crispy.",
      "While the bread is toasting, cut the ripe avocado in half, remove the pit, and scoop the flesh into a small bowl.",
      "Mash the avocado with a fork until it reaches your desired texture—either smooth or slightly chunky.",
      "Add lemon juice, salt, and pepper to the mashed avocado, and mix well.",
      "Spread the avocado mixture evenly over the toasted bread slices.",
      "Drizzle olive oil on top for extra richness.",
      "Sprinkle red chili flakes for a slight spicy kick (optional).",
      "Serve immediately for a fresh and delicious breakfast."
    ]
  },
  {
    id: 3,
    name: "Smoothie Bowl",
    image: "https://plus.unsplash.com/premium_photo-1663840135654-b4119f34a720?w=600&auto=format&fit=crop",
    description: "A vibrant smoothie bowl topped with granola and fruits.",
    time: "5 mins",
    rating: 5,
    ingredients: [
      "1 banana",
      "1/2 cup frozen berries",
      "1/2 cup Greek yogurt",
      "1/2 cup almond milk",
      "1 tbsp honey",
      "Granola for topping",
      "Fresh fruit slices"
    ],
    instructions: [
      "Peel the banana and cut it into smaller chunks for easier blending.",
      "In a blender, add the banana, frozen berries, Greek yogurt, almond milk, and honey.",
      "Blend on high speed until smooth and thick. If necessary, add more almond milk to reach the desired consistency.",
      "Pour the smoothie into a bowl.",
      "Top the smoothie with granola, fresh banana slices, berries, and any other preferred toppings.",
      "Drizzle extra honey for added sweetness if desired.",
      "Enjoy immediately as a refreshing and nutrient-packed breakfast."
    ]
  },
  {
    id: 4,
    name: "French Toast",
    image: "https://media.istockphoto.com/id/1225582525/photo/traditional-french-toasts-with-blueberries-strawberries-and-powdered-sugar-on-white-plate.jpg?s=612x612&w=0&k=20&c=5DWhiXmrjaEJ9ibt7jWO9BmiSjT_BZr6btpg2yOP9CA=",
    description: "Golden-brown bread soaked in a vanilla-egg mixture.",
    time: "20 mins",
    rating: 4.8,
    ingredients: [
      "4 slices of bread",
      "2 eggs",
      "1/2 cup milk",
      "1 tsp vanilla extract",
      "1/2 tsp cinnamon",
      "Butter for cooking",
      "Maple syrup & berries for topping"
    ],
    instructions: [
      "In a mixing bowl, whisk together the eggs, milk, vanilla extract, and cinnamon until well combined.",
      "Heat a non-stick skillet over medium heat and lightly grease with butter.",
      "Dip each slice of bread into the egg mixture, ensuring both sides are evenly coated but not overly soaked.",
      "Place the soaked bread slices onto the heated skillet and cook for about 2-3 minutes on each side or until golden brown.",
      "Repeat the process with the remaining slices, greasing the pan as needed.",
      "Serve warm with maple syrup and fresh berries."
    ]
  },
  {
    id: 5,
    name: "Banana Pancakes",
    image: "https://media.istockphoto.com/id/1742038467/photo/super-healthy-food-oatmeal-pancakes-with-honey-and-chia-seeds.jpg?s=612x612&w=0&k=20&c=UBc587dRqBdKSmkVI6omX_9Jky-FHtygiw_KaewF8eE=",
    description: "Fluffy pancakes made with mashed bananas and cinnamon.",
    time: "25 mins",
    rating: 4.7,
    ingredients: [
      "2 ripe bananas (mashed)",
      "1 cup flour",
      "1/2 cup milk",
      "1 egg",
      "1 tbsp honey",
      "1 tsp baking powder",
      "1/2 tsp cinnamon",
      "Butter for cooking"
    ],
    instructions: [
      "Mash the ripe bananas in a large mixing bowl until smooth.",
      "Add flour, milk, egg, honey, baking powder, and cinnamon. Stir until just combined.",
      "Heat a skillet over medium heat and lightly grease with butter.",
      "Pour small amounts of batter onto the pan to form pancakes.",
      "Cook for about 2-3 minutes until bubbles appear on the surface.",
      "Flip the pancakes and cook for another 2 minutes until golden brown.",
      "Serve warm with honey or syrup."
    ]
  },
  {
    id: 6,
    name: "Egg Benedict",
    image: "https://media.istockphoto.com/id/495071200/photo/eggs-benedict.jpg?s=612x612&w=0&k=20&c=0--8vpfcuaPMAfConA0l4t-cEDvi1HhJ48F_RvRqvKM=",
    description: "Poached eggs on an English muffin with hollandaise sauce.",
    time: "30 mins",
    rating: 4.9,
    ingredients: [
      "2 English muffins (halved)",
      "4 eggs",
      "4 slices of ham",
      "1/2 cup hollandaise sauce",
      "1 tbsp white vinegar",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Toast the English muffins until golden brown and place a slice of ham on each half.",
      "In a pot, bring water to a gentle simmer and add white vinegar.",
      "Crack an egg into a small bowl and gently slide it into the simmering water. Repeat for the other eggs.",
      "Let the eggs poach for about 3 minutes until the whites are set but yolks remain runny.",
      "Remove the poached eggs with a slotted spoon and place them on the ham-topped muffins.",
      "Drizzle with hollandaise sauce and season with salt and pepper.",
      "Serve immediately while warm."
    ]
  }
];

export default breakfastRecipes;
