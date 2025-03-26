/**
 * Generates a URL for an asset stored in an S3 bucket.
 * 
 * @param {string} path - The path to the asset within the S3 bucket.
 * @returns {string} The full URL to the asset.
 */
export const getAsset = (path:string) => `${process.env.EXPO_PUBLIC_ASSETS_S3_BUCKET_URL}/assets/${path}`;