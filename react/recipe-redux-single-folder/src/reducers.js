export default (state={}, action) => {
  switch(action.type) {
    case "SAVE_RECIPE":
      const newRecipe = {id: state.nextRecipeId, ...action.recipe};
      return {
        ...state,
        nextRecipeId: state.nextRecipeId + 1,
        shouldShowForm: false,
        recipes: [...state.recipes, newRecipe]
      };
    case "DELETE_RECIPE":
      const recipes = state.recipes.filter(r => r.id !== action.recipeId);
      return {...state, recipes};
    case "SHOW_FORM":
      return {...state, shouldShowForm: true};
    case "HIDE_FORM":
      return {...state, shouldShowForm: false};
    default:
      return state;
  }
};
