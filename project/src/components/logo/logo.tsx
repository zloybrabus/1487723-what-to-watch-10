import { Link } from 'react-router-dom';

function Logo(): JSX.Element {
  return (
    <Link to="/">
      <div className="logo">
        <a href="/#" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>
    </Link>
  );
}

export default Logo;
