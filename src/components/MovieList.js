import React from 'react';
import { connect } from 'react-redux';
import MovieItem from './MovieItem';
import './MovieList.css';

class MovieList extends React.Component {
  renderMovieList () {      
    return this.props.movies.map(movie => {        
      return(
        <MovieItem 
          key={movie.name} 
          name={movie.name}
          initials={movie.initials}
          category={movie.category}
          stars={movie.stars}
        /> 
      )
    })
  }
  render () {
    return (
      <ul className="movie-list">
        {this.renderMovieList()}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    movies: state.movies
  }
}

export default connect(mapStateToProps)(MovieList);