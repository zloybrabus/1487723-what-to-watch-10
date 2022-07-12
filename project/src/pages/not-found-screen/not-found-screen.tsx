import React, { Fragment } from "react";
import { Link } from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
   <Fragment>
       <h1>404</h1>
       <br />
       <p>PAGE NOT FOUND</p>
       <Link to="/">Вернуться на главную</Link>
   </Fragment>
  );
}

export default NotFoundScreen;
