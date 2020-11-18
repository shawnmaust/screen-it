import React from 'react';
import { connect } from 'react-redux'
import { addMovie } from '../actions';
import './MovieForm.css';

class MovieForm extends React.Component {

  constructor(props) { 
    super(props);
    this.formRef = React.createRef();
  }

  generateInitials = (name) => { 
    let initials = name
      .toUpperCase()
      .replace(/^(The|An?)/gi,'')
      .split(/\s/)
      .reduce((accumulator, word) => accumulator + word.charAt(0), '')
      .replace(/[^a-z]/gi,'');

    return (initials.length < 3) ? initials : initials.substring(0, 3);
  }

  updateStars(e) {
    const currentStar = e.target;
    const currentValue = currentStar.value;
    const parent = e.target.parentElement;
    const stars = parent.querySelectorAll('input[name="stars"]');
    stars.forEach((star) => {
       star.classList.toggle('filled', star.value <= currentValue) 
    })
  }

  clearStars() {
    const stars = this.formRef.current.querySelectorAll('input[name="stars"]');
    stars.forEach((star) => {
       star.classList.remove('filled');
    })
  }

  renderStars() {
    return (
      [...Array(5).keys()].map(i => {
        const currentStar = i + 1;
        return (
          <React.Fragment key={i}>
            <label htmlFor={`star-${currentStar}`} className="visually-hidden">{`${currentStar} Star${currentStar !== 1 ? 's' : ''}`}</label>
            <input id={`star-${currentStar}`} onClick={(e) => this.updateStars(e)} type="radio" name="stars" value={currentStar} />
          </React.Fragment>
        )
      })
    );
  }

  submitHandler(e) {
    e.preventDefault()
    const form = this.formRef.current;
    const data = {
      name: form.name.value, 
      initials: this.generateInitials(form.name.value),
      category: form.category.value,
      stars: form.stars.value
    }
    this.props.addMovie(data);
    form.reset();
    this.clearStars();
  }

  render() {
    return (
      <form ref={this.formRef} onSubmit={(e)=>this.submitHandler(e)}>
        <div className="input-group">
          <label>Name</label>
          <input type="text" name="name" placeholder="Name of movie" />
        </div>
        <div className="input-group">
          <label>Category</label>
          <select name="category">
            <option>Select a category</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Action/Adventure">Action/Adventure</option>
          </select>
        </div>
        <div className="input-group">
          <label>Rating</label>
          <div className="movie-item__rating rater">
            {this.renderStars()}
          </div>
        </div>
        <button>Add Movie</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    movies: state.movies
  }
}

export default connect(mapStateToProps, { addMovie })(MovieForm);