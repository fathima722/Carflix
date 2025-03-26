export type TrendingCar = {
  /** The search term associated with the car. - Only works with car model for now */
  searchTerm: string;
  
  /** A unique identifier for the car item. */
  item_id: number;
  
  /** The title or name of the car. */
  title: string;
  
  /** The count or popularity of the car (e.g., search hits or views). */
  count: number;
  
  /** The URL to the car's image. */
  image: string;
};
