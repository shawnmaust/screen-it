import { combineReducers } from 'redux';
// import _ from 'lodash';

const moviesReducer = (state, action) => {
  const INITIAL_MOVIES = [
    {
      "name": "Death Becomes Her",
      "initials": "DBH",
      "category": "Comedy",
      "stars": 3
    }, {
      "name": "Ghostbusters",
      "initials": "G",
      "category": "Comedy",
      "stars": 5
    }, {
      "name": "Harry Potter - Socerer's Stone",
      "initials": "HPS",
      "category": "Drama",
      "stars": 4
    }, {
      "name": "Jurassic Park",
      "initials": "JP",
      "category": "Action/Adventure",
      "stars": 4
    }, {
      "name": "The Sandlot",
      "initials": "S",
      "category": "Comedy",
      "stars": 4
    }
  ];

  if (typeof(state) === "undefined") {
    return INITIAL_MOVIES;
  }
  const sortMovies = (movies) => {
    return movies.sort((a, b) => {
      let aIn = a.initials,
          bIn = b.initials;
  
      if (aIn < bIn)  return -1;
      if (aIn > bIn)  return 1;
      return 0;
    });
  }

  switch (action.type) {
    case 'ADD_MOVIE':
      const unsortedList = [...state, action.payload]
      return sortMovies(unsortedList)
    default:
      return state;
  }
}

export default combineReducers({
  movies: moviesReducer
});