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
}

export const TimeMin = (mins: number): string => {
  const hour = Math.trunc(mins / 60);
  const minut = mins % 60;
  return `${hour}hour ${minut}minut`;
};
