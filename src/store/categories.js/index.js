const initialState = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    // more categories...
  ];
  
  const SELECT_CATEGORY = 'SELECT_CATEGORY';
  
  export const selectCategory = (category) => ({
    type: SELECT_CATEGORY,
    payload: category,
  });
  
  const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
      case SELECT_CATEGORY:
        // Update the state to mark the selected category as active
        return state.map((category) =>
          category.id === action.payload.id
            ? { ...category, active: true }
            : { ...category, active: false }
        );
      default:
        return state;
    }
  };
  
  export default categoriesReducer;