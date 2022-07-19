import React from 'react';
import { Link } from 'react-router-dom';
import styles from './not-found-screen.module.css';

function NotFoundScreen(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>404</h1>
      <br />
      <p className={styles.text}>PAGE NOT FOUND</p>
      <Link to="/" className={styles.link}>Вернуться на главную</Link>
    </div>
  );
}

export default NotFoundScreen;
