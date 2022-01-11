import { Component, createRef } from 'react';
import { searchBreeds, logBreedSearch } from '../api';

class Search extends Component {
  state = { query: '', breeds: [], show: false };
  _timer;
  inputRef = createRef(null);

  componentDidMount() {
    window.addEventListener('click', this._closeOnClick.bind(this));
  }

  _closeOnClick(e) {
    if (!this.inputRef.current.contains(e.target)) {
      this.setState({ show: false });
    }
  }

  _wait(ms) {
    return new Promise((resolve) => {
      this._timer = setTimeout(resolve, ms);
    });
  }

  async _onChange(e) {
    clearTimeout(this._timer);
    this.setState({ query: e.target.value });
    await this._wait(100);
    const breeds = await searchBreeds(e.target.value, 20);
    this.setState({ breeds, show: true });
  }

  _onItemClick(name) {
    logBreedSearch(name);
    this.props.navigate(`/breeds/${name}`);
  }

  _onSubmit(e) {
    e.preventDefault();
    console.log(this.state.query);
  }

  _renderItems() {
    if (!this.state.breeds) return null;
    return this.state.breeds.map((breed) => {
      return (
        <div
          key={breed.id}
          className="dropdown__item"
          onClick={() => this._onItemClick(breed.name)}
        >
          <span className="dropdown__item__text">{breed.name}</span>
        </div>
      );
    });
  }

  render() {
    return (
      <form
        className="search-form"
        onSubmit={this._onSubmit.bind(this)}
        ref={this.inputRef}
      >
        <div className="search-container">
          <input
            className="search"
            placeholder="Enter your breed"
            onChange={this._onChange.bind(this)}
            value={this.state.query}
          />
          <span className="material-icons search__icon">search</span>
        </div>
        {this.state.show && this.state.breeds.length ? (
          <div className="dropdown">
            <div className="dropdown__item-holder">{this._renderItems()}</div>
          </div>
        ) : null}
      </form>
    );
  }
}

export default Search;
