
import env from "react-dotenv";


// for images
export const IMG_URL = 'https://image.tmdb.org/t/p/original'

// For Reuse of component
export const originals = `/discover/tv?api_key=${env.API_KEY}&with_networks=213`
export const action = `/discover/movie?api_key=${env.API_KEY}&with_genres=28`