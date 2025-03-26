/**
 * Generates a car name string by combining the year, make, and model.
 * 
 * @param {number} year - The year the car was made.
 * @param {string} make - The make (brand) of the car.
 * @param {string} model - The model of the car.
 * @returns {string} The formatted car name as "year make model".
 */
export const getCarName = (year:number, make:string, model:string) => `${year} ${make} ${model}`;