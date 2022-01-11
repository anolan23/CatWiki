import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getBreed } from '../api';
import Attribute from '../components/Attribute';
import Image from '../components/Image';

function Breeds() {
  const { name } = useParams();
  const [breed, setBreed] = useState(null);

  useEffect(() => {
    (async function () {
      const breed = await getBreed(name);
      setBreed(breed);
    })();
  }, [name]);

  if (!breed) return <div>Loading...</div>;
  console.log(breed);
  const {
    name: catName,
    description,
    temperament,
    origin,
    life_span,
    adaptability,
    affection_level,
    child_friendly,
    grooming,
    intelligence,
    health_issues,
    social_needs,
    stranger_friendly,
    images = [],
  } = breed;

  const renderImages = () => {
    if (!images) return null;
    return images.map((image, index) => {
      return <Image key={index} src={image} />;
    });
  };

  return (
    <div className="breeds">
      <div className="breeds__about">
        <div
          className="breeds__about__image"
          style={{ backgroundImage: `url(${images[0]})` }}
        />
        <div className="breeds__about__text">
          <h2>{catName}</h2>
          <p>{description}</p>
          <Attribute label="Temperament">{temperament}</Attribute>
          <Attribute label="Origin">{origin}</Attribute>
          <Attribute label="Life span">{life_span} years</Attribute>
          <Attribute label="Adaptability">{adaptability}</Attribute>
          <Attribute label="Affection level">{affection_level}</Attribute>
          <Attribute label="Child friendly">{child_friendly}</Attribute>
          <Attribute label="Grooming">{grooming}</Attribute>
          <Attribute label="Intelligence">{intelligence}</Attribute>
          <Attribute label="Health issues">{health_issues}</Attribute>
          <Attribute label="Social needs">{social_needs}</Attribute>
          <Attribute label="Stranger friendly">{stranger_friendly}</Attribute>
        </div>
      </div>
      <section className="photos">
        <h2>Other photos</h2>
        <div className="photos__grid">{renderImages()}</div>
      </section>
    </div>
  );
}

export default Breeds;
