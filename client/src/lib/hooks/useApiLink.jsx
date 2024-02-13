
const mood = import.meta.env.VITE_MODE
const devLink = import.meta.env.VITE_SERVER_DEV
const prodLink = import.meta.env.VITE_SERVER_PROD

export default function useApiLink() {

  if (mood === 'development') {
    return devLink
  } else {
    return prodLink
  }
}
