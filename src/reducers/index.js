import { combineReducers } from 'redux';
import { SET_RECIPES, FAVORITE_RECIPE } from '../actions/';

function recipes(state = [], action){
  switch(action.type){
    case SET_RECIPES: 
      return action.items;
    default: 
      return state;
  }
}

function favoriteRecipes(state = [], action){
  switch(action.type){
    case FAVORITE_RECIPE:
      //const recipe = Object.assign({}, action.recipe, {favorited: true});
      const recipes = [...state, action.recipe];
      return recipes;
    default:
      return state;
  }
}

const rootReducer = combineReducers({ recipes, favoriteRecipes });

export default rootReducer;