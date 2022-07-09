import Home from '../../pages/home/Home';

function App(): JSX.Element {
  return (
    <Home img={'img/the-grand-budapest-hotel-poster.jpg'}
      alt={'The Grand Budapest Hotel poster'}
      title={'The Grand Budapest Hotel'}
      genre={'Drama'}
      year={2014}
    />);
}

export default App;
