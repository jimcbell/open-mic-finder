export const getReviews = async (venueId: string) => {
  console.log(import.meta.env.VITE_BACKEND_URL);
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/reviews/${venueId}`);
  return await res.json();
};
