function Attribute({ type, label, children }) {
  const renderActive = (value, index) =>
    value >= index ? 'attribute__slot--active' : '';
  if (Number.isFinite(children)) {
    return (
      <div className="attribute--grid">
        <span className="attribute__label">{label}:</span>{' '}
        <div className="attribute__slots">
          <div className={`attribute__slot ${renderActive(children, 1)}`}></div>
          <div className={`attribute__slot ${renderActive(children, 2)}`}></div>
          <div className={`attribute__slot ${renderActive(children, 3)}`}></div>
          <div className={`attribute__slot ${renderActive(children, 4)}`}></div>
          <div className={`attribute__slot ${renderActive(children, 5)}`}></div>
        </div>
      </div>
    );
  }
  return (
    <div className="attribute">
      <span className="attribute__label">{label}:</span>{' '}
      <span className="attribute__text">{children}</span>
    </div>
  );
}

export default Attribute;
