import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Home from '../../pages/home/home';
import AddReview from '../../pages/add-review/add-review';
import Film from '../../pages/film/film';
import MyList from '../../pages/my-list/my-list';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../../components/private-route/private-route';
import { CardFilm as CardFilmType } from '../../types/card-film';

type AppProps = {
  cards: CardFilmType[],
};

function App({ cards }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
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
              cards={cards}
            />
          }
        />

        <Route path={AppRoute.SignIn} element={<SignIn />} />

        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyList />
            </PrivateRoute>
          }
        />

        <Route path={AppRoute.Film} element={<Film cards={cards} />} />

        <Route path={AppRoute.AddReview} element={<AddReview />} />

        <Route path={AppRoute.Player} element={<Player />} />

        <Route path='*' element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
