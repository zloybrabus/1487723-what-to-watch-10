import { CardFilm as CardFilmType } from '../../types/card-film';
import { useState } from 'react';
import CardReviews from '../card-review/card-review';
import CardDetails from '../card-details/card-details';
import CardOverview from '../card-overwiev/card-overwiev';
import { CardTabName } from '../../const';
import cn from 'classnames';

type CardOverviewProps = {
  card: CardFilmType
}

function CardTabs({ card }: CardOverviewProps): JSX.Element {
  const [activeTab, setActiveTab] = useState(CardTabName.Overview);

  const renderTab = (tab: CardTabName): JSX.Element => {
    switch (tab) {
      case CardTabName.Overview:
        return <CardOverview card={card}/>;
      case CardTabName.Details:
        return <CardDetails card={card}/>;
      case CardTabName.Reviews:
        return <CardReviews />;
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={cn('film-nav__item', activeTab === CardTabName.Overview && 'film-nav__item--active')}>
            <a onClick={() => setActiveTab(CardTabName.Overview)} className="film-nav__link" style={{cursor: 'pointer'}}>Overview</a>
          </li>
          <li className={cn('film-nav__item', activeTab === CardTabName.Details && 'film-nav__item--active')}>
            <a onClick={() => setActiveTab(CardTabName.Details)} className="film-nav__link" style={{cursor: 'pointer'}}>Details</a>
          </li>
          <li className={cn('film-nav__item', activeTab === CardTabName.Reviews && 'film-nav__item--active')}>
            <a onClick={() => setActiveTab(CardTabName.Reviews)} className="film-nav__link" style={{cursor: 'pointer'}}>Reviews</a>
          </li>
        </ul>
      </nav>
      {renderTab(activeTab)}
    </div>
  );
}

export default CardTabs;
