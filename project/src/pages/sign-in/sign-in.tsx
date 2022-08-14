import Footer from '../../components/footer/footer';
import cn from 'classnames';
import Header from '../../components/header/header';
import { useNavigate } from 'react-router-dom';
import React, { FormEvent, useRef, useEffect, useState } from 'react';
import { useAppDisptach, useAppSelector } from '../../hooks/index';
import { loginAction } from '../../store/api-action';
import { AppRoute, AuthorizationStatus } from '../../const';
import MessageError from '../../components/login-error/login-error';

function SignIn (): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDisptach();
  const error = useAppSelector((state) => state.error);
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const loginValid = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    const passValid = /(?=.*[0-9])(?=.*[a-z])/g;
    if (loginRef.current !== null && passwordRef.current !== null) {
      if(!loginValid.test(loginRef.current.value)) {
        return setIsValid(false);
      }
      if(!passValid.test(passwordRef.current.value)) {
        return setIsValid(false);
      }
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      }));
    }
  };

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Main);
    }
  }, [authStatus, navigate]);

  return (
    <div className="user-page">
      <Header />
      <div className="sign-in user-page__content">
      <form action="#" className="sign-in__htmlForm" onSubmit={handleSubmit}>
        <>
      {error && <MessageError />}
      {!isValid &&  
      <div className="sign-in__message">
      <p>
        We can’t recognize this email <br /> and password combination. Please
        try again.
      </p>
    </div>
      }
          <div className={cn('sign-in__field', {'sign-in__field sign-in__field--error': error})}>
            <div className="sign-in__field">
            <input
                ref={loginRef}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-email"
              >
                Email address
              </label>
            </div>
            <div className="sign-in__field">
            <input
                minLength={2}
                ref={passwordRef}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-password"
              >
                Password
              </label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
          </>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default SignIn;
