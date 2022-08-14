import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDisptach, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-action';

function UserBlock():JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDisptach();
  const {authorizationStatus} = useAppSelector((state)=>state);
  const logOutHandler = () => {
    dispatch(logoutAction());
  };
  return(
    <ul className="user-block">
      <li className="user-block__item" onClick={()=>navigate('/mylist')}>
        <div className="user-block__avatar">
          <img src={authorizationStatus === AuthorizationStatus.Auth ? 'https://10.react.pages.academy/static/avatar/3.jpg' : 'img/avatar.jpg'} alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        {authorizationStatus === AuthorizationStatus.Auth ?
          <Link className="user-block__link" to={AppRoute.Main} onClick={logOutHandler}>Sign out</Link>
          : <Link className="user-block__link" to={AppRoute.SignIn}>Sign in</Link>}
      </li>
    </ul>
  );
}

export default UserBlock;
