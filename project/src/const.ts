export enum AppRoute {
    Main = '/',
    SignIn = '/login',
    MyList = '/mylist',
    Film = '/films/:id',
    AddReview = '/films/:id/review',
    Player = '/player/:id',
}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}

export enum CardTabName {
    Overview = 'OVERVIEW',
    Details = 'DETAILS',
    Reviews = 'REVIEWS'
  }

export enum APIRoute {
    Films = '/films',
    Login = '/login',
    Logout = '/logout',
}

export const TimeMin = (mins: number): string => {
  const hour = Math.trunc(mins / 60);
  const minute = mins % 60;
  return `${hour}h ${minute}m`;
};

export const COUNT_RENDER_FILMS = 8;
