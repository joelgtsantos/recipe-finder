import React, { Component } from 'react';
import { connect } from 'react-redux';
import { favoriteRecipe } from '../actions/';

class RecipeItem extends Component{

  state = {
    favorited: false,
  }
  
  addRecipe = (recipe) => {
    this.setState({favorited: true});
    this.props.favoriteRecipe(recipe);
  }

  render(){
    const { recipe } = this.props;
    return(
      <div className='recipe-item'>
        {
          this.props.favoriteButton ?
            this.state.favorited  ?
              <div
                className='star'>
                &#9733;
              </div>
              :
              <div 
                onClick={() => this.addRecipe(recipe)}
                className='star'>
                &#9734;
              </div>
            :
              <div></div>
        }
        <div className='recipe-text'>
          <a href={recipe.href}>
            <h4>{recipe.title}</h4>
          </a>
          <p>{recipe.ingredients}</p>
        </div>
        <img
          className='recipe-img' 
          src={recipe.thumbnail} 
          alt={recipe.title}
        />
      </div>
    );
  }
}

export default connect(null, { favoriteRecipe })(RecipeItem);