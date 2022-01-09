function App() {
  return (
    <div className="app-container">
      <header className="header">
        <nav className="nav">
          <svg className="nav__logo">
            <use href="/sprites.svg#cat" />
          </svg>
        </nav>
        <div className="header__intro">
          <div className="header__intro__top">
            <div className="header__intro__top__content">
              <div className="header__intro__top__content__text-container">
                <svg className="header__intro__logo">
                  <use href="/sprites.svg#cat" />
                </svg>
                <p className="header__intro__top__content__text-container__text">
                  Get to know more about your cat breed
                </p>
              </div>
              <div className="search-container">
                <input className="search" placeholder="Enter your breed" />
                <span class="material-icons search__icon">search</span>
              </div>
            </div>
          </div>
          <div className="header__intro__bottom">
            <span>Most Searched Breeds</span>
            <h1>66+ Breeds For you to discover</h1>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
