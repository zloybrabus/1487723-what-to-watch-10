import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDisptach, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-action';
import { selectAuthorizationStatus, selectAuthorizationAvatar } from '../../store/auth-slice/selectors';

function UserBlock():JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDisptach();
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const avatar = useAppSelector(selectAuthorizationAvatar)

  const avatarUrl = authorizationStatus === AuthorizationStatus.Auth ? avatar : '';

  const handlLogOut = () => {
    dispatch(logoutAction());
  };

  return(
    <ul className="user-block">
      <li className="user-block__item" onClick={() => navigate('/mylist')}>
        <div className="user-block__avatar">
          <img
            src={avatarUrl}
            alt=''
            width="63" 
            height="63" 
          />
        </div>
      </li>
      <li className="user-block__item">
        {authorizationStatus === AuthorizationStatus.Auth ?
          <Link className="user-block__link" to={AppRoute.Main} onClick={handlLogOut}>Sign out</Link>
          : <Link className="user-block__link" to={AppRoute.SignIn}>Sign in</Link>}
      </li>
    </ul>
  );
}

export default UserBlock;
