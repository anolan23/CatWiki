import { Link } from 'react-router-dom';

function TrendItem({ breed, index }) {
  const { image, description, name } = breed;
  return (
    <article className="trending__trend-item">
      <div
        className="trending__trend-item__image"
        style={{ backgroundImage: `url(${image.url})` }}
      />
      <div>
        <Link to={`/breeds/${name}`} className="trending__trend-item__title">
          <h2>{`${index + 1}. ${name}`}</h2>
        </Link>
        <p className="trending__trend-item__paragraph">{description}</p>
      </div>
    </article>
  );
}

export default TrendItem;
