import { Car } from "@/types/Car";

const API_CONFIG = {
    BASE_URL: 'https://www.freetestapi.com/api',
    headers: {
     accept: 'application/json'
    } 
}

/**
 * Fetches a list of cars from the API, optionally filtering by a search term.
 * 
 * @param {string} [searchTerm] - The optional search term to filter the car results (e.g., a make, model, or other criteria).
 * 
 * @returns {Promise<Car[]>} A promise that resolves to an array of `Car` objects.
 * 
 * @throws {Error} Throws an error if the fetch request fails or if the response is not OK.
 */
export const fetchCars = async(searchTerm?: string):Promise<Car[]> => {
    let endpoint = `${API_CONFIG.BASE_URL}/v1/cars`;
    if(searchTerm) {
        endpoint+=`?search=${searchTerm}`;
    }
    const response = await fetch(endpoint, {
        method: 'GET',
        headers: API_CONFIG.headers
    });
    if(!response.ok) {
        throw new Error('Failed to fetch cars' + response.statusText);
    }
    return await response.json();
}

/**
 * Fetches the details of a specific car from the API based on its ID.
 * 
 * @param {string} id - The unique identifier of the car whose details are to be fetched.
 * 
 * @returns {Promise<Car>} A promise that resolves to a `Car` object containing the car's details.
 * 
 * @throws {Error} Throws an error if the fetch request fails or if the response is not OK.
 */
export const fetchCarDetails = async(id: string):Promise<Car> => {
    let endpoint = `${API_CONFIG.BASE_URL}/v1/cars/${id}`;
    const response = await fetch(endpoint, {
        method: 'GET',
        headers: API_CONFIG.headers
    });
    if(!response.ok) {
        throw new Error('Failed to fetch car details' + response.statusText);
    }
    return await response.json();
}