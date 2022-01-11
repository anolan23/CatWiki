import Search from './Search';
function SearchModal({ show, close }) {
  if (!show) return null;
  document.body.classList.add('modal__body');
  return (
    <div className="modal">
      <div
        className="modal__close"
        onClick={() => {
          document.body.classList.remove('modal__body');
          close();
        }}
      >
        <div className="modal__close__icon">&#10005;</div>
      </div>
      <div className="modal__content">
        <Search show className="modal__search" />
      </div>
    </div>
  );
}
export default SearchModal;
