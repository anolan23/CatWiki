function Image({ src, caption }) {
  return (
    <div className="image-container">
      <img className="image__container__image" src={src} alt="" />
      <span className="image__container__caption">{caption}</span>
    </div>
  );
}

export default Image;
