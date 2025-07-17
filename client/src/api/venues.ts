export const getVenues = async () => {
  console.log(import.meta.env.VITE_BACKEND_URL);
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/venues`);
  return await res.json();
};
