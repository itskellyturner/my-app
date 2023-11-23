import React from 'react';
const initialState = {
    menuData: [
      {
        id: 1,
        img: 'cheeseBread.jpeg',
        price: '7.99',
        dishUpper: 'CHEESE BREAD',
        dishLower: 'Cheese Bread',
        description: 'Our tasty cheesy bread, with chopped tomatoes, basil leaves and yellow peppers.',
        quantity: 0,
      },
      {
        id: 2,
        img: 'salad.jpeg',
        price: '12.99',
        dishUpper: 'GREEK SALAD',
        dishLower: 'Greek Salad',
        description: 'Salad with avocado, tomatoes, Bulgarian cheese, green peppers and onions, with our famous sauce.',
        quantity: 0,
      },
      {
        id: 3,
        img: 'pasta.jpeg',
        price: '14.99',
        dishUpper: 'PASTA MARGARITA',
        dishLower: 'Pasta Margarita',
        description: 'A fresh hand made pasta with high quality tomatoes, basil leaves and gouda cheese.',
        quantity: 0,
      },
      {
        id: 4,
        img: 'fish.jpeg',
        price: '8.99',
        dishUpper: 'TILAPIA LEMON FISH',
        dishLower: 'Tilapia Lemon fish',
        description: 'Pan grilled tilapia with fresh herbs, olive and lemon, served with pan seared vegetables.',
        quantity: 0,
      },
      {
        id: 5,
        img: 'oysters.jpeg',
        price: '22.99',
        dishUpper: 'GRILLED OYSTERS',
        dishLower: 'Grilled Oysters',
        description: 'Freshly caught grilled oysters with garlic, brandy and parmesan cheese served with vegetables.',
        quantity: 0,
      },
      {
        id: 6,
        img: 'potatoes.jpeg',
        price: '5.99',
        dishUpper: 'HOME FRIES',
        dishLower: 'Home Fries',
        description: 'Our traditional sweet & sour potatoes with parmesan cheese, tomatoes and our secret herbs.',
        quantity: 0,
      },
    ],
    cart: [],
  };

  export default initialState;