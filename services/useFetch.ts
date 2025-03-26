import { useState, useEffect } from "react";

/**
 * Custom hook to fetch data from an asynchronous function with loading, error handling, and auto-fetching support.
 * 
 * @template T - The type of the data being fetched.
 * 
 * @param {() => Promise<T>} fetchFunction - The asynchronous function to fetch data (should return a Promise).
 * @param {boolean} [autoFetch=true] - A flag to automatically trigger the fetch when the hook is called (default is true).
 * 
 * @returns {{
 *   data: T | null,         // The fetched data or null if not fetched yet.
 *   loading: boolean,       // A boolean indicating if the data is still being loaded.
 *   error: Error | null,    // The error object if an error occurred during the fetch, or null if no error.
 *   refetch: () => Promise<void>, // A function to manually trigger the fetch again.
 *   reset: () => void       // A function to reset the state (data, error, loading).
 * }}
*/
const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await fetchFunction();
      setData(result);
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error("An unknown error occurred")
      );
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setData(null);
    setError(null);
    setLoading(false);
  };

  useEffect(() => {
    if (autoFetch) {
      fetchData();
    }
  }, []);

  return { data, loading, error, refetch: fetchData, reset };
};

export default useFetch;
