function Image({ src, caption, onClick }) {
  return (
    <div className="image-container" onClick={onClick}>
      <div
        className="image-container__image"
        style={{ backgroundImage: `url(${src})` }}
      />
      {caption && <span className="image-container__caption">{caption}</span>}
    </div>
  );
}

export default Image;
