function Footer() {
  return (
    <footer className="footer">
      <svg className="footer__logo">
        <use href="/sprites.svg#cat" />
      </svg>
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
