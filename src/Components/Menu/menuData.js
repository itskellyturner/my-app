import cheeseBreadImage from '../../images/cheeseBread.jpeg';
import greekSaladImage from '../../images/salad.jpeg';
import pastaMargaritaImage from '../../images/pasta.jpeg';
import tilapiaLemonFishImage from '../../images/fish.jpeg';
import grilledOystersImage from '../../images/oysters.jpeg';
import homeFriesImage from '../../images/potatoes.jpeg';

const MenuData = [
    {
      id: 1,
      name: 'CHEESE BREAD',
      description: 'A delightful blend of cheeses on freshly baked bread, garnished with herbs.',
      price: '7.99',
      img: cheeseBreadImage
    },
    {
      id: 2,
      name: 'GREEK SALAD',
      description: 'A classic salad with fresh veggies, olives, and feta cheese, drizzled with olive oil.',
      price: '12.99',
      img: greekSaladImage
    },
    {
      id: 3,
      name: 'PASTA MARGARITA',
      description: 'Traditional pasta tossed in a rich tomato sauce, finished with fresh basil and mozzarella.',
      price: '14.99',
      img: pastaMargaritaImage
    },
    {
      id: 4,
      name: 'TILAPIA LEMON FISH',
      description: 'Grilled tilapia seasoned with lemon pepper and served with a side of mixed vegetables.',
      price: '8.99',
      img: tilapiaLemonFishImage
    },
    {
      id: 5,
      name: 'GRILLED OYSTERS',
      description: 'Succulent oysters grilled with a hint of garlic butter and a sprinkle of parmesan.',
      price: '22.99',
      img: grilledOystersImage
    },
    {
      id: 6,
      name: 'HOME FRIES',
      description: 'Crispy fried potatoes seasoned with a special blend of spices, served hot.',
      price: '5.99',
      img: homeFriesImage
    },
];

export default MenuData;