const initialState = [
    { id: 1, name: 'Product 1', categoryId: 1 },
    { id: 2, name: 'Product 2', categoryId: 2 },
    // more products...
  ];
  
  const productsReducer = (state = initialState, action) => {
    // Handle actions related to products
    return state;
  };
  
  export default productsReducer;