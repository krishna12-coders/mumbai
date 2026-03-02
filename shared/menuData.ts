import type { MenuItem } from './types';

// Shared menu items used by both web and mobile app
export const MENU_ITEMS: MenuItem[] = [
  // Biryani
  {
    id: '1',
    name: 'Hyderabadi Biryani',
    price: 299,
    category: 'Biryani',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Chicken_Hyderabadi_Biryani.JPG?width=800',
    description: 'Authentic Hyderabadi biryani with fragrant basmati rice and tender meat',
  },
  {
    id: '2',
    name: 'Lucknowi Biryani',
    price: 329,
    category: 'Biryani',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Awadhi_mutton_biryani.jpg?width=800',
    description: 'Royal Lucknowi style biryani with marinated meat and fragrant spices',
  },
  {
    id: '3',
    name: 'Kacchi Biryani',
    price: 349,
    category: 'Biryani',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kacchi_Dum_Biryani.JPG?width=800',
    description: 'Traditional raw meat biryani cooked in sealed pot',
  },
  {
    id: '4',
    name: 'Paneer Biryani',
    price: 249,
    category: 'Biryani',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Panner_Vegetable_Hyderabad_Biryani.jpg?width=800',
    description: 'Vegetarian delight with cottage cheese and aromatic rice',
  },
  // Appetizers
  {
    id: '5',
    name: 'Seekh Kabab',
    price: 199,
    category: 'Appetizers',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Seekh_Kebab.JPG?width=800',
    description: 'Grilled minced meat skewers with spices',
  },
  {
    id: '6',
    name: 'Shami Kabab',
    price: 189,
    category: 'Appetizers',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Chicken_Shami_Kabab.JPG?width=800',
    description: 'Crispy patties of minced meat and lentils',
  },
  {
    id: '7',
    name: 'Samosa',
    price: 79,
    category: 'Appetizers',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Samosa.JPG?width=800',
    description: 'Golden fried pastry with spiced filling',
  },
  // Desserts
  {
    id: '8',
    name: 'Kheer',
    price: 99,
    category: 'Desserts',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kheer_with_condensed_milk..JPG?width=800',
    description: 'Rice pudding with cardamom and nuts',
  },
  {
    id: '9',
    name: 'Shahi Tukda',
    price: 129,
    category: 'Desserts',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Shahi_tukda_or_toast.JPG?width=800',
    description: 'Bread cream dessert with dry fruits',
  },
  // Beverages
  {
    id: '10',
    name: 'Masala Chai',
    price: 39,
    category: 'Beverages',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Masala_Chai.JPG?width=800',
    description: 'Aromatic Indian spiced tea',
  },
  {
    id: '11',
    name: 'Mango Lassi',
    price: 59,
    category: 'Beverages',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mango_Lassi_made_out_of_Mango_pulp_and_Milk.JPG?width=800',
    description: 'Refreshing yogurt drink with mango',
  },
];

// Featured items for home page
export const FEATURED_ITEMS = [
  MENU_ITEMS[0], // Hyderabadi Biryani
  MENU_ITEMS[1], // Lucknowi Biryani
  MENU_ITEMS[3], // Paneer Biryani
];
