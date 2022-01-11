import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav">
      <Link to="/">
        <svg className="nav__logo">
          <use href="/sprites.svg#cat" />
        </svg>
      </Link>
    </nav>
  );
}
export default Nav;
