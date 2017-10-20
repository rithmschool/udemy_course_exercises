import React, { Component } from 'react';
import {connect} from 'react-redux';
import Navbar from './Navbar';
import RecipeInput from './RecipeInput';
import RecipeList from './RecipeList';
import './RecipeApp.css';

const RecipeApp = ({
  shouldShowForm,
  recipes,
  saveRecipe,
  deleteRecipe,
  showForm,
  hideForm
}) => (
  <div className="App">
    <Navbar onNewRecipe={showForm} />
    { shouldShowForm ?
        <RecipeInput 
          onSave={saveRecipe}
          onClose={hideForm}  
        /> :
        null }
    <RecipeList onDelete={deleteRecipe} recipes={recipes} />
  </div>
);

const mapStateToProps = state => ({
  recipes: state.recipes,
  shouldShowForm: state.shouldShowForm
});

const mapDispatchToProps = dispatch => ({
  saveRecipe(recipe) {
    dispatch({
      type: "SAVE_RECIPE",
      recipe
    })
  },
  deleteRecipe(recipeId) {
    dispatch({
      type: "DELETE_RECIPE",
      recipeId
    })
  },
  showForm() {
    dispatch({
      type: "SHOW_FORM"
    })
  },
  hideForm() {
    dispatch({
      type: "HIDE_FORM"
    })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeApp);
