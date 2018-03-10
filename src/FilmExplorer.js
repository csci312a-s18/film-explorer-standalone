import React, { Component } from 'react';

import MovieTableContainer from './components/MovieTableContainer';
import SearchBar from './components/SearchBar';


class FilmExplorer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      sortType: 'title',
      movies: [],
    };
  }

  componentDidMount() {
    fetch('/api/movies/')
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status_text);
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ movies: data });
      })
      .catch(err => console.log(err)); // eslint-disable-line no-console
  }

  setRating(filmid, rating) {
    const alteredFilms = this.state.movies.map((movie) => {
      if (movie.id === filmid) {
        return Object.assign({}, movie, { rating });
      }
      return movie;
    });
    this.setState({ movies: alteredFilms });
  }

  render() {
    let movieContents = (<h2>Loading...</h2>);
    if (this.state.movies.length > 0) {
      movieContents = (<MovieTableContainer
        searchTerm={this.state.searchTerm}
        movies={this.state.movies}
        sortType={this.state.sortType}
        setRatingFor={(id, rating) => this.setRating(id, rating)}
      />);
    }

    return (
      <div className="FilmExplorer">
        <SearchBar
          searchTerm={this.state.searchTerm}
          setTerm={(term) => { this.setState({ searchTerm: term }); }}
          sortType={this.state.sortType}
          setType={(type) => { this.setState({ sortType: type }); }}
        />
        {movieContents}
      </div>
    );
  }
}

export default FilmExplorer;
