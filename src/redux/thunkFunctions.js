const transformCartForBackend = (reduxStateProducts) => {
    // Transform the products array from the Redux state to match the backend schema
    return reduxStateProducts.map(product => ({
      product: product.properties._id, // Assuming this is the product ID required by the backend
      quantity: product.quantity
    }));
  };
  

export async function syncCartWithBackend(reduxStateProducts) {
  // Transform the Redux state to match your backend schema
  const productsForBackend = transformCartForBackend(reduxStateProducts);

  // Construct the payload to send to your backend
  const cartPayload = {
    // Assume _id is generated by the backend if not provided, or add it here if needed
    products: productsForBackend,
  };

  try {
    const response = await fetch(`/api/cart/sync/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartPayload),
    });

    if (!response.ok) {
      throw new Error('Failed to sync cart with backend');
    }

    const updatedCart = await response.json();
    return updatedCart; // This should be the updated cart in the backend schema format
  } catch (error) {
    console.error('Error syncing cart:', error);
    throw error;
  }
  }