function LoadingScreen(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head"></header>
      <div style={{ textAlign: 'center', marginBottom: 400, marginTop: 100 }}>
        <h1>Loading...</h1>
      </div>
    </div>
  );
}

export default LoadingScreen;
