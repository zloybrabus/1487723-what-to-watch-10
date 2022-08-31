import Footer from '../../components/footer/footer';
import cn from 'classnames';
import Header from '../../components/header/header';
import { useNavigate } from 'react-router-dom';
import React, { FormEvent, useRef, useEffect, useState } from 'react';
import { useAppDisptach, useAppSelector } from '../../hooks/index';
import { loginAction } from '../../store/api-action';
import { AppRoute, AuthorizationStatus } from '../../const';
import { selectAuthorizationStatus, selectLoginError } from '../../store/auth-slice/selectors';

const EMAIL_REGEX = /[a-zA-Z0-9]+[.]?([a-zA-Z0-9]+)?[@][a-z]{3,9}[.][a-z]{2,5}/g;
const PASSWORD_REGEX = /(?=.*[0-9])(?=.*[a-z])/g;

function SignIn(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDisptach();
  const error = useAppSelector(selectLoginError);
  const authStatus = useAppSelector(selectAuthorizationStatus);
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(true);

  const validateForm = (email: string, password: string) => {
    const loginValidity = EMAIL_REGEX.test(email);
    const passwordValidity = PASSWORD_REGEX.test(password);

    setIsValid(loginValidity && passwordValidity);
    return loginValidity && passwordValidity;
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (loginRef.current !== null && passwordRef.current !== null) {
      const isFormValid = validateForm(
        loginRef.current.value,
        passwordRef.current.value
      );

      if (!isFormValid) {
        return;
      }

      dispatch(
        loginAction({
          login: loginRef.current.value,
          password: passwordRef.current.value,
        })
      );
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
          {!isValid ? (
            <div className="sign-in__message">
              <p>
                Wrong email adress
                <br /> or password combination. Password must cintains at
                least 1 number 1 char!
              </p>
            </div>
          ) : null}
          <div
            className={cn('sign-in__fields', {
              'sign-in__field sign-in__field--error': error,
            })}
          >
            <div
              className={cn('sign-in__field', {
                'sign-in__field sign-in__field--error': error,
              })}
            >
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
            <div
              className={cn('sign-in__field', {
                'sign-in__field sign-in__field--error': error,
              })}
            >
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
            <button className="sign-in__btn" type="submit">
                Sign in
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default SignIn;
