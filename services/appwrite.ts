import { Client, Databases, ID, Query } from "react-native-appwrite";
import { type TrendingCar } from "@/types/TrendingCar";
import { type Car } from "@/types/Car";

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!);

const database = new Databases(client);

/**
 * Updates the search count of a car for a specific search term in the database, or creates a new record if the search term does not exist.
 * 
 * @param {string} query - The search term for which the count is being updated.
 * @param {Car} car - The car object associated with the search term, used to store car details (e.g., `id`, `title`, `image`).
 * 
 * @returns {Promise<void>} A promise that resolves when the search count is updated or a new document is created.
 * 
 * @throws {Error} Throws an error if the database operation fails.
 */
export const updateSearchCount = async (query: string, car: Car) => {
  try {
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.equal("searchTerm", query),
    ]);

    if (result.documents.length > 0) {
      const existingCar = result.documents[0];
      await database.updateDocument(
        DATABASE_ID,
        COLLECTION_ID,
        existingCar.$id,
        {
          count: existingCar.count + 1,
        }
      );
    } else {
      await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
        searchTerm: query,
        item_id: car.id,
        title: `${car.year} ${car.make} ${car.model}` ,
        count: 1,
        image: car.image,
      });
    }
  } catch (error) {
    console.error("Error updating search count:", error);
    throw error;
  }
};

export const getTrendingCars = async (): Promise<
  TrendingCar[] | undefined
> => {
  try {
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.limit(5),
      Query.orderDesc("count"),
    ]);

    return result.documents as unknown as TrendingCar[];
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
