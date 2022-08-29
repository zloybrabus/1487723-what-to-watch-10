import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FilmControls from '../../components/film-controls/film-controls';
import Catalog from '../../components/catalog/catalog';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { useAppSelector } from '../../hooks';
import { selectIsLoadingFilms, selectPromoFilms } from '../../store/films-slice/selectors';

function Home(): JSX.Element {
  const promoFilm = useAppSelector(selectPromoFilms);
  const isDataLoading = useAppSelector(selectIsLoadingFilms);
  if (isDataLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src={promoFilm?.backgroundImage}
            alt={promoFilm?.name}
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm?.posterImage} alt={promoFilm?.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm?.genre}</span>
                <span className="film-card__year">{promoFilm?.released}</span>
              </p>
              <FilmControls />

            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <Catalog />

        <Footer />
      </div>
    </>
  );
}

export default Home;
