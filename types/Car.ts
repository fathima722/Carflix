export type Car = {
  /** The unique identifier for the car. */
  id: number;
  
  /** The make (brand) of the car. (e.g., Toyota) */
  make: string;
  
  /** The model of the car. (e.g., Corolla) */
  model: string;
  
  /** The manufacturing year of the car. (e.g., 2025) */
  year: number;
  
  /** The color of the car. (e.g., White) */
  color: string;
  
  /** The mileage of the car in kilometers or miles. (e.g., 1000) */
  mileage: number;
  
  /** The price of the car. (e.g., 25000) */
  price: number;
  
  /** The fuel type the car uses (e.g., petrol, diesel, electric). */
  fuelType: string;
  
  /** The type of transmission (e.g., manual, automatic). */
  transmission: string;
  
  /** The engine description (e.g., engine size, type). */
  engine: string;
  
  /** The horsepower of the car's engine. (e.g., 120) */
  horsepower: number;
  
  /** A list of features available in the car (e.g., air conditioning, leather seats). */
  features: string[];
  
  /** The number of previous owners of the car. (e.g., 2) */
  owners: number;
  
  /** The URL or path to an image of the car. */
  image: string;
};
