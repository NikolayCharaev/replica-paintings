export async function getBasketItems() {
  try {
    const response = await fetch('/api/paintings', {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch basket items');
    }

    return response.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
}
