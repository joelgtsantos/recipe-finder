import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';

class SeachRecipes extends Component{

  state = {
    ingredients: '',
    dish: ''
  }

  search = () => {
    let {ingredients, dish} = this.state;
    const url = `http://www.recipepuppy.com/api/i=${ingredients}&q=${dish}`;
    console.log('url', url);
  }

  render(){
    return(
      <Form inline>
        <FormGroup>
          <ControlLabel>Ingredients</ControlLabel>
          {' '}
          <FormControl 
            type='text' 
            placeholder='garlic, chicken'
            onChange={event => this.setState({ingredients: event.target.value})}
          />
        </FormGroup>
        {' '}
        <FormGroup>
          <ControlLabel>Dish</ControlLabel>
          {' '}
          <FormControl 
            type='text' 
            placeholder='adobo'
            onChange={event => this.setState({dish: event.target.value})}
          />
        </FormGroup>
        {' '}
        <Button onClick={this.search}>Submit</Button>
      </Form>
    );
  }
}

export default SeachRecipes;