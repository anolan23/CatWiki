import React from 'react';
import { searchBreeds, logBreedSearch } from '../api';

class Search extends React.Component {
  state = { query: '', breeds: [] };
  #timer;

  #wait(ms) {
    return new Promise((resolve) => {
      this.#timer = setTimeout(resolve, ms);
    });
  }

  async #onChange(e) {
    this.setState({ query: e.target.value });
    clearTimeout(this.#timer);
    await this.#wait(500);
    const breeds = await searchBreeds(e.target.value, 5);
    this.setState({ breeds });
  }

  #onSubmit(e) {
    e.preventDefault();
    console.log(this.state.query);
  }

  #renderItems() {
    if (!this.state.breeds) return null;
    return this.state.breeds.map((breed) => {
      return (
        <div key={breed.id} className="dropdown__item">
          <span className="dropdown__item__text">{breed.name}</span>
        </div>
      );
    });
  }

  render() {
    console.log(this.state);
    return (
      <form className="search-form" onSubmit={this.#onSubmit.bind(this)}>
        <div className="search-container">
          <input
            className="search"
            placeholder="Enter your breed"
            onChange={this.#onChange.bind(this)}
            value={this.state.query}
          />
          <span className="material-icons search__icon">search</span>
        </div>
        {this.state.breeds.length ? (
          <div className="dropdown">{this.#renderItems()}</div>
        ) : null}
      </form>
    );
  }
}

export default Search;
