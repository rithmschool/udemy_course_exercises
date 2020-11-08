import React, {Component} from 'react';
import './RecipeInput.css'

class RecipeInput extends Component {
  static defaultProps = {
    onClose() {},
    onSave() {}
  }
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      instructions: '',
      ingredients: [''],
      img: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleNewIngredient = this.handleNewIngredient.bind(this);
    this.handleChangeIng = this.handleChangeIng.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
      //we want handleSubmit to invoke onSave and preventDefault
    e.preventDefault();
    this.props.onSave({...this.state});
    this.setState({
      title: '',
      instructions: '',
      ingredients: [''],
      img:''
    })
  };
  handleChange(e) {
    //handles typing in input
    this.setState({[e.target.name]: e.target.value})
  }
  handleNewIngredient(e) {
    //what does this function do?

    const {ingredients} = this.state;
    //want to make ingredients array in state grow by 1, so we show more than 1 input
    //This function adds a new input line.
    this.setState({ingredients: [...ingredients, '']})
  }
  handleChangeIng(e) {
    //handleChangeIng works on the ingredient line.
    //first want to figure out what index we're on:
    const index = Number(e.target.name.split('-')[1])
    //Below we handle changes to one of our ingredients, and maybe adding ingredients?
    const ingredients = this.state.ingredients.map((ing, i) => (
      i === index ? e.target.value : ing
    ));
    this.setState({ingredients});
  }

  render() {
    
    const {title, instructions, img, ingredients} = this.state;
    const {onClose} = this.props;
    let inputs = ingredients.map((ing, i) => (
      <div
        className="recipe-form-inline"
        key={`ingredient-${i}`}
      >
        <label>{i + 1}.
          <input 
            type="text"
            name={`ingredient-${i}`}
            value={ing}
            size={45}
            placeholder="Ingredient"
            onChange={this.handleChangeIng}
          />
        </label>
      </div>
    ));
    
    return(
      <div className="recipe-form-container">
        <form className='recipe-form' onSubmit={this.handleSubmit}>
          <button
            type="button"
            className="close-button"
            onClick={onClose}
          >
            X
          </button>
          <div className="recipe-form-line">
            <label htmlFor='recipe-title-input'>Title</label>
            <input 
              id='recipe-title-input'
              key='title'
              name='title'
              type='text'
              value={title}
              size={42}
              onChange={this.handleChange}/>
            <label
              htmlFor='recipe-instructions-input'
              style={{marginTop: '5px'}}>
                Instructions
            </label>
            <textarea 
              key='instructions'
              id='recipe-instructions-input'
              type='Instructions'
              name='instructions'
              rows='8'
              cols='50'
              value={instructions}
              onChange={this.handleChange}/>
            {inputs}
            <button
              type="button"
              onClick={this.handleNewIngredient}
              className="buttons"
            >
              +
            </button>
            <div className='recipe-form-line'>
              <label htmlFor='recipe-img-input'>Image Url</label>
              <input 
                id='recipe-img-input'
                type='text'
                placeholder=''
                name='img'
                value={img}
                size={36}
                autoComplete='off'
                onChange={this.handleChange} />
            </div>
            <button
              type="submit"
              className="buttons"
              style={{alignSelf: 'flex-end', marginRight: 0}}
            >
              SAVE
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default RecipeInput;