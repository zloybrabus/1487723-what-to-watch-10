import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { store } from './store';
import { checkAuthAction, fetchFilmsDataAction, fetchPromoAction, fetchFavoritesAction } from './store/api-action';

store.dispatch(fetchFilmsDataAction());
store.dispatch(checkAuthAction());
store.dispatch(fetchPromoAction());
store.dispatch(fetchFavoritesAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
