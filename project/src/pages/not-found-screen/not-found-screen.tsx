import React from 'react';
import { Link } from 'react-router-dom';
import styles from './not-found-screen.module.css';

function NotFoundScreen(): JSX.Element {
  return (
    <div className={styles.err__wrapper}>
      <h1 className={styles.err__title}>404</h1>
      <br />
      <p className={styles.err__text}>PAGE NOT FOUND</p>
      <Link to="/" className={styles.err__link}>Вернуться на главную</Link>
    </div>
  );
}

export default NotFoundScreen;
