import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FilmControls from '../../components/film-controls/film-controls';
import Catalog from '../../components/catalog/catalog';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { useAppSelector } from '../../hooks';
import { selectIsLoadingFilms } from '../../store/films-slice/selectors';

type HomeProps = {
  img: string;
  alt: string;
  title: string;
  genre: string;
  year: number;
};

function Home({ img, alt, title, genre, year }: HomeProps): JSX.Element {
  const isDataLoading = useAppSelector(selectIsLoadingFilms);
  if (isDataLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src="img/bg-the-grand-budapest-hotel.jpg"
            alt="The Grand Budapest Hotel"
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={img} alt={alt} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{year}</span>
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
