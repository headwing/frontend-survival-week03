/* eslint-disable import/no-unresolved */
import Food from './Food';

interface Restaurant {
  id: string;
  category: string;
  name: string;
  menu: Food[];
}

export default Restaurant;
