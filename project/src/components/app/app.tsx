import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import Home from '../../pages/home/home';
import AddReview from '../../pages/add-review/add-review';
import Film from '../../pages/film/film';
import MyList from '../../pages/my-list/my-list';
// import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { isCheckedAuth } from '../../main';
import { useAppSelector } from '../../hooks';
import browserHistory from '../../browser-history';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import HistoryRouter from '../history-router/history-router';
import PrivateRoute from '../../components/private-route/private-route';
import { selectAuthorizationStatus } from '../../store/auth-slice/selectors';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  if (isCheckedAuth(authorizationStatus)) {
    return <LoadingScreen />;
  }
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <Home
              img="img/the-grand-budapest-hotel-poster.jpg"
              alt="The Grand Budapest Hotel poster"
              title="The Grand Budapest Hotel"
              genre="Drama"
              year={2014}
            />
          }
        />

        <Route path={AppRoute.SignIn} element={<SignIn />} />

        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute>
              <MyList />
            </PrivateRoute>
          }
        />

        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute>
              <AddReview />
            </PrivateRoute>
          }
        />

        <Route path={AppRoute.Film} element={<Film />} />

        {/* <Route path={AppRoute.Player} element={<Player cards={films} />} /> */}

        <Route path='*' element={<NotFoundScreen />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
