import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { getTrending } from '../api';
import Image from '../components/Image';
import Search from '../components/Search';

function Home(props) {
  const [breeds, setBreeds] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async function () {
      const breeds = await getTrending(4);
      setBreeds(breeds);
    })();
  }, []);

  const renderBreeds = () => {
    if (!breeds) return null;
    return breeds.map((breed, index) => {
      return (
        <Image
          key={index}
          src={breed.image.url}
          caption={breed.name}
          onClick={() => {
            navigate(`/breeds/${breed.name}`);
          }}
        />
      );
    });
  };
  return (
    <div className="home">
      <header className="header">
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
              <Search navigate={navigate} />
            </div>
          </div>
          <div className="header__intro__bottom">
            <div className="header__intro__bottom__text">
              <span className="header__intro__bottom__text--sub">
                Most Searched Breeds
              </span>
              <div className="header__intro__bottom__text__heading">
                <h1 className="header__intro__bottom__text--main">
                  66+ Breeds For you to discover
                </h1>
                <Link to="/trending" className="link">
                  See more &rarr;
                </Link>
              </div>
            </div>

            <div className="header__intro__bottom__trending">
              {renderBreeds()}
            </div>
          </div>
        </div>
      </header>
      <section className="section">
        <div className="question-section">
          <div className="question-section__text">
            <div className="horizontal"></div>
            <h1>Why should you own a cat?</h1>
            <p>
              Having a cat around you can actually trigger the release of
              calming chemicals in your body which lower your stress and anxiety
              levels
            </p>
            <Link to="/" className="link">
              Read more &rarr;
            </Link>
          </div>
          <div className="question-section__images">
            <div className="question-section__images__first-col">
              <img
                className="question-section__images__image"
                src="/image2.png"
                alt=""
              />
              <img
                className="question-section__images__image"
                style={{ width: '70%' }}
                src="/image1.png"
                alt=""
              />
            </div>

            <img
              className="question-section__images__image"
              src="/image3.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
