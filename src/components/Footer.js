import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer className="footer">
      <Link to="/">
        <svg className="footer__logo">
          <use href="/sprites.svg#cat" />
        </svg>
      </Link>
      <div className="footer__text">
        <span>
          &copy; created by{' '}
          <span className="footer__text__username">anolan23</span> -
          devChallenge.io 2021
        </span>
      </div>
    </footer>
  );
}
export default Footer;
