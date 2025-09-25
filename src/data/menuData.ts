export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  ingredients: string[];
  nutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  isVegetarian?: boolean;
  isSpicy?: boolean;
  isNew?: boolean;
  isPopular?: boolean;
}

export const menuItems: MenuItem[] = [
  // Starters
  {
    id: 1,
    name: "Crispy Wings",
    description: "Golden fried chicken wings with buffalo sauce",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=300&h=200&fit=crop",
    category: "starters",
    rating: 4.5,
    reviews: 89,
    ingredients: ["Chicken wings", "Buffalo sauce", "Celery", "Blue cheese"],
    nutrition: { calories: 320, protein: 25, carbs: 8, fat: 22 },
    isSpicy: true,
    isPopular: true
  },
  {
    id: 2,
    name: "Mozzarella Sticks",
    description: "Crispy breaded mozzarella with marinara sauce",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1548340748-6d2b7d7da280?w=300&h=200&fit=crop",
    category: "starters",
    rating: 4.3,
    reviews: 156,
    ingredients: ["Mozzarella cheese", "Breadcrumbs", "Marinara sauce"],
    nutrition: { calories: 280, protein: 18, carbs: 24, fat: 14 },
    isVegetarian: true
  },
  {
    id: 3,
    name: "Loaded Nachos",
    description: "Tortilla chips with cheese, jalapeños, and sour cream",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=300&h=200&fit=crop",
    category: "starters",
    rating: 4.4,
    reviews: 203,
    ingredients: ["Tortilla chips", "Cheddar cheese", "Jalapeños", "Sour cream", "Guacamole"],
    nutrition: { calories: 450, protein: 15, carbs: 42, fat: 26 },
    isVegetarian: true,
    isSpicy: true
  },

  // Main Courses
  {
    id: 4,
    name: "Classic Burger",
    description: "Juicy beef patty with lettuce, tomato, and special sauce",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop",
    category: "mains",
    rating: 4.7,
    reviews: 312,
    ingredients: ["Beef patty", "Lettuce", "Tomato", "Onion", "Special sauce", "Brioche bun"],
    nutrition: { calories: 650, protein: 35, carbs: 45, fat: 35 },
    isPopular: true
  },
  {
    id: 5,
    name: "Margherita Pizza",
    description: "Fresh mozzarella, tomato sauce, and basil on crispy crust",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop",
    category: "mains",
    rating: 4.6,
    reviews: 289,
    ingredients: ["Pizza dough", "Tomato sauce", "Fresh mozzarella", "Basil", "Olive oil"],
    nutrition: { calories: 580, protein: 28, carbs: 65, fat: 22 },
    isVegetarian: true,
    isPopular: true
  },
  {
    id: 6,
    name: "Grilled Salmon",
    description: "Atlantic salmon with lemon herb seasoning and vegetables",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300&h=200&fit=crop",
    category: "mains",
    rating: 4.8,
    reviews: 167,
    ingredients: ["Atlantic salmon", "Lemon", "Herbs", "Asparagus", "Sweet potato"],
    nutrition: { calories: 520, protein: 45, carbs: 28, fat: 24 },
    isNew: true
  },
  {
    id: 7,
    name: "Chicken Alfredo",
    description: "Creamy pasta with grilled chicken and parmesan",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=300&h=200&fit=crop",
    category: "mains",
    rating: 4.5,
    reviews: 234,
    ingredients: ["Fettuccine pasta", "Grilled chicken", "Alfredo sauce", "Parmesan cheese"],
    nutrition: { calories: 720, protein: 42, carbs: 68, fat: 32 }
  },

  // Desserts
  {
    id: 8,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with molten center and vanilla ice cream",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=200&fit=crop",
    category: "desserts",
    rating: 4.9,
    reviews: 445,
    ingredients: ["Dark chocolate", "Butter", "Eggs", "Flour", "Vanilla ice cream"],
    nutrition: { calories: 420, protein: 8, carbs: 48, fat: 22 },
    isVegetarian: true,
    isPopular: true
  },
  {
    id: 9,
    name: "Cheesecake",
    description: "New York style cheesecake with berry compote",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=300&h=200&fit=crop",
    category: "desserts",
    rating: 4.6,
    reviews: 298,
    ingredients: ["Cream cheese", "Graham crackers", "Eggs", "Mixed berries"],
    nutrition: { calories: 380, protein: 7, carbs: 32, fat: 25 },
    isVegetarian: true
  },
  {
    id: 10,
    name: "Tiramisu",
    description: "Classic Italian dessert with coffee and mascarpone",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&h=200&fit=crop",
    category: "desserts",
    rating: 4.7,
    reviews: 189,
    ingredients: ["Mascarpone", "Ladyfingers", "Espresso", "Cocoa powder"],
    nutrition: { calories: 350, protein: 6, carbs: 28, fat: 24 },
    isVegetarian: true
  },

  // Beverages
  {
    id: 11,
    name: "Fresh Lemonade",
    description: "House-made lemonade with fresh mint",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=300&h=200&fit=crop",
    category: "beverages",
    rating: 4.4,
    reviews: 123,
    ingredients: ["Fresh lemons", "Sugar", "Mint", "Sparkling water"],
    nutrition: { calories: 120, protein: 0, carbs: 32, fat: 0 },
    isVegetarian: true
  },
  {
    id: 12,
    name: "Craft Beer",
    description: "Local brewery IPA with citrus notes",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=300&h=200&fit=crop",
    category: "beverages",
    rating: 4.3,
    reviews: 87,
    ingredients: ["Hops", "Malt", "Yeast", "Water"],
    nutrition: { calories: 180, protein: 2, carbs: 12, fat: 0 }
  },
  {
    id: 13,
    name: "Iced Coffee",
    description: "Cold brew coffee with vanilla syrup",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1517959105821-eaf2591984ca?w=300&h=200&fit=crop",
    category: "beverages",
    rating: 4.5,
    reviews: 156,
    ingredients: ["Coffee beans", "Vanilla syrup", "Milk", "Ice"],
    nutrition: { calories: 90, protein: 2, carbs: 16, fat: 2 },
    isVegetarian: true
  }
];

export const categories = [
  { id: 'all', name: 'All Items', icon: '🍽️' },
  { id: 'starters', name: 'Starters', icon: '🥗' },
  { id: 'mains', name: 'Main Courses', icon: '🍖' },
  { id: 'desserts', name: 'Desserts', icon: '🍰' },
  { id: 'beverages', name: 'Beverages', icon: '🥤' }
];