function Image({ src, caption }) {
  return (
    <div className="image-container">
      <div
        className="image-container__image"
        style={{ backgroundImage: `url(${src})` }}
      />
      <span className="image-container__caption">{caption}</span>
    </div>
  );
}

export default Image;
